const e="https://crossorigin.xsinator.xyz/",t=t=>(
	{
	url0:`${
		e}
	${
		t}
	?0`,url1:`${
		e}
	${
		t}
	?1`}
),n=e=>new Promise((t=>setTimeout(t,e))),s=e=>new Promise((t=>setTimeout(t,e))),a=e=>new Promise((t=>setTimeout(t,e)));
	const o=async e=>new Promise(((t,n)=>{
	let s=document.createElement("script");
	s.src=e,s.onload=e=>(e.target.remove(),t(!0)),s.onerror=e=>(e.target.remove(),t(!1)),document.head.appendChild(s)}
)),i=(e,t)=>{
	let n=e.includes("?")?"&foo=":"?foo=",s=t-e.length-n.length-"END".length,a=e+n+"a".repeat(s)+"END";
return a.length!==t&&console.debug(`[!] ${
		a.length}
	 !== ${
		t}
	`),a}
;
	const r=e=>new Promise((t=>setTimeout(t,e))),l=e=>new Promise((t=>setTimeout(t,e))),c=async e=>{
	for(e.location="blank.html";
	;
){
		try{
			if(e.history.length)return await l(300),1}
		catch(e){
			}
		await l(50)}
	}
;
let d=[];
	const u=e=>new Promise((t=>setTimeout(t,e))),m=(e,t)=>{
	for(let n=0;
	n<t;
		n++){
		let t=new WebSocket(e);
t.onerror=e=>{
			d=d.filter((e=>e!==t))}
		,d.push(t)}
	}
;
let p=[];
	const g=e=>new Promise((t=>setTimeout(t,e))),h=async(e,t)=>{
	for(let n=0;
	n<t;
		n++){
		let t=new WebSocket(e);
	p.push(t)}
	}
,f=(e=p)=>{
	for(let t of e.reverse())t.close()}
,v=e=>p.filter((t=>t.readyState===e)),w=()=>{
	let e={
		connecting:0,open:0,closing:0,closed:0}
	;
		for(let t of p){
		let n=t.readyState;
	0===n?e.connecting++:1===n?e.open++:2===n?e.closing++:3===n?e.closed++:console.warn(t,n,"WTF unknow s.readyState")}
	return e}
,y=()=>new Promise((async e=>{
	let t=-1;
	for(;
	t!==v(1).length;
	)t=v(1).length,await g(1500);
return e(1)}
)),b=[{
	supportedMethods:"basic-card"}
,{
	supportedMethods:"https://apple.com/apple-pay",data:{
		version:3,merchantIdentifier:"merchant.com.example",countryCode:"US",merchantCapabilities:["supports3DS"],supportedNetworks:["visa"]}
	}
],_={
	total:{
		label:"Total",amount:{
			currency:"USD",value:"1.00"}
		}
	}
,k=e=>new Promise((t=>setTimeout(t,e))),L=e=>new Promise((t=>setTimeout(t,e)));
let T=`${
	e}
testcases/files/image1.gif`;
	const A=e=>new Promise((t=>setTimeout(t,e))),E=async(e,t)=>{
	if("POST"===t&&await fetch(e,{
		method:"POST",mode:"no-cors",cache:"reload",credentials:"include"}
	).catch((e=>console.error(e))),"CORS"===t)try{
		await fetch(e,{
			method:"GET",mode:"cors",cache:"reload",credentials:"include"}
		)}
	catch(e){
		}
	}
,P=async e=>new Promise((async t=>{
	let n=await caches.open("cache"),s=await fetch(e,{
		method:"GET",mode:"no-cors",cache:"force-cache",credentials:"include"}
	),a=performance.now();
n.put(new Request(e),s.clone()).then((()=>t(performance.now()-a)))}
));
let x=`${
	e}
testcases/files/image1.gif`;
	const C=e=>new Promise((t=>setTimeout(t,e))),S=async(e,t)=>{
	if("POST"===t&&await fetch(e,{
		method:"POST",mode:"no-cors",cache:"reload",credentials:"include"}
	).catch((e=>console.error(e))),"CORS"===t)try{
		await fetch(e,{
			method:"GET",mode:"cors",cache:"reload",credentials:"include"}
		)}
	catch(e){
		}
	}
,F=async e=>new Promise((async t=>{
	let n=await caches.open("cache"),s=await fetch(e,{
		method:"GET",mode:"no-cors",cache:"force-cache",credentials:"include"}
	),a=performance.now();
	n.put(new Request(e),s.clone()).then((()=>t(performance.now()-a)))}
)),W=e=>new Promise((t=>setTimeout(t,e))),$=async e=>new Promise((t=>setTimeout(t,e))),N=e=>new Promise((t=>setTimeout(t,e))),D=e=>new Promise((t=>setTimeout(t,e))),R=async e=>{
	for(e.location="blank.html";
	;
){
		try{
			if(e.location.pathname.includes("blank.html"))return await M(100),1}
		catch(e){
			}
		await M(10)}
	}
