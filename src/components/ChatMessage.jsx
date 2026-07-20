function ChatMessage({ message }) {
  const isBot = message.sender === "bot";

  return (
    <div className={`message ${isBot ? "bot" : "user"}`}>
      <div className="avatar">
        {isBot ? "🤖" : "👤"}
      </div>

      <div className="bubble">
        {message.text}
      </div>
    </div>
  );
}

export default ChatMessage;