// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3949__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3949__auto__){
return or__3949__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3949__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31582_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31582_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__31583 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31584 = null;
var count__31585 = (0);
var i__31586 = (0);
while(true){
if((i__31586 < count__31585)){
var n = cljs.core._nth.call(null,chunk__31584,i__31586);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31587 = seq__31583;
var G__31588 = chunk__31584;
var G__31589 = count__31585;
var G__31590 = (i__31586 + (1));
seq__31583 = G__31587;
chunk__31584 = G__31588;
count__31585 = G__31589;
i__31586 = G__31590;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31583);
if(temp__5457__auto__){
var seq__31583__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31583__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__31583__$1);
var G__31591 = cljs.core.chunk_rest.call(null,seq__31583__$1);
var G__31592 = c__4351__auto__;
var G__31593 = cljs.core.count.call(null,c__4351__auto__);
var G__31594 = (0);
seq__31583 = G__31591;
chunk__31584 = G__31592;
count__31585 = G__31593;
i__31586 = G__31594;
continue;
} else {
var n = cljs.core.first.call(null,seq__31583__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31595 = cljs.core.next.call(null,seq__31583__$1);
var G__31596 = null;
var G__31597 = (0);
var G__31598 = (0);
seq__31583 = G__31595;
chunk__31584 = G__31596;
count__31585 = G__31597;
i__31586 = G__31598;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__31599){
var vec__31600 = p__31599;
var _ = cljs.core.nth.call(null,vec__31600,(0),null);
var v = cljs.core.nth.call(null,vec__31600,(1),null);
var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return v.call(null,dep);
} else {
return and__3938__auto__;
}
}),cljs.core.filter.call(null,(function (p__31603){
var vec__31604 = p__31603;
var k = cljs.core.nth.call(null,vec__31604,(0),null);
var v = cljs.core.nth.call(null,vec__31604,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__31616_31624 = cljs.core.seq.call(null,deps);
var chunk__31617_31625 = null;
var count__31618_31626 = (0);
var i__31619_31627 = (0);
while(true){
if((i__31619_31627 < count__31618_31626)){
var dep_31628 = cljs.core._nth.call(null,chunk__31617_31625,i__31619_31627);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_31628;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31628));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31628,(depth + (1)),state);
} else {
}


var G__31629 = seq__31616_31624;
var G__31630 = chunk__31617_31625;
var G__31631 = count__31618_31626;
var G__31632 = (i__31619_31627 + (1));
seq__31616_31624 = G__31629;
chunk__31617_31625 = G__31630;
count__31618_31626 = G__31631;
i__31619_31627 = G__31632;
continue;
} else {
var temp__5457__auto___31633 = cljs.core.seq.call(null,seq__31616_31624);
if(temp__5457__auto___31633){
var seq__31616_31634__$1 = temp__5457__auto___31633;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31616_31634__$1)){
var c__4351__auto___31635 = cljs.core.chunk_first.call(null,seq__31616_31634__$1);
var G__31636 = cljs.core.chunk_rest.call(null,seq__31616_31634__$1);
var G__31637 = c__4351__auto___31635;
var G__31638 = cljs.core.count.call(null,c__4351__auto___31635);
var G__31639 = (0);
seq__31616_31624 = G__31636;
chunk__31617_31625 = G__31637;
count__31618_31626 = G__31638;
i__31619_31627 = G__31639;
continue;
} else {
var dep_31640 = cljs.core.first.call(null,seq__31616_31634__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_31640;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31640));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31640,(depth + (1)),state);
} else {
}


var G__31641 = cljs.core.next.call(null,seq__31616_31634__$1);
var G__31642 = null;
var G__31643 = (0);
var G__31644 = (0);
seq__31616_31624 = G__31641;
chunk__31617_31625 = G__31642;
count__31618_31626 = G__31643;
i__31619_31627 = G__31644;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31620){
var vec__31621 = p__31620;
var seq__31622 = cljs.core.seq.call(null,vec__31621);
var first__31623 = cljs.core.first.call(null,seq__31622);
var seq__31622__$1 = cljs.core.next.call(null,seq__31622);
var x = first__31623;
var xs = seq__31622__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31621,seq__31622,first__31623,seq__31622__$1,x,xs,get_deps__$1){
return (function (p1__31607_SHARP_){
return clojure.set.difference.call(null,p1__31607_SHARP_,x);
});})(vec__31621,seq__31622,first__31623,seq__31622__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__31645 = cljs.core.seq.call(null,provides);
var chunk__31646 = null;
var count__31647 = (0);
var i__31648 = (0);
while(true){
if((i__31648 < count__31647)){
var prov = cljs.core._nth.call(null,chunk__31646,i__31648);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31649_31657 = cljs.core.seq.call(null,requires);
var chunk__31650_31658 = null;
var count__31651_31659 = (0);
var i__31652_31660 = (0);
while(true){
if((i__31652_31660 < count__31651_31659)){
var req_31661 = cljs.core._nth.call(null,chunk__31650_31658,i__31652_31660);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31661,prov);


var G__31662 = seq__31649_31657;
var G__31663 = chunk__31650_31658;
var G__31664 = count__31651_31659;
var G__31665 = (i__31652_31660 + (1));
seq__31649_31657 = G__31662;
chunk__31650_31658 = G__31663;
count__31651_31659 = G__31664;
i__31652_31660 = G__31665;
continue;
} else {
var temp__5457__auto___31666 = cljs.core.seq.call(null,seq__31649_31657);
if(temp__5457__auto___31666){
var seq__31649_31667__$1 = temp__5457__auto___31666;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31649_31667__$1)){
var c__4351__auto___31668 = cljs.core.chunk_first.call(null,seq__31649_31667__$1);
var G__31669 = cljs.core.chunk_rest.call(null,seq__31649_31667__$1);
var G__31670 = c__4351__auto___31668;
var G__31671 = cljs.core.count.call(null,c__4351__auto___31668);
var G__31672 = (0);
seq__31649_31657 = G__31669;
chunk__31650_31658 = G__31670;
count__31651_31659 = G__31671;
i__31652_31660 = G__31672;
continue;
} else {
var req_31673 = cljs.core.first.call(null,seq__31649_31667__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31673,prov);


var G__31674 = cljs.core.next.call(null,seq__31649_31667__$1);
var G__31675 = null;
var G__31676 = (0);
var G__31677 = (0);
seq__31649_31657 = G__31674;
chunk__31650_31658 = G__31675;
count__31651_31659 = G__31676;
i__31652_31660 = G__31677;
continue;
}
} else {
}
}
break;
}


