import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Fresco from "../../imagens/frexcoLogo.png"
import Nutri from "../../icons/nutrientes.png"
import Cart from "../../icons/cart.png"
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

        if (showContentRes == false) {
            setShowContentRes(!status)
            setTimeout(() => {
                showContent(0)
            }, 200)
        }
        if (showContentRes == true) {
            showContent(100)
            setTimeout(() => {
                setShowContentRes(!status)
            }, 600)
        }
    }

    const navegationResponsive1 = () => {
        setShowContentRes(false)
        props.showShopping(true)
    }
    const navegationResponsive2 = () => {
        setShowContentRes(false)
        props.showShopping(false)
    }


    return (
        <>
            <div className="header-container">
                <div style={{ float: "right", padding: "10px", fontSize: "20px", cursor: "pointer" }}>
                    <span class="material-symbols-outlined" style={{ fontSize: "30px", color: "#ffff", background: "#89bd23", borderRadius: "20px" }} onClick={() => props.showShopping(true)}>
                        arrow_back
                    </span>
                </div>
                <div className="container-content">
                    <Link to={"/"}>
                        <img src={Fresco} style={{ cursor: "pointer" }} onClick={() => props.showShopping(true)} />
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
                        <Link to={"/"}>
                            <img src={Cart} alt="" style={{ maxWidth: "40px", cursor: "pointer" }} onClick={() => props.showShopping(false)} />
                        </Link>
                        <div>{props.shopping}</div>
                        <a href="#item1">
                            <img src={Nutri} alt="" style={{ maxWidth: "40px", cursor: "pointer" }} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="responsive-content">
                <div className="container-menu">
                    <img src={Fresco} alt="" srcset="" onClick={() => navegationResponsive1()} />
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
                                    <li onClick={() => navegationResponsive1()}>
                                        <Link to={"/"}>
                                            home
                                        </Link>
                                    </li>
                                    <li onClick={() => navegationResponsive2()}>Shop</li>
                                    <a href="#item1" onClick={() => navegationResponsive1()}>
                                        Nutrição
                                    </a>
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