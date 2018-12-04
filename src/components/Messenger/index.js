import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import ThreadsContainer from "./ThreadsContainer";
import ConversationContainer from "./Conversation/ConversationContainer";

const Messenger = ({ showSettings, newMessage, history, match }) => (
  <div className="messenger">
    <ThreadsContainer
      className="messenger"
      showSettings={showSettings}
      newMessage={newMessage}
      history={history}
      match={match}
    />
    <Route path={`/messages/:username`} component={ConversationContainer} />
  </div>
);

Messenger.propTypes = {
  showSettings: PropTypes.func,
  newMessage: PropTypes.func
};

export default Messenger;
