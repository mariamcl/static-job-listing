import React from 'react';
import './FilterBarButtons.css'

function FilterBarButtons(props) {
    const clearButton = props.filters.length > 0 ? (<button className="Filter-Button" onClick={() => props.clearFilters()}>clear</button>) : null;
    return (
        <div className="Filter-Bar">
            {
                props.filters.map(filter => 
                    <button className="Filter-Button" key={filter}>{filter}</button>
                )
            }
            {clearButton}
        </div>
    )
}

export default FilterBarButtons;