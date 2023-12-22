//AllB
import './Styling/ButtonStyle.css';
import AlphabeticalB from './AlphabeticalB.js';
import CreateGroupB from './CreateGroupB.js';

// import Navbar from '../components/Navbar.js'
const AllB =()=>{
    return (
      <div className="p-3 mb-2 bg-white text-dark container">
          <span className="GroupTitle">Group</span>
          <div className="buttonStyling">
            <AlphabeticalB />
            <CreateGroupB />
          </div>
      </div>
    );
}
export default AllB;
