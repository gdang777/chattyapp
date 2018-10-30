import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Messages from './Message.jsx';


class App extends Component {
  render() {
    return (<div>
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
     </nav>
     <ChatBar/>
     <Messages/>
    </div> 
    );
  }
}
export default App;
