import React from 'react';
import './JobFunctionPill.css';

function JobFunctionPill({ jobFunction, icon }) {
  return (
    <span className="job-function-pill">
      {icon} {jobFunction}
    </span>
  );
}

export default JobFunctionPill;
