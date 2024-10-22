
import React from 'react'

export default function StateandProps() {
    constructor() {    
        this.state = {      
            id: 1,      
            name: "test"    
        };  

};

render() {    
    return (      
        <div>        
          <p>{this.state.id}</p>        
          <p>{this.state.name}</p>      
        </div>    
    );  
}
}
