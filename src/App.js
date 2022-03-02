/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import theme from './theme';
import './App.css';

import Home from './pages/Home/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
