import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import GlobalStyle from './GlobalStyle';
import Navbar from './components/Navbar';
import SlideBanner from './components/SlideBanner';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <SlideBanner />
      </ThemeProvider>
    </div>
  );
}

export default App;
