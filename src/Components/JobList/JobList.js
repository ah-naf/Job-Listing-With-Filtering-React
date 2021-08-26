import React from "react";
import "./JobList.css";
import Job from "../Job/Job";

function JobList({ jobs, filterFunc }) {
  return (
    <div className="joblist-container">
      {
          jobs.map((job) => {
              return <Job key={job.id} job={job} filterFunc={filterFunc} />
          })
      }
    </div>
  );
}

export default JobList;
