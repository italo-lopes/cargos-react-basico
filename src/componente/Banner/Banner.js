//criando primeiro componente do zero
//pode fazer um return de multiplas linhas
import "./Banner.css";
// abordagem de organização de import/export
export const Banner = ()=>{
  return (
    // começa depois de public e src
    // class resevada do js - jsx usamos className
    <header className="banner">
      <img src="./imagens/banner.png" alt="O banner" />
    </header>
  );
}