,M=e=>new Promise((t=>setTimeout(t,e)));
		let H=[{
	test_name:"Performance API Error Leak",test_category:"Status Code",test_url:"testcases/tests/servererror.php",test_description:"Detect errors with Performance API.",test_file:"/src/leaks/leak_performance_error.js",test_function:async e=>{
		let t=document.createElement("script");
				return t.src=e,new Promise((n=>{
			t.onload=t.onerror=()=>{
				t.remove();
				let s=performance.getEntriesByType("resource").filter((t=>t.name===e)).length;
		return console.debug(`len = ${
					s}
				`),n(0!==s?0:1)}
			,document.body.appendChild(t)}
		))}
	}
,{
	test_name:"Event Handler Leak (Object)",test_category:"Status Code",test_url:"testcases/tests/servererror.php",test_description:"Detect errors with onload/onerror with object.",test_file:"/src/leaks/leak_eventhandler_object.js",test_function:async e=>new Promise((t=>{
		let n=document.createElement("object");
		n.data=e,n.onload=e=>(e.target.remove(),t(0)),n.onerror=e=>(e.target.remove(),t(1)),document.body.appendChild(n)}
	)),test_timeout:4e3}
,{
	test_name:"Event Handler Leak (Stylesheet)",test_category:"Status Code",test_url:"testcases/tests/servererror.php",test_description:"Detect errors with onload/onerror with stylesheet.",test_file:"/src/leaks/leak_eventhandler_stylesheet.js",test_function:async e=>new Promise((t=>{
		let n=document.createElement("link");
		n.rel="stylesheet",n.href=e,n.onload=e=>(e.target.remove(),t(0)),n.onerror=e=>(e.target.remove(),t(1)),document.head.appendChild(n)}
	))}
,{
	test_name:"Event Handler Leak (Script)",test_category:"Status Code",test_url:"testcases/tests/servererror.php",test_description:"Detect errors with onload/onerror with script.",test_file:"/src/leaks/leak_eventhandler_script.js",test_function:async e=>new Promise((t=>{
		let n=document.createElement("script");
		n.src=e,n.onload=e=>(e.target.remove(),t(0)),n.onerror=e=>(e.target.remove(),t(1)),document.head.appendChild(n)}
	))}
,{
	test_name:"MediaError Leak",test_category:"Status Code",test_url:"testcases/tests/servererror.php",test_description:"Detect status codes with MediaError message.",test_file:"/src/leaks/leak_mediaerror.js",test_function:async e=>{
		let t=document.createElement("audio");
				return new Promise((n=>{
			t.src=e,t.onerror=e=>{
				let s=e.target.error.message;
		console.debug(s),t.remove(),n("Failed to init decoder"===s?0:"500: Internal Server Error"===s?1:s)}
			,document.body.appendChild(t)}
		))}
	}
,{
	test_name:"Style Reload Error Leak",test_category:"Status Code",test_url:"testcases/tests/servererror.php",test_description:"Detect errors with style reload bug.",test_file:"/src/leaks/leak_stylereload_error.js",test_function:async e=>new Promise((t=>{
		let s=document.createElement("iframe");
			window.onmessage=async a=>{
			await n(1e3);
			let o=s.contentWindow.performance.getEntriesByType("resource");
			console.debug(o),s.remove();
			let i=o.filter((t=>t.name===e)).length;
		return 2===i?t(1):1===i?t(0):0===i?t(1):(console.debug(`requests: ${
				i}
			`),t(`requests: ${
				i}
			`))}
		,setTimeout((()=>(s.remove(),t(0))),5e3),s.srcdoc=`\n        <html>\n        <body>\n                <script onload="parent.postMessage('', '*')"\n                    src='https://xsinator.com/3sleep'><\/script>\n                <style>\n                    @import '${
			e}
		';
		\n                </style>\n                \n        </body>\n        </html>`,document.body.appendChild(s)}
	)),test_timeout:6e3}
,{
	test_name:"Request Merging Error Leak",test_category:"Status Code",test_url:"testcases/tests/servererror.php",test_description:"Detect errors with request merging.",test_file:"/src/leaks/leak_requestmerging_error.js",test_function:async e=>new Promise((t=>{
		let n=document.createElement("iframe");
			window.onmessage=async e=>{
			await s(300);
			let a=n.contentWindow.performance.getEntriesByType("resource").length-1;
		return n.remove(),t(-1===a?1:a)}
		,n.srcdoc=`\n        <html>\n        <body>\n                <script onerror="parent.postMessage('', '*')" \n                    src='${
			e}
		'><\/script>\n                <script onload="parent.postMessage('', '*')"\n                    src='${
			e}
		'>\n                <\/script>\n        </body>\n        </html>`,document.body.appendChild(n)}
	)),test_timeout:4e3}
,{
	test_name:"CORS Error Leak",test_category:"Redirects",test_url:"testcases/tests/cross-originredirect.php",test_description:"Leak redirect target URL with CORS error.",test_file:"/src/leaks/leak_cors_error.js",test_function:async e=>fetch(e,{
		credentials:"include",mode:"cors"}
	).catch((e=>{
		console.debug(e.message);
		let t=e.message.match(/redirection to (https?:\/\/.*) denied/);
		return t&&t[1]?"https://example.com/?secret#secret"===t[1]?1:t[1]:0}
	))}
,{
	test_name:"Redirect Start Leak",test_category:"Redirects",test_url:"testcases/tests/cross-originredirect.php",test_description:"Detect cross-origin HTTP redirects by checking redirectStart time.",test_file:"/src/leaks/leak_performanceiframe_redirect.js",test_function:async e=>{
		let t=document.createElement("iframe");
				return t.src=e,new Promise((n=>{
			t.onload=t.onerror=()=>{
				t.remove();
				let s=performance.getEntriesByType("resource").filter((t=>t.name===e)).pop();
		return console.debug(s),0===s.redirectStart?n(0):n(1)}
			,document.body.appendChild(t)}
		))}
	}
,{
	test_name:"Duration Redirect Leak",test_category:"Redirects",test_url:"testcases/tests/cross-originredirect.php",test_description:"Detect cross-origin redirects by checking the duration.",test_file:"/src/leaks/leak_performancefetch_redirect.js",test_function:async e=>new Promise((async t=>{
		await fetch(e,{
			mode:"no-cors",credentials:"include"}
		),await a(300);
		let n=performance.getEntriesByType("resource").filter((t=>t.name===e)).pop();
			return console.debug("Duration: ",n.duration),n.duration<=0?t(1):t(0)}
	))}
,{
	test_name:"Fetch Redirect Leak",test_category:"Redirects",test_url:"testcases/tests/redirect.php",test_description:"Detect HTTP redirects with Fetch API.",test_file:"/src/leaks/leak_fetch_redirect.js",test_function:async e=>fetch(e,{
		credentials:"include",mode:"cors",redirect:"manual"}
	).then((e=>(console.debug(`res.type = ${
		e.type}
	`),"opaqueredirect"===e.type?1:void 0))).catch((()=>0))}
,{
	test_name:"URL Max Length Leak",test_category:"Redirects",test_url:"testcases/tests/addgetparam.php",test_description:"Detect server redirect by abusing URL max length.",test_file:"/src/leaks/leak_urlmaxlength.js",test_function:async e=>new Promise((async t=>{
		let n=await(async e=>{
			let t=0,n=1e4,s=0,a=!1;
			for(;
			t<n;
			)s=Math.floor((t+n)/2),a=await o(i(e,s)),!1===a?n=s-1:t=s+1;
			return a=await o(i(e,t)),!1===a&&t--,a=await o(i(e,t)),!1===a?(console.debug("Error after last check !!!"),0):(console.debug(`DONE: length: ${
				t}
			, result: ${
				a}
			`),t)}
		)((e=>{
			let t=document.createElement("a");
		return t.href=e,t.origin}
		)(e)+"/testcases/tests/blank.php");
		return t(await o(i(e,n-3))?0:1)}
	)),test_timeout:1e4}
,{
	test_name:"Max Redirect Leak",test_category:"Redirects",test_url:"testcases/tests/cross-originredirect.php",test_description:"Detect server redirect by abusing max redirect limit.",test_file:"/src/leaks/leak_maxredirectlength.js",test_function:async e=>{
		let t=performance.getEntries().length;
		return fetch(`https://xsinator.com/testcases/files/maxredirect.php?n=19&url=${
			encodeURI(e)}
		`,{
			credentials:"include",mode:"no-cors"}
		).then((async e=>(await r(500),console.log(`${
			t}
		 === ${
			performance.getEntries().length}
		`),t===performance.getEntries().length&&0!==performance.getEntries().length?1:0))).catch((e=>1))}
	,test_timeout:6e3}
,{
	test_name:"History Length Leak",test_category:"Redirects",test_url:"testcases/tests/javascriptredirect.php",test_description:"Detect javascript redirects with History API.",test_file:"/src/leaks/leak_historylength.js",test_function:async e=>new Promise((async t=>{
		await c(window.WW);
		let n=window.WW.history.length;
		return window.WW.location=e,await l(2500),await c(window.WW),console.debug(window.WW.history.length,n),window.WW.history.length-n==3?t(1):t(0)}
	)),test_timeout:7e3,test_needsWindow:!0}
,{
	test_name:"CSP Violation Leak",test_category:"Redirects",test_url:"testcases/tests/cross-originredirect.php",test_description:"Leak cross-origin redirect target with CSP violation event.",test_file:"/src/leaks/leak_csp_blockeduri.js",test_function:async t=>new Promise((n=>{
		let s=document.createElement("iframe");
		window.onmessage=e=>(s.remove(),"https://example.com"===e.data?n(1):t.includes(e.data)?n(0):n(e.data)),setTimeout((()=>(s.remove(),n(0))),1500),s.srcdoc=`<html>\n        <head>\n            <meta http-equiv='Content-Security-Policy' content="default-src * 'unsafe-inline';
		 connect-src ${
			e}
		">\n        </head>\n        <body>\n            <script>\n                document.addEventListener('securitypolicyviolation', e => {
			parent.postMessage(e.blockedURI, '*')}
		)\n                fetch('${
			t}
		', {
			mode:'no-cors', credentials: 'include'}
		)\n            <\/script>\n        </body>\n        </html>`,document.body.appendChild(s)}
	)),test_timeout:4e3}
,{
	test_name:"CSP Redirect Detection",test_category:"Redirects",test_url:"testcases/tests/cross-originredirect.php",test_description:"Detect cross-origin redirects with CSP violation event.",test_file:"/src/leaks/leak_csp_detect.js",test_function:async t=>new Promise((n=>{
		let s=document.createElement("iframe");
		window.onmessage=e=>(s.remove(),n(1)),setTimeout((()=>(s.remove(),n(0))),3e3),s.srcdoc=`<html>\n        <head>\n            <meta http-equiv='Content-Security-Policy' content="default-src * 'unsafe-inline';
		 connect-src ${
			e}
		">\n        </head>\n        <body>\n            <script>\n                document.addEventListener('securitypolicyviolation', e => {
			parent.postMessage(e.blockedURI, '*')}
		)\n                fetch('${
			t}
		', {
			mode:'no-cors', credentials: 'include'}
		)\n            <\/script>\n        </body>\n        </html>`,document.body.appendChild(s)}
	)),test_timeout:4e3}
,{
	test_name:"WebSocket Leak (FF)",test_category:"API Usage",test_url:"testcases/tests/websocket.php",test_description:"Detect the number of websockets on a page by exausting the socket limit.",test_file:"/src/leaks/leak_websocket_ff.js",test_function:async(e,t=3e3,n=200)=>{
		let s="wss://xsinator.com/5sleep";
		m(s,n),await u(500);
		let a=d.length;
			((e=10)=>{
			for(let t=0;
			t<e;
		t++)d.shift().close()}
		)(10),await u(500),window.WW.location=e,await u(t),m(s,10),await u(400);
		let o=a-d.length;
		return(()=>{
			for(let e of d)e.close()}
		)(),window.WW.location="about:blank",await u(2e3),o}
	,test_timeout:8e3,test_needsWindow:!0}
,{
	test_name:"WebSocket Leak (GC)",test_category:"API Usage",test_url:"testcases/tests/websocket.php",test_description:"Detect the number of websockets on a page by exausting the socket limit.",test_file:"/src/leaks/leak_websocket_gc.js",test_function:async(e,t=2e3,n=255)=>{
		let s=performance.now(),a="wss://xsinator.com/ws";
		console.log("[+] Exausting WS limit until we can not open any new WS.");
			let o=(e=>{
			let t=document.createElement("iframe");
		return t.src="https://crossorigin.xsinator.xyz/testcases/tests/websocket.php?1",document.body.append(t),t}
		)();
		await h(a,n),console.debug(w(),"=",p.length),await y(),console.debug(w(),"=",p.length),console.log("[+] Cannot open any new WS.");
		let i=v(0);
		console.log(`[+] ${
			i.length}
		 WS are already open.`),f(i),await g(300),console.debug(w(),"=",p.length);
		f(p.slice(0,10)),console.log("[+] Closing 10 ws .."),console.debug(w(),"=",p.length),console.log(`[+] Opening ${
			e}
		 in window.`),window.WW.location=e,await g(t),console.log("[+] Checking number of WS."),await h(a,10),await y(),console.debug(w(),"=",p.length);
		let r=v(0).length;
			return console.log(`[+] ${
			r}
		 WS on ${
			e}
		 and ${
			i.length}
		 WS were already opened.`),f(p),o.remove(),window.WW.location="about:blank",await new Promise((async e=>{
			for(;
			v(2).length;
			)await g(200);
		return e(1)}
		)),p=[],console.debug(`Took ${
			performance.now()-s}
		ms.`),r}
	,test_timeout:4e4,test_needsWindow:!0}
,{
	test_name:"Payment API Leak",test_category:"API Usage",test_url:"testcases/tests/payment.php",test_description:"Detect if another tab is using the Payment API.",test_file:"/src/leaks/leak_payment.js",test_function:async e=>new Promise((async t=>{
		if(!window.PaymentRequest)return t("PaymentRequest not supported.");
		window.WW.location=e,await k(2e3);
		let n=new PaymentRequest(b,_);
		n.show().catch((e=>"Another PaymentRequest UI is already showing in a different tab or window."==e.message?t(1):t(0))),n.abort()}
	)),test_timeout:5e3,test_needsWindow:!0}
,{
	test_name:"Frame Count Leak",test_category:"Page Content",test_url:"testcases/tests/iframe.php",test_description:"Detect the number of iframes on a page.",test_file:"/src/leaks/leak_windowlength.js",test_function:async e=>new Promise((async t=>(window.WW.location=e,await L(500),t(window.WW.length)))),test_timeout:4e3,test_needsWindow:!0}
,{
	test_name:"Media Dimensions Leak",test_category:"Page Content",test_url:"testcases/tests/imagesize.php",test_description:"Leak dimensions of images or videos.",test_file:"/src/leaks/leak_medialeak_dimension.js",test_function:async e=>new Promise((t=>{
		let n=document.createElement("img");
			n.src=e,n.onload=e=>{
			let n=e.target.naturalHeight,s=e.target.naturalWidth;
		return e.target.remove(),console.debug(`naturalHeight: ${
				n}
			, naturalWidth: ${
				s}
			`),t(s<=250?0:1)}
		,document.body.appendChild(n)}
	)),test_timeout:4e3}
,{
	test_name:"Media Duration Leak",test_category:"Page Content",test_url:"testcases/tests/audiolength.php",test_description:"Leak duration of audio or videos.",test_file:"/src/leaks/leak_medialeak_duration.js",test_function:async e=>new Promise((t=>{
		let n=document.createElement("audio");
			n.src=e,n.onloadedmetadata=e=>{
			let n=e.target.duration;
		return e.target.remove(),console.debug(n),t(n<.3?0:1)}
		,document.body.appendChild(n)}
	)),test_timeout:4e3}
,{
	test_name:"Performance API Empty Page Leak",test_category:"Page Content",test_url:"testcases/tests/empty.php",test_description:"Detect empty responses with Performance API.",test_file:"/src/leaks/leak_performance_empty.js",test_function:async e=>{
		let t=document.createElement("iframe");
				return t.src=e,new Promise((n=>{
			t.onload=t.onerror=()=>{
				t.remove();
				let s=performance.getEntriesByType("resource").filter((t=>t.name===e)).length;
		return console.debug(`len = ${
					s}
				`),n(0!==s?0:1)}
			,document.body.appendChild(t)}
		))}
	}
,{
	test_name:"Performance API XSS Auditor Leak",test_category:"Page Content",test_url:"testcases/tests/auditor.php",test_description:"Detect scripts/event handlers in a page with Performance API.",test_file:"/src/leaks/leak_performance_auditor.js",test_function:async e=>{
		let t=document.createElement("iframe");
				return t.src=e,new Promise((n=>{
			t.onload=t.onerror=()=>{
				t.remove();
				let s=performance.getEntriesByType("resource").filter((t=>t.name===e)).length;
			return console.debug(`len = ${
					s}
				`),n(0!==s?0:1)}
			,document.body.appendChild(t)}
		))}
	}
,{
	test_name:"Cache Leak (CORS)",test_category:"Page Content",test_url:"testcases/tests/cacheimage.php",test_description:"Detect resources loaded by page. Cache is deleted with CORS error.",test_file:"/src/leaks/leak_cache_cors.js",test_function:async e=>{
		let t=await(async(e,t="POST")=>{
			let n=0,s=0;
			for(let s=0;
			s<5;
			s++)await E(e,t),await A(100),n+=await P(e);
			n/=5,await P(e);
			for(let t=0;
			t<5;
			t++)await A(100),s+=await P(e);
			if(s/=5,console.debug(`avg time nocache: ${
				n}
			, avg time cache: ${
				s}
			, Limit: ${
				(n+s)/2}
			`),n/s<1.3)throw{
				message:"No timing difference."}
			;
		return(n+s)/2}
		)(T,"CORS");
			return new Promise((async n=>{
			await E(T,"CORS");
			let s=document.createElement("iframe");
			s.src=e,document.body.append(s),await A(1500),s.remove();
			let a=await P(T);
			return console.debug(`request took: ${
				a}
			, limit is: ${
				t}
			`),n(a<t?1:0)}
		))}
	,test_timeout:15e3}
,{
	test_name:"Cache Leak (POST)",test_category:"Page Content",test_url:"testcases/tests/cacheimage.php",test_description:"Detect resources loaded by page. Cache is deleted with a POST request.",test_file:"/src/leaks/leak_cache_post.js",test_function:async e=>{
		let t=await(async(e,t="POST")=>{
			let n=0,s=0;
			for(let s=0;
			s<5;
			s++)await S(e,t),await C(100),n+=await F(e);
			n/=5,await F(e);
			for(let t=0;
			t<5;
			t++)await C(100),s+=await F(e);
			if(s/=5,console.debug(`avg time nocache: ${
				n}
			, avg time cache: ${
				s}
			, Limit: ${
				(n+s)/2}
			`),n/s<1.3)throw{
				message:"No timing difference."}
			;
		return(n+s)/2}
		)(x,"POST");
			return new Promise((async n=>{
			await S(x,"POST");
			let s=document.createElement("iframe");
			s.src=e,document.body.append(s),await C(1500),s.remove();
			let a=await F(x);
		return console.debug(`request took: ${
				a}
			, limit is: ${
				t}
			`),n(a<t?1:0)}
		))}
	,test_timeout:15e3}
,{
	test_name:"Id Attribute Leak",test_category:"Page Content",test_url:"testcases/tests/inputid.php",test_description:"Leak id attribute of focusable HTML elements with onblur.",test_file:"/src/leaks/leak_onblur.js",test_function:async e=>new Promise((t=>{
		let n=document.createElement("iframe");
		window.onblur=async()=>(console.debug("onblur fired"),window.onblur="",await W(10),n.remove(),t(1)),setTimeout((()=>(window.onblur="",n.remove(),t(0))),1500),n.src=`${
			e}
		#1337`,document.body.appendChild(n)}
	)),test_timeout:4e3}
,{
	test_name:"CSS Property Leak",test_category:"Page Content",test_url:"testcases/tests/cssrule.php",test_description:"Leak CSS rules with getComputedStyle.",test_file:"/src/leaks/leak_getcomputedstyle.js",test_function:async e=>new Promise((t=>{
		let n=document.createElement("link");
			n.rel="stylesheet",n.href=e,n.onload=e=>{
			let s=document.createElement("div");
			s.className="testclassname",document.body.appendChild(s);
			let a=window.getComputedStyle(s,null).getPropertyValue("visibility");
		return s.remove(),n.remove(),t("hidden"===a?1:0)}
		,n.onerror=e=>(n.remove(),t(0)),document.head.appendChild(n)}
	))}
,{
	test_name:"SRI Error Leak",test_category:"HTTP Header",test_url:"testcases/tests/imagesize.php",test_description:"Leak content length with SRI error.",test_file:"/src/leaks/leak_sri_error.js",test_function:async e=>fetch(e,{
		credentials:"include",mode:"no-cors",integrity:"sha256-aaaaa"}
	).catch((e=>{
		console.debug(e.message);
		let t=e.message.match(/Content length: (\d*), Expected content/);
		return t&&t[1]?"221396"===t[1]?0:"917323"===t[1]?1:t[1]:0}
	)),test_timeout:4e3}
,{
	test_name:"ContentDocument X-Frame Leak",test_category:"HTTP Header",test_url:"testcases/tests/xframe.php",test_description:"Detect X-Frame-Options with ContentDocument.",test_file:"/src/leaks/leak_contentdocument.js",test_function:async e=>new Promise((async(t,n)=>{
		let s=document.createElement("object");
		return s.data=e,document.body.appendChild(s),await $(750),console.debug(s.contentDocument),null!==s.contentDocument?(s.remove(),t(1)):(s.remove(),t(0))}
	))}
,{
	test_name:"Performance API X-Frame Leak",test_category:"HTTP Header",test_url:"testcases/tests/xframe.php",test_description:"Detect X-Frame-Options with Performance API.",test_file:"/src/leaks/leak_performance_xframe.js",test_function:async e=>{
		let t=document.createElement("iframe");
				return t.src=e,new Promise((n=>{
			t.onload=t.onerror=()=>{
				t.remove();
				let s=performance.getEntriesByType("resource").filter((t=>t.name===e)).length;
		return console.debug(`len = ${
					s}
				`),n(0!==s?0:1)}
			,document.body.appendChild(t)}
		))}
	}
,{
	test_name:"Performance API CORP Leak",test_category:"HTTP Header",test_url:"testcases/tests/corp.php",test_description:"Detect Cross-Origin-Resource-Policy header with Performance API.",test_file:"/src/leaks/leak_performance_corp.js",test_function:async e=>{
		let t=document.createElement("img");
				return t.src=e,new Promise((n=>{
			t.onload=t.onerror=()=>{
				t.remove();
				let s=performance.getEntriesByType("resource").filter((t=>t.name===e)).pop();
		return console.debug(`${
					s}
				`),s?""===s.nextHopProtocol?n(1):n(0):n(1)}
			,document.body.appendChild(t)}
		))}
	}
,{
	test_name:"CORP Leak",test_category:"HTTP Header",test_url:"testcases/tests/corp.php",test_description:"Detect Cross-Origin-Resource-Policy header with fetch.",test_file:"/src/leaks/leak_fetch_corp.js",test_function:async e=>fetch(e,{
		credentials:"include",mode:"no-cors"}
	).then((()=>0)).catch((()=>1))}
,{
	test_name:"CORB Leak",test_category:"HTTP Header",test_url:"testcases/tests/corb.php",test_description:"Detect X-Content-Type-Options in combination with specific content type using CORB.",test_file:"/src/leaks/leak_corb.js",test_function:async e=>new Promise((t=>{
		let n=document.createElement("script");
		n.src=e,window.addEventListener("error",(e=>(n.remove(),console.debug(`window.onerror: ${
			e.message}
		`),t(0))),{
			once:!0}
		),n.onload=n.onerror=async()=>(await N(100),n.remove(),t(1)),document.head.appendChild(n)}
	))}
,{
	test_name:"Download Detection",test_category:"HTTP Header",test_url:"testcases/tests/download.php",test_description:"Detect downloads (Content-Disposition header).",test_file:"/src/leaks/leak_download.js",test_function:async e=>new Promise((t=>{
		let n=document.createElement("iframe");
				window.onmessage=e=>(n.remove(),t(e.data)),n.srcdoc=`\n            <iframe id="frame" src="${
			e}
		"></iframe>\n            <script>\n                window.onload = () => {
			\n                    try{
				\n                        // is it about:blank?\n                        frame.contentWindow.location.href\n                        parent.postMessage(1,'*');
				\n                    }
			catch(e){
				\n                        parent.postMessage(0,'*');
		\n                    }
			\n                }
		\n            <\/script>`,document.body.appendChild(n)}
	)),test_timeout:6e3}
,{
	test_name:"Performance API Download Detection",test_category:"HTTP Header",test_url:"testcases/tests/download.php",test_description:"Detect downloads (Content-Disposition header) with Performance API.",test_file:"/src/leaks/leak_performance_download.js",test_function:async e=>{
		let t=document.createElement("iframe");
			return t.src=e,new Promise((async n=>{
			document.body.appendChild(t),await D(1e3),t.remove();
			let s=performance.getEntriesByType("resource").filter((t=>t.name===e)).length;
	return console.debug(`len = ${
				s}
			`),n(0!==s?0:1)}
		))}
	,test_timeout:4e3}
,{
	test_name:"CSP Directive Leak",test_category:"HTTP Header",test_url:"testcases/tests/cspdirective.php",test_description:"Detect CSP directives with CSP iframe attribute.",test_file:"/src/leaks/leak_csp_directive.js",test_function:async(e,t="default-src 'self';
		")=>new Promise((n=>{
		let s=document.createElement("iframe");
		s.setAttribute("csp",t),s.src=e;
		let a=history.length;
		if(a>48)throw new Error("History to long");
				s.onload=()=>{
			s.onload=()=>{
				let e=history.length;
		return s.remove(),n(e-a)}
			,s.src=e}
		,document.body.append(s)}
	)),test_timeout:3e3}
