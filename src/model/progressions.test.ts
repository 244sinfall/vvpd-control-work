import {ArithmeticProgression, GeometricProgression} from "./progressions";

test('арифметическая прогрессия', () => {
    const progression = new ArithmeticProgression(2, 20)
    expect(progression.sum(10)).toBe(920)
})

test('арифметическая прогрессия 2', () => {
    const progression = new ArithmeticProgression(65, -32)
    expect(progression.sum(16)).toBe(-2800)
})

test('арифметическая прогрессия 3', () => {
    const progression = new ArithmeticProgression(65, -32)
    expect(progression.find(377)).toBe(-11967)
})

test('арифметическая прогрессия 4', () => {
    const progression = new ArithmeticProgression(2, 20)
    expect(progression.find(420)).toBe(8382)
})

test('геометрическая прогрессия', () => {
    const progression = new GeometricProgression(2, 20)
    expect(progression.sum(10)).toBe(1077894736842)
})

test('геометрическая прогрессия 2', () => {
    const progression = new GeometricProgression(40, -6)
    expect(progression.sum(16)).toBe(-16120628042600)
})

test('геометрическая прогрессия 3', () => {
    const progression = new GeometricProgression(65, -32)
    expect(progression.find(5)).toBe(68157440)
})

test('геометрическая прогрессия 4', () => {
    const progression = new GeometricProgression(2, 20)
    expect(progression.find(8)).toBe(2560000000)
})