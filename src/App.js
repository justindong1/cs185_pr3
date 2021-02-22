import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      active_tab: 1
    }
  }

  changeTabs = (id) => {
    this.setState({active_tab: id})
  }

  render() {
    const tabs = [
      {
        id: 1,
        title: "Text"
      },
      {
        id: 2,
        title: "Image"
      },
      {
        id: 3,
        title: "Video"
      },
      {
        id: 4,
        title: "Table"
      },
      {
        id: 5,
        title: "Email"
      },
    ];

    return (
      <div>
        <Navbar tabs={tabs} active_tab={this.state.active_tab} changeTabs={this.changeTabs}/>
        <Body active_tab={this.state.active_tab}/>
      </div>
    );
  }
}

export default App;
