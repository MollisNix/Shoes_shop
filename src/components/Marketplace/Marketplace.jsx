import axios from "axios";
import React from "react";

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
    <section className="marketplace">
        <div className="container">
            <div className="row">
                <div className="col d-flex">
                    <h2 className="marketplace-title">Усі кросівки</h2>
                </div>
            </div>
            <div className="row">
                
                    {goods?.map((item, id)=> {
                        return (
                            <div className="col-3 marketplace-item" key={id}>
                                <img src={item.img} alt="IMg" />
                                <div className="item-info">
                                    <h4 className="item-name">{item.title}</h4>
                                </div>
                                <div className="item-price">
                                    <span className="price-title">Ціна:</span>
                                    <span className="price-value">{item.price}</span>
                                </div>
                            </div>   
                        )
                    })}
            </div>
        </div>
        
   </section>

    )
}