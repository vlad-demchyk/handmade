import './App.scss';
import Header from './pages/components/Header';
import Shop from './pages/page_shop/Shop'

function App() {
  return (
   <>
   <Header/> 
   <section className='page_section'>
   <Shop></Shop>
   </section>
   </>
  );
}

export default App;
