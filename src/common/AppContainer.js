import React, { Component } from "react";
import './AppContainer.scss'

// class HomePage extends Component {
const AppContainer = (props) => {
  return (
    <div
      class="app-body default"
    >
      <div class="app-container">
        <div
          class="app-container__content"
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}
export default AppContainer