import React from 'react';

export default props => (
  <div className='widget' >
  <div className="col-md-3 col-sm-6 col-xs-12">
    <div className="info-box">
      <span className="info-box-icon bg-aqua"><i className={`fa fa-${props.icon}`}></i></span>
      <div className="info-box-content">
        <span className="info-box-text"><b> { props.info } </b></span>
        <span className="info-box-number">{ props.value }</span>
      </div>
    </div>
  </div>
  </div>
)
