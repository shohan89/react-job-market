
const SingleCategory = ({ category }) => {
    const { logo, category_name, availability } = category;
    return (
        <div className="w-full bg-linear-to-r from-[#7e8ffe25] to-[#9873ff21] p-8 rounded-[8px]">
            <div className="">
                <img className="p-4 bg-linear-to-r from-[#7e8ffe25] to-[#9873ff21] rounded-[8px] shadow-sm" src={logo} alt={category_name} />
            </div>
            <div className="pt-8">
                <h2 className="font-extrabold text-2xl pb-2">{category_name}</h2>
                <p>{availability}</p>
            </div>
        </div>
    );
};

export default SingleCategory;