import React, { Component } from 'react';

class JobListing extends Component {
    render() {
        return <div>
            {this.props.jobInfo.position}
        </div>
    }
}

export default JobListing;