,{
	test_name:"COOP Leak",test_category:"HTTP Header",test_url:"testcases/tests/coop.php",test_description:"Detect Cross-Origin-Opener-Policy header with popup.",test_file:"/src/leaks/leak_coop.js",test_function:async e=>new Promise((async t=>{
		window.WW.location=e,await M(1e3);
try{
			return console.debug(window.WW.document),await M(1e3),t(1)}
		catch(e){
			return console.debug(e),await R(window.WW),t(0)}
		}
	)),test_timeout:4e3,test_needsWindow:!0}
];
var O="webkitTransition"in document.head.style?"webkitTransitionEnd":"transitionend",B="webkitTransition"in document.head.style||"transition"in document.head.style,I="webkitTransition"in document.head.style?"webkitTransitionDuration":"transitionDuration",j="webkitTransition"in document.head.style?"webkitTransitionProperty":"transitionProperty";
	function q(e){
	var t=getComputedStyle(e),n=t[j],s=t[I],a=s.includes("ms")?1:1e3,o=B&&n&&"none"!==n?parseFloat(s)*a:0;
	return Number.isNaN(o)?0:o}
function z(e,t){
	var n=0,s=new Event(O),a=q(e);
	a?(e.addEventListener(O,(function s(a){
		a.target===e&&(t.apply(e,[a]),e.removeEventListener(O,s),n=1)}
	)),setTimeout((function(){
		n||e.dispatchEvent(s)}
	),a+17)):t.apply(e,[s])}
function U(e,t){
	var n=t&&t instanceof Element?t:document;
	return e instanceof Element?e:n.querySelector(e)}
function X(e,t,n){
	var s=new CustomEvent(e+".bs."+t,{
		cancelable:!0}
	);
	return void 0!==n&&Object.keys(n).forEach((function(e){
		Object.defineProperty(s,e,{
			value:n[e]}
		)}
	)),s}
function V(e){
	this&&this.dispatchEvent(e)}
function Z(e){
	var t,n,s=this,a=X("close","alert"),o=X("closed","alert");
			function i(e){
		t[e?"addEventListener":"removeEventListener"]("click",r,!1)}
	function r(e){
		n=e&&e.target.closest(".alert"),(t=U('[data-dismiss="alert"]',n))&&n&&(t===e.target||t.contains(e.target))&&s.close()}
	function l(){
		i(),n.parentNode.removeChild(n),V.call(n,o)}
	s.close=function(){
		if(n&&t&&n.classList.contains("show")){
			if(V.call(n,a),a.defaultPrevented)return;
	s.dispose(),n.classList.remove("show"),n.classList.contains("fade")?z(n,l):l()}
		}
	,s.dispose=function(){
		i(),delete t.Alert}
	,t=U(e),n=t.closest(".alert"),t.Alert&&t.Alert.dispose(),t.Alert||i(1),s.element=t,t.Alert=s}
function G(e){
	var t,n,s=X("change","button");
		function a(e){
		var a=e.target,o=a.closest("LABEL"),i=null;
		"LABEL"===a.tagName?i=a:o&&(i=o);
		var r=i&&i.getElementsByTagName("INPUT")[0];
				if(r){
			if(V.call(r,s),V.call(t,s),"checkbox"===r.type){
				if(s.defaultPrevented)return;
				r.checked?(i.classList.remove("active"),r.getAttribute("checked"),r.removeAttribute("checked"),r.checked=!1):(i.classList.add("active"),r.getAttribute("checked"),r.setAttribute("checked","checked"),r.checked=!0),t.toggled||(t.toggled=!0)}
			if("radio"===r.type&&!t.toggled){
				if(s.defaultPrevented)return;
					(!r.checked||0===e.screenX&&0===e.screenY)&&(i.classList.add("active"),i.classList.add("focus"),r.setAttribute("checked","checked"),r.checked=!0,t.toggled=!0,Array.from(n).forEach((function(e){
					var t=e.getElementsByTagName("INPUT")[0];
			e!==i&&e.classList.contains("active")&&(V.call(t,s),e.classList.remove("active"),t.removeAttribute("checked"),t.checked=!1)}
				)))}
			setTimeout((function(){
				t.toggled=!1}
			),50)}
		}
	function o(e){
		32===(e.which||e.keyCode)&&e.target===document.activeElement&&a(e)}
	function i(e){
		32===(e.which||e.keyCode)&&e.preventDefault()}
	function r(e){
		if("INPUT"===e.target.tagName){
			var t="focusin"===e.type?"add":"remove";
		e.target.closest(".btn").classList[t]("focus")}
		}
	function l(e){
		var n=e?"addEventListener":"removeEventListener";
		t[n]("click",a,!1),t[n]("keyup",o,!1),t[n]("keydown",i,!1),t[n]("focusin",r,!1),t[n]("focusout",r,!1)}
	this.dispose=function(){
		l(),delete t.Button}
	,(t=U(e)).Button&&t.Button.dispose(),(n=t.getElementsByClassName("btn")).length&&(t.Button||l(1),t.toggled=!1,t.Button=this,Array.from(n).forEach((function(e){
		var t=U("input:checked",e);
	!e.classList.contains("active")&&t&&e.classList.add("active"),e.classList.contains("active")&&!t&&e.classList.remove("active")}
	)))}
var J="onmouseleave"in document?["mouseenter","mouseleave"]:["mouseover","mouseout"],Y=!!function(){
	var e=!1;
		try{
		var t=Object.defineProperty({
			}
		,"passive",{
			get:function(){
				return e=!0}
			}
		);
document.addEventListener("DOMContentLoaded",(function e(){
			document.removeEventListener("DOMContentLoaded",e,t)}
		),t)}
	catch(e){
		throw Error("Passive events are not supported")}
	return e}
()&&{
	passive:!0}
;
	function K(e){
	return e.offsetHeight}
