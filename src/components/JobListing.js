import React, { Component } from 'react';
import FilterButtons from './FilterButtons';

class JobListing extends Component {
    render() {
        return <div>
            {this.props.jobInfo.position}
            <FilterButtons addFilter={this.props.addFilter} filters={this.props.filters} values={this.props.jobInfo.languages.concat(this.props.jobInfo.role)} />
        </div>
    }
}

export default JobListing;