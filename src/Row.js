import React from 'react';
import axios from 'axios';
import userConfig from './config';
var apiBaseUrl = "http://18.219.201.43:8082/";

class Row extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        //     thckerName:'',
        //     tickerId:''
        // }
        //this.addPortfolia = this.props.addPortfolia.bind(this);
    }

    

    render(){
        return(
                <tr>
                    <td data={this.props.tableData._id}>{ this.props.tableData.tickerName }</td>
                    <td>
                        <i className= { (this.props.tableData.percentageChange < 2) ? 'fa fa-long-arrow-down' : 'fa fa-long-arrow-up' }></i>{ this.props.tableData.percentageChange }</td>
                    <td>
                        <i className= { (this.props.tableData.percentageChange < 2) ? 'fa fa-long-arrow-down' : 'fa fa-long-arrow-up' }></i>
                        { this.props.tableData.technicals }
                    </td>
                    <td>
                        <i className= { (this.props.tableData.percentageChange < 2) ? 'fa fa-long-arrow-down' : 'fa fa-long-arrow-up' }></i>{ this.props.tableData.fundamentals }</td>
                    <td>
                        <a onClick={(event)=>{this.props.rowAction(event,{tickerId:this.props.tableData._id,tickerName:this.props.tableData.tickerName})}}>Add</a>
                    </td>
                </tr>
        );
    }
}

export default Row;