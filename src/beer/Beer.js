import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Tabs from '../common/tab/tabs';
import Card from '../common/ui/card';
import Wiget from '../common/ui/widget';
import TabHeader from '../common/tab/tabHeader';
import TabsHeader  from '../common/tab/tabsHeader';
import TabContent from '../common/tab/tabContent';
import TabsContent from '../common/tab/tabsContent';
import { getBeer } from './BeerActions';
import ListComponent from '../common/list/list';

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
            <div className="row">
               <div className="col-md-12">
                <Wiget className="col-md-2" info={'Nível de PH'} value={data.ph} icon={'line-chart'} />
                <Wiget className="col-md-2" info={'Nível de Atenuação'} value={data.attenuation_level}  icon={'fire'}/>
                <Wiget className="col-md-2" info={'Nome da cerveja'} value={data.name}  icon={'tag'}/>
                <Wiget className="col-md-2" info={'1ª Fabricação'} value={data.first_brewed}  icon={'calendar'}/>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6  card-main">  
                 <Card title={data.name} key={i} description={data.description} img={data.image_url} />
              </div>
              <div className="col-sm-12 col-md-6"> 
                <Tabs>
                  <TabsHeader >
                    <TabHeader  label='Quantidade Malt' icon='bars' target='ingrediente' />
                    <TabHeader  label='Lúpulo da Cerveja' icon='bars' target='sugestao' />
                  </TabsHeader>
                  <TabsContent>
                    <TabContent id='ingrediente'> <ListComponent title={'Malt'} info={data.ingredients.malt} key={data.id}/> </TabContent>
                    <TabContent id='sugestao'>  <ListComponent title={'Lúpulo'} info={data.ingredients.hops} key={data.id}/> </TabContent>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          )
        })}    
      </div>  
    );
  }
};

const mapStateToProps = state => ({
  beer : state.beers.beer
});
const mapDispatchToProps = dispatch => bindActionCreators({ getBeer }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Beer);