import { useState } from 'react';
import FAQ from './components/FAQ';
import faqData from './utils/faqData';
import './App.scss';

function App() {
  const [data, setData] = useState(faqData);

  return (
    <div className="App">
      <h1>Frequently Asked Questions</h1>
      <FAQ data={data} setData={setData} />
    </div>
  );
}

export default App;
