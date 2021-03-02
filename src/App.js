import { ThemeProvider } from 'styled-components';
import { Theme, GlobalStyle } from './theme';
import * as AllFunds from './pages/AllFunds';
function App() {
  return (
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <AllFunds.GP />
      </ThemeProvider>
  );
}

export default App;
