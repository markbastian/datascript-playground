// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29654 = arguments.length;
switch (G__29654) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29655 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29655 = (function (f,blockable,meta29656){
this.f = f;
this.blockable = blockable;
this.meta29656 = meta29656;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29657,meta29656__$1){
var self__ = this;
var _29657__$1 = this;
return (new cljs.core.async.t_cljs$core$async29655(self__.f,self__.blockable,meta29656__$1));
});

cljs.core.async.t_cljs$core$async29655.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29657){
var self__ = this;
var _29657__$1 = this;
return self__.meta29656;
});

cljs.core.async.t_cljs$core$async29655.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29655.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29655.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29655.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29655.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29656","meta29656",494525919,null)], null);
});

cljs.core.async.t_cljs$core$async29655.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29655.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29655";

cljs.core.async.t_cljs$core$async29655.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async29655");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29655.
 */
cljs.core.async.__GT_t_cljs$core$async29655 = (function cljs$core$async$__GT_t_cljs$core$async29655(f__$1,blockable__$1,meta29656){
return (new cljs.core.async.t_cljs$core$async29655(f__$1,blockable__$1,meta29656));
});

}

return (new cljs.core.async.t_cljs$core$async29655(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29661 = arguments.length;
switch (G__29661) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29664 = arguments.length;
switch (G__29664) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29667 = arguments.length;
switch (G__29667) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29669 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29669);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29669,ret){
return (function (){
return fn1.call(null,val_29669);
});})(val_29669,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29671 = arguments.length;
switch (G__29671) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___29673 = n;
var x_29674 = (0);
while(true){
if((x_29674 < n__4408__auto___29673)){
(a[x_29674] = (0));

var G__29675 = (x_29674 + (1));
x_29674 = G__29675;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29676 = (i + (1));
i = G__29676;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29677 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29677 = (function (flag,meta29678){
this.flag = flag;
this.meta29678 = meta29678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29679,meta29678__$1){
var self__ = this;
var _29679__$1 = this;
return (new cljs.core.async.t_cljs$core$async29677(self__.flag,meta29678__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29677.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29679){
var self__ = this;
var _29679__$1 = this;
return self__.meta29678;
});})(flag))
;

cljs.core.async.t_cljs$core$async29677.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29677.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29677.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29677.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29677.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29678","meta29678",-1208443138,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29677.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29677";

cljs.core.async.t_cljs$core$async29677.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async29677");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29677.
 */
cljs.core.async.__GT_t_cljs$core$async29677 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29677(flag__$1,meta29678){
return (new cljs.core.async.t_cljs$core$async29677(flag__$1,meta29678));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29677(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29680 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29680 = (function (flag,cb,meta29681){
this.flag = flag;
this.cb = cb;
this.meta29681 = meta29681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29682,meta29681__$1){
var self__ = this;
var _29682__$1 = this;
return (new cljs.core.async.t_cljs$core$async29680(self__.flag,self__.cb,meta29681__$1));
});

cljs.core.async.t_cljs$core$async29680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29682){
var self__ = this;
var _29682__$1 = this;
return self__.meta29681;
});

cljs.core.async.t_cljs$core$async29680.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29680.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29680.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29680.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29680.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29681","meta29681",515960359,null)], null);
});

cljs.core.async.t_cljs$core$async29680.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29680";

cljs.core.async.t_cljs$core$async29680.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async29680");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29680.
 */
cljs.core.async.__GT_t_cljs$core$async29680 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29680(flag__$1,cb__$1,meta29681){
return (new cljs.core.async.t_cljs$core$async29680(flag__$1,cb__$1,meta29681));
});

}

