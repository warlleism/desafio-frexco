import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Logo from "../../imagens/logo.png"
import Fresco from "../../imagens/frexcoLogo.png"

import "./style.scss"

const Header = (props) => {

    const buscar = document.getElementById("search")
    const input = document.getElementById("inputText")
    const [search, setSearch] = useState(0)
    const [showContentRes, setShowContentRes] = useState(false)


    input?.addEventListener("click", () => {
        buscar.style.opacity = 0
    })

    input?.addEventListener("blur", () => {
        search == 0 ? buscar.style.opacity = 1 : buscar.style.opacity = 0
    })


    const showContent = (valor) => {
        const content = document.getElementById("container-responsive")
        content.style.transform = `translateX(${valor}%)`
    }


    const mostrar = (status) => {
        setShowContentRes(!status)
        setTimeout(() => {
            showContent(0)
        }, 200)
    }


    return (
        <>
            <div className="header-container">
                <Link to={"/"} style={{ float: "right", padding: "10px", fontSize: "20px" }}>
                    <span class="material-symbols-outlined" style={{ fontSize: "30px", color: "#2b2b2bb3", background: "#89bd23", borderRadius: "20px" }}>
                        arrow_back
                    </span>
                </Link>
                <div className="container-content">
                    <Link to={"/"}>
                        <img src={Fresco} onClick={() => props.showShopping(true)} style={{ cursor: "pointer" }} />
                    </Link>
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
                        <div>{props.shopping}</div>
                        <Link to={"/info"}>
                            <span className="material-symbols-outlined" onClick={() => props.showShopping(true)}>
                                storefront
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="responsive-content">
                <div className="container-menu">
                    <img src={Fresco} alt="" srcset="" />
                    <span class="material-symbols-outlined" id="menu-responsive" onClick={() => mostrar(showContentRes)}>
                        menu
                    </span>
                </div>
                {
                    showContentRes &&
                    (
                        <>
                            <div className="container-content-responsive" id="container-responsive">
                                <ul>
                                    <li onClick={() => mostrar(true)} >Home</li>
                                    <li>Shop</li>
                                    <Link to={"/info"}>Nutrições</Link>
                                </ul>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}


export default Header;