import './Botao.css'

const Botao = (props)=>{
    // children palavra resevada
  //  console.log(props.children)
    //console.log(props.valor)
    return (
        // <div className= "botao__card">
        //     <input type="button"  key = "2" value={props.valor}/>
        // </div>
        //type="submit"
        <button className="button__card" >
            {props.children}
        </button>
    )
}

export default Botao;

