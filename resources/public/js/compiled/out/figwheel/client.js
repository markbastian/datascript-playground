// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e33334){if((e33334 instanceof Error)){
var e = e33334;
return "Error: Unable to stringify";
} else {
throw e33334;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__33337 = arguments.length;
switch (G__33337) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__33335_SHARP_){
if(typeof p1__33335_SHARP_ === 'string'){
return p1__33335_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__33335_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___33340 = arguments.length;
var i__4532__auto___33341 = (0);
while(true){
if((i__4532__auto___33341 < len__4531__auto___33340)){
args__4534__auto__.push((arguments[i__4532__auto___33341]));

var G__33342 = (i__4532__auto___33341 + (1));
i__4532__auto___33341 = G__33342;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq33339){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33339));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___33344 = arguments.length;
var i__4532__auto___33345 = (0);
while(true){
if((i__4532__auto___33345 < len__4531__auto___33344)){
args__4534__auto__.push((arguments[i__4532__auto___33345]));

var G__33346 = (i__4532__auto___33345 + (1));
i__4532__auto___33345 = G__33346;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq33343){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33343));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__33347){
var map__33348 = p__33347;
var map__33348__$1 = ((((!((map__33348 == null)))?(((((map__33348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33348):map__33348);
var message = cljs.core.get.call(null,map__33348__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__33348__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3949__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3938__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3938__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3938__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29401__auto___33427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29401__auto___33427,ch){
return (function (){
var f__29402__auto__ = (function (){var switch__29384__auto__ = ((function (c__29401__auto___33427,ch){
return (function (state_33399){
var state_val_33400 = (state_33399[(1)]);
if((state_val_33400 === (7))){
var inst_33395 = (state_33399[(2)]);
var state_33399__$1 = state_33399;
var statearr_33401_33428 = state_33399__$1;
(statearr_33401_33428[(2)] = inst_33395);

(statearr_33401_33428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33400 === (1))){
var state_33399__$1 = state_33399;
var statearr_33402_33429 = state_33399__$1;
(statearr_33402_33429[(2)] = null);

(statearr_33402_33429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33400 === (4))){
var inst_33352 = (state_33399[(7)]);
var inst_33352__$1 = (state_33399[(2)]);
var state_33399__$1 = (function (){var statearr_33403 = state_33399;
(statearr_33403[(7)] = inst_33352__$1);

return statearr_33403;
})();
if(cljs.core.truth_(inst_33352__$1)){
var statearr_33404_33430 = state_33399__$1;
(statearr_33404_33430[(1)] = (5));

} else {
var statearr_33405_33431 = state_33399__$1;
(statearr_33405_33431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33400 === (15))){
var inst_33359 = (state_33399[(8)]);
var inst_33374 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33359);
var inst_33375 = cljs.core.first.call(null,inst_33374);
var inst_33376 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33375);
var inst_33377 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33376)].join('');
var inst_33378 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_33377);
var state_33399__$1 = state_33399;
var statearr_33406_33432 = state_33399__$1;
(statearr_33406_33432[(2)] = inst_33378);

(statearr_33406_33432[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33400 === (13))){
var inst_33383 = (state_33399[(2)]);
var state_33399__$1 = state_33399;
var statearr_33407_33433 = state_33399__$1;
(statearr_33407_33433[(2)] = inst_33383);

(statearr_33407_33433[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33400 === (6))){
var state_33399__$1 = state_33399;
var statearr_33408_33434 = state_33399__$1;
(statearr_33408_33434[(2)] = null);

(statearr_33408_33434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33400 === (17))){
var inst_33381 = (state_33399[(2)]);
var state_33399__$1 = state_33399;
var statearr_33409_33435 = state_33399__$1;
(statearr_33409_33435[(2)] = inst_33381);

(statearr_33409_33435[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33400 === (3))){
var inst_33397 = (state_33399[(2)]);
var state_33399__$1 = state_33399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33399__$1,inst_33397);
} else {
if((state_val_33400 === (12))){
var inst_33358 = (state_33399[(9)]);
var inst_33372 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33358,opts);
var state_33399__$1 = state_33399;
if(cljs.core.truth_(inst_33372)){
var statearr_33410_33436 = state_33399__$1;
(statearr_33410_33436[(1)] = (15));

} else {
var statearr_33411_33437 = state_33399__$1;
(statearr_33411_33437[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33400 === (2))){
var state_33399__$1 = state_33399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33399__$1,(4),ch);
} else {
if((state_val_33400 === (11))){
var inst_33359 = (state_33399[(8)]);
var inst_33364 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33365 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33359);
var inst_33366 = cljs.core.async.timeout.call(null,(1000));
var inst_33367 = [inst_33365,inst_33366];
var inst_33368 = (new cljs.core.PersistentVector(null,2,(5),inst_33364,inst_33367,null));
var state_33399__$1 = state_33399;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33399__$1,(14),inst_33368);
} else {
if((state_val_33400 === (9))){
var inst_33359 = (state_33399[(8)]);
var inst_33385 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_33386 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33359);
var inst_33387 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33386);
var inst_33388 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33387)].join('');
var inst_33389 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_33388);
var state_33399__$1 = (function (){var statearr_33412 = state_33399;
(statearr_33412[(10)] = inst_33385);

return statearr_33412;
})();
var statearr_33413_33438 = state_33399__$1;
(statearr_33413_33438[(2)] = inst_33389);

(statearr_33413_33438[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33400 === (5))){
var inst_33352 = (state_33399[(7)]);
var inst_33354 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33355 = (new cljs.core.PersistentArrayMap(null,2,inst_33354,null));
var inst_33356 = (new cljs.core.PersistentHashSet(null,inst_33355,null));
var inst_33357 = figwheel.client.focus_msgs.call(null,inst_33356,inst_33352);
var inst_33358 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33357);
var inst_33359 = cljs.core.first.call(null,inst_33357);
var inst_33360 = figwheel.client.autoload_QMARK_.call(null);
var state_33399__$1 = (function (){var statearr_33414 = state_33399;
(statearr_33414[(8)] = inst_33359);

(statearr_33414[(9)] = inst_33358);

return statearr_33414;
})();
if(cljs.core.truth_(inst_33360)){
var statearr_33415_33439 = state_33399__$1;
(statearr_33415_33439[(1)] = (8));

} else {
var statearr_33416_33440 = state_33399__$1;
(statearr_33416_33440[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33400 === (14))){
var inst_33370 = (state_33399[(2)]);
var state_33399__$1 = state_33399;
var statearr_33417_33441 = state_33399__$1;
(statearr_33417_33441[(2)] = inst_33370);

(statearr_33417_33441[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33400 === (16))){
var state_33399__$1 = state_33399;
var statearr_33418_33442 = state_33399__$1;
(statearr_33418_33442[(2)] = null);

(statearr_33418_33442[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33400 === (10))){
var inst_33391 = (state_33399[(2)]);
var state_33399__$1 = (function (){var statearr_33419 = state_33399;
(statearr_33419[(11)] = inst_33391);

return statearr_33419;
})();
var statearr_33420_33443 = state_33399__$1;
(statearr_33420_33443[(2)] = null);

(statearr_33420_33443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33400 === (8))){
var inst_33358 = (state_33399[(9)]);
var inst_33362 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33358,opts);
var state_33399__$1 = state_33399;
if(cljs.core.truth_(inst_33362)){
var statearr_33421_33444 = state_33399__$1;
(statearr_33421_33444[(1)] = (11));

} else {
var statearr_33422_33445 = state_33399__$1;
(statearr_33422_33445[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29401__auto___33427,ch))
;
return ((function (switch__29384__auto__,c__29401__auto___33427,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29385__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29385__auto____0 = (function (){
var statearr_33423 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33423[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29385__auto__);

(statearr_33423[(1)] = (1));

return statearr_33423;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29385__auto____1 = (function (state_33399){
while(true){
var ret_value__29386__auto__ = (function (){try{while(true){
var result__29387__auto__ = switch__29384__auto__.call(null,state_33399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29387__auto__;
}
break;
}
}catch (e33424){if((e33424 instanceof Object)){
var ex__29388__auto__ = e33424;
var statearr_33425_33446 = state_33399;
(statearr_33425_33446[(5)] = ex__29388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33447 = state_33399;
state_33399 = G__33447;
continue;
} else {
return ret_value__29386__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29385__auto__ = function(state_33399){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29385__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29385__auto____1.call(this,state_33399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29385__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29385__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29385__auto__;
})()
;})(switch__29384__auto__,c__29401__auto___33427,ch))
})();
var state__29403__auto__ = (function (){var statearr_33426 = f__29402__auto__.call(null);
(statearr_33426[(6)] = c__29401__auto___33427);

return statearr_33426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29403__auto__);
});})(c__29401__auto___33427,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33448_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33448_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_33452 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_33452){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_33450 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_33451 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_33450,_STAR_print_fn_STAR_33451,sb,base_path_33452){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_33450,_STAR_print_fn_STAR_33451,sb,base_path_33452))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33451;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33450;
}}catch (e33449){if((e33449 instanceof Error)){
var e = e33449;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33452], null));
} else {
var e = e33449;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_33452))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__33453){
var map__33454 = p__33453;
var map__33454__$1 = ((((!((map__33454 == null)))?(((((map__33454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33454):map__33454);
var opts = map__33454__$1;
var build_id = cljs.core.get.call(null,map__33454__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__33454,map__33454__$1,opts,build_id){
return (function (p__33456){
var vec__33457 = p__33456;
var seq__33458 = cljs.core.seq.call(null,vec__33457);
var first__33459 = cljs.core.first.call(null,seq__33458);
var seq__33458__$1 = cljs.core.next.call(null,seq__33458);
var map__33460 = first__33459;
var map__33460__$1 = ((((!((map__33460 == null)))?(((((map__33460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33460):map__33460);
var msg = map__33460__$1;
var msg_name = cljs.core.get.call(null,map__33460__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33458__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__33457,seq__33458,first__33459,seq__33458__$1,map__33460,map__33460__$1,msg,msg_name,_,map__33454,map__33454__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__33457,seq__33458,first__33459,seq__33458__$1,map__33460,map__33460__$1,msg,msg_name,_,map__33454,map__33454__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__33454,map__33454__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__33462){
var vec__33463 = p__33462;
var seq__33464 = cljs.core.seq.call(null,vec__33463);
var first__33465 = cljs.core.first.call(null,seq__33464);
var seq__33464__$1 = cljs.core.next.call(null,seq__33464);
var map__33466 = first__33465;
var map__33466__$1 = ((((!((map__33466 == null)))?(((((map__33466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33466):map__33466);
var msg = map__33466__$1;
var msg_name = cljs.core.get.call(null,map__33466__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33464__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__33468){
var map__33469 = p__33468;
var map__33469__$1 = ((((!((map__33469 == null)))?(((((map__33469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33469):map__33469);
var on_compile_warning = cljs.core.get.call(null,map__33469__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__33469__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__33469,map__33469__$1,on_compile_warning,on_compile_fail){
return (function (p__33471){
var vec__33472 = p__33471;
var seq__33473 = cljs.core.seq.call(null,vec__33472);
var first__33474 = cljs.core.first.call(null,seq__33473);
var seq__33473__$1 = cljs.core.next.call(null,seq__33473);
var map__33475 = first__33474;
var map__33475__$1 = ((((!((map__33475 == null)))?(((((map__33475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33475):map__33475);
var msg = map__33475__$1;
var msg_name = cljs.core.get.call(null,map__33475__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33473__$1;
var pred__33477 = cljs.core._EQ_;
var expr__33478 = msg_name;
if(cljs.core.truth_(pred__33477.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33478))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33477.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33478))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__33469,map__33469__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29401__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29401__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29402__auto__ = (function (){var switch__29384__auto__ = ((function (c__29401__auto__,msg_hist,msg_names,msg){
return (function (state_33567){
var state_val_33568 = (state_33567[(1)]);
if((state_val_33568 === (7))){
var inst_33487 = (state_33567[(2)]);
var state_33567__$1 = state_33567;
if(cljs.core.truth_(inst_33487)){
var statearr_33569_33616 = state_33567__$1;
(statearr_33569_33616[(1)] = (8));

} else {
var statearr_33570_33617 = state_33567__$1;
(statearr_33570_33617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33568 === (20))){
var inst_33561 = (state_33567[(2)]);
var state_33567__$1 = state_33567;
var statearr_33571_33618 = state_33567__$1;
(statearr_33571_33618[(2)] = inst_33561);

(statearr_33571_33618[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33568 === (27))){
var inst_33557 = (state_33567[(2)]);
var state_33567__$1 = state_33567;
var statearr_33572_33619 = state_33567__$1;
(statearr_33572_33619[(2)] = inst_33557);

(statearr_33572_33619[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33568 === (1))){
var inst_33480 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33567__$1 = state_33567;
if(cljs.core.truth_(inst_33480)){
var statearr_33573_33620 = state_33567__$1;
(statearr_33573_33620[(1)] = (2));

} else {
var statearr_33574_33621 = state_33567__$1;
(statearr_33574_33621[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33568 === (24))){
var inst_33559 = (state_33567[(2)]);
var state_33567__$1 = state_33567;
var statearr_33575_33622 = state_33567__$1;
(statearr_33575_33622[(2)] = inst_33559);

(statearr_33575_33622[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33568 === (4))){
var inst_33565 = (state_33567[(2)]);
var state_33567__$1 = state_33567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33567__$1,inst_33565);
} else {
if((state_val_33568 === (15))){
var inst_33563 = (state_33567[(2)]);
var state_33567__$1 = state_33567;
var statearr_33576_33623 = state_33567__$1;
(statearr_33576_33623[(2)] = inst_33563);

(statearr_33576_33623[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33568 === (21))){
var inst_33516 = (state_33567[(2)]);
var inst_33517 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33518 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33517);
var state_33567__$1 = (function (){var statearr_33577 = state_33567;
(statearr_33577[(7)] = inst_33516);

return statearr_33577;
})();
var statearr_33578_33624 = state_33567__$1;
(statearr_33578_33624[(2)] = inst_33518);

(statearr_33578_33624[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33568 === (31))){
var inst_33546 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33567__$1 = state_33567;
if(cljs.core.truth_(inst_33546)){
var statearr_33579_33625 = state_33567__$1;
(statearr_33579_33625[(1)] = (34));

} else {
var statearr_33580_33626 = state_33567__$1;
(statearr_33580_33626[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33568 === (32))){
var inst_33555 = (state_33567[(2)]);
var state_33567__$1 = state_33567;
var statearr_33581_33627 = state_33567__$1;
(statearr_33581_33627[(2)] = inst_33555);

(statearr_33581_33627[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33568 === (33))){
var inst_33542 = (state_33567[(2)]);
var inst_33543 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33544 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33543);
var state_33567__$1 = (function (){var statearr_33582 = state_33567;
(statearr_33582[(8)] = inst_33542);

return statearr_33582;
})();
var statearr_33583_33628 = state_33567__$1;
(statearr_33583_33628[(2)] = inst_33544);

(statearr_33583_33628[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33568 === (13))){
var inst_33501 = figwheel.client.heads_up.clear.call(null);
var state_33567__$1 = state_33567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33567__$1,(16),inst_33501);
} else {
if((state_val_33568 === (22))){
var inst_33522 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33523 = figwheel.client.heads_up.append_warning_message.call(null,inst_33522);
var state_33567__$1 = state_33567;
var statearr_33584_33629 = state_33567__$1;
(statearr_33584_33629[(2)] = inst_33523);

(statearr_33584_33629[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33568 === (36))){
var inst_33553 = (state_33567[(2)]);
var state_33567__$1 = state_33567;
var statearr_33585_33630 = state_33567__$1;
(statearr_33585_33630[(2)] = inst_33553);

(statearr_33585_33630[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33568 === (29))){
var inst_33533 = (state_33567[(2)]);
var inst_33534 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33535 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33534);
var state_33567__$1 = (function (){var statearr_33586 = state_33567;
(statearr_33586[(9)] = inst_33533);

return statearr_33586;
})();
var statearr_33587_33631 = state_33567__$1;
(statearr_33587_33631[(2)] = inst_33535);

(statearr_33587_33631[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33568 === (6))){
var inst_33482 = (state_33567[(10)]);
var state_33567__$1 = state_33567;
var statearr_33588_33632 = state_33567__$1;
(statearr_33588_33632[(2)] = inst_33482);

(statearr_33588_33632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33568 === (28))){
var inst_33529 = (state_33567[(2)]);
var inst_33530 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33531 = figwheel.client.heads_up.display_warning.call(null,inst_33530);
var state_33567__$1 = (function (){var statearr_33589 = state_33567;
(statearr_33589[(11)] = inst_33529);

return statearr_33589;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33567__$1,(29),inst_33531);
} else {
if((state_val_33568 === (25))){
var inst_33527 = figwheel.client.heads_up.clear.call(null);
var state_33567__$1 = state_33567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33567__$1,(28),inst_33527);
} else {
if((state_val_33568 === (34))){
var inst_33548 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33567__$1 = state_33567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33567__$1,(37),inst_33548);
} else {
if((state_val_33568 === (17))){
var inst_33507 = (state_33567[(2)]);
var inst_33508 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33509 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33508);
var state_33567__$1 = (function (){var statearr_33590 = state_33567;
(statearr_33590[(12)] = inst_33507);

return statearr_33590;
})();
var statearr_33591_33633 = state_33567__$1;
(statearr_33591_33633[(2)] = inst_33509);

(statearr_33591_33633[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33568 === (3))){
var inst_33499 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33567__$1 = state_33567;
if(cljs.core.truth_(inst_33499)){
var statearr_33592_33634 = state_33567__$1;
(statearr_33592_33634[(1)] = (13));

} else {
var statearr_33593_33635 = state_33567__$1;
(statearr_33593_33635[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33568 === (12))){
var inst_33495 = (state_33567[(2)]);
var state_33567__$1 = state_33567;
var statearr_33594_33636 = state_33567__$1;
(statearr_33594_33636[(2)] = inst_33495);

(statearr_33594_33636[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33568 === (2))){
var inst_33482 = (state_33567[(10)]);
var inst_33482__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_33567__$1 = (function (){var statearr_33595 = state_33567;
(statearr_33595[(10)] = inst_33482__$1);

return statearr_33595;
})();
if(cljs.core.truth_(inst_33482__$1)){
var statearr_33596_33637 = state_33567__$1;
(statearr_33596_33637[(1)] = (5));

} else {
var statearr_33597_33638 = state_33567__$1;
(statearr_33597_33638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33568 === (23))){
var inst_33525 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33567__$1 = state_33567;
if(cljs.core.truth_(inst_33525)){
var statearr_33598_33639 = state_33567__$1;
(statearr_33598_33639[(1)] = (25));

} else {
var statearr_33599_33640 = state_33567__$1;
(statearr_33599_33640[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33568 === (35))){
var state_33567__$1 = state_33567;
var statearr_33600_33641 = state_33567__$1;
(statearr_33600_33641[(2)] = null);

(statearr_33600_33641[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33568 === (19))){
var inst_33520 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33567__$1 = state_33567;
if(cljs.core.truth_(inst_33520)){
var statearr_33601_33642 = state_33567__$1;
(statearr_33601_33642[(1)] = (22));

} else {
var statearr_33602_33643 = state_33567__$1;
(statearr_33602_33643[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33568 === (11))){
var inst_33491 = (state_33567[(2)]);
var state_33567__$1 = state_33567;
var statearr_33603_33644 = state_33567__$1;
(statearr_33603_33644[(2)] = inst_33491);

(statearr_33603_33644[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33568 === (9))){
var inst_33493 = figwheel.client.heads_up.clear.call(null);
var state_33567__$1 = state_33567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33567__$1,(12),inst_33493);
} else {
if((state_val_33568 === (5))){
var inst_33484 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33567__$1 = state_33567;
var statearr_33604_33645 = state_33567__$1;
(statearr_33604_33645[(2)] = inst_33484);

(statearr_33604_33645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33568 === (14))){
var inst_33511 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33567__$1 = state_33567;
if(cljs.core.truth_(inst_33511)){
var statearr_33605_33646 = state_33567__$1;
(statearr_33605_33646[(1)] = (18));

} else {
var statearr_33606_33647 = state_33567__$1;
(statearr_33606_33647[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33568 === (26))){
var inst_33537 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33567__$1 = state_33567;
if(cljs.core.truth_(inst_33537)){
var statearr_33607_33648 = state_33567__$1;
(statearr_33607_33648[(1)] = (30));

} else {
var statearr_33608_33649 = state_33567__$1;
(statearr_33608_33649[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33568 === (16))){
var inst_33503 = (state_33567[(2)]);
var inst_33504 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33505 = figwheel.client.heads_up.display_exception.call(null,inst_33504);
var state_33567__$1 = (function (){var statearr_33609 = state_33567;
(statearr_33609[(13)] = inst_33503);

return statearr_33609;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33567__$1,(17),inst_33505);
} else {
if((state_val_33568 === (30))){
var inst_33539 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33540 = figwheel.client.heads_up.display_warning.call(null,inst_33539);
var state_33567__$1 = state_33567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33567__$1,(33),inst_33540);
} else {
if((state_val_33568 === (10))){
var inst_33497 = (state_33567[(2)]);
var state_33567__$1 = state_33567;
var statearr_33610_33650 = state_33567__$1;
(statearr_33610_33650[(2)] = inst_33497);

(statearr_33610_33650[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33568 === (18))){
var inst_33513 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33514 = figwheel.client.heads_up.display_exception.call(null,inst_33513);
var state_33567__$1 = state_33567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33567__$1,(21),inst_33514);
} else {
if((state_val_33568 === (37))){
var inst_33550 = (state_33567[(2)]);
var state_33567__$1 = state_33567;
var statearr_33611_33651 = state_33567__$1;
(statearr_33611_33651[(2)] = inst_33550);

(statearr_33611_33651[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33568 === (8))){
var inst_33489 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33567__$1 = state_33567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33567__$1,(11),inst_33489);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29401__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29384__auto__,c__29401__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29385__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29385__auto____0 = (function (){
var statearr_33612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33612[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29385__auto__);

(statearr_33612[(1)] = (1));

return statearr_33612;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29385__auto____1 = (function (state_33567){
while(true){
var ret_value__29386__auto__ = (function (){try{while(true){
var result__29387__auto__ = switch__29384__auto__.call(null,state_33567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29387__auto__;
}
break;
}
}catch (e33613){if((e33613 instanceof Object)){
var ex__29388__auto__ = e33613;
var statearr_33614_33652 = state_33567;
(statearr_33614_33652[(5)] = ex__29388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33653 = state_33567;
state_33567 = G__33653;
continue;
} else {
return ret_value__29386__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29385__auto__ = function(state_33567){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29385__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29385__auto____1.call(this,state_33567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29385__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29385__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29385__auto__;
})()
;})(switch__29384__auto__,c__29401__auto__,msg_hist,msg_names,msg))
})();
var state__29403__auto__ = (function (){var statearr_33615 = f__29402__auto__.call(null);
(statearr_33615[(6)] = c__29401__auto__);

return statearr_33615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29403__auto__);
});})(c__29401__auto__,msg_hist,msg_names,msg))
);

return c__29401__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29401__auto___33682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29401__auto___33682,ch){
return (function (){
var f__29402__auto__ = (function (){var switch__29384__auto__ = ((function (c__29401__auto___33682,ch){
return (function (state_33668){
var state_val_33669 = (state_33668[(1)]);
if((state_val_33669 === (1))){
var state_33668__$1 = state_33668;
var statearr_33670_33683 = state_33668__$1;
(statearr_33670_33683[(2)] = null);

(statearr_33670_33683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33669 === (2))){
var state_33668__$1 = state_33668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33668__$1,(4),ch);
} else {
if((state_val_33669 === (3))){
var inst_33666 = (state_33668[(2)]);
var state_33668__$1 = state_33668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33668__$1,inst_33666);
} else {
if((state_val_33669 === (4))){
var inst_33656 = (state_33668[(7)]);
var inst_33656__$1 = (state_33668[(2)]);
var state_33668__$1 = (function (){var statearr_33671 = state_33668;
(statearr_33671[(7)] = inst_33656__$1);

return statearr_33671;
})();
if(cljs.core.truth_(inst_33656__$1)){
var statearr_33672_33684 = state_33668__$1;
(statearr_33672_33684[(1)] = (5));

} else {
var statearr_33673_33685 = state_33668__$1;
(statearr_33673_33685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33669 === (5))){
var inst_33656 = (state_33668[(7)]);
var inst_33658 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33656);
var state_33668__$1 = state_33668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33668__$1,(8),inst_33658);
} else {
if((state_val_33669 === (6))){
var state_33668__$1 = state_33668;
var statearr_33674_33686 = state_33668__$1;
(statearr_33674_33686[(2)] = null);

(statearr_33674_33686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33669 === (7))){
var inst_33664 = (state_33668[(2)]);
var state_33668__$1 = state_33668;
var statearr_33675_33687 = state_33668__$1;
(statearr_33675_33687[(2)] = inst_33664);

(statearr_33675_33687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33669 === (8))){
var inst_33660 = (state_33668[(2)]);
var state_33668__$1 = (function (){var statearr_33676 = state_33668;
(statearr_33676[(8)] = inst_33660);

return statearr_33676;
})();
var statearr_33677_33688 = state_33668__$1;
(statearr_33677_33688[(2)] = null);

(statearr_33677_33688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__29401__auto___33682,ch))
;
return ((function (switch__29384__auto__,c__29401__auto___33682,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29385__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29385__auto____0 = (function (){
var statearr_33678 = [null,null,null,null,null,null,null,null,null];
(statearr_33678[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29385__auto__);

(statearr_33678[(1)] = (1));

return statearr_33678;
});
var figwheel$client$heads_up_plugin_$_state_machine__29385__auto____1 = (function (state_33668){
while(true){
var ret_value__29386__auto__ = (function (){try{while(true){
var result__29387__auto__ = switch__29384__auto__.call(null,state_33668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29387__auto__;
}
break;
}
}catch (e33679){if((e33679 instanceof Object)){
var ex__29388__auto__ = e33679;
var statearr_33680_33689 = state_33668;
(statearr_33680_33689[(5)] = ex__29388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33690 = state_33668;
state_33668 = G__33690;
continue;
} else {
return ret_value__29386__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29385__auto__ = function(state_33668){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29385__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29385__auto____1.call(this,state_33668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29385__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29385__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29385__auto__;
})()
;})(switch__29384__auto__,c__29401__auto___33682,ch))
})();
var state__29403__auto__ = (function (){var statearr_33681 = f__29402__auto__.call(null);
(statearr_33681[(6)] = c__29401__auto___33682);

return statearr_33681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29403__auto__);
});})(c__29401__auto___33682,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29401__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29401__auto__){
return (function (){
var f__29402__auto__ = (function (){var switch__29384__auto__ = ((function (c__29401__auto__){
return (function (state_33696){
var state_val_33697 = (state_33696[(1)]);
if((state_val_33697 === (1))){
var inst_33691 = cljs.core.async.timeout.call(null,(3000));
var state_33696__$1 = state_33696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33696__$1,(2),inst_33691);
} else {
if((state_val_33697 === (2))){
var inst_33693 = (state_33696[(2)]);
var inst_33694 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_33696__$1 = (function (){var statearr_33698 = state_33696;
(statearr_33698[(7)] = inst_33693);

return statearr_33698;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33696__$1,inst_33694);
} else {
return null;
}
}
});})(c__29401__auto__))
;
return ((function (switch__29384__auto__,c__29401__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29385__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29385__auto____0 = (function (){
var statearr_33699 = [null,null,null,null,null,null,null,null];
(statearr_33699[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29385__auto__);

(statearr_33699[(1)] = (1));

return statearr_33699;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29385__auto____1 = (function (state_33696){
while(true){
var ret_value__29386__auto__ = (function (){try{while(true){
var result__29387__auto__ = switch__29384__auto__.call(null,state_33696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29387__auto__;
}
break;
}
}catch (e33700){if((e33700 instanceof Object)){
var ex__29388__auto__ = e33700;
var statearr_33701_33703 = state_33696;
(statearr_33701_33703[(5)] = ex__29388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33704 = state_33696;
state_33696 = G__33704;
continue;
} else {
return ret_value__29386__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29385__auto__ = function(state_33696){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29385__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29385__auto____1.call(this,state_33696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29385__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29385__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29385__auto__;
})()
;})(switch__29384__auto__,c__29401__auto__))
})();
var state__29403__auto__ = (function (){var statearr_33702 = f__29402__auto__.call(null);
(statearr_33702[(6)] = c__29401__auto__);

return statearr_33702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29403__auto__);
});})(c__29401__auto__))
);

return c__29401__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29401__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29401__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__29402__auto__ = (function (){var switch__29384__auto__ = ((function (c__29401__auto__,figwheel_version,temp__5457__auto__){
return (function (state_33711){
var state_val_33712 = (state_33711[(1)]);
if((state_val_33712 === (1))){
var inst_33705 = cljs.core.async.timeout.call(null,(2000));
var state_33711__$1 = state_33711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33711__$1,(2),inst_33705);
} else {
if((state_val_33712 === (2))){
var inst_33707 = (state_33711[(2)]);
var inst_33708 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_33709 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_33708);
var state_33711__$1 = (function (){var statearr_33713 = state_33711;
(statearr_33713[(7)] = inst_33707);

return statearr_33713;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33711__$1,inst_33709);
} else {
return null;
}
}
});})(c__29401__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__29384__auto__,c__29401__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29385__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29385__auto____0 = (function (){
var statearr_33714 = [null,null,null,null,null,null,null,null];
(statearr_33714[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29385__auto__);

(statearr_33714[(1)] = (1));

return statearr_33714;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29385__auto____1 = (function (state_33711){
while(true){
var ret_value__29386__auto__ = (function (){try{while(true){
var result__29387__auto__ = switch__29384__auto__.call(null,state_33711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29387__auto__;
}
break;
}
}catch (e33715){if((e33715 instanceof Object)){
var ex__29388__auto__ = e33715;
var statearr_33716_33718 = state_33711;
(statearr_33716_33718[(5)] = ex__29388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33719 = state_33711;
state_33711 = G__33719;
continue;
} else {
return ret_value__29386__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29385__auto__ = function(state_33711){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29385__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29385__auto____1.call(this,state_33711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29385__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29385__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29385__auto__;
})()
;})(switch__29384__auto__,c__29401__auto__,figwheel_version,temp__5457__auto__))
})();
var state__29403__auto__ = (function (){var statearr_33717 = f__29402__auto__.call(null);
(statearr_33717[(6)] = c__29401__auto__);

return statearr_33717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29403__auto__);
});})(c__29401__auto__,figwheel_version,temp__5457__auto__))
);

return c__29401__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__33720){
var map__33721 = p__33720;
var map__33721__$1 = ((((!((map__33721 == null)))?(((((map__33721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33721):map__33721);
var file = cljs.core.get.call(null,map__33721__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__33721__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__33721__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__33723 = "";
var G__33723__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33723),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__33723);
var G__33723__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33723__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__33723__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33723__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__33723__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__33724){
var map__33725 = p__33724;
var map__33725__$1 = ((((!((map__33725 == null)))?(((((map__33725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33725):map__33725);
var ed = map__33725__$1;
var formatted_exception = cljs.core.get.call(null,map__33725__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__33725__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__33725__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__33727_33731 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__33728_33732 = null;
var count__33729_33733 = (0);
var i__33730_33734 = (0);
while(true){
if((i__33730_33734 < count__33729_33733)){
var msg_33735 = cljs.core._nth.call(null,chunk__33728_33732,i__33730_33734);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33735);


var G__33736 = seq__33727_33731;
var G__33737 = chunk__33728_33732;
var G__33738 = count__33729_33733;
var G__33739 = (i__33730_33734 + (1));
seq__33727_33731 = G__33736;
chunk__33728_33732 = G__33737;
count__33729_33733 = G__33738;
i__33730_33734 = G__33739;
continue;
} else {
var temp__5457__auto___33740 = cljs.core.seq.call(null,seq__33727_33731);
if(temp__5457__auto___33740){
var seq__33727_33741__$1 = temp__5457__auto___33740;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33727_33741__$1)){
var c__4351__auto___33742 = cljs.core.chunk_first.call(null,seq__33727_33741__$1);
var G__33743 = cljs.core.chunk_rest.call(null,seq__33727_33741__$1);
var G__33744 = c__4351__auto___33742;
var G__33745 = cljs.core.count.call(null,c__4351__auto___33742);
var G__33746 = (0);
seq__33727_33731 = G__33743;
chunk__33728_33732 = G__33744;
count__33729_33733 = G__33745;
i__33730_33734 = G__33746;
continue;
} else {
var msg_33747 = cljs.core.first.call(null,seq__33727_33741__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33747);


var G__33748 = cljs.core.next.call(null,seq__33727_33741__$1);
var G__33749 = null;
var G__33750 = (0);
var G__33751 = (0);
seq__33727_33731 = G__33748;
chunk__33728_33732 = G__33749;
count__33729_33733 = G__33750;
i__33730_33734 = G__33751;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__33752){
var map__33753 = p__33752;
var map__33753__$1 = ((((!((map__33753 == null)))?(((((map__33753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33753):map__33753);
var w = map__33753__$1;
var message = cljs.core.get.call(null,map__33753__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3938__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__33755 = cljs.core.seq.call(null,plugins);
var chunk__33756 = null;
var count__33757 = (0);
var i__33758 = (0);
while(true){
if((i__33758 < count__33757)){
var vec__33759 = cljs.core._nth.call(null,chunk__33756,i__33758);
var k = cljs.core.nth.call(null,vec__33759,(0),null);
var plugin = cljs.core.nth.call(null,vec__33759,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33765 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33755,chunk__33756,count__33757,i__33758,pl_33765,vec__33759,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_33765.call(null,msg_hist);
});})(seq__33755,chunk__33756,count__33757,i__33758,pl_33765,vec__33759,k,plugin))
);
} else {
}


var G__33766 = seq__33755;
var G__33767 = chunk__33756;
var G__33768 = count__33757;
var G__33769 = (i__33758 + (1));
seq__33755 = G__33766;
chunk__33756 = G__33767;
count__33757 = G__33768;
i__33758 = G__33769;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__33755);
if(temp__5457__auto__){
var seq__33755__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33755__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__33755__$1);
var G__33770 = cljs.core.chunk_rest.call(null,seq__33755__$1);
var G__33771 = c__4351__auto__;
var G__33772 = cljs.core.count.call(null,c__4351__auto__);
var G__33773 = (0);
seq__33755 = G__33770;
chunk__33756 = G__33771;
count__33757 = G__33772;
i__33758 = G__33773;
continue;
} else {
var vec__33762 = cljs.core.first.call(null,seq__33755__$1);
var k = cljs.core.nth.call(null,vec__33762,(0),null);
var plugin = cljs.core.nth.call(null,vec__33762,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33774 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33755,chunk__33756,count__33757,i__33758,pl_33774,vec__33762,k,plugin,seq__33755__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_33774.call(null,msg_hist);
});})(seq__33755,chunk__33756,count__33757,i__33758,pl_33774,vec__33762,k,plugin,seq__33755__$1,temp__5457__auto__))
);
} else {
}


var G__33775 = cljs.core.next.call(null,seq__33755__$1);
var G__33776 = null;
var G__33777 = (0);
var G__33778 = (0);
seq__33755 = G__33775;
chunk__33756 = G__33776;
count__33757 = G__33777;
i__33758 = G__33778;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__33780 = arguments.length;
switch (G__33780) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__33781_33786 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__33782_33787 = null;
var count__33783_33788 = (0);
var i__33784_33789 = (0);
while(true){
if((i__33784_33789 < count__33783_33788)){
var msg_33790 = cljs.core._nth.call(null,chunk__33782_33787,i__33784_33789);
figwheel.client.socket.handle_incoming_message.call(null,msg_33790);


var G__33791 = seq__33781_33786;
var G__33792 = chunk__33782_33787;
var G__33793 = count__33783_33788;
var G__33794 = (i__33784_33789 + (1));
seq__33781_33786 = G__33791;
chunk__33782_33787 = G__33792;
count__33783_33788 = G__33793;
i__33784_33789 = G__33794;
continue;
} else {
var temp__5457__auto___33795 = cljs.core.seq.call(null,seq__33781_33786);
if(temp__5457__auto___33795){
var seq__33781_33796__$1 = temp__5457__auto___33795;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33781_33796__$1)){
var c__4351__auto___33797 = cljs.core.chunk_first.call(null,seq__33781_33796__$1);
var G__33798 = cljs.core.chunk_rest.call(null,seq__33781_33796__$1);
var G__33799 = c__4351__auto___33797;
var G__33800 = cljs.core.count.call(null,c__4351__auto___33797);
var G__33801 = (0);
seq__33781_33786 = G__33798;
chunk__33782_33787 = G__33799;
count__33783_33788 = G__33800;
i__33784_33789 = G__33801;
continue;
} else {
var msg_33802 = cljs.core.first.call(null,seq__33781_33796__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_33802);


var G__33803 = cljs.core.next.call(null,seq__33781_33796__$1);
var G__33804 = null;
var G__33805 = (0);
var G__33806 = (0);
seq__33781_33786 = G__33803;
chunk__33782_33787 = G__33804;
count__33783_33788 = G__33805;
i__33784_33789 = G__33806;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4534__auto__ = [];
var len__4531__auto___33811 = arguments.length;
var i__4532__auto___33812 = (0);
while(true){
if((i__4532__auto___33812 < len__4531__auto___33811)){
args__4534__auto__.push((arguments[i__4532__auto___33812]));

var G__33813 = (i__4532__auto___33812 + (1));
i__4532__auto___33812 = G__33813;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__33808){
var map__33809 = p__33808;
var map__33809__$1 = ((((!((map__33809 == null)))?(((((map__33809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33809):map__33809);
var opts = map__33809__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq33807){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33807));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e33814){if((e33814 instanceof Error)){
var e = e33814;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e33814;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__33815){
var map__33816 = p__33815;
var map__33816__$1 = ((((!((map__33816 == null)))?(((((map__33816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33816):map__33816);
var msg_name = cljs.core.get.call(null,map__33816__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1533186710868
