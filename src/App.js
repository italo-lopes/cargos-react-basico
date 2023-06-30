import Banner from "./componente/Banner";
import Formulario from "./componente/Formulario";
import CardTime from "./componente/CardTime";
import { useState } from "react";
import Rodape from "./componente/Rodape";
import { v4 as uuidv4 } from "uuid";
/*
evitando duplicidade de componete com a criação do index pra cada componente
import {useEffect} from 'react'
import React, { useState, useEffect } from 'react';
*/

// é um componente -(um trabalho com DOM DIRETAMENTO NO JS )
// function App(){} - É UM COMPONENTE
// CRIAR COMPONENTE
// 1 PASSO - CRIAR IGUAL HTML DE CIMA PRA BAIXO
// 2 Passo - Criar pasta dentro de src/componentes/banner
// 3 Passo - Construir um novo componente - function NovoCompononete {} export default NovoComponente;
// 4 Passo - Criar em public uma pasta chamda imagens
// 5 passo - Criar um jsx e chamar esse componente pelo import pra add no novo componente
// 6 Passo - Criar o css do componenete adicionado
// 7 Passo - Passar como parametro para a constante que gera o componente
// 8 Passo - Criar um componente pai e colocar seus filhos na sua construção
// 9 Passo - Criar os escutador de eventos ex: onSubmit={funcção callback}
// 10 Passo - Criar o Controle de estado (rederização)  com useState -> import { useState } from 'react';
// 11 Passo - Salvar ainda os dados dos formulario, quando o submit for ativado (escutado)
// 12 Passo - Salvar com useState como um obj {chave:valor ,chave :valor}
// 13 Passo - Usar o useEffect outro Hook gancho do react pra acessar o valor atualizado imetiatamente antes da renderização
// 14 Passo  - Usar o [...arrayClone,valorNovo] spread no setState- array clone + item
// 15 Passo - Contruir Componentes usando map que tem as seguintes caracteristica (key,props, componete)
// 16 Passo - OBS: É normal o style do componete ser inline unsado obj style={{propriedadePro:props.valor}}
// 17 Passo - Refatoração (ver onde tem codigo duplicado)
// 18 Passo - Opcional - transformar com map um obj de varios item no obj de um item so
// 19 Passo - Elevar o estado e ir de acordo com as necessidades e mudaçanca de informação
// 20 Passo - Tentar seguir sempre o baby steps (passos de beber) primeiro a parte visual e depois o comportamento
// 21 Passo  - Dinamico - o formulario adiciona um novo elemento no estado o estado re-refatora todos os elemento pelo map onde esse novo elemento e ligado
// 22 Passo -  Entender a que evento ou comportamento um statefull esta acontecendo e o q ele tta mundando nos componentes
// 23 Passo -  Testando cod- 1. Uso do Debugger 2. Fragment nativo do React->
// 24 Passso - Criar o features novas (ex: deletar)
// 25 Passo -  Deletar conteudo (componete contruido de cima pra baixo) - função (evento de baixo pra cima passando a props como funçao)
// 26 Passo -  npm install react-icons --save
// 27 Passo -  ex: import {AiFillCloseCircle} from 'react-icons/ai';
// 28 Passo - Como colar para visualização   <AiFillCloseCircle size={25} className="colaborador__deleetar" onClick={deletar} />
// 29 Passo  - import com {} -> vem de um export normal e sem {} é um export default e só pode ter um por arquivo.
// 30 Passo - Mas pode ter inumeros export sem ser default
// 31 Passo - Criar id  com npm i uuid
// 32 Passo - Como Importar pra utilização() import { v4 as uuidv4 } from 'uuid';
// 33 Passo - Chamar ela geralemente id: uuid4()
// 34 Passo - Se eu tiver que passa parametro num evento eu chamo uma function / arrow fuction
// 35 Passo - Cadastrar de um formulario pra outro
// 36 Passo - setTimes([...time,{ ...novoDepartamento,id: uuidv4() }]) adicionado um novo elemento dinamico
// 37 Passo - inpu recebe o type pela props
// 38 Passo -  setFormulario([...formulario, {...colaborador, id:uuidv4(), favorito:false}]); add um nome atributo com valor padrao
// 39 Passo - utlizando obj declarativo pra compor o elemento {...propsFavoritar}
// 40 Passo - Como criar um ternário para renderizar de forma opcional;
// 41 Passo - A importância de se refatorar um componente em projetos React.
function App() {
  // geralmente esse cara é do banco de dados.

  const [time, setTimes] = useState([
    //o que é predeterminado
    {
      id: uuidv4(),
      nome: "Departamento 1",
      corPrimaria: "#57C278",
      corSecundario: "#D9F7E9",
    },
    {
      id: uuidv4(),
      nome: "Departamento 2",
      corPrimaria: "#82CFFA",
      corSecundario: "#E8F8FF",
    },
    {
      id: uuidv4(),
      nome: "Departamento 3",
      corPrimaria: "#A6D157",
      corSecundario: "#F0F8E2",
    },
    {
      id: uuidv4(),
      nome: "Departamento teste 4",
      corPrimaria: "#E06B69",
      corSecundario: "#FDE7E",
    },
  ]);

  // array vazio nao uma string pq não é uma lista react(hook)
  const [formulario, setFormulario] = useState([
    {
      id: uuidv4(),
      campo: "italo",
      cargo: "sup",
      imagem: "http://github.com/italo-lopes.png",
      lista: time[1].id,
      favorito: false,
    },
    {
      id: uuidv4(),
      campo: "italo1",
      cargo: "mid",
      imagem: "http://github.com/italo-lopes.png",
      lista: time[0].id,
      favorito: false,
    },
  ]);
  //console.log('------------------')
  //console.log(formulario)

  function recebeColaborador(colaborador) {
    //console.log(formulario);
    setFormulario([
      ...formulario,
      { ...colaborador, id: uuidv4(), favorito: false },
    ]);
  }

  const tranformar = () => {
    // transformando um obj de varios item em um de um item so
    return time.map((item) => item.nome);
  };

  function deletarColaborador(id) {
    console.log("Deleter colaborador e atualizar colaborador");
    console.log("na parte delete mais alta top1");
    console.log(id);
    setFormulario(formulario.filter((item) => item.id !== id));
  }

  console.log("na parte mais alta top1");
  //time.map((item)=>item.nome )

  function mudarCorCard(corNova, id) {
    console.log("A COR Nova é", corNova);
    console.log("id: ", id);
    setTimes(
      time.map((item) => {
        // if (item.nome === nome) {
        if (item.id === id) {
          item.corPrimaria = corNova;
          //item.corSecundario = corNova;
        }
        return item;
      })
    );
  }

  function cadastrarDepartamento(novoDepartamento) {
    console.log("mudar o state", novoDepartamento);
    //const [time, setTimes]
    setTimes([...time, { ...novoDepartamento, id: uuidv4() }]);
  }

  const mudarFavoritoColaborador = (id) => {
    console.log("id:", id);
    setFormulario(
      formulario.map((element) => {
        if (element.id === id) {
          element.favorito
            ? (element.favorito = false)
            : (element.favorito = true);
        }
        return element;
      })
    );
  };

  // map precisa de retorno do item
  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarDepartamento={(novoDepartamento) =>
          cadastrarDepartamento(novoDepartamento)
        }
        timeNome={tranformar()}
        timeCompleto={time}
        aoColaboradorCadastrado={(colaborador) =>
          recebeColaborador(colaborador)
        }
      />
      {/*Quando eu quero interar encima de uma lista eu uso o .map() -> list
        renderização de varios componentes como a mesma parte modelo visual
      */}
      {/*cardes*/}
      {time.map((item) => {
        return (
          <CardTime
            key={item.id}
            id={item.id}
            nome={item.nome}
            corPrimaria={item.corPrimaria}
            corSecundaria={item.corSecundario}
            novaFuncao={mudarCorCard}
            colaborador={formulario.filter((it) => it.lista === item.id)}
            aoDeletar={deletarColaborador}
            mudarFavorito={mudarFavoritoColaborador}
          />
        );
      })}

      {/* 
         colaborador é um obj
         <CardTime nome={timenome}/>
         <CardTime nome="Departamento 2"/>
         <CardTime nome="Departamento 3"/>
         <CardTime nome="Departamento 4"/> 
         formulario.filter((it)=> it.lista === item.nome)
         leva o  /it.lista === item.nome/ é uma boleana 
         pra saber se esse colaborador vai pra tal card
      */}
      <Rodape />
    </div>
  );
}
export default App;

