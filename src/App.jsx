import './App.scss';
import Header from './pages/components/Header';
import Shop from './pages/page_shop/Shop'
import { DataProvider } from './tools/setContext';

function App() {
  return (
   <DataProvider>
   <Header/> 
   <section className='page_section'>
   <Shop></Shop>
   </section>
   </DataProvider>
  );
}

export default App;
