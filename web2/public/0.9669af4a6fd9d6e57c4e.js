webpackJsonp([0],{194:function(t,e,s){var o=s(38)(s(196),s(198),null,null,null);t.exports=o.exports},196:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{options:[{title:"Read the Docs",icon:"fa-book",url:"https://codeclimate.com/github/sagalbot/vue-select"},{title:"View on GitHub",icon:"fa-github",url:"https://codeclimate.com/github/sagalbot/vue-select"},{title:"View on NPM",icon:"fa-database",url:"https://codeclimate.com/github/sagalbot/vue-select"},{title:"View Codepen Examples",icon:"fa-pencil",url:"https://codeclimate.com/github/sagalbot/vue-select"}]}},methods:{setActivePerson:function(t){this.$store.commit("setActivePerson",t)}}}},198:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",[s("v-flex",{attrs:{"text-xs-center":""}},[s("img",{staticClass:"mb-5",attrs:{src:"/static/v.png",alt:"Vuetify.js"}}),s("blockquote",{staticClass:"blockquote"},[t._v("\n      “First, solve the problem. Then, write the code.”\n      "),s("footer",[s("small",[s("em",[t._v("—John Johnson")])])])]),s("v-select",{attrs:{options:t.options,label:"title"},scopedSlots:t._u([{key:"option",fn:function(e){return[s("span",{staticClass:"fa",class:e.icon}),t._v("\n          "+t._s(e.title)+"\n      ")]}}])}),s("br"),s("v-select",{attrs:{label:"email",options:t.$store.state.people,value:t.$store.state.activePerson},on:{input:t.setActivePerson}}),s("pre",[t._v("store.$state.activePerson: "),s("br"),t._v(" "+t._s(t.$store.state.activePerson||"null"))])],1)],1)},staticRenderFns:[]}}});