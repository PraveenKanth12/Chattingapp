import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./componenets/ChatFeed";
import LoginForm from "./componenets/LoginForm";

function App() {
  if (!localStorage.getItem("userName")) return <LoginForm />;
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="0f1ee53f-a017-4d62-9d68-f4146dfed6da"
        userName="Kanth"
        userSecret="Kanth@123"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
    </div>
  );
}

export default App;
