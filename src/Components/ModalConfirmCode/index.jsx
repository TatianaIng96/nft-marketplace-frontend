import './ModalConfirmCode.scss';

const ModalConfirmCode = () => {
  return (
    <div className="modalConfirmCode">
      <form action="">
        <h3>We have sent a verification email to *****@gmail.com</h3>
        <label htmlFor="code">
          Please enter the 6 digit code sent to your email
          <input type="number" name="code" id="code" />
        </label>
        <div className="buttonsContainer">
          <button type="button" className="cancelButton">Cancel</button>
          <button type="submit" className="confirmButton">Verify</button>
        </div>
      </form>
    </div>
  );
};

export default ModalConfirmCode;
