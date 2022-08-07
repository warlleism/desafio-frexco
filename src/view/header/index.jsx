import React, { useState } from "react"
import "./style.scss"
import Logo from "../../imagens/logo.png"

const Header = (props) => {

    const buscar = document.getElementById("search")
    const input = document.getElementById("inputText")
    const [search, setSearch] = useState(0)


    input?.addEventListener("click", () => {
        buscar.style.opacity = 0
    })

    input?.addEventListener("blur", () => {
        search == 0 ? buscar.style.opacity = 1 : buscar.style.opacity = 0
    })

    return (
        <div className="header-container">
            <div className="container-content">
                <img onClick={() => props.showShopping(true)} src={Logo} alt="" style={{ cursor: "pointer" }} />
                <div className="conteiner-input">
                    <div id="search">
                        <span className="material-symbols-outlined">
                            search
                        </span>
                        Oque busca?
                    </div>
                    <input id="inputText" type="text" onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="shopping-content">
                    <span className="material-symbols-outlined" onClick={() => props.showShopping(false)}>
                        shopping_cart
                    </span>
                    <span className="material-symbols-outlined" onClick={() => props.showShopping(true)}>
                        storefront
                    </span>
                    <div>{props.shopping}</div>
                </div>
            </div>
        </div>
    )
}


export default Header;