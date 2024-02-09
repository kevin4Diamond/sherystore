import styles from '../styles/LandingPage.module.css';
import Container from "react-bootstrap/Container";
import { card, Row, Col, Card } from "react-bootstrap";
import Image from "next/image"

const PostsPage = () => {
  
  return (
    <div style={{marginTop:70}}>
    <Container >
          <Row> 
            <Col sm={4}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/image.jpeg" />
      <Card.Body style={{backgroundColor:'#a19b7d'}}>
        <Card.Title>Ingredients</Card.Title>
        <Card.Text >
        Vitamin E, Vitamin C, Zinc Oxide, Mineral Oil, Shea Butter, Hyaluronic Acid
        </Card.Text>
      </Card.Body>
    </Card>
              </Col>
              <Col sm={3}>
            
            </Col>
          </Row>

    </Container>
    </div>

    
  );
};

export default PostsPage;
