import React, { Component } from 'react';

// Components
import List from './List';
import Input from './Input';

class FruitContainer extends Component {
    constructor(props) {
        super()
        this.state = {
            // initialize the fruit list to the full list passed into props
            fruitsToDisplay: this.props.fruits,
            // initialize the filter value to empty string
            filterValue: ''
        };
    }
//if you're dealing with inputs and the input has values then the parameters will be event
    handleFilterChange = (e) => {
        e.preventDefault();
        let filterValue = e.target.value;
        //remove the fruits that don't contain any filter value
        const filteredFruitList = this.props.fruits.filter(fruit => {
            // return fruit.toLowerCase().includes(filterValue.toLowerCase());

        //     if (fruit.toLowerCase() === filterValue.toLowercase()) {
        //         return true; 
        //     }
        })

        this.setState({ fruitsToDisplay: filteredFruitList })
    }

    render() {
        console.log(this.state.fruitsToDisplay);
        console.log('---- props ----');
        console.log(this.props.fruits);
        // inside of input component, to access props, I will say props.value
        // inside of list component, to access props, I will say props.fruits
        return (
            <div>
               <Input value={this.state.filterValue} onChange={this.handleFilterChange}/>
               <List fruits={this.state.fruitsToDisplay}/>
               
            </div>
        )
    }
}

export default FruitContainer;