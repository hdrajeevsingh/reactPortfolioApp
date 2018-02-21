import React from 'react';
import Sidebar from './Sidebar';
import CompanyTable from './CompanyTable';
import PortfolioTable from './PortfolioTable';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import userConfig from './config';
var apiBaseUrl = "http://18.219.201.43:8082/";

class Portfolio extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addPortfolioTable: false,
            portfolioTableData:[],
            companyShareTableData:[]
        }        
        this.addPortfolio = this.addPortfolio.bind(this);
        this.getPortfolioTable =  this.getPortfolioTable.bind(this);
        this.getCompanyShareTable =  this.getCompanyShareTable.bind(this);
        this.deletePortfolio = this.deletePortfolio.bind(this);
        
    }
    componentWillMount(){
        this.getCompanyShareTable();
        this.getPortfolioTable();
    }
    
    getCompanyShareTable(){
        let that = this;
        console.log(apiBaseUrl);
        axios.get(apiBaseUrl + 'comapanyShare/getCompanyShares')
          .then(function (response) {
            console.log('Table data', response);
            that.setState({
                companyShareTableData: response.data.portfolioList
            });
           
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    getPortfolioTable(){
        let that = this;
        console.log(apiBaseUrl + 'portfolio/getUserPortfolio/' + userConfig['ID']);
        axios.get(apiBaseUrl + 'portfolio/getUserPortfolio/' + userConfig['ID'])
          .then(function (response) {
            console.log('Table data2', response);
            that.setState({
                portfolioTableData: response.data.portfolioList
            });            
           
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    addPortfolio(e,data){
        e.preventDefault();
        console.log('working',data);
        var payload = {
            "tickerName": data.tickerName,
            "tickerId": data.tickerId,
            "userId": userConfig.ID
          }
          let that = this;
          console.log(apiBaseUrl);
          axios.post(apiBaseUrl + 'portfolio/addPortfolio', payload)
            .then(function (response) {
              console.log('portfolia table', response);    
              that.getPortfolioTable();          
      
            })
            .catch(function (error) {
              console.log(error);
            });
    }
    deletePortfolio(e,data){
        e.preventDefault();
        console.log('working');
        var payload = {
            "tickerName": data.tickerName,
            "tickerId": data.tickerId,
            "userId": userConfig.ID
          }
          let that = this;
          console.log(apiBaseUrl);
          axios.post(apiBaseUrl + 'portfolio/deletePortfolio', payload)
            .then(function (response) {
                that.getPortfolioTable();             
      
            })
            .catch(function (error) {
              console.log(error);
            });
    }
    
    render(){
       if(!sessionStorage.getItem("LOGGED_IN")){       
            return (
              <Redirect to={{
                pathname: '/login.htm'               
              }} />
            );           
       }
            
        console.log('====================================');
        console.log('portfolia render1');
        console.log('====================================');
        return(
                <div id="wrapper">
                <Sidebar/>
                    <div id="page-content-wrapper">
                        <div className="content-header">
                            <div className="row">
                                <div className="col-md-1">
                                    <h1>
                                        <a id="menu-toggle" href="#" className="btn btn-default">
                                            <i className="fa fa-bars" aria-hidden="true"></i>
                                        </a>
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="page-content inset">
                            <div className="creat_port">
                                <div className="login_port">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-xs-6">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Search..."/>
                                                <button type="submit">
                                                    <i className="fa fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-6 auto_creat">
                                            <a href="#">Auto create</a>
                                        </div>
                                    </div>
                                    <div className="table-responsive" id="add_tbl ">
                                        
                                        <CompanyTable tableData = {this.state.companyShareTableData} addPortfolio={this.addPortfolio} />
                                    </div>
                                </div>
                                <div className="add_sec">
                                    <div className="row">
                                        <div className="col-md-12 add_port">
                                            <a href="#">Add</a>
                                        </div>
                                    </div>
                                    <h1>10%
                                        <i className="fa fa-long-arrow-up"></i>
                                    </h1>
                                    <p>Lorem ipsum dolor sit amet, et dolorem eligendi per</p>
                                    <div className="table-responsive" id="dlt_tbl">                                       
                                        <PortfolioTable tableData = {this.state.portfolioTableData} deletePortfolio={this.deletePortfolio}/>
                                    </div>
                                </div>
                                <div className="pagi_tbl">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a className="page-link" href="#">Previous</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">1</a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link" href="#">2</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="pt_vsrn">
                                    <ul>
                                        <li>
                                            <div className="pt_resi"></div>
                                            <h6>Your portfolio beta (risk)</h6>
                                        </li>
                                        <li>
                                            <div className="pt_gain"></div>
                                            <h6>Your portfolio beta (risk)</h6>
                                        </li>
                                        <li>
                                            <div className="pt_ovr"></div>
                                            <h6>Your portfolio beta (risk)</h6>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Portfolio;