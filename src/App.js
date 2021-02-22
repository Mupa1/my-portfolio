import React from 'react';
import { ThemeProvider, responsiveFontSizes, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home';

const App = () => {
  let theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Poppins',
        'sans-serif',
      ].join(','),
    },
  });
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Route path="/" component={Home} />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
