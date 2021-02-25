import { FaArrowLeft } from "react-icons/fa";
import Avatar1 from './assets/Images/avatar1.jpg';
import Avatar2 from './assets/Images/avatar2.jpg';
import Avatar3 from './assets/Images/avatar3.png';
import Avatar4 from './assets/Images/avatar4.jpg';
import Avatar5 from './assets/Images/avatar5.jpg';
import "./App.css";

export default function App() {
  return (
    <div className="card">
      <div className="card__hero">
        <div className="card__hero-arrow-left">
          <FaArrowLeft size="20px"/>
        </div>
        <div className="card__hero-content">
          <div className="card__hero-title">Helsinki.</div>
          <div className="card__hero-subtitle">
            Finland's southern capital sits on <br /> a peninsula in the Gulf of
            Finland.
          </div>
        </div>
      </div>
      <div className="card__companions">
        <div className="card__companions-title">Companions</div>
        <div className="card__companions-avatars">
          <div className="avatar">
            <img
              alt="av"
              src={Avatar1}
            />
          </div>
          <div className="avatar">
            <img
              alt="av"
              src={Avatar2}
            />
          </div>
          <div className="avatar">
            <img
              alt="av"
              src={Avatar3}
            />
          </div>
          <div className="avatar">
            <img 
              alt="av" 
              src={Avatar4}
            />
          </div>
          <div className="avatar">
            <img
              alt="av"
              src={Avatar5}
            />
          </div>
        </div>
        <div className="card__companions-add-button">
          <span>Add New Companion</span>
        </div>
      </div>
    </div>
  );
}
