(this.webpackJsonpbattleship=this.webpackJsonpbattleship||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),r=a.n(c),s=a(5),i=a.n(s),l=(a(11),function(){return Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("h1",{children:"BattleShip"})})}),o=a(3),u=a(2),b=function(e){var t=e.values,a=t.id,r=t.attack,s=t.tableName,i=Object(c.useState)("box"),l=Object(u.a)(i,2),o=l[0],b=l[1];return Object(n.jsx)("div",{className:o,id:"".concat(s).concat(a),onClick:function(){if("Pc"!==s)return r(a);var e=r(a);null===e||(e?b("hit-box"):e||b("no-hit-box"))}})},d=function(e){for(var t=e.values,a=t.turns,c=t.placeFleets,r=t.started,s=t.tableName,i=t.status,l=[],u={attack:function(e){return"Pc"===s?a(e):c(e)},tableName:s},d=0;d<100;d++){var h=Object(n.jsx)(b,{values:Object(o.a)(Object(o.a)({},u),{},{id:d})},d);l.push(h)}var j=r?Object(n.jsxs)("h2",{children:[i," Ships Available ",r]}):null;return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"table-name",children:Object(n.jsxs)("h2",{children:[s," Board"]})}),Object(n.jsx)("div",{className:"table-status",children:j}),Object(n.jsx)("div",{className:"table",children:l})]})},h=function(e){var t=Array(e).fill(!1);return{size:e,status:t,hit:function(e){t[e]||(t[e]=!0)},isSunk:function(){return!t.includes(!1)}}},j=function(){for(var e=Array(100),t=0;t<e.length;t++)e[t]={occupied:!1,ship:null,shipPos:null,isHit:!1};var a=[];return{positions:e,placeShip:function(t,n,c){var r=h(t);return"horizontal"===c?function(t,n){var c=n+t.size-1;if(Math.floor(n/10)!==Math.floor(c/10))return!1;for(var r=n;r<=c;r++)if(e[r].occupied)return!1;for(var s=n;s<=c;s++)e[s].ship=t,e[s].occupied=!0,e[s].shipPos=s-n;return a.push(t),!0}(r,n):function(t,n){var c=n+10*(t.size-1);if(c>99)return!1;for(var r=n;r<=c;r+=10)if(e[r].occupied)return!1;for(var s=n;s<=c;s+=10)e[s].ship=t,e[s].occupied=!0,e[s].shipPos=(s-n)/10;return a.push(t),!0}(r,n)},receiveAttack:function(t){return e[t].occupied?e[t].occupied?(e[t].isHit=!0,e[t].ship.hit(e[t].shipPos),!0):void 0:(e[t].isHit=!0,!1)},allSunk:function(){var e=!0;return a.forEach((function(t){!1===t.isSunk()&&(e=!1)})),e},availableShips:function(){var e=0;return a.forEach((function(t){!1===t.isSunk()&&e++})),e}}},v=function(){var e=j(),t=[],a=[],n=function(e){if(100===t.length)return{isHit:null,mov:-1};for(var a;a=Math.floor(100*Math.random()),t.includes(a););var n=e.receiveAttack(a);return t.push(a),{isHit:n,mov:a}};return{board:e,possibleAttacks:a,randomAttack:n,randomPlace:function(t){for(var a,n=["horizontal","vertical"][Math.floor(2*Math.random())];a=Math.floor(100*Math.random()),!e.placeShip(t,a,n););return a},attack:function(e,a){if(100===t.length||t.includes(a))return null;var n=e.receiveAttack(a);return t.push(a),n},combo:function(e){if(0===a.length)return n(e);var c=Math.floor(Math.random()*a.length),r=a[c];a.splice(c,1);var s=e.receiveAttack(r);return t.push(r),{isHit:s,mov:r}},setPossibleAttacks:function(e){e+10<99&&!t.includes(e+10)&&!a.includes(e+10)&&a.push(e+10),e-10>0&&!t.includes(e-10)&&!a.includes(e-10)&&a.push(e-10),e%10===0&&(e-1)%10===9||t.includes(e-1)||!(e-1>=0)||a.includes(e-1)||a.push(e-1),e%10===9&&(e+1)%10===0||t.includes(e+1)||!(e+1<=99)||a.includes(e+1)||a.push(e+1)}}},f=function(){var e=v(),t=v();return{Player1:e,Player2:t,defaultPos:function(){for(var a=0;a<1;a++)e.board.placeShip(3,0),t.board.placeShip(3,0);return!0},isFinished:function(){return!(!e.board.allSunk()&&!t.board.allSunk())}}},p=function(e){var t=e.values,a=t.shipSize,c=t.started,r=t.direction,s=t.changeDirection,i=t.restartGame,l=a>1?Object(n.jsxs)("button",{children:["Ship size: ",a]}):null,o=c?null:Object(n.jsx)("button",{onClick:s,children:r}),u=Object(n.jsx)("button",{onClick:i,children:"Restart"});return Object(n.jsxs)("div",{className:"buttons",children:[u,o,l]})},O=function(e){var t=e.winner,a=t?Object(n.jsxs)("h3",{children:[t," Wins!"]}):null;return Object(n.jsx)("div",{className:"message",children:a})},m=function(){var e=Object(c.useState)(f()),t=Object(u.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(!1),i=Object(u.a)(s,2),l=i[0],b=i[1],h=Object(c.useState)(0),j=Object(u.a)(h,2),v=j[0],m=j[1],x=Object(c.useState)(6),S=Object(u.a)(x,2),k=S[0],N=S[1],P=Object(c.useState)("horizontal"),A=Object(u.a)(P,2),g=A[0],y=A[1],z=Object(c.useState)(null),M=Object(u.a)(z,2),B=M[0],H=M[1],U=a.Player1,E=a.Player2,F=Object(c.useState)(4),I=Object(u.a)(F,2),w=I[0],C=I[1],D=Object(c.useState)(4),G=Object(u.a)(D,2),J=G[0],R=G[1],W=function(e){if("Pc"===e){var t=E.board.availableShips();R(t)}else if("User"===e){var a=U.board.availableShips();C(a)}},q=function e(t){var a;(a="combo"===t||E.possibleAttacks.length>0?E.combo(U.board):E.randomAttack(U.board)).isHit;var n=document.getElementById("User".concat(a.mov));a.isHit?(n.className="hit-box",E.setPossibleAttacks(a.mov),e("combo")):n.className="no-hit-box"},K=function(){return!(!a.isFinished()||!l)&&(U.board.allSunk()?H("Pc"):E.board.allSunk()&&H("User"),!0)},L=l?Object(n.jsx)("h3",{children:"Attack the enemy"}):Object(n.jsx)("h3",{children:" Place your ships on the User Board"}),Q={shipSize:k,started:l,direction:g,changeDirection:function(){y("horizontal"===g?"vertical":"horizontal")},restartGame:function(){r(f()),b(!1),m(v+1),N(6),H(null),C(4),R(4)}},T={turns:function(e){if(a.isFinished()||!l)return null;var t=U.attack(E.board,e);return W("Pc"),null===t?null:(t||q("random"),W("User"),K(),t)},placeFleets:function(e){l||U.board.placeShip(k,e,g)&&(!function(e,t,a){var n;if("horizontal"===a)for(var c=parseInt(t)+e-1,r=t;r<=c;r++)"box-selected"!==(n=document.getElementById("User".concat(r))).className&&(n.className="box-selected");else if("vertical"===a)for(var s=t+10*(e-1),i=t;i<=s;i+=10)"box-selected"!==(n=document.getElementById("User".concat(i))).className&&(n.className="box-selected")}(k,e,g),E.randomPlace(k),k>1&&N(k-1),2===k&&b(!0))},started:l},V={tableName:"User",status:w},X={tableName:"Pc",status:J},Y=l?Object(n.jsx)(d,{values:Object(o.a)(Object(o.a)({},T),X)},"B".concat(v)):null;return Object(n.jsxs)("div",{className:"board",children:[Object(n.jsxs)("div",{className:"buttons-ins",children:[L,Object(n.jsx)(p,{values:Q}),Object(n.jsx)(O,{winner:B})]}),Object(n.jsxs)("div",{className:"tables-display",children:[Object(n.jsx)(d,{values:Object(o.a)(Object(o.a)({},T),V)},"A".concat(v)),Y]})]})};var x=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(l,{}),Object(n.jsx)(m,{})]})};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.e6778861.chunk.js.map