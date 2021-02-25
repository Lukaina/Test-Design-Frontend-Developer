import { FaArrowLeft } from "react-icons/fa";
import "./App.css";

export default function App() {
  return (
    <div className="card">
      <div className="card__hero">
        <div className="card__hero-arrow-left">
          <FaArrowLeft size="20px"/>
        </div>
        <div className="card__hero-content">
          <div className="card__hero-title">Helsinki</div>
          <div className="card__hero-subtitle">
            Finland's southern capital sits on <br /> a peninsula in the Gulf of
            Finland
          </div>
        </div>
      </div>
      <div className="card__companions">
        <div className="card__companions-title">Companions</div>
        <div className="card__companions-avatars">
          <div className="avatar">
            <img
              alt="av"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50"
            />
          </div>
          <div className="avatar">
            <img
              alt="av"
              src="https://uifaces.co/our-content/donated/1H_7AxP0.jpg"
            />
          </div>
          <div className="avatar">
            <img
              alt="av"
              src="https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            />
          </div>
          <div className="avatar">
            <img alt="av" src="https://randomuser.me/api/portraits/men/2.jpg" />
          </div>
          <div className="avatar">
            <img
              alt="av"
              src="https://images-na.ssl-images-amazon.com/images/M/MV5BNDgwNzA4NDYzM15BMl5BanBnXkFtZTgwNTQ4MTM2ODE@._V1_UX172_CR0,0,172,256_AL_.jpg"
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
