import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LaunchTimer from './Timer';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Footer from './components/footer';



function App() {
  return (
    <Container fluid className="App">
      <Navbar/>
      <Row xs={1} className='hedder_min'>
        <Col><h1 className='Head_ing'><span className='lanch_'>LAUNCHING</span>  
        <span className='soon_'>SOON...</span>
           </h1></Col>
        <Col><LaunchTimer /></Col>
      </Row>
      <Footer/>
    </Container>

  );
}



export default App;




