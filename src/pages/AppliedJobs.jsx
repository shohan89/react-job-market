import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredJobApplication } from "../utils/localStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    const handleJobFilter = filter => {
        if(filter === 'all'){
            setDisplayJobs(appliedJobs)
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Onsite")
            setDisplayJobs(onsiteJobs)
        }
    }
    useEffect(()=>{
        const storedJobsIds = getStoredJobApplication();
        if(jobs.length){
            const jobApplied = jobs.filter(job => storedJobsIds.includes(job.id))
            // console.log(jobApplied, jobs, storedJobsIds)
            setAppliedJobs(jobApplied);
            setDisplayJobs(jobApplied);
        }
    },[jobs])
    return (
        <div>
            <h2 className="text-2xl text-center my-6 font-bold">Jobs I applied: {appliedJobs.length}</h2>
            <div className="text-center">
                <details className="dropdown">
                    <summary className="btn m-1">open or close</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={()=>handleJobFilter('all')}><a>All</a></li>
                        <li onClick={()=>handleJobFilter('remote')}><a>Remote</a></li>
                        <li onClick={()=>handleJobFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            <hr  />
            <div className="max-w-7xl mx-auto">
                {
                    displayJobs.map(job => <li key={job.id}>Title: <span>{job.job_title} </span>Company Name: <span>{job.company_name} </span><span>Job Type: {job.remote_or_onsite}</span></li>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;