(this.webpackJsonpspreadshoot=this.webpackJsonpspreadshoot||[]).push([[0],{212:function(e,t,n){"use strict";(function(e){var o=n(223),a=n(213),s=n(214),r=n(224),c=n(215),i=n(225),l=n(29),d=n.n(l),h=n(216),m=n(34),u=n(221),g=n(222);n(292);e.Buffer=u.Buffer;var p=function(e){function t(e){var n;Object(a.a)(this,t),(n=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={name:"Roger",playerId:"en attente",roomId:"en attente",enemies:[],dead:!1,score:0,deaths:0},n.data=[["Planning vacances 2020","Dominique","Roger","Claude","Chantal"],["15 juin 2020",0,11,12,13],["16 juin 2020",0,11,14,13],["17 juin 2020",0,15,12,13],["18 juin 2020",0,15,12,13],["19 juin 2020",0,15,12,13],["20 juin 2020",1,15,12,13],["21 juin 2020",0,15,12,13],["22 juin 2020",0,15,12,13]],n.hotSettings={data:n.data,colHeaders:!0,rowHeaders:!0,rowHeights:24,selectionMode:"single",licenseKey:"non-commercial-and-evaluation"},n.hotTableComponent=d.a.createRef();var s=new g.Client("ws://localhost:2567"),i=function(e){console.log("Send message: no room joined yet")};return s.joinOrCreate("spreadshoot").then((function(e){console.log("joined, room id: "+e.id+", sess id: "+e.sessionId),n.setState({playerId:e.sessionId,roomId:e.id}),console.log("Table size: ",n.data.length,n.data[0].length),i=function(t){e.send({keycode:t})},e.state.entities.onAdd=function(t,a){a===e.sessionId?(console.log("entity add: this is me!"),n.hotTableComponent.current.hotInstance.selectCell(t.y,t.x)):(console.log("entity add: other player"),n.hotTableComponent.current.hotInstance.setCellMeta(t.y,t.x,"className","c-enemy"),n.hotTableComponent.current.hotInstance.render(),console.log(t),n.setState((function(e){return{enemies:[].concat(Object(o.a)(e.enemies),[{x:t.x,y:t.y,playerId:a,score:t.score}])}}))),t.onChange=function(o){if(a===e.sessionId)n.hotTableComponent.current.hotInstance.selectCell(t.y,t.x),n.setState({score:t.score,dead:t.dead,deaths:t.deaths}),t.dead&&n.hotTableComponent.current.hotInstance.setDataAtCell(t.y,t.x,"\u2020 Perdu \u2020");else{console.log("Enemy moved");var s=Object.assign({},n.state.enemies);for(var r in s)if(s[r].playerId===a){console.log("before",s[r]),n.hotTableComponent.current.hotInstance.setCellMeta(s[r].y,s[r].x,"className",""),n.hotTableComponent.current.hotInstance.render(),s[r].x=t.x,s[r].y=t.y,console.log("after",s[r]);break}n.hotTableComponent.current.hotInstance.setCellMeta(t.y,t.x,"className","c-enemy"),n.hotTableComponent.current.hotInstance.render()}}}})).catch((function(e){console.error("join error",e)})),m.a.hooks.add("beforeKeyDown",(function(e){e.keyCode>=37&&e.keyCode<=40&&(e.stopImmediatePropagation(),i(e.keyCode))})),n}return Object(i.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e;return e="Player id: "+this.state.playerId+", room id: "+this.state.roomId+", enemies: "+this.state.enemies.length,d.a.createElement("div",{className:"main"},d.a.createElement("h2",null,d.a.createElement("img",{className:"logo",src:"logo-400.png",alt:"logo"})," Vacances 2020"),d.a.createElement("p",null,"Vous \xeates ",d.a.createElement("b",null,this.state.name),". Votre score: ",this.state.score," points. Vous \xeates ",this.state.dead?"mort":"(encore) vivant","."),d.a.createElement("p",null,"[",e,"]"),d.a.createElement("div",{className:"tableContainer"},d.a.createElement(h.a,{ref:this.hotTableComponent,id:this.id,settings:this.hotSettings,tabIndex:"0"})))}}]),t}(d.a.Component);t.a=p}).call(this,n(93))},227:function(e,t,n){e.exports=n(293)},232:function(e,t,n){},279:function(e,t){},292:function(e,t,n){},293:function(e,t,n){"use strict";n.r(t);var o=n(29),a=n.n(o),s=n(119),r=n.n(s),c=(n(232),n(212));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(c.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[227,1,2]]]);
//# sourceMappingURL=main.4468085b.chunk.js.map