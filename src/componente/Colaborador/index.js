import "./Colaborador.css";

// react componete funcional
// componete a variavel é maiuscula - componente sempre achar o padrao de desenvolvimento
const Colaborador = ({nome,cargo,url,corCard }) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{backgroundColor: corCard}}>
        <img src={url} alt="imagem" />
      </div>
      <div className="rodape">
        <h4>{nome}react</h4>
        <h5>{cargo}</h5>

      </div>
    </div>
  );
};

// destruturação 
// {nome, cargo, img } = props
// é receber um obj e clasificar so o que vai usar no componente

export default Colaborador;
