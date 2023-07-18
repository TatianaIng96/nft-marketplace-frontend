import './List.scss';

const List = ({list,title}) => {
  return(
    <>
      <h6 className="widget-title">{title}</h6>
      <ul>
        {list.map((item,index)=>(
          <li className="simple-list" key={index}>
            <a rel="preload" href="">   
              {item}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default List;