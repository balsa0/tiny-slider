var tns=function(){var t=window,Li=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},e=window,Si=e.cancelAnimationFrame||e.mozCancelAnimationFrame||function(t){clearTimeout(t)};function Bi(){for(var t,e,n,i=arguments[0]||{},o=1,a=arguments.length;o<a;o++)if(null!==(t=arguments[o]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function ki(t){return 0<=["true","false"].indexOf(t)?JSON.parse(t):t}function Di(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function Oi(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var n=document.documentElement;function Ri(t){var e="";return t.fake&&(e=n.style.overflow,t.style.background="",t.style.overflow=n.style.overflow="hidden",n.appendChild(t)),e}function Hi(t,e){t.fake&&(t.remove(),n.style.overflow=e,n.offsetHeight)}function Pi(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function Ii(t){return("insertRule"in t?t.cssRules:t.rules).length}function Wi(t,e,n){for(var i=0,o=t.length;i<o;i++)e.call(n,t[i],i)}var i="classList"in document.createElement("_"),zi=i?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},Fi=i?function(t,e){zi(t,e)||t.classList.add(e)}:function(t,e){zi(t,e)||(t.className+=" "+e)},qi=i?function(t,e){zi(t,e)&&t.classList.remove(e)}:function(t,e){zi(t,e)&&(t.className=t.className.replace(e,""))};function ji(t,e){return t.hasAttribute(e)}function Vi(t,e){return t.getAttribute(e)}function a(t){return void 0!==t.item}function Ki(t,e){if(t=a(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function Gi(t,e){t=a(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var o=n;o--;)t[i].removeAttribute(e[o])}function Qi(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function Xi(t,e){"none"!==t.style.display&&(t.style.display="none")}function Yi(t,e){"none"===t.style.display&&(t.style.display="")}function Ui(t){return"none"!==window.getComputedStyle(t).display}function Ji(e){if("string"==typeof e){var n=[e],i=e.charAt(0).toUpperCase()+e.substr(1);["Webkit","Moz","ms","O"].forEach(function(t){"ms"===t&&"transform"!==e||n.push(t+i)}),e=n}for(var t=document.createElement("fakeelement"),o=(e.length,0);o<e.length;o++){var a=e[o];if(void 0!==t.style[a])return a}return!1}function _i(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var o=!1;try{var r=Object.defineProperty({},"passive",{get:function(){o=!0}});window.addEventListener("test",null,r)}catch(t){}var l=!!o&&{passive:!0};function Zi(t,e,n){for(var i in e){var o=0<=["touchstart","touchmove"].indexOf(i)&&!n&&l;t.addEventListener(i,e[i],o)}}function $i(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&l;t.removeEventListener(n,e[n],i)}}function to(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(e,n){n.type=e,this.topics[e]&&this.topics[e].forEach(function(t){t(n,e)})}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var eo=function(k){k=Bi({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0},k||{});var D=document,h=window,o={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},e={},n=k.useLocalStorage;if(n){var t=navigator.userAgent,i=new Date;try{(e=h.localStorage)?(e.setItem(i,i),n=e.getItem(i)==i,e.removeItem(i)):n=!1,n||(e={})}catch(t){n=!1}n&&(e.tnsApp&&e.tnsApp!==t&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){e.removeItem(t)}),localStorage.tnsApp=t)}var a,r,l,s,u,c,f,g=e.tC?ki(e.tC):Di(e,"tC",function(){var t=document,e=Oi(),n=Ri(e),i=t.createElement("div"),o=!1;e.appendChild(i);try{for(var a,r="(10px * 10)",l=["calc"+r,"-moz-calc"+r,"-webkit-calc"+r],s=0;s<3;s++)if(a=l[s],i.style.width=a,100===i.offsetWidth){o=a.replace(r,"");break}}catch(t){}return e.fake?Hi(e,n):i.remove(),o}(),n),y=e.tPL?ki(e.tPL):Di(e,"tPL",function(){var t,e=document,n=Oi(),i=Ri(n),o=e.createElement("div"),a=e.createElement("div"),r="";o.className="tns-t-subp2",a.className="tns-t-ct";for(var l=0;l<70;l++)r+="<div></div>";return a.innerHTML=r,o.appendChild(a),n.appendChild(o),t=Math.abs(o.getBoundingClientRect().left-a.children[67].getBoundingClientRect().left)<2,n.fake?Hi(n,i):o.remove(),t}(),n),O=e.tMQ?ki(e.tMQ):Di(e,"tMQ",(r=document,l=Oi(),s=Ri(l),u=r.createElement("div"),c=r.createElement("style"),f="@media all and (min-width:1px){.tns-mq-test{position:absolute}}",c.type="text/css",u.className="tns-mq-test",l.appendChild(c),l.appendChild(u),c.styleSheet?c.styleSheet.cssText=f:c.appendChild(r.createTextNode(f)),a=window.getComputedStyle?window.getComputedStyle(u).position:u.currentStyle.position,l.fake?Hi(l,s):u.remove(),"absolute"===a),n),d=e.tTf?ki(e.tTf):Di(e,"tTf",Ji("transform"),n),v=e.t3D?ki(e.t3D):Di(e,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=Oi(),o=Ri(i),a=n.createElement("p"),r=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return r+="transform",i.insertBefore(a,null),a.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(a).getPropertyValue(r),i.fake?Hi(i,o):a.remove(),void 0!==e&&0<e.length&&"none"!==e}(d),n),b=e.tTDu?ki(e.tTDu):Di(e,"tTDu",Ji("transitionDuration"),n),p=e.tTDe?ki(e.tTDe):Di(e,"tTDe",Ji("transitionDelay"),n),x=e.tADu?ki(e.tADu):Di(e,"tADu",Ji("animationDuration"),n),m=e.tADe?ki(e.tADe):Di(e,"tADe",Ji("animationDelay"),n),w=e.tTE?ki(e.tTE):Di(e,"tTE",_i(b,"Transition"),n),C=e.tAE?ki(e.tAE):Di(e,"tAE",_i(x,"Animation"),n),M=h.console&&"function"==typeof h.console.warn,T=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],A={};if(T.forEach(function(t){if("string"==typeof k[t]){var e=k[t],n=D.querySelector(e);if(A[t]=e,!n||!n.nodeName)return void(M&&console.warn("Can't find",k[t]));k[t]=n}}),!(k.container.children.length<1)){var R=k.responsive,H=k.nested,P="carousel"===k.mode;if(R){0 in R&&(k=Bi(k,R[0]),delete R[0]);var E={};for(var N in R){var L=R[N];L="number"==typeof L?{items:L}:L,E[N]=L}R=E,E=null}if(P||function t(e){for(var n in e)P||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(k),!P){k.axis="horizontal",k.slideBy="page",k.edgePadding=!1;var I=k.animateIn,W=k.animateOut,S=k.animateDelay,z=k.animateNormal}var B,F,q="horizontal"===k.axis,j=D.createElement("section"),V=D.createElement("div"),K=k.container,G=K.parentNode,Q=K.outerHTML,X=K.children,Y=X.length,U=sn(),J=!1;R&&Ln(),P&&(K.className+=" tns-vpfix");var _,Z,$,tt,et,nt,it,ot=k.autoWidth,at=dn("fixedWidth"),rt=dn("edgePadding"),lt=dn("gutter"),st=cn(),ut=dn("center"),ct=ot?1:Math.floor(dn("items")),ft=dn("slideBy"),dt=k.viewportMax||k.fixedWidthViewportWidth,vt=dn("arrowKeys"),pt=dn("speed"),mt=k.rewind,ht=!mt&&k.loop,gt=dn("autoHeight"),yt=dn("controls"),bt=dn("controlsText"),xt=dn("nav"),wt=dn("touch"),Ct=dn("mouseDrag"),Mt=dn("autoplay"),Tt=dn("autoplayTimeout"),At=dn("autoplayText"),Et=dn("autoplayHoverPause"),Nt=dn("autoplayResetOnVisibility"),Lt=(it=document.createElement("style"),nt&&it.setAttribute("media",nt),document.querySelector("head").appendChild(it),it.sheet?it.sheet:it.styleSheet),St=k.lazyload,Bt=k.lazyloadSelector,kt=[],Dt=ht?(tt=function(){{if(ot||at&&!dt)return Y-1;var t=at?"fixedWidth":"items",e=[];if((at||k[t]<Y)&&e.push(k[t]),R)for(var n in R){var i=R[n][t];i&&(at||i<Y)&&e.push(i)}return e.length||e.push(0),Math.ceil(at?dt/Math.min.apply(null,e):Math.max.apply(null,e))}}(),et=P?Math.ceil((5*tt-Y)/2):4*tt-Y,et=Math.max(tt,et),fn("edgePadding")?et+1:et):0,Ot=P?Y+2*Dt:Y+Dt,Rt=!(!at&&!ot||ht),Ht=at?Zn():null,Pt=!P||!ht,It=q?"left":"top",Wt="",zt="",Ft=at?function(){return ut&&!ht?Y-1:Math.ceil(-Ht/(at+lt))}:ot?function(){for(var t=Ot;t--;)if(_[t]>=-Ht)return t}:function(){return ut&&P&&!ht?Y-1:ht||P?Math.max(0,Ot-Math.ceil(ct)):Ot-1},qt=an(dn("startIndex")),jt=qt,Vt=(on(),0),Kt=ot?null:Ft(),Gt=k.preventActionWhenRunning,Qt=k.swipeAngle,Xt=!Qt||"?",Yt=!1,Ut=k.onInit,Jt=new to,_t=" tns-slider tns-"+k.mode,Zt=K.id||($=window.tnsId,window.tnsId=$?$+1:1,"tns"+window.tnsId),$t=dn("disable"),te=!1,ee=k.freezable,ne=!(!ee||ot)&&Nn(),ie=!1,oe={click:function(t,e){console.log("inside onPrevNextClick"),vi(),li(t,e)},keydown:function(t){console.log("inside onControlsKeydown"),t=hi(t);var e=[o.LEFT,o.RIGHT].indexOf(t.keyCode);0<=e&&(0===e?Ae.disabled||li(t,-1):Ee.disabled||li(t,1))}},ae={click:function(t){if(console.log("inside onNavClick"),vi(),Yt){if(Gt)return;ai()}var e=gi(t=hi(t));for(;e!==Be&&!ji(e,"data-nav");)e=e.parentNode;if(ji(e,"data-nav")){var n=Re=Number(Vi(e,"data-nav")),i=at||ot?n*Y/De:n*ct,o=ve?n:Math.min(Math.ceil(i),Y-1);ri(o,t),He===n&&(qe&&di(),Re=-1)}},keydown:function(t){console.log("inside onNavKeydown"),t=hi(t);var e=D.activeElement;if(!ji(e,"data-nav"))return;var n=[o.LEFT,o.RIGHT,o.ENTER,o.SPACE].indexOf(t.keyCode),i=Number(Vi(e,"data-nav"));0<=n&&(0===n?0<i&&mi(Se[i-1]):1===n?i<De-1&&mi(Se[i+1]):ri(Re=i,t))}},re={mouseover:function(){console.log("inside mouseoverPause"),qe?(console.log("@@@@@@@@@@@ is animating!"),ui(),je=!0):console.log("%%%%%%%%%%%%%%%%%%%% is not animating!");ci("start",At[0])},mouseout:function(){console.log("inside mouseoutRestart"),je&&!Ve&&(si(),je=!1,ci("stop",At[1]))}},le={visibilitychange:function(){D.hidden?qe&&(ui(),Ke=!0):Ke&&(si(),Ke=!1)}},se={keydown:function(t){console.log("inside onDocumentKeydown"),t=hi(t);var e=[o.LEFT,o.RIGHT].indexOf(t.keyCode);0<=e&&li(t,0===e?-1:1)}},ue={touchstart:wi,touchmove:Ci,touchend:Mi,touchcancel:Mi},ce={mousedown:wi,mousemove:Ci,mouseup:Mi,mouseleave:Mi},fe=fn("controls"),de=fn("nav"),ve=!!ot||k.navAsThumbnails,pe=fn("autoplay"),me=fn("touch"),he=fn("mouseDrag"),ge="tns-slide-active",ye="tns-complete",be={load:function(t){Hn(gi(t))},error:function(t){e=gi(t),Fi(e,"failed"),Pn(e);var e}},xe="force"===k.preventScrollOnTouch;if(fe)var we,Ce,Me=k.controlsContainer,Te=k.controlsContainer?k.controlsContainer.outerHTML:"",Ae=k.prevButton,Ee=k.nextButton,Ne=k.prevButton?k.prevButton.outerHTML:"",Le=k.nextButton?k.nextButton.outerHTML:"";if(de)var Se,Be=k.navContainer,ke=k.navContainer?k.navContainer.outerHTML:"",De=ot?Y:Ai(),Oe=0,Re=-1,He=ln(),Pe=He,Ie="tns-nav-active",We="carousel page ",ze=" (current slide)";if(pe)var Fe,qe,je,Ve,Ke,Ge="forward"===k.autoplayDirection?1:-1,Qe=k.autoplayButton,Xe=k.autoplayButton?k.autoplayButton.outerHTML:"";if(me||he)var Ye,Ue,Je={},_e={},Ze=!1,$e=q?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};ot||nn($t||ne),d&&(It=d,Wt="translate",v?(Wt+=q?"3d(":"3d(0px, ",zt=q?", 0px, 0px)":", 0px)"):(Wt+=q?"X(":"Y(",zt=")")),P&&(K.className=K.className.replace("tns-vpfix","")),function(){fn("gutter");j.className="tns-outer",j.setAttribute("aria-roledescription","carousel"),V.className="tns-inner",j.id=Zt+"-ow",V.id=Zt+"-iw",""===K.id&&(K.id=Zt);_t+=y||ot?" tns-subpixel":" tns-no-subpixel",_t+=g?" tns-calc":" tns-no-calc",ot&&(_t+=" tns-autowidth");_t+=" tns-"+k.axis,K.className+=_t,P?((B=D.createElement("div")).id=Zt+"-mw",B.className="tns-ovh",j.appendChild(B),B.appendChild(V)):j.appendChild(V);if(gt){var t=B||V;t.className+=" tns-ah"}if(G.insertBefore(j,K),V.appendChild(K),Wi(X,function(t,e){Fi(t,"tns-item"),t.id||(t.id=Zt+"-item"+e),!P&&z&&Fi(t,z),Ki(t,{role:"group","aria-hidden":"true","aria-roledescription":"slide","aria-label":e+1+" of "+X.length})}),Dt){for(var e=D.createDocumentFragment(),n=D.createDocumentFragment(),i=Dt;i--;){var o=i%Y,a=X[o].cloneNode(!0);if(Gi(a,"id"),n.insertBefore(a,n.firstChild),P){var r=X[Y-1-o].cloneNode(!0);Gi(r,"id"),e.appendChild(r)}}K.insertBefore(e,K.firstChild),K.appendChild(n),X=K.children}}(),function(){if(!P)for(var t=qt,e=qt+Math.min(Y,ct);t<e;t++){var n=X[t];n.style.left=100*(t-qt)/ct+"%",Fi(n,I),qi(n,z)}q&&(y||ot?(Pi(Lt,"#"+Zt+" > .tns-item","font-size:"+h.getComputedStyle(X[0]).fontSize+";",Ii(Lt)),Pi(Lt,"#"+Zt,"font-size:0;",Ii(Lt))):P&&Wi(X,function(t,e){var n;t.style.marginLeft=(n=e,g?g+"("+100*n+"% / "+Ot+")":100*n/Ot+"%")}));if(O){if(b){var i=B&&k.autoHeight?yn(k.speed):"";Pi(Lt,"#"+Zt+"-mw",i,Ii(Lt))}i=vn(k.edgePadding,k.gutter,k.fixedWidth,k.speed,k.autoHeight),Pi(Lt,"#"+Zt+"-iw",i,Ii(Lt)),P&&(i=q&&!ot?"width:"+pn(k.fixedWidth,k.gutter,k.items)+";":"",b&&(i+=yn(pt)),Pi(Lt,"#"+Zt,i,Ii(Lt))),i=q&&!ot?mn(k.fixedWidth,k.gutter,k.items):"",k.gutter&&(i+=hn(k.gutter)),P||(b&&(i+=yn(pt)),x&&(i+=bn(pt))),i&&Pi(Lt,"#"+Zt+" > .tns-item",i,Ii(Lt))}else{P&&gt&&(B.style[b]=pt/1e3+"s"),V.style.cssText=vn(rt,lt,at,gt),P&&q&&!ot&&(K.style.width=pn(at,lt,ct));var i=q&&!ot?mn(at,lt,ct):"";lt&&(i+=hn(lt)),i&&Pi(Lt,"#"+Zt+" > .tns-item",i,Ii(Lt))}if(R&&O)for(var o in R){o=parseInt(o);var a=R[o],i="",r="",l="",s="",u="",c=ot?null:dn("items",o),f=dn("fixedWidth",o),d=dn("speed",o),v=dn("edgePadding",o),p=dn("autoHeight",o),m=dn("gutter",o);b&&B&&dn("autoHeight",o)&&"speed"in a&&(r="#"+Zt+"-mw{"+yn(d)+"}"),("edgePadding"in a||"gutter"in a)&&(l="#"+Zt+"-iw{"+vn(v,m,f,d,p)+"}"),P&&q&&!ot&&("fixedWidth"in a||"items"in a||at&&"gutter"in a)&&(s="width:"+pn(f,m,c)+";"),b&&"speed"in a&&(s+=yn(d)),s&&(s="#"+Zt+"{"+s+"}"),("fixedWidth"in a||at&&"gutter"in a||!P&&"items"in a)&&(u+=mn(f,m,c)),"gutter"in a&&(u+=hn(m)),!P&&"speed"in a&&(b&&(u+=yn(d)),x&&(u+=bn(d))),u&&(u="#"+Zt+" > .tns-item{"+u+"}"),(i=r+l+s+u)&&Lt.insertRule("@media (min-width: "+o/16+"em) {"+i+"}",Lt.cssRules.length)}}(),xn();var tn=ht?P?function(){var t=Vt,e=Kt;t+=ft,e-=ft,rt?(t+=1,e-=1):at&&(st+lt)%(at+lt)&&(e-=1),Dt&&(e<qt?qt-=Y:qt<t&&(qt+=Y))}:function(){if(Kt<qt)for(;Vt+Y<=qt;)qt-=Y;else if(qt<Vt)for(;qt<=Kt-Y;)qt+=Y}:function(){qt=Math.max(Vt,Math.min(Kt,qt))},en=P?function(){var e,n,i,o,t,a,r,l,s,u,c;Jn(K,""),b||!pt?(ei(),pt&&Ui(K)||ai()):(e=K,n=It,i=Wt,o=zt,t=$n(),a=pt,r=ai,l=Math.min(a,10),s=0<=t.indexOf("%")?"%":"px",t=t.replace(s,""),u=Number(e.style[n].replace(i,"").replace(o,"").replace(s,"")),c=(t-u)/a*l,setTimeout(function t(){a-=l,u+=c,e.style[n]=i+u+s+o,0<a?setTimeout(t,l):r()},l)),q||Ti()}:function(){kt=[];var t={};t[w]=t[C]=ai,$i(X[jt],t),Zi(X[qt],t),ni(jt,I,W,!0),ni(qt,z,I),w&&C&&pt&&Ui(K)||ai()};return{version:"2.9.2",getInfo:Ni,events:Jt,goTo:ri,play:function(){Mt&&!qe&&(fi(),Ve=!1)},pause:vi,isOn:J,updateSliderHeight:jn,refresh:xn,destroy:function(){if(Lt.disabled=!0,Lt.ownerNode&&Lt.ownerNode.remove(),$i(h,{resize:An}),vt&&$i(K,se),Me&&$i(Me,oe),Be&&$i(Be,ae),$i(K,re),$i(K,le),Qe&&$i(Qe,{click:pi}),Mt&&clearInterval(Fe),P&&w){var t={};t[w]=ai,$i(K,t)}wt&&$i(K,ue),Ct&&$i(K,ce);var a=[Q,Te,Ne,Le,ke,Xe];for(var e in T.forEach(function(t,e){var n="container"===t?j:k[t];if("object"==typeof n&&n){var i=!!n.previousElementSibling&&n.previousElementSibling,o=n.parentNode;n.outerHTML=a[e],k[t]=i?i.nextElementSibling:o.firstElementChild}}),T=I=W=S=z=q=j=V=K=G=Q=X=Y=F=U=ot=at=rt=lt=st=ct=ft=dt=vt=pt=mt=ht=gt=Lt=St=_=kt=Dt=Ot=Rt=Ht=Pt=It=Wt=zt=Ft=qt=jt=Vt=Kt=Qt=Xt=Yt=Ut=Jt=_t=Zt=$t=te=ee=ne=ie=oe=ae=re=le=se=ue=ce=fe=de=ve=pe=me=he=ge=ye=be=Z=yt=bt=Me=Te=Ae=Ee=we=Ce=xt=Be=ke=Se=De=Oe=Re=He=Pe=Ie=We=ze=Mt=Tt=Ge=At=Et=Qe=Xe=Nt=Fe=qe=je=Ve=Ke=Je=_e=Ye=Ze=Ue=$e=wt=Ct=null,this)"rebuild"!==e&&(this[e]=null);J=!1},rebuild:function(){return eo(Bi(k,A))}}}function nn(t){t&&(yt=xt=wt=Ct=vt=Mt=Et=Nt=!1)}function on(){for(var t=P?qt-Dt:qt;t<0;)t+=Y;return t%Y+1}function an(t){return t=t?Math.max(0,Math.min(ht?Y-1:Y-ct,t)):0,P?t+Dt:t}function rn(t){for(null==t&&(t=qt),P&&(t-=Dt);t<0;)t+=Y;return Math.floor(t%Y)}function ln(){var t,e=rn();return t=ve?e:at||ot?Math.ceil((e+1)*De/Y-1):Math.floor(e/ct),!ht&&P&&qt===Kt&&(t=De-1),t}function sn(){return h.innerWidth||D.documentElement.clientWidth||D.body.clientWidth}function un(t){return"top"===t?"afterbegin":"beforeend"}function cn(){var t=rt?2*rt-lt:0;return function t(e){if(null!=e){var n,i,o=D.createElement("div");return e.appendChild(o),i=(n=o.getBoundingClientRect()).right-n.left,o.remove(),i||t(e.parentNode)}}(G)-t}function fn(t){if(k[t])return!0;if(R)for(var e in R)if(R[e][t])return!0;return!1}function dn(t,e){if(null==e&&(e=U),"items"===t&&at)return Math.floor((st+lt)/(at+lt))||1;var n=k[t];if(R)for(var i in R)e>=parseInt(i)&&t in R[i]&&(n=R[i][t]);return"slideBy"===t&&"page"===n&&(n=dn("items")),P||"slideBy"!==t&&"items"!==t||(n=Math.floor(n)),n}function vn(t,e,n,i,o){var a="";if(void 0!==t){var r=t;e&&(r-=e),a=q?"margin: 0 "+r+"px 0 "+t+"px;":"margin: "+t+"px 0 "+r+"px 0;"}else if(e&&!n){var l="-"+e+"px";a="margin: 0 "+(q?l+" 0 0":"0 "+l+" 0")+";"}return!P&&o&&b&&i&&(a+=yn(i)),a}function pn(t,e,n){return t?(t+e)*Ot+"px":g?g+"("+100*Ot+"% / "+n+")":100*Ot/n+"%"}function mn(t,e,n){var i;if(t)i=t+e+"px";else{P||(n=Math.floor(n));var o=P?Ot:n;i=g?g+"(100% / "+o+")":100/o+"%"}return i="width:"+i,"inner"!==H?i+";":i+" !important;"}function hn(t){var e="";!1!==t&&(e=(q?"padding-":"margin-")+(q?"right":"bottom")+": "+t+"px;");return e}function gn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function yn(t){return gn(b,18)+"transition-duration:"+t/1e3+"s;"}function bn(t){return gn(x,17)+"animation-duration:"+t/1e3+"s;"}function xn(){if(fn("autoHeight")||ot||!q){var t=K.querySelectorAll("img");Wi(t,function(t){var e=t.src;St||(e&&e.indexOf("data:image")<0?(t.src="",Zi(t,be),Fi(t,"loading"),t.src=e):Hn(t))}),Li(function(){zn(Qi(t),function(){Z=!0})}),fn("autoHeight")&&(t=In(qt,Math.min(qt+ct-1,Ot-1))),St?wn():Li(function(){zn(Qi(t),wn)})}else P&&ti(),Mn(),Tn()}function wn(){if(ot){var i=ht?qt:Y-1;!function t(){var e=X[i].getBoundingClientRect().left,n=X[i-1].getBoundingClientRect().right;Math.abs(e-n)<=1?Cn():setTimeout(function(){t()},16)}()}else Cn()}function Cn(){q&&!ot||(Vn(),ot?(Ht=Zn(),ee&&(ne=Nn()),Kt=Ft(),nn($t||ne)):Ti()),P&&ti(),Mn(),Tn()}function Mn(){if(console.log("container",K),console.log("outerWrapper",j),console.log("containerParent",G),Kn(),K.setAttribute("aria-atomic","false"),pe){K.setAttribute("aria-live","off");var t=Mt?"stop":"start";Qe?Ki(Qe,{"data-action":t}):k.autoplayButtonOutput&&(j.insertAdjacentHTML(un(k.autoplayPosition),'<button data-action="'+t+'" aria-label="'+t+'" >'+t+"</button>"),Qe=j.querySelector("[data-action]")),Qe&&Zi(Qe,{click:pi}),Mt&&(fi(),Et&&Zi(K,re),Nt&&Zi(K,le))}else K.setAttribute("aria-live","polite");if(de){if(Be)Ki(Be,{"aria-label":"Carousel Pagination"}),Wi(Se=Be.children,function(t,e){Ki(t,{"data-nav":e,tabindex:"-1","aria-label":We+(e+1),"aria-controls":Zt})});else{for(var e="",n=ve?"":'style="display:none"',i=0;i<Y;i++)e+='<button data-nav="'+i+'" tabindex="-1" aria-controls="'+Zt+'" '+n+' aria-label="'+We+(i+1)+'"></button>';e='<div class="tns-nav" role="group" aria-label="carousel pagination">'+e+"</div>",j.insertAdjacentHTML(un(k.navPosition),e),Be=j.querySelector(".tns-nav"),Se=Be.children}if(Ei(),b){var o=b.substring(0,b.length-18).toLowerCase(),a="transition: all "+pt/1e3+"s";o&&(a="-"+o+"-"+a),Pi(Lt,"[aria-controls^="+Zt+"-item]",a,Ii(Lt))}Ki(Se[He],{"aria-label":We+(He+1)+ze}),Gi(Se[He],"tabindex"),Fi(Se[He],Ie),Se[He].setAttribute("aria-disabled","true"),Zi(Be,ae)}fe&&(Me||Ae&&Ee||(j.insertAdjacentHTML(un(k.controlsPosition),'<div class="tns-controls" aria-label="carousel navigation"><button data-controls="prev" aria-label="previous slide" aria-controls="'+Zt+'">'+bt[0]+'</button><button data-controls="next" aria-label="next slide" aria-controls="'+Zt+'">'+bt[1]+"</button></div>"),Me=j.querySelector(".tns-controls")),Ae&&Ee||(Ae=Me.children[0],Ee=Me.children[1]),k.controlsContainer&&Ki(Me,{"aria-label":"Carousel Navigation",tabindex:"0"}),(k.controlsContainer||k.prevButton&&k.nextButton)&&Ki([Ae,Ee],{"aria-controls":Zt,tabindex:"-1"}),(k.controlsContainer||k.prevButton&&k.nextButton)&&(Ki(Ae,{"data-controls":"prev"}),Ki(Ee,{"data-controls":"next"})),we=Qn(Ae),Ce=Qn(Ee),Un(),Me?Zi(Me,oe):(Zi(Ae,oe),Zi(Ee,oe))),Sn()}function Tn(){if(P&&w){var t={};t[w]=ai,Zi(K,t)}wt&&Zi(K,ue,k.preventScrollOnTouch),Ct&&Zi(K,ce),vt&&Zi(j,se),"inner"===H?Jt.on("outerResized",function(){En(),Jt.emit("innerLoaded",Ni())}):(R||at||ot||gt||!q)&&Zi(h,{resize:An}),gt&&("outer"===H?Jt.on("innerLoaded",Wn):$t||Wn()),Rn(),$t?Dn():ne&&kn(),Jt.on("indexChanged",Fn),"inner"===H&&Jt.emit("innerLoaded",Ni()),"function"==typeof Ut&&Ut(Ni()),J=!0}function An(t){Li(function(){En(hi(t))})}function En(t){if(J){"outer"===H&&Jt.emit("outerResized",Ni(t)),U=sn();var e,n=F,i=!1;R&&(Ln(),(e=n!==F)&&Jt.emit("newBreakpointStart",Ni(t)));var o,a,r,l,s=ct,u=$t,c=ne,f=vt,d=yt,v=xt,p=wt,m=Ct,h=Mt,g=Et,y=Nt,b=qt;if(e){var x=at,w=gt,C=bt,M=ut,T=At;if(!O)var A=lt,E=rt}if(vt=dn("arrowKeys"),yt=dn("controls"),xt=dn("nav"),wt=dn("touch"),ut=dn("center"),Ct=dn("mouseDrag"),Mt=dn("autoplay"),Et=dn("autoplayHoverPause"),Nt=dn("autoplayResetOnVisibility"),e&&($t=dn("disable"),at=dn("fixedWidth"),pt=dn("speed"),gt=dn("autoHeight"),bt=dn("controlsText"),At=dn("autoplayText"),Tt=dn("autoplayTimeout"),O||(rt=dn("edgePadding"),lt=dn("gutter"))),nn($t),st=cn(),q&&!ot||$t||(Vn(),q||(Ti(),i=!0)),(at||ot)&&(Ht=Zn(),Kt=Ft()),(e||at)&&(ct=dn("items"),ft=dn("slideBy"),(a=ct!==s)&&(at||ot||(Kt=Ft()),tn())),e&&$t!==u&&($t?Dn():function(){if(!te)return;if(Lt.disabled=!1,K.className+=_t,ti(),ht)for(var t=Dt;t--;)P&&Yi(X[t]),Yi(X[Ot-t-1]);if(!P)for(var e=qt,n=qt+Y;e<n;e++){var i=X[e],o=e<qt+ct?I:z;i.style.left=100*(e-qt)/ct+"%",Fi(i,o)}Bn(),te=!1}()),ee&&(e||at||ot)&&(ne=Nn())!==c&&(ne?(ei($n(an(0))),kn()):(!function(){if(!ie)return;rt&&O&&(V.style.margin="");if(Dt)for(var t="tns-transparent",e=Dt;e--;)P&&qi(X[e],t),qi(X[Ot-e-1],t);Bn(),ie=!1}(),i=!0)),nn($t||ne),Mt||(Et=Nt=!1),vt!==f&&(vt?Zi(K,se):$i(K,se)),yt!==d&&(yt?Me?Yi(Me):(Ae&&Yi(Ae),Ee&&Yi(Ee)):Me?Xi(Me):(Ae&&Xi(Ae),Ee&&Xi(Ee))),xt!==v&&(xt?Yi(Be):Xi(Be)),wt!==p&&(wt?Zi(K,ue,k.preventScrollOnTouch):$i(K,ue)),Ct!==m&&(Ct?Zi(K,ce):$i(K,ce)),Mt!==h&&(Mt?(Qe&&Yi(Qe),qe||Ve||fi()):(Qe&&Xi(Qe),qe&&di())),Et!==g&&(Et?Zi(K,re):$i(K,re)),Nt!==y&&(Nt?Zi(D,le):$i(D,le)),e){if(at===x&&ut===M||(i=!0),gt!==w&&(gt||(V.style.height="")),yt&&bt!==C&&(Ae.innerHTML=bt[0],Ee.innerHTML=bt[1]),Qe&&At!==T){var N=Mt?1:0,L=Qe.innerHTML,S=L.length-T[N].length;L.substring(S)===T[N]&&(Qe.innerHTML=L.substring(0,S)+At[N])}}else ut&&(at||ot)&&(i=!0);if((a||at&&!ot)&&(De=Ai(),Ei()),(o=qt!==b)?(Jt.emit("indexChanged",Ni()),i=!0):a?o||Fn():(at||ot)&&(Rn(),Kn()),a&&!P&&function(){for(var t=qt+Math.min(Y,ct),e=Ot;e--;){var n=X[e];qt<=e&&e<t?(Fi(n,"tns-moving"),n.style.left=100*(e-qt)/ct+"%",Fi(n,I),qi(n,z)):n.style.left&&(n.style.left="",Fi(n,z),qi(n,I)),qi(n,W)}setTimeout(function(){Wi(X,function(t){qi(t,"tns-moving")})},300)}(),!$t&&!ne){if(e&&!O&&(rt===E&&lt===A||(V.style.cssText=vn(rt,lt,at,pt,gt)),q)){P&&(K.style.width=pn(at,lt,ct));var B=mn(at,lt,ct)+hn(lt);l=Ii(r=Lt)-1,"deleteRule"in r?r.deleteRule(l):r.removeRule(l),Pi(Lt,"#"+Zt+" > .tns-item",B,Ii(Lt))}gt&&Wn(),i&&(ti(),jt=qt)}e&&Jt.emit("newBreakpointEnd",Ni(t))}}function Nn(){if(!at&&!ot)return Y<=(ut?ct-(ct-1)/2:ct);var t=at?(at+lt)*Y:_[Y],e=rt?st+2*rt:st+lt;return ut&&(e-=at?(st-at)/2:(st-(_[qt+1]-_[qt]-lt))/2),t<=e}function Ln(){for(var t in F=0,R)(t=parseInt(t))<=U&&(F=t)}function Sn(){!Mt&&Qe&&Xi(Qe),!xt&&Be&&Xi(Be),yt||(Me?Xi(Me):(Ae&&Xi(Ae),Ee&&Xi(Ee)))}function Bn(){Mt&&Qe&&Yi(Qe),xt&&Be&&Yi(Be),yt&&(Me?Yi(Me):(Ae&&Yi(Ae),Ee&&Yi(Ee)))}function kn(){if(!ie){if(rt&&(V.style.margin="0px"),Dt)for(var t="tns-transparent",e=Dt;e--;)P&&Fi(X[e],t),Fi(X[Ot-e-1],t);Sn(),ie=!0}}function Dn(){if(!te){if(Lt.disabled=!0,K.className=K.className.replace(_t.substring(1),""),Gi(K,["style"]),ht)for(var t=Dt;t--;)P&&Xi(X[t]),Xi(X[Ot-t-1]);if(q&&P||Gi(V,["style"]),!P)for(var e=qt,n=qt+Y;e<n;e++){var i=X[e];Gi(i,["style"]),qi(i,I),qi(i,z)}Sn(),te=!0}}function On(t){console.log("inside getVisibleSlideRange"),null==t&&(t=$n());var n,i,o,a=qt;if(ut||rt?(ot||at)&&(i=-(parseFloat(t)+rt),o=i+st+2*rt):ot&&(i=_[qt],o=i+st),ot)_.forEach(function(t,e){e<Ot&&((ut||rt)&&t<=i+.5&&(a=e),.5<=o-t&&(n=e))});else{if(at){var e=at+lt;ut||rt?(a=Math.floor(i/e),n=Math.ceil(o/e-1)):n=a+Math.ceil(st/e)-1}else if(ut||rt){var r=ct-1;if(ut?(a-=r/2,n=qt+r/2):n=qt+r,rt){var l=rt*ct/st;a-=l,n+=l}a=Math.floor(a),n=Math.ceil(n)}else n=a+ct-1;a=Math.max(a,0),n=Math.min(n,Ot-1)}return[a,n]}function Rn(){if(St&&!$t){var t=On();t.push(Bt),In.apply(null,t).forEach(function(t){if(!zi(t,ye)){var e={};e[w]=function(t){t.stopPropagation()},Zi(t,e),Zi(t,be),t.src=Vi(t,"data-src");var n=Vi(t,"data-srcset");n&&(t.srcset=n),Fi(t,"loading")}})}}function Hn(t){Fi(t,"loaded"),Pn(t)}function Pn(t){Fi(t,ye),qi(t,"loading"),$i(t,be)}function In(t,e,n){var i=[];for(n||(n="img");t<=e;)Wi(X[t].querySelectorAll(n),function(t){i.push(t)}),t++;return i}function Wn(){var t=In.apply(null,On());Li(function(){zn(t,jn)})}function zn(n,t){return Z?t():(n.forEach(function(t,e){!St&&t.complete&&Pn(t),zi(t,ye)&&n.splice(e,1)}),n.length?void Li(function(){zn(n,t)}):t())}function Fn(){Rn(),Kn(),Un(),function(){if(xt&&(He=0<=Re?Re:ln(),Re=-1,He!==Pe)){var t=Se[Pe],e=Se[He];Ki(t,{tabindex:"-1","aria-label":We+(Pe+1)}),qi(t,Ie),t.setAttribute("aria-disabled","false"),Ki(e,{"aria-label":We+(He+1)+ze}),Gi(e,"tabindex"),Fi(e,Ie),e.setAttribute("aria-disabled","true"),Pe=He}}()}function qn(t,e){for(var n=[],i=t,o=Math.min(t+e,Ot);i<o;i++)n.push(X[i].offsetHeight);return Math.max.apply(null,n)}function jn(){var t=gt?qn(qt,ct):qn(Dt,Y),e=B||V;e.style.height!==t&&(e.style.height=t+"px")}function Vn(){_=[0];var n=q?"left":"top",i=q?"right":"bottom",o=X[0].getBoundingClientRect()[n];Wi(X,function(t,e){e&&_.push(t.getBoundingClientRect()[n]-o),e===Ot-1&&_.push(t.getBoundingClientRect()[i]-o)})}function Kn(){console.log("inside updateSlideStatus");var t=On(),n=t[0],i=t[1];Wi(X,function(t,e){n<=e&&e<=i?ji(t,"aria-hidden")&&(Gi(t,["aria-hidden"]),Fi(t,ge)):ji(t,"aria-hidden")||(Ki(t,{"aria-hidden":"true"}),qi(t,ge))})}function Gn(t){return t.nodeName.toLowerCase()}function Qn(t){return"button"===Gn(t)}function Xn(t){return"true"===t.getAttribute("aria-disabled")}function Yn(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Un(){if(yt&&!mt&&!ht){var t=we?Ae.disabled:Xn(Ae),e=Ce?Ee.disabled:Xn(Ee),n=qt<=Vt,i=!mt&&Kt<=qt;n&&!t&&Yn(we,Ae,!0),!n&&t&&Yn(we,Ae,!1),i&&!e&&Yn(Ce,Ee,!0),!i&&e&&Yn(Ce,Ee,!1)}}function Jn(t,e){b&&(t.style[b]=e)}function _n(t){return null==t&&(t=qt),ot?(st-(rt?lt:0)-(_[t+1]-_[t]-lt))/2:at?(st-at)/2:(ct-1)/2}function Zn(){var t=st+(rt?lt:0)-(at?(at+lt)*Ot:_[Ot]);return ut&&!ht&&(t=at?-(at+lt)*(Ot-1)-_n():_n(Ot-1)-_[Ot-1]),0<t&&(t=0),t}function $n(t){var e;if(null==t&&(t=qt),q&&!ot)if(at)e=-(at+lt)*t,ut&&(e+=_n());else{var n=d?Ot:ct;ut&&(t-=_n()),e=100*-t/n}else e=-_[t],ut&&ot&&(e+=_n());return Rt&&(e=Math.max(e,Ht)),e+=!q||ot||at?"px":"%"}function ti(t){Jn(K,"0s"),ei(t)}function ei(t){null==t&&(t=$n()),K.style[It]=Wt+t+zt}function ni(t,e,n,i){console.log("inside animateSlide");var o=t+ct;ht||(o=Math.min(o,Ot));for(var a=t;a<o;a++){var r=X[a];i||(r.style.left=100*(a-qt)/ct+"%"),S&&p&&(r.style[p]=r.style[m]=S*(a-t)/1e3+"s"),qi(r,e),Fi(r,n),i&&kt.push(r)}}function ii(t,e){console.log("inside render"),Pt&&tn(),(qt!==jt||e)&&(Jt.emit("indexChanged",Ni()),Jt.emit("transitionStart",Ni()),gt&&Wn(),qe&&t&&0<=["click","keydown"].indexOf(t.type)&&di(),Yt=!0,K.setAttribute("aria-live","off"),K.classList.add("tns-animating"),en())}function oi(t){return t.toLowerCase().replace(/-/g,"")}function ai(t){if(console.log("inside onTransitionEnd"),console.log("autoplayUserPaused",Ve),console.log("animating",qe),P||Yt){if(Jt.emit("transitionEnd",Ni(t)),K.classList.remove("tns-animating"),qe||K.setAttribute("aria-live","polite"),!P&&0<kt.length)for(var e=0;e<kt.length;e++){var n=kt[e];n.style.left="",m&&p&&(n.style[m]="",n.style[p]=""),qi(n,W),Fi(n,z)}if(!t||!P&&t.target.parentNode===K||t.target===K&&oi(t.propertyName)===oi(It)){if(!Pt){var i=qt;tn(),qt!==i&&(Jt.emit("indexChanged",Ni()),ti())}"inner"===H&&Jt.emit("innerLoaded",Ni()),Yt=!1,jt=qt}}}function ri(t,e){if(console.log("inside goTo"),!ne)if("prev"===t)li(e,-1);else if("next"===t)li(e,1);else{if(Yt){if(Gt)return;ai()}var n=rn(),i=0;if("first"===t?i=-n:"last"===t?i=P?Y-ct-n:Y-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(Y-1,t))),i=t-n)),!P&&i&&Math.abs(i)<ct){var o=0<i?1:-1;i+=Vt<=qt+i-Y?Y*o:2*Y*o*-1}qt+=i,P&&ht&&(qt<Vt&&(qt+=Y),Kt<qt&&(qt-=Y)),rn(qt)!==rn(jt)&&ii(e)}}function li(t,e){if(console.log("inside onControlsClick"),Yt){if(Gt)return;ai()}var n;if(console.log("dir",e),!e){console.log("inside not-dir. probably either prev or next button clicked");for(var i=gi(t=hi(t));i!==Me&&[Ae,Ee].indexOf(i)<0;)i=i.parentNode;var o=[Ae,Ee].indexOf(i);console.log("targetIn",o),0<=o&&(n=!0,e=0===o?-1:1,console.log("now dir",e))}if(mt){if(qt===Vt&&-1===e)return void ri("last",t);if(qt===Kt&&1===e)return void ri("first",t)}e&&(qt+=ft*e,ot&&(qt=Math.floor(qt)),ii(n||t&&"keydown"===t.type?t:null))}function si(){console.log("inside setAutoplayTimer"),Fe||(Fe=setInterval(function(){li(null,Ge)},Tt)),qe=!0}function ui(){console.log("inside stopAutoplayTimer"),Fe&&(Fe=clearInterval(Fe)),qe=!1}function ci(t,e){Ki(Qe,{"data-action":t}),Qe.setAttribute("aria-label",t+" carousel"),Qe.innerHTML=e}function fi(){si(),K.setAttribute("aria-live","off"),Qe&&ci("stop",At[1])}function di(){ui(),K.setAttribute("aria-live","polite"),Qe&&ci("start",At[0])}function vi(){qe&&(di(),Ve=!0)}function pi(){qe?(di(),Ve=!0):(fi(),Ve=!1)}function mi(t){t.focus()}function hi(t){return yi(t=t||h.event)?t.changedTouches[0]:t}function gi(t){return t.target||h.event.srcElement}function yi(t){return 0<=t.type.indexOf("touch")}function bi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function xi(){return o=_e.y-Je.y,a=_e.x-Je.x,t=Math.atan2(o,a)*(180/Math.PI),e=Qt,n=!1,i=Math.abs(90-Math.abs(t)),90-e<=i?n="horizontal":i<=e&&(n="vertical"),n===k.axis;var t,e,n,i,o,a}function wi(t){if(K.setAttribute("aria-live","off"),K.classList.add("tns-animating"),console.log("inside onPanStart"),console.log("autoplay",Mt),console.log("animating",qe),console.log("running",Yt),console.log("preventActionWhenRunning",Gt),console.log("rafIndex",Ue),console.log("carousel",P),Yt){if(Gt)return;ai()}ui(),Ze=!0,Ue&&(Si(Ue),Ue=null);var e=hi(t);Jt.emit(yi(t)?"touchStart":"dragStart",Ni(t)),!yi(t)&&0<=["img","a"].indexOf(Gn(gi(t)))&&bi(t),_e.x=Je.x=e.clientX,_e.y=Je.y=e.clientY,P&&(Ye=parseFloat(K.style[It].replace(Wt,"")),Jn(K,"0s"))}function Ci(t){if(Ze){var e=hi(t);_e.x=e.clientX,_e.y=e.clientY,P?Ue||(Ue=Li(function(){!function t(e){if(!Xt)return void(Ze=!1);Si(Ue);Ze&&(Ue=Li(function(){t(e)}));"?"===Xt&&(Xt=xi());if(Xt){!xe&&yi(e)&&(xe=!0);try{e.type&&Jt.emit(yi(e)?"touchMove":"dragMove",Ni(e))}catch(t){}var n=Ye,i=$e(_e,Je);if(!q||at||ot)n+=i,n+="px";else{var o=d?i*ct*100/((st+lt)*Ot):100*i/(st+lt);n+=o,n+="%"}K.style[It]=Wt+n+zt}}(t)})):("?"===Xt&&(Xt=xi()),Xt&&(xe=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&xe&&t.preventDefault()}}function Mi(i){if(console.log("inside onPanEnd"),Ze){Ue&&(Si(Ue),Ue=null),P&&Jn(K,""),Ze=!1;var t=hi(i);_e.x=t.clientX,_e.y=t.clientY;var o=$e(_e,Je);if(Math.abs(o)){if(!yi(i)){var n=gi(i);Zi(n,{click:function t(e){bi(e),$i(n,{click:t})}})}P?Ue=Li(function(){if(q&&!ot){var t=-o*ct/(st+lt);t=0<o?Math.floor(t):Math.ceil(t),qt+=t}else{var e=-(Ye+o);if(e<=0)qt=Vt;else if(e>=_[Ot-1])qt=Kt;else for(var n=0;n<Ot&&e>=_[n];)e>_[qt=n]&&o<0&&(qt+=1),n++}ii(i,o),Jt.emit(yi(i)?"touchEnd":"dragEnd",Ni(i))}):Xt&&li(i,0<o?-1:1)}}"auto"===k.preventScrollOnTouch&&(xe=!1),Qt&&(Xt="?"),!Mt||qe||Ve||si()}function Ti(){(B||V).style.height=_[qt+ct]-_[qt]+"px"}function Ai(){var t=at?(at+lt)*Y/st:Y/ct;return Math.min(Math.ceil(t),Y)}function Ei(){if(xt&&!ve&&De!==Oe){var t=Oe,e=De,n=Yi;for(De<Oe&&(t=De,e=Oe,n=Xi);t<e;)n(Se[t]),t++;Oe=De}}function Ni(t){return{container:K,slideItems:X,navContainer:Be,navItems:Se,controlsContainer:Me,hasControls:fe,prevButton:Ae,nextButton:Ee,items:ct,slideBy:ft,cloneCount:Dt,slideCount:Y,slideCountNew:Ot,index:qt,indexCached:jt,displayIndex:on(),navCurrentIndex:He,navCurrentIndexCached:Pe,pages:De,pagesCached:Oe,sheet:Lt,isOn:J,event:t||{}}}M&&console.warn("No slides found in",k.container)};return eo}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
