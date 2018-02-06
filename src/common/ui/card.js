import React from 'react';

export default props => (
  <div className="card">
    <img className="card-img-top" src={props.img}  alt={props.title} />
    <div className="card-block">
      <h4 className="card-title"> <b>{props.title}</b></h4>
      <p className="card-text" style={{padding: '20px'}}>{props.description}</p>
      <a href="#" className="btn btn-primary">Voltar para a lista</a>
    </div>
  </div>
);
