import './Footer.scss';

const List = ({list,title}) => {
  return(
    <>
      <div className="footer-neuron">
        <h6 className="widget-title">{title}</h6>
        <ul className="footer-list">
          {list.map((item,index)=>(
            <li className="simple-list" key={index}>
              <a rel="preload" href="">   
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default List;