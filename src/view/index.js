import React, { useEffect, useState } from "react";
const Ecommerce = () => {


    const [data, setData] = useState([])

    useEffect(() => {
        GetData()
    }, [])

    const GetData = () => {
        fetch("http://localhost:3001/fruits")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            })
    }


    return (
        <>
            <div>Página principal</div>
            {/* {console.log(data)} */}
            {/* <div>{data.map((e) => {
                return (
                    <div style={{display: "flex"}}>
                         {e.id} - {e.name} 
                    </div>

                )
            })}</div> */}
        </>
    )
}

export default Ecommerce;