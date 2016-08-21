import React from 'react';
import {Button, Modal} from 'react-bootstrap';

class Status extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {status} = this.props;
    return (
      <div>
  <div className="static-modal custom-modal-alert">
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Warning</Modal.Title>
      </Modal.Header>

      <Modal.Body>
          Connection to server is disconnected! <br/>
          Reconnection -{status.retryCount}x
      </Modal.Body>

    </Modal.Dialog>
  </div>
      </div>
    );
  }
}

export default Status;
