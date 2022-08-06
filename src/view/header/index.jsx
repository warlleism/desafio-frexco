import React from "react"
import "./style.scss"
import Logo from "../../imagens/logo.png"

const Header = (props) => {
    return (
        <div className="header-container">
            <div className="container-content">
                <img src={Logo} alt="" />
                <div className="conteiner-input">
                    <div>
                        <span class="material-symbols-outlined">
                            search
                        </span>
                        Oque busca?
                    </div>
                    <input type="text" />
                </div>
                <div className="shopping-content">
                    <span class="material-symbols-outlined" onClick={() => props.showShopping()}>
                        shopping_cart
                    </span>
                    <div>{props.shopping}</div>
                </div>
            </div>
        </div>
    )
}


export default Header;