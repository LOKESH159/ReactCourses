import React, { Component } from 'react';

class CourseComponent extends Component {
    constructor(props){
        super(props);
    this.state = {
        active :false
    };
    this.sumPrice = this.sumPrice.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onRemove = this.onRemove.bind(this);
    }

    sumPrice(){
        var status = !this.state.active;
        this.setState({
            active :status
        });
        this.props.sum(status ? this.props.price : -this.props.price);
    }

    onAdd(){
        if(!this.state.active)
            this.sumPrice();
    }
    onRemove(){
        if(this.state.active)
            this.sumPrice();
    }
    render() {
       
        return (
            <div>
                <div>
               <div id ="courses">
               {this.props.name} {this.props.price}
               
               </div> 
               <button onClick = {this.onAdd} id = "add"> ADD </button>
               <button onClick = {this.onRemove} id ="remove"> REMOVE </button>
               </div>
            </div>
        );
    }
}

export default CourseComponent;