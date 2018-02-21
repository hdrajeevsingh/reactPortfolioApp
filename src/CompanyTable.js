import React from 'react';
import Row from './Row';
import axios from 'axios';
var apiBaseUrl = "http://18.219.201.43:8082/";

class CompanyTable extends React.Component{
    constructor(props){
        super(props);           
    }    

    render(){
        var rows = [];
        
        for(var i=0; i<this.props.tableData.length;i++){
            rows.push(<Row tableData = {this.props.tableData[i]} rowAction={this.props.addPortfolio} />);
        }
        return(
                <table className="table">
                    <thead className="th_dark">
                        <tr>
                            <th scope="col">Ticker (% Holding)</th>
                            <th scope="col">% Change</th>
                            <th scope="col">Technicals</th>
                            <th scope="col">Fundamentals</th>
                            <th scope="col">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        { rows }
                    </tbody>
                </table>
        );
    }
}

export default CompanyTable;