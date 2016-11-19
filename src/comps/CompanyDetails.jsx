import React from 'react';


export default class CompanyDetails extends React.Component{
	render(){
		return(
			<div className="companDetailsStyle" style={{backgroundColor:this.props.currentCompany.bgc}}>
				<h1>{this.props.currentCompany.name}</h1>
				<h2>{this.props.currentCompany.desc}</h2>	
			</div>
		);
	}
}