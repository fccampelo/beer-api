import React , { Component }  from 'react';

class ListComponent extends Component {
 
  render () {
    return (
      <div className="box">
        <div className="box-header with-border">
          <h3 className="box-title">{ this.props.title}</h3>
        </div>
        <div className="box-body">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th style={{width: "10px"}} >#</th>
                <th>Nome</th>
                <th>Quantidade</th>
              </tr>
            </thead>
            <tbody>            
              {this.props.info.map((data, i) => {
                console.log(data)
                return (
                  <tr key={ i }>
                    <th>{ i + 1 }</th>
                    <th>{ data.name }</th>
                    <th>{ data.amount.value } Kg </th>
                  </tr>
                )
              })} 
          </tbody> 
          </table>
        </div>
      </div>
    )
  }
}

export default ListComponent;
