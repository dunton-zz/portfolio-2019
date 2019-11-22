import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import Project from "./Project";

class App extends Component {
  render() {
    return (
      <Container>
        <Header
          mainImage="https://s3.amazonaws.com/dunton-portfolio/media/ny.jpg"
          headshot="https://s3.amazonaws.com/dunton-portfolio/media/headshot.png"
        />
        <Project
          name="Hawaii | Naturally Fit"
          link="https://furthermore.equinox.com/hawaii"
          image="https://s3.amazonaws.com/dunton-portfolio/media/hawaii_bg.jpg"
        />
        <Project
          name="Vanguard | Style Quiz"
          link="https://partners.wsj.com/vanguard/style-quiz/"
          image="https://s3.amazonaws.com/dunton-portfolio/media/vanguard.jpg"
        />
        <Project
          name="Service Now | Work Reimagined"
          link="https://partners.wsj.com/servicenow/work-reimagined/"
          image="https://s3.amazonaws.com/dunton-portfolio/media/service_now.jpg"
        />
        <Project
          name="Oscar Watch Tracker"
          link="http://www.theoscarwatch.com/"
          image="https://s3.amazonaws.com/dunton-portfolio/media/oscar-watch.jpg"
        />
        <Project
          name="Cole Haan | Chasing Ambition"
          link="https://partners.wsj.com/chasing-ambition/"
          image="https://s3.amazonaws.com/dunton-portfolio/media/cole-haan.png"
        />

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
