import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Chart from '../components/Chart';

class Detail extends Component {
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
          <Col size="md-12">
            <Jumbotron>
              <p className="non-link">
                {this.state.beer.name} brewed by {this.state.beer.brewery}
              </p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Chart />          
        </Row>
        
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h3 className="notes">Tasting Notes</h3>
              <p>
                {this.state.beer.decription}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/beers" className="back-link">← Back to Beers</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
