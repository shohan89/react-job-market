import ActionButton from "./ActionButton";
import JobTypeButton from "./JobTypeButton";

const SingleJob = ({ job }) => {
    const {logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
    return (
        <div className="card bg-base-100 shadow-sm items-start">
            <figure>
                <img
                className="p-6"
                src={logo}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="my-6 space-x-4">
                    <JobTypeButton tittle={remote_or_onsite} />
                    <JobTypeButton tittle={job_type} />
                </div>
                <div className="flex mb-6">
                    <p>{location}</p>
                    <p>{salary}</p>
                </div>
                <div className="card-actions">
                    <ActionButton tittle={'View Details'} />
                </div>
            </div>
        </div>
    );
};

export default SingleJob;