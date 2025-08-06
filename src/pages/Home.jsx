import CategoryList from "../components/CategoryList";
import FeaturedJobs from "../components/FeaturedJobs";
import Hero from "../components/Hero";
import SectionTittle from "../components/SectionTittle";

const Home = () => {
    return (
        <div>
            <Hero />
            <div className=" pt-32">
                <SectionTittle tittle={'Job Category List'} subTittle={'Explore thousands of job opportunities with all the information you need. Its your future'} />
                <CategoryList />
            </div>
            <div className="max-w-7xl mx-auto pt-32">
                <SectionTittle tittle={'Featured Jobs'} subTittle={'Explore thousands of job opportunities with all the information you need. Its your future'} />
                <FeaturedJobs />
            </div>
        </div>
    );
};

export default Home;