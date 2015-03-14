var Cosmos=function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){var o=n(1),r=n(3);o.extend(r.mixins,{ClassName:n(10),ComponentTree:n(5),Router:n(6)}),o.extend(r.components,{ComponentPlayground:n(13)}),t.exports=r},function(t){t.exports=_},function(t){t.exports={getPropsFromQueryString:function(t){var e={};if(!t.length)return e;for(var n,o,r,i=t.split("&"),s=0;s<i.length;s++){n=i[s].split("="),o=n[0],r=decodeURIComponent(n[1]);try{r=JSON.parse(r)}catch(a){}e[o]=r}return e},getQueryStringFromProps:function(t){var e,n=[];for(var o in t){if(e=t[o],"object"==typeof e)try{e=JSON.stringify(e)}catch(r){continue}n.push(o+"="+encodeURIComponent(e))}return n.join("&")}}},function(t,e,n){var o=n(1),r=n(7),i=n(8);t.exports={mixins:{},components:{},start:function(t){return new i.Router(o.extend({onRender:this.render.bind(this)},t))},render:function(t,e,n){var o=this.createElement(t);return e?r.render(o,e,n):r.renderToString(o)},createElement:function(t){var e=this.getComponentByName(t.component,t.componentLookup);if(!o.isFunction(e))throw new Error("Invalid component: "+t.component);return r.createElement(e,t)},getComponentByName:function(t,e){if(o.isFunction(e)){var n=e(t);if(n)return n}return this.components[t]}}},function(t,e,n){var o=n(2);t.exports={getParams:function(){return o.getPropsFromQueryString(this.getQueryString().substr(1))},isPushStateSupported:function(){return!!window.history.pushState},getQueryString:function(){return window.location.search}}},function(t,e,n){var o=n(1),r=n(3);t.exports={serialize:function(t){var e,n=o.omit(this.props,"state"),r=o.omit(this.state,"children"),i={};return t&&(o.each(this.refs,function(t,n){o.isFunction(t.serialize)&&(e=t.serialize(!0),o.isEmpty(e.state)||(i[n]=e.state))}),o.isEmpty(i)||(r.children=i)),o.isEmpty(r)||(n.state=r),n},loadChild:function(){var t=this.getChildProps.apply(this,arguments);if(t)try{return r.createElement(t)}catch(e){console.error(e)}return null},getChildProps:function(t){for(var e=[],n=1;n<arguments.length;++n)e[n-1]=arguments[n];var o=this.children[t].apply(this,e);return o?(o.ref||(o.ref=t),this._childSnapshots&&this._childSnapshots[o.ref]&&(o.state=this._childSnapshots[o.ref]),this.props.componentLookup&&(o.componentLookup=this.props.componentLookup),o):void 0},componentWillMount:function(){this.props.state&&this._loadStateSnapshot(this.props.state)},componentDidMount:function(){this._clearChildSnapshots()},_loadStateSnapshot:function(t){t.children&&(this._childSnapshots=t.children);var e={};o.isFunction(this.getInitialState)&&o.extend(e,this.getInitialState()),this.replaceState(o.extend(e,t))},_clearChildSnapshots:function(){void 0!==this._childSnapshots&&(this._childSnapshots=void 0)}}},function(t,e,n){var o=n(2);t.exports={getUrlFromProps:function(t){return"?"+o.getQueryStringFromProps(t)},routeLink:function(t){t.preventDefault(),this.props.router.goTo(t.currentTarget.href)}}},function(t){t.exports=React},function(t,e,n){t.exports={url:n(4),Router:n(9)}},function(t,e,n){var o=n(1),r=n(2),i=n(4),s=function(t){this._options=o.extend({defaultProps:{},container:document.body},t),this.onPopState=this.onPopState.bind(this),this._bindPopStateEvent(),this._load(i.getParams(),window.location.href)};s.prototype={stop:function(){this._unbindPopStateEvent()},goTo:function(t){if(!i.isPushStateSupported())return void(window.location=t);if(this.rootComponent){var e=this.rootComponent.serialize(!0);this._replaceHistoryState(this._excludeDefaultProps(e),this._currentHref)}var n=t.split("?").pop(),o=r.getPropsFromQueryString(n);this._pushHistoryState(o,t),this._load(o,t)},onPopState:function(t){t.state&&this._load(t.state,window.location.href)},_load:function(t,e){var n={router:this},r=o.extend(n,this._options.defaultProps,t);this.rootComponent=this._options.onRender(r,this._options.container),this._currentHref=e,o.isFunction(this._options.onChange)&&this._options.onChange.call(this,t)},_bindPopStateEvent:function(){window.addEventListener("popstate",this.onPopState)},_unbindPopStateEvent:function(){window.removeEventListener("popstate",this.onPopState)},_replaceHistoryState:function(t,e){window.history.replaceState(t,"",e)},_pushHistoryState:function(t,e){window.history.pushState(t,"",e)},_excludeDefaultProps:function(t){var e,n={};for(var o in t)"router"!==o&&(e=t[o],e!==this._options.defaultProps[o]&&(n[o]=e));return n}},t.exports=s},function(t){t.exports={getClassName:function(t){return void 0!==this.props.className?this.props.className:t}}},function(t){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];t.push(n[2]?"@media "+n[2]+"{"+n[1]+"}":n[1])}return t.join("")},t}},function(t,e,n){e=t.exports=n(11)(),e.push([t.id,".component-playground{position:absolute;width:100%;height:100%;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:14px}.component-playground .header{position:absolute;top:0;left:0;right:0;height:50px;background:#222}.component-playground .header h1{margin:0;padding:0 10px;font-size:22px;font-weight:400;line-height:50px}.component-playground .header h1 .home-link{color:#fafafa;text-decoration:none}.component-playground .header h1 .home-link .react{color:#00d8ff}.component-playground .header h1 .cosmos-plug{margin-left:10px;color:#aaa;font-size:18px}.component-playground .header h1 .cosmos-plug a{color:#cc7a6f;text-decoration:none}.component-playground .header ul.buttons{position:absolute;top:0;right:0;margin:0;padding:0;list-style-type:none}.component-playground .header ul.buttons li{float:left;height:50px;padding:0 10px;background:#222;line-height:50px;letter-spacing:1px;text-transform:uppercase;text-decoration:none}.component-playground .header ul.buttons li.selected-button{background:#000}.component-playground .header ul.buttons li a{color:#aaa;text-decoration:none}.component-playground .header ul.buttons li a:hover{color:#fafafa}.component-playground .fixtures{position:absolute;top:50px;bottom:0;left:0;width:300px;background:#2d2d2d;overflow-x:hidden;overflow-y:auto}.component-playground .fixtures .components{margin:0;padding:0;list-style-type:none}.component-playground .fixtures .components .component .component-name{margin:0;padding:0}.component-playground .fixtures .components .component .component-name a{display:block;height:50px;padding:0 10px;color:#aaa;font-size:16px;line-height:50px;text-decoration:none}.component-playground .fixtures .components .component .component-name a:hover{color:#fafafa}.component-playground .fixtures .components .component .component-fixtures{display:none;margin:0;padding:5px 0;background:#f3f3f3;list-style-type:none;overflow:hidden}.component-playground .fixtures .components .component .component-fixtures .component-fixture{margin:0;padding:0}.component-playground .fixtures .components .component .component-fixtures .component-fixture a{display:block;height:30px;padding:0 10px;color:#c05b4d;line-height:30px;text-decoration:none}.component-playground .fixtures .components .component .component-fixtures .component-fixture a:hover{background:rgba(0,0,0,.05)}.component-playground .fixtures .components .component .component-fixtures .component-fixture.selected a{font-weight:700}.component-playground .fixtures .components .component.expanded .component-fixtures{display:block}.component-playground .content-frame{position:absolute;top:50px;bottom:0;left:300px;right:0}.component-playground .content-frame .fixture-editor-outer{position:absolute;top:0;bottom:0;left:0;right:50%}.component-playground .content-frame .fixture-editor-outer .fixture-editor{width:100%;height:100%;padding:10px;border:1px solid rgba(16,16,16,.1);background:#f8f5ec;color:#637c84;font-family:Menlo,Consolas,'Courier New',monospace;font-size:13px;line-height:1.5em;resize:none;outline:none}.component-playground .content-frame .fixture-editor-outer .fixture-editor.invalid-syntax{color:#cc7a6f}.component-playground .content-frame .preview{position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden}.component-playground .content-frame .preview.aside-fixture-editor{left:50%}.component-playground.full-screen>.header,.component-playground.full-screen>.fixtures{display:none}.component-playground.full-screen>.content-frame{top:0;left:0}",""])},function(t,e,n){n(15);var o=n(1),r=n(7),i=r.addons.classSet,s=n(5),a=n(6);t.exports=r.createClass({displayName:"ComponentPlayground",mixins:[s,a],propTypes:{fixtures:r.PropTypes.object.isRequired,fixturePath:r.PropTypes.string,fixtureEditor:r.PropTypes.bool,fullScreen:r.PropTypes.bool,containerClassName:r.PropTypes.string},statics:{getInitialState:function(t,e){return{expandedComponents:this.getExpandedComponents(e),fixtureContents:this.getFixtureContents(t,e),fixtureUserInput:this.getFixtureUserInput(t,e),isFixtureUserInputValid:!0}},getExpandedComponents:function(t){var e=[];return t&&e.push(this.getComponentName(t)),e},getFixtureUserInput:function(t,e){if(!e)return"";var n=this.getFixtureContents(t,e);return JSON.stringify(n,null,2)},getFixtureContents:function(t,e){if(!e)return null;var n=this.getComponentName(e),o=this.getFixtureName(e);return t[n][o]},getComponentName:function(t){return t.split("/")[0]},getFixtureName:function(t){return t.substr(t.indexOf("/")+1)}},getDefaultProps:function(){return{fixtureEditor:!1,fullScreen:!1}},getInitialState:function(){return this.constructor.getInitialState(this.props.fixtures,this.props.fixturePath)},children:{preview:function(){var t=this.props.fixturePath,e={component:this.constructor.getComponentName(t),key:JSON.stringify(this.state.fixtureContents)};return this.props.router&&(e.router=this.props.router),o.merge(e,this.state.fixtureContents)}},render:function(){var t=i({"component-playground":!0,"full-screen":this.props.fullScreen});return r.createElement("div",{className:t},r.createElement("div",{className:"header"},this.props.fixturePath?this._renderButtons():null,r.createElement("h1",null,r.createElement("a",{href:"?",className:"home-link",onClick:this.routeLink},r.createElement("span",{className:"react"},"React")," Component Playground"),r.createElement("span",{className:"cosmos-plug"},"powered by ",r.createElement("a",{href:"https://github.com/skidding/cosmos"},"Cosmos")))),r.createElement("div",{className:"fixtures"},this._renderFixtures()),this._renderContentFrame())},_renderFixtures:function(){return r.createElement("ul",{className:"components"},o.map(this.props.fixtures,function(t,e){var n=i({component:!0,expanded:-1!==this.state.expandedComponents.indexOf(e)});return r.createElement("li",{className:n,key:e},r.createElement("p",{className:"component-name"},r.createElement("a",{href:"#toggle-component",onClick:o.partial(this.onComponentClick,e),ref:e+"Button"},e)),this._renderComponentFixtures(e,t))}.bind(this)))},_renderComponentFixtures:function(t,e){return r.createElement("ul",{className:"component-fixtures"},o.map(e,function(e,n){var o={fixturePath:t+"/"+n};return this.props.fixtureEditor&&(o.fixtureEditor=!0),r.createElement("li",{className:this._getFixtureClasses(t,n),key:n},r.createElement("a",{href:this.getUrlFromProps(o),onClick:this.routeLink},n.replace(/-/g," ")))}.bind(this)))},_renderContentFrame:function(){return r.createElement("div",{className:"content-frame"},r.createElement("div",{ref:"previewContainer",className:this._getPreviewClasses()},this.props.fixturePath?this.loadChild("preview"):null),this.props.fixtureEditor?this._renderFixtureEditor():null)},_renderFixtureEditor:function(){var t=i({"fixture-editor":!0,"invalid-syntax":!this.state.isFixtureUserInputValid});return r.createElement("div",{className:"fixture-editor-outer"},r.createElement("textarea",{ref:"fixtureEditor",className:t,value:this.state.fixtureUserInput,onChange:this.onFixtureChange}))},_renderButtons:function(){return r.createElement("ul",{className:"buttons"},this._renderFixtureEditorButton(),this._renderFullScreenButton())},_renderFixtureEditorButton:function(){var t=i({"fixture-editor-button":!0,"selected-button":this.props.fixtureEditor}),e=this.getUrlFromProps({fixturePath:this.props.fixturePath,fixtureEditor:!this.props.fixtureEditor});return r.createElement("li",{className:t},r.createElement("a",{href:e,ref:"fixtureEditorButton",onClick:this.routeLink},"Editor"))},_renderFullScreenButton:function(){var t=this.getUrlFromProps({fixturePath:this.props.fixturePath,fullScreen:!0});return r.createElement("li",{className:"full-screen-button"},r.createElement("a",{href:t,ref:"fullScreenButton",onClick:this.routeLink},"Fullscreen"))},componentWillReceiveProps:function(t){t.fixturePath!==this.props.fixturePath&&this.setState(this.constructor.getInitialState(t.fixtures,t.fixturePath))},onComponentClick:function(t,e){e.preventDefault();var n,r=this.state.expandedComponents,i=r.indexOf(t);-1!==i?(n=o.clone(r),n.splice(i,1)):n=r.concat(t),this.setState({expandedComponents:n})},onFixtureChange:function(t){var e=t.target.value,n={fixtureUserInput:e};try{n.fixtureContents=JSON.parse(e),n.isFixtureUserInputValid=!0}catch(o){n.isFixtureUserInputValid=!1,console.error(o)}this.setState(n)},_getPreviewClasses:function(){var t={preview:!0,"aside-fixture-editor":this.props.fixtureEditor};return this.props.containerClassName&&(t[this.props.containerClassName]=!0),i(t)},_getFixtureClasses:function(t,e){var n={"component-fixture":!0},o=this.props.fixturePath;if(o){var r=this.constructor.getComponentName(o),s=this.constructor.getFixtureName(o);n.selected=t===r&&e===s}return i(n)}})},function(t){function e(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=p[o.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](o.parts[s]);for(;s<o.parts.length;s++)i.parts.push(r(o.parts[s],e))}else{for(var a=[],s=0;s<o.parts.length;s++)a.push(r(o.parts[s],e));p[o.id]={id:o.id,refs:1,parts:a}}}}function n(t){for(var e=[],n={},o=0;o<t.length;o++){var r=t[o],i=r[0],s=r[1],a=r[2],p=r[3],u={css:s,media:a,sourceMap:p};n[i]?n[i].parts.push(u):e.push(n[i]={id:i,parts:[u]})}return e}function o(){var t=document.createElement("style"),e=l();return t.type="text/css",e.appendChild(t),t}function r(t,e){var n,r,i;if(e.singleton){var p=f++;n=d||(d=o()),r=s.bind(null,n,p,!1),i=s.bind(null,n,p,!0)}else n=o(),r=a.bind(null,n),i=function(){n.parentNode.removeChild(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}function i(t,e,n){var o=["/** >>"+e+" **/","/** "+e+"<< **/"],r=t.lastIndexOf(o[0]),i=n?o[0]+n+o[1]:"";if(t.lastIndexOf(o[0])>=0){var s=t.lastIndexOf(o[1])+o[1].length;return t.slice(0,r)+i+t.slice(s)}return t+i}function s(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=i(t.styleSheet.cssText,e,r);else{var s=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(s,a[e]):t.appendChild(s)}}function a(t,e){var n=e.css,o=e.media,r=e.sourceMap;if(r&&"function"==typeof btoa)try{n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(JSON.stringify(r))+" */",n='@import url("data:text/css;base64,'+btoa(n)+'")'}catch(i){}if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var p={},u=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},c=u(function(){return/msie 9\b/.test(window.navigator.userAgent.toLowerCase())}),l=u(function(){return document.head||document.getElementsByTagName("head")[0]}),d=null,f=0;t.exports=function(t,o){o=o||{},"undefined"==typeof o.singleton&&(o.singleton=c());var r=n(t);return e(r,o),function(t){for(var i=[],s=0;s<r.length;s++){var a=r[s],u=p[a.id];u.refs--,i.push(u)}if(t){var c=n(t);e(c,o)}for(var s=0;s<i.length;s++){var u=i[s];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete p[u.id]}}}}},function(t,e,n){var o=n(12);"string"==typeof o&&(o=[[t.id,o,""]]);n(14)(o,{})}]);