import { useEffect, useState } from "react";
import { Link } from "react-router";
import SingleJob from "./SingleJob";

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    const [jobLength, setJobLength] = useState(4);
    useEffect(()=>{
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setFeaturedJobs(data))
    },[]);
    return (
        <div >
            <div className="grid md:grid-cols-2 gap-6">
                {
                    featuredJobs.slice(0, jobLength).map(job => <SingleJob key={job.id} job={job} />)
                }
            </div>
            <div onClick={()=>setJobLength(featuredJobs.length)} className={`text-center my-6 ${jobLength === featuredJobs.length && 'hidden'}`}>
                <Link className="btn btn-primary text-center">Show All</Link>
            </div>
        </div>
    );
};

export default FeaturedJobs;