import {CubicEquation, QuadraticEquation, SimpleEquation} from "./equations";

test('линейное уравнение', () => {
    const equation = new SimpleEquation(1, -48)
    expect(equation.solve()).toBe(48)
})

test('линейное уравнение 2', () => {
    const equation = new SimpleEquation(2, -38)
    expect(equation.solve()).toBe(19)
})

test('линейное уравнение 3', () => {
    const equation = new SimpleEquation(4, -72)
    expect(equation.solve()).toBe(18)
})

test('квадратное уравнение', () => {
    const equation = new QuadraticEquation(1, -13, 12)
    expect(equation.solve()).toStrictEqual([1, 12])
})

test('квадратное уравнение 2', () => {
    const equation = new QuadraticEquation(1, -7, 12)
    expect(equation.solve()).toStrictEqual([3, 4])
})

test('квадратное уравнение 3', () => {
    const equation = new QuadraticEquation(1, 12, 36)
    expect(equation.solve()).toStrictEqual(-6)
})

test('кубическое уравнение', () => {
    const equation = new CubicEquation(8, -36, 54, -27)
    expect(equation.solve()).toStrictEqual([1.5])
})

test('кубическое уравнение 2', () => {
    const equation = new CubicEquation(8, 12, 6, 1)
    expect(equation.solve()).toStrictEqual([-0.5])
})

test('кубическое уравнение 3', () => {
    const equation = new CubicEquation(1, -2, -16, 32)
    expect(equation.solve()).toStrictEqual([-4, 2, 4])
})
