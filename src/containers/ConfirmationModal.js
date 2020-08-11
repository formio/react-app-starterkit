import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export default class extends Component {
   render() {
    const {
        isOpen,
        closeModal,
        onCancel,
        onSave,
    } = this.props;

    return (
      <>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 className='changes-title'>Warning</h2>
          <div>
            You have unsaved changes. Would you like to save these changes before leaving the editor?
          </div>
          <div>
            <div className="btn-toolbar confirm-buttons">
              <span onClick={onCancel} className="btn btn-danger">Cancel Changes</span>
              <span onClick={onSave} className="btn btn-primary">Save and Continue</span>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}