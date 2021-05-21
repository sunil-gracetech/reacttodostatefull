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
            message:"welcome to employee state",
            employeeEdit:null
        }

       // this.addemployee=this.addemployee.bind(this)
    }
    addemployee=(obj)=>{
       // console.log(obj)
        if(obj.id===null)
        {
        obj.id=this.state.employees[this.state.employees.length-1].id+1
        var emp=this.state.employees;
        emp.push(obj)
        this.setState({employees:emp})
        }
        else{
            var employee=this.state.employees.filter((e)=>e.id==obj.id);
             let index=this.state.employees.indexOf(employee[0]);
             let emps=this.state.employees;
             emps.splice(index,1,obj);
              this.setState({employees:emps})
        }

    
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
    editRecord=(emp)=>{
       // console.log(emp)
        this.setState({employeeEdit:emp})
    }
    render(){
        let rd=Math.random();
        return <React.Fragment>
            <EmployeeForm postData={this.addemployee} emp={this.state.employeeEdit} />       
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
                this.state.employees.map((n,i)=>{return <EmployeeCard employee={n} index={i} key={i} postIndex={this.deleteRecord}  PostIndexEdit={this.editRecord}/>
                })
            }
            </tbody>
            </table>
            </div>
        </React.Fragment>
    }
}

export default Employee;