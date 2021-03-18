import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWikiText } from "../store/actions/textActions";
import { Row, Container, Spinner, Col, Card, Input, Button } from "reactstrap";
class TextAreaUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text_content: "",
    };
  }

  lc_fetchText(item) {
    this.props.fetchWikiText(item);
  }
  componentDidMount() {
    if (this.props.wikitext != null) {
      this.setState({ mimse: this.props.wikitext.parse.wikitext });
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <Container>
          <Card className="shadow p-4">
            <Row>
              <Col>
                <Input
                  onChange={this.handleChange}
                  type="textarea"
                  value={this.state.text_content}
                  name="text_content"
                  id="exampleText"
                />
                <Button
                  className="mt-2"
                  onClick={() => {
                    this.setState({ text_content: "" });
                    this.props.fetchWikiText(null);
                  }}
                >
                  Reset
                </Button>
              </Col>
              <Col>
                <p>
                  {" "}
                  {this.state.text_content.split(" ").map((item) => {
                    return (
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          this.lc_fetchText(item);
                        }}
                      >
                        {item} &nbsp;
                      </span>
                    );
                  })}{" "}
                </p>
              </Col>
            </Row>
            <Row>
              {this.props.wikitext != null && this.props.loading == false && (
                <Col>
                  <ul>
                    {this.props.wikitext.parse.wikitext
                      .split(",")
                      .map((item) => {
                        return <li>{item}</li>;
                      })}
                  </ul>
                </Col>
              )}

              {this.props.loading == true && (
                <Col className="text-center">
                  <Spinner color="success"></Spinner>
                </Col>
              )}
            </Row>
          </Card>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  wikitext: state.texts.wikitext,
  loading: state.texts.loading,
});
export default connect(mapStateToProps, {
  fetchWikiText,
})(TextAreaUI);
