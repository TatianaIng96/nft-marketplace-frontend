import './ModalDeleteUserConfirmation.scss';

const ModalDeleteUserConfirmation = () => {
  return (
    <div className="modalDeleteUserConfirmation">
      <div className="mainContainer">
        <div className="questionContainer">
          Are you sure you want to delete this user?
        </div>
        <div className="buttonsContainer">
          <button type="button" className="cancelButton">Cancel</button>
          <button type="button" className="deleteButton">Yes, delete</button>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteUserConfirmation;
