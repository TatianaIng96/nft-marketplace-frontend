import './Pagination.scss';

const Pagination = () => {
  return (
    <div className="pagination">
      <a className="pagination__button" href="#top">Previous</a>
      <a className="pagination__button-selected" href="#top">1</a>
      <a className="pagination__button" href="#top">2</a>
      <a className="pagination__button" href="#top">3</a>
      <a className="pagination__button" href="#top">Next</a>
    </div>
  );
};

export default Pagination;
