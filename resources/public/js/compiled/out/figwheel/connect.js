// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__33847__delegate = function (x__33831__auto__){
if(cljs.core.truth_(datascript_playground.core.on_js_reload)){
return cljs.core.apply.call(null,datascript_playground.core.on_js_reload,x__33831__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("datascript-playground.core/on-js-reload"),"' is missing"].join(''));
}
};
var G__33847 = function (var_args){
var x__33831__auto__ = null;
if (arguments.length > 0) {
var G__33848__i = 0, G__33848__a = new Array(arguments.length -  0);
while (G__33848__i < G__33848__a.length) {G__33848__a[G__33848__i] = arguments[G__33848__i + 0]; ++G__33848__i;}
  x__33831__auto__ = new cljs.core.IndexedSeq(G__33848__a,0,null);
} 
return G__33847__delegate.call(this,x__33831__auto__);};
G__33847.cljs$lang$maxFixedArity = 0;
G__33847.cljs$lang$applyTo = (function (arglist__33849){
var x__33831__auto__ = cljs.core.seq(arglist__33849);
return G__33847__delegate(x__33831__auto__);
});
G__33847.cljs$core$IFn$_invoke$arity$variadic = G__33847__delegate;
return G__33847;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1533186710924
