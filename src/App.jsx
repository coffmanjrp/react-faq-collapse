import { FaChevronDown, FaTimes } from 'react-icons/fa';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        <div className="faq active">
          <h3 className="faq-title">Why shouldn't we trust atoms</h3>
          <p className="faq-text">They make up everything.</p>
          <button className="faq-toggle">
            <FaChevronDown className="fa-chevron-down" />
            <FaTimes className="fa-times" />
          </button>
        </div>

        <div className="faq">
          <h3 className="faq-title">
            What's the object-oriented way to become wealthy?
          </h3>
          <p className="faq-text">Inheritance.</p>
          <button className="faq-toggle">
            <FaChevronDown className="fa-chevron-down" />
            <FaTimes className="fa-times" />
          </button>
        </div>

        <div className="faq">
          <h3 className="faq-title">
            How many tickles does it take to tickle an octopus?
          </h3>
          <p className="faq-text">Ten-tickles!</p>
          <button className="faq-toggle">
            <FaChevronDown className="fa-chevron-down" />
            <FaTimes className="fa-times" />
          </button>
        </div>

        <div className="faq">
          <h3 className="faq-title">What is: 1 + 1?</h3>
          <p className="faq-text">Depends on who are you asking.</p>
          <button className="faq-toggle">
            <FaChevronDown className="fa-chevron-down" />
            <FaTimes className="fa-times" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
