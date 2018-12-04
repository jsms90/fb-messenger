import React, { Component } from "react";

import * as api from "../../../api/message";
import Conversation from "./Conversation";

class ConversationContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      conversation: []
    };
  }

  componentDidMount() {
    this.fetchConversation(this.props.match.params.username);
  }

  fetchConversation = username => {
    this.setState({
      conversation: []
    });
    // the following setTimeout is to simulate network latency in order to show a "loading" component
    setTimeout(() => {
      api.fetchConversation(username).then(messages => {
        this.setState({
          conversation: messages
        });
      });
    }, 1000);
  };

  // https://reactjs.org/docs/react-component.html#componentdidupdate
  componentDidUpdate(prevProps) {
    const needsToFetchUser =
      this.props.match.params.username !== prevProps.match.params.username;

    if (needsToFetchUser) {
      this.fetchConversation(this.props.match.params.username);
    }
  }

  render() {
    const { conversation } = this.state;
    const { match } = this.props;

    return (
      <Conversation
        username={match.params.username}
        match={match}
        conversation={conversation}
      />
    );
  }
}

export default ConversationContainer;
