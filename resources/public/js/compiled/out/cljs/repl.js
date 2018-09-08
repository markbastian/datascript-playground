// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33046){
var map__33047 = p__33046;
var map__33047__$1 = ((((!((map__33047 == null)))?(((((map__33047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33047):map__33047);
var m = map__33047__$1;
var n = cljs.core.get.call(null,map__33047__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__33047__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33049_33071 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33050_33072 = null;
var count__33051_33073 = (0);
var i__33052_33074 = (0);
while(true){
if((i__33052_33074 < count__33051_33073)){
var f_33075 = cljs.core._nth.call(null,chunk__33050_33072,i__33052_33074);
cljs.core.println.call(null,"  ",f_33075);


var G__33076 = seq__33049_33071;
var G__33077 = chunk__33050_33072;
var G__33078 = count__33051_33073;
var G__33079 = (i__33052_33074 + (1));
seq__33049_33071 = G__33076;
chunk__33050_33072 = G__33077;
count__33051_33073 = G__33078;
i__33052_33074 = G__33079;
continue;
} else {
var temp__5457__auto___33080 = cljs.core.seq.call(null,seq__33049_33071);
if(temp__5457__auto___33080){
var seq__33049_33081__$1 = temp__5457__auto___33080;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33049_33081__$1)){
var c__4351__auto___33082 = cljs.core.chunk_first.call(null,seq__33049_33081__$1);
var G__33083 = cljs.core.chunk_rest.call(null,seq__33049_33081__$1);
var G__33084 = c__4351__auto___33082;
var G__33085 = cljs.core.count.call(null,c__4351__auto___33082);
var G__33086 = (0);
seq__33049_33071 = G__33083;
chunk__33050_33072 = G__33084;
count__33051_33073 = G__33085;
i__33052_33074 = G__33086;
continue;
} else {
var f_33087 = cljs.core.first.call(null,seq__33049_33081__$1);
cljs.core.println.call(null,"  ",f_33087);


var G__33088 = cljs.core.next.call(null,seq__33049_33081__$1);
var G__33089 = null;
var G__33090 = (0);
var G__33091 = (0);
seq__33049_33071 = G__33088;
chunk__33050_33072 = G__33089;
count__33051_33073 = G__33090;
i__33052_33074 = G__33091;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33092 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33092);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33092)))?cljs.core.second.call(null,arglists_33092):arglists_33092));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33053_33093 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33054_33094 = null;
var count__33055_33095 = (0);
var i__33056_33096 = (0);
while(true){
if((i__33056_33096 < count__33055_33095)){
var vec__33057_33097 = cljs.core._nth.call(null,chunk__33054_33094,i__33056_33096);
var name_33098 = cljs.core.nth.call(null,vec__33057_33097,(0),null);
var map__33060_33099 = cljs.core.nth.call(null,vec__33057_33097,(1),null);
var map__33060_33100__$1 = ((((!((map__33060_33099 == null)))?(((((map__33060_33099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33060_33099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33060_33099):map__33060_33099);
var doc_33101 = cljs.core.get.call(null,map__33060_33100__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33102 = cljs.core.get.call(null,map__33060_33100__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33098);

cljs.core.println.call(null," ",arglists_33102);

if(cljs.core.truth_(doc_33101)){
cljs.core.println.call(null," ",doc_33101);
} else {
}


var G__33103 = seq__33053_33093;
var G__33104 = chunk__33054_33094;
var G__33105 = count__33055_33095;
var G__33106 = (i__33056_33096 + (1));
seq__33053_33093 = G__33103;
chunk__33054_33094 = G__33104;
count__33055_33095 = G__33105;
i__33056_33096 = G__33106;
continue;
} else {
var temp__5457__auto___33107 = cljs.core.seq.call(null,seq__33053_33093);
if(temp__5457__auto___33107){
var seq__33053_33108__$1 = temp__5457__auto___33107;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33053_33108__$1)){
var c__4351__auto___33109 = cljs.core.chunk_first.call(null,seq__33053_33108__$1);
var G__33110 = cljs.core.chunk_rest.call(null,seq__33053_33108__$1);
var G__33111 = c__4351__auto___33109;
var G__33112 = cljs.core.count.call(null,c__4351__auto___33109);
var G__33113 = (0);
seq__33053_33093 = G__33110;
chunk__33054_33094 = G__33111;
count__33055_33095 = G__33112;
i__33056_33096 = G__33113;
continue;
} else {
var vec__33062_33114 = cljs.core.first.call(null,seq__33053_33108__$1);
var name_33115 = cljs.core.nth.call(null,vec__33062_33114,(0),null);
var map__33065_33116 = cljs.core.nth.call(null,vec__33062_33114,(1),null);
var map__33065_33117__$1 = ((((!((map__33065_33116 == null)))?(((((map__33065_33116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33065_33116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33065_33116):map__33065_33116);
var doc_33118 = cljs.core.get.call(null,map__33065_33117__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33119 = cljs.core.get.call(null,map__33065_33117__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33115);

cljs.core.println.call(null," ",arglists_33119);

if(cljs.core.truth_(doc_33118)){
cljs.core.println.call(null," ",doc_33118);
} else {
}


var G__33120 = cljs.core.next.call(null,seq__33053_33108__$1);
var G__33121 = null;
var G__33122 = (0);
var G__33123 = (0);
seq__33053_33093 = G__33120;
chunk__33054_33094 = G__33121;
count__33055_33095 = G__33122;
i__33056_33096 = G__33123;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__33067 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33068 = null;
var count__33069 = (0);
var i__33070 = (0);
while(true){
if((i__33070 < count__33069)){
var role = cljs.core._nth.call(null,chunk__33068,i__33070);
var temp__5457__auto___33124__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___33124__$1)){
var spec_33125 = temp__5457__auto___33124__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33125));
} else {
}


var G__33126 = seq__33067;
var G__33127 = chunk__33068;
var G__33128 = count__33069;
var G__33129 = (i__33070 + (1));
seq__33067 = G__33126;
chunk__33068 = G__33127;
count__33069 = G__33128;
i__33070 = G__33129;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__33067);
if(temp__5457__auto____$1){
var seq__33067__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33067__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__33067__$1);
var G__33130 = cljs.core.chunk_rest.call(null,seq__33067__$1);
var G__33131 = c__4351__auto__;
var G__33132 = cljs.core.count.call(null,c__4351__auto__);
var G__33133 = (0);
seq__33067 = G__33130;
chunk__33068 = G__33131;
count__33069 = G__33132;
i__33070 = G__33133;
continue;
} else {
var role = cljs.core.first.call(null,seq__33067__$1);
var temp__5457__auto___33134__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___33134__$2)){
var spec_33135 = temp__5457__auto___33134__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33135));
} else {
}


var G__33136 = cljs.core.next.call(null,seq__33067__$1);
var G__33137 = null;
var G__33138 = (0);
var G__33139 = (0);
seq__33067 = G__33136;
chunk__33068 = G__33137;
count__33069 = G__33138;
i__33070 = G__33139;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1533186710534
