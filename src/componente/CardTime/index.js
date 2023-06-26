import Colaborador from "../Colaborador";
import "./CardTime.css";

// componenete
// visual ou  logica
// compomnete de time  -> componete de pessoas do time

//componentes idiotas - dumb components -> sao que nao tem comportamento apenas recebe o props e exibe na tela
// meramente visuais
const CardTime = (props) => {
  console.log(props);
  // const css =  {backgroundColor: props.corSecundaria}
  return (
   // props.colaborador.length > 0 &&
   props.colaborador.length > 0 ?
    <section
      className="card__time"
      style={{ backgroundColor: props.corSecundaria }}
    >
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="lista__colaboradore">
        {props.colaborador.map((item,index) => {
            console.log(index);
          return (
          <Colaborador 
          key = {index}
          nome={item.campo}
          url = {item.imagem}
          cargo ={item.cargo}
          corCard ={props.corPrimaria}
          />);
        })}
                {/* 
                quando eu tenho que interagir com varios dependendo de outra lista uso map
                pra renderizar
                <Colaborador/>
                <Colaborador/>
                <Colaborador/>
                <Colaborador/>
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
