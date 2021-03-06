import React, { Component } from "react";
import TestInput from "../Components/TestInput.jsx";
import TestQuery from "../Components/TestQuery.jsx";
import GenerateTest from "../Components/GenerateTest.jsx";
import TestSuites from "../Components/TestSuites.jsx";
import SchemaTreeD3 from "../Components/schemaTreeD3.jsx";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import Particles from "react-particles-js";
import { Switch } from "react-router-dom";

class Query extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="testTypeContainer">
        <div className="testInput">
          <TestInput
            testSuiteName={this.props.appstate.testSuiteName}
            testDescription={this.props.appstate.testDescription}
            writeTest={this.props.appstate.writeTest}
            selectTest={this.props.selectTest}
            handleChange={this.props.handleChange}
          />
        </div>

        <div className="testQuery">
          <TestQuery
            writeTest={this.props.appstate.writeTest}
            handleChange={this.props.handleChange}
            schema={this.props.appstate.schema}
          />
        </div>

        <div className="generateTest">
          <GenerateTest
            testSuiteName={this.props.appstate.testSuiteName}
            testDescription={this.props.appstate.testDescription}
            writeTest={this.props.appstate.writeTest}
            handleClick={this.props.handleClick}
            generatedTest={this.props.appstate.generatedTest}
            addTestSuite={this.props.addTestSuite}
            updateTestSuite={this.props.updateTestSuite}
            selectTest={this.props.selectTest}
            testSuiteToggler={this.props.appstate.testSuiteToggler}
          />
        </div>
      </div>
    );
  }
}

export default Query;
