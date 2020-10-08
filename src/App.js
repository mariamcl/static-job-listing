import React, { useState } from "react";
import "./App.css";
import JobListing from "./components/JobListing";
import FilterBarButtons from "./components/FilterBarButtons";
import data from "./data";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 375px)" });

  let jobs = data;
  const [filters, setFilter] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const clearFilters = () => {
    setFilter([]);
    setFilteredJobs(jobs);
  };

  // returns an array of the job fields that may be filtered
  const getFilterFields = job => {
    return job["languages"]
      .concat(job["role"])
      .concat(job["level"])
      .concat(job["tools"]);
  };

  const deleteFilter = filter => {
    if (filters.length === 1) {
      clearFilters();
    } else {
      const newFilters = filters.filter(key => key !== filter);
      setFilter(newFilters);
      setFilteredJobs(
        jobs.filter(job =>
          newFilters.some(filter => getFilterFields(job).includes(filter))
        )
      );
    }
  };

  const filterJobs = filter => {
    setFilteredJobs(jobs =>
      jobs.filter(job => getFilterFields(job).includes(filter))
    );
  };

  return (
    <div className="App">
      <img
        src={
          isMobile
            ? "./images/bg-header-mobile.svg"
            : "./images/bg-header-desktop.svg"
        }
        className="App-Header"
        alt="Header"
      />
      <FilterBarButtons
        isMobile={isMobile}
        deleteFilter={deleteFilter}
        clearFilters={clearFilters}
        filters={filters}
      />
      <div>
        {filteredJobs.map(job => (
          <JobListing
            isMobile={isMobile}
            key={job.id}
            filters={filters}
            addFilter={setFilter}
            filterJobs={filterJobs}
            jobInfo={job}
          />
        ))}
      </div>
      <div class="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by Maria Roberts.
      </div>
    </div>
  );
}

export default App;
