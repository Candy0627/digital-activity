(function(doc,win,designWidth,minWidth,maxWidth){var docEl=doc.documentElement,isIOS=navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),dpr=isIOS?Math.min(win.devicePixelRatio,3):1,dpr=window.top===window.self?dpr:1,resizeEvt='orientationchange'in window?'orientationchange':'resize';docEl.dataset.dpr=dpr;var recalc=function(){var width=docEl.clientWidth;if(width>maxWidth){width=maxWidth}if(width<minWidth){width=minWidth}docEl.dataset.width=width;docEl.dataset.percent=100*(width/designWidth);docEl.style.fontSize=100*(width/designWidth)+'px'};recalc();if(!doc.addEventListener)return;win.addEventListener(resizeEvt,recalc,false)})(document,window,1920,1220,1920);document.documentElement.style.height=window.innerHeight+'px';