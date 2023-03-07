import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = state => {
    const result = state.good + state.neutral + state.bad;
    return result;
  };
  countPositiveFeedbackPercentage = state => {
    const { good } = state;
    if (good === 0) {
      return 0;
    }
    const result = this.countTotalFeedback(this.state);
    const percentage = (good * 100) / result;
    return Math.round(percentage);
  };

  addFeedback = option => {
    this.setState(state => ({
      [option]: state[option] + 1,
    }));
  };

  render() {
    <GlobalStyle />;
    const total = this.countTotalFeedback(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage(
                this.state
              )}
            />
          </Section>
        )}
      </>
    );
  }
}
