import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/bg.png';
import { useState } from "react"
import data from "./data.js";
import Card from "./Card.js"

function App() {

  let [shoes] = useState(data)


  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Buble</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg" style={{backgroundImage: 'url('+ bg +')'}}></div>
      
      <div className="container">
        <div className="row">
          <Card shoes={shoes[0]} i={1}/>

          {
            shoes.map((el, i) => {
              return (
                <Card shoes={shoes[i]} i={i + 1}/>
              )
            })
          }
        </div>
      </div> 


    </div>
  );
}

export default App;