function Q(e,t){
	var n,s,a,o,i,r,l,c,d,u,m,p,g,h=t||{
		}
	,f=this;
			function v(){
		!1===r.interval||o.classList.contains("paused")||(o.classList.add("paused"),i.isSliding||(clearInterval(i.timer),i.timer=null))}
	function w(){
		!1!==r.interval&&o.classList.contains("paused")&&(o.classList.remove("paused"),i.isSliding||(clearInterval(i.timer),i.timer=null,f.cycle()))}
	function y(e){
		if(e.preventDefault(),!i.isSliding){
			var t=e.target;
			t&&!t.classList.contains("active")&&t.getAttribute("data-slide-to")&&(i.index=+t.getAttribute("data-slide-to"),f.slideTo(i.index))}
		}
	function b(e){
		if(e.preventDefault(),!i.isSliding){
			var t=e.currentTarget||e.srcElement;
		t===m?i.index+=1:t===u&&(i.index-=1),f.slideTo(i.index)}
		}
	function _(e){
		var t=e.which;
				if(!i.isSliding){
			switch(t){
				case 39:i.index+=1;
				break;
				case 37:i.index-=1;
				break;
		default:return}
			f.slideTo(i.index)}
		}
	function k(e){
		var t=e?"addEventListener":"removeEventListener";
		r.pause&&r.interval&&(o[t](J[0],v,!1),o[t](J[1],w,!1),o[t]("touchstart",v,Y),o[t]("touchend",w,Y)),r.touch&&d.length>1&&o[t]("touchstart",T,Y),m&&m[t]("click",b,!1),u&&u[t]("click",b,!1),p&&p[t]("click",y,!1),r.keyboard&&window[t]("keydown",_,!1)}
	function L(e){
		var t=e?"addEventListener":"removeEventListener";
			o[t]("touchmove",A,Y),o[t]("touchend",E,Y)}
	function T(e){
		i.isTouch||(i.touchPosition.startX=e.changedTouches[0].pageX,o.contains(e.target)&&(i.isTouch=!0,L(1)))}
	function A(e){
		i.isTouch?(i.touchPosition.currentX=e.changedTouches[0].pageX,"touchmove"===e.type&&e.changedTouches.length>1&&e.preventDefault()):e.preventDefault()}
	function E(e){
		if(i.isTouch&&!i.isSliding&&(i.touchPosition.endX=i.touchPosition.currentX||e.changedTouches[0].pageX,i.isTouch)){
			if((!o.contains(e.target)||!o.contains(e.relatedTarget))&&Math.abs(i.touchPosition.startX-i.touchPosition.endX)<75)return;
			i.touchPosition.currentX<i.touchPosition.startX?i.index+=1:i.touchPosition.currentX>i.touchPosition.startX&&(i.index-=1),i.isTouch=!1,f.slideTo(i.index),L()}
		}
	function P(e){
		Array.from(g).forEach((function(e){
			return e.classList.remove("active")}
		)),g[e]&&g[e].classList.add("active")}
	function x(e){
		if(i.touchPosition){
			var t=i.index,n=e&&e.target!==d[t]?1e3*e.elapsedTime+100:20,s=f.getActiveIndex(),a="left"===i.direction?"next":"prev";
			i.isSliding&&setTimeout((function(){
				i.touchPosition&&(i.isSliding=!1,d[t].classList.add("active"),d[s].classList.remove("active"),d[t].classList.remove("carousel-item-"+a),d[t].classList.remove("carousel-item-"+i.direction),d[s].classList.remove("carousel-item-"+i.direction),V.call(o,c),document.hidden||!r.interval||o.classList.contains("paused")||f.cycle())}
			),n)}
		}
	if(f.cycle=function(){
		i.timer&&(clearInterval(i.timer),i.timer=null),i.timer=setInterval((function(){
			var e=i.index||f.getActiveIndex();
				(function(e){
				var t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight;
			return t.top<=n&&t.bottom>=0}
			)(o)&&(e+=1,f.slideTo(e))}
		),r.interval)}
	,f.slideTo=function(e){
		if(!i.isSliding){
			var t=f.getActiveIndex(),n=e;
				if(t!==n){
				t<n||0===t&&n===d.length-1?i.direction="left":(t>n||t===d.length-1&&0===n)&&(i.direction="right"),n<0?n=d.length-1:n>=d.length&&(n=0);
				var s="left"===i.direction?"next":"prev",a={
					relatedTarget:d[n],direction:i.direction,from:t,to:n}
				;
		l=X("slide","carousel",a),c=X("slid","carousel",a),V.call(o,l),l.defaultPrevented||(i.index=n,i.isSliding=!0,clearInterval(i.timer),i.timer=null,P(n),q(d[n])&&o.classList.contains("slide")?(d[n].classList.add("carousel-item-"+s),K(d[n]),d[n].classList.add("carousel-item-"+i.direction),d[t].classList.add("carousel-item-"+i.direction),z(d[n],x)):(d[n].classList.add("active"),K(d[n]),d[t].classList.remove("active"),setTimeout((function(){
					i.isSliding=!1,r.interval&&o&&!o.classList.contains("paused")&&f.cycle(),V.call(o,c)}
				),100)))}
			}
		}
	,f.getActiveIndex=function(){
		return Array.from(d).indexOf(o.getElementsByClassName("carousel-item active")[0])||0}
	,f.dispose=function(){
		var e=["left","right","prev","next"];
		Array.from(d).forEach((function(t,n){
			t.classList.contains("active")&&P(n),e.forEach((function(e){
				return t.classList.remove("carousel-item-"+e)}
			))}
		)),clearInterval(i.timer),k(),i={
			}
		,r={
			}
		,delete o.Carousel}
	,(o=U(e)).Carousel&&o.Carousel.dispose(),d=o.getElementsByClassName("carousel-item"),n=o.getElementsByClassName("carousel-control-prev"),u=n[0],s=o.getElementsByClassName("carousel-control-next"),m=s[0],a=o.getElementsByClassName("carousel-indicators"),p=a[0],g=p&&p.getElementsByTagName("LI")||[],!(d.length<2)){
		var C=o.getAttribute("data-interval"),S="false"===C?0:+C,F="false"===o.getAttribute("data-touch")?0:1,W="hover"===o.getAttribute("data-pause")||!1,$="true"===o.getAttribute("data-keyboard")||!1,N=h.interval,D=h.touch;
	(r={
			}
		).keyboard=!0===h.keyboard||$,r.pause=!("hover"!==h.pause&&!W)&&"hover",r.touch=D||F,r.interval=5e3,"number"==typeof N?r.interval=N:!1===N||0===S||!1===S?r.interval=0:Number.isNaN(S)||(r.interval=S),f.getActiveIndex()<0&&(d.length&&d[0].classList.add("active"),g.length&&P(0)),(i={
			}
		).direction="left",i.index=0,i.timer=null,i.isSliding=!1,i.isTouch=!1,i.touchPosition={
			startX:0,currentX:0,endX:0}
		,k(1),r.interval&&f.cycle(),o.Carousel=f}
	}
function ee(e,t){
	var n,s,a,o,i,r,l,c=t||{
		}
	,d=this,u=null,m=null;
		function p(e,t){
		V.call(e,r),r.defaultPrevented||(e.isAnimating=!0,e.style.height=e.scrollHeight+"px",e.classList.remove("collapse"),e.classList.remove("show"),e.classList.add("collapsing"),K(e),e.style.height="0px",z(e,(function(){
			e.isAnimating=!1,e.setAttribute("aria-expanded","false"),t.setAttribute("aria-expanded","false"),e.classList.remove("collapsing"),e.classList.add("collapse"),e.style.height="",V.call(e,l)}
		)))}
	d.toggle=function(e){
		(e&&"A"===e.target.tagName||"A"===n.tagName)&&e.preventDefault(),(n.contains(e.target)||e.target===n)&&(m.classList.contains("show")?d.hide():d.show())}
	,d.hide=function(){
		m.isAnimating||(p(m,n),n.classList.add("collapsed"))}
	,d.show=function(){
		var e,t,r;
	u&&(e=u.getElementsByClassName("collapse show"),s=e[0],a=s&&(U('[data-target="#'+s.id+'"]',u)||U('[href="#'+s.id+'"]',u))),m.isAnimating||(a&&s!==m&&(p(s,a),a.classList.add("collapsed")),t=m,r=n,V.call(t,o),o.defaultPrevented||(t.isAnimating=!0,t.classList.add("collapsing"),t.classList.remove("collapse"),t.style.height=t.scrollHeight+"px",z(t,(function(){
			t.isAnimating=!1,t.setAttribute("aria-expanded","true"),r.setAttribute("aria-expanded","true"),t.classList.remove("collapsing"),t.classList.add("collapse"),t.classList.add("show"),t.style.height="",V.call(t,i)}
		))),n.classList.remove("collapsed"))}
	,d.dispose=function(){
		n.removeEventListener("click",d.toggle,!1),delete n.Collapse}
	,(n=U(e)).Collapse&&n.Collapse.dispose();
	var g=n.getAttribute("data-parent");
	o=X("show","collapse"),i=X("shown","collapse"),r=X("hide","collapse"),l=X("hidden","collapse"),null!==(m=U(c.target||n.getAttribute("data-target")||n.getAttribute("href")))&&(m.isAnimating=!1),u=n.closest(c.parent||g),n.Collapse||n.addEventListener("click",d.toggle,!1),n.Collapse=d}
function te(e){
	e.focus()}
function ne(e,t){
	var n,s,a,o,i,r,l,c,d=this,u=null,m=[];
		function p(e){
		(e.href&&"#"===e.href.slice(-1)||e.parentNode&&e.parentNode.href&&"#"===e.parentNode.href.slice(-1))&&this.preventDefault()}
	function g(){
		var e=n.open?"addEventListener":"removeEventListener";
		document[e]("click",h,!1),document[e]("keydown",v,!1),document[e]("keyup",w,!1),document[e]("focus",h,!1)}
	function h(e){
		var t=e.target;
			if(t.getAttribute){
			var s=t&&t.getAttribute("data-toggle")||t.parentNode&&t.parentNode.getAttribute&&t.parentNode.getAttribute("data-toggle");
		("focus"!==e.type||t!==n&&t!==l&&!l.contains(t))&&(t!==l&&!l.contains(t)||!c&&!s)&&(u=t===n||n.contains(t)?n:null,d.hide(),p.call(e,t))}
		}
	function f(e){
		u=n,d.show(),p.call(e,e.target)}
	function v(e){
		var t=e.which||e.keyCode;
		38!==t&&40!==t||e.preventDefault()}
	function w(e){
		var t=e.which||e.keyCode,s=document.activeElement,a=s===n,o=l.contains(s),i=s.parentNode===l||s.parentNode.parentNode===l,r=m.indexOf(s);
	i&&(a?r=0:38===t?r=r>1?r-1:0:40===t&&(r=r<m.length-1?r+1:r),m[r]&&te(m[r])),(m.length&&i||!m.length&&(o||a)||!o)&&n.open&&27===t&&(d.toggle(),u=null)}
	d.show=function(){
		s=X("show","dropdown",{
			relatedTarget:u}
		),V.call(r,s),s.defaultPrevented||(l.classList.add("show"),r.classList.add("show"),n.setAttribute("aria-expanded",!0),n.open=!0,n.removeEventListener("click",f,!1),setTimeout((function(){
			te(l.getElementsByTagName("INPUT")[0]||n),g(),a=X("shown","dropdown",{
				relatedTarget:u}
			),V.call(r,a)}
		),1))}
	,d.hide=function(){
		o=X("hide","dropdown",{
			relatedTarget:u}
		),V.call(r,o),o.defaultPrevented||(l.classList.remove("show"),r.classList.remove("show"),n.setAttribute("aria-expanded",!1),n.open=!1,g(),te(n),setTimeout((function(){
			n.Dropdown&&n.addEventListener("click",f,!1)}
		),1),i=X("hidden","dropdown",{
			relatedTarget:u}
		),V.call(r,i))}
	,d.toggle=function(){
		r.classList.contains("show")&&n.open?d.hide():d.show()}
	,d.dispose=function(){
		r.classList.contains("show")&&n.open&&d.hide(),n.removeEventListener("click",f,!1),delete n.Dropdown}
	,(n=U(e)).Dropdown&&n.Dropdown.dispose(),r=n.parentNode,l=U(".dropdown-menu",r),Array.from(l.children).forEach((function(e){
		e.children.length&&"A"===e.children[0].tagName&&m.push(e.children[0]),"A"===e.tagName&&m.push(e)}
	)),n.Dropdown||("tabindex"in l||l.setAttribute("tabindex","0"),n.addEventListener("click",f,!1)),c=!0===t||"true"===n.getAttribute("data-persist")||!1,n.open=!1,n.Dropdown=d}
