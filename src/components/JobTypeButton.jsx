import { Link } from "react-router";

const JobTypeButton = ({ url, tittle }) => {
    return (
        <Link to={url} className="font-extrabold border border-[#7E90FE] px-5 py-2 rounded-lg shadow-lg">{tittle}</Link>
    );
};

export default JobTypeButton;