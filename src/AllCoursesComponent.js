import React, { Component } from 'react';
import CourseComponent from './CourseComponent';

class AllCoursesComponent extends Component {
    constructor(props){
        super(props);
        this.state= {
            total :0
        };
        this.addPrice = this.addPrice.bind(this);
    }

   addPrice(price){
       this.setState({
           total : this.state.total+price
       });
   }
    render() {
        var courses = this.props.courses.map((item,i) =>{
            return <CourseComponent name = {item.courseName} price = {item.price}  
            sum = {this.addPrice} key ={i}  status = {undefined}/>
        });
        return (
            <div id= "divStyle">
                {courses}
               <h3>Total is {this.state.total} </h3> 
            </div>
        );
    }
}

export default AllCoursesComponent;