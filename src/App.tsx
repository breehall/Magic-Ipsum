import { useState } from 'react';

import './App.scss';

import { Header, Footer, IpsumGenerator } from './views';

function App() {
  return (
    <>
      <Header />

      <IpsumGenerator />
      <Footer />
    </>
  );
}

export default App;
