import React, { useEffect, useState } from "react";
import Maca from "../imagens/maca.png"
import Apricot from "../imagens/apricot.png"
import Banana from "../imagens/banana.png"
import Blackberry from "../imagens/blackberry.png"
import Blueberry from "../imagens/blueberry.png"
import Cherry from "../imagens/cherry.png"
import Durian from "../imagens/durian.png"
import Fig from "../imagens/fig.png"
import Gooseberry from "../imagens/gooseberry.png"
import Grapes from "../imagens/grapes.png"
import Greenaple from "../imagens/greenApple.png"
import Guava from "../imagens/guava.png"
import Kiwi from "../imagens/kiwi.png"
import Limon from "../imagens/limon.png"
import Lime from "../imagens/lime.png"
import Lingonberry from "../imagens/lingonberry.png"
import Lichee from "../imagens/lychee.png"
import Manga from "../imagens/manga.png"
import Melon from "../imagens/melon.png"
import Orange from "../imagens/orange.png"
import Papaya from "../imagens/papaya.png"
import Passionfruit from "../imagens/passionfruit.png"
import Pear from "../imagens/pier.png"
import Persimon from "../imagens/persimon.png"
import Pineapple from "../imagens/pineapple.png"
import Plum from "../imagens/plum.png"
import Rasberry from "../imagens/rasberry.png"
import Strawberry from "../imagens/strawberry.png"
import Tomato from "../imagens/tomato.png"
import Umbu from "../imagens/umbu.png"
import Watermelon from "../imagens/watermelon.png"

import "./style.scss"

const Ecommerce = () => {


    const [data, setData] = useState([])

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


    return (
        <>
            <div className="conteiner">
                {data.map((e) => {
                    return (
                        <a href="#" className="conteiner-produtos">

                            <img src={
                                e?.id == 6 ? Maca
                                    : e?.id == 35 ? Apricot
                                        : e?.id == 1 ? Banana
                                            : e?.id == 64 ? Blackberry
                                                : e?.id == 33 ? Blueberry
                                                    : e?.id == 9 ? Cherry
                                                        : e?.id == 60 ? Durian
                                                            : e?.id == 68 ? Fig
                                                                : e?.id == 69 ? Gooseberry
                                                                    : e?.id == 47 ? Grapes
                                                                        : e?.id == 72 ? Greenaple
                                                                            : e?.id == 37 ? Guava
                                                                                : e?.id == 66 ? Kiwi
                                                                                    : e?.id == 26 ? Limon
                                                                                        : e?.id == 44 ? Lime
                                                                                            : e?.id == 65 ? Lingonberry
                                                                                                : e?.id == 67 ? Lichee
                                                                                                    : e?.id == 27 ? Manga
                                                                                                        : e?.id == 41 ? Melon
                                                                                                            : e?.id == 2 ? Orange
                                                                                                                : e?.id == 42 ? Papaya
                                                                                                                    : e?.id == 70 ? Passionfruit
                                                                                                                        : e?.id == 4 ? Pear
                                                                                                                            : e?.id == 52 ? Persimon
                                                                                                                                : e?.id == 10 ? Pineapple
                                                                                                                                    : e?.id == 71 ? Plum
                                                                                                                                        : e?.id == 23 ? Rasberry
                                                                                                                                            : e?.id == 23 ? Rasberry
                                                                                                                                                : e?.id == 3 ? Strawberry
                                                                                                                                                    : e?.id == 5 ? Tomato
                                                                                                                                                        : e?.id == 73 ? Umbu
                                                                                                                                                            : e?.id == 25 ? Watermelon : ""} />

                            <div style={{ color: "black" }}>id - {e?.id}</div>
                            <div className="texto">{e?.name}</div>
                            <div className="botao">Adicionar</div>
                            {/* <div>Familia - {e.family}</div> */}
                            {/* <div>Carboidratos - {e.nutritions.carbohydrates}</div>
                            <div>Carboidratos - {e.nutritions.sugar}</div> */}
                        </a>

                    )
                })}
            </div>
        </>
    )
}

export default Ecommerce;