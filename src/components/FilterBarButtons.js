import React from "react";
import "./FilterBarButtons.css";
import { handleFilterBarStyle } from '../utils/styleUtils';

function FilterBarButtons(props) {
  const clearButton =
    props.filters.length > 0 ? (
      <button className="Filter-Button" style={{float: 'right'}} onClick={() => props.clearFilters()}>
        clear
      </button>
    ) : null;

  return (
    <div
      style={handleFilterBarStyle(props.isMobile, props.filters.length > 0)}
    >
      {props.filters.map(filter => (
        <button
          onClick={() => props.deleteFilter(filter)}
          className="Filter-Bar-Button"
          key={filter}
        >
          {filter}
          <img
            src={"./images/icon-remove.svg"}
            className="Remove-Icon"
            alt="Remove"
          />
        </button>
      ))}
      {clearButton}
    </div>
  );
}

export default FilterBarButtons;
