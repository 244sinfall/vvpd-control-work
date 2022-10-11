import React from 'react';
import Header from "../components/header";
import './style.css'
import LinearSolver from "../containers/linear-solver";
import QuadraticSolver from "../containers/quadratic-solver";
import CubicSolver from "../containers/cubic-solver";
import ProgressionSolver from "../containers/progression";
import {ArithmeticProgression, GeometricProgression} from "../model/progressions";
import LayoutGrid from "../components/layouts/layout-grid";

const App = () => {
    return (
        <>
            <Header/>
            <LayoutGrid>
                <LinearSolver/>
                <QuadraticSolver/>
                <CubicSolver/>
                <ProgressionSolver solver={new ArithmeticProgression(0, 0)} title="Решение арифметических прогрессий"/>
                <ProgressionSolver solver={new GeometricProgression(0, 0)} title="Решение геометрических прогрессий"/>
            </LayoutGrid>
        </>
    );
};

export default React.memo(App);