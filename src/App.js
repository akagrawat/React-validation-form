import React,{ Component }from 'react';
import './App.css';

const emailRegex = RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);

const formField = {
  name: "",
  contact: "",
  email: "",
  dob: "",
  gender: "",
  address: "",
  res_code: "",
  formErrors: {
    name: "",
    email: "",
    contact: "",
    dob: "",
    gender: "",
    address: "",
    res_code: "",
  }
} 

const formErrors =  (formErrors) => {
  let  valid = true;
  Object.values(formErrors).forEach(val => {
    if(val.length> 0) {
      valid = false;
    }
  });
  return valid;
}

const formValid = (state) => {
  let formErrors = state.formErrors;
  let valid = true;
  Object.entries(state).forEach(([key,value]) => {
    if(value.length === 0){
      formErrors[key] = `${key} is required`;
      valid = false;
    }
  });
  return {formErrors, valid};
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {...formField};
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    if(formErrors(this.state.formErrors) && formValid(this.state).valid){
      alert('Form submit successfully');
      this.setState({...formField});
    } else {
      let formErrors = formValid(this.state).formErrors;
      this.setState({formErrors});
    }
  }

  handleChange = e => {
    e.preventDefault();
    const {name, value } =  e.target;
    let formErrors = this.state.formErrors;
    switch(name) {
      case 'name': 
        formErrors.name = (value.length === 0) ? "Name is required" : ( (value.length > 0 && value.length< 3) ? "Name must be minimum 3 characters" : "");
        break;
      case 'contact':
        formErrors.contact = (value.length === 0) ? "Phone number is required" : (isNaN(parseInt(value)) ? "Phone number must be in digits" : ((value.length === 10) ?  "" : "Phone number must be 10 digits"));
        break;
      case 'email':
        formErrors.email = (value.length === 0) ? "Email is required" : ((emailRegex.test(value)) ? "" : "Enter valid email");
        break;
      case 'dob':
        formErrors.dob = (value.length === 0 ) ? "DOB is required" : "";
        break;
      case 'gender':
        formErrors.gender = (value === 'gender') ? "Gender is required" : "";
        break;
      case 'address': 
        formErrors.address = (value.length === 0) ? "Address is required" : ((value.length>0 && value.length < 5) ? "Address must be 5 characters" : "");
        break;
      case "res_code":
        formErrors.res_code = (value.length === 0) ? "Registration code is required" : (((value.length>0 && value.length<3) || value.length >10) ? "Registration code must be between 3 to 10characters" : "");
        break;
      default:
        break;
    }

    this.setState({
      formErrors,
      [name]: value
    }, () => console.log(this.state))
  }
  render() {
    const {formErrors} = this.state;
  return (
    <div className="page-wrapper bg-red p-t-180 p-b-100 font-robo">
        <div className="wrapper wrapper--w960">
            <div className="card card-2">
                <div className="card-heading"></div>
                <div className="card-body">
                    <h2 className="title">Registration Info</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className={(formErrors.name.length > 0) ? "input-border" : "input-group"}>
                            <input className="input--style-2" onBlur={this.handleChange} onChange={this.handleChange} value={this.state.name} type="text" placeholder="Name" name="name" />
                        </div>
                        {formErrors.name.length > 0 && (<span className="errorMessage">{formErrors.name}</span>)}
                        <div className={(formErrors.contact.length > 0) ? "input-border" : "input-group"}>
                            <input className="input--style-2" onBlur={this.handleChange} onChange={this.handleChange} value={this.state.conatct} type="text" placeholder="Phone Number" name="contact" />
                        </div>
                        {formErrors.contact.length > 0 && (<span className="errorMessage">{formErrors.contact}</span>)}
                        <div className={(formErrors.email.length > 0) ? "input-border" : "input-group"}>
                            <input className="input--style-2" onBlur={this.handleChange} onChange={this.handleChange} value={this.state.email} type="text" placeholder="demo@gmail.com" name="email" />
                        </div>
                        {formErrors.email.length > 0 && (<span className="errorMessage">{formErrors.email}</span>)}
                        <div className="row row-space">
                            <div className="col-2">
                                <div className={(formErrors.dob.length > 0) ? "input-border" : "input-group"}>
                                    <input className="input--style-2 js-datepicker" onBlur={this.handleChange} onChange={this.handleChange} value={this.state.dob} type="date" placeholder="Birthdate" name="dob" />
                                    {/* <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i> */}
                                </div>
                                {formErrors.dob.length > 0 && (<span className="errorMessage">{formErrors.dob}</span>)}
                            </div>
                            <div className="col-2">
                                <div className={(formErrors.gender.length > 0) ? "input-border" : "input-group"}>
                                    <div className="rs-select2 js-select-simple select--no-search">
                                        <select value={this.state.gender} onBlur={this.handleChange} onChange={this.handleChange} name="gender">
                                            <option value="gender">Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                        <div className="select-dropdown"></div>
                                    </div>
                                </div>
                                {formErrors.gender.length > 0 && (<span className="errorMessage">{formErrors.gender}</span>)}
                            </div>
                        </div>
                        
                        <div className={(formErrors.address.length > 0) ? "input-border" : "input-group"}>
                            <input className="input--style-2" type="text" onBlur={this.handleChange} placeholder="Current Address" value={this.state.address} onChange={this.handleChange} name="address" />
                        </div>
                        {formErrors.address.length > 0 && (<span className="errorMessage">{formErrors.address}</span>)}
                        <div className="row row-space">
                            <div className="col-2">
                                <div className={(formErrors.res_code.length > 0) ? "input-border" : "input-group"}>
                                    <input className="input--style-2" onBlur={this.handleChange} onChange={this.handleChange} value={this.state.res_code} type="text" placeholder="Registration Code" name="res_code" />
                                </div>
                            </div>
                        </div>
                        {formErrors.res_code.length > 0 && (<span className="errorMessage">{formErrors.res_code}</span>)}
                        <div className="p-t-30">
                            <button className="btn btn--radius btn--green" value="submit" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}
}

export default App;