function se(e,t){
	var n,s,a,o,i,r,l,c,d,u,m=t||{
		}
	,p=this,g=null,h={
		}
	;
		function f(){
		var e=document.body.classList.contains("modal-open"),t=parseInt(getComputedStyle(document.body).paddingRight,10),n=document.documentElement.clientHeight,a=document.documentElement.scrollHeight,o=document.body.clientHeight,i=document.body.scrollHeight,r=n!==a||o!==i,c=s.clientHeight!==s.scrollHeight;
			l=function(){
			var e=document.createElement("div");
			e.className="modal-scrollbar-measure",document.body.appendChild(e);
			var t=e.offsetWidth-e.clientWidth;
			return document.body.removeChild(e),t}
		(),s.style.paddingRight=!c&&l?l+"px":"",document.body.style.paddingRight=c||r?t+(e?0:l)+"px":"",u.length&&u.forEach((function(t){
			var n=getComputedStyle(t).paddingRight;
		t.style.paddingRight=c||r?parseInt(n,10)+(e?0:l)+"px":parseInt(n,10)+"px"}
		))}
	function v(){
		(c=U(".modal-backdrop"))&&!document.getElementsByClassName("modal show")[0]&&(document.body.removeChild(c),c=null),null===c&&(document.body.classList.remove("modal-open"),document.body.style.paddingRight="",s.style.paddingRight="",u.length&&u.forEach((function(e){
			e.style.paddingRight=""}
		)))}
	function w(e){
		var t=e?"addEventListener":"removeEventListener";
			window[t]("resize",p.update,Y),s[t]("click",T,!1),document[t]("keydown",L,!1)}
	function y(){
		s.style.display="block",f(),document.getElementsByClassName("modal show")[0]||document.body.classList.add("modal-open"),s.classList.add("show"),s.setAttribute("aria-hidden",!1),s.classList.contains("fade")?z(s,b):b()}
	function b(){
		te(s),s.isAnimating=!1,w(1),o=X("shown","modal",{
			relatedTarget:g}
		),V.call(s,o)}
	function _(e){
		s.style.display="",n&&te(n),c=U(".modal-backdrop"),1!==e&&c&&c.classList.contains("show")&&!document.getElementsByClassName("modal show")[0]?(c.classList.remove("show"),z(c,v)):v(),w(),s.isAnimating=!1,r=X("hidden","modal"),V.call(s,r)}
	function k(e){
		if(!s.isAnimating){
			var t=e.target,a="#"+s.getAttribute("id"),o=t.getAttribute("data-target")||t.getAttribute("href"),i=n.getAttribute("data-target")||n.getAttribute("href");
		!s.classList.contains("show")&&(t===n&&o===a||n.contains(t)&&i===a)&&(s.modalTrigger=n,g=n,p.show(),e.preventDefault())}
		}
	function L(e){
		var t=e.which;
			!s.isAnimating&&h.keyboard&&27===t&&s.classList.contains("show")&&p.hide()}
	function T(e){
		if(!s.isAnimating){
			var t=e.target,n="modal"===t.getAttribute("data-dismiss"),a=t.closest('[data-dismiss="modal"]');
			s.classList.contains("show")&&(a||n||t===s&&"static"!==h.backdrop)&&(p.hide(),g=null,e.preventDefault())}
		}
	p.toggle=function(){
		s.classList.contains("show")?p.hide():p.show()}
	,p.show=function(){
		if(!(s.classList.contains("show")&&s.isAnimating||(a=X("show","modal",{
			relatedTarget:g}
		),V.call(s,a),a.defaultPrevented))){
			s.isAnimating=!0;
			var e,t=document.getElementsByClassName("modal show")[0];
	t&&t!==s&&(t.modalTrigger&&t.modalTrigger.Modal.hide(),t.Modal&&t.Modal.hide()),h.backdrop&&(e=document.createElement("div"),null===(c=U(".modal-backdrop"))&&(e.setAttribute("class","modal-backdrop"+(h.animation?" fade":"")),c=e,document.body.appendChild(c)),c=c),!c||t||c.classList.contains("show")||(K(c),d=q(c),c.classList.add("show")),t?y():setTimeout(y,c&&d?d:0)}
		}
	,p.hide=function(e){
		s.classList.contains("show")&&(i=X("hide","modal"),V.call(s,i),i.defaultPrevented||(s.isAnimating=!0,s.classList.remove("show"),s.setAttribute("aria-hidden",!0),s.classList.contains("fade")&&1!==e?z(s,_):_()))}
	,p.setContent=function(e){
		U(".modal-content",s).innerHTML=e}
	,p.update=function(){
		s.classList.contains("show")&&f()}
	,p.dispose=function(){
		p.hide(1),n?(n.removeEventListener("click",k,!1),delete n.Modal):delete s.Modal}
	,n=U(e);
	var A=U(n.getAttribute("data-target")||n.getAttribute("href"));
s=n.classList.contains("modal")?n:A,u=Array.from(document.getElementsByClassName("fixed-top")).concat(Array.from(document.getElementsByClassName("fixed-bottom"))),n.classList.contains("modal")&&(n=null),n&&n.Modal&&n.Modal.dispose(),s&&s.Modal&&s.Modal.dispose(),h.keyboard=!(!1===m.keyboard||"false"===s.getAttribute("data-keyboard")),h.backdrop="static"!==m.backdrop&&"static"!==s.getAttribute("data-backdrop")||"static",h.backdrop=!1!==m.backdrop&&"false"!==s.getAttribute("data-backdrop")&&h.backdrop,h.animation=!!s.classList.contains("fade"),h.content=m.content,s.isAnimating=!1,n&&!n.Modal&&n.addEventListener("click",k,!1),h.content&&p.setContent(h.content.trim()),n?(s.modalTrigger=n,n.Modal=p):s.Modal=p}
var ae="mousedown";
	function oe(){
	return{
		y:window.pageYOffset||document.documentElement.scrollTop,x:window.pageXOffset||document.documentElement.scrollLeft}
	}
function ie(e,t,n,s){
	var a,o,i,r,l=t.offsetWidth,c=t.offsetHeight,d=document.documentElement.clientWidth||document.body.clientWidth,u=document.documentElement.clientHeight||document.body.clientHeight,m=e.getBoundingClientRect(),p=s===document.body?oe():{
		x:s.offsetLeft+s.scrollLeft,y:s.offsetTop+s.scrollTop}
	,g=m.right-m.left,h=m.bottom-m.top,f=t.classList.contains("popover"),v=t.getElementsByClassName("arrow")[0],w=m.top+h/2-c/2<0,y=m.left+g/2-l/2<0,b=m.left+l/2+g/2>=d,_=m.top+c/2+h/2>=u,k=m.top-c<0,L=m.left-l<0,T=m.top+c+h>=u,A=m.left+l+g>=d,E=n;
	E="right"===(E="left"===(E="bottom"===(E="top"===(E=("left"===E||"right"===E)&&L&&A?"top":E)&&k?"bottom":E)&&T?"top":E)&&L?"right":E)&&A?"left":E,-1===t.className.indexOf(E)&&(t.className=t.className.replace(/\b(top|bottom|left|right)+/,E));
	var P=v.offsetWidth,x=v.offsetHeight;
	"left"===E||"right"===E?(o="left"===E?m.left+p.x-l-(f?P:0):m.left+p.x+g,w?(a=m.top+p.y,i=h/2-P):_?(a=m.top+p.y-c+h,i=c-h/2-P):(a=m.top+p.y-c/2+h/2,i=c/2-(f?.9*x:x/2))):"top"!==E&&"bottom"!==E||(a="top"===E?m.top+p.y-c-(f?x:0):m.top+p.y+h,y?(o=0,r=m.left+g/2-P):b?(o=d-1.01*l,r=l-(d-m.left)+g/2-P/2):(o=m.left+p.x-l/2+g/2,r=l/2-(f?P:P/2))),t.style.top=a+"px",t.style.left=o+"px",i&&(v.style.top=i+"px"),r&&(v.style.left=r+"px")}
function re(e,t){
	var n,s,a,o,i,r,l,c,d,u,m=t||{
		}
	,p=this,g=null,h=0,f=/(iPhone|iPod|iPad)/.test(navigator.userAgent),v={
		}
	;
		function w(e){
		null!==g&&e.target===U(".close",g)&&p.hide()}
	function y(){
		return{
			0:m.title||s.getAttribute("data-title")||null,1:m.content||s.getAttribute("data-content")||null}
		}
	function b(){
		null===g&&s.focus()}
	function _(e){
		var t=e?"addEventListener":"removeEventListener";
		"hover"===v.trigger?(s[t](ae,p.show),s[t](J[0],p.show),v.dismissible||s[t](J[1],p.hide)):"click"===v.trigger?s[t](v.trigger,p.toggle):"focus"===v.trigger&&(f&&s[t]("click",b,!1),s[t](v.trigger,p.toggle))}
	function k(e){
		g&&g.contains(e.target)||e.target===s||s.contains(e.target)||p.hide()}
	function L(e){
		var t=e?"addEventListener":"removeEventListener";
				v.dismissible?document[t]("click",w,!1):("focus"===v.trigger&&s[t]("blur",p.hide),"hover"===v.trigger&&document[t]("touchstart",k,Y)),window[t]("resize",p.hide,Y)}
	function T(){
		L(1),V.call(s,c)}
	function A(){
		L(),v.container.removeChild(g),h=null,g=null,V.call(s,u)}
	p.toggle=function(){
		null===g?p.show():p.hide()}
	,p.show=function(){
		clearTimeout(h),h=setTimeout((function(){
			if(null===g){
				if(V.call(s,l),l.defaultPrevented)return;
					!function(){
					var e;
					e=y(),a=e[0],o=(o=e[1])?o.trim():null,g=document.createElement("div");
					var t=document.createElement("div");
							if(t.classList.add("arrow"),g.appendChild(t),null!==o&&null===v.template){
						if(g.setAttribute("role","tooltip"),null!==a){
							var n=document.createElement("h3");
						n.classList.add("popover-header"),n.innerHTML=v.dismissible?a+r:a,g.appendChild(n)}
						var s=document.createElement("div");
						s.classList.add("popover-body"),s.innerHTML=v.dismissible&&null===a?o+r:o,g.appendChild(s)}
					else{
						var l=document.createElement("div");
						l.innerHTML=v.template.trim(),g.className=l.firstChild.className,g.innerHTML=l.firstChild.innerHTML;
						var c=U(".popover-header",g),d=U(".popover-body",g);
				a&&c&&(c.innerHTML=a.trim()),o&&d&&(d.innerHTML=o.trim())}
					v.container.appendChild(g),g.style.display="block",g.classList.contains("popover")||g.classList.add("popover"),g.classList.contains(v.animation)||g.classList.add(v.animation),g.classList.contains(i)||g.classList.add(i)}
				(),ie(s,g,v.placement,v.container),g.classList.contains("show")||g.classList.add("show"),v.animation?z(g,T):T()}
			}
		),20)}
	,p.hide=function(){
		clearTimeout(h),h=setTimeout((function(){
			if(g&&null!==g&&g.classList.contains("show")){
				if(V.call(s,d),d.defaultPrevented)return;
	g.classList.remove("show"),v.animation?z(g,A):A()}
			}
		),v.delay)}
	,p.dispose=function(){
		p.hide(),_(),delete s.Popover}
	,(s=U(e)).Popover&&s.Popover.dispose();
	var E=s.getAttribute("data-trigger"),P=s.getAttribute("data-animation"),x=s.getAttribute("data-placement"),C=s.getAttribute("data-dismissible"),S=s.getAttribute("data-delay"),F=s.getAttribute("data-container");
	r='<button type="button" class="close">×</button>',l=X("show","popover"),c=X("shown","popover"),d=X("hide","popover"),u=X("hidden","popover");
	var W=U(m.container),$=U(F),N=s.closest(".modal"),D=s.closest(".fixed-top"),R=s.closest(".fixed-bottom");
	v.template=m.template?m.template:null,v.trigger=m.trigger?m.trigger:E||"hover",v.animation=m.animation&&"fade"!==m.animation?m.animation:P||"fade",v.placement=m.placement?m.placement:x||"top",v.delay=parseInt(m.delay||S,10)||200,v.dismissible=!(!m.dismissible&&"true"!==C),v.container=W||$||D||R||N||document.body,i="bs-popover-"+v.placement,n=y(),a=n[0],((o=n[1])||v.template)&&(s.Popover||_(1),s.Popover=p)}
