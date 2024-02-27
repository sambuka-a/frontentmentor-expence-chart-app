import Header from './components/header/Header';
import Expences from './features/expences/Expences';

import './index.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <Expences />
      <div className="attribution">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer">
          Frontend Mentor
        </a>
        . Coded by <a href="https://www.frontendmentor.io/profile/sambuka-a">Sambuka</a>.
      </div>
    </div>
  );
}
export default App;
