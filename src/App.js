import React from 'react';
import './App.css';
import header from './images/bg-header-desktop.svg';
import JobListing from './components/JobListing';
import FilterBar from './components/FilterBar';
import data from './data';

function App() {
  const jobs = data;
  return (
    <div className="App">
      <img
        src={header} alt={"Beautiful Header"}
      />
      <FilterBar />
      <div>
        {
          jobs.map(job => <JobListing jobInfo={job} />)
        }
      </div>
    </div>
  );
}

export default App;