// Dica Fazer os componentes de dentro pra fora e de cima pra baixo

// ctrl+ click

/*
pego esses compenetes e coloco dentro do outro 
<CampoInput label="Nome" placeholder="Digite seu Nome"/> 
<CampoInput label="Cargo" placeholder="Digite seu Cargo"/> 
<CampoInput label="Imagem" placeholder="Digite o endereço da imagem"/> 
*/

// Select
//<ListaSuspensa itens={itensSelect}/>

// É uma framework + reativa
// SPA - single page application -
// (funciona como uma app - funciononado dinamicamente como padrao)
// uma pagina unica com interação

//setFormulario([...formulario,colaborador]);  -> react(hook)
// criar um  --conjutos de array-- de obj (antigos e novos)
/*
        const  arrayTemporario = formulario;
        arrayTemporario.push(colaboradores) -> [...formulario,colaboradores]
        setState(arrayTemporario)
        [...formulario,colaboradores] spread
        Nesse caso, o operador de espalhamento ... é utilizado para expandir os elementos do meuArray e,
         em seguida, o valor é adicionado ao final.
      */

//console.log(formulario)
//altera de modo assincorno - setState-  nao muda o estado de imediado. --> a funcção nao retorna nada
// Se você precisa executar alguma lógica após a atualização do estado, -->pode usar o useEffect
// usando o useEffect

