import React, { Component } from 'react';

class Card extends Component {
 
  render() {
    return (
      <div className="col-sd-12">
        <div className="card">
          <div className="card-content">
            <img className="card-img-top" src={this.props.img}  alt={this.props.title} />
            <div className="card-block">
              <h4 className="card-title"><b>{this.props.title}</b></h4>
              <p className="card-text" style={{padding: '20px'}}>{this.props.description}</p>
              <a href="#" className="btn btn-primary card-btn">Voltar para a lista</a>
            </div>     
          </div>
        </div>
      </div>
    );
  }
}

export default Card