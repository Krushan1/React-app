import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
//class Item extends React.Component{
//    render(){
//        function MyName(props){
//           return <h1>{props.name}</h1>
//        };
//    }
//}
var mydata = data;
console.log(mydata);
class Welcome extends Component{
    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>

        );
    }


}
class Another extends Component{

    render(){
        return(
            <div><Welcome></Welcome></div>

        );
    }
}
//export default Welcome;
export default Another;
//export default Item;
//class App extends Component {
//  render() {
//    return (
//      <div className="App">
//        <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <h1 className="App-title">Welcome to React</h1>
//        </header>
//        <p className="App-intro">
//          To get started, edit <code>src/App.js</code> and save to reload.
//        </p>
//      </div>
//    );
//  }
//}
//
//export default App;
