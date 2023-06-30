import Colaborador from "../Colaborador";
import "./CardTime.css";
import hexToRgba from 'hex-to-rgba';
//import { useState } from "react";

// componenete
// visual ou  logica
// compomnete de time  -> componete de pessoas do time

//componentes idiotas - dumb components -> sao que nao tem comportamento apenas recebe o props e exibe na tela
// meramente visuais

const CardTime = (props) => {
  //elevado pra app o state
  // const [corCard, setCorCard] = useState(props.corSecundaria)
  // function mudarCor(e){
  //      console.log("a cor que deveria ser",e.target.value)
  //       setCorCard(e.target.value)
  // }

  //style={{ backgroundColor:corCard}}

  console.log(props)
  function mudarCor(e){
          props.novaFuncao(e.target.value,props.id) 
  }

  return (
   // props.colaborador.length > 0 &&
   props.colaborador.length > 0 ?
    <section
      className="card__time"
      style={{ backgroundColor: hexToRgba(props.corPrimaria, 0.6)}}
    >
      <input  type="color"  value ={props.corPrimaria}  onChange={mudarCor} className="card__color"/>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="lista__colaboradore">
        {props.colaborador.map((item,index) => {
           //console.log("renderiza colaboradr",index)
          return (
          <Colaborador 
          key = {item.id}
          id = {item.id}
          nome={item.campo}
          favorito={item.favorito}
          url = {item.imagem}
          cargo ={item.cargo}
          corCard ={props.corPrimaria}
          deletar ={props.aoDeletar} 
          mudarFavorito={props.mudarFavorito}
          />);
        })}
                {/* 
                quando eu tenho que interagir com varios dependendo de outra lista uso map
                pra renderizar
                <Colaborador/>
                <Colaborador/>
                <Colaborador/>
                <Colaborador/> 
            */}
      </div>
    </section>
    : ''
  );
};
export default CardTime;

// style -> dentro do style é inline e tudo é obj nao exite  (-)
// style -> jsx-> js
/*
coloquei o q seria outro componente dentro de time
Aprende a separar item iguais em componetes e nao misturar ela
desfragmentar componente
        <div className="card__time">
            <h3 className="card__time__titulo">TimeFixo</h3>
            <ul className="card__time__lista">
                <li className="card__time__item">
                    <div className="card__time__item_faixa">
                    </div>
                    <div className="card__time__item_foto">
                        <div>
                            foto
                        </div>
                        <div>
                            informação
                        </div>
                    </div>
                </li>
                <li className="card__time__item">2</li>
            </ul>
        </div>


*/
