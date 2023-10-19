import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/footer/footer"
import Header from './components/header/header';
import { Home } from './pages/home/Home';
import About from './pages/about/about';

import Contact from './pages/contact/contact';
import Faq from './pages/faq/faq';
import Service from './pages/service/service';
import ServiceDetail from './pages/service/detail';
import BlogList from './pages/blog/blog';



function App() {

  return (
    <>
      
      <Router> 
        <Header/>
          <main>
            <Routes>
              <Route path='/' Component={Home}/>
              <Route path='/about' Component={About}/>
              <Route path='/faq' Component={Faq} />
              <Route path='/contact' Component={Contact}/>
              <Route path='/service' Component={Service}/>
              <Route path='/service-detail' Component={ServiceDetail}/>
              <Route path='/blog' Component={BlogList}/>
            </Routes>
          </main>
        <Footer/>
      </Router>
      
    </>
  )
}

export default App
