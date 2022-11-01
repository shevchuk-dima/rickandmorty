import style from "./FilterTabMainStyle.css";

function FilterTabMain(props) {
    const {sort} = props;
  return (
    <div className="filter-tab">
      <div className="filter-wrapper">
        <div className="filter-header">
          <span>Sort by</span>
        </div>
        <div className="filter-items">
          <ul>
            <li onClick={()=>sort('name')}>Name</li>
            <li onClick={()=>sort('status')}>Status</li>
            <li onClick={()=>sort('species')}>Species</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FilterTabMain;
