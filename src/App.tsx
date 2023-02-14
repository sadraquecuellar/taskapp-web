import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './styles/global.css';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="w-screen h-screen p-8 flex flex-col items-center relative">
        <Header />
        <Container />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
