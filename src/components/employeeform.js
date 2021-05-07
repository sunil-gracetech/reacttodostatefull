import React from 'react'

class EmployeeForm extends React.Component{

    render(){
        return <div  className="card">
            <form>
                <div className="form-group">
                    <label>Enter Employee Name .</label>
                    <input type="text" />
                </div>

                <div className="form-group">
                    <label>Enter Employee Age .</label>
                    <input type="text" />
                </div>
                
                <div className="form-group">
                    <label>Enter Employee Gender .</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <button type="submit" >Add Employee </button>
                </div>
                
            </form>
        </div>
    }
}

export default EmployeeForm;