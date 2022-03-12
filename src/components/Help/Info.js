import React from 'react';
import './style.css';
import Option from '../Option/Option';
import Equation from './Svg/Equation';

const Info = ({op, setOp}) => {
  
    return(
        <div className='container'>
            <p className='higher sub'>Funcionamento</p>
            <p>
            Criptografia são técnicas desenvolvidas para proteger informações daqueles que não 
            deveriam ter acesso à ela. Existem várias cifras e técnicas de encriptação, e o CriptAlgeb Terminal
            utiliza princípios da álgebra linear para realizar este processo. 
            </p>
            <p>
            Para codificar a mensagem é necessário que usemos uma transformação linear que seja 
            isomórfica, ou seja, bijetora, pois depois obteremos a tradução da mensagem aplicando a transformação inversa.
            Então, sejam:
            </p>
            
            <ul>
                <li>
                   A transformação linear <Equation n="1"/>
                </li>
                <li>
                    As chaves segredo <Equation n="2"/>
                </li>
            </ul>


            <p>
                <Equation n="3"/> é um operador linear, logo <Equation n="4"/> e <Equation n="3"/> pode ser invertível.
                Considerando a base canônica <Equation n="5"/>, obtenhamos a matriz associada de <Equation n="3"/>:
            </p>

            <p className="center">
            <Equation n="6"/>
            </p>

            <p>Temos que: </p>
            <p className="center">
            <Equation n="7"/>
            </p>

            <p>Porém <Equation n="8"/> é invertível.</p>

            <p>
                Utilizando a tabela ASCII, iremos converter os caracteres da mensagem "Segredos" em seus respectivos códigos.
            </p>

            <table className="ascii-table">
            <tbody>
            <tr>
            <td>Caracteres</td>
            <td>S</td>
            <td>e</td>
            <td>g</td>
            <td>r</td>
            <td>e</td>
            <td>d</td>
            <td>o</td>
            <td>s</td>
            </tr>
            <tr>
                <td>Códgios</td>
                <td>83</td>
                <td>101</td>
                <td>103</td>
                <td>114</td>
                <td>101</td>
                <td>100</td>
                <td>111</td>
                <td>115</td>
            </tr>
            </tbody>
        </table>

        <p>
            Aplicando a transformação linear nos códigos obtidos em pares: 
        </p>

        <p className='center'><Equation n="9"/></p>

        <p>
        A mensagem agora está escondida nos pares obtidos, que estão em função das chaves segredo escolhidas.
        Em mensagens com número total de caracteres ímpar, adicionamos um símbolo qualquer no último valor do último par
        e o desconsideramos.
        </p>

        <p>
            Para o receptor conseguir traduzir a mensagem é necessário utilizar a transformação linear inversa e as mesmas chaves
            usadas para encriptar a mensagem, obtendo novamente os códigos da tabela ASCII. 
        </p>

        <p>
            Seja <Equation n="10"/> a inversa de <Equation n="3"/>, tal que <Equation n="11"/>.
        </p>

        <p> 
            Desta forma, um bisbilhoteiro terá que procurar a chave correta entre as 81 possibilidades para que ele possa
            decifrar a mensagem, e poderíamos aumentar o número de combinações de chaves possíveis adicionando mais chaves ou crescendo os seus valores máximos. 
        </p>


                <Option op={op} setOp={setOp} />
        
        </div>
    )
};

export default Info;