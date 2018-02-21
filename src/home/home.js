import React from 'react';
import { Link } from 'react-router';

export default props => (
	<section className='content-header'>
		<section className='content'>
			<div className='jumbotron welcome-jumbotron home' style={{ backgroundImage: 'url("../../img/logo1.jpg")' }}>
				<h1>Bem vindo ao Beer!</h1>
				<p>
					Está com sede? Aqui você encontra sua cerveja favorita sem sair de casa
				</p>
				<Link className='btn btn-primary btn-lg' to='/beerlist'>  Ver cerveja </Link>
			</div>
		</section>
	</section>
);
