import React from 'react';
import { formField } from './constants';
import { formErrors, formValid, checkErrors } from './validation';
import './form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...formField };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    if (formErrors(this.state.formErrors) && formValid(this.state).valid) {
      alert('Form submit successfully');
      this.setState({ ...formField });
    } else {
      let formErrors = formValid(this.state).formErrors;
      this.setState({ formErrors });
    }
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    const inputValue = { name, value };
    let formErrors = this.state.formErrors;
    formErrors = checkErrors(inputValue, formErrors);

    this.setState({
      formErrors,
      [name]: value
    }, () => console.log(this.state))
  }
  render() {
    const { formErrors } = this.state;
    return (
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
    );
  }
}

export default Form;
