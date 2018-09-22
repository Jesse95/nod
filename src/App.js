import React, { Component } from "react";
import LogInComponent from "./auth/logInComponent";
import CreateActivity from "./activity/createActivity";
import logo from "./logo.svg";
import Avatar from 'avataaars'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          style={{
            backgroundColor: "#fda085",
            width: "60%",
            display: "flex",
            alignItems: "center",
            borderRadius: 22,
            justifyContent: "center",
            justifyItems: "center"
          }}
        >
          <header className="App-header">
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
              <div>
                  <Avatar
                      style={{width: '100px', height: '100px'}}
                      avatarStyle='Transparent'
                      topType='Hat'
                      accessoriesType='Blank'
                      facialHairType='BeardMedium'
                      facialHairColor='Black'
                      clotheType='Hoodie'
                      clotheColor='Red'
                      eyeType='Wink'
                      eyebrowType='UpDown'
                      mouthType='Twinkle'
                      skinColor='Pale'
                  />
              </div>
            <h1 className="App-title">Welcome to Nod</h1>
          </header>
        </div>

        <p className="App-intro">To get started, log in here </p>

        <LogInComponent />

        <div style={{ height: 10 }}> </div>
        <CreateActivity />
      </div>
    );
  }
}

export default App;
