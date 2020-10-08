import React from "react";
import "./FilterBarButtons.css";

function FilterBarButtons(props) {
  const clearButton =
    props.filters.length > 0 ? (
      <button className="Filter-Button" onClick={() => props.clearFilters()}>
        clear
      </button>
    ) : null;
  return (
    <div
      className="Filter-Bar"
      style={
        props.filters.length > 0
          ? {
              backgroundColor: 'white'
            }
          : null
      }
    >
      {props.filters.map(filter => (
        <button
          onClick={() => props.deleteFilter(filter)}
          className="Filter-Bar-Button"
          key={filter}
        >
          {filter}
          <img src={"./images/icon-remove.svg"} className="Remove-Icon" alt="Remove" />
        </button>
      ))}
      {clearButton}
    </div>
  );
}

export default FilterBarButtons;
