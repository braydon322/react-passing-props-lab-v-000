import React from 'react';

import FruitBasket from './FruitBasket';

export default class App extends React.Component {
  constructor() {
  super();

  this.state = {
    filters: [],
    currentFilter: null,
    fruit: []
  };
 }


componentWillMount() {
  this.getFilters();
   this.getFruit();
}

//Pulled from FilteredFruitList

getFruit = () => {
  fetch('/api/fruit')
    .then(response => response.json())
    .then(items => this.setState({ items }));
}

//Pulled from Filters

getFilters = () => {
  fetch('/api/fruit_types')
    .then(response => response.json())
    .then(filters => this.setState({ filters }));
}

updateFilter = event => {
    console.log('update filter to: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    return (
      <FruitBasket
        fruit={this.state.fruit}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        onUpdateFilter={this.updateFilter}
      />
    );
 }


}
