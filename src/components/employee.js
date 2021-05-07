import React from 'react'
import EmployeeCard from './employeelist'
import '../contents/styles/style.css'
import EmployeeForm from './employeeform'

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
    addemployee=()=>{
        let obj= {'id':6,'name':"Mohit pandit",'age':33,'gender':"male"}
        var emp=this.state.employees;
        emp.push(obj)
        this.setState({employees:emp})
        console.log(emp)
       //alert("hello event")
    }
    render(){
        return <div>
            <h2>Hi from Employee</h2>
            <h3>Message : {this.state.message}</h3>
            <EmployeeForm/>
            
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
                this.state.employees.map((n,i)=>{return <EmployeeCard employee={n} index={i} key={i} />
                })
            }
            </tbody>
            </table>
            </div>
        </div>
    }
}

export default Employee;