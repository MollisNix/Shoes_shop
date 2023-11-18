import "./header.scss"

export const Header = () => {

    return (
       <header className="header-section my-4">
        <div className="container">
        <div className="row">
            <div className="col-4">
                <div className="header-section_left d-flex">
                    <img width={40} height={40} src="img/logo.png" alt="Logo Img" />
                    <div className="section-left_content d-flex">
                        <h1 className="shops_name">react sneakers</h1>
                        <p className="shops_tagline">Магазин кращих кросівок</p>
                    </div>
                </div>
            </div>

            <div className="col-4">
                <div className="header-section_right">
                    <nav>
                        <ul className="menu-list">
                            <li className="menu-list_item">
                                <img height={16} width={18} src="img/Group.svg" alt=""/>
                                <p className="list-item_description price">1450 UAH</p>
                            </li>
                            <li className="menu-list_item ">
                                <img height={16} width={18} src="img/Favorite.svg" alt="" />
                                <p className="list-item_description">Закладки</p>
                            </li>
                            <li className="menu-list_item">
                                <img height={16} width={18} src="img/Profile.svg" alt="" />
                                <p className="list-item_description">Профіль</p>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        </div>
       </header>
    )
}