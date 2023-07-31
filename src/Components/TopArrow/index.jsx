/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState, useEffect } from 'react';
import './TopArrow.scss';
import { AiOutlineArrowUp } from 'react-icons/ai';

const TopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      const shouldBeVisible = scrollY > 100;
      setIsVisible(shouldBeVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => { return window.removeEventListener('scroll', handleScroll); };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return isVisible ? (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className="top-arrow bounce" onClick={scrollToTop}>
      <AiOutlineArrowUp />
    </div>
  ) : null;
};

export default TopArrow;
