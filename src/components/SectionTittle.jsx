
const SectionTittle = ({ tittle, subTittle }) => {
    return (
        <div className="text-center pt-32 pb-8">
            <h2 className='text-[48px] font-extrabold my-4'>{tittle}</h2>
            <p>{subTittle}</p>
        </div>
    );
};

export default SectionTittle;