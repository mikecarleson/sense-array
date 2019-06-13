import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";



class Search extends Component {
  state = {
    beer: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
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
              <p><a href="https://codepen.io/FelixRilling/pen/qzfoc">What Beer Would you Like to judge?</a></p>
            </Jumbotron>
          </Col>
        </Row>
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
      </Container>
    );
  }
}

export default Search;
