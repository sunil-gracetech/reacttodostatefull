import React from 'react'
import '../contents/styles/style.css'
const EmployeeCard=(props)=>{
    return  <tr>
            <td>{props.index+1}</td>
            <td>{props.employee.name}</td>
            <td>{props.employee.gender}</td>
            <td>{props.employee.age}</td> 
            <td><button>Delete</button></td>     
        </tr>
    
}

export default EmployeeCard;