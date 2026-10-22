/* Launch offer. OFFER_ENABLED=false keeps it hidden everywhere until Yash approves.
   Update SPOTS_LEFT after each website order; 0 also hides it. */
var LAUNCH_OFFER={OFFER_ENABLED:false,SPOTS_LEFT:5,TOTAL:5};
(function(){var o=LAUNCH_OFFER;document.querySelectorAll("[data-launch-offer]").forEach(function(el){if(!o.OFFER_ENABLED||o.SPOTS_LEFT<=0){el.remove();return}el.hidden=false;el.innerHTML='<p style="margin:0"><b>Launch offer:</b> first '+o.TOTAL+' website orders get a free logo (worth $15). <b>'+o.SPOTS_LEFT+' of '+o.TOTAL+' spots left.</b></p><p style="margin:4px 0 0;font-size:.8rem;opacity:.75">We\u2019ll remove this once '+o.TOTAL+' orders are in.</p>'})})();
