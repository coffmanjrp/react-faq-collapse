import FAQ from './components/FAQ';
import faqData from './utils/faqData';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>Frequently Asked Questions</h1>
      <FAQ data={faqData} />
    </div>
  );
}

export default App;
