import './App.css';
import bg from "./img/bg.png"
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from "react"
import data from "./data.js";
import Card from "./component/Card.js"
import Detail from './pages/Detail';
import About from './pages/About';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'



function App() {

  let [shoes] = useState(data)
  let navigate = useNavigate();


  return (
    <div className="App">




      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Buble</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            <div className="main-bg" style={{backgroundImage: 'url('+ bg +')'}}></div>
            <div className="container">
              <div className="row">
                {
                  shoes.map((el, i) => {
                    return (
                      <Card shoes={shoes[i]} i={i + 1}/>
                    )
                  })
                }
              </div>
            </div> 
          </>
        } />
        <Route path='/detail' element={<Detail/>} />
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>멤버임</div>} />
          <Route path='location' element={<div>위치임</div>} />
        </Route>

        <Route path='*' element={<div>없는페이지에요</div>} />
      </Routes>




    </div>
  );
}

export default App;
