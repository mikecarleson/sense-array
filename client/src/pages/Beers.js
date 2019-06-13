import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import Landing from "../components/Landing";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Beers extends Component {
  state = {
    beers: [],
    name: "",
    brewery: "",
    description: ""
  };

  componentDidMount() {
    this.loadBeers();
  }

  loadBeers = () => {
    API.getBeers()
      .then(res =>
        this.setState({
          beers: res.data,
          name: "",
          brewery: "",
          description: ""
        })
      )
      .catch(err => console.log(err));
  };

  deleteBeer = id => {
    API.deleteBeer(id)
      .then(res => this.loadBeers())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.brewery) {
      API.saveBeer({
        name: this.state.name,
        brewery: this.state.brewery,
        description: this.state.description
      })
        .then(res => this.loadBeers())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Landing />
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <p><a href="/beers">Judge a Beer</a></p>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Beer Name"
              />
              <Input
                value={this.state.brewery}
                onChange={this.handleInputChange}
                name="brewery"
                placeholder="Made By"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description"
              />
              <FormBtn
                disabled={!(this.state.brewery && this.state.name)}
                onClick={this.handleFormSubmit}
              >
                Submit Beer
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
            <p><a href="https://codepen.io/FelixRilling/pen/qzfoc">Beers I have judged?</a></p>
            </Jumbotron>
            {this.state.beers.length ? (
              <List>
                {this.state.beers.map(beer => (
                  <ListItem key={beer._id}>
                    <Link to={"/beers/" + beer._id}>
                      <strong>
                        {beer.name} consumed at {beer.brewery}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBeer(beer._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Beers;
