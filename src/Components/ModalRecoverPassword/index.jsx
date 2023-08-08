import './ModalRecoverPassword.scss';

const ModalRecoverPassword = () => {
  return (
    <div className="modalRecoverPassword">
      <form action="">
        <h2>Password recovery</h2>
        <label htmlFor="password">
          New Password
          <input type="password" name="password" id="password" />
        </label>
        <label htmlFor="confirm-password">
          Confirm New Password
          <input type="password" name="password" id="confirm-password" />
        </label>
        <div className="buttonsContainer">
          <button type="button" className="cancelButton">Cancel</button>
          <button type="submit" className="confirmButton">Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default ModalRecoverPassword;
