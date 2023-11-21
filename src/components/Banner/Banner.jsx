import './Banner.scss'

export const Banner = () => {
    
    return (
            <div className="container banner-container_modyfier">
                <div className="row">
                    <div className="col-4 ">

                        <div className="banner-left">
                            <img width={99} height={40} src="img/banner-logo.png" alt="Banner Logo"  className='banner-logo'/>

                            <div className="banner-left_content">
                                <span className="banner-text_green">Stan Smith,</span>

                                <span className="banner-text_dark">Forever!</span>

                                <button className="buy-btn">Замовити</button>
                            </div>
                        </div>

                    </div>

                    <div className="col-8 p-0">
                        <div className="banner-right">
                            <img width={641} height={300} src="img/bannerImg.svg" alt="Banner image" />
                        </div>

                    </div>

                </div>
            </div>
    )
}