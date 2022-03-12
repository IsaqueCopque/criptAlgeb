import React from 'react';
import "./style.css"
import Option from '../Option/Option';

const Help = ({op, setOp}) => {
    return(
        <div className='content'>

        <p><span className="sub higher">Instruções</span></p>

        <p className='higher'>Bem vindo ao Criptalgeb.</p>

        <p>
            O CriptAlgeb Terminal recebe como entrada uma mensagem e duas chaves segredo, retornando em sua saída
            uma mensagem criptografada.
        </p>
        <p className="sub">
            Para criptografar:
        </p>

        <ol>
            <li><p>Escolha dois valores entre 1 e 9 para as chaves segredo.</p></li>
            <li><p>Marque a opção <i>Criptografar</i>.</p></li>
            <li><p>Escreva a sua mensagem na caixa superior.</p></li>
            <li><p>A mensagem criptografada é retornada na caixa inferior.</p></li>
        </ol>

        <p className="sub">
            <em>Para descriptografar:</em>
        </p>

            <ol>
                <li><p>Selecione as chaves segredo usadas para criptografar a mensagem.</p></li>
                <li><p>Marque a opção <i>Descriptografar</i>.</p></li>
                <li><p>Escreva a mensagem que foi criptografada na caixa superior.</p></li>
                <li><p>A mensagem descriptografada é retornada na caixa inferior.</p></li>
            </ol>

            <Option op={op} setOp={setOp} />

        </div>
    );
};

export default Help;