function le(e,t){
	var n,s,a,o,i,r=t||{
		}
	,l=this,c={
		}
	;
		function d(e){
		var t=e?"addEventListener":"removeEventListener";
		i[t]("scroll",l.refresh,Y),window[t]("resize",l.refresh,Y)}
	function u(){
		return i.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}
	function m(){
		Array.from(a).map((function(e){
			return e.classList.contains("active")&&e.classList.remove("active")}
		))}
	function p(e){
		var t,a=e;
		m(),s.activeItem=a,a.classList.add("active");
		for(var o=[];
		a.parentNode!==document.body;
		)((t=(a=a.parentNode).classList).contains("dropdown-menu")||t.contains("nav"))&&o.push(a);
			o.forEach((function(e){
			var t=e.previousElementSibling;
			t&&!t.classList.contains("active")&&t.classList.add("active")}
		)),V.call(n,X("activate","scrollspy",{
			relatedTarget:s.activeItem}
		))}
	l.refresh=function(){
		if(function(){
			var e,t,i;
			a=o.getElementsByTagName("A"),s.scrollTop=s.isWindow?oe().y:n.scrollTop,(s.length!==a.length||u()!==s.scrollHeight)&&(s.items=[],s.offsets=[],s.scrollHeight=u(),s.maxScroll=s.scrollHeight-(s.isWindow?window.innerHeight:n.getBoundingClientRect().height),Array.from(a).forEach((function(n){
				e=n.getAttribute("href"),(t=e&&"#"===e.charAt(0)&&"#"!==e.slice(-1)&&U(e))&&(s.items.push(n),i=t.getBoundingClientRect(),s.offsets.push((s.isWindow?i.top+s.scrollTop:t.offsetTop)-c.offset))}
			)),s.length=s.items.length)}
		(),s.scrollTop>=s.maxScroll){
			var e=s.items[s.length-1];
			s.activeItem!==e&&p(e)}
		else{
			if(s.activeItem&&s.scrollTop<s.offsets[0]&&s.offsets[0]>0)return s.activeItem=null,void m();
			for(var t=s.length;
			t>-1;
	)s.activeItem!==s.items[t]&&s.scrollTop>=s.offsets[t]&&(void 0===s.offsets[t+1]||s.scrollTop<s.offsets[t+1])&&p(s.items[t]),t-=1}
		}
	,l.dispose=function(){
		d(),delete n.ScrollSpy}
	,(n=U(e)).ScrollSpy&&n.ScrollSpy.dispose();
	var g=n.getAttribute("data-target"),h=n.getAttribute("data-offset");
	o=U(r.target||g),i=n.clientHeight<n.scrollHeight?n:window,o&&(c.offset=+(r.offset||h)||10,(s={
		}
	).length=0,s.items=[],s.offsets=[],s.isWindow=i===window,s.activeItem=null,s.scrollHeight=0,s.maxScroll=0,n.ScrollSpy||d(1),l.refresh(),n.ScrollSpy=l)}
function ce(e,t){
	var n,s,a,o,i,r,l,c,d,u,m,p,g,h,f=t||{
		}
	,v=this,w=!1;
		function y(){
		w.style.height="",w.classList.remove("collapsing"),s.isAnimating=!1}
	function b(){
		w?g?y():setTimeout((function(){
			w.style.height=h+"px",K(w),z(w,y)}
		),50):s.isAnimating=!1,i=X("shown","tab",{
			relatedTarget:d}
		),V.call(c,i)}
	function _(){
		w&&(u.style.float="left",m.style.float="left",p=u.scrollHeight),o=X("show","tab",{
			relatedTarget:d}
		),l=X("hidden","tab",{
			relatedTarget:c}
		),V.call(c,o),o.defaultPrevented||(m.classList.add("active"),u.classList.remove("active"),w&&(h=m.scrollHeight,g=h===p,w.classList.add("collapsing"),w.style.height=p+"px",K(w),u.style.float="",m.style.float=""),m.classList.contains("fade")?setTimeout((function(){
			m.classList.add("show"),z(m,b)}
		),20):b(),V.call(d,l))}
	function k(){
		var e=s.getElementsByClassName("active");
			return 1!==e.length||e[0].parentNode.classList.contains("dropdown")?e.length>1&&(d=e[e.length-1]):d=e[0],d}
	function L(){
		return U(k().getAttribute("href"))}
	function T(e){
		e.preventDefault(),c=e.currentTarget,s.isAnimating||v.show()}
	v.show=function(){
		if(!(c=c||n).classList.contains("active")){
			if(m=U(c.getAttribute("href")),d=k(),u=L(),r=X("hide","tab",{
				relatedTarget:c}
			),V.call(d,r),r.defaultPrevented)return;
	s.isAnimating=!0,d.classList.remove("active"),d.setAttribute("aria-selected","false"),c.classList.add("active"),c.setAttribute("aria-selected","true"),a&&(n.parentNode.classList.contains("dropdown-menu")?a.classList.contains("active")||a.classList.add("active"):a.classList.contains("active")&&a.classList.remove("active")),u.classList.contains("fade")?(u.classList.remove("show"),z(u,_)):_()}
		}
	,v.dispose=function(){
		n.removeEventListener("click",T,!1),delete n.Tab}
	,(n=U(e)).Tab&&n.Tab.dispose();
	var A=n.getAttribute("data-height");
	s=n.closest(".nav"),a=s&&U(".dropdown-toggle",s);
	var E=!(!B||!1===f.height||"false"===A);
	s.isAnimating=!1,n.Tab||n.addEventListener("click",T,!1),E&&(w=L().parentNode),n.Tab=v}
function de(e,t){
	var n,s,a,o,i,r,l=t||{
		}
	,c=this,d=0,u={
		}
	;
			function m(){
		s.classList.remove("showing"),s.classList.add("show"),V.call(s,i),u.autohide&&c.hide()}
	function p(){
		s.classList.add("hide"),V.call(s,r)}
	function g(){
		s.classList.remove("show"),u.animation?z(s,p):p()}
	function h(){
		clearTimeout(d),n.removeEventListener("click",c.hide,!1),delete n.Toast}
	c.show=function(){
		if(s&&!s.classList.contains("show")){
			if(V.call(s,a),a.defaultPrevented)return;
			u.animation&&s.classList.add("fade"),s.classList.remove("hide"),K(s),s.classList.add("showing"),u.animation?z(s,m):m()}
		}
	,c.hide=function(e){
		if(s&&s.classList.contains("show")){
			if(V.call(s,o),o.defaultPrevented)return;
	e?g():d=setTimeout(g,u.delay)}
		}
	,c.dispose=function(){
		u.animation?z(s,h):h()}
	,(n=U(e)).Toast&&n.Toast.dispose(),s=n.closest(".toast");
	var f=n.getAttribute("data-animation"),v=n.getAttribute("data-autohide"),w=n.getAttribute("data-delay");
	a=X("show","toast"),o=X("hide","toast"),i=X("shown","toast"),r=X("hidden","toast"),u.animation=!1===l.animation||"false"===f?0:1,u.autohide=!1===l.autohide||"false"===v?0:1,u.delay=parseInt(l.delay||w,10)||500,n.Toast||n.addEventListener("click",c.hide,!1),n.Toast=c}
function ue(e,t){
	var n,s,a,o,i,r,l,c=t||{
		}
	,d=this,u=null,m=0,p={
		}
	;
		function g(){
		return n.getAttribute("title")||n.getAttribute("data-title")||n.getAttribute("data-original-title")}
	function h(e){
		u&&u.contains(e.target)||e.target===n||n.contains(e.target)||d.hide()}
	function f(e){
		var t=e?"addEventListener":"removeEventListener";
		document[t]("touchstart",h,Y),window[t]("resize",d.hide,Y)}
	function v(){
		f(1),V.call(n,i)}
	function w(){
		f(),p.container.removeChild(u),u=null,m=null,V.call(n,l)}
	function y(e){
		var t=e?"addEventListener":"removeEventListener";
				n[t](ae,d.show,!1),n[t](J[0],d.show,!1),n[t](J[1],d.hide,!1)}
	d.show=function(){
		clearTimeout(m),m=setTimeout((function(){
			if(null===u){
				if(V.call(n,o),o.defaultPrevented)return;
							!1!==function(){
					if(s=g()){
						if(u=document.createElement("div"),p.template){
							var e=document.createElement("div");
							e.innerHTML=p.template.trim(),u.className=e.firstChild.className,u.innerHTML=e.firstChild.innerHTML,U(".tooltip-inner",u).innerHTML=s.trim()}
						else{
							var t=document.createElement("div");
							t.classList.add("arrow"),u.appendChild(t);
							var n=document.createElement("div");
				n.classList.add("tooltip-inner"),u.appendChild(n),n.innerHTML=s}
						u.style.left="0",u.style.top="0",u.setAttribute("role","tooltip"),u.classList.contains("tooltip")||u.classList.add("tooltip"),u.classList.contains(p.animation)||u.classList.add(p.animation),u.classList.contains(a)||u.classList.add(a),p.container.appendChild(u)}
					}
				()&&(ie(n,u,p.placement,p.container),u.classList.contains("show")||u.classList.add("show"),p.animation?z(u,v):v())}
			}
		),20)}
	,d.hide=function(){
		clearTimeout(m),m=setTimeout((function(){
			if(u&&u.classList.contains("show")){
				if(V.call(n,r),r.defaultPrevented)return;
	u.classList.remove("show"),p.animation?z(u,w):w()}
			}
		),p.delay)}
	,d.toggle=function(){
		u?d.hide():d.show()}
	,d.dispose=function(){
		y(),d.hide(),n.setAttribute("title",n.getAttribute("data-original-title")),n.removeAttribute("data-original-title"),delete n.Tooltip}
	,(n=U(e)).Tooltip&&n.Tooltip.dispose();
	var b=n.getAttribute("data-animation"),_=n.getAttribute("data-placement"),k=n.getAttribute("data-delay"),L=n.getAttribute("data-container"),T=U(c.container),A=U(L),E=n.closest(".modal");
	o=X("show","tooltip"),i=X("shown","tooltip"),r=X("hide","tooltip"),l=X("hidden","tooltip");
	var P=n.closest(".fixed-top"),x=n.closest(".fixed-bottom");
p.animation=c.animation&&"fade"!==c.animation?c.animation:b||"fade",p.placement=c.placement?c.placement:_||"top",p.template=c.template?c.template:null,p.delay=parseInt(c.delay||k,10)||200,p.container=T||A||P||x||E||document.body,a="bs-tooltip-"+p.placement,(s=g())&&(n.Tooltip||(n.setAttribute("data-original-title",s),n.removeAttribute("title"),y(1)),n.Tooltip=d)}
var me={
	}
;
	function pe(e){
	var t=e instanceof Element?e:document;
		Object.keys(me).forEach((function(e){
		var n,s;
n=me[e][0],s=t.querySelectorAll(me[e][1]),Array.from(s).map((function(e){
			return new n(e)}
		))}
	))}
me.Alert=[Z,'[data-dismiss="alert"]'],me.Button=[G,'[data-toggle="buttons"]'],me.Carousel=[Q,'[data-ride="carousel"]'],me.Collapse=[ee,'[data-toggle="collapse"]'],me.Dropdown=[ne,'[data-toggle="dropdown"]'],me.Modal=[se,'[data-toggle="modal"]'],me.Popover=[re,'[data-toggle="popover"],[data-tip="popover"]'],me.ScrollSpy=[le,'[data-spy="scroll"]'],me.Tab=[ce,'[data-toggle="tab"]'],me.Toast=[de,'[data-dismiss="toast"]'],me.Tooltip=[ue,'[data-toggle="tooltip"],[data-tip="tooltip"]'],document.body?pe():document.addEventListener("DOMContentLoaded",(function e(){
	pe(),document.removeEventListener("DOMContentLoaded",e,!1)}
),!1);
		var ge={
	Alert:Z,Button:G,Carousel:Q,Collapse:ee,Dropdown:ne,Modal:se,Popover:re,ScrollSpy:le,Tab:ce,Toast:de,Tooltip:ue,initCallback:pe,removeDataAPI:function(e){
		var t=e instanceof Element?e:document;
			Object.keys(me).forEach((function(e){
			var n,s;
				n=e,s=t.querySelectorAll(me[e][1]),Array.from(s).map((function(e){
				return e[n].dispose()}
			))}
		))}
	,componentsInit:me,Version:"4.0.3"}
