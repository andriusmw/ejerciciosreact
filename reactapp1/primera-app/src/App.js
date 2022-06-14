const Message = ({ className, children }) => {
  return <p className={className}>{children}</p>;
};

function App() {
  return (
    <div className="App">
      <Message className="msg">Hello World</Message>
      <Message className="important-msg" children="Hello Pepe!" />
    </div>
  );
}

export default App;
