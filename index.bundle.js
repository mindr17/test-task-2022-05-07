(()=>{"use strict";var e={766:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});const d='<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width,initial-scale=1"> <link rel="shortcut icon" href="#"> <title>Nothing is linked</title> </head> <body> <div class="main"> <div class="area"> </div> </div> </body> </html> '},387:(e,t,s)=>{s.r(t)},586:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{node;constructor(e,t,s,d){const o=t?document.createElement(t):document.createElement("div");if(s){const e=s.split(" ");o.classList.add(...e)}d&&(o.textContent=d),e&&e.append(o),this.node=o}destroy(){this.node.remove()}}},20:function(e,t,s){var d=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=d(s(586));t.default=class{node;constructor(e,t){this.node=this.build(e)}build(e){const t=new o.default(e,"li","list__item");return this.node=t.node,t.node}}},489:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{node;listModel;constructor(e){this.listModel=e}press(e){this.listModel.pressed=e}unPress(){this.listModel.pressed=-1}}},982:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{onChange;isPressedId;constructor(){this.isPressedId=-1}get pressed(){return this.isPressedId}set pressed(e){this.isPressedId=e,this.onChange(this.isPressedId)}}},46:function(e,t,s){var d=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=d(s(586)),i=d(s(20));t.default=class{onChange;node;listController;items;parentNode;listModel;constructor(e,t,s){this.parentNode=e,this.listController=t,this.listModel=s,this.items=[],this.build()}build(){const e=new o.default(this.parentNode,"ul","list");this.node=e.node;for(let t=0;t<16;t++)this.addItem(e.node,this.listController.press,t)}addItem(e,t,s){const d=new i.default(e,s);this.items.push(d),d.node.onclick=()=>{this.listController.press(s)}}update(e){this.items[this.listModel.isPressedId].node.classList.add("_pressed")}}},695:function(e,t,s){var d=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=d(s(586)),i=d(s(489)),n=d(s(46)),l=d(s(982));t.default=()=>{const e=document.body,t=new o.default(e,"div","main"),s=new l.default,d=new i.default(s),r=new n.default(t.node,d,s),a=new n.default(t.node,d,s),u=new n.default(t.node,d,s);s.onChange=()=>{r.update(s.isPressedId),a.update(s.isPressedId),u.update(s.isPressedId)}}},480:function(e,t,s){var d=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),(0,d(s(695)).default)()}},t={};function s(d){var o=t[d];if(void 0!==o)return o.exports;var i=t[d]={exports:{}};return e[d].call(i.exports,i,i.exports,s),i.exports}s.d=(e,t)=>{for(var d in t)s.o(t,d)&&!s.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:t[d]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s(766),s(387),s(480)})();