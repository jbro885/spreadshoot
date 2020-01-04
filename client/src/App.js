import React from 'react';
// import {render, findDOMNode} from 'react-dom';
import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';

import { Buffer } from "buffer";
import * as Colyseus from "colyseus.js";

import './App.css';

global.Buffer = Buffer;

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.data = [
      ['Planning vacances 2020', 'Dominique', 'Roger', 'Claude', 'Chantal'],
      ['15 juin 2020', 0, 11, 12, 13],
      ['16 juin 2020', 0, 11, 14, 13],
      ['17 juin 2020', 0, 15, 12, 13],
      ['18 juin 2020', 0, 15, 12, 13],
      ['19 juin 2020', 0, 15, 12, 13],
      ['20 juin 2020', 1, 15, 12, 13],
      ['21 juin 2020', 0, 15, 12, 13],
      ['22 juin 2020', 0, 15, 12, 13]
    ];
    this.id = 'main';
    this.hotSettings = {
       data: this.data,
       colHeaders: true,
       rowHeaders: true,
       licenseKey: 'non-commercial-and-evaluation'
     };
    this.hotTableComponent = React.createRef();
    // We connect to the Colyseus server
    const endpoint = 'ws://localhost:2567';
    const client = new Colyseus.Client(endpoint);
    
    const sendKey = function(){
      console.log('send move msg!');
      console.log(this.getSelected());
      this.setCellMeta(1, 3, 'className', 'c-deeporange');
    };
    Handsontable.hooks.add('afterDocumentKeyDown', sendKey);
    
    client.joinOrCreate("spreadshoot").then(room => {
      console.log("joined, room id: " + room.id + ", sess id: " + room.sessionId );
      room.onStateChange.once(function(state) {
        console.log("initial room state:", state);
      });
    }).catch(e => {
      console.error("join error", e);
      // TODO: message en clair pour utilisateur
    });
  }
  
  render() {
    return (
      <div>
       <HotTable ref={this.hotTableComponent} id={this.id} settings={this.hotSettings} tabIndex="0"  />
      </div>
    )
  }
}
export default App;