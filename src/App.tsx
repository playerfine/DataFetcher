import './App.css'
import DataFetcher from './DataFetcher/DataFetcher'
import DataFetcherProvider from './DataFetcher/DataFetcherProvider';
import Content from './components/Content';
import Navbar from './components/Navbar';

function App() {
  const dataFetcher = new DataFetcher();

  return (
    <DataFetcherProvider dataFetcher={dataFetcher}>
      <Navbar />
      <Content />
    </DataFetcherProvider>
  )
}

export default App
