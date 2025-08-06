import { useEffect, useState } from "react";
import SingleJob from "./SingleJob";

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    useEffect(()=>{
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setFeaturedJobs(data))
    },[]);
    return (
        <div className="grid md:grid-cols-2 gap-6">
            {
                featuredJobs.map(job => <SingleJob key={job.id} job={job} />)
            }
        </div>
    );
};

export default FeaturedJobs;