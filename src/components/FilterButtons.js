import React, { Component } from "react";
import "./Buttons.css";

// on click, this button will have to add a new FilterButton to the FilterBar
class FilterButtons extends Component {
  constructor(props) {
    super(props);
    this.state = { filters: props.filters };
  }

  render() {
    return this.props.values.map(value => (
      <button
        className="Filter-Button"
        style={this.props.isMobile ? {marginTop: '10px'} : {float: 'right'}}
        key={value}
        onClick={() => {
          this.props.addFilter(filters => {
            if (!filters.includes(value)) {
              return filters.concat([value]);
            }
            return filters;
          });
          this.props.filterJobs(value)
        }
        }
      >
        {value}
      </button>
    ));
  }
}

export default FilterButtons;
