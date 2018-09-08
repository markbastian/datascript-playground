// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__24445__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24445 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24446__i = 0, G__24446__a = new Array(arguments.length -  0);
while (G__24446__i < G__24446__a.length) {G__24446__a[G__24446__i] = arguments[G__24446__i + 0]; ++G__24446__i;}
  args = new cljs.core.IndexedSeq(G__24446__a,0,null);
} 
return G__24445__delegate.call(this,args);};
G__24445.cljs$lang$maxFixedArity = 0;
G__24445.cljs$lang$applyTo = (function (arglist__24447){
var args = cljs.core.seq(arglist__24447);
return G__24445__delegate(args);
});
G__24445.cljs$core$IFn$_invoke$arity$variadic = G__24445__delegate;
return G__24445;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__24448__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24448 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24449__i = 0, G__24449__a = new Array(arguments.length -  0);
while (G__24449__i < G__24449__a.length) {G__24449__a[G__24449__i] = arguments[G__24449__i + 0]; ++G__24449__i;}
  args = new cljs.core.IndexedSeq(G__24449__a,0,null);
} 
return G__24448__delegate.call(this,args);};
G__24448.cljs$lang$maxFixedArity = 0;
G__24448.cljs$lang$applyTo = (function (arglist__24450){
var args = cljs.core.seq(arglist__24450);
return G__24448__delegate(args);
});
G__24448.cljs$core$IFn$_invoke$arity$variadic = G__24448__delegate;
return G__24448;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1533186702179
