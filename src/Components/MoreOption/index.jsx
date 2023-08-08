import { useState } from 'react';
import { FaEllipsisH } from 'react-icons/fa';
import { ModalShare, ModalReport } from '../ModalShare';
import './MoreOption.scss';

const MoreOption = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openModalReport, setOpenModalReport] = useState(false);
  const [showOptions, setShowOptions] = useState(true);

  return (
    <div className="more">
      <div className="mn">
        <div className="show-more-options btn at-fell f-button">
          <button type="button" onClick={() => { return setShowOptions(!showOptions); }} className="show-more">
            <i>
              <FaEllipsisH />
            </i>
          </button>
          <div className={showOptions ? 'menu-options-hide' :'menu-options-show'}>
            <button type="button" onClick={() => { return setIsOpen(true); }}>Share</button>
            <button type="button" onClick={() => { return setOpenModalReport(true); }}>Report</button>
          </div>
        </div>
        {isOpen && <ModalShare setIsOpen={setIsOpen} />}
        {openModalReport && <ModalReport setOpenModalReport={setOpenModalReport} />}
      </div>
    </div>
  );
};

export default MoreOption;
