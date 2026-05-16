import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Men from './pages/Men'
import Women from './pages/Women'
import RandomAbout from './pages/RandomAbout'
import Courses from './pages/Courses'
import Cohort1 from './pages/Cohort1'
import AnyCourse from './pages/AnyCourse'
import CourseDetails from './pages/CourseDetails'
import NotFound from './pages/NotFound'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/courses' element={<Courses />}/>

        {/* Nested Routes */}
        <Route path='/product/men' element={<Men />}/>
        <Route path='/product/women' element={<Women />}/>
        <Route path='/courses/cohort1' element={<Cohort1 />}/>
        
        {/* Dynamic Route */}
        <Route path='/about/:id' element={<RandomAbout />}/>
        
        {/* Nested Dynamic Route */}
        <Route path='/courses/:Courseid' element={<AnyCourse />}/>
        <Route path='/courses/:Courseid/detail' element={<CourseDetails />}/>
        
        {/* Not found page */}
        <Route path='*' element= {<NotFound/> }/>
      </Routes>
    </div>
  )
}

export default App