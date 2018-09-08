// Compiled by ClojureScript 1.10.339 {}
goog.provide('datascript_playground.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('datascript.db');
goog.require('datascript.core');
goog.require('cljs.pprint');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
if((typeof datascript_playground !== 'undefined') && (typeof datascript_playground.core !== 'undefined') && (typeof datascript_playground.core.dsdb !== 'undefined')){
} else {
datascript_playground.core.dsdb = datascript.core.create_conn.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null)], null));
}
datascript.core.transact_async.call(null,datascript_playground.core.dsdb,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mark",new cljs.core.Keyword(null,"age","age",-604307804),(44)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mike",new cljs.core.Keyword(null,"age","age",-604307804),(21)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mack",new cljs.core.Keyword(null,"age","age",-604307804),(54)], null)], null));
datascript_playground.core.entities = (function datascript_playground$core$entities(v){
return datascript.core.q.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?v","?v",-464183118,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Symbol(null,"?v","?v",-464183118,null)], null)], null),cljs.core.deref.call(null,datascript_playground.core.dsdb),v);
});
datascript_playground.core.render_datoms = (function datascript_playground$core$render_datoms(db){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-dark","table.table.table-dark",-142872411),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"E"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"A"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"V"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"T"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function datascript_playground$core$render_datoms_$_iter__29356(s__29357){
return (new cljs.core.LazySeq(null,(function (){
var s__29357__$1 = s__29357;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__29357__$1);
if(temp__5457__auto__){
var s__29357__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29357__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__29357__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__29359 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__29358 = (0);
while(true){
if((i__29358 < size__4323__auto__)){
var vec__29360 = cljs.core._nth.call(null,c__4322__auto__,i__29358);
var e = cljs.core.nth.call(null,vec__29360,(0),null);
var a = cljs.core.nth.call(null,vec__29360,(1),null);
var v = cljs.core.nth.call(null,vec__29360,(2),null);
var t = cljs.core.nth.call(null,vec__29360,(3),null);
var datom = vec__29360;
cljs.core.chunk_append.call(null,b__29359,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4324__auto__ = ((function (i__29358,vec__29360,e,a,v,t,datom,c__4322__auto__,size__4323__auto__,b__29359,s__29357__$2,temp__5457__auto__){
return (function datascript_playground$core$render_datoms_$_iter__29356_$_iter__29363(s__29364){
return (new cljs.core.LazySeq(null,((function (i__29358,vec__29360,e,a,v,t,datom,c__4322__auto__,size__4323__auto__,b__29359,s__29357__$2,temp__5457__auto__){
return (function (){
var s__29364__$1 = s__29364;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__29364__$1);
if(temp__5457__auto____$1){
var s__29364__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29364__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__29364__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__29366 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__29365 = (0);
while(true){
if((i__29365 < size__4323__auto____$1)){
var c = cljs.core._nth.call(null,c__4322__auto____$1,i__29365);
cljs.core.chunk_append.call(null,b__29366,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),c], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,e,a,v,t], null)], null)));

var G__29374 = (i__29365 + (1));
i__29365 = G__29374;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29366),datascript_playground$core$render_datoms_$_iter__29356_$_iter__29363.call(null,cljs.core.chunk_rest.call(null,s__29364__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29366),null);
}
} else {
var c = cljs.core.first.call(null,s__29364__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),c], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,e,a,v,t], null)], null)),datascript_playground$core$render_datoms_$_iter__29356_$_iter__29363.call(null,cljs.core.rest.call(null,s__29364__$2)));
}
} else {
return null;
}
break;
}
});})(i__29358,vec__29360,e,a,v,t,datom,c__4322__auto__,size__4323__auto__,b__29359,s__29357__$2,temp__5457__auto__))
,null,null));
});})(i__29358,vec__29360,e,a,v,t,datom,c__4322__auto__,size__4323__auto__,b__29359,s__29357__$2,temp__5457__auto__))
;
return iter__4324__auto__.call(null,datom);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v,t], null)], null)));

