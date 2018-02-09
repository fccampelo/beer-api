import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getFilterBeers } from '../../beer/BeerActions'

class Table extends Component {

  constructor(props) {
    super(props);
    
    this.searchBeer = this.searchBeer.bind(this);
  }

  searchBeer(e) {
    e.preventDefault();
    const beer = document.getElementById('searchBeer').value;
    if(beer)
      this.props.getFilterBeers(beer);
  }

  render() {
    return (
      <div className='col-xs-12'>
        <div className='box'>
          <div className='box-header'>
            <h3 className='box-title'>Listagem de Cerveja</h3>
              <div className='box-tools'>
                 <div className='input-group input-group-sm' ref style={{width: '150px'}}>
                  <input type='text' name='table_search' ref='seachBear' id='searchBeer'
                    className='form-control pull-right' placeholder='Search' />
                  <div className='input-group-btn'>
                    <button type='submit' className='btn btn-success' onClick={ this.searchBeer } ><i className='fa fa-search'></i></button>
                  </div>
                </div>
              </div>
          </div>
          <div className='box-body table-responsive no-padding'>
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome da Cerveja</th>
                  <th>Primeira Fabricação</th>
                  <th>TagLine</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                { this.props.beers.map((beer, index) => {
                  return (     
                    <tr key={ index }>
                      <th>{ beer.id }</th>
                      <th>{ beer.name }</th>
                      <th>{ beer.first_brewed }</th>
                      <th>{ beer.tagline }</th>
                      <th><Link to={`/${ beer.id }`} className='btn btn-info'> Mais infromações</Link> </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    
    )
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({ getFilterBeers }, dispatch);

export default connect(null, mapDispatchToProps)(Table);