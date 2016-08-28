import React from 'react';
import {Popover, Tooltip, Button, Modal, OverlayTrigger} from 'react-bootstrap';

import { Form } from 'formsy-react';
import Input from '/client/modules/core/components/input.jsx';



const ModalAddOrEditUser = React.createClass({

  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  submit(data) {
    const {addOrEditUser} = this.props;
    addOrEditUser(data);
    this.close();
  },

  deleteUser(userId) {

    const {delUser} = this.props;
    delUser(userId);
    this.close();

  },

  enableButton() {
    this.setState({ canSubmit: true });
  },

  disableButton() {
    this.setState({ canSubmit: false });
  },

  render() {

    const {user, label} = this.props;
    let objUser;

    // pokud se jedna o nove vytvoreni
    if (!user) {
      objUser = {username: '', profile: {name: '', surname: ''}, emails: [ {address: ''} ]};
    } else {
      objUser = user;
    }

    return (
      <span>
        <Button bsSize="small" bsStyle="warning" onClick={this.open}>
          {label}
        </Button>

        <Modal show={this.state.showModal} onHide={this.close} animation={false} dialogClassName="custom-modal">
          <Modal.Header closeButton>
            <Modal.Title>USER EDIT</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
              <Input value={objUser.profile.name} name="name" label='Name' title="Name" validations="isAlphanumeric" validationError="Name is required" required />
              <Input value={objUser.profile.surname} name="surname" label='Surname' title="Surname" validations="isAlphanumeric" validationError="Surname is requred" required />
              <Input value={objUser.emails[0].address} name="address" label='Email' title="Email" validations="isEmail" validationError="Select valid email address" required />
              <Input value={objUser.profile.telefon} name="telefon" label='Cell number' title="Cell number" validations="isNumeric,isLength:9" validationError="Cell number ex 775123456" required />
              <Input value={objUser.username} name="username" label='Username' title="Username" validations="isAlphanumeric" validationError="Username" required />
              <Input value={objUser.password} type='password' name="password" label='Password' title="Password" validations="isAlphanumeric" validationError="Password" />
              <Input value={objUser._id} type='hidden' name="_id"/>
              <input className="btn btn-primary" type="submit" disabled={!this.state.canSubmit} defaultValue="ULOŽIT" />
            </Form>


          </Modal.Body>
          <Modal.Footer>

            {objUser._id ? objUser._id !== 'YenNb4y8kCkZYdd8i' ? (<a className="btn btn-primary" onClick={this.deleteUser.bind(this,objUser._id)}> DELETE USER </a>) : null : null}

            <Button onClick={this.close}>Zavřít</Button>
          </Modal.Footer>
        </Modal>

      </span>
    );
  }
});

export default ModalAddOrEditUser;