,he=function(e){
	var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,s={
		manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{
			encode:function e(t){
				return t instanceof a?new a(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;
				").replace(/</g,"&lt;
				").replace(/\u00a0/g," ")}
			,type:function(e){
				return Object.prototype.toString.call(e).slice(8,-1)}
			,objId:function(e){
				return e.__id||Object.defineProperty(e,"__id",{
					value:++n}
				),e.__id}
			,clone:function e(t,n){
				var a,o;
					switch(n=n||{
					}
				,s.util.type(t)){
					case"Object":if(o=s.util.objId(t),n[o])return n[o];
					for(var i in a={
						}
					,n[o]=a,t)t.hasOwnProperty(i)&&(a[i]=e(t[i],n));
					return a;
					case"Array":return o=s.util.objId(t),n[o]?n[o]:(a=[],n[o]=a,t.forEach((function(t,s){
						a[s]=e(t,n)}
					)),a);
				default:return t}
				}
			,getLanguage:function(e){
				for(;
				e&&!t.test(e.className);
				)e=e.parentElement;
				return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"}
			,currentScript:function(){
				if("undefined"==typeof document)return null;
				if("currentScript"in document)return document.currentScript;
					try{
					throw new Error}
				catch(s){
					var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(s.stack)||[])[1];
						if(e){
						var t=document.getElementsByTagName("script");
				for(var n in t)if(t[n].src==e)return t[n]}
					return null}
				}
			,isActive:function(e,t,n){
				for(var s="no-"+t;
				e;
					){
					var a=e.classList;
					if(a.contains(t))return!0;
					if(a.contains(s))return!1;
				e=e.parentElement}
				return!!n}
			}
		,languages:{
			extend:function(e,t){
				var n=s.util.clone(s.languages[e]);
				for(var a in t)n[a]=t[a];
				return n}
			,insertBefore:function(e,t,n,a){
				var o=(a=a||s.languages)[e],i={
					}
				;
					for(var r in o)if(o.hasOwnProperty(r)){
					if(r==t)for(var l in n)n.hasOwnProperty(l)&&(i[l]=n[l]);
				n.hasOwnProperty(r)||(i[r]=o[r])}
				var c=a[e];
				return a[e]=i,s.languages.DFS(s.languages,(function(t,n){
					n===c&&t!=e&&(this[t]=i)}
				)),i}
			,DFS:function e(t,n,a,o){
				o=o||{
					}
				;
				var i=s.util.objId;
					for(var r in t)if(t.hasOwnProperty(r)){
					n.call(t,r,t[r],a||r);
					var l=t[r],c=s.util.type(l);
			"Object"!==c||o[i(l)]?"Array"!==c||o[i(l)]||(o[i(l)]=!0,e(l,n,r,o)):(o[i(l)]=!0,e(l,n,null,o))}
				}
			}
		,plugins:{
			}
		,highlightAll:function(e,t){
			s.highlightAllUnder(document,e,t)}
		,highlightAllUnder:function(e,t,n){
			var a={
				callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'}
			;
			s.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),s.hooks.run("before-all-elements-highlight",a);
			for(var o,i=0;
			o=a.elements[i++];
			)s.highlightElement(o,!0===t,a.callback)}
		,highlightElement:function(n,a,o){
			var i=s.util.getLanguage(n),r=s.languages[i];
			n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+i;
			var l=n.parentElement;
			l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+i);
			var c={
				element:n,language:i,grammar:r,code:n.textContent}
			;
			function d(e){
				c.highlightedCode=e,s.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,s.hooks.run("after-highlight",c),s.hooks.run("complete",c),o&&o.call(c.element)}
			if(s.hooks.run("before-sanity-check",c),!c.code)return s.hooks.run("complete",c),void(o&&o.call(c.element));
				if(s.hooks.run("before-highlight",c),c.grammar)if(a&&e.Worker){
				var u=new Worker(s.filename);
			u.onmessage=function(e){
					d(e.data)}
				,u.postMessage(JSON.stringify({
					language:c.language,code:c.code,immediateClose:!0}
				))}
			else d(s.highlight(c.code,c.grammar,c.language));
			else d(s.util.encode(c.code))}
		,highlight:function(e,t,n){
			var o={
				code:e,grammar:t,language:n}
			;
			return s.hooks.run("before-tokenize",o),o.tokens=s.tokenize(o.code,o.grammar),s.hooks.run("after-tokenize",o),a.stringify(s.util.encode(o.tokens),o.language)}
		,tokenize:function(e,t){
			var n=t.rest;
				if(n){
				for(var l in n)t[l]=n[l];
			delete t.rest}
			var c=new o;
					return i(c,c.head,e),function e(t,n,o,l,c,d){
				for(var u in o)if(o.hasOwnProperty(u)&&o[u]){
					var m=o[u];
					m=Array.isArray(m)?m:[m];
					for(var p=0;
					p<m.length;
						++p){
						if(d&&d.cause==u+","+p)return;
						var g=m[p],h=g.inside,f=!!g.lookbehind,v=!!g.greedy,w=0,y=g.alias;
							if(v&&!g.pattern.global){
							var b=g.pattern.toString().match(/[imsuy]*$/)[0];
						g.pattern=RegExp(g.pattern.source,b+"g")}
						for(var _=g.pattern||g,k=l.next,L=c;
						k!==n.tail&&!(d&&L>=d.reach);
							L+=k.value.length,k=k.next){
							var T=k.value;
							if(n.length>t.length)return;
								if(!(T instanceof a)){
								var A=1;
									if(v&&k!=n.tail.prev){
									if(_.lastIndex=L,!(S=_.exec(t)))break;
									var E=S.index+(f&&S[1]?S[1].length:0),P=S.index+S[0].length,x=L;
									for(x+=k.value.length;
									x<=E;
									)x+=(k=k.next).value.length;
									if(L=x-=k.value.length,k.value instanceof a)continue;
									for(var C=k;
									C!==n.tail&&(x<P||"string"==typeof C.value);
									C=C.next)A++,x+=C.value.length;
									A--,T=t.slice(L,x),S.index-=L}
								else{
									_.lastIndex=0;
									var S=_.exec(T)}
								if(S){
									f&&(w=S[1]?S[1].length:0);
									E=S.index+w;
									var F=S[0].slice(w),W=(P=E+F.length,T.slice(0,E)),$=T.slice(P),N=L+T.length;
									d&&N>d.reach&&(d.reach=N);
									var D=k.prev;
				W&&(D=i(n,D,W),L+=W.length),r(n,D,A),k=i(n,D,new a(u,h?s.tokenize(F,h):F,y,F)),$&&i(n,k,$),1<A&&e(t,n,o,k.prev,L,{
										cause:u+","+p,reach:N}
									)}
								}
							}
						}
					}
				}
			(e,c,t,c.head,0),function(e){
				for(var t=[],n=e.head.next;
				n!==e.tail;
				)t.push(n.value),n=n.next;
				return t}
			(c)}
		,hooks:{
			all:{
				}
			,add:function(e,t){
				var n=s.hooks.all;
				n[e]=n[e]||[],n[e].push(t)}
			,run:function(e,t){
				var n=s.hooks.all[e];
				if(n&&n.length)for(var a,o=0;
				a=n[o++];
	)a(t)}
			}
		,Token:a}
	;
		function a(e,t,n,s){
		this.type=e,this.content=t,this.alias=n,this.length=0|(s||"").length}
	function o(){
		var e={
			value:null,prev:null,next:null}
		,t={
			value:null,prev:e,next:null}
		;
		e.next=t,this.head=e,this.tail=t,this.length=0}
	function i(e,t,n){
		var s=t.next,a={
			value:n,prev:t,next:s}
		;
		return t.next=a,s.prev=a,e.length++,a}
	function r(e,t,n){
		for(var s=t.next,a=0;
		a<n&&s!==e.tail;
		a++)s=s.next;
		(t.next=s).prev=t,e.length-=a}
	if(e.Prism=s,a.stringify=function e(t,n){
		if("string"==typeof t)return t;
			if(Array.isArray(t)){
			var a="";
		return t.forEach((function(t){
				a+=e(t,n)}
			)),a}
		var o={
			type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{
				}
			,language:n}
		,i=t.alias;
		i&&(Array.isArray(i)?Array.prototype.push.apply(o.classes,i):o.classes.push(i)),s.hooks.run("wrap",o);
		var r="";
		for(var l in o.attributes)r+=" "+l+'="'+(o.attributes[l]||"").replace(/"/g,"&quot;
		")+'"';
		return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+r+">"+o.content+"</"+o.tag+">"}
	,!e.document)return e.addEventListener&&(s.disableWorkerMessageHandler||e.addEventListener("message",(function(t){
		var n=JSON.parse(t.data),a=n.language,o=n.code,i=n.immediateClose;
	e.postMessage(s.highlight(o,s.languages[a],a)),i&&e.close()}
	),!1)),s;
	var l=s.util.currentScript();
		function c(){
		s.manual||s.highlightAll()}
	if(l&&(s.filename=l.src,l.hasAttribute("data-manual")&&(s.manual=!0)),!s.manual){
		var d=document.readyState;
"loading"===d||"interactive"===d&&l&&l.defer?document.addEventListener("DOMContentLoaded",c):window.requestAnimationFrame?window.requestAnimationFrame(c):window.setTimeout(c,16)}
	return s}
("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{
	}
);
		"undefined"!=typeof module&&module.exports&&(module.exports=he),"undefined"!=typeof global&&(global.Prism=he),he.languages.markup={
	comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{
		pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{
			"internal-subset":{
				pattern:/(\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null}
			,string:{
				pattern:/"[^"]*"|'[^']*'/,greedy:!0}
			,punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}
		}
	,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{
		pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{
			tag:{
				pattern:/^<\/?[^\s>\/]+/,inside:{
					punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}
				}
			,"attr-value":{
				pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{
					punctuation:[{
						pattern:/^=/,alias:"attr-equals"}
					,/"|'/]}
				}
			,punctuation:/\/?>/,"attr-name":{
				pattern:/[^\s>\/]+/,inside:{
					namespace:/^[^\s>\/:]+:/}
				}
			}
		}
	,entity:[{
		pattern:/&[\da-z]{
			1,8}
		;
	/i,alias:"named-entity"}
	,/&#x?[\da-f]{
		1,8}
	;
	/i]}
,he.languages.markup.tag.inside["attr-value"].inside.entity=he.languages.markup.entity,he.languages.markup.doctype.inside["internal-subset"].inside=he.languages.markup,he.hooks.add("wrap",(function(e){
	"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;
		/,"&"))}
)),Object.defineProperty(he.languages.markup.tag,"addInlined",{
	value:function(e,t){
		var n={
			}
		;
		n["language-"+t]={
			pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:he.languages[t]}
		,n.cdata=/^<!\[CDATA\[|\]\]>$/i;
		var s={
			"included-cdata":{
				pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}
			}
		;
		s["language-"+t]={
			pattern:/[\s\S]+/,inside:he.languages[t]}
		;
		var a={
			}
		;
	a[e]={
			pattern:RegExp("(<__[^]*?>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,(function(){
				return e}
			)),"i"),lookbehind:!0,greedy:!0,inside:s}
		,he.languages.insertBefore("markup","cdata",a)}
	}
),he.languages.html=he.languages.markup,he.languages.mathml=he.languages.markup,he.languages.svg=he.languages.markup,he.languages.xml=he.languages.extend("markup",{
	}
),he.languages.ssml=he.languages.xml,he.languages.atom=he.languages.xml,he.languages.rss=he.languages.xml,function(e){
	var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
			e.languages.css={
		comment:/\/\*[\s\S]*?\*\//,atrule:{
			pattern:/@[\w-]+[\s\S]*?(?:;
			|(?=\s*\{
				))/,inside:{
					rule:/^@[\w-]+/,"selector-function-argument":{
						pattern:/(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,lookbehind:!0,alias:"selector"}
					,keyword:{
						pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}
					}
				}
			,url:{
				pattern:RegExp("\\burl\\((?:"+t.source+"|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)","i"),greedy:!0,inside:{
					function:/^url/i,punctuation:/^\(|\)$/,string:{
						pattern:RegExp("^"+t.source+"$"),alias:"url"}
					}
				}
			,selector:RegExp("[^{
				}
			\\s](?:[^{
				}
			;
				\"']|"+t.source+")*?(?=\\s*\\{
				)"),string:{
					pattern:t,greedy:!0}
				,property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){
					}
				;
			:,]/}
			,e.languages.css.atrule.inside.rest=e.languages.css;
			var n=e.languages.markup;
			n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{
				"style-attr":{
					pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{
						"attr-name":{
							pattern:/^\s*style/i,inside:n.tag.inside}
						,punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{
							pattern:/.+/i,inside:e.languages.css}
						}
					,alias:"language-css"}
				}
			,n.tag))}
		(he),he.languages.clike={
			comment:[{
				pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0}
			,{
				pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}
			],string:{
				pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0}
			,"class-name":{
				pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{
					punctuation:/[.\\]/}
				}
			,keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{
				}
			[\];
			(),.:]/}
		,he.languages.javascript=he.languages.extend("clike",{
			"class-name":[he.languages.clike["class-name"],{
				pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}
			],keyword:[{
				pattern:/((?:^|}
			)\s*)(?:catch|finally)\b/,lookbehind:!0}
		,{
			pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}
		],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{
			3}
		|\?\?=?|\?\.?|[~:]/}
	),he.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,he.languages.insertBefore("javascript","keyword",{
		regex:{
			pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{
				0,6}
			(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;
					:}
		)\]]|\/\/))/,lookbehind:!0,greedy:!0}
	,"function-variable":{
		pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"}
	,parameter:[{
		pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:he.languages.javascript}
	,{
		pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:he.languages.javascript}
	,{
		pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:he.languages.javascript}
	,{
		pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{
			)/,lookbehind:!0,inside:he.languages.javascript}
		],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}
	),he.languages.insertBefore("javascript","string",{
		"template-string":{
			pattern:/`(?:\\[\s\S]|\${
				(?:[^{
					}
				]|{
					(?:[^{
						}
					]|{
						[^}
					]*}
				)*}
			)+}
		|(?!\${
			)[^\\`])*`/,greedy:!0,inside:{
				"template-punctuation":{
					pattern:/^`|`$/,alias:"string"}
				,interpolation:{
					pattern:/((?:^|[^\\])(?:\\{
						2}
					)*)\${
						(?:[^{
							}
						]|{
							(?:[^{
								}
							]|{
								[^}
							]*}
						)*}
					)+}
				/,lookbehind:!0,inside:{
					"interpolation-punctuation":{
						pattern:/^\${
							|}
						$/,alias:"punctuation"}
					,rest:he.languages.javascript}
				}
			,string:/[\s\S]+/}
		}
	}
),he.languages.markup&&he.languages.markup.tag.addInlined("script","javascript"),he.languages.js=he.languages.javascript,function(){
	if("undefined"!=typeof self&&self.Prism&&self.document){
		var e="line-numbers",t=/\n(?!$)/g,n=he.plugins.lineNumbers={
			getLine:function(t,n){
				if("PRE"===t.tagName&&t.classList.contains(e)){
					var s=t.querySelector(".line-numbers-rows"),a=parseInt(t.getAttribute("data-start"),10)||1,o=a+(s.children.length-1);
					n<a&&(n=a),o<n&&(n=o);
					var i=n-a;
		return s.children[i]}
				}
			,resize:function(e){
				o([e])}
			,assumeViewportIndependence:!0}
		,s=function(e){
			return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null}
		,a=void 0;
				window.addEventListener("resize",(function(){
			n.assumeViewportIndependence&&a===window.innerWidth||(a=window.innerWidth,o(Array.prototype.slice.call(document.querySelectorAll("pre."+e))))}
		)),he.hooks.add("complete",(function(n){
			if(n.code){
				var s=n.element,a=s.parentNode;
					if(a&&/pre/i.test(a.nodeName)&&!s.querySelector(".line-numbers-rows")&&he.util.isActive(s,e)){
					s.classList.remove(e),a.classList.add(e);
					var i,r=n.code.match(t),l=r?r.length+1:1,c=new Array(l+1).join("<span></span>");
			(i=document.createElement("span")).setAttribute("aria-hidden","true"),i.className="line-numbers-rows",i.innerHTML=c,a.hasAttribute("data-start")&&(a.style.counterReset="linenumber "+(parseInt(a.getAttribute("data-start"),10)-1)),n.element.appendChild(i),o([a]),he.hooks.run("line-numbers",n)}
				}
			}
		)),he.hooks.add("line-numbers",(function(e){
			e.plugins=e.plugins||{
				}
			,e.plugins.lineNumbers=!0}
		))}
	function o(e){
		if(0!=(e=e.filter((function(e){
			var t=s(e)["white-space"];
				return"pre-wrap"===t||"pre-line"===t}
		))).length){
			var n=e.map((function(e){
				var n=e.querySelector("code"),s=e.querySelector(".line-numbers-rows");
					if(n&&s){
					var a=e.querySelector(".line-numbers-sizer"),o=n.textContent.split(t);
					a||((a=document.createElement("span")).className="line-numbers-sizer",n.appendChild(a)),a.innerHTML="0",a.style.display="block";
					var i=a.getBoundingClientRect().height;
			return a.innerHTML="",{
						element:e,lines:o,lineHeights:[],oneLinerHeight:i,sizer:a}
					}
				}
			)).filter(Boolean);
				n.forEach((function(e){
				var t=e.sizer,n=e.lines,s=e.lineHeights,a=e.oneLinerHeight;
						s[n.length-1]=void 0,n.forEach((function(e,n){
					if(e&&1<e.length){
						var o=t.appendChild(document.createElement("span"));
				o.style.display="block",o.textContent=e}
					else s[n]=a}
				))}
			)),n.forEach((function(e){
				for(var t=e.sizer,n=e.lineHeights,s=0,a=0;
				a<n.length;
				a++)void 0===n[a]&&(n[a]=t.children[s++].getBoundingClientRect().height)}
			)),n.forEach((function(e){
				var t=e.sizer,n=e.element.querySelector(".line-numbers-rows");
	t.style.display="none",t.innerHTML="",e.lineHeights.forEach((function(e,t){
					n.children[t].style.height=e+"px"}
				))}
			))}
		}
	}
(),window.onload=()=>{
	console.log("%cXSinator","color: black;
	 font-size: x-large"),Ce(),fe(H),testModal.addEventListener("hide.bs.modal",(e=>{
		location.hash=""}
	)),xe(),Fe()}
,window.onhashchange=()=>{
	xe()}
,runAllTestsBtn.onclick=async e=>{
	Se(),Fe(),be();
	let t=runAllTestsBtn.innerHTML;
	runAllTestsBtn.innerText="Running ...",window.WW=Te();
	for(let e of H)e.test_result=await ve(e),we(e);
Se(),runAllTestsBtn.innerHTML=t,exportToServer("http://localhost:8000/"),window.WW.close(),localStorage.setItem("results",JSON.stringify(Pe("Your Browser","",""))),compareResultsBtn.disabled=!1}
,compareResultsBtn.onclick=()=>{
	location="/"}
,clearResultsBtn.onclick=()=>{
	localStorage.clear(),location.reload()}
,exportResultsBtn.onclick=async()=>{
	Le()}
;
	const fe=e=>{
	let t=0;
	leakTable.innerText="";
		for(let n of e){
		let{
			test_name:e,test_description:s}
		=n,a=leakTable.insertRow();
		a.insertCell(0).innerText=`${
			t}
		`;
		let o=document.createElement("a");
	o.innerText=e,o.href="#",a.insertCell(1).appendChild(o),a.insertCell(2).innerText=`${
			s}
		`,a.onclick=()=>{
			_e(n)}
		,t++,n.test_row=a,n.test_result?we(n):n.test_result={
			res0:"no result",res1:"no result"}
		}
	}
,ve=async e=>{
	let n,s,{
		test_name:a,test_url:o,test_function:i,test_row:r,test_timeout:l,test_needsWindow:c}
	=e;
	ye(r,"secondary");
	let{
		url0:d,url1:u}
	=t(o);
	l||(l=5e3),c&&(window.WW&&!window.WW.closed||(window.WW=Te()));
	try{
		n=await Ae(l,new Error("Timed Out!"),i(d))}
	catch(e){
		console.log(`Error running ${
			a}
		 for ${
			d}
		`),console.log(e),n=e.message}
	try{
		s=await Ae(l,new Error("Timed Out!"),i(u))}
	catch(e){
		console.log(`Error running ${
			a}
		 for ${
			u}
		`),console.log(e),s=e.message}
	return{
		res0:n,res1:s}
	}
,we=e=>{
	let{
		test_row:t,test_result:n}
	=e;
		ye(t,(e=>{
		let{
			res0:t,res1:n}
		=e;
	return 0===t&&1===n?"danger":void 0===t||void 0===n||""===t||""===n?"success":"no result"===t&&"no result"===n?"default":"Timed Out!"===t&&"Timed Out!"===n?"secondary":"PaymentRequest not supported."===t&&"PaymentRequest not supported."===n||"No timing difference."===t||"No timing difference."===n?"success":"DEMUXER_ERROR_COULD_NOT_OPEN: FFmpegDemuxer: open context failed"===t&&"MEDIA_ELEMENT_ERROR: Format error"===n?"danger":"Failed to open media"===t&&"Failed to open media"===n||"Unsupported source type"===t&&"Unsupported source type"===n?"success":"string"==typeof t||"string"==typeof n?"warning":"success"}
	)(n))}
,ye=(e,t)=>{
	e.classList.remove("table-success","table-danger","table-secondary","table-warning","table-default"),e.classList.add(`table-${
		t}
	`)}
,be=()=>{
	for(let e of H)e.test_result={
		res0:"no result",res1:"no result"}
	,e.test_row&&ye(e.test_row,"default")}
,_e=async e=>{
	let{
		test_name:n,test_url:s,test_file:a,test_description:o,test_result:i}
	=e,{
		url0:r,url1:l}
	=t(s);
	testModalTitel.innerText=n,testModalDescription.innerText=o,testModalRes0.innerText=i.res0,testModalUrl0.href=r,testModalUrl0.innerText=r,testModalRes1.innerText=i.res1,testModalUrl1.href=l,testModalUrl1.innerText=l,testModalFileLink.href=a,testModalFileLink.innerText=a;
	let c=await fetch(a);
		testModalCode.textContent=await c.text(),Prism.highlightElement(testModalCode),runCustomTestUrl.placeholder="https?://",runCustomTestUrl.value=l,runCustomTestResult.innerText="",runCustomTestBtn.onclick=async()=>{
		let t=runCustomTestUrl.value,n="Invalid URL";
		Ee(t)&&(runCustomTestBtn.disabled=!0,n=await ke(t,e),runCustomTestBtn.disabled=!1),""!==runCustomTestResult.innerText&&runCustomTestResult.appendChild(document.createElement("hr"));
		let s=document.createElement("div");
	s.innerText=`leak('${
			t}
		')\n        -> ${
			n}
		`,runCustomTestResult.appendChild(s),window.WW&&window.WW.close()}
	,new ge.Modal("#testModal",{
		backdrop:!0}
	).show(),location.hash=`${
		n}
	`,runTestBtn.onclick=async()=>{
		runTestBtn.disabled=!0,e.test_result=await ve(e),runTestBtn.disabled=!1,we(e),localStorage.setItem("results",JSON.stringify(Pe("Your Browser","",""))),testModalRes0.innerText=e.test_result.res0,testModalRes1.innerText=e.test_result.res1,window.WW&&window.WW.close()}
	}
,ke=async(e,t)=>{
	let n,{
		test_name:s,test_function:a,test_timeout:o,test_needsWindow:i}
	=t,r=e;
	o||(o=5e3),i&&(window.WW&&!window.WW.closed||(window.WW=Te()));
	try{
		n=await Ae(o,new Error("Timed Out!"),a(r))}
	catch(e){
		console.log(`Error running ${
			s}
		 for ${
			r}
		`),console.log(e),n=e.message}
	return n}
,Le=()=>{
	exportModalText.innerText=JSON.stringify(Pe()),new ge.Modal("#exportModal",{
		backdrop:!0}
	).show()}
,Te=()=>window.open("/blank.html","targetWindow",`toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=yes,left=${
	screen.width-250}
