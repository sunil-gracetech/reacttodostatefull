import React from 'react'
import '../contents/styles/style.css'
class EmployeeCard extends React.Component {
        constructor(){
            super()
        }
   render(){
    return  <tr>
            <td>{this.props.index+1}</td>
            <td>{this.props.employee.name}</td>
            <td>{this.props.employee.age}</td>
            <td>{this.props.employee.gender}</td> 
            <td><button onClick={()=>this.PostIndexEdit(this.props.employee)}>Edit</button>   
            <button onClick={()=>this.PostIndex(this.props.index)}>Delete</button></td>     
        </tr>
   }
   PostIndexEdit=(emp)=>{
    this.props.PostIndexEdit(emp)
   }
    PostIndex=(index)=>{
    this.props.postIndex(index)  
    
    }
}

export default EmployeeCard;