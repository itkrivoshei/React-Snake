(this["webpackJsonpreact-snake"]=this["webpackJsonpreact-snake"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(3),o=a.n(r),i=(a(14),a(7)),c=a(1),l=a(4),h=a(5),u=a(8),d=a(6),f=function(e){return s.a.createElement(s.a.Fragment,null,e.snakePart.map((function(e,t){var a={left:"".concat(e[0],"%"),top:"".concat(e[1],"%")};return s.a.createElement("div",{className:"snakePart",key:t,style:a})})))},k=function(e){var t={left:"".concat(e.part[0],"%"),top:"".concat(e.part[1],"%")};return s.a.createElement("div",{className:"food",style:t})},v=function(){return[2*Math.floor((98*Math.random()+1)/2),2*Math.floor((98*Math.random()+1)/2)]},m={food:v(),speed:200,derection:"RIGHT",snakePart:[[0,0],[2,0],[4,0]]},p=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this)).onKeyDown=function(e){switch((e=e||window.event).keyCode){case 38:n.setState({derection:"UP"});break;case 40:n.setState({derection:"DOWN"});break;case 37:n.setState({derection:"LEFT"});break;case 39:n.setState({derection:"RIGHT"})}},n.move=function(){var e=Object(c.a)(n.state.snakePart),t=e[e.length-1];switch(n.state.derection){case"RIGHT":t=[t[0]+2,t[1]];break;case"LEFT":t=[t[0]-2,t[1]];break;case"DOWN":t=[t[0],t[1]+2];break;case"UP":t=[t[0],t[1]-2]}e.push(t),e.shift(),n.setState({snakePart:e})},n.state=m,n}return Object(h.a)(a,[{key:"componentDidUpdate",value:function(){this.ifOutBorder(),this.ifCollapse(),this.ifEat(),this.speed()}},{key:"componentDidMount",value:function(){this.speed(),document.onkeydown=this.onKeyDown}},{key:"speed",value:function(){clearInterval(this.interval),this.interval=setInterval(this.move,this.state.speed)}},{key:"ifOutBorder",value:function(){var e=this.state.snakePart[this.state.snakePart.length-1];(e[0]>=100||e[1]>=100||e[0]<0||e[1]<0)&&this.gameOver()}},{key:"ifCollapse",value:function(){var e=this,t=Object(c.a)(this.state.snakePart),a=t[t.length-1];t.pop(),t.forEach((function(t){a[0]===t[0]&&a[1]===t[1]&&e.gameOver()}))}},{key:"ifEat",value:function(){var e=this.state.snakePart[this.state.snakePart.length-1],t=this.state.food;if(e[0]===t[0]&&e[1]===t[1]){var a=Object(i.a)({},this.state);a.food=v(),a.snakePart=this.incSnake(),a.speed=this.incSpeed(),this.setState(a),this.speed()}}},{key:"incSnake",value:function(){var e=Object(c.a)(this.state.snakePart);return e.unshift([]),e}},{key:"incSpeed",value:function(){if(this.state.speed>50)return this.state.speed-10}},{key:"gameOver",value:function(){alert("Game Over, snake lenght is: ".concat(this.state.snakePart.length)),this.setState(m)}},{key:"render",value:function(){return s.a.createElement("div",{className:"game"},s.a.createElement(f,{snakePart:this.state.snakePart}),s.a.createElement(k,{part:this.state.food}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.e38e02b4.chunk.js.map