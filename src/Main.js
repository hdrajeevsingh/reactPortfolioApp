import React ,{ Component } from 'react';
import Header from './Header';
import Footer from './Footer';
class Main extends Component {

    render() {
      return (
<div>
    <Header/>
    <div className="banner_sec">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner">
                <div className="item active">
                    <img src="img/banner.jpg" alt="Los Angeles"/> </div>
                <div className="item">
                    <img src="img/banner.jpg" alt="Los Angeles"/> </div>
                <div className="item">
                    <img src="img/banner.jpg" alt="Los Angeles"/> </div>
            </div>
        </div>
    </div>
    <div className="market_sec">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>market</h2>
                    <p>Lorem ipsum dolor sit amet, et dolorem eligendi per</p>
                    <div className="table-responsive">
                        <table width="100%" cellSpacing="0" cellPadding="0" className="table">
                            <tbody>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Current Value</th>
                                <th scope="col">Change</th>
                                <th scope="col">% Chg</th>
                                <th scope="col">Open</th>
                                <th scope="col">High</th>
                                <th scope="col">Low</th>
                            </tr>
                            <tr>
                                <td>US Markets</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>Jyoti (Dec 22)</td>
                                <td>6,965.36</td>
                                <td>4.40</td>
                                <td>0.06</td>
                                <td>0.06</td>
                                <td>6,972.88</td>
                                <td>6,961.21</td>
                            </tr>
                            <tr>
                                <td>FTSE 100 (Dec 22)</td>
                                <td>7,607.63</td>
                                <td>3.65</td>
                                <td>0.05</td>
                                <td>0.06</td>
                                <td>7,272.88</td>
                                <td>7,272.88</td>
                            </tr>
                            <tr>
                                <td>FTSE 100 (Dec 22)</td>
                                <td>6,965.36</td>
                                <td>5.20</td>
                                <td>0.06</td>
                                <td>0.03</td>
                                <td>1,272.88</td>
                                <td>1,100.88</td>
                            </tr>
                            <tr>
                                <td>CAC 40 (Dec 22)</td>
                                <td>9,297.63</td>
                                <td>6.65</td>
                                <td>0.05</td>
                                <td>0.06</td>
                                <td>1,100.88</td>
                                <td>1,272.88</td>
                            </tr>
                            <tr>
                                <td>DAX (Dec 22)</td>
                                <td>6,965.36</td>
                                <td>5.20</td>
                                <td>0.06</td>
                                <td>0.04</td>
                                <td>1,272.88</td>
                                <td>1,100.88</td>
                            </tr>
                            <tr>
                                <td>Straits Times (Dec 22)</td>
                                <td>9,297.63</td>
                                <td>6.65</td>
                                <td>0.05</td>
                                <td>0.06</td>
                                <td>1,100.88</td>
                                <td>1,272.88</td>
                            </tr>
                            <tr>
                                <td>FTSE 100 (Dec 22)</td>
                                <td>6,965.36</td>
                                <td>5.20</td>
                                <td>0.06</td>
                                <td>0.06</td>
                                <td>1,100.88</td>
                                <td>1,272.88</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="about_sec">
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <h1>ABOUT US</h1>
                    <p>Lorem ipsum dolor sit amet, et dolorem eligendi per. No unum veritus voluptatibus has, ut duo omnis tritani.
                        No propriae indoctum mea, elit prima lucilius no vix. Te mei alia zril congue, mel te vero vidisse
                        admodum. Quem contentiones per te, ei corpora recteque eum, congue perpetua aliquando ex vim lorem
                        eum congue perpetua vim eum, no propriae indoctum mea elit Lorem ipsum dolor sit amet, et dolorem
                        eligendi per. No unum veritus vo vim lorem eum congue perpetua vim</p>
                    <a href="#">Read More
                        <i className="fa fa-caret-down" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="col-md-5">
                    <img src="img/about_home_img.jpg"/>
                </div>
            </div>
        </div>
    </div>
    <div className="portfolio_sec">
        <div className="container">
            <h1>Top five
                <span>portfolios</span>
            </h1>
            <p>Lorem ipsum dolor sit amet, et dolorem eligendi per</p>
            <ul id="filters" className="clearfix">
                <li>
                    <span>
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                    </span>
                </li>
                <li>
                    <span className="filter" data-filter=".app">Today</span>
                </li>
                <li>
                    <span className="filter active" data-filter=".app, .card, .icon, .logo, .web">Overall</span>
                </li>
            </ul>
            <div id="portfoliolist">
                <div className="portfolio app" data-cat="app">
                    <div className="portfolio-wrapper">
                        <img src="img/port_img.jpg" alt="" /> </div>
                </div>
                <div className="portfolio app" data-cat="app">
                    <div className="portfolio-wrapper">
                        <img src="img/port_img.jpg" alt="" /> </div>
                </div>
                <div className="portfolio app" data-cat="app">
                    <div className="portfolio-wrapper">
                        <img src="img/port_img.jpg" alt="" /> </div>
                </div>
                <div className="portfolio app" data-cat="app">
                    <div className="portfolio-wrapper">
                        <img src="img/port_img.jpg" alt="" /> </div>
                </div>
                <div className="portfolio app" data-cat="icon">
                    <div className="portfolio-wrapper">
                        <img src="img/port_img.jpg" alt="" /> </div>
                </div>
            </div>
        </div>
    </div>
    <div className="wl_tittle">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Top winners
                        <span>losers</span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet, et dolorem eligendi per</p>
                </div>
            </div>
        </div>
    </div>
    <div className="wl_Section">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="winner">
                        <h2>top
                            <span>winners</span>
                        </h2>
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th>Company name</th>
                                    <th>price</th>
                                    <th>Change</th>
                                    <th>%Gain</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Apple</td>
                                    <td>428.45</td>
                                    <td>15.80</td>
                                    <td>3.83</td>
                                </tr>
                                <tr>
                                    <td>Nokia</td>
                                    <td>262.20</td>
                                    <td>8.85</td>
                                    <td>3.49</td>
                                </tr>
                                <tr>
                                    <td>Samsung</td>
                                    <td>262.20</td>
                                    <td>8.85</td>
                                    <td>3.49</td>
                                </tr>
                                <tr>
                                    <td>Nokia</td>
                                    <td>262.20</td>
                                    <td>8.85</td>
                                    <td>3.49</td>
                                </tr>
                                <tr>
                                    <td>Samsung</td>
                                    <td>262.20</td>
                                    <td>8.85</td>
                                    <td>3.49</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="lossr">
                        <h2>top
                            <span>Losers</span>
                        </h2>
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th>Company name</th>
                                    <th>price</th>
                                    <th>Change</th>
                                    <th>%Gain</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Reliance</td>
                                    <td>373.70</td>
                                    <td>-8.65</td>
                                    <td>-2.26</td>
                                </tr>
                                <tr>
                                    <td>Tata</td>
                                    <td>482.50</td>
                                    <td>-10.05</td>
                                    <td>-2.04</td>
                                </tr>
                                <tr>
                                    <td>Jio</td>
                                    <td>563.00</td>
                                    <td>-9.95</td>
                                    <td>-1.74</td>
                                </tr>
                                <tr>
                                    <td>Nokia</td>
                                    <td>96.20</td>
                                    <td>-1.25</td>
                                    <td>-1.28</td>
                                </tr>
                                <tr>
                                    <td>HCL</td>
                                    <td>921.00</td>
                                    <td>-10.55</td>
                                    <td>-1.13</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="ivt_section">
        <h1>Investors</h1>
        <p>Lorem ipsum dolor sit amet, et dolorem eligendi per</p>
        <div className="ivt_inner">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="ivt_icon">
                            <img src="img/ivt_img1.png"/>
                        </div>
                        <h2>Lorem ipsum dolor</h2>
                        <p>Lorem ipsum dolor sit amet, et dolorem eligendi per. No unum veritus voluptatibus</p>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="ivt_icon">
                            <img src="img/ivt_img1.png"/>
                        </div>
                        <h2>Lorem ipsum dolor</h2>
                        <p>Lorem ipsum dolor sit amet, et dolorem eligendi per. No unum veritus voluptatibus</p>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="ivt_icon">
                            <img src="img/ivt_img1.png"/>
                        </div>
                        <h2>Lorem ipsum dolor</h2>
                        <p>Lorem ipsum dolor sit amet, et dolorem eligendi per. No unum veritus voluptatibus</p>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="ivt_icon">
                            <img src="img/ivt_img1.png"/>
                        </div>
                        <h2>Lorem ipsum dolor</h2>
                        <p>Lorem ipsum dolor sit amet, et dolorem eligendi per. No unum veritus voluptatibus</p>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="ivt_icon">
                            <img src="img/ivt_img1.png"/>
                        </div>
                        <h2>Lorem ipsum dolor</h2>
                        <p>Lorem ipsum dolor sit amet, et dolorem eligendi per. No unum veritus voluptatibus</p>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="ivt_icon">
                            <img src="img/ivt_img1.png"/>
                        </div>
                        <h2>Lorem ipsum dolor</h2>
                        <p>Lorem ipsum dolor sit amet, et dolorem eligendi per. No unum veritus voluptatibus</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="en_section">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="en_inner">
                        <span>
                            <h2>Lorem ipsum dolor</h2>
                            <p>Lorem ipsum dolor sit amet, et dolorem eligendi per</p>
                            <div className="en_btn">
                                <a href="#">Enroll Now</a>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</div>
      );
    }
  }

  export default Main;