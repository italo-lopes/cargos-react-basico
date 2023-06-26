import './Rodape.css'

const Rodape = ()=>{
    console.log('Rodape')
    return(
        <footer className="rodape">
            <section className="rodape__social">
                <img src="./imagens/tw.png" alt = 'tw'/>
                <img src="./imagens/ig.png" alt = 'tw'/>
                <img src="./imagens/fb.png" alt = 'tw' /> 
            </section>
            <section className="rodape__logo">
                <img src="./imagens/logo.png" alt = 'tw'/>
            </section>
            <section className="rodape__texto">
                <h4>Desenvolvimento Web</h4>
            </section>
        </footer>
    );
}

export default Rodape

/*sempre que for um bloco de informação começa com srction

<ul>
<li>
    <a href="facebook.com" target="_blank">
        <img src="/imagens/facebook.png" alt="" />
    </a>
</li>
<li>
    <a href="twitter.com" target="_blank">
        <img src="/imagens/twitter.png" alt="" />
    </a>
</li>
<li>
    <a href="instagram.com" target="_blank">
        <img src="/imagens/instagram.png" alt="" />
    </a>
</li>
</ul>
*/