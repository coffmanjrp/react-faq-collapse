import { FaChevronDown, FaTimes } from 'react-icons/fa';
import Icon from './Icon';

const FAQ = ({ data, setData }) => {
  const handleClick = (idx) => {
    let updateData = [...data];
    updateData[idx].active = !updateData[idx].active;

    setData(updateData);
  };

  return (
    <div className="faq-container">
      {data.length > 0 &&
        data.map((faq, index) => (
          <div key={faq.id} className={`faq${faq.active ? ' active' : ''}`}>
            <h3 className="faq-title">{faq.title}</h3>
            <p className="faq-text">{faq.text}</p>
            <button className="faq-toggle" onClick={() => handleClick(index)}>
              <Icon icon={<FaChevronDown />} className="fa-chevron-down" />
              <Icon icon={<FaTimes />} className="fa-times" />
            </button>
          </div>
        ))}
    </div>
  );
};

export default FAQ;
