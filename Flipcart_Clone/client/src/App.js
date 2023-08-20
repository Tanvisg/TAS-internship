import { Box } from '@mui/material'

//components
import Header from './components/Header';
import Home from './components/home/Home';

function App() {
  return (
    <div>
      <Header/>
      <Box style={{marginTop: 54}}>
        <Home />
      </Box>
    </div>
  );
}

export default App;
