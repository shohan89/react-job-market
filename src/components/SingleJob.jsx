import { AiOutlineDollar } from "react-icons/ai";
import { LuMapPin } from "react-icons/lu";
import ActionButton from "./ActionButton";
import JobTypeButton from "./JobTypeButton";

const SingleJob = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
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
                    <p className="flex items-center text-[20px] font-semibold text-gray-400"><LuMapPin /> {location}</p>
                    <p className="flex items-center gap-4 text-[20px] font-semibold text-gray-400"><AiOutlineDollar /> {salary}</p>
                </div>
                <div className="card-actions">
                    <ActionButton url={`/job/${id}`} tittle={'View Details'} />
                </div>
            </div>
        </div>
    );
};

export default SingleJob;