var G__31678 = seq__31645;
var G__31679 = chunk__31646;
var G__31680 = count__31647;
var G__31681 = (i__31648 + (1));
seq__31645 = G__31678;
chunk__31646 = G__31679;
count__31647 = G__31680;
i__31648 = G__31681;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31645);
if(temp__5457__auto__){
var seq__31645__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31645__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__31645__$1);
var G__31682 = cljs.core.chunk_rest.call(null,seq__31645__$1);
var G__31683 = c__4351__auto__;
var G__31684 = cljs.core.count.call(null,c__4351__auto__);
var G__31685 = (0);
seq__31645 = G__31682;
chunk__31646 = G__31683;
count__31647 = G__31684;
i__31648 = G__31685;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31645__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31653_31686 = cljs.core.seq.call(null,requires);
var chunk__31654_31687 = null;
var count__31655_31688 = (0);
var i__31656_31689 = (0);
while(true){
if((i__31656_31689 < count__31655_31688)){
var req_31690 = cljs.core._nth.call(null,chunk__31654_31687,i__31656_31689);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31690,prov);


var G__31691 = seq__31653_31686;
var G__31692 = chunk__31654_31687;
var G__31693 = count__31655_31688;
var G__31694 = (i__31656_31689 + (1));
seq__31653_31686 = G__31691;
chunk__31654_31687 = G__31692;
count__31655_31688 = G__31693;
i__31656_31689 = G__31694;
continue;
} else {
var temp__5457__auto___31695__$1 = cljs.core.seq.call(null,seq__31653_31686);
if(temp__5457__auto___31695__$1){
var seq__31653_31696__$1 = temp__5457__auto___31695__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31653_31696__$1)){
var c__4351__auto___31697 = cljs.core.chunk_first.call(null,seq__31653_31696__$1);
var G__31698 = cljs.core.chunk_rest.call(null,seq__31653_31696__$1);
var G__31699 = c__4351__auto___31697;
var G__31700 = cljs.core.count.call(null,c__4351__auto___31697);
var G__31701 = (0);
seq__31653_31686 = G__31698;
chunk__31654_31687 = G__31699;
count__31655_31688 = G__31700;
i__31656_31689 = G__31701;
continue;
} else {
var req_31702 = cljs.core.first.call(null,seq__31653_31696__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31702,prov);


var G__31703 = cljs.core.next.call(null,seq__31653_31696__$1);
var G__31704 = null;
var G__31705 = (0);
var G__31706 = (0);
seq__31653_31686 = G__31703;
chunk__31654_31687 = G__31704;
count__31655_31688 = G__31705;
i__31656_31689 = G__31706;
continue;
}
} else {
}
}
break;
}


