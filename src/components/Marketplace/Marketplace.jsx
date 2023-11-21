import axios from "axios";
import React from "react";
import "./Marketplace.scss";

export const Marketplace = () => {
    const [goods, setGoods] = React.useState()


React.useEffect(() => {
    const axiosRequest = async () => {
        const response =  await axios.get("http://localhost:3000/shoeses") 
        setGoods(response.data)
    }

    axiosRequest()
}, [])
    
   
    return (
    <>
        {goods?.map((item, id)=> {
            return (
                <div  className="col-3 marketplace-item" key={id}>
                    <div className="item-top">
                        <img  height={32} width={32} className="like-btn" src="img/like-btn.svg" alt="" />
                        <img  className="item-img" height={112} width={133} src={item.img} alt="IMg" />
                        <h4 className="item-name">{item.title}</h4>
                    </div>
                    <div className="item-bottom">
                            <div className="bottom-left">
                                <span className="price-title">Ціна:</span>
                                <span className="price-value">{item.price}</span>
                            </div>

                            <div className="bottom-right">
                            <img height={28} width={28}  className="add-btn" src="img/add-btn.svg" alt="" />
                            </div>
                    </div>
                </div>
            )
        })}
    </>
    )
}