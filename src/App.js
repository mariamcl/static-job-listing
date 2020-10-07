import React, { useState } from 'react';
import './App.css';
import header from './images/bg-header-desktop.svg';
import JobListing from './components/JobListing';
import FilterBarButtons from './components/FilterBarButtons';
import data from './data';

function App() {
  let jobs = data;
  const [filters, setFilter] = useState([]);
  const clearFilters = () => {
    setFilter([])
  }

  return (
    <div className="App">
      <img
        src={header} alt={"Beautiful Header"}
      />
      <FilterBarButtons clearFilters={clearFilters} filters={filters} />
      <div>
        {
          jobs.filter(job => {
            if (filters.length > 0) {
              return (filters.includes(job["role"]) || filters.some(e => job["languages"].includes(e)))
            } else {
              return true;
            }
          }).map(job => <JobListing key={job.id} filters={filters} addFilter={setFilter} jobInfo={job} />)
        }
      </div>
    </div>
  );
}

export default App;
