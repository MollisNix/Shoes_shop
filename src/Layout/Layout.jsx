import {Navigation} from "../components/Navigation/Navigation";
import {Banner} from '../components/Banner/Banner'
import { Marketplace } from '../components/Marketplace/Marketplace'

export const Layout = () => {

    return (
    <>
        <header className="navigation-section my-4">
           <Navigation/>
       </header>

       <section className="banner-section ">
            <Banner/>
       </section>

        <section className="marketplace mt-4">
            <div className="container">
                <div className="row">
                    <div className="col d-flex">
                        <h2 className="marketplace-title">Усі кросівки</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <Marketplace/>
                </div>
            </div>
        </section>

        <footer className="footer-section">
            <Navigation/>
        </footer>
    </>
    )
}