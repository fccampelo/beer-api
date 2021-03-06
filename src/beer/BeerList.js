import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getListBeers } from './BeerActions';
import Row from '../common/ui/row';
import Table from '../common/ui/table';

class BeerList extends Component {

  componentWillMount() {
    this.props.getListBeers();
  };

  render () {
    return (
      <Row>
        <Table beers={this.props.beers} />
      </Row>  
    )
  };
};

const mapStateToProps = state => ({
  beers : state.beers.beersList
});
const mapDispatchToProps = dispatch => bindActionCreators({ getListBeers }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BeerList);