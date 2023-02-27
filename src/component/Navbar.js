import style from '../styles/Home.module.css'
export default function Navbar(){


    return(
        
          <header>
            <div class="pusher">
              <div class="ui vertical masthead center aligned segment">
                <div className={style.Header}>
                  <div className={style.Navbar}>
                    <a className={style.atitle}>
                      <img className={style.imagem} src='./Logo.png' />
                      <h3 className={style.title}>Coolbask</h3>
                    </a>
                    <a className={style.item}>Home</a>
                    <a className={style.item}>E-commerce</a>
                    <a className={style.item}>Sport</a>
                    <a className={style.item}>Game</a>
                    <div class="ui transparent left icon input serchiconwhite">
                      <input type="text" placeholder="Search..."/>
                      <i class="search icon"></i>
                    </div>
                    <div className={style.Sings}>
                      <a className={style.Sing} class="ui inverted button">Sign in</a>
                      <a className={style.Sing} class="ui inverted button">Sign Up</a>
                    </div>
                  </div>
                </div>  
              </div>
            </div>
          </header>
    )
}