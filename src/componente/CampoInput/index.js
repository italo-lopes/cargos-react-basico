import "./CampoInput.css"
//import { useState } from "react"
// adicionar style no campo 

const CampoInput = ({
    type = 'text',
    placeholder,
    valor,
    obrigatorio=false,   
    label, 
    aoAlterar
}) =>{
    //recebe um obj 
    // pra colocar um obj dentro do jsx {} 
    // e foi chamado pelo <CampoInput label="Nome"/>
    // props = propriedade
    // template string 
    // concatenização - interpolação 

// ===================================================================== 
    //let valor='' -> muda o valor mas n renderiza o componete
    // mudança de estado pela função nativa do react 
/*
    const [valor, setValor] = useState('ITALO LOPES')
    // ('') pq tem como padrao vazio seu campo
    // useState chamado de gancho ou HOOK 

    const aoDigitar = (e)=>{
        // renderizar com o novo valor 
        setValor(e.target.value) // map do dom
        // função do react pra alterar o valor e renderizar o componete
        // o valor so é substituido no final quando a renderizalçao acaba 
    }

    const aoSair = ()=>{
        //valor = e.target.value
        console.log(valor)
        // função do react pra alterar o valor e renderizar o componete
    }
*/
// CICLO DE o value é alterado é atribuido em valor entao o componente é renderizado com a alterção 
// o valor e e.target.value tem o msm valor e renderizado
// SEM ELE O VALOR MUDA MAS O VALue NÃO ENTAO O CICLO DE VIDA MORRE 
// USADO QUANDO EU QUERO PRE 
// DETERMINAR UM VALOR E MUDAR SEU ESTADO 
// AI TENHO QUE ALTERAR O valor pelo setValor

// logo se eu precisar mudar o value é uso o useState pra controle de estado

// lembrar que sem ele so renderizar uma vez msm com a mudaçã no valor da variavel.
// ======================= acima é o funcionamento unico esse codigo precisa no form==============================================
// trantando ele de forma do campo generico e pelas prpos


// ========= props do com em controle de estado de estado


const aoDigitar = (e)=>{
     
     aoAlterar(e.target.value)
       // props.children.aoAlteriar(e.target.value)
}

const aoSair = ()=>{
    //valor = e.target.value
    console.log(valor)
    // função do react pra alterar o valor e renderizar o componete
}

const concaternar = ` ${placeholder} ... `
    //console.log(props) - template string pra determinar o css do type
    return (
        <div className={` campo campo-${type}`}>
            <label>
                {label}
            </label>
            <input 
                type={type}
                value={valor} // caso chegue um valor predefinido e pode ser alterado            
                onChange={aoDigitar}
                onBlur={aoSair}
                required={obrigatorio}
                placeholder={concaternar}
            />
            {/* <span  data-campo = {props.erro} style = {{display: 'none'}} > ERRO</span> */}
            {/* {{marginRight: spacing + 'em'}} */}
        </div>
    );
}
export default CampoInput

//Obs : o jsx nao aceita template string 
// é necesario construir a variavel fora do contexto 
// jsx e adicionar a variavel com {}
// {` ${props.placeholder} ... `}

//required={props.obrigatorio} questao de validaçao

// onChange={aoDigitar}
// uma escutador de eventos a cada mudança - ele chama uma função
// value={props.valor}