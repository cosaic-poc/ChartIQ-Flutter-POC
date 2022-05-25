"use strict";(self.webpackChunksample_template_webpack=self.webpackChunksample_template_webpack||[]).push([[910],{807:(e,t,i)=>{i.d(t,{xA:()=>a,Xc:()=>s,dK:()=>o,yR:()=>r,bZ:()=>l,BG:()=>c,_s:()=>d,Md:()=>h});var n=i(73);let a=e=>{var t="undefined"!=typeof _CIQ?_CIQ:e.CIQ;t.CSVReader=t.CSVReader||class{constructor(e){const t=new FileReader;this.reader=t,this.file=e}async parse(e){const{reader:t}=this;return new Promise(((i,n)=>{t.readAsText(e),t.onload=e=>{const n=this.splitResults(t.result),a=n.shift(),s=!!a.match(/"/)?new RegExp(/,(?=")/):new RegExp(/,/);this.fields=a.split(s).map((e=>{let t;try{t=JSON.parse(e)}catch(i){t=e}return t})),""===n[n.length-1]&&n.pop(),this.results=n,i(n)},t.onerror=e=>{console.warn(e),n(e)}}))}determineLineBreak(e){const{length:t}=e;let i,n=Math.floor(.05*t),a=0;do{const t=e.substring(a,n);t.indexOf("\r\n")>-1?i="\r\n":t.indexOf("\n")>-1?i="\n":a+=n}while(!i);return i}splitResults(e){return e.split(this.determineLineBreak(e))}},t.DataLoader=t.DataLoader||class{constructor(e){const{stx:i}=e;i?(this.stx=i,this.cssRequired=!0,i.dataLoader=this,t.UI&&t.UI.observeProperty("uiContext",i,(({value:e})=>{e&&(setTimeout(this.subscribeToChanges,0,e),setTimeout(this.registerHotKeys,0,e))}))):console.warn("The DataLoader requires an stx parameter")}formatData(e,t){const{defaultPlotField:i}=this.stx.chart,{results:n,fields:a}=e,{name:s}=t,o=a.indexOf("DT"),r=a.indexOf("Date"),l=a.indexOf(s),c=l>-1;let d=[o>-1?o:r];c&&d.push(a.indexOf(s)),n.data=n.map((e=>{const t={};return e.split(",").forEach(((e,n)=>{if(c&&-1===d.indexOf(n))return;let s,o=a[n];try{s=JSON.parse(e)}catch(t){s=e}let r="DT"===o||"Date"===o?s:Number.parseFloat(s);t[a[n]]=r,n===l&&(delete t[a[n]],t[i]=r)})),t}))}importData(e){const t=this,{stx:i}=this,n=Object.fromEntries(e.formData.entries());let{color:a,display:s,name:o,panel:r,periodicity:l}=n;l=JSON.parse(l),this.formatData(e,n);const{results:c}=e,{data:d}=c,h={symbol:o,static:!0},u={data:d,symbolObject:h,panel:"true"===r||void 0,color:a};"secondary"===s?i.addSeries(o,u,(function(){let e=i.getSeries({symbol:o})[0];const n=i.tickFromDate(e.endPoints.end);i.chart.scroll=i.chart.dataSet.length-1-n+i.chart.maxTicks,t.registerDataWarnings(!0)})):(i.quoteDriver.pause(o),i.loadChart(h,{masterData:d,periodicity:l},(()=>{t.registerDataWarnings()})))}registerDataWarnings(e){const{stx:t}=this,i=t.addEventListener("menu",(({stx:e,menu:t})=>{t===document.querySelector("cq-menu.ciq-period")&&e.dispatch("notification",{message:"Changing Periodicity may lose loaded data",displayTime:3})}));let n,a;function s(){t.getSymbols({static:!0}).length||(t.removeEventListener(i),e&&(t.removeInjection(n),t.removeInjection(a)))}e&&(n=t.append("removeSeries",s),a=t.append("deleteHighlighed",s)),t.addEventListener("periodicity",(({stx:e,differentData:t})=>{const i=e.getSymbols({static:!0});i&&t&&i.forEach((t=>{e.removeSeries(t,e.chart),s()}))})),t.addEventListener("newChart",(()=>{s()}))}registerHotKeys(e){const i=t.getFromNS(e.config,"hotkeyConfig.hotkeys");if(!i)return;let n=i.find((({action:e})=>"dataLoader"===e));n&&(n.action=()=>{e.getAdvertised("Channel").write(null,"dataLoader",!0)})}subscribeToChanges(e){const{stx:i}=e,n=t.UI.BaseComponent.prototype;n.channelSubscribe("channel.dataLoader",(t=>{let a=t?{type:"dataLoader",params:{stx:i,context:e}}:{};n.channelWrite("channel.dialog",a,i)}),i)}}},s=e=>{var t="undefined"!=typeof _CIQ?_CIQ:e.CIQ;t.ExtendedHours=t.ExtendedHours||function(e){var i=e.stx;this.filter=e.filter,i||(i=e,this.filter=!1);var n={};this.stx=i,this.stx.extendedHours=this,this.cssRequired=!0,i.addEventListener("theme",(function(e){for(var t in n={},i.layout.marketSessions)n.session||(n.session={}),n.session[t]=i.canvasStyle("stx_market_session "+t)})),i.addEventListener("symbolChange",(function(e){"master"!=e.action||!i.layout.extended||i.chart.market.market_def&&i.chart.market.sessions.length||t.alert("There are no Extended Hours for this instrument.")})),t.UI&&t.UI.KeystrokeHub.addHotKeyHandler("extendedHours",(()=>{document.body.keystrokeHub.context.advertised.Layout.setExtendedHours()}),i),this.prepare=function(e,t){for(var a in i.layout.extended=e,i.layout.marketSessions)n.session={},i.chart.market.disableSession(a);if(i.layout.marketSessions={},e)if(t||(t=["pre","post"]),t.length)for(var s=0;s<t.length;s++)i.layout.marketSessions[t[s]]=!0;else i.layout.marketSessions=t;for(a in i.layout.marketSessions)n.session||(n.session={}),n.session[a]=i.canvasStyle("stx_market_session "+a),i.chart.market.disableSession(a,!0)},this.complete=function(e){i.changeOccurred("layout"),i.chart.market.market_def?this.filter?(i.createDataSet(),i.draw(),e&&e()):i.loadChart(i.chart.symbol,e):e&&e()},this.set=function(e,t,i){this.prepare(e,t),this.complete(i)},this.stx.append("drawYAxis",(function(e,a){if(this.layout.extended&&e.yAxis==a.yAxis&&!1!==e.shareChartXAxis&&!e.hidden){var s=e.chart;if(!t.ChartEngine.isDailyInterval(this.layout.interval)&&(n.divider=this.canvasStyle("stx_market_session divider"),n.session)){for(var o,r,l=s.market,c=[],d={},h=0;h<s.dataSegment.length;h++){var u=s.dataSegment[h];if(u&&u.DT){var m=null;if(l.market_def)if(!o||o<=u.DT)r=l.getSession(u.DT),o=l[!(""===r||this.layout.marketSessions&&this.layout.marketSessions[r])?"getNextOpen":"getNextClose"](u.DT);var p=n.session[r];if(p&&(m=p.backgroundColor),d.color&&d.color!=m&&(c.push({start:d.start,end:d.end,color:d.color}),d={}),m){var f=this.layout.candleWidth;u.candleWidth&&(f=u.candleWidth),d.end=this.pixelFromBar(h,s)+f/2,d.start||0===d.start||(d.start=d.end-f+1),d.color=m}else d={}}}(d.start||0===d.start)&&c.push({start:d.start,end:d.end,color:d.color});var y=t.isTransparent(n.divider.backgroundColor),g=n.divider.width.replace(/px/g,""),v={y0:e.bottom,y1:e.top,color:n.divider.backgroundColor,type:"line",context:s.context,confineToPanel:e,pattern:"dashed",lineWidth:g,deferStroke:!0};for(this.startClip(e.name),s.context.beginPath(),i.highlightedDraggable&&(s.context.globalAlpha*=.3),h=0;h<c.length;h++)s.context.fillStyle=c[h].color,!y&&c[h].start>s.left&&this.plotLine(t.extend({x0:c[h].start,x1:c[h].start},v)),s.context.fillRect(c[h].start,e.top,c[h].end-c[h].start,e.bottom-e.top),!y&&c[h].end<s.right&&this.plotLine(t.extend({x0:c[h].end,x1:c[h].end},v));s.context.stroke(),this.endClip()}}}))}},o=e=>{var t="undefined"!=typeof _CIQ?_CIQ:e.CIQ;t.FullScreen=t.FullScreen||function(e){if(e||(e={}),e.stx){try{if(window.location.host!==window.top.location.host)throw new Error(window.location.host+" does not match "+window.top.location.host)}catch(e){return void console.warn("Full screen mode disabled.")}this.stx=e.stx,this.stx.fullScreen=this,this.fullScreenButton=null,this.fullScreenState=!1,this.addFullScreenButton=function(){this.stx.registerChartControl&&(this.fullScreenButton=this.stx.registerChartControl("stx-full-screen","Full Screen",function(e){return function(t){e.fullScreenToggle(t),t.stopPropagation()}}(this)))},this.fullScreenToggle=function(e){document.documentElement.requestFullscreen||document.documentElement.webkitRequestFullscreen||document.documentElement.mozRequestFullscreen||document.documentElement.msRequestFullscreen?this.getFullScreenElement()?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.webkitRequestFullscreen?document.documentElement.webkitRequestFullscreen():document.documentElement.mozRequestFullscreen?document.documentElement.mozRequestFullscreen():document.documentElement.msRequestFullscreen&&document.documentElement.msRequestFullscreen():(this.fullScreenState=!this.fullScreenState,this.fullScreenRender())},this.fullScreenRender=function(){var e=null;(e=this.stx.container.closest("*[cq-context], cq-context, body"))&&(!0===this.fullScreenState?(this.fullScreenButton&&this.fullScreenButton.classList.add("active"),e.classList.add("full-screen")):(this.fullScreenButton&&this.fullScreenButton.classList.remove("active"),e.classList.remove("full-screen")),window.dispatchEvent(new Event("resize")))},this.onFullScreenChange=function(){this.getFullScreenElement()?this.fullScreenState=!0:this.fullScreenState=!1,this.fullScreenRender()},this.getFullScreenElement=function(){return document.fullscreenElement||document.webkitCurrentFullScreenElement||document.mozFullScreenElement||document.msFullscreenElement},document.addEventListener("fullscreenchange",this.onFullScreenChange.bind(this),!1),document.addEventListener("webkitfullscreenchange",this.onFullScreenChange.bind(this),!1),document.addEventListener("mozfullscreenchange",this.onFullScreenChange.bind(this),!1),document.addEventListener("MSFullscreenChange",this.onFullScreenChange.bind(this),!1),this.addFullScreenButton()}else console.warn("The Full Screen addon requires an stx parameter")}},r=e=>{var t="undefined"!=typeof _CIQ?_CIQ:e.CIQ;t.InactivityTimer=t.InactivityTimer||function(e){if(e.minutes){(!e.interval||e.interval<0)&&(e.interval=60),this.stx=e.stx,this.timeout=e.minutes,this.interval=e.interval,this.wakeCB=e.wakeCB,this.sleepCB=e.sleepCB,this.sleepTimer=null,this.sleeping=!1,this.last=(new Date).getTime(),this.wakeChart=function(){clearTimeout(this.sleepTimer),this.last=(new Date).getTime(),this.sleeping&&(this.stx.quoteDriver&&this.stx.quoteDriver.updateChartLoop(),this.sleeping=!1,document.body.classList.remove("ciq-sleeping")),this.sleepTimer=setTimeout(this.sleepChart.bind(this),6e4*this.timeout),this.wakeCB&&this.wakeCB()},this.sleepChart=function(){this.sleeping||(this.stx.quoteDriver&&this.stx.quoteDriver.updateChartLoop(this.interval),this.sleeping=!0,document.body.classList.add("ciq-sleeping")),this.sleepCB&&this.sleepCB()};var t=this;["mousemove","mousedown","touchstart","touchmove","pointerdown","pointermove","keydown","wheel"].forEach((function(e){document.body.addEventListener(e,(function(e){t.wakeChart()}),{passive:!1})})),this.wakeChart()}}},l=e=>{var t="undefined"!=typeof _CIQ?_CIQ:e.CIQ;t.RangeSlider=t.RangeSlider||function(e){this.cssRequired=!0;var i=e.stx;i.slider=this;var n=e.height?e.height:"95px",a=e.chartContainer?e.chartContainer:e.stx.container,s=document.createElement("div");s.className="ciq-chart";var o=document.createElement("div");o.className="chartContainer",s.appendChild(o),a.parentElement.parentElement.insertBefore(s,a.parentElement.nextSibling),Object.assign(s.style,{height:n,paddingTop:"5px",display:"none"}),o.style.height="100%",o.dimensionlessCanvas=!0;var r=this.slider=new t.ChartEngine({container:o,preferences:{labels:!1,whitespace:0}});r.xaxisHeight=30,r.manageTouchAndMouse=!1,r.minimumCandleWidth=0;var l=r.chart.panel,c=l.subholder,d=l.close;c.style.cursor="ew-resize",c.classList.add("stx_range_slider"),d&&(d.style.display="inline",t.safeClickTouch(d,(function(){i.layout.rangeSlider=!1,i.changeOccurred("layout")})));var h=l.yAxis;h.drawCurrentPriceLabel=!1,Object.defineProperty(h,"position",{get:function(){return i.slider.yAxisPosition||i.chart.panel.yAxis.position},set:function(e){i.slider.yAxisPosition=e}});const{get:u,set:m}=Object.getOwnPropertyDescriptor(t.ChartEngine.YAxis.prototype,"width");Object.defineProperty(h,"width",{get:function(){return Math.max(u.call(h),i.chart.yAxis.width)},set:function(e){m.call(h,e)}}),t.extend(h,e.yAxis),r.chart.baseline.userLevel=!1,r.controls.home&&(r.controls.home.style.width=0),r.initializeChart(),t.UI&&(t.UI.KeystrokeHub.addHotKeyHandler("rangeSlider",(()=>{document.body.keystrokeHub.context.advertised.Layout.setRangeSlider()}),i),t.UI.observeProperty("breakpoint",i.chart,(e=>r.notifyBreakpoint(e.value)))),this.updateStyles=function(e,t,n){i.setStyle(e,t,n),this.style=i.canvasStyle("stx_range_slider shading")},this.display=function(e){if(i.layout.rangeSlider!==e)return i.layout.rangeSlider=e,void i.changeOccurred("layout");s.style.display=e?"":"none",i.resizeChart(),window.dispatchEvent(new Event("resize")),e&&(r.resizeChart(),r.initializeChart(),this.requestDraw())},this.setSymbol=function(e){r.chart.panel.display=r.chart.symbol=e,r.chart.symbolObject={symbol:e},r.chart.market=i.chart.market,r.setMainSeriesRenderer(),r.resizeChart(),this.adjustRange(i.chart),this.requestDraw()},this.acceptLayoutChange=function(e){var n=!1;r.layout.rangeSlider!==e.rangeSlider&&i.slider.display(e.rangeSlider);["chartType","aggregationType","periodicity","interval","timeUnit","chartScale","rangeSlider","flipped","extended","marketSessions","kagi","rangebars","renko","priceLines","pandf"].forEach((function(i){t.equals(r.layout[i],e[i])||(r.layout[i]=e[i],n=!0)})),t.trulyVisible(s)&&n&&(r.setMainSeriesRenderer(),this.requestDraw())},this.adjustRange=function(e){if(e.dataSet&&e.endPoints&&e.endPoints.begin){var t=r.chart;if(t.width){var n=0,a=0;if(i.quoteDriver){var s={symbol:e.symbol,symbolObject:e.symbolObject,interval:i.layout.interval};"month"!=s.interval&&"week"!=s.interval||i.dontRoll||(s.interval="day");var o=i.quoteDriver.getQuoteFeed(s).behavior;o&&o.bufferSize&&(e.moreAvailable&&(n=o.bufferSize),i.isHistoricalMode()&&(a=o.bufferSize))}t.baseline.defaultLevel=e.baseline.actualLevel,t.scroll=Math.max(0,e.dataSet.length-i.tickFromDate(e.endPoints.begin)-n)+1,r.setMaxTicks(t.scroll-a+2)}}},this.copyData=function(e){if(e.dataSet&&e.masterData){var t=r.chart;t.masterData=r.masterData=e.masterData.slice(0),t.dataSet=e.dataSet.slice(0),t.state=e.state,this.requestDraw()}},this.calculateYAxisPosition=function(){var e=r.chart.panel;r.getYAxisCurrentPosition(e.yAxis,e)!=e.yAxis.position&&r.calculateYAxisPositions()},this.drawSlider=function(){if(t.trulyVisible(s)&&i.chart.dataSet&&i.chart.dataSet.length){var e=this.style;e||(e=this.style=i.canvasStyle("stx_range_slider shading"));var n=i.chart.panel,a=r.chart.context,o=r.chart.segmentImage||[],l=r.layout.candleWidth/2,d=r.tickLeft=Math.max(i.tickFromPixel(n.left+l),0),h=r.tickRight=Math.min(i.tickFromPixel(n.right-l),i.chart.dataSet.length-1),u=r.pixelLeft=r.pixelFromTick(d)-(o[d]?o[d].candleWidth/2:l),m=r.pixelRight=r.pixelFromTick(h)+(o[h]?o[h].candleWidth/2:l),p=c.offsetLeft,f=p+c.offsetWidth;a.save(),a.beginPath(),a.fillStyle=e.backgroundColor,a.fillRect(p,c.offsetTop,u-p,c.offsetHeight),a.fillRect(f,c.offsetTop,m-f,c.offsetHeight),a.strokeStyle=e.borderTopColor,a.lineWidth=parseInt(e.borderWidth,10),a.moveTo(u,c.offsetTop),a.lineTo(u,c.offsetTop+c.offsetHeight),a.moveTo(m,c.offsetTop),a.lineTo(m,c.offsetTop+c.offsetHeight),a.stroke(),a.beginPath(),a.lineWidth=parseInt(e.width,10),a.lineCap="round",a.moveTo(u,c.offsetTop+c.offsetHeight/4),a.lineTo(u,c.offsetTop+3*c.offsetHeight/4),a.moveTo(m,c.offsetTop+c.offsetHeight/4),a.lineTo(m,c.offsetTop+3*c.offsetHeight/4),a.stroke(),a.restore()}},this.requestDraw=function(){this.drawRequested||(this.drawRequested=setTimeout((()=>{r.draw(),this.drawSlider(),this.drawRequested=clearTimeout(this.drawRequested)}),100))},i.addEventListener("layout",(function(e){e.stx.slider.acceptLayoutChange(e.stx.layout)})),i.addEventListener("preferences",(function(e){const{language:i}=e.stx.preferences;t.I18N&&r.preferences.language!=i&&t.I18N.setLocale(r,i),r.preferences.language=i,this.slider.requestDraw()})),i.addEventListener("symbolChange",(function(e){"master"==e.action&&e.stx.slider.setSymbol(e.symbol)})),i.addEventListener("symbolImport",(function(e){"master"==e.action&&e.stx.slider.setSymbol(e.symbol),e.stx.slider.acceptLayoutChange(e.stx.layout)})),i.addEventListener("theme",(function(e){if(r.clearPixelCache(),r.styles={},r.chart.container.style.backgroundColor="",t.ThemeHelper){var i=new t.ThemeHelper({stx:e.stx});i.params.stx=r,i.update()}})),i.append("createDataSet",(function(...e){const[,,{animationEntry:t}={}]=e||[];t||(this.slider.adjustRange(this.chart),this.slider.copyData(this.chart))})),i.append("draw",(function({animationEntry:e}={}){!e&&t.trulyVisible(s)&&r.chart.dataSet&&(this.slider.calculateYAxisPosition(),this.slider.adjustRange(this.chart),this.slider.requestDraw())})),i.prepend("resizeChart",(function(){var e=a.parentElement,i=e.parentElement,n=t.elementDimensions(i).height,o=i.querySelectorAll(".chartContainer");Array.from(o).forEach((function(e){e!==a&&t.trulyVisible(e)&&(n-=t.elementDimensions(e.parentElement,{border:1,padding:1,margin:1}).height)})),e.style.height=n+"px",this.layout.rangeSlider?(s.style.display="",r.resizeChart(),r.initializeChart(),this.slider.requestDraw()):s.style.display="none"})),["mousedown","touchstart","pointerdown"].forEach((function(e){c.addEventListener(e,(function(e){var n=r.backOutX(e.pageX);if(n||0===n){n-=e.target.offsetLeft,r.startDrag=n,r.startPixelLeft=r.pixelLeft,r.startPixelRight=r.pixelRight;var a=i.slider.style;a||(a=i.slider.style=i.canvasStyle("stx_range_slider shading"));var s=parseInt(a.borderLeftWidth,10);(n+=this.offsetLeft)<r.pixelRight-s&&(r.needsLeft=!0),n>r.pixelLeft+s&&(r.needsRight=!0),t.touchDevice||r.needsLeft&&r.needsRight&&e.target.classList.add("stx-drag-chart")}}),{passive:!1})})),["mouseup","mouseover","touchend","pointerup"].forEach((function(e){c.addEventListener(e,(function(e){const{which:t,type:i}=e;1===t&&"pointerup"!==i&&"mouseup"!==i||(e.target.classList.remove("stx-drag-chart"),r.chart.panel.subholder.style.cursor="ew-resize",r.startDrag=null,r.needsLeft=!1,r.needsRight=!1)}))})),["mousemove","touchmove","pointermove"].forEach((function(e){c.addEventListener(e,(function(e){r.timeout||(r.timeout=setTimeout((()=>{const t=()=>r.timeout=clearTimeout(r.timeout),{startDrag:n,startPixelLeft:a,startPixelRight:s,needsLeft:o,needsRight:l}=r;let{tickLeft:c,tickRight:d}=r;if(!n&&0!==n)return t();const{touches:h}=e;let u=(h&&h.length?r.backOutX(h[0].pageX):r.backOutX(e.pageX))-e.target.offsetLeft;if(!u&&0!==u)return t();if(u-=n,o)a+u<r.chart.left&&(u=r.chart.left-a),l&&s+u>=r.chart.right&&(u=r.chart.right-s,r.isHome()||(u+=r.layout.candleWidth/2)),c=r.tickFromPixel(a+u),l&&(d=c+r.tickRight-r.tickLeft);else{if(!l)return t();d=Math.min(r.tickFromPixel(s+u),i.chart.dataSet.length-1)}let m=i.chart.width/(d-c+1);d>=c&&(o&&l||m>=i.minimumCandleWidth)&&(r.tickLeft=c,r.tickRight=d,i.chart.scroll=i.chart.dataSet.length-c,o&&l||i.setCandleWidth(m),i.micropixels=0,i.draw()),t()})))}),{passive:!1})})),this.adjustRange(i.chart),this.copyData(i.chart),i.draw()}},c=e=>{var t="undefined"!=typeof _CIQ?_CIQ:e.CIQ;t.Shortcuts=t.Shortcuts||function({stx:e,width:i=580,windowForEachChart:n=!0,config:a}={}){if(!e)return void console.warn("The Shortcuts addon requires an stx parameter");this.stx=e,this.width=i,this.windowForEachChart=n,this.content=this.getShortcutContent(a),this.ensureMessagingAvailable(e),this.enableUI(e),this.cssRequired=!0,e.shortcuts=this,t.UI&&t.UI.KeystrokeHub.addHotKeyHandler("shortcuts",(()=>{document.body.keystrokeHub.context.advertised.Layout.showShortcuts()}),e);const s=this.stx.container.closest("cq-context");new MutationObserver((()=>this.content=this.getShortcutContent(a))).observe(s,{attributes:!0})},t.Shortcuts.prototype.enableUI=function(e){e&&t.UI&&setTimeout((()=>{e.uiContext.getAdvertised("Layout").showShortcuts=(e,t)=>this.toggle(t)}))},t.Shortcuts.prototype.ensureMessagingAvailable=function(e){setTimeout((()=>{const t=e.uiContext.topNode;Array.from(t.querySelectorAll("cq-floating-window")).find((e=>e.closest("cq-context")===t))||t.append(document.createElement("cq-floating-window"))}))},t.Shortcuts.prototype.getShortcutContent=function(e){const t=(e.drawingTools||[]).filter((e=>e.shortcut)).map((({label:e,shortcut:t})=>`<div class="ciq-shortcut">\n\t\t\t\t\t<div>${e}</div>\n\t\t\t\t\t<div><span>Alt</span> + <span>${t.toUpperCase()}</span></div>\n\t\t\t\t</div>`)).join(""),i=e=>" + "===e?"<span>+</span>":e.split("+").map((e=>e&&" "!==e?"<span>"+e+"</span>":"")).join(" + "),n=this.stx.container.closest("cq-context");return`\n\t\t<div class="ciq-shortcut-container">\n\t\t\t<div>\n\t\t\t\t<div><b>Drawing tools shortcuts</b></div>\n\t\t\t\t<div>${t}</div>\n\t\t\t</div>\n\t\t\t<hr>\n\t\t\t<div>\n\t\t\t\t<div><b>Hotkeys</b></div>\n\t\t\t\t<div>${(e.hotkeyConfig&&e.hotkeyConfig.hotkeys||[]).map((({label:e,action:t,commands:a,extension:s})=>{return s&&(o=s,!n.hasAttribute(o.toLowerCase()+"-active"))?"":`<div class="ciq-shortcut"><div>${e||t}</div><div>${(e=>e.map((e=>e.replace(/Arrow|Key|Digit|^ | $/g,""))).map((e=>e.replace(/\+/," + "))).reduce(((e,t)=>{return!e.includes(t)&&(i=t).charCodeAt(i.length-1)<127?e.concat(t):e;var i}),[]).map(i).join("<br>"))(a)}</div></div>`;var o})).join("")}</div>\n\t\t\t</div>\n\t\t</div>\n\t`},t.Shortcuts.prototype.toggle=function(e){this.stx.dispatch("floatingWindow",{type:"shortcut",title:"Shortcuts",content:this.content,container:this.stx.uiContext.topNode,onClose:()=>this.closed=!0,width:this.width,status:e,tag:this.windowForEachChart?void 0:"shortcut"})}},d=e=>{var t="undefined"!=typeof _CIQ?_CIQ:e.CIQ;function i(){}t.TableView=t.TableView||function({stx:e,minColumnWidth:n="84px",coverUIMaxWidth:a=400,coverContainer:s,usePreviousCloseForChange:o=!0}={}){e?(this.stx=e,this.viewAdditionalColumns=!1,this.minColumnWidth=n,this.coverUIMaxWidth=a,this.coverContainer=s,this.usePreviousCloseForChange=o,this.builder=i,this.listeners=[],e.tableView=this,this.cssRequired=!0,t.UI&&t.UI.observeProperty("uiContext",e,(({value:e})=>{e&&setTimeout((()=>{this.subscribeToChanges(e);const i=t.getFromNS(e.config,"hotkeyConfig.hotkeys",[]).find((({action:e})=>"tableView"===e));i&&(i.action=()=>{const{tableView:e}=document.body.keystrokeHub.context.stx;if(e)return e.toggle(),!0})}))}))):console.warn("The TableView addon requires an stx parameter")},t.TableView.prototype.open=function(e){e&&(this.params=e);const{config:i={},onClose:n}=this.params||{};if(this.view&&this.close(!1),i.minColumnWidth=this.minColumnWidth,i.coverUIMaxWidth=this.coverUIMaxWidth,i.coverContainer=this.coverContainer,this.onClose=n,this.view=this.builder.createTable(this.stx,i),!this.view)return;const{stx:a}=this,s=this.close.bind(this),o=document.body.keystrokeHub;o&&o.addActiveModal(this),setTimeout((()=>this.removeCloseListener=function(e){const i=a.uiContext.topNode,n=e=>e.closest(".ciq-data-table-container"),o=({target:e})=>!n(e)&&s();i.addEventListener("click",o);const r=e=>{const{tableView:i}=document.body.keystrokeHub.context.stx;if(i)if("Escape"===e.code)i.close(),e.preventDefault();else{if(!t.UI||!t.UI.BaseComponent)return;const n=t.UI.BaseComponent.prototype,a=i.view.querySelectorAll("button");if("Tab"===e.code){let{shiftKey:t}=e||{};n.focusNextItem(a,t,!0);const i=n.findFocused(a);i[0]&&n.highlightItem.call({keyboardNavigation:document.body.keystrokeHub},i[0])}else if("Enter"===e.code){const t=n.findFocused(a);t[0]&&n.clickItem(t[0],e)}}};document.body.addEventListener("keydown",r);const l=t.getFn("UI.getUIManager")();l&&(e.view.show=e.view.hide=function(){},l.openMenu(e.view,{}));return()=>{i.removeEventListener("click",o),document.body.removeEventListener("keydown",r),l&&l.closeMenu(e.view)}}(this)))},t.TableView.prototype.close=function(e=!0){if(this.view&&(this.view.remove(),this.view=null),e&&this.onClose&&this.onClose(),this.removeCloseListener&&(this.removeCloseListener(),this.removeCloseListener=null),document.body.keystrokeHub){let{tabActiveModals:e}=document.body.keystrokeHub,t=e.indexOf(this);t>-1&&e.splice(t,1),document.body.keystrokeHub.highlightAlign()}},t.TableView.prototype.toggle=function(){this[this.view?"close":"open"]()},t.TableView.prototype.subscribeToChanges=function(e,i="channels.tableView"){const{channelSubscribe:n,channelWrite:a}=t.UI.BaseComponent.prototype,{channels:{tableView:s=i}={}}=e.config||{},{stx:o}=this;n(s,(e=>{e?o.tableView.open({onClose:()=>{a(s,!1,o)}}):o.tableView.close()}),o)},i.colHeaders={date:{label:"Date"},open:{label:"Open"},high:{label:"High"},low:{label:"Low"},close:{label:"Close"},pctChange:{label:"% Change",cls:"ciq-extra"},pctChangeVsAvg:{label:"% Change vs Average",cls:"ciq-extra"},volume:{label:"Volume",cls:"ciq-extra"}},i.percentDecimalPlaces=2,i.createTable=function(e,i={}){if(!e.chart||!e.chart.dataSegment)return;const{builder:n}=e.tableView,{getChartData:a,dataToHtml:s,dataToCsv:o,downloadCsv:r,getDateFormatter:l,getValueFormatter:c,getVolumeFormatter:d,getFilenameFormatter:h,getSeriesDataNames:u,getStudyDataNames:m,getChartCover:p}=n,f=Object.assign({},this.colHeaders);if(e.chart.highLowBars||(delete f.open,delete f.high,delete f.low),!e.tableView.viewAdditionalColumns)for(let e in f)f[e].cls&&delete f[e];const y=Object.values(f).map((e=>e.label)),g=u(e);g.forEach((e=>f[e]={label:e}));const v=m(e);v.forEach((e=>{y.includes(e)||(f[e]={label:e})}));const b=g.concat(v),{dateFormatter:x=l(e),valueFormatter:C=c(e),percentFormatter:w=c(e,this.percentDecimalPlaces),volumeFormatter:S=d(e),fileNameFormatter:k=h(e),minColumnWidth:T="84px"}=i,F=a(e,{dateFormatter:x,valueFormatter:C,percentFormatter:w,volumeFormatter:S,additionalDataFields:b}),L=p(e,i),{symbolDisplay:E,symbol:D}=e.chart,q=n.getCoverToolbar({symbol:E||D,viewAdditionalColumns:e.tableView.viewAdditionalColumns,copyFn:function(){const t=document.createElement("textArea");document.body.appendChild(t),t.textContent=o(F,{colHeaders:f,colSeparator:","}),t.select(),document.execCommand("copy"),t.remove(),e.dispatch("notification","copytoclipboard")},downloadFn:function(){const e=o(F,{colHeaders:f,colSeparator:","}),t=k(e);r(e,t)},toggleAdditionalColumnsFn:()=>{const{tableView:t}=e;t.viewAdditionalColumns=!t.viewAdditionalColumns,t.open()},closeFn:()=>e.tableView.close()});return L.appendChild(q),setTimeout((()=>{const i=s(F,{colHeaders:f,minColumnWidth:T});L.appendChild(i);const n=t.getFromNS(e,"uiContext.config.scrollbarStyling");n&&(n.refresh(L.querySelector("tbody")),n.refresh(L.querySelector(".ciq-data-table-wrapper"),{suppressScrollY:!0})),t.I18N&&t.I18N.localized&&t.I18N.translateUI(null,L),L.classList.remove("loading")})),L},i.dataToHtml=function(e,{colHeaders:t,minColumnWidth:i}){const n=Object.keys(t).length,a=`calc((100% - ${10+4*n}px ) / ${n})`,s=Object.entries(t).map((([,{label:e}],t)=>`<th\n\t\t\tscope="col"\n\t\t\tstyle="width: ${a};"\n\t\t\t>${e.replace("(","  (")}</th>`)),o=e.map((e=>`<tr>${Object.keys(t).map(((t,i)=>{const n=e[t];return 0===i?`<th scope="row"\n\t\t\t\t\t\t\t\tstyle="width: ${a}"\n\t\t\t\t\t\t\t\t>${n}</th>`:`<td style="width: ${a}">${n}</td>`})).join("")}</tr>`)),r=document.createElement("div");r.classList.add("ciq-data-table-wrapper");const l=i?`calc(${n} * ${i})`:"";return r.innerHTML=`\n\t\t<table class="header-fixed"\t${l?`style="min-width: ${l}"`:""}>\n\t\t<thead>${s.join("")}</thead>\n\t\t<tbody>${o.join("")}</tbody>\n\t\t</table>`,r},i.dataToCsv=function(e,{colHeaders:t,colSeparator:i="\t"}){return`${Object.entries(t).map((([,{label:e}])=>`"${e}"`)).join(i)}\n${e.map((e=>Object.keys(t).map((t=>`"${e[t]}"`)).join(i))).reverse().join("\n")}`},i.downloadCsv=function(e,t="filename"){const i=new Blob([e],{type:"text/csv;charset=utf-8;"}),n=document.createElement("a");n.href=window.URL.createObjectURL(i,{type:"text/plain"}),n.download=`${t}.csv`,n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)},i.getChartData=function(e,{dateFormatter:i,valueFormatter:n,percentFormatter:a,volumeFormatter:s,additionalDataFields:o}){const r=e.chart.dataSegment.filter((e=>null!==e)),{usePreviousCloseForChange:l}=e.tableView;let c=[],d=0;const h=r.reduce(((e,{Close:t,iqPrevClose:i,Open:n})=>{const a=l?i:n;return void 0===t||Number.isNaN(t)||void 0===a||Number.isNaN(a)?e:(d++,e+(t-a)/a)}),0)/d;return r.forEach(((r,d)=>{const{DT:u,displayDate:m,High:p,Low:f,Open:y,Close:g,iqPrevClose:v,Volume:b}=r,x=l?v:y,C=(g-x)/x,w=m||(e.displayZone?t.convertTimeZone(u,e.dataZone,e.displayZone):u),S={DT:u,date:i(w),open:n(y),close:n(g),change:n(g-x),pctChange:a(100*C),pctChangeVsAvg:a(100*(C-h)),high:n(p),low:n(f),volume:s(b)};o.forEach((e=>{let t=r[e];null!=t?("object"==typeof t&&(t=t.Close),S[e]=n(t)):S[e]=""})),c.push(S)})),c.sort(((e,t)=>t.DT-e.DT)),c},i.getDateFormatter=function(e){return(i,n)=>i?t.displayableDate(e,e.chart,i,!0):""},i.getValueFormatter=function(e,t){const{chart:{panel:i,yAxis:n},layout:{chartScale:a}}=e;let s;return s=n.originalPriceFormatter&&n.originalPriceFormatter.func?a=>n.originalPriceFormatter.func(e,i,a,t):n.priceFormatter&&"percent"!=a&&"relative"!=a?a=>n.priceFormatter(e,i,a,t):n=>e.formatYAxisPrice(n,i,t),e=>s(e).replace(/^-*0\.0*$/,"0")},i.getVolumeFormatter=function(e){return t=>{if(null==t)return"";if(e.internationalizer)return e.internationalizer.priceFormatters[0].format(t);const i=t.toString().split(".");return i[0]=i[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),i[0]}},i.getFilenameFormatter=function(e){return t=>{const i=e.chart.symbolDisplay||e.chart.symbol;let n,a;if(t){const e=t.split("\n");e.length>1&&([,n=""]=e[e.length-1].match(/^"([^"]*)"/)||[],[,a=""]=e[1].match(/^"([^"]*)"/)||[],n=n.replace(/:/g,".").replace(/\//g,"-"),a=a.replace(/:/g,".").replace(/\//g,"-"))}return`${i}${n?` (${n} _ ${a})`:""}`}},i.getChartCover=function(e,{coverUIMaxWidth:t,coverContainer:i}){const n=i&&document.querySelector(i)||(e.uiContext&&e.container.offsetWidth<t?e.uiContext.topNode:e.container.parentElement.parentElement),a=document.createElement("div");Object.assign(a.style,{top:0,left:0,right:0,bottom:0}),a.classList.add("ciq-data-table-container","loading");const s=document.createElement("div");return s.classList.add("ciq-spinner-wrapper"),s.innerHTML='<span class="ciq-spinner"></span>',a.appendChild(s),n.appendChild(a),a},i.getCoverToolbar=function({symbol:e,viewAdditionalColumns:t,copyFn:i,downloadFn:n,toggleAdditionalColumnsFn:a,closeFn:s}){const o=document.createElement("div");o.classList.add("ciq-data-table-toolbar"),o.innerHTML=`\n\t\t<div class="ciq-data-table-title"></div>\n\t\t<button class="ciq-data-table-copy">${this.copyLabel}</button>\n\t\t<button class="ciq-data-table-download">${this.downloadLabel}</button>\n\t\t<button class="ciq-data-table-additionalColumns">${this.getAdditionalColumnLabel(t)}</button>\n\t\t<cq-close />\n\t`;o.querySelector(".ciq-data-table-title").textContent=e;const r=o.querySelector(".ciq-data-table-copy");i?r.addEventListener("click",i):r.style.display="none";const l=o.querySelector(".ciq-data-table-download");n?l.addEventListener("click",(function(){l.blur(),n()})):l.style.display="none";const c=o.querySelector(".ciq-data-table-additionalColumns");return a?c.addEventListener("click",a):c.style.display="none",o.close=s,o},i.copyLabel="Copy",i.downloadLabel="Download",i.getAdditionalColumnLabel=function(e){return`<span>${e?"- ":"+ "}</span>Additional columns`},i.getStudyDataNames=function(e){return Object.values(e.layout.studies||{}).map((function(e){return Object.keys(e.outputMap).filter(t)})).reduce(((e,t)=>e.concat(t)),[]);function t(t){return e.chart.dataSegment.some((e=>e&&e[t]))}},i.getSeriesDataNames=function(e){return Object.values(e.chart.seriesRenderers||{}).filter((e=>"_main_series"!==e.params.name)).map((e=>e.seriesParams.map((({symbol:e})=>e)))).reduce(((e,t)=>e.concat(t)),[])}},h=e=>{var t="undefined"!=typeof _CIQ?_CIQ:e.CIQ;t.Marker?t.Tooltip=t.Tooltip||function(e){if(!t.Marker)return void console.warn("CIQ.Tooltip addon requires CIQ.Marker module to be enabled.");this.cssRequired=!0;const{stx:i,ohl:n,change:a,volume:s,series:o,studies:r,interpolation:l,showOverBarOnly:c,showBarHighlight:d=!0,useDataZone:h}=e,{container:u}=i.chart;let m=u.querySelector("stx-hu-tooltip");m||(m=document.createElement("stx-hu-tooltip"),u.appendChild(m));let p=u.querySelector(".stx-hu-tooltip-highlight");function f(){const{headsUp:e,crosshair:t}=i.layout,n=e&&e.floating||"floating"===e,a=t&&i.displayCrosshairs&&["static",null,void 0].includes(e);return!(!i.huTooltip||n||a)&&(y(),!0)}function y(){const{huTooltip:e}=i,{node:t}=e;t&&(t.style.left="-50000px",t.style.right="auto",e.lastBar={},e.highlightEl&&(e.highlightEl.style.display="none"))}function g(){var e=this;if(!f()){var i=e.barFromPixel(e.cx),c=e.chart.dataSegment[i];if(c){if(!t.Marker.Tooltip.sameBar(c,e.huTooltip.lastBar)||i==e.chart.dataSegment.length-1){var d=e.huTooltip.node;Array.from(d.parentElement.querySelectorAll("[auto]")).forEach((function(e){e.remove()})),Array.from(d.parentElement.querySelectorAll("stx-hu-tooltip-field-value")).forEach((function(e){e.innerHTML=""}));var u=e.chart.panel,m=u.yAxis,p={},g=[];if(g.push({member:"DT",display:"DT",panel:u,yAxis:m}),g.push({member:"Close",display:"Close",panel:u,yAxis:m}),p.DT=p.Close=1,a&&t.ChartEngine.isDailyInterval(e.layout.interval)&&g.push({member:"Change",display:"Change",panel:u,yAxis:m}),n&&(g.push({member:"Open",display:"Open",panel:u,yAxis:m}),g.push({member:"High",display:"High",panel:u,yAxis:m}),g.push({member:"Low",display:"Low",panel:u,yAxis:m}),p.Open=p.High=p.Low=1),s&&(g.push({member:"Volume",display:"Volume",panel:null,yAxis:null}),p.Volume=1),o){var v=e.chart.seriesRenderers;for(var b in v){var x=v[b];if(x!==e.mainSeriesRenderer){u=e.panels[x.params.panel],!(m=x.params.yAxis)&&x.params.shareYAxis&&(m=u.yAxis);for(var C=0;C<x.seriesParams.length;C++){var w=x.seriesParams[C],S=w.symbol,k=w.field;S?k&&S!=k&&(S=t.createObjectChainNames(S,k)[0]):S=k;var T=w.display||w.symbol||w.field;S&&!p[T]&&(g.push({member:S,display:T,panel:u,yAxis:m,isSeries:!0}),p[T]=1)}}}}if(r)for(var F in e.layout.studies){var L=e.layout.studies[F];for(var E in m=(u=e.panels[L.panel])&&L.getYAxis(e),e.layout.studies[F].outputMap)E&&!p[E]&&(g.push({member:E,display:E,panel:u,yAxis:m}),p[E]=1);p[F+"_hist"]||(g.push({member:F+"_hist",display:F+"_hist",panel:u,yAxis:m}),g.push({member:F+"_hist1",display:F+"_hist1",panel:u,yAxis:m}),g.push({member:F+"_hist2",display:F+"_hist2",panel:u,yAxis:m}),p[F+"_hist"]=1)}for(var D=0;D<g.length;D++){var q=g[D],A=q.member,I=q.display,H="DT"==A;!H||h||t.ChartEngine.isDailyInterval(e.layout.interval)||(A="displayDate"),u=q.panel;var P=null;(m=q.yAxis)&&(u&&u===u.chart.panel?(P=Math.max(m.printDecimalPlaces,u.chart.decimalPlaces),(m.maxDecimalPlaces||0===m.maxDecimalPlaces)&&(P=Math.min(P,m.maxDecimalPlaces))):m.decimalPlaces||0===m.decimalPlaces?P=m.decimalPlaces:(m.maxDecimalPlaces||0===m.maxDecimalPlaces)&&(P=m.maxDecimalPlaces));var R=null,M=t.existsInObjectChain(c,A);M?R=M.obj[M.member]:"Change"==A&&(R=c.Close-c.iqPrevClose);var O=I.replace(/^(Result )(.*)/,"$2");if(l&&g[D].isSeries&&null==R){var _=e.valueFromInterpolation(i,O,"Close",u,m);if(null===_)break;R=_}if(!R&&0!==R||!H&&"object"==typeof R&&!R.Close&&0!==R.Close){var B=d.querySelector('stx-hu-tooltip-field[field="'+O+'"]');if(B)""!==B.querySelector("stx-hu-tooltip-field-name").innerHTML&&(B.querySelector("stx-hu-tooltip-field-value").innerHTML="n/a")}else{var j="";if((R.Close||0===R.Close)&&(R=R.Close),R.constructor==Number)if(m)j=m.originalPriceFormatter&&m.originalPriceFormatter.func?m.originalPriceFormatter.func(e,u,R,P):m.priceFormatter&&m.priceFormatter!=t.Comparison.priceFormat?m.priceFormatter(e,u,R,P):e.formatYAxisPrice(R,u,P,m);else{j=R;var N=e.internationalizer;if(N){var V=N.priceFormatters.length,W=t.countDecimals(j);W>=V&&(W=V-1),j=N.priceFormatters[W].format(j)}}else R.constructor==Date?H&&e.controls.floatDate&&e.controls.floatDate.innerHTML?j=e.chart.xAxis.noDraw?"N/A":t.displayableDate(e,u.chart,R):(j=t.yyyymmdd(R),t.ChartEngine.isDailyInterval(e.layout.interval)||(j+=" "+R.toTimeString().substr(0,8))):j=R;var U=d.querySelector('stx-hu-tooltip-field[field="'+O+'"]');if(U){U.querySelector("stx-hu-tooltip-field-value").innerHTML=j;var $=U.querySelector("stx-hu-tooltip-field-name");""===$.innerHTML&&($.innerHTML=O,t.I18N&&t.I18N.localized&&t.I18N.translateUI(null,$))}else{var z=document.createElement("stx-hu-tooltip-field");z.setAttribute("auto",!0);var Q=document.createElement("stx-hu-tooltip-field-name");Q.innerHTML=e.translateIf(O),z.appendChild(Q);var Y=document.createElement("stx-hu-tooltip-field-value");Y.innerHTML=j,z.appendChild(Y),d.appendChild(z)}}}e.huTooltip.render()}}else y()}}function v(e){if("-50000px"!==e.node.style.left){var n=i.controls.mSticky;if(n&&"none"!==n.style.display){var a=t.stripPX(e.node.style.top)-t.elementDimensions(n,{padding:!0,border:!0,margin:!0}).height;a<0&&(e.node.style.top=t.stripPX(e.node.style.top)-a+"px",a=0);var s=n.style;t.efficientDOMUpdate(s,"top",a+"px"),t.efficientDOMUpdate(s,"left",e.node.style.left),t.efficientDOMUpdate(s,"right",e.node.style.right)}}}p||(p=document.createElement("div"),p.classList.add("stx-hu-tooltip-highlight"),u.appendChild(p)),t.Marker.Tooltip=function(e){this.className||(this.className="CIQ.Marker.Tooltip"),this.highlightEl=p,e.label="tooltip",t.Marker.call(this,e)},t.inheritsFrom(t.Marker.Tooltip,t.Marker,!1),t.Marker.Tooltip.sameBar=function(e,t){return!(!e||!t)&&(+e.DT==+t.DT&&(e.Close==t.Close&&(e.Open==t.Open&&e.Volume==t.Volume)))},t.Marker.Tooltip.placementFunction=function(e){if(!f()){for(var i=e.stx,n=0;n<e.arr.length;n++){var a,s,o,r=e.arr[n],l=i.barFromPixel(i.cx),h=i.chart.dataSegment[l],m=!0;if("undefined"!=h&&h&&h.DT&&(a=!0,h.High&&(s=i.pixelFromPrice(h.High)),h.Low&&(o=i.pixelFromPrice(h.Low)),i.chart.highLowBars||h.Close&&(s=i.pixelFromPrice(h.Close)-15,o=i.pixelFromPrice(h.Close)+15),!c||i.cy>=s&&i.cy<=o||(m=!1)),!i.insideChart||i.openDialog||i.activeDrawing||i.grabbingScreen||!a||!m)return p.style.display="none",r.node.style.left="-50000px",r.node.style.right="auto",void(r.lastBar={});if(t.Marker.Tooltip.sameBar(i.chart.dataSegment[l],r.lastBar)&&l!=i.chart.dataSegment.length-1)return void v(r);r.lastBar=i.chart.dataSegment[l];var y=r.lastBar.candleWidth||i.layout.candleWidth;parseInt(getComputedStyle(r.node).width,10)+i.chart.panel.left+30+y<i.backOutX(t.ChartEngine.crosshairX)?(r.node.style.left="auto",r.node.style.right=Math.round(u.clientWidth-i.pixelFromBar(l)+30)+"px"):(r.node.style.left=Math.round(i.pixelFromBar(l)+30)+"px",r.node.style.right="auto");var g=parseInt(getComputedStyle(r.node).height,10),b=Math.round(i.backOutY(t.ChartEngine.crosshairY)-g/2);if(b+g>i.height&&(b=i.height-g),b<0&&(b=0),r.node.style.top=b+"px",v(r),d&&!i.layout.crosshair){const e=r.lastBar.candleWidth||i.layout.candleWidth,t=i.pixelFromBar(l)-e/2;let n=e;t+n>i.chart.width&&(n=i.chart.width-t),p.style.display="block",p.style.left=t+"px",p.style.width=n+"px"}else p.style.display="none"}if(t.touchDevice&&i.layout.crosshair){var x=i.overXAxis,C=i.overYAxis;i.overXAxis=i.overYAxis=!1,i.doDisplayCrosshairs(),i.overXAxis=x,i.overYAxis=C}}},u.addEventListener("mouseout",y),i.append("mousemoveinner",(function(){v(this.huTooltip)})),i.append("deleteHighlighted",(function(){this.huTooltip.lastBar={},this.headsUpHR()})),i.append("headsUpHR",g),i.append("createDataSegment",g),i.huTooltip=new t.Marker.Tooltip({stx:i,xPositioner:"bar",chartContainer:!0,node:m})}:console.error("tooltip addon requires first activating markers feature.")};n.Pz}}]);