import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import History from './Components/History/History';
import Contact from './Components/Contact/Contact';
import Industries from './Components/Industries/Industries';
import Build from './Components/Build/Build';
import SubBuild from './Components/Build/SubBuild';
import Paper from './Components/Build/Paper';
import Printers from './Components/Build/Printers';
import SubBuild2 from './Components/Build/SubBuild2';
import SubProduct from './Components/Products/SubProduct';
import Canon from './Components/Products/Canon';
import SubCanon from './Components/Products/SubCanon';
import Canon2 from './Components/Products/Canon2';
import SubCanon2 from './Components/Products/SubCanon2';
import Canon3 from './Components/Products/Canon3';
import SubCanon3 from './Components/Products/SubCanon3';
import Canon4 from './Components/Products/Canon4';
import Canon5 from './Components/Products/Canon5';
import Canon6 from './Components/Products/Canon6';
import SubCanon6 from './Components/Products/SubCanon6';
import Canon7 from './Components/Products/Canon7';
import SubCanon7 from './Components/Products/SubCanon7';
import Canon8 from './Components/Products/Canon8';
import SubCanon8 from './Components/Products/SubCanon8';
import Canon9 from './Components/Products/Canon9';
import SubProduct2 from './Components/Products/SubProduct2';
import SubProduct3 from './Components/Products/SubProduct3';
import SubProduct5 from './Components/Products/SubProduct5';
import SubProduct4 from './Components/Products/SubProduct4';
import SubProduct6 from './Components/Products/SubProduct6';
import Products from './Components/Products/Products';
import Colors from './Components/Products/Colors';
function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/history' element={<History/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/industries' element={<Industries/>}/>
    <Route path='/products' element={<Products/>}/>

    <Route path='/build' element={<Build/>}/>
    <Route path='/subBuild' element={<SubBuild/>}/>
    <Route path='/paper' element={<Paper/>}/>
    <Route path='/printers' element={<Printers/>}/>
    <Route path='/subBuild2' element={<SubBuild2/>}/>
    <Route path='/subProduct' element={<SubProduct/>}/>
    <Route path='/canon' element={<Canon/>}/>
    <Route path='/canon2' element={<Canon2/>}/>
    <Route path='/canon3' element={<Canon3/>}/>
    <Route path='/canon4' element={<Canon4/>}/>
    <Route path='/canon5' element={<Canon5/>}/>
    <Route path='/canon6' element={<Canon6/>}/>
    <Route path='/canon7' element={<Canon7/>}/>
    <Route path='/canon8' element={<Canon8/>}/>
    <Route path='/canon9' element={<Canon9/>}/>
    <Route path='/colors' element={<Colors/>}/>

    <Route path='/subCanon' element={<SubCanon/>}/>
    <Route path='/subCanon2' element={<SubCanon2/>}/>
    <Route path='/subCanon3' element={<SubCanon3/>}/>
    <Route path='/subCanon6' element={<SubCanon6/>}/>
    <Route path='/subCanon7' element={<SubCanon7/>}/>
    <Route path='/subCanon8' element={<SubCanon8/>}/>
    <Route path='/products/subProduct2' element={<SubProduct2/>}/>
    <Route path='/subProduct3' element={<SubProduct3/>}/>
    <Route path='/subProduct5' element={<SubProduct5/>}/>
    <Route path='/subProduct4' element={<SubProduct4/>}/>
    <Route path='/subProduct6' element={<SubProduct6/>}/>

   </Routes>
   <Footer/>
   </>
  );
}

export default App;
