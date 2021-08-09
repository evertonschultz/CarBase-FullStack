import { Dashboard } from './components/Dashboard';

import { GlobalStyle } from "./styles/global";

import Modal from 'react-modal';

Modal.setAppElement('#root')

function App() {
  
  return (
    <>
      <Dashboard />

      <GlobalStyle />
    </>
  );
}

export default App;
