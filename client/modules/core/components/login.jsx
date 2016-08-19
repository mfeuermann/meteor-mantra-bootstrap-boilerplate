import React from 'react';
import Formsy from 'formsy-react';
import FRC from 'formsy-react-components';

const { Checkbox, CheckboxGroup, Input, RadioGroup, Row, Select, File, Textarea } = FRC;

 const Login = React.createClass({

   getInitialState() {
    return {
      canSubmit: false
    };
  },
  enableButton() {
    this.setState({
      canSubmit: true
    });
  },
  disableButton() {
    this.setState({
      canSubmit: false
    });
  },
  submit(model) {
    const {checkLoginAction} = this.props;
    checkLoginAction(model.username, model.password);
  },

  render() {

    const {chyba} = this.props;

    return (
        <div className="wrapper">

        <Formsy.Form className='form-signin' onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} ref='form'>
            <h2 className="form-signin-heading" style={{textAlign: 'center'}}>MyApp</h2>
              <Input
                name="username"
                value=""
                type="text"
                label="Username"
                autoComplete="off"
                placeholder="username"
                required
              />
              <Input
                  name="password"
                  value=""
                  label="Password"
                  type="password"
                  placeholder="Password"
                  required
              />

            <button className="btn btn-lg btn-danger btn-block" type="submit" disabled={!this.state.canSubmit}>SignIn</button>
              <div style={{textAlign: 'center', color: 'red'}}> <h3>{chyba}</h3> </div>
        </Formsy.Form>
      </div>
    );
  }
});

export default Login;
