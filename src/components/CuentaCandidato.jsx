/* eslint-disable react/prop-types */
import { useState } from "react";
import "./CuentaCandidato.css";

function CuentaCandidato({ candidato }) {
    const [count, setCount] = useState(0);

    function handleAdd() {
        setCount(count + 1);
    }

    function handleSubtract() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div className="cuenta">
            <div className="candidato">
                <p>{candidato}</p>
            </div>
            <div className="puntaje">
                <p>{count}</p>
            </div>
            <div className="botones">
                <button onClick={handleAdd}>+</button>
                <button onClick={handleSubtract}>-</button>
            </div>
        </div>
    );
}

export default CuentaCandidato;
