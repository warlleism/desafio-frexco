import React, { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import Header from "../header";
import Maca from "../../imagens/maca.png"
import Apricot from "../../imagens/apricot.png"
import Banana from "../../imagens/banana.png"
import Blackberry from "../../imagens/blackberry.png"
import Blueberry from "../../imagens/blueberry.png"
import Cherry from "../../imagens/cherry.png"
import Durian from "../../imagens/durian.png"
import Fig from "../../imagens/fig.png"
import Gooseberry from "../../imagens/gooseberry.png"
import Grapes from "../../imagens/grapes.png"
import Greenaple from "../../imagens/greenApple.png"
import Guava from "../../imagens/guava.png"
import Kiwi from "../../imagens/kiwi.png"
import Limon from "../../imagens/limon.png"
import Lime from "../../imagens/lime.png"
import Lingonberry from "../../imagens/lingonberry.png"
import Lichee from "../../imagens/lychee.png"
import Manga from "../../imagens/manga.png"
import Melon from "../../imagens/melon.png"
import Orange from "../../imagens/orange.png"
import Papaya from "../../imagens/papaya.png"
import Passionfruit from "../../imagens/passionfruit.png"
import Pear from "../../imagens/pier.png"
import Persimon from "../../imagens/persimon.png"
import Pineapple from "../../imagens/pineapple.png"
import Plum from "../../imagens/plum.png"
import Rasberry from "../../imagens/rasberry.png"
import Strawberry from "../../imagens/strawberry.png"
import Tomato from "../../imagens/tomato.png"
import Umbu from "../../imagens/umbu.png"
import Watermelon from "../../imagens/watermelon.png"



import "./style.scss"

const Ecommerce = () => {


    const [data, setData] = useState([])

    const [initial, setInitialState] = useState([])

    const [shoppingQtd, setShoppingQtd] = useState(1)

    const [showContainer, setShowContainer] = useState(true)

    // const showInfoContent = () => {
    //     const content = window.document.getElementById("contentInfo")
    //     const info = window.document.getElementById("infoContent")

    //     content?.addEventListener("mouseover", () => {
    //         info.style.backgroundColor = "red"
    //     })
    // }

    useEffect(() => {
        GetData()
    }, [])

    const GetData = () => {
        fetch("http://localhost:3001/fruits")
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    }

    const SetImg = (data) => {

        const dados = data

        switch (dados) {
            case 1:
                return Banana
            case 2:
                return Orange
            case 3:
                return Strawberry
            case 4:
                return Pear
            case 5:
                return Tomato
            case 6:
                return Maca
            case 9:
                return Cherry
            case 10:
                return Pineapple
            case 23:
                return Rasberry
            case 25:
                return Watermelon
            case 26:
                return Limon
            case 27:
                return Manga
            case 33:
                return Blueberry
            case 35:
                return Apricot
            case 37:
                return Guava
            case 41:
                return Melon
            case 42:
                return Papaya
            case 44:
                return Lime
            case 47:
                return Grapes
            case 52:
                return Persimon
            case 60:
                return Durian
            case 64:
                return Blackberry
            case 65:
                return Lingonberry
            case 66:
                return Kiwi
            case 67:
                return Lichee
            case 68:
                return Fig
            case 69:
                return Gooseberry
            case 70:
                return Passionfruit
            case 71:
                return Plum
            case 72:
                return Greenaple
            case 73:
                return Umbu
        }
    }


    const showContent = (valor) => {
        const content = document.getElementById("content-info")
        content.style.transform = `translateX(${valor}%)`
    }


    const mostrar = (status) => {
        setShowContainer(status)
        setTimeout(() => {
            showContent(0)
        }, 200)
    }

    const esconder = () => {
        showContent(100)
        setTimeout(() => {
            setShowContainer(true)
        }, 1000)
    }

    const SpinnerLoad = () => {
        return (
            <div className="spinnerLoading">
                <DotLoader color={"green"} />
            </div>
        )
    }

    const ContainerCards = () => {
        return (
            <>
                {data?.map((e, index) => {
                    return (
                        <div onClick={() => setInitialState([...initial, { data: e, qtd: 1 }])} className="conteiner-produtos">
                            <img src={SetImg(e?.id)} alt="" />
                            <div className="texto" >{e?.name}</div>
                            <div className="botao">Adicionar</div>
                        </div>
                    )
                })
                }
            </>
        )
    }

    const carContainerSell = () => {
        return (
            <div className="container-content-info" id="content-info">
                <div className="clear-shopping" onClick={() => setInitialState([])}>
                    <span class="material-symbols-outlined">
                        delete
                    </span>
                </div>
                {initial == 0
                    ?
                    <>
                        <div className="shopping-content">
                            <div className="shopping-msg-clear">
                                <div>Seu Carrinho está vazio</div>
                                <div>
                                    <span class="material-symbols-outlined">
                                        shopping_cart
                                    </span>
                                </div>
                            </div>
                        </div>
                    </>
                    : <>
                        {initial?.map((e, index) => {
                            console.log(initial[index].qtd)
                            return (
                                <>
                                    <div className="content-info" key={e.data.id}>
                                        <div className="container-block-content">
                                            <div className="container-img">
                                                <img src={SetImg(e?.data?.id)} alt="" />
                                                <div>{e?.data.name}</div>
                                            </div>
                                            <div className="container-desc-fruit">
                                                <div>Carboidratos : {e?.data.nutritions?.carbohydrates}</div>
                                                <div>Açucar : {e?.data.nutritions?.sugar}</div>
                                                <div>Calorias : {e?.data.nutritions?.calories}</div>
                                            </div>

                                            <div className="add-shopping" >
                                                <div><span className="material-symbols-outlined">
                                                    add
                                                </span></div>
                                                <div>{shoppingQtd}</div>
                                                <div><span className="material-symbols-outlined">
                                                    remove
                                                </span></div>
                                            </div>
                                            <span class="material-symbols-outlined">
                                                delete_forever
                                            </span>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </>}

            </div>
        )
    }


    return (
        <main>
            <Header showShopping={mostrar} shopping={initial.length} />
            {data.length == 0 ? SpinnerLoad() : <>{showContainer ? false : <> {carContainerSell()} </>} <div className="conteiner">{showContainer ? <> {ContainerCards()}</> : false}</div></>}
        </main>
    )
}

export default Ecommerce;