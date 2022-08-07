import React, { useEffect, useMemo, useState } from "react"
import Helper from "../../components";
import Header from "../header";
import "./style.scss"

const Info = (props) => {

    const helper = useMemo(() => new Helper(), []);

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


    const ContainerInfoFruits = () => {
        return (
            <>
                <Header shopping={props.shopping} />
                <div className="main-info">
                    <div style={{ textAlign: "center", fontSize: "2rem", color: "#16bf9a", fontWeight: "600", marginBottom: 100 }}>NUTRIÇÃO</div>
                    <div className="info-conteiner">
                        {data?.map((e, index) => {
                            return (
                                <div key={e?.id} className="conteiner-produtos-info">
                                    <div className="desc-info">
                                        <div className="texto-nome" >{e?.name}</div>
                                        <div className="texto" > Carboidrato: {e?.nutritions.carbohydrates}</div>
                                        <div className="texto" > Protein: {e?.nutritions.protein}</div>
                                        <div className="texto" > Gordo: {e?.nutritions.fat}</div>
                                        <div className="texto" > Nutritions: {e?.nutritions.calories}</div>
                                        <div className="texto" > Açudar: {e?.nutritions.sugar}</div>
                                    </div>
                                    <div className="img-info">
                                        <img src={helper.SetImg(e?.id)} alt="" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }

    return (
        <div>
            {ContainerInfoFruits()}
        </div>
    )
}


export default Info;