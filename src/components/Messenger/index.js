import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import ThreadsContainer from "./ThreadsContainer";
import Conversation from "./Conversation/Conversation";

const Messenger = ({
  showSettings,
  newMessage,
  toggleModal,
  history,
  match
}) => (
  <div className="messenger">
    <ThreadsContainer
      className="messenger"
      showSettings={showSettings}
      newMessage={newMessage}
      history={history}
      match={match}
    />
    <Route path={`/messages/:username`} component={Conversation} />
  </div>
);

Messenger.propTypes = {
  showSettings: PropTypes.func,
  newMessage: PropTypes.func
};

export default Messenger;