/*
 Nao pode ser chamado dentro da função da mudança de estado
======= ver a atualização de estado===============================

useEffect(() => {
   console.log('Novo valor do estado:', formulario);
}, [formulario]);

A razão pela qual geralmente é recomendado usar o useEffect separadamente é porque isso ajuda a manter o 
código mais organizado e evita loops infinitos indesejados.

useEffect é executado após o término do processo de renderização do componente, incluindo a atualização do estado.
===================================================================================
*/

//logo após a chamada da função de atualização do estado,
//o valor do estado exibido será o anterior, porque o React ainda não atualizou o estado.

//react(jsx)

//Renderização
/*
 componente funcionais + hooks-16.8 (ciclo de vida e state)
    ->const MeuComponenteFuncional =()=>{
        return(<h1> texto </h1)
    }
 componete de classe 

 class MeuComponeteClass extneds React.Componet{
  render(){
    return(<h1>texto</h1>)
  }
 }

tem em sua raiz o state e ciclo de vida sem a necessidade do uso de Hooks 

*/

//Implementação
/*
1. componentes do figma
2. cadastro de formulario statefull
3. interação do formulario com o card que salva o estado dos colaboradoes 
4. Mostrando colaboradores map os componentes .map() -> percorer os colaboradores criando componentes(jsx) com eles 
5. Filtrando  .filter() os componentes colaboradores em suas determinadas departamento
6. desabilitando componente (renderização condicional usando && (operadores logicos)  ?: (operadores ternario))
*/

/*
renderização condicional
return (<div>
  {idade >= 18 && <p>É maior de idade</p>}
  {idade < 18 && <p>Não é maior de idade</p>}
</div>)
*/
