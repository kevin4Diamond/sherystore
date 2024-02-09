import Container from "react-bootstrap/Container";
import { card, Row, Col, Card } from "react-bootstrap";
import Image from "next/image"


const PostsPage = () => {
  
  return (
    <>
    <Container style={{marginTop:30}}>
          <Row> 
            <Col sm={4}>
             <Image
                src="/r-ii.jpg"
                alt="writing"
                width={200}
                height={200}
              />
              </Col>
              <Col sm={3}>
            <Card style={{fontSize:20, padding:40 ,backgroundColor:"rgb(216, 216, 216)"}}>
            Vitamin E, Vitamin C, Zinc oxide, Mineral oil, shea butter, Hyaluronic acid  
            </Card>
            </Col>
          </Row>

    </Container>
    </>
  );
};

export default PostsPage;
