import {AiFillCloseCircle} from 'react-icons/ai';
import {MdFavoriteBorder,MdFavorite} from 'react-icons/md';
import "./Colaborador.css";

// react componete funcional
// componete a variavel é maiuscula - componente sempre achar o padrao de desenvolvimento
const Colaborador = ({id,nome,cargo,url,corCard,deletar,favorito = false, mudarFavorito}) => {

  console.log("na parte mais alta top3")
  function chamaFuncao() {
    deletar(id);
  }

  const favoritar = ()=>{
         // favorito ? favorito = false : favorito = true;
          mudarFavorito(id)   
  }
 
  const propsFavoritar ={
        size : 25,
        onClick : favoritar
  }
  return (
    //favorito ? mostra condição 
    // ainda e js
    <div className="colaborador">
      <AiFillCloseCircle size={25} className="colaborador__deletar" onClick={chamaFuncao} />
      <div className="cabecalho" style={{backgroundColor: corCard}}>
        <img src={url} alt="imagem" />
      </div>
      <div className="rodape">
        <h4>Nome:{nome} {nome} </h4>
        <h5> {cargo}</h5>
        <div className="favorito"> 
             {favorito 
                ? <MdFavorite {...propsFavoritar} color='#FF0000' /> 
                : <MdFavoriteBorder onClick={favoritar} size={25} />}
        </div>
      </div>
    </div>
  );
};
export default Colaborador;
/* 
destruturação 
{nome, cargo, img } = props
é receber um obj e clasificar so o que vai usar no componente
onClick{()=> {chamadaDeFuncao(parametro1,parametro2)}}
{favorito ? 'favorito':'nao favorito'} dentro do jsx
colocar incones


 
  const propsFavoritar ={
        size : 25,
        onClick : favoritar
  }

  <MdFavorite {...propsFavoritar} />  = onClick={favoritar} size={25}
*/