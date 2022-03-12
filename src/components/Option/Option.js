import React from "react";
import "./style.css";

const Option = ({op, setOp}) => {

    if(op == 0)
        return(
        <div className="op-div">
            <button className="op-button" onClick={() => setOp(1)}>
                <span className="op-arrow"> {">"} </span>Instruções
            </button>
            <button className="op-button" onClick={() => setOp(2)}>
                <span className="op-arrow"> {">"} </span>Funcionamento
            </button>
        </div>
        )
    else if(op == 1)
        return(
            <div className="op-div">
            <button className="op-button" onClick={() => setOp(0)}>
                <span className="op-arrow"> {">"} </span>Criptografar/Descriptografar
            </button>
            <button className="op-button" onClick={() => setOp(2)}>
                <span className="op-arrow"> {">"} </span>Funcionamento
            </button>
            </div>
        )
    else 
        return(
            <div className="op-div">
            <button className="op-button" onClick={() => setOp(0)}>
                <span className="op-arrow"> {">"} </span>Criptografar/Descriptografar
            </button>
            <button className="op-button" onClick={() => setOp(1)}>
                <span className="op-arrow"> {">"} </span>Instruções
            </button>
            </div>
        )
};

export default Option;