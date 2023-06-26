import './Formulario.css';
import CampoInput from '../CampoInput';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';


const Formulario = (props) => {
    console.log(props)
    // colocar um array 
 /*
    const itensSelect = [
        "Departamento 1",
        "Departamento 2",
        "Departamento 3",
        "Departamento 4",
        "Departamento 5"
    ]
*/


    //const [valor, setValor] = 
    const [campo,setCampo] = useState('')
    const [cargo,setCargo] = useState('')
    const [imagem,setImagem] = useState('')
    const [lista,setLista] = useState('')

    const aoSalvar = (e) =>{
        e.preventDefault();
        /*
        console.log(e);
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        console.log(e.target[2].value);
        console.log("Form submit =>" ,campo,cargo,imagem,lista)
        */
       props.aoColaboradorCadastrado({
                campo,
                cargo,
                imagem,
                lista
       })
       setCampo('')
       setCargo('')
       setImagem('')
       setLista('')


       // json é contruido passando (obj) = {"campo": campo, "cargo" : cargo ,"imagem": imagem , "lista":lista}    
    }
    
    const aoInvalidar = (e) =>{
        console.log(e.target);
    }
    //const [valor, setValor] = 
    return(
        <section className="formulario">
            <form onSubmit={aoSalvar} onInvalid = {aoInvalidar}> 
            {/* </form><form onSubmit={()=>aoSalvar()}> */}
                <h2>Prencha os dados com as informação dos campeos</h2>
                <ListaSuspensa 
                    obrigatorio = {true} 
                    label="Time" 
                    itens={props.timeNome}  
                    erro = "item" 
                    valor = {lista}
                    aoAlterar={(value)=>{
                        setLista(value)
                    }
                }
                />
                <CampoInput 
                    obrigatorio = {true} 
                    label="Nome" 
                    placeholder="Digite o valor do campo"  
                    erro = "campo"
                    valor= {campo}
                    aoAlterar={(value)=>{
                        setCampo(value)
                        }
                    }
                />
                <CampoInput 
                    obrigatorio = {true} 
                    label="Cargo" 
                    placeholder="Digite o cargo" 
                    erro = "cargo" 
                    valor= {cargo}
                    aoAlterar={(value)=>{
                        setCargo(value)
                        }
                    }
                 />
                <CampoInput 
                    valor = {imagem}  
                    label="Imagem" 
                    placeholder="Informe o endereço de Imagem" 
                    erro = "imagem" 
                    aoAlterar={(value)=>{
                        setImagem(value)
                    }// mandando uma funcao como parametro
                    }//uma funcao anima que passa como parametro o valor
                />
                    

                
                <Botao valor = "card">
                        Criar Card
                </Botao>
            </form> 
        </section>
    );
}

/*
    const limpar = (e) =>{

        console.log(e.target);
        const span = e.target.parentNode.querySelector('[data-campo]')
        console.log(span)
        if(!e.target.value){
            console.log(e.target.value)
            span.style.display = 'block';
            console.log(span.dataset)
            span.innerHTML = `${span.dataset.campo} não pode ser vazio`
            console.warn("No value")
        }else{
            span.style.display = 'none';
        }
        console.log(e.target.value);
    }
*/

export default Formulario
// toda JSX consegue receber como parametro {} é indicação de variavel 
// o map e alguns poucas função sao interpretada pelo jsx


// um botao dentro de um formulario por padrao submit em um formulario

// se dentro de um componete                 <Botao> qualquer coisa </Botao>
// eu posso acessar o valor desse componente na sua renderização pelo props.children

// comportamento padrao do submit - previnir o comportamento padrao - um eveneto que aconteceria

// o return(jsx) -> responsavel por escutar os eventos e passar parametros personalizados
// obrigatoriedade ->required
// placeholder -> 
// item do select -> que vai renderizar o option com map
// e criação de camponentes pai e filhos ate o jsx
// componsição e contrução de componentes criados