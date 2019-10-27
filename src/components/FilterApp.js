import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
const products = [
  {
    id : 1,
    name: "cars",
    cost: "BMW"
  },
  {
    id : 2,
    name: "fruits",
    cost: "Apple"
  },
  {
    id : 3,
    name: "fruits",
    cost: "Mango"
  },
  {
    id : 4,
    name: "cars",
    cost: "Toyota"
  },
  {
    id : 5,
    name: "cars",
    cost: "Honda"
  },
  {
   id : 6,
   name: "fruits",
   cost: "Berry"
  }
]

function searchingFor(term) {
  return function(x){
    return x.name.toLowerCase().includes(term.toLowerCase()) || false;
  }
}

class FilterApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : products,
      term : "",
    }
    this.searchHandler = this.searchHandler.bind(this);
  }
  searchHandler(event){
    this.setState({ term : event.target.value })
    console.log(event.target.value);
  }

  render() {
    const {term, people} = this.state;
    return (

      <div className="App">
      <form>
        <select id="lang" onChange={this.searchHandler} value={term}>
          <option value="">--Select--</option>
          <option value="cars">Cars</option>
          <option value="fruits">Fruits</option>
        </select>

      </form>
        {
          products.filter(searchingFor(term)).map( (product) =>

             <div key={product.id}>
               <h2>{product.name}</h2><h5>{product.cost}</h5>
             </div>
         )
        }
      </div>
    );
  }
}

export default FilterApp;