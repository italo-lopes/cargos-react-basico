import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {  
 // console.log("sdsd",props)
  const aoDigitar = (e)=>{
         props.aoAlterar(e.target.value)  
  }

  return (
    <div className="lista__suspensa">
      <label>{props.label}</label>
      <select onChange={aoDigitar} required={props.required} value={props.valor}>
        {/* <option Key = {elemento} value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="italo">italo</option> */}
        <option value=""disabled>selecione</option>
        {props.itensTodos.map((elemento)=>{
          return <option key = {elemento.id} value={elemento.id}>{elemento.nome}</option>
        })}
      </select>
      {/* <span  data-campo = {props.erro} style = {{display: 'none'}} ></span> */}
    </div>
  );
};

export default ListaSuspensa;
//        {props.itens.map((elemento)=>{
//          return <option>{elemento}</option>
//        })}

// cada item da lista precisa de uma 
// Key={} - esse valor tem que ser unico
// Key é uma palavra resevada precisa dessa Key  