,width=250,height=250`),Ae=(e,t,n)=>new Promise(((s,a)=>{
	n.then(s,a),setTimeout(a.bind(null,t),e)}
)),Ee=e=>{
	let t=document.createElement("input");
return t.type="url",t.value=e,!(!t.checkValidity()||!e.startsWith("http"))}
,Pe=(e="BrowserName",t="Desktop/iOS/Android",n="XXX.X")=>({
	metadata:{
		name:e,platform:t,version:n,appVersion:appVersionField.innerText}
	,testcases:H.map((({
		test_name:e,test_result:t}
	)=>({
		test_name:e,test_result:t}
	)))}
);
window.exportResult=Pe;
		const xe=()=>{
	if(window.location.hash){
		let e=decodeURI(window.location.hash.slice(1));
		for(let t of H)t.test_name===e&&_e(t)}
	else testModal.Modal&&testModal.Modal.hide()}
,Ce=()=>{
	if(localStorage.getItem("results"))try{
		let e=JSON.parse(localStorage.getItem("results"));
			for(let t of H){
			t.test_result={
				res0:"no result",res1:"no result"}
			;
for(let n of e.testcases)t.test_name===n.test_name&&(t.test_result=n.test_result)}
		Fe(e.metadata.appVersion)}
	catch(e){
		console.error(e)}
	}
,Se=()=>{
	runAllTestsBtn.disabled?runAllTestsBtn.disabled=!1:runAllTestsBtn.disabled=!0,exportResultsBtn.disabled?exportResultsBtn.disabled=!1:exportResultsBtn.disabled=!0}
,Fe=(e=navigator.userAgent)=>{
	appVersionField.innerText=e}
;
window.exportToServer=async e=>{
	await fetch(e+"?"+btoa(JSON.stringify(Pe()))).catch()}
;
