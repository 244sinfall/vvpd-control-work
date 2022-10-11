
export interface Equation {
    solve: () => number | number[]
}

/**
 * Уравнение вида ax + b = 0
 */
export class SimpleEquation implements Equation {
    private readonly _a: number;
    private readonly _b: number
    constructor(a: number, b: number) {
        this._a = a
        this._b = b
    }
    solve(): number {
        const negativeKnownNumber = -this._b
        return negativeKnownNumber / this._a
    }
}

/**
 * Уравнение вида ax^2 + bx + d = 0
 */
export class QuadraticEquation implements Equation {
    private readonly _a: number;
    private readonly _b: number;
    private readonly _d: number;
    constructor(a: number, b: number, d: number) {
        this._a = a
        this._b = b
        this._d = d
    }
    solve(): number | number[] {
        const discriminant = (this._b ** 2) - (4 * this._a * this._d)
        if(discriminant < 0) return NaN
        if(discriminant === 0) return -(this._b / (2 * this._a))
        const x1 = (-this._b + Math.sqrt(discriminant)) / (2 * this._a)
        const x2 = (-this._b - Math.sqrt(discriminant)) / (2 * this._a)
        return [x1, x2].sort()
    }
}

/**
 * Уравнение вида ax^3 + bx^2 + cx + d = 0
 */
export class CubicEquation implements Equation {
    private readonly _a: number;
    private readonly _b: number;
    private readonly _c: number;
    private readonly _d: number;
    constructor(a: number, b: number, c: number, d: number) {
        this._a = a
        this._b = b
        this._c = c
        this._d = d
    }
    private getCubeRoot(x: number) {
        const y = Math.pow(Math.abs(x), 1/3);
        return x < 0 ? -y : y;
    }
    solve(): number[] {
        if (Math.abs(this._a) < 1e-8) {
            let tempA = this._b
            let tempB = this._c
            let tempC = this._d
            if (Math.abs(tempA) < 1e-8) {
                tempA = tempB; tempB = tempC;
                if (Math.abs(tempA) < 1e-8)
                    return [];
                return [-tempB/tempA];
            }

            const discriminant = tempB**2 - 4*tempA*tempC;
            if (Math.abs(discriminant) < 1e-8)
                return [-tempB/(2*tempA)];
            else if (discriminant > 0)
                return [(-tempB+Math.sqrt(discriminant))/(2*tempA), (-tempB-Math.sqrt(discriminant))/(2*tempA)];
            return [];
        }
        const p = (3*this._a*this._c - (this._b**2))/(3*(this._a**2));
        const q = (2*(this._b**3) - 9*this._a*this._b*this._c + 27*(this._a**2)*this._d)/(27*(this._a**2));
        let roots;

        if (Math.abs(p) < 1e-8) {
            roots = [this.getCubeRoot(-q)];
        } else if (Math.abs(q) < 1e-8) {
            roots = [0].concat(p < 0 ? [Math.sqrt(-p), -Math.sqrt(-p)] : []);
        } else {
            const discriminant = (q**2)/4 + (p**3)/27;
            if (Math.abs(discriminant) < 1e-8) {
                roots = [-1.5*q/p, 3*q/p];
            } else if (discriminant > 0) {
                const u = this.getCubeRoot(-q/2 - Math.sqrt(discriminant));
                roots = [u - p/(3*u)];
            } else {
                const u = 2*Math.sqrt(-p/3);
                const t = Math.acos(3*q/p/u)/3;
                const k = 2*Math.PI/3;
                roots = [u*Math.cos(t), u*Math.cos(t-k), u*Math.cos(t-2*k)];
            }
        }
        return roots.map(item => Number((item - this._b / (3 * this._a)).toFixed(2))).sort()
    }
}