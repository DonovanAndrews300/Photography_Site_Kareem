import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import TimelineItem from "components/TimelineItem";
import Image from "components/Image";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import nl2br from "utils/nl2br";

import "./About.scss";

const About = ({ className, frontmatter }) => {
  if (!frontmatter.anchor) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, timeline } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
    </PageSection>
  );
};

About.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

About.defaultProps = {
  className: null,
  frontmatter: null,
};

export default About;
