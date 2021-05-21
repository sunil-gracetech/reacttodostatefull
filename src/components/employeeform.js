import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


class EmployeeForm extends React.Component{

    constructor(props){
        super(props)    
        this.state={id:null,"name":"","age":"",gender:""}
    }
    
    componentWillReceiveProps(props) {
       // console.log(props)
        this.setState(props.emp)
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
//        const classes = useStyles();

        return <div  className="card">
            <form onSubmit={this.HandleSubmit}>
                <div className="form-group">
                    <label>Enter Employee Name .</label>
                    <input type="hidden" value={this.state.id} name="id" onChange={this.handleName} />
                    <input type="text" value={this.state.name} name="name" onChange={this.handleName} />
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />

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
                    {/* <button type="submit" >Add Employee </button> */}
                    <Button variant="contained" color="primary">Add Employee</Button>
                </div>
                
            </form>
        </div>
    }
}

export default EmployeeForm;