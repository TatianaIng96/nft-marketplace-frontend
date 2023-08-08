import './ModalConfirmAdminRole.scss';

const ModalConfirmAdminRole = () => {
  return (
    <div className="modalConfirmAdminRole">
      <form action="">
        <label htmlFor="password">
          Please verify your role as an administrator by confirming your password
          <input type="password" name="password" id="password" />
        </label>
        <div className="buttonsContainer">
          <button type="button" className="cancelButton">Cancel</button>
          <button type="submit" className="confirmButton">Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default ModalConfirmAdminRole;
