import React, {useEffect, useRef} from 'react';
import Cats from './components/Cats';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getCats } from "./features/store/reducer";
import Category from './components/Category';
import About from './components/About';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"

function App() {

  const firstRenderRef = useRef(true);
  const dispatch = useDispatch();
  // const categoriesId = useSelector(state => state.cats.categoriesId);

  useEffect(() => {
    if (firstRenderRef.current) {
        // dispatch(getCats({categoriesId}))
        dispatch(getCategories())
        firstRenderRef.current = false;
    }
}, []);

  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <Link to="/">cats</Link>
        <Link to="about">about</Link>
        <Category />
      </nav>
        <Routes>
          <Route path="/"  element={<Cats />} />
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
     </div>
  );
}

export default App;
