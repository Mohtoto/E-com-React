import Nav from "./components/nav";
import Home from "./pages/home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Books from "./pages/books";
import { books } from './data'
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import React , {useState , useEffect} from "react";



function App() {
  const [cart, setCart] = useState([]);


  function addtoCart(book){

  }
  
  useEffect(() => {
    
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/books'  element={<Books books={books} />} />
          <Route path='/books/:id' element={<BookInfo books={books} addtoCart={addtoCart}/>} /> 
          <Route path='/cart/' element={<Cart books={books}/>} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
