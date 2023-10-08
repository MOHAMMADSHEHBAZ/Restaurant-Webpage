import './App.css';

import Cards from './components/Cards';
import Nav from './components/Nav'
import Slider from './components/Slider';
import Welcome from './components/Welcome';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>
      <Nav name='fOOdy mOOdy'/>
      <Welcome title="Welcome To fOOdy mOOdy!"/>
      <Slider/>
      <Cards/>
      <ContactUs/>
    </>
  );
}

export default App;
