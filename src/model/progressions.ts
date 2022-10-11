
export interface Progression {
    find: (n: number) => number
    sum: (until: number) => number
    setFirst: (n: number) => void
    setStep: (n: number) => void
}

export class ArithmeticProgression implements Progression {
    private _startValue: number
    private _difference: number
    constructor(startValue: number, difference: number) {
        this._startValue = startValue
        this._difference = difference
    }
    find(n: number): number {
        return this._startValue + (this._difference * (n - 1))
    }
    sum(until: number): number {
        return (((this._startValue * 2) + (this._difference * (until - 1))) / 2) * until
    }

    setFirst(n: number): void {
        if(!isNaN(n)) this._startValue = n
    }

    setStep(n: number): void {
        if(!isNaN(n)) this._difference = n
    }
}

export class GeometricProgression implements Progression {
    private _denominator: number
    private _startValue: number
    constructor(startValue: number, denominator: number) {
        this._startValue = startValue
        this._denominator = denominator
    }
    find(n: number): number {
        return this._startValue * (this._denominator ** (n - 1))
    }

    sum(until: number): number {
        return (this._startValue * ((this._denominator ** until) - 1)) / (this._denominator - 1)
    }

    setFirst(n: number): void {
        if(!isNaN(n)) this._startValue = n
    }

    setStep(n: number): void {
        if(!isNaN(n)) this._denominator = n
    }

}