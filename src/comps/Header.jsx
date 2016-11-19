import React from 'react';

export default class Header extends React.Component{
	render(){
		return(
			<div className="jumbotron text-center">
				<h1>{this.props.title}</h1>

			</div>
		);
	}
}