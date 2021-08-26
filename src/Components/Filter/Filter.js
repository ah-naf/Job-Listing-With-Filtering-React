import React from "react";
import "./Filter.css";
import remove from "../../images/icon-remove.svg";

export default function Filter({ filters, removeTag, clearAll }) {
  if(filters.length <= 0) {
      return <div></div>;
  }
  else {
    return (
        <div className="filter-container">
          <div className="filter-tag">
            {filters.map((item, index) => {
              return (
                <div className="filter" key={index}>
                  <p>{item}</p>
                  <button className="remove" onClick={() => removeTag(item)}>
                    <img src={remove} alt="" />
                  </button>
                </div>
              );
            })}
        
          </div>
          <div className="clear-all">
            <button className="clear" onClick={clearAll}>Clear</button>
          </div>
        </div>
      );
  }
}