return (new cljs.core.async.t_cljs$core$async29680(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29683_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29683_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29684_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29684_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29685 = (i + (1));
i = G__29685;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___29691 = arguments.length;
var i__4532__auto___29692 = (0);
while(true){
if((i__4532__auto___29692 < len__4531__auto___29691)){
args__4534__auto__.push((arguments[i__4532__auto___29692]));

var G__29693 = (i__4532__auto___29692 + (1));
i__4532__auto___29692 = G__29693;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29688){
var map__29689 = p__29688;
var map__29689__$1 = ((((!((map__29689 == null)))?(((((map__29689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29689):map__29689);
var opts = map__29689__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29686){
var G__29687 = cljs.core.first.call(null,seq29686);
var seq29686__$1 = cljs.core.next.call(null,seq29686);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29687,seq29686__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29695 = arguments.length;
switch (G__29695) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29401__auto___29741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29401__auto___29741){
return (function (){
var f__29402__auto__ = (function (){var switch__29384__auto__ = ((function (c__29401__auto___29741){
return (function (state_29719){
var state_val_29720 = (state_29719[(1)]);
if((state_val_29720 === (7))){
var inst_29715 = (state_29719[(2)]);
var state_29719__$1 = state_29719;
var statearr_29721_29742 = state_29719__$1;
(statearr_29721_29742[(2)] = inst_29715);

(statearr_29721_29742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (1))){
var state_29719__$1 = state_29719;
var statearr_29722_29743 = state_29719__$1;
(statearr_29722_29743[(2)] = null);

(statearr_29722_29743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (4))){
var inst_29698 = (state_29719[(7)]);
var inst_29698__$1 = (state_29719[(2)]);
var inst_29699 = (inst_29698__$1 == null);
var state_29719__$1 = (function (){var statearr_29723 = state_29719;
(statearr_29723[(7)] = inst_29698__$1);

return statearr_29723;
})();
if(cljs.core.truth_(inst_29699)){
var statearr_29724_29744 = state_29719__$1;
(statearr_29724_29744[(1)] = (5));

} else {
var statearr_29725_29745 = state_29719__$1;
(statearr_29725_29745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (13))){
var state_29719__$1 = state_29719;
var statearr_29726_29746 = state_29719__$1;
(statearr_29726_29746[(2)] = null);

(statearr_29726_29746[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (6))){
var inst_29698 = (state_29719[(7)]);
var state_29719__$1 = state_29719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29719__$1,(11),to,inst_29698);
} else {
if((state_val_29720 === (3))){
var inst_29717 = (state_29719[(2)]);
var state_29719__$1 = state_29719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29719__$1,inst_29717);
} else {
if((state_val_29720 === (12))){
var state_29719__$1 = state_29719;
var statearr_29727_29747 = state_29719__$1;
(statearr_29727_29747[(2)] = null);

(statearr_29727_29747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (2))){
var state_29719__$1 = state_29719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29719__$1,(4),from);
} else {
if((state_val_29720 === (11))){
var inst_29708 = (state_29719[(2)]);
var state_29719__$1 = state_29719;
if(cljs.core.truth_(inst_29708)){
var statearr_29728_29748 = state_29719__$1;
(statearr_29728_29748[(1)] = (12));

} else {
var statearr_29729_29749 = state_29719__$1;
(statearr_29729_29749[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (9))){
var state_29719__$1 = state_29719;
var statearr_29730_29750 = state_29719__$1;
(statearr_29730_29750[(2)] = null);

(statearr_29730_29750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (5))){
var state_29719__$1 = state_29719;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29731_29751 = state_29719__$1;
(statearr_29731_29751[(1)] = (8));

} else {
var statearr_29732_29752 = state_29719__$1;
(statearr_29732_29752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (14))){
var inst_29713 = (state_29719[(2)]);
var state_29719__$1 = state_29719;
var statearr_29733_29753 = state_29719__$1;
(statearr_29733_29753[(2)] = inst_29713);

(statearr_29733_29753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (10))){
var inst_29705 = (state_29719[(2)]);
var state_29719__$1 = state_29719;
var statearr_29734_29754 = state_29719__$1;
(statearr_29734_29754[(2)] = inst_29705);

(statearr_29734_29754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (8))){
var inst_29702 = cljs.core.async.close_BANG_.call(null,to);
var state_29719__$1 = state_29719;
var statearr_29735_29755 = state_29719__$1;
(statearr_29735_29755[(2)] = inst_29702);

(statearr_29735_29755[(1)] = (10));


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
});})(c__29401__auto___29741))
;
return ((function (switch__29384__auto__,c__29401__auto___29741){
return (function() {
var cljs$core$async$state_machine__29385__auto__ = null;
var cljs$core$async$state_machine__29385__auto____0 = (function (){
var statearr_29736 = [null,null,null,null,null,null,null,null];
(statearr_29736[(0)] = cljs$core$async$state_machine__29385__auto__);

(statearr_29736[(1)] = (1));

return statearr_29736;
});
var cljs$core$async$state_machine__29385__auto____1 = (function (state_29719){
while(true){
var ret_value__29386__auto__ = (function (){try{while(true){
var result__29387__auto__ = switch__29384__auto__.call(null,state_29719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29387__auto__;
}
break;
}
}catch (e29737){if((e29737 instanceof Object)){
var ex__29388__auto__ = e29737;
var statearr_29738_29756 = state_29719;
(statearr_29738_29756[(5)] = ex__29388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29757 = state_29719;
state_29719 = G__29757;
continue;
} else {
return ret_value__29386__auto__;
}
break;
}
});
cljs$core$async$state_machine__29385__auto__ = function(state_29719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29385__auto____1.call(this,state_29719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29385__auto____0;
cljs$core$async$state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29385__auto____1;
return cljs$core$async$state_machine__29385__auto__;
})()
;})(switch__29384__auto__,c__29401__auto___29741))
})();
var state__29403__auto__ = (function (){var statearr_29739 = f__29402__auto__.call(null);
(statearr_29739[(6)] = c__29401__auto___29741);

return statearr_29739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29403__auto__);
});})(c__29401__auto___29741))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29758){
var vec__29759 = p__29758;
var v = cljs.core.nth.call(null,vec__29759,(0),null);
var p = cljs.core.nth.call(null,vec__29759,(1),null);
var job = vec__29759;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29401__auto___29930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29401__auto___29930,res,vec__29759,v,p,job,jobs,results){
return (function (){
var f__29402__auto__ = (function (){var switch__29384__auto__ = ((function (c__29401__auto___29930,res,vec__29759,v,p,job,jobs,results){
return (function (state_29766){
var state_val_29767 = (state_29766[(1)]);
if((state_val_29767 === (1))){
var state_29766__$1 = state_29766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29766__$1,(2),res,v);
} else {
if((state_val_29767 === (2))){
var inst_29763 = (state_29766[(2)]);
var inst_29764 = cljs.core.async.close_BANG_.call(null,res);
var state_29766__$1 = (function (){var statearr_29768 = state_29766;
(statearr_29768[(7)] = inst_29763);

return statearr_29768;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29766__$1,inst_29764);
} else {
return null;
}
}
});})(c__29401__auto___29930,res,vec__29759,v,p,job,jobs,results))
;
return ((function (switch__29384__auto__,c__29401__auto___29930,res,vec__29759,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29385__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29385__auto____0 = (function (){
var statearr_29769 = [null,null,null,null,null,null,null,null];
(statearr_29769[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29385__auto__);

(statearr_29769[(1)] = (1));

return statearr_29769;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29385__auto____1 = (function (state_29766){
while(true){
var ret_value__29386__auto__ = (function (){try{while(true){
var result__29387__auto__ = switch__29384__auto__.call(null,state_29766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29387__auto__;
}
break;
}
}catch (e29770){if((e29770 instanceof Object)){
var ex__29388__auto__ = e29770;
var statearr_29771_29931 = state_29766;
(statearr_29771_29931[(5)] = ex__29388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29932 = state_29766;
state_29766 = G__29932;
continue;
} else {
return ret_value__29386__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29385__auto__ = function(state_29766){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29385__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29385__auto____1.call(this,state_29766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29385__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29385__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29385__auto__;
})()
;})(switch__29384__auto__,c__29401__auto___29930,res,vec__29759,v,p,job,jobs,results))
})();
var state__29403__auto__ = (function (){var statearr_29772 = f__29402__auto__.call(null);
(statearr_29772[(6)] = c__29401__auto___29930);

return statearr_29772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29403__auto__);
});})(c__29401__auto___29930,res,vec__29759,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29773){
var vec__29774 = p__29773;
var v = cljs.core.nth.call(null,vec__29774,(0),null);
var p = cljs.core.nth.call(null,vec__29774,(1),null);
var job = vec__29774;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___29933 = n;
var __29934 = (0);
while(true){
if((__29934 < n__4408__auto___29933)){
var G__29777_29935 = type;
var G__29777_29936__$1 = (((G__29777_29935 instanceof cljs.core.Keyword))?G__29777_29935.fqn:null);
switch (G__29777_29936__$1) {
case "compute":
var c__29401__auto___29938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29934,c__29401__auto___29938,G__29777_29935,G__29777_29936__$1,n__4408__auto___29933,jobs,results,process,async){
return (function (){
var f__29402__auto__ = (function (){var switch__29384__auto__ = ((function (__29934,c__29401__auto___29938,G__29777_29935,G__29777_29936__$1,n__4408__auto___29933,jobs,results,process,async){
return (function (state_29790){
var state_val_29791 = (state_29790[(1)]);
if((state_val_29791 === (1))){
var state_29790__$1 = state_29790;
var statearr_29792_29939 = state_29790__$1;
(statearr_29792_29939[(2)] = null);

(statearr_29792_29939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29791 === (2))){
var state_29790__$1 = state_29790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29790__$1,(4),jobs);
} else {
if((state_val_29791 === (3))){
var inst_29788 = (state_29790[(2)]);
var state_29790__$1 = state_29790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29790__$1,inst_29788);
} else {
if((state_val_29791 === (4))){
var inst_29780 = (state_29790[(2)]);
var inst_29781 = process.call(null,inst_29780);
var state_29790__$1 = state_29790;
if(cljs.core.truth_(inst_29781)){
var statearr_29793_29940 = state_29790__$1;
(statearr_29793_29940[(1)] = (5));

} else {
var statearr_29794_29941 = state_29790__$1;
(statearr_29794_29941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29791 === (5))){
var state_29790__$1 = state_29790;
var statearr_29795_29942 = state_29790__$1;
(statearr_29795_29942[(2)] = null);

(statearr_29795_29942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29791 === (6))){
var state_29790__$1 = state_29790;
var statearr_29796_29943 = state_29790__$1;
(statearr_29796_29943[(2)] = null);

(statearr_29796_29943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29791 === (7))){
var inst_29786 = (state_29790[(2)]);
var state_29790__$1 = state_29790;
var statearr_29797_29944 = state_29790__$1;
(statearr_29797_29944[(2)] = inst_29786);

(statearr_29797_29944[(1)] = (3));


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
});})(__29934,c__29401__auto___29938,G__29777_29935,G__29777_29936__$1,n__4408__auto___29933,jobs,results,process,async))
;
return ((function (__29934,switch__29384__auto__,c__29401__auto___29938,G__29777_29935,G__29777_29936__$1,n__4408__auto___29933,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29385__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29385__auto____0 = (function (){
var statearr_29798 = [null,null,null,null,null,null,null];
(statearr_29798[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29385__auto__);

(statearr_29798[(1)] = (1));

return statearr_29798;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29385__auto____1 = (function (state_29790){
while(true){
var ret_value__29386__auto__ = (function (){try{while(true){
var result__29387__auto__ = switch__29384__auto__.call(null,state_29790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29387__auto__;
}
break;
}
}catch (e29799){if((e29799 instanceof Object)){
var ex__29388__auto__ = e29799;
var statearr_29800_29945 = state_29790;
(statearr_29800_29945[(5)] = ex__29388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29946 = state_29790;
state_29790 = G__29946;
continue;
} else {
return ret_value__29386__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29385__auto__ = function(state_29790){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29385__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29385__auto____1.call(this,state_29790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29385__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29385__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29385__auto__;
})()
;})(__29934,switch__29384__auto__,c__29401__auto___29938,G__29777_29935,G__29777_29936__$1,n__4408__auto___29933,jobs,results,process,async))
})();
var state__29403__auto__ = (function (){var statearr_29801 = f__29402__auto__.call(null);
(statearr_29801[(6)] = c__29401__auto___29938);

return statearr_29801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29403__auto__);
});})(__29934,c__29401__auto___29938,G__29777_29935,G__29777_29936__$1,n__4408__auto___29933,jobs,results,process,async))
);


break;
case "async":
var c__29401__auto___29947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29934,c__29401__auto___29947,G__29777_29935,G__29777_29936__$1,n__4408__auto___29933,jobs,results,process,async){
return (function (){
var f__29402__auto__ = (function (){var switch__29384__auto__ = ((function (__29934,c__29401__auto___29947,G__29777_29935,G__29777_29936__$1,n__4408__auto___29933,jobs,results,process,async){
return (function (state_29814){
var state_val_29815 = (state_29814[(1)]);
if((state_val_29815 === (1))){
var state_29814__$1 = state_29814;
var statearr_29816_29948 = state_29814__$1;
(statearr_29816_29948[(2)] = null);

(statearr_29816_29948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29815 === (2))){
var state_29814__$1 = state_29814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29814__$1,(4),jobs);
} else {
if((state_val_29815 === (3))){
var inst_29812 = (state_29814[(2)]);
var state_29814__$1 = state_29814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29814__$1,inst_29812);
} else {
if((state_val_29815 === (4))){
var inst_29804 = (state_29814[(2)]);
var inst_29805 = async.call(null,inst_29804);
var state_29814__$1 = state_29814;
if(cljs.core.truth_(inst_29805)){
var statearr_29817_29949 = state_29814__$1;
(statearr_29817_29949[(1)] = (5));

} else {
var statearr_29818_29950 = state_29814__$1;
(statearr_29818_29950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29815 === (5))){
var state_29814__$1 = state_29814;
var statearr_29819_29951 = state_29814__$1;
(statearr_29819_29951[(2)] = null);

(statearr_29819_29951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29815 === (6))){
var state_29814__$1 = state_29814;
var statearr_29820_29952 = state_29814__$1;
(statearr_29820_29952[(2)] = null);

(statearr_29820_29952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29815 === (7))){
var inst_29810 = (state_29814[(2)]);
var state_29814__$1 = state_29814;
var statearr_29821_29953 = state_29814__$1;
(statearr_29821_29953[(2)] = inst_29810);

(statearr_29821_29953[(1)] = (3));


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
});})(__29934,c__29401__auto___29947,G__29777_29935,G__29777_29936__$1,n__4408__auto___29933,jobs,results,process,async))
;
return ((function (__29934,switch__29384__auto__,c__29401__auto___29947,G__29777_29935,G__29777_29936__$1,n__4408__auto___29933,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29385__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29385__auto____0 = (function (){
var statearr_29822 = [null,null,null,null,null,null,null];
(statearr_29822[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29385__auto__);

(statearr_29822[(1)] = (1));

return statearr_29822;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29385__auto____1 = (function (state_29814){
while(true){
var ret_value__29386__auto__ = (function (){try{while(true){
var result__29387__auto__ = switch__29384__auto__.call(null,state_29814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29387__auto__;
}
break;
}
}catch (e29823){if((e29823 instanceof Object)){
var ex__29388__auto__ = e29823;
var statearr_29824_29954 = state_29814;
(statearr_29824_29954[(5)] = ex__29388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29955 = state_29814;
state_29814 = G__29955;
continue;
} else {
return ret_value__29386__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29385__auto__ = function(state_29814){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29385__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29385__auto____1.call(this,state_29814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29385__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29385__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29385__auto__;
})()
;})(__29934,switch__29384__auto__,c__29401__auto___29947,G__29777_29935,G__29777_29936__$1,n__4408__auto___29933,jobs,results,process,async))
})();
var state__29403__auto__ = (function (){var statearr_29825 = f__29402__auto__.call(null);
(statearr_29825[(6)] = c__29401__auto___29947);

return statearr_29825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29403__auto__);
});})(__29934,c__29401__auto___29947,G__29777_29935,G__29777_29936__$1,n__4408__auto___29933,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29777_29936__$1)].join('')));

}

var G__29956 = (__29934 + (1));
__29934 = G__29956;
continue;
} else {
}
break;
}

var c__29401__auto___29957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29401__auto___29957,jobs,results,process,async){
return (function (){
var f__29402__auto__ = (function (){var switch__29384__auto__ = ((function (c__29401__auto___29957,jobs,results,process,async){
return (function (state_29847){
var state_val_29848 = (state_29847[(1)]);
if((state_val_29848 === (1))){
var state_29847__$1 = state_29847;
var statearr_29849_29958 = state_29847__$1;
(statearr_29849_29958[(2)] = null);

(statearr_29849_29958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29848 === (2))){
var state_29847__$1 = state_29847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29847__$1,(4),from);
} else {
if((state_val_29848 === (3))){
var inst_29845 = (state_29847[(2)]);
var state_29847__$1 = state_29847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29847__$1,inst_29845);
} else {
if((state_val_29848 === (4))){
var inst_29828 = (state_29847[(7)]);
var inst_29828__$1 = (state_29847[(2)]);
var inst_29829 = (inst_29828__$1 == null);
var state_29847__$1 = (function (){var statearr_29850 = state_29847;
(statearr_29850[(7)] = inst_29828__$1);

return statearr_29850;
})();
if(cljs.core.truth_(inst_29829)){
var statearr_29851_29959 = state_29847__$1;
(statearr_29851_29959[(1)] = (5));

} else {
var statearr_29852_29960 = state_29847__$1;
(statearr_29852_29960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29848 === (5))){
var inst_29831 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29847__$1 = state_29847;
var statearr_29853_29961 = state_29847__$1;
(statearr_29853_29961[(2)] = inst_29831);

(statearr_29853_29961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29848 === (6))){
var inst_29833 = (state_29847[(8)]);
var inst_29828 = (state_29847[(7)]);
var inst_29833__$1 = cljs.core.async.chan.call(null,(1));
var inst_29834 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29835 = [inst_29828,inst_29833__$1];
var inst_29836 = (new cljs.core.PersistentVector(null,2,(5),inst_29834,inst_29835,null));
var state_29847__$1 = (function (){var statearr_29854 = state_29847;
(statearr_29854[(8)] = inst_29833__$1);

return statearr_29854;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29847__$1,(8),jobs,inst_29836);
} else {
if((state_val_29848 === (7))){
var inst_29843 = (state_29847[(2)]);
var state_29847__$1 = state_29847;
var statearr_29855_29962 = state_29847__$1;
(statearr_29855_29962[(2)] = inst_29843);

(statearr_29855_29962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29848 === (8))){
var inst_29833 = (state_29847[(8)]);
var inst_29838 = (state_29847[(2)]);
var state_29847__$1 = (function (){var statearr_29856 = state_29847;
(statearr_29856[(9)] = inst_29838);

return statearr_29856;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29847__$1,(9),results,inst_29833);
} else {
if((state_val_29848 === (9))){
var inst_29840 = (state_29847[(2)]);
var state_29847__$1 = (function (){var statearr_29857 = state_29847;
(statearr_29857[(10)] = inst_29840);

return statearr_29857;
})();
var statearr_29858_29963 = state_29847__$1;
(statearr_29858_29963[(2)] = null);

(statearr_29858_29963[(1)] = (2));


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
});})(c__29401__auto___29957,jobs,results,process,async))
;
return ((function (switch__29384__auto__,c__29401__auto___29957,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29385__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29385__auto____0 = (function (){
var statearr_29859 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29859[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29385__auto__);

(statearr_29859[(1)] = (1));

return statearr_29859;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29385__auto____1 = (function (state_29847){
while(true){
var ret_value__29386__auto__ = (function (){try{while(true){
var result__29387__auto__ = switch__29384__auto__.call(null,state_29847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29387__auto__;
}
break;
}
}catch (e29860){if((e29860 instanceof Object)){
var ex__29388__auto__ = e29860;
var statearr_29861_29964 = state_29847;
(statearr_29861_29964[(5)] = ex__29388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29965 = state_29847;
state_29847 = G__29965;
continue;
} else {
return ret_value__29386__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29385__auto__ = function(state_29847){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29385__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29385__auto____1.call(this,state_29847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29385__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29385__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29385__auto__;
})()
;})(switch__29384__auto__,c__29401__auto___29957,jobs,results,process,async))
})();
var state__29403__auto__ = (function (){var statearr_29862 = f__29402__auto__.call(null);
(statearr_29862[(6)] = c__29401__auto___29957);

return statearr_29862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29403__auto__);
});})(c__29401__auto___29957,jobs,results,process,async))
);


var c__29401__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29401__auto__,jobs,results,process,async){
return (function (){
var f__29402__auto__ = (function (){var switch__29384__auto__ = ((function (c__29401__auto__,jobs,results,process,async){
return (function (state_29900){
var state_val_29901 = (state_29900[(1)]);
if((state_val_29901 === (7))){
var inst_29896 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
var statearr_29902_29966 = state_29900__$1;
(statearr_29902_29966[(2)] = inst_29896);

(statearr_29902_29966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (20))){
var state_29900__$1 = state_29900;
var statearr_29903_29967 = state_29900__$1;
(statearr_29903_29967[(2)] = null);

(statearr_29903_29967[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (1))){
var state_29900__$1 = state_29900;
var statearr_29904_29968 = state_29900__$1;
(statearr_29904_29968[(2)] = null);

(statearr_29904_29968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (4))){
var inst_29865 = (state_29900[(7)]);
var inst_29865__$1 = (state_29900[(2)]);
var inst_29866 = (inst_29865__$1 == null);
var state_29900__$1 = (function (){var statearr_29905 = state_29900;
(statearr_29905[(7)] = inst_29865__$1);

return statearr_29905;
})();
if(cljs.core.truth_(inst_29866)){
var statearr_29906_29969 = state_29900__$1;
(statearr_29906_29969[(1)] = (5));

} else {
var statearr_29907_29970 = state_29900__$1;
(statearr_29907_29970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (15))){
var inst_29878 = (state_29900[(8)]);
var state_29900__$1 = state_29900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29900__$1,(18),to,inst_29878);
} else {
if((state_val_29901 === (21))){
var inst_29891 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
var statearr_29908_29971 = state_29900__$1;
(statearr_29908_29971[(2)] = inst_29891);

(statearr_29908_29971[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (13))){
var inst_29893 = (state_29900[(2)]);
var state_29900__$1 = (function (){var statearr_29909 = state_29900;
(statearr_29909[(9)] = inst_29893);

return statearr_29909;
})();
var statearr_29910_29972 = state_29900__$1;
(statearr_29910_29972[(2)] = null);

(statearr_29910_29972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (6))){
var inst_29865 = (state_29900[(7)]);
var state_29900__$1 = state_29900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29900__$1,(11),inst_29865);
} else {
if((state_val_29901 === (17))){
var inst_29886 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
if(cljs.core.truth_(inst_29886)){
var statearr_29911_29973 = state_29900__$1;
(statearr_29911_29973[(1)] = (19));

} else {
var statearr_29912_29974 = state_29900__$1;
(statearr_29912_29974[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (3))){
var inst_29898 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29900__$1,inst_29898);
} else {
if((state_val_29901 === (12))){
var inst_29875 = (state_29900[(10)]);
var state_29900__$1 = state_29900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29900__$1,(14),inst_29875);
} else {
if((state_val_29901 === (2))){
var state_29900__$1 = state_29900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29900__$1,(4),results);
} else {
if((state_val_29901 === (19))){
var state_29900__$1 = state_29900;
var statearr_29913_29975 = state_29900__$1;
(statearr_29913_29975[(2)] = null);

(statearr_29913_29975[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (11))){
var inst_29875 = (state_29900[(2)]);
var state_29900__$1 = (function (){var statearr_29914 = state_29900;
(statearr_29914[(10)] = inst_29875);

return statearr_29914;
})();
var statearr_29915_29976 = state_29900__$1;
(statearr_29915_29976[(2)] = null);

(statearr_29915_29976[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (9))){
var state_29900__$1 = state_29900;
var statearr_29916_29977 = state_29900__$1;
(statearr_29916_29977[(2)] = null);

(statearr_29916_29977[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (5))){
var state_29900__$1 = state_29900;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29917_29978 = state_29900__$1;
(statearr_29917_29978[(1)] = (8));

} else {
var statearr_29918_29979 = state_29900__$1;
(statearr_29918_29979[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (14))){
var inst_29878 = (state_29900[(8)]);
var inst_29880 = (state_29900[(11)]);
var inst_29878__$1 = (state_29900[(2)]);
var inst_29879 = (inst_29878__$1 == null);
var inst_29880__$1 = cljs.core.not.call(null,inst_29879);
var state_29900__$1 = (function (){var statearr_29919 = state_29900;
(statearr_29919[(8)] = inst_29878__$1);

(statearr_29919[(11)] = inst_29880__$1);

return statearr_29919;
})();
if(inst_29880__$1){
var statearr_29920_29980 = state_29900__$1;
(statearr_29920_29980[(1)] = (15));

} else {
var statearr_29921_29981 = state_29900__$1;
(statearr_29921_29981[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (16))){
var inst_29880 = (state_29900[(11)]);
var state_29900__$1 = state_29900;
var statearr_29922_29982 = state_29900__$1;
(statearr_29922_29982[(2)] = inst_29880);

(statearr_29922_29982[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (10))){
var inst_29872 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
var statearr_29923_29983 = state_29900__$1;
(statearr_29923_29983[(2)] = inst_29872);

(statearr_29923_29983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (18))){
var inst_29883 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
var statearr_29924_29984 = state_29900__$1;
(statearr_29924_29984[(2)] = inst_29883);

(statearr_29924_29984[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (8))){
var inst_29869 = cljs.core.async.close_BANG_.call(null,to);
var state_29900__$1 = state_29900;
var statearr_29925_29985 = state_29900__$1;
(statearr_29925_29985[(2)] = inst_29869);

(statearr_29925_29985[(1)] = (10));


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
});})(c__29401__auto__,jobs,results,process,async))
;
return ((function (switch__29384__auto__,c__29401__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29385__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29385__auto____0 = (function (){
var statearr_29926 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29926[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29385__auto__);

(statearr_29926[(1)] = (1));

return statearr_29926;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29385__auto____1 = (function (state_29900){
while(true){
var ret_value__29386__auto__ = (function (){try{while(true){
var result__29387__auto__ = switch__29384__auto__.call(null,state_29900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29387__auto__;
}
break;
}
}catch (e29927){if((e29927 instanceof Object)){
var ex__29388__auto__ = e29927;
var statearr_29928_29986 = state_29900;
(statearr_29928_29986[(5)] = ex__29388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29987 = state_29900;
state_29900 = G__29987;
continue;
} else {
return ret_value__29386__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29385__auto__ = function(state_29900){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29385__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29385__auto____1.call(this,state_29900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29385__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29385__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29385__auto__;
})()
;})(switch__29384__auto__,c__29401__auto__,jobs,results,process,async))
})();
var state__29403__auto__ = (function (){var statearr_29929 = f__29402__auto__.call(null);
(statearr_29929[(6)] = c__29401__auto__);

return statearr_29929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29403__auto__);
});})(c__29401__auto__,jobs,results,process,async))
);

return c__29401__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__29989 = arguments.length;
switch (G__29989) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__29992 = arguments.length;
switch (G__29992) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__29995 = arguments.length;
switch (G__29995) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29401__auto___30044 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29401__auto___30044,tc,fc){
return (function (){
var f__29402__auto__ = (function (){var switch__29384__auto__ = ((function (c__29401__auto___30044,tc,fc){
return (function (state_30021){
var state_val_30022 = (state_30021[(1)]);
if((state_val_30022 === (7))){
var inst_30017 = (state_30021[(2)]);
var state_30021__$1 = state_30021;
var statearr_30023_30045 = state_30021__$1;
(statearr_30023_30045[(2)] = inst_30017);

(statearr_30023_30045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (1))){
var state_30021__$1 = state_30021;
var statearr_30024_30046 = state_30021__$1;
(statearr_30024_30046[(2)] = null);

(statearr_30024_30046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (4))){
var inst_29998 = (state_30021[(7)]);
var inst_29998__$1 = (state_30021[(2)]);
var inst_29999 = (inst_29998__$1 == null);
var state_30021__$1 = (function (){var statearr_30025 = state_30021;
(statearr_30025[(7)] = inst_29998__$1);

return statearr_30025;
})();
if(cljs.core.truth_(inst_29999)){
var statearr_30026_30047 = state_30021__$1;
(statearr_30026_30047[(1)] = (5));

} else {
var statearr_30027_30048 = state_30021__$1;
(statearr_30027_30048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (13))){
var state_30021__$1 = state_30021;
var statearr_30028_30049 = state_30021__$1;
(statearr_30028_30049[(2)] = null);

(statearr_30028_30049[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (6))){
var inst_29998 = (state_30021[(7)]);
var inst_30004 = p.call(null,inst_29998);
var state_30021__$1 = state_30021;
if(cljs.core.truth_(inst_30004)){
var statearr_30029_30050 = state_30021__$1;
(statearr_30029_30050[(1)] = (9));

} else {
var statearr_30030_30051 = state_30021__$1;
(statearr_30030_30051[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (3))){
var inst_30019 = (state_30021[(2)]);
var state_30021__$1 = state_30021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30021__$1,inst_30019);
} else {
if((state_val_30022 === (12))){
var state_30021__$1 = state_30021;
var statearr_30031_30052 = state_30021__$1;
(statearr_30031_30052[(2)] = null);

(statearr_30031_30052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (2))){
var state_30021__$1 = state_30021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30021__$1,(4),ch);
} else {
if((state_val_30022 === (11))){
var inst_29998 = (state_30021[(7)]);
var inst_30008 = (state_30021[(2)]);
var state_30021__$1 = state_30021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30021__$1,(8),inst_30008,inst_29998);
} else {
if((state_val_30022 === (9))){
var state_30021__$1 = state_30021;
var statearr_30032_30053 = state_30021__$1;
(statearr_30032_30053[(2)] = tc);

(statearr_30032_30053[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (5))){
var inst_30001 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30002 = cljs.core.async.close_BANG_.call(null,fc);
var state_30021__$1 = (function (){var statearr_30033 = state_30021;
(statearr_30033[(8)] = inst_30001);

return statearr_30033;
})();
var statearr_30034_30054 = state_30021__$1;
(statearr_30034_30054[(2)] = inst_30002);

(statearr_30034_30054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (14))){
var inst_30015 = (state_30021[(2)]);
var state_30021__$1 = state_30021;
var statearr_30035_30055 = state_30021__$1;
(statearr_30035_30055[(2)] = inst_30015);

(statearr_30035_30055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (10))){
var state_30021__$1 = state_30021;
var statearr_30036_30056 = state_30021__$1;
(statearr_30036_30056[(2)] = fc);

(statearr_30036_30056[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (8))){
var inst_30010 = (state_30021[(2)]);
var state_30021__$1 = state_30021;
if(cljs.core.truth_(inst_30010)){
var statearr_30037_30057 = state_30021__$1;
(statearr_30037_30057[(1)] = (12));

} else {
var statearr_30038_30058 = state_30021__$1;
(statearr_30038_30058[(1)] = (13));

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
});})(c__29401__auto___30044,tc,fc))
;
return ((function (switch__29384__auto__,c__29401__auto___30044,tc,fc){
return (function() {
var cljs$core$async$state_machine__29385__auto__ = null;
var cljs$core$async$state_machine__29385__auto____0 = (function (){
var statearr_30039 = [null,null,null,null,null,null,null,null,null];
(statearr_30039[(0)] = cljs$core$async$state_machine__29385__auto__);

(statearr_30039[(1)] = (1));

return statearr_30039;
});
var cljs$core$async$state_machine__29385__auto____1 = (function (state_30021){
while(true){
var ret_value__29386__auto__ = (function (){try{while(true){
var result__29387__auto__ = switch__29384__auto__.call(null,state_30021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29387__auto__;
}
break;
}
}catch (e30040){if((e30040 instanceof Object)){
var ex__29388__auto__ = e30040;
var statearr_30041_30059 = state_30021;
(statearr_30041_30059[(5)] = ex__29388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30060 = state_30021;
state_30021 = G__30060;
continue;
} else {
return ret_value__29386__auto__;
}
break;
}
});
cljs$core$async$state_machine__29385__auto__ = function(state_30021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29385__auto____1.call(this,state_30021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29385__auto____0;
cljs$core$async$state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29385__auto____1;
return cljs$core$async$state_machine__29385__auto__;
})()
;})(switch__29384__auto__,c__29401__auto___30044,tc,fc))
})();
var state__29403__auto__ = (function (){var statearr_30042 = f__29402__auto__.call(null);
(statearr_30042[(6)] = c__29401__auto___30044);

return statearr_30042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29403__auto__);
});})(c__29401__auto___30044,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29401__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29401__auto__){
return (function (){
var f__29402__auto__ = (function (){var switch__29384__auto__ = ((function (c__29401__auto__){
return (function (state_30081){
var state_val_30082 = (state_30081[(1)]);
if((state_val_30082 === (7))){
var inst_30077 = (state_30081[(2)]);
var state_30081__$1 = state_30081;
var statearr_30083_30101 = state_30081__$1;
(statearr_30083_30101[(2)] = inst_30077);

(statearr_30083_30101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30082 === (1))){
var inst_30061 = init;
var state_30081__$1 = (function (){var statearr_30084 = state_30081;
(statearr_30084[(7)] = inst_30061);

return statearr_30084;
})();
var statearr_30085_30102 = state_30081__$1;
(statearr_30085_30102[(2)] = null);

(statearr_30085_30102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30082 === (4))){
var inst_30064 = (state_30081[(8)]);
var inst_30064__$1 = (state_30081[(2)]);
var inst_30065 = (inst_30064__$1 == null);
var state_30081__$1 = (function (){var statearr_30086 = state_30081;
(statearr_30086[(8)] = inst_30064__$1);

return statearr_30086;
})();
if(cljs.core.truth_(inst_30065)){
var statearr_30087_30103 = state_30081__$1;
(statearr_30087_30103[(1)] = (5));

} else {
var statearr_30088_30104 = state_30081__$1;
(statearr_30088_30104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30082 === (6))){
var inst_30061 = (state_30081[(7)]);
var inst_30064 = (state_30081[(8)]);
var inst_30068 = (state_30081[(9)]);
var inst_30068__$1 = f.call(null,inst_30061,inst_30064);
var inst_30069 = cljs.core.reduced_QMARK_.call(null,inst_30068__$1);
var state_30081__$1 = (function (){var statearr_30089 = state_30081;
(statearr_30089[(9)] = inst_30068__$1);

return statearr_30089;
})();
if(inst_30069){
var statearr_30090_30105 = state_30081__$1;
(statearr_30090_30105[(1)] = (8));

} else {
var statearr_30091_30106 = state_30081__$1;
(statearr_30091_30106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30082 === (3))){
var inst_30079 = (state_30081[(2)]);
var state_30081__$1 = state_30081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30081__$1,inst_30079);
} else {
if((state_val_30082 === (2))){
var state_30081__$1 = state_30081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30081__$1,(4),ch);
} else {
if((state_val_30082 === (9))){
var inst_30068 = (state_30081[(9)]);
var inst_30061 = inst_30068;
var state_30081__$1 = (function (){var statearr_30092 = state_30081;
(statearr_30092[(7)] = inst_30061);

return statearr_30092;
})();
var statearr_30093_30107 = state_30081__$1;
(statearr_30093_30107[(2)] = null);

(statearr_30093_30107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30082 === (5))){
var inst_30061 = (state_30081[(7)]);
var state_30081__$1 = state_30081;
var statearr_30094_30108 = state_30081__$1;
(statearr_30094_30108[(2)] = inst_30061);

(statearr_30094_30108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30082 === (10))){
var inst_30075 = (state_30081[(2)]);
var state_30081__$1 = state_30081;
var statearr_30095_30109 = state_30081__$1;
(statearr_30095_30109[(2)] = inst_30075);

(statearr_30095_30109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30082 === (8))){
var inst_30068 = (state_30081[(9)]);
var inst_30071 = cljs.core.deref.call(null,inst_30068);
var state_30081__$1 = state_30081;
var statearr_30096_30110 = state_30081__$1;
(statearr_30096_30110[(2)] = inst_30071);

(statearr_30096_30110[(1)] = (10));


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
});})(c__29401__auto__))
;
return ((function (switch__29384__auto__,c__29401__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29385__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29385__auto____0 = (function (){
var statearr_30097 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30097[(0)] = cljs$core$async$reduce_$_state_machine__29385__auto__);

(statearr_30097[(1)] = (1));

return statearr_30097;
});
var cljs$core$async$reduce_$_state_machine__29385__auto____1 = (function (state_30081){
while(true){
var ret_value__29386__auto__ = (function (){try{while(true){
var result__29387__auto__ = switch__29384__auto__.call(null,state_30081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29387__auto__;
}
break;
}
}catch (e30098){if((e30098 instanceof Object)){
var ex__29388__auto__ = e30098;
var statearr_30099_30111 = state_30081;
(statearr_30099_30111[(5)] = ex__29388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30112 = state_30081;
state_30081 = G__30112;
continue;
} else {
return ret_value__29386__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29385__auto__ = function(state_30081){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29385__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29385__auto____1.call(this,state_30081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29385__auto____0;
cljs$core$async$reduce_$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29385__auto____1;
return cljs$core$async$reduce_$_state_machine__29385__auto__;
})()
;})(switch__29384__auto__,c__29401__auto__))
})();
var state__29403__auto__ = (function (){var statearr_30100 = f__29402__auto__.call(null);
(statearr_30100[(6)] = c__29401__auto__);

return statearr_30100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29403__auto__);
});})(c__29401__auto__))
);

return c__29401__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29401__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29401__auto__,f__$1){
return (function (){
var f__29402__auto__ = (function (){var switch__29384__auto__ = ((function (c__29401__auto__,f__$1){
return (function (state_30118){
var state_val_30119 = (state_30118[(1)]);
if((state_val_30119 === (1))){
var inst_30113 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_30118__$1 = state_30118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30118__$1,(2),inst_30113);
} else {
if((state_val_30119 === (2))){
var inst_30115 = (state_30118[(2)]);
var inst_30116 = f__$1.call(null,inst_30115);
var state_30118__$1 = state_30118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30118__$1,inst_30116);
} else {
return null;
}
}
});})(c__29401__auto__,f__$1))
;
return ((function (switch__29384__auto__,c__29401__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__29385__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29385__auto____0 = (function (){
var statearr_30120 = [null,null,null,null,null,null,null];
(statearr_30120[(0)] = cljs$core$async$transduce_$_state_machine__29385__auto__);

(statearr_30120[(1)] = (1));

return statearr_30120;
});
var cljs$core$async$transduce_$_state_machine__29385__auto____1 = (function (state_30118){
while(true){
var ret_value__29386__auto__ = (function (){try{while(true){
var result__29387__auto__ = switch__29384__auto__.call(null,state_30118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29387__auto__;
}
break;
}
}catch (e30121){if((e30121 instanceof Object)){
var ex__29388__auto__ = e30121;
var statearr_30122_30124 = state_30118;
(statearr_30122_30124[(5)] = ex__29388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30125 = state_30118;
state_30118 = G__30125;
continue;
} else {
return ret_value__29386__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29385__auto__ = function(state_30118){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29385__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29385__auto____1.call(this,state_30118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29385__auto____0;
cljs$core$async$transduce_$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29385__auto____1;
return cljs$core$async$transduce_$_state_machine__29385__auto__;
})()
;})(switch__29384__auto__,c__29401__auto__,f__$1))
})();
var state__29403__auto__ = (function (){var statearr_30123 = f__29402__auto__.call(null);
(statearr_30123[(6)] = c__29401__auto__);

return statearr_30123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29403__auto__);
});})(c__29401__auto__,f__$1))
);

return c__29401__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30127 = arguments.length;
switch (G__30127) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29401__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29401__auto__){
return (function (){
var f__29402__auto__ = (function (){var switch__29384__auto__ = ((function (c__29401__auto__){
return (function (state_30152){
var state_val_30153 = (state_30152[(1)]);
if((state_val_30153 === (7))){
var inst_30134 = (state_30152[(2)]);
var state_30152__$1 = state_30152;
var statearr_30154_30175 = state_30152__$1;
(statearr_30154_30175[(2)] = inst_30134);

(statearr_30154_30175[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (1))){
var inst_30128 = cljs.core.seq.call(null,coll);
var inst_30129 = inst_30128;
var state_30152__$1 = (function (){var statearr_30155 = state_30152;
(statearr_30155[(7)] = inst_30129);

return statearr_30155;
})();
var statearr_30156_30176 = state_30152__$1;
(statearr_30156_30176[(2)] = null);

(statearr_30156_30176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (4))){
var inst_30129 = (state_30152[(7)]);
var inst_30132 = cljs.core.first.call(null,inst_30129);
var state_30152__$1 = state_30152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30152__$1,(7),ch,inst_30132);
} else {
if((state_val_30153 === (13))){
var inst_30146 = (state_30152[(2)]);
var state_30152__$1 = state_30152;
var statearr_30157_30177 = state_30152__$1;
(statearr_30157_30177[(2)] = inst_30146);

(statearr_30157_30177[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (6))){
var inst_30137 = (state_30152[(2)]);
var state_30152__$1 = state_30152;
if(cljs.core.truth_(inst_30137)){
var statearr_30158_30178 = state_30152__$1;
(statearr_30158_30178[(1)] = (8));

} else {
var statearr_30159_30179 = state_30152__$1;
(statearr_30159_30179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (3))){
var inst_30150 = (state_30152[(2)]);
var state_30152__$1 = state_30152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30152__$1,inst_30150);
} else {
if((state_val_30153 === (12))){
var state_30152__$1 = state_30152;
var statearr_30160_30180 = state_30152__$1;
(statearr_30160_30180[(2)] = null);

(statearr_30160_30180[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (2))){
var inst_30129 = (state_30152[(7)]);
var state_30152__$1 = state_30152;
if(cljs.core.truth_(inst_30129)){
var statearr_30161_30181 = state_30152__$1;
(statearr_30161_30181[(1)] = (4));

} else {
var statearr_30162_30182 = state_30152__$1;
(statearr_30162_30182[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (11))){
var inst_30143 = cljs.core.async.close_BANG_.call(null,ch);
var state_30152__$1 = state_30152;
var statearr_30163_30183 = state_30152__$1;
(statearr_30163_30183[(2)] = inst_30143);

(statearr_30163_30183[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (9))){
var state_30152__$1 = state_30152;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30164_30184 = state_30152__$1;
(statearr_30164_30184[(1)] = (11));

} else {
var statearr_30165_30185 = state_30152__$1;
(statearr_30165_30185[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (5))){
var inst_30129 = (state_30152[(7)]);
var state_30152__$1 = state_30152;
var statearr_30166_30186 = state_30152__$1;
(statearr_30166_30186[(2)] = inst_30129);

(statearr_30166_30186[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (10))){
var inst_30148 = (state_30152[(2)]);
var state_30152__$1 = state_30152;
var statearr_30167_30187 = state_30152__$1;
(statearr_30167_30187[(2)] = inst_30148);

(statearr_30167_30187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (8))){
var inst_30129 = (state_30152[(7)]);
var inst_30139 = cljs.core.next.call(null,inst_30129);
var inst_30129__$1 = inst_30139;
var state_30152__$1 = (function (){var statearr_30168 = state_30152;
(statearr_30168[(7)] = inst_30129__$1);

return statearr_30168;
})();
var statearr_30169_30188 = state_30152__$1;
(statearr_30169_30188[(2)] = null);

(statearr_30169_30188[(1)] = (2));


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
});})(c__29401__auto__))
;
return ((function (switch__29384__auto__,c__29401__auto__){
return (function() {
var cljs$core$async$state_machine__29385__auto__ = null;
var cljs$core$async$state_machine__29385__auto____0 = (function (){
var statearr_30170 = [null,null,null,null,null,null,null,null];
(statearr_30170[(0)] = cljs$core$async$state_machine__29385__auto__);

(statearr_30170[(1)] = (1));

return statearr_30170;
});
var cljs$core$async$state_machine__29385__auto____1 = (function (state_30152){
while(true){
var ret_value__29386__auto__ = (function (){try{while(true){
var result__29387__auto__ = switch__29384__auto__.call(null,state_30152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29387__auto__;
}
break;
}
}catch (e30171){if((e30171 instanceof Object)){
var ex__29388__auto__ = e30171;
var statearr_30172_30189 = state_30152;
(statearr_30172_30189[(5)] = ex__29388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30190 = state_30152;
state_30152 = G__30190;
continue;
} else {
return ret_value__29386__auto__;
}
break;
}
});
cljs$core$async$state_machine__29385__auto__ = function(state_30152){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29385__auto____1.call(this,state_30152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29385__auto____0;
cljs$core$async$state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29385__auto____1;
return cljs$core$async$state_machine__29385__auto__;
})()
;})(switch__29384__auto__,c__29401__auto__))
})();
var state__29403__auto__ = (function (){var statearr_30173 = f__29402__auto__.call(null);
(statearr_30173[(6)] = c__29401__auto__);

return statearr_30173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29403__auto__);
});})(c__29401__auto__))
);

return c__29401__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30191 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30191 = (function (ch,cs,meta30192){
this.ch = ch;
this.cs = cs;
this.meta30192 = meta30192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30193,meta30192__$1){
var self__ = this;
var _30193__$1 = this;
return (new cljs.core.async.t_cljs$core$async30191(self__.ch,self__.cs,meta30192__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30191.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30193){
var self__ = this;
var _30193__$1 = this;
return self__.meta30192;
});})(cs))
;

cljs.core.async.t_cljs$core$async30191.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30191.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30191.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30191.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30191.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30191.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30191.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30192","meta30192",1492522122,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30191.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30191";

cljs.core.async.t_cljs$core$async30191.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async30191");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30191.
 */
cljs.core.async.__GT_t_cljs$core$async30191 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30191(ch__$1,cs__$1,meta30192){
return (new cljs.core.async.t_cljs$core$async30191(ch__$1,cs__$1,meta30192));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30191(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29401__auto___30413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29401__auto___30413,cs,m,dchan,dctr,done){
return (function (){
var f__29402__auto__ = (function (){var switch__29384__auto__ = ((function (c__29401__auto___30413,cs,m,dchan,dctr,done){
return (function (state_30328){
var state_val_30329 = (state_30328[(1)]);
if((state_val_30329 === (7))){
var inst_30324 = (state_30328[(2)]);
var state_30328__$1 = state_30328;
var statearr_30330_30414 = state_30328__$1;
(statearr_30330_30414[(2)] = inst_30324);

(statearr_30330_30414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (20))){
var inst_30227 = (state_30328[(7)]);
var inst_30239 = cljs.core.first.call(null,inst_30227);
var inst_30240 = cljs.core.nth.call(null,inst_30239,(0),null);
var inst_30241 = cljs.core.nth.call(null,inst_30239,(1),null);
var state_30328__$1 = (function (){var statearr_30331 = state_30328;
(statearr_30331[(8)] = inst_30240);

return statearr_30331;
})();
if(cljs.core.truth_(inst_30241)){
var statearr_30332_30415 = state_30328__$1;
(statearr_30332_30415[(1)] = (22));

} else {
var statearr_30333_30416 = state_30328__$1;
(statearr_30333_30416[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (27))){
var inst_30269 = (state_30328[(9)]);
var inst_30271 = (state_30328[(10)]);
var inst_30276 = (state_30328[(11)]);
var inst_30196 = (state_30328[(12)]);
var inst_30276__$1 = cljs.core._nth.call(null,inst_30269,inst_30271);
var inst_30277 = cljs.core.async.put_BANG_.call(null,inst_30276__$1,inst_30196,done);
var state_30328__$1 = (function (){var statearr_30334 = state_30328;
(statearr_30334[(11)] = inst_30276__$1);

return statearr_30334;
})();
if(cljs.core.truth_(inst_30277)){
var statearr_30335_30417 = state_30328__$1;
(statearr_30335_30417[(1)] = (30));

} else {
var statearr_30336_30418 = state_30328__$1;
(statearr_30336_30418[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (1))){
var state_30328__$1 = state_30328;
var statearr_30337_30419 = state_30328__$1;
(statearr_30337_30419[(2)] = null);

(statearr_30337_30419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (24))){
var inst_30227 = (state_30328[(7)]);
var inst_30246 = (state_30328[(2)]);
var inst_30247 = cljs.core.next.call(null,inst_30227);
var inst_30205 = inst_30247;
var inst_30206 = null;
var inst_30207 = (0);
var inst_30208 = (0);
var state_30328__$1 = (function (){var statearr_30338 = state_30328;
(statearr_30338[(13)] = inst_30208);

(statearr_30338[(14)] = inst_30205);

(statearr_30338[(15)] = inst_30206);

(statearr_30338[(16)] = inst_30207);

(statearr_30338[(17)] = inst_30246);

return statearr_30338;
})();
var statearr_30339_30420 = state_30328__$1;
(statearr_30339_30420[(2)] = null);

(statearr_30339_30420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (39))){
var state_30328__$1 = state_30328;
var statearr_30343_30421 = state_30328__$1;
(statearr_30343_30421[(2)] = null);

(statearr_30343_30421[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (4))){
var inst_30196 = (state_30328[(12)]);
var inst_30196__$1 = (state_30328[(2)]);
var inst_30197 = (inst_30196__$1 == null);
var state_30328__$1 = (function (){var statearr_30344 = state_30328;
(statearr_30344[(12)] = inst_30196__$1);

return statearr_30344;
})();
if(cljs.core.truth_(inst_30197)){
var statearr_30345_30422 = state_30328__$1;
(statearr_30345_30422[(1)] = (5));

} else {
var statearr_30346_30423 = state_30328__$1;
(statearr_30346_30423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (15))){
var inst_30208 = (state_30328[(13)]);
var inst_30205 = (state_30328[(14)]);
var inst_30206 = (state_30328[(15)]);
var inst_30207 = (state_30328[(16)]);
var inst_30223 = (state_30328[(2)]);
var inst_30224 = (inst_30208 + (1));
var tmp30340 = inst_30205;
var tmp30341 = inst_30206;
var tmp30342 = inst_30207;
var inst_30205__$1 = tmp30340;
var inst_30206__$1 = tmp30341;
var inst_30207__$1 = tmp30342;
var inst_30208__$1 = inst_30224;
var state_30328__$1 = (function (){var statearr_30347 = state_30328;
(statearr_30347[(13)] = inst_30208__$1);

(statearr_30347[(14)] = inst_30205__$1);

(statearr_30347[(15)] = inst_30206__$1);

(statearr_30347[(16)] = inst_30207__$1);

(statearr_30347[(18)] = inst_30223);

return statearr_30347;
})();
var statearr_30348_30424 = state_30328__$1;
(statearr_30348_30424[(2)] = null);

(statearr_30348_30424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (21))){
var inst_30250 = (state_30328[(2)]);
var state_30328__$1 = state_30328;
var statearr_30352_30425 = state_30328__$1;
(statearr_30352_30425[(2)] = inst_30250);

(statearr_30352_30425[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (31))){
var inst_30276 = (state_30328[(11)]);
var inst_30280 = done.call(null,null);
var inst_30281 = cljs.core.async.untap_STAR_.call(null,m,inst_30276);
var state_30328__$1 = (function (){var statearr_30353 = state_30328;
(statearr_30353[(19)] = inst_30280);

return statearr_30353;
})();
var statearr_30354_30426 = state_30328__$1;
(statearr_30354_30426[(2)] = inst_30281);

(statearr_30354_30426[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (32))){
var inst_30269 = (state_30328[(9)]);
var inst_30271 = (state_30328[(10)]);
var inst_30270 = (state_30328[(20)]);
var inst_30268 = (state_30328[(21)]);
var inst_30283 = (state_30328[(2)]);
var inst_30284 = (inst_30271 + (1));
var tmp30349 = inst_30269;
var tmp30350 = inst_30270;
var tmp30351 = inst_30268;
var inst_30268__$1 = tmp30351;
var inst_30269__$1 = tmp30349;
var inst_30270__$1 = tmp30350;
var inst_30271__$1 = inst_30284;
var state_30328__$1 = (function (){var statearr_30355 = state_30328;
(statearr_30355[(9)] = inst_30269__$1);

(statearr_30355[(10)] = inst_30271__$1);

(statearr_30355[(20)] = inst_30270__$1);

(statearr_30355[(21)] = inst_30268__$1);

(statearr_30355[(22)] = inst_30283);

return statearr_30355;
})();
var statearr_30356_30427 = state_30328__$1;
(statearr_30356_30427[(2)] = null);

(statearr_30356_30427[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (40))){
var inst_30296 = (state_30328[(23)]);
var inst_30300 = done.call(null,null);
var inst_30301 = cljs.core.async.untap_STAR_.call(null,m,inst_30296);
var state_30328__$1 = (function (){var statearr_30357 = state_30328;
(statearr_30357[(24)] = inst_30300);

return statearr_30357;
})();
var statearr_30358_30428 = state_30328__$1;
(statearr_30358_30428[(2)] = inst_30301);

(statearr_30358_30428[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (33))){
var inst_30287 = (state_30328[(25)]);
var inst_30289 = cljs.core.chunked_seq_QMARK_.call(null,inst_30287);
var state_30328__$1 = state_30328;
if(inst_30289){
var statearr_30359_30429 = state_30328__$1;
(statearr_30359_30429[(1)] = (36));

} else {
var statearr_30360_30430 = state_30328__$1;
(statearr_30360_30430[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (13))){
var inst_30217 = (state_30328[(26)]);
var inst_30220 = cljs.core.async.close_BANG_.call(null,inst_30217);
var state_30328__$1 = state_30328;
var statearr_30361_30431 = state_30328__$1;
(statearr_30361_30431[(2)] = inst_30220);

(statearr_30361_30431[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (22))){
var inst_30240 = (state_30328[(8)]);
var inst_30243 = cljs.core.async.close_BANG_.call(null,inst_30240);
var state_30328__$1 = state_30328;
var statearr_30362_30432 = state_30328__$1;
(statearr_30362_30432[(2)] = inst_30243);

(statearr_30362_30432[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (36))){
var inst_30287 = (state_30328[(25)]);
var inst_30291 = cljs.core.chunk_first.call(null,inst_30287);
var inst_30292 = cljs.core.chunk_rest.call(null,inst_30287);
var inst_30293 = cljs.core.count.call(null,inst_30291);
var inst_30268 = inst_30292;
var inst_30269 = inst_30291;
var inst_30270 = inst_30293;
var inst_30271 = (0);
var state_30328__$1 = (function (){var statearr_30363 = state_30328;
(statearr_30363[(9)] = inst_30269);

(statearr_30363[(10)] = inst_30271);

(statearr_30363[(20)] = inst_30270);

(statearr_30363[(21)] = inst_30268);

return statearr_30363;
})();
var statearr_30364_30433 = state_30328__$1;
(statearr_30364_30433[(2)] = null);

(statearr_30364_30433[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (41))){
var inst_30287 = (state_30328[(25)]);
var inst_30303 = (state_30328[(2)]);
var inst_30304 = cljs.core.next.call(null,inst_30287);
var inst_30268 = inst_30304;
var inst_30269 = null;
var inst_30270 = (0);
var inst_30271 = (0);
var state_30328__$1 = (function (){var statearr_30365 = state_30328;
(statearr_30365[(9)] = inst_30269);

(statearr_30365[(10)] = inst_30271);

(statearr_30365[(20)] = inst_30270);

(statearr_30365[(27)] = inst_30303);

(statearr_30365[(21)] = inst_30268);

return statearr_30365;
})();
var statearr_30366_30434 = state_30328__$1;
(statearr_30366_30434[(2)] = null);

(statearr_30366_30434[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (43))){
var state_30328__$1 = state_30328;
var statearr_30367_30435 = state_30328__$1;
(statearr_30367_30435[(2)] = null);

(statearr_30367_30435[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (29))){
var inst_30312 = (state_30328[(2)]);
var state_30328__$1 = state_30328;
var statearr_30368_30436 = state_30328__$1;
(statearr_30368_30436[(2)] = inst_30312);

(statearr_30368_30436[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (44))){
var inst_30321 = (state_30328[(2)]);
var state_30328__$1 = (function (){var statearr_30369 = state_30328;
(statearr_30369[(28)] = inst_30321);

return statearr_30369;
})();
var statearr_30370_30437 = state_30328__$1;
(statearr_30370_30437[(2)] = null);

(statearr_30370_30437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (6))){
var inst_30260 = (state_30328[(29)]);
var inst_30259 = cljs.core.deref.call(null,cs);
var inst_30260__$1 = cljs.core.keys.call(null,inst_30259);
var inst_30261 = cljs.core.count.call(null,inst_30260__$1);
var inst_30262 = cljs.core.reset_BANG_.call(null,dctr,inst_30261);
var inst_30267 = cljs.core.seq.call(null,inst_30260__$1);
var inst_30268 = inst_30267;
var inst_30269 = null;
var inst_30270 = (0);
var inst_30271 = (0);
var state_30328__$1 = (function (){var statearr_30371 = state_30328;
(statearr_30371[(30)] = inst_30262);

(statearr_30371[(9)] = inst_30269);

(statearr_30371[(10)] = inst_30271);

(statearr_30371[(20)] = inst_30270);

(statearr_30371[(21)] = inst_30268);

(statearr_30371[(29)] = inst_30260__$1);

return statearr_30371;
})();
var statearr_30372_30438 = state_30328__$1;
(statearr_30372_30438[(2)] = null);

(statearr_30372_30438[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (28))){
var inst_30287 = (state_30328[(25)]);
var inst_30268 = (state_30328[(21)]);
var inst_30287__$1 = cljs.core.seq.call(null,inst_30268);
var state_30328__$1 = (function (){var statearr_30373 = state_30328;
(statearr_30373[(25)] = inst_30287__$1);

return statearr_30373;
})();
if(inst_30287__$1){
var statearr_30374_30439 = state_30328__$1;
(statearr_30374_30439[(1)] = (33));

} else {
var statearr_30375_30440 = state_30328__$1;
(statearr_30375_30440[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (25))){
var inst_30271 = (state_30328[(10)]);
var inst_30270 = (state_30328[(20)]);
var inst_30273 = (inst_30271 < inst_30270);
var inst_30274 = inst_30273;
var state_30328__$1 = state_30328;
if(cljs.core.truth_(inst_30274)){
var statearr_30376_30441 = state_30328__$1;
(statearr_30376_30441[(1)] = (27));

} else {
var statearr_30377_30442 = state_30328__$1;
(statearr_30377_30442[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (34))){
var state_30328__$1 = state_30328;
var statearr_30378_30443 = state_30328__$1;
(statearr_30378_30443[(2)] = null);

(statearr_30378_30443[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (17))){
var state_30328__$1 = state_30328;
var statearr_30379_30444 = state_30328__$1;
(statearr_30379_30444[(2)] = null);

(statearr_30379_30444[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (3))){
var inst_30326 = (state_30328[(2)]);
var state_30328__$1 = state_30328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30328__$1,inst_30326);
} else {
if((state_val_30329 === (12))){
var inst_30255 = (state_30328[(2)]);
var state_30328__$1 = state_30328;
var statearr_30380_30445 = state_30328__$1;
(statearr_30380_30445[(2)] = inst_30255);

(statearr_30380_30445[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (2))){
var state_30328__$1 = state_30328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30328__$1,(4),ch);
} else {
if((state_val_30329 === (23))){
var state_30328__$1 = state_30328;
var statearr_30381_30446 = state_30328__$1;
(statearr_30381_30446[(2)] = null);

(statearr_30381_30446[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (35))){
var inst_30310 = (state_30328[(2)]);
var state_30328__$1 = state_30328;
var statearr_30382_30447 = state_30328__$1;
(statearr_30382_30447[(2)] = inst_30310);

(statearr_30382_30447[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (19))){
var inst_30227 = (state_30328[(7)]);
var inst_30231 = cljs.core.chunk_first.call(null,inst_30227);
var inst_30232 = cljs.core.chunk_rest.call(null,inst_30227);
var inst_30233 = cljs.core.count.call(null,inst_30231);
var inst_30205 = inst_30232;
var inst_30206 = inst_30231;
var inst_30207 = inst_30233;
var inst_30208 = (0);
var state_30328__$1 = (function (){var statearr_30383 = state_30328;
(statearr_30383[(13)] = inst_30208);

(statearr_30383[(14)] = inst_30205);

(statearr_30383[(15)] = inst_30206);

(statearr_30383[(16)] = inst_30207);

return statearr_30383;
})();
var statearr_30384_30448 = state_30328__$1;
(statearr_30384_30448[(2)] = null);

(statearr_30384_30448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (11))){
var inst_30227 = (state_30328[(7)]);
var inst_30205 = (state_30328[(14)]);
var inst_30227__$1 = cljs.core.seq.call(null,inst_30205);
var state_30328__$1 = (function (){var statearr_30385 = state_30328;
(statearr_30385[(7)] = inst_30227__$1);

return statearr_30385;
})();
if(inst_30227__$1){
var statearr_30386_30449 = state_30328__$1;
(statearr_30386_30449[(1)] = (16));

} else {
var statearr_30387_30450 = state_30328__$1;
(statearr_30387_30450[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (9))){
var inst_30257 = (state_30328[(2)]);
var state_30328__$1 = state_30328;
var statearr_30388_30451 = state_30328__$1;
(statearr_30388_30451[(2)] = inst_30257);

(statearr_30388_30451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (5))){
var inst_30203 = cljs.core.deref.call(null,cs);
var inst_30204 = cljs.core.seq.call(null,inst_30203);
var inst_30205 = inst_30204;
var inst_30206 = null;
var inst_30207 = (0);
var inst_30208 = (0);
var state_30328__$1 = (function (){var statearr_30389 = state_30328;
(statearr_30389[(13)] = inst_30208);

(statearr_30389[(14)] = inst_30205);

(statearr_30389[(15)] = inst_30206);

(statearr_30389[(16)] = inst_30207);

return statearr_30389;
})();
var statearr_30390_30452 = state_30328__$1;
(statearr_30390_30452[(2)] = null);

(statearr_30390_30452[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (14))){
var state_30328__$1 = state_30328;
var statearr_30391_30453 = state_30328__$1;
(statearr_30391_30453[(2)] = null);

(statearr_30391_30453[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (45))){
var inst_30318 = (state_30328[(2)]);
var state_30328__$1 = state_30328;
var statearr_30392_30454 = state_30328__$1;
(statearr_30392_30454[(2)] = inst_30318);

(statearr_30392_30454[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (26))){
var inst_30260 = (state_30328[(29)]);
var inst_30314 = (state_30328[(2)]);
var inst_30315 = cljs.core.seq.call(null,inst_30260);
var state_30328__$1 = (function (){var statearr_30393 = state_30328;
(statearr_30393[(31)] = inst_30314);

return statearr_30393;
})();
if(inst_30315){
var statearr_30394_30455 = state_30328__$1;
(statearr_30394_30455[(1)] = (42));

} else {
var statearr_30395_30456 = state_30328__$1;
(statearr_30395_30456[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (16))){
var inst_30227 = (state_30328[(7)]);
var inst_30229 = cljs.core.chunked_seq_QMARK_.call(null,inst_30227);
var state_30328__$1 = state_30328;
if(inst_30229){
var statearr_30396_30457 = state_30328__$1;
(statearr_30396_30457[(1)] = (19));

} else {
var statearr_30397_30458 = state_30328__$1;
(statearr_30397_30458[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (38))){
var inst_30307 = (state_30328[(2)]);
var state_30328__$1 = state_30328;
var statearr_30398_30459 = state_30328__$1;
(statearr_30398_30459[(2)] = inst_30307);

(statearr_30398_30459[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (30))){
var state_30328__$1 = state_30328;
var statearr_30399_30460 = state_30328__$1;
(statearr_30399_30460[(2)] = null);

(statearr_30399_30460[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (10))){
var inst_30208 = (state_30328[(13)]);
var inst_30206 = (state_30328[(15)]);
var inst_30216 = cljs.core._nth.call(null,inst_30206,inst_30208);
var inst_30217 = cljs.core.nth.call(null,inst_30216,(0),null);
var inst_30218 = cljs.core.nth.call(null,inst_30216,(1),null);
var state_30328__$1 = (function (){var statearr_30400 = state_30328;
(statearr_30400[(26)] = inst_30217);

return statearr_30400;
})();
if(cljs.core.truth_(inst_30218)){
var statearr_30401_30461 = state_30328__$1;
(statearr_30401_30461[(1)] = (13));

} else {
var statearr_30402_30462 = state_30328__$1;
(statearr_30402_30462[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (18))){
var inst_30253 = (state_30328[(2)]);
var state_30328__$1 = state_30328;
var statearr_30403_30463 = state_30328__$1;
(statearr_30403_30463[(2)] = inst_30253);

(statearr_30403_30463[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (42))){
var state_30328__$1 = state_30328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30328__$1,(45),dchan);
} else {
if((state_val_30329 === (37))){
var inst_30287 = (state_30328[(25)]);
var inst_30296 = (state_30328[(23)]);
var inst_30196 = (state_30328[(12)]);
var inst_30296__$1 = cljs.core.first.call(null,inst_30287);
var inst_30297 = cljs.core.async.put_BANG_.call(null,inst_30296__$1,inst_30196,done);
var state_30328__$1 = (function (){var statearr_30404 = state_30328;
(statearr_30404[(23)] = inst_30296__$1);

return statearr_30404;
})();
if(cljs.core.truth_(inst_30297)){
var statearr_30405_30464 = state_30328__$1;
(statearr_30405_30464[(1)] = (39));

} else {
var statearr_30406_30465 = state_30328__$1;
(statearr_30406_30465[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (8))){
var inst_30208 = (state_30328[(13)]);
var inst_30207 = (state_30328[(16)]);
var inst_30210 = (inst_30208 < inst_30207);
var inst_30211 = inst_30210;
var state_30328__$1 = state_30328;
if(cljs.core.truth_(inst_30211)){
var statearr_30407_30466 = state_30328__$1;
(statearr_30407_30466[(1)] = (10));

} else {
var statearr_30408_30467 = state_30328__$1;
(statearr_30408_30467[(1)] = (11));

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
});})(c__29401__auto___30413,cs,m,dchan,dctr,done))
;
return ((function (switch__29384__auto__,c__29401__auto___30413,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29385__auto__ = null;
var cljs$core$async$mult_$_state_machine__29385__auto____0 = (function (){
var statearr_30409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30409[(0)] = cljs$core$async$mult_$_state_machine__29385__auto__);

(statearr_30409[(1)] = (1));

return statearr_30409;
});
var cljs$core$async$mult_$_state_machine__29385__auto____1 = (function (state_30328){
while(true){
var ret_value__29386__auto__ = (function (){try{while(true){
var result__29387__auto__ = switch__29384__auto__.call(null,state_30328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29387__auto__;
}
break;
}
}catch (e30410){if((e30410 instanceof Object)){
var ex__29388__auto__ = e30410;
var statearr_30411_30468 = state_30328;
(statearr_30411_30468[(5)] = ex__29388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30469 = state_30328;
state_30328 = G__30469;
continue;
} else {
return ret_value__29386__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29385__auto__ = function(state_30328){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29385__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29385__auto____1.call(this,state_30328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29385__auto____0;
cljs$core$async$mult_$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29385__auto____1;
return cljs$core$async$mult_$_state_machine__29385__auto__;
})()
;})(switch__29384__auto__,c__29401__auto___30413,cs,m,dchan,dctr,done))
})();
var state__29403__auto__ = (function (){var statearr_30412 = f__29402__auto__.call(null);
(statearr_30412[(6)] = c__29401__auto___30413);

return statearr_30412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29403__auto__);
});})(c__29401__auto___30413,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30471 = arguments.length;
switch (G__30471) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___30483 = arguments.length;
var i__4532__auto___30484 = (0);
while(true){
if((i__4532__auto___30484 < len__4531__auto___30483)){
args__4534__auto__.push((arguments[i__4532__auto___30484]));

var G__30485 = (i__4532__auto___30484 + (1));
i__4532__auto___30484 = G__30485;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30477){
var map__30478 = p__30477;
var map__30478__$1 = ((((!((map__30478 == null)))?(((((map__30478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30478):map__30478);
var opts = map__30478__$1;
var statearr_30480_30486 = state;
(statearr_30480_30486[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__30478,map__30478__$1,opts){
return (function (val){
var statearr_30481_30487 = state;
(statearr_30481_30487[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30478,map__30478__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_30482_30488 = state;
(statearr_30482_30488[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30473){
var G__30474 = cljs.core.first.call(null,seq30473);
var seq30473__$1 = cljs.core.next.call(null,seq30473);
var G__30475 = cljs.core.first.call(null,seq30473__$1);
var seq30473__$2 = cljs.core.next.call(null,seq30473__$1);
var G__30476 = cljs.core.first.call(null,seq30473__$2);
var seq30473__$3 = cljs.core.next.call(null,seq30473__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30474,G__30475,G__30476,seq30473__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30489 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30489 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta30490){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta30490 = meta30490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30491,meta30490__$1){
var self__ = this;
var _30491__$1 = this;
return (new cljs.core.async.t_cljs$core$async30489(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta30490__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30489.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30491){
var self__ = this;
var _30491__$1 = this;
return self__.meta30490;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30489.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30489.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30489.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30489.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30489.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30489.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30489.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30489.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30489.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta30490","meta30490",-528214907,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30489.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30489";

cljs.core.async.t_cljs$core$async30489.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async30489");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30489.
 */
cljs.core.async.__GT_t_cljs$core$async30489 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30489(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta30490){
return (new cljs.core.async.t_cljs$core$async30489(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta30490));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30489(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29401__auto___30653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29401__auto___30653,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29402__auto__ = (function (){var switch__29384__auto__ = ((function (c__29401__auto___30653,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30593){
var state_val_30594 = (state_30593[(1)]);
if((state_val_30594 === (7))){
var inst_30508 = (state_30593[(2)]);
var state_30593__$1 = state_30593;
var statearr_30595_30654 = state_30593__$1;
(statearr_30595_30654[(2)] = inst_30508);

(statearr_30595_30654[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (20))){
var inst_30520 = (state_30593[(7)]);
var state_30593__$1 = state_30593;
var statearr_30596_30655 = state_30593__$1;
(statearr_30596_30655[(2)] = inst_30520);

(statearr_30596_30655[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (27))){
var state_30593__$1 = state_30593;
var statearr_30597_30656 = state_30593__$1;
(statearr_30597_30656[(2)] = null);

(statearr_30597_30656[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (1))){
var inst_30495 = (state_30593[(8)]);
var inst_30495__$1 = calc_state.call(null);
var inst_30497 = (inst_30495__$1 == null);
var inst_30498 = cljs.core.not.call(null,inst_30497);
var state_30593__$1 = (function (){var statearr_30598 = state_30593;
(statearr_30598[(8)] = inst_30495__$1);

return statearr_30598;
})();
if(inst_30498){
var statearr_30599_30657 = state_30593__$1;
(statearr_30599_30657[(1)] = (2));

} else {
var statearr_30600_30658 = state_30593__$1;
(statearr_30600_30658[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (24))){
var inst_30567 = (state_30593[(9)]);
var inst_30544 = (state_30593[(10)]);
var inst_30553 = (state_30593[(11)]);
var inst_30567__$1 = inst_30544.call(null,inst_30553);
var state_30593__$1 = (function (){var statearr_30601 = state_30593;
(statearr_30601[(9)] = inst_30567__$1);

return statearr_30601;
})();
if(cljs.core.truth_(inst_30567__$1)){
var statearr_30602_30659 = state_30593__$1;
(statearr_30602_30659[(1)] = (29));

} else {
var statearr_30603_30660 = state_30593__$1;
(statearr_30603_30660[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (4))){
var inst_30511 = (state_30593[(2)]);
var state_30593__$1 = state_30593;
if(cljs.core.truth_(inst_30511)){
var statearr_30604_30661 = state_30593__$1;
(statearr_30604_30661[(1)] = (8));

} else {
var statearr_30605_30662 = state_30593__$1;
(statearr_30605_30662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (15))){
var inst_30538 = (state_30593[(2)]);
var state_30593__$1 = state_30593;
if(cljs.core.truth_(inst_30538)){
var statearr_30606_30663 = state_30593__$1;
(statearr_30606_30663[(1)] = (19));

} else {
var statearr_30607_30664 = state_30593__$1;
(statearr_30607_30664[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (21))){
var inst_30543 = (state_30593[(12)]);
var inst_30543__$1 = (state_30593[(2)]);
var inst_30544 = cljs.core.get.call(null,inst_30543__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30545 = cljs.core.get.call(null,inst_30543__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30546 = cljs.core.get.call(null,inst_30543__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30593__$1 = (function (){var statearr_30608 = state_30593;
(statearr_30608[(10)] = inst_30544);

(statearr_30608[(13)] = inst_30545);

(statearr_30608[(12)] = inst_30543__$1);

return statearr_30608;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30593__$1,(22),inst_30546);
} else {
if((state_val_30594 === (31))){
var inst_30575 = (state_30593[(2)]);
var state_30593__$1 = state_30593;
if(cljs.core.truth_(inst_30575)){
var statearr_30609_30665 = state_30593__$1;
(statearr_30609_30665[(1)] = (32));

} else {
var statearr_30610_30666 = state_30593__$1;
(statearr_30610_30666[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (32))){
var inst_30552 = (state_30593[(14)]);
var state_30593__$1 = state_30593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30593__$1,(35),out,inst_30552);
} else {
if((state_val_30594 === (33))){
var inst_30543 = (state_30593[(12)]);
var inst_30520 = inst_30543;
var state_30593__$1 = (function (){var statearr_30611 = state_30593;
(statearr_30611[(7)] = inst_30520);

return statearr_30611;
})();
var statearr_30612_30667 = state_30593__$1;
(statearr_30612_30667[(2)] = null);

(statearr_30612_30667[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (13))){
var inst_30520 = (state_30593[(7)]);
var inst_30527 = inst_30520.cljs$lang$protocol_mask$partition0$;
var inst_30528 = (inst_30527 & (64));
var inst_30529 = inst_30520.cljs$core$ISeq$;
var inst_30530 = (cljs.core.PROTOCOL_SENTINEL === inst_30529);
var inst_30531 = ((inst_30528) || (inst_30530));
var state_30593__$1 = state_30593;
if(cljs.core.truth_(inst_30531)){
var statearr_30613_30668 = state_30593__$1;
(statearr_30613_30668[(1)] = (16));

} else {
var statearr_30614_30669 = state_30593__$1;
(statearr_30614_30669[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (22))){
var inst_30553 = (state_30593[(11)]);
var inst_30552 = (state_30593[(14)]);
var inst_30551 = (state_30593[(2)]);
var inst_30552__$1 = cljs.core.nth.call(null,inst_30551,(0),null);
var inst_30553__$1 = cljs.core.nth.call(null,inst_30551,(1),null);
var inst_30554 = (inst_30552__$1 == null);
var inst_30555 = cljs.core._EQ_.call(null,inst_30553__$1,change);
var inst_30556 = ((inst_30554) || (inst_30555));
var state_30593__$1 = (function (){var statearr_30615 = state_30593;
(statearr_30615[(11)] = inst_30553__$1);

(statearr_30615[(14)] = inst_30552__$1);

return statearr_30615;
})();
if(cljs.core.truth_(inst_30556)){
var statearr_30616_30670 = state_30593__$1;
(statearr_30616_30670[(1)] = (23));

} else {
var statearr_30617_30671 = state_30593__$1;
(statearr_30617_30671[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (36))){
var inst_30543 = (state_30593[(12)]);
var inst_30520 = inst_30543;
var state_30593__$1 = (function (){var statearr_30618 = state_30593;
(statearr_30618[(7)] = inst_30520);

return statearr_30618;
})();
var statearr_30619_30672 = state_30593__$1;
(statearr_30619_30672[(2)] = null);

(statearr_30619_30672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (29))){
var inst_30567 = (state_30593[(9)]);
var state_30593__$1 = state_30593;
var statearr_30620_30673 = state_30593__$1;
(statearr_30620_30673[(2)] = inst_30567);

(statearr_30620_30673[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (6))){
var state_30593__$1 = state_30593;
var statearr_30621_30674 = state_30593__$1;
(statearr_30621_30674[(2)] = false);

(statearr_30621_30674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (28))){
var inst_30563 = (state_30593[(2)]);
var inst_30564 = calc_state.call(null);
var inst_30520 = inst_30564;
var state_30593__$1 = (function (){var statearr_30622 = state_30593;
(statearr_30622[(15)] = inst_30563);

(statearr_30622[(7)] = inst_30520);

return statearr_30622;
})();
var statearr_30623_30675 = state_30593__$1;
(statearr_30623_30675[(2)] = null);

(statearr_30623_30675[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (25))){
var inst_30589 = (state_30593[(2)]);
var state_30593__$1 = state_30593;
var statearr_30624_30676 = state_30593__$1;
(statearr_30624_30676[(2)] = inst_30589);

(statearr_30624_30676[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (34))){
var inst_30587 = (state_30593[(2)]);
var state_30593__$1 = state_30593;
var statearr_30625_30677 = state_30593__$1;
(statearr_30625_30677[(2)] = inst_30587);

(statearr_30625_30677[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (17))){
var state_30593__$1 = state_30593;
var statearr_30626_30678 = state_30593__$1;
(statearr_30626_30678[(2)] = false);

(statearr_30626_30678[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (3))){
var state_30593__$1 = state_30593;
var statearr_30627_30679 = state_30593__$1;
(statearr_30627_30679[(2)] = false);

(statearr_30627_30679[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (12))){
var inst_30591 = (state_30593[(2)]);
var state_30593__$1 = state_30593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30593__$1,inst_30591);
} else {
if((state_val_30594 === (2))){
var inst_30495 = (state_30593[(8)]);
var inst_30500 = inst_30495.cljs$lang$protocol_mask$partition0$;
var inst_30501 = (inst_30500 & (64));
var inst_30502 = inst_30495.cljs$core$ISeq$;
var inst_30503 = (cljs.core.PROTOCOL_SENTINEL === inst_30502);
var inst_30504 = ((inst_30501) || (inst_30503));
var state_30593__$1 = state_30593;
if(cljs.core.truth_(inst_30504)){
var statearr_30628_30680 = state_30593__$1;
(statearr_30628_30680[(1)] = (5));

} else {
var statearr_30629_30681 = state_30593__$1;
(statearr_30629_30681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (23))){
var inst_30552 = (state_30593[(14)]);
var inst_30558 = (inst_30552 == null);
var state_30593__$1 = state_30593;
if(cljs.core.truth_(inst_30558)){
var statearr_30630_30682 = state_30593__$1;
(statearr_30630_30682[(1)] = (26));

} else {
var statearr_30631_30683 = state_30593__$1;
(statearr_30631_30683[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (35))){
var inst_30578 = (state_30593[(2)]);
var state_30593__$1 = state_30593;
if(cljs.core.truth_(inst_30578)){
var statearr_30632_30684 = state_30593__$1;
(statearr_30632_30684[(1)] = (36));

} else {
var statearr_30633_30685 = state_30593__$1;
(statearr_30633_30685[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (19))){
var inst_30520 = (state_30593[(7)]);
var inst_30540 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30520);
var state_30593__$1 = state_30593;
var statearr_30634_30686 = state_30593__$1;
(statearr_30634_30686[(2)] = inst_30540);

(statearr_30634_30686[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (11))){
var inst_30520 = (state_30593[(7)]);
var inst_30524 = (inst_30520 == null);
var inst_30525 = cljs.core.not.call(null,inst_30524);
var state_30593__$1 = state_30593;
if(inst_30525){
var statearr_30635_30687 = state_30593__$1;
(statearr_30635_30687[(1)] = (13));

} else {
var statearr_30636_30688 = state_30593__$1;
(statearr_30636_30688[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (9))){
var inst_30495 = (state_30593[(8)]);
var state_30593__$1 = state_30593;
var statearr_30637_30689 = state_30593__$1;
(statearr_30637_30689[(2)] = inst_30495);

(statearr_30637_30689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (5))){
var state_30593__$1 = state_30593;
var statearr_30638_30690 = state_30593__$1;
(statearr_30638_30690[(2)] = true);

(statearr_30638_30690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (14))){
var state_30593__$1 = state_30593;
var statearr_30639_30691 = state_30593__$1;
(statearr_30639_30691[(2)] = false);

(statearr_30639_30691[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (26))){
var inst_30553 = (state_30593[(11)]);
var inst_30560 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30553);
var state_30593__$1 = state_30593;
var statearr_30640_30692 = state_30593__$1;
(statearr_30640_30692[(2)] = inst_30560);

(statearr_30640_30692[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (16))){
var state_30593__$1 = state_30593;
var statearr_30641_30693 = state_30593__$1;
(statearr_30641_30693[(2)] = true);

(statearr_30641_30693[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (38))){
var inst_30583 = (state_30593[(2)]);
var state_30593__$1 = state_30593;
var statearr_30642_30694 = state_30593__$1;
(statearr_30642_30694[(2)] = inst_30583);

(statearr_30642_30694[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (30))){
var inst_30544 = (state_30593[(10)]);
var inst_30545 = (state_30593[(13)]);
var inst_30553 = (state_30593[(11)]);
var inst_30570 = cljs.core.empty_QMARK_.call(null,inst_30544);
var inst_30571 = inst_30545.call(null,inst_30553);
var inst_30572 = cljs.core.not.call(null,inst_30571);
var inst_30573 = ((inst_30570) && (inst_30572));
var state_30593__$1 = state_30593;
var statearr_30643_30695 = state_30593__$1;
(statearr_30643_30695[(2)] = inst_30573);

(statearr_30643_30695[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (10))){
var inst_30495 = (state_30593[(8)]);
var inst_30516 = (state_30593[(2)]);
var inst_30517 = cljs.core.get.call(null,inst_30516,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30518 = cljs.core.get.call(null,inst_30516,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30519 = cljs.core.get.call(null,inst_30516,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30520 = inst_30495;
var state_30593__$1 = (function (){var statearr_30644 = state_30593;
(statearr_30644[(16)] = inst_30517);

(statearr_30644[(17)] = inst_30518);

(statearr_30644[(18)] = inst_30519);

(statearr_30644[(7)] = inst_30520);

return statearr_30644;
})();
var statearr_30645_30696 = state_30593__$1;
(statearr_30645_30696[(2)] = null);

(statearr_30645_30696[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (18))){
var inst_30535 = (state_30593[(2)]);
var state_30593__$1 = state_30593;
var statearr_30646_30697 = state_30593__$1;
(statearr_30646_30697[(2)] = inst_30535);

(statearr_30646_30697[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (37))){
var state_30593__$1 = state_30593;
var statearr_30647_30698 = state_30593__$1;
(statearr_30647_30698[(2)] = null);

(statearr_30647_30698[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (8))){
var inst_30495 = (state_30593[(8)]);
var inst_30513 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30495);
var state_30593__$1 = state_30593;
var statearr_30648_30699 = state_30593__$1;
(statearr_30648_30699[(2)] = inst_30513);

(statearr_30648_30699[(1)] = (10));


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
});})(c__29401__auto___30653,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29384__auto__,c__29401__auto___30653,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29385__auto__ = null;
var cljs$core$async$mix_$_state_machine__29385__auto____0 = (function (){
var statearr_30649 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30649[(0)] = cljs$core$async$mix_$_state_machine__29385__auto__);

(statearr_30649[(1)] = (1));

return statearr_30649;
});
var cljs$core$async$mix_$_state_machine__29385__auto____1 = (function (state_30593){
while(true){
var ret_value__29386__auto__ = (function (){try{while(true){
var result__29387__auto__ = switch__29384__auto__.call(null,state_30593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29387__auto__;
}
break;
}
}catch (e30650){if((e30650 instanceof Object)){
var ex__29388__auto__ = e30650;
var statearr_30651_30700 = state_30593;
(statearr_30651_30700[(5)] = ex__29388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30701 = state_30593;
state_30593 = G__30701;
continue;
} else {
return ret_value__29386__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29385__auto__ = function(state_30593){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29385__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29385__auto____1.call(this,state_30593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29385__auto____0;
cljs$core$async$mix_$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29385__auto____1;
return cljs$core$async$mix_$_state_machine__29385__auto__;
})()
;})(switch__29384__auto__,c__29401__auto___30653,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29403__auto__ = (function (){var statearr_30652 = f__29402__auto__.call(null);
(statearr_30652[(6)] = c__29401__auto___30653);

return statearr_30652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29403__auto__);
});})(c__29401__auto___30653,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30703 = arguments.length;
switch (G__30703) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__30707 = arguments.length;
switch (G__30707) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__30705_SHARP_){
if(cljs.core.truth_(p1__30705_SHARP_.call(null,topic))){
return p1__30705_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30705_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30708 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30708 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30709){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30709 = meta30709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30710,meta30709__$1){
var self__ = this;
var _30710__$1 = this;
return (new cljs.core.async.t_cljs$core$async30708(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30709__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30708.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30710){
var self__ = this;
var _30710__$1 = this;
return self__.meta30709;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30708.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30708.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30708.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30708.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30708.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30708.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30708.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30708.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30709","meta30709",-1406008997,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30708.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30708.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30708";

cljs.core.async.t_cljs$core$async30708.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async30708");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30708.
 */
cljs.core.async.__GT_t_cljs$core$async30708 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30708(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30709){
return (new cljs.core.async.t_cljs$core$async30708(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30709));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30708(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29401__auto___30828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29401__auto___30828,mults,ensure_mult,p){
return (function (){
var f__29402__auto__ = (function (){var switch__29384__auto__ = ((function (c__29401__auto___30828,mults,ensure_mult,p){
return (function (state_30782){
var state_val_30783 = (state_30782[(1)]);
if((state_val_30783 === (7))){
var inst_30778 = (state_30782[(2)]);
var state_30782__$1 = state_30782;
var statearr_30784_30829 = state_30782__$1;
(statearr_30784_30829[(2)] = inst_30778);

(statearr_30784_30829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (20))){
var state_30782__$1 = state_30782;
var statearr_30785_30830 = state_30782__$1;
(statearr_30785_30830[(2)] = null);

(statearr_30785_30830[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (1))){
var state_30782__$1 = state_30782;
var statearr_30786_30831 = state_30782__$1;
(statearr_30786_30831[(2)] = null);

(statearr_30786_30831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (24))){
var inst_30761 = (state_30782[(7)]);
var inst_30770 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30761);
var state_30782__$1 = state_30782;
var statearr_30787_30832 = state_30782__$1;
(statearr_30787_30832[(2)] = inst_30770);

(statearr_30787_30832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (4))){
var inst_30713 = (state_30782[(8)]);
var inst_30713__$1 = (state_30782[(2)]);
var inst_30714 = (inst_30713__$1 == null);
var state_30782__$1 = (function (){var statearr_30788 = state_30782;
(statearr_30788[(8)] = inst_30713__$1);

return statearr_30788;
})();
if(cljs.core.truth_(inst_30714)){
var statearr_30789_30833 = state_30782__$1;
(statearr_30789_30833[(1)] = (5));

} else {
var statearr_30790_30834 = state_30782__$1;
(statearr_30790_30834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (15))){
var inst_30755 = (state_30782[(2)]);
var state_30782__$1 = state_30782;
var statearr_30791_30835 = state_30782__$1;
(statearr_30791_30835[(2)] = inst_30755);

(statearr_30791_30835[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (21))){
var inst_30775 = (state_30782[(2)]);
var state_30782__$1 = (function (){var statearr_30792 = state_30782;
(statearr_30792[(9)] = inst_30775);

return statearr_30792;
})();
var statearr_30793_30836 = state_30782__$1;
(statearr_30793_30836[(2)] = null);

(statearr_30793_30836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (13))){
var inst_30737 = (state_30782[(10)]);
var inst_30739 = cljs.core.chunked_seq_QMARK_.call(null,inst_30737);
var state_30782__$1 = state_30782;
if(inst_30739){
var statearr_30794_30837 = state_30782__$1;
(statearr_30794_30837[(1)] = (16));

} else {
var statearr_30795_30838 = state_30782__$1;
(statearr_30795_30838[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (22))){
var inst_30767 = (state_30782[(2)]);
var state_30782__$1 = state_30782;
if(cljs.core.truth_(inst_30767)){
var statearr_30796_30839 = state_30782__$1;
(statearr_30796_30839[(1)] = (23));

} else {
var statearr_30797_30840 = state_30782__$1;
(statearr_30797_30840[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (6))){
var inst_30763 = (state_30782[(11)]);
var inst_30761 = (state_30782[(7)]);
var inst_30713 = (state_30782[(8)]);
var inst_30761__$1 = topic_fn.call(null,inst_30713);
var inst_30762 = cljs.core.deref.call(null,mults);
var inst_30763__$1 = cljs.core.get.call(null,inst_30762,inst_30761__$1);
var state_30782__$1 = (function (){var statearr_30798 = state_30782;
(statearr_30798[(11)] = inst_30763__$1);

(statearr_30798[(7)] = inst_30761__$1);

return statearr_30798;
})();
if(cljs.core.truth_(inst_30763__$1)){
var statearr_30799_30841 = state_30782__$1;
(statearr_30799_30841[(1)] = (19));

} else {
var statearr_30800_30842 = state_30782__$1;
(statearr_30800_30842[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (25))){
var inst_30772 = (state_30782[(2)]);
var state_30782__$1 = state_30782;
var statearr_30801_30843 = state_30782__$1;
(statearr_30801_30843[(2)] = inst_30772);

(statearr_30801_30843[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (17))){
var inst_30737 = (state_30782[(10)]);
var inst_30746 = cljs.core.first.call(null,inst_30737);
var inst_30747 = cljs.core.async.muxch_STAR_.call(null,inst_30746);
var inst_30748 = cljs.core.async.close_BANG_.call(null,inst_30747);
var inst_30749 = cljs.core.next.call(null,inst_30737);
var inst_30723 = inst_30749;
var inst_30724 = null;
var inst_30725 = (0);
var inst_30726 = (0);
var state_30782__$1 = (function (){var statearr_30802 = state_30782;
(statearr_30802[(12)] = inst_30726);

(statearr_30802[(13)] = inst_30748);

(statearr_30802[(14)] = inst_30724);

(statearr_30802[(15)] = inst_30725);

(statearr_30802[(16)] = inst_30723);

return statearr_30802;
})();
var statearr_30803_30844 = state_30782__$1;
(statearr_30803_30844[(2)] = null);

(statearr_30803_30844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (3))){
var inst_30780 = (state_30782[(2)]);
var state_30782__$1 = state_30782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30782__$1,inst_30780);
} else {
if((state_val_30783 === (12))){
var inst_30757 = (state_30782[(2)]);
var state_30782__$1 = state_30782;
var statearr_30804_30845 = state_30782__$1;
(statearr_30804_30845[(2)] = inst_30757);

(statearr_30804_30845[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (2))){
var state_30782__$1 = state_30782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30782__$1,(4),ch);
} else {
if((state_val_30783 === (23))){
var state_30782__$1 = state_30782;
var statearr_30805_30846 = state_30782__$1;
(statearr_30805_30846[(2)] = null);

(statearr_30805_30846[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (19))){
var inst_30763 = (state_30782[(11)]);
var inst_30713 = (state_30782[(8)]);
var inst_30765 = cljs.core.async.muxch_STAR_.call(null,inst_30763);
var state_30782__$1 = state_30782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30782__$1,(22),inst_30765,inst_30713);
} else {
if((state_val_30783 === (11))){
var inst_30737 = (state_30782[(10)]);
var inst_30723 = (state_30782[(16)]);
var inst_30737__$1 = cljs.core.seq.call(null,inst_30723);
var state_30782__$1 = (function (){var statearr_30806 = state_30782;
(statearr_30806[(10)] = inst_30737__$1);

return statearr_30806;
})();
if(inst_30737__$1){
var statearr_30807_30847 = state_30782__$1;
(statearr_30807_30847[(1)] = (13));

} else {
var statearr_30808_30848 = state_30782__$1;
(statearr_30808_30848[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (9))){
var inst_30759 = (state_30782[(2)]);
var state_30782__$1 = state_30782;
var statearr_30809_30849 = state_30782__$1;
(statearr_30809_30849[(2)] = inst_30759);

(statearr_30809_30849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (5))){
var inst_30720 = cljs.core.deref.call(null,mults);
var inst_30721 = cljs.core.vals.call(null,inst_30720);
var inst_30722 = cljs.core.seq.call(null,inst_30721);
var inst_30723 = inst_30722;
var inst_30724 = null;
var inst_30725 = (0);
var inst_30726 = (0);
var state_30782__$1 = (function (){var statearr_30810 = state_30782;
(statearr_30810[(12)] = inst_30726);

(statearr_30810[(14)] = inst_30724);

(statearr_30810[(15)] = inst_30725);

(statearr_30810[(16)] = inst_30723);

return statearr_30810;
})();
var statearr_30811_30850 = state_30782__$1;
(statearr_30811_30850[(2)] = null);

(statearr_30811_30850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (14))){
var state_30782__$1 = state_30782;
var statearr_30815_30851 = state_30782__$1;
(statearr_30815_30851[(2)] = null);

(statearr_30815_30851[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (16))){
var inst_30737 = (state_30782[(10)]);
var inst_30741 = cljs.core.chunk_first.call(null,inst_30737);
var inst_30742 = cljs.core.chunk_rest.call(null,inst_30737);
var inst_30743 = cljs.core.count.call(null,inst_30741);
var inst_30723 = inst_30742;
var inst_30724 = inst_30741;
var inst_30725 = inst_30743;
var inst_30726 = (0);
var state_30782__$1 = (function (){var statearr_30816 = state_30782;
(statearr_30816[(12)] = inst_30726);

(statearr_30816[(14)] = inst_30724);

(statearr_30816[(15)] = inst_30725);

(statearr_30816[(16)] = inst_30723);

return statearr_30816;
})();
var statearr_30817_30852 = state_30782__$1;
(statearr_30817_30852[(2)] = null);

(statearr_30817_30852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (10))){
var inst_30726 = (state_30782[(12)]);
var inst_30724 = (state_30782[(14)]);
var inst_30725 = (state_30782[(15)]);
var inst_30723 = (state_30782[(16)]);
var inst_30731 = cljs.core._nth.call(null,inst_30724,inst_30726);
var inst_30732 = cljs.core.async.muxch_STAR_.call(null,inst_30731);
var inst_30733 = cljs.core.async.close_BANG_.call(null,inst_30732);
var inst_30734 = (inst_30726 + (1));
var tmp30812 = inst_30724;
var tmp30813 = inst_30725;
var tmp30814 = inst_30723;
var inst_30723__$1 = tmp30814;
var inst_30724__$1 = tmp30812;
var inst_30725__$1 = tmp30813;
var inst_30726__$1 = inst_30734;
var state_30782__$1 = (function (){var statearr_30818 = state_30782;
(statearr_30818[(12)] = inst_30726__$1);

(statearr_30818[(17)] = inst_30733);

(statearr_30818[(14)] = inst_30724__$1);

(statearr_30818[(15)] = inst_30725__$1);

(statearr_30818[(16)] = inst_30723__$1);

return statearr_30818;
})();
var statearr_30819_30853 = state_30782__$1;
(statearr_30819_30853[(2)] = null);

(statearr_30819_30853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (18))){
var inst_30752 = (state_30782[(2)]);
var state_30782__$1 = state_30782;
var statearr_30820_30854 = state_30782__$1;
(statearr_30820_30854[(2)] = inst_30752);

(statearr_30820_30854[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (8))){
var inst_30726 = (state_30782[(12)]);
var inst_30725 = (state_30782[(15)]);
var inst_30728 = (inst_30726 < inst_30725);
var inst_30729 = inst_30728;
var state_30782__$1 = state_30782;
if(cljs.core.truth_(inst_30729)){
var statearr_30821_30855 = state_30782__$1;
(statearr_30821_30855[(1)] = (10));

} else {
var statearr_30822_30856 = state_30782__$1;
(statearr_30822_30856[(1)] = (11));

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
});})(c__29401__auto___30828,mults,ensure_mult,p))
;
return ((function (switch__29384__auto__,c__29401__auto___30828,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29385__auto__ = null;
var cljs$core$async$state_machine__29385__auto____0 = (function (){
var statearr_30823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30823[(0)] = cljs$core$async$state_machine__29385__auto__);

(statearr_30823[(1)] = (1));

return statearr_30823;
});
var cljs$core$async$state_machine__29385__auto____1 = (function (state_30782){
while(true){
var ret_value__29386__auto__ = (function (){try{while(true){
var result__29387__auto__ = switch__29384__auto__.call(null,state_30782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29387__auto__;
}
break;
}
}catch (e30824){if((e30824 instanceof Object)){
var ex__29388__auto__ = e30824;
var statearr_30825_30857 = state_30782;
(statearr_30825_30857[(5)] = ex__29388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30858 = state_30782;
state_30782 = G__30858;
continue;
} else {
return ret_value__29386__auto__;
}
break;
}
});
cljs$core$async$state_machine__29385__auto__ = function(state_30782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29385__auto____1.call(this,state_30782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29385__auto____0;
cljs$core$async$state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29385__auto____1;
return cljs$core$async$state_machine__29385__auto__;
})()
;})(switch__29384__auto__,c__29401__auto___30828,mults,ensure_mult,p))
})();
var state__29403__auto__ = (function (){var statearr_30826 = f__29402__auto__.call(null);
(statearr_30826[(6)] = c__29401__auto___30828);

return statearr_30826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29403__auto__);
});})(c__29401__auto___30828,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__30860 = arguments.length;
switch (G__30860) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__30863 = arguments.length;
switch (G__30863) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__30866 = arguments.length;
switch (G__30866) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29401__auto___30933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29401__auto___30933,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29402__auto__ = (function (){var switch__29384__auto__ = ((function (c__29401__auto___30933,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30905){
var state_val_30906 = (state_30905[(1)]);
if((state_val_30906 === (7))){
var state_30905__$1 = state_30905;
var statearr_30907_30934 = state_30905__$1;
(statearr_30907_30934[(2)] = null);

(statearr_30907_30934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (1))){
var state_30905__$1 = state_30905;
var statearr_30908_30935 = state_30905__$1;
(statearr_30908_30935[(2)] = null);

(statearr_30908_30935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (4))){
var inst_30869 = (state_30905[(7)]);
var inst_30871 = (inst_30869 < cnt);
var state_30905__$1 = state_30905;
if(cljs.core.truth_(inst_30871)){
var statearr_30909_30936 = state_30905__$1;
(statearr_30909_30936[(1)] = (6));

} else {
var statearr_30910_30937 = state_30905__$1;
(statearr_30910_30937[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (15))){
var inst_30901 = (state_30905[(2)]);
var state_30905__$1 = state_30905;
var statearr_30911_30938 = state_30905__$1;
(statearr_30911_30938[(2)] = inst_30901);

(statearr_30911_30938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (13))){
var inst_30894 = cljs.core.async.close_BANG_.call(null,out);
var state_30905__$1 = state_30905;
var statearr_30912_30939 = state_30905__$1;
(statearr_30912_30939[(2)] = inst_30894);

(statearr_30912_30939[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (6))){
var state_30905__$1 = state_30905;
var statearr_30913_30940 = state_30905__$1;
(statearr_30913_30940[(2)] = null);

(statearr_30913_30940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (3))){
var inst_30903 = (state_30905[(2)]);
var state_30905__$1 = state_30905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30905__$1,inst_30903);
} else {
if((state_val_30906 === (12))){
var inst_30891 = (state_30905[(8)]);
var inst_30891__$1 = (state_30905[(2)]);
var inst_30892 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30891__$1);
var state_30905__$1 = (function (){var statearr_30914 = state_30905;
(statearr_30914[(8)] = inst_30891__$1);

return statearr_30914;
})();
if(cljs.core.truth_(inst_30892)){
var statearr_30915_30941 = state_30905__$1;
(statearr_30915_30941[(1)] = (13));

} else {
var statearr_30916_30942 = state_30905__$1;
(statearr_30916_30942[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (2))){
var inst_30868 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30869 = (0);
var state_30905__$1 = (function (){var statearr_30917 = state_30905;
(statearr_30917[(9)] = inst_30868);

(statearr_30917[(7)] = inst_30869);

return statearr_30917;
})();
var statearr_30918_30943 = state_30905__$1;
(statearr_30918_30943[(2)] = null);

(statearr_30918_30943[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (11))){
var inst_30869 = (state_30905[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30905,(10),Object,null,(9));
var inst_30878 = chs__$1.call(null,inst_30869);
var inst_30879 = done.call(null,inst_30869);
var inst_30880 = cljs.core.async.take_BANG_.call(null,inst_30878,inst_30879);
var state_30905__$1 = state_30905;
var statearr_30919_30944 = state_30905__$1;
(statearr_30919_30944[(2)] = inst_30880);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30905__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (9))){
var inst_30869 = (state_30905[(7)]);
var inst_30882 = (state_30905[(2)]);
var inst_30883 = (inst_30869 + (1));
var inst_30869__$1 = inst_30883;
var state_30905__$1 = (function (){var statearr_30920 = state_30905;
(statearr_30920[(10)] = inst_30882);

(statearr_30920[(7)] = inst_30869__$1);

return statearr_30920;
})();
var statearr_30921_30945 = state_30905__$1;
(statearr_30921_30945[(2)] = null);

(statearr_30921_30945[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (5))){
var inst_30889 = (state_30905[(2)]);
var state_30905__$1 = (function (){var statearr_30922 = state_30905;
(statearr_30922[(11)] = inst_30889);

return statearr_30922;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30905__$1,(12),dchan);
} else {
if((state_val_30906 === (14))){
var inst_30891 = (state_30905[(8)]);
var inst_30896 = cljs.core.apply.call(null,f,inst_30891);
var state_30905__$1 = state_30905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30905__$1,(16),out,inst_30896);
} else {
if((state_val_30906 === (16))){
var inst_30898 = (state_30905[(2)]);
var state_30905__$1 = (function (){var statearr_30923 = state_30905;
(statearr_30923[(12)] = inst_30898);

return statearr_30923;
})();
var statearr_30924_30946 = state_30905__$1;
(statearr_30924_30946[(2)] = null);

(statearr_30924_30946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (10))){
var inst_30873 = (state_30905[(2)]);
var inst_30874 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30905__$1 = (function (){var statearr_30925 = state_30905;
(statearr_30925[(13)] = inst_30873);

return statearr_30925;
})();
var statearr_30926_30947 = state_30905__$1;
(statearr_30926_30947[(2)] = inst_30874);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30905__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (8))){
var inst_30887 = (state_30905[(2)]);
var state_30905__$1 = state_30905;
var statearr_30927_30948 = state_30905__$1;
(statearr_30927_30948[(2)] = inst_30887);

(statearr_30927_30948[(1)] = (5));


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
});})(c__29401__auto___30933,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29384__auto__,c__29401__auto___30933,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29385__auto__ = null;
var cljs$core$async$state_machine__29385__auto____0 = (function (){
var statearr_30928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30928[(0)] = cljs$core$async$state_machine__29385__auto__);

(statearr_30928[(1)] = (1));

return statearr_30928;
});
var cljs$core$async$state_machine__29385__auto____1 = (function (state_30905){
while(true){
var ret_value__29386__auto__ = (function (){try{while(true){
var result__29387__auto__ = switch__29384__auto__.call(null,state_30905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29387__auto__;
}
break;
}
}catch (e30929){if((e30929 instanceof Object)){
var ex__29388__auto__ = e30929;
var statearr_30930_30949 = state_30905;
(statearr_30930_30949[(5)] = ex__29388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30950 = state_30905;
state_30905 = G__30950;
continue;
} else {
return ret_value__29386__auto__;
}
break;
}
});
cljs$core$async$state_machine__29385__auto__ = function(state_30905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29385__auto____1.call(this,state_30905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29385__auto____0;
cljs$core$async$state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29385__auto____1;
return cljs$core$async$state_machine__29385__auto__;
})()
;})(switch__29384__auto__,c__29401__auto___30933,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29403__auto__ = (function (){var statearr_30931 = f__29402__auto__.call(null);
(statearr_30931[(6)] = c__29401__auto___30933);

return statearr_30931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29403__auto__);
});})(c__29401__auto___30933,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__30953 = arguments.length;
switch (G__30953) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29401__auto___31007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29401__auto___31007,out){
return (function (){
var f__29402__auto__ = (function (){var switch__29384__auto__ = ((function (c__29401__auto___31007,out){
return (function (state_30985){
var state_val_30986 = (state_30985[(1)]);
if((state_val_30986 === (7))){
var inst_30964 = (state_30985[(7)]);
var inst_30965 = (state_30985[(8)]);
var inst_30964__$1 = (state_30985[(2)]);
var inst_30965__$1 = cljs.core.nth.call(null,inst_30964__$1,(0),null);
var inst_30966 = cljs.core.nth.call(null,inst_30964__$1,(1),null);
var inst_30967 = (inst_30965__$1 == null);
var state_30985__$1 = (function (){var statearr_30987 = state_30985;
(statearr_30987[(9)] = inst_30966);

(statearr_30987[(7)] = inst_30964__$1);

(statearr_30987[(8)] = inst_30965__$1);

return statearr_30987;
})();
if(cljs.core.truth_(inst_30967)){
var statearr_30988_31008 = state_30985__$1;
(statearr_30988_31008[(1)] = (8));

} else {
var statearr_30989_31009 = state_30985__$1;
(statearr_30989_31009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (1))){
var inst_30954 = cljs.core.vec.call(null,chs);
var inst_30955 = inst_30954;
var state_30985__$1 = (function (){var statearr_30990 = state_30985;
(statearr_30990[(10)] = inst_30955);

return statearr_30990;
})();
var statearr_30991_31010 = state_30985__$1;
(statearr_30991_31010[(2)] = null);

(statearr_30991_31010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (4))){
var inst_30955 = (state_30985[(10)]);
var state_30985__$1 = state_30985;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30985__$1,(7),inst_30955);
} else {
if((state_val_30986 === (6))){
var inst_30981 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
var statearr_30992_31011 = state_30985__$1;
(statearr_30992_31011[(2)] = inst_30981);

(statearr_30992_31011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (3))){
var inst_30983 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30985__$1,inst_30983);
} else {
if((state_val_30986 === (2))){
var inst_30955 = (state_30985[(10)]);
var inst_30957 = cljs.core.count.call(null,inst_30955);
var inst_30958 = (inst_30957 > (0));
var state_30985__$1 = state_30985;
if(cljs.core.truth_(inst_30958)){
var statearr_30994_31012 = state_30985__$1;
(statearr_30994_31012[(1)] = (4));

} else {
var statearr_30995_31013 = state_30985__$1;
(statearr_30995_31013[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (11))){
var inst_30955 = (state_30985[(10)]);
var inst_30974 = (state_30985[(2)]);
var tmp30993 = inst_30955;
var inst_30955__$1 = tmp30993;
var state_30985__$1 = (function (){var statearr_30996 = state_30985;
(statearr_30996[(10)] = inst_30955__$1);

(statearr_30996[(11)] = inst_30974);

return statearr_30996;
})();
var statearr_30997_31014 = state_30985__$1;
(statearr_30997_31014[(2)] = null);

(statearr_30997_31014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (9))){
var inst_30965 = (state_30985[(8)]);
var state_30985__$1 = state_30985;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30985__$1,(11),out,inst_30965);
} else {
if((state_val_30986 === (5))){
var inst_30979 = cljs.core.async.close_BANG_.call(null,out);
var state_30985__$1 = state_30985;
var statearr_30998_31015 = state_30985__$1;
(statearr_30998_31015[(2)] = inst_30979);

(statearr_30998_31015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (10))){
var inst_30977 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
var statearr_30999_31016 = state_30985__$1;
(statearr_30999_31016[(2)] = inst_30977);

(statearr_30999_31016[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (8))){
var inst_30966 = (state_30985[(9)]);
var inst_30964 = (state_30985[(7)]);
var inst_30965 = (state_30985[(8)]);
var inst_30955 = (state_30985[(10)]);
var inst_30969 = (function (){var cs = inst_30955;
var vec__30960 = inst_30964;
var v = inst_30965;
var c = inst_30966;
return ((function (cs,vec__30960,v,c,inst_30966,inst_30964,inst_30965,inst_30955,state_val_30986,c__29401__auto___31007,out){
return (function (p1__30951_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30951_SHARP_);
});
;})(cs,vec__30960,v,c,inst_30966,inst_30964,inst_30965,inst_30955,state_val_30986,c__29401__auto___31007,out))
})();
var inst_30970 = cljs.core.filterv.call(null,inst_30969,inst_30955);
var inst_30955__$1 = inst_30970;
var state_30985__$1 = (function (){var statearr_31000 = state_30985;
(statearr_31000[(10)] = inst_30955__$1);

return statearr_31000;
})();
var statearr_31001_31017 = state_30985__$1;
(statearr_31001_31017[(2)] = null);

(statearr_31001_31017[(1)] = (2));


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
});})(c__29401__auto___31007,out))
;
return ((function (switch__29384__auto__,c__29401__auto___31007,out){
return (function() {
var cljs$core$async$state_machine__29385__auto__ = null;
var cljs$core$async$state_machine__29385__auto____0 = (function (){
var statearr_31002 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31002[(0)] = cljs$core$async$state_machine__29385__auto__);

(statearr_31002[(1)] = (1));

return statearr_31002;
});
var cljs$core$async$state_machine__29385__auto____1 = (function (state_30985){
while(true){
var ret_value__29386__auto__ = (function (){try{while(true){
var result__29387__auto__ = switch__29384__auto__.call(null,state_30985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29387__auto__;
}
break;
}
}catch (e31003){if((e31003 instanceof Object)){
var ex__29388__auto__ = e31003;
var statearr_31004_31018 = state_30985;
(statearr_31004_31018[(5)] = ex__29388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31019 = state_30985;
state_30985 = G__31019;
continue;
} else {
return ret_value__29386__auto__;
}
break;
}
});
cljs$core$async$state_machine__29385__auto__ = function(state_30985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29385__auto____1.call(this,state_30985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29385__auto____0;
cljs$core$async$state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29385__auto____1;
return cljs$core$async$state_machine__29385__auto__;
})()
;})(switch__29384__auto__,c__29401__auto___31007,out))
})();
var state__29403__auto__ = (function (){var statearr_31005 = f__29402__auto__.call(null);
(statearr_31005[(6)] = c__29401__auto___31007);

return statearr_31005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29403__auto__);
});})(c__29401__auto___31007,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31021 = arguments.length;
switch (G__31021) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29401__auto___31066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29401__auto___31066,out){
return (function (){
var f__29402__auto__ = (function (){var switch__29384__auto__ = ((function (c__29401__auto___31066,out){
return (function (state_31045){
var state_val_31046 = (state_31045[(1)]);
if((state_val_31046 === (7))){
var inst_31027 = (state_31045[(7)]);
var inst_31027__$1 = (state_31045[(2)]);
var inst_31028 = (inst_31027__$1 == null);
var inst_31029 = cljs.core.not.call(null,inst_31028);
var state_31045__$1 = (function (){var statearr_31047 = state_31045;
(statearr_31047[(7)] = inst_31027__$1);

return statearr_31047;
})();
if(inst_31029){
var statearr_31048_31067 = state_31045__$1;
(statearr_31048_31067[(1)] = (8));

} else {
var statearr_31049_31068 = state_31045__$1;
(statearr_31049_31068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (1))){
var inst_31022 = (0);
var state_31045__$1 = (function (){var statearr_31050 = state_31045;
(statearr_31050[(8)] = inst_31022);

return statearr_31050;
})();
var statearr_31051_31069 = state_31045__$1;
(statearr_31051_31069[(2)] = null);

(statearr_31051_31069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (4))){
var state_31045__$1 = state_31045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31045__$1,(7),ch);
} else {
if((state_val_31046 === (6))){
var inst_31040 = (state_31045[(2)]);
var state_31045__$1 = state_31045;
var statearr_31052_31070 = state_31045__$1;
(statearr_31052_31070[(2)] = inst_31040);

(statearr_31052_31070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (3))){
var inst_31042 = (state_31045[(2)]);
var inst_31043 = cljs.core.async.close_BANG_.call(null,out);
var state_31045__$1 = (function (){var statearr_31053 = state_31045;
(statearr_31053[(9)] = inst_31042);

return statearr_31053;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31045__$1,inst_31043);
} else {
if((state_val_31046 === (2))){
var inst_31022 = (state_31045[(8)]);
var inst_31024 = (inst_31022 < n);
var state_31045__$1 = state_31045;
if(cljs.core.truth_(inst_31024)){
var statearr_31054_31071 = state_31045__$1;
(statearr_31054_31071[(1)] = (4));

} else {
var statearr_31055_31072 = state_31045__$1;
(statearr_31055_31072[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (11))){
var inst_31022 = (state_31045[(8)]);
var inst_31032 = (state_31045[(2)]);
var inst_31033 = (inst_31022 + (1));
var inst_31022__$1 = inst_31033;
var state_31045__$1 = (function (){var statearr_31056 = state_31045;
(statearr_31056[(8)] = inst_31022__$1);

(statearr_31056[(10)] = inst_31032);

return statearr_31056;
})();
var statearr_31057_31073 = state_31045__$1;
(statearr_31057_31073[(2)] = null);

(statearr_31057_31073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (9))){
var state_31045__$1 = state_31045;
var statearr_31058_31074 = state_31045__$1;
(statearr_31058_31074[(2)] = null);

(statearr_31058_31074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (5))){
var state_31045__$1 = state_31045;
var statearr_31059_31075 = state_31045__$1;
(statearr_31059_31075[(2)] = null);

(statearr_31059_31075[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (10))){
var inst_31037 = (state_31045[(2)]);
var state_31045__$1 = state_31045;
var statearr_31060_31076 = state_31045__$1;
(statearr_31060_31076[(2)] = inst_31037);

(statearr_31060_31076[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (8))){
var inst_31027 = (state_31045[(7)]);
var state_31045__$1 = state_31045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31045__$1,(11),out,inst_31027);
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
});})(c__29401__auto___31066,out))
;
return ((function (switch__29384__auto__,c__29401__auto___31066,out){
return (function() {
var cljs$core$async$state_machine__29385__auto__ = null;
var cljs$core$async$state_machine__29385__auto____0 = (function (){
var statearr_31061 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31061[(0)] = cljs$core$async$state_machine__29385__auto__);

(statearr_31061[(1)] = (1));

return statearr_31061;
});
var cljs$core$async$state_machine__29385__auto____1 = (function (state_31045){
while(true){
var ret_value__29386__auto__ = (function (){try{while(true){
var result__29387__auto__ = switch__29384__auto__.call(null,state_31045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29387__auto__;
}
break;
}
}catch (e31062){if((e31062 instanceof Object)){
var ex__29388__auto__ = e31062;
var statearr_31063_31077 = state_31045;
(statearr_31063_31077[(5)] = ex__29388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31078 = state_31045;
state_31045 = G__31078;
continue;
} else {
return ret_value__29386__auto__;
}
break;
}
});
cljs$core$async$state_machine__29385__auto__ = function(state_31045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29385__auto____1.call(this,state_31045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29385__auto____0;
cljs$core$async$state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29385__auto____1;
return cljs$core$async$state_machine__29385__auto__;
})()
;})(switch__29384__auto__,c__29401__auto___31066,out))
})();
var state__29403__auto__ = (function (){var statearr_31064 = f__29402__auto__.call(null);
(statearr_31064[(6)] = c__29401__auto___31066);

return statearr_31064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29403__auto__);
});})(c__29401__auto___31066,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31080 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31080 = (function (f,ch,meta31081){
this.f = f;
this.ch = ch;
this.meta31081 = meta31081;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31082,meta31081__$1){
var self__ = this;
var _31082__$1 = this;
return (new cljs.core.async.t_cljs$core$async31080(self__.f,self__.ch,meta31081__$1));
});

cljs.core.async.t_cljs$core$async31080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31082){
var self__ = this;
var _31082__$1 = this;
return self__.meta31081;
});

cljs.core.async.t_cljs$core$async31080.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31080.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31080.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31080.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31080.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31083 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31083 = (function (f,ch,meta31081,_,fn1,meta31084){
this.f = f;
this.ch = ch;
this.meta31081 = meta31081;
this._ = _;
this.fn1 = fn1;
this.meta31084 = meta31084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31085,meta31084__$1){
var self__ = this;
var _31085__$1 = this;
return (new cljs.core.async.t_cljs$core$async31083(self__.f,self__.ch,self__.meta31081,self__._,self__.fn1,meta31084__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31083.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31085){
var self__ = this;
var _31085__$1 = this;
return self__.meta31084;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31083.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31083.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31083.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31083.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31079_SHARP_){
return f1.call(null,(((p1__31079_SHARP_ == null))?null:self__.f.call(null,p1__31079_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31083.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31081","meta31081",-1790069471,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31080","cljs.core.async/t_cljs$core$async31080",-1054297464,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31084","meta31084",-1471794875,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31083.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31083.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31083";

cljs.core.async.t_cljs$core$async31083.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async31083");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31083.
 */
cljs.core.async.__GT_t_cljs$core$async31083 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31083(f__$1,ch__$1,meta31081__$1,___$2,fn1__$1,meta31084){
return (new cljs.core.async.t_cljs$core$async31083(f__$1,ch__$1,meta31081__$1,___$2,fn1__$1,meta31084));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31083(self__.f,self__.ch,self__.meta31081,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31080.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31080.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31080.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31081","meta31081",-1790069471,null)], null);
});

cljs.core.async.t_cljs$core$async31080.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31080.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31080";

cljs.core.async.t_cljs$core$async31080.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async31080");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31080.
 */
cljs.core.async.__GT_t_cljs$core$async31080 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31080(f__$1,ch__$1,meta31081){
return (new cljs.core.async.t_cljs$core$async31080(f__$1,ch__$1,meta31081));
});

}

return (new cljs.core.async.t_cljs$core$async31080(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31086 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31086 = (function (f,ch,meta31087){
this.f = f;
this.ch = ch;
this.meta31087 = meta31087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31088,meta31087__$1){
var self__ = this;
var _31088__$1 = this;
return (new cljs.core.async.t_cljs$core$async31086(self__.f,self__.ch,meta31087__$1));
});

cljs.core.async.t_cljs$core$async31086.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31088){
var self__ = this;
var _31088__$1 = this;
return self__.meta31087;
});

cljs.core.async.t_cljs$core$async31086.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31086.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31086.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31086.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31086.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31086.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31086.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31087","meta31087",-1673687750,null)], null);
});

cljs.core.async.t_cljs$core$async31086.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31086.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31086";

cljs.core.async.t_cljs$core$async31086.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async31086");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31086.
 */
cljs.core.async.__GT_t_cljs$core$async31086 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31086(f__$1,ch__$1,meta31087){
return (new cljs.core.async.t_cljs$core$async31086(f__$1,ch__$1,meta31087));
});

}

return (new cljs.core.async.t_cljs$core$async31086(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31089 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31089 = (function (p,ch,meta31090){
this.p = p;
this.ch = ch;
this.meta31090 = meta31090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31091,meta31090__$1){
var self__ = this;
var _31091__$1 = this;
return (new cljs.core.async.t_cljs$core$async31089(self__.p,self__.ch,meta31090__$1));
});

cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31091){
var self__ = this;
var _31091__$1 = this;
return self__.meta31090;
});

cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31089.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31090","meta31090",578862395,null)], null);
});

cljs.core.async.t_cljs$core$async31089.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31089.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31089";

cljs.core.async.t_cljs$core$async31089.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async31089");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31089.
 */
cljs.core.async.__GT_t_cljs$core$async31089 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31089(p__$1,ch__$1,meta31090){
return (new cljs.core.async.t_cljs$core$async31089(p__$1,ch__$1,meta31090));
});

}

return (new cljs.core.async.t_cljs$core$async31089(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31093 = arguments.length;
switch (G__31093) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29401__auto___31133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29401__auto___31133,out){
return (function (){
var f__29402__auto__ = (function (){var switch__29384__auto__ = ((function (c__29401__auto___31133,out){
return (function (state_31114){
var state_val_31115 = (state_31114[(1)]);
if((state_val_31115 === (7))){
var inst_31110 = (state_31114[(2)]);
var state_31114__$1 = state_31114;
var statearr_31116_31134 = state_31114__$1;
(statearr_31116_31134[(2)] = inst_31110);

(statearr_31116_31134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (1))){
var state_31114__$1 = state_31114;
var statearr_31117_31135 = state_31114__$1;
(statearr_31117_31135[(2)] = null);

(statearr_31117_31135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (4))){
var inst_31096 = (state_31114[(7)]);
var inst_31096__$1 = (state_31114[(2)]);
var inst_31097 = (inst_31096__$1 == null);
var state_31114__$1 = (function (){var statearr_31118 = state_31114;
(statearr_31118[(7)] = inst_31096__$1);

return statearr_31118;
})();
if(cljs.core.truth_(inst_31097)){
var statearr_31119_31136 = state_31114__$1;
(statearr_31119_31136[(1)] = (5));

} else {
var statearr_31120_31137 = state_31114__$1;
(statearr_31120_31137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (6))){
var inst_31096 = (state_31114[(7)]);
var inst_31101 = p.call(null,inst_31096);
var state_31114__$1 = state_31114;
if(cljs.core.truth_(inst_31101)){
var statearr_31121_31138 = state_31114__$1;
(statearr_31121_31138[(1)] = (8));

} else {
var statearr_31122_31139 = state_31114__$1;
(statearr_31122_31139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (3))){
var inst_31112 = (state_31114[(2)]);
var state_31114__$1 = state_31114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31114__$1,inst_31112);
} else {
if((state_val_31115 === (2))){
var state_31114__$1 = state_31114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31114__$1,(4),ch);
} else {
if((state_val_31115 === (11))){
var inst_31104 = (state_31114[(2)]);
var state_31114__$1 = state_31114;
var statearr_31123_31140 = state_31114__$1;
(statearr_31123_31140[(2)] = inst_31104);

(statearr_31123_31140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (9))){
var state_31114__$1 = state_31114;
var statearr_31124_31141 = state_31114__$1;
(statearr_31124_31141[(2)] = null);

(statearr_31124_31141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (5))){
var inst_31099 = cljs.core.async.close_BANG_.call(null,out);
var state_31114__$1 = state_31114;
var statearr_31125_31142 = state_31114__$1;
(statearr_31125_31142[(2)] = inst_31099);

(statearr_31125_31142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (10))){
var inst_31107 = (state_31114[(2)]);
var state_31114__$1 = (function (){var statearr_31126 = state_31114;
(statearr_31126[(8)] = inst_31107);

return statearr_31126;
})();
var statearr_31127_31143 = state_31114__$1;
(statearr_31127_31143[(2)] = null);

(statearr_31127_31143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (8))){
var inst_31096 = (state_31114[(7)]);
var state_31114__$1 = state_31114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31114__$1,(11),out,inst_31096);
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
});})(c__29401__auto___31133,out))
;
return ((function (switch__29384__auto__,c__29401__auto___31133,out){
return (function() {
var cljs$core$async$state_machine__29385__auto__ = null;
var cljs$core$async$state_machine__29385__auto____0 = (function (){
var statearr_31128 = [null,null,null,null,null,null,null,null,null];
(statearr_31128[(0)] = cljs$core$async$state_machine__29385__auto__);

(statearr_31128[(1)] = (1));

return statearr_31128;
});
var cljs$core$async$state_machine__29385__auto____1 = (function (state_31114){
while(true){
var ret_value__29386__auto__ = (function (){try{while(true){
var result__29387__auto__ = switch__29384__auto__.call(null,state_31114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29387__auto__;
}
break;
}
}catch (e31129){if((e31129 instanceof Object)){
var ex__29388__auto__ = e31129;
var statearr_31130_31144 = state_31114;
(statearr_31130_31144[(5)] = ex__29388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31145 = state_31114;
state_31114 = G__31145;
continue;
} else {
return ret_value__29386__auto__;
}
break;
}
});
cljs$core$async$state_machine__29385__auto__ = function(state_31114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29385__auto____1.call(this,state_31114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29385__auto____0;
cljs$core$async$state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29385__auto____1;
return cljs$core$async$state_machine__29385__auto__;
})()
;})(switch__29384__auto__,c__29401__auto___31133,out))
})();
var state__29403__auto__ = (function (){var statearr_31131 = f__29402__auto__.call(null);
(statearr_31131[(6)] = c__29401__auto___31133);

return statearr_31131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29403__auto__);
});})(c__29401__auto___31133,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31147 = arguments.length;
switch (G__31147) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29401__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29401__auto__){
return (function (){
var f__29402__auto__ = (function (){var switch__29384__auto__ = ((function (c__29401__auto__){
return (function (state_31210){
var state_val_31211 = (state_31210[(1)]);
if((state_val_31211 === (7))){
var inst_31206 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31212_31250 = state_31210__$1;
(statearr_31212_31250[(2)] = inst_31206);

(statearr_31212_31250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (20))){
var inst_31176 = (state_31210[(7)]);
var inst_31187 = (state_31210[(2)]);
var inst_31188 = cljs.core.next.call(null,inst_31176);
var inst_31162 = inst_31188;
var inst_31163 = null;
var inst_31164 = (0);
var inst_31165 = (0);
var state_31210__$1 = (function (){var statearr_31213 = state_31210;
(statearr_31213[(8)] = inst_31162);

(statearr_31213[(9)] = inst_31187);

(statearr_31213[(10)] = inst_31163);

(statearr_31213[(11)] = inst_31165);

(statearr_31213[(12)] = inst_31164);

return statearr_31213;
})();
var statearr_31214_31251 = state_31210__$1;
(statearr_31214_31251[(2)] = null);

(statearr_31214_31251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (1))){
var state_31210__$1 = state_31210;
var statearr_31215_31252 = state_31210__$1;
(statearr_31215_31252[(2)] = null);

(statearr_31215_31252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (4))){
var inst_31151 = (state_31210[(13)]);
var inst_31151__$1 = (state_31210[(2)]);
var inst_31152 = (inst_31151__$1 == null);
var state_31210__$1 = (function (){var statearr_31216 = state_31210;
(statearr_31216[(13)] = inst_31151__$1);

return statearr_31216;
})();
if(cljs.core.truth_(inst_31152)){
var statearr_31217_31253 = state_31210__$1;
(statearr_31217_31253[(1)] = (5));

} else {
var statearr_31218_31254 = state_31210__$1;
(statearr_31218_31254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (15))){
var state_31210__$1 = state_31210;
var statearr_31222_31255 = state_31210__$1;
(statearr_31222_31255[(2)] = null);

(statearr_31222_31255[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (21))){
var state_31210__$1 = state_31210;
var statearr_31223_31256 = state_31210__$1;
(statearr_31223_31256[(2)] = null);

(statearr_31223_31256[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (13))){
var inst_31162 = (state_31210[(8)]);
var inst_31163 = (state_31210[(10)]);
var inst_31165 = (state_31210[(11)]);
var inst_31164 = (state_31210[(12)]);
var inst_31172 = (state_31210[(2)]);
var inst_31173 = (inst_31165 + (1));
var tmp31219 = inst_31162;
var tmp31220 = inst_31163;
var tmp31221 = inst_31164;
var inst_31162__$1 = tmp31219;
var inst_31163__$1 = tmp31220;
var inst_31164__$1 = tmp31221;
var inst_31165__$1 = inst_31173;
var state_31210__$1 = (function (){var statearr_31224 = state_31210;
(statearr_31224[(8)] = inst_31162__$1);

(statearr_31224[(14)] = inst_31172);

(statearr_31224[(10)] = inst_31163__$1);

(statearr_31224[(11)] = inst_31165__$1);

(statearr_31224[(12)] = inst_31164__$1);

return statearr_31224;
})();
var statearr_31225_31257 = state_31210__$1;
(statearr_31225_31257[(2)] = null);

(statearr_31225_31257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (22))){
var state_31210__$1 = state_31210;
var statearr_31226_31258 = state_31210__$1;
(statearr_31226_31258[(2)] = null);

(statearr_31226_31258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (6))){
var inst_31151 = (state_31210[(13)]);
var inst_31160 = f.call(null,inst_31151);
var inst_31161 = cljs.core.seq.call(null,inst_31160);
var inst_31162 = inst_31161;
var inst_31163 = null;
var inst_31164 = (0);
var inst_31165 = (0);
var state_31210__$1 = (function (){var statearr_31227 = state_31210;
(statearr_31227[(8)] = inst_31162);

(statearr_31227[(10)] = inst_31163);

(statearr_31227[(11)] = inst_31165);

(statearr_31227[(12)] = inst_31164);

return statearr_31227;
})();
var statearr_31228_31259 = state_31210__$1;
(statearr_31228_31259[(2)] = null);

(statearr_31228_31259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (17))){
var inst_31176 = (state_31210[(7)]);
var inst_31180 = cljs.core.chunk_first.call(null,inst_31176);
var inst_31181 = cljs.core.chunk_rest.call(null,inst_31176);
var inst_31182 = cljs.core.count.call(null,inst_31180);
var inst_31162 = inst_31181;
var inst_31163 = inst_31180;
var inst_31164 = inst_31182;
var inst_31165 = (0);
var state_31210__$1 = (function (){var statearr_31229 = state_31210;
(statearr_31229[(8)] = inst_31162);

(statearr_31229[(10)] = inst_31163);

(statearr_31229[(11)] = inst_31165);

(statearr_31229[(12)] = inst_31164);

return statearr_31229;
})();
var statearr_31230_31260 = state_31210__$1;
(statearr_31230_31260[(2)] = null);

(statearr_31230_31260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (3))){
var inst_31208 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31210__$1,inst_31208);
} else {
if((state_val_31211 === (12))){
var inst_31196 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31231_31261 = state_31210__$1;
(statearr_31231_31261[(2)] = inst_31196);

(statearr_31231_31261[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (2))){
var state_31210__$1 = state_31210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31210__$1,(4),in$);
} else {
if((state_val_31211 === (23))){
var inst_31204 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31232_31262 = state_31210__$1;
(statearr_31232_31262[(2)] = inst_31204);

(statearr_31232_31262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (19))){
var inst_31191 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31233_31263 = state_31210__$1;
(statearr_31233_31263[(2)] = inst_31191);

(statearr_31233_31263[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (11))){
var inst_31162 = (state_31210[(8)]);
var inst_31176 = (state_31210[(7)]);
var inst_31176__$1 = cljs.core.seq.call(null,inst_31162);
var state_31210__$1 = (function (){var statearr_31234 = state_31210;
(statearr_31234[(7)] = inst_31176__$1);

return statearr_31234;
})();
if(inst_31176__$1){
var statearr_31235_31264 = state_31210__$1;
(statearr_31235_31264[(1)] = (14));

} else {
var statearr_31236_31265 = state_31210__$1;
(statearr_31236_31265[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (9))){
var inst_31198 = (state_31210[(2)]);
var inst_31199 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31210__$1 = (function (){var statearr_31237 = state_31210;
(statearr_31237[(15)] = inst_31198);

return statearr_31237;
})();
if(cljs.core.truth_(inst_31199)){
var statearr_31238_31266 = state_31210__$1;
(statearr_31238_31266[(1)] = (21));

} else {
var statearr_31239_31267 = state_31210__$1;
(statearr_31239_31267[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (5))){
var inst_31154 = cljs.core.async.close_BANG_.call(null,out);
var state_31210__$1 = state_31210;
var statearr_31240_31268 = state_31210__$1;
(statearr_31240_31268[(2)] = inst_31154);

(statearr_31240_31268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (14))){
var inst_31176 = (state_31210[(7)]);
var inst_31178 = cljs.core.chunked_seq_QMARK_.call(null,inst_31176);
var state_31210__$1 = state_31210;
if(inst_31178){
var statearr_31241_31269 = state_31210__$1;
(statearr_31241_31269[(1)] = (17));

} else {
var statearr_31242_31270 = state_31210__$1;
(statearr_31242_31270[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (16))){
var inst_31194 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31243_31271 = state_31210__$1;
(statearr_31243_31271[(2)] = inst_31194);

(statearr_31243_31271[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (10))){
var inst_31163 = (state_31210[(10)]);
var inst_31165 = (state_31210[(11)]);
var inst_31170 = cljs.core._nth.call(null,inst_31163,inst_31165);
var state_31210__$1 = state_31210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31210__$1,(13),out,inst_31170);
} else {
if((state_val_31211 === (18))){
var inst_31176 = (state_31210[(7)]);
var inst_31185 = cljs.core.first.call(null,inst_31176);
var state_31210__$1 = state_31210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31210__$1,(20),out,inst_31185);
} else {
if((state_val_31211 === (8))){
var inst_31165 = (state_31210[(11)]);
var inst_31164 = (state_31210[(12)]);
var inst_31167 = (inst_31165 < inst_31164);
var inst_31168 = inst_31167;
var state_31210__$1 = state_31210;
if(cljs.core.truth_(inst_31168)){
var statearr_31244_31272 = state_31210__$1;
(statearr_31244_31272[(1)] = (10));

} else {
var statearr_31245_31273 = state_31210__$1;
(statearr_31245_31273[(1)] = (11));

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
});})(c__29401__auto__))
;
return ((function (switch__29384__auto__,c__29401__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29385__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29385__auto____0 = (function (){
var statearr_31246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31246[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29385__auto__);

(statearr_31246[(1)] = (1));

return statearr_31246;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29385__auto____1 = (function (state_31210){
while(true){
var ret_value__29386__auto__ = (function (){try{while(true){
var result__29387__auto__ = switch__29384__auto__.call(null,state_31210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29387__auto__;
}
break;
}
}catch (e31247){if((e31247 instanceof Object)){
var ex__29388__auto__ = e31247;
var statearr_31248_31274 = state_31210;
(statearr_31248_31274[(5)] = ex__29388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31275 = state_31210;
state_31210 = G__31275;
continue;
} else {
return ret_value__29386__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29385__auto__ = function(state_31210){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29385__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29385__auto____1.call(this,state_31210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29385__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29385__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29385__auto__;
})()
;})(switch__29384__auto__,c__29401__auto__))
})();
var state__29403__auto__ = (function (){var statearr_31249 = f__29402__auto__.call(null);
(statearr_31249[(6)] = c__29401__auto__);

return statearr_31249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29403__auto__);
});})(c__29401__auto__))
);

return c__29401__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31277 = arguments.length;
switch (G__31277) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31280 = arguments.length;
switch (G__31280) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31283 = arguments.length;
switch (G__31283) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29401__auto___31330 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29401__auto___31330,out){
return (function (){
var f__29402__auto__ = (function (){var switch__29384__auto__ = ((function (c__29401__auto___31330,out){
return (function (state_31307){
var state_val_31308 = (state_31307[(1)]);
if((state_val_31308 === (7))){
var inst_31302 = (state_31307[(2)]);
var state_31307__$1 = state_31307;
var statearr_31309_31331 = state_31307__$1;
(statearr_31309_31331[(2)] = inst_31302);

(statearr_31309_31331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31308 === (1))){
var inst_31284 = null;
var state_31307__$1 = (function (){var statearr_31310 = state_31307;
(statearr_31310[(7)] = inst_31284);

return statearr_31310;
})();
var statearr_31311_31332 = state_31307__$1;
(statearr_31311_31332[(2)] = null);

(statearr_31311_31332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31308 === (4))){
var inst_31287 = (state_31307[(8)]);
var inst_31287__$1 = (state_31307[(2)]);
var inst_31288 = (inst_31287__$1 == null);
var inst_31289 = cljs.core.not.call(null,inst_31288);
var state_31307__$1 = (function (){var statearr_31312 = state_31307;
(statearr_31312[(8)] = inst_31287__$1);

return statearr_31312;
})();
if(inst_31289){
var statearr_31313_31333 = state_31307__$1;
(statearr_31313_31333[(1)] = (5));

} else {
var statearr_31314_31334 = state_31307__$1;
(statearr_31314_31334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31308 === (6))){
var state_31307__$1 = state_31307;
var statearr_31315_31335 = state_31307__$1;
(statearr_31315_31335[(2)] = null);

(statearr_31315_31335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31308 === (3))){
var inst_31304 = (state_31307[(2)]);
var inst_31305 = cljs.core.async.close_BANG_.call(null,out);
var state_31307__$1 = (function (){var statearr_31316 = state_31307;
(statearr_31316[(9)] = inst_31304);

return statearr_31316;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31307__$1,inst_31305);
} else {
if((state_val_31308 === (2))){
var state_31307__$1 = state_31307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31307__$1,(4),ch);
} else {
if((state_val_31308 === (11))){
var inst_31287 = (state_31307[(8)]);
var inst_31296 = (state_31307[(2)]);
var inst_31284 = inst_31287;
var state_31307__$1 = (function (){var statearr_31317 = state_31307;
(statearr_31317[(10)] = inst_31296);

(statearr_31317[(7)] = inst_31284);

return statearr_31317;
})();
var statearr_31318_31336 = state_31307__$1;
(statearr_31318_31336[(2)] = null);

(statearr_31318_31336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31308 === (9))){
var inst_31287 = (state_31307[(8)]);
var state_31307__$1 = state_31307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31307__$1,(11),out,inst_31287);
} else {
if((state_val_31308 === (5))){
var inst_31284 = (state_31307[(7)]);
var inst_31287 = (state_31307[(8)]);
var inst_31291 = cljs.core._EQ_.call(null,inst_31287,inst_31284);
var state_31307__$1 = state_31307;
if(inst_31291){
var statearr_31320_31337 = state_31307__$1;
(statearr_31320_31337[(1)] = (8));

} else {
var statearr_31321_31338 = state_31307__$1;
(statearr_31321_31338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31308 === (10))){
var inst_31299 = (state_31307[(2)]);
var state_31307__$1 = state_31307;
var statearr_31322_31339 = state_31307__$1;
(statearr_31322_31339[(2)] = inst_31299);

(statearr_31322_31339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31308 === (8))){
var inst_31284 = (state_31307[(7)]);
var tmp31319 = inst_31284;
var inst_31284__$1 = tmp31319;
var state_31307__$1 = (function (){var statearr_31323 = state_31307;
(statearr_31323[(7)] = inst_31284__$1);

return statearr_31323;
})();
var statearr_31324_31340 = state_31307__$1;
(statearr_31324_31340[(2)] = null);

(statearr_31324_31340[(1)] = (2));


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
});})(c__29401__auto___31330,out))
;
return ((function (switch__29384__auto__,c__29401__auto___31330,out){
return (function() {
var cljs$core$async$state_machine__29385__auto__ = null;
var cljs$core$async$state_machine__29385__auto____0 = (function (){
var statearr_31325 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31325[(0)] = cljs$core$async$state_machine__29385__auto__);

(statearr_31325[(1)] = (1));

return statearr_31325;
});
var cljs$core$async$state_machine__29385__auto____1 = (function (state_31307){
while(true){
var ret_value__29386__auto__ = (function (){try{while(true){
var result__29387__auto__ = switch__29384__auto__.call(null,state_31307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29387__auto__;
}
break;
}
}catch (e31326){if((e31326 instanceof Object)){
var ex__29388__auto__ = e31326;
var statearr_31327_31341 = state_31307;
(statearr_31327_31341[(5)] = ex__29388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31342 = state_31307;
state_31307 = G__31342;
continue;
} else {
return ret_value__29386__auto__;
}
break;
}
});
cljs$core$async$state_machine__29385__auto__ = function(state_31307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29385__auto____1.call(this,state_31307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29385__auto____0;
cljs$core$async$state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29385__auto____1;
return cljs$core$async$state_machine__29385__auto__;
})()
;})(switch__29384__auto__,c__29401__auto___31330,out))
})();
var state__29403__auto__ = (function (){var statearr_31328 = f__29402__auto__.call(null);
(statearr_31328[(6)] = c__29401__auto___31330);

return statearr_31328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29403__auto__);
});})(c__29401__auto___31330,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31344 = arguments.length;
switch (G__31344) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29401__auto___31410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29401__auto___31410,out){
return (function (){
var f__29402__auto__ = (function (){var switch__29384__auto__ = ((function (c__29401__auto___31410,out){
return (function (state_31382){
var state_val_31383 = (state_31382[(1)]);
if((state_val_31383 === (7))){
var inst_31378 = (state_31382[(2)]);
var state_31382__$1 = state_31382;
var statearr_31384_31411 = state_31382__$1;
(statearr_31384_31411[(2)] = inst_31378);

(statearr_31384_31411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31383 === (1))){
var inst_31345 = (new Array(n));
var inst_31346 = inst_31345;
var inst_31347 = (0);
var state_31382__$1 = (function (){var statearr_31385 = state_31382;
(statearr_31385[(7)] = inst_31347);

(statearr_31385[(8)] = inst_31346);

return statearr_31385;
})();
var statearr_31386_31412 = state_31382__$1;
(statearr_31386_31412[(2)] = null);

(statearr_31386_31412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31383 === (4))){
var inst_31350 = (state_31382[(9)]);
var inst_31350__$1 = (state_31382[(2)]);
var inst_31351 = (inst_31350__$1 == null);
var inst_31352 = cljs.core.not.call(null,inst_31351);
var state_31382__$1 = (function (){var statearr_31387 = state_31382;
(statearr_31387[(9)] = inst_31350__$1);

return statearr_31387;
})();
if(inst_31352){
var statearr_31388_31413 = state_31382__$1;
(statearr_31388_31413[(1)] = (5));

} else {
var statearr_31389_31414 = state_31382__$1;
(statearr_31389_31414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31383 === (15))){
var inst_31372 = (state_31382[(2)]);
var state_31382__$1 = state_31382;
var statearr_31390_31415 = state_31382__$1;
(statearr_31390_31415[(2)] = inst_31372);

(statearr_31390_31415[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31383 === (13))){
var state_31382__$1 = state_31382;
var statearr_31391_31416 = state_31382__$1;
(statearr_31391_31416[(2)] = null);

(statearr_31391_31416[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31383 === (6))){
var inst_31347 = (state_31382[(7)]);
var inst_31368 = (inst_31347 > (0));
var state_31382__$1 = state_31382;
if(cljs.core.truth_(inst_31368)){
var statearr_31392_31417 = state_31382__$1;
(statearr_31392_31417[(1)] = (12));

} else {
var statearr_31393_31418 = state_31382__$1;
(statearr_31393_31418[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31383 === (3))){
var inst_31380 = (state_31382[(2)]);
var state_31382__$1 = state_31382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31382__$1,inst_31380);
} else {
if((state_val_31383 === (12))){
var inst_31346 = (state_31382[(8)]);
var inst_31370 = cljs.core.vec.call(null,inst_31346);
var state_31382__$1 = state_31382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31382__$1,(15),out,inst_31370);
} else {
if((state_val_31383 === (2))){
var state_31382__$1 = state_31382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31382__$1,(4),ch);
} else {
if((state_val_31383 === (11))){
var inst_31362 = (state_31382[(2)]);
var inst_31363 = (new Array(n));
var inst_31346 = inst_31363;
var inst_31347 = (0);
var state_31382__$1 = (function (){var statearr_31394 = state_31382;
(statearr_31394[(7)] = inst_31347);

(statearr_31394[(10)] = inst_31362);

(statearr_31394[(8)] = inst_31346);

return statearr_31394;
})();
var statearr_31395_31419 = state_31382__$1;
(statearr_31395_31419[(2)] = null);

(statearr_31395_31419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31383 === (9))){
var inst_31346 = (state_31382[(8)]);
var inst_31360 = cljs.core.vec.call(null,inst_31346);
var state_31382__$1 = state_31382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31382__$1,(11),out,inst_31360);
} else {
if((state_val_31383 === (5))){
var inst_31355 = (state_31382[(11)]);
var inst_31347 = (state_31382[(7)]);
var inst_31350 = (state_31382[(9)]);
var inst_31346 = (state_31382[(8)]);
var inst_31354 = (inst_31346[inst_31347] = inst_31350);
var inst_31355__$1 = (inst_31347 + (1));
var inst_31356 = (inst_31355__$1 < n);
var state_31382__$1 = (function (){var statearr_31396 = state_31382;
(statearr_31396[(11)] = inst_31355__$1);

(statearr_31396[(12)] = inst_31354);

return statearr_31396;
})();
if(cljs.core.truth_(inst_31356)){
var statearr_31397_31420 = state_31382__$1;
(statearr_31397_31420[(1)] = (8));

} else {
var statearr_31398_31421 = state_31382__$1;
(statearr_31398_31421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31383 === (14))){
var inst_31375 = (state_31382[(2)]);
var inst_31376 = cljs.core.async.close_BANG_.call(null,out);
var state_31382__$1 = (function (){var statearr_31400 = state_31382;
(statearr_31400[(13)] = inst_31375);

return statearr_31400;
})();
var statearr_31401_31422 = state_31382__$1;
(statearr_31401_31422[(2)] = inst_31376);

(statearr_31401_31422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31383 === (10))){
var inst_31366 = (state_31382[(2)]);
var state_31382__$1 = state_31382;
var statearr_31402_31423 = state_31382__$1;
(statearr_31402_31423[(2)] = inst_31366);

(statearr_31402_31423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31383 === (8))){
var inst_31355 = (state_31382[(11)]);
var inst_31346 = (state_31382[(8)]);
var tmp31399 = inst_31346;
var inst_31346__$1 = tmp31399;
var inst_31347 = inst_31355;
var state_31382__$1 = (function (){var statearr_31403 = state_31382;
(statearr_31403[(7)] = inst_31347);

(statearr_31403[(8)] = inst_31346__$1);

return statearr_31403;
})();
var statearr_31404_31424 = state_31382__$1;
(statearr_31404_31424[(2)] = null);

(statearr_31404_31424[(1)] = (2));


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
});})(c__29401__auto___31410,out))
;
return ((function (switch__29384__auto__,c__29401__auto___31410,out){
return (function() {
var cljs$core$async$state_machine__29385__auto__ = null;
var cljs$core$async$state_machine__29385__auto____0 = (function (){
var statearr_31405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31405[(0)] = cljs$core$async$state_machine__29385__auto__);

(statearr_31405[(1)] = (1));

return statearr_31405;
});
var cljs$core$async$state_machine__29385__auto____1 = (function (state_31382){
while(true){
var ret_value__29386__auto__ = (function (){try{while(true){
var result__29387__auto__ = switch__29384__auto__.call(null,state_31382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29387__auto__;
}
break;
}
}catch (e31406){if((e31406 instanceof Object)){
var ex__29388__auto__ = e31406;
var statearr_31407_31425 = state_31382;
(statearr_31407_31425[(5)] = ex__29388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31426 = state_31382;
state_31382 = G__31426;
continue;
} else {
return ret_value__29386__auto__;
}
break;
}
});
cljs$core$async$state_machine__29385__auto__ = function(state_31382){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29385__auto____1.call(this,state_31382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29385__auto____0;
cljs$core$async$state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29385__auto____1;
return cljs$core$async$state_machine__29385__auto__;
})()
;})(switch__29384__auto__,c__29401__auto___31410,out))
})();
var state__29403__auto__ = (function (){var statearr_31408 = f__29402__auto__.call(null);
(statearr_31408[(6)] = c__29401__auto___31410);

return statearr_31408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29403__auto__);
});})(c__29401__auto___31410,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31428 = arguments.length;
switch (G__31428) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29401__auto___31498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29401__auto___31498,out){
return (function (){
var f__29402__auto__ = (function (){var switch__29384__auto__ = ((function (c__29401__auto___31498,out){
return (function (state_31470){
var state_val_31471 = (state_31470[(1)]);
if((state_val_31471 === (7))){
var inst_31466 = (state_31470[(2)]);
var state_31470__$1 = state_31470;
var statearr_31472_31499 = state_31470__$1;
(statearr_31472_31499[(2)] = inst_31466);

(statearr_31472_31499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (1))){
var inst_31429 = [];
var inst_31430 = inst_31429;
var inst_31431 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31470__$1 = (function (){var statearr_31473 = state_31470;
(statearr_31473[(7)] = inst_31431);

(statearr_31473[(8)] = inst_31430);

return statearr_31473;
})();
var statearr_31474_31500 = state_31470__$1;
(statearr_31474_31500[(2)] = null);

(statearr_31474_31500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (4))){
var inst_31434 = (state_31470[(9)]);
var inst_31434__$1 = (state_31470[(2)]);
var inst_31435 = (inst_31434__$1 == null);
var inst_31436 = cljs.core.not.call(null,inst_31435);
var state_31470__$1 = (function (){var statearr_31475 = state_31470;
(statearr_31475[(9)] = inst_31434__$1);

return statearr_31475;
})();
if(inst_31436){
var statearr_31476_31501 = state_31470__$1;
(statearr_31476_31501[(1)] = (5));

} else {
var statearr_31477_31502 = state_31470__$1;
(statearr_31477_31502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (15))){
var inst_31460 = (state_31470[(2)]);
var state_31470__$1 = state_31470;
var statearr_31478_31503 = state_31470__$1;
(statearr_31478_31503[(2)] = inst_31460);

(statearr_31478_31503[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (13))){
var state_31470__$1 = state_31470;
var statearr_31479_31504 = state_31470__$1;
(statearr_31479_31504[(2)] = null);

(statearr_31479_31504[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (6))){
var inst_31430 = (state_31470[(8)]);
var inst_31455 = inst_31430.length;
var inst_31456 = (inst_31455 > (0));
var state_31470__$1 = state_31470;
if(cljs.core.truth_(inst_31456)){
var statearr_31480_31505 = state_31470__$1;
(statearr_31480_31505[(1)] = (12));

} else {
var statearr_31481_31506 = state_31470__$1;
(statearr_31481_31506[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (3))){
var inst_31468 = (state_31470[(2)]);
var state_31470__$1 = state_31470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31470__$1,inst_31468);
} else {
if((state_val_31471 === (12))){
var inst_31430 = (state_31470[(8)]);
var inst_31458 = cljs.core.vec.call(null,inst_31430);
var state_31470__$1 = state_31470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31470__$1,(15),out,inst_31458);
} else {
if((state_val_31471 === (2))){
var state_31470__$1 = state_31470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31470__$1,(4),ch);
} else {
if((state_val_31471 === (11))){
var inst_31434 = (state_31470[(9)]);
var inst_31438 = (state_31470[(10)]);
var inst_31448 = (state_31470[(2)]);
var inst_31449 = [];
var inst_31450 = inst_31449.push(inst_31434);
var inst_31430 = inst_31449;
var inst_31431 = inst_31438;
var state_31470__$1 = (function (){var statearr_31482 = state_31470;
(statearr_31482[(11)] = inst_31450);

(statearr_31482[(12)] = inst_31448);

(statearr_31482[(7)] = inst_31431);

(statearr_31482[(8)] = inst_31430);

return statearr_31482;
})();
var statearr_31483_31507 = state_31470__$1;
(statearr_31483_31507[(2)] = null);

(statearr_31483_31507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (9))){
var inst_31430 = (state_31470[(8)]);
var inst_31446 = cljs.core.vec.call(null,inst_31430);
var state_31470__$1 = state_31470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31470__$1,(11),out,inst_31446);
} else {
if((state_val_31471 === (5))){
var inst_31434 = (state_31470[(9)]);
var inst_31431 = (state_31470[(7)]);
var inst_31438 = (state_31470[(10)]);
var inst_31438__$1 = f.call(null,inst_31434);
var inst_31439 = cljs.core._EQ_.call(null,inst_31438__$1,inst_31431);
var inst_31440 = cljs.core.keyword_identical_QMARK_.call(null,inst_31431,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31441 = ((inst_31439) || (inst_31440));
var state_31470__$1 = (function (){var statearr_31484 = state_31470;
(statearr_31484[(10)] = inst_31438__$1);

return statearr_31484;
})();
if(cljs.core.truth_(inst_31441)){
var statearr_31485_31508 = state_31470__$1;
(statearr_31485_31508[(1)] = (8));

} else {
var statearr_31486_31509 = state_31470__$1;
(statearr_31486_31509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (14))){
var inst_31463 = (state_31470[(2)]);
var inst_31464 = cljs.core.async.close_BANG_.call(null,out);
var state_31470__$1 = (function (){var statearr_31488 = state_31470;
(statearr_31488[(13)] = inst_31463);

return statearr_31488;
})();
var statearr_31489_31510 = state_31470__$1;
(statearr_31489_31510[(2)] = inst_31464);

(statearr_31489_31510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (10))){
var inst_31453 = (state_31470[(2)]);
var state_31470__$1 = state_31470;
var statearr_31490_31511 = state_31470__$1;
(statearr_31490_31511[(2)] = inst_31453);

(statearr_31490_31511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (8))){
var inst_31434 = (state_31470[(9)]);
var inst_31430 = (state_31470[(8)]);
var inst_31438 = (state_31470[(10)]);
var inst_31443 = inst_31430.push(inst_31434);
var tmp31487 = inst_31430;
var inst_31430__$1 = tmp31487;
var inst_31431 = inst_31438;
var state_31470__$1 = (function (){var statearr_31491 = state_31470;
(statearr_31491[(7)] = inst_31431);

(statearr_31491[(8)] = inst_31430__$1);

(statearr_31491[(14)] = inst_31443);

return statearr_31491;
})();
var statearr_31492_31512 = state_31470__$1;
(statearr_31492_31512[(2)] = null);

(statearr_31492_31512[(1)] = (2));


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
});})(c__29401__auto___31498,out))
;
return ((function (switch__29384__auto__,c__29401__auto___31498,out){
return (function() {
var cljs$core$async$state_machine__29385__auto__ = null;
var cljs$core$async$state_machine__29385__auto____0 = (function (){
var statearr_31493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31493[(0)] = cljs$core$async$state_machine__29385__auto__);

(statearr_31493[(1)] = (1));

return statearr_31493;
});
var cljs$core$async$state_machine__29385__auto____1 = (function (state_31470){
while(true){
var ret_value__29386__auto__ = (function (){try{while(true){
var result__29387__auto__ = switch__29384__auto__.call(null,state_31470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29387__auto__;
}
break;
}
}catch (e31494){if((e31494 instanceof Object)){
var ex__29388__auto__ = e31494;
var statearr_31495_31513 = state_31470;
(statearr_31495_31513[(5)] = ex__29388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31514 = state_31470;
state_31470 = G__31514;
continue;
} else {
return ret_value__29386__auto__;
}
break;
}
});
cljs$core$async$state_machine__29385__auto__ = function(state_31470){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29385__auto____1.call(this,state_31470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29385__auto____0;
cljs$core$async$state_machine__29385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29385__auto____1;
return cljs$core$async$state_machine__29385__auto__;
})()
;})(switch__29384__auto__,c__29401__auto___31498,out))
})();
var state__29403__auto__ = (function (){var statearr_31496 = f__29402__auto__.call(null);
(statearr_31496[(6)] = c__29401__auto___31498);

return statearr_31496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29403__auto__);
});})(c__29401__auto___31498,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1533186709250
