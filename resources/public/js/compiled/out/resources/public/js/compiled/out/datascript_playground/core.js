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
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-dark","table.table.table-dark",-142872411),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"E"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"A"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"V"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"T"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function datascript_playground$core$render_datoms_$_iter__28737(s__28738){
return (new cljs.core.LazySeq(null,(function (){
var s__28738__$1 = s__28738;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28738__$1);
if(temp__5457__auto__){
var s__28738__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28738__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__28738__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__28740 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__28739 = (0);
while(true){
if((i__28739 < size__4323__auto__)){
var vec__28741 = cljs.core._nth.call(null,c__4322__auto__,i__28739);
var e = cljs.core.nth.call(null,vec__28741,(0),null);
var a = cljs.core.nth.call(null,vec__28741,(1),null);
var v = cljs.core.nth.call(null,vec__28741,(2),null);
var t = cljs.core.nth.call(null,vec__28741,(3),null);
var datom = vec__28741;
cljs.core.chunk_append.call(null,b__28740,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4324__auto__ = ((function (i__28739,vec__28741,e,a,v,t,datom,c__4322__auto__,size__4323__auto__,b__28740,s__28738__$2,temp__5457__auto__){
return (function datascript_playground$core$render_datoms_$_iter__28737_$_iter__28744(s__28745){
return (new cljs.core.LazySeq(null,((function (i__28739,vec__28741,e,a,v,t,datom,c__4322__auto__,size__4323__auto__,b__28740,s__28738__$2,temp__5457__auto__){
return (function (){
var s__28745__$1 = s__28745;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__28745__$1);
if(temp__5457__auto____$1){
var s__28745__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28745__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__28745__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__28747 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__28746 = (0);
while(true){
if((i__28746 < size__4323__auto____$1)){
var c = cljs.core._nth.call(null,c__4322__auto____$1,i__28746);
cljs.core.chunk_append.call(null,b__28747,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),c], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,e,a,v,t], null)], null)));

var G__28755 = (i__28746 + (1));
i__28746 = G__28755;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28747),datascript_playground$core$render_datoms_$_iter__28737_$_iter__28744.call(null,cljs.core.chunk_rest.call(null,s__28745__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28747),null);
}
} else {
var c = cljs.core.first.call(null,s__28745__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),c], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,e,a,v,t], null)], null)),datascript_playground$core$render_datoms_$_iter__28737_$_iter__28744.call(null,cljs.core.rest.call(null,s__28745__$2)));
}
} else {
return null;
}
break;
}
});})(i__28739,vec__28741,e,a,v,t,datom,c__4322__auto__,size__4323__auto__,b__28740,s__28738__$2,temp__5457__auto__))
,null,null));
});})(i__28739,vec__28741,e,a,v,t,datom,c__4322__auto__,size__4323__auto__,b__28740,s__28738__$2,temp__5457__auto__))
;
return iter__4324__auto__.call(null,datom);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v,t], null)], null)));

var G__28756 = (i__28739 + (1));
i__28739 = G__28756;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28740),datascript_playground$core$render_datoms_$_iter__28737.call(null,cljs.core.chunk_rest.call(null,s__28738__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28740),null);
}
} else {
var vec__28748 = cljs.core.first.call(null,s__28738__$2);
var e = cljs.core.nth.call(null,vec__28748,(0),null);
var a = cljs.core.nth.call(null,vec__28748,(1),null);
var v = cljs.core.nth.call(null,vec__28748,(2),null);
var t = cljs.core.nth.call(null,vec__28748,(3),null);
var datom = vec__28748;
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4324__auto__ = ((function (vec__28748,e,a,v,t,datom,s__28738__$2,temp__5457__auto__){
return (function datascript_playground$core$render_datoms_$_iter__28737_$_iter__28751(s__28752){
return (new cljs.core.LazySeq(null,((function (vec__28748,e,a,v,t,datom,s__28738__$2,temp__5457__auto__){
return (function (){
var s__28752__$1 = s__28752;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__28752__$1);
if(temp__5457__auto____$1){
var s__28752__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28752__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__28752__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__28754 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__28753 = (0);
while(true){
if((i__28753 < size__4323__auto__)){
var c = cljs.core._nth.call(null,c__4322__auto__,i__28753);
cljs.core.chunk_append.call(null,b__28754,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),c], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,e,a,v,t], null)], null)));

var G__28757 = (i__28753 + (1));
i__28753 = G__28757;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28754),datascript_playground$core$render_datoms_$_iter__28737_$_iter__28751.call(null,cljs.core.chunk_rest.call(null,s__28752__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28754),null);
}
} else {
var c = cljs.core.first.call(null,s__28752__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),c], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,e,a,v,t], null)], null)),datascript_playground$core$render_datoms_$_iter__28737_$_iter__28751.call(null,cljs.core.rest.call(null,s__28752__$2)));
}
} else {
return null;
}
break;
}
});})(vec__28748,e,a,v,t,datom,s__28738__$2,temp__5457__auto__))
,null,null));
});})(vec__28748,e,a,v,t,datom,s__28738__$2,temp__5457__auto__))
;
return iter__4324__auto__.call(null,datom);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v,t], null)], null)),datascript_playground$core$render_datoms_$_iter__28737.call(null,cljs.core.rest.call(null,s__28738__$2)));
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
return (function datascript_playground$core$render_$_iter__28758(s__28759){
return (new cljs.core.LazySeq(null,((function (w,h){
return (function (){
var s__28759__$1 = s__28759;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28759__$1);
if(temp__5457__auto__){
var s__28759__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28759__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__28759__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__28761 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__28760 = (0);
while(true){
if((i__28760 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__28760);
cljs.core.chunk_append.call(null,b__28761,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x0","x0",410843387),(0),new cljs.core.Keyword(null,"y0","y0",111454807),(0),new cljs.core.Keyword(null,"x1","x1",-1863922247),(100),new cljs.core.Keyword(null,"y1","y1",589123466),(0),new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * 0.5)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * 0.5)),") rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),")"].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),2.3], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__28762 = (i__28760 + (1));
i__28760 = G__28762;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28761),datascript_playground$core$render_$_iter__28758.call(null,cljs.core.chunk_rest.call(null,s__28759__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28761),null);
}
} else {
var i = cljs.core.first.call(null,s__28759__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x0","x0",410843387),(0),new cljs.core.Keyword(null,"y0","y0",111454807),(0),new cljs.core.Keyword(null,"x1","x1",-1863922247),(100),new cljs.core.Keyword(null,"y1","y1",589123466),(0),new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * 0.5)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * 0.5)),") rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),")"].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),2.3], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),datascript_playground$core$render_$_iter__28758.call(null,cljs.core.rest.call(null,s__28759__$2)));
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
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"foreignObject","foreignObject",25502111),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((0.5 * w) - (75)),new cljs.core.Keyword(null,"y","y",-1757859776),((0.5 * h) - (13))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript_playground.core.render_datoms,cljs.core.deref.call(null,datascript_playground.core.dsdb)], null)], null);
});
var state_28763 = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript_playground.core.render,state_28763], null),document.getElementById("app"));
datascript_playground.core.on_js_reload = (function datascript_playground$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1533791666239
