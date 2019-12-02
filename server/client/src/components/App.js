import React, { Component } from "react";
import styled from "styled-components";
import { uuid } from "uuidv4";
import Header from "./Header";
import Project from "./Project";
import { projectData } from "./ProjectData";

class App extends Component {
  renderProjects = () => {
    return projectData.map(info => {
      const uniqKey = uuid();
      return <Project {...info} key={uniqKey} />;
    });
  };
  render() {
    return (
      <Container>
        <Header
          mainImage="https://s3.amazonaws.com/dunton-portfolio/media/ny.jpg"
          headshot="https://s3.amazonaws.com/dunton-portfolio/media/headshot.png"
        />
        {this.renderProjects()}

        <Project
          name="My Resume"
          link="/resume"
          image="https://s3.amazonaws.com/dunton-portfolio/media/resume.jpg"
        />
        <Project
          name="Contact Me!"
          link="contact"
          image="https://s3.amazonaws.com/dunton-portfolio/media/contact.jpg"
        />
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export default App;
