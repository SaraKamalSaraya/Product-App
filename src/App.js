import './App.css';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import { BrowserRouter } from 'react-router-dom';
import Router from './Router/Router';
import NavBar from './Components/Nav Bar/NavBar';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import { useState } from 'react';
import { LanguageContext } from './Context/Language';
import { ThemeContext } from './Context/Theme';

function App() {
  const [contextLang, setContextLang] = useState('en')
  const [contextTheme, setContextTheme] = useState('light')

  return (

    <div className="App">
      <BrowserRouter>
        <div className={contextLang == 'ar' ? 'text-right' : 'text-left'} dir={contextLang == 'ar' ? 'rtl' : 'ltr'}>
          <LanguageContext.Provider value={{ contextLang, setContextLang}}>
            <div className={contextTheme == 'light' ? 'bg-light' : 'bg-dark'}>
            <ThemeContext.Provider value={{ contextTheme, setContextTheme }}>
              <NavBar />
              <Router />
            </ThemeContext.Provider>
            </div>
          </LanguageContext.Provider>
        </div>
      </BrowserRouter>
      {/* <ProductDetails /> */}
    </div>
  );
}

export default App;
