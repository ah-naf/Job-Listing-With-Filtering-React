import React from 'react';
import './Job.css';

export default function Job({job, filterFunc}) {
    return (
        <div className="job-container">
        <img src={job.image} alt="" />
        <div className="job-col">
          <p>
            <span className="company">{job.company}</span>
            {job.new && <span className="new">NEW!</span>}
            {job.featured && <span className="featured">FEATURED</span>}
          </p>
          <h1>{job.title}</h1>
          <p className="time-location">
            <span>{job.time}</span>
            <span>|</span>
            <span>{job.type}</span>
            <span>|</span>
            <span>{job.area}</span>
          </p>
        </div>
        <div className="filter-col">
          {job.tags.map((item,index) => {
            return <span onClick={(e) => filterFunc(e,job.id)} className="tag" key={index}>{item}</span>;
          })}
        </div>
      </div>
    );
}