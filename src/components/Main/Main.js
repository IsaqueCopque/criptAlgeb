import React from "react";
import "./style.css";
import Option from '../Option/Option';

const Main = ({op, setOp}) => {

    const [key1, setKey1] = React.useState(1);
    const [key2, setKey2] = React.useState(1);
    const [encryptOp, setEncryptOp] = React.useState(true);

    //Transformações lineares
    const encryptFunction = (x, y) => {
        var codes =  [(7*key1*x)-y, (2*x)+(key2*y)];
        return codes;
    };
    const decryptFunction = (z, w) => {
        var codes  = 
        [
           String.fromCharCode( (w+(z*key2)) / (2+(7*key1*key2)) ),
           String.fromCharCode( ((7*key1*w)-(2*z)) / (2+(7*key1*key2)) )
        ]
        return codes;
    };
    //-----------------------

    //função encriptadora/desencriptadora
    const crypter = () => {
        let message = document.getElementById("messageInpt").value;
        if(message.length){
            var trlMessage = "";
             var codes;

            if(encryptOp){//encriptar
                if(message.length %2 !== 0){
                    for(let i = 0; i < message.length-1; i+=2){
                        codes = encryptFunction(message[i].charCodeAt(),message[i+1].charCodeAt());
                        trlMessage += String(codes[0]);
                        trlMessage += " ";
                        trlMessage += String(codes[1]);
                        trlMessage += " ";
                    }
                    codes = encryptFunction(message[message.length-1].charCodeAt(),32);
                    trlMessage += String(codes[0]);
                    trlMessage += " ";
                    trlMessage += String(codes[1]);
                    trlMessage += " ";
                }
                else{
                    for(let i = 0; i < message.length; i+=2){
                        codes = encryptFunction(message[i].charCodeAt(),message[i+1].charCodeAt());
                        trlMessage += String(codes[0]);
                        trlMessage += " ";
                        trlMessage += String(codes[1]);
                        trlMessage += " ";
                    }
                }
            }
            else{//desencriptar
                //msg é um array contendo os números da mensagem
                let msg = message.split(" ");
                for(let i = 0; i < msg.length; i++) //cada string  número é passada para inteiro
                    msg[i] = parseInt(msg[i]);
    
                //se o vetor é impar, adicione o caractere inútil 32 no final
                if(msg.length %2 !== 0){ 
                    for(let i = 0; i < msg.length-1; i+=2){
                        codes = decryptFunction(msg[i],msg[i+1]);
                        trlMessage += String(codes[0]);
                        trlMessage += String(codes[1]);
                    }
                    codes = decryptFunction(message[message.length-1],32);
                    trlMessage += String(codes[0]);
                }
                else
                    for(let i = 0; i < message.length; i+=2){
                        codes = decryptFunction(message[i],message[i+1]);
                        trlMessage += String(codes[0]);
                        trlMessage += String(codes[1]);
                    }
            }
            //coloca a mensagem em tela
            document.getElementById('messageOutpt').value = trlMessage;
        }
        else    
            document.getElementById('messageOutpt').value = "";
    }
    //-----------------------         

    React.useEffect(()=>{
        document.getElementsByClassName("op-form")[0].addEventListener("change",()=>{
            setEncryptOp(document.getElementById("cryp-op").checked);
            if(!document.getElementById("cryp-op").checked)
                document.getElementsByClassName("encrypt-btn")[0].innerHTML="Desencriptar";
            else
                document.getElementsByClassName("encrypt-btn")[0].innerHTML="Criptografar";
            if(document.getElementById("messageOutpt").value){
                document.getElementById("messageInpt").value = document.getElementById("messageOutpt").value;
                document.getElementById("messageOutpt").value = "";
            }
        });
    },[]);

    React.useEffect(()=> {
        const keyForm = document.getElementById('key-form');

        keyForm.addEventListener("change",() => {
            if(keyForm.children[0].value < 1 || keyForm.children[0].value > 9)//impede valores fora do intervalo
                keyForm.children[0].value = key1;
            else
                setKey1(keyForm.children[0].value);
            if(keyForm.children[1].value < 1 || keyForm.children[1].value > 9)
                keyForm.children[1].value = key2;
            else
                setKey2(keyForm.children[1].value);          
        });

    },[key1,key2])

    return(
        <div className="container">

            <div className="main">

            <div className="options">

            <div className='key-boxes'>
                <p>Chaves</p>
                <form id='key-form'>
                    <input type="number" min="1" max="9" defaultValue={1} />
                    <input type="number" min="1" max="9" defaultValue={1} />
                </form>
            </div>

            <form className="op-form">

                <label className="radio-button">
                <span>Criptografar</span>
                <input id="cryp-op" type="radio" defaultChecked name="cripop" />
                <span className="checkmark"></span>
                </label>
                
                <label className="radio-button">
                <span>Descriptografar</span>
                <input type="radio" name="cripop" />
                <span className="checkmark"></span>
                </label>

            </form>

            </div>
            
            <div className="process-area">

                <div className="input-div">
                    <textarea id='messageInpt' 
                    placeholder='Escreva aqui sua mensagem...'
                    rows="5"></textarea>
                    <span className="clear-btn" onClick={()=>document.getElementById('messageInpt').value=""}>
                        <span style={{transform: "translate(15px, 0px) rotate(45deg)" }}></span>
                        <span style={{transform: "translate(15px, 0px) rotate(-45deg)" }}></span>
                    </span>
                </div>

                <button className="encrypt-btn" onClick={()=>crypter()}>
                    Criptografar
                </button>

                <textarea id='messageOutpt'
                readOnly rows="5"></textarea>

            </div>

            </div>

            <Option op={op} setOp={setOp} />
        </div>
    );
};

export default Main;