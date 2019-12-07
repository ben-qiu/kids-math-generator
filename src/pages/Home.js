import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col, ListGroup } from 'react-bootstrap'
import { FaPrint } from 'react-icons/fa';

const Home = () => {
  return (
    <Row className="mt-5">
      <Col sm={4} className='m-auto'>
        <Card>
          <Card.Header>Grade 1 Math</Card.Header>
          <Card.Body>
            <Card.Text>Select the below generators</Card.Text>

            <ListGroup as="ul" horizontal>
              <ListGroup.Item as="li">
                <Link to="/grade/1/addition">Addition <FaPrint/></Link>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <Link to="/grade/1/subtraction">Subtraction <FaPrint/></Link>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>{' '}
      </Col>
    </Row>
  )
}

export default Home
