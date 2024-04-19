import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddModule from './components/routes/AddModule';
import Dashboard from './components/routes/Dashboard';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Detail from './components/modules/Detail';
import Datas from './components/routes/Datas';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Dashboard using modules</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/add-module">Add Module</Nav.Link>
              <Nav.Link href="/datas">All Datas</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-module" element={<AddModule />} />
            <Route path="/datas" element={<Datas />} />
            <Route path="/detail/:id/:name/:working/:new_update/:description/:dataTypeName/:dataType" element={<Detail/>}/>
          </Routes>
          </header>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
