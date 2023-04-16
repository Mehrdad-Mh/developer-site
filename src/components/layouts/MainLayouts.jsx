import React from 'react';
import TopNav from './../navs/TopNav';
import Header from './../header/Header';
import MainNav from './../navs/MainNav';
import Footer from './../footer/Footer';
import { Helmet } from 'react-helmet';

const MainLayouts = (props) => {
  


    return ( 
<>
<div className="landing-layer">
                <div className="container">
                    
                    <TopNav />
                    <Header/>
                    <Helmet>
                        <title>
                            خود آموز تاپلرن
                        </title>
                    </Helmet>
                </div>
            </div>


            <MainNav />



            <main id="home-page">
                <div className="container">
                    {props.children}
                   

                </div>
            </main>



            <Footer />
</>
     );
}
 
export default MainLayouts;