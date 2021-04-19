import React from "react";
import ConversationSearch from "./ConversationSearch";
import ConversationListItem from "./ConversationListItem";
import Toolbar from "./Toolbar";
import ToolbarButton from "./ToolbarButton";

export default function ConversationList({ conversations, activeChat }) {
  return (
    <div className="conversation-list">
      <Toolbar
        title="Messenger"
        // leftItems={[<ToolbarButton key="cog" icon="ion-ios-cog" />]}
        rightItems={[
          <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />,
        ]}
      />
      <ConversationSearch />
      {conversations.map((conversation) => (
        <ConversationListItem
          key={conversation.name}
          data={conversation}
          activeChat={activeChat}
        />
      ))}
      <style jsx>{`
        .conversation-list {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}
