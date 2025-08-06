import Hero from "../components/Hero";
import Nav from "../components/Nav";
import SectionTittle from "../components/SectionTittle";

const Home = () => {
    return (
        <div>
            <Nav />
            <Hero />
            <SectionTittle tittle={'Job Category List'} subTittle={'Explore thousands of job opportunities with all the information you need. Its your future'} />
        </div>
    );
};

export default Home;