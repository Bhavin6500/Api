import React, { useEffect, useState } from 'react';
import { Lever } from 'lever';

const LeverExample = () => {
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    // Initialize the Lever client with your API credentials
    const leverClient = new Lever({
      accountName: 'YOUR_ACCOUNT_NAME',
      apiKey: 'YOUR_API_KEY',
    });

    // Fetch job postings
    leverClient.jobPostings().then((response) => {
      const jobPostingsData = response.data;
      setJobPostings(jobPostingsData);
    });
  }, []);

  return (
    <div>
      <h1>Job Postings</h1>
      <ul>
        {jobPostings.map((job) => (
          <li key={job.id}>
            <h2>{job.text}</h2>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeverExample;
