import React, { useState, useEffect } from "react";
import axios from "axios";
import randomSentence from "random-sentence";

import ConversationList from "./ConversationList";
import MessageList from "./MessageList";
function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [user, setActiveUser] = useState(``);
  const [messages, setMessages] = useState([]);
  //   const [messages1, setMessages1] = useState([]);

  useEffect(() => {
    getConversations();
    getMessages();
  }, []);

  useEffect(() => {
    console.log("name useeffect called", user);
    console.log(conversations);
    const s = conversations.filter((conversation) => {
      return conversation.name === user;
    });
    console.log("waht is s", s);
    // setActiveMessages(s[0].messages);
  }, [user]);

  const getMessages = () => {
    var tempMessages = [
      {
        id: 1,
        author: "apple",
        message:
          "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
        timestamp: new Date().getTime(),
      },
      {
        id: 2,
        author: "orange",
        message:
          "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
        timestamp: new Date().getTime(),
      },
      {
        id: 3,
        author: "orange",
        message:
          "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
        timestamp: new Date().getTime(),
      },
      {
        id: 4,
        author: "apple",
        message:
          "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
        timestamp: new Date().getTime(),
      },
      {
        id: 5,
        author: "apple",
        message:
          "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
        timestamp: new Date().getTime(),
      },
      {
        id: 6,
        author: "apple",
        message:
          "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
        timestamp: new Date().getTime(),
      },
      {
        id: 7,
        author: "orange",
        message:
          "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
        timestamp: new Date().getTime(),
      },
      {
        id: 8,
        author: "orange",
        message:
          "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
        timestamp: new Date().getTime(),
      },
      {
        id: 9,
        author: "apple",
        message:
          "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
        timestamp: new Date().getTime(),
      },
      {
        id: 10,
        author: "orange",
        message:
          "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
        timestamp: new Date().getTime(),
      },
    ];
    setMessages([...messages, ...tempMessages]);
  };

  const activeChat = (name) => {
    console.log(name);
    setActiveUser(name);
  };
  const getConversations = () => {
    axios.get("https://randomuser.me/api/?results=20").then((response) => {
      let newConversations = response.data.results.map((result) => {
        return {
          photo: result.picture.large,
          name: `${result.name.first} ${result.name.last}`,
          text:
            // "Hello world! This is a long message that needs to be truncated.",
            randomSentence(),
          // messages[messages.length - 1].message,
          messages: [
            {
              id: 1,
              author: `${result.name.first} ${result.name.last}`,
              message: `hey,how are you! ${result.name.first} ${result.name.last}`,
              timestamp: new Date().getTime(),
            },
            {
              id: 2,
              author: "orange",
              message: `loremipsum long text loremipsum long textloremipsum long textloremipsum long textloremipsum long textloremipsum long textloremipsum long textloremipsum long text ${result.name.first} ${result.name.last}`,
              timestamp: new Date().getTime(),
            },
            {
              id: 3,
              author: "orange",
              message: `hey,how are you! ${result.name.first} ${result.name.last}`,
              timestamp: new Date().getTime(),
            },
            {
              id: 4,
              author: "orange",
              message: `hey,how are you! ${result.name.first} ${result.name.last}`,
              timestamp: new Date().getTime(),
            },
          ],
        };
      });
      setConversations([...conversations, ...newConversations]);
    });
  };

  return (
    <>
      <div className="messenger">
        {/* <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        /> */}

        {/* <Toolbar
          title="Conversation Title"
          rightItems={[
            <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
            <ToolbarButton key="video" icon="ion-ios-videocam" />,
            <ToolbarButton key="phone" icon="ion-ios-call" />
          ]}
        /> */}

        <div className="scrollable sidebar">
          <ConversationList
            conversations={conversations}
            activeChat={activeChat}
          />
        </div>

        <div className="scrollable content">
          <MessageList messages={messages} />
        </div>
      </div>
      <style jsx>{`
        .messenger {
          display: grid;
          width: 100%;
          height: 100vh;
          background: #eeeef1;

          grid-template-columns: 350px auto;
          grid-template-rows: 60px auto 60px;
          grid-column-gap: 1px;
          grid-row-gap: 1px;
        }

        .container {
          padding: 10px;
        }

        .scrollable {
          position: relative;
          overflow-y: scroll;
          -webkit-overflow-scrolling: touch;
        }

        .sidebar {
          background: white;
          grid-row-start: 1;
          grid-row-end: span 3;
        }

        .content {
          background: white;
          grid-row-start: 1;
          grid-row-end: span 3;
        }

        .footer {
          grid-column-start: 2;
          background: white;
        }
      `}</style>
    </>
  );
}

export default Messenger;
