import {  Container, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import NavBar from "../../components/navbar/navbar";
import About from "../about/about";
import Home from "../home/home";

function Layout() {
  return (<Container fluid>
    <Row>
      <NavBar/>
    </Row>
    <Row>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </Row>
  </Container>);
}

export default Layout;