import { Link } from "react-router";

const ActionButton = ({ tittle, url }) => {
    return (
        <Link to={url} className="font-extrabold text-white bg-linear-to-r from-[#7E90FE] to-[#9873FF] px-7 py-5 rounded-lg shadow-lg hover:scale-105 transition">{tittle}</Link>
    );
};

export default ActionButton;