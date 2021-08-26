import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import data from '../../data';
import JobList from '../JobList/JobList';
import Filter from '../Filter/Filter';

function App() {
  const [jobs, setJobs] = useState(data);
  const [filters, setFilters] = useState([]);

  function filterFunc(e,index) {
    let curTag = e.target.innerText;
    let newFilter = filters.filter((item) => item !== curTag);
    newFilter = [...newFilter, curTag];
    setFilters(newFilter);

    const newJobs = jobs.filter((job) => {
      let select = false;
      job.tags.map((tag) => {
        if(tag === curTag) {
          select = true;
        }
        return tag;
      });
      return select
    });

    setJobs(newJobs);
  }

  function removeTag(tag) {
    let temp = [...data];
    let newData = (filters.filter((item) => item !== tag));
    setFilters(newData);
    for(let i=0; i<newData.length; i++) {
      temp = temp.filter((job) => {
        let select = false;
        job.tags.map((tag) => {
          if(tag === newData[i]) {
            select = true;
          }
          return tag;
        });
        return select
      });
    }
    setJobs(temp);
  
  }

  function clearAll() {
    setFilters([]);
    setJobs(data);
  }

  return (
    <main>
      <Header />
      <Filter filters={filters} removeTag={removeTag} clearAll={clearAll} />
      <JobList jobs={jobs} filterFunc={filterFunc} />
    </main>
  );
}

export default App;
