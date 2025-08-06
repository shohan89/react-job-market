
const SectionTittle = ({ tittle, subTittle }) => {
    return (
        <div className="text-center py-32">
            <h2 className='text-[48px] font-extrabold my-4'>{tittle}</h2>
            <p>{subTittle}</p>
        </div>
    );
};

export default SectionTittle;