import { Link } from 'react-router-dom';
import './Cards.css';

function Cards() {
  return (
    <div className="cards-container">
      <div className="cards">
        <div className="card red">
          <Link to="/findDoctor">
            <p className="tip">Find Your Doctor</p>
          </Link>
        </div>
        <div className="card blue">
          <Link to="">
            <p className="tip">Book Appointment</p>
          </Link>
        </div>
        <div className="card green">
          <Link to="/myprofile">
            <p className="tip">Your Profile</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cards;

