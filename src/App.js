import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LaunchTimer from './Timer';
import { Container, Row, Col } from 'react-bootstrap';



function App() {
  return (
    <Container fluid className="App">
      <Row xs={1} className='hedder_min'>
        <Col><h1 className='Head_ing'>LAUNCHING SOON...</h1></Col>
        <Col><LaunchTimer /></Col>
      </Row>
    </Container>

  );
}



export default App;




