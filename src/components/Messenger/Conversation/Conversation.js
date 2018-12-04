import React, { Component } from "react";

import * as api from "../../../api/message";
import ConversationBar from "./ConversationBar";
import ConversationContent from "./Content";
import ConversationSection from "./ConversationSection";

const Conversation = ({ username, match, conversation }) => (
  <ConversationSection>
    <ConversationBar
      username={username}
      match={match}
      totalMessages={conversation.length}
    />
    <ConversationContent
      match={match}
      conversation={conversation}
      username={username}
    />
  </ConversationSection>
);

export default Conversation;
