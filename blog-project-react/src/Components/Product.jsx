import { Component } from "react"
import React from "react"

class Product extends Component{
    
    render(){
        console.log(this.props)
        return (
            <div className="card">
               <h2>{ this.props.titleTex }</h2>
            </div>
        )
    }
}
export default Product