import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredJobApplication } from "../utils/localStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    useEffect(()=>{
        const storedJobsIds = getStoredJobApplication();
        if(jobs.length){
            const jobApplied = jobs.filter(job => storedJobsIds.includes(job.id))
            // console.log(jobApplied, jobs, storedJobsIds)
            setAppliedJobs(jobApplied);
        }
    },[jobs])
    return (
        <div>
            <h2 className="text-2xl text-center my-6 font-bold">Jobs I applied: {appliedJobs.length}</h2>
            <div className="text-center">
                <details className="dropdown">
                    <summary className="btn m-1">open or close</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>All</a></li>
                        <li><a>Remote</a></li>
                        <li><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            <hr  />
            <div className="max-w-7xl mx-auto">
                {
                    appliedJobs.map(job => <li key={job.id}>Title: <span>{job.job_title} </span>Company Name: <span>{job.company_name} </span><span>Job Type: {job.remote_or_onsite}</span></li>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;