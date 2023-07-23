import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';

import { Footer, IpsumGenerator } from './views';

function App() {
  return (
    <>
      <IpsumGenerator />

      <Footer />
    </>
  );
}

export default App;
