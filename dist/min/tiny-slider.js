var tns=function(){var t=window,Bi=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},e=window,Li=e.cancelAnimationFrame||e.mozCancelAnimationFrame||function(t){clearTimeout(t)};function Oi(){for(var t,e,n,i=arguments[0]||{},o=1,a=arguments.length;o<a;o++)if(null!==(t=arguments[o]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function ki(t){return 0<=["true","false"].indexOf(t)?JSON.parse(t):t}function Di(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function Pi(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var n=document.documentElement;function Ri(t){var e="";return t.fake&&(e=n.style.overflow,t.style.background="",t.style.overflow=n.style.overflow="hidden",n.appendChild(t)),e}function Hi(t,e){t.fake&&(t.remove(),n.style.overflow=e,n.offsetHeight)}function Ii(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function Wi(t){return("insertRule"in t?t.cssRules:t.rules).length}function zi(t,e,n){for(var i=0,o=t.length;i<o;i++)e.call(n,t[i],i)}var i="classList"in document.createElement("_"),qi=i?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},Fi=i?function(t,e){qi(t,e)||t.classList.add(e)}:function(t,e){qi(t,e)||(t.className+=" "+e)},ji=i?function(t,e){qi(t,e)&&t.classList.remove(e)}:function(t,e){qi(t,e)&&(t.className=t.className.replace(e,""))};function Vi(t,e){return t.hasAttribute(e)}function Ki(t,e){return t.getAttribute(e)}function a(t){return void 0!==t.item}function Qi(t,e){if(t=a(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function Xi(t,e){t=a(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var o=n;o--;)t[i].removeAttribute(e[o])}function Yi(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function Gi(t,e){"none"!==t.style.display&&(t.style.display="none")}function Ui(t,e){"none"===t.style.display&&(t.style.display="")}function Ji(t){return"none"!==window.getComputedStyle(t).display}function _i(e){if("string"==typeof e){var n=[e],i=e.charAt(0).toUpperCase()+e.substr(1);["Webkit","Moz","ms","O"].forEach(function(t){"ms"===t&&"transform"!==e||n.push(t+i)}),e=n}for(var t=document.createElement("fakeelement"),o=(e.length,0);o<e.length;o++){var a=e[o];if(void 0!==t.style[a])return a}return!1}function Zi(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var o=!1;try{var r=Object.defineProperty({},"passive",{get:function(){o=!0}});window.addEventListener("test",null,r)}catch(t){}var l=!!o&&{passive:!0};function $i(t,e,n){for(var i in e){var o=0<=["touchstart","touchmove"].indexOf(i)&&!n&&l;t.addEventListener(i,e[i],o)}}function to(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&l;t.removeEventListener(n,e[n],i)}}function eo(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(e,n){n.type=e,this.topics[e]&&this.topics[e].forEach(function(t){t(n,e)})}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var no=function(O){O=Oi({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0},O||{});var k=document,h=window,o={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},e={},n=O.useLocalStorage;if(n){var t=navigator.userAgent,i=new Date;try{(e=h.localStorage)?(e.setItem(i,i),n=e.getItem(i)==i,e.removeItem(i)):n=!1,n||(e={})}catch(t){n=!1}n&&(e.tnsApp&&e.tnsApp!==t&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){e.removeItem(t)}),localStorage.tnsApp=t)}var a,r,l,s,u,c,f,g=e.tC?ki(e.tC):Di(e,"tC",function(){var t=document,e=Pi(),n=Ri(e),i=t.createElement("div"),o=!1;e.appendChild(i);try{for(var a,r="(10px * 10)",l=["calc"+r,"-moz-calc"+r,"-webkit-calc"+r],s=0;s<3;s++)if(a=l[s],i.style.width=a,100===i.offsetWidth){o=a.replace(r,"");break}}catch(t){}return e.fake?Hi(e,n):i.remove(),o}(),n),y=e.tPL?ki(e.tPL):Di(e,"tPL",function(){var t,e=document,n=Pi(),i=Ri(n),o=e.createElement("div"),a=e.createElement("div"),r="";o.className="tns-t-subp2",a.className="tns-t-ct";for(var l=0;l<70;l++)r+="<div></div>";return a.innerHTML=r,o.appendChild(a),n.appendChild(o),t=Math.abs(o.getBoundingClientRect().left-a.children[67].getBoundingClientRect().left)<2,n.fake?Hi(n,i):o.remove(),t}(),n),D=e.tMQ?ki(e.tMQ):Di(e,"tMQ",(r=document,l=Pi(),s=Ri(l),u=r.createElement("div"),c=r.createElement("style"),f="@media all and (min-width:1px){.tns-mq-test{position:absolute}}",c.type="text/css",u.className="tns-mq-test",l.appendChild(c),l.appendChild(u),c.styleSheet?c.styleSheet.cssText=f:c.appendChild(r.createTextNode(f)),a=window.getComputedStyle?window.getComputedStyle(u).position:u.currentStyle.position,l.fake?Hi(l,s):u.remove(),"absolute"===a),n),d=e.tTf?ki(e.tTf):Di(e,"tTf",_i("transform"),n),v=e.t3D?ki(e.t3D):Di(e,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=Pi(),o=Ri(i),a=n.createElement("p"),r=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return r+="transform",i.insertBefore(a,null),a.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(a).getPropertyValue(r),i.fake?Hi(i,o):a.remove(),void 0!==e&&0<e.length&&"none"!==e}(d),n),b=e.tTDu?ki(e.tTDu):Di(e,"tTDu",_i("transitionDuration"),n),p=e.tTDe?ki(e.tTDe):Di(e,"tTDe",_i("transitionDelay"),n),x=e.tADu?ki(e.tADu):Di(e,"tADu",_i("animationDuration"),n),m=e.tADe?ki(e.tADe):Di(e,"tADe",_i("animationDelay"),n),C=e.tTE?ki(e.tTE):Di(e,"tTE",Zi(b,"Transition"),n),w=e.tAE?ki(e.tAE):Di(e,"tAE",Zi(x,"Animation"),n),M=h.console&&"function"==typeof h.console.warn,T=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],A={};if(T.forEach(function(t){if("string"==typeof O[t]){var e=O[t],n=k.querySelector(e);if(A[t]=e,!n||!n.nodeName)return void(M&&console.warn("Can't find",O[t]));O[t]=n}}),!(O.container.children.length<1)){var P=O.responsive,R=O.nested,H="carousel"===O.mode;if(P){0 in P&&(O=Oi(O,P[0]),delete P[0]);var E={};for(var N in P){var S=P[N];S="number"==typeof S?{items:S}:S,E[N]=S}P=E,E=null}if(H||function t(e){for(var n in e)H||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(O),!H){O.axis="horizontal",O.slideBy="page",O.edgePadding=!1;var I=O.animateIn,W=O.animateOut,B=O.animateDelay,z=O.animateNormal}var L,q,F="horizontal"===O.axis,j=k.createElement("section"),V=k.createElement("div"),K=k.createElement("div"),Q=O.container,X=Q.parentNode,Y=Q.outerHTML,G=Q.children,U=G.length,J=un(),_=!1;P&&Bn(),H&&(Q.className+=" tns-vpfix");var Z,$,tt,et,nt,it,ot,at=O.autoWidth,rt=vn("fixedWidth"),lt=vn("edgePadding"),st=vn("gutter"),ut=fn(),ct=vn("center"),ft=at?1:Math.floor(vn("items")),dt=vn("slideBy"),vt=O.viewportMax||O.fixedWidthViewportWidth,pt=vn("arrowKeys"),mt=vn("speed"),ht=O.rewind,gt=!ht&&O.loop,yt=vn("autoHeight"),bt=vn("controls"),xt=vn("controlsText"),Ct=vn("nav"),wt=vn("touch"),Mt=vn("mouseDrag"),Tt=vn("autoplay"),At=vn("autoplayTimeout"),Et=vn("autoplayText"),Nt=vn("autoplayHoverPause"),St=vn("autoplayResetOnVisibility"),Bt=(ot=document.createElement("style"),it&&ot.setAttribute("media",it),document.querySelector("head").appendChild(ot),ot.sheet?ot.sheet:ot.styleSheet),Lt=O.lazyload,Ot=O.lazyloadSelector,kt=[],Dt=gt?(et=function(){{if(at||rt&&!vt)return U-1;var t=rt?"fixedWidth":"items",e=[];if((rt||O[t]<U)&&e.push(O[t]),P)for(var n in P){var i=P[n][t];i&&(rt||i<U)&&e.push(i)}return e.length||e.push(0),Math.ceil(rt?vt/Math.min.apply(null,e):Math.max.apply(null,e))}}(),nt=H?Math.ceil((5*et-U)/2):4*et-U,nt=Math.max(et,nt),dn("edgePadding")?nt+1:nt):0,Pt=H?U+2*Dt:U+Dt,Rt=!(!rt&&!at||gt),Ht=rt?$n():null,It=!H||!gt,Wt=F?"left":"top",zt="",qt="",Ft=rt?function(){return ct&&!gt?U-1:Math.ceil(-Ht/(rt+st))}:at?function(){for(var t=Pt;t--;)if(Z[t]>=-Ht)return t}:function(){return ct&&H&&!gt?U-1:gt||H?Math.max(0,Pt-Math.ceil(ft)):Pt-1},jt=rn(vn("startIndex")),Vt=jt,Kt=(an(),0),Qt=at?null:Ft(),Xt=O.preventActionWhenRunning,Yt=O.swipeAngle,Gt=!Yt||"?",Ut=!1,Jt=O.onInit,_t=new eo,Zt=" tns-slider tns-"+O.mode,$t=Q.id||(tt=window.tnsId,window.tnsId=tt?tt+1:1,"tns"+window.tnsId),te=vn("disable"),ee=!1,ne=O.freezable,ie=!(!ne||at)&&Sn(),oe=!1,ae={click:function(t,e){console.log("inside onPrevNextClick"),pi(),si(t,e)},keydown:function(t){console.log("inside onControlsKeydown"),t=gi(t);var e=[o.LEFT,o.RIGHT].indexOf(t.keyCode);0<=e&&(0===e?Ee.disabled||si(t,-1):Ne.disabled||si(t,1))}},re={click:function(t){if(console.log("inside onNavClick"),pi(),Ut){if(Xt)return;ri()}var e=yi(t=gi(t));for(;e!==Oe&&!Vi(e,"data-nav");)e=e.parentNode;if(Vi(e,"data-nav")){var n=Re=Number(Ki(e,"data-nav")),i=rt||at?n*U/De:n*ft,o=pe?n:Math.min(Math.ceil(i),U-1);li(o,t),He===n&&(je&&vi(),Re=-1)}},keydown:function(t){console.log("inside onNavKeydown"),t=gi(t);var e=k.activeElement;if(!Vi(e,"data-nav"))return;var n=[o.LEFT,o.RIGHT,o.ENTER,o.SPACE].indexOf(t.keyCode),i=Number(Ki(e,"data-nav"));0<=n&&(0===n?(console.log("nav left"),0<i&&hi(Le[i-1])):1===n?(console.log("nav right"),i<De-1&&hi(Le[i+1])):(console.log("nav enter or space"),Re=i))}},le={mouseover:function(){console.log("inside mouseoverPause"),je?(console.log("@@@@@@@@@@@ is animating!"),ci(),Ve=!0):console.log("%%%%%%%%%%%%%%%%%%%% is not animating!");fi("start",Et[0])},mouseout:function(){console.log("inside mouseoutRestart"),Ve&&!Ke&&(ui(),Ve=!1,fi("stop",Et[1]))}},se={visibilitychange:function(){k.hidden?je&&(ci(),Qe=!0):Qe&&(ui(),Qe=!1)}},ue={keydown:function(t){}},ce={touchstart:wi,touchmove:Mi,touchend:Ti,touchcancel:Ti},fe={mousedown:wi,mousemove:Mi,mouseup:Ti,mouseleave:Ti},de=dn("controls"),ve=dn("nav"),pe=!!at||O.navAsThumbnails,me=dn("autoplay"),he=dn("touch"),ge=dn("mouseDrag"),ye="tns-slide-active",be="tns-complete",xe={load:function(t){Hn(yi(t))},error:function(t){e=yi(t),Fi(e,"failed"),In(e);var e}},Ce="force"===O.preventScrollOnTouch;if(de)var we,Me,Te=O.controlsContainer,Ae=O.controlsContainer?O.controlsContainer.outerHTML:"",Ee=O.prevButton,Ne=O.nextButton,Se=O.prevButton?O.prevButton.outerHTML:"",Be=O.nextButton?O.nextButton.outerHTML:"";if(ve)var Le,Oe=O.navContainer,ke=O.navContainer?O.navContainer.outerHTML:"",De=at?U:Ei(),Pe=0,Re=-1,He=sn(),Ie=He,We="tns-nav-active",ze="carousel page ",qe=" (current slide)";if(me)var Fe,je,Ve,Ke,Qe,Xe="forward"===O.autoplayDirection?1:-1,Ye=O.autoplayButton,Ge=O.autoplayButton?O.autoplayButton.outerHTML:"";if(he||ge)var Ue,Je,_e={},Ze={},$e=!1,tn=F?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};at||on(te||ie),d&&(Wt=d,zt="translate",v?(zt+=F?"3d(":"3d(0px, ",qt=F?", 0px, 0px)":", 0px)"):(zt+=F?"X(":"Y(",qt=")")),H&&(Q.className=Q.className.replace("tns-vpfix","")),function(){dn("gutter");j.className="tns-outer",j.setAttribute("aria-roledescription","carousel"),K.className="tns-inner",j.id=$t+"-ow",K.id=$t+"-iw",V.className="tns-controller",""===Q.id&&(Q.id=$t);Zt+=y||at?" tns-subpixel":" tns-no-subpixel",Zt+=g?" tns-calc":" tns-no-calc",at&&(Zt+=" tns-autowidth");Zt+=" tns-"+O.axis,Q.className+=Zt,j.appendChild(V),H?((L=k.createElement("div")).id=$t+"-mw",L.className="tns-ovh",j.appendChild(L),L.appendChild(K)):j.appendChild(K);if(yt){var t=L||K;t.className+=" tns-ah"}if(X.insertBefore(j,Q),K.appendChild(Q),zi(G,function(t,e){Fi(t,"tns-item"),t.id||(t.id=$t+"-item"+e),!H&&z&&Fi(t,z),Qi(t,{role:"group","aria-hidden":"true","aria-roledescription":"slide","aria-label":e+1+" of "+G.length})}),Dt){for(var e=k.createDocumentFragment(),n=k.createDocumentFragment(),i=Dt;i--;){var o=i%U,a=G[o].cloneNode(!0);if(Xi(a,"id"),n.insertBefore(a,n.firstChild),H){var r=G[U-1-o].cloneNode(!0);Xi(r,"id"),e.appendChild(r)}}Q.insertBefore(e,Q.firstChild),Q.appendChild(n),G=Q.children}}(),function(){if(!H)for(var t=jt,e=jt+Math.min(U,ft);t<e;t++){var n=G[t];n.style.left=100*(t-jt)/ft+"%",Fi(n,I),ji(n,z)}F&&(y||at?(Ii(Bt,"#"+$t+" > .tns-item","font-size:"+h.getComputedStyle(G[0]).fontSize+";",Wi(Bt)),Ii(Bt,"#"+$t,"font-size:0;",Wi(Bt))):H&&zi(G,function(t,e){var n;t.style.marginLeft=(n=e,g?g+"("+100*n+"% / "+Pt+")":100*n/Pt+"%")}));if(D){if(b){var i=L&&O.autoHeight?bn(O.speed):"";Ii(Bt,"#"+$t+"-mw",i,Wi(Bt))}i=pn(O.edgePadding,O.gutter,O.fixedWidth,O.speed,O.autoHeight),Ii(Bt,"#"+$t+"-iw",i,Wi(Bt)),H&&(i=F&&!at?"width:"+mn(O.fixedWidth,O.gutter,O.items)+";":"",b&&(i+=bn(mt)),Ii(Bt,"#"+$t,i,Wi(Bt))),i=F&&!at?hn(O.fixedWidth,O.gutter,O.items):"",O.gutter&&(i+=gn(O.gutter)),H||(b&&(i+=bn(mt)),x&&(i+=xn(mt))),i&&Ii(Bt,"#"+$t+" > .tns-item",i,Wi(Bt))}else{H&&yt&&(L.style[b]=mt/1e3+"s"),K.style.cssText=pn(lt,st,rt,yt),H&&F&&!at&&(Q.style.width=mn(rt,st,ft));var i=F&&!at?hn(rt,st,ft):"";st&&(i+=gn(st)),i&&Ii(Bt,"#"+$t+" > .tns-item",i,Wi(Bt))}if(P&&D)for(var o in P){o=parseInt(o);var a=P[o],i="",r="",l="",s="",u="",c=at?null:vn("items",o),f=vn("fixedWidth",o),d=vn("speed",o),v=vn("edgePadding",o),p=vn("autoHeight",o),m=vn("gutter",o);b&&L&&vn("autoHeight",o)&&"speed"in a&&(r="#"+$t+"-mw{"+bn(d)+"}"),("edgePadding"in a||"gutter"in a)&&(l="#"+$t+"-iw{"+pn(v,m,f,d,p)+"}"),H&&F&&!at&&("fixedWidth"in a||"items"in a||rt&&"gutter"in a)&&(s="width:"+mn(f,m,c)+";"),b&&"speed"in a&&(s+=bn(d)),s&&(s="#"+$t+"{"+s+"}"),("fixedWidth"in a||rt&&"gutter"in a||!H&&"items"in a)&&(u+=hn(f,m,c)),"gutter"in a&&(u+=gn(m)),!H&&"speed"in a&&(b&&(u+=bn(d)),x&&(u+=xn(d))),u&&(u="#"+$t+" > .tns-item{"+u+"}"),(i=r+l+s+u)&&Bt.insertRule("@media (min-width: "+o/16+"em) {"+i+"}",Bt.cssRules.length)}}(),Cn();var en=gt?H?function(){var t=Kt,e=Qt;t+=dt,e-=dt,lt?(t+=1,e-=1):rt&&(ut+st)%(rt+st)&&(e-=1),Dt&&(e<jt?jt-=U:jt<t&&(jt+=U))}:function(){if(Qt<jt)for(;Kt+U<=jt;)jt-=U;else if(jt<Kt)for(;jt<=Qt-U;)jt+=U}:function(){jt=Math.max(Kt,Math.min(Qt,jt))},nn=H?function(){var e,n,i,o,t,a,r,l,s,u,c;_n(Q,""),b||!mt?(ni(),mt&&Ji(Q)||ri()):(e=Q,n=Wt,i=zt,o=qt,t=ti(),a=mt,r=ri,l=Math.min(a,10),s=0<=t.indexOf("%")?"%":"px",t=t.replace(s,""),u=Number(e.style[n].replace(i,"").replace(o,"").replace(s,"")),c=(t-u)/a*l,setTimeout(function t(){a-=l,u+=c,e.style[n]=i+u+s+o,0<a?setTimeout(t,l):r()},l)),F||Ai()}:function(){kt=[];var t={};t[C]=t[w]=ri,to(G[Vt],t),$i(G[jt],t),ii(Vt,I,W,!0),ii(jt,z,I),C&&w&&mt&&Ji(Q)||ri()};return{version:"2.9.2",getInfo:Si,events:_t,goTo:li,play:function(){Tt&&!je&&(di(),Ke=!1)},pause:pi,isOn:_,updateSliderHeight:Vn,refresh:Cn,destroy:function(){if(Bt.disabled=!0,Bt.ownerNode&&Bt.ownerNode.remove(),to(h,{resize:En}),pt&&to(Q,ue),Te&&to(Te,ae),Oe&&to(Oe,re),to(Q,le),to(Q,se),Ye&&to(Ye,{click:mi}),Tt&&clearInterval(Fe),H&&C){var t={};t[C]=ri,to(Q,t)}wt&&to(Q,ce),Mt&&to(Q,fe);var a=[Y,Ae,Se,Be,ke,Ge];for(var e in T.forEach(function(t,e){var n="container"===t?j:O[t];if("object"==typeof n&&n){var i=!!n.previousElementSibling&&n.previousElementSibling,o=n.parentNode;n.outerHTML=a[e],O[t]=i?i.nextElementSibling:o.firstElementChild}}),T=I=W=B=z=F=j=K=Q=X=Y=G=U=q=J=at=rt=lt=st=ut=ft=dt=vt=pt=mt=ht=gt=yt=Bt=Lt=Z=kt=Dt=Pt=Rt=Ht=It=Wt=zt=qt=Ft=jt=Vt=Kt=Qt=Yt=Gt=Ut=Jt=_t=Zt=$t=te=ee=ne=ie=oe=ae=re=le=se=ue=ce=fe=de=ve=pe=me=he=ge=ye=be=xe=$=bt=xt=Te=Ae=Ee=Ne=we=Me=Ct=Oe=ke=Le=De=Pe=Re=He=Ie=We=ze=qe=Tt=At=Xe=Et=Nt=Ye=Ge=St=Fe=je=Ve=Ke=Qe=_e=Ze=Ue=$e=Je=tn=wt=Mt=null,this)"rebuild"!==e&&(this[e]=null);_=!1},rebuild:function(){return no(Oi(O,A))}}}function on(t){t&&(bt=Ct=wt=Mt=pt=Tt=Nt=St=!1)}function an(){for(var t=H?jt-Dt:jt;t<0;)t+=U;return t%U+1}function rn(t){return t=t?Math.max(0,Math.min(gt?U-1:U-ft,t)):0,H?t+Dt:t}function ln(t){for(null==t&&(t=jt),H&&(t-=Dt);t<0;)t+=U;return Math.floor(t%U)}function sn(){var t,e=ln();return t=pe?e:rt||at?Math.ceil((e+1)*De/U-1):Math.floor(e/ft),!gt&&H&&jt===Qt&&(t=De-1),t}function un(){return h.innerWidth||k.documentElement.clientWidth||k.body.clientWidth}function cn(t){return"top"===t?"afterbegin":"beforeend"}function fn(){var t=lt?2*lt-st:0;return function t(e){if(null!=e){var n,i,o=k.createElement("div");return e.appendChild(o),i=(n=o.getBoundingClientRect()).right-n.left,o.remove(),i||t(e.parentNode)}}(X)-t}function dn(t){if(O[t])return!0;if(P)for(var e in P)if(P[e][t])return!0;return!1}function vn(t,e){if(null==e&&(e=J),"items"===t&&rt)return Math.floor((ut+st)/(rt+st))||1;var n=O[t];if(P)for(var i in P)e>=parseInt(i)&&t in P[i]&&(n=P[i][t]);return"slideBy"===t&&"page"===n&&(n=vn("items")),H||"slideBy"!==t&&"items"!==t||(n=Math.floor(n)),n}function pn(t,e,n,i,o){var a="";if(void 0!==t){var r=t;e&&(r-=e),a=F?"margin: 0 "+r+"px 0 "+t+"px;":"margin: "+t+"px 0 "+r+"px 0;"}else if(e&&!n){var l="-"+e+"px";a="margin: 0 "+(F?l+" 0 0":"0 "+l+" 0")+";"}return!H&&o&&b&&i&&(a+=bn(i)),a}function mn(t,e,n){return t?(t+e)*Pt+"px":g?g+"("+100*Pt+"% / "+n+")":100*Pt/n+"%"}function hn(t,e,n){var i;if(t)i=t+e+"px";else{H||(n=Math.floor(n));var o=H?Pt:n;i=g?g+"(100% / "+o+")":100/o+"%"}return i="width:"+i,"inner"!==R?i+";":i+" !important;"}function gn(t){var e="";!1!==t&&(e=(F?"padding-":"margin-")+(F?"right":"bottom")+": "+t+"px;");return e}function yn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function bn(t){return yn(b,18)+"transition-duration:"+t/1e3+"s;"}function xn(t){return yn(x,17)+"animation-duration:"+t/1e3+"s;"}function Cn(){if(dn("autoHeight")||at||!F){var t=Q.querySelectorAll("img");zi(t,function(t){var e=t.src;Lt||(e&&e.indexOf("data:image")<0?(t.src="",$i(t,xe),Fi(t,"loading"),t.src=e):Hn(t))}),Bi(function(){qn(Yi(t),function(){$=!0})}),dn("autoHeight")&&(t=Wn(jt,Math.min(jt+ft-1,Pt-1))),Lt?wn():Bi(function(){qn(Yi(t),wn)})}else H&&ei(),Tn(),An()}function wn(){if(at){var i=gt?jt:U-1;!function t(){var e=G[i].getBoundingClientRect().left,n=G[i-1].getBoundingClientRect().right;Math.abs(e-n)<=1?Mn():setTimeout(function(){t()},16)}()}else Mn()}function Mn(){F&&!at||(Kn(),at?(Ht=$n(),ne&&(ie=Sn()),Qt=Ft(),on(te||ie)):Ai()),H&&ei(),Tn(),An()}function Tn(){if(console.log("container",Q),console.log("outerWrapper",j),console.log("containerParent",X),Qn(),Q.setAttribute("aria-atomic","false"),ve){if(Oe)Qi(Oe,{"aria-label":"Carousel Pagination"}),zi(Le=Oe.children,function(t,e){Qi(t,{"data-nav":e,tabindex:"-1","aria-label":ze+(e+1),"aria-controls":$t})});else{for(var t="",e=pe?"":'style="display:none"',n=0;n<U;n++)t+='<button data-nav="'+n+'" tabindex="-1" aria-controls="'+$t+'" '+e+' aria-label="'+ze+(n+1)+'"></button>';t='<span class="tns-nav" role="group" aria-label="carousel pagination">'+t+"</span>",V.insertAdjacentHTML(cn(O.navPosition),t),Oe=j.querySelector(".tns-nav"),Le=Oe.children}if(Ni(),b){var i=b.substring(0,b.length-18).toLowerCase(),o="transition: all "+mt/1e3+"s";i&&(o="-"+i+"-"+o),Ii(Bt,"[aria-controls^="+$t+"-item]",o,Wi(Bt))}Qi(Le[He],{"aria-label":ze+(He+1)+qe}),Xi(Le[He],"tabindex"),Fi(Le[He],We),Le[He].setAttribute("aria-disabled","true"),$i(Oe,re)}if(de&&(Te||Ee&&Ne||(V.insertAdjacentHTML(cn(O.controlsPosition),'<span class="tns-controls" aria-label="carousel navigation"><button data-controls="prev" aria-label="previous slide" aria-controls="'+$t+'">'+xt[0]+'</button><button data-controls="next" aria-label="next slide" aria-controls="'+$t+'">'+xt[1]+"</button></span>"),Te=j.querySelector(".tns-controls")),Ee&&Ne||(Ee=Te.children[0],Ne=Te.children[1]),O.controlsContainer&&Qi(Te,{"aria-label":"Carousel Navigation",tabindex:"0"}),(O.controlsContainer||O.prevButton&&O.nextButton)&&Qi([Ee,Ne],{"aria-controls":$t,tabindex:"-1"}),(O.controlsContainer||O.prevButton&&O.nextButton)&&(Qi(Ee,{"data-controls":"prev"}),Qi(Ne,{"data-controls":"next"})),we=Yn(Ee),Me=Yn(Ne),Jn(),Te?$i(Te,ae):($i(Ee,ae),$i(Ne,ae))),me){Q.setAttribute("aria-live","off");var a=Tt?"stop":"start";Ye?Qi(Ye,{"data-action":a}):O.autoplayButtonOutput&&(console.log("autoplayButtonOutput is true"),V.insertAdjacentHTML(cn(O.autoplayPosition),'<button class="tns-autoplay" data-action="'+a+'" aria-label="'+a+'" >'+a+"</button>"),Ye=j.querySelector("[data-action]")),Ye&&$i(Ye,{click:mi}),Tt&&(di(),Nt&&$i(Q,le),St&&$i(Q,se))}else Q.setAttribute("aria-live","polite");Ln()}function An(){if(H&&C){var t={};t[C]=ri,$i(Q,t)}wt&&$i(Q,ce,O.preventScrollOnTouch),Mt&&$i(Q,fe),pt&&$i(j,ue),"inner"===R?_t.on("outerResized",function(){Nn(),_t.emit("innerLoaded",Si())}):(P||rt||at||yt||!F)&&$i(h,{resize:En}),yt&&("outer"===R?_t.on("innerLoaded",zn):te||zn()),Rn(),te?Dn():ie&&kn(),_t.on("indexChanged",Fn),"inner"===R&&_t.emit("innerLoaded",Si()),"function"==typeof Jt&&Jt(Si()),_=!0}function En(t){Bi(function(){Nn(gi(t))})}function Nn(t){if(_){"outer"===R&&_t.emit("outerResized",Si(t)),J=un();var e,n=q,i=!1;P&&(Bn(),(e=n!==q)&&_t.emit("newBreakpointStart",Si(t)));var o,a,r,l,s=ft,u=te,c=ie,f=pt,d=bt,v=Ct,p=wt,m=Mt,h=Tt,g=Nt,y=St,b=jt;if(e){var x=rt,C=yt,w=xt,M=ct,T=Et;if(!D)var A=st,E=lt}if(pt=vn("arrowKeys"),bt=vn("controls"),Ct=vn("nav"),wt=vn("touch"),ct=vn("center"),Mt=vn("mouseDrag"),Tt=vn("autoplay"),Nt=vn("autoplayHoverPause"),St=vn("autoplayResetOnVisibility"),e&&(te=vn("disable"),rt=vn("fixedWidth"),mt=vn("speed"),yt=vn("autoHeight"),xt=vn("controlsText"),Et=vn("autoplayText"),At=vn("autoplayTimeout"),D||(lt=vn("edgePadding"),st=vn("gutter"))),on(te),ut=fn(),F&&!at||te||(Kn(),F||(Ai(),i=!0)),(rt||at)&&(Ht=$n(),Qt=Ft()),(e||rt)&&(ft=vn("items"),dt=vn("slideBy"),(a=ft!==s)&&(rt||at||(Qt=Ft()),en())),e&&te!==u&&(te?Dn():function(){if(!ee)return;if(Bt.disabled=!1,Q.className+=Zt,ei(),gt)for(var t=Dt;t--;)H&&Ui(G[t]),Ui(G[Pt-t-1]);if(!H)for(var e=jt,n=jt+U;e<n;e++){var i=G[e],o=e<jt+ft?I:z;i.style.left=100*(e-jt)/ft+"%",Fi(i,o)}On(),ee=!1}()),ne&&(e||rt||at)&&(ie=Sn())!==c&&(ie?(ni(ti(rn(0))),kn()):(!function(){if(!oe)return;lt&&D&&(K.style.margin="");if(Dt)for(var t="tns-transparent",e=Dt;e--;)H&&ji(G[e],t),ji(G[Pt-e-1],t);On(),oe=!1}(),i=!0)),on(te||ie),Tt||(Nt=St=!1),pt!==f&&(pt?$i(Q,ue):to(Q,ue)),bt!==d&&(bt?Te?Ui(Te):(Ee&&Ui(Ee),Ne&&Ui(Ne)):Te?Gi(Te):(Ee&&Gi(Ee),Ne&&Gi(Ne))),Ct!==v&&(Ct?Ui(Oe):Gi(Oe)),wt!==p&&(wt?$i(Q,ce,O.preventScrollOnTouch):to(Q,ce)),Mt!==m&&(Mt?$i(Q,fe):to(Q,fe)),Tt!==h&&(Tt?(Ye&&Ui(Ye),je||Ke||di()):(Ye&&Gi(Ye),je&&vi())),Nt!==g&&(Nt?$i(Q,le):to(Q,le)),St!==y&&(St?$i(k,se):to(k,se)),e){if(rt===x&&ct===M||(i=!0),yt!==C&&(yt||(K.style.height="")),bt&&xt!==w&&(Ee.innerHTML=xt[0],Ne.innerHTML=xt[1]),Ye&&Et!==T){var N=Tt?1:0,S=Ye.innerHTML,B=S.length-T[N].length;S.substring(B)===T[N]&&(Ye.innerHTML=S.substring(0,B)+Et[N])}}else ct&&(rt||at)&&(i=!0);if((a||rt&&!at)&&(De=Ei(),Ni()),(o=jt!==b)?(_t.emit("indexChanged",Si()),i=!0):a?o||Fn():(rt||at)&&(Rn(),Qn()),a&&!H&&function(){for(var t=jt+Math.min(U,ft),e=Pt;e--;){var n=G[e];jt<=e&&e<t?(Fi(n,"tns-moving"),n.style.left=100*(e-jt)/ft+"%",Fi(n,I),ji(n,z)):n.style.left&&(n.style.left="",Fi(n,z),ji(n,I)),ji(n,W)}setTimeout(function(){zi(G,function(t){ji(t,"tns-moving")})},300)}(),!te&&!ie){if(e&&!D&&(lt===E&&st===A||(K.style.cssText=pn(lt,st,rt,mt,yt)),F)){H&&(Q.style.width=mn(rt,st,ft));var L=hn(rt,st,ft)+gn(st);l=Wi(r=Bt)-1,"deleteRule"in r?r.deleteRule(l):r.removeRule(l),Ii(Bt,"#"+$t+" > .tns-item",L,Wi(Bt))}yt&&zn(),i&&(ei(),Vt=jt)}e&&_t.emit("newBreakpointEnd",Si(t))}}function Sn(){if(!rt&&!at)return U<=(ct?ft-(ft-1)/2:ft);var t=rt?(rt+st)*U:Z[U],e=lt?ut+2*lt:ut+st;return ct&&(e-=rt?(ut-rt)/2:(ut-(Z[jt+1]-Z[jt]-st))/2),t<=e}function Bn(){for(var t in q=0,P)(t=parseInt(t))<=J&&(q=t)}function Ln(){!Tt&&Ye&&Gi(Ye),!Ct&&Oe&&Gi(Oe),bt||(Te?Gi(Te):(Ee&&Gi(Ee),Ne&&Gi(Ne)))}function On(){Tt&&Ye&&Ui(Ye),Ct&&Oe&&Ui(Oe),bt&&(Te?Ui(Te):(Ee&&Ui(Ee),Ne&&Ui(Ne)))}function kn(){if(!oe){if(lt&&(K.style.margin="0px"),Dt)for(var t="tns-transparent",e=Dt;e--;)H&&Fi(G[e],t),Fi(G[Pt-e-1],t);Ln(),oe=!0}}function Dn(){if(!ee){if(Bt.disabled=!0,Q.className=Q.className.replace(Zt.substring(1),""),Xi(Q,["style"]),gt)for(var t=Dt;t--;)H&&Gi(G[t]),Gi(G[Pt-t-1]);if(F&&H||Xi(K,["style"]),!H)for(var e=jt,n=jt+U;e<n;e++){var i=G[e];Xi(i,["style"]),ji(i,I),ji(i,z)}Ln(),ee=!0}}function Pn(t){console.log("inside getVisibleSlideRange"),null==t&&(t=ti());var n,i,o,a=jt;if(ct||lt?(at||rt)&&(i=-(parseFloat(t)+lt),o=i+ut+2*lt):at&&(i=Z[jt],o=i+ut),at)Z.forEach(function(t,e){e<Pt&&((ct||lt)&&t<=i+.5&&(a=e),.5<=o-t&&(n=e))});else{if(rt){var e=rt+st;ct||lt?(a=Math.floor(i/e),n=Math.ceil(o/e-1)):n=a+Math.ceil(ut/e)-1}else if(ct||lt){var r=ft-1;if(ct?(a-=r/2,n=jt+r/2):n=jt+r,lt){var l=lt*ft/ut;a-=l,n+=l}a=Math.floor(a),n=Math.ceil(n)}else n=a+ft-1;a=Math.max(a,0),n=Math.min(n,Pt-1)}return[a,n]}function Rn(){if(Lt&&!te){var t=Pn();t.push(Ot),Wn.apply(null,t).forEach(function(t){if(!qi(t,be)){var e={};e[C]=function(t){t.stopPropagation()},$i(t,e),$i(t,xe),t.src=Ki(t,"data-src");var n=Ki(t,"data-srcset");n&&(t.srcset=n),Fi(t,"loading")}})}}function Hn(t){Fi(t,"loaded"),In(t)}function In(t){Fi(t,be),ji(t,"loading"),to(t,xe)}function Wn(t,e,n){var i=[];for(n||(n="img");t<=e;)zi(G[t].querySelectorAll(n),function(t){i.push(t)}),t++;return i}function zn(){var t=Wn.apply(null,Pn());Bi(function(){qn(t,Vn)})}function qn(n,t){return $?t():(n.forEach(function(t,e){!Lt&&t.complete&&In(t),qi(t,be)&&n.splice(e,1)}),n.length?void Bi(function(){qn(n,t)}):t())}function Fn(){Rn(),Qn(),Jn(),function(){if(Ct&&(He=0<=Re?Re:sn(),Re=-1,He!==Ie)){var t=Le[Ie],e=Le[He];Qi(t,{tabindex:"-1","aria-label":ze+(Ie+1)}),ji(t,We),t.setAttribute("aria-disabled","false"),Qi(e,{"aria-label":ze+(He+1)+qe}),Xi(e,"tabindex"),Fi(e,We),e.setAttribute("aria-disabled","true"),Ie=He}}()}function jn(t,e){for(var n=[],i=t,o=Math.min(t+e,Pt);i<o;i++)n.push(G[i].offsetHeight);return Math.max.apply(null,n)}function Vn(){var t=yt?jn(jt,ft):jn(Dt,U),e=L||K;e.style.height!==t&&(e.style.height=t+"px")}function Kn(){Z=[0];var n=F?"left":"top",i=F?"right":"bottom",o=G[0].getBoundingClientRect()[n];zi(G,function(t,e){e&&Z.push(t.getBoundingClientRect()[n]-o),e===Pt-1&&Z.push(t.getBoundingClientRect()[i]-o)})}function Qn(){console.log("inside updateSlideStatus");var t=Pn(),n=t[0],i=t[1];zi(G,function(t,e){n<=e&&e<=i?Vi(t,"aria-hidden")&&(Xi(t,["aria-hidden"]),Fi(t,ye)):Vi(t,"aria-hidden")||(Qi(t,{"aria-hidden":"true"}),ji(t,ye))})}function Xn(t){return t.nodeName.toLowerCase()}function Yn(t){return"button"===Xn(t)}function Gn(t){return"true"===t.getAttribute("aria-disabled")}function Un(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Jn(){if(bt&&!ht&&!gt){var t=we?Ee.disabled:Gn(Ee),e=Me?Ne.disabled:Gn(Ne),n=jt<=Kt,i=!ht&&Qt<=jt;n&&!t&&Un(we,Ee,!0),!n&&t&&Un(we,Ee,!1),i&&!e&&Un(Me,Ne,!0),!i&&e&&Un(Me,Ne,!1)}}function _n(t,e){b&&(t.style[b]=e)}function Zn(t){return null==t&&(t=jt),at?(ut-(lt?st:0)-(Z[t+1]-Z[t]-st))/2:rt?(ut-rt)/2:(ft-1)/2}function $n(){var t=ut+(lt?st:0)-(rt?(rt+st)*Pt:Z[Pt]);return ct&&!gt&&(t=rt?-(rt+st)*(Pt-1)-Zn():Zn(Pt-1)-Z[Pt-1]),0<t&&(t=0),t}function ti(t){var e;if(null==t&&(t=jt),F&&!at)if(rt)e=-(rt+st)*t,ct&&(e+=Zn());else{var n=d?Pt:ft;ct&&(t-=Zn()),e=100*-t/n}else e=-Z[t],ct&&at&&(e+=Zn());return Rt&&(e=Math.max(e,Ht)),e+=!F||at||rt?"px":"%"}function ei(t){_n(Q,"0s"),ni(t)}function ni(t){null==t&&(t=ti()),Q.style[Wt]=zt+t+qt}function ii(t,e,n,i){console.log("inside animateSlide");var o=t+ft;gt||(o=Math.min(o,Pt));for(var a=t;a<o;a++){var r=G[a];i||(r.style.left=100*(a-jt)/ft+"%"),B&&p&&(r.style[p]=r.style[m]=B*(a-t)/1e3+"s"),ji(r,e),Fi(r,n),i&&kt.push(r)}}function oi(t,e){console.log("inside render"),It&&en(),(jt!==Vt||e)&&(_t.emit("indexChanged",Si()),_t.emit("transitionStart",Si()),yt&&zn(),je&&t&&0<=["click","keydown"].indexOf(t.type)&&vi(),Ut=!0,Q.setAttribute("aria-live","off"),Q.classList.add("tns-animating"),nn())}function ai(t){return t.toLowerCase().replace(/-/g,"")}function ri(t){if(console.log("inside onTransitionEnd"),console.log("autoplayUserPaused",Ke),console.log("animating",je),H||Ut){if(_t.emit("transitionEnd",Si(t)),Q.classList.remove("tns-animating"),je||Q.setAttribute("aria-live","polite"),!H&&0<kt.length)for(var e=0;e<kt.length;e++){var n=kt[e];n.style.left="",m&&p&&(n.style[m]="",n.style[p]=""),ji(n,W),Fi(n,z)}if(!t||!H&&t.target.parentNode===Q||t.target===Q&&ai(t.propertyName)===ai(Wt)){if(!It){var i=jt;en(),jt!==i&&(_t.emit("indexChanged",Si()),ei())}"inner"===R&&_t.emit("innerLoaded",Si()),Ut=!1,Vt=jt}}}function li(t,e){if(console.log("inside goTo"),!ie)if("prev"===t)si(e,-1);else if("next"===t)si(e,1);else{if(Ut){if(Xt)return;ri()}var n=ln(),i=0;if("first"===t?i=-n:"last"===t?i=H?U-ft-n:U-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(U-1,t))),i=t-n)),!H&&i&&Math.abs(i)<ft){var o=0<i?1:-1;i+=Kt<=jt+i-U?U*o:2*U*o*-1}jt+=i,H&&gt&&(jt<Kt&&(jt+=U),Qt<jt&&(jt-=U)),ln(jt)!==ln(Vt)&&oi(e)}}function si(t,e){if(console.log("inside onControlsClick"),Ut){if(Xt)return;ri()}var n;if(console.log("dir",e),!e){console.log("inside not-dir. probably either prev or next button clicked");for(var i=yi(t=gi(t));i!==Te&&[Ee,Ne].indexOf(i)<0;)i=i.parentNode;var o=[Ee,Ne].indexOf(i);console.log("targetIn",o),0<=o&&(n=!0,e=0===o?-1:1,console.log("now dir",e))}if(ht){if(jt===Kt&&-1===e)return void li("last",t);if(jt===Qt&&1===e)return void li("first",t)}e&&(jt+=dt*e,at&&(jt=Math.floor(jt)),oi(n||t&&"keydown"===t.type?t:null))}function ui(){console.log("inside setAutoplayTimer"),Fe||(Fe=setInterval(function(){si(null,Xe)},At)),je=!0}function ci(){console.log("inside stopAutoplayTimer"),Fe&&(Fe=clearInterval(Fe)),je=!1}function fi(t,e){Qi(Ye,{"data-action":t}),Ye.setAttribute("aria-label",t+" carousel"),Ye.innerHTML=e}function di(){ui(),Q.setAttribute("aria-live","off"),Ye&&fi("stop",Et[1])}function vi(){ci(),Q.setAttribute("aria-live","polite"),Ye&&fi("start",Et[0])}function pi(){je&&(vi(),Ke=!0)}function mi(){je?(vi(),Ke=!0):(di(),Ke=!1)}function hi(t){t.focus()}function gi(t){return bi(t=t||h.event)?t.changedTouches[0]:t}function yi(t){return t.target||h.event.srcElement}function bi(t){return 0<=t.type.indexOf("touch")}function xi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Ci(){return o=Ze.y-_e.y,a=Ze.x-_e.x,t=Math.atan2(o,a)*(180/Math.PI),e=Yt,n=!1,i=Math.abs(90-Math.abs(t)),90-e<=i?n="horizontal":i<=e&&(n="vertical"),n===O.axis;var t,e,n,i,o,a}function wi(t){if(Q.setAttribute("aria-live","off"),Q.classList.add("tns-animating"),console.log("inside onPanStart"),console.log("autoplay",Tt),console.log("animating",je),console.log("running",Ut),console.log("preventActionWhenRunning",Xt),console.log("rafIndex",Je),console.log("carousel",H),Ut){if(Xt)return;ri()}ci(),$e=!0,Je&&(Li(Je),Je=null);var e=gi(t);_t.emit(bi(t)?"touchStart":"dragStart",Si(t)),!bi(t)&&0<=["img","a"].indexOf(Xn(yi(t)))&&xi(t),Ze.x=_e.x=e.clientX,Ze.y=_e.y=e.clientY,H&&(Ue=parseFloat(Q.style[Wt].replace(zt,"")),_n(Q,"0s"))}function Mi(t){if($e){var e=gi(t);Ze.x=e.clientX,Ze.y=e.clientY,H?Je||(Je=Bi(function(){!function t(e){if(!Gt)return void($e=!1);Li(Je);$e&&(Je=Bi(function(){t(e)}));"?"===Gt&&(Gt=Ci());if(Gt){!Ce&&bi(e)&&(Ce=!0);try{e.type&&_t.emit(bi(e)?"touchMove":"dragMove",Si(e))}catch(t){}var n=Ue,i=tn(Ze,_e);if(!F||rt||at)n+=i,n+="px";else{var o=d?i*ft*100/((ut+st)*Pt):100*i/(ut+st);n+=o,n+="%"}Q.style[Wt]=zt+n+qt}}(t)})):("?"===Gt&&(Gt=Ci()),Gt&&(Ce=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&Ce&&t.preventDefault()}}function Ti(i){if(console.log("inside onPanEnd"),$e){Je&&(Li(Je),Je=null),H&&_n(Q,""),$e=!1;var t=gi(i);Ze.x=t.clientX,Ze.y=t.clientY;var o=tn(Ze,_e);if(Math.abs(o)){if(!bi(i)){var n=yi(i);$i(n,{click:function t(e){xi(e),to(n,{click:t})}})}H?Je=Bi(function(){if(F&&!at){var t=-o*ft/(ut+st);t=0<o?Math.floor(t):Math.ceil(t),jt+=t}else{var e=-(Ue+o);if(e<=0)jt=Kt;else if(e>=Z[Pt-1])jt=Qt;else for(var n=0;n<Pt&&e>=Z[n];)e>Z[jt=n]&&o<0&&(jt+=1),n++}oi(i,o),_t.emit(bi(i)?"touchEnd":"dragEnd",Si(i))}):Gt&&si(i,0<o?-1:1)}}"auto"===O.preventScrollOnTouch&&(Ce=!1),Yt&&(Gt="?"),!Tt||je||Ke||ui()}function Ai(){(L||K).style.height=Z[jt+ft]-Z[jt]+"px"}function Ei(){var t=rt?(rt+st)*U/ut:U/ft;return Math.min(Math.ceil(t),U)}function Ni(){if(Ct&&!pe&&De!==Pe){var t=Pe,e=De,n=Ui;for(De<Pe&&(t=De,e=Pe,n=Gi);t<e;)n(Le[t]),t++;Pe=De}}function Si(t){return{container:Q,slideItems:G,navContainer:Oe,navItems:Le,controlsContainer:Te,hasControls:de,prevButton:Ee,nextButton:Ne,items:ft,slideBy:dt,cloneCount:Dt,slideCount:U,slideCountNew:Pt,index:jt,indexCached:Vt,displayIndex:an(),navCurrentIndex:He,navCurrentIndexCached:Ie,pages:De,pagesCached:Pe,sheet:Bt,isOn:_,event:t||{}}}M&&console.warn("No slides found in",O.container)};return no}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
