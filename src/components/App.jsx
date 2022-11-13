import React, { Component } from "react";

import SectionTitle from "./SectionTitle";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }))
  }

  countTotalFeedbacks = () => {
    return Number(this.state.good + this.state.neutral + this.state.bad)
  }

  countPositivePercentage = () => {
    return this.countTotalFeedbacks() ? Math.round(this.state.good / this.countTotalFeedbacks() * 100) : 0;
  }

  render() {
    return (
      <>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleLeaveFeedback}/>
        </SectionTitle>
        <SectionTitle title="Statistics">
          {this.countTotalFeedbacks()
            ? <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedbacks()}
              positivePercentage={this.countPositivePercentage()} />
            : <Notification message="No feedback given" />}
        </SectionTitle>
      </>
  )}
}

export default App;
