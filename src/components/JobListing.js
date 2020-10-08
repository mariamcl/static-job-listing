import React from "react";
import FilterButtons from "./FilterButtons";
import "./JobListing.css";
import { handleListingStyle } from '../utils/styleUtils';

function newPill(isNew) {
  return isNew ? <div className="New-Pill">New!</div> : null;
}

function featuredPill(isFeatured) {
  return isFeatured ? <div className="Featured-Pill">FEATURED</div> : null;
}

function JobListing(props) {
  return (
    <div
      style={handleListingStyle(props.isMobile, props.jobInfo.featured)}
    >
      <img className="Icon" src={props.jobInfo.logo} style={props.isMobile ? {maxWidth: '50px'} : null}></img>
      <span className="Job-Info">
        <span className="Company-Info">
          <div className="Company-Name">{props.jobInfo.company}</div>
          {newPill(props.jobInfo.new)}
          {featuredPill(props.jobInfo.featured)}
        </span>

        <div className="Position">{props.jobInfo.position}</div>
        <div className="Additional">{`${props.jobInfo.postedAt} \u2022 ${props.jobInfo.contract} \u2022 ${props.jobInfo.location}`}</div>
      </span>
      <FilterButtons
        isMobile={props.isMobile}
        addFilter={props.addFilter}
        filterJobs={props.filterJobs}
        filters={props.filters}
        values={props.jobInfo.languages
          .concat(props.jobInfo.role)
          .concat(props.jobInfo.level)
          .concat(props.jobInfo.tools)}
      />
    </div>
  );
}

export default JobListing;
