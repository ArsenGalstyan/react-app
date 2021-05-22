import React, { Component } from "react";


export default (Comp)=>{
    class NorComp extends Component{
        constructor(props){
            super(props)

            
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);

            this.rgb = `rgb( ${r},${g},${b} )`;
        }
        render(){
                return (
                <>
                    <Comp rgb={this.rgb}/>
                </>
                )

        }
    } 
    return NorComp
}
