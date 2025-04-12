import Categories from "../Components/Categories";
import MainBanner from "../Components/MainBanner";

const Home = () => {
    return(
        <div className="relative -z-40 mt-10">
            <MainBanner />
            <Categories />
        </div>
    )
}

export default Home;