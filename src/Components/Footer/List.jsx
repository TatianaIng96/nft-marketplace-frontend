import './List.scss';

const List = ({ list, title }) => {
  return (
    <>
      <h6 className="widget-title">{title}</h6>
      <ul>
        {list.map((item, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <li className="simple-list" key={index}>
              <a href="#top">
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default List;
