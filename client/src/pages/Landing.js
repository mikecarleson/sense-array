import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";



class Landing extends Component {
  state = {
    beer: {}
  };
  componentDidMount() {
    API.getBeer(this.props.match.params.id)
      .then(res => this.setState({ beer: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              
            </Jumbotron>
            
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
            <p><a href="/beers">Judge a Beer</a></p>
            </Jumbotron>
           
          </Col>
        </Row>
        
      </Container>
    );
  }
}

export default Landing;
