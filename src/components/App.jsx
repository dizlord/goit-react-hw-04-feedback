import React, { useState } from "react";

import SectionTitle from "./SectionTitle";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification";

const App = () => {
  const [feedBack, setFeedback] = useState({good: 0, neutral: 0, bad: 0});

  const handleLeaveFeedback = option => {
    setFeedback(state => ({
      ...feedBack,
      [option]: state[option] + 1,
    }))
  }

  const countTotalFeedbacks = () => {
    return Number(Object.values(feedBack).reduce((previousValue, feedBack) => previousValue + feedBack, 0));
  }

  const countPositivePercentage = () => {
    return countTotalFeedbacks() ? Math.round(feedBack.good / countTotalFeedbacks() * 100) : 0;
  }

  return (
    <>
      <SectionTitle title="Please leave feedback">
        <FeedbackOptions options={Object.keys(feedBack)} onLeaveFeedback={handleLeaveFeedback} />
      </SectionTitle>
      <SectionTitle title="Statistics">
        {countTotalFeedbacks()
          ? <Statistics
            good={feedBack.good}
            neutral={feedBack.neutral}
            bad={feedBack.bad}
            total={countTotalFeedbacks()}
            positivePercentage={countPositivePercentage()} />
          : <Notification message="No feedback given" />}
      </SectionTitle>
    </>
  )
}

export default App;
