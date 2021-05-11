import React from 'react'

class EmployeeForm extends React.Component{

    constructor(){
        super()
        this.state={"name":"","age":"",gender:""}
    }
    handleName=(e)=>{
      //  console.log(e.target.name)
        //console.log(e.target.value) 
        this.setState({[e.target.name]:e.target.value})
    }
    HandleSubmit=(e)=>{
        e.preventDefault()
        //console.log(this.state)
        let data=this.state;
        this.props.postData(data)
        this.resetForm()
    }

    resetForm(){
        let obj={}
        for(let p in this.state)
            obj[p]=""
        this.setState(obj)
    }
    render(){
        return <div  className="card">
            <form onSubmit={this.HandleSubmit}>
                <div className="form-group">
                    <label>Enter Employee Name .</label>
                    <input type="text" value={this.state.name} name="name" onChange={this.handleName} />
                </div>

                <div className="form-group">
                    <label>Enter Employee Age .</label>
                    <input type="text" value={this.state.age} name="age" onChange={this.handleName}  />
                </div>
                
                <div className="form-group">
                    <label>Enter Employee Gender .</label>
                    <input type="text" value={this.state.gender} name="gender" onChange={this.handleName}  />
                </div>
                <div className="form-group">
                    <button type="submit" >Add Employee </button>
                </div>
                
            </form>
        </div>
    }
}

export default EmployeeForm;