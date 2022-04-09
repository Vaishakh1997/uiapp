
import React, { useState } from 'react';
import './App.css';
import Dropdown from './Dropdown'
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DatePicker from 'react-date-picker';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'dark',
        },
      }),
    [prefersDarkMode],
  );

  const [value, onChange] = useState(new Date());
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <div className='main'>
        <div className='col'>
          <Dropdown theme={theme} />
        </div>
        <div className='col'>
        <DatePicker onChange={onChange} value={value} />
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
