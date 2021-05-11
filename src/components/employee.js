import React from 'react'
import EmployeeCard from './employeelist'
import '../contents/styles/style.css'
import EmployeeForm from './employeeform'
import { findDOMNode } from 'react-dom'

class Employee extends React.Component
{
    
    constructor(){
        super()
        this.state={
           employees:[
               {'id':1,'name':"ajay sharma",'age':23,'gender':"male"},
               {'id':2,'name':"vijay",'age':23,'gender':"male"},
               {'id':3,'name':"pawan sharma",'age':23,'gender':"male"},
               {'id':4,'name':"rohit verma",'age':28,'gender':"male"},
               {'id':5,'name':"Arjun kumar",'age':33,'gender':"male"}
           ],
            message:"welcome to employee state"
        }

       // this.addemployee=this.addemployee.bind(this)
    }
    addemployee=(obj)=>{
        var emp=this.state.employees;
        emp.push(obj)
        this.setState({employees:emp})
    }
    deleteRecord=(index)=>{
       // event.preventDefault();
        if(window.confirm("Are you sure ?")){
         //  this.state.employees.splice(index,1)
            let emps=this.state.employees;
            emps.splice(index,1);
            this.setState({employees:emps})
        }
    }
    updateDOM=()=>{
       // window.location.reload()
        this.forceUpdate()
    }
    changeBg=()=>{
        let pp=document.getElementById("pp");
    
        //pp.style.backgroundColor="orange"
       findDOMNode(pp).className="bgs"
    }
    render(){
        let rd=Math.random();
        return <div>
            <h3>Random : {rd}</h3>
            <button onClick={this.updateDOM}>Update DOM</button>
            <hr/>
            <p id="pp">Welcome to React Js . we will learn about react and its API</p>
            <button onClick={this.changeBg}>Change Bg</button>
            <EmployeeForm postData={this.addemployee} />       
            <div className="card-panel">
                <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>age</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                this.state.employees.map((n,i)=>{return <EmployeeCard employee={n} index={i} key={i} postIndex={this.deleteRecord} />
                })
            }
            </tbody>
            </table>
            </div>
        </div>
    }
}

export default Employee;