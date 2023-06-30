import './Formulario.css';
import CampoInput from '../CampoInput';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';
//import {v4 as uuidv4} from 'uuid';


const Formulario = (props) => {
    console.log("a nova é",props)
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
    //closures
    const [campo,setCampo] = useState('')
    const [cargo,setCargo] = useState('')
    const [imagem,setImagem] = useState('')
    const [lista,setLista] = useState('')
    const [novoDepartamento,setNovoDepartamento] = useState('')
    const [cor,setCorDepartamento] = useState('#000000')

    const aoSalvar = (e) =>{
        e.preventDefault();
        /*
        console.log(e);
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        console.log(e.target[2].value);
        console.log("Form submit =>" ,campo,cargo,imagem,lista)
        */
       //const id  = uuidv4();
       props.aoColaboradorCadastrado({
                //id,
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


    const aoSalvarDepartamento = (e) =>{
        e.preventDefault();
        //const corSecundaria = cor
        props.cadastrarDepartamento({
            nome:novoDepartamento,
            corPrimaria:cor,
            corSecundario:cor
        })
        setNovoDepartamento('')
        setCorDepartamento('#000000')
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
                    itensTodos={props.timeCompleto}  
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
            <form onSubmit={aoSalvarDepartamento} onInvalid = {aoInvalidar}> 
            {/* </form><form onSubmit={()=>aoSalvar()}> */}
                <h2>Prencha os dados do novo Departamento</h2>
                <CampoInput 
                    obrigatorio 
                    label="Departamento" 
                    placeholder="Digite o nome do Departamento"  
                    erro = "campo"
                    valor= {novoDepartamento}
                    aoAlterar={(value)=>{
                        setNovoDepartamento(value)
                        }
                    }
                />
                <CampoInput 
                    obrigatorio
                    type='color'
                    label="Cor" 
                    placeholder="Digite a cor" 
                    erro = "cargo" 
                    valor= {cor}
                    aoAlterar={(value)=>{
                        setCorDepartamento(value)
                        }
                    }
                 />
                <Botao valor = "card">
                        Adicionar Departamento
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