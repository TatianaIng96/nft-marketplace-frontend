import './ModalDeleteUserConfirmation.scss';

const ModalDeleteUserConfirmation = ({ onCancel, onDelete }) => {
  const handleDelete = () => {
    onCancel(false);
    onDelete(true);
  };

  return (
    <div className="modalDeleteUserConfirmation">
      <div className="mainContainer">
        <div className="questionContainer">
          Are you sure you want to delete this user?
        </div>
        <div className="buttonsContainer">
          <button type="button" onClick={() => { return onCancel(false); }} className="cancelButton">Cancel</button>
          <button type="button" onClick={handleDelete} className="deleteButton">Yes, delete</button>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteUserConfirmation;
