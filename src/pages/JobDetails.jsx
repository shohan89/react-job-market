import { Link, useLoaderData, useParams } from "react-router";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    const {job_title, salary, job_description, job_responsibility, educational_requirements, experiences} = job;
    const {phone, email, address} = job.contact_information;
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold text-center py-8">Job Details</h2>
            <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-3">
                    <p className="text-gray-600 leading-8 font-medium"><span className="font-extrabold text-black">Job Description: </span>{job_description}</p><br />
                    <p className="text-gray-600 leading-8 font-medium"><span className="font-extrabold text-black">Job Responsibility: </span>{job_responsibility}</p><br />
                    <p className="text-gray-600 leading-8 font-medium"><span className="font-extrabold text-black">Educational Requirements: </span>{educational_requirements}</p><br />
                    <p className="text-gray-600 leading-8 font-medium"><span className="font-extrabold text-black">Experience: </span>{experiences}</p>
                </div>
                <div className="bg-linear-to-r from-[#7e8ffe25] to-[#9873ff21] rounded-[8px] shadow-lg p-4">
                    <h4 className="text-[20px] font-extrabold mb-6">Job Details</h4>
                    <hr />
                    <div className="pt-6 pb-8">
                        <p className="flex items-center gap-3 text-[20px] font-medium text-gray-600"><span className="font-bold text-black">Salary:</span> {salary}</p>
                        <p className="flex items-center gap-3 text-[20px] font-medium text-gray-600"><span className="font-bold text-black">Tittle:</span> {job_title}</p>
                    </div>
                    <h4 className="text-[20px] font-extrabold mb-6">Contact Details</h4>
                    <hr />
                    <div className="pt-6 pb-8 ">
                        <p className="flex items-center gap-3 text-[20px] font-medium text-gray-600"><span className="font-bold text-black">Phone:</span> {phone}</p>
                        <p className="flex items-center gap-3 text-[20px] font-medium text-gray-600 my-4"><span className="font-bold text-black">Email:</span> {email}</p>
                        <p className="flex items-center gap-3 text-[20px] font-medium text-gray-600"><span className="font-bold text-black">Address:</span> {address}</p>
                    </div>
                    <div className="w-full btn btn-primary">
                        <Link className="">Apply Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;