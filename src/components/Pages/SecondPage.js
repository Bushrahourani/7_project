import AllECard from "../EventsCard/AllECard"
import GlobalConference from "../Global Conference/GlobalConference"
import TopDestinations from "../TopDestinations/TopDestinations"
import ExploreGroupCard from "../Explore Group Card/ExploreGroupCard"
import Navbar2 from "../Nav/Navbar2"
import Footer from "../Footer/Footer"

const SecondPage = () => {
    return(
        <>  
            <Navbar2/>
            <AllECard/>
            <GlobalConference/>
            <TopDestinations/>
            <ExploreGroupCard/>
            <Footer/>
        </>
    )
}

export default SecondPage;