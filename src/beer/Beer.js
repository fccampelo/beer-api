import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Card from '../common/ui/card';
import { getBeer } from './BeerActions';

class Beer extends Component {
  
  componentWillMount() {
    const id = this.props.params.id;
    this.props.getBeer(id);
  };

  render () {
    return (
      <div>
        {this.props.beer.map((data, i) => {
          return (
            <Card title={data.name} key={i} description={data.description} img={data.image_url} />
          )
        })}    
      </div>  
    )
  }

}
const mapStateToProps = state => ({
  beer : state.beers.beer
});
const mapDispatchToProps = dispatch => bindActionCreators({getBeer}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Beer);