import React from 'react';
import Header from 'comps/Header.jsx';
import Add from 'comps/Add.jsx';
import CompaniesList from 'comps/CompaniesList.jsx';
import CompanyDetails from 'comps/CompanyDetails.jsx';

export default class CompanyManagement extends React.Component{

	constructor(){
		super();
		this.state = {
			companies:[],
			selectedCompany:{}
		};
	}

	componentDidMount(){
		$.ajax({
		  url: 'https://api.myjson.com/bins/466wk',
		  method: 'GET'
		}).then((data) => this.setState({companies:data, selectedCompany:data[0]}));
	}

	handleAdd(name, desc){
		let newComp = {name:name, desc:desc, bgc: '#'+Math.floor(Math.random()*0xffffff).toString(16)};
		let companies = this.state.companies;
		companies.push(newComp);
		this.setState({companies});
	}
	
	handleCompanyClick(i){
		//console.log(i);
		let selectedCompany = this.state.companies[i];
		this.setState({selectedCompany});
	}

	handleCompanyRemove(i){
		//console.log(i);
		let companies = this.state.companies;
		companies.splice(i,1);
		let selectedCompany;
		if(companies.length > 0)
		{
			selectedCompany = companies[0];

		}else{
			selectedCompany = {};
		}
		
		this.setState({companies,selectedCompany});// this.setState({companies:companies,selectedCompany:selectedCompany});
	}

	render(){
		return(
			<div>
				<Header title="Company Management Console"/>
				
				<Add onAdd={this.handleAdd.bind(this)}/>
				<br />

				<CompaniesList companies={this.state.companies}
				onCompanyClick={this.handleCompanyClick.bind(this)}
				onCompanyRemove={this.handleCompanyRemove.bind(this)}/>

				<CompanyDetails currentCompany={this.state.selectedCompany}/>	
			</div>
		);
	}
}