var G__31707 = cljs.core.next.call(null,seq__31645__$1);
var G__31708 = null;
var G__31709 = (0);
var G__31710 = (0);
seq__31645 = G__31707;
chunk__31646 = G__31708;
count__31647 = G__31709;
i__31648 = G__31710;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__31711_31715 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31712_31716 = null;
var count__31713_31717 = (0);
var i__31714_31718 = (0);
while(true){
if((i__31714_31718 < count__31713_31717)){
var ns_31719 = cljs.core._nth.call(null,chunk__31712_31716,i__31714_31718);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31719);


var G__31720 = seq__31711_31715;
var G__31721 = chunk__31712_31716;
var G__31722 = count__31713_31717;
var G__31723 = (i__31714_31718 + (1));
seq__31711_31715 = G__31720;
chunk__31712_31716 = G__31721;
count__31713_31717 = G__31722;
i__31714_31718 = G__31723;
continue;
} else {
var temp__5457__auto___31724 = cljs.core.seq.call(null,seq__31711_31715);
if(temp__5457__auto___31724){
var seq__31711_31725__$1 = temp__5457__auto___31724;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31711_31725__$1)){
var c__4351__auto___31726 = cljs.core.chunk_first.call(null,seq__31711_31725__$1);
var G__31727 = cljs.core.chunk_rest.call(null,seq__31711_31725__$1);
var G__31728 = c__4351__auto___31726;
var G__31729 = cljs.core.count.call(null,c__4351__auto___31726);
var G__31730 = (0);
seq__31711_31715 = G__31727;
chunk__31712_31716 = G__31728;
count__31713_31717 = G__31729;
i__31714_31718 = G__31730;
continue;
} else {
var ns_31731 = cljs.core.first.call(null,seq__31711_31725__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31731);


var G__31732 = cljs.core.next.call(null,seq__31711_31725__$1);
var G__31733 = null;
var G__31734 = (0);
var G__31735 = (0);
seq__31711_31715 = G__31732;
chunk__31712_31716 = G__31733;
count__31713_31717 = G__31734;
i__31714_31718 = G__31735;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3949__auto__ = goog.require__;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__31736__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31736 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31737__i = 0, G__31737__a = new Array(arguments.length -  0);
while (G__31737__i < G__31737__a.length) {G__31737__a[G__31737__i] = arguments[G__31737__i + 0]; ++G__31737__i;}
  args = new cljs.core.IndexedSeq(G__31737__a,0,null);
} 
return G__31736__delegate.call(this,args);};
G__31736.cljs$lang$maxFixedArity = 0;
G__31736.cljs$lang$applyTo = (function (arglist__31738){
var args = cljs.core.seq(arglist__31738);
return G__31736__delegate(args);
});
G__31736.cljs$core$IFn$_invoke$arity$variadic = G__31736__delegate;
return G__31736;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__31739_SHARP_,p2__31740_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31739_SHARP_)].join('')),p2__31740_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__31741_SHARP_,p2__31742_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31741_SHARP_)].join(''),p2__31742_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__31743 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__31743.addCallback(((function (G__31743){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__31743))
);

G__31743.addErrback(((function (G__31743){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__31743))
);

return G__31743;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e31744){if((e31744 instanceof Error)){
var e = e31744;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31744;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e31745){if((e31745 instanceof Error)){
var e = e31745;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31745;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31746 = cljs.core._EQ_;
var expr__31747 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31746.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31747))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__31746.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31747))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__31746.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__31747))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__31746,expr__31747){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__31746,expr__31747))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31749,callback){
var map__31750 = p__31749;
var map__31750__$1 = ((((!((map__31750 == null)))?(((((map__31750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31750):map__31750);
var file_msg = map__31750__$1;
var request_url = cljs.core.get.call(null,map__31750__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3949__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__31750,map__31750__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31750,map__31750__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__29401__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29401__auto__){
return (function (){
var f__29402__auto__ = (function (){var switch__29384__auto__ = ((function (c__29401__auto__){
return (function (state_31788){
var state_val_31789 = (state_31788[(1)]);
if((state_val_31789 === (7))){
var inst_31784 = (state_31788[(2)]);
var state_31788__$1 = state_31788;
var statearr_31790_31816 = state_31788__$1;
(statearr_31790_31816[(2)] = inst_31784);

(statearr_31790_31816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (1))){
var state_31788__$1 = state_31788;
var statearr_31791_31817 = state_31788__$1;
(statearr_31791_31817[(2)] = null);

(statearr_31791_31817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (4))){
var inst_31754 = (state_31788[(7)]);
var inst_31754__$1 = (state_31788[(2)]);
var state_31788__$1 = (function (){var statearr_31792 = state_31788;
(statearr_31792[(7)] = inst_31754__$1);

return statearr_31792;
})();
if(cljs.core.truth_(inst_31754__$1)){
var statearr_31793_31818 = state_31788__$1;
(statearr_31793_31818[(1)] = (5));

} else {
var statearr_31794_31819 = state_31788__$1;
(statearr_31794_31819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (15))){
var inst_31767 = (state_31788[(8)]);
var inst_31769 = (state_31788[(9)]);
var inst_31771 = inst_31769.call(null,inst_31767);
var state_31788__$1 = state_31788;
var statearr_31795_31820 = state_31788__$1;
(statearr_31795_31820[(2)] = inst_31771);

(statearr_31795_31820[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (13))){
var inst_31778 = (state_31788[(2)]);
var state_31788__$1 = state_31788;
var statearr_31796_31821 = state_31788__$1;
(statearr_31796_31821[(2)] = inst_31778);

(statearr_31796_31821[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (6))){
var state_31788__$1 = state_31788;
var statearr_31797_31822 = state_31788__$1;
(statearr_31797_31822[(2)] = null);

(statearr_31797_31822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (17))){
var inst_31775 = (state_31788[(2)]);
var state_31788__$1 = state_31788;
var statearr_31798_31823 = state_31788__$1;
(statearr_31798_31823[(2)] = inst_31775);

(statearr_31798_31823[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (3))){
var inst_31786 = (state_31788[(2)]);
var state_31788__$1 = state_31788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31788__$1,inst_31786);
} else {
if((state_val_31789 === (12))){
var state_31788__$1 = state_31788;
var statearr_31799_31824 = state_31788__$1;
(statearr_31799_31824[(2)] = null);

(statearr_31799_31824[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (2))){
var state_31788__$1 = state_31788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31788__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31789 === (11))){
var inst_31759 = (state_31788[(10)]);
var inst_31765 = figwheel.client.file_reloading.blocking_load.call(null,inst_31759);
var state_31788__$1 = state_31788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31788__$1,(14),inst_31765);
} else {
if((state_val_31789 === (9))){
var inst_31759 = (state_31788[(10)]);
var state_31788__$1 = state_31788;
if(cljs.core.truth_(inst_31759)){
var statearr_31800_31825 = state_31788__$1;
(statearr_31800_31825[(1)] = (11));

} else {
var statearr_31801_31826 = state_31788__$1;
(statearr_31801_31826[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (5))){
var inst_31760 = (state_31788[(11)]);
var inst_31754 = (state_31788[(7)]);
var inst_31759 = cljs.core.nth.call(null,inst_31754,(0),null);
var inst_31760__$1 = cljs.core.nth.call(null,inst_31754,(1),null);
var state_31788__$1 = (function (){var statearr_31802 = state_31788;
(statearr_31802[(11)] = inst_31760__$1);

(statearr_31802[(10)] = inst_31759);

return statearr_31802;
})();
if(cljs.core.truth_(inst_31760__$1)){
var statearr_31803_31827 = state_31788__$1;
(statearr_31803_31827[(1)] = (8));

} else {
var statearr_31804_31828 = state_31788__$1;
(statearr_31804_31828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (14))){
var inst_31759 = (state_31788[(10)]);
var inst_31769 = (state_31788[(9)]);
var inst_31767 = (state_31788[(2)]);
var inst_31768 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31769__$1 = cljs.core.get.call(null,inst_31768,inst_31759);
var state_31788__$1 = (function (){var statearr_31805 = state_31788;
(statearr_31805[(8)] = inst_31767);

(statearr_31805[(9)] = inst_31769__$1);

return statearr_31805;
})();
if(cljs.core.truth_(inst_31769__$1)){
var statearr_31806_31829 = state_31788__$1;
(statearr_31806_31829[(1)] = (15));

} else {
var statearr_31807_31830 = state_31788__$1;
(statearr_31807_31830[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (16))){
var inst_31767 = (state_31788[(8)]);
var inst_31773 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31767);
var state_31788__$1 = state_31788;
var statearr_31808_31831 = state_31788__$1;
(statearr_31808_31831[(2)] = inst_31773);

(statearr_31808_31831[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (10))){
var inst_31780 = (state_31788[(2)]);
var state_31788__$1 = (function (){var statearr_31809 = state_31788;
(statearr_31809[(12)] = inst_31780);

return statearr_31809;
})();
var statearr_31810_31832 = state_31788__$1;
(statearr_31810_31832[(2)] = null);

(statearr_31810_31832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (8))){
var inst_31760 = (state_31788[(11)]);
var inst_31762 = eval(inst_31760);
var state_31788__$1 = state_31788;
var statearr_31811_31833 = state_31788__$1;
(statearr_31811_31833[(2)] = inst_31762);

(statearr_31811_31833[(1)] = (10));


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
});})(c__29401__auto__))
;
return ((function (switch__29384__auto__,c__29401__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29385__auto__ = null;
var figwheel$client$file_reloading$state_machine__29385__auto____0 = (function (){
var statearr_31812 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31812[(0)] = figwheel$client$file_reloading$state_machine__29385__auto__);

(statearr_31812[(1)] = (1));

return statearr_31812;
});
var figwheel$client$file_reloading$state_machine__29385__auto____1 = (function (state_31788){
while(true){
var ret_value__29386__auto__ = (function (){try{while(true){
var result__29387__auto__ = switch__29384__auto__.call(null,state_31788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29387__auto__;
}
break;
}
}catch (e31813){if((e31813 instanceof Object)){
var ex__29388__auto__ = e31813;
var statearr_31814_31834 = state_31788;
(statearr_31814_31834[(5)] = ex__29388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31835 = state_31788;
state_31788 = G__31835;
continue;
} else {
return ret_value__29386__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29385__auto__ = function(state_31788){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29385__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29385__auto____1.call(this,state_31788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29385__auto____0;
figwheel$client$file_reloading$state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29385__auto____1;
return figwheel$client$file_reloading$state_machine__29385__auto__;
})()
;})(switch__29384__auto__,c__29401__auto__))
})();
var state__29403__auto__ = (function (){var statearr_31815 = f__29402__auto__.call(null);
(statearr_31815[(6)] = c__29401__auto__);

return statearr_31815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29403__auto__);
});})(c__29401__auto__))
);

return c__29401__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__31837 = arguments.length;
switch (G__31837) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31839,callback){
var map__31840 = p__31839;
var map__31840__$1 = ((((!((map__31840 == null)))?(((((map__31840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31840):map__31840);
var file_msg = map__31840__$1;
var namespace = cljs.core.get.call(null,map__31840__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__31840,map__31840__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__31840,map__31840__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__31842){
var map__31843 = p__31842;
var map__31843__$1 = ((((!((map__31843 == null)))?(((((map__31843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31843):map__31843);
var file_msg = map__31843__$1;
var namespace = cljs.core.get.call(null,map__31843__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31845){
var map__31846 = p__31845;
var map__31846__$1 = ((((!((map__31846 == null)))?(((((map__31846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31846):map__31846);
var file_msg = map__31846__$1;
var namespace = cljs.core.get.call(null,map__31846__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3938__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3938__auto__){
var or__3949__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3938__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31848,callback){
var map__31849 = p__31848;
var map__31849__$1 = ((((!((map__31849 == null)))?(((((map__31849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31849):map__31849);
var file_msg = map__31849__$1;
var request_url = cljs.core.get.call(null,map__31849__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31849__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__29401__auto___31899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29401__auto___31899,out){
return (function (){
var f__29402__auto__ = (function (){var switch__29384__auto__ = ((function (c__29401__auto___31899,out){
return (function (state_31884){
var state_val_31885 = (state_31884[(1)]);
if((state_val_31885 === (1))){
var inst_31858 = cljs.core.seq.call(null,files);
var inst_31859 = cljs.core.first.call(null,inst_31858);
var inst_31860 = cljs.core.next.call(null,inst_31858);
var inst_31861 = files;
var state_31884__$1 = (function (){var statearr_31886 = state_31884;
(statearr_31886[(7)] = inst_31859);

(statearr_31886[(8)] = inst_31860);

(statearr_31886[(9)] = inst_31861);

return statearr_31886;
})();
var statearr_31887_31900 = state_31884__$1;
(statearr_31887_31900[(2)] = null);

(statearr_31887_31900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (2))){
var inst_31867 = (state_31884[(10)]);
var inst_31861 = (state_31884[(9)]);
var inst_31866 = cljs.core.seq.call(null,inst_31861);
var inst_31867__$1 = cljs.core.first.call(null,inst_31866);
var inst_31868 = cljs.core.next.call(null,inst_31866);
var inst_31869 = (inst_31867__$1 == null);
var inst_31870 = cljs.core.not.call(null,inst_31869);
var state_31884__$1 = (function (){var statearr_31888 = state_31884;
(statearr_31888[(10)] = inst_31867__$1);

(statearr_31888[(11)] = inst_31868);

return statearr_31888;
})();
if(inst_31870){
var statearr_31889_31901 = state_31884__$1;
(statearr_31889_31901[(1)] = (4));

} else {
var statearr_31890_31902 = state_31884__$1;
(statearr_31890_31902[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (3))){
var inst_31882 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31884__$1,inst_31882);
} else {
if((state_val_31885 === (4))){
var inst_31867 = (state_31884[(10)]);
var inst_31872 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31867);
var state_31884__$1 = state_31884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31884__$1,(7),inst_31872);
} else {
if((state_val_31885 === (5))){
var inst_31878 = cljs.core.async.close_BANG_.call(null,out);
var state_31884__$1 = state_31884;
var statearr_31891_31903 = state_31884__$1;
(statearr_31891_31903[(2)] = inst_31878);

(statearr_31891_31903[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (6))){
var inst_31880 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31892_31904 = state_31884__$1;
(statearr_31892_31904[(2)] = inst_31880);

(statearr_31892_31904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (7))){
var inst_31868 = (state_31884[(11)]);
var inst_31874 = (state_31884[(2)]);
var inst_31875 = cljs.core.async.put_BANG_.call(null,out,inst_31874);
var inst_31861 = inst_31868;
var state_31884__$1 = (function (){var statearr_31893 = state_31884;
(statearr_31893[(12)] = inst_31875);

(statearr_31893[(9)] = inst_31861);

return statearr_31893;
})();
var statearr_31894_31905 = state_31884__$1;
(statearr_31894_31905[(2)] = null);

(statearr_31894_31905[(1)] = (2));


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
});})(c__29401__auto___31899,out))
;
return ((function (switch__29384__auto__,c__29401__auto___31899,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29385__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29385__auto____0 = (function (){
var statearr_31895 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31895[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29385__auto__);

(statearr_31895[(1)] = (1));

return statearr_31895;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29385__auto____1 = (function (state_31884){
while(true){
var ret_value__29386__auto__ = (function (){try{while(true){
var result__29387__auto__ = switch__29384__auto__.call(null,state_31884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29387__auto__;
}
break;
}
}catch (e31896){if((e31896 instanceof Object)){
var ex__29388__auto__ = e31896;
var statearr_31897_31906 = state_31884;
(statearr_31897_31906[(5)] = ex__29388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31907 = state_31884;
state_31884 = G__31907;
continue;
} else {
return ret_value__29386__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29385__auto__ = function(state_31884){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29385__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29385__auto____1.call(this,state_31884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29385__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29385__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29385__auto__;
})()
;})(switch__29384__auto__,c__29401__auto___31899,out))
})();
var state__29403__auto__ = (function (){var statearr_31898 = f__29402__auto__.call(null);
(statearr_31898[(6)] = c__29401__auto___31899);

return statearr_31898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29403__auto__);
});})(c__29401__auto___31899,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31908,opts){
var map__31909 = p__31908;
var map__31909__$1 = ((((!((map__31909 == null)))?(((((map__31909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31909):map__31909);
var eval_body = cljs.core.get.call(null,map__31909__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31909__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3938__auto__ = eval_body;
if(cljs.core.truth_(and__3938__auto__)){
return typeof eval_body === 'string';
} else {
return and__3938__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e31911){var e = e31911;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__31912_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31912_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__31913){
var vec__31914 = p__31913;
var k = cljs.core.nth.call(null,vec__31914,(0),null);
var v = cljs.core.nth.call(null,vec__31914,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31917){
var vec__31918 = p__31917;
var k = cljs.core.nth.call(null,vec__31918,(0),null);
var v = cljs.core.nth.call(null,vec__31918,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31924,p__31925){
var map__31926 = p__31924;
var map__31926__$1 = ((((!((map__31926 == null)))?(((((map__31926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31926):map__31926);
var opts = map__31926__$1;
var before_jsload = cljs.core.get.call(null,map__31926__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31926__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31926__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31927 = p__31925;
var map__31927__$1 = ((((!((map__31927 == null)))?(((((map__31927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31927):map__31927);
var msg = map__31927__$1;
var files = cljs.core.get.call(null,map__31927__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31927__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31927__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29401__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29401__auto__,map__31926,map__31926__$1,opts,before_jsload,on_jsload,reload_dependents,map__31927,map__31927__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29402__auto__ = (function (){var switch__29384__auto__ = ((function (c__29401__auto__,map__31926,map__31926__$1,opts,before_jsload,on_jsload,reload_dependents,map__31927,map__31927__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32081){
var state_val_32082 = (state_32081[(1)]);
if((state_val_32082 === (7))){
var inst_31944 = (state_32081[(7)]);
var inst_31943 = (state_32081[(8)]);
var inst_31942 = (state_32081[(9)]);
var inst_31941 = (state_32081[(10)]);
var inst_31949 = cljs.core._nth.call(null,inst_31942,inst_31944);
var inst_31950 = figwheel.client.file_reloading.eval_body.call(null,inst_31949,opts);
var inst_31951 = (inst_31944 + (1));
var tmp32083 = inst_31943;
var tmp32084 = inst_31942;
var tmp32085 = inst_31941;
var inst_31941__$1 = tmp32085;
var inst_31942__$1 = tmp32084;
var inst_31943__$1 = tmp32083;
var inst_31944__$1 = inst_31951;
var state_32081__$1 = (function (){var statearr_32086 = state_32081;
(statearr_32086[(7)] = inst_31944__$1);

(statearr_32086[(8)] = inst_31943__$1);

(statearr_32086[(11)] = inst_31950);

(statearr_32086[(9)] = inst_31942__$1);

(statearr_32086[(10)] = inst_31941__$1);

return statearr_32086;
})();
var statearr_32087_32170 = state_32081__$1;
(statearr_32087_32170[(2)] = null);

(statearr_32087_32170[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (20))){
var inst_31984 = (state_32081[(12)]);
var inst_31992 = figwheel.client.file_reloading.sort_files.call(null,inst_31984);
var state_32081__$1 = state_32081;
var statearr_32088_32171 = state_32081__$1;
(statearr_32088_32171[(2)] = inst_31992);

(statearr_32088_32171[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (27))){
var state_32081__$1 = state_32081;
var statearr_32089_32172 = state_32081__$1;
(statearr_32089_32172[(2)] = null);

(statearr_32089_32172[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (1))){
var inst_31933 = (state_32081[(13)]);
var inst_31930 = before_jsload.call(null,files);
var inst_31931 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31932 = (function (){return ((function (inst_31933,inst_31930,inst_31931,state_val_32082,c__29401__auto__,map__31926,map__31926__$1,opts,before_jsload,on_jsload,reload_dependents,map__31927,map__31927__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31921_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31921_SHARP_);
});
;})(inst_31933,inst_31930,inst_31931,state_val_32082,c__29401__auto__,map__31926,map__31926__$1,opts,before_jsload,on_jsload,reload_dependents,map__31927,map__31927__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31933__$1 = cljs.core.filter.call(null,inst_31932,files);
var inst_31934 = cljs.core.not_empty.call(null,inst_31933__$1);
var state_32081__$1 = (function (){var statearr_32090 = state_32081;
(statearr_32090[(13)] = inst_31933__$1);

(statearr_32090[(14)] = inst_31931);

(statearr_32090[(15)] = inst_31930);

return statearr_32090;
})();
if(cljs.core.truth_(inst_31934)){
var statearr_32091_32173 = state_32081__$1;
(statearr_32091_32173[(1)] = (2));

} else {
var statearr_32092_32174 = state_32081__$1;
(statearr_32092_32174[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (24))){
var state_32081__$1 = state_32081;
var statearr_32093_32175 = state_32081__$1;
(statearr_32093_32175[(2)] = null);

(statearr_32093_32175[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (39))){
var inst_32034 = (state_32081[(16)]);
var state_32081__$1 = state_32081;
var statearr_32094_32176 = state_32081__$1;
(statearr_32094_32176[(2)] = inst_32034);

(statearr_32094_32176[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (46))){
var inst_32076 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
var statearr_32095_32177 = state_32081__$1;
(statearr_32095_32177[(2)] = inst_32076);

(statearr_32095_32177[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (4))){
var inst_31978 = (state_32081[(2)]);
var inst_31979 = cljs.core.List.EMPTY;
var inst_31980 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31979);
var inst_31981 = (function (){return ((function (inst_31978,inst_31979,inst_31980,state_val_32082,c__29401__auto__,map__31926,map__31926__$1,opts,before_jsload,on_jsload,reload_dependents,map__31927,map__31927__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31922_SHARP_){
var and__3938__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31922_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31922_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__31922_SHARP_))));
} else {
return and__3938__auto__;
}
});
;})(inst_31978,inst_31979,inst_31980,state_val_32082,c__29401__auto__,map__31926,map__31926__$1,opts,before_jsload,on_jsload,reload_dependents,map__31927,map__31927__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31982 = cljs.core.filter.call(null,inst_31981,files);
var inst_31983 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31984 = cljs.core.concat.call(null,inst_31982,inst_31983);
var state_32081__$1 = (function (){var statearr_32096 = state_32081;
(statearr_32096[(17)] = inst_31980);

(statearr_32096[(12)] = inst_31984);

(statearr_32096[(18)] = inst_31978);

return statearr_32096;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32097_32178 = state_32081__$1;
(statearr_32097_32178[(1)] = (16));

} else {
var statearr_32098_32179 = state_32081__$1;
(statearr_32098_32179[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (15))){
var inst_31968 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
var statearr_32099_32180 = state_32081__$1;
(statearr_32099_32180[(2)] = inst_31968);

(statearr_32099_32180[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (21))){
var inst_31994 = (state_32081[(19)]);
var inst_31994__$1 = (state_32081[(2)]);
var inst_31995 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31994__$1);
var state_32081__$1 = (function (){var statearr_32100 = state_32081;
(statearr_32100[(19)] = inst_31994__$1);

return statearr_32100;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32081__$1,(22),inst_31995);
} else {
if((state_val_32082 === (31))){
var inst_32079 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32081__$1,inst_32079);
} else {
if((state_val_32082 === (32))){
var inst_32034 = (state_32081[(16)]);
var inst_32039 = inst_32034.cljs$lang$protocol_mask$partition0$;
var inst_32040 = (inst_32039 & (64));
var inst_32041 = inst_32034.cljs$core$ISeq$;
var inst_32042 = (cljs.core.PROTOCOL_SENTINEL === inst_32041);
var inst_32043 = ((inst_32040) || (inst_32042));
var state_32081__$1 = state_32081;
if(cljs.core.truth_(inst_32043)){
var statearr_32101_32181 = state_32081__$1;
(statearr_32101_32181[(1)] = (35));

} else {
var statearr_32102_32182 = state_32081__$1;
(statearr_32102_32182[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (40))){
var inst_32056 = (state_32081[(20)]);
var inst_32055 = (state_32081[(2)]);
var inst_32056__$1 = cljs.core.get.call(null,inst_32055,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32057 = cljs.core.get.call(null,inst_32055,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32058 = cljs.core.not_empty.call(null,inst_32056__$1);
var state_32081__$1 = (function (){var statearr_32103 = state_32081;
(statearr_32103[(20)] = inst_32056__$1);

(statearr_32103[(21)] = inst_32057);

return statearr_32103;
})();
if(cljs.core.truth_(inst_32058)){
var statearr_32104_32183 = state_32081__$1;
(statearr_32104_32183[(1)] = (41));

} else {
var statearr_32105_32184 = state_32081__$1;
(statearr_32105_32184[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (33))){
var state_32081__$1 = state_32081;
var statearr_32106_32185 = state_32081__$1;
(statearr_32106_32185[(2)] = false);

(statearr_32106_32185[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (13))){
var inst_31954 = (state_32081[(22)]);
var inst_31958 = cljs.core.chunk_first.call(null,inst_31954);
var inst_31959 = cljs.core.chunk_rest.call(null,inst_31954);
var inst_31960 = cljs.core.count.call(null,inst_31958);
var inst_31941 = inst_31959;
var inst_31942 = inst_31958;
var inst_31943 = inst_31960;
var inst_31944 = (0);
var state_32081__$1 = (function (){var statearr_32107 = state_32081;
(statearr_32107[(7)] = inst_31944);

(statearr_32107[(8)] = inst_31943);

(statearr_32107[(9)] = inst_31942);

(statearr_32107[(10)] = inst_31941);

return statearr_32107;
})();
var statearr_32108_32186 = state_32081__$1;
(statearr_32108_32186[(2)] = null);

(statearr_32108_32186[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (22))){
var inst_31997 = (state_32081[(23)]);
var inst_32002 = (state_32081[(24)]);
var inst_31998 = (state_32081[(25)]);
var inst_31994 = (state_32081[(19)]);
var inst_31997__$1 = (state_32081[(2)]);
var inst_31998__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31997__$1);
var inst_31999 = (function (){var all_files = inst_31994;
var res_SINGLEQUOTE_ = inst_31997__$1;
var res = inst_31998__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31997,inst_32002,inst_31998,inst_31994,inst_31997__$1,inst_31998__$1,state_val_32082,c__29401__auto__,map__31926,map__31926__$1,opts,before_jsload,on_jsload,reload_dependents,map__31927,map__31927__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31923_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31923_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31997,inst_32002,inst_31998,inst_31994,inst_31997__$1,inst_31998__$1,state_val_32082,c__29401__auto__,map__31926,map__31926__$1,opts,before_jsload,on_jsload,reload_dependents,map__31927,map__31927__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32000 = cljs.core.filter.call(null,inst_31999,inst_31997__$1);
var inst_32001 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32002__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32001);
var inst_32003 = cljs.core.not_empty.call(null,inst_32002__$1);
var state_32081__$1 = (function (){var statearr_32109 = state_32081;
(statearr_32109[(23)] = inst_31997__$1);

(statearr_32109[(26)] = inst_32000);

(statearr_32109[(24)] = inst_32002__$1);

(statearr_32109[(25)] = inst_31998__$1);

return statearr_32109;
})();
if(cljs.core.truth_(inst_32003)){
var statearr_32110_32187 = state_32081__$1;
(statearr_32110_32187[(1)] = (23));

} else {
var statearr_32111_32188 = state_32081__$1;
(statearr_32111_32188[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (36))){
var state_32081__$1 = state_32081;
var statearr_32112_32189 = state_32081__$1;
(statearr_32112_32189[(2)] = false);

(statearr_32112_32189[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (41))){
var inst_32056 = (state_32081[(20)]);
var inst_32060 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32061 = cljs.core.map.call(null,inst_32060,inst_32056);
var inst_32062 = cljs.core.pr_str.call(null,inst_32061);
var inst_32063 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32062)].join('');
var inst_32064 = figwheel.client.utils.log.call(null,inst_32063);
var state_32081__$1 = state_32081;
var statearr_32113_32190 = state_32081__$1;
(statearr_32113_32190[(2)] = inst_32064);

(statearr_32113_32190[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (43))){
var inst_32057 = (state_32081[(21)]);
var inst_32067 = (state_32081[(2)]);
var inst_32068 = cljs.core.not_empty.call(null,inst_32057);
var state_32081__$1 = (function (){var statearr_32114 = state_32081;
(statearr_32114[(27)] = inst_32067);

return statearr_32114;
})();
if(cljs.core.truth_(inst_32068)){
var statearr_32115_32191 = state_32081__$1;
(statearr_32115_32191[(1)] = (44));

} else {
var statearr_32116_32192 = state_32081__$1;
(statearr_32116_32192[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (29))){
var inst_31997 = (state_32081[(23)]);
var inst_32000 = (state_32081[(26)]);
var inst_32034 = (state_32081[(16)]);
var inst_32002 = (state_32081[(24)]);
var inst_31998 = (state_32081[(25)]);
var inst_31994 = (state_32081[(19)]);
var inst_32030 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32033 = (function (){var all_files = inst_31994;
var res_SINGLEQUOTE_ = inst_31997;
var res = inst_31998;
var files_not_loaded = inst_32000;
var dependencies_that_loaded = inst_32002;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31997,inst_32000,inst_32034,inst_32002,inst_31998,inst_31994,inst_32030,state_val_32082,c__29401__auto__,map__31926,map__31926__$1,opts,before_jsload,on_jsload,reload_dependents,map__31927,map__31927__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32032){
var map__32117 = p__32032;
var map__32117__$1 = ((((!((map__32117 == null)))?(((((map__32117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32117):map__32117);
var namespace = cljs.core.get.call(null,map__32117__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31997,inst_32000,inst_32034,inst_32002,inst_31998,inst_31994,inst_32030,state_val_32082,c__29401__auto__,map__31926,map__31926__$1,opts,before_jsload,on_jsload,reload_dependents,map__31927,map__31927__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32034__$1 = cljs.core.group_by.call(null,inst_32033,inst_32000);
var inst_32036 = (inst_32034__$1 == null);
var inst_32037 = cljs.core.not.call(null,inst_32036);
var state_32081__$1 = (function (){var statearr_32119 = state_32081;
(statearr_32119[(16)] = inst_32034__$1);

(statearr_32119[(28)] = inst_32030);

return statearr_32119;
})();
if(inst_32037){
var statearr_32120_32193 = state_32081__$1;
(statearr_32120_32193[(1)] = (32));

} else {
var statearr_32121_32194 = state_32081__$1;
(statearr_32121_32194[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (44))){
var inst_32057 = (state_32081[(21)]);
var inst_32070 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32057);
var inst_32071 = cljs.core.pr_str.call(null,inst_32070);
var inst_32072 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32071)].join('');
var inst_32073 = figwheel.client.utils.log.call(null,inst_32072);
var state_32081__$1 = state_32081;
var statearr_32122_32195 = state_32081__$1;
(statearr_32122_32195[(2)] = inst_32073);

(statearr_32122_32195[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (6))){
var inst_31975 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
var statearr_32123_32196 = state_32081__$1;
(statearr_32123_32196[(2)] = inst_31975);

(statearr_32123_32196[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (28))){
var inst_32000 = (state_32081[(26)]);
var inst_32027 = (state_32081[(2)]);
var inst_32028 = cljs.core.not_empty.call(null,inst_32000);
var state_32081__$1 = (function (){var statearr_32124 = state_32081;
(statearr_32124[(29)] = inst_32027);

return statearr_32124;
})();
if(cljs.core.truth_(inst_32028)){
var statearr_32125_32197 = state_32081__$1;
(statearr_32125_32197[(1)] = (29));

} else {
var statearr_32126_32198 = state_32081__$1;
(statearr_32126_32198[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (25))){
var inst_31998 = (state_32081[(25)]);
var inst_32014 = (state_32081[(2)]);
var inst_32015 = cljs.core.not_empty.call(null,inst_31998);
var state_32081__$1 = (function (){var statearr_32127 = state_32081;
(statearr_32127[(30)] = inst_32014);

return statearr_32127;
})();
if(cljs.core.truth_(inst_32015)){
var statearr_32128_32199 = state_32081__$1;
(statearr_32128_32199[(1)] = (26));

} else {
var statearr_32129_32200 = state_32081__$1;
(statearr_32129_32200[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (34))){
var inst_32050 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
if(cljs.core.truth_(inst_32050)){
var statearr_32130_32201 = state_32081__$1;
(statearr_32130_32201[(1)] = (38));

} else {
var statearr_32131_32202 = state_32081__$1;
(statearr_32131_32202[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (17))){
var state_32081__$1 = state_32081;
var statearr_32132_32203 = state_32081__$1;
(statearr_32132_32203[(2)] = recompile_dependents);

(statearr_32132_32203[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (3))){
var state_32081__$1 = state_32081;
var statearr_32133_32204 = state_32081__$1;
(statearr_32133_32204[(2)] = null);

(statearr_32133_32204[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (12))){
var inst_31971 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
var statearr_32134_32205 = state_32081__$1;
(statearr_32134_32205[(2)] = inst_31971);

(statearr_32134_32205[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (2))){
var inst_31933 = (state_32081[(13)]);
var inst_31940 = cljs.core.seq.call(null,inst_31933);
var inst_31941 = inst_31940;
var inst_31942 = null;
var inst_31943 = (0);
var inst_31944 = (0);
var state_32081__$1 = (function (){var statearr_32135 = state_32081;
(statearr_32135[(7)] = inst_31944);

(statearr_32135[(8)] = inst_31943);

(statearr_32135[(9)] = inst_31942);

(statearr_32135[(10)] = inst_31941);

return statearr_32135;
})();
var statearr_32136_32206 = state_32081__$1;
(statearr_32136_32206[(2)] = null);

(statearr_32136_32206[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (23))){
var inst_31997 = (state_32081[(23)]);
var inst_32000 = (state_32081[(26)]);
var inst_32002 = (state_32081[(24)]);
var inst_31998 = (state_32081[(25)]);
var inst_31994 = (state_32081[(19)]);
var inst_32005 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32007 = (function (){var all_files = inst_31994;
var res_SINGLEQUOTE_ = inst_31997;
var res = inst_31998;
var files_not_loaded = inst_32000;
var dependencies_that_loaded = inst_32002;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31997,inst_32000,inst_32002,inst_31998,inst_31994,inst_32005,state_val_32082,c__29401__auto__,map__31926,map__31926__$1,opts,before_jsload,on_jsload,reload_dependents,map__31927,map__31927__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32006){
var map__32137 = p__32006;
var map__32137__$1 = ((((!((map__32137 == null)))?(((((map__32137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32137):map__32137);
var request_url = cljs.core.get.call(null,map__32137__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31997,inst_32000,inst_32002,inst_31998,inst_31994,inst_32005,state_val_32082,c__29401__auto__,map__31926,map__31926__$1,opts,before_jsload,on_jsload,reload_dependents,map__31927,map__31927__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32008 = cljs.core.reverse.call(null,inst_32002);
var inst_32009 = cljs.core.map.call(null,inst_32007,inst_32008);
var inst_32010 = cljs.core.pr_str.call(null,inst_32009);
var inst_32011 = figwheel.client.utils.log.call(null,inst_32010);
var state_32081__$1 = (function (){var statearr_32139 = state_32081;
(statearr_32139[(31)] = inst_32005);

return statearr_32139;
})();
var statearr_32140_32207 = state_32081__$1;
(statearr_32140_32207[(2)] = inst_32011);

(statearr_32140_32207[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (35))){
var state_32081__$1 = state_32081;
var statearr_32141_32208 = state_32081__$1;
(statearr_32141_32208[(2)] = true);

(statearr_32141_32208[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (19))){
var inst_31984 = (state_32081[(12)]);
var inst_31990 = figwheel.client.file_reloading.expand_files.call(null,inst_31984);
var state_32081__$1 = state_32081;
var statearr_32142_32209 = state_32081__$1;
(statearr_32142_32209[(2)] = inst_31990);

(statearr_32142_32209[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (11))){
var state_32081__$1 = state_32081;
var statearr_32143_32210 = state_32081__$1;
(statearr_32143_32210[(2)] = null);

(statearr_32143_32210[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (9))){
var inst_31973 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
var statearr_32144_32211 = state_32081__$1;
(statearr_32144_32211[(2)] = inst_31973);

(statearr_32144_32211[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (5))){
var inst_31944 = (state_32081[(7)]);
var inst_31943 = (state_32081[(8)]);
var inst_31946 = (inst_31944 < inst_31943);
var inst_31947 = inst_31946;
var state_32081__$1 = state_32081;
if(cljs.core.truth_(inst_31947)){
var statearr_32145_32212 = state_32081__$1;
(statearr_32145_32212[(1)] = (7));

} else {
var statearr_32146_32213 = state_32081__$1;
(statearr_32146_32213[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (14))){
var inst_31954 = (state_32081[(22)]);
var inst_31963 = cljs.core.first.call(null,inst_31954);
var inst_31964 = figwheel.client.file_reloading.eval_body.call(null,inst_31963,opts);
var inst_31965 = cljs.core.next.call(null,inst_31954);
var inst_31941 = inst_31965;
var inst_31942 = null;
var inst_31943 = (0);
var inst_31944 = (0);
var state_32081__$1 = (function (){var statearr_32147 = state_32081;
(statearr_32147[(7)] = inst_31944);

(statearr_32147[(8)] = inst_31943);

(statearr_32147[(32)] = inst_31964);

(statearr_32147[(9)] = inst_31942);

(statearr_32147[(10)] = inst_31941);

return statearr_32147;
})();
var statearr_32148_32214 = state_32081__$1;
(statearr_32148_32214[(2)] = null);

(statearr_32148_32214[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (45))){
var state_32081__$1 = state_32081;
var statearr_32149_32215 = state_32081__$1;
(statearr_32149_32215[(2)] = null);

(statearr_32149_32215[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (26))){
var inst_31997 = (state_32081[(23)]);
var inst_32000 = (state_32081[(26)]);
var inst_32002 = (state_32081[(24)]);
var inst_31998 = (state_32081[(25)]);
var inst_31994 = (state_32081[(19)]);
var inst_32017 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32019 = (function (){var all_files = inst_31994;
var res_SINGLEQUOTE_ = inst_31997;
var res = inst_31998;
var files_not_loaded = inst_32000;
var dependencies_that_loaded = inst_32002;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31997,inst_32000,inst_32002,inst_31998,inst_31994,inst_32017,state_val_32082,c__29401__auto__,map__31926,map__31926__$1,opts,before_jsload,on_jsload,reload_dependents,map__31927,map__31927__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32018){
var map__32150 = p__32018;
var map__32150__$1 = ((((!((map__32150 == null)))?(((((map__32150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32150):map__32150);
var namespace = cljs.core.get.call(null,map__32150__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32150__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31997,inst_32000,inst_32002,inst_31998,inst_31994,inst_32017,state_val_32082,c__29401__auto__,map__31926,map__31926__$1,opts,before_jsload,on_jsload,reload_dependents,map__31927,map__31927__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32020 = cljs.core.map.call(null,inst_32019,inst_31998);
var inst_32021 = cljs.core.pr_str.call(null,inst_32020);
var inst_32022 = figwheel.client.utils.log.call(null,inst_32021);
var inst_32023 = (function (){var all_files = inst_31994;
var res_SINGLEQUOTE_ = inst_31997;
var res = inst_31998;
var files_not_loaded = inst_32000;
var dependencies_that_loaded = inst_32002;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31997,inst_32000,inst_32002,inst_31998,inst_31994,inst_32017,inst_32019,inst_32020,inst_32021,inst_32022,state_val_32082,c__29401__auto__,map__31926,map__31926__$1,opts,before_jsload,on_jsload,reload_dependents,map__31927,map__31927__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31997,inst_32000,inst_32002,inst_31998,inst_31994,inst_32017,inst_32019,inst_32020,inst_32021,inst_32022,state_val_32082,c__29401__auto__,map__31926,map__31926__$1,opts,before_jsload,on_jsload,reload_dependents,map__31927,map__31927__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32024 = setTimeout(inst_32023,(10));
var state_32081__$1 = (function (){var statearr_32152 = state_32081;
(statearr_32152[(33)] = inst_32022);

(statearr_32152[(34)] = inst_32017);

return statearr_32152;
})();
var statearr_32153_32216 = state_32081__$1;
(statearr_32153_32216[(2)] = inst_32024);

(statearr_32153_32216[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (16))){
var state_32081__$1 = state_32081;
var statearr_32154_32217 = state_32081__$1;
(statearr_32154_32217[(2)] = reload_dependents);

(statearr_32154_32217[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (38))){
var inst_32034 = (state_32081[(16)]);
var inst_32052 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32034);
var state_32081__$1 = state_32081;
var statearr_32155_32218 = state_32081__$1;
(statearr_32155_32218[(2)] = inst_32052);

(statearr_32155_32218[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (30))){
var state_32081__$1 = state_32081;
var statearr_32156_32219 = state_32081__$1;
(statearr_32156_32219[(2)] = null);

(statearr_32156_32219[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (10))){
var inst_31954 = (state_32081[(22)]);
var inst_31956 = cljs.core.chunked_seq_QMARK_.call(null,inst_31954);
var state_32081__$1 = state_32081;
if(inst_31956){
var statearr_32157_32220 = state_32081__$1;
(statearr_32157_32220[(1)] = (13));

} else {
var statearr_32158_32221 = state_32081__$1;
(statearr_32158_32221[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (18))){
var inst_31988 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
if(cljs.core.truth_(inst_31988)){
var statearr_32159_32222 = state_32081__$1;
(statearr_32159_32222[(1)] = (19));

} else {
var statearr_32160_32223 = state_32081__$1;
(statearr_32160_32223[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (42))){
var state_32081__$1 = state_32081;
var statearr_32161_32224 = state_32081__$1;
(statearr_32161_32224[(2)] = null);

(statearr_32161_32224[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (37))){
var inst_32047 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
var statearr_32162_32225 = state_32081__$1;
(statearr_32162_32225[(2)] = inst_32047);

(statearr_32162_32225[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (8))){
var inst_31954 = (state_32081[(22)]);
var inst_31941 = (state_32081[(10)]);
var inst_31954__$1 = cljs.core.seq.call(null,inst_31941);
var state_32081__$1 = (function (){var statearr_32163 = state_32081;
(statearr_32163[(22)] = inst_31954__$1);

return statearr_32163;
})();
if(inst_31954__$1){
var statearr_32164_32226 = state_32081__$1;
(statearr_32164_32226[(1)] = (10));

} else {
var statearr_32165_32227 = state_32081__$1;
(statearr_32165_32227[(1)] = (11));

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
});})(c__29401__auto__,map__31926,map__31926__$1,opts,before_jsload,on_jsload,reload_dependents,map__31927,map__31927__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29384__auto__,c__29401__auto__,map__31926,map__31926__$1,opts,before_jsload,on_jsload,reload_dependents,map__31927,map__31927__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29385__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29385__auto____0 = (function (){
var statearr_32166 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32166[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29385__auto__);

(statearr_32166[(1)] = (1));

return statearr_32166;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29385__auto____1 = (function (state_32081){
while(true){
var ret_value__29386__auto__ = (function (){try{while(true){
var result__29387__auto__ = switch__29384__auto__.call(null,state_32081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29387__auto__;
}
break;
}
}catch (e32167){if((e32167 instanceof Object)){
var ex__29388__auto__ = e32167;
var statearr_32168_32228 = state_32081;
(statearr_32168_32228[(5)] = ex__29388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32229 = state_32081;
state_32081 = G__32229;
continue;
} else {
return ret_value__29386__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29385__auto__ = function(state_32081){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29385__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29385__auto____1.call(this,state_32081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29385__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29385__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29385__auto__;
})()
;})(switch__29384__auto__,c__29401__auto__,map__31926,map__31926__$1,opts,before_jsload,on_jsload,reload_dependents,map__31927,map__31927__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29403__auto__ = (function (){var statearr_32169 = f__29402__auto__.call(null);
(statearr_32169[(6)] = c__29401__auto__);

return statearr_32169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29403__auto__);
});})(c__29401__auto__,map__31926,map__31926__$1,opts,before_jsload,on_jsload,reload_dependents,map__31927,map__31927__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29401__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32232,link){
var map__32233 = p__32232;
var map__32233__$1 = ((((!((map__32233 == null)))?(((((map__32233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32233):map__32233);
var file = cljs.core.get.call(null,map__32233__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__32233,map__32233__$1,file){
return (function (p1__32230_SHARP_,p2__32231_SHARP_){
if(cljs.core._EQ_.call(null,p1__32230_SHARP_,p2__32231_SHARP_)){
return p1__32230_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__32233,map__32233__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32236){
var map__32237 = p__32236;
var map__32237__$1 = ((((!((map__32237 == null)))?(((((map__32237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32237):map__32237);
var match_length = cljs.core.get.call(null,map__32237__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32237__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32235_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32235_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32239_SHARP_,p2__32240_SHARP_){
return cljs.core.assoc.call(null,p1__32239_SHARP_,cljs.core.get.call(null,p2__32240_SHARP_,key),p2__32240_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_32241 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_32241);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_32241);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32242,p__32243){
var map__32244 = p__32242;
var map__32244__$1 = ((((!((map__32244 == null)))?(((((map__32244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32244):map__32244);
var on_cssload = cljs.core.get.call(null,map__32244__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__32245 = p__32243;
var map__32245__$1 = ((((!((map__32245 == null)))?(((((map__32245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32245):map__32245);
var files_msg = map__32245__$1;
var files = cljs.core.get.call(null,map__32245__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1533186709625