var G__29375 = (i__29358 + (1));
i__29358 = G__29375;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29359),datascript_playground$core$render_datoms_$_iter__29356.call(null,cljs.core.chunk_rest.call(null,s__29357__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29359),null);
}
} else {
var vec__29367 = cljs.core.first.call(null,s__29357__$2);
var e = cljs.core.nth.call(null,vec__29367,(0),null);
var a = cljs.core.nth.call(null,vec__29367,(1),null);
var v = cljs.core.nth.call(null,vec__29367,(2),null);
var t = cljs.core.nth.call(null,vec__29367,(3),null);
var datom = vec__29367;
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4324__auto__ = ((function (vec__29367,e,a,v,t,datom,s__29357__$2,temp__5457__auto__){
return (function datascript_playground$core$render_datoms_$_iter__29356_$_iter__29370(s__29371){
return (new cljs.core.LazySeq(null,((function (vec__29367,e,a,v,t,datom,s__29357__$2,temp__5457__auto__){
return (function (){
var s__29371__$1 = s__29371;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__29371__$1);
if(temp__5457__auto____$1){
var s__29371__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29371__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__29371__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__29373 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__29372 = (0);
while(true){
if((i__29372 < size__4323__auto__)){
var c = cljs.core._nth.call(null,c__4322__auto__,i__29372);
cljs.core.chunk_append.call(null,b__29373,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),c], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,e,a,v,t], null)], null)));

var G__29376 = (i__29372 + (1));
i__29372 = G__29376;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29373),datascript_playground$core$render_datoms_$_iter__29356_$_iter__29370.call(null,cljs.core.chunk_rest.call(null,s__29371__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29373),null);
}
} else {
var c = cljs.core.first.call(null,s__29371__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),c], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,e,a,v,t], null)], null)),datascript_playground$core$render_datoms_$_iter__29356_$_iter__29370.call(null,cljs.core.rest.call(null,s__29371__$2)));
}
} else {
return null;
}
break;
}
});})(vec__29367,e,a,v,t,datom,s__29357__$2,temp__5457__auto__))
,null,null));
});})(vec__29367,e,a,v,t,datom,s__29357__$2,temp__5457__auto__))
;
return iter__4324__auto__.call(null,datom);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v,t], null)], null)),datascript_playground$core$render_datoms_$_iter__29356.call(null,cljs.core.rest.call(null,s__29357__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,db);
})())], null)], null));
});
datascript_playground.core.render = (function datascript_playground$core$render(state){
var w = (400);
var h = (200);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Datascript Hypergraph"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (w,h){
return (function datascript_playground$core$render_$_iter__29377(s__29378){
return (new cljs.core.LazySeq(null,((function (w,h){
return (function (){
var s__29378__$1 = s__29378;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__29378__$1);
if(temp__5457__auto__){
var s__29378__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29378__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__29378__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__29380 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__29379 = (0);
while(true){
if((i__29379 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__29379);
cljs.core.chunk_append.call(null,b__29380,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x0","x0",410843387),(0),new cljs.core.Keyword(null,"y0","y0",111454807),(0),new cljs.core.Keyword(null,"x1","x1",-1863922247),(100),new cljs.core.Keyword(null,"y1","y1",589123466),(0),new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * 0.5)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * 0.5)),") rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),")"].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),2.3], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__29381 = (i__29379 + (1));
i__29379 = G__29381;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29380),datascript_playground$core$render_$_iter__29377.call(null,cljs.core.chunk_rest.call(null,s__29378__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29380),null);
}
} else {
var i = cljs.core.first.call(null,s__29378__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x0","x0",410843387),(0),new cljs.core.Keyword(null,"y0","y0",111454807),(0),new cljs.core.Keyword(null,"x1","x1",-1863922247),(100),new cljs.core.Keyword(null,"y1","y1",589123466),(0),new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * 0.5)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * 0.5)),") rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),")"].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),2.3], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),datascript_playground$core$render_$_iter__29377.call(null,cljs.core.rest.call(null,s__29378__$2)));
}
} else {
return null;
}
break;
}
});})(w,h))
,null,null));
});})(w,h))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(0),(360),(30)));
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"r","r",-471384190),(20),new cljs.core.Keyword(null,"cx","cx",1272694324),(w * 0.5),new cljs.core.Keyword(null,"cy","cy",755331060),(h * 0.5),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (w,h){
return (function (event){
return cljs.core.prn.call(null,"feafes");
});})(w,h))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"foreignObject","foreignObject",25502111),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((0.5 * w) - (75)),new cljs.core.Keyword(null,"y","y",-1757859776),((0.5 * h) - (13))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (w,h){
return (function (event){
return cljs.core.prn.call(null,event.text);
});})(w,h))
,new cljs.core.Keyword(null,"onblur","onblur",689939618),((function (w,h){
return (function (event){
return cljs.core.prn.call(null,"event");
});})(w,h))
,new cljs.core.Keyword(null,"oninput","oninput",-709673265),((function (w,h){
return (function (event){
return cljs.core.prn.call(null,"event");
});})(w,h))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript_playground.core.render_datoms,cljs.core.deref.call(null,datascript_playground.core.dsdb)], null)], null);
});
var state_29382 = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript_playground.core.render,state_29382], null),document.getElementById("app"));
datascript_playground.core.on_js_reload = (function datascript_playground$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1533792524837
