(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Bu="modulepreload",zu=function(s){return"/vr-system-design-sandbox/"+s},Cl={},Rl=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let c=function(l){return Promise.all(l.map(h=>Promise.resolve(h).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=a?.nonce||a?.getAttribute("nonce");i=c(t.map(l=>{if(l=zu(l),l in Cl)return;Cl[l]=!0;const h=l.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":Bu,h||(d.as="script"),d.crossOrigin="",d.href=l,o&&d.setAttribute("nonce",o),document.head.appendChild(d),h)return new Promise((f,m)=>{d.addEventListener("load",f),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};const Jo="181",Vu=0,Pl=1,Hu=2,iy=0,Eh=1,Gu=2,Cn=3,Kn=0,Ht=1,Qt=2,Dn=0,Yi=1,Il=2,Ll=3,Dl=4,Wu=5,vi=100,Xu=101,qu=102,$u=103,Yu=104,ju=200,Ju=201,Ku=202,Zu=203,ja=204,Ja=205,Qu=206,ed=207,td=208,nd=209,id=210,sd=211,rd=212,ad=213,od=214,Ka=0,Za=1,Qa=2,Qi=3,eo=4,to=5,no=6,io=7,Yr=0,ld=1,cd=2,jn=0,hd=1,ud=2,dd=3,fd=4,pd=5,md=6,xd=7,Ul="attached",gd="detached",Ah=300,bi=301,es=302,so=303,ro=304,jr=306,ao=1e3,en=1001,oo=1002,Yt=1003,vd=1004,$s=1005,Ct=1006,sa=1007,qn=1008,gn=1009,Ch=1010,Rh=1011,Us=1012,Ko=1013,Zn=1014,zt=1015,as=1016,Zo=1017,Qo=1018,ji=1020,Ph=35902,Ih=35899,Lh=1021,Dh=1022,Vt=1023,ts=1026,Ji=1027,el=1028,Jr=1029,tl=1030,nl=1031,il=1033,Rr=33776,Pr=33777,Ir=33778,Lr=33779,lo=35840,co=35841,ho=35842,uo=35843,fo=36196,po=37492,mo=37496,xo=37808,go=37809,vo=37810,_o=37811,yo=37812,bo=37813,Mo=37814,So=37815,wo=37816,To=37817,Eo=37818,Ao=37819,Co=37820,Ro=37821,Po=36492,Io=36494,Lo=36495,Do=36283,Uo=36284,No=36285,Fo=36286,Nr=2300,Oo=2301,ra=2302,Nl=2400,Fl=2401,Ol=2402,_d=2500,sy=0,ry=1,ay=2,yd=3200,bd=3201,Vs=0,Md=1,Xn="",$t="srgb",ns="srgb-linear",Fr="linear",nt="srgb",Ai=7680,kl=519,Sd=512,wd=513,Td=514,Uh=515,Ed=516,Ad=517,Cd=518,Rd=519,ko=35044,oy=35048,Bl="300 es",hn=2e3,Or=2001;function Nh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ns(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Pd(){const s=Ns("canvas");return s.style.display="block",s}const zl={};function kr(...s){const e="THREE."+s.shift();console.log(e,...s)}function ge(...s){const e="THREE."+s.shift();console.warn(e,...s)}function ke(...s){const e="THREE."+s.shift();console.error(e,...s)}function Fs(...s){const e=s.join(" ");e in zl||(zl[e]=!0,ge(...s))}function Id(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vl=1234567;const As=Math.PI/180,is=180/Math.PI;function tn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[s&255]+Lt[s>>8&255]+Lt[s>>16&255]+Lt[s>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function Pe(s,e,t){return Math.max(e,Math.min(t,s))}function sl(s,e){return(s%e+e)%e}function Ld(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Dd(s,e,t){return s!==e?(t-s)/(e-s):0}function Cs(s,e,t){return(1-t)*s+t*e}function Ud(s,e,t,n){return Cs(s,e,1-Math.exp(-t*n))}function Nd(s,e=1){return e-Math.abs(sl(s,e*2)-e)}function Fd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Od(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function kd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Bd(s,e){return s+Math.random()*(e-s)}function zd(s){return s*(.5-Math.random())}function Vd(s){s!==void 0&&(Vl=s);let e=Vl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hd(s){return s*As}function Gd(s){return s*is}function Wd(s){return(s&s-1)===0&&s!==0}function Xd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function qd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function $d(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*m,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*m,o*l);break;case"ZYZ":s.set(c*m,c*f,o*h,o*l);break;default:ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ln(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Qe(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ly={DEG2RAD:As,RAD2DEG:is,generateUUID:tn,clamp:Pe,euclideanModulo:sl,mapLinear:Ld,inverseLerp:Dd,lerp:Cs,damp:Ud,pingpong:Nd,smoothstep:Fd,smootherstep:Od,randInt:kd,randFloat:Bd,randFloatSpread:zd,seededRandom:Vd,degToRad:Hd,radToDeg:Gd,isPowerOfTwo:Wd,ceilPowerOfTwo:Xd,floorPowerOfTwo:qd,setQuaternionFromProperEuler:$d,normalize:Qe,denormalize:ln};class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Pe(this.x,e.x,t.x),this.y=Pe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Pe(this.x,e,t),this.y=Pe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Pe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],m=r[a+2],g=r[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(u!==g||c!==d||l!==f||h!==m){let x=c*d+l*f+h*m+u*g;x<0&&(d=-d,f=-f,m=-m,g=-g,x=-x);let p=1-o;if(x<.9995){const y=Math.acos(x),_=Math.sin(y);p=Math.sin(p*y)/_,o=Math.sin(o*y)/_,c=c*p+d*o,l=l*p+f*o,h=h*p+m*o,u=u*p+g*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+m*o,u=u*p+g*o;const y=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=y,l*=y,h*=y,u*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-o*f,e[t+2]=l*m+h*f+o*d-c*u,e[t+3]=h*m-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),f=c(i/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Pe(this.x,e.x,t.x),this.y=Pe(this.y,e.y,t.y),this.z=Pe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Pe(this.x,e,t),this.y=Pe(this.y,e,t),this.z=Pe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Pe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return aa.copy(this).projectOnVector(e),this.sub(aa)}reflect(e){return this.sub(aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const aa=new R,Hl=new vn;class Fe{constructor(e,t,n,i,r,a,o,c,l){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],g=i[0],x=i[3],p=i[6],y=i[1],_=i[4],M=i[7],P=i[2],A=i[5],E=i[8];return r[0]=a*g+o*y+c*P,r[3]=a*x+o*_+c*A,r[6]=a*p+o*M+c*E,r[1]=l*g+h*y+u*P,r[4]=l*x+h*_+u*A,r[7]=l*p+h*M+u*E,r[2]=d*g+f*y+m*P,r[5]=d*x+f*_+m*A,r[8]=d*p+f*M+m*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=u*g,e[1]=(i*l-h*n)*g,e[2]=(o*n-i*a)*g,e[3]=d*g,e[4]=(h*t-i*c)*g,e[5]=(i*r-o*t)*g,e[6]=f*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(oa.makeScale(e,t)),this}rotate(e){return this.premultiply(oa.makeRotation(-e)),this}translate(e,t){return this.premultiply(oa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const oa=new Fe,Gl=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wl=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yd(){const s={enabled:!0,workingColorSpace:ns,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===nt&&(i.r=Un(i.r),i.g=Un(i.g),i.b=Un(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(i.r=Ki(i.r),i.g=Ki(i.g),i.b=Ki(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Xn?Fr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ns]:{primaries:e,whitePoint:n,transfer:Fr,toXYZ:Gl,fromXYZ:Wl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:Gl,fromXYZ:Wl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),s}const qe=Yd();function Un(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ki(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ci;class jd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ci===void 0&&(Ci=Ns("canvas")),Ci.width=e.width,Ci.height=e.height;const i=Ci.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ci}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ns("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Un(t[n]/255)*255):t[n]=Un(t[n]);return{data:t,width:e.width,height:e.height}}else return ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jd=0;class rl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=tn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(la(i[a].image)):r.push(la(i[a]))}else r=la(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function la(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?jd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ge("Texture: Unable to serialize Texture."),{})}let Kd=0;const ca=new R;class Mt extends os{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=en,i=en,r=Ct,a=qn,o=Vt,c=gn,l=Mt.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=tn(),this.name="",this.source=new rl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ca).x}get height(){return this.source.getSize(ca).y}get depth(){return this.source.getSize(ca).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ge(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ao:e.x=e.x-Math.floor(e.x);break;case en:e.x=e.x<0?0:1;break;case oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ao:e.y=e.y-Math.floor(e.y);break;case en:e.y=e.y<0?0:1;break;case oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=Ah;Mt.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,n=0,i=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],g=c[2],x=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(m-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(m+x)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,M=(f+1)/2,P=(p+1)/2,A=(h+d)/4,E=(u+g)/4,D=(m+x)/4;return _>M&&_>P?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=A/n,r=E/n):M>P?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=A/i,r=D/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=E/r,i=D/r),this.set(n,i,r,t),this}let y=Math.sqrt((x-m)*(x-m)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(x-m)/y,this.y=(u-g)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Pe(this.x,e.x,t.x),this.y=Pe(this.y,e.y,t.y),this.z=Pe(this.z,e.z,t.z),this.w=Pe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Pe(this.x,e,t),this.y=Pe(this.y,e,t),this.z=Pe(this.z,e,t),this.w=Pe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Pe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zd extends os{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Mt(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new rl(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends Zd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Fh extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qd extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nn{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ys.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ys.copy(n.boundingBox)),Ys.applyMatrix4(e.matrixWorld),this.union(Ys)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ds),js.subVectors(this.max,ds),Ri.subVectors(e.a,ds),Pi.subVectors(e.b,ds),Ii.subVectors(e.c,ds),kn.subVectors(Pi,Ri),Bn.subVectors(Ii,Pi),ii.subVectors(Ri,Ii);let t=[0,-kn.z,kn.y,0,-Bn.z,Bn.y,0,-ii.z,ii.y,kn.z,0,-kn.x,Bn.z,0,-Bn.x,ii.z,0,-ii.x,-kn.y,kn.x,0,-Bn.y,Bn.x,0,-ii.y,ii.x,0];return!ha(t,Ri,Pi,Ii,js)||(t=[1,0,0,0,1,0,0,0,1],!ha(t,Ri,Pi,Ii,js))?!1:(Js.crossVectors(kn,Bn),t=[Js.x,Js.y,Js.z],ha(t,Ri,Pi,Ii,js))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const bn=[new R,new R,new R,new R,new R,new R,new R,new R],rn=new R,Ys=new nn,Ri=new R,Pi=new R,Ii=new R,kn=new R,Bn=new R,ii=new R,ds=new R,js=new R,Js=new R,si=new R;function ha(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){si.fromArray(s,r);const o=i.x*Math.abs(si.x)+i.y*Math.abs(si.y)+i.z*Math.abs(si.z),c=e.dot(si),l=t.dot(si),h=n.dot(si);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const ef=new nn,fs=new R,ua=new R;class jt{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ef.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fs.subVectors(e,this.center);const t=fs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(fs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fs.copy(e.center).add(ua)),this.expandByPoint(fs.copy(e.center).sub(ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Mn=new R,da=new R,Ks=new R,zn=new R,fa=new R,Zs=new R,pa=new R;class Hs{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){da.copy(e).add(t).multiplyScalar(.5),Ks.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(da);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ks),o=zn.dot(this.direction),c=-zn.dot(Ks),l=zn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){const g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(da).addScaledVector(Ks,d),f}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const n=Mn.dot(this.direction),i=Mn.dot(Mn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,n,i,r){fa.subVectors(t,e),Zs.subVectors(n,e),pa.crossVectors(fa,Zs);let a=this.direction.dot(pa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zn.subVectors(this.origin,e);const c=o*this.direction.dot(Zs.crossVectors(zn,Zs));if(c<0)return null;const l=o*this.direction.dot(fa.cross(zn));if(l<0||c+l>a)return null;const h=-o*zn.dot(pa);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(e,t,n,i,r,a,o,c,l,h,u,d,f,m,g,x){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,u,d,f,m,g,x)}set(e,t,n,i,r,a,o,c,l,h,u,d,f,m,g,x){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=g,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Li.setFromMatrixColumn(e,0).length(),r=1/Li.setFromMatrixColumn(e,1).length(),a=1/Li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,m=o*h,g=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-g*l,t[9]=-o*c,t[2]=g-d*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,m=l*h,g=l*u;t[0]=d+g*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=g+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,m=l*h,g=l*u;t[0]=d-g*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,f=a*u,m=o*h,g=o*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+g,t[1]=c*u,t[5]=g*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,m=o*c,g=o*l;t[0]=c*h,t[4]=g-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-g*u}else if(e.order==="XZY"){const d=a*c,f=a*l,m=o*c,g=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+g,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tf,e,nf)}lookAt(e,t,n){const i=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Vn.crossVectors(n,Xt),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Vn.crossVectors(n,Xt)),Vn.normalize(),Qs.crossVectors(Xt,Vn),i[0]=Vn.x,i[4]=Qs.x,i[8]=Xt.x,i[1]=Vn.y,i[5]=Qs.y,i[9]=Xt.y,i[2]=Vn.z,i[6]=Qs.z,i[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],g=n[6],x=n[10],p=n[14],y=n[3],_=n[7],M=n[11],P=n[15],A=i[0],E=i[4],D=i[8],w=i[12],S=i[1],I=i[5],H=i[9],k=i[13],G=i[2],K=i[6],B=i[10],se=i[14],W=i[3],ee=i[7],ce=i[11],ve=i[15];return r[0]=a*A+o*S+c*G+l*W,r[4]=a*E+o*I+c*K+l*ee,r[8]=a*D+o*H+c*B+l*ce,r[12]=a*w+o*k+c*se+l*ve,r[1]=h*A+u*S+d*G+f*W,r[5]=h*E+u*I+d*K+f*ee,r[9]=h*D+u*H+d*B+f*ce,r[13]=h*w+u*k+d*se+f*ve,r[2]=m*A+g*S+x*G+p*W,r[6]=m*E+g*I+x*K+p*ee,r[10]=m*D+g*H+x*B+p*ce,r[14]=m*w+g*k+x*se+p*ve,r[3]=y*A+_*S+M*G+P*W,r[7]=y*E+_*I+M*K+P*ee,r[11]=y*D+_*H+M*B+P*ce,r[15]=y*w+_*k+M*se+P*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],g=e[7],x=e[11],p=e[15];return m*(+r*c*u-i*l*u-r*o*d+n*l*d+i*o*f-n*c*f)+g*(+t*c*f-t*l*d+r*a*d-i*a*f+i*l*h-r*c*h)+x*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],g=e[13],x=e[14],p=e[15],y=u*x*l-g*d*l+g*c*f-o*x*f-u*c*p+o*d*p,_=m*d*l-h*x*l-m*c*f+a*x*f+h*c*p-a*d*p,M=h*g*l-m*u*l+m*o*f-a*g*f-h*o*p+a*u*p,P=m*u*c-h*g*c-m*o*d+a*g*d+h*o*x-a*u*x,A=t*y+n*_+i*M+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return e[0]=y*E,e[1]=(g*d*r-u*x*r-g*i*f+n*x*f+u*i*p-n*d*p)*E,e[2]=(o*x*r-g*c*r+g*i*l-n*x*l-o*i*p+n*c*p)*E,e[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*f-n*c*f)*E,e[4]=_*E,e[5]=(h*x*r-m*d*r+m*i*f-t*x*f-h*i*p+t*d*p)*E,e[6]=(m*c*r-a*x*r-m*i*l+t*x*l+a*i*p-t*c*p)*E,e[7]=(a*d*r-h*c*r+h*i*l-t*d*l-a*i*f+t*c*f)*E,e[8]=M*E,e[9]=(m*u*r-h*g*r-m*n*f+t*g*f+h*n*p-t*u*p)*E,e[10]=(a*g*r-m*o*r+m*n*l-t*g*l-a*n*p+t*o*p)*E,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*E,e[12]=P*E,e[13]=(h*g*i-m*u*i+m*n*d-t*g*d-h*n*x+t*u*x)*E,e[14]=(m*o*i-a*g*i-m*n*c+t*g*c+a*n*x-t*o*x)*E,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,m=r*u,g=a*h,x=a*u,p=o*u,y=c*l,_=c*h,M=c*u,P=n.x,A=n.y,E=n.z;return i[0]=(1-(g+p))*P,i[1]=(f+M)*P,i[2]=(m-_)*P,i[3]=0,i[4]=(f-M)*A,i[5]=(1-(d+p))*A,i[6]=(x+y)*A,i[7]=0,i[8]=(m+_)*E,i[9]=(x-y)*E,i[10]=(1-(d+g))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Li.set(i[0],i[1],i[2]).length();const a=Li.set(i[4],i[5],i[6]).length(),o=Li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],an.copy(this);const l=1/r,h=1/a,u=1/o;return an.elements[0]*=l,an.elements[1]*=l,an.elements[2]*=l,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,t.setFromRotationMatrix(an),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=hn,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let m,g;if(c)m=r/(a-r),g=a*r/(a-r);else if(o===hn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Or)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=hn,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let m,g;if(c)m=1/(a-r),g=a/(a-r);else if(o===hn)m=-2/(a-r),g=-(a+r)/(a-r);else if(o===Or)m=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Li=new R,an=new Ue,tf=new R(0,0,0),nf=new R(1,1,1),Vn=new R,Qs=new R,Xt=new R,Xl=new Ue,ql=new vn;class sn{constructor(e=0,t=0,n=0,i=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Pe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ql.setFromEuler(this),this.setFromQuaternion(ql,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class al{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sf=0;const $l=new R,Di=new vn,Sn=new Ue,er=new R,ps=new R,rf=new R,af=new vn,Yl=new R(1,0,0),jl=new R(0,1,0),Jl=new R(0,0,1),Kl={type:"added"},of={type:"removed"},Ui={type:"childadded",child:null},ma={type:"childremoved",child:null};class ht extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new R,t=new sn,n=new vn,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Fe}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(Yl,e)}rotateY(e){return this.rotateOnAxis(jl,e)}rotateZ(e){return this.rotateOnAxis(Jl,e)}translateOnAxis(e,t){return $l.copy(e).applyQuaternion(this.quaternion),this.position.add($l.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yl,e)}translateY(e){return this.translateOnAxis(jl,e)}translateZ(e){return this.translateOnAxis(Jl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?er.copy(e):er.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(ps,er,this.up):Sn.lookAt(er,ps,this.up),this.quaternion.setFromRotationMatrix(Sn),i&&(Sn.extractRotation(i.matrixWorld),Di.setFromRotationMatrix(Sn),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kl),Ui.child=e,this.dispatchEvent(Ui),Ui.child=null):ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(of),ma.child=e,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kl),Ui.child=e,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,e,rf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,af,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ht.DEFAULT_UP=new R(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new R,wn=new R,xa=new R,Tn=new R,Ni=new R,Fi=new R,Zl=new R,ga=new R,va=new R,_a=new R,ya=new $e,ba=new $e,Ma=new $e;class cn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),on.subVectors(e,t),i.cross(on);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){on.subVectors(i,t),wn.subVectors(n,t),xa.subVectors(e,t);const a=on.dot(on),o=on.dot(wn),c=on.dot(xa),l=wn.dot(wn),h=wn.dot(xa),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,Tn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Tn.x),c.addScaledVector(a,Tn.y),c.addScaledVector(o,Tn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return ya.setScalar(0),ba.setScalar(0),Ma.setScalar(0),ya.fromBufferAttribute(e,t),ba.fromBufferAttribute(e,n),Ma.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ya,r.x),a.addScaledVector(ba,r.y),a.addScaledVector(Ma,r.z),a}static isFrontFacing(e,t,n,i){return on.subVectors(n,t),wn.subVectors(e,t),on.cross(wn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),on.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return cn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Ni.subVectors(i,n),Fi.subVectors(r,n),ga.subVectors(e,n);const c=Ni.dot(ga),l=Fi.dot(ga);if(c<=0&&l<=0)return t.copy(n);va.subVectors(e,i);const h=Ni.dot(va),u=Fi.dot(va);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ni,a);_a.subVectors(e,r);const f=Ni.dot(_a),m=Fi.dot(_a);if(m>=0&&f<=m)return t.copy(r);const g=f*l-c*m;if(g<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(Fi,o);const x=h*m-f*u;if(x<=0&&u-h>=0&&f-m>=0)return Zl.subVectors(r,i),o=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(Zl,o);const p=1/(x+g+d);return a=g*p,o=d*p,t.copy(n).addScaledVector(Ni,a).addScaledVector(Fi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},tr={h:0,s:0,l:0};function Sa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=qe.workingColorSpace){if(e=sl(e,1),t=Pe(t,0,1),n=Pe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Sa(a,r,e+1/3),this.g=Sa(a,r,e),this.b=Sa(a,r,e-1/3)}return qe.colorSpaceToWorking(this,i),this}setStyle(e,t=$t){function n(r){r!==void 0&&parseFloat(r)<1&&ge("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ge("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const n=Oh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}copyLinearToSRGB(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return qe.workingToColorSpace(Dt.copy(this),e),Math.round(Pe(Dt.r*255,0,255))*65536+Math.round(Pe(Dt.g*255,0,255))*256+Math.round(Pe(Dt.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Dt.copy(this),t);const n=Dt.r,i=Dt.g,r=Dt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=$t){qe.workingToColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,i=Dt.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(tr);const n=Cs(Hn.h,tr.h,t),i=Cs(Hn.s,tr.s,t),r=Cs(Hn.l,tr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new be;be.NAMES=Oh;let lf=0;class _n extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=tn(),this.name="",this.type="Material",this.blending=Yi,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ja,this.blendDst=Ja,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ge(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ja&&(n.blendSrc=this.blendSrc),this.blendDst!==Ja&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class At extends _n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=Yr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const In=cf();function cf(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function hf(s){Math.abs(s)>65504&&ge("DataUtils.toHalfFloat(): Value out of range."),s=Pe(s,-65504,65504),In.floatView[0]=s;const e=In.uint32View[0],t=e>>23&511;return In.baseTable[t]+((e&8388607)>>In.shiftTable[t])}function uf(s){const e=s>>10;return In.uint32View[0]=In.mantissaTable[In.offsetTable[e]+(s&1023)]+In.exponentTable[e],In.floatView[0]}class cy{static toHalfFloat(e){return hf(e)}static fromHalfFloat(e){return uf(e)}}const _t=new R,nr=new le;let df=0;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:df++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ko,this.updateRanges=[],this.gpuType=zt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)nr.fromBufferAttribute(this,t),nr.applyMatrix3(e),this.setXY(t,nr.x,nr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ko&&(e.usage=this.usage),e}}class kh extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Bh extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ye extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ff=0;const Kt=new Ue,wa=new ht,Oi=new R,qt=new nn,ms=new nn,Et=new R;class xt extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=tn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nh(e)?Bh:kh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return wa.lookAt(e),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ye(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(qt.min,ms.min),qt.expandByPoint(Et),Et.addVectors(qt.max,ms.max),qt.expandByPoint(Et)):(qt.expandByPoint(ms.min),qt.expandByPoint(ms.max))}qt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Et.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Et));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Et.fromBufferAttribute(o,l),c&&(Oi.fromBufferAttribute(e,l),Et.add(Oi)),i=Math.max(i,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new R,c[D]=new R;const l=new R,h=new R,u=new R,d=new le,f=new le,m=new le,g=new R,x=new R;function p(D,w,S){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,S),h.sub(l),u.sub(l),f.sub(d),m.sub(d);const I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(g.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(I),x.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(I),o[D].add(g),o[w].add(g),o[S].add(g),c[D].add(x),c[w].add(x),c[S].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let D=0,w=y.length;D<w;++D){const S=y[D],I=S.start,H=S.count;for(let k=I,G=I+H;k<G;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const _=new R,M=new R,P=new R,A=new R;function E(D){P.fromBufferAttribute(i,D),A.copy(P);const w=o[D];_.copy(w),_.sub(P.multiplyScalar(P.dot(w))).normalize(),M.crossVectors(A,w);const I=M.dot(c[D])<0?-1:1;a.setXYZW(D,_.x,_.y,_.z,I)}for(let D=0,w=y.length;D<w;++D){const S=y[D],I=S.start,H=S.count;for(let k=I,G=I+H;k<G;k+=3)E(e.getX(k+0)),E(e.getX(k+1)),E(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new R,r=new R,a=new R,o=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),g=e.getX(d+1),x=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,x),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let g=0,x=c.length;g<x;g++){o.isInterleavedBufferAttribute?f=c[g]*o.data.stride+o.offset:f=c[g]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Gt(d,h,u)}if(this.index===null)return ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ql=new Ue,ri=new Hs,ir=new jt,ec=new R,sr=new R,rr=new R,ar=new R,Ta=new R,or=new R,tc=new R,lr=new R;class st extends ht{constructor(e=new xt,t=new At){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){or.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Ta.fromBufferAttribute(u,e),a?or.addScaledVector(Ta,h):or.addScaledVector(Ta.sub(t),h))}t.add(or)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(r),ri.copy(e.ray).recast(e.near),!(ir.containsPoint(ri.origin)===!1&&(ri.intersectSphere(ir,ec)===null||ri.origin.distanceToSquared(ec)>(e.far-e.near)**2))&&(Ql.copy(r).invert(),ri.copy(e.ray).applyMatrix4(Ql),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ri)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,g=d.length;m<g;m++){const x=d[m],p=a[x.materialIndex],y=Math.max(x.start,f.start),_=Math.min(o.count,Math.min(x.start+x.count,f.start+f.count));for(let M=y,P=_;M<P;M+=3){const A=o.getX(M),E=o.getX(M+1),D=o.getX(M+2);i=cr(this,p,e,n,l,h,u,A,E,D),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let x=m,p=g;x<p;x+=3){const y=o.getX(x),_=o.getX(x+1),M=o.getX(x+2);i=cr(this,a,e,n,l,h,u,y,_,M),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,g=d.length;m<g;m++){const x=d[m],p=a[x.materialIndex],y=Math.max(x.start,f.start),_=Math.min(c.count,Math.min(x.start+x.count,f.start+f.count));for(let M=y,P=_;M<P;M+=3){const A=M,E=M+1,D=M+2;i=cr(this,p,e,n,l,h,u,A,E,D),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let x=m,p=g;x<p;x+=3){const y=x,_=x+1,M=x+2;i=cr(this,a,e,n,l,h,u,y,_,M),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}}function pf(s,e,t,n,i,r,a,o){let c;if(e.side===Ht?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Kn,o),c===null)return null;lr.copy(o),lr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(lr);return l<t.near||l>t.far?null:{distance:l,point:lr.clone(),object:s}}function cr(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,sr),s.getVertexPosition(c,rr),s.getVertexPosition(l,ar);const h=pf(s,e,t,n,sr,rr,ar,tc);if(h){const u=new R;cn.getBarycoord(tc,sr,rr,ar,u),i&&(h.uv=cn.getInterpolatedAttribute(i,o,c,l,u,new le)),r&&(h.uv1=cn.getInterpolatedAttribute(r,o,c,l,u,new le)),a&&(h.normal=cn.getInterpolatedAttribute(a,o,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new R,materialIndex:0};cn.getNormal(sr,rr,ar,d.normal),h.face=d,h.barycoord=u}return h}class Jn extends xt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(u,2));function m(g,x,p,y,_,M,P,A,E,D,w){const S=M/E,I=P/D,H=M/2,k=P/2,G=A/2,K=E+1,B=D+1;let se=0,W=0;const ee=new R;for(let ce=0;ce<B;ce++){const ve=ce*I-k;for(let He=0;He<K;He++){const lt=He*S-H;ee[g]=lt*y,ee[x]=ve*_,ee[p]=G,l.push(ee.x,ee.y,ee.z),ee[g]=0,ee[x]=0,ee[p]=A>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(He/E),u.push(1-ce/D),se+=1}}for(let ce=0;ce<D;ce++)for(let ve=0;ve<E;ve++){const He=d+ve+K*ce,lt=d+ve+K*(ce+1),ct=d+(ve+1)+K*(ce+1),je=d+(ve+1)+K*ce;c.push(He,lt,je),c.push(lt,ct,je),W+=6}o.addGroup(f,W,w),f+=W,d+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ss(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ft(s){const e={};for(let t=0;t<s.length;t++){const n=ss(s[t]);for(const i in n)e[i]=n[i]}return e}function mf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function zh(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const xf={clone:ss,merge:Ft};var gf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends _n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gf,this.fragmentShader=vf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=mf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Vh extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new R,nc=new le,ic=new le;class Bt extends Vh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(As*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return is*2*Math.atan(Math.tan(As*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z)}getViewSize(e,t){return this.getViewBounds(e,nc,ic),t.subVectors(ic,nc)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(As*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ki=-90,Bi=1;class _f extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Bt(ki,Bi,e,t);i.layers=this.layers,this.add(i);const r=new Bt(ki,Bi,e,t);r.layers=this.layers,this.add(r);const a=new Bt(ki,Bi,e,t);a.layers=this.layers,this.add(a);const o=new Bt(ki,Bi,e,t);o.layers=this.layers,this.add(o);const c=new Bt(ki,Bi,e,t);c.layers=this.layers,this.add(c);const l=new Bt(ki,Bi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Or)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Hh extends Mt{constructor(e=[],t=bi,n,i,r,a,o,c,l,h){super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yf extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Hh(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Jn(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Dn});r.uniforms.tEquirect.value=t;const a=new st(i,r),o=t.minFilter;return t.minFilter===qn&&(t.minFilter=Ct),new _f(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class $n extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bf={type:"move"};class Ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const x=t.getJointPose(g,n),p=this._getHandJoint(l,g);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bf)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $n;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Gh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new be(e),this.density=t}clone(){return new Gh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Wh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new be(e),this.near=t,this.far=n}clone(){return new Wh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Mf extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Sf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ko,this.updateRanges=[],this.version=0,this.uuid=tn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nt=new R;class Xh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){kr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){kr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const sc=new R,rc=new $e,ac=new $e,wf=new R,oc=new Ue,hr=new R,Aa=new jt,lc=new Ue,Ca=new Hs;class hy extends st{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ul,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new nn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,hr),this.boundingBox.expandByPoint(hr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new jt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,hr),this.boundingSphere.expandByPoint(hr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Aa.copy(this.boundingSphere),Aa.applyMatrix4(i),e.ray.intersectsSphere(Aa)!==!1&&(lc.copy(i).invert(),Ca.copy(e.ray).applyMatrix4(lc),!(this.boundingBox!==null&&Ca.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ca)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new $e,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ul?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gd?this.bindMatrixInverse.copy(this.bindMatrix).invert():ge("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;rc.fromBufferAttribute(i.attributes.skinIndex,e),ac.fromBufferAttribute(i.attributes.skinWeight,e),sc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=ac.getComponent(r);if(a!==0){const o=rc.getComponent(r);oc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(wf.copy(sc).applyMatrix4(oc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Tf extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class yi extends Mt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Yt,h=Yt,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cc=new Ue,Ef=new Ue;class qh{constructor(e=[],t=[]){this.uuid=tn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ge("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Ef;cc.multiplyMatrices(o,t[r]),cc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new qh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new yi(t,e,e,Vt,zt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(ge("Skeleton: No bone found with UUID:",r),a=new Tf),this.bones.push(a),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class hc extends Gt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const zi=new Ue,uc=new Ue,ur=[],dc=new nn,Af=new Ue,xs=new st,gs=new jt;class $h extends st{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Af)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zi),dc.copy(e.boundingBox).applyMatrix4(zi),this.boundingBox.union(dc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zi),gs.copy(e.boundingSphere).applyMatrix4(zi),this.boundingSphere.union(gs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(xs.geometry=this.geometry,xs.material=this.material,xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gs.copy(this.boundingSphere),gs.applyMatrix4(n),e.ray.intersectsSphere(gs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,zi),uc.multiplyMatrices(n,zi),xs.matrixWorld=uc,xs.raycast(e,ur);for(let a=0,o=ur.length;a<o;a++){const c=ur[a];c.instanceId=r,c.object=this,t.push(c)}ur.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new hc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new yi(new Float32Array(i*this.count),i,this.count,el,zt));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ra=new R,Cf=new R,Rf=new Fe;class Wn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ra.subVectors(n,t).cross(Cf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ra),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Rf.getNormalMatrix(e),i=this.coplanarPoint(Ra).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new jt,Pf=new le(.5,.5),dr=new R;class Gs{constructor(e=new Wn,t=new Wn,n=new Wn,i=new Wn,r=new Wn,a=new Wn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],g=r[9],x=r[10],p=r[11],y=r[12],_=r[13],M=r[14],P=r[15];if(i[0].setComponents(l-a,f-h,p-m,P-y).normalize(),i[1].setComponents(l+a,f+h,p+m,P+y).normalize(),i[2].setComponents(l+o,f+u,p+g,P+_).normalize(),i[3].setComponents(l-o,f-u,p-g,P-_).normalize(),n)i[4].setComponents(c,d,x,M).normalize(),i[5].setComponents(l-c,f-d,p-x,P-M).normalize();else if(i[4].setComponents(l-c,f-d,p-x,P-M).normalize(),t===hn)i[5].setComponents(l+c,f+d,p+x,P+M).normalize();else if(t===Or)i[5].setComponents(c,d,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(e){ai.center.set(0,0,0);const t=Pf.distanceTo(e.center);return ai.radius=.7071067811865476+t,ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(dr.x=i.normal.x>0?e.max.x:e.min.x,dr.y=i.normal.y>0?e.max.y:e.min.y,dr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(dr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const pn=new Ue,mn=new Gs;class ol{constructor(){this.coordinateSystem=hn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(pn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),mn.setFromProjectionMatrix(pn,i.coordinateSystem,i.reversedDepth),mn.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(pn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),mn.setFromProjectionMatrix(pn,i.coordinateSystem,i.reversedDepth),mn.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(pn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),mn.setFromProjectionMatrix(pn,i.coordinateSystem,i.reversedDepth),mn.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(pn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),mn.setFromProjectionMatrix(pn,i.coordinateSystem,i.reversedDepth),mn.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(pn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),mn.setFromProjectionMatrix(pn,i.coordinateSystem,i.reversedDepth),mn.containsPoint(e))return!0}return!1}clone(){return new ol}}function Pa(s,e){return s-e}function If(s,e){return s.z-e.z}function Lf(s,e){return e.z-s.z}class Df{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){const r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}}const kt=new Ue,Uf=new be(1,1,1),fc=new Gs,Nf=new ol,fr=new nn,oi=new jt,vs=new R,pc=new R,Ff=new R,Ia=new Df,Ut=new st,pr=[];function Of(s,e,t=0){const n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,s.getComponent(r,a))}else e.array.set(s.array,t*n);e.needsUpdate=!0}function li(s,e){if(s.constructor!==e.constructor){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++)e[n]=s[n]}else{const t=Math.min(s.length,e.length);e.set(new s.constructor(s.buffer,0,t))}}class uy extends st{constructor(e,t,n=t*2,i){super(new xt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new yi(t,e,e,Vt,zt);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new yi(t,e,e,Jr,Zn);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new yi(t,e,e,Vt,zt);n.colorSpace=qe.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const a=e.getAttribute(r),{array:o,itemSize:c,normalized:l}=a,h=new o.constructor(n*c),u=new Gt(h,c,l);t.setAttribute(r,u)}if(e.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new Gt(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,kt),this.getBoundingBoxAt(r,fr).applyMatrix4(kt),e.union(fr)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jt);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,kt),this.getBoundingSphereAt(r,oi).applyMatrix4(kt),e.union(oi)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Pa),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;kt.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(Uf.toArray(a.image.data,i*4),a.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const a=e.getIndex();if(a!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?a.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Pa),c=this._availableGeometryIds.shift(),r[c]=i):(c=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(c,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,c}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(i&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const c=o.vertexStart,l=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const h in n.attributes){const u=t.getAttribute(h),d=n.getAttribute(h);Of(u,d,c);const f=u.itemSize;for(let m=u.count,g=l;m<g;m++){const x=c+m;for(let p=0;p<f;p++)d.setComponent(x,p,0)}d.needsUpdate=!0,d.addUpdateRange(c*f,l*f)}if(i){const h=o.indexStart,u=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let d=0;d<a.count;d++)r.setX(h+d,c+a.getX(d));for(let d=a.count,f=u;d<f;d++)r.setX(h+d,c);r.needsUpdate=!0,r.addUpdateRange(h,o.reservedIndexCount)}return o.start=i?o.indexStart:o.vertexStart,o.count=i?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){const c=i[a],l=n[c];if(l.active!==!1){if(r.index!==null){if(l.indexStart!==t){const{indexStart:h,vertexStart:u,reservedIndexCount:d}=l,f=r.index,m=f.array,g=e-u;for(let x=h;x<h+d;x++)m[x]=m[x]+g;f.array.copyWithin(t,h,h+d),f.addUpdateRange(t,d),l.indexStart=t}t+=l.reservedIndexCount}if(l.vertexStart!==e){const{vertexStart:h,reservedVertexCount:u}=l,d=r.attributes;for(const f in d){const m=d[f],{array:g,itemSize:x}=m;g.copyWithin(e*x,h*x,(h+u)*x),m.addUpdateRange(e*x,u*x)}l.vertexStart=e}e+=l.reservedVertexCount,l.start=r.index?l.indexStart:l.vertexStart,this._nextIndexStart=r.index?l.indexStart+l.reservedIndexCount:0,this._nextVertexStart=l.vertexStart+l.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const r=new nn,a=n.index,o=n.attributes.position;for(let c=i.start,l=i.start+i.count;c<l;c++){let h=c;a&&(h=a.getX(h)),r.expandByPoint(vs.fromBufferAttribute(o,h))}i.boundingBox=r}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const r=new jt;this.getBoundingBoxAt(e,fr),fr.getCenter(r.center);const a=n.index,o=n.attributes.position;let c=0;for(let l=i.start,h=i.start+i.count;l<h;l++){let u=l;a&&(u=a.getX(u)),vs.fromBufferAttribute(o,u),c=Math.max(c,r.center.distanceToSquared(vs))}r.radius=Math.sqrt(c),i.boundingSphere=r}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(Pa);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),r=new Int32Array(e);li(this._multiDrawCounts,i),li(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=e;const a=this._indirectTexture,o=this._matricesTexture,c=this._colorsTexture;a.dispose(),this._initIndirectTexture(),li(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),li(o.image.data,this._matricesTexture.image.data),c&&(c.dispose(),this._initColorsTexture(),li(c.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new xt,this._initializeGeometry(r));const a=this.geometry;r.index&&li(r.index.array,a.index.array);for(const o in r.attributes)li(r.attributes[o].array,a.attributes[o].array)}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,a=this.geometry;Ut.material=this.material,Ut.geometry.index=a.index,Ut.geometry.attributes=a.attributes,Ut.geometry.boundingBox===null&&(Ut.geometry.boundingBox=new nn),Ut.geometry.boundingSphere===null&&(Ut.geometry.boundingSphere=new jt);for(let o=0,c=n.length;o<c;o++){if(!n[o].visible||!n[o].active)continue;const l=n[o].geometryIndex,h=i[l];Ut.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,Ut.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,Ut.geometry.boundingBox),this.getBoundingSphereAt(l,Ut.geometry.boundingSphere),Ut.raycast(e,pr);for(let u=0,d=pr.length;u<d;u++){const f=pr[u];f.object=this,f.batchId=o,t.push(f)}pr.length=0}Ut.material=null,Ut.geometry.index=null,Ut.geometry.attributes={},Ut.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,c=this._instanceInfo,l=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,m=f.image.data,g=n.isArrayCamera?Nf:fc;d&&!n.isArrayCamera&&(kt.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),fc.setFromProjectionMatrix(kt,n.coordinateSystem,n.reversedDepth));let x=0;if(this.sortObjects){kt.copy(this.matrixWorld).invert(),vs.setFromMatrixPosition(n.matrixWorld).applyMatrix4(kt),pc.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(kt);for(let _=0,M=c.length;_<M;_++)if(c[_].visible&&c[_].active){const P=c[_].geometryIndex;this.getMatrixAt(_,kt),this.getBoundingSphereAt(P,oi).applyMatrix4(kt);let A=!1;if(d&&(A=!g.intersectsSphere(oi,n)),!A){const E=u[P],D=Ff.subVectors(oi.center,vs).dot(pc);Ia.push(E.start,E.count,D,_)}}const p=Ia.list,y=this.customSort;y===null?p.sort(r.transparent?Lf:If):y.call(this,p,n);for(let _=0,M=p.length;_<M;_++){const P=p[_];l[x]=P.start*o,h[x]=P.count,m[x]=P.index,x++}Ia.reset()}else for(let p=0,y=c.length;p<y;p++)if(c[p].visible&&c[p].active){const _=c[p].geometryIndex;let M=!1;if(d&&(this.getMatrixAt(p,kt),this.getBoundingSphereAt(_,oi).applyMatrix4(kt),M=!g.intersectsSphere(oi,n)),!M){const P=u[_];l[x]=P.start*o,h[x]=P.count,m[x]=p,x++}}f.needsUpdate=!0,this._multiDrawCount=x,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,r,a){this.onBeforeRender(e,null,i,r,a)}}class kf extends _n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Br=new R,zr=new R,mc=new Ue,_s=new Hs,mr=new jt,La=new R,xc=new R;class Yh extends ht{constructor(e=new xt,t=new kf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Br.fromBufferAttribute(t,i-1),zr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Br.distanceTo(zr);e.setAttribute("lineDistance",new Ye(n,1))}else ge("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(i),mr.radius+=r,e.ray.intersectsSphere(mr)===!1)return;mc.copy(i).invert(),_s.copy(e.ray).applyMatrix4(mc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=f,x=m-1;g<x;g+=l){const p=h.getX(g),y=h.getX(g+1),_=xr(this,e,_s,c,p,y,g);_&&t.push(_)}if(this.isLineLoop){const g=h.getX(m-1),x=h.getX(f),p=xr(this,e,_s,c,g,x,m-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=f,x=m-1;g<x;g+=l){const p=xr(this,e,_s,c,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){const g=xr(this,e,_s,c,m-1,f,m-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function xr(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(Br.fromBufferAttribute(o,i),zr.fromBufferAttribute(o,r),t.distanceSqToSegment(Br,zr,La,xc)>n)return;La.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(La);if(!(l<e.near||l>e.far))return{distance:l,point:xc.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const gc=new R,vc=new R;class dy extends Yh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)gc.fromBufferAttribute(t,i),vc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+gc.distanceTo(vc);e.setAttribute("lineDistance",new Ye(n,1))}else ge("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fy extends Yh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Bf extends _n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _c=new Ue,Bo=new Hs,gr=new jt,vr=new R;class py extends ht{constructor(e=new xt,t=new Bf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(i),gr.radius+=r,e.ray.intersectsSphere(gr)===!1)return;_c.copy(i).invert(),Bo.copy(e.ray).applyMatrix4(_c);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,g=f;m<g;m++){const x=l.getX(m);vr.fromBufferAttribute(u,x),yc(vr,x,c,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,g=f;m<g;m++)vr.fromBufferAttribute(u,m),yc(vr,m,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function yc(s,e,t,n,i,r,a){const o=Bo.distanceSqToPoint(s);if(o<t){const c=new R;Bo.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class my extends Mt{constructor(e,t,n,i,r=Ct,a=Ct,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const h=this;function u(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class jh extends Mt{constructor(e,t,n,i,r,a,o,c,l,h,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class xy extends jh{constructor(e,t,n,i,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=en,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gy extends jh{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,bi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class zf extends Mt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jh extends Mt{constructor(e,t,n=Zn,i,r,a,o=Yt,c=Yt,l,h=ts,u=1){if(h!==ts&&h!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Kh extends Mt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Zh extends xt{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,m=n*2+r,g=i+1,x=new R,p=new R;for(let y=0;y<=m;y++){let _=0,M=0,P=0,A=0;if(y<=n){const w=y/n,S=w*Math.PI/2;M=-h-e*Math.cos(S),P=e*Math.sin(S),A=-e*Math.cos(S),_=w*u}else if(y<=n+r){const w=(y-n)/r;M=-h+w*t,P=e,A=0,_=u+w*d}else{const w=(y-n-r)/n,S=w*Math.PI/2;M=h+e*Math.sin(S),P=e*Math.cos(S),A=e*Math.sin(S),_=u+d+w*u}const E=Math.max(0,Math.min(1,_/f));let D=0;y===0?D=.5/i:y===m&&(D=-.5/i);for(let w=0;w<=i;w++){const S=w/i,I=S*Math.PI*2,H=Math.sin(I),k=Math.cos(I);p.x=-P*k,p.y=M,p.z=P*H,o.push(p.x,p.y,p.z),x.set(-P*k,A,P*H),x.normalize(),c.push(x.x,x.y,x.z),l.push(S+D,E)}if(y>0){const w=(y-1)*g;for(let S=0;S<i;S++){const I=w+S,H=w+S+1,k=y*g+S,G=y*g+S+1;a.push(I,H,k),a.push(H,G,k)}}}this.setIndex(a),this.setAttribute("position",new Ye(o,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zh(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Vr extends xt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new R,h=new le;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(o,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Hr extends xt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const g=[],x=n/2;let p=0;y(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(f,2));function y(){const M=new R,P=new R;let A=0;const E=(t-e)/n;for(let D=0;D<=r;D++){const w=[],S=D/r,I=S*(t-e)+e;for(let H=0;H<=i;H++){const k=H/i,G=k*c+o,K=Math.sin(G),B=Math.cos(G);P.x=I*K,P.y=-S*n+x,P.z=I*B,u.push(P.x,P.y,P.z),M.set(K,E,B).normalize(),d.push(M.x,M.y,M.z),f.push(k,1-S),w.push(m++)}g.push(w)}for(let D=0;D<i;D++)for(let w=0;w<r;w++){const S=g[w][D],I=g[w+1][D],H=g[w+1][D+1],k=g[w][D+1];(e>0||w!==0)&&(h.push(S,I,k),A+=3),(t>0||w!==r-1)&&(h.push(I,H,k),A+=3)}l.addGroup(p,A,0),p+=A}function _(M){const P=m,A=new le,E=new R;let D=0;const w=M===!0?e:t,S=M===!0?1:-1;for(let H=1;H<=i;H++)u.push(0,x*S,0),d.push(0,S,0),f.push(.5,.5),m++;const I=m;for(let H=0;H<=i;H++){const G=H/i*c+o,K=Math.cos(G),B=Math.sin(G);E.x=w*B,E.y=x*S,E.z=w*K,u.push(E.x,E.y,E.z),d.push(0,S,0),A.x=K*.5+.5,A.y=B*.5*S+.5,f.push(A.x,A.y),m++}for(let H=0;H<i;H++){const k=P+H,G=I+H;M===!0?h.push(G,G+1,k):h.push(G+1,G,k),D+=3}l.addGroup(p,D,M===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ge("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new le:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new R,i=[],r=[],a=[],o=new R,c=new Ue;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new R)}r[0]=new R,a[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Pe(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,m))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Pe(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ll extends yn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new le){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Vf extends ll{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function cl(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const _r=new R,Da=new cl,Ua=new cl,Na=new cl;class Hf extends yn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(_r.subVectors(i[0],i[1]).add(i[0]),l=_r);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(_r.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=_r),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),m<1e-4&&(m=g),x<1e-4&&(x=g),Da.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,g,x),Ua.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,g,x),Na.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,g,x)}else this.curveType==="catmullrom"&&(Da.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ua.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Na.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Da.calc(c),Ua.calc(c),Na.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function bc(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*s+t}function Gf(s,e){const t=1-s;return t*t*e}function Wf(s,e){return 2*(1-s)*s*e}function Xf(s,e){return s*s*e}function Rs(s,e,t,n){return Gf(s,e)+Wf(s,t)+Xf(s,n)}function qf(s,e){const t=1-s;return t*t*t*e}function $f(s,e){const t=1-s;return 3*t*t*s*e}function Yf(s,e){return 3*(1-s)*s*s*e}function jf(s,e){return s*s*s*e}function Ps(s,e,t,n,i){return qf(s,e)+$f(s,t)+Yf(s,n)+jf(s,i)}class Qh extends yn{constructor(e=new le,t=new le,n=new le,i=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new le){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ps(e,i.x,r.x,a.x,o.x),Ps(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Jf extends yn{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ps(e,i.x,r.x,a.x,o.x),Ps(e,i.y,r.y,a.y,o.y),Ps(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class eu extends yn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kf extends yn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tu extends yn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Rs(e,i.x,r.x,a.x),Rs(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zf extends yn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Rs(e,i.x,r.x,a.x),Rs(e,i.y,r.y,a.y),Rs(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nu extends yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(bc(o,c.x,l.x,h.x,u.x),bc(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new le().fromArray(i))}return this}}var Mc=Object.freeze({__proto__:null,ArcCurve:Vf,CatmullRomCurve3:Hf,CubicBezierCurve:Qh,CubicBezierCurve3:Jf,EllipseCurve:ll,LineCurve:eu,LineCurve3:Kf,QuadraticBezierCurve:tu,QuadraticBezierCurve3:Zf,SplineCurve:nu});class Qf extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Mc[i.type]().fromJSON(i))}return this}}class zo extends Qf{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new eu(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new tu(this.currentPoint.clone(),new le(e,t),new le(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new Qh(this.currentPoint.clone(),new le(e,t),new le(n,i),new le(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new nu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,a,o,c),this}absellipse(e,t,n,i,r,a,o,c){const l=new ll(e,t,n,i,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Is extends zo{constructor(e){super(e),this.uuid=tn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new zo().fromJSON(i))}return this}}function ep(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=iu(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=rp(s,e,r,t)),s.length>80*t){o=s[0],c=s[1];let h=o,u=c;for(let d=t;d<i;d+=t){const f=s[d],m=s[d+1];f<o&&(o=f),m<c&&(c=m),f>h&&(h=f),m>u&&(u=m)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return Os(r,a,t,o,c,l,0),a}function iu(s,e,t,n,i){let r;if(i===xp(s,e,t,n)>0)for(let a=e;a<t;a+=n)r=Sc(a/n|0,s[a],s[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Sc(a/n|0,s[a],s[a+1],r);return r&&rs(r,r.next)&&(Bs(r),r=r.next),r}function Mi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(rs(t,t.next)||ft(t.prev,t,t.next)===0)){if(Bs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Os(s,e,t,n,i,r,a){if(!s)return;!a&&r&&hp(s,n,i,r);let o=s;for(;s.prev!==s.next;){const c=s.prev,l=s.next;if(r?np(s,n,i,r):tp(s)){e.push(c.i,s.i,l.i),Bs(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=ip(Mi(s),e),Os(s,e,t,n,i,r,2)):a===2&&sp(s,e,t,n,i,r):Os(Mi(s),e,t,n,i,r,1);break}}}function tp(s){const e=s.prev,t=s,n=s.next;if(ft(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(i,r,a),u=Math.min(o,c,l),d=Math.max(i,r,a),f=Math.max(o,c,l);let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Ts(i,o,r,c,a,l,m.x,m.y)&&ft(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function np(s,e,t,n){const i=s.prev,r=s,a=s.next;if(ft(i,r,a)>=0)return!1;const o=i.x,c=r.x,l=a.x,h=i.y,u=r.y,d=a.y,f=Math.min(o,c,l),m=Math.min(h,u,d),g=Math.max(o,c,l),x=Math.max(h,u,d),p=Vo(f,m,e,t,n),y=Vo(g,x,e,t,n);let _=s.prevZ,M=s.nextZ;for(;_&&_.z>=p&&M&&M.z<=y;){if(_.x>=f&&_.x<=g&&_.y>=m&&_.y<=x&&_!==i&&_!==a&&Ts(o,h,c,u,l,d,_.x,_.y)&&ft(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=f&&M.x<=g&&M.y>=m&&M.y<=x&&M!==i&&M!==a&&Ts(o,h,c,u,l,d,M.x,M.y)&&ft(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=g&&_.y>=m&&_.y<=x&&_!==i&&_!==a&&Ts(o,h,c,u,l,d,_.x,_.y)&&ft(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=g&&M.y>=m&&M.y<=x&&M!==i&&M!==a&&Ts(o,h,c,u,l,d,M.x,M.y)&&ft(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function ip(s,e){let t=s;do{const n=t.prev,i=t.next.next;!rs(n,i)&&ru(n,t,t.next,i)&&ks(n,i)&&ks(i,n)&&(e.push(n.i,t.i,i.i),Bs(t),Bs(t.next),t=s=i),t=t.next}while(t!==s);return Mi(t)}function sp(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&fp(a,o)){let c=au(a,o);a=Mi(a,a.next),c=Mi(c,c.next),Os(a,e,t,n,i,r,0),Os(c,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function rp(s,e,t,n){const i=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,c=r<a-1?e[r+1]*n:s.length,l=iu(s,o,c,n,!1);l===l.next&&(l.steiner=!0),i.push(dp(l))}i.sort(ap);for(let r=0;r<i.length;r++)t=op(i[r],t);return t}function ap(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function op(s,e){const t=lp(s,e);if(!t)return e;const n=au(t,s);return Mi(n,n.next),Mi(t,t.next)}function lp(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,a;if(rs(s,t))return t;do{if(rs(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,l=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&su(i<l?n:r,i,c,l,i<l?r:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);ks(t,s)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&cp(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function cp(s,e){return ft(s.prev,s,e.prev)<0&&ft(e.next,s,s.next)<0}function hp(s,e,t,n){let i=s;do i.z===0&&(i.z=Vo(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,up(i)}function up(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,t*=2}while(e>1);return s}function Vo(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function dp(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function su(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function Ts(s,e,t,n,i,r,a,o){return!(s===a&&e===o)&&su(s,e,t,n,i,r,a,o)}function fp(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!pp(s,e)&&(ks(s,e)&&ks(e,s)&&mp(s,e)&&(ft(s.prev,s,e.prev)||ft(s,e.prev,e))||rs(s,e)&&ft(s.prev,s,s.next)>0&&ft(e.prev,e,e.next)>0)}function ft(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function rs(s,e){return s.x===e.x&&s.y===e.y}function ru(s,e,t,n){const i=br(ft(s,e,t)),r=br(ft(s,e,n)),a=br(ft(t,n,s)),o=br(ft(t,n,e));return!!(i!==r&&a!==o||i===0&&yr(s,t,e)||r===0&&yr(s,n,e)||a===0&&yr(t,s,n)||o===0&&yr(t,e,n))}function yr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function br(s){return s>0?1:s<0?-1:0}function pp(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&ru(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ks(s,e){return ft(s.prev,s,s.next)<0?ft(s,e,s.next)>=0&&ft(s,s.prev,e)>=0:ft(s,e,s.prev)<0||ft(s,s.next,e)<0}function mp(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function au(s,e){const t=Ho(s.i,s.x,s.y),n=Ho(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Sc(s,e,t,n){const i=Ho(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Bs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ho(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function xp(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class gp{static triangulate(e,t,n=2){return ep(e,t,n)}}class Zi{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Zi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];wc(e),Tc(n,e);let a=e.length;t.forEach(wc);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,Tc(n,t[c]);const o=gp.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function wc(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Tc(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class ou extends xt{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Pe(i,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/t,u=new R,d=new le,f=new R,m=new R,g=new R;let x=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:x=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-x,f.z=p*0,g.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(g.x,g.y,g.z);break;default:x=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-x,f.z=p*0,m.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),c.push(f.x,f.y,f.z),g.copy(m)}for(let y=0;y<=t;y++){const _=n+y*h*i,M=Math.sin(_),P=Math.cos(_);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*M,u.y=e[A].y,u.z=e[A].x*P,a.push(u.x,u.y,u.z),d.x=y/t,d.y=A/(e.length-1),o.push(d.x,d.y);const E=c[3*A+0]*M,D=c[3*A+1],w=c[3*A+0]*P;l.push(E,D,w)}}for(let y=0;y<t;y++)for(let _=0;_<e.length-1;_++){const M=_+y*e.length,P=M,A=M+e.length,E=M+e.length+1,D=M+1;r.push(P,A,D),r.push(E,D,A)}this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("uv",new Ye(o,2)),this.setAttribute("normal",new Ye(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ou(e.points,e.segments,e.phiStart,e.phiLength)}}class Fn extends xt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],m=[],g=[],x=[];for(let p=0;p<h;p++){const y=p*d-a;for(let _=0;_<l;_++){const M=_*u-r;m.push(M,-y,0),g.push(0,0,1),x.push(_/o),x.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const _=y+l*p,M=y+l*(p+1),P=y+1+l*(p+1),A=y+1+l*p;f.push(_,M,A),f.push(M,P,A)}this.setIndex(f),this.setAttribute("position",new Ye(m,3)),this.setAttribute("normal",new Ye(g,3)),this.setAttribute("uv",new Ye(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.width,e.height,e.widthSegments,e.heightSegments)}}class hl extends xt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,f=new R,m=new le;for(let g=0;g<=i;g++){for(let x=0;x<=n;x++){const p=r+x/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let g=0;g<i;g++){const x=g*(n+1);for(let p=0;p<n;p++){const y=p+x,_=y,M=y+n+1,P=y+n+2,A=y+1;o.push(_,M,A),o.push(M,P,A)}}this.setIndex(o),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ul extends xt{constructor(e=new Is([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ye(i,3)),this.setAttribute("normal",new Ye(r,3)),this.setAttribute("uv",new Ye(a,2));function l(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const m=d.holes;Zi.isClockWise(f)===!1&&(f=f.reverse());for(let x=0,p=m.length;x<p;x++){const y=m[x];Zi.isClockWise(y)===!0&&(m[x]=y.reverse())}const g=Zi.triangulateShape(f,m);for(let x=0,p=m.length;x<p;x++){const y=m[x];f=f.concat(y)}for(let x=0,p=f.length;x<p;x++){const y=f[x];i.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let x=0,p=g.length;x<p;x++){const y=g[x],_=y[0]+u,M=y[1]+u,P=y[2]+u;n.push(_,M,P),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return vp(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const a=t[e.shapes[i]];n.push(a)}return new ul(n,e.curveSegments)}}function vp(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class Ls extends xt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new R,d=new R,f=[],m=[],g=[],x=[];for(let p=0;p<=n;p++){const y=[],_=p/n;let M=0;p===0&&a===0?M=.5/t:p===n&&c===Math.PI&&(M=-.5/t);for(let P=0;P<=t;P++){const A=P/t;u.x=-e*Math.cos(i+A*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(i+A*r)*Math.sin(a+_*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),x.push(A+M,1-_),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const _=h[p][y+1],M=h[p][y],P=h[p+1][y],A=h[p+1][y+1];(p!==0||a>0)&&f.push(_,M,A),(p!==n-1||c<Math.PI)&&f.push(M,P,A)}this.setIndex(f),this.setAttribute("position",new Ye(m,3)),this.setAttribute("normal",new Ye(g,3)),this.setAttribute("uv",new Ye(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vy extends xt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new R,r=new R;if(e.index!==null){const a=e.attributes.position,o=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const u=c[l],d=u.start,f=u.count;for(let m=d,g=d+f;m<g;m+=3)for(let x=0;x<3;x++){const p=o.getX(m+x),y=o.getX(m+(x+1)%3);i.fromBufferAttribute(a,p),r.fromBufferAttribute(a,y),Ec(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const h=3*o+l,u=3*o+(l+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),Ec(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ye(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Ec(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}class Go extends _n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vs,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _y extends Go{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class yy extends _n{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new be(16777215),this.specular=new be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vs,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=Yr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class by extends _n{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vs,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=Yr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _p extends _n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yp extends _n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class My extends _n{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new be(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vs,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Mr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function bp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Mp(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ac(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function lu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Kr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Sp extends Kr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nl,endingEnd:Nl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fl:r=e,o=2*t-n;break;case Ol:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Fl:a=e,c=2*n-t;break;case Ol:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),g=m*m,x=g*m,p=-d*x+2*d*g-d*m,y=(1+d)*x+(-1.5-2*d)*g+(-.5+d)*m+1,_=(-1-f)*x+(1.5+f)*g+.5*m,M=f*x-f*g;for(let P=0;P!==o;++P)r[P]=p*a[h+P]+y*a[l+P]+_*a[c+P]+M*a[u+P];return r}}class wp extends Kr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}}class Tp extends Kr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class dn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mr(t,this.TimeBufferType),this.values=Mr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Mr(e.times,Array),values:Mr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Tp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Nr:t=this.InterpolantFactoryMethodDiscrete;break;case Oo:t=this.InterpolantFactoryMethodLinear;break;case ra:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ge("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nr;case this.InterpolantFactoryMethodLinear:return Oo;case this.InterpolantFactoryMethodSmooth:return ra}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(ke("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(ke("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){ke("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){ke("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&bp(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){ke("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ra,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const g=t[u+m];if(g!==t[d+m]||g!==t[f+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}dn.prototype.ValueTypeName="";dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=Oo;class ls extends dn{constructor(e,t,n){super(e,t,n)}}ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Nr;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;class cu extends dn{constructor(e,t,n,i){super(e,t,n,i)}}cu.prototype.ValueTypeName="color";class Gr extends dn{constructor(e,t,n,i){super(e,t,n,i)}}Gr.prototype.ValueTypeName="number";class Ep extends Kr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)vn.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Zr extends dn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Ep(this.times,this.values,this.getValueSize(),e)}}Zr.prototype.ValueTypeName="quaternion";Zr.prototype.InterpolantFactoryMethodSmooth=void 0;class cs extends dn{constructor(e,t,n){super(e,t,n)}}cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Nr;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;class Wr extends dn{constructor(e,t,n,i){super(e,t,n,i)}}Wr.prototype.ValueTypeName="vector";class Sy{constructor(e="",t=-1,n=[],i=_d){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=tn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Cp(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(dn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=Mp(c);c=Ac(c,1,h),l=Ac(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Gr(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(ge("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return ke("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,g){if(f.length!==0){const x=[],p=[];lu(f,x,p,m),x.length!==0&&g.push(new u(d,x,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let g=0;g<d[m].morphTargets.length;g++)f[d[m].morphTargets[g]]=-1;for(const g in f){const x=[],p=[];for(let y=0;y!==d[m].morphTargets.length;++y){const _=d[m];x.push(_.time),p.push(_.morphTarget===g?1:0)}i.push(new Gr(".morphTargetInfluence["+g+"]",x,p))}c=f.length*a}else{const f=".bones["+t[u].name+"]";n(Wr,f+".position",d,"pos",i),n(Zr,f+".quaternion",d,"rot",i),n(Wr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Ap(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Gr;case"vector":case"vector2":case"vector3":case"vector4":return Wr;case"color":return cu;case"quaternion":return Zr;case"bool":case"boolean":return ls;case"string":return cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Cp(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ap(s.type);if(s.times===void 0){const t=[],n=[];lu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ln={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Rp{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Pp=new Rp;class Si{constructor(e){this.manager=e!==void 0?e:Pp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Si.DEFAULT_MATERIAL_NAME="__DEFAULT";const En={};class Ip extends Error{constructor(e,t){super(e),this.response=t}}class hu extends Si{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ln.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(En[e]!==void 0){En[e].push({onLoad:t,onProgress:n,onError:i});return}En[e]=[],En[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&ge("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=En[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let g=0;const x=new ReadableStream({start(p){y();function y(){u.read().then(({done:_,value:M})=>{if(_)p.close();else{g+=M.byteLength;const P=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:f});for(let A=0,E=h.length;A<E;A++){const D=h[A];D.onProgress&&D.onProgress(P)}p.enqueue(M),y()}},_=>{p.error(_)})}}});return new Response(x)}else throw new Ip(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Ln.add(`file:${e}`,l);const h=En[e];delete En[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=En[e];if(h===void 0)throw this.manager.itemError(e),l;delete En[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Vi=new WeakMap;class Lp extends Si{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ln.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Vi.get(a);u===void 0&&(u=[],Vi.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=Ns("img");function c(){h(),t&&t(this);const u=Vi.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Vi.delete(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),Ln.remove(`image:${e}`);const d=Vi.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(u)}Vi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ln.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class wy extends Si{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new yi,o=new hu(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(h){if(i!==void 0)i(h);else{h(h);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:en,a.wrapT=l.wrapT!==void 0?l.wrapT:en,a.magFilter=l.magFilter!==void 0?l.magFilter:Ct,a.minFilter=l.minFilter!==void 0?l.minFilter:Ct,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=qn),l.mipmapCount===1&&(a.minFilter=Ct),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l)},n,i),a}}class Ty extends Si{constructor(e){super(e)}load(e,t,n,i){const r=new Mt,a=new Lp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class hs extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ey extends hs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Fa=new Ue,Cc=new R,Rc=new R;class dl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gs,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Cc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cc),Rc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rc),t.updateMatrixWorld(),Fa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Dp extends dl{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=is*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ay extends hs{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Dp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Pc=new Ue,ys=new R,Oa=new R;class Up extends dl{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ys.setFromMatrixPosition(e.matrixWorld),n.position.copy(ys),Oa.copy(n.position),Oa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Oa),n.updateMatrixWorld(),i.makeTranslation(-ys.x,-ys.y,-ys.z),Pc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pc,n.coordinateSystem,n.reversedDepth)}}class Cy extends hs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Up}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class uu extends Vh{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Np extends dl{constructor(){super(new uu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fp extends hs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new Np}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Op extends hs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ry extends hs{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Py{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Iy extends xt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const ka=new WeakMap;class Ly extends Si{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ge("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ge("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ln.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(ka.has(a)===!0)i&&i(ka.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ln.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),ka.set(c,l),Ln.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ln.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let Sr;class du{static getContext(){return Sr===void 0&&(Sr=new(window.AudioContext||window.webkitAudioContext)),Sr}static setContext(e){Sr=e}}class Dy extends Si{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new hu(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{const l=c.slice(0);du.getContext().decodeAudioData(l,function(u){t(u)}).catch(o)}catch(l){o(l)}},n,i);function o(c){i?i(c):ke(c),r.manager.itemError(e)}}}class kp extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Bp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const ci=new R,Ba=new vn,zp=new R,hi=new R,ui=new R;class Uy extends ht{constructor(){super(),this.type="AudioListener",this.context=du.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Bp}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(ci,Ba,zp),hi.set(0,0,-1).applyQuaternion(Ba),ui.set(0,1,0).applyQuaternion(Ba),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(ci.x,n),t.positionY.linearRampToValueAtTime(ci.y,n),t.positionZ.linearRampToValueAtTime(ci.z,n),t.forwardX.linearRampToValueAtTime(hi.x,n),t.forwardY.linearRampToValueAtTime(hi.y,n),t.forwardZ.linearRampToValueAtTime(hi.z,n),t.upX.linearRampToValueAtTime(ui.x,n),t.upY.linearRampToValueAtTime(ui.y,n),t.upZ.linearRampToValueAtTime(ui.z,n)}else t.setPosition(ci.x,ci.y,ci.z),t.setOrientation(hi.x,hi.y,hi.z,ui.x,ui.y,ui.z)}}class Vp extends ht{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){ge("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){ge("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){ge("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){ge("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){ge("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(ge("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){ge("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(ge("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const di=new R,Ic=new vn,Hp=new R,fi=new R;class Ny extends Vp{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(di,Ic,Hp),fi.set(0,0,1).applyQuaternion(Ic);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(di.x,n),t.positionY.linearRampToValueAtTime(di.y,n),t.positionZ.linearRampToValueAtTime(di.z,n),t.orientationX.linearRampToValueAtTime(fi.x,n),t.orientationY.linearRampToValueAtTime(fi.y,n),t.orientationZ.linearRampToValueAtTime(fi.z,n)}else t.setPosition(di.x,di.y,di.z),t.setOrientation(fi.x,fi.y,fi.z)}}const fl="\\[\\]\\.:\\/",Gp=new RegExp("["+fl+"]","g"),pl="[^"+fl+"]",Wp="[^"+fl.replace("\\.","")+"]",Xp=/((?:WC+[\/:])*)/.source.replace("WC",pl),qp=/(WCOD+)?/.source.replace("WCOD",Wp),$p=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pl),Yp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pl),jp=new RegExp("^"+Xp+qp+$p+Yp+"$"),Jp=["material","materials","bones","map"];class Kp{constructor(e,t,n){const i=n||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class it{constructor(e,t,n){this.path=t,this.parsedPath=n||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new it.Composite(e,t,n):new it(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gp,"")}static parseTrackName(e){const t=jp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Jp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=it.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;ke("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=Kp;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Fy extends Sf{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const Lc=new Ue;class Zp{constructor(e,t,n=0,i=1/0){this.ray=new Hs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new al,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ke("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lc),this}intersectObject(e,t=!0,n=[]){return Wo(e,this,n,t),n.sort(Dc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Wo(e[i],this,n,t);return n.sort(Dc),n}}function Dc(s,e){return s.distance-e.distance}function Wo(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Wo(r[a],e,t,!0)}}const Uc=new le;class Oy{constructor(e=new le(1/0,1/0),t=new le(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Uc.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Uc).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Nc=new R,wr=new R,Hi=new R,Gi=new R,za=new R,Qp=new R,em=new R;class ky{constructor(e=new R,t=new R){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Nc.subVectors(e,this.start),wr.subVectors(this.end,this.start);const n=wr.dot(wr);let r=wr.dot(Nc)/n;return t&&(r=Pe(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=Qp,n=em){const i=10000000000000001e-32;let r,a;const o=this.start,c=e.start,l=this.end,h=e.end;Hi.subVectors(l,o),Gi.subVectors(h,c),za.subVectors(o,c);const u=Hi.dot(Hi),d=Gi.dot(Gi),f=Gi.dot(za);if(u<=i&&d<=i)return t.copy(o),n.copy(c),t.sub(n),t.dot(t);if(u<=i)r=0,a=f/d,a=Pe(a,0,1);else{const m=Hi.dot(za);if(d<=i)a=0,r=Pe(-m/u,0,1);else{const g=Hi.dot(Gi),x=u*d-g*g;x!==0?r=Pe((g*f-m*d)/x,0,1):r=0,a=(g*r+f)/d,a<0?(a=0,r=Pe(-m/u,0,1)):a>1&&(a=1,r=Pe((g-m)/u,0,1))}}return t.copy(o).add(Hi.multiplyScalar(r)),n.copy(c).add(Gi.multiplyScalar(a)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class By{constructor(){this.type="ShapePath",this.color=new be,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new zo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,a){return this.currentPath.bezierCurveTo(e,t,n,i,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const y=[];for(let _=0,M=p.length;_<M;_++){const P=p[_],A=new Is;A.curves=P.curves,y.push(A)}return y}function n(p,y){const _=y.length;let M=!1;for(let P=_-1,A=0;A<_;P=A++){let E=y[P],D=y[A],w=D.x-E.x,S=D.y-E.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(E=y[A],w=-w,D=y[P],S=-S),p.y<E.y||p.y>D.y)continue;if(p.y===E.y){if(p.x===E.x)return!0}else{const I=S*(p.x-E.x)-w*(p.y-E.y);if(I===0)return!0;if(I<0)continue;M=!M}}else{if(p.y!==E.y)continue;if(D.x<=p.x&&p.x<=E.x||E.x<=p.x&&p.x<=D.x)return!0}}return M}const i=Zi.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,c;const l=[];if(r.length===1)return o=r[0],c=new Is,c.curves=o.curves,l.push(c),l;let h=!i(r[0].getPoints());h=e?!h:h;const u=[],d=[];let f=[],m=0,g;d[m]=void 0,f[m]=[];for(let p=0,y=r.length;p<y;p++)o=r[p],g=o.getPoints(),a=i(g),a=e?!a:a,a?(!h&&d[m]&&m++,d[m]={s:new Is,p:g},d[m].s.curves=o.curves,h&&m++,f[m]=[]):f[m].push({h:o,p:g[0]});if(!d[0])return t(r);if(d.length>1){let p=!1,y=0;for(let _=0,M=d.length;_<M;_++)u[_]=[];for(let _=0,M=d.length;_<M;_++){const P=f[_];for(let A=0;A<P.length;A++){const E=P[A];let D=!0;for(let w=0;w<d.length;w++)n(E.p,d[w].p)&&(_!==w&&y++,D?(D=!1,u[w].push(E)):p=!0);D&&u[_].push(E)}}y>0&&p===!1&&(f=u)}let x;for(let p=0,y=d.length;p<y;p++){c=d[p].s,l.push(c),x=f[p];for(let _=0,M=x.length;_<M;_++)c.holes.push(x[_].h)}return l}}function Fc(s,e,t,n){const i=tm(n);switch(t){case Lh:return s*e;case el:return s*e/i.components*i.byteLength;case Jr:return s*e/i.components*i.byteLength;case tl:return s*e*2/i.components*i.byteLength;case nl:return s*e*2/i.components*i.byteLength;case Dh:return s*e*3/i.components*i.byteLength;case Vt:return s*e*4/i.components*i.byteLength;case il:return s*e*4/i.components*i.byteLength;case Rr:case Pr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ir:case Lr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case co:case uo:return Math.max(s,16)*Math.max(e,8)/4;case lo:case ho:return Math.max(s,8)*Math.max(e,8)/2;case fo:case po:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case mo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case go:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case vo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case _o:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case yo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case bo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case So:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case wo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case To:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Eo:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ao:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Co:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ro:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Po:case Io:case Lo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Do:case Uo:return Math.ceil(s/4)*Math.ceil(e/4)*8;case No:case Fo:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tm(s){switch(s){case gn:case Ch:return{byteLength:1,components:1};case Us:case Rh:case as:return{byteLength:2,components:1};case Zo:case Qo:return{byteLength:2,components:4};case Zn:case Ko:case zt:return{byteLength:4,components:1};case Ph:case Ih:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jo}}));typeof window<"u"&&(window.__THREE__?ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jo);function fu(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function nm(s){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],g=u[f];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const g=u[f];s.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var im=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,um=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Em=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Am=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Um=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$m=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ym=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Km=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,t0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,n0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,i0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,s0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,d0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,x0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,b0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,M0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,T0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,E0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,L0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,B0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,z0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,V0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,H0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,W0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,q0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,J0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,K0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ix=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ox=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ux=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_x=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ex=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ax=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ix=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ux=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:im,alphahash_pars_fragment:sm,alphamap_fragment:rm,alphamap_pars_fragment:am,alphatest_fragment:om,alphatest_pars_fragment:lm,aomap_fragment:cm,aomap_pars_fragment:hm,batching_pars_vertex:um,batching_vertex:dm,begin_vertex:fm,beginnormal_vertex:pm,bsdfs:mm,iridescence_fragment:xm,bumpmap_pars_fragment:gm,clipping_planes_fragment:vm,clipping_planes_pars_fragment:_m,clipping_planes_pars_vertex:ym,clipping_planes_vertex:bm,color_fragment:Mm,color_pars_fragment:Sm,color_pars_vertex:wm,color_vertex:Tm,common:Em,cube_uv_reflection_fragment:Am,defaultnormal_vertex:Cm,displacementmap_pars_vertex:Rm,displacementmap_vertex:Pm,emissivemap_fragment:Im,emissivemap_pars_fragment:Lm,colorspace_fragment:Dm,colorspace_pars_fragment:Um,envmap_fragment:Nm,envmap_common_pars_fragment:Fm,envmap_pars_fragment:Om,envmap_pars_vertex:km,envmap_physical_pars_fragment:jm,envmap_vertex:Bm,fog_vertex:zm,fog_pars_vertex:Vm,fog_fragment:Hm,fog_pars_fragment:Gm,gradientmap_pars_fragment:Wm,lightmap_pars_fragment:Xm,lights_lambert_fragment:qm,lights_lambert_pars_fragment:$m,lights_pars_begin:Ym,lights_toon_fragment:Jm,lights_toon_pars_fragment:Km,lights_phong_fragment:Zm,lights_phong_pars_fragment:Qm,lights_physical_fragment:e0,lights_physical_pars_fragment:t0,lights_fragment_begin:n0,lights_fragment_maps:i0,lights_fragment_end:s0,logdepthbuf_fragment:r0,logdepthbuf_pars_fragment:a0,logdepthbuf_pars_vertex:o0,logdepthbuf_vertex:l0,map_fragment:c0,map_pars_fragment:h0,map_particle_fragment:u0,map_particle_pars_fragment:d0,metalnessmap_fragment:f0,metalnessmap_pars_fragment:p0,morphinstance_vertex:m0,morphcolor_vertex:x0,morphnormal_vertex:g0,morphtarget_pars_vertex:v0,morphtarget_vertex:_0,normal_fragment_begin:y0,normal_fragment_maps:b0,normal_pars_fragment:M0,normal_pars_vertex:S0,normal_vertex:w0,normalmap_pars_fragment:T0,clearcoat_normal_fragment_begin:E0,clearcoat_normal_fragment_maps:A0,clearcoat_pars_fragment:C0,iridescence_pars_fragment:R0,opaque_fragment:P0,packing:I0,premultiplied_alpha_fragment:L0,project_vertex:D0,dithering_fragment:U0,dithering_pars_fragment:N0,roughnessmap_fragment:F0,roughnessmap_pars_fragment:O0,shadowmap_pars_fragment:k0,shadowmap_pars_vertex:B0,shadowmap_vertex:z0,shadowmask_pars_fragment:V0,skinbase_vertex:H0,skinning_pars_vertex:G0,skinning_vertex:W0,skinnormal_vertex:X0,specularmap_fragment:q0,specularmap_pars_fragment:$0,tonemapping_fragment:Y0,tonemapping_pars_fragment:j0,transmission_fragment:J0,transmission_pars_fragment:K0,uv_pars_fragment:Z0,uv_pars_vertex:Q0,uv_vertex:ex,worldpos_vertex:tx,background_vert:nx,background_frag:ix,backgroundCube_vert:sx,backgroundCube_frag:rx,cube_vert:ax,cube_frag:ox,depth_vert:lx,depth_frag:cx,distanceRGBA_vert:hx,distanceRGBA_frag:ux,equirect_vert:dx,equirect_frag:fx,linedashed_vert:px,linedashed_frag:mx,meshbasic_vert:xx,meshbasic_frag:gx,meshlambert_vert:vx,meshlambert_frag:_x,meshmatcap_vert:yx,meshmatcap_frag:bx,meshnormal_vert:Mx,meshnormal_frag:Sx,meshphong_vert:wx,meshphong_frag:Tx,meshphysical_vert:Ex,meshphysical_frag:Ax,meshtoon_vert:Cx,meshtoon_frag:Rx,points_vert:Px,points_frag:Ix,shadow_vert:Lx,shadow_frag:Dx,sprite_vert:Ux,sprite_frag:Nx},ae={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},xn={basic:{uniforms:Ft([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Ft([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new be(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Ft([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Ft([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Ft([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new be(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Ft([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Ft([ae.points,ae.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Ft([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Ft([ae.common,ae.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Ft([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Ft([ae.sprite,ae.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Ft([ae.common,ae.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Ft([ae.lights,ae.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};xn.physical={uniforms:Ft([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Tr={r:0,b:0,g:0},pi=new sn,Fx=new Ue;function Ox(s,e,t,n,i,r,a){const o=new be(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(_){let M=_.isScene===!0?_.background:null;return M&&M.isTexture&&(M=(_.backgroundBlurriness>0?t:e).get(M)),M}function g(_){let M=!1;const P=m(_);P===null?p(o,c):P&&P.isColor&&(p(P,1),M=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(_,M){const P=m(M);P&&(P.isCubeTexture||P.mapping===jr)?(h===void 0&&(h=new st(new Jn(1e4,1e4,1e4),new Nn({name:"BackgroundCubeMaterial",uniforms:ss(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,E,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),pi.copy(M.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Fx.makeRotationFromEuler(pi)),h.material.toneMapped=qe.getTransfer(P.colorSpace)!==nt,(u!==P||d!==P.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=P,d=P.version,f=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new st(new Fn(2,2),new Nn({name:"BackgroundMaterial",uniforms:ss(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=qe.getTransfer(P.colorSpace)!==nt,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(u!==P||d!==P.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=P,d=P.version,f=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,M){_.getRGB(Tr,zh(s)),n.buffers.color.setClear(Tr.r,Tr.g,Tr.b,M,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),c=M,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(o,c)},render:g,addToRenderList:x,dispose:y}}function kx(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(S,I,H,k,G){let K=!1;const B=u(k,H,I);r!==B&&(r=B,l(r.object)),K=f(S,k,H,G),K&&m(S,k,H,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,M(S,I,H,k),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return s.createVertexArray()}function l(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,I,H){const k=H.wireframe===!0;let G=n[S.id];G===void 0&&(G={},n[S.id]=G);let K=G[I.id];K===void 0&&(K={},G[I.id]=K);let B=K[k];return B===void 0&&(B=d(c()),K[k]=B),B}function d(S){const I=[],H=[],k=[];for(let G=0;G<t;G++)I[G]=0,H[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:k,object:S,attributes:{},index:null}}function f(S,I,H,k){const G=r.attributes,K=I.attributes;let B=0;const se=H.getAttributes();for(const W in se)if(se[W].location>=0){const ce=G[W];let ve=K[W];if(ve===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor)),ce===void 0||ce.attribute!==ve||ve&&ce.data!==ve.data)return!0;B++}return r.attributesNum!==B||r.index!==k}function m(S,I,H,k){const G={},K=I.attributes;let B=0;const se=H.getAttributes();for(const W in se)if(se[W].location>=0){let ce=K[W];ce===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor));const ve={};ve.attribute=ce,ce&&ce.data&&(ve.data=ce.data),G[W]=ve,B++}r.attributes=G,r.attributesNum=B,r.index=k}function g(){const S=r.newAttributes;for(let I=0,H=S.length;I<H;I++)S[I]=0}function x(S){p(S,0)}function p(S,I){const H=r.newAttributes,k=r.enabledAttributes,G=r.attributeDivisors;H[S]=1,k[S]===0&&(s.enableVertexAttribArray(S),k[S]=1),G[S]!==I&&(s.vertexAttribDivisor(S,I),G[S]=I)}function y(){const S=r.newAttributes,I=r.enabledAttributes;for(let H=0,k=I.length;H<k;H++)I[H]!==S[H]&&(s.disableVertexAttribArray(H),I[H]=0)}function _(S,I,H,k,G,K,B){B===!0?s.vertexAttribIPointer(S,I,H,G,K):s.vertexAttribPointer(S,I,H,k,G,K)}function M(S,I,H,k){g();const G=k.attributes,K=H.getAttributes(),B=I.defaultAttributeValues;for(const se in K){const W=K[se];if(W.location>=0){let ee=G[se];if(ee===void 0&&(se==="instanceMatrix"&&S.instanceMatrix&&(ee=S.instanceMatrix),se==="instanceColor"&&S.instanceColor&&(ee=S.instanceColor)),ee!==void 0){const ce=ee.normalized,ve=ee.itemSize,He=e.get(ee);if(He===void 0)continue;const lt=He.buffer,ct=He.type,je=He.bytesPerElement,gt=ct===s.INT||ct===s.UNSIGNED_INT||ee.gpuType===Ko;if(ee.isInterleavedBufferAttribute){const Se=ee.data,ot=Se.stride,Rt=ee.offset;if(Se.isInstancedInterleavedBuffer){for(let X=0;X<W.locationSize;X++)p(W.location+X,Se.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let X=0;X<W.locationSize;X++)x(W.location+X);s.bindBuffer(s.ARRAY_BUFFER,lt);for(let X=0;X<W.locationSize;X++)_(W.location+X,ve/W.locationSize,ct,ce,ot*je,(Rt+ve/W.locationSize*X)*je,gt)}else{if(ee.isInstancedBufferAttribute){for(let Se=0;Se<W.locationSize;Se++)p(W.location+Se,ee.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Se=0;Se<W.locationSize;Se++)x(W.location+Se);s.bindBuffer(s.ARRAY_BUFFER,lt);for(let Se=0;Se<W.locationSize;Se++)_(W.location+Se,ve/W.locationSize,ct,ce,ve*je,ve/W.locationSize*Se*je,gt)}}else if(B!==void 0){const ce=B[se];if(ce!==void 0)switch(ce.length){case 2:s.vertexAttrib2fv(W.location,ce);break;case 3:s.vertexAttrib3fv(W.location,ce);break;case 4:s.vertexAttrib4fv(W.location,ce);break;default:s.vertexAttrib1fv(W.location,ce)}}}}y()}function P(){D();for(const S in n){const I=n[S];for(const H in I){const k=I[H];for(const G in k)h(k[G].object),delete k[G];delete I[H]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const I=n[S.id];for(const H in I){const k=I[H];for(const G in k)h(k[G].object),delete k[G];delete I[H]}delete n[S.id]}function E(S){for(const I in n){const H=n[I];if(H[S.id]===void 0)continue;const k=H[S.id];for(const G in k)h(k[G].object),delete k[G];delete H[S.id]}}function D(){w(),a=!0,r!==i&&(r=i,l(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:x,disableUnusedAttributes:y}}function Bx(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)a(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g]*d[g];t.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function zx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==Vt&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const D=E===as&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==gn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==zt&&!D)}function c(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(ge("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:P,maxSamples:A}}function Vx(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Wn,o=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,g=u.clipIntersection,x=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!x)r?h(null):l();else{const y=r?0:n,_=y*4;let M=p.clippingState||null;c.value=M,M=h(m,d,_,f);for(let P=0;P!==_;++P)M[P]=t[P];p.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const g=u!==null?u.length:0;let x=null;if(g!==0){if(x=c.value,m!==!0||x===null){const p=f+g*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(x===null||x.length<p)&&(x=new Float32Array(p));for(let _=0,M=f;_!==g;++_,M+=4)a.copy(u[_]).applyMatrix4(y,o),a.normal.toArray(x,M),x[M+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,x}}function Hx(s){let e=new WeakMap;function t(a,o){return o===so?a.mapping=bi:o===ro&&(a.mapping=es),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===so||o===ro)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new yf(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Yn=4,Oc=[.125,.215,.35,.446,.526,.582],_i=20,Gx=256,bs=new uu,kc=new be;let Va=null,Ha=0,Ga=0,Wa=!1;const Wx=new R;class Bc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=Wx}=r;Va=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Va,Ha,Ga),this._renderer.xr.enabled=Wa,e.scissorTest=!1,Wi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bi||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Va=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:as,format:Vt,colorSpace:ns,depthBuffer:!1},i=zc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zc(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Xx(r)),this._blurMaterial=$x(r,e,t)}return i}_compileMaterial(e){const t=new st(new xt,e);this._renderer.compile(t,bs)}_sceneToCubeUV(e,t,n,i,r){const c=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(kc),u.toneMapping=jn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new st(new Jn,new At({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,x=g.material;let p=!1;const y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,p=!0):(x.color.copy(kc),p=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[_],r.y,r.z)):M===1?(c.up.set(0,0,l[_]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[_],r.z)):(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[_]));const P=this._cubeSize;Wi(i,M*P,_>2?P:0,P,P),u.setRenderTarget(i),p&&u.render(g,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===bi||e.mapping===es;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Wi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,bs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget;if(this._ggxMaterial===null){const y=3*Math.max(this._cubeSize,16),_=4*this._cubeSize;this._ggxMaterial=qx(this._lodMax,y,_)}const a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=.05+l*.95,f=u*d,{_lodMax:m}=this,g=this._sizeLods[n],x=3*g*(n>m-Yn?n-m+Yn:0),p=4*(this._cubeSize-g);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=m-t,Wi(r,x,p,3*g,2*g),i.setRenderTarget(r),i.render(o,bs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,Wi(e,x,p,3*g,2*g),i.setRenderTarget(e),i.render(o,bs)}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ke("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=l;const d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*_i-1),g=r/m,x=isFinite(r)?1+Math.floor(h*g):_i;x>_i&&ge(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${_i}`);const p=[];let y=0;for(let E=0;E<_i;++E){const D=E/g,w=Math.exp(-D*D/2);p.push(w),E===0?y+=w:E<x&&(y+=2*w)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;const M=this._sizeLods[i],P=3*M*(i>_-Yn?i-_+Yn:0),A=4*(this._cubeSize-M);Wi(t,P,A,3*M,2*M),c.setRenderTarget(t),c.render(u,bs)}}function Xx(s){const e=[],t=[],n=[];let i=s;const r=s-Yn+1+Oc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-Yn?c=Oc[a-s+Yn-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,g=3,x=2,p=1,y=new Float32Array(g*m*f),_=new Float32Array(x*m*f),M=new Float32Array(p*m*f);for(let A=0;A<f;A++){const E=A%3*2/3-1,D=A>2?0:-1,w=[E,D,0,E+2/3,D,0,E+2/3,D+1,0,E,D,0,E+2/3,D+1,0,E,D+1,0];y.set(w,g*m*A),_.set(d,x*m*A);const S=[A,A,A,A,A,A];M.set(S,p*m*A)}const P=new xt;P.setAttribute("position",new Gt(y,g)),P.setAttribute("uv",new Gt(_,x)),P.setAttribute("faceIndex",new Gt(M,p)),n.push(new st(P,null)),i>Yn&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function zc(s,e,t){const n=new Qn(s,e,t);return n.texture.mapping=jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wi(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function qx(s,e,t){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Gx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function $x(s,e,t){const n=new Float32Array(_i),i=new R(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Vc(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Hc(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Qr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yx(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===so||c===ro,h=c===bi||c===es;if(l||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Bc(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Bc(s)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function jx(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Fs("WebGLRenderer: "+n+" extension not supported."),i}}}function Jx(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,m=u.attributes.position;let g=0;if(f!==null){const y=f.array;g=f.version;for(let _=0,M=y.length;_<M;_+=3){const P=y[_+0],A=y[_+1],E=y[_+2];d.push(P,A,A,E,E,P)}}else if(m!==void 0){const y=m.array;g=m.version;for(let _=0,M=y.length/3-1;_<M;_+=3){const P=_+0,A=_+1,E=_+2;d.push(P,A,A,E,E,P)}}else return;const x=new(Nh(d)?Bh:kh)(d,1);x.version=g;const p=r.get(u);p&&e.remove(p),r.set(u,x)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Kx(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*a,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let x=0;for(let p=0;p<m;p++)x+=f[p];t.update(x,n,1)}function u(d,f,m,g){if(m===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],g[p]);else{x.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,m);let p=0;for(let y=0;y<m;y++)p+=f[y]*g[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Zx(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:ke("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Qx(s,e,t){const n=new WeakMap,i=new $e;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let w=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let _=0;f===!0&&(_=1),m===!0&&(_=2),g===!0&&(_=3);let M=o.attributes.position.count*_,P=1;M>e.maxTextureSize&&(P=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const A=new Float32Array(M*P*4*u),E=new Fh(A,M,P,u);E.type=zt,E.needsUpdate=!0;const D=_*4;for(let S=0;S<u;S++){const I=x[S],H=p[S],k=y[S],G=M*P*4*S;for(let K=0;K<I.count;K++){const B=K*D;f===!0&&(i.fromBufferAttribute(I,K),A[G+B+0]=i.x,A[G+B+1]=i.y,A[G+B+2]=i.z,A[G+B+3]=0),m===!0&&(i.fromBufferAttribute(H,K),A[G+B+4]=i.x,A[G+B+5]=i.y,A[G+B+6]=i.z,A[G+B+7]=0),g===!0&&(i.fromBufferAttribute(k,K),A[G+B+8]=i.x,A[G+B+9]=i.y,A[G+B+10]=i.z,A[G+B+11]=k.itemSize===4?i.w:1)}}d={count:u,texture:E,size:new le(M,P)},n.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<l.length;g++)f+=l[g];const m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}class eg{constructor(e,t,n){if(this.renderer=e,this.DEFAULT_NUMVIEWS=2,this.maxNumViews=0,this.gl=n,this.extensions=t,this.available=this.extensions.has("OCULUS_multiview"),this.available){const r=this.extensions.get("OCULUS_multiview");this.maxNumViews=this.gl.getParameter(r.MAX_VIEWS_OVR),this.mat4=[],this.mat3=[],this.cameraArray=[];for(var i=0;i<this.maxNumViews;i++)this.mat4[i]=new Ue,this.mat3[i]=new Fe}}getCameraArray(e){return e.isArrayCamera?e.cameras:(this.cameraArray[0]=e,this.cameraArray)}updateCameraProjectionMatricesUniform(e,t){for(var n=this.getCameraArray(e),i=0;i<n.length;i++)this.mat4[i].copy(n[i].projectionMatrix);t.setValue(this.gl,"projectionMatrices",this.mat4)}updateCameraViewMatricesUniform(e,t){for(var n=this.getCameraArray(e),i=0;i<n.length;i++)this.mat4[i].copy(n[i].matrixWorldInverse);t.setValue(this.gl,"viewMatrices",this.mat4)}updateObjectMatricesUniforms(e,t,n){for(var i=this.getCameraArray(t),r=0;r<i.length;r++)this.mat4[r].multiplyMatrices(i[r].matrixWorldInverse,e.matrixWorld),this.mat3[r].getNormalMatrix(this.mat4[r]);n.setValue(this.gl,"modelViewMatrices",this.mat4),n.setValue(this.gl,"normalMatrices",this.mat3)}}function tg(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const pu=new Mt,Gc=new Jh(1,1),mu=new Fh,xu=new Qd,gu=new Hh,Wc=[],Xc=[],qc=new Float32Array(16),$c=new Float32Array(9),Yc=new Float32Array(4);function us(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Wc[i];if(r===void 0&&(r=new Float32Array(i),Wc[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function St(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function wt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ea(s,e){let t=Xc[e];t===void 0&&(t=new Int32Array(e),Xc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function ng(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function ig(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2fv(this.addr,e),wt(t,e)}}function sg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;s.uniform3fv(this.addr,e),wt(t,e)}}function rg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4fv(this.addr,e),wt(t,e)}}function ag(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(St(t,n))return;Yc.set(n),s.uniformMatrix2fv(this.addr,!1,Yc),wt(t,n)}}function og(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(St(t,n))return;$c.set(n),s.uniformMatrix3fv(this.addr,!1,$c),wt(t,n)}}function lg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(St(t,n))return;qc.set(n),s.uniformMatrix4fv(this.addr,!1,qc),wt(t,n)}}function cg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function hg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2iv(this.addr,e),wt(t,e)}}function ug(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;s.uniform3iv(this.addr,e),wt(t,e)}}function dg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4iv(this.addr,e),wt(t,e)}}function fg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function pg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2uiv(this.addr,e),wt(t,e)}}function mg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;s.uniform3uiv(this.addr,e),wt(t,e)}}function xg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4uiv(this.addr,e),wt(t,e)}}function gg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Gc.compareFunction=Uh,r=Gc):r=pu,t.setTexture2D(e||r,i)}function vg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||xu,i)}function _g(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||gu,i)}function yg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||mu,i)}function bg(s){switch(s){case 5126:return ng;case 35664:return ig;case 35665:return sg;case 35666:return rg;case 35674:return ag;case 35675:return og;case 35676:return lg;case 5124:case 35670:return cg;case 35667:case 35671:return hg;case 35668:case 35672:return ug;case 35669:case 35673:return dg;case 5125:return fg;case 36294:return pg;case 36295:return mg;case 36296:return xg;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return yg}}function Mg(s,e){s.uniform1fv(this.addr,e)}function Sg(s,e){const t=us(e,this.size,2);s.uniform2fv(this.addr,t)}function wg(s,e){const t=us(e,this.size,3);s.uniform3fv(this.addr,t)}function Tg(s,e){const t=us(e,this.size,4);s.uniform4fv(this.addr,t)}function Eg(s,e){const t=us(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Ag(s,e){const t=us(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Cg(s,e){const t=us(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Rg(s,e){s.uniform1iv(this.addr,e)}function Pg(s,e){s.uniform2iv(this.addr,e)}function Ig(s,e){s.uniform3iv(this.addr,e)}function Lg(s,e){s.uniform4iv(this.addr,e)}function Dg(s,e){s.uniform1uiv(this.addr,e)}function Ug(s,e){s.uniform2uiv(this.addr,e)}function Ng(s,e){s.uniform3uiv(this.addr,e)}function Fg(s,e){s.uniform4uiv(this.addr,e)}function Og(s,e,t){const n=this.cache,i=e.length,r=ea(t,i);St(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||pu,r[a])}function kg(s,e,t){const n=this.cache,i=e.length,r=ea(t,i);St(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||xu,r[a])}function Bg(s,e,t){const n=this.cache,i=e.length,r=ea(t,i);St(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||gu,r[a])}function zg(s,e,t){const n=this.cache,i=e.length,r=ea(t,i);St(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||mu,r[a])}function Vg(s){switch(s){case 5126:return Mg;case 35664:return Sg;case 35665:return wg;case 35666:return Tg;case 35674:return Eg;case 35675:return Ag;case 35676:return Cg;case 5124:case 35670:return Rg;case 35667:case 35671:return Pg;case 35668:case 35672:return Ig;case 35669:case 35673:return Lg;case 5125:return Dg;case 36294:return Ug;case 36295:return Ng;case 36296:return Fg;case 35678:case 36198:case 36298:case 36306:case 35682:return Og;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return zg}}class Hg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bg(t.type)}}class Gg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vg(t.type)}}class Wg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Xa=/(\w+)(\])?(\[|\.)?/g;function jc(s,e){s.seq.push(e),s.map[e.id]=e}function Xg(s,e,t){const n=s.name,i=n.length;for(Xa.lastIndex=0;;){const r=Xa.exec(n),a=Xa.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){jc(t,l===void 0?new Hg(o,s,e):new Gg(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Wg(o),jc(t,u)),t=u}}}class Dr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Xg(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Jc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const qg=37297;let $g=0;function Yg(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Kc=new Fe;function jg(s){qe._getMatrix(Kc,qe.workingColorSpace,s);const e=`mat3( ${Kc.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(s)){case Fr:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return ge("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Zc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Yg(s.getShaderSource(e),o)}else return r}function Jg(s,e){const t=jg(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Kg(s,e){let t;switch(e){case hd:t="Linear";break;case ud:t="Reinhard";break;case dd:t="Cineon";break;case fd:t="ACESFilmic";break;case md:t="AgX";break;case xd:t="Neutral";break;case pd:t="Custom";break;default:ge("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Er=new R;function Zg(){qe.getLuminanceCoefficients(Er);const s=Er.x.toFixed(4),e=Er.y.toFixed(4),t=Er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function ev(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function tv(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Es(s){return s!==""}function Qc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xo(s){return s.replace(nv,sv)}const iv=new Map;function sv(s,e){let t=Oe[e];if(t===void 0){const n=iv.get(e);if(n!==void 0)t=Oe[n],ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xo(t)}const rv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function th(s){return s.replace(rv,av)}function av(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function nh(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ov(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Eh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Gu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Cn&&(e="SHADOWMAP_TYPE_VSM"),e}function lv(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case bi:case es:e="ENVMAP_TYPE_CUBE";break;case jr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cv(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===es&&(e="ENVMAP_MODE_REFRACTION"),e}function hv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Yr:e="ENVMAP_BLENDING_MULTIPLY";break;case ld:e="ENVMAP_BLENDING_MIX";break;case cd:e="ENVMAP_BLENDING_ADD";break}return e}function uv(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function dv(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=ov(t),l=lv(t),h=cv(t),u=hv(t),d=uv(t),f=Qg(t),m=ev(r),g=i.createProgram();let x,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";const _=t.numMultiviewViews;t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Es).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Es).join(`
`),p.length>0&&(p+=`
`)):(x=[nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),p=[nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==jn?Kg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Jg("linearToOutputTexel",t.outputColorSpace),Zg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Es).join(`
`)),a=Xo(a),a=Qc(a,t),a=eh(a,t),o=Xo(o),o=Qc(o,t),o=eh(o,t),a=th(a),o=th(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===Bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p,_>0&&(x=["#extension GL_OVR_multiview : require","layout(num_views = "+_+") in;","#define VIEW_ID gl_ViewID_OVR"].join(`
`)+`
`+x,x=x.replace(["uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;"].join(`
`),["uniform mat4 modelViewMatrices["+_+"];","uniform mat4 projectionMatrices["+_+"];","uniform mat4 viewMatrices["+_+"];","uniform mat3 normalMatrices["+_+"];","#define modelViewMatrix modelViewMatrices[VIEW_ID]","#define projectionMatrix projectionMatrices[VIEW_ID]","#define viewMatrix viewMatrices[VIEW_ID]","#define normalMatrix normalMatrices[VIEW_ID]"].join(`
`)),p=["#extension GL_OVR_multiview : require","#define VIEW_ID gl_ViewID_OVR"].join(`
`)+`
`+p,p=p.replace("uniform mat4 viewMatrix;",["uniform mat4 viewMatrices["+_+"];","#define viewMatrix viewMatrices[VIEW_ID]"].join(`
`))));const M=y+x+a,P=y+p+o,A=Jc(i,i.VERTEX_SHADER,M),E=Jc(i,i.FRAGMENT_SHADER,P);i.attachShader(g,A),i.attachShader(g,E),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function D(H){if(s.debug.checkShaderErrors){const k=i.getProgramInfoLog(g)||"",G=i.getShaderInfoLog(A)||"",K=i.getShaderInfoLog(E)||"",B=k.trim(),se=G.trim(),W=K.trim();let ee=!0,ce=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,A,E);else{const ve=Zc(i,A,"vertex"),He=Zc(i,E,"fragment");ke("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+B+`
`+ve+`
`+He)}else B!==""?ge("WebGLProgram: Program Info Log:",B):(se===""||W==="")&&(ce=!1);ce&&(H.diagnostics={runnable:ee,programLog:B,vertexShader:{log:se,prefix:x},fragmentShader:{log:W,prefix:p}})}i.deleteShader(A),i.deleteShader(E),w=new Dr(i,g),S=tv(i,g)}let w;this.getUniforms=function(){return w===void 0&&D(this),w};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(g,qg)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$g++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=E,this.numMultiviewViews=_,this}let fv=0;class pv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new mv(e),t.set(e,n)),n}}class mv{constructor(e){this.id=fv++,this.code=e,this.usedTimes=0}}function xv(s,e,t,n,i,r,a){const o=new al,c=new pv,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return l.add(w),w===0?"uv":`uv${w}`}function x(w,S,I,H,k){const G=H.fog,K=k.geometry,B=w.isMeshStandardMaterial?H.environment:null,se=(w.isMeshStandardMaterial?t:e).get(w.envMap||B),W=se&&se.mapping===jr?se.image.height:null,ee=m[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&ge("WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const ce=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ve=ce!==void 0?ce.length:0;let He=0;K.morphAttributes.position!==void 0&&(He=1),K.morphAttributes.normal!==void 0&&(He=2),K.morphAttributes.color!==void 0&&(He=3);let lt,ct,je,gt;if(ee){const de=xn[ee];lt=de.vertexShader,ct=de.fragmentShader}else lt=w.vertexShader,ct=w.fragmentShader,c.update(w),je=c.getVertexShaderID(w),gt=c.getFragmentShaderID(w);const Se=s.getRenderTarget(),ot=s.state.buffers.depth.getReversed(),Rt=Se&&Se.isWebGLMultiviewRenderTarget?Se.numViews:0,X=k.isInstancedMesh===!0,he=k.isBatchedMesh===!0,pe=!!w.map,Le=!!w.matcap,Ie=!!se,Ze=!!w.aoMap,L=!!w.lightMap,We=!!w.bumpMap,Ne=!!w.normalMap,Ge=!!w.displacementMap,re=!!w.emissiveMap,rt=!!w.metalnessMap,we=!!w.roughnessMap,Ee=w.anisotropy>0,Je=w.clearcoat>0,Pt=w.dispersion>0,yt=w.iridescence>0,Tt=w.sheen>0,T=w.transmission>0,v=Ee&&!!w.anisotropyMap,F=Je&&!!w.clearcoatMap,q=Je&&!!w.clearcoatNormalMap,j=Je&&!!w.clearcoatRoughnessMap,V=yt&&!!w.iridescenceMap,ue=yt&&!!w.iridescenceThicknessMap,te=Tt&&!!w.sheenColorMap,me=Tt&&!!w.sheenRoughnessMap,Ae=!!w.specularMap,Q=!!w.specularColorMap,C=!!w.specularIntensityMap,J=T&&!!w.transmissionMap,$=T&&!!w.thicknessMap,Y=!!w.gradientMap,oe=!!w.alphaMap,Z=w.alphaTest>0,Ce=!!w.alphaHash,De=!!w.extensions;let Ke=jn;w.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(Ke=s.toneMapping);const ie={shaderID:ee,shaderType:w.type,shaderName:w.name,vertexShader:lt,fragmentShader:ct,defines:w.defines,customVertexShaderID:je,customFragmentShaderID:gt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:he,batchingColor:he&&k._colorsTexture!==null,instancing:X,instancingColor:X&&k.instanceColor!==null,instancingMorph:X&&k.morphTexture!==null,supportsVertexTextures:d,numMultiviewViews:Rt,outputColorSpace:Se===null?s.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:ns,alphaToCoverage:!!w.alphaToCoverage,map:pe,matcap:Le,envMap:Ie,envMapMode:Ie&&se.mapping,envMapCubeUVHeight:W,aoMap:Ze,lightMap:L,bumpMap:We,normalMap:Ne,displacementMap:d&&Ge,emissiveMap:re,normalMapObjectSpace:Ne&&w.normalMapType===Md,normalMapTangentSpace:Ne&&w.normalMapType===Vs,metalnessMap:rt,roughnessMap:we,anisotropy:Ee,anisotropyMap:v,clearcoat:Je,clearcoatMap:F,clearcoatNormalMap:q,clearcoatRoughnessMap:j,dispersion:Pt,iridescence:yt,iridescenceMap:V,iridescenceThicknessMap:ue,sheen:Tt,sheenColorMap:te,sheenRoughnessMap:me,specularMap:Ae,specularColorMap:Q,specularIntensityMap:C,transmission:T,transmissionMap:J,thicknessMap:$,gradientMap:Y,opaque:w.transparent===!1&&w.blending===Yi&&w.alphaToCoverage===!1,alphaMap:oe,alphaTest:Z,alphaHash:Ce,combine:w.combine,mapUv:pe&&g(w.map.channel),aoMapUv:Ze&&g(w.aoMap.channel),lightMapUv:L&&g(w.lightMap.channel),bumpMapUv:We&&g(w.bumpMap.channel),normalMapUv:Ne&&g(w.normalMap.channel),displacementMapUv:Ge&&g(w.displacementMap.channel),emissiveMapUv:re&&g(w.emissiveMap.channel),metalnessMapUv:rt&&g(w.metalnessMap.channel),roughnessMapUv:we&&g(w.roughnessMap.channel),anisotropyMapUv:v&&g(w.anisotropyMap.channel),clearcoatMapUv:F&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:q&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:V&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:te&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:me&&g(w.sheenRoughnessMap.channel),specularMapUv:Ae&&g(w.specularMap.channel),specularColorMapUv:Q&&g(w.specularColorMap.channel),specularIntensityMapUv:C&&g(w.specularIntensityMap.channel),transmissionMapUv:J&&g(w.transmissionMap.channel),thicknessMapUv:$&&g(w.thicknessMap.channel),alphaMapUv:oe&&g(w.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ne||Ee),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!K.attributes.uv&&(pe||oe),fog:!!G,useFog:w.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ot,skinning:k.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:He,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ke,decodeVideoTexture:pe&&w.map.isVideoTexture===!0&&qe.getTransfer(w.map.colorSpace)===nt,decodeVideoTextureEmissive:re&&w.emissiveMap.isVideoTexture===!0&&qe.getTransfer(w.emissiveMap.colorSpace)===nt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Qt,flipSided:w.side===Ht,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:De&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&w.extensions.multiDraw===!0||he)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ie.vertexUv1s=l.has(1),ie.vertexUv2s=l.has(2),ie.vertexUv3s=l.has(3),l.clear(),ie}function p(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)S.push(I),S.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(y(S,w),_(S,w),S.push(s.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function y(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function _(w,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),w.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numMultiviewViews&&o.enable(22),w.push(o.mask)}function M(w){const S=m[w.type];let I;if(S){const H=xn[S];I=xf.clone(H.uniforms)}else I=w.uniforms;return I}function P(w,S){let I;for(let H=0,k=h.length;H<k;H++){const G=h[H];if(G.cacheKey===S){I=G,++I.usedTimes;break}}return I===void 0&&(I=new dv(s,S,w,r),h.push(I)),I}function A(w){if(--w.usedTimes===0){const S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function E(w){c.remove(w)}function D(){c.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:M,acquireProgram:P,releaseProgram:A,releaseShaderCache:E,programs:h,dispose:D}}function gv(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function vv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ih(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function sh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,m,g,x){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:g,group:x},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=g,p.group=x),e++,p}function o(u,d,f,m,g,x){const p=a(u,d,f,m,g,x);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,m,g,x){const p=a(u,d,f,m,g,x);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||vv),n.length>1&&n.sort(d||ih),i.length>1&&i.sort(d||ih)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function _v(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new sh,s.set(n,[a])):i>=r.length?(a=new sh,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function yv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new be};break;case"SpotLight":t={position:new R,direction:new R,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function bv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Mv=0;function Sv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function wv(s){const e=new yv,t=bv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const i=new R,r=new Ue,a=new Ue;function o(l){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,m=0,g=0,x=0,p=0,y=0,_=0,M=0,P=0,A=0,E=0;l.sort(Sv);for(let w=0,S=l.length;w<S;w++){const I=l[w],H=I.color,k=I.intensity,G=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=H.r*k,u+=H.g*k,d+=H.b*k;else if(I.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(I.sh.coefficients[B],k);E++}else if(I.isDirectionalLight){const B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const se=I.shadow,W=t.get(I);W.shadowIntensity=se.intensity,W.shadowBias=se.bias,W.shadowNormalBias=se.normalBias,W.shadowRadius=se.radius,W.shadowMapSize=se.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=I.shadow.matrix,y++}n.directional[f]=B,f++}else if(I.isSpotLight){const B=e.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(H).multiplyScalar(k),B.distance=G,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,n.spot[g]=B;const se=I.shadow;if(I.map&&(n.spotLightMap[P]=I.map,P++,se.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[g]=se.matrix,I.castShadow){const W=t.get(I);W.shadowIntensity=se.intensity,W.shadowBias=se.bias,W.shadowNormalBias=se.normalBias,W.shadowRadius=se.radius,W.shadowMapSize=se.mapSize,n.spotShadow[g]=W,n.spotShadowMap[g]=K,M++}g++}else if(I.isRectAreaLight){const B=e.get(I);B.color.copy(H).multiplyScalar(k),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),n.rectArea[x]=B,x++}else if(I.isPointLight){const B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),B.distance=I.distance,B.decay=I.decay,I.castShadow){const se=I.shadow,W=t.get(I);W.shadowIntensity=se.intensity,W.shadowBias=se.bias,W.shadowNormalBias=se.normalBias,W.shadowRadius=se.radius,W.shadowMapSize=se.mapSize,W.shadowCameraNear=se.camera.near,W.shadowCameraFar=se.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=I.shadow.matrix,_++}n.point[m]=B,m++}else if(I.isHemisphereLight){const B=e.get(I);B.skyColor.copy(I.color).multiplyScalar(k),B.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[p]=B,p++}}x>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==m||D.spotLength!==g||D.rectAreaLength!==x||D.hemiLength!==p||D.numDirectionalShadows!==y||D.numPointShadows!==_||D.numSpotShadows!==M||D.numSpotMaps!==P||D.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=x,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=M+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=E,D.directionalLength=f,D.pointLength=m,D.spotLength=g,D.rectAreaLength=x,D.hemiLength=p,D.numDirectionalShadows=y,D.numPointShadows=_,D.numSpotShadows=M,D.numSpotMaps=P,D.numLightProbes=E,n.version=Mv++)}function c(l,h){let u=0,d=0,f=0,m=0,g=0;const x=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const _=l[p];if(_.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(x),u++}else if(_.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(x),f++}else if(_.isRectAreaLight){const M=n.rectArea[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(x),a.identity(),r.copy(_.matrixWorld),r.premultiply(x),a.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(x),d++}else if(_.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(x),g++}}}return{setup:o,setupView:c,state:n}}function rh(s){const e=new wv(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Tv(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new rh(s),e.set(i,[o])):r>=a.length?(o=new rh(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Av=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Cv(s,e,t){let n=new Gs;const i=new le,r=new le,a=new $e,o=new _p({depthPacking:bd}),c=new yp,l={},h=t.maxTextureSize,u={[Kn]:Ht,[Ht]:Kn,[Qt]:Qt},d=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Ev,fragmentShader:Av}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new xt;m.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new st(m,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eh;let p=this.type;this.render=function(A,E,D){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||A.length===0)return;const w=s.getRenderTarget(),S=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),H=s.state;H.setBlending(Dn),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const k=p!==Cn&&this.type===Cn,G=p===Cn&&this.type!==Cn;for(let K=0,B=A.length;K<B;K++){const se=A[K],W=se.shadow;if(W===void 0){ge("WebGLShadowMap:",se,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const ee=W.getFrameExtents();if(i.multiply(ee),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ee.x),i.x=r.x*ee.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ee.y),i.y=r.y*ee.y,W.mapSize.y=r.y)),W.map===null||k===!0||G===!0){const ve=this.type!==Cn?{minFilter:Yt,magFilter:Yt}:{};W.map!==null&&W.map.dispose(),W.map=new Qn(i.x,i.y,ve),W.map.texture.name=se.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const ce=W.getViewportCount();for(let ve=0;ve<ce;ve++){const He=W.getViewport(ve);a.set(r.x*He.x,r.y*He.y,r.x*He.z,r.y*He.w),H.viewport(a),W.updateMatrices(se,ve),n=W.getFrustum(),M(E,D,W.camera,se,this.type)}W.isPointLightShadow!==!0&&this.type===Cn&&y(W,D),W.needsUpdate=!1}p=this.type,x.needsUpdate=!1,s.setRenderTarget(w,S,I)};function y(A,E){const D=e.update(g);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Qn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(E,null,D,d,g,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(E,null,D,f,g,null)}function _(A,E,D,w){let S=null;const I=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)S=I;else if(S=D.isPointLight===!0?c:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const H=S.uuid,k=E.uuid;let G=l[H];G===void 0&&(G={},l[H]=G);let K=G[k];K===void 0&&(K=S.clone(),G[k]=K,E.addEventListener("dispose",P)),S=K}if(S.visible=E.visible,S.wireframe=E.wireframe,w===Cn?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:u[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=s.properties.get(S);H.light=D}return S}function M(A,E,D,w,S){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Cn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const k=e.update(A),G=A.material;if(Array.isArray(G)){const K=k.groups;for(let B=0,se=K.length;B<se;B++){const W=K[B],ee=G[W.materialIndex];if(ee&&ee.visible){const ce=_(A,ee,w,S);A.onBeforeShadow(s,A,E,D,k,ce,W),s.renderBufferDirect(D,null,k,ce,A,W),A.onAfterShadow(s,A,E,D,k,ce,W)}}}else if(G.visible){const K=_(A,G,w,S);A.onBeforeShadow(s,A,E,D,k,K,null),s.renderBufferDirect(D,null,k,K,A,null),A.onAfterShadow(s,A,E,D,k,K,null)}}const H=A.children;for(let k=0,G=H.length;k<G;k++)M(H[k],E,D,w,S)}function P(A){A.target.removeEventListener("dispose",P);for(const D in l){const w=l[D],S=A.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const Rv={[Ka]:Za,[Qa]:no,[eo]:io,[Qi]:to,[Za]:Ka,[no]:Qa,[io]:eo,[to]:Qi};function Pv(s,e){function t(){let C=!1;const J=new $e;let $=null;const Y=new $e(0,0,0,0);return{setMask:function(oe){$!==oe&&!C&&(s.colorMask(oe,oe,oe,oe),$=oe)},setLocked:function(oe){C=oe},setClear:function(oe,Z,Ce,De,Ke){Ke===!0&&(oe*=De,Z*=De,Ce*=De),J.set(oe,Z,Ce,De),Y.equals(J)===!1&&(s.clearColor(oe,Z,Ce,De),Y.copy(J))},reset:function(){C=!1,$=null,Y.set(-1,0,0,0)}}}function n(){let C=!1,J=!1,$=null,Y=null,oe=null;return{setReversed:function(Z){if(J!==Z){const Ce=e.get("EXT_clip_control");Z?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),J=Z;const De=oe;oe=null,this.setClear(De)}},getReversed:function(){return J},setTest:function(Z){Z?Se(s.DEPTH_TEST):ot(s.DEPTH_TEST)},setMask:function(Z){$!==Z&&!C&&(s.depthMask(Z),$=Z)},setFunc:function(Z){if(J&&(Z=Rv[Z]),Y!==Z){switch(Z){case Ka:s.depthFunc(s.NEVER);break;case Za:s.depthFunc(s.ALWAYS);break;case Qa:s.depthFunc(s.LESS);break;case Qi:s.depthFunc(s.LEQUAL);break;case eo:s.depthFunc(s.EQUAL);break;case to:s.depthFunc(s.GEQUAL);break;case no:s.depthFunc(s.GREATER);break;case io:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Y=Z}},setLocked:function(Z){C=Z},setClear:function(Z){oe!==Z&&(J&&(Z=1-Z),s.clearDepth(Z),oe=Z)},reset:function(){C=!1,$=null,Y=null,oe=null,J=!1}}}function i(){let C=!1,J=null,$=null,Y=null,oe=null,Z=null,Ce=null,De=null,Ke=null;return{setTest:function(ie){C||(ie?Se(s.STENCIL_TEST):ot(s.STENCIL_TEST))},setMask:function(ie){J!==ie&&!C&&(s.stencilMask(ie),J=ie)},setFunc:function(ie,de,Be){($!==ie||Y!==de||oe!==Be)&&(s.stencilFunc(ie,de,Be),$=ie,Y=de,oe=Be)},setOp:function(ie,de,Be){(Z!==ie||Ce!==de||De!==Be)&&(s.stencilOp(ie,de,Be),Z=ie,Ce=de,De=Be)},setLocked:function(ie){C=ie},setClear:function(ie){Ke!==ie&&(s.clearStencil(ie),Ke=ie)},reset:function(){C=!1,J=null,$=null,Y=null,oe=null,Z=null,Ce=null,De=null,Ke=null}}}const r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,g=!1,x=null,p=null,y=null,_=null,M=null,P=null,A=null,E=new be(0,0,0),D=0,w=!1,S=null,I=null,H=null,k=null,G=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,se=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=se>=1):W.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=se>=2);let ee=null,ce={};const ve=s.getParameter(s.SCISSOR_BOX),He=s.getParameter(s.VIEWPORT),lt=new $e().fromArray(ve),ct=new $e().fromArray(He);function je(C,J,$,Y){const oe=new Uint8Array(4),Z=s.createTexture();s.bindTexture(C,Z),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ce=0;Ce<$;Ce++)C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY?s.texImage3D(J,0,s.RGBA,1,1,Y,0,s.RGBA,s.UNSIGNED_BYTE,oe):s.texImage2D(J+Ce,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,oe);return Z}const gt={};gt[s.TEXTURE_2D]=je(s.TEXTURE_2D,s.TEXTURE_2D,1),gt[s.TEXTURE_CUBE_MAP]=je(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[s.TEXTURE_2D_ARRAY]=je(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),gt[s.TEXTURE_3D]=je(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Se(s.DEPTH_TEST),a.setFunc(Qi),L(!1),We(Pl),Se(s.CULL_FACE),Ie(Dn);function Se(C){h[C]!==!0&&(s.enable(C),h[C]=!0)}function ot(C){h[C]!==!1&&(s.disable(C),h[C]=!1)}function Rt(C,J){return u[C]!==J?(s.bindFramebuffer(C,J),u[C]=J,C===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=J),C===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=J),!0):!1}function X(C,J){let $=f,Y=!1;if(C){$=d.get(J),$===void 0&&($=[],d.set(J,$));const oe=C.textures;if($.length!==oe.length||$[0]!==s.COLOR_ATTACHMENT0){for(let Z=0,Ce=oe.length;Z<Ce;Z++)$[Z]=s.COLOR_ATTACHMENT0+Z;$.length=oe.length,Y=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,Y=!0);Y&&s.drawBuffers($)}function he(C){return m!==C?(s.useProgram(C),m=C,!0):!1}const pe={[vi]:s.FUNC_ADD,[Xu]:s.FUNC_SUBTRACT,[qu]:s.FUNC_REVERSE_SUBTRACT};pe[$u]=s.MIN,pe[Yu]=s.MAX;const Le={[ju]:s.ZERO,[Ju]:s.ONE,[Ku]:s.SRC_COLOR,[ja]:s.SRC_ALPHA,[id]:s.SRC_ALPHA_SATURATE,[td]:s.DST_COLOR,[Qu]:s.DST_ALPHA,[Zu]:s.ONE_MINUS_SRC_COLOR,[Ja]:s.ONE_MINUS_SRC_ALPHA,[nd]:s.ONE_MINUS_DST_COLOR,[ed]:s.ONE_MINUS_DST_ALPHA,[sd]:s.CONSTANT_COLOR,[rd]:s.ONE_MINUS_CONSTANT_COLOR,[ad]:s.CONSTANT_ALPHA,[od]:s.ONE_MINUS_CONSTANT_ALPHA};function Ie(C,J,$,Y,oe,Z,Ce,De,Ke,ie){if(C===Dn){g===!0&&(ot(s.BLEND),g=!1);return}if(g===!1&&(Se(s.BLEND),g=!0),C!==Wu){if(C!==x||ie!==w){if((p!==vi||M!==vi)&&(s.blendEquation(s.FUNC_ADD),p=vi,M=vi),ie)switch(C){case Yi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Il:s.blendFunc(s.ONE,s.ONE);break;case Ll:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Dl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ke("WebGLState: Invalid blending: ",C);break}else switch(C){case Yi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Il:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ll:ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dl:ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ke("WebGLState: Invalid blending: ",C);break}y=null,_=null,P=null,A=null,E.set(0,0,0),D=0,x=C,w=ie}return}oe=oe||J,Z=Z||$,Ce=Ce||Y,(J!==p||oe!==M)&&(s.blendEquationSeparate(pe[J],pe[oe]),p=J,M=oe),($!==y||Y!==_||Z!==P||Ce!==A)&&(s.blendFuncSeparate(Le[$],Le[Y],Le[Z],Le[Ce]),y=$,_=Y,P=Z,A=Ce),(De.equals(E)===!1||Ke!==D)&&(s.blendColor(De.r,De.g,De.b,Ke),E.copy(De),D=Ke),x=C,w=!1}function Ze(C,J){C.side===Qt?ot(s.CULL_FACE):Se(s.CULL_FACE);let $=C.side===Ht;J&&($=!$),L($),C.blending===Yi&&C.transparent===!1?Ie(Dn):Ie(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);const Y=C.stencilWrite;o.setTest(Y),Y&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ge(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):ot(s.SAMPLE_ALPHA_TO_COVERAGE)}function L(C){S!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),S=C)}function We(C){C!==Vu?(Se(s.CULL_FACE),C!==I&&(C===Pl?s.cullFace(s.BACK):C===Hu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ot(s.CULL_FACE),I=C}function Ne(C){C!==H&&(B&&s.lineWidth(C),H=C)}function Ge(C,J,$){C?(Se(s.POLYGON_OFFSET_FILL),(k!==J||G!==$)&&(s.polygonOffset(J,$),k=J,G=$)):ot(s.POLYGON_OFFSET_FILL)}function re(C){C?Se(s.SCISSOR_TEST):ot(s.SCISSOR_TEST)}function rt(C){C===void 0&&(C=s.TEXTURE0+K-1),ee!==C&&(s.activeTexture(C),ee=C)}function we(C,J,$){$===void 0&&(ee===null?$=s.TEXTURE0+K-1:$=ee);let Y=ce[$];Y===void 0&&(Y={type:void 0,texture:void 0},ce[$]=Y),(Y.type!==C||Y.texture!==J)&&(ee!==$&&(s.activeTexture($),ee=$),s.bindTexture(C,J||gt[C]),Y.type=C,Y.texture=J)}function Ee(){const C=ce[ee];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Je(){try{s.compressedTexImage2D(...arguments)}catch(C){C("WebGLState:",C)}}function Pt(){try{s.compressedTexImage3D(...arguments)}catch(C){C("WebGLState:",C)}}function yt(){try{s.texSubImage2D(...arguments)}catch(C){C("WebGLState:",C)}}function Tt(){try{s.texSubImage3D(...arguments)}catch(C){C("WebGLState:",C)}}function T(){try{s.compressedTexSubImage2D(...arguments)}catch(C){C("WebGLState:",C)}}function v(){try{s.compressedTexSubImage3D(...arguments)}catch(C){C("WebGLState:",C)}}function F(){try{s.texStorage2D(...arguments)}catch(C){C("WebGLState:",C)}}function q(){try{s.texStorage3D(...arguments)}catch(C){C("WebGLState:",C)}}function j(){try{s.texImage2D(...arguments)}catch(C){C("WebGLState:",C)}}function V(){try{s.texImage3D(...arguments)}catch(C){C("WebGLState:",C)}}function ue(C){lt.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),lt.copy(C))}function te(C){ct.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),ct.copy(C))}function me(C,J){let $=l.get(J);$===void 0&&($=new WeakMap,l.set(J,$));let Y=$.get(C);Y===void 0&&(Y=s.getUniformBlockIndex(J,C.name),$.set(C,Y))}function Ae(C,J){const Y=l.get(J).get(C);c.get(J)!==Y&&(s.uniformBlockBinding(J,Y,C.__bindingPointIndex),c.set(J,Y))}function Q(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ee=null,ce={},u={},d=new WeakMap,f=[],m=null,g=!1,x=null,p=null,y=null,_=null,M=null,P=null,A=null,E=new be(0,0,0),D=0,w=!1,S=null,I=null,H=null,k=null,G=null,lt.set(0,0,s.canvas.width,s.canvas.height),ct.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Se,disable:ot,bindFramebuffer:Rt,drawBuffers:X,useProgram:he,setBlending:Ie,setMaterial:Ze,setFlipSided:L,setCullFace:We,setLineWidth:Ne,setPolygonOffset:Ge,setScissorTest:re,activeTexture:rt,bindTexture:we,unbindTexture:Ee,compressedTexImage2D:Je,compressedTexImage3D:Pt,texImage2D:j,texImage3D:V,updateUBOMapping:me,uniformBlockBinding:Ae,texStorage2D:F,texStorage3D:q,texSubImage2D:yt,texSubImage3D:Tt,compressedTexSubImage2D:T,compressedTexSubImage3D:v,scissor:ue,viewport:te,reset:Q}}function Iv(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=e.has("OCULUS_multiview")?e.get("OCULUS_multiview"):null,h=new le,u=new WeakMap;let d;const f=new WeakMap;let m=[],g=!1,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(T,v){return x?new OffscreenCanvas(T,v):Ns("canvas")}function y(T,v,F){let q=1;const j=Tt(T);if((j.width>F||j.height>F)&&(q=F/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const V=Math.floor(q*j.width),ue=Math.floor(q*j.height);d===void 0&&(d=p(V,ue));const te=v?p(V,ue):d;return te.width=V,te.height=ue,te.getContext("2d").drawImage(T,0,0,V,ue),ge("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+V+"x"+ue+")."),te}else return"data"in T&&ge("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function _(T){return T.generateMipmaps}function M(T){s.generateMipmap(T)}function P(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(T,v,F,q,j=!1){if(T!==null){if(s[T]!==void 0)return s[T];ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let V=v;if(v===s.RED&&(F===s.FLOAT&&(V=s.R32F),F===s.HALF_FLOAT&&(V=s.R16F),F===s.UNSIGNED_BYTE&&(V=s.R8)),v===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(V=s.R8UI),F===s.UNSIGNED_SHORT&&(V=s.R16UI),F===s.UNSIGNED_INT&&(V=s.R32UI),F===s.BYTE&&(V=s.R8I),F===s.SHORT&&(V=s.R16I),F===s.INT&&(V=s.R32I)),v===s.RG&&(F===s.FLOAT&&(V=s.RG32F),F===s.HALF_FLOAT&&(V=s.RG16F),F===s.UNSIGNED_BYTE&&(V=s.RG8)),v===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(V=s.RG8UI),F===s.UNSIGNED_SHORT&&(V=s.RG16UI),F===s.UNSIGNED_INT&&(V=s.RG32UI),F===s.BYTE&&(V=s.RG8I),F===s.SHORT&&(V=s.RG16I),F===s.INT&&(V=s.RG32I)),v===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(V=s.RGB8UI),F===s.UNSIGNED_SHORT&&(V=s.RGB16UI),F===s.UNSIGNED_INT&&(V=s.RGB32UI),F===s.BYTE&&(V=s.RGB8I),F===s.SHORT&&(V=s.RGB16I),F===s.INT&&(V=s.RGB32I)),v===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(V=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(V=s.RGBA16UI),F===s.UNSIGNED_INT&&(V=s.RGBA32UI),F===s.BYTE&&(V=s.RGBA8I),F===s.SHORT&&(V=s.RGBA16I),F===s.INT&&(V=s.RGBA32I)),v===s.RGB&&(F===s.UNSIGNED_INT_5_9_9_9_REV&&(V=s.RGB9_E5),F===s.UNSIGNED_INT_10F_11F_11F_REV&&(V=s.R11F_G11F_B10F)),v===s.RGBA){const ue=j?Fr:qe.getTransfer(q);F===s.FLOAT&&(V=s.RGBA32F),F===s.HALF_FLOAT&&(V=s.RGBA16F),F===s.UNSIGNED_BYTE&&(V=ue===nt?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(V=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(V=s.RGB5_A1)}return(V===s.R16F||V===s.R32F||V===s.RG16F||V===s.RG32F||V===s.RGBA16F||V===s.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function E(T,v){let F;return T?v===null||v===Zn||v===ji?F=s.DEPTH24_STENCIL8:v===zt?F=s.DEPTH32F_STENCIL8:v===Us&&(F=s.DEPTH24_STENCIL8,ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Zn||v===ji?F=s.DEPTH_COMPONENT24:v===zt?F=s.DEPTH_COMPONENT32F:v===Us&&(F=s.DEPTH_COMPONENT16),F}function D(T,v){return _(T)===!0||T.isFramebufferTexture&&T.minFilter!==Yt&&T.minFilter!==Ct?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function w(T){const v=T.target;v.removeEventListener("dispose",w),I(v),v.isVideoTexture&&u.delete(v)}function S(T){const v=T.target;v.removeEventListener("dispose",S),k(v)}function I(T){const v=n.get(T);if(v.__webglInit===void 0)return;const F=T.source,q=f.get(F);if(q){const j=q[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&H(T),Object.keys(q).length===0&&f.delete(F)}n.remove(T)}function H(T){const v=n.get(T);s.deleteTexture(v.__webglTexture);const F=T.source,q=f.get(F);delete q[v.__cacheKey],a.memory.textures--}function k(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let j=0;j<v.__webglFramebuffer[q].length;j++)s.deleteFramebuffer(v.__webglFramebuffer[q][j]);else s.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)s.deleteFramebuffer(v.__webglFramebuffer[q]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=T.textures;for(let q=0,j=F.length;q<j;q++){const V=n.get(F[q]);V.__webglTexture&&(s.deleteTexture(V.__webglTexture),a.memory.textures--),n.remove(F[q])}n.remove(T)}let G=0;function K(){G=0}function B(){const T=G;return T>=i.maxTextures&&ge("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),G+=1,T}function se(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function W(T,v){const F=n.get(T);if(T.isVideoTexture&&Pt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){const q=T.image;if(q===null)ge("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)ge("WebGLRenderer: Texture marked for update but image is incomplete");else if(he(F,T,v))return}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+v)}function ee(T,v){const F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){he(F,T,v);return}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+v)}function ce(T,v){const F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){he(F,T,v);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+v)}function ve(T,v){const F=n.get(T);if(T.version>0&&F.__version!==T.version){pe(F,T,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+v)}const He={[ao]:s.REPEAT,[en]:s.CLAMP_TO_EDGE,[oo]:s.MIRRORED_REPEAT},lt={[Yt]:s.NEAREST,[vd]:s.NEAREST_MIPMAP_NEAREST,[$s]:s.NEAREST_MIPMAP_LINEAR,[Ct]:s.LINEAR,[sa]:s.LINEAR_MIPMAP_NEAREST,[qn]:s.LINEAR_MIPMAP_LINEAR},ct={[Sd]:s.NEVER,[Rd]:s.ALWAYS,[wd]:s.LESS,[Uh]:s.LEQUAL,[Td]:s.EQUAL,[Cd]:s.GEQUAL,[Ed]:s.GREATER,[Ad]:s.NOTEQUAL};function je(T,v){if(v.type===zt&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Ct||v.magFilter===sa||v.magFilter===$s||v.magFilter===qn||v.minFilter===Ct||v.minFilter===sa||v.minFilter===$s||v.minFilter===qn)&&ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,He[v.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,He[v.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,He[v.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,lt[v.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,lt[v.minFilter]),v.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,ct[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Yt||v.minFilter!==$s&&v.minFilter!==qn||v.type===zt&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function gt(T,v){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",w));const q=v.source;let j=f.get(q);j===void 0&&(j={},f.set(q,j));const V=se(v);if(V!==T.__cacheKey){j[V]===void 0&&(j[V]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),j[V].usedTimes++;const ue=j[T.__cacheKey];ue!==void 0&&(j[T.__cacheKey].usedTimes--,ue.usedTimes===0&&H(v)),T.__cacheKey=V,T.__webglTexture=j[V].texture}return F}function Se(T,v,F){return Math.floor(Math.floor(T/F)/v)}function ot(T,v,F,q){const V=T.updateRanges;if(V.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,F,q,v.data);else{V.sort((Q,C)=>Q.start-C.start);let ue=0;for(let Q=1;Q<V.length;Q++){const C=V[ue],J=V[Q],$=C.start+C.count,Y=Se(J.start,v.width,4),oe=Se(C.start,v.width,4);J.start<=$+1&&Y===oe&&Se(J.start+J.count-1,v.width,4)===Y?C.count=Math.max(C.count,J.start+J.count-C.start):(++ue,V[ue]=J)}V.length=ue+1;const te=s.getParameter(s.UNPACK_ROW_LENGTH),me=s.getParameter(s.UNPACK_SKIP_PIXELS),Ae=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let Q=0,C=V.length;Q<C;Q++){const J=V[Q],$=Math.floor(J.start/4),Y=Math.ceil(J.count/4),oe=$%v.width,Z=Math.floor($/v.width),Ce=Y,De=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,oe),s.pixelStorei(s.UNPACK_SKIP_ROWS,Z),t.texSubImage2D(s.TEXTURE_2D,0,oe,Z,Ce,De,F,q,v.data)}T.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,te),s.pixelStorei(s.UNPACK_SKIP_PIXELS,me),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ae)}}function Rt(T){g=T}function X(){const T=g;g=!1;for(const v of m)he(v.textureProperties,v.texture,v.slot),v.texture.isPendingDeferredUpload=!1;m=[],g=T}function he(T,v,F){if(g)return v.isPendingDeferredUpload||(v.isPendingDeferredUpload=!0,m.push({textureProperties:T,texture:v,slot:F})),!1;let q=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=s.TEXTURE_3D);const j=gt(T,v),V=v.source;t.bindTexture(q,T.__webglTexture,s.TEXTURE0+F);const ue=n.get(V);if(V.version!==ue.__version||j===!0){t.activeTexture(s.TEXTURE0+F);const te=qe.getPrimaries(qe.workingColorSpace),me=v.colorSpace===Xn?null:qe.getPrimaries(v.colorSpace),Ae=v.colorSpace===Xn||te===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let Q=y(v.image,!1,i.maxTextureSize);Q=yt(v,Q);const C=r.convert(v.format,v.colorSpace),J=r.convert(v.type);let $=A(v.internalFormat,C,J,v.colorSpace,v.isVideoTexture);je(q,v);let Y;const oe=v.mipmaps,Z=v.isVideoTexture!==!0,Ce=ue.__version===void 0||j===!0,De=V.dataReady,Ke=D(v,Q);if(v.isDepthTexture)$=E(v.format===Ji,v.type),Ce&&(Z?t.texStorage2D(s.TEXTURE_2D,1,$,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,$,Q.width,Q.height,0,C,J,null));else if(v.isDataTexture)if(oe.length>0){Z&&Ce&&t.texStorage2D(s.TEXTURE_2D,Ke,$,oe[0].width,oe[0].height);for(let ie=0,de=oe.length;ie<de;ie++)Y=oe[ie],Z?De&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,Y.width,Y.height,C,J,Y.data):t.texImage2D(s.TEXTURE_2D,ie,$,Y.width,Y.height,0,C,J,Y.data);v.generateMipmaps=!1}else Z?(Ce&&t.texStorage2D(s.TEXTURE_2D,Ke,$,Q.width,Q.height),De&&ot(v,Q,C,J)):t.texImage2D(s.TEXTURE_2D,0,$,Q.width,Q.height,0,C,J,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Z&&Ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ke,$,oe[0].width,oe[0].height,Q.depth);for(let ie=0,de=oe.length;ie<de;ie++)if(Y=oe[ie],v.format!==Vt)if(C!==null)if(Z){if(De)if(v.layerUpdates.size>0){const Be=Fc(Y.width,Y.height,v.format,v.type);for(const ut of v.layerUpdates){const Jt=Y.data.subarray(ut*Be/Y.data.BYTES_PER_ELEMENT,(ut+1)*Be/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,ut,Y.width,Y.height,1,C,Jt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,Y.width,Y.height,Q.depth,C,Y.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,$,Y.width,Y.height,Q.depth,0,Y.data,0,0);else ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Z?De&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,Y.width,Y.height,Q.depth,C,J,Y.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,$,Y.width,Y.height,Q.depth,0,C,J,Y.data)}else{Z&&Ce&&t.texStorage2D(s.TEXTURE_2D,Ke,$,oe[0].width,oe[0].height);for(let ie=0,de=oe.length;ie<de;ie++)Y=oe[ie],v.format!==Vt?C!==null?Z?De&&t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,Y.width,Y.height,C,Y.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,$,Y.width,Y.height,0,Y.data):ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?De&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,Y.width,Y.height,C,J,Y.data):t.texImage2D(s.TEXTURE_2D,ie,$,Y.width,Y.height,0,C,J,Y.data)}else if(v.isDataArrayTexture)if(Z){if(Ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ke,$,Q.width,Q.height,Q.depth),De)if(v.layerUpdates.size>0){const ie=Fc(Q.width,Q.height,v.format,v.type);for(const de of v.layerUpdates){const Be=Q.data.subarray(de*ie/Q.data.BYTES_PER_ELEMENT,(de+1)*ie/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,de,Q.width,Q.height,1,C,J,Be)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,C,J,Q.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,$,Q.width,Q.height,Q.depth,0,C,J,Q.data);else if(v.isData3DTexture)Z?(Ce&&t.texStorage3D(s.TEXTURE_3D,Ke,$,Q.width,Q.height,Q.depth),De&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,C,J,Q.data)):t.texImage3D(s.TEXTURE_3D,0,$,Q.width,Q.height,Q.depth,0,C,J,Q.data);else if(v.isFramebufferTexture){if(Ce)if(Z)t.texStorage2D(s.TEXTURE_2D,Ke,$,Q.width,Q.height);else{let ie=Q.width,de=Q.height;for(let Be=0;Be<Ke;Be++)t.texImage2D(s.TEXTURE_2D,Be,$,ie,de,0,C,J,null),ie>>=1,de>>=1}}else if(oe.length>0){if(Z&&Ce){const ie=Tt(oe[0]);t.texStorage2D(s.TEXTURE_2D,Ke,$,ie.width,ie.height)}for(let ie=0,de=oe.length;ie<de;ie++)Y=oe[ie],Z?De&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,C,J,Y):t.texImage2D(s.TEXTURE_2D,ie,$,C,J,Y);v.generateMipmaps=!1}else if(Z){if(Ce){const ie=Tt(Q);t.texStorage2D(s.TEXTURE_2D,Ke,$,ie.width,ie.height)}De&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,C,J,Q)}else t.texImage2D(s.TEXTURE_2D,0,$,C,J,Q);_(v)&&M(q),ue.__version=V.version,v.onUpdate&&v.onUpdate(v)}return T.__version=v.version,!0}function pe(T,v,F){if(v.image.length!==6)return;const q=gt(T,v),j=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+F);const V=n.get(j);if(j.version!==V.__version||q===!0){t.activeTexture(s.TEXTURE0+F);const ue=qe.getPrimaries(qe.workingColorSpace),te=v.colorSpace===Xn?null:qe.getPrimaries(v.colorSpace),me=v.colorSpace===Xn||ue===te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ae=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,C=[];for(let de=0;de<6;de++)!Ae&&!Q?C[de]=y(v.image[de],!0,i.maxCubemapSize):C[de]=Q?v.image[de].image:v.image[de],C[de]=yt(v,C[de]);const J=C[0],$=r.convert(v.format,v.colorSpace),Y=r.convert(v.type),oe=A(v.internalFormat,$,Y,v.colorSpace),Z=v.isVideoTexture!==!0,Ce=V.__version===void 0||q===!0,De=j.dataReady;let Ke=D(v,J);je(s.TEXTURE_CUBE_MAP,v);let ie;if(Ae){Z&&Ce&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ke,oe,J.width,J.height);for(let de=0;de<6;de++){ie=C[de].mipmaps;for(let Be=0;Be<ie.length;Be++){const ut=ie[Be];v.format!==Vt?$!==null?Z?De&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Be,0,0,ut.width,ut.height,$,ut.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Be,oe,ut.width,ut.height,0,ut.data):ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?De&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Be,0,0,ut.width,ut.height,$,Y,ut.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Be,oe,ut.width,ut.height,0,$,Y,ut.data)}}}else{if(ie=v.mipmaps,Z&&Ce){ie.length>0&&Ke++;const de=Tt(C[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ke,oe,de.width,de.height)}for(let de=0;de<6;de++)if(Q){Z?De&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,C[de].width,C[de].height,$,Y,C[de].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,oe,C[de].width,C[de].height,0,$,Y,C[de].data);for(let Be=0;Be<ie.length;Be++){const Jt=ie[Be].image[de].image;Z?De&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Be+1,0,0,Jt.width,Jt.height,$,Y,Jt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Be+1,oe,Jt.width,Jt.height,0,$,Y,Jt.data)}}else{Z?De&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,$,Y,C[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,oe,$,Y,C[de]);for(let Be=0;Be<ie.length;Be++){const ut=ie[Be];Z?De&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Be+1,0,0,$,Y,ut.image[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Be+1,oe,$,Y,ut.image[de])}}}_(v)&&M(s.TEXTURE_CUBE_MAP),V.__version=j.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Le(T,v,F,q,j,V){const ue=r.convert(F.format,F.colorSpace),te=r.convert(F.type),me=A(F.internalFormat,ue,te,F.colorSpace),Ae=n.get(v),Q=n.get(F);if(Q.__renderTarget=v,!Ae.__hasExternalTextures){const J=Math.max(1,v.width>>V),$=Math.max(1,v.height>>V);v.isWebGLMultiviewRenderTarget===!0?t.texStorage3D(s.TEXTURE_2D_ARRAY,0,me,v.width,v.height,v.numViews):j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?t.texImage3D(j,V,me,J,$,v.depth,0,ue,te,null):t.texImage2D(j,V,me,J,$,0,ue,te,null)}t.bindFramebuffer(s.FRAMEBUFFER,T);const C=Je(v);v.isWebGLMultiviewRenderTarget===!0?C?l.framebufferTextureMultisampleMultiviewOVR(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,Q.__webglTexture,0,Ee(v),0,v.numViews):l.framebufferTextureMultiviewOVR(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,Q.__webglTexture,0,0,v.numViews):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&(C?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,j,Q.__webglTexture,0,Ee(v)):s.framebufferTexture2D(s.FRAMEBUFFER,q,j,Q.__webglTexture,V)),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ie(T,v,F){if(s.bindRenderbuffer(s.RENDERBUFFER,T),v.isWebGLMultiviewRenderTarget===!0){const q=Je(v),j=v.numViews,V=v.depthTexture;let ue=s.DEPTH_COMPONENT24,te=s.DEPTH_ATTACHMENT;V&&V.isDepthTexture&&(V.type===zt?ue=s.DEPTH_COMPONENT32F:V.type===ji&&(ue=s.DEPTH24_STENCIL8,te=s.DEPTH_STENCIL_ATTACHMENT));let me=n.get(v.depthTexture).__webglTexture;me===void 0&&(me=s.createTexture(),s.bindTexture(s.TEXTURE_2D_ARRAY,me),s.texStorage3D(s.TEXTURE_2D_ARRAY,1,ue,v.width,v.height,j)),q?l.framebufferTextureMultisampleMultiviewOVR(s.FRAMEBUFFER,te,me,0,Ee(v),0,j):l.framebufferTextureMultiviewOVR(s.FRAMEBUFFER,te,me,0,0,j)}else if(v.depthBuffer){const q=v.depthTexture,j=q&&q.isDepthTexture?q.type:null,V=E(v.stencilBuffer,j),ue=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=Ee(v);Je(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,V,v.width,v.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,te,V,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,V,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ue,s.RENDERBUFFER,T)}else{const q=v.textures;for(let j=0;j<q.length;j++){const V=q[j],ue=r.convert(V.format,V.colorSpace),te=r.convert(V.type),me=A(V.internalFormat,ue,te,V.colorSpace),Ae=Ee(v);F&&Je(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,me,v.width,v.height):Je(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,me,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,me,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ze(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(v.depthTexture);q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),v.depthTexture.image.depth!=1?ee(v.depthTexture,0):W(v.depthTexture,0);const j=q.__webglTexture,V=Ee(v);if(v.isWebGLMultiviewRenderTarget===!0){const ue=Je(v),te=v.numViews;if(v.depthTexture.format===ts)ue?l.framebufferTextureMultisampleMultiviewOVR(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,j,0,V,0,te):l.framebufferTextureMultiviewOVR(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,j,0,0,te);else if(v.depthTexture.format===Ji)ue?l.framebufferTextureMultisampleMultiviewOVR(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,j,0,V,0,te):l.framebufferTextureMultiviewOVR(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,j,0,0,te);else throw new Error("Unknown depthTexture format")}else if(v.depthTexture.format===ts)Je(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,V):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(v.depthTexture.format===Ji)Je(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,V):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function L(T){const v=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){const j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=q}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const q=T.texture.mipmaps;q&&q.length>0?Ze(v.__webglFramebuffer[0],T):Ze(v.__webglFramebuffer,T)}else if(F){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=s.createRenderbuffer(),Ie(v.__webglDepthbuffer[q],T,!1);else{const j=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,V=v.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,V),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,V)}}else{const q=T.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Ie(v.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,V=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,V),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,V)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function We(T,v,F){const q=n.get(T);v!==void 0&&Le(q.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&L(T)}function Ne(T){const v=T.texture,F=n.get(T),q=n.get(v);T.addEventListener("dispose",S);const j=T.textures,V=T.isWebGLCubeRenderTarget===!0,ue=j.length>1;if(ue||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=v.version,a.memory.textures++),V){F.__webglFramebuffer=[];for(let te=0;te<6;te++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[te]=[];for(let me=0;me<v.mipmaps.length;me++)F.__webglFramebuffer[te][me]=s.createFramebuffer()}else F.__webglFramebuffer[te]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let te=0;te<v.mipmaps.length;te++)F.__webglFramebuffer[te]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(ue)for(let te=0,me=j.length;te<me;te++){const Ae=n.get(j[te]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&Je(T)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let te=0;te<j.length;te++){const me=j[te];F.__webglColorRenderbuffer[te]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[te]);const Ae=r.convert(me.format,me.colorSpace),Q=r.convert(me.type),C=A(me.internalFormat,Ae,Q,me.colorSpace,T.isXRRenderTarget===!0),J=Ee(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,J,C,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+te,s.RENDERBUFFER,F.__webglColorRenderbuffer[te])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Ie(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(V){t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),je(s.TEXTURE_CUBE_MAP,v);for(let te=0;te<6;te++)if(v.mipmaps&&v.mipmaps.length>0)for(let me=0;me<v.mipmaps.length;me++)Le(F.__webglFramebuffer[te][me],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+te,me);else Le(F.__webglFramebuffer[te],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);_(v)&&M(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let te=0,me=j.length;te<me;te++){const Ae=j[te],Q=n.get(Ae);let C=s.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(C=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(C,Q.__webglTexture),je(C,Ae),Le(F.__webglFramebuffer,T,Ae,s.COLOR_ATTACHMENT0+te,C,0),_(Ae)&&M(C)}t.unbindTexture()}else{let te=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(te=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),T.isWebGLMultiviewRenderTarget===!0&&(te=s.TEXTURE_2D_ARRAY),t.bindTexture(te,q.__webglTexture),je(te,v),v.mipmaps&&v.mipmaps.length>0)for(let me=0;me<v.mipmaps.length;me++)Le(F.__webglFramebuffer[me],T,v,s.COLOR_ATTACHMENT0,te,me);else Le(F.__webglFramebuffer,T,v,s.COLOR_ATTACHMENT0,te,0);_(v)&&M(te),t.unbindTexture()}(T.depthBuffer||T.isWebGLMultiviewRenderTarget===!0)&&this.setupDepthRenderbuffer(T)}function Ge(T){const v=T.textures;for(let F=0,q=v.length;F<q;F++){const j=v[F];if(_(j)){const V=P(T),ue=n.get(j).__webglTexture;t.bindTexture(V,ue),M(V),t.unbindTexture()}}}const re=[],rt=[];function we(T){if(T.samples>0){if(Je(T)===!1){const v=T.textures,F=T.width,q=T.height;let j=s.COLOR_BUFFER_BIT;const V=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=n.get(T),te=v.length>1;if(te)for(let Ae=0;Ae<v.length;Ae++)t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const me=T.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Ae=0;Ae<v.length;Ae++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),te){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ue.__webglColorRenderbuffer[Ae]);const Q=n.get(v[Ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Q,0)}s.blitFramebuffer(0,0,F,q,0,0,F,q,j,s.NEAREST),c===!0&&(re.length=0,rt.length=0,re.push(s.COLOR_ATTACHMENT0+Ae),T.depthBuffer&&T.resolveDepthBuffer===!1&&(re.push(V),rt.push(V),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,rt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),te)for(let Ae=0;Ae<v.length;Ae++){t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,ue.__webglColorRenderbuffer[Ae]);const Q=n.get(v[Ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,Q,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const v=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function Ee(T){return Math.min(i.maxSamples,T.samples)}function Je(T){const v=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Pt(T){const v=a.render.frame;u.get(T)!==v&&(u.set(T,v),T.update())}function yt(T,v){const F=T.colorSpace,q=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==ns&&F!==Xn&&(qe.getTransfer(F)===nt?(q!==Vt||j!==gn)&&ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ke("WebGLTextures: Unsupported texture color space:",F)),v}function Tt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(h.width=T.naturalWidth||T.width,h.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(h.width=T.displayWidth,h.height=T.displayHeight):(h.width=T.width,h.height=T.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=K,this.setTexture2D=W,this.setTexture2DArray=ee,this.setTexture3D=ce,this.setTextureCube=ve,this.rebindTextures=We,this.uploadTexture=he,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=we,this.setupDepthTexture=Ze,this.setupDepthRenderbuffer=L,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Je,this.runDeferredUploads=X,this.setDeferTextureUploads=Rt}function Lv(s,e){function t(n,i=Xn){let r;const a=qe.getTransfer(i);if(n===gn)return s.UNSIGNED_BYTE;if(n===Zo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Qo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ph)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ih)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ch)return s.BYTE;if(n===Rh)return s.SHORT;if(n===Us)return s.UNSIGNED_SHORT;if(n===Ko)return s.INT;if(n===Zn)return s.UNSIGNED_INT;if(n===zt)return s.FLOAT;if(n===as)return s.HALF_FLOAT;if(n===Lh)return s.ALPHA;if(n===Dh)return s.RGB;if(n===Vt)return s.RGBA;if(n===ts)return s.DEPTH_COMPONENT;if(n===Ji)return s.DEPTH_STENCIL;if(n===el)return s.RED;if(n===Jr)return s.RED_INTEGER;if(n===tl)return s.RG;if(n===nl)return s.RG_INTEGER;if(n===il)return s.RGBA_INTEGER;if(n===Rr||n===Pr||n===Ir||n===Lr)if(a===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lo||n===co||n===ho||n===uo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===lo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===co)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ho)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fo||n===po||n===mo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fo||n===po)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===mo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xo||n===go||n===vo||n===_o||n===yo||n===bo||n===Mo||n===So||n===wo||n===To||n===Eo||n===Ao||n===Co||n===Ro)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===go)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_o)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===So)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===To)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ao)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Co)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ro)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Po||n===Io||n===Lo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Po)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Io)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Do||n===Uo||n===No||n===Fo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Do)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Uo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===No)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class vu extends Qn{constructor(e,t,n,i={}){super(e,t,i),this.depthBuffer=!1,this.stencilBuffer=!1,this.numViews=n}copy(e){return super.copy(e),this.numViews=e.numViews,this}}vu.prototype.isWebGLMultiviewRenderTarget=!0;const Dv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Uv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Nv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Kh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Nn({vertexShader:Dv,fragmentShader:Uv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new Fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fv extends os{constructor(e,t,n,i){super();const r=this;let a=null,o=1;var c=null;let l=null,h="local-floor",u=1,d=null,f=null;var m=[];let g=null,x=null,p=null,y=null;const _=typeof XRWebGLBinding<"u",M=new Nv,P={},A=t.getContextAttributes();let E=null,D=null;const w=[],S=[],I=new le;let H=null;const k=new Bt;k.viewport=new $e;const G=new Bt;G.viewport=new $e;const K=[k,G],B=new kp;let se=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.layersEnabled=!1,this.isPresenting=!1,this.isMultiview=!1,this.getCameraPose=function(){return f},this.getController=function(X){let he=w[X];return he===void 0&&(he=new Ea,w[X]=he),he.getTargetRaySpace()},this.getControllerGrip=function(X){let he=w[X];return he===void 0&&(he=new Ea,w[X]=he),he.getGripSpace()},this.getHand=function(X){let he=w[X];return he===void 0&&(he=new Ea,w[X]=he),he.getHandSpace()};function ee(X){const he=S.indexOf(X.inputSource);if(he===-1)return;const pe=w[he];pe!==void 0&&(pe.update(X.inputSource,X.frame,d||l),pe.dispatchEvent({type:X.type,data:X.inputSource}))}function ce(){a.removeEventListener("select",ee),a.removeEventListener("selectstart",ee),a.removeEventListener("selectend",ee),a.removeEventListener("squeeze",ee),a.removeEventListener("squeezestart",ee),a.removeEventListener("squeezeend",ee),a.removeEventListener("end",ce),a.removeEventListener("inputsourceschange",ve);for(let X=0;X<w.length;X++){const he=S[X];he!==null&&(S[X]=null,w[X].disconnect(he))}se=null,W=null,M.reset();for(const X in P)delete P[X];r.isPresenting=!1,e.setRenderTarget(E),p=null,x=null,g=null,a=null,D=null,Rt.stop(),e.setPixelRatio(H),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){o=X,r.isPresenting===!0&&ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){h=X,r.isPresenting===!0&&ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(X){d=X},this.getBaseLayer=function(){return x!==null?x:p},this.getBinding=function(){return g===null&&_&&(g=new XRWebGLBinding(a,t)),g},this.getFrame=function(){return y},this.getRenderTarget=function(){return D},this.getSession=function(){return a},this.setSession=async function(X){if(a=X,a!==null){if(E=e.getRenderTarget(),a.addEventListener("select",ee),a.addEventListener("selectstart",ee),a.addEventListener("selectend",ee),a.addEventListener("squeeze",ee),a.addEventListener("squeezestart",ee),a.addEventListener("squeezeend",ee),a.addEventListener("end",ce),a.addEventListener("inputsourceschange",ve),A.xrCompatible!==!0&&await t.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(I),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Le=null,Ie=null;A.depth&&(Ie=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=A.stencil?Ji:ts,Le=A.stencil?ji:Zn),r.isMultiview=i&&n.has("OCULUS_multiview");const Ze={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:o};r.isMultiview&&(Ze.textureType="texture-array"),g=this.getBinding(),x=g.createProjectionLayer(Ze),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1);const L={format:Vt,type:gn,depthTexture:new Jh(x.textureWidth,x.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1};if(r.isMultiview){const We=n.get("OCULUS_multiview");this.maxNumViews=t.getParameter(We.MAX_VIEWS_OVR),D=new vu(x.textureWidth,x.textureHeight,2,L)}else D=new Qn(x.textureWidth,x.textureHeight,L)}else{const pe={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(a,t,pe),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),D=new Qn(p.framebufferWidth,p.framebufferHeight,{format:Vt,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(u),d=null,l=await a.requestReferenceSpace(h),Rt.setContext(a),Rt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.addLayer=function(X){!window.XRWebGLBinding||!this.layersEnabled||!a||(m.push(X),this.updateLayers())},this.removeLayer=function(X){m.splice(m.indexOf(X),1),!(!window.XRWebGLBinding||!this.layersEnabled||!a)&&this.updateLayers()},this.updateLayers=function(){var X=m.map(function(he){return he});X.unshift(a.renderState.layers[0]),a.updateRenderState({layers:X})},this.getDepthTexture=function(){return M.getDepthTexture()};function ve(X){for(let he=0;he<X.removed.length;he++){const pe=X.removed[he],Le=S.indexOf(pe);Le>=0&&(S[Le]=null,w[Le].disconnect(pe))}for(let he=0;he<X.added.length;he++){const pe=X.added[he];let Le=S.indexOf(pe);if(Le===-1){for(let Ze=0;Ze<w.length;Ze++)if(Ze>=S.length){S.push(pe),Le=Ze;break}else if(S[Ze]===null){S[Ze]=pe,Le=Ze;break}if(Le===-1)break}const Ie=w[Le];Ie&&Ie.connect(pe)}}const He=new R,lt=new R;function ct(X,he,pe){He.setFromMatrixPosition(he.matrixWorld),lt.setFromMatrixPosition(pe.matrixWorld);const Le=He.distanceTo(lt),Ie=he.projectionMatrix.elements,Ze=pe.projectionMatrix.elements,L=Ie[14]/(Ie[10]-1),We=Ie[14]/(Ie[10]+1),Ne=(Ie[9]+1)/Ie[5],Ge=(Ie[9]-1)/Ie[5],re=(Ie[8]-1)/Ie[0],rt=(Ze[8]+1)/Ze[0],we=L*re,Ee=L*rt,Je=Le/(-re+rt),Pt=Je*-re;if(he.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Pt),X.translateZ(Je),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ie[10]===-1)X.projectionMatrix.copy(he.projectionMatrix),X.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const yt=L+Je,Tt=We+Je,T=we-Pt,v=Ee+(Le-Pt),F=Ne*We/Tt*yt,q=Ge*We/Tt*yt;X.projectionMatrix.makePerspective(T,v,F,q,yt,Tt),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function je(X,he){he===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(he.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.setPoseTarget=function(X){X!==void 0&&(c=X)},this.updateCamera=function(X){if(a===null)return;let he=X.near,pe=X.far;M.texture!==null&&(M.depthNear>0&&(he=M.depthNear),M.depthFar>0&&(pe=M.depthFar)),B.near=G.near=k.near=he,B.far=G.far=k.far=pe,(se!==B.near||W!==B.far)&&(a.updateRenderState({depthNear:B.near,depthFar:B.far}),se=B.near,W=B.far),B.layers.mask=X.layers.mask|6,k.layers.mask=B.layers.mask&3,G.layers.mask=B.layers.mask&5;const Le=B.cameras;var Ie=c||X;const Ze=Ie.parent;je(B,Ze);for(let L=0;L<Le.length;L++)je(Le[L],Ze);Le.length===2?ct(B,k,G):B.projectionMatrix.copy(k.projectionMatrix),gt(X,B,Ie)};function gt(X,he,pe){he.matrixWorld.decompose(he.position,he.quaternion,he.scale),pe.parent===null?pe.matrix.copy(he.matrixWorld):(pe.matrix.copy(pe.parent.matrixWorld),pe.matrix.invert(),pe.matrix.multiply(he.matrixWorld)),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.updateMatrixWorld(!0),X.projectionMatrix.copy(he.projectionMatrix),X.projectionMatrixInverse.copy(he.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=is*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(x===null&&p===null))return u},this.setFoveation=function(X){u=X,x!==null&&(x.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(B)},this.getCameraTexture=function(X){return P[X]};let Se=null;function ot(X,he){if(f=he.getViewerPose(d||l),y=he,f!==null){const pe=f.views;p!==null&&(e.setRenderTargetFramebuffer(D,p.framebuffer),e.setRenderTarget(D));let Le=!1;pe.length!==B.cameras.length&&(B.cameras.length=0,Le=!0);for(let We=0;We<pe.length;We++){const Ne=pe[We];let Ge=null;if(p!==null)Ge=p.getViewport(Ne);else{const rt=g.getViewSubImage(x,Ne);Ge=rt.viewport,We===0&&(e.setRenderTargetTextures(D,rt.colorTexture,rt.depthStencilTexture),e.setRenderTarget(D))}let re=K[We];re===void 0&&(re=new Bt,re.layers.enable(We),re.viewport=new $e,K[We]=re),re.matrix.fromArray(Ne.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Ne.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),We===0&&(B.matrix.copy(re.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Le===!0&&B.cameras.push(re)}const Ie=a.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&_){g=r.getBinding();const We=g.getDepthInformation(pe[0]);We&&We.isValid&&We.texture&&M.init(We,a.renderState)}if(Ie&&Ie.includes("camera-access")&&_){e.state.unbindTexture(),g=r.getBinding();for(let We=0;We<pe.length;We++){const Ne=pe[We].camera;if(Ne){let Ge=P[Ne];Ge||(Ge=new Kh,P[Ne]=Ge);const re=g.getCameraImage(Ne);Ge.sourceTexture=re}}}}for(let pe=0;pe<w.length;pe++){const Le=S[pe],Ie=w[pe];Le!==null&&Ie!==void 0&&Ie.update(Le,he,d||l)}Se&&Se(X,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),y=null}const Rt=new fu;Rt.setAnimationLoop(ot),this.setAnimationLoop=function(X){Se=X},this.dispose=function(){}}}const mi=new sn,Ov=new Ue;function kv(s,e){function t(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,zh(s)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function i(x,p,y,_,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(x,p):p.isMeshToonMaterial?(r(x,p),u(x,p)):p.isMeshPhongMaterial?(r(x,p),h(x,p)):p.isMeshStandardMaterial?(r(x,p),d(x,p),p.isMeshPhysicalMaterial&&f(x,p,M)):p.isMeshMatcapMaterial?(r(x,p),m(x,p)):p.isMeshDepthMaterial?r(x,p):p.isMeshDistanceMaterial?(r(x,p),g(x,p)):p.isMeshNormalMaterial?r(x,p):p.isLineBasicMaterial?(a(x,p),p.isLineDashedMaterial&&o(x,p)):p.isPointsMaterial?c(x,p,y,_):p.isSpriteMaterial?l(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,t(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===Ht&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,t(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===Ht&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,t(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,t(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);const y=e.get(p),_=y.envMap,M=y.envMapRotation;_&&(x.envMap.value=_,mi.copy(M),mi.x*=-1,mi.y*=-1,mi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),x.envMapRotation.value.setFromMatrix4(Ov.makeRotationFromEuler(mi)),x.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,x.aoMapTransform))}function a(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform))}function o(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function c(x,p,y,_){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*y,x.scale.value=_*.5,p.map&&(x.map.value=p.map,t(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function l(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function h(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function u(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function d(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function f(x,p,y){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=y.texture,x.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,p){p.matcap&&(x.matcap.value=p.matcap)}function g(x,p){const y=e.get(p).light;x.referencePosition.value.setFromMatrixPosition(y.matrixWorld),x.nearDistance.value=y.shadow.camera.near,x.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Bv(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,_){const M=_.program;n.uniformBlockBinding(y,M)}function l(y,_){let M=i[y.id];M===void 0&&(m(y),M=h(y),i[y.id]=M,y.addEventListener("dispose",x));const P=_.program;n.updateUBOMapping(y,P);const A=e.render.frame;r[y.id]!==A&&(d(y),r[y.id]=A)}function h(y){const _=u();y.__bindingPointIndex=_;const M=s.createBuffer(),P=y.__size,A=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,P,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,M),M}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=i[y.id],M=y.uniforms,P=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let A=0,E=M.length;A<E;A++){const D=Array.isArray(M[A])?M[A]:[M[A]];for(let w=0,S=D.length;w<S;w++){const I=D[w];if(f(I,A,w,P)===!0){const H=I.__offset,k=Array.isArray(I.value)?I.value:[I.value];let G=0;for(let K=0;K<k.length;K++){const B=k[K],se=g(B);typeof B=="number"||typeof B=="boolean"?(I.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,H+G,I.__data)):B.isMatrix3?(I.__data[0]=B.elements[0],I.__data[1]=B.elements[1],I.__data[2]=B.elements[2],I.__data[3]=0,I.__data[4]=B.elements[3],I.__data[5]=B.elements[4],I.__data[6]=B.elements[5],I.__data[7]=0,I.__data[8]=B.elements[6],I.__data[9]=B.elements[7],I.__data[10]=B.elements[8],I.__data[11]=0):(B.toArray(I.__data,G),G+=se.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,_,M,P){const A=y.value,E=_+"_"+M;if(P[E]===void 0)return typeof A=="number"||typeof A=="boolean"?P[E]=A:P[E]=A.clone(),!0;{const D=P[E];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return P[E]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function m(y){const _=y.uniforms;let M=0;const P=16;for(let E=0,D=_.length;E<D;E++){const w=Array.isArray(_[E])?_[E]:[_[E]];for(let S=0,I=w.length;S<I;S++){const H=w[S],k=Array.isArray(H.value)?H.value:[H.value];for(let G=0,K=k.length;G<K;G++){const B=k[G],se=g(B),W=M%P,ee=W%se.boundary,ce=W+ee;M+=ee,ce!==0&&P-ce<se.storage&&(M+=P-ce),H.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=se.storage}}}const A=M%P;return A>0&&(M+=P-A),y.__size=M,y.__cache={},this}function g(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ge("WebGLRenderer: Unsupported uniform value type.",y),_}function x(y){const _=y.target;_.removeEventListener("dispose",x);const M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}const zv=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let An=null;function Vv(){return An===null&&(An=new yi(zv,32,32,tl,as),An.minFilter=Ct,An.magFilter=Ct,An.wrapS=en,An.wrapT=en,An.generateMipmaps=!1,An.needsUpdate=!0),An}class Hv{constructor(e={}){const{canvas:t=Pd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,multiviewStereo:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Set([il,nl,Jr]),x=new Set([gn,Zn,Us,ji,Zo,Qo]),p=new Uint32Array(4),y=new Int32Array(4);let _=null,M=null;const P=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let D=!1;this._outputColorSpace=$t;let w=0,S=0,I=null,H=-1,k=null;const G=new $e,K=new $e;let B=null;const se=new be(0);let W=0,ee=t.width,ce=t.height,ve=1,He=null,lt=null;const ct=new $e(0,0,ee,ce),je=new $e(0,0,ee,ce);let gt=!1;const Se=new Gs;let ot=!1,Rt=!1;const X=new Ue,he=new R,pe=new $e,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function Ze(){return I===null?ve:1}let L=n;function We(b,U){return t.getContext(b,U)}try{const b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jo}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Ke,!1),L===null){const U="webgl2";if(L=We(U,b),L===null)throw We(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw b("WebGLRenderer: "+b.message),b}let Ne,Ge,re,rt,we,Ee,Je,Pt,yt,Tt,T,v,F,q,j,V,ue,te,me,Ae,Q,C,J,$,Y;function oe(){Ne=new jx(L),Ne.init(),J=new Lv(L,Ne),Ge=new zx(L,Ne,e,J),re=new Pv(L,Ne),Ge.reversedDepthBuffer&&d&&re.buffers.depth.setReversed(!0),rt=new Zx(L),we=new gv,Ee=new Iv(L,Ne,re,we,Ge,J,rt),Je=new Hx(E),Pt=new Yx(E),yt=new nm(L),$=new kx(L,yt),Tt=new Jx(L,yt,rt,$),T=new tg(L,Tt,yt,rt),Ae=new Qx(L,Ge,Ee),V=new Vx(we),v=new xv(E,Je,Pt,Ne,Ge,$,V),F=new kv(E,we),q=new _v,j=new Tv(Ne),me=new Ox(E,Je,Pt,re,T,m,c),te=new eg(E,Ne,L),ue=new Cv(E,T,Ge),Y=new Bv(L,rt,Ge,re),Q=new Bx(L,Ne,rt),C=new Kx(L,Ne,rt),rt.programs=v.programs,E.capabilities=Ge,E.extensions=Ne,E.properties=we,E.renderLists=q,E.shadowMap=ue,E.state=re,E.info=rt}oe();const Z=new Fv(E,L,Ne,f);this.xr=Z,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=Ne.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ne.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(b){b!==void 0&&(ve=b,this.setSize(ee,ce,!1))},this.getSize=function(b){return b.set(ee,ce)},this.setSize=function(b,U,O=!0){if(Z.isPresenting){ge("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=b,ce=U,t.width=Math.floor(b*ve),t.height=Math.floor(U*ve),O===!0&&(t.style.width=b+"px",t.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(ee*ve,ce*ve).floor()},this.setDrawingBufferSize=function(b,U,O){ee=b,ce=U,ve=O,t.width=Math.floor(b*O),t.height=Math.floor(U*O),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(G)},this.getViewport=function(b){return b.copy(ct)},this.setViewport=function(b,U,O,z){b.isVector4?ct.set(b.x,b.y,b.z,b.w):ct.set(b,U,O,z),re.viewport(G.copy(ct).multiplyScalar(ve).round())},this.getScissor=function(b){return b.copy(je)},this.setScissor=function(b,U,O,z){b.isVector4?je.set(b.x,b.y,b.z,b.w):je.set(b,U,O,z),re.scissor(K.copy(je).multiplyScalar(ve).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(b){re.setScissorTest(gt=b)},this.setOpaqueSort=function(b){He=b},this.setTransparentSort=function(b){lt=b},this.getClearColor=function(b){return b.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,O=!0){let z=0;if(b){let N=!1;if(I!==null){const ne=I.texture.format;N=g.has(ne)}if(N){const ne=I.texture.type,fe=x.has(ne),_e=me.getClearColor(),xe=me.getClearAlpha(),Te=_e.r,Re=_e.g,Me=_e.b;fe?(p[0]=Te,p[1]=Re,p[2]=Me,p[3]=xe,L.clearBufferuiv(L.COLOR,0,p)):(y[0]=Te,y[1]=Re,y[2]=Me,y[3]=xe,L.clearBufferiv(L.COLOR,0,y))}else z|=L.COLOR_BUFFER_BIT}U&&(z|=L.DEPTH_BUFFER_BIT),O&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Ke,!1),me.dispose(),q.dispose(),j.dispose(),we.dispose(),Je.dispose(),Pt.dispose(),T.dispose(),$.dispose(),Y.dispose(),v.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",bl),Z.removeEventListener("sessionend",Ml),ei.stop()};function Ce(b){b.preventDefault(),kr("WebGLRenderer: Context Lost."),D=!0}function De(){kr("WebGLRenderer: Context Restored."),D=!1;const b=rt.autoReset,U=ue.enabled,O=ue.autoUpdate,z=ue.needsUpdate,N=ue.type;oe(),rt.autoReset=b,ue.enabled=U,ue.autoUpdate=O,ue.needsUpdate=z,ue.type=N}function Ke(b){ke("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ie(b){const U=b.target;U.removeEventListener("dispose",ie),de(U)}function de(b){Be(b),we.remove(b)}function Be(b){const U=we.get(b).programs;U!==void 0&&(U.forEach(function(O){v.releaseProgram(O)}),b.isShaderMaterial&&v.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,O,z,N,ne){U===null&&(U=Le);const fe=N.isMesh&&N.matrixWorld.determinant()<0,_e=Du(b,U,O,z,N);re.setMaterial(z,fe);let xe=O.index,Te=1;if(z.wireframe===!0){if(xe=Tt.getWireframeAttribute(O),xe===void 0)return;Te=2}const Re=O.drawRange,Me=O.attributes.position;let Ve=Re.start*Te,et=(Re.start+Re.count)*Te;ne!==null&&(Ve=Math.max(Ve,ne.start*Te),et=Math.min(et,(ne.start+ne.count)*Te)),xe!==null?(Ve=Math.max(Ve,0),et=Math.min(et,xe.count)):Me!=null&&(Ve=Math.max(Ve,0),et=Math.min(et,Me.count));const pt=et-Ve;if(pt<0||pt===1/0)return;$.setup(N,z,_e,O,xe);let mt,tt=Q;if(xe!==null&&(mt=yt.get(xe),tt=C,tt.setIndex(mt)),N.isMesh)z.wireframe===!0?(re.setLineWidth(z.wireframeLinewidth*Ze()),tt.setMode(L.LINES)):tt.setMode(L.TRIANGLES);else if(N.isLine){let It=z.linewidth;It===void 0&&(It=1),re.setLineWidth(It*Ze()),N.isLineSegments?tt.setMode(L.LINES):N.isLineLoop?tt.setMode(L.LINE_LOOP):tt.setMode(L.LINE_STRIP)}else N.isPoints?tt.setMode(L.POINTS):N.isSprite&&tt.setMode(L.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Fs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))tt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const It=N._multiDrawStarts,ye=N._multiDrawCounts,ti=N._multiDrawCount,Xe=xe?yt.get(xe).bytesPerElement:1,Wt=we.get(z).currentProgram.getUniforms();for(let fn=0;fn<ti;fn++)Wt.setValue(L,"_gl_DrawID",fn),tt.render(It[fn]/Xe,ye[fn])}else if(N.isInstancedMesh)tt.renderInstances(Ve,pt,N.count);else if(O.isInstancedBufferGeometry){const It=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,ye=Math.min(O.instanceCount,It);tt.renderInstances(Ve,pt,ye)}else tt.render(Ve,pt)};function ut(b,U,O){b.transparent===!0&&b.side===Qt&&b.forceSinglePass===!1?(b.side=Ht,b.needsUpdate=!0,qs(b,U,O),b.side=Kn,b.needsUpdate=!0,qs(b,U,O),b.side=Qt):qs(b,U,O)}this.compile=function(b,U,O=null){O===null&&(O=b),M=j.get(O),M.init(U),A.push(M),O.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(M.pushLight(N),N.castShadow&&M.pushShadow(N))}),b!==O&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(M.pushLight(N),N.castShadow&&M.pushShadow(N))}),M.setupLights();const z=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ne=N.material;if(ne)if(Array.isArray(ne))for(let fe=0;fe<ne.length;fe++){const _e=ne[fe];ut(_e,O,N),z.add(_e)}else ut(ne,O,N),z.add(ne)}),M=A.pop(),z},this.compileAsync=function(b,U,O=null){const z=this.compile(b,U,O);return new Promise(N=>{function ne(){if(z.forEach(function(fe){we.get(fe).currentProgram.isReady()&&z.delete(fe)}),z.size===0){N(b);return}setTimeout(ne,10)}Ne.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Jt=null;function Lu(b){Jt&&Jt(b)}function bl(){ei.stop()}function Ml(){ei.start()}const ei=new fu;ei.setAnimationLoop(Lu),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(b){Jt=b,Z.setAnimationLoop(b),b===null?ei.stop():ei.start()},Z.addEventListener("sessionstart",bl),Z.addEventListener("sessionend",Ml),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(U),U=Z.getCamera()),b.isScene===!0&&b.onBeforeRender(E,b,U,I),M=j.get(b,A.length),M.init(U),A.push(M),X.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Se.setFromProjectionMatrix(X,hn,U.reversedDepth),Rt=this.localClippingEnabled,ot=V.init(this.clippingPlanes,Rt),_=q.get(b,P.length),_.init(),P.push(_),Z.enabled===!0&&Z.isPresenting===!0){const ne=E.xr.getDepthSensingMesh();ne!==null&&na(ne,U,-1/0,E.sortObjects)}na(b,U,0,E.sortObjects),_.finish(),E.sortObjects===!0&&_.sort(He,lt),Ie=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Ie&&me.addToRenderList(_,b),this.info.render.frame++,ot===!0&&V.beginShadows();const O=M.state.shadowsArray;ue.render(O,b,U),ot===!0&&V.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=_.opaque,N=_.transmissive;if(M.setupLights(),U.isArrayCamera){const ne=U.cameras;if(N.length>0)for(let fe=0,_e=ne.length;fe<_e;fe++){const xe=ne[fe];Sl(z,N,b,xe)}if(Ie&&me.render(b),Z.enabled&&Z.isMultiview)Ee.setDeferTextureUploads(!0),ia(_,b,U,U.cameras[0].viewport);else for(let fe=0,_e=ne.length;fe<_e;fe++){const xe=ne[fe];ia(_,b,xe,xe.viewport)}}else N.length>0&&Sl(z,N,b,U),Ie&&me.render(b),ia(_,b,U);I!==null&&S===0&&(Ee.updateMultisampleRenderTarget(I),Ee.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(E,b,U),Ee.runDeferredUploads(),$.resetDefaultState(),H=-1,k=null,A.pop(),A.length>0?(M=A[A.length-1],ot===!0&&V.setGlobalState(E.clippingPlanes,M.state.camera)):M=null,P.pop(),P.length>0?_=P[P.length-1]:_=null};function na(b,U,O,z){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)O=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)M.pushLight(b),b.castShadow&&M.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Se.intersectsSprite(b)){z&&pe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(X);const fe=T.update(b),_e=b.material;_e.visible&&_.push(b,fe,_e,O,pe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Se.intersectsObject(b))){const fe=T.update(b),_e=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),pe.copy(b.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),pe.copy(fe.boundingSphere.center)),pe.applyMatrix4(b.matrixWorld).applyMatrix4(X)),Array.isArray(_e)){const xe=fe.groups;for(let Te=0,Re=xe.length;Te<Re;Te++){const Me=xe[Te],Ve=_e[Me.materialIndex];Ve&&Ve.visible&&_.push(b,fe,Ve,O,pe.z,Me)}}else _e.visible&&_.push(b,fe,_e,O,pe.z,null)}}const ne=b.children;for(let fe=0,_e=ne.length;fe<_e;fe++)na(ne[fe],U,O,z)}function ia(b,U,O,z){const{opaque:N,transmissive:ne,transparent:fe}=b;M.setupLightsView(O),ot===!0&&V.setGlobalState(E.clippingPlanes,O),z&&re.viewport(G.copy(z)),N.length>0&&Xs(N,U,O),ne.length>0&&Xs(ne,U,O),fe.length>0&&Xs(fe,U,O),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function Sl(b,U,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;M.state.transmissionRenderTarget[z.id]===void 0&&(M.state.transmissionRenderTarget[z.id]=new Qn(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?as:gn,minFilter:qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const ne=M.state.transmissionRenderTarget[z.id],fe=z.viewport||G;ne.setSize(fe.z*E.transmissionResolutionScale,fe.w*E.transmissionResolutionScale);const _e=E.getRenderTarget(),xe=E.getActiveCubeFace(),Te=E.getActiveMipmapLevel();E.setRenderTarget(ne),E.getClearColor(se),W=E.getClearAlpha(),W<1&&E.setClearColor(16777215,.5),E.clear(),Ie&&me.render(O);const Re=E.toneMapping;E.toneMapping=jn;const Me=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),M.setupLightsView(z),ot===!0&&V.setGlobalState(E.clippingPlanes,z),Xs(b,O,z),Ee.updateMultisampleRenderTarget(ne),Ee.updateRenderTargetMipmap(ne),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let et=0,pt=U.length;et<pt;et++){const mt=U[et],{object:tt,geometry:It,material:ye,group:ti}=mt;if(ye.side===Qt&&tt.layers.test(z.layers)){const Xe=ye.side;ye.side=Ht,ye.needsUpdate=!0,wl(tt,O,z,It,ye,ti),ye.side=Xe,ye.needsUpdate=!0,Ve=!0}}Ve===!0&&(Ee.updateMultisampleRenderTarget(ne),Ee.updateRenderTargetMipmap(ne))}E.setRenderTarget(_e,xe,Te),E.setClearColor(se,W),Me!==void 0&&(z.viewport=Me),E.toneMapping=Re}function Xs(b,U,O){const z=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ne=b.length;N<ne;N++){const fe=b[N],{object:_e,geometry:xe,group:Te}=fe;let Re=fe.material;Re.allowOverride===!0&&z!==null&&(Re=z),_e.layers.test(O.layers)&&wl(_e,U,O,xe,Re,Te)}}function wl(b,U,O,z,N,ne){b.onBeforeRender(E,U,O,z,N,ne),b.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(E,U,O,z,b,ne),N.transparent===!0&&N.side===Qt&&N.forceSinglePass===!1?(N.side=Ht,N.needsUpdate=!0,E.renderBufferDirect(O,U,z,N,b,ne),N.side=Kn,N.needsUpdate=!0,E.renderBufferDirect(O,U,z,N,b,ne),N.side=Qt):E.renderBufferDirect(O,U,z,N,b,ne),b.onAfterRender(E,U,O,z,N,ne)}function qs(b,U,O){U.isScene!==!0&&(U=Le);const z=we.get(b),N=M.state.lights,ne=M.state.shadowsArray,fe=N.state.version,_e=v.getParameters(b,N.state,ne,U,O),xe=v.getProgramCacheKey(_e);let Te=z.programs;z.environment=b.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(b.isMeshStandardMaterial?Pt:Je).get(b.envMap||z.environment),z.envMapRotation=z.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Te===void 0&&(b.addEventListener("dispose",ie),Te=new Map,z.programs=Te);let Re=Te.get(xe);if(Re!==void 0){if(z.currentProgram===Re&&z.lightsStateVersion===fe)return El(b,_e),Re}else _e.uniforms=v.getUniforms(b),b.onBeforeCompile(_e,E),Re=v.acquireProgram(_e,xe),Te.set(xe,Re),z.uniforms=_e.uniforms;const Me=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Me.clippingPlanes=V.uniform),El(b,_e),z.needsLights=Nu(b),z.lightsStateVersion=fe,z.needsLights&&(Me.ambientLightColor.value=N.state.ambient,Me.lightProbe.value=N.state.probe,Me.directionalLights.value=N.state.directional,Me.directionalLightShadows.value=N.state.directionalShadow,Me.spotLights.value=N.state.spot,Me.spotLightShadows.value=N.state.spotShadow,Me.rectAreaLights.value=N.state.rectArea,Me.ltc_1.value=N.state.rectAreaLTC1,Me.ltc_2.value=N.state.rectAreaLTC2,Me.pointLights.value=N.state.point,Me.pointLightShadows.value=N.state.pointShadow,Me.hemisphereLights.value=N.state.hemi,Me.directionalShadowMap.value=N.state.directionalShadowMap,Me.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Me.spotShadowMap.value=N.state.spotShadowMap,Me.spotLightMatrix.value=N.state.spotLightMatrix,Me.spotLightMap.value=N.state.spotLightMap,Me.pointShadowMap.value=N.state.pointShadowMap,Me.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Re,z.uniformsList=null,Re}function Tl(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=Dr.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function El(b,U){const O=we.get(b);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping,O.numMultiviewViews=U.numMultiviewViews}function Du(b,U,O,z,N){U.isScene!==!0&&(U=Le),Ee.resetTextureUnits();const ne=U.fog,fe=z.isMeshStandardMaterial?U.environment:null,_e=I===null?E.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ns,xe=(z.isMeshStandardMaterial?Pt:Je).get(z.envMap||fe),Te=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Re=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Me=!!O.morphAttributes.position,Ve=!!O.morphAttributes.normal,et=!!O.morphAttributes.color;let pt=jn;z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(pt=E.toneMapping);const mt=I&&I.isWebGLMultiviewRenderTarget?I.numViews:0,tt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,It=tt!==void 0?tt.length:0,ye=we.get(z),ti=M.state.lights;if(ot===!0&&(Rt===!0||b!==k)){const vt=b===k&&z.id===H;V.setState(z,b,vt)}let Xe=!1;z.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==ti.state.version||ye.outputColorSpace!==_e||N.isBatchedMesh&&ye.batching===!1||!N.isBatchedMesh&&ye.batching===!0||N.isBatchedMesh&&ye.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&ye.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&ye.instancing===!1||!N.isInstancedMesh&&ye.instancing===!0||N.isSkinnedMesh&&ye.skinning===!1||!N.isSkinnedMesh&&ye.skinning===!0||N.isInstancedMesh&&ye.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&ye.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&ye.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&ye.instancingMorph===!1&&N.morphTexture!==null||ye.envMap!==xe||z.fog===!0&&ye.fog!==ne||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==V.numPlanes||ye.numIntersection!==V.numIntersection)||ye.vertexAlphas!==Te||ye.vertexTangents!==Re||ye.morphTargets!==Me||ye.morphNormals!==Ve||ye.morphColors!==et||ye.toneMapping!==pt||ye.morphTargetsCount!==It||ye.numMultiviewViews!==mt)&&(Xe=!0):(Xe=!0,ye.__version=z.version);let Wt=ye.currentProgram;Xe===!0&&(Wt=qs(z,U,N));let fn=!1,ni=!1,wi=!1;const at=Wt.getUniforms(),bt=ye.uniforms;if(re.useProgram(Wt.program)&&(fn=!0,ni=!0,wi=!0),z.id!==H&&(H=z.id,ni=!0),fn||k!==b){Wt.numMultiviewViews>0?(te.updateCameraProjectionMatricesUniform(b,at),te.updateCameraViewMatricesUniform(b,at)):(re.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),at.setValue(L,"projectionMatrix",b.projectionMatrix),at.setValue(L,"viewMatrix",b.matrixWorldInverse));const vt=at.map.cameraPosition;vt!==void 0&&vt.setValue(L,he.setFromMatrixPosition(b.matrixWorld)),Ge.logarithmicDepthBuffer&&at.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&at.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),k!==b&&(k=b,ni=!0,wi=!0)}if(N.isSkinnedMesh){at.setOptional(L,N,"bindMatrix"),at.setOptional(L,N,"bindMatrixInverse");const vt=N.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),at.setValue(L,"boneTexture",vt.boneTexture,Ee))}N.isBatchedMesh&&(at.setOptional(L,N,"batchingTexture"),at.setValue(L,"batchingTexture",N._matricesTexture,Ee),at.setOptional(L,N,"batchingIdTexture"),at.setValue(L,"batchingIdTexture",N._indirectTexture,Ee),at.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&at.setValue(L,"batchingColorTexture",N._colorsTexture,Ee));const On=O.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&Ae.update(N,O,Wt),(ni||ye.receiveShadow!==N.receiveShadow)&&(ye.receiveShadow=N.receiveShadow,at.setValue(L,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(bt.envMap.value=xe,bt.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(bt.envMapIntensity.value=U.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=Vv()),ni&&(at.setValue(L,"toneMappingExposure",E.toneMappingExposure),ye.needsLights&&Uu(bt,wi),ne&&z.fog===!0&&F.refreshFogUniforms(bt,ne),F.refreshMaterialUniforms(bt,z,ve,ce,M.state.transmissionRenderTarget[b.id]),Dr.upload(L,Tl(ye),bt,Ee)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Dr.upload(L,Tl(ye),bt,Ee),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&at.setValue(L,"center",N.center),Wt.numMultiviewViews>0?te.updateObjectMatricesUniforms(N,b,at):(at.setValue(L,"modelViewMatrix",N.modelViewMatrix),at.setValue(L,"normalMatrix",N.normalMatrix)),at.setValue(L,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const vt=z.uniformsGroups;for(let Ti=0,Ei=vt.length;Ti<Ei;Ti++){const Al=vt[Ti];Y.update(Al,Wt),Y.bind(Al,Wt)}}return Wt}function Uu(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Nu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.setTexture2D=(function(){var b=!1;return function(O,z){O&&O.isWebGLRenderTarget&&(b||(console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."),b=!0),O=O.texture),Ee.setTexture2D(O,z)}})(),this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,U,O){const z=we.get(b);z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer||(z.__useRenderToTexture=!1),we.get(b.texture).__webglTexture=U,we.get(b.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:O,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){const O=we.get(b);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0};const Fu=L.createFramebuffer();this.setRenderTarget=function(b,U=0,O=0){b===null&&this.xr.isPresenting&&(b=this.xr.getRenderTarget()),I=b,w=U,S=O;let z=!0,N=null,ne=!1,fe=!1;if(b){const xe=we.get(b);if(xe.__useDefaultFramebuffer!==void 0)re.bindFramebuffer(L.FRAMEBUFFER,null),z=!1;else if(xe.__webglFramebuffer===void 0)Ee.setupRenderTarget(b);else if(xe.__hasExternalTextures)Ee.rebindTextures(b,we.get(b.texture).__webglTexture,we.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Me=b.depthTexture;if(xe.__boundDepthTexture!==Me){if(Me!==null&&we.has(Me)&&(b.width!==Me.image.width||b.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ee.setupDepthRenderbuffer(b)}}const Te=b.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(fe=!0);const Re=we.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?N=Re[U][O]:N=Re[U],ne=!0):b.samples>0&&Ee.useMultisampledRTT(b)===!1?N=we.get(b).__webglMultisampledFramebuffer:Array.isArray(Re)?N=Re[O]:N=Re,G.copy(b.viewport),K.copy(b.scissor),B=b.scissorTest}else G.copy(ct).multiplyScalar(ve).floor(),K.copy(je).multiplyScalar(ve).floor(),B=gt;if(O!==0&&(N=Fu),re.bindFramebuffer(L.FRAMEBUFFER,N)&&z&&re.drawBuffers(b,N),re.viewport(G),re.scissor(K),re.setScissorTest(B),ne){const xe=we.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,xe.__webglTexture,O)}else if(fe){const xe=U;for(let Te=0;Te<b.textures.length;Te++){const Re=we.get(b.textures[Te]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Te,Re.__webglTexture,O,xe)}}else if(b!==null&&O!==0){const xe=we.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xe.__webglTexture,O)}H=-1},this.readRenderTargetPixels=function(b,U,O,z,N,ne,fe,_e=0){if(!(b&&b.isWebGLRenderTarget)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=we.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){re.bindFramebuffer(L.FRAMEBUFFER,xe);try{const Te=b.textures[_e],Re=Te.format,Me=Te.type;if(!Ge.textureFormatReadable(Re)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(Me)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-z&&O>=0&&O<=b.height-N&&(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+_e),L.readPixels(U,O,z,N,J.convert(Re),J.convert(Me),ne))}finally{const Te=I!==null?we.get(I).__webglFramebuffer:null;re.bindFramebuffer(L.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(b,U,O,z,N,ne,fe,_e=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=we.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe)if(U>=0&&U<=b.width-z&&O>=0&&O<=b.height-N){re.bindFramebuffer(L.FRAMEBUFFER,xe);const Te=b.textures[_e],Re=Te.format,Me=Te.type;if(!Ge.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ve),L.bufferData(L.PIXEL_PACK_BUFFER,ne.byteLength,L.STREAM_READ),b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+_e),L.readPixels(U,O,z,N,J.convert(Re),J.convert(Me),0);const et=I!==null?we.get(I).__webglFramebuffer:null;re.bindFramebuffer(L.FRAMEBUFFER,et);const pt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Id(L,pt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ve),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ne),L.deleteBuffer(Ve),L.deleteSync(pt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,O=0){const z=Math.pow(2,-O),N=Math.floor(b.image.width*z),ne=Math.floor(b.image.height*z),fe=U!==null?U.x:0,_e=U!==null?U.y:0;Ee.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,O,0,0,fe,_e,N,ne),re.unbindTexture()};const Ou=L.createFramebuffer(),ku=L.createFramebuffer();this.copyTextureToTexture=function(b,U,O=null,z=null,N=0,ne=null){ne===null&&(N!==0?(Fs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=N,N=0):ne=0);let fe,_e,xe,Te,Re,Me,Ve,et,pt;const mt=b.isCompressedTexture?b.mipmaps[ne]:b.image;if(O!==null)fe=O.max.x-O.min.x,_e=O.max.y-O.min.y,xe=O.isBox3?O.max.z-O.min.z:1,Te=O.min.x,Re=O.min.y,Me=O.isBox3?O.min.z:0;else{const bt=Math.pow(2,-N);fe=Math.floor(mt.width*bt),_e=Math.floor(mt.height*bt),b.isDataArrayTexture?xe=mt.depth:b.isData3DTexture?xe=Math.floor(mt.depth*bt):xe=1,Te=0,Re=0,Me=0}z!==null?(Ve=z.x,et=z.y,pt=z.z):(Ve=0,et=0,pt=0);const tt=J.convert(U.format),It=J.convert(U.type);let ye;U.isData3DTexture?(Ee.setTexture3D(U,0),ye=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ee.setTexture2DArray(U,0),ye=L.TEXTURE_2D_ARRAY):(Ee.setTexture2D(U,0),ye=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const ti=L.getParameter(L.UNPACK_ROW_LENGTH),Xe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Wt=L.getParameter(L.UNPACK_SKIP_PIXELS),fn=L.getParameter(L.UNPACK_SKIP_ROWS),ni=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Te),L.pixelStorei(L.UNPACK_SKIP_ROWS,Re),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Me);const wi=b.isDataArrayTexture||b.isData3DTexture,at=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){const bt=we.get(b),On=we.get(U),vt=we.get(bt.__renderTarget),Ti=we.get(On.__renderTarget);re.bindFramebuffer(L.READ_FRAMEBUFFER,vt.__webglFramebuffer),re.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Ei=0;Ei<xe;Ei++)wi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.get(b).__webglTexture,N,Me+Ei),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.get(U).__webglTexture,ne,pt+Ei)),L.blitFramebuffer(Te,Re,fe,_e,Ve,et,fe,_e,L.DEPTH_BUFFER_BIT,L.NEAREST);re.bindFramebuffer(L.READ_FRAMEBUFFER,null),re.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(N!==0||b.isRenderTargetTexture||we.has(b)){const bt=we.get(b),On=we.get(U);re.bindFramebuffer(L.READ_FRAMEBUFFER,Ou),re.bindFramebuffer(L.DRAW_FRAMEBUFFER,ku);for(let vt=0;vt<xe;vt++)wi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,bt.__webglTexture,N,Me+vt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,bt.__webglTexture,N),at?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,On.__webglTexture,ne,pt+vt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,On.__webglTexture,ne),N!==0?L.blitFramebuffer(Te,Re,fe,_e,Ve,et,fe,_e,L.COLOR_BUFFER_BIT,L.NEAREST):at?L.copyTexSubImage3D(ye,ne,Ve,et,pt+vt,Te,Re,fe,_e):L.copyTexSubImage2D(ye,ne,Ve,et,Te,Re,fe,_e);re.bindFramebuffer(L.READ_FRAMEBUFFER,null),re.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else at?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(ye,ne,Ve,et,pt,fe,_e,xe,tt,It,mt.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(ye,ne,Ve,et,pt,fe,_e,xe,tt,mt.data):L.texSubImage3D(ye,ne,Ve,et,pt,fe,_e,xe,tt,It,mt):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ne,Ve,et,fe,_e,tt,It,mt.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ne,Ve,et,mt.width,mt.height,tt,mt.data):L.texSubImage2D(L.TEXTURE_2D,ne,Ve,et,fe,_e,tt,It,mt);L.pixelStorei(L.UNPACK_ROW_LENGTH,ti),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Xe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Wt),L.pixelStorei(L.UNPACK_SKIP_ROWS,fn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ni),ne===0&&U.generateMipmaps&&L.generateMipmap(ye),re.unbindTexture()},this.initRenderTarget=function(b){we.get(b).__webglFramebuffer===void 0&&Ee.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ee.setTextureCube(b,0):b.isData3DTexture?Ee.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ee.setTexture2DArray(b,0):Ee.setTexture2D(b,0),re.unbindTexture()},this.resetState=function(){w=0,S=0,I=null,re.reset(),$.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}const Rn=s=>s==="queue"||s==="broker",Gv=["client","lb","api","cache","db","queue","replica","cdn","limiter","shard","broker","worker"],Wv={client:{kind:"client",capacityRps:1/0,latencyMs:0},lb:{kind:"lb",capacityRps:5e3,latencyMs:1},api:{kind:"api",capacityRps:400,latencyMs:20},cache:{kind:"cache",capacityRps:8e3,latencyMs:2,cacheSize:300,policy:"lru"},db:{kind:"db",capacityRps:300,latencyMs:15},queue:{kind:"queue",capacityRps:200,latencyMs:5,bufferSize:4e3},replica:{kind:"replica",capacityRps:300,latencyMs:15},cdn:{kind:"cdn",capacityRps:2e4,latencyMs:8,staticHit:.95},limiter:{kind:"limiter",capacityRps:6e3,latencyMs:1,perClientRps:20},shard:{kind:"shard",capacityRps:3e3,latencyMs:1},broker:{kind:"broker",capacityRps:500,latencyMs:4,bufferSize:8e3},worker:{kind:"worker",capacityRps:60,latencyMs:120}},ml={client:0,lb:2,api:3,cache:4,db:5,queue:3,replica:4,cdn:3,limiter:2,shard:2,broker:4,worker:2};function dt(s,e,t={}){return{id:s,...Wv[e],...t}}function xl(s){return s.nodes.reduce((e,t)=>e+ml[t.kind],0)}function ah(s,e){return s.edges.filter(t=>t.from===e).map(t=>t.to)}function oh(s,e){for(const t of s.phases)if(e<t.untilSec)return t.rps;return s.phases[s.phases.length-1].rps}function _u(s){return s.phases[s.phases.length-1].untilSec}const Pn=(...s)=>s.map(e=>{const[t,n]=e.split(">");return{from:t,to:n}});function ze(s={}){const e=s.apis??1,t=[dt("users","client")],n=[],i=[];s.cdn&&(t.push(dt("cdn","cdn")),i.push("cdn")),s.limiter&&(t.push(dt("limiter","limiter",{perClientRps:s.limiter})),i.push("limiter")),(s.lb??e>1)&&(t.push(dt("lb","lb")),i.push("lb"));const a=Array.from({length:e},(m,g)=>`api${g+1}`);for(const m of a)t.push(dt(m,"api"));const o=["users",...i];for(let m=0;m<o.length-1;m++)n.push(...Pn(`${o[m]}>${o[m+1]}`));const c=o[o.length-1];for(const m of a)n.push(...Pn(`${c}>${m}`));const l=s.shards??0;let h;if(l>1){t.push(dt("shard","shard"));for(let m=1;m<=l;m++)t.push(dt(`db${m}`,"db",s.db)),n.push(...Pn(`shard>db${m}`));h="shard"}else t.push(dt("db","db",s.db)),h="db";const u=Array.from({length:s.replicas??0},(m,g)=>`replica${g+1}`);for(const m of u)t.push(dt(m,"replica",s.db?{capacityRps:s.db.capacityRps}:{}));const d=[...s.cache?["cache"]:[h],...s.cache?[]:u];s.cache&&(t.push(dt("cache","cache",s.cache)),n.push(...Pn(`cache>${h}`),...u.map(m=>({from:"cache",to:m}))));const f=[];if(s.queue&&(t.push(dt("queue","queue",s.queue===!0?{}:s.queue)),n.push(...Pn(`queue>${h}`),...u.map(m=>({from:"queue",to:m}))),f.push("queue")),s.broker){t.push(dt("broker","broker",s.broker.bufferSize?{bufferSize:s.broker.bufferSize}:{}));for(let m=1;m<=s.broker.workers;m++)t.push(dt(`worker${m}`,"worker")),n.push(...Pn(`broker>worker${m}`,`worker${m}>${h}`));f.push("broker")}for(const m of a){for(const g of new Set([...d,...f]))n.push(...Pn(`${m}>${g}`));s.cache&&f.length}return{nodes:t,edges:n}}class Xv{constructor(e,t){this.size=e,this.policy=t}size;policy;map=new Map;hits=0;misses=0;get hitRate(){const e=this.hits+this.misses;return e?this.hits/e:0}lookup(e){const t=this.map.get(e);return t===void 0?(this.misses++,!1):(this.hits++,this.policy==="lru"?(this.map.delete(e),this.map.set(e,t+1)):this.policy==="lfu"&&this.map.set(e,t+1),!0)}insert(e){this.size<=0||this.map.has(e)||(this.map.size>=this.size&&this.evict(),this.map.set(e,1))}invalidate(e){this.map.delete(e)}clear(){this.map.clear()}get count(){return this.map.size}has(e){return this.map.has(e)}evict(){if(this.policy==="lfu"){let e=-1,t=1/0;for(const[n,i]of this.map)i<t&&(t=i,e=n);this.map.delete(e)}else this.map.delete(this.map.keys().next().value)}}function yu(s){let e=s>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function qv(s,e){if(s<=0)return 0;if(s>30){const r=Math.max(e(),1e-12),a=e(),o=Math.sqrt(-2*Math.log(r))*Math.cos(2*Math.PI*a);return Math.max(0,Math.round(s+Math.sqrt(s)*o))}const t=Math.exp(-s);let n=0,i=1;do n++,i*=e();while(i>t);return n-1}class $v{constructor(e,t){this.n=e,this.s=t,this.cdf=new Float64Array(e);let n=0;for(let i=0;i<e;i++)n+=1/Math.pow(i+1,t),this.cdf[i]=n;for(let i=0;i<e;i++)this.cdf[i]/=n}n;s;cdf;sample(e){const t=e();let n=0,i=this.n-1;for(;n<i;){const r=n+i>>1;this.cdf[r]<t?n=r+1:i=r}return n}topMass(e){return e<=0?0:this.cdf[Math.min(e,this.n)-1]}}function Ms(s,e){if(!s.length)return 0;const t=Math.min(s.length-1,Math.max(0,Math.ceil(e/100*s.length)-1));return s[t]}const Yv={client:["lb","api","cdn","limiter"],cdn:["lb","api","limiter"],limiter:["lb","api"],lb:["api","lb"],api:["cache","db","queue","broker","replica","shard","worker"],cache:["db","queue","replica","shard"],queue:["db","replica","shard"],broker:["worker","db","replica","shard"],worker:["db","shard"],shard:["db"],db:[],replica:[]};function bu(s,e){return Yv[s].includes(e)}function gl(s,e,t){const n=s.nodes.find(r=>r.id===e),i=s.nodes.find(r=>r.id===t);if(!n||!i)return"Unknown node.";if(e===t)return"A node cannot connect to itself.";if(s.edges.some(r=>r.from===e&&r.to===t))return"Already wired.";if(!bu(n.kind,i.kind))return`${Xr(n.kind)} cannot send traffic straight to ${Xr(i.kind)}.`;if(n.kind==="client"&&s.edges.some(r=>r.from===e))return"Users enter through one door. Use a load balancer to fan out.";if(jv(s,t,e))return"That would create a loop."}function Xr(s){return{client:"Users",lb:"A load balancer",api:"An API server",cache:"A cache",db:"The database",queue:"A queue",replica:"A read replica",cdn:"A CDN",limiter:"A rate limiter",shard:"A shard router",broker:"A message broker",worker:"A worker pool"}[s]}function jv(s,e,t){const n=new Set,i=[e];for(;i.length;){const r=i.pop();if(r===t)return!0;if(!n.has(r)){n.add(r);for(const a of s.edges)a.from===r&&i.push(a.to)}}return!1}function qr(s){const e=[],t=(h,u,d)=>e.push({severity:"error",code:h,message:u,nodeId:d}),n=(h,u,d)=>e.push({severity:"warning",code:h,message:u,nodeId:d}),i=new Set;for(const h of s.nodes)i.has(h.id)&&t("duplicate-id",`Two nodes share the id ${h.id}.`,h.id),i.add(h.id),h.capacityRps>0||t("bad-capacity",`${h.id} has no capacity.`,h.id);const r=s.nodes.filter(h=>h.kind==="client");r.length!==1&&t("client-count",r.length?"Only one Users node is allowed.":"The design needs a Users node.");const a=new Set;for(const h of s.edges){const u=`${h.from}>${h.to}`;if(a.has(u)){t("duplicate-edge",`Duplicate wire ${h.from} to ${h.to}.`);continue}a.add(u);const d=s.nodes.find(m=>m.id===h.from),f=s.nodes.find(m=>m.id===h.to);if(!d||!f){t("dangling-edge",`Wire ${h.from} to ${h.to} points at a missing node.`);continue}if(h.from===h.to){t("self-loop",`${h.from} is wired to itself.`,h.from);continue}bu(d.kind,f.kind)||t("bad-edge",`${Xr(d.kind)} cannot send traffic straight to ${Xr(f.kind)}.`,h.from)}const o=r[0];o&&(s.edges.filter(h=>h.from===o.id).length>1&&t("client-fanout","Users enter through one door. Use a load balancer to fan out.",o.id),s.edges.some(h=>h.from===o.id)||t("client-unwired","Connect Users to something.",o.id));const c=new Map,l=h=>{c.set(h,1);for(const u of s.edges)if(u.from===h){const d=c.get(u.to)??0;if(d===1||d===0&&l(u.to))return!0}return c.set(h,2),!1};if(s.nodes.some(h=>(c.get(h.id)??0)===0&&l(h.id))&&t("cycle","Traffic loops forever. Remove the wire that goes backwards."),o){const h=new Set,u=[o.id];for(;u.length;){const d=u.pop();if(!h.has(d)){h.add(d);for(const f of s.edges)f.from===d&&u.push(f.to)}}for(const d of s.nodes)h.has(d.id)||n("unreachable",`${d.id} gets no traffic. Wire it in.`,d.id);for(const d of s.nodes)d.kind==="cache"&&h.has(d.id)&&!s.edges.some(f=>f.from===d.id)&&t("cache-dead-end",`${d.id} has nowhere to send misses. Wire it onward to the database.`,d.id);for(const d of s.nodes)h.has(d.id)&&d.kind!=="db"&&d.kind!=="client"&&d.kind!=="cache"&&d.kind!=="replica"&&!s.edges.some(f=>f.from===d.id)&&n("dead-end",`${d.id} has nowhere to send requests. Connect it onward to the database.`,d.id);for(const d of s.nodes)d.kind==="replica"&&!s.nodes.some(f=>f.kind==="db")&&n("orphan-replica",`${d.id} copies a primary database, but there is none.`,d.id);s.nodes.some(d=>d.kind==="db"&&h.has(d.id))||n("no-db","No database is reachable, so nothing is ever stored.")}return e}const lh=1,Jv=1500,Kv=250,Zv=1,Qv=3,e_=.3;class Ar{v=0;add(e=1){this.v+=e/lh}decay(e){this.v*=Math.exp(-e/lh)}}class t_{constructor(e){this.n=e,e.kind==="cache"&&(this.cache=new Xv(e.cacheSize??0,e.policy??"lru"))}n;waiting=[];head=0;credit=0;arr=new Ar;srv=new Ar;drop=new Ar;thr=new Ar;rr=0;cache;inflight=new Map;buckets=new Map;down=!1;deadSince=0;promoted=!1;failoverDone=!1;staticSeen=0;staticHits=0;get len(){return this.waiting.length-this.head}push(e){this.waiting.push(e)}pop(){if(this.head>=this.waiting.length)return;const e=this.waiting[this.head++];return this.head>1024&&this.head*2>this.waiting.length&&(this.waiting=this.waiting.slice(this.head),this.head=0),e}drain(){const e=this.waiting.slice(this.head);return this.waiting=[],this.head=0,e}get maxWaiting(){return Rn(this.n.kind)?this.n.bufferSize??4e3:Math.max(20,Math.ceil(this.n.capacityRps*.5))}}class Mu{constructor(e,t,n=1){this.design=e,this.workload=t;const i=qr(e).find(r=>r.severity==="error");if(i)throw new Error(`Design is not runnable: ${i.message}`);this.rng=yu(n),this.zipf=new $v(t.keyspace,t.zipfS);for(const r of e.nodes)this.rt.set(r.id,new t_(r));this.clientId=e.nodes.find(r=>r.kind==="client").id;for(const r of e.nodes)this.outs.set(r.id,ah(e,r.id));this.order=this.topo(),this.events=[...t.events??[]].sort((r,a)=>r.atSec-a.atSec),t.warmCaches&&this.warm()}design;workload;t=0;rng;zipf;rt=new Map;order=[];outs=new Map;clientId;nextId=1;lat=[];recent=[];lastWrite=new Map;evIdx=0;revives=[];events;bins=[];peakUtil={};firstOverload={};log=[];arrivals=0;legitArrivals=0;errors=0;asyncLost=0;maxBacklog=0;throttled=0;abuseBlocked=0;abuseAdmitted=0;staleReads=0;coalesced=0;cdnHits=0;rpsOverride;writeOverride;peak=new Set;onHop;onDrop;onEvent;warm(){for(const e of this.rt.values())if(e.cache)for(let t=Math.min(e.cache.size,this.workload.keyspace)-1;t>=0;t--)e.cache.insert(t)}note(e,t){const n={t:this.t,text:e,nodeId:t};this.log.push(n),this.onEvent?.(n)}topo(){const e=new Map(this.design.nodes.map(i=>[i.id,0]));for(const i of this.design.edges)e.set(i.to,(e.get(i.to)??0)+1);const t=[...e].filter(([,i])=>i===0).map(([i])=>i),n=[];for(;t.length;){const i=t.shift();n.push(i);for(const r of ah(this.design,i))e.set(r,e.get(r)-1),e.get(r)===0&&t.push(r)}return n}isDown(e){return this.rt.get(e)?.down??!1}kill(e){const t=this.rt.get(e);if(!(!t||t.down||t.n.kind==="client")){t.down=!0,t.deadSince=this.t,t.failoverDone=!1,this.peak.add(e);for(const n of t.drain())this.fail(t,n);for(const[,n]of t.inflight)for(const i of n)this.fail(t,i);t.inflight.clear(),this.note(`${e} crashed`,e)}}revive(e){const t=this.rt.get(e);!t||!t.down||(t.down=!1,this.note(`${e} is back`,e))}toggle(e){this.isDown(e)?this.revive(e):this.kill(e)}flush(){for(const e of this.rt.values())e.cache?.clear();this.note("Every cache was emptied at once")}alive(e){const t=this.rt.get(e);return!(t.down&&this.t-t.deadSince>=Zv)}takesWrites(e){const t=this.rt.get(e);return t.n.kind!=="replica"||t.promoted}hash(e){return Math.imul(e+1,2654435761)>>>0}route(e,t){const n=this.outs.get(e.n.id);if(!n.length)return;if(e.n.kind==="shard")return[...n].sort()[this.hash(t.key)%n.length];const i=c=>this.rt.get(c).n.kind,r=c=>this.alive(c)&&(!t.write||this.takesWrites(c));let a;t.write?a=[n.filter(c=>Rn(i(c))&&r(c)),n.filter(r)]:a=[n.filter(c=>!Rn(i(c))&&i(c)!=="worker"&&r(c)),n.filter(c=>i(c)!=="worker"&&this.alive(c)),n.filter(c=>this.alive(c))];let o=a.find(c=>c.length)??[];return o.length||(o=n),o[e.rr++%o.length]}forward(e,t){const n=this.route(e,t);if(n===void 0){this.complete(t);return}this.onHop?.({from:e.n.id,to:n,write:t.write}),this.arrive(this.rt.get(n),t)}bin(){const e=Math.floor(this.t);for(;this.bins.length<=e;)this.bins.push({t:this.bins.length,arrivals:0,errors:0,backlog:0});return this.bins[e]}allow(e,t){const n=e.n.perClientRps??20;let i=e.buckets.get(t.client);return i||(i={tokens:n,last:this.t},e.buckets.set(t.client,i)),i.tokens=Math.min(n,i.tokens+(this.t-i.last)*n),i.last=this.t,i.tokens<1?!1:(i.tokens-=1,!0)}fail(e,t){e.drop.add(),this.onDrop?.(e.n.id),this.peak.add(e.n.id),this.settleLeader(t,!1),t.acked?this.asyncLost++:t.abuse?this.abuseBlocked++:(this.errors++,this.bin().errors++)}arrive(e,t){if(e.arr.add(),t.enq=this.t,e.down){this.fail(e,t);return}if(e.n.kind==="replica"&&t.write&&!e.promoted){this.fail(e,t);return}if(e.n.kind==="limiter"&&!this.allow(e,t)){e.thr.add(),this.throttled++,this.onDrop?.(e.n.id),this.settleLeader(t,!1),t.abuse?this.abuseBlocked++:(this.errors++,this.bin().errors++);return}if(e.len>=e.maxWaiting){this.fail(e,t);return}Rn(e.n.kind)&&t.write&&!t.acked&&(t.acked=!0,this.record(t,t.latMs+e.n.latencyMs)),e.push(t)}record(e,t){e.abuse||(t>Jv?(this.errors++,this.bin().errors++):(this.lat.push(t),this.recent.push(t),this.recent.length>3e3&&this.recent.splice(0,1e3)))}complete(e){e.abuse&&!e.acked&&this.abuseAdmitted++,e.acked||this.record(e,e.latMs),this.settleLeader(e,!0)}settleLeader(e,t){const n=e.lead;if(!n||(e.lead=void 0,t&&n.cache.insert(e.key),!n.n.coalesce))return;const i=n.inflight.get(e.key)??[];n.inflight.delete(e.key);for(const r of i){if(!t){this.fail(n,r);continue}r.latMs+=(this.t-r.parkedAt)*1e3,this.complete(r)}}process(e,t){e.srv.add();const n=e.n;if(t.latMs+=n.latencyMs+(this.t-t.enq)*1e3,n.kind==="cache"){const i=e.cache;if(t.write){i.invalidate(t.key),this.forward(e,t);return}if(i.lookup(t.key)){this.complete(t);return}if(n.coalesce){const r=e.inflight.get(t.key);if(r){t.parkedAt=this.t,r.push(t),this.coalesced++;return}e.inflight.set(t.key,[])}t.lead=e}else if(n.kind==="cdn"&&t.stat){if(e.staticSeen++,this.rng()<(n.staticHit??.95)){e.staticHits++,this.cdnHits++,this.complete(t);return}}else if(n.kind==="api"&&t.stat){this.complete(t);return}else if(n.kind==="db"||n.kind==="replica"&&e.promoted)t.write&&this.lastWrite.set(t.key,this.t);else if(n.kind==="replica"&&!t.write){const i=this.lastWrite.get(t.key);i!==void 0&&this.t-i<e_&&this.staleReads++}this.forward(e,t)}runEvents(){for(;this.evIdx<this.events.length&&this.events[this.evIdx].atSec<=this.t;){const e=this.events[this.evIdx++];e.kill&&(this.kill(e.kill),e.reviveAtSec!==void 0&&this.revives.push({at:e.reviveAtSec,id:e.kill})),e.flushCache&&this.flush()}for(let e=this.revives.length-1;e>=0;e--)this.revives[e].at<=this.t&&(this.revive(this.revives[e].id),this.revives.splice(e,1));for(const e of this.rt.values())if(e.down&&!e.failoverDone&&e.n.kind==="db"&&this.t-e.deadSince>=Qv){e.failoverDone=!0;const t=[...this.rt.values()].find(n=>n.n.kind==="replica"&&!n.down&&!n.promoted);t&&(t.promoted=!0,this.note(`${t.n.id} promoted to primary after ${e.n.id} failed`,t.n.id))}}step(e){this.t+=e,this.runEvents();for(const c of this.rt.values())c.arr.decay(e),c.srv.decay(e),c.drop.decay(e),c.thr.decay(e);const t=this.rt.get(this.clientId),n=this.workload,i=this.rpsOverride??oh(n,this.t),r=this.writeOverride??n.writeFraction,a=qv(i*e,this.rng);for(let c=0;c<a;c++){this.arrivals++;const l=n.abuseFraction?this.rng()<n.abuseFraction:!1,h=this.rng()<r,u=!h&&n.staticFraction?this.rng()<n.staticFraction:!1,d={id:this.nextId++,key:this.zipf.sample(this.rng),write:h,born:this.t,enq:this.t,latMs:0,acked:!1,stat:u,abuse:l,client:l?1e5+Math.floor(this.rng()*3):n.abuseFraction?Math.floor(this.rng()*2e3):0,parkedAt:0};l||this.legitArrivals++,this.bin().arrivals++,t.arr.add(),this.forward(t,d)}let o=0;for(const c of this.order){if(c===this.clientId)continue;const l=this.rt.get(c);if(l.down)continue;const h=l.n.capacityRps*e;l.credit=Math.min(l.credit+h,h+1);let u;const d=()=>!Rn(l.n.kind)||this.outs.get(c).some(f=>{const m=this.rt.get(f);return!m.down&&this.takesWrites(f)&&m.len<m.maxWaiting*.25});for(;l.credit>=1&&d()&&(u=l.pop());)l.credit-=1,this.process(l,u);Rn(l.n.kind)&&(o+=l.len),this.overloaded(l)&&(this.peak.add(c),this.firstOverload[c]===void 0&&(this.firstOverload[c]=this.t)),Number.isFinite(l.n.capacityRps)&&(this.peakUtil[c]=Math.max(this.peakUtil[c]??0,l.arr.v/l.n.capacityRps))}this.bin().backlog=o,this.maxBacklog=Math.max(this.maxBacklog,o)}overloaded(e){return e.down?!1:Rn(e.n.kind)?e.len>(e.n.bufferSize??4e3)*.8||e.drop.v>.5:e.n.kind==="limiter"?!1:e.drop.v>.5||e.len/e.n.capacityRps*1e3>Kv}liveStats(){const e=[...this.recent].sort((a,o)=>a-o),t=Math.floor(this.t),n=Math.max(0,t-2);let i=0,r=0;for(let a=n;a<=t&&a<this.bins.length;a++)i+=this.bins[a].arrivals,r+=this.bins[a].errors;return{p50:Ms(e,50),p99:Ms(e,99),errorRate:i?Math.min(1,r/i):0,rps:this.rpsOverride??oh(this.workload,this.t)}}get backlog(){let e=0;for(const t of this.rt.values())Rn(t.n.kind)&&(e+=t.len);return e}snapshot(){const e={};for(const t of this.rt.values()){const n=t.n.capacityRps;e[t.n.id]={id:t.n.id,arrivalRps:t.arr.v,servedRps:t.srv.v,dropRps:t.drop.v,utilisation:Number.isFinite(n)?t.arr.v/n:0,waiting:t.len,waitMs:Number.isFinite(n)?t.len/n*1e3:0,overloaded:t.n.kind!=="client"&&this.overloaded(t),hitRate:t.cache?t.cache.hitRate:t.n.kind==="cdn"?t.staticSeen?t.staticHits/t.staticSeen:0:void 0,down:t.down||void 0,promoted:t.promoted||void 0,throttledRps:t.n.kind==="limiter"?t.thr.v:void 0}}return e}summary(){const e=[...this.lat].sort((n,i)=>n-i),t=this.lat.length;return{seconds:this.t,arrivals:this.arrivals,legitArrivals:this.legitArrivals,completed:t,errors:this.errors,errorRate:this.legitArrivals?Math.min(1,this.errors/this.legitArrivals):0,p50Ms:Ms(e,50),p95Ms:Ms(e,95),p99Ms:Ms(e,99),throughputRps:this.t?t/this.t:0,asyncLost:this.asyncLost,maxBacklog:this.maxBacklog,endBacklog:this.backlog,throttled:this.throttled,abuseBlocked:this.abuseBlocked,abuseAdmitted:this.abuseAdmitted,staleReads:this.staleReads,coalesced:this.coalesced,cdnHits:this.cdnHits,nodes:this.snapshot(),peakOverloaded:[...this.peak],peakUtil:{...this.peakUtil},firstOverloadSec:{...this.firstOverload},log:[...this.log],series:this.bins.map(n=>({...n}))}}}function n_(s,e,t=1,n=.01){const i=new Mu(s,e,t),r=_u(e),a=Math.round(r/n);for(let o=0;o<a;o++)i.step(n);return i.summary()}const vl=()=>dt("users","client"),Ot=(s,e={})=>({phases:s,writeFraction:0,keyspace:1e3,zipfS:1,warmCaches:!0,...e});function ch(s,e){const t=structuredClone(s),n=new Set(e.drop??[]);t.edges=t.edges.filter(i=>!n.has(`${i.from}>${i.to}`)),t.nodes.push(...e.nodes??[]),t.edges.push(...Pn(...e.edges??[]));for(const[i,r]of Object.entries(e.patch??{}))Object.assign(t.nodes.find(a=>a.id===i),r);return t}const i_=()=>ze({apis:3}),Xi=(s=2e3)=>({nodes:[vl(),dt("api1","api"),dt("db","db",{capacityRps:s})],edges:Pn("users>api1","api1>db")}),un=[{id:1,chapter:"Basics",title:"It works on my machine",story:"Launch day. Your app ran fine for your friends. Then a newsletter goes out and everyone shows up at once.",brief:"Wire Users to the API server, then to the database. Press Play and watch launch day crush one server.",lesson:"One server has a hard ceiling. Past it, requests queue up and get dropped.",concepts:["capacity","overload"],workload:Ot([{untilSec:8,rps:200},{untilSec:20,rps:700}]),start:{nodes:[vl(),dt("api1","api"),dt("db","db",{capacityRps:2e3})],edges:[]},palette:["api","db"],goal:{maxErrorRate:1,maxP99Ms:1e9,maxEndBacklog:1e9,requires:[],observeOnly:!0},solutions:[{name:"Wire it and watch",build:()=>Xi()}]},{id:2,chapter:"Basics",title:"Spread the load",story:"The newsletter worked. Traffic is now a steady 600 requests a second, and your single server tops out at 400.",brief:"Put a load balancer in front of more API servers so no one server is overwhelmed.",lesson:"A load balancer spreads requests so many small servers act like one big one.",concepts:["load-balancer","horizontal-scaling","spof"],workload:Ot([{untilSec:20,rps:600}]),start:Xi(),palette:["lb","api"],goal:{maxErrorRate:.01,maxP99Ms:300,maxEndBacklog:1e9,requires:["lb"]},starBudget:14,solutions:[{name:"LB + 2 APIs",build:()=>ze({apis:2,db:{capacityRps:2e3}})},{name:"LB + 3 APIs",build:()=>ze({apis:3,db:{capacityRps:2e3}})}]},{id:3,chapter:"Basics",title:"Hot reads",story:"Everyone is reading the same popular products. The database is answering the same question thousands of times.",brief:"The database is melting: 1000 reads a second, and most ask for the same popular keys. Keep it cool.",lesson:"A cache answers popular reads from memory, so the database only sees the misses.",concepts:["cache","hit-rate","eviction","p99"],workload:Ot([{untilSec:20,rps:1e3}]),start:i_(),palette:["cache"],goal:{maxErrorRate:.01,maxP99Ms:250,maxEndBacklog:1e9,requires:["cache"]},starBudget:20,solutions:[{name:"LRU cache",build:()=>ze({apis:3,cache:{cacheSize:300,policy:"lru"}})},{name:"LFU cache",build:()=>ze({apis:3,cache:{cacheSize:300,policy:"lfu"}})},{name:"Big cache",build:()=>ze({apis:3,cache:{cacheSize:600,policy:"lru"}})}]},{id:4,chapter:"Basics",title:"Survive the spike",story:"A flash sale triples traffic for five seconds, and lots of it is people placing orders. Lost orders are lost money.",brief:"Absorb the spike without dropping orders: writes need somewhere to wait.",lesson:"A queue buffers bursts of writes and lets the database drain them at its own pace.",concepts:["queue","async","backpressure"],workload:Ot([{untilSec:8,rps:300},{untilSec:13,rps:900},{untilSec:40,rps:300}],{writeFraction:.4}),start:ze({apis:3,cache:{cacheSize:300}}),palette:["queue"],goal:{maxErrorRate:.01,maxP99Ms:300,maxEndBacklog:50,requires:["queue"]},starBudget:23,solutions:[{name:"Queue on the write path",build:()=>ze({apis:3,cache:{cacheSize:300},queue:!0})},{name:"Queue with a bigger buffer, LFU cache",build:()=>ze({apis:3,cache:{cacheSize:300,policy:"lfu"},queue:{bufferSize:8e3}})}]},{id:5,chapter:"Scenarios",title:"Black Friday",story:"It is the biggest shopping day of the year. Traffic climbs all morning and peaks near 1800 requests a second. The marketing team already spent the budget on ads, not servers.",brief:"Scale out for the peak, keep the database calm, and keep orders safe. Cheaper designs earn the third star.",lesson:"Real launches combine every tool: a balanced fleet, a cache for reads, a queue for writes.",concepts:["horizontal-scaling","cache","queue","headroom"],workload:Ot([{untilSec:6,rps:600},{untilSec:14,rps:1500},{untilSec:24,rps:1800},{untilSec:32,rps:900}],{writeFraction:.1}),start:ze({apis:1,db:{capacityRps:600}}),palette:["lb","api","cache","queue"],goal:{maxErrorRate:.01,maxP99Ms:300,maxEndBacklog:50,requires:["lb","cache"]},starBudget:29,solutions:[{name:"5 APIs, LFU cache, queue",build:()=>ze({apis:5,cache:{cacheSize:600,policy:"lfu"},queue:!0,db:{capacityRps:600}})},{name:"6 APIs, LRU cache, queue",build:()=>ze({apis:6,cache:{cacheSize:600,policy:"lru"},queue:!0,db:{capacityRps:600}})}]},{id:6,chapter:"Scenarios",title:"The viral post",story:"A celebrity shares one of your posts. Suddenly most of the world is asking for the same single item, over and over.",brief:"One key is getting most of the traffic. Find what absorbs a hot key. Careful: splitting the database cannot split one key.",lesson:"A hot key overwhelms whatever stores it. A tiny cache in front absorbs it, because the hot key is always in it.",concepts:["hot-key","cache","eviction","sharding"],workload:Ot([{untilSec:20,rps:1600}],{writeFraction:.005,keyspace:300,zipfS:1.6}),start:ze({apis:5}),palette:["cache","replica","shard","db"],goal:{maxErrorRate:.01,maxP99Ms:250,maxEndBacklog:1e9,requires:[],requiresAny:["cache"]},starBudget:26,solutions:[{name:"Tiny LFU cache (50 keys)",build:()=>ze({apis:5,cache:{cacheSize:50,policy:"lfu"}})},{name:"Small LRU cache (100 keys)",build:()=>ze({apis:5,cache:{cacheSize:100,policy:"lru"}})},{name:"Cache plus a replica",build:()=>ze({apis:5,cache:{cacheSize:100,policy:"lfu"},replicas:1})}]},{id:7,chapter:"Scenarios",title:"Thundering herd",story:"At 10:00 sharp a scheduled job empties every cache. The next thousand users all miss at the same instant and all ask the database for the same thing.",brief:"A cache flush hits mid-run. Stop the stampede: tap the cache to change its mode, or spread the misses across more databases.",lesson:"When a cache empties, every request misses at once. Coalescing lets one request fetch while the rest wait for it.",concepts:["thundering-herd","coalescing","cache","replica"],workload:Ot([{untilSec:24,rps:1300}],{writeFraction:.02,keyspace:300,zipfS:1.3,events:[{atSec:8,flushCache:!0}]}),start:ze({apis:4,cache:{cacheSize:150}}),palette:["cache","replica"],goal:{maxErrorRate:.01,maxP99Ms:300,maxEndBacklog:1e9,requires:[]},starBudget:24,solutions:[{name:"Single-flight (coalescing) cache",build:()=>ze({apis:4,cache:{cacheSize:150,coalesce:!0}})},{name:"Two replicas absorb the misses",build:()=>ze({apis:4,cache:{cacheSize:150},replicas:2})},{name:"Coalescing plus a replica",build:()=>ze({apis:4,cache:{cacheSize:150,coalesce:!0,policy:"lfu"},replicas:1})}]},{id:8,chapter:"Scenarios",title:"Read replicas",story:"Your analytics dashboards read from thousands of different rows. Nothing repeats, so a cache barely helps, and one database cannot answer everything.",brief:"Reads dominate but nothing is popular. Copy the database: replicas serve reads while the primary keeps the writes.",lesson:"Read replicas multiply read capacity. The trade-off: a replica can lag behind, so a fresh write may not be visible yet.",concepts:["replica","replication-lag","cache","capacity"],workload:Ot([{untilSec:20,rps:800}],{writeFraction:.1,keyspace:5e3,zipfS:.7}),start:ze({apis:3}),palette:["replica","cache"],goal:{maxErrorRate:.01,maxP99Ms:250,maxEndBacklog:1e9,requires:[],requiresAny:["replica"]},starBudget:28,solutions:[{name:"Three replicas",build:()=>ze({apis:3,replicas:3})},{name:"One replica plus a big cache",build:()=>ze({apis:3,replicas:1,cache:{cacheSize:1500,policy:"lfu"}})},{name:"Two replicas plus a cache",build:()=>ze({apis:3,replicas:2,cache:{cacheSize:300,policy:"lfu"}})}]},{id:9,chapter:"Scenarios",title:"Database failover",story:"3 a.m. The primary database's disk dies. The pager goes off. Every second the site is down costs real money.",brief:"The database will crash 8 seconds in. Keep the site up: a replica can be promoted to primary, and a queue can hold writes while it happens.",lesson:"Failover is not instant: the system must notice the failure, then promote a replica. Queues hide the gap for writes.",concepts:["failover","replica","queue","spof","health-check"],workload:Ot([{untilSec:24,rps:260}],{writeFraction:.2,events:[{atSec:8,kill:"db"}]}),start:ze({apis:2}),palette:["replica","queue","cache"],goal:{maxErrorRate:.06,maxP99Ms:300,maxEndBacklog:200,requires:[],requiresAny:["replica"]},starBudget:22,solutions:[{name:"Replica ready to promote",build:()=>ze({apis:2,replicas:1})},{name:"Replica plus write queue",build:()=>ze({apis:2,replicas:1,queue:!0})}]},{id:10,chapter:"Scenarios",title:"Sharding",story:"Your users generate more writes than any single database can absorb. Buying a bigger box is no longer an option.",brief:"Writes exceed one database's ceiling. Split the data across several databases with a shard router.",lesson:"Sharding splits data by key so each database handles a slice of the writes. Uneven keys mean uneven shards.",concepts:["sharding","hot-key","capacity"],workload:Ot([{untilSec:20,rps:700}],{writeFraction:.6,keyspace:5e3,zipfS:.6}),start:ze({apis:3}),palette:["shard","db","queue","replica"],goal:{maxErrorRate:.01,maxP99Ms:300,maxEndBacklog:50,requires:["shard"]},starBudget:30,solutions:[{name:"Three shards",build:()=>ze({apis:3,shards:3})},{name:"Two shards plus a read replica",build:()=>ze({apis:3,shards:2,replicas:1})}]},{id:11,chapter:"Scenarios",title:"CDN for static files",story:"Your home page is mostly images and scripts. Every visitor downloads the same files from your one API server, on the other side of the planet.",brief:"Most requests are static files. Put a CDN at the front so the edge answers them and your servers only see real work.",lesson:"A CDN caches static files near users. Your servers stop serving the same bytes again and again.",concepts:["cdn","static-assets","latency"],workload:Ot([{untilSec:20,rps:1200}],{staticFraction:.8,writeFraction:.02}),start:Xi(),palette:["cdn","lb","api"],goal:{maxErrorRate:.01,maxP99Ms:200,maxEndBacklog:1e9,requires:[],requiresAny:["cdn"]},starBudget:14,solutions:[{name:"CDN in front of one API",build:()=>ch(Xi(),{nodes:[dt("cdn","cdn")],drop:["users>api1"],edges:["users>cdn","cdn>api1"]})},{name:"CDN, balancer and two APIs",build:()=>ze({apis:2,cdn:!0,db:{capacityRps:2e3}})}]},{id:12,chapter:"Scenarios",title:"Rate limiter",story:"A scraper is hammering your API from a handful of addresses. Real customers are timing out behind it.",brief:"Most of the traffic is a few abusive clients. Throttle them per client so real users get through, without buying more servers.",lesson:"A rate limiter gives every client a fair allowance. Abusers hit the wall while everyone else never notices.",concepts:["rate-limiter","token-bucket","fairness"],workload:Ot([{untilSec:20,rps:800}],{abuseFraction:.6,writeFraction:.05}),start:Xi(),palette:["limiter","lb","api"],goal:{maxErrorRate:.02,maxP99Ms:250,maxEndBacklog:1e9,requires:[],requiresAny:["limiter"]},starBudget:16,solutions:[{name:"Limiter in front of one API",build:()=>ch(Xi(),{nodes:[dt("limiter","limiter")],drop:["users>api1"],edges:["users>limiter","limiter>api1"]})},{name:"Limiter, balancer and two APIs",build:()=>ze({apis:2,limiter:20,db:{capacityRps:2e3}})}]},{id:13,chapter:"Scenarios",title:"Async jobs",story:"Users upload videos. Each upload kicks off slow processing. Making the user wait for it means timeouts and angry reviews.",brief:"Accept the upload instantly and do the slow work in the background: a message broker holds jobs, a pool of workers drains them.",lesson:"A broker decouples accepting work from doing it. Add workers until the backlog drains.",concepts:["message-broker","worker-pool","async","backpressure"],workload:Ot([{untilSec:8,rps:500},{untilSec:14,rps:900},{untilSec:30,rps:500}],{writeFraction:.35,zipfS:1.2}),start:ze({apis:3,cache:{cacheSize:300}}),palette:["broker","worker"],goal:{maxErrorRate:.01,maxP99Ms:250,maxEndBacklog:50,requires:["broker","worker"]},starBudget:34,solutions:[{name:"Broker with 4 workers",build:()=>ze({apis:3,cache:{cacheSize:300},broker:{workers:4}})},{name:"Broker with 4 workers, LFU cache, bigger buffer",build:()=>ze({apis:3,cache:{cacheSize:400,policy:"lfu"},broker:{workers:4,bufferSize:12e3}})}]}],s_={id:0,chapter:"Sandbox",title:"Sandbox",story:"No goals, no grade. Build anything, then turn the load up and break it on purpose.",brief:"Everything unlocked. Drag the load and the read/write mix while it runs, and tap a node to kill it.",lesson:"Real systems combine all of these. Kill a node and see what your design does about it.",concepts:["chaos","headroom"],workload:Ot([{untilSec:1e9,rps:500}],{writeFraction:.2,zipfS:1.1,keyspace:1e3}),start:{nodes:[vl(),dt("db","db")],edges:[]},palette:["lb","api","cache","db","queue","replica","cdn","limiter","shard","broker","worker"],sandbox:!0,goal:{maxErrorRate:.01,maxP99Ms:300,maxEndBacklog:50,requires:[]},starBudget:40,solutions:[]},r_=Ot([{untilSec:10,rps:500},{untilSec:16,rps:1500},{untilSec:40,rps:700}],{writeFraction:.3,zipfS:1.1});function a_(s,e,t=7){const n=qr(e),i=n.filter(u=>u.severity==="error"),r=xl(e);if(i.length)return{passed:!1,stars:0,issues:n,reasons:i.map(u=>u.message),cost:r};const a=n_(e,s.sandbox?r_:s.workload,t),o=s.goal,c=[];if(o.observeOnly)e.edges.some(d=>d.from==="users")&&e.nodes.some(d=>d.kind==="db")&&e.nodes.some(d=>d.kind==="api")||c.push("Wire Users to the API server and the API server to the database.");else{for(const u of o.requires)e.nodes.some(d=>d.kind===u)||c.push(`This level needs a ${u}.`);o.requiresAny&&!o.requiresAny.some(u=>e.nodes.some(d=>d.kind===u))&&c.push(`This level needs one of: ${o.requiresAny.join(", ")}.`),a.errorRate>o.maxErrorRate&&c.push(`${(a.errorRate*100).toFixed(1)}% of requests failed (limit ${(o.maxErrorRate*100).toFixed(0)}%).`),a.p99Ms>o.maxP99Ms&&c.push(`Slowest 1% of requests took ${a.p99Ms.toFixed(0)} ms (limit ${o.maxP99Ms} ms).`),a.endBacklog>o.maxEndBacklog&&c.push(`${a.endBacklog} writes still waiting in the queue at the end.`)}const l=c.length===0,h=l?1+(a.p99Ms<=o.maxP99Ms*.5?1:0)+(s.starBudget&&r<=s.starBudget?1:0):0;return{passed:l,stars:o.observeOnly?3:h,issues:n,summary:a,reasons:c,cost:r}}function o_(s,e,t,n){return{v:1,level:s,nodes:e.nodes.map(i=>({id:i.id,kind:i.kind,...i.kind==="cache"?{policy:i.policy,size:i.cacheSize,coalesce:i.coalesce||void 0}:{}})),edges:e.edges.map(i=>[i.from,i.to]),pos:Object.fromEntries(Object.entries(t).map(([i,r])=>[i,[Math.round(r.x*1e3)/1e3,Math.round(r.y*1e3)/1e3]])),...n?{note:n}:{}}}const l_=["lru","lfu","fifo"],c_=/^[A-Za-z][A-Za-z0-9_-]{0,23}$/;function Su(s){if(!s||typeof s!="object")return{ok:!1,error:"That is not a design."};const e=s;if(e.v!==1)return{ok:!1,error:"Unknown design version."};if(!Array.isArray(e.nodes)||!Array.isArray(e.edges))return{ok:!1,error:"The design is missing parts or wires."};if(e.nodes.length>60||e.edges.length>200)return{ok:!1,error:"That design is too large."};const t=[],n=new Set;for(const a of e.nodes){if(!a||typeof a.id!="string"||!c_.test(a.id))return{ok:!1,error:"A part has an invalid name."};if(!Gv.includes(a.kind))return{ok:!1,error:`Unknown part type "${String(a.kind)}".`};if(n.has(a.id))return{ok:!1,error:`Two parts are called ${a.id}.`};n.add(a.id);const o={};if(a.kind==="cache"){l_.includes(a.policy)&&(o.policy=a.policy);const c=Number(a.size);Number.isFinite(c)&&(o.cacheSize=Math.max(0,Math.min(2e3,Math.round(c)))),a.coalesce===!0&&(o.coalesce=!0)}t.push(dt(a.id,a.kind,o))}const i={nodes:t,edges:[]};for(const a of e.edges){if(!Array.isArray(a)||a.length!==2||typeof a[0]!="string"||typeof a[1]!="string")return{ok:!1,error:"A wire is malformed."};if(!n.has(a[0])||!n.has(a[1]))return{ok:!1,error:"A wire points at a missing part."};const o=gl(i,a[0],a[1]);if(o)return{ok:!1,error:`Bad wire ${a[0]} to ${a[1]}: ${o}`};i.edges.push({from:a[0],to:a[1]})}const r={};for(const a of t){const o=e.pos?.[a.id];r[a.id]=Array.isArray(o)&&Number.isFinite(o[0])&&Number.isFinite(o[1])?{x:Number(o[0]),y:Number(o[1])}:{x:0,y:0}}return{ok:!0,snapshot:{...e},design:i,pos:r}}function hh(s){const e=new TextEncoder().encode(JSON.stringify(s));let t="";for(const n of e)t+=String.fromCharCode(n);return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function qo(s){const e=s.trim();try{const t=e.startsWith("{")?e:new TextDecoder().decode(Uint8Array.from(atob(e.replace(/-/g,"+").replace(/_/g,"/")),n=>n.charCodeAt(0)));return Su(JSON.parse(t))}catch{return{ok:!1,error:"Could not read that design."}}}function wu(s){const e=/[#&?]d=([A-Za-z0-9_-]+)/.exec(s);return e?e[1]:s}const qa=[{policy:"lru",size:300},{policy:"lfu",size:300},{policy:"fifo",size:300},{policy:"lru",size:100},{policy:"lru",size:600},{policy:"lfu",size:600},{policy:"lru",size:300,coalesce:!0},{policy:"lfu",size:600,coalesce:!0}],Ds={w:1.5,h:.8};function uh(s){const e={},t=s.nodes.find(h=>h.kind==="client"),n=(h,u,d)=>{if(!d.has(h)&&!((e[h]??-1)>=u)){e[h]=u,d.add(h);for(const f of s.edges)f.from===h&&n(f.to,u+1,d);d.delete(h)}};t&&n(t.id,0,new Set);const i={client:0,cdn:1,limiter:1,lb:1,api:2,cache:3,queue:3,broker:3,shard:3,worker:4,replica:4,db:4};for(const h of s.nodes)e[h.id]===void 0&&(e[h.id]=i[h.kind]);const r=Math.max(1,...Object.values(e)),a=Math.min(.3,1.2/r),o={};for(const h of s.nodes)(o[e[h.id]]??=[]).push(h.id);const c={},l=-.6+(r<4?(4-r)*.15:0);for(const[h,u]of Object.entries(o)){const d=u.length,f=d>3,m=f?Math.max(.1,Math.min(.16,.66/(d-1))):Math.min(.18,.62/Math.max(1,d));u.forEach((g,x)=>{c[g]={x:l+Number(h)*a+(f?x%2?.055:-.055:0),y:(d-1)*m/2-x*m}})}return c}const h_=100;class u_{level;design;pos={};locked=new Set;verdict;counters={};undoStack=[];redoStack=[];listeners=[];onVerdict;constructor(e=0){this.load(e)}get index(){return un.indexOf(this.level)}get mode(){return this.level.sandbox?"sandbox":un.includes(this.level)?"campaign":"daily"}load(e){this.loadLevel(un[Math.max(0,Math.min(un.length-1,e))])}loadSandbox(){this.loadLevel(s_)}loadLevel(e){this.level=e,this.design=structuredClone(e.start),this.pos=uh(this.design),this.locked=new Set(this.design.nodes.filter(t=>t.kind==="client").map(t=>t.id)),this.counters={};for(const t of this.design.nodes)this.counters[t.kind]=(this.counters[t.kind]??0)+1;this.verdict=void 0,this.undoStack=[],this.redoStack=[],this.emit()}reset(){this.loadLevel(this.level)}emit(){this.listeners.forEach(e=>e())}onChange(e){this.listeners.push(e)}snap(){return{design:structuredClone(this.design),pos:structuredClone(this.pos),counters:{...this.counters}}}checkpoint(){this.undoStack.push(this.snap()),this.undoStack.length>h_&&this.undoStack.shift(),this.redoStack=[]}apply(e){this.design=e.design,this.pos=e.pos,this.counters=e.counters,this.verdict=void 0,this.emit()}get canUndo(){return this.undoStack.length>0}get canRedo(){return this.redoStack.length>0}undo(){const e=this.undoStack.pop();return e?(this.redoStack.push(this.snap()),this.apply(e),!0):!1}redo(){const e=this.redoStack.pop();return e?(this.undoStack.push(this.snap()),this.apply(e),!0):!1}canAdd(e){return this.level.palette.includes(e)&&e!=="client"}add(e,t){if(!this.canAdd(e))return;this.checkpoint();const n=this.counters[e]=(this.counters[e]??0)+1;let i=`${e}${n}`;for(;this.design.nodes.some(r=>r.id===i);)i=`${e}${++this.counters[e]}`;return this.design.nodes.push(dt(i,e)),this.pos[i]=this.freeSpot($a(t)),this.verdict=void 0,this.emit(),i}freeSpot(e,t=.15){const n=i=>this.design.nodes.every(r=>{const a=this.pos[r.id];return!a||Math.hypot(a.x-i.x,a.y-i.y)>=t});if(n(e))return e;for(let i=.09;i<.6;i+=.05)for(let r=0;r<16;r++){const a=r/16*Math.PI*2+i*7,o=$a({x:e.x+Math.cos(a)*i,y:e.y+Math.sin(a)*i});if(n(o))return o}return e}move(e,t){this.pos[e]=$a(t),this.emit()}remove(e){return this.locked.has(e)?!1:(this.checkpoint(),this.design.nodes=this.design.nodes.filter(t=>t.id!==e),this.design.edges=this.design.edges.filter(t=>t.from!==e&&t.to!==e),delete this.pos[e],this.verdict=void 0,this.emit(),!0)}connect(e,t){const n=gl(this.design,e,t);if(n)return n;this.checkpoint(),this.design.edges.push({from:e,to:t}),this.verdict=void 0,this.emit()}disconnect(e,t){this.design.edges.some(n=>n.from===e&&n.to===t)&&(this.checkpoint(),this.design.edges=this.design.edges.filter(n=>!(n.from===e&&n.to===t)),this.verdict=void 0,this.emit())}cycleCache(e){const t=this.design.nodes.find(r=>r.id===e);if(!t||t.kind!=="cache")return;this.checkpoint();const n=qa.findIndex(r=>r.policy===t.policy&&r.size===t.cacheSize&&!!r.coalesce==!!t.coalesce),i=qa[(n+1)%qa.length];t.policy=i.policy,t.cacheSize=i.size,t.coalesce=i.coalesce||void 0,this.verdict=void 0,this.emit()}tidy(){this.checkpoint(),this.pos=uh(this.design),this.emit()}get cost(){return this.design.nodes.reduce((e,t)=>e+ml[t.kind],0)}judge(){return this.verdict=a_(this.level,this.design),this.emit(),this.onVerdict?.(this.verdict,this.level),this.verdict}snapshot(e){return o_(this.level.id,this.design,this.pos,e)}restore(e){if(!e.ok)return e.error;const t=e.design.nodes.find(i=>i.kind!=="client"&&!this.level.palette.includes(i.kind)&&!this.level.start.nodes.some(r=>r.id===i.id&&r.kind===i.kind));if(t)return`${t.id} is not available in this level.`;const n=e.design.nodes.filter(i=>i.kind==="client");if(n.length!==1)return"The design needs exactly one Users node.";for(const i of e.design.nodes){const r=this.level.start.nodes.find(a=>a.id===i.id&&a.kind===i.kind);r&&i.kind!=="cache"&&(i.capacityRps=r.capacityRps)}this.checkpoint(),this.design=e.design,this.pos=e.pos,this.locked=new Set(n.map(i=>i.id)),this.counters={};for(const i of this.design.nodes){const r=Number(/(\d+)$/.exec(i.id)?.[1]??0);this.counters[i.kind]=Math.max(this.counters[i.kind]??0,r,1)}this.verdict=void 0,this.emit()}restoreFromText(e){return this.restore(qo(e))}restoreSnapshot(e){return this.restore(Su(e))}}function $a(s){return{x:Math.max(-1.5/2+.06,Math.min(Ds.w/2-.06,s.x)),y:Math.max(-.8/2+.06,Math.min(Ds.h/2-.06,s.y))}}function dh(s,e,t,n){let i,r=t;for(const a of s.design.nodes){if(a.id===n)continue;const o=s.pos[a.id];if(!o)continue;const c=Math.hypot(o.x-e.x,o.y-e.y);c<r&&(r=c,i=a.id)}return i}const _l=100;function $o(s=new Date){return`${s.getUTCFullYear()}-${String(s.getUTCMonth()+1).padStart(2,"0")}-${String(s.getUTCDate()).padStart(2,"0")}`}function d_(s){let e=2166136261;for(const t of s)e^=t.charCodeAt(0),e=Math.imul(e,16777619);return e>>>0}const fh=(s,e)=>e[Math.floor(s()*e.length)],qi=(s,e,t,n=50)=>Math.round((e+s()*(t-e))/n)*n,xi=(s,e=1.25)=>Math.max(1,Math.ceil(s*e/400));function f_(s){const e={writeFraction:0,keyspace:1e3,zipfS:1,warmCaches:!0},t=["lb","api","cache","queue","replica","cdn","limiter"];switch(Math.floor(s()*6)){case 0:{const n=qi(s,800,1400),i=Math.round(n/3/50)*50;return{title:"Flash sale",story:"A surprise sale goes live. Orders flood in.",brief:`Traffic jumps from ${i} to ${n} rps and 40% are orders. Do not drop any.`,workload:{...e,writeFraction:.4,phases:[{untilSec:6,rps:i},{untilSec:12,rps:n},{untilSec:30,rps:i}]},palette:t,start:{apis:3},ref:{apis:xi(n),cache:{cacheSize:300,policy:"lfu"},queue:!0},concepts:["queue","cache"]}}case 1:{const n=qi(s,900,1600);return{title:"Viral post",story:"One post takes off.",brief:`${n} rps and most of it is one hot key.`,workload:{...e,keyspace:300,zipfS:1.5,writeFraction:.005,phases:[{untilSec:20,rps:n}]},palette:t,start:{apis:xi(n)},ref:{apis:xi(n),cache:{cacheSize:100,policy:"lfu"}},concepts:["hot-key","cache"]}}case 2:{const n=qi(s,600,1e3),i=fh(s,[.5,.6,.7]);return{title:"Bot flood",story:"A scraper found your API.",brief:`${Math.round(i*100)}% of ${n} rps comes from a few abusive clients.`,workload:{...e,abuseFraction:i,writeFraction:.05,phases:[{untilSec:20,rps:n}]},palette:t,start:{apis:1,lb:!1,db:{capacityRps:2e3}},ref:{apis:xi(n*(1-i)+80),limiter:20,db:{capacityRps:2e3}},concepts:["rate-limiter"]}}case 3:{const n=qi(s,1e3,1600),i=fh(s,[.7,.8,.85]);return{title:"Heavy home page",story:"Your landing page is mostly images and scripts.",brief:`${Math.round(i*100)}% of ${n} rps is static files.`,workload:{...e,staticFraction:i,writeFraction:.02,phases:[{untilSec:20,rps:n}]},palette:t,start:{apis:1,lb:!1,db:{capacityRps:2e3}},ref:{apis:xi(n*(1-i+.06)),cdn:!0,db:{capacityRps:2e3}},concepts:["cdn"]}}case 4:{const n=qi(s,500,800),i=Math.max(1,Math.ceil(.9*n/(270-.1*n))-1);return{title:"Analytics reads",story:"Dashboards read thousands of different rows.",brief:`${n} rps, mostly reads, hardly any repeats.`,workload:{...e,keyspace:5e3,zipfS:.7,writeFraction:.1,phases:[{untilSec:20,rps:n}]},palette:t,start:{apis:xi(n)},ref:{apis:xi(n),replicas:i},concepts:["replica"]}}default:{const n=qi(s,200,260,20),i=6+Math.floor(s()*5);return{title:"The 3 a.m. crash",story:"The primary database dies.",brief:`The database crashes ${i} seconds in. Survive it.`,workload:{...e,writeFraction:.2,phases:[{untilSec:24,rps:n}],events:[{atSec:i,kill:"db"}]},palette:t,start:{apis:2},ref:{apis:2,replicas:1,queue:!0},concepts:["failover"]}}}}function ph(s=$o()){const e=f_(yu(d_(s))),t=ze(e.ref),n=xl(t);return{id:_l,chapter:"Daily",title:`Daily: ${e.title}`,story:e.story,brief:`${e.brief} Par cost ${n}.`,lesson:"Same puzzle for everyone today. Beat par cost with a passing design.",concepts:e.concepts,workload:e.workload,start:ze(e.start),palette:e.palette,goal:{maxErrorRate:.02,maxP99Ms:300,maxEndBacklog:60,requires:[]},starBudget:n,solutions:[{name:"Par design",build:()=>ze(e.ref)}],key:s,par:n}}function p_(s,e){return!e.passed||!e.summary?0:Math.max(100,Math.round(500+e.stars*150+(s.par-e.cost)*40+(s.goal.maxP99Ms-e.summary.p99Ms)))}function zs(s){return s.id===_l}class m_{m=new Map;getItem(e){return this.m.get(e)??null}setItem(e,t){this.m.set(e,t)}removeItem(e){this.m.delete(e)}}function x_(){try{const s=globalThis.localStorage;if(s){const e="sds:probe";return s.setItem(e,"1"),s.removeItem(e),s}}catch{}return new m_}const yl="sds:v1:";function g_(s,e,t){try{const n=s.getItem(yl+e);return n?{...t,...JSON.parse(n)}:t}catch{return t}}function ta(s,e){try{const t=s.getItem(yl+e);return t?JSON.parse(t):void 0}catch{return}}function Ws(s,e,t){try{return s.setItem(yl+e,JSON.stringify(t)),!0}catch{return!1}}const Tu={hand:"right",heightOffset:0,largeTargets:!1,reducedMotion:!1,muted:!1,volume:.6,hints:!0,haptics:!0};function v_(s){const e=g_(s,"settings",Tu);return{hand:e.hand==="left"?"left":"right",heightOffset:Math.max(-.5,Math.min(.5,Number(e.heightOffset)||0)),largeTargets:!!e.largeTargets,reducedMotion:!!e.reducedMotion,muted:!!e.muted,volume:Math.max(0,Math.min(1,Number.isFinite(e.volume)?e.volume:.6)),hints:e.hints!==!1,haptics:e.haptics!==!1}}function mh(s,e){Ws(s,"settings",e)}function __(s,e,t){return Ws(s,`save:${e}`,{at:Date.now(),data:t})}function Eu(s,e){return ta(s,`save:${e}`)?.data}function y_(s,e){return Eu(s,e)!==void 0}function Au(s){return ta(s,"progress")??{}}function b_(s,e,t){const n=Au(s);return t>(n[e]??0)&&(n[e]=t,Ws(s,"progress",n)),n}function zy(s){return Object.values(s).reduce((e,t)=>e+t,0)}function Cu(s,e){return ta(s,`best:${e}`)??[]}function M_(s,e,t){const n=Cu(s,e),i=n.length===0||t.score>n[0].score;n.push(t),n.sort((a,o)=>o.score-a.score);const r=n.slice(0,5);return Ws(s,`best:${e}`,r),{best:i,list:r}}function S_(s,e){return ta(s,`flag:${e}`)===!0}function w_(s,e,t=!0){Ws(s,`flag:${e}`,t)}const Yo={w:1200,h:630},T_={client:"#7c8cff",lb:"#b56cff",api:"#3ddc97",cache:"#ffb547",db:"#4fc3f7",queue:"#ff7ab8",replica:"#2ea6d9",cdn:"#ff8a3d",limiter:"#e05a5a",shard:"#8e7dff",broker:"#d94fb0",worker:"#9adf5a"};function E_(s,e={x:60,y:150,w:1080,h:420}){return{x:e.x+(s.x+.75)/1.5*e.w,y:e.y+(.4-s.y)/.8*e.h}}function A_(s,e){const{w:t,h:n}=Yo,i=s.createLinearGradient(0,0,t,n);i.addColorStop(0,"#0b1020"),i.addColorStop(1,"#16204a"),s.fillStyle=i,s.fillRect(0,0,t,n),s.fillStyle="#e8ecf8",s.font="bold 44px system-ui, sans-serif",s.textBaseline="top",s.fillText(e.title,60,36),s.fillStyle="#9aa6d0",s.font="26px system-ui, sans-serif",s.fillText(e.subtitle,60,96),e.stars!==void 0&&(s.fillStyle="#ffd166",s.font="bold 40px system-ui, sans-serif",s.textAlign="right",s.fillText(`${e.stars} / 3 stars`,t-60,40),s.textAlign="left"),s.strokeStyle="#6f7db8",s.lineWidth=3;const r=a=>E_(e.pos[a]??{x:0,y:0});for(const a of e.design.edges){const o=r(a.from),c=r(a.to);s.beginPath(),s.moveTo(o.x+34,o.y),s.lineTo(c.x-34,c.y),s.stroke()}s.font="bold 20px system-ui, sans-serif",s.textAlign="center";for(const a of e.design.nodes){const o=r(a.id);s.fillStyle=T_[a.kind],s.beginPath(),s.roundRect(o.x-34,o.y-26,68,52,10),s.fill(),s.fillStyle="#0b1020",s.fillText(a.kind==="client"?"USERS":a.kind.toUpperCase().slice(0,6),o.x,o.y-10),s.fillStyle="#dfe6ff",s.font="16px system-ui, sans-serif",s.fillText(a.id,o.x,o.y+32),s.font="bold 20px system-ui, sans-serif"}s.textAlign="left",e.stats&&(s.fillStyle="#e8ecf8",s.font="24px system-ui, sans-serif",s.fillText(e.stats,60,n-44)),s.fillStyle="#6f7db8",s.font="18px system-ui, sans-serif",s.textAlign="right",s.fillText("System Design Sandbox VR",t-60,n-40)}class C_{constructor(e=R_){this.factory=e}factory;ctx;master;last=new Map;hum;muted=!1;volume=.6;played=0;unlock(){try{if(!this.ctx){if(this.ctx=this.factory(),!this.ctx)return;this.master=this.ctx.createGain(),this.master.gain.value=this.volume,this.master.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume?.()}catch{this.ctx=void 0}}get ready(){return!!this.ctx}setMuted(e){this.muted=e,this.master&&(this.master.gain.value=e?0:this.volume),e&&this.setTraffic(0)}setVolume(e){this.volume=Math.max(0,Math.min(1,e)),this.master&&!this.muted&&(this.master.gain.value=this.volume)}play(e,t,n=0,i=e){if(this.muted||!this.ctx||this.volume<=0)return;const r=performance.now();if(!(n&&r-(this.last.get(i)??-1e9)<n)){this.last.set(i,r);try{this.synth(e,t),this.played++}catch{}}}out(e){const t=this.ctx;if(!e||!t.createPanner)return this.master;const n=t.createPanner();return n.panningModel="HRTF",n.distanceModel="inverse",n.refDistance=1,n.rolloffFactor=.6,n.positionX?(n.positionX.value=e.x,n.positionY.value=.9+e.y,n.positionZ.value=-.7):n.setPosition?.(e.x,.9+e.y,-.7),n.connect(this.master),n}tone(e,t,n,i,r,a,o){const c=this.ctx,l=c.createOscillator(),h=c.createGain();l.type=t,l.frequency.setValueAtTime(n,r),i!==n&&l.frequency.exponentialRampToValueAtTime(Math.max(1,i),r+a),h.gain.setValueAtTime(1e-4,r),h.gain.exponentialRampToValueAtTime(o,r+.012),h.gain.exponentialRampToValueAtTime(1e-4,r+a),l.connect(h),h.connect(e),l.start(r),l.stop(r+a+.02)}noise(e,t,n,i,r){const a=this.ctx;if(!a.createBuffer||!a.createBufferSource||!a.createBiquadFilter)return;const o=Math.floor((a.sampleRate??44100)*n),c=a.createBuffer(1,o,a.sampleRate??44100),l=c.getChannelData(0);for(let f=0;f<o;f++)l[f]=(Math.random()*2-1)*(1-f/o);const h=a.createBufferSource(),u=a.createBiquadFilter(),d=a.createGain();h.buffer=c,u.type="bandpass",u.frequency.value=r,d.gain.value=i,h.connect(u),u.connect(d),d.connect(e),h.start(t)}synth(e,t){const n=this.ctx,i=n.currentTime,r=this.out(t);switch(e){case"place":this.tone(r,"sine",330,660,i,.12,.35);break;case"connect":this.tone(r,"triangle",520,520,i,.08,.25),this.tone(r,"triangle",780,780,i+.07,.12,.25);break;case"error":this.tone(r,"sawtooth",150,110,i,.22,.22);break;case"delete":this.tone(r,"sine",500,120,i,.2,.3);break;case"click":this.tone(r,"sine",700,700,i,.04,.18);break;case"play":this.noise(r,i,.35,.3,900),this.tone(r,"sine",200,500,i,.3,.15);break;case"overload":this.tone(r,"triangle",320,320,i,.14,.32),this.tone(r,"triangle",320,320,i+.22,.14,.32);break;case"drop":this.tone(r,"square",900,300,i,.04,.05);break;case"kill":this.tone(r,"sine",110,40,i,.5,.5),this.noise(r,i,.4,.4,300);break;case"promote":this.tone(r,"sine",523,523,i,.15,.3),this.tone(r,"sine",784,784,i+.13,.25,.3);break;case"star":this.tone(r,"sine",880,1320,i,.18,.28);break;case"success":[523.25,659.25,783.99,1046.5].forEach((a,o)=>this.tone(r,"triangle",a,a,i+o*.11,.35,.3));break;case"fail":[392,349.23,293.66].forEach((a,o)=>this.tone(r,"sine",a,a*.98,i+o*.16,.3,.28));break}}setTraffic(e){if(this.ctx)try{if(!this.hum){if(e<=0||this.muted)return;const t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.value=70,n.gain.value=0,t.connect(n),n.connect(this.master),t.start(),this.hum={gain:n}}this.hum.gain.gain.value=this.muted?0:Math.min(.06,e*.06)}catch{}}}function R_(){const s=globalThis.AudioContext??globalThis.webkitAudioContext;return s?new s:void 0}const P_={tap:[[.25,15]],confirm:[[.5,30]],warn:[[.7,60],[0,40],[.7,60]],error:[[.9,120]],success:[[.4,40],[0,50],[.6,40],[0,50],[.9,90]]};function I_(s){return Ru(s).some(e=>!!(e.gamepad?.hapticActuators?.[0]?.pulse||e.gamepad?.vibrationActuator?.playEffect))}function Ru(s){try{return s?.inputSources?Array.from(s.inputSources):[]}catch{return[]}}function L_(s,e,t,n=!0){if(!n)return 0;let i=0;for(const r of Ru(s)){if(t&&r.handedness&&r.handedness!==t&&r.handedness!=="none")continue;const a=r.gamepad;if(!a)continue;let o=0,c=!1;for(const[l,h]of P_[e]){const u=o;if(o+=h,l<=0)continue;const d=()=>{try{a.hapticActuators?.[0]?.pulse?a.hapticActuators[0].pulse(l,h):a.vibrationActuator?.playEffect&&a.vibrationActuator.playEffect("dual-rumble",{duration:h,strongMagnitude:l,weakMagnitude:l*.7})}catch{}};u===0?d():setTimeout(d,u),c=!0}c&&(a.hapticActuators?.[0]?.pulse||a.vibrationActuator?.playEffect)&&i++}return i}class D_{kv;settings;sound=new C_;game;progress;daily;xrSession=null;lastScore;subs=[];notify=()=>{};constructor(e=x_(),t=0){this.kv=e,this.settings=v_(e);try{!e.getItem("sds:v1:settings")&&typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches&&(this.settings={...this.settings,reducedMotion:!0})}catch{}this.progress=Au(e),this.daily=ph($o()),this.game=new u_(t),this.game.onVerdict=(n,i)=>this.onVerdict(n,i),this.sound.setMuted(this.settings.muted),this.sound.setVolume(this.settings.volume)}onChange(e){this.subs.push(e)}changed(){this.subs.forEach(e=>e())}get level(){return this.game.level}get mode(){return this.game.mode}get slot(){return this.level.sandbox?"sandbox":zs(this.level)?`daily-${this.daily.key}`:`L${this.level.id}`}startCampaign(e){this.game.load(e),this.changed()}startSandbox(){this.game.loadSandbox(),this.changed()}startDaily(){this.daily=ph($o()),this.game.loadLevel(this.daily),this.changed()}get dailyScores(){return Cu(this.kv,this.daily.key)}onVerdict(e,t){if(!t.sandbox){if(zs(t)){const n=p_(t,e);e.passed&&e.summary?this.lastScore={score:n,...M_(this.kv,t.key,{score:n,stars:e.stars,cost:e.cost,p99:e.summary.p99Ms,at:Date.now()})}:this.lastScore=void 0}else e.passed&&(this.progress=b_(this.kv,t.id,e.stars));this.changed()}}set(e,t){this.settings={...this.settings,[e]:t},mh(this.kv,this.settings),e==="muted"&&this.sound.setMuted(t),e==="volume"&&this.sound.setVolume(t),this.changed()}resetSettings(){this.settings={...Tu},mh(this.kv,this.settings),this.sound.setMuted(!1),this.sound.setVolume(this.settings.volume),this.changed()}haptic(e){L_(this.xrSession,e,this.settings.hand,this.settings.haptics)}get hapticsAvailable(){return I_(this.xrSession)}unlockAudio(){this.sound.unlock()}save(){const e=__(this.kv,this.slot,hh(this.game.snapshot()));return this.notify(e?"Design saved on this device.":"Could not save (storage is blocked)."),e}get hasSave(){return y_(this.kv,this.slot)}load(){const e=Eu(this.kv,this.slot);if(!e)return this.notify("Nothing saved for this level yet."),!1;const t=this.game.restore(qo(e));return this.notify(t??"Design loaded."),!t}shareCode(){return hh(this.game.snapshot())}shareUrl(e=typeof location<"u"?location.origin+location.pathname:""){return`${e}#d=${this.shareCode()}`}exportJson(){return JSON.stringify(this.game.snapshot(),null,2)}importText(e){const t=qo(wu(e.trim()));if(!t.ok)return t.error;const n=t.snapshot.level;if(n!==this.level.id)if(n===0)this.game.loadSandbox();else if(n===_l)this.game.loadLevel(this.daily);else{const r=un.findIndex(a=>a.id===n);if(r<0)return"That design is for a level this version does not have.";this.game.load(r)}const i=this.game.restore(t);return this.changed(),i}async cardBlob(){if(typeof document>"u")return null;const e=document.createElement("canvas");e.width=Yo.w,e.height=Yo.h;const t=e.getContext("2d");if(!t)return null;const n=this.game.verdict;return A_(t,{title:this.level.sandbox?"My sandbox design":`${this.level.title}`,subtitle:this.level.sandbox?"Free-play system design":this.level.brief.slice(0,90),design:this.game.design,pos:this.game.pos,stars:n?.passed?n.stars:void 0,stats:n?.summary?`p99 ${n.summary.p99Ms.toFixed(0)} ms   errors ${(n.summary.errorRate*100).toFixed(1)}%   cost ${n.cost}`:`cost ${this.game.cost}`}),new Promise(i=>e.toBlob(r=>i(r),"image/png"))}tutorialSeen(e){return S_(this.kv,`tutorial-${e}`)}markTutorialSeen(e){w_(this.kv,`tutorial-${e}`)}}function U_(s){const{design:e,verdict:t}=s,n=t.summary;return[`Level ${s.level.id}: ${s.level.title}. Goal: ${s.level.lesson}`,`Components: ${e.nodes.map(i=>`${i.id}(${i.kind}${i.kind==="cache"?`,${i.policy},${i.cacheSize}`:""})`).join(", ")}`,`Wires: ${e.edges.map(i=>`${i.from}->${i.to}`).join(", ")}`,n?`Result: p50 ${n.p50Ms.toFixed(0)}ms, p99 ${n.p99Ms.toFixed(0)}ms, errors ${(n.errorRate*100).toFixed(1)}%, max queue backlog ${n.maxBacklog}`:"Result: not runnable",`Passed: ${t.passed}. Cost: ${xl(e)}.`].join(`
`)}function N_(s){return{system:"You are a friendly senior engineer reviewing a beginner's system design in a teaching game. Reply with a one-line headline, then at most 4 short bullet points: what they did well, the biggest remaining risk, and one concrete next step. No jargon without explanation.",user:U_(s)}}class jo{name="rules";async review({level:e,design:t,verdict:n}){const i=h=>t.nodes.filter(u=>u.kind===h).length,r=[],a=n.summary;if(!a)return{source:"rules",headline:"The design does not run yet.",points:n.reasons};i("api")===1&&!i("lb")&&r.push("Single point of failure: one API server means one crash takes everything down. A load balancer with two or more servers removes that."),i("api")>1&&!i("lb")&&r.push("Several API servers but no load balancer in front of them."),i("db")>=1&&!i("cache")&&e.workload.writeFraction<.6&&r.push("Reads hit the database directly. A cache in front of it absorbs repeated reads cheaply.");for(const h of t.nodes.filter(u=>u.kind==="cache")){const u=a.nodes[h.id]?.hitRate;u!==void 0&&u<.6?r.push(`${h.id} only hits ${(u*100).toFixed(0)}% of the time. A larger cache, or LFU eviction for skewed traffic, would help.`):u!==void 0&&r.push(`${h.id} answers ${(u*100).toFixed(0)}% of reads without touching the database. Nice.`)}e.workload.writeFraction>0&&!i("queue")&&!i("broker")&&a.errorRate>.005&&r.push("Bursts of writes are overwhelming the database. A queue lets it catch up at its own pace."),(i("queue")||i("broker"))&&a.maxBacklog>0&&r.push(`The queue absorbed a backlog of up to ${a.maxBacklog} writes and drained it. That is the point of buffering. Remember queued writes are eventually, not instantly, stored.`);const o=e.workload;o.writeFraction>=.4&&!i("shard")&&a.peakOverloaded.some(h=>t.nodes.find(u=>u.id===h)?.kind==="db")&&r.push("This is write-heavy and one database has a hard write ceiling. Sharding splits the data by key so each database takes a slice of the writes."),i("shard")&&a.peakOverloaded.some(h=>t.nodes.find(u=>u.id===h)?.kind==="db")&&r.push("A shard is overloaded. Keys are uneven: a hot key stays on one shard. Add shards or put a cache in front of the hot keys."),i("replica")&&a.staleReads>0&&r.push(`${a.staleReads} reads were served by a replica that was a moment behind. Fine for feeds and dashboards, risky for anything that must read its own write.`),o.events?.some(h=>h.kill)&&!i("replica")&&r.push("A database crash with no replica means an outage until someone repairs it. A replica can be promoted to primary."),o.events?.some(h=>h.kill)&&i("replica")&&!i("queue")&&!i("broker")&&r.push("Writes fail during the seconds between the crash and the promotion. A queue in front of the write path would hold them until the new primary is ready."),o.events?.some(h=>h.flushCache)&&i("cache")&&!t.nodes.some(h=>h.coalesce)&&!i("replica")&&r.push("When the cache emptied, every miss went to the database at once. Request coalescing lets one request fetch while the rest wait."),o.staticFraction&&!i("cdn")&&r.push("Most requests are static files your servers serve over and over. A CDN answers them at the edge."),i("cdn")&&a.cdnHits>0&&r.push(`The CDN answered ${a.cdnHits} requests at the edge, so your servers only handled real work.`),o.abuseFraction&&!i("limiter")&&r.push("A few abusive clients are sending most of the traffic. A per-client rate limiter stops them without hurting real users."),i("limiter")&&a.throttled>0&&r.push(`The rate limiter turned away ${a.throttled} requests from clients over their allowance. Real users kept their full speed.`),i("broker")&&!i("worker")&&r.push("A broker only holds jobs. Add workers to actually do them."),i("worker")&&a.endBacklog>0&&r.push(`${a.endBacklog} jobs were still waiting at the end. Add workers, but watch the database behind them.`);const c=Object.values(a.nodes).filter(h=>h.utilisation>.85&&h.id!=="users"&&Number.isFinite(t.nodes.find(u=>u.id===h.id)?.capacityRps??1/0)).map(h=>h.id);return c.length&&n.passed&&r.push(`${c.join(", ")} run close to capacity, so a traffic bump would tip them over. Leave some headroom.`),a.p99Ms>2.5*Math.max(a.p50Ms,1)&&a.p99Ms>100&&r.push(`Typical requests take ${a.p50Ms.toFixed(0)} ms but the slowest 1% take ${a.p99Ms.toFixed(0)} ms. Tail latency is where queues build up first.`),e.starBudget&&n.cost>e.starBudget&&r.push(`Cost ${n.cost} is above the efficient budget of ${e.starBudget}. Could a smaller design do the same job?`),n.passed||r.push(...n.reasons),{source:"rules",headline:n.passed?`Solid design: ${n.stars} of 3 stars.`:"Not there yet. Here is what to look at.",points:r.slice(0,5).length?r.slice(0,5):["Looks balanced. Try the sandbox with heavier traffic."]}}}class F_{constructor(e,t=(...n)=>fetch(...n)){this.url=e,this.fetchImpl=t}url;fetchImpl;name="llm";async review(e,t){const n=N_(e),i=await this.fetchImpl(this.url,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({...n,design:e.design}),signal:t});if(!i.ok)throw new Error(`review endpoint ${i.status}`);const r=await i.json();if(typeof r.text!="string"||!r.text.trim())throw new Error("empty review");const a=r.text.split(`
`).map(o=>o.replace(/^[-*\d.\s]+/,"").trim()).filter(Boolean);return{source:"llm",headline:a[0],points:a.slice(1,6)}}}async function O_(s,e,t=6e3){for(const n of e){const i=new AbortController,r=setTimeout(()=>i.abort(),t);try{return await Promise.race([n.review(s,i.signal),new Promise((a,o)=>i.signal.addEventListener("abort",()=>o(new Error("timeout"))))])}catch{}finally{clearTimeout(r)}}return new jo().review(s)}function k_(s){return s?[new F_(s),new jo]:[new jo]}const Ur=[{id:"capacity",term:"Capacity",short:"How many requests per second one machine can handle.",why:"Past its capacity a server cannot go faster. Extra requests wait in line, and the line has a limit."},{id:"overload",term:"Overload",short:"More requests arrive than a machine can serve.",why:"Waiting time grows, then requests are dropped. Red, pulsing nodes in the game are overloaded."},{id:"load-balancer",term:"Load balancer",short:"Spreads incoming requests across several servers.",why:"It turns many small servers into one big one, and skips servers that have died."},{id:"horizontal-scaling",term:"Horizontal scaling",short:"Add more machines instead of buying a bigger one.",why:"It has no ceiling from a single box, and it survives one machine failing. It costs money per box."},{id:"spof",term:"Single point of failure",short:"One part that, if it breaks, takes the whole system down.",why:"One API server, one database, one anything. Redundancy removes it."},{id:"cache",term:"Cache",short:"Fast memory that remembers recent answers.",why:"Popular requests are answered from memory, so the database only sees the misses. A cache is small, so it must decide what to forget."},{id:"hit-rate",term:"Hit rate",short:"The share of reads a cache answers itself.",why:"At 80% hit rate the database sees one fifth of the reads. Small changes near 100% matter a lot."},{id:"eviction",term:"Eviction",short:"How a full cache chooses what to throw away.",why:"LRU drops the entry unused for longest, LFU the least often used, FIFO the oldest. Popular-key traffic favours LFU."},{id:"p50",term:"p50 (median)",short:"Half of requests are faster than this.",why:"It describes the typical request, and hides the unlucky ones."},{id:"p99",term:"p99",short:"99 out of 100 requests are faster than this. The slowest 1% are slower.",why:"Users hit the slow tail often: a page makes many requests. Queues build in the tail first, so p99 warns you before averages do."},{id:"latency",term:"Latency",short:"How long a request takes, start to finish.",why:"Each hop adds time. Distance adds time too, which is why content is served from nearby."},{id:"queue",term:"Queue",short:"A waiting line that holds work until something can do it.",why:"It absorbs a burst of writes so the database can catch up at its own speed. Trade-off: the write is stored a moment later."},{id:"async",term:"Asynchronous work",short:"Say yes now, do the work later.",why:"The user gets an instant answer; the slow part happens in the background."},{id:"backpressure",term:"Backpressure",short:"A full downstream part slows or stops the sender.",why:"A queue only helps if its consumers eventually keep up. A full buffer starts rejecting work."},{id:"headroom",term:"Headroom",short:"Spare capacity above normal load.",why:"A machine at 95% has nowhere to go when traffic bumps. Aim for 60 to 70% at peak."},{id:"hot-key",term:"Hot key",short:"One item that gets a huge share of the traffic.",why:"It overloads whatever stores it. Adding shards cannot split one key, but a tiny cache absorbs it."},{id:"sharding",term:"Sharding",short:"Split data across databases by key.",why:"Each database handles a slice of the writes, so total write capacity multiplies. Uneven keys make uneven shards."},{id:"thundering-herd",term:"Thundering herd",short:"Many requests miss at once and all hit the database together.",why:"It happens when a cache empties or a hot entry expires. The database sees a stampede it was never sized for."},{id:"coalescing",term:"Request coalescing",short:"Concurrent misses for one key share a single database read.",why:"One request fetches, the rest wait for its answer. The database sees one read instead of thousands."},{id:"replica",term:"Read replica",short:"A live copy of the database that serves reads.",why:"Reads spread across copies, so read capacity multiplies. Writes still go to the primary."},{id:"replication-lag",term:"Replication lag",short:"A replica is slightly behind the primary.",why:"A read right after a write may return the old value. That is the price of scaling reads."},{id:"failover",term:"Failover",short:"Promote a standby to take over when the primary dies.",why:"It is not instant: the system must notice the failure, then promote. During that gap writes fail unless something holds them."},{id:"health-check",term:"Health check",short:"A regular ping that finds dead machines.",why:"Until the next check, a balancer still sends traffic to a machine that is already down."},{id:"cdn",term:"CDN",short:"Servers near users that cache static files.",why:"Images and scripts are served from the edge, close to the user, and your own servers never see those requests."},{id:"static-assets",term:"Static assets",short:"Files that are the same for everyone: images, scripts, styles.",why:"They are perfect to cache, since nothing about them is personal."},{id:"rate-limiter",term:"Rate limiter",short:"Caps how many requests each client may send.",why:"It protects the servers from a few abusive clients so everyone else still gets through."},{id:"token-bucket",term:"Token bucket",short:"Each client has a bucket that refills steadily; each request spends a token.",why:"Bursts are allowed up to the bucket size, but sustained flooding runs dry."},{id:"fairness",term:"Fairness",short:"Every client gets a similar share.",why:"Per-client limits punish only the heavy senders. A global limit would punish everybody."},{id:"message-broker",term:"Message broker",short:"A durable inbox that holds jobs until workers take them.",why:"It decouples accepting work from doing it, so a burst does not overwhelm the workers."},{id:"worker-pool",term:"Worker pool",short:"Several machines that pull jobs from a queue.",why:"Add workers to drain a backlog faster. Too many can overwhelm the database behind them."},{id:"chaos",term:"Failure injection",short:"Breaking things on purpose to see what happens.",why:"Real systems fail. Testing failure early shows which designs recover and which do not."}],B_=new Map(Ur.map(s=>[s.id,s]));function Pu(s){return B_.get(s)}const xh={client:"Users: the source of all traffic. Everything flows from here.",lb:"Load balancer: spreads requests across servers and skips dead ones.",api:"API server: runs your code. Handles about 400 requests a second.",cache:"Cache: memory that answers popular reads. Tap it to change size and eviction.",db:"Database: the source of truth. Slow, and limited to about 300 requests a second.",queue:"Queue: holds bursts of writes and hands them to the database at its pace.",replica:"Read replica: a copy of the database that serves reads. Can lag slightly.",cdn:"CDN: caches static files near users so your servers never see them.",limiter:"Rate limiter: gives each client an allowance and rejects the excess.",shard:"Shard router: sends each key to one of several databases.",broker:"Message broker: a durable inbox. Acknowledges jobs instantly, workers take them later.",worker:"Worker pool: pulls jobs from the broker and does the slow work."},gi=(s,e)=>s.nodes.some(t=>t.kind===e),z_=(s,e)=>s.nodes.filter(t=>t.kind===e).length,$i=s=>`${Math.round(s*100)}%`;function gh(s,e,t,n){const i=[],r=(l,h)=>i.push({concept:l,text:h}),a=l=>t?.[l.id]?.overloaded,o=e.nodes.filter(l=>t?.[l.id]?.down);for(const l of o)r("failover",`${l.id} is down. Watch which requests fail, and how long until traffic routes around it. Tap it again to bring it back.`);for(const l of e.nodes)a(l)&&(l.kind==="db"&&!gi(e,"cache")&&s.workload.writeFraction<.5?r("cache",`${l.id} is overloaded. Most traffic is reads of popular keys: a cache in front of it answers those from memory.`):l.kind==="db"&&gi(e,"replica")===!1&&s.palette.includes("replica")?r("replica",`${l.id} is overloaded. A read replica is a live copy that serves reads, so the primary only takes writes.`):l.kind==="db"&&r("capacity",`${l.id} is overloaded. Check the cache hit rate, and whether writes can wait in a queue.`),l.kind==="api"&&r("horizontal-scaling",`${l.id} can't keep up. Add another API server behind the load balancer: two small servers share the load.`),l.kind==="lb"&&r("capacity",`${l.id} is saturated. Even a load balancer has a ceiling.`),l.kind==="cache"&&r("capacity",`${l.id} is saturated. Split traffic across more caches.`),Rn(l.kind)&&r("backpressure",`${l.id} is filling faster than it drains. A queue only helps if its consumers eventually keep up.`),l.kind==="worker"&&r("worker-pool",`${l.id} is the slow step. Add more workers behind the broker so jobs drain faster.`),l.kind==="replica"&&r("replica",`${l.id} is saturated. Add another replica or put a cache in front.`),l.kind==="shard"&&r("sharding",`${l.id} is saturated.`));const c=e.nodes.filter(l=>e.edges.some(h=>h.from!==""&&h.to===l.id&&e.nodes.find(u=>u.id===h.from)?.kind==="shard"));if(t&&c.length>1){const l=c.map(h=>t[h.id]?.arrivalRps??0);Math.max(...l)>1.6*Math.max(1,Math.min(...l))&&Math.max(...l)>60&&r("hot-key","One shard is much busier than the others. Popular keys stay on one shard, and splitting the database cannot split one key. A cache absorbs a hot key.")}for(const l of e.nodes.filter(h=>h.kind==="cache")){const h=t?.[l.id]?.hitRate;h!==void 0&&t?.[l.id]&&t[l.id].arrivalRps>20&&h<.5&&r("eviction",`${l.id} only answers ${$i(h)} of reads. A cache is small, so it must forget things. Tap it to change the eviction policy: LFU keeps the most popular keys, which suits skewed traffic.`)}if(n&&n.p99>2.5*Math.max(1,n.p50)&&n.p99>120&&r("p99",`p50 is ${n.p50.toFixed(0)} ms but p99 is ${n.p99.toFixed(0)} ms. p99 means the slowest 1% of requests. Queues build up in that tail first, so it warns you before the average does.`),!t){z_(e,"api")===1&&!gi(e,"lb")&&s.palette.includes("lb")&&r("spof","One API server is a single point of failure: if it crashes, everything stops. A load balancer with two servers removes that.");for(const h of s.goal.requires)gi(e,h)||r(void 0,`This level needs a ${h}. Pinch one from the shelf.`);s.goal.requiresAny&&!s.goal.requiresAny.some(h=>gi(e,h))&&r(void 0,`Try adding one of: ${s.goal.requiresAny.join(", ")}.`),gi(e,"cache")&&r("eviction","Tap a cache to change its size and eviction policy. A cache can only hold so many keys, so it has to decide what to forget."),gi(e,"replica")&&r("replication-lag","Replicas serve reads but may lag a moment behind, so a read right after a write can be stale.")}return i.length?i:[{text:t?"Everything is healthy. Watch the p99 in the corner, and try the sandbox load slider.":"Wire everything from Users to the database, then press PLAY."}]}const V_=(s,e)=>{let t;for(const n of e.nodes){if(n.kind==="client")continue;const i=s.peakUtil[n.id]??0;(!t||i>t.util)&&(t={id:n.id,util:i})}return t};function H_(s,e,t){const n=t.summary,i=[],r=[],a=h=>{r.includes(h)||r.push(h)};if(!n)return{title:"It did not run",lines:t.reasons,concepts:[]};const o=new Map(e.nodes.map(h=>[h.id,h])),c=n.series.reduce((h,u)=>u.arrivals>h.arrivals?u:h,n.series[0]??{t:0,arrivals:0,errors:0,backlog:0});i.push(`Traffic peaked at about ${c.arrivals} requests per second around ${c.t}s.`);const l=Object.entries(n.firstOverloadSec).sort((h,u)=>h[1]-u[1]);if(l.length){const[h,u]=l[0],d=o.get(h),f=n.peakUtil[h]??0;i.push(`${h} was the first to break, at ${u.toFixed(0)}s. It peaked at ${$i(f)} of its ${d.capacityRps} rps capacity, so extra requests waited in line and then were dropped.`),a("capacity"),a("overload")}else if(n.errorRate>.02&&n.log.some(h=>/crash/.test(h.text))){const h=n.log.find(d=>/crash/.test(d.text)),u=n.log.find(d=>/promoted/.test(d.text));i.push(`Nothing was overloaded: the errors came from the crash. ${h.nodeId??"A part"} died at ${h.t.toFixed(0)}s and every request that needed it failed${u?`, until ${u.nodeId} took over at ${u.t.toFixed(0)}s`:", and nothing ever took over"}.`),a("failover"),a("spof")}else{const h=V_(n,e);h&&h.util>.05&&i.push(`Nothing overloaded. The busiest part, ${h.id}, peaked at ${$i(h.util)} of capacity${h.util>.85?", which leaves little headroom":", a comfortable margin"}.`),h&&h.util>.85&&a("headroom")}for(const h of e.nodes.filter(u=>u.kind==="cache")){const u=n.nodes[h.id]?.hitRate;u!==void 0&&(i.push(`${h.id} answered ${$i(u)} of reads from memory (${h.policy?.toUpperCase()}, ${h.cacheSize} keys), so downstream only saw ${$i(1-u)} of them.`),a("hit-rate"),a("eviction")),h.coalesce&&n.coalesced>0&&(i.push(`${n.coalesced} requests waited for another request's fetch instead of hitting the database themselves.`),a("coalescing"))}for(const h of e.nodes.filter(u=>u.kind==="cdn"))i.push(`The CDN answered ${n.cdnHits} static requests at the edge (${$i(n.nodes[h.id]?.hitRate??0)} of them), so your servers never saw those.`),a("cdn");n.throttled>0?(i.push(`The rate limiter rejected ${n.throttled} requests; ${n.abuseBlocked} of the rejected or failed were from abusive clients.`),a("rate-limiter")):s.workload.abuseFraction&&(i.push(`Abusive clients sent ${Math.round(s.workload.abuseFraction*100)}% of the traffic and nothing stopped them, so they competed with real users for capacity.`),a("rate-limiter")),n.staleReads>0&&(i.push(`${n.staleReads} reads came from a replica that had not yet seen a very recent write. That is replication lag.`),a("replication-lag")),n.maxBacklog>20&&(i.push(`The queue absorbed a backlog of up to ${n.maxBacklog} writes${n.endBacklog>0?`, and ${n.endBacklog} were still waiting at the end`:" and fully drained it"}.`),a("queue"));for(const h of n.log)i.push(`At ${h.t.toFixed(0)}s: ${h.text}.`),(/crash/.test(h.text)||/promoted/.test(h.text))&&(a("failover"),a("health-check")),/emptied/.test(h.text)&&a("thundering-herd");return i.push(`Typical (p50) request: ${n.p50Ms.toFixed(0)} ms. Slowest 1% (p99): ${n.p99Ms.toFixed(0)} ms.${n.p99Ms>2.5*Math.max(1,n.p50Ms)?" The tail is much slower than typical: that is where queues build up first.":""} Errors: ${(n.errorRate*100).toFixed(1)}%.`),a("p99"),{title:t.passed?"What happened (you passed)":"What happened",lines:i,concepts:r}}function G_(s){return s.map(e=>Pu(e)).filter(e=>!!e).map(e=>`${e.term}: ${e.short}`)}function W_(s){const e=s.summary;return e?`p50 ${e.p50Ms.toFixed(0)} ms    p99 ${e.p99Ms.toFixed(0)} ms    errors ${(e.errorRate*100).toFixed(1)}%    cost ${s.cost}`:""}function X_(s,e){const t=s.goal;if(t.observeOnly)return"Goal: wire it up and watch it run.";const n=e.summary,i=[`clear the goal (errors under ${(t.maxErrorRate*100).toFixed(0)}%, p99 under ${t.maxP99Ms} ms)`,`p99 under ${(t.maxP99Ms/2).toFixed(0)} ms${n&&e.passed&&n.p99Ms<=t.maxP99Ms/2?" (got it)":""}`];return s.starBudget&&i.push(`cost ${s.starBudget} or less${e.passed&&e.cost<=s.starBudget?" (got it)":""}`),"Stars: "+i.join("  |  ")}function q_(s,e,t,n,i){const r=H_(s,e,t),a=t.passed?`LEVEL CLEARED  ${t.stars} of 3 stars`:"NOT YET",o=t.passed?"":`
`+t.reasons.join(" "),c=i?.score!==void 0?`
SCORE ${i.score}${i.isBest?"  NEW PERSONAL BEST":i.best?.length?`   best ${i.best[0].score}`:""}`:"",l=`${a}
${W_(t)}${o}${c}
${X_(s,t)}

${r.title.toUpperCase()}
`+r.lines.map(u=>"- "+u).join(`
`),h=(n?`REVIEW: ${n.headline}
`+n.points.map(u=>"- "+u).join(`
`):`REVIEW
Asking for a design review...`)+`

IDEAS IN PLAY
`+G_(r.concepts.slice(0,5)).map(u=>"- "+u).join(`
`);return[l,h]}const vh=(s,e,t)=>s.edges.some(n=>n.from===e&&n.to===t),_h=(s,e)=>s.nodes.find(t=>t.id===e)?.kind,Ss=(s,e,t)=>s.edges.some(n=>_h(s,n.from)===e&&_h(s,n.to)===t),$_={1:[{id:"wire-api",text:"Welcome. Requests flow left to right. Pinch and drag from the small white dot on the right of USERS onto the API box to wire them.",done:s=>vh(s.design,"users","api1")},{id:"wire-db",text:"Good. Now drag from the API's dot onto DB. Wires are how traffic travels.",done:s=>vh(s.design,"api1","db")},{id:"play",text:"Press PLAY (green button, or Space) to send simulated traffic through your design.",done:s=>s.played},{id:"overload",text:"Watch the API turn red and pulse: it is OVERLOADED. One server can only serve 400 requests a second. Anything beyond waits, then is dropped.",done:s=>!!s.verdict},{id:"next",text:"That is the core loop: build, run, read the colours. Press LEVEL > to meet the load balancer.",done:()=>!1}],2:[{id:"lb",text:"Pinch a LB off the shelf and drop it in the middle of the board.",done:s=>s.design.nodes.some(e=>e.kind==="lb")},{id:"api",text:"Add a second API from the shelf. Two servers can share what one cannot.",done:s=>s.design.nodes.filter(e=>e.kind==="api").length>=2},{id:"wire",text:"Wire Users to the LB, the LB to each API, and each API to DB. Cut the old direct wire by tapping its red dot.",done:s=>Ss(s.design,"lb","api")&&Ss(s.design,"client","lb")},{id:"play",text:"Press PLAY. Watch requests split across both servers.",done:s=>s.played},{id:"done",text:"Load balancer: many small servers act like one big one, and one can fail without taking you down.",done:()=>!1}],3:[{id:"play",text:"The database is the bottleneck. Press PLAY and watch it turn red.",done:s=>s.played},{id:"cache",text:"Most reads ask for the same popular keys. Pinch a CACHE from the shelf and drop it between the APIs and the DB.",done:s=>s.design.nodes.some(e=>e.kind==="cache")},{id:"wire",text:"Wire each API to the cache, and the cache to DB. Then cut the direct API-to-DB wires: tap their red dots.",done:s=>Ss(s.design,"api","cache")&&Ss(s.design,"cache","db")&&!Ss(s.design,"api","db")},{id:"rerun",text:"Press PLAY again and watch the DB go green. Tap the cache to try another eviction policy: it decides what a full cache forgets.",done:s=>!!s.verdict?.passed},{id:"done",text:"Cache: popular reads are answered from memory, so the database only sees the misses.",done:()=>!1}]};class $r{constructor(e){this.steps=e}steps;idx=0;get finished(){return this.idx>=this.steps.length}current(e){for(;this.idx<this.steps.length-1&&this.steps[this.idx].done(e);)this.idx++;return this.steps[this.idx]}get index(){return this.idx}static forLevel(e){const t=$_[e];return t?new $r(t):void 0}}class Zt extends st{constructor(e,t,n=900,i={}){const r=document.createElement("canvas");r.width=Math.ceil(e*n),r.height=Math.ceil(t*n);const a=new zf(r);a.colorSpace=$t,super(new Fn(e,t),new At({map:a,transparent:!0,depthWrite:!1})),this.wM=e,this.hM=t,this.pxPerM=n,this.style=i,this.tex=a,this.ctx=r.getContext("2d"),this.setText("")}wM;hM;pxPerM;style;ctx;tex;last="";setText(e,t={}){const n=e+JSON.stringify(t);if(n===this.last)return;this.last=n;const i={font:"bold 44px system-ui, sans-serif",color:"#ffffff",bg:"",align:"left",pad:24,lineHeight:1.25,radius:24,...this.style,...t},{ctx:r}=this,a=r.canvas.width,o=r.canvas.height;r.clearRect(0,0,a,o),i.bg&&(r.fillStyle=i.bg,r.beginPath(),r.roundRect(0,0,a,o,i.radius),r.fill()),r.font=i.font,r.fillStyle=i.color,r.textAlign=i.align,r.textBaseline="top";const c=parseInt(/(\d+)px/.exec(i.font)?.[1]??"40",10),l=i.align==="center"?a/2:i.align==="right"?a-i.pad:i.pad;let h=i.pad;for(const u of e.split(`
`)){let d="";for(const f of u.split(" ")){const m=d?`${d} ${f}`:f;r.measureText(m).width>a-2*i.pad&&d?(r.fillText(d,l,h),h+=c*i.lineHeight,d=f):d=m}r.fillText(d,l,h),h+=c*i.lineHeight}this.tex.needsUpdate=!0}}const yh=[16765286,15681391,448160,1149618,11889919,16777215];class Y_{root=new $n;reduced=!1;sparks=[];inst;rings=[];free=[];tmpM=new Ue;tmpQ=new vn;tmpS=new R;tmpP=new R;cap=500;constructor(){this.inst=new $h(new Fn(1,1),new At({color:16777215,side:Qt,transparent:!0}),this.cap),this.inst.count=0,this.inst.frustumCulled=!1,this.inst.position.z=.06,this.inst.renderOrder=40,this.root.add(this.inst)}ring(e,t,n,i=.09,r=.5){if(this.reduced)return;const a=this.free.pop()??new st(new hl(.92,1,40),new At({transparent:!0,side:Qt,depthWrite:!1}));a.material.color.set(n),a.renderOrder=40,a.position.set(e,t,.05),a.visible=!0,this.root.add(a),this.rings.push({mesh:a,t:0,dur:r,from:i*.4,to:i})}burst(e,t,n,i=14,r=.18){if(this.reduced)return;const a=new be(n);for(let o=0;o<i&&this.sparks.length<this.cap;o++){const c=Math.random()*Math.PI*2,l=r*(.4+Math.random());this.sparks.push({x:e,y:t,vx:Math.cos(c)*l,vy:Math.sin(c)*l,life:0,max:.35+Math.random()*.35,size:.008+Math.random()*.007,g:0,color:a,spin:0})}}confetti(e=140){if(!this.reduced)for(let t=0;t<e&&this.sparks.length<this.cap;t++){const n=(Math.random()-.5)*1.3;this.sparks.push({x:n,y:-.42,vx:(Math.random()-.5)*.35,vy:.55+Math.random()*.6,life:-Math.random()*.4,max:1.8+Math.random()*.8,size:.014+Math.random()*.012,g:-.7,color:new be(yh[t%yh.length]),spin:4+Math.random()*8})}}get active(){return this.sparks.length+this.rings.length}clear(){this.sparks.length=0;for(const e of this.rings)e.mesh.visible=!1,this.root.remove(e.mesh),this.free.push(e.mesh);this.rings.length=0,this.inst.count=0}update(e){for(let n=this.rings.length-1;n>=0;n--){const i=this.rings[n];i.t+=e;const r=i.t/i.dur;if(r>=1){i.mesh.visible=!1,this.root.remove(i.mesh),this.free.push(i.mesh),this.rings.splice(n,1);continue}const a=i.from+(i.to-i.from)*(1-(1-r)*(1-r));i.mesh.scale.setScalar(a),i.mesh.material.opacity=.9*(1-r)}let t=0;for(let n=this.sparks.length-1;n>=0;n--){const i=this.sparks[n];if(i.life+=e,!(i.life<0)){if(i.life>=i.max){this.sparks.splice(n,1);continue}i.vy+=i.g*e,i.x+=i.vx*e,i.y+=i.vy*e}}for(const n of this.sparks){if(n.life<0||t>=this.cap)continue;const i=1-n.life/n.max;this.tmpP.set(n.x,n.y,0),this.tmpQ.setFromAxisAngle(new R(0,0,1),n.life*n.spin);const r=n.size*(n.spin?1+Math.sin(n.life*n.spin*2)*.6:1);this.tmpS.set(r*(.4+i*.6),n.size*(.4+i*.6),1),this.tmpM.compose(this.tmpP,this.tmpQ,this.tmpS),this.inst.setMatrixAt(t,this.tmpM),this.inst.setColorAt(t,n.color),t++}this.inst.count=t,this.inst.instanceMatrix.needsUpdate=!0,this.inst.instanceColor&&(this.inst.instanceColor.needsUpdate=!0)}}const j_=15;class J_{constructor(e){this.v=e,this.backdrop=new st(new Fn(1.36,.78),new At({color:725024,transparent:!0,opacity:1})),this.group.add(this.backdrop),this.v.reg(this.backdrop,{}),this.title.position.set(0,.33,.005),this.group.add(this.title),this.body.position.set(0,-.3,.005),this.group.add(this.body);for(let t=0;t<j_;t++){const n=new Zt(.4,.095,800,{font:"bold 27px system-ui, sans-serif",bg:"#26346b",align:"center",pad:14,radius:20});n.position.set(-.42+t%3*.42,.21-Math.floor(t/3)*.125,.006),this.group.add(n),this.slots.push(n);const i=t;this.v.reg(n,{click:()=>this.tap(i)})}this.group.position.set(0,.02,.11),this.group.traverse(t=>{t.renderOrder=31}),this.backdrop.renderOrder=29,this.v.root.add(this.group),this.setVisible(!1)}v;group=new $n;title=new Zt(1.24,.09,800,{font:"bold 34px system-ui, sans-serif",color:"#ffffff",pad:6});body=new Zt(1.24,.2,800,{font:"24px system-ui, sans-serif",color:"#cfd8ff",pad:8});slots=[];backdrop;page="main";gloss=0;sel=-1;message="";dirty=!1;open_=!1;items=[];get isOpen(){return this.open_}toggle(){this.open_?this.close():this.open("main")}close(){this.open_=!1,this.setVisible(!1)}open(e){this.page=e,this.open_=!0,this.message="",this.setVisible(!0),this.build()}setVisible(e){this.group.visible=e;for(const t of[this.backdrop,...this.slots])t.pointerEvents=e?"auto":"none"}tap(e){const t=this.items[e];!t||t.disabled||(this.v.app.sound.play("click"),this.v.app.haptic("tap"),t.fn(),this.dirty=!0)}update(e){this.dirty&&(this.dirty=!1,this.open_&&this.build())}go(e){return()=>{this.page=e,this.message="",this.sel=-1}}build(){const e=this.v.app,t=e.settings,n=this.v.game;let i="MENU",r=[],a=this.message;const o=()=>this.close();switch(this.page){case"main":i="MENU",r=[{label:"CAMPAIGN",fn:this.go("levels")},{label:"SANDBOX",fn:()=>{this.v.loadSandbox(),o()},on:n.mode==="sandbox"},{label:`DAILY ${e.daily.key.slice(5)}`,fn:()=>{this.v.loadDaily(),o()},on:n.mode==="daily"},{label:"SAVE",fn:()=>e.save()},{label:"LOAD",fn:()=>{e.load(),o()},disabled:!e.hasSave},{label:"SHARE / IMPORT",fn:this.go("share")},{label:"GLOSSARY",fn:this.go("glossary")},{label:"COMFORT",fn:this.go("settings")},{label:"TIDY LAYOUT",fn:()=>{n.tidy(),o()}},{label:"TUTORIAL",fn:()=>{this.v.restartTutorial(),o()}},{label:"CLOSE",fn:o}],a=zs(n.level)?`Daily best: ${e.dailyScores[0]?.score??"none yet"}. Same puzzle for everyone today.`:`Stars earned: ${Object.values(e.progress).reduce((c,l)=>c+l,0)} of ${un.length*3}`;break;case"levels":i="CAMPAIGN",r=un.map((c,l)=>({label:`${c.id} ${c.title.slice(0,15)} ${"*".repeat(e.progress[c.id]??0)}`,fn:()=>{this.v.loadLevel(l),o()},on:n.mode==="campaign"&&n.index===l})),r.push({label:"BACK",fn:this.go("main")}),a="";break;case"settings":i="COMFORT AND ACCESSIBILITY",r=[{label:`HAND: ${t.hand.toUpperCase()}`,fn:()=>{e.set("hand",t.hand==="right"?"left":"right"),this.v.applySettings()}},{label:"BOARD HIGHER",fn:()=>{e.set("heightOffset",Math.min(.5,Math.round((t.heightOffset+.05)*100)/100)),this.v.applySettings()}},{label:"BOARD LOWER",fn:()=>{e.set("heightOffset",Math.max(-.5,Math.round((t.heightOffset-.05)*100)/100)),this.v.applySettings()}},{label:"RECENTER BOARD",fn:()=>{this.message=this.v.recenter?"Board moved in front of you.":"Recentering works inside a headset.",this.v.recenter?.()}},{label:`LARGE TARGETS: ${t.largeTargets?"ON":"OFF"}`,on:t.largeTargets,fn:()=>{e.set("largeTargets",!t.largeTargets),this.v.applySettings()}},{label:`REDUCED MOTION: ${t.reducedMotion?"ON":"OFF"}`,on:t.reducedMotion,fn:()=>{e.set("reducedMotion",!t.reducedMotion),this.v.applySettings()}},{label:`SOUND: ${t.muted?"MUTED":"ON"}`,on:!t.muted,fn:()=>e.set("muted",!t.muted)},{label:`VOLUME ${Math.round(t.volume*100)}%  +`,fn:()=>e.set("volume",Math.min(1,Math.round((t.volume+.1)*10)/10))},{label:"VOLUME -",fn:()=>e.set("volume",Math.max(0,Math.round((t.volume-.1)*10)/10))},{label:`HAPTICS: ${t.haptics?"ON":"OFF"}`,on:t.haptics,fn:()=>e.set("haptics",!t.haptics)},{label:`HINTS: ${t.hints?"ON":"OFF"}`,on:t.hints,fn:()=>e.set("hints",!t.hints)},{label:"BACK",fn:this.go("main")}],a=`Dominant hand puts the PLAY controls on that side. Seated: raise or lower the board until it sits at chest height. Height offset ${(t.heightOffset*100).toFixed(0)} cm.${e.hapticsAvailable?"":" Haptics need controllers; hand tracking has none."}`;break;case"share":i="SHARE YOUR DESIGN",r=[{label:"COPY LINK",fn:()=>{this.copy(e.shareUrl())}},{label:"COPY JSON",fn:()=>{this.copy(e.exportJson())}},{label:"SAVE IMAGE",fn:()=>{this.image()}},{label:"IMPORT: PASTE",fn:()=>{this.paste()}},{label:"BACK",fn:this.go("main")}],a=this.message||"A link or JSON holds your whole design. Send it to a friend and they can import it. Imports are checked, and can never change a part's capacity.";break;case"glossary":{i="GLOSSARY";const c=12,l=Math.ceil(Ur.length/c);for(r=Ur.slice(this.gloss*c,this.gloss*c+c).map((d,f)=>({label:d.term.slice(0,20),fn:()=>{this.sel=this.gloss*c+f},on:this.sel===this.gloss*c+f}));r.length<c;)r.push({label:"",fn:()=>{},disabled:!0});r.push({label:`PAGE ${this.gloss+1}/${l}  >`,fn:()=>{this.gloss=(this.gloss+1)%l,this.sel=-1}},{label:"BACK",fn:this.go("main")});const u=Ur[this.sel];a=u?`${u.term}: ${u.short}  ${u.why}`:"Tap a term to read what it means and why it matters.";break}}this.items=r,this.title.setText(i),this.body.setText(a,{font:a.length>200?"20px system-ui, sans-serif":"24px system-ui, sans-serif"}),this.slots.forEach((c,l)=>{const h=r[l];c.visible=this.group.visible&&!!h&&(h.label!==""||!1),c.pointerEvents=c.visible&&!h?.disabled?"auto":"none",h&&c.setText(h.label,{bg:h.disabled?"#1a2438":h.on?"#2f6b4f":"#26346b",color:h.disabled?"#6a7590":"#ffffff",font:h.label.length>18?"bold 22px system-ui, sans-serif":"bold 27px system-ui, sans-serif"})})}async copy(e){try{await navigator.clipboard.writeText(e),this.message="Copied to the clipboard."}catch{this.message=e.length<300?e:"Clipboard is blocked here. Use the desktop HUD to copy the link."}this.dirty=!0}async paste(){try{const e=await navigator.clipboard.readText(),t=this.v.app.importText(e);this.v.refreshLevel(),this.message=t??"Imported. Undo will bring your old board back.",t||this.close()}catch{this.message="Clipboard is blocked here. Use the desktop HUD to import."}this.dirty=!0}async image(){const e=await this.v.app.cardBlob();if(!e){this.message="Images need a browser canvas.",this.dirty=!0;return}const t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="my-system-design.png",t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),4e3),this.message="Image saved to your downloads.",this.dirty=!0}}const Cr={client:8162559,lb:11889919,api:4054167,cache:16758087,db:5227511,queue:16743096,replica:3057369,cdn:16747069,limiter:14703194,shard:9338367,broker:14241712,worker:10149722},bh={client:"USERS",lb:"LB",api:"API",cache:"CACHE",db:"DB",queue:"QUEUE",replica:"REPL",cdn:"CDN",limiter:"LIMIT",shard:"SHARD",broker:"BROKER",worker:"WORK"},Mh=.075,Sh=-.065,K_="bold 30px system-ui, sans-serif",ws=[100,200,300,400,500,600,800,1e3,1200,1500,2e3,3e3];class Z_{constructor(e){this.app=e;const t=new st(new Fn(Ds.w,Ds.h),new Go({color:1054770,roughness:.9,side:Qt}));this.root.add(t),this.reg(t,{move:(n,i)=>this.dragMove(n,i),up:(n,i)=>this.dragEnd(n,i)}),this.info.position.set(0,.56,.02),this.root.add(this.info),this.coach.position.set(0,.85,.02),this.root.add(this.coach),this.overlay.position.set(0,0,.09),this.overlay.renderOrder=20,this.root.add(this.overlay),this.reg(this.overlay,{}),this.toastPlane.position.set(0,-.3,.13),this.toastPlane.renderOrder=60,this.toastPlane.visible=!1,this.root.add(this.toastPlane),this.root.add(this.fx.root),this.fx.root.traverse(n=>{n.renderOrder=40}),this.ghost=this.makeNodeBody("api",!1),this.ghost.visible=!1,this.root.add(this.ghost),this.preview=new st(new Hr(.005,.005,1,8),new At({color:16777215})),this.preview.visible=!1,this.root.add(this.preview),this.pMesh=new $h(new Ls(.011,8,6),new At({color:16777215}),480),this.pMesh.frustumCulled=!1,this.pMesh.count=0,this.pMesh.position.z=.03,this.root.add(this.pMesh),this.buildButtons(),this.buildBin(),this.buildStars(),this.menu=new J_(this),this.setOverlayVisible(!1),this.game.onChange(()=>{this.dirty=!0,this.status==="running"?this.stop():this.status==="done"&&!this.game.verdict&&(this.status="edit",this.setOverlayVisible(!1))}),e.notify=n=>this.toast(n),this.applySettings(),this.levelChanged()}app;root=new $n;fx=new Y_;menu;nodes=new Map;wires=new Map;ghost;preview;info=new Zt(1.5,.3,700,{font:"bold 27px system-ui, sans-serif",bg:"rgba(12,18,40,0.88)",pad:14});coach=new Zt(1.5,.22,700,{font:"bold 27px system-ui, sans-serif",bg:"rgba(14,70,84,0.94)",color:"#e6fbff",pad:14});overlay=new Zt(1.42,.8,700,{font:"bold 25px system-ui, sans-serif",bg:"rgba(12,18,40,0.97)",pad:22});toastPlane=new Zt(1.2,.11,900,{font:"bold 32px system-ui, sans-serif",bg:"rgba(160,40,40,0.95)",align:"center",pad:10});buttons=new Map;btnBase=new Map;ovButtons=[];stars=[];particles=[];pMesh;budget=new Map;edgeRate=new Map;dropAcc=new Map;drag;dirty=!0;shelfDirty=!0;toastT=0;hintIdx=0;uiT=0;time=0;acc=0;pin;review;ovPages=["",""];ovPage=0;tutorial;played=!1;starT=-1;lastLevel;status="edit";speed=2;sim;load={rps:500,writeFraction:.2};burstUntil=0;interactives=[];onToast;onLevelChange;onBoardMoved;recenter;endpoint=null;get game(){return this.app.game}reg(e,t){e.userData.h=t;const n=e;n.addEventListener("pointerdown",i=>{this.app.unlockAudio(),t.down?.(i.point,i.pointerId??0)}),n.addEventListener("pointermove",i=>t.move?.(i.point,i.pointerId??0)),n.addEventListener("pointerup",i=>t.up?.(i.point,i.pointerId??0)),n.addEventListener("click",()=>{this.app.unlockAudio(),t.click?.()}),this.interactives.push(e)}unreg(e){this.interactives=this.interactives.filter(t=>t!==e)}local(e){const t=this.root.worldToLocal(e.clone());return{x:t.x,y:t.y}}get reduced(){return this.app.settings.reducedMotion}posOf(e){return this.game.pos[e]??{x:0,y:0}}dragMove(e,t){const n=this.drag;if(!n||n.pid!==t)return;const i=this.local(e);if(n.type==="new")n.moved=!0,this.ghost.visible=!0,this.ghost.position.set(i.x,i.y,.05);else if(n.type==="move"){if(!n.moved&&Math.hypot(i.x-n.start.x,i.y-n.start.y)<.02)return;n.moved||this.game.checkpoint(),n.moved=!0,this.game.move(n.id,i)}else if(n.type==="wire"){const r=this.portPos(n.from,!0);this.setSegment(this.preview,new R(r.x,r.y,.03),new R(i.x,i.y,.03)),this.preview.visible=!0;const a=dh(this.game,i,.09,n.from);this.preview.material.color.set(a&&gl(this.game.design,n.from,a)?16733525:a?5635993:16777215)}}dragEnd(e,t){const n=this.drag;if(!n||n.pid!==t)return;this.drag=void 0,this.ghost.visible=!1,this.preview.visible=!1;const i=this.local(e);if(n.type==="new"){if(!n.moved){this.toast(this.partInfo(n.kind),!1),this.app.sound.play("click");return}if(i.y>-.43&&Math.abs(i.x)<Ds.w/2){const r=this.game.add(n.kind,i);r?(this.app.sound.play("place",this.posOf(r)),this.app.haptic("confirm"),this.fx.ring(this.posOf(r).x,this.posOf(r).y,Cr[n.kind],.1,.4)):this.fail("Not available in this level.")}}else if(n.type==="move"){if(!n.moved){this.nodeTapped(n.id);return}Math.hypot(i.x-.66,i.y+.52)<.1&&(this.game.remove(n.id)?(this.app.sound.play("delete"),this.app.haptic("confirm")):(this.fail("Users can't be deleted."),this.game.move(n.id,n.start)))}else{const r=dh(this.game,i,.09,n.from);if(r){const a=this.game.connect(n.from,r);if(a)this.fail(a);else{const o=this.posOf(r);this.app.sound.play("connect",o),this.app.haptic("confirm"),this.fx.ring(o.x,o.y,5635993,.09,.35)}}}}partInfo(e){return`${xh[e]}  Cost ${ml[e]}.`}nodeTapped(e){const t=this.game.design.nodes.find(i=>i.id===e);if(!t)return;const n=this.posOf(e);if(this.status==="running"&&this.sim&&this.game.level.sandbox&&t.kind!=="client"){this.sim.toggle(e);return}if(t.kind==="cache"){this.game.cycleCache(e);const i=this.game.design.nodes.find(r=>r.id===e);this.toast(`${e}: ${i.policy?.toUpperCase()} ${i.cacheSize} keys${i.coalesce?" + single-flight":""}`,!1),this.app.sound.play("click",n),this.fx.ring(n.x,n.y,Cr.cache,.09,.3)}else this.toast(xh[t.kind],!1),this.app.sound.play("click",n)}makeNodeBody(e,t=!0){const n=new $n,i=new be(Cr[e]),r=new st(new Jn(.12,.1,.04),new Go({color:i,emissive:i,emissiveIntensity:.25,roughness:.5}));r.position.z=.02,n.add(r),n.userData.body=r;const a=new Zt(.11,.05,1e3,{font:`bold ${bh[e].length>5?22:30}px system-ui, sans-serif`,color:"#0b1020",align:"center",pad:0});if(a.setText(bh[e]),a.position.set(0,0,.041),n.add(a),t){const o=new Zt(.3,.06,900,{font:"bold 32px system-ui, sans-serif",align:"center",pad:4});o.position.set(0,-.085,.02),n.add(o),n.userData.label=o}return n}portPos(e,t){const n=this.posOf(e);return{x:n.x+(t?Mh:Sh),y:n.y}}setSegment(e,t,n,i=1){const r=n.clone().sub(t),a=Math.max(r.length(),1e-4);e.position.copy(t).addScaledVector(r,.5),e.quaternion.setFromUnitVectors(new R(0,1,0),r.divideScalar(a)),e.scale.set(i,a,i)}makeButton(e,t,n,i,r,a="#26346b",o=K_){const c=new Zt(n,i,800,{font:o,bg:a,align:"center",pad:16,radius:22});return c.setText(t),this.root.add(c),this.buttons.set(e,c),this.btnBase.set(e,{w:n,h:i}),this.reg(c,{click:()=>{this.app.sound.play("click"),this.app.haptic("tap"),r()}}),c}buildButtons(){const e=()=>this.game,t=[["play","PLAY",()=>this.status==="running"?this.stop():this.start()],["speed","SPEED 2x",()=>{this.speed=this.speed>=4?1:this.speed*2}],["hint","HINT",()=>this.showHint()],["reset","RESET",()=>{this.stop(),e().reset(),this.levelChanged()}],["prev","< LEVEL",()=>this.setLevel(-1)],["next","LEVEL >",()=>this.setLevel(1)],["menu","MENU",()=>this.menu.toggle()]];for(const[i,r,a]of t)this.makeButton(i,r,.22,.1,a);this.buttons.get("menu").setText("MENU",{bg:"#5a3d8a"});const n=[["undo","UNDO",()=>{e().undo()||this.fail("Nothing to undo.")}],["redo","REDO",()=>{e().redo()||this.fail("Nothing to redo.")}],["tidy","TIDY",()=>e().tidy()],["save","SAVE",()=>this.app.save()],["loadd","LOAD",()=>this.app.load()],["rps+","LOAD +",()=>this.stepLoad(1)],["rps-","LOAD -",()=>this.stepLoad(-1)],["mix+","WRITES +",()=>this.stepMix(1)],["mix-","WRITES -",()=>this.stepMix(-1)],["burst","BURST",()=>this.doBurst()]];for(const[i,r,a]of n)this.makeButton(i,r,.22,.1,a,"#1f3a5c");this.layoutButtons()}layoutButtons(){const e=this.app.settings,t=e.largeTargets?1.3:1,n=e.hand==="right"?1:-1,i=this.game.level.sandbox===!0,r=this.game.mode==="campaign",a=(h,u)=>{h.forEach((d,f)=>{const m=this.buttons.get(d);m.visible=!0,m.position.set(u,.32-f*.135*(t>1?1.08:1),.02),m.scale.setScalar(t),m.pointerEvents="auto"})},o=h=>h.forEach(u=>{const d=this.buttons.get(u);d.visible=!1,d.pointerEvents="none"}),c=["undo","redo","rps+","rps-","mix+","mix-","burst"],l=["undo","redo","tidy","save","loadd"];a(r?["play","speed","hint","reset","prev","next","menu"]:["play","speed","hint","reset","menu"],.95*n),a(i?c:l,-.95*n),o([...r?[]:["prev","next"],...i?["tidy","save","loadd"]:["rps+","rps-","mix+","mix-","burst"]])}buildBin(){const e=new st(new Vr(.075,24),new At({color:5906219}));e.position.set(.66,-.52,.005),this.root.add(e);const t=new Zt(.16,.05,800,{font:"bold 26px system-ui, sans-serif",align:"center",pad:0});t.setText("DELETE"),t.position.set(.66,-.52,.01),this.root.add(t),this.reg(e,{move:(n,i)=>this.dragMove(n,i),up:(n,i)=>this.dragEnd(n,i)})}buildStars(){const e=new Is;for(let i=0;i<10;i++){const r=Math.PI/2+i*Math.PI/5,a=i%2?.02:.05,o=Math.cos(r)*a,c=Math.sin(r)*a;i?e.lineTo(o,c):e.moveTo(o,c)}e.closePath();const t=new ul(e);for(let i=0;i<3;i++){const r=new st(t,new At({color:3358830}));r.renderOrder=22,r.position.set(.5+i*.12-.12,.32,.1),r.visible=!1,this.root.add(r),this.stars.push(r)}[["ov-retry","RETRY",()=>{this.setOverlayVisible(!1),this.stop()}],["ov-page","MORE",()=>{this.ovPage=1-this.ovPage,this.renderOverlay()}],["ov-next","NEXT LEVEL",()=>{this.setOverlayVisible(!1),this.setLevel(1)}],["ov-share","SHARE",()=>{this.setOverlayVisible(!1),this.menu.open("share")}],["ov-close","CLOSE",()=>this.setOverlayVisible(!1)]].forEach(([i,r,a],o)=>{const c=this.makeButton(i,r,.24,.09,a,"#26346b","bold 26px system-ui, sans-serif");c.position.set(-.5+o*.255,-.32,.12),c.renderOrder=22,this.ovButtons.push(c),this.buttons.delete(i)})}rebuildShelf(){this.shelfDirty=!1;for(const r of[...this.root.children])r.userData.shelf&&(this.root.remove(r),r.traverse(a=>this.unreg(a)));const e=this.game.level.palette,t=new Zt(1.3,.05,800,{font:"bold 22px system-ui, sans-serif",color:"#9aa6d0",pad:2});t.setText(this.game.level.palette.length?"PINCH A PART AND DRAG IT ONTO THE BOARD. TAP A PART TO LEARN IT.":""),t.position.set(-.1,-.44,.01),t.userData.shelf=!0,this.root.add(t);const n=Math.min(.19,1.3/Math.max(1,e.length)),i=-.62;e.forEach((r,a)=>{const o=this.makeNodeBody(r,!1);o.position.set(i+a*n,-.56,.01),o.scale.setScalar(Math.min(.85,n/.15)),o.userData.shelf=!0,this.root.add(o);const c=new st(new Jn(.16,.14,.06),new At({transparent:!0,opacity:0,depthWrite:!1}));c.position.z=.02,o.add(c),this.reg(c,{down:(l,h)=>{this.drag={type:"new",kind:r,pid:h,moved:!1},this.setGhost(r)},move:(l,h)=>this.dragMove(l,h),up:(l,h)=>this.dragEnd(l,h)})})}setGhost(e){const t=this.ghost;this.root.remove(t),this.ghost=this.makeNodeBody(e,!1),this.ghost.visible=!1,this.ghost.traverse(n=>{const i=n.material;i&&"opacity"in i&&(i.transparent=!0,i.opacity=.7)}),this.root.add(this.ghost)}sync(){this.dirty=!1;const e=this.game.design,t=new Map(e.nodes.map(i=>[i.id,i.kind]));for(const[i,r]of this.nodes)t.get(i)!==r.kind&&(this.root.remove(r.group),this.nodes.delete(i),r.group.traverse(a=>this.unreg(a)));for(const i of e.nodes){if(this.nodes.has(i.id))continue;const r=this.makeNodeBody(i.kind),a=r.userData.body,o=r.userData.label,c=new st(new Fn(.1,.008),new At({color:4054167}));c.position.set(0,.062,.041),r.add(c);const l=i.id,h=new st(new Jn(.13,.11,.06),new At({transparent:!0,opacity:0,depthWrite:!1}));h.position.z=.02,r.add(h);const u={down:(m,g)=>{this.drag={type:"move",id:l,pid:g,moved:!1,start:{...this.posOf(l)}}},move:(m,g)=>this.dragMove(m,g),up:(m,g)=>this.dragEnd(m,g)};this.reg(a,u),this.reg(h,u);let d,f;i.kind!=="db"&&i.kind!=="replica"&&(d=new st(new Ls(.024,12,10),new At({color:16777215})),d.position.set(Mh,0,.03),r.add(d),f=new st(new Ls(.04,8,6),new At({transparent:!0,opacity:0,depthWrite:!1})),f.position.copy(d.position),r.add(f),this.reg(f,{down:(m,g)=>{this.drag={type:"wire",from:l,pid:g}},move:(m,g)=>this.dragMove(m,g),up:(m,g)=>this.dragEnd(m,g)})),r.scale.setScalar(this.reduced?1:.4),this.root.add(r),this.nodes.set(i.id,{group:r,body:a,hit:h,port:d,portHit:f,bar:c,label:o,kind:i.kind,lastLabel:"",born:this.time,wasOver:!1,lastPulse:-9,lastAlarm:-9,wasDown:!1})}for(const[i,r]of this.nodes)t.has(i)||(this.root.remove(r.group),this.nodes.delete(i),r.group.traverse(a=>this.unreg(a)));this.applyHitScale();const n=new Set(e.edges.map(i=>`${i.from}>${i.to}`));for(const[i,r]of this.wires)n.has(i)||(this.root.remove(r.line,r.handle),this.unreg(r.handle),this.wires.delete(i));for(const i of e.edges){const r=`${i.from}>${i.to}`;if(this.wires.has(r))continue;const a=new st(new Hr(.004,.004,1,6),new At({color:7306680})),o=new st(new Vr(.017,14),new At({color:9055034}));this.root.add(a,o),this.reg(o,{click:()=>{this.game.disconnect(i.from,i.to),this.app.sound.play("delete")}}),this.wires.set(r,{line:a,handle:o,from:i.from,to:i.to})}this.applyHitScale()}applyHitScale(){const e=this.app.settings.largeTargets?1.5:1;for(const t of this.nodes.values())t.hit.scale.setScalar(e),t.portHit?.scale.setScalar(e);for(const t of this.wires.values())t.handle.scale.setScalar(e*(e>1?1.2:1))}applySettings(){this.fx.reduced=this.reduced,this.layoutButtons(),this.applyHitScale(),this.onBoardMoved?.()}setOverlayVisible(e){this.overlay.visible=e,this.overlay.pointerEvents=e?"auto":"none";for(const t of this.ovButtons)t.visible=e,t.pointerEvents=e?"auto":"none";for(const t of this.stars)t.visible=e&&this.status==="done"&&!!this.game.verdict?.passed&&!this.game.level.sandbox&&this.ovPage===0;e||this.fx.clear()}get overlayOpen(){return this.overlay.visible}closeOverlay(){this.setOverlayVisible(!1)}toast(e,t=!0){this.toastPlane.setText(e,{bg:t?"rgba(160,40,40,0.95)":"rgba(30,70,110,0.95)"}),this.toastPlane.visible=!0,this.toastT=3.5,this.onToast?.(e)}fail(e){this.toast(e),this.app.sound.play("error"),this.app.haptic("error")}tutorialCtx(){return{design:this.game.design,played:this.played,sawOverload:!1,verdict:this.game.verdict}}levelChanged(){const e=this.game.level;this.lastLevel=e,this.shelfDirty=!0,this.dirty=!0,this.played=!1,this.pin=void 0,this.hintIdx=0,this.tutorial=e.sandbox||e.id>3||this.app.tutorialSeen(e.id)?void 0:$r.forLevel(e.id),this.layoutButtons(),this.setOverlayVisible(!1),this.onLevelChange?.()}skipTutorial(){this.tutorial&&this.app.markTutorialSeen(this.game.level.id),this.tutorial=void 0}restartTutorial(){this.app.kv.removeItem(`sds:v1:flag:tutorial-${this.game.level.id}`),this.tutorial=$r.forLevel(this.game.level.id),this.tutorial||this.toast("No tutorial for this level.",!1)}coachText(e){const t=this.tutorial?.current(this.tutorialCtx());if(t)return this.tutorial.index>=this.tutorial.steps.length-1&&this.game.level.id!==1&&this.app.markTutorialSeen(this.game.level.id),`TUTORIAL ${this.tutorial.index+1}/${this.tutorial.steps.length}: ${t.text}`;if(this.pin&&this.time<this.pin.until)return this.pin.text;if(!this.app.settings.hints)return"Hints are off. Open MENU > SETTINGS to turn them on.";const n=this.game.level;if(this.status==="running"&&this.sim){const i=this.sim.liveStats(),r=gh(n,this.game.design,e??this.sim.snapshot(),{p50:i.p50,p99:i.p99})[0];return this.hintLine(r)}return this.status==="done"?"Read WHAT HAPPENED in the results, then adjust and retry.":n.sandbox?"Sandbox: build anything, press PLAY, then change the load, or tap a part while it runs to KILL it.":`${n.story}`}hintLine(e){const t=e.concept?Pu(e.concept):void 0;return t?`${t.term.toUpperCase()}: ${e.text}`:e.text}showHint(){const e=this.game,t=this.sim?.snapshot(),n=this.sim?.liveStats(),i=gh(e.level,e.design,t,n?{p50:n.p50,p99:n.p99}:void 0),r=i[this.hintIdx++%i.length],a=qr(e.design).filter(c=>c.severity==="error"),o=a.length&&!t?a[0].message:this.hintLine(r);this.pin={text:"HINT  "+o,until:this.time+14},this.app.sound.play("click")}stepLoad(e){const t=ws.findIndex(i=>i>=this.load.rps),n=Math.max(0,Math.min(ws.length-1,(t<0?ws.length-1:ws[t]===this.load.rps?t:t-(e>0?1:0))+e));this.load.rps=ws[n],this.pushLoad()}stepMix(e){this.load.writeFraction=Math.max(0,Math.min(1,Math.round((this.load.writeFraction+e*.1)*10)/10)),this.pushLoad()}doBurst(){if(this.status!=="running"){this.fail("Press PLAY first, then BURST.");return}this.burstUntil=this.time+4,this.pushLoad(),this.toast("Traffic burst: 3x for 4 seconds",!1)}pushLoad(){this.sim&&(this.sim.rpsOverride=this.load.rps*(this.time<this.burstUntil?3:1),this.sim.writeOverride=this.load.writeFraction)}setLoad(e,t){this.load.rps=e,this.load.writeFraction=t,this.pushLoad()}start(){const e=qr(this.game.design).filter(t=>t.severity==="error");if(e.length){this.fail(e[0].message);return}this.setOverlayVisible(!1),this.review=void 0,this.sim=new Mu(this.game.design,this.game.level.workload,7),this.game.level.sandbox&&this.pushLoad(),this.particles.length=0,this.acc=0,this.status="running",this.played=!0,this.dropAcc.clear(),this.sim.onHop=({from:t,to:n,write:i})=>{const r=`${t}>${n}`,a=this.budget.get(r)??0,o=this.reduced?160:470;a>=1&&this.particles.length<o&&(this.budget.set(r,a-1),this.particles.push({from:t,to:n,t:0,speed:1.2+Math.random()*.4,write:i}))},this.sim.onDrop=t=>this.dropAcc.set(t,(this.dropAcc.get(t)??0)+1),this.sim.onEvent=t=>{this.toast(t.text.replace(/^./,i=>i.toUpperCase()),t.text.includes("promoted")===!1);const n=t.nodeId?this.posOf(t.nodeId):void 0;/crash/.test(t.text)?(this.app.sound.play("kill",n),this.app.haptic("error"),n&&this.fx.burst(n.x,n.y,10066329,24,.25)):/promoted/.test(t.text)?(this.app.sound.play("promote",n),this.app.haptic("success"),n&&this.fx.ring(n.x,n.y,5635993,.14,.7)):/back/.test(t.text)?this.app.sound.play("promote",n):/emptied/.test(t.text)&&(this.app.sound.play("error"),this.app.haptic("warn"))},this.app.sound.play("play"),this.app.haptic("confirm")}stop(){this.status="edit",this.sim=void 0,this.particles.length=0,this.pMesh.count=0,this.app.sound.setTraffic(0)}finish(){this.sim.summary(),this.status="done",this.sim=void 0,this.app.sound.setTraffic(0);const e=this.game.judge();this.ovPage=0;const t=zs(this.game.level)?{score:this.app.lastScore?.score??0,best:this.app.dailyScores,isBest:this.app.lastScore?.best}:void 0,n=()=>{this.ovPages=q_(this.game.level,this.game.design,e,this.review,t),this.renderOverlay()};n(),this.setOverlayVisible(!0),this.celebrate(e.passed,e.stars),O_({level:this.game.level,design:this.game.design,verdict:e},k_(this.endpoint)).then(i=>{this.review=i,this.status==="done"&&n()})}celebrate(e,t){if(!e){this.app.sound.play("fail"),this.app.haptic("error");return}this.app.sound.play("success"),this.app.haptic("success"),this.fx.confetti(),this.starT=0;for(const[n,i]of this.stars.entries())i.material.color.set(n<t?16765286:3358830),i.scale.setScalar(this.reduced?1:.01)}renderOverlay(){const e=this.ovPage===1;this.overlay.setText(this.ovPages[this.ovPage]),this.ovButtons[1].setText(e?"BACK":"MORE");const t=this.game.verdict;this.ovButtons[2].visible=this.overlay.visible&&!!t?.passed&&this.game.mode==="campaign"&&this.game.index<un.length-1,this.ovButtons[2].pointerEvents=this.ovButtons[2].visible?"auto":"none";for(const n of this.stars)n.visible=this.overlay.visible&&!!t?.passed&&!e}setLevel(e){if(this.game.mode!=="campaign"){this.fail("Level buttons work in the campaign. Open MENU to switch modes.");return}const t=this.game.index+e;if(t<0||t>=un.length){this.toast(t<0?"This is the first level.":"That was the last level. Try the sandbox or the daily challenge.",!1);return}this.loadLevel(t)}loadLevel(e){this.stop(),this.app.startCampaign(e),this.levelChanged()}loadSandbox(){this.stop(),this.app.startSandbox(),this.levelChanged()}loadDaily(){this.stop(),this.app.startDaily(),this.levelChanged()}refreshLevel(){this.lastLevel!==this.game.level&&(this.stop(),this.levelChanged())}update(e){this.time+=e,this.dirty&&this.sync(),this.shelfDirty&&this.rebuildShelf(),this.toastT>0&&(this.toastT-=e)<=0&&(this.toastPlane.visible=!1),this.fx.update(e),this.menu.update(e),this.burstUntil&&this.time>=this.burstUntil&&(this.burstUntil=0,this.pushLoad());let t;if(this.status==="running"&&this.sim){this.acc+=Math.min(e,.1)*this.speed;let l=0;const h=_u(this.game.level.workload);for(;this.acc>=.01&&l<60&&this.sim.t<h;)this.sim.step(.01),this.acc-=.01,l++;t=this.sim.snapshot();for(const d of this.game.design.edges){const f=`${d.from}>${d.to}`,m=Math.min(45,3+(t[d.to]?.arrivalRps??0)/12);this.edgeRate.set(f,m)}let u=0;for(const d of Object.values(t))u=Math.max(u,d.utilisation);this.app.sound.setTraffic(Math.min(1,u)),this.sim.t>=h&&!this.game.level.sandbox&&this.finish()}for(const[l,h]of this.edgeRate)this.budget.set(l,Math.min(3,(this.budget.get(l)??0)+e*h*this.speed*.6));this.dropBursts(e);for(const[l,h]of this.nodes){const u=this.game.pos[l];if(!u)continue;h.group.position.set(u.x,u.y,.01);const d=this.time-h.born;if(!this.reduced&&d<.3){const _=d/.3,M=.4+.6*(1+2.7*Math.pow(_-1,3)+1.7*Math.pow(_-1,2));h.group.scale.setScalar(Math.max(.4,M))}else h.group.scale.x!==1&&h.group.scale.setScalar(1);const f=t?.[l],m=h.body.material,g=new be(Cr[h.kind]);if(f?.down)m.color.set(3817298),m.emissive.set(1119e3),m.emissiveIntensity=.1;else if(f?.overloaded){const _=this.reduced?1:.5+.5*Math.sin(this.time*9);m.color.copy(g).lerp(new be(16720418),.75),m.emissive.set(16716049),m.emissiveIntensity=.4+.9*_,!this.reduced&&this.time-h.lastPulse>.9&&(h.lastPulse=this.time,this.fx.ring(u.x,u.y,16726843,.13,.7)),this.time-h.lastAlarm>(h.wasOver?2.2:.2)&&(h.lastAlarm=this.time,this.app.sound.play("overload",u,1800,`ov:${l}`),h.wasOver||this.app.haptic("warn"))}else m.color.copy(g),m.emissive.copy(g),m.emissiveIntensity=.25;f?.overloaded&&!h.wasOver&&t&&this.fx.burst(u.x,u.y,16733525,10,.15),h.wasOver=!!f?.overloaded,h.wasDown=!!f?.down;const x=f?Math.min(1.2,f.utilisation):0;h.bar.scale.x=Math.max(.02,Math.min(1,x)),h.bar.position.x=-.05*(1-h.bar.scale.x),h.bar.material.color.set(x>.95?16726843:x>.7?16758087:4054167);const p=this.game.design.nodes.find(_=>_.id===l);let y=l;p.kind==="cache"&&(y+=` ${p.policy?.toUpperCase()} ${p.cacheSize}${p.coalesce?" SF":""}`),f?.down?y+="  DOWN":f&&p.kind!=="client"&&(y+=p.kind==="queue"||p.kind==="broker"?`  backlog ${f.waiting}`:`  ${Math.round(f.arrivalRps)}/${p.capacityRps} rps`),f?.hitRate!==void 0&&!f.down&&(y+=`  hit ${(f.hitRate*100).toFixed(0)}%`),f?.promoted&&(y+="  PRIMARY"),f?.overloaded?y+="  OVERLOAD":!f&&p.kind!=="client"&&(y+=`  cap ${Number.isFinite(p.capacityRps)?p.capacityRps:""}`),y!==h.lastLabel&&(h.lastLabel=y,h.label.setText(y,{color:f?.down?"#9aa0b4":f?.overloaded?"#ff8080":"#dfe6ff"}))}for(const l of this.wires.values()){const h=this.portPos(l.from,!0),u=this.portPos(l.to,!1),d=t?.[l.to]?.arrivalRps??0,f=1+Math.min(2.2,d/450);this.setSegment(l.line,new R(h.x,h.y,.03),new R(u.x,u.y,.03),f),l.handle.position.set((h.x+u.x)/2,(h.y+u.y)/2,.035);const m=t?.[l.to]?.overloaded,g=t?.[l.to]?.down;l.line.material.color.set(g?4475484:m?16733525:7306680)}const n=new Ue,i=new vn,r=new R(1,1,1),a=new R,o=new be;let c=0;for(let l=this.particles.length-1;l>=0;l--){const h=this.particles[l];h.t+=e*h.speed,(h.t>=1||!this.game.pos[h.from]||!this.game.pos[h.to])&&this.particles.splice(l,1)}for(const l of this.particles){const h=this.portPos(l.from,!0),u=this.portPos(l.to,!1);a.set(h.x+(u.x-h.x)*l.t,h.y+(u.y-h.y)*l.t,.02);const d=this.reduced?1:.55+.45*Math.sin(Math.PI*Math.min(1,l.t*1.05));r.set(d,d,d),n.compose(a,i,r),this.pMesh.setMatrixAt(c,n),this.pMesh.setColorAt(c,o.set(l.write?16752704:4253951)),c++}this.pMesh.count=c,this.pMesh.instanceMatrix.needsUpdate=!0,this.pMesh.instanceColor&&(this.pMesh.instanceColor.needsUpdate=!0),this.starT>=0&&(this.starT+=e,this.stars.forEach((l,h)=>{const u=this.starT-.35*h;if(u<0)return;const d=Math.min(1,u/.35);this.reduced||l.scale.setScalar(d<1?1.4*d:1.4-.4*Math.min(1,(u-.35)/.2)),u>0&&u-e<=0&&l.material.color.getHex()===16765286&&(this.app.sound.play("star"),this.fx.ring(l.position.x,l.position.y,16765286,.1,.5))}),this.starT>2&&(this.starT=-1)),this.uiT-=e,this.uiT<=0&&(this.uiT=.25,this.refreshInfo(t))}dropT=0;dropBursts(e){if(this.dropT+=e,!(this.dropT<.14)){this.dropT=0;for(const[t,n]of this.dropAcc){const i=this.game.pos[t];i&&(this.fx.burst(i.x+Sh,i.y,16731469,Math.min(5,1+Math.floor(n/6)),.12),n>3&&this.app.sound.play("drop",i,250,`drop:${t}`))}this.dropAcc.clear()}}refreshInfo(e){const t=this.game,n=t.level,i=!n.sandbox&&n.id>0&&n.id<=un.length?"  "+"*".repeat(this.app.progress[n.id]??0):"";let r=n.sandbox?`SANDBOX
${n.brief}`:zs(n)?`${n.title.toUpperCase()}
${n.brief}`:`${n.chapter.toUpperCase()}  LEVEL ${n.id}: ${n.title.toUpperCase()}${i}
${n.brief}`;if(this.status==="running"&&this.sim){const a=this.sim.liveStats();r+=`
RUNNING ${this.sim.t.toFixed(0)}s   ${Math.round(a.rps)} rps   p50 ${a.p50.toFixed(0)} ms   p99 ${a.p99.toFixed(0)} ms   errors ${(a.errorRate*100).toFixed(1)}%`,n.sandbox&&(r+=`   writes ${(this.load.writeFraction*100).toFixed(0)}%   (tap a part to kill it)`)}else r+=`
Cost ${t.cost}${n.starBudget?" (star budget "+n.starBudget+")":""}   ${n.sandbox?`Load ${this.load.rps} rps, ${(this.load.writeFraction*100).toFixed(0)}% writes`:"Wire it up, then press PLAY."}`;this.info.setText(r),this.coach.setText(this.coachText(e)),this.buttons.get("play").setText(this.status==="running"?"STOP":"PLAY",{bg:this.status==="running"?"#8a2b3a":"#1f7a4d"}),this.buttons.get("speed").setText(`SPEED ${this.speed}x`),this.buttons.get("undo").setText("UNDO",{bg:t.canUndo?"#1f3a5c":"#1a2438",color:t.canUndo?"#ffffff":"#6a7590"}),this.buttons.get("redo").setText("REDO",{bg:t.canRedo?"#1f3a5c":"#1a2438",color:t.canRedo?"#ffffff":"#6a7590"})}}function wh(s,e=0){s.position.set(0,.98+e,-.72),s.rotation.x=-.55}function Q_(s,e,t,n=()=>!1){const i=new Zp,r=new le;let a,o,c=!1,l=0,h=0;const u=p=>{const y=e.getBoundingClientRect();r.set((p.clientX-y.left)/y.width*2-1,-((p.clientY-y.top)/y.height)*2+1),i.setFromCamera(r,t)},d=()=>{const p=i.intersectObjects(s.interactives,!1);for(const y of p){let _=!0;for(let A=y.object;A;A=A.parent)A.visible||(_=!1);if(!_||(y.object.pointerEvents??y.object.parent?.pointerEvents)==="none")continue;let P=y.object;for(;P&&!P.userData.h;)P=P.parent;if(P)return{h:P.userData.h,point:y.point}}return{point:f()}},f=()=>{s.root.updateMatrixWorld(!0);const p=new R(0,0,1).transformDirection(s.root.matrixWorld),y=new Wn().setFromNormalAndCoplanarPoint(p,s.root.getWorldPosition(new R));return i.ray.intersectPlane(y,new R)??new R},m=p=>{const y=p;if(y.button!==0||n())return;s.app.unlockAudio(),u(y),s.root.updateMatrixWorld(!0);const{h:_,point:M}=d();o=_,a=_,c=!1,l=y.clientX,h=y.clientY,_?.down?.(M,-1)},g=p=>{const y=p;u(y),a&&(Math.hypot(y.clientX-l,y.clientY-h)>5&&(c=!0),a.move?.(f(),-1))},x=p=>{if(!a&&!o)return;u(p);const{h:y}=d(),_=f();a?.up?.(_,-1),o&&y===o&&!c&&o.click?.(),a=void 0,o=void 0};return e.addEventListener("pointerdown",m),e.addEventListener("pointermove",g),window.addEventListener("pointerup",x),()=>{e.removeEventListener("pointerdown",m),e.removeEventListener("pointermove",g),window.removeEventListener("pointerup",x)}}function ey(s){window.addEventListener("keydown",e=>{const t=e.target;if(t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.tagName==="SELECT"))return;const n=e.key.toLowerCase(),i=s.game,r=s.app;if(r.unlockAudio(),(e.ctrlKey||e.metaKey)&&n==="z"){e.preventDefault(),e.shiftKey?i.redo():i.undo();return}if((e.ctrlKey||e.metaKey)&&n==="y"){e.preventDefault(),i.redo();return}e.ctrlKey||e.metaKey||e.altKey||(n===" "?(e.preventDefault(),s.status==="running"?s.stop():s.start()):n==="h"?s.showHint():n==="r"?(s.stop(),i.reset(),s.refreshLevel()):n==="n"?s.setLevel(1):n==="p"?s.setLevel(-1):n==="m"?s.menu.toggle():n==="u"?r.set("muted",!r.settings.muted):n==="escape"?s.menu.isOpen?s.menu.close():s.overlayOpen&&s.closeOverlay():n>="1"&&n<="9"?s.loadLevel(Number(n)-1):n==="]"&&(s.speed=s.speed>=4?1:s.speed*2))})}const Ya=new URLSearchParams(location.search),Th=document.getElementById("app"),Iu=document.getElementById("boot");function ty(s){console.error(s);const e=document.getElementById("toast");e&&(e.textContent="Failed to start: "+(s?.message??s),e.style.display="block"),Iu?.remove()}async function ny(){const s=Math.max(0,Math.min(un.length-1,Number(Ya.get("level")??1)-1)),e=new D_(void 0,s),t=Ya.get("mode");t==="sandbox"?e.startSandbox():t==="daily"&&e.startDaily();const n=new Mf;n.background=new be(461592),n.add(new Op(16777215,1.6));const i=new Fp(16777215,1.2);i.position.set(.5,2,1),n.add(i);const r=new Bt(55,innerWidth/innerHeight,.05,50);r.position.set(0,1.4,1),r.lookAt(0,.98,-.72);const a=new Hv({antialias:!0});a.setPixelRatio(Math.min(devicePixelRatio,2)),a.setSize(innerWidth,innerHeight),Th.appendChild(a.domElement);const o=new Z_(e);o.endpoint=Ya.get("review"),wh(o.root,e.settings.heightOffset),n.add(o.root),o.onBoardMoved=()=>{e.xrSession||wh(o.root,e.settings.heightOffset)};const c=()=>{a.setSize(innerWidth,innerHeight),r.aspect=innerWidth/innerHeight,r.updateProjectionMatrix();const g=innerWidth>900?(innerWidth-350)/innerHeight:r.aspect,x=Math.max(1.72,2.3/(2*Math.tan(55*Math.PI/360)*g)*1.02);r.position.set(0,1.4+(x-1.72)*.25,1+(x-1.72)),r.lookAt(0,.98,-.72);const p=innerWidth>900?350:0;p?r.setViewOffset(innerWidth,innerHeight,-p/2,0,innerWidth,innerHeight):r.clearViewOffset()};addEventListener("resize",c),c();let l=performance.now(),h=!0;const u=()=>{const g=performance.now(),x=Math.min(.1,(g-l)/1e3);l=g,o.update(x),a.render(n,r)};a.setAnimationLoop(()=>{h&&u()});const d=Q_(o,a.domElement,r);if(ey(o),wu(location.hash.slice(1))&&location.hash.includes("d=")){const g=e.importText(location.hash);o.refreshLevel(),o.toast(g??"Opened a shared design.",!!g)}const{mountHud:m}=await Rl(async()=>{const{mountHud:g}=await import("./hud-DjNcVLPT.js");return{mountHud:g}},[]);m(e,o,{enterVR:async()=>{await(await Rl(()=>import("./vr-B9MP905y.js").then(x=>x.av),[])).enterXR({view:o,container:Th,handOver:()=>{h=!1,a.setAnimationLoop(null),d(),n.remove(o.root),a.domElement.style.display="none"}})},cardCanvas:()=>a.domElement}),window.__sds={app:e,view:o,state:e.game,renderer:a,scene:n,camera:r},Iu?.remove(),console.log("[sds] ready")}ny().catch(ty);export{my as $,$t as A,nn as B,Ur as C,Qt as D,sn as E,Kn as F,Si as G,hu as H,hc as I,Fe as J,Zi as K,un as L,Ue as M,Is as N,ht as O,Wn as P,vn as Q,Jo as R,jt as S,cn as T,zo as U,R as V,Ye as W,By as X,_n as Y,ul as Z,Rl as _,Gt as a,gn as a$,$n as a0,Dy as a1,ns as a2,Sf as a3,qe as a4,Xh as a5,sy as a6,ay as a7,ry as a8,Py as a9,Oo as aA,Wr as aB,Gr as aC,Zr as aD,Kr as aE,gy as aF,xy as aG,jh as aH,Xn as aI,uo as aJ,ho as aK,Po as aL,No as aM,Fo as aN,Do as aO,Uo as aP,Ir as aQ,Rr as aR,Pr as aS,yo as aT,xo as aU,po as aV,mo as aW,Dh as aX,el as aY,tl as aZ,Vt as a_,Ay as aa,Cy as ab,Fp as ac,$h as ad,Ly as ae,qn as af,$s as ag,sa as ah,vd as ai,Ct as aj,Yt as ak,ao as al,oo as am,en as an,Bf as ao,kf as ap,Go as aq,it as ar,hy as as,Bt as at,ly as au,uu as av,qh as aw,Sy as ax,Tf as ay,Nr as az,ky as b,wh as b$,as as b0,Ih as b1,Ph as b2,zt as b3,yi as b4,Qd as b5,lo as b6,fo as b7,Lr as b8,Lo as b9,xn as bA,xf as bB,ae as bC,$e as bD,hl as bE,ou as bF,Ny as bG,Vp as bH,Uy as bI,Mf as bJ,by as bK,Bc as bL,Wu as bM,vi as bN,ju as bO,Qn as bP,Jh as bQ,ji as bR,Zn as bS,Ji as bT,ts as bU,Ah as bV,Ry as bW,Ey as bX,Op as bY,Fh as bZ,Kh as b_,wy as ba,cy as bb,so as bc,Rp as bd,Ls as be,Hr as bf,Zh as bg,Jn as bh,Wh as bi,Gh as bj,fd as bk,dd as bl,ud as bm,hd as bn,jn as bo,Gu as bp,Eh as bq,iy as br,Zp as bs,My as bt,Nn as bu,Vr as bv,zf as bw,Iy as bx,Fy as by,vy as bz,le as c,Q_ as c0,Hv as c1,Bp as c2,Ht as d,Hs as e,st as f,dy as g,fy as h,zs as i,Yh as j,py as k,uy as l,xt as m,Fn as n,yy as o,_y as p,_p as q,bd as r,yp as s,zy as t,oy as u,be as v,At as w,Ty as x,Oy as y,Mt as z};
