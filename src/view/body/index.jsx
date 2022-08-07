import React, { useEffect, useMemo, useState } from "react";
import { DotLoader } from "react-spinners";
import Header from "../header";
import Info from "../info";
import Helper from "../../components";


import "./style.scss"

const Ecommerce = () => {


    const [data, setData] = useState([])

    const [initial, setInitialState] = useState([])

    const [showContainer, setShowContainer] = useState(true)


    const [itens, setItens] = useState()

    const helper = useMemo(() => new Helper(), []);

    useEffect(() => {
        GetData()
    }, [initial])

    const GetData = () => {
        fetch("http://localhost:3001/fruits")
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
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
                        <div key={e.id}>
                            <div className="conteiner-produtos" id="contents" >
                                <img src={helper.SetImg(e?.id)} alt="" />
                                <div className="texto" >{e?.name}</div>
                                <div className="botao" onClick={() => setInitialState(initial.map((e) => e.data.name).includes(e.name) ? [...initial] : [...initial, { data: e, qtd: 1 }])}>Adicionar</div>
                            </div>
                        </div>
                    )
                })
                }
            </>
        )
    }


    const deleteItem = (index) => {
        setInitialState((items) => items.filter((_, i) => i !== index))
    }


    const carContainerSell = () => {
        return (
            <div className="container-content-info" id="content-info">
                <div className="clear-shopping">
                    <span onClick={() => setInitialState([])} class="material-symbols-outlined">
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
                            return (
                                <>
                                    <div className="content-info" key={e?.data?.id}>
                                        <div className="container-block-content">
                                            <div className="container-img">
                                                <img src={helper.SetImg(e?.data?.id)} alt="" />
                                                <div>{e?.data?.name}</div>
                                            </div>
                                            <div className="container-desc-fruit">
                                                <div>Carboidratos : {e?.data?.nutritions?.carbohydrates}</div>
                                                <div>Açucar : {e?.data?.nutritions?.sugar}</div>
                                                <div>Calorias : {e?.data?.nutritions?.calories}</div>
                                            </div>
                                            <div className="add-shopping" >
                                                <div>
                                                    <span className="material-symbols-outlined">
                                                        add
                                                    </span>
                                                </div>
                                                <div>{e?.qtd}</div>
                                                <div>
                                                    <span className="material-symbols-outlined">
                                                        remove
                                                    </span>
                                                </div>
                                            </div>
                                            <span class="material-symbols-outlined" style={{ color: "red", cursor: "pointer" }} onClick={() => setItens(deleteItem(index))}>
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
            <Header showShopping={mostrar}  shopping={initial.length} />
            {data.length == 0 ? SpinnerLoad() : <>{showContainer ? false : <> {carContainerSell()} </>} <div className="conteiner">{showContainer ? <> {ContainerCards()}</> : false}</div></>}
        </main>
    )
}

export default Ecommerce;