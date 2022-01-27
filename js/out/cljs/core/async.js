// Compiled by ClojureScript 1.10.896 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28754 = arguments.length;
switch (G__28754) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28755 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28755 = (function (f,blockable,meta28756){
this.f = f;
this.blockable = blockable;
this.meta28756 = meta28756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28757,meta28756__$1){
var self__ = this;
var _28757__$1 = this;
return (new cljs.core.async.t_cljs$core$async28755(self__.f,self__.blockable,meta28756__$1));
}));

(cljs.core.async.t_cljs$core$async28755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28757){
var self__ = this;
var _28757__$1 = this;
return self__.meta28756;
}));

(cljs.core.async.t_cljs$core$async28755.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28755.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28755.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28755.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28755.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28756","meta28756",830528522,null)], null);
}));

(cljs.core.async.t_cljs$core$async28755.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28755.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28755");

(cljs.core.async.t_cljs$core$async28755.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async28755");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28755.
 */
cljs.core.async.__GT_t_cljs$core$async28755 = (function cljs$core$async$__GT_t_cljs$core$async28755(f__$1,blockable__$1,meta28756){
return (new cljs.core.async.t_cljs$core$async28755(f__$1,blockable__$1,meta28756));
});

}

return (new cljs.core.async.t_cljs$core$async28755(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

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
if((!((buff == null)))){
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
var G__28761 = arguments.length;
switch (G__28761) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__28764 = arguments.length;
switch (G__28764) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

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
var G__28767 = arguments.length;
switch (G__28767) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28769 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28769);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_28769);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

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
var G__28771 = arguments.length;
switch (G__28771) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___28773 = n;
var x_28774 = (0);
while(true){
if((x_28774 < n__4741__auto___28773)){
(a[x_28774] = (0));

var G__28775 = (x_28774 + (1));
x_28774 = G__28775;
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

var G__28776 = (i + (1));
i = G__28776;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28777 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28777 = (function (flag,meta28778){
this.flag = flag;
this.meta28778 = meta28778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28779,meta28778__$1){
var self__ = this;
var _28779__$1 = this;
return (new cljs.core.async.t_cljs$core$async28777(self__.flag,meta28778__$1));
}));

(cljs.core.async.t_cljs$core$async28777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28779){
var self__ = this;
var _28779__$1 = this;
return self__.meta28778;
}));

(cljs.core.async.t_cljs$core$async28777.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28777.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async28777.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28777.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async28777.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28778","meta28778",-1732097383,null)], null);
}));

(cljs.core.async.t_cljs$core$async28777.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28777.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28777");

(cljs.core.async.t_cljs$core$async28777.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async28777");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28777.
 */
cljs.core.async.__GT_t_cljs$core$async28777 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28777(flag__$1,meta28778){
return (new cljs.core.async.t_cljs$core$async28777(flag__$1,meta28778));
});

}

return (new cljs.core.async.t_cljs$core$async28777(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28780 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28780 = (function (flag,cb,meta28781){
this.flag = flag;
this.cb = cb;
this.meta28781 = meta28781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28782,meta28781__$1){
var self__ = this;
var _28782__$1 = this;
return (new cljs.core.async.t_cljs$core$async28780(self__.flag,self__.cb,meta28781__$1));
}));

(cljs.core.async.t_cljs$core$async28780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28782){
var self__ = this;
var _28782__$1 = this;
return self__.meta28781;
}));

(cljs.core.async.t_cljs$core$async28780.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28780.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async28780.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28780.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async28780.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28781","meta28781",517651658,null)], null);
}));

(cljs.core.async.t_cljs$core$async28780.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28780.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28780");

(cljs.core.async.t_cljs$core$async28780.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async28780");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28780.
 */
cljs.core.async.__GT_t_cljs$core$async28780 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28780(flag__$1,cb__$1,meta28781){
return (new cljs.core.async.t_cljs$core$async28780(flag__$1,cb__$1,meta28781));
});

}

return (new cljs.core.async.t_cljs$core$async28780(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28783_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28783_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28784_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28784_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28785 = (i + (1));
i = G__28785;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
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
var args__4870__auto__ = [];
var len__4864__auto___28790 = arguments.length;
var i__4865__auto___28791 = (0);
while(true){
if((i__4865__auto___28791 < len__4864__auto___28790)){
args__4870__auto__.push((arguments[i__4865__auto___28791]));

var G__28792 = (i__4865__auto___28791 + (1));
i__4865__auto___28791 = G__28792;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28788){
var map__28789 = p__28788;
var map__28789__$1 = cljs.core.__destructure_map.call(null,map__28789);
var opts = map__28789__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28786){
var G__28787 = cljs.core.first.call(null,seq28786);
var seq28786__$1 = cljs.core.next.call(null,seq28786);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28787,seq28786__$1);
}));

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
var G__28794 = arguments.length;
switch (G__28794) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28694__auto___28840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = (function (state_28818){
var state_val_28819 = (state_28818[(1)]);
if((state_val_28819 === (7))){
var inst_28814 = (state_28818[(2)]);
var state_28818__$1 = state_28818;
var statearr_28820_28841 = state_28818__$1;
(statearr_28820_28841[(2)] = inst_28814);

(statearr_28820_28841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (1))){
var state_28818__$1 = state_28818;
var statearr_28821_28842 = state_28818__$1;
(statearr_28821_28842[(2)] = null);

(statearr_28821_28842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (4))){
var inst_28797 = (state_28818[(7)]);
var inst_28797__$1 = (state_28818[(2)]);
var inst_28798 = (inst_28797__$1 == null);
var state_28818__$1 = (function (){var statearr_28822 = state_28818;
(statearr_28822[(7)] = inst_28797__$1);

return statearr_28822;
})();
if(cljs.core.truth_(inst_28798)){
var statearr_28823_28843 = state_28818__$1;
(statearr_28823_28843[(1)] = (5));

} else {
var statearr_28824_28844 = state_28818__$1;
(statearr_28824_28844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (13))){
var state_28818__$1 = state_28818;
var statearr_28825_28845 = state_28818__$1;
(statearr_28825_28845[(2)] = null);

(statearr_28825_28845[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (6))){
var inst_28797 = (state_28818[(7)]);
var state_28818__$1 = state_28818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28818__$1,(11),to,inst_28797);
} else {
if((state_val_28819 === (3))){
var inst_28816 = (state_28818[(2)]);
var state_28818__$1 = state_28818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28818__$1,inst_28816);
} else {
if((state_val_28819 === (12))){
var state_28818__$1 = state_28818;
var statearr_28826_28846 = state_28818__$1;
(statearr_28826_28846[(2)] = null);

(statearr_28826_28846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (2))){
var state_28818__$1 = state_28818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28818__$1,(4),from);
} else {
if((state_val_28819 === (11))){
var inst_28807 = (state_28818[(2)]);
var state_28818__$1 = state_28818;
if(cljs.core.truth_(inst_28807)){
var statearr_28827_28847 = state_28818__$1;
(statearr_28827_28847[(1)] = (12));

} else {
var statearr_28828_28848 = state_28818__$1;
(statearr_28828_28848[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (9))){
var state_28818__$1 = state_28818;
var statearr_28829_28849 = state_28818__$1;
(statearr_28829_28849[(2)] = null);

(statearr_28829_28849[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (5))){
var state_28818__$1 = state_28818;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28830_28850 = state_28818__$1;
(statearr_28830_28850[(1)] = (8));

} else {
var statearr_28831_28851 = state_28818__$1;
(statearr_28831_28851[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (14))){
var inst_28812 = (state_28818[(2)]);
var state_28818__$1 = state_28818;
var statearr_28832_28852 = state_28818__$1;
(statearr_28832_28852[(2)] = inst_28812);

(statearr_28832_28852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (10))){
var inst_28804 = (state_28818[(2)]);
var state_28818__$1 = state_28818;
var statearr_28833_28853 = state_28818__$1;
(statearr_28833_28853[(2)] = inst_28804);

(statearr_28833_28853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (8))){
var inst_28801 = cljs.core.async.close_BANG_.call(null,to);
var state_28818__$1 = state_28818;
var statearr_28834_28854 = state_28818__$1;
(statearr_28834_28854[(2)] = inst_28801);

(statearr_28834_28854[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__28598__auto__ = null;
var cljs$core$async$state_machine__28598__auto____0 = (function (){
var statearr_28835 = [null,null,null,null,null,null,null,null];
(statearr_28835[(0)] = cljs$core$async$state_machine__28598__auto__);

(statearr_28835[(1)] = (1));

return statearr_28835;
});
var cljs$core$async$state_machine__28598__auto____1 = (function (state_28818){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_28818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e28836){if((e28836 instanceof Object)){
var ex__28601__auto__ = e28836;
var statearr_28837_28855 = state_28818;
(statearr_28837_28855[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28856 = state_28818;
state_28818 = G__28856;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
cljs$core$async$state_machine__28598__auto__ = function(state_28818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28598__auto____1.call(this,state_28818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28598__auto____0;
cljs$core$async$state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28598__auto____1;
return cljs$core$async$state_machine__28598__auto__;
})()
})();
var state__28696__auto__ = (function (){var statearr_28838 = f__28695__auto__.call(null);
(statearr_28838[(6)] = c__28694__auto___28840);

return statearr_28838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__28857){
var vec__28858 = p__28857;
var v = cljs.core.nth.call(null,vec__28858,(0),null);
var p = cljs.core.nth.call(null,vec__28858,(1),null);
var job = vec__28858;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28694__auto___29029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = (function (state_28865){
var state_val_28866 = (state_28865[(1)]);
if((state_val_28866 === (1))){
var state_28865__$1 = state_28865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28865__$1,(2),res,v);
} else {
if((state_val_28866 === (2))){
var inst_28862 = (state_28865[(2)]);
var inst_28863 = cljs.core.async.close_BANG_.call(null,res);
var state_28865__$1 = (function (){var statearr_28867 = state_28865;
(statearr_28867[(7)] = inst_28862);

return statearr_28867;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28865__$1,inst_28863);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28598__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28598__auto____0 = (function (){
var statearr_28868 = [null,null,null,null,null,null,null,null];
(statearr_28868[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28598__auto__);

(statearr_28868[(1)] = (1));

return statearr_28868;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28598__auto____1 = (function (state_28865){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_28865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e28869){if((e28869 instanceof Object)){
var ex__28601__auto__ = e28869;
var statearr_28870_29030 = state_28865;
(statearr_28870_29030[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29031 = state_28865;
state_28865 = G__29031;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28598__auto__ = function(state_28865){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28598__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28598__auto____1.call(this,state_28865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28598__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28598__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28598__auto__;
})()
})();
var state__28696__auto__ = (function (){var statearr_28871 = f__28695__auto__.call(null);
(statearr_28871[(6)] = c__28694__auto___29029);

return statearr_28871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__28872){
var vec__28873 = p__28872;
var v = cljs.core.nth.call(null,vec__28873,(0),null);
var p = cljs.core.nth.call(null,vec__28873,(1),null);
var job = vec__28873;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4741__auto___29032 = n;
var __29033 = (0);
while(true){
if((__29033 < n__4741__auto___29032)){
var G__28876_29034 = type;
var G__28876_29035__$1 = (((G__28876_29034 instanceof cljs.core.Keyword))?G__28876_29034.fqn:null);
switch (G__28876_29035__$1) {
case "compute":
var c__28694__auto___29037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29033,c__28694__auto___29037,G__28876_29034,G__28876_29035__$1,n__4741__auto___29032,jobs,results,process,async){
return (function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = ((function (__29033,c__28694__auto___29037,G__28876_29034,G__28876_29035__$1,n__4741__auto___29032,jobs,results,process,async){
return (function (state_28889){
var state_val_28890 = (state_28889[(1)]);
if((state_val_28890 === (1))){
var state_28889__$1 = state_28889;
var statearr_28891_29038 = state_28889__$1;
(statearr_28891_29038[(2)] = null);

(statearr_28891_29038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (2))){
var state_28889__$1 = state_28889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28889__$1,(4),jobs);
} else {
if((state_val_28890 === (3))){
var inst_28887 = (state_28889[(2)]);
var state_28889__$1 = state_28889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28889__$1,inst_28887);
} else {
if((state_val_28890 === (4))){
var inst_28879 = (state_28889[(2)]);
var inst_28880 = process.call(null,inst_28879);
var state_28889__$1 = state_28889;
if(cljs.core.truth_(inst_28880)){
var statearr_28892_29039 = state_28889__$1;
(statearr_28892_29039[(1)] = (5));

} else {
var statearr_28893_29040 = state_28889__$1;
(statearr_28893_29040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (5))){
var state_28889__$1 = state_28889;
var statearr_28894_29041 = state_28889__$1;
(statearr_28894_29041[(2)] = null);

(statearr_28894_29041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (6))){
var state_28889__$1 = state_28889;
var statearr_28895_29042 = state_28889__$1;
(statearr_28895_29042[(2)] = null);

(statearr_28895_29042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (7))){
var inst_28885 = (state_28889[(2)]);
var state_28889__$1 = state_28889;
var statearr_28896_29043 = state_28889__$1;
(statearr_28896_29043[(2)] = inst_28885);

(statearr_28896_29043[(1)] = (3));


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
});})(__29033,c__28694__auto___29037,G__28876_29034,G__28876_29035__$1,n__4741__auto___29032,jobs,results,process,async))
;
return ((function (__29033,switch__28597__auto__,c__28694__auto___29037,G__28876_29034,G__28876_29035__$1,n__4741__auto___29032,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28598__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28598__auto____0 = (function (){
var statearr_28897 = [null,null,null,null,null,null,null];
(statearr_28897[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28598__auto__);

(statearr_28897[(1)] = (1));

return statearr_28897;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28598__auto____1 = (function (state_28889){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_28889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e28898){if((e28898 instanceof Object)){
var ex__28601__auto__ = e28898;
var statearr_28899_29044 = state_28889;
(statearr_28899_29044[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29045 = state_28889;
state_28889 = G__29045;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28598__auto__ = function(state_28889){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28598__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28598__auto____1.call(this,state_28889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28598__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28598__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28598__auto__;
})()
;})(__29033,switch__28597__auto__,c__28694__auto___29037,G__28876_29034,G__28876_29035__$1,n__4741__auto___29032,jobs,results,process,async))
})();
var state__28696__auto__ = (function (){var statearr_28900 = f__28695__auto__.call(null);
(statearr_28900[(6)] = c__28694__auto___29037);

return statearr_28900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
});})(__29033,c__28694__auto___29037,G__28876_29034,G__28876_29035__$1,n__4741__auto___29032,jobs,results,process,async))
);


break;
case "async":
var c__28694__auto___29046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29033,c__28694__auto___29046,G__28876_29034,G__28876_29035__$1,n__4741__auto___29032,jobs,results,process,async){
return (function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = ((function (__29033,c__28694__auto___29046,G__28876_29034,G__28876_29035__$1,n__4741__auto___29032,jobs,results,process,async){
return (function (state_28913){
var state_val_28914 = (state_28913[(1)]);
if((state_val_28914 === (1))){
var state_28913__$1 = state_28913;
var statearr_28915_29047 = state_28913__$1;
(statearr_28915_29047[(2)] = null);

(statearr_28915_29047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28914 === (2))){
var state_28913__$1 = state_28913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28913__$1,(4),jobs);
} else {
if((state_val_28914 === (3))){
var inst_28911 = (state_28913[(2)]);
var state_28913__$1 = state_28913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28913__$1,inst_28911);
} else {
if((state_val_28914 === (4))){
var inst_28903 = (state_28913[(2)]);
var inst_28904 = async.call(null,inst_28903);
var state_28913__$1 = state_28913;
if(cljs.core.truth_(inst_28904)){
var statearr_28916_29048 = state_28913__$1;
(statearr_28916_29048[(1)] = (5));

} else {
var statearr_28917_29049 = state_28913__$1;
(statearr_28917_29049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28914 === (5))){
var state_28913__$1 = state_28913;
var statearr_28918_29050 = state_28913__$1;
(statearr_28918_29050[(2)] = null);

(statearr_28918_29050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28914 === (6))){
var state_28913__$1 = state_28913;
var statearr_28919_29051 = state_28913__$1;
(statearr_28919_29051[(2)] = null);

(statearr_28919_29051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28914 === (7))){
var inst_28909 = (state_28913[(2)]);
var state_28913__$1 = state_28913;
var statearr_28920_29052 = state_28913__$1;
(statearr_28920_29052[(2)] = inst_28909);

(statearr_28920_29052[(1)] = (3));


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
});})(__29033,c__28694__auto___29046,G__28876_29034,G__28876_29035__$1,n__4741__auto___29032,jobs,results,process,async))
;
return ((function (__29033,switch__28597__auto__,c__28694__auto___29046,G__28876_29034,G__28876_29035__$1,n__4741__auto___29032,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28598__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28598__auto____0 = (function (){
var statearr_28921 = [null,null,null,null,null,null,null];
(statearr_28921[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28598__auto__);

(statearr_28921[(1)] = (1));

return statearr_28921;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28598__auto____1 = (function (state_28913){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_28913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e28922){if((e28922 instanceof Object)){
var ex__28601__auto__ = e28922;
var statearr_28923_29053 = state_28913;
(statearr_28923_29053[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29054 = state_28913;
state_28913 = G__29054;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28598__auto__ = function(state_28913){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28598__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28598__auto____1.call(this,state_28913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28598__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28598__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28598__auto__;
})()
;})(__29033,switch__28597__auto__,c__28694__auto___29046,G__28876_29034,G__28876_29035__$1,n__4741__auto___29032,jobs,results,process,async))
})();
var state__28696__auto__ = (function (){var statearr_28924 = f__28695__auto__.call(null);
(statearr_28924[(6)] = c__28694__auto___29046);

return statearr_28924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
});})(__29033,c__28694__auto___29046,G__28876_29034,G__28876_29035__$1,n__4741__auto___29032,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28876_29035__$1)].join('')));

}

var G__29055 = (__29033 + (1));
__29033 = G__29055;
continue;
} else {
}
break;
}

var c__28694__auto___29056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = (function (state_28946){
var state_val_28947 = (state_28946[(1)]);
if((state_val_28947 === (7))){
var inst_28942 = (state_28946[(2)]);
var state_28946__$1 = state_28946;
var statearr_28948_29057 = state_28946__$1;
(statearr_28948_29057[(2)] = inst_28942);

(statearr_28948_29057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28947 === (1))){
var state_28946__$1 = state_28946;
var statearr_28949_29058 = state_28946__$1;
(statearr_28949_29058[(2)] = null);

(statearr_28949_29058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28947 === (4))){
var inst_28927 = (state_28946[(7)]);
var inst_28927__$1 = (state_28946[(2)]);
var inst_28928 = (inst_28927__$1 == null);
var state_28946__$1 = (function (){var statearr_28950 = state_28946;
(statearr_28950[(7)] = inst_28927__$1);

return statearr_28950;
})();
if(cljs.core.truth_(inst_28928)){
var statearr_28951_29059 = state_28946__$1;
(statearr_28951_29059[(1)] = (5));

} else {
var statearr_28952_29060 = state_28946__$1;
(statearr_28952_29060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28947 === (6))){
var inst_28932 = (state_28946[(8)]);
var inst_28927 = (state_28946[(7)]);
var inst_28932__$1 = cljs.core.async.chan.call(null,(1));
var inst_28933 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28934 = [inst_28927,inst_28932__$1];
var inst_28935 = (new cljs.core.PersistentVector(null,2,(5),inst_28933,inst_28934,null));
var state_28946__$1 = (function (){var statearr_28953 = state_28946;
(statearr_28953[(8)] = inst_28932__$1);

return statearr_28953;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28946__$1,(8),jobs,inst_28935);
} else {
if((state_val_28947 === (3))){
var inst_28944 = (state_28946[(2)]);
var state_28946__$1 = state_28946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28946__$1,inst_28944);
} else {
if((state_val_28947 === (2))){
var state_28946__$1 = state_28946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28946__$1,(4),from);
} else {
if((state_val_28947 === (9))){
var inst_28939 = (state_28946[(2)]);
var state_28946__$1 = (function (){var statearr_28954 = state_28946;
(statearr_28954[(9)] = inst_28939);

return statearr_28954;
})();
var statearr_28955_29061 = state_28946__$1;
(statearr_28955_29061[(2)] = null);

(statearr_28955_29061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28947 === (5))){
var inst_28930 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28946__$1 = state_28946;
var statearr_28956_29062 = state_28946__$1;
(statearr_28956_29062[(2)] = inst_28930);

(statearr_28956_29062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28947 === (8))){
var inst_28932 = (state_28946[(8)]);
var inst_28937 = (state_28946[(2)]);
var state_28946__$1 = (function (){var statearr_28957 = state_28946;
(statearr_28957[(10)] = inst_28937);

return statearr_28957;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28946__$1,(9),results,inst_28932);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28598__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28598__auto____0 = (function (){
var statearr_28958 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28958[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28598__auto__);

(statearr_28958[(1)] = (1));

return statearr_28958;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28598__auto____1 = (function (state_28946){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_28946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e28959){if((e28959 instanceof Object)){
var ex__28601__auto__ = e28959;
var statearr_28960_29063 = state_28946;
(statearr_28960_29063[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29064 = state_28946;
state_28946 = G__29064;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28598__auto__ = function(state_28946){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28598__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28598__auto____1.call(this,state_28946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28598__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28598__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28598__auto__;
})()
})();
var state__28696__auto__ = (function (){var statearr_28961 = f__28695__auto__.call(null);
(statearr_28961[(6)] = c__28694__auto___29056);

return statearr_28961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
}));


var c__28694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = (function (state_28999){
var state_val_29000 = (state_28999[(1)]);
if((state_val_29000 === (7))){
var inst_28995 = (state_28999[(2)]);
var state_28999__$1 = state_28999;
var statearr_29001_29065 = state_28999__$1;
(statearr_29001_29065[(2)] = inst_28995);

(statearr_29001_29065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (20))){
var state_28999__$1 = state_28999;
var statearr_29002_29066 = state_28999__$1;
(statearr_29002_29066[(2)] = null);

(statearr_29002_29066[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (1))){
var state_28999__$1 = state_28999;
var statearr_29003_29067 = state_28999__$1;
(statearr_29003_29067[(2)] = null);

(statearr_29003_29067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (4))){
var inst_28964 = (state_28999[(7)]);
var inst_28964__$1 = (state_28999[(2)]);
var inst_28965 = (inst_28964__$1 == null);
var state_28999__$1 = (function (){var statearr_29004 = state_28999;
(statearr_29004[(7)] = inst_28964__$1);

return statearr_29004;
})();
if(cljs.core.truth_(inst_28965)){
var statearr_29005_29068 = state_28999__$1;
(statearr_29005_29068[(1)] = (5));

} else {
var statearr_29006_29069 = state_28999__$1;
(statearr_29006_29069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (15))){
var inst_28977 = (state_28999[(8)]);
var state_28999__$1 = state_28999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28999__$1,(18),to,inst_28977);
} else {
if((state_val_29000 === (21))){
var inst_28990 = (state_28999[(2)]);
var state_28999__$1 = state_28999;
var statearr_29007_29070 = state_28999__$1;
(statearr_29007_29070[(2)] = inst_28990);

(statearr_29007_29070[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (13))){
var inst_28992 = (state_28999[(2)]);
var state_28999__$1 = (function (){var statearr_29008 = state_28999;
(statearr_29008[(9)] = inst_28992);

return statearr_29008;
})();
var statearr_29009_29071 = state_28999__$1;
(statearr_29009_29071[(2)] = null);

(statearr_29009_29071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (6))){
var inst_28964 = (state_28999[(7)]);
var state_28999__$1 = state_28999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28999__$1,(11),inst_28964);
} else {
if((state_val_29000 === (17))){
var inst_28985 = (state_28999[(2)]);
var state_28999__$1 = state_28999;
if(cljs.core.truth_(inst_28985)){
var statearr_29010_29072 = state_28999__$1;
(statearr_29010_29072[(1)] = (19));

} else {
var statearr_29011_29073 = state_28999__$1;
(statearr_29011_29073[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (3))){
var inst_28997 = (state_28999[(2)]);
var state_28999__$1 = state_28999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28999__$1,inst_28997);
} else {
if((state_val_29000 === (12))){
var inst_28974 = (state_28999[(10)]);
var state_28999__$1 = state_28999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28999__$1,(14),inst_28974);
} else {
if((state_val_29000 === (2))){
var state_28999__$1 = state_28999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28999__$1,(4),results);
} else {
if((state_val_29000 === (19))){
var state_28999__$1 = state_28999;
var statearr_29012_29074 = state_28999__$1;
(statearr_29012_29074[(2)] = null);

(statearr_29012_29074[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (11))){
var inst_28974 = (state_28999[(2)]);
var state_28999__$1 = (function (){var statearr_29013 = state_28999;
(statearr_29013[(10)] = inst_28974);

return statearr_29013;
})();
var statearr_29014_29075 = state_28999__$1;
(statearr_29014_29075[(2)] = null);

(statearr_29014_29075[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (9))){
var state_28999__$1 = state_28999;
var statearr_29015_29076 = state_28999__$1;
(statearr_29015_29076[(2)] = null);

(statearr_29015_29076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (5))){
var state_28999__$1 = state_28999;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29016_29077 = state_28999__$1;
(statearr_29016_29077[(1)] = (8));

} else {
var statearr_29017_29078 = state_28999__$1;
(statearr_29017_29078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (14))){
var inst_28977 = (state_28999[(8)]);
var inst_28979 = (state_28999[(11)]);
var inst_28977__$1 = (state_28999[(2)]);
var inst_28978 = (inst_28977__$1 == null);
var inst_28979__$1 = cljs.core.not.call(null,inst_28978);
var state_28999__$1 = (function (){var statearr_29018 = state_28999;
(statearr_29018[(8)] = inst_28977__$1);

(statearr_29018[(11)] = inst_28979__$1);

return statearr_29018;
})();
if(inst_28979__$1){
var statearr_29019_29079 = state_28999__$1;
(statearr_29019_29079[(1)] = (15));

} else {
var statearr_29020_29080 = state_28999__$1;
(statearr_29020_29080[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (16))){
var inst_28979 = (state_28999[(11)]);
var state_28999__$1 = state_28999;
var statearr_29021_29081 = state_28999__$1;
(statearr_29021_29081[(2)] = inst_28979);

(statearr_29021_29081[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (10))){
var inst_28971 = (state_28999[(2)]);
var state_28999__$1 = state_28999;
var statearr_29022_29082 = state_28999__$1;
(statearr_29022_29082[(2)] = inst_28971);

(statearr_29022_29082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (18))){
var inst_28982 = (state_28999[(2)]);
var state_28999__$1 = state_28999;
var statearr_29023_29083 = state_28999__$1;
(statearr_29023_29083[(2)] = inst_28982);

(statearr_29023_29083[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (8))){
var inst_28968 = cljs.core.async.close_BANG_.call(null,to);
var state_28999__$1 = state_28999;
var statearr_29024_29084 = state_28999__$1;
(statearr_29024_29084[(2)] = inst_28968);

(statearr_29024_29084[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28598__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28598__auto____0 = (function (){
var statearr_29025 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29025[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28598__auto__);

(statearr_29025[(1)] = (1));

return statearr_29025;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28598__auto____1 = (function (state_28999){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_28999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e29026){if((e29026 instanceof Object)){
var ex__28601__auto__ = e29026;
var statearr_29027_29085 = state_28999;
(statearr_29027_29085[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29086 = state_28999;
state_28999 = G__29086;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28598__auto__ = function(state_28999){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28598__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28598__auto____1.call(this,state_28999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28598__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28598__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28598__auto__;
})()
})();
var state__28696__auto__ = (function (){var statearr_29028 = f__28695__auto__.call(null);
(statearr_29028[(6)] = c__28694__auto__);

return statearr_29028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
}));

return c__28694__auto__;
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
var G__29088 = arguments.length;
switch (G__29088) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__29091 = arguments.length;
switch (G__29091) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__29094 = arguments.length;
switch (G__29094) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28694__auto___29143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = (function (state_29120){
var state_val_29121 = (state_29120[(1)]);
if((state_val_29121 === (7))){
var inst_29116 = (state_29120[(2)]);
var state_29120__$1 = state_29120;
var statearr_29122_29144 = state_29120__$1;
(statearr_29122_29144[(2)] = inst_29116);

(statearr_29122_29144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (1))){
var state_29120__$1 = state_29120;
var statearr_29123_29145 = state_29120__$1;
(statearr_29123_29145[(2)] = null);

(statearr_29123_29145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (4))){
var inst_29097 = (state_29120[(7)]);
var inst_29097__$1 = (state_29120[(2)]);
var inst_29098 = (inst_29097__$1 == null);
var state_29120__$1 = (function (){var statearr_29124 = state_29120;
(statearr_29124[(7)] = inst_29097__$1);

return statearr_29124;
})();
if(cljs.core.truth_(inst_29098)){
var statearr_29125_29146 = state_29120__$1;
(statearr_29125_29146[(1)] = (5));

} else {
var statearr_29126_29147 = state_29120__$1;
(statearr_29126_29147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (13))){
var state_29120__$1 = state_29120;
var statearr_29127_29148 = state_29120__$1;
(statearr_29127_29148[(2)] = null);

(statearr_29127_29148[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (6))){
var inst_29097 = (state_29120[(7)]);
var inst_29103 = p.call(null,inst_29097);
var state_29120__$1 = state_29120;
if(cljs.core.truth_(inst_29103)){
var statearr_29128_29149 = state_29120__$1;
(statearr_29128_29149[(1)] = (9));

} else {
var statearr_29129_29150 = state_29120__$1;
(statearr_29129_29150[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (3))){
var inst_29118 = (state_29120[(2)]);
var state_29120__$1 = state_29120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29120__$1,inst_29118);
} else {
if((state_val_29121 === (12))){
var state_29120__$1 = state_29120;
var statearr_29130_29151 = state_29120__$1;
(statearr_29130_29151[(2)] = null);

(statearr_29130_29151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (2))){
var state_29120__$1 = state_29120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29120__$1,(4),ch);
} else {
if((state_val_29121 === (11))){
var inst_29097 = (state_29120[(7)]);
var inst_29107 = (state_29120[(2)]);
var state_29120__$1 = state_29120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29120__$1,(8),inst_29107,inst_29097);
} else {
if((state_val_29121 === (9))){
var state_29120__$1 = state_29120;
var statearr_29131_29152 = state_29120__$1;
(statearr_29131_29152[(2)] = tc);

(statearr_29131_29152[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (5))){
var inst_29100 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29101 = cljs.core.async.close_BANG_.call(null,fc);
var state_29120__$1 = (function (){var statearr_29132 = state_29120;
(statearr_29132[(8)] = inst_29100);

return statearr_29132;
})();
var statearr_29133_29153 = state_29120__$1;
(statearr_29133_29153[(2)] = inst_29101);

(statearr_29133_29153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (14))){
var inst_29114 = (state_29120[(2)]);
var state_29120__$1 = state_29120;
var statearr_29134_29154 = state_29120__$1;
(statearr_29134_29154[(2)] = inst_29114);

(statearr_29134_29154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (10))){
var state_29120__$1 = state_29120;
var statearr_29135_29155 = state_29120__$1;
(statearr_29135_29155[(2)] = fc);

(statearr_29135_29155[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (8))){
var inst_29109 = (state_29120[(2)]);
var state_29120__$1 = state_29120;
if(cljs.core.truth_(inst_29109)){
var statearr_29136_29156 = state_29120__$1;
(statearr_29136_29156[(1)] = (12));

} else {
var statearr_29137_29157 = state_29120__$1;
(statearr_29137_29157[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__28598__auto__ = null;
var cljs$core$async$state_machine__28598__auto____0 = (function (){
var statearr_29138 = [null,null,null,null,null,null,null,null,null];
(statearr_29138[(0)] = cljs$core$async$state_machine__28598__auto__);

(statearr_29138[(1)] = (1));

return statearr_29138;
});
var cljs$core$async$state_machine__28598__auto____1 = (function (state_29120){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_29120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e29139){if((e29139 instanceof Object)){
var ex__28601__auto__ = e29139;
var statearr_29140_29158 = state_29120;
(statearr_29140_29158[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29159 = state_29120;
state_29120 = G__29159;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
cljs$core$async$state_machine__28598__auto__ = function(state_29120){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28598__auto____1.call(this,state_29120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28598__auto____0;
cljs$core$async$state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28598__auto____1;
return cljs$core$async$state_machine__28598__auto__;
})()
})();
var state__28696__auto__ = (function (){var statearr_29141 = f__28695__auto__.call(null);
(statearr_29141[(6)] = c__28694__auto___29143);

return statearr_29141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = (function (state_29180){
var state_val_29181 = (state_29180[(1)]);
if((state_val_29181 === (7))){
var inst_29176 = (state_29180[(2)]);
var state_29180__$1 = state_29180;
var statearr_29182_29200 = state_29180__$1;
(statearr_29182_29200[(2)] = inst_29176);

(statearr_29182_29200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (1))){
var inst_29160 = init;
var state_29180__$1 = (function (){var statearr_29183 = state_29180;
(statearr_29183[(7)] = inst_29160);

return statearr_29183;
})();
var statearr_29184_29201 = state_29180__$1;
(statearr_29184_29201[(2)] = null);

(statearr_29184_29201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (4))){
var inst_29163 = (state_29180[(8)]);
var inst_29163__$1 = (state_29180[(2)]);
var inst_29164 = (inst_29163__$1 == null);
var state_29180__$1 = (function (){var statearr_29185 = state_29180;
(statearr_29185[(8)] = inst_29163__$1);

return statearr_29185;
})();
if(cljs.core.truth_(inst_29164)){
var statearr_29186_29202 = state_29180__$1;
(statearr_29186_29202[(1)] = (5));

} else {
var statearr_29187_29203 = state_29180__$1;
(statearr_29187_29203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (6))){
var inst_29167 = (state_29180[(9)]);
var inst_29160 = (state_29180[(7)]);
var inst_29163 = (state_29180[(8)]);
var inst_29167__$1 = f.call(null,inst_29160,inst_29163);
var inst_29168 = cljs.core.reduced_QMARK_.call(null,inst_29167__$1);
var state_29180__$1 = (function (){var statearr_29188 = state_29180;
(statearr_29188[(9)] = inst_29167__$1);

return statearr_29188;
})();
if(inst_29168){
var statearr_29189_29204 = state_29180__$1;
(statearr_29189_29204[(1)] = (8));

} else {
var statearr_29190_29205 = state_29180__$1;
(statearr_29190_29205[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (3))){
var inst_29178 = (state_29180[(2)]);
var state_29180__$1 = state_29180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29180__$1,inst_29178);
} else {
if((state_val_29181 === (2))){
var state_29180__$1 = state_29180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29180__$1,(4),ch);
} else {
if((state_val_29181 === (9))){
var inst_29167 = (state_29180[(9)]);
var inst_29160 = inst_29167;
var state_29180__$1 = (function (){var statearr_29191 = state_29180;
(statearr_29191[(7)] = inst_29160);

return statearr_29191;
})();
var statearr_29192_29206 = state_29180__$1;
(statearr_29192_29206[(2)] = null);

(statearr_29192_29206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (5))){
var inst_29160 = (state_29180[(7)]);
var state_29180__$1 = state_29180;
var statearr_29193_29207 = state_29180__$1;
(statearr_29193_29207[(2)] = inst_29160);

(statearr_29193_29207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (10))){
var inst_29174 = (state_29180[(2)]);
var state_29180__$1 = state_29180;
var statearr_29194_29208 = state_29180__$1;
(statearr_29194_29208[(2)] = inst_29174);

(statearr_29194_29208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (8))){
var inst_29167 = (state_29180[(9)]);
var inst_29170 = cljs.core.deref.call(null,inst_29167);
var state_29180__$1 = state_29180;
var statearr_29195_29209 = state_29180__$1;
(statearr_29195_29209[(2)] = inst_29170);

(statearr_29195_29209[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__28598__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28598__auto____0 = (function (){
var statearr_29196 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29196[(0)] = cljs$core$async$reduce_$_state_machine__28598__auto__);

(statearr_29196[(1)] = (1));

return statearr_29196;
});
var cljs$core$async$reduce_$_state_machine__28598__auto____1 = (function (state_29180){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_29180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e29197){if((e29197 instanceof Object)){
var ex__28601__auto__ = e29197;
var statearr_29198_29210 = state_29180;
(statearr_29198_29210[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29211 = state_29180;
state_29180 = G__29211;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28598__auto__ = function(state_29180){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28598__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28598__auto____1.call(this,state_29180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28598__auto____0;
cljs$core$async$reduce_$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28598__auto____1;
return cljs$core$async$reduce_$_state_machine__28598__auto__;
})()
})();
var state__28696__auto__ = (function (){var statearr_29199 = f__28695__auto__.call(null);
(statearr_29199[(6)] = c__28694__auto__);

return statearr_29199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
}));

return c__28694__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = (function (state_29217){
var state_val_29218 = (state_29217[(1)]);
if((state_val_29218 === (1))){
var inst_29212 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_29217__$1 = state_29217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29217__$1,(2),inst_29212);
} else {
if((state_val_29218 === (2))){
var inst_29214 = (state_29217[(2)]);
var inst_29215 = f__$1.call(null,inst_29214);
var state_29217__$1 = state_29217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29217__$1,inst_29215);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28598__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28598__auto____0 = (function (){
var statearr_29219 = [null,null,null,null,null,null,null];
(statearr_29219[(0)] = cljs$core$async$transduce_$_state_machine__28598__auto__);

(statearr_29219[(1)] = (1));

return statearr_29219;
});
var cljs$core$async$transduce_$_state_machine__28598__auto____1 = (function (state_29217){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_29217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e29220){if((e29220 instanceof Object)){
var ex__28601__auto__ = e29220;
var statearr_29221_29223 = state_29217;
(statearr_29221_29223[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29224 = state_29217;
state_29217 = G__29224;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28598__auto__ = function(state_29217){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28598__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28598__auto____1.call(this,state_29217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28598__auto____0;
cljs$core$async$transduce_$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28598__auto____1;
return cljs$core$async$transduce_$_state_machine__28598__auto__;
})()
})();
var state__28696__auto__ = (function (){var statearr_29222 = f__28695__auto__.call(null);
(statearr_29222[(6)] = c__28694__auto__);

return statearr_29222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
}));

return c__28694__auto__;
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
var G__29226 = arguments.length;
switch (G__29226) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = (function (state_29251){
var state_val_29252 = (state_29251[(1)]);
if((state_val_29252 === (7))){
var inst_29233 = (state_29251[(2)]);
var state_29251__$1 = state_29251;
var statearr_29253_29274 = state_29251__$1;
(statearr_29253_29274[(2)] = inst_29233);

(statearr_29253_29274[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29252 === (1))){
var inst_29227 = cljs.core.seq.call(null,coll);
var inst_29228 = inst_29227;
var state_29251__$1 = (function (){var statearr_29254 = state_29251;
(statearr_29254[(7)] = inst_29228);

return statearr_29254;
})();
var statearr_29255_29275 = state_29251__$1;
(statearr_29255_29275[(2)] = null);

(statearr_29255_29275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29252 === (4))){
var inst_29228 = (state_29251[(7)]);
var inst_29231 = cljs.core.first.call(null,inst_29228);
var state_29251__$1 = state_29251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29251__$1,(7),ch,inst_29231);
} else {
if((state_val_29252 === (13))){
var inst_29245 = (state_29251[(2)]);
var state_29251__$1 = state_29251;
var statearr_29256_29276 = state_29251__$1;
(statearr_29256_29276[(2)] = inst_29245);

(statearr_29256_29276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29252 === (6))){
var inst_29236 = (state_29251[(2)]);
var state_29251__$1 = state_29251;
if(cljs.core.truth_(inst_29236)){
var statearr_29257_29277 = state_29251__$1;
(statearr_29257_29277[(1)] = (8));

} else {
var statearr_29258_29278 = state_29251__$1;
(statearr_29258_29278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29252 === (3))){
var inst_29249 = (state_29251[(2)]);
var state_29251__$1 = state_29251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29251__$1,inst_29249);
} else {
if((state_val_29252 === (12))){
var state_29251__$1 = state_29251;
var statearr_29259_29279 = state_29251__$1;
(statearr_29259_29279[(2)] = null);

(statearr_29259_29279[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29252 === (2))){
var inst_29228 = (state_29251[(7)]);
var state_29251__$1 = state_29251;
if(cljs.core.truth_(inst_29228)){
var statearr_29260_29280 = state_29251__$1;
(statearr_29260_29280[(1)] = (4));

} else {
var statearr_29261_29281 = state_29251__$1;
(statearr_29261_29281[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29252 === (11))){
var inst_29242 = cljs.core.async.close_BANG_.call(null,ch);
var state_29251__$1 = state_29251;
var statearr_29262_29282 = state_29251__$1;
(statearr_29262_29282[(2)] = inst_29242);

(statearr_29262_29282[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29252 === (9))){
var state_29251__$1 = state_29251;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29263_29283 = state_29251__$1;
(statearr_29263_29283[(1)] = (11));

} else {
var statearr_29264_29284 = state_29251__$1;
(statearr_29264_29284[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29252 === (5))){
var inst_29228 = (state_29251[(7)]);
var state_29251__$1 = state_29251;
var statearr_29265_29285 = state_29251__$1;
(statearr_29265_29285[(2)] = inst_29228);

(statearr_29265_29285[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29252 === (10))){
var inst_29247 = (state_29251[(2)]);
var state_29251__$1 = state_29251;
var statearr_29266_29286 = state_29251__$1;
(statearr_29266_29286[(2)] = inst_29247);

(statearr_29266_29286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29252 === (8))){
var inst_29228 = (state_29251[(7)]);
var inst_29238 = cljs.core.next.call(null,inst_29228);
var inst_29228__$1 = inst_29238;
var state_29251__$1 = (function (){var statearr_29267 = state_29251;
(statearr_29267[(7)] = inst_29228__$1);

return statearr_29267;
})();
var statearr_29268_29287 = state_29251__$1;
(statearr_29268_29287[(2)] = null);

(statearr_29268_29287[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28598__auto__ = null;
var cljs$core$async$state_machine__28598__auto____0 = (function (){
var statearr_29269 = [null,null,null,null,null,null,null,null];
(statearr_29269[(0)] = cljs$core$async$state_machine__28598__auto__);

(statearr_29269[(1)] = (1));

return statearr_29269;
});
var cljs$core$async$state_machine__28598__auto____1 = (function (state_29251){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_29251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e29270){if((e29270 instanceof Object)){
var ex__28601__auto__ = e29270;
var statearr_29271_29288 = state_29251;
(statearr_29271_29288[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29289 = state_29251;
state_29251 = G__29289;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
cljs$core$async$state_machine__28598__auto__ = function(state_29251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28598__auto____1.call(this,state_29251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28598__auto____0;
cljs$core$async$state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28598__auto____1;
return cljs$core$async$state_machine__28598__auto__;
})()
})();
var state__28696__auto__ = (function (){var statearr_29272 = f__28695__auto__.call(null);
(statearr_29272[(6)] = c__28694__auto__);

return statearr_29272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
}));

return c__28694__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

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

var cljs$core$async$Mux$muxch_STAR_$dyn_29290 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,_);
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_29290.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_29291 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_29291.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_29292 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m,ch);
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_29292.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_29293 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m);
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_29293.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29294 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29294 = (function (ch,cs,meta29295){
this.ch = ch;
this.cs = cs;
this.meta29295 = meta29295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29296,meta29295__$1){
var self__ = this;
var _29296__$1 = this;
return (new cljs.core.async.t_cljs$core$async29294(self__.ch,self__.cs,meta29295__$1));
}));

(cljs.core.async.t_cljs$core$async29294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29296){
var self__ = this;
var _29296__$1 = this;
return self__.meta29295;
}));

(cljs.core.async.t_cljs$core$async29294.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29294.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29294.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29294.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async29294.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async29294.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async29294.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29295","meta29295",2053827348,null)], null);
}));

(cljs.core.async.t_cljs$core$async29294.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29294.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29294");

(cljs.core.async.t_cljs$core$async29294.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async29294");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29294.
 */
cljs.core.async.__GT_t_cljs$core$async29294 = (function cljs$core$async$mult_$___GT_t_cljs$core$async29294(ch__$1,cs__$1,meta29295){
return (new cljs.core.async.t_cljs$core$async29294(ch__$1,cs__$1,meta29295));
});

}

return (new cljs.core.async.t_cljs$core$async29294(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__28694__auto___29516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = (function (state_29431){
var state_val_29432 = (state_29431[(1)]);
if((state_val_29432 === (7))){
var inst_29427 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
var statearr_29433_29517 = state_29431__$1;
(statearr_29433_29517[(2)] = inst_29427);

(statearr_29433_29517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (20))){
var inst_29330 = (state_29431[(7)]);
var inst_29342 = cljs.core.first.call(null,inst_29330);
var inst_29343 = cljs.core.nth.call(null,inst_29342,(0),null);
var inst_29344 = cljs.core.nth.call(null,inst_29342,(1),null);
var state_29431__$1 = (function (){var statearr_29434 = state_29431;
(statearr_29434[(8)] = inst_29343);

return statearr_29434;
})();
if(cljs.core.truth_(inst_29344)){
var statearr_29435_29518 = state_29431__$1;
(statearr_29435_29518[(1)] = (22));

} else {
var statearr_29436_29519 = state_29431__$1;
(statearr_29436_29519[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (27))){
var inst_29374 = (state_29431[(9)]);
var inst_29372 = (state_29431[(10)]);
var inst_29379 = (state_29431[(11)]);
var inst_29299 = (state_29431[(12)]);
var inst_29379__$1 = cljs.core._nth.call(null,inst_29372,inst_29374);
var inst_29380 = cljs.core.async.put_BANG_.call(null,inst_29379__$1,inst_29299,done);
var state_29431__$1 = (function (){var statearr_29437 = state_29431;
(statearr_29437[(11)] = inst_29379__$1);

return statearr_29437;
})();
if(cljs.core.truth_(inst_29380)){
var statearr_29438_29520 = state_29431__$1;
(statearr_29438_29520[(1)] = (30));

} else {
var statearr_29439_29521 = state_29431__$1;
(statearr_29439_29521[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (1))){
var state_29431__$1 = state_29431;
var statearr_29440_29522 = state_29431__$1;
(statearr_29440_29522[(2)] = null);

(statearr_29440_29522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (24))){
var inst_29330 = (state_29431[(7)]);
var inst_29349 = (state_29431[(2)]);
var inst_29350 = cljs.core.next.call(null,inst_29330);
var inst_29308 = inst_29350;
var inst_29309 = null;
var inst_29310 = (0);
var inst_29311 = (0);
var state_29431__$1 = (function (){var statearr_29441 = state_29431;
(statearr_29441[(13)] = inst_29311);

(statearr_29441[(14)] = inst_29308);

(statearr_29441[(15)] = inst_29309);

(statearr_29441[(16)] = inst_29310);

(statearr_29441[(17)] = inst_29349);

return statearr_29441;
})();
var statearr_29442_29523 = state_29431__$1;
(statearr_29442_29523[(2)] = null);

(statearr_29442_29523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (39))){
var state_29431__$1 = state_29431;
var statearr_29446_29524 = state_29431__$1;
(statearr_29446_29524[(2)] = null);

(statearr_29446_29524[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (4))){
var inst_29299 = (state_29431[(12)]);
var inst_29299__$1 = (state_29431[(2)]);
var inst_29300 = (inst_29299__$1 == null);
var state_29431__$1 = (function (){var statearr_29447 = state_29431;
(statearr_29447[(12)] = inst_29299__$1);

return statearr_29447;
})();
if(cljs.core.truth_(inst_29300)){
var statearr_29448_29525 = state_29431__$1;
(statearr_29448_29525[(1)] = (5));

} else {
var statearr_29449_29526 = state_29431__$1;
(statearr_29449_29526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (15))){
var inst_29311 = (state_29431[(13)]);
var inst_29308 = (state_29431[(14)]);
var inst_29309 = (state_29431[(15)]);
var inst_29310 = (state_29431[(16)]);
var inst_29326 = (state_29431[(2)]);
var inst_29327 = (inst_29311 + (1));
var tmp29443 = inst_29308;
var tmp29444 = inst_29309;
var tmp29445 = inst_29310;
var inst_29308__$1 = tmp29443;
var inst_29309__$1 = tmp29444;
var inst_29310__$1 = tmp29445;
var inst_29311__$1 = inst_29327;
var state_29431__$1 = (function (){var statearr_29450 = state_29431;
(statearr_29450[(13)] = inst_29311__$1);

(statearr_29450[(14)] = inst_29308__$1);

(statearr_29450[(15)] = inst_29309__$1);

(statearr_29450[(16)] = inst_29310__$1);

(statearr_29450[(18)] = inst_29326);

return statearr_29450;
})();
var statearr_29451_29527 = state_29431__$1;
(statearr_29451_29527[(2)] = null);

(statearr_29451_29527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (21))){
var inst_29353 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
var statearr_29455_29528 = state_29431__$1;
(statearr_29455_29528[(2)] = inst_29353);

(statearr_29455_29528[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (31))){
var inst_29379 = (state_29431[(11)]);
var inst_29383 = done.call(null,null);
var inst_29384 = cljs.core.async.untap_STAR_.call(null,m,inst_29379);
var state_29431__$1 = (function (){var statearr_29456 = state_29431;
(statearr_29456[(19)] = inst_29383);

return statearr_29456;
})();
var statearr_29457_29529 = state_29431__$1;
(statearr_29457_29529[(2)] = inst_29384);

(statearr_29457_29529[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (32))){
var inst_29374 = (state_29431[(9)]);
var inst_29372 = (state_29431[(10)]);
var inst_29371 = (state_29431[(20)]);
var inst_29373 = (state_29431[(21)]);
var inst_29386 = (state_29431[(2)]);
var inst_29387 = (inst_29374 + (1));
var tmp29452 = inst_29372;
var tmp29453 = inst_29371;
var tmp29454 = inst_29373;
var inst_29371__$1 = tmp29453;
var inst_29372__$1 = tmp29452;
var inst_29373__$1 = tmp29454;
var inst_29374__$1 = inst_29387;
var state_29431__$1 = (function (){var statearr_29458 = state_29431;
(statearr_29458[(9)] = inst_29374__$1);

(statearr_29458[(10)] = inst_29372__$1);

(statearr_29458[(22)] = inst_29386);

(statearr_29458[(20)] = inst_29371__$1);

(statearr_29458[(21)] = inst_29373__$1);

return statearr_29458;
})();
var statearr_29459_29530 = state_29431__$1;
(statearr_29459_29530[(2)] = null);

(statearr_29459_29530[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (40))){
var inst_29399 = (state_29431[(23)]);
var inst_29403 = done.call(null,null);
var inst_29404 = cljs.core.async.untap_STAR_.call(null,m,inst_29399);
var state_29431__$1 = (function (){var statearr_29460 = state_29431;
(statearr_29460[(24)] = inst_29403);

return statearr_29460;
})();
var statearr_29461_29531 = state_29431__$1;
(statearr_29461_29531[(2)] = inst_29404);

(statearr_29461_29531[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (33))){
var inst_29390 = (state_29431[(25)]);
var inst_29392 = cljs.core.chunked_seq_QMARK_.call(null,inst_29390);
var state_29431__$1 = state_29431;
if(inst_29392){
var statearr_29462_29532 = state_29431__$1;
(statearr_29462_29532[(1)] = (36));

} else {
var statearr_29463_29533 = state_29431__$1;
(statearr_29463_29533[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (13))){
var inst_29320 = (state_29431[(26)]);
var inst_29323 = cljs.core.async.close_BANG_.call(null,inst_29320);
var state_29431__$1 = state_29431;
var statearr_29464_29534 = state_29431__$1;
(statearr_29464_29534[(2)] = inst_29323);

(statearr_29464_29534[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (22))){
var inst_29343 = (state_29431[(8)]);
var inst_29346 = cljs.core.async.close_BANG_.call(null,inst_29343);
var state_29431__$1 = state_29431;
var statearr_29465_29535 = state_29431__$1;
(statearr_29465_29535[(2)] = inst_29346);

(statearr_29465_29535[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (36))){
var inst_29390 = (state_29431[(25)]);
var inst_29394 = cljs.core.chunk_first.call(null,inst_29390);
var inst_29395 = cljs.core.chunk_rest.call(null,inst_29390);
var inst_29396 = cljs.core.count.call(null,inst_29394);
var inst_29371 = inst_29395;
var inst_29372 = inst_29394;
var inst_29373 = inst_29396;
var inst_29374 = (0);
var state_29431__$1 = (function (){var statearr_29466 = state_29431;
(statearr_29466[(9)] = inst_29374);

(statearr_29466[(10)] = inst_29372);

(statearr_29466[(20)] = inst_29371);

(statearr_29466[(21)] = inst_29373);

return statearr_29466;
})();
var statearr_29467_29536 = state_29431__$1;
(statearr_29467_29536[(2)] = null);

(statearr_29467_29536[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (41))){
var inst_29390 = (state_29431[(25)]);
var inst_29406 = (state_29431[(2)]);
var inst_29407 = cljs.core.next.call(null,inst_29390);
var inst_29371 = inst_29407;
var inst_29372 = null;
var inst_29373 = (0);
var inst_29374 = (0);
var state_29431__$1 = (function (){var statearr_29468 = state_29431;
(statearr_29468[(9)] = inst_29374);

(statearr_29468[(10)] = inst_29372);

(statearr_29468[(27)] = inst_29406);

(statearr_29468[(20)] = inst_29371);

(statearr_29468[(21)] = inst_29373);

return statearr_29468;
})();
var statearr_29469_29537 = state_29431__$1;
(statearr_29469_29537[(2)] = null);

(statearr_29469_29537[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (43))){
var state_29431__$1 = state_29431;
var statearr_29470_29538 = state_29431__$1;
(statearr_29470_29538[(2)] = null);

(statearr_29470_29538[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (29))){
var inst_29415 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
var statearr_29471_29539 = state_29431__$1;
(statearr_29471_29539[(2)] = inst_29415);

(statearr_29471_29539[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (44))){
var inst_29424 = (state_29431[(2)]);
var state_29431__$1 = (function (){var statearr_29472 = state_29431;
(statearr_29472[(28)] = inst_29424);

return statearr_29472;
})();
var statearr_29473_29540 = state_29431__$1;
(statearr_29473_29540[(2)] = null);

(statearr_29473_29540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (6))){
var inst_29363 = (state_29431[(29)]);
var inst_29362 = cljs.core.deref.call(null,cs);
var inst_29363__$1 = cljs.core.keys.call(null,inst_29362);
var inst_29364 = cljs.core.count.call(null,inst_29363__$1);
var inst_29365 = cljs.core.reset_BANG_.call(null,dctr,inst_29364);
var inst_29370 = cljs.core.seq.call(null,inst_29363__$1);
var inst_29371 = inst_29370;
var inst_29372 = null;
var inst_29373 = (0);
var inst_29374 = (0);
var state_29431__$1 = (function (){var statearr_29474 = state_29431;
(statearr_29474[(9)] = inst_29374);

(statearr_29474[(10)] = inst_29372);

(statearr_29474[(20)] = inst_29371);

(statearr_29474[(21)] = inst_29373);

(statearr_29474[(30)] = inst_29365);

(statearr_29474[(29)] = inst_29363__$1);

return statearr_29474;
})();
var statearr_29475_29541 = state_29431__$1;
(statearr_29475_29541[(2)] = null);

(statearr_29475_29541[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (28))){
var inst_29390 = (state_29431[(25)]);
var inst_29371 = (state_29431[(20)]);
var inst_29390__$1 = cljs.core.seq.call(null,inst_29371);
var state_29431__$1 = (function (){var statearr_29476 = state_29431;
(statearr_29476[(25)] = inst_29390__$1);

return statearr_29476;
})();
if(inst_29390__$1){
var statearr_29477_29542 = state_29431__$1;
(statearr_29477_29542[(1)] = (33));

} else {
var statearr_29478_29543 = state_29431__$1;
(statearr_29478_29543[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (25))){
var inst_29374 = (state_29431[(9)]);
var inst_29373 = (state_29431[(21)]);
var inst_29376 = (inst_29374 < inst_29373);
var inst_29377 = inst_29376;
var state_29431__$1 = state_29431;
if(cljs.core.truth_(inst_29377)){
var statearr_29479_29544 = state_29431__$1;
(statearr_29479_29544[(1)] = (27));

} else {
var statearr_29480_29545 = state_29431__$1;
(statearr_29480_29545[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (34))){
var state_29431__$1 = state_29431;
var statearr_29481_29546 = state_29431__$1;
(statearr_29481_29546[(2)] = null);

(statearr_29481_29546[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (17))){
var state_29431__$1 = state_29431;
var statearr_29482_29547 = state_29431__$1;
(statearr_29482_29547[(2)] = null);

(statearr_29482_29547[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (3))){
var inst_29429 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29431__$1,inst_29429);
} else {
if((state_val_29432 === (12))){
var inst_29358 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
var statearr_29483_29548 = state_29431__$1;
(statearr_29483_29548[(2)] = inst_29358);

(statearr_29483_29548[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (2))){
var state_29431__$1 = state_29431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29431__$1,(4),ch);
} else {
if((state_val_29432 === (23))){
var state_29431__$1 = state_29431;
var statearr_29484_29549 = state_29431__$1;
(statearr_29484_29549[(2)] = null);

(statearr_29484_29549[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (35))){
var inst_29413 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
var statearr_29485_29550 = state_29431__$1;
(statearr_29485_29550[(2)] = inst_29413);

(statearr_29485_29550[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (19))){
var inst_29330 = (state_29431[(7)]);
var inst_29334 = cljs.core.chunk_first.call(null,inst_29330);
var inst_29335 = cljs.core.chunk_rest.call(null,inst_29330);
var inst_29336 = cljs.core.count.call(null,inst_29334);
var inst_29308 = inst_29335;
var inst_29309 = inst_29334;
var inst_29310 = inst_29336;
var inst_29311 = (0);
var state_29431__$1 = (function (){var statearr_29486 = state_29431;
(statearr_29486[(13)] = inst_29311);

(statearr_29486[(14)] = inst_29308);

(statearr_29486[(15)] = inst_29309);

(statearr_29486[(16)] = inst_29310);

return statearr_29486;
})();
var statearr_29487_29551 = state_29431__$1;
(statearr_29487_29551[(2)] = null);

(statearr_29487_29551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (11))){
var inst_29330 = (state_29431[(7)]);
var inst_29308 = (state_29431[(14)]);
var inst_29330__$1 = cljs.core.seq.call(null,inst_29308);
var state_29431__$1 = (function (){var statearr_29488 = state_29431;
(statearr_29488[(7)] = inst_29330__$1);

return statearr_29488;
})();
if(inst_29330__$1){
var statearr_29489_29552 = state_29431__$1;
(statearr_29489_29552[(1)] = (16));

} else {
var statearr_29490_29553 = state_29431__$1;
(statearr_29490_29553[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (9))){
var inst_29360 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
var statearr_29491_29554 = state_29431__$1;
(statearr_29491_29554[(2)] = inst_29360);

(statearr_29491_29554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (5))){
var inst_29306 = cljs.core.deref.call(null,cs);
var inst_29307 = cljs.core.seq.call(null,inst_29306);
var inst_29308 = inst_29307;
var inst_29309 = null;
var inst_29310 = (0);
var inst_29311 = (0);
var state_29431__$1 = (function (){var statearr_29492 = state_29431;
(statearr_29492[(13)] = inst_29311);

(statearr_29492[(14)] = inst_29308);

(statearr_29492[(15)] = inst_29309);

(statearr_29492[(16)] = inst_29310);

return statearr_29492;
})();
var statearr_29493_29555 = state_29431__$1;
(statearr_29493_29555[(2)] = null);

(statearr_29493_29555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (14))){
var state_29431__$1 = state_29431;
var statearr_29494_29556 = state_29431__$1;
(statearr_29494_29556[(2)] = null);

(statearr_29494_29556[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (45))){
var inst_29421 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
var statearr_29495_29557 = state_29431__$1;
(statearr_29495_29557[(2)] = inst_29421);

(statearr_29495_29557[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (26))){
var inst_29363 = (state_29431[(29)]);
var inst_29417 = (state_29431[(2)]);
var inst_29418 = cljs.core.seq.call(null,inst_29363);
var state_29431__$1 = (function (){var statearr_29496 = state_29431;
(statearr_29496[(31)] = inst_29417);

return statearr_29496;
})();
if(inst_29418){
var statearr_29497_29558 = state_29431__$1;
(statearr_29497_29558[(1)] = (42));

} else {
var statearr_29498_29559 = state_29431__$1;
(statearr_29498_29559[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (16))){
var inst_29330 = (state_29431[(7)]);
var inst_29332 = cljs.core.chunked_seq_QMARK_.call(null,inst_29330);
var state_29431__$1 = state_29431;
if(inst_29332){
var statearr_29499_29560 = state_29431__$1;
(statearr_29499_29560[(1)] = (19));

} else {
var statearr_29500_29561 = state_29431__$1;
(statearr_29500_29561[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (38))){
var inst_29410 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
var statearr_29501_29562 = state_29431__$1;
(statearr_29501_29562[(2)] = inst_29410);

(statearr_29501_29562[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (30))){
var state_29431__$1 = state_29431;
var statearr_29502_29563 = state_29431__$1;
(statearr_29502_29563[(2)] = null);

(statearr_29502_29563[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (10))){
var inst_29311 = (state_29431[(13)]);
var inst_29309 = (state_29431[(15)]);
var inst_29319 = cljs.core._nth.call(null,inst_29309,inst_29311);
var inst_29320 = cljs.core.nth.call(null,inst_29319,(0),null);
var inst_29321 = cljs.core.nth.call(null,inst_29319,(1),null);
var state_29431__$1 = (function (){var statearr_29503 = state_29431;
(statearr_29503[(26)] = inst_29320);

return statearr_29503;
})();
if(cljs.core.truth_(inst_29321)){
var statearr_29504_29564 = state_29431__$1;
(statearr_29504_29564[(1)] = (13));

} else {
var statearr_29505_29565 = state_29431__$1;
(statearr_29505_29565[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (18))){
var inst_29356 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
var statearr_29506_29566 = state_29431__$1;
(statearr_29506_29566[(2)] = inst_29356);

(statearr_29506_29566[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (42))){
var state_29431__$1 = state_29431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29431__$1,(45),dchan);
} else {
if((state_val_29432 === (37))){
var inst_29390 = (state_29431[(25)]);
var inst_29399 = (state_29431[(23)]);
var inst_29299 = (state_29431[(12)]);
var inst_29399__$1 = cljs.core.first.call(null,inst_29390);
var inst_29400 = cljs.core.async.put_BANG_.call(null,inst_29399__$1,inst_29299,done);
var state_29431__$1 = (function (){var statearr_29507 = state_29431;
(statearr_29507[(23)] = inst_29399__$1);

return statearr_29507;
})();
if(cljs.core.truth_(inst_29400)){
var statearr_29508_29567 = state_29431__$1;
(statearr_29508_29567[(1)] = (39));

} else {
var statearr_29509_29568 = state_29431__$1;
(statearr_29509_29568[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (8))){
var inst_29311 = (state_29431[(13)]);
var inst_29310 = (state_29431[(16)]);
var inst_29313 = (inst_29311 < inst_29310);
var inst_29314 = inst_29313;
var state_29431__$1 = state_29431;
if(cljs.core.truth_(inst_29314)){
var statearr_29510_29569 = state_29431__$1;
(statearr_29510_29569[(1)] = (10));

} else {
var statearr_29511_29570 = state_29431__$1;
(statearr_29511_29570[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__28598__auto__ = null;
var cljs$core$async$mult_$_state_machine__28598__auto____0 = (function (){
var statearr_29512 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29512[(0)] = cljs$core$async$mult_$_state_machine__28598__auto__);

(statearr_29512[(1)] = (1));

return statearr_29512;
});
var cljs$core$async$mult_$_state_machine__28598__auto____1 = (function (state_29431){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_29431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e29513){if((e29513 instanceof Object)){
var ex__28601__auto__ = e29513;
var statearr_29514_29571 = state_29431;
(statearr_29514_29571[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29572 = state_29431;
state_29431 = G__29572;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28598__auto__ = function(state_29431){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28598__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28598__auto____1.call(this,state_29431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28598__auto____0;
cljs$core$async$mult_$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28598__auto____1;
return cljs$core$async$mult_$_state_machine__28598__auto__;
})()
})();
var state__28696__auto__ = (function (){var statearr_29515 = f__28695__auto__.call(null);
(statearr_29515[(6)] = c__28694__auto___29516);

return statearr_29515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__29574 = arguments.length;
switch (G__29574) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

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

var cljs$core$async$Mix$admix_STAR_$dyn_29576 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m,ch);
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_29576.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_29577 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m,ch);
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_29577.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_29578 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m);
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_29578.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_29579 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m,state_map);
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_29579.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_29580 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m,mode);
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_29580.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___29590 = arguments.length;
var i__4865__auto___29591 = (0);
while(true){
if((i__4865__auto___29591 < len__4864__auto___29590)){
args__4870__auto__.push((arguments[i__4865__auto___29591]));

var G__29592 = (i__4865__auto___29591 + (1));
i__4865__auto___29591 = G__29592;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29585){
var map__29586 = p__29585;
var map__29586__$1 = cljs.core.__destructure_map.call(null,map__29586);
var opts = map__29586__$1;
var statearr_29587_29593 = state;
(statearr_29587_29593[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_29588_29594 = state;
(statearr_29588_29594[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_29589_29595 = state;
(statearr_29589_29595[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29581){
var G__29582 = cljs.core.first.call(null,seq29581);
var seq29581__$1 = cljs.core.next.call(null,seq29581);
var G__29583 = cljs.core.first.call(null,seq29581__$1);
var seq29581__$2 = cljs.core.next.call(null,seq29581__$1);
var G__29584 = cljs.core.first.call(null,seq29581__$2);
var seq29581__$3 = cljs.core.next.call(null,seq29581__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29582,G__29583,G__29584,seq29581__$3);
}));

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
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29596 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29596 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29597){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29597 = meta29597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29598,meta29597__$1){
var self__ = this;
var _29598__$1 = this;
return (new cljs.core.async.t_cljs$core$async29596(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29597__$1));
}));

(cljs.core.async.t_cljs$core$async29596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29598){
var self__ = this;
var _29598__$1 = this;
return self__.meta29597;
}));

(cljs.core.async.t_cljs$core$async29596.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29596.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async29596.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29596.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async29596.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async29596.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async29596.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async29596.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async29596.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29597","meta29597",-1273211023,null)], null);
}));

(cljs.core.async.t_cljs$core$async29596.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29596.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29596");

(cljs.core.async.t_cljs$core$async29596.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async29596");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29596.
 */
cljs.core.async.__GT_t_cljs$core$async29596 = (function cljs$core$async$mix_$___GT_t_cljs$core$async29596(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29597){
return (new cljs.core.async.t_cljs$core$async29596(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29597));
});

}

return (new cljs.core.async.t_cljs$core$async29596(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28694__auto___29710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = (function (state_29666){
var state_val_29667 = (state_29666[(1)]);
if((state_val_29667 === (7))){
var inst_29626 = (state_29666[(2)]);
var state_29666__$1 = state_29666;
if(cljs.core.truth_(inst_29626)){
var statearr_29668_29711 = state_29666__$1;
(statearr_29668_29711[(1)] = (8));

} else {
var statearr_29669_29712 = state_29666__$1;
(statearr_29669_29712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (20))){
var inst_29619 = (state_29666[(7)]);
var state_29666__$1 = state_29666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29666__$1,(23),out,inst_29619);
} else {
if((state_val_29667 === (1))){
var inst_29602 = calc_state.call(null);
var inst_29603 = cljs.core.__destructure_map.call(null,inst_29602);
var inst_29604 = cljs.core.get.call(null,inst_29603,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29605 = cljs.core.get.call(null,inst_29603,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29606 = cljs.core.get.call(null,inst_29603,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29607 = inst_29602;
var state_29666__$1 = (function (){var statearr_29670 = state_29666;
(statearr_29670[(8)] = inst_29605);

(statearr_29670[(9)] = inst_29604);

(statearr_29670[(10)] = inst_29606);

(statearr_29670[(11)] = inst_29607);

return statearr_29670;
})();
var statearr_29671_29713 = state_29666__$1;
(statearr_29671_29713[(2)] = null);

(statearr_29671_29713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (24))){
var inst_29610 = (state_29666[(12)]);
var inst_29607 = inst_29610;
var state_29666__$1 = (function (){var statearr_29672 = state_29666;
(statearr_29672[(11)] = inst_29607);

return statearr_29672;
})();
var statearr_29673_29714 = state_29666__$1;
(statearr_29673_29714[(2)] = null);

(statearr_29673_29714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (4))){
var inst_29619 = (state_29666[(7)]);
var inst_29621 = (state_29666[(13)]);
var inst_29618 = (state_29666[(2)]);
var inst_29619__$1 = cljs.core.nth.call(null,inst_29618,(0),null);
var inst_29620 = cljs.core.nth.call(null,inst_29618,(1),null);
var inst_29621__$1 = (inst_29619__$1 == null);
var state_29666__$1 = (function (){var statearr_29674 = state_29666;
(statearr_29674[(14)] = inst_29620);

(statearr_29674[(7)] = inst_29619__$1);

(statearr_29674[(13)] = inst_29621__$1);

return statearr_29674;
})();
if(cljs.core.truth_(inst_29621__$1)){
var statearr_29675_29715 = state_29666__$1;
(statearr_29675_29715[(1)] = (5));

} else {
var statearr_29676_29716 = state_29666__$1;
(statearr_29676_29716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (15))){
var inst_29611 = (state_29666[(15)]);
var inst_29640 = (state_29666[(16)]);
var inst_29640__$1 = cljs.core.empty_QMARK_.call(null,inst_29611);
var state_29666__$1 = (function (){var statearr_29677 = state_29666;
(statearr_29677[(16)] = inst_29640__$1);

return statearr_29677;
})();
if(inst_29640__$1){
var statearr_29678_29717 = state_29666__$1;
(statearr_29678_29717[(1)] = (17));

} else {
var statearr_29679_29718 = state_29666__$1;
(statearr_29679_29718[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (21))){
var inst_29610 = (state_29666[(12)]);
var inst_29607 = inst_29610;
var state_29666__$1 = (function (){var statearr_29680 = state_29666;
(statearr_29680[(11)] = inst_29607);

return statearr_29680;
})();
var statearr_29681_29719 = state_29666__$1;
(statearr_29681_29719[(2)] = null);

(statearr_29681_29719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (13))){
var inst_29633 = (state_29666[(2)]);
var inst_29634 = calc_state.call(null);
var inst_29607 = inst_29634;
var state_29666__$1 = (function (){var statearr_29682 = state_29666;
(statearr_29682[(17)] = inst_29633);

(statearr_29682[(11)] = inst_29607);

return statearr_29682;
})();
var statearr_29683_29720 = state_29666__$1;
(statearr_29683_29720[(2)] = null);

(statearr_29683_29720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (22))){
var inst_29660 = (state_29666[(2)]);
var state_29666__$1 = state_29666;
var statearr_29684_29721 = state_29666__$1;
(statearr_29684_29721[(2)] = inst_29660);

(statearr_29684_29721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (6))){
var inst_29620 = (state_29666[(14)]);
var inst_29624 = cljs.core._EQ_.call(null,inst_29620,change);
var state_29666__$1 = state_29666;
var statearr_29685_29722 = state_29666__$1;
(statearr_29685_29722[(2)] = inst_29624);

(statearr_29685_29722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (25))){
var state_29666__$1 = state_29666;
var statearr_29686_29723 = state_29666__$1;
(statearr_29686_29723[(2)] = null);

(statearr_29686_29723[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (17))){
var inst_29612 = (state_29666[(18)]);
var inst_29620 = (state_29666[(14)]);
var inst_29642 = inst_29612.call(null,inst_29620);
var inst_29643 = cljs.core.not.call(null,inst_29642);
var state_29666__$1 = state_29666;
var statearr_29687_29724 = state_29666__$1;
(statearr_29687_29724[(2)] = inst_29643);

(statearr_29687_29724[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (3))){
var inst_29664 = (state_29666[(2)]);
var state_29666__$1 = state_29666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29666__$1,inst_29664);
} else {
if((state_val_29667 === (12))){
var state_29666__$1 = state_29666;
var statearr_29688_29725 = state_29666__$1;
(statearr_29688_29725[(2)] = null);

(statearr_29688_29725[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (2))){
var inst_29607 = (state_29666[(11)]);
var inst_29610 = (state_29666[(12)]);
var inst_29610__$1 = cljs.core.__destructure_map.call(null,inst_29607);
var inst_29611 = cljs.core.get.call(null,inst_29610__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29612 = cljs.core.get.call(null,inst_29610__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29613 = cljs.core.get.call(null,inst_29610__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29666__$1 = (function (){var statearr_29689 = state_29666;
(statearr_29689[(18)] = inst_29612);

(statearr_29689[(15)] = inst_29611);

(statearr_29689[(12)] = inst_29610__$1);

return statearr_29689;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29666__$1,(4),inst_29613);
} else {
if((state_val_29667 === (23))){
var inst_29651 = (state_29666[(2)]);
var state_29666__$1 = state_29666;
if(cljs.core.truth_(inst_29651)){
var statearr_29690_29726 = state_29666__$1;
(statearr_29690_29726[(1)] = (24));

} else {
var statearr_29691_29727 = state_29666__$1;
(statearr_29691_29727[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (19))){
var inst_29646 = (state_29666[(2)]);
var state_29666__$1 = state_29666;
var statearr_29692_29728 = state_29666__$1;
(statearr_29692_29728[(2)] = inst_29646);

(statearr_29692_29728[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (11))){
var inst_29620 = (state_29666[(14)]);
var inst_29630 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29620);
var state_29666__$1 = state_29666;
var statearr_29693_29729 = state_29666__$1;
(statearr_29693_29729[(2)] = inst_29630);

(statearr_29693_29729[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (9))){
var inst_29611 = (state_29666[(15)]);
var inst_29637 = (state_29666[(19)]);
var inst_29620 = (state_29666[(14)]);
var inst_29637__$1 = inst_29611.call(null,inst_29620);
var state_29666__$1 = (function (){var statearr_29694 = state_29666;
(statearr_29694[(19)] = inst_29637__$1);

return statearr_29694;
})();
if(cljs.core.truth_(inst_29637__$1)){
var statearr_29695_29730 = state_29666__$1;
(statearr_29695_29730[(1)] = (14));

} else {
var statearr_29696_29731 = state_29666__$1;
(statearr_29696_29731[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (5))){
var inst_29621 = (state_29666[(13)]);
var state_29666__$1 = state_29666;
var statearr_29697_29732 = state_29666__$1;
(statearr_29697_29732[(2)] = inst_29621);

(statearr_29697_29732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (14))){
var inst_29637 = (state_29666[(19)]);
var state_29666__$1 = state_29666;
var statearr_29698_29733 = state_29666__$1;
(statearr_29698_29733[(2)] = inst_29637);

(statearr_29698_29733[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (26))){
var inst_29656 = (state_29666[(2)]);
var state_29666__$1 = state_29666;
var statearr_29699_29734 = state_29666__$1;
(statearr_29699_29734[(2)] = inst_29656);

(statearr_29699_29734[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (16))){
var inst_29648 = (state_29666[(2)]);
var state_29666__$1 = state_29666;
if(cljs.core.truth_(inst_29648)){
var statearr_29700_29735 = state_29666__$1;
(statearr_29700_29735[(1)] = (20));

} else {
var statearr_29701_29736 = state_29666__$1;
(statearr_29701_29736[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (10))){
var inst_29662 = (state_29666[(2)]);
var state_29666__$1 = state_29666;
var statearr_29702_29737 = state_29666__$1;
(statearr_29702_29737[(2)] = inst_29662);

(statearr_29702_29737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (18))){
var inst_29640 = (state_29666[(16)]);
var state_29666__$1 = state_29666;
var statearr_29703_29738 = state_29666__$1;
(statearr_29703_29738[(2)] = inst_29640);

(statearr_29703_29738[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (8))){
var inst_29619 = (state_29666[(7)]);
var inst_29628 = (inst_29619 == null);
var state_29666__$1 = state_29666;
if(cljs.core.truth_(inst_29628)){
var statearr_29704_29739 = state_29666__$1;
(statearr_29704_29739[(1)] = (11));

} else {
var statearr_29705_29740 = state_29666__$1;
(statearr_29705_29740[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__28598__auto__ = null;
var cljs$core$async$mix_$_state_machine__28598__auto____0 = (function (){
var statearr_29706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29706[(0)] = cljs$core$async$mix_$_state_machine__28598__auto__);

(statearr_29706[(1)] = (1));

return statearr_29706;
});
var cljs$core$async$mix_$_state_machine__28598__auto____1 = (function (state_29666){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_29666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e29707){if((e29707 instanceof Object)){
var ex__28601__auto__ = e29707;
var statearr_29708_29741 = state_29666;
(statearr_29708_29741[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29742 = state_29666;
state_29666 = G__29742;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28598__auto__ = function(state_29666){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28598__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28598__auto____1.call(this,state_29666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28598__auto____0;
cljs$core$async$mix_$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28598__auto____1;
return cljs$core$async$mix_$_state_machine__28598__auto__;
})()
})();
var state__28696__auto__ = (function (){var statearr_29709 = f__28695__auto__.call(null);
(statearr_29709[(6)] = c__28694__auto___29710);

return statearr_29709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
}));


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

var cljs$core$async$Pub$sub_STAR_$dyn_29745 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_29745.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_29746 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,p,v,ch);
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_29746.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_29747 = (function() {
var G__29748 = null;
var G__29748__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,p);
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__29748__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,p,v);
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__29748 = function(p,v){
switch(arguments.length){
case 1:
return G__29748__1.call(this,p);
case 2:
return G__29748__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29748.cljs$core$IFn$_invoke$arity$1 = G__29748__1;
G__29748.cljs$core$IFn$_invoke$arity$2 = G__29748__2;
return G__29748;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__29744 = arguments.length;
switch (G__29744) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_29747.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_29747.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__29752 = arguments.length;
switch (G__29752) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__29750_SHARP_){
if(cljs.core.truth_(p1__29750_SHARP_.call(null,topic))){
return p1__29750_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29750_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29753 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29753 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29754){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29754 = meta29754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29755,meta29754__$1){
var self__ = this;
var _29755__$1 = this;
return (new cljs.core.async.t_cljs$core$async29753(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29754__$1));
}));

(cljs.core.async.t_cljs$core$async29753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29755){
var self__ = this;
var _29755__$1 = this;
return self__.meta29754;
}));

(cljs.core.async.t_cljs$core$async29753.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29753.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29753.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29753.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async29753.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async29753.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async29753.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async29753.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29754","meta29754",-997129622,null)], null);
}));

(cljs.core.async.t_cljs$core$async29753.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29753.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29753");

(cljs.core.async.t_cljs$core$async29753.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async29753");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29753.
 */
cljs.core.async.__GT_t_cljs$core$async29753 = (function cljs$core$async$__GT_t_cljs$core$async29753(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29754){
return (new cljs.core.async.t_cljs$core$async29753(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29754));
});

}

return (new cljs.core.async.t_cljs$core$async29753(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28694__auto___29873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = (function (state_29827){
var state_val_29828 = (state_29827[(1)]);
if((state_val_29828 === (7))){
var inst_29823 = (state_29827[(2)]);
var state_29827__$1 = state_29827;
var statearr_29829_29874 = state_29827__$1;
(statearr_29829_29874[(2)] = inst_29823);

(statearr_29829_29874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (20))){
var state_29827__$1 = state_29827;
var statearr_29830_29875 = state_29827__$1;
(statearr_29830_29875[(2)] = null);

(statearr_29830_29875[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (1))){
var state_29827__$1 = state_29827;
var statearr_29831_29876 = state_29827__$1;
(statearr_29831_29876[(2)] = null);

(statearr_29831_29876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (24))){
var inst_29806 = (state_29827[(7)]);
var inst_29815 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29806);
var state_29827__$1 = state_29827;
var statearr_29832_29877 = state_29827__$1;
(statearr_29832_29877[(2)] = inst_29815);

(statearr_29832_29877[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (4))){
var inst_29758 = (state_29827[(8)]);
var inst_29758__$1 = (state_29827[(2)]);
var inst_29759 = (inst_29758__$1 == null);
var state_29827__$1 = (function (){var statearr_29833 = state_29827;
(statearr_29833[(8)] = inst_29758__$1);

return statearr_29833;
})();
if(cljs.core.truth_(inst_29759)){
var statearr_29834_29878 = state_29827__$1;
(statearr_29834_29878[(1)] = (5));

} else {
var statearr_29835_29879 = state_29827__$1;
(statearr_29835_29879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (15))){
var inst_29800 = (state_29827[(2)]);
var state_29827__$1 = state_29827;
var statearr_29836_29880 = state_29827__$1;
(statearr_29836_29880[(2)] = inst_29800);

(statearr_29836_29880[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (21))){
var inst_29820 = (state_29827[(2)]);
var state_29827__$1 = (function (){var statearr_29837 = state_29827;
(statearr_29837[(9)] = inst_29820);

return statearr_29837;
})();
var statearr_29838_29881 = state_29827__$1;
(statearr_29838_29881[(2)] = null);

(statearr_29838_29881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (13))){
var inst_29782 = (state_29827[(10)]);
var inst_29784 = cljs.core.chunked_seq_QMARK_.call(null,inst_29782);
var state_29827__$1 = state_29827;
if(inst_29784){
var statearr_29839_29882 = state_29827__$1;
(statearr_29839_29882[(1)] = (16));

} else {
var statearr_29840_29883 = state_29827__$1;
(statearr_29840_29883[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (22))){
var inst_29812 = (state_29827[(2)]);
var state_29827__$1 = state_29827;
if(cljs.core.truth_(inst_29812)){
var statearr_29841_29884 = state_29827__$1;
(statearr_29841_29884[(1)] = (23));

} else {
var statearr_29842_29885 = state_29827__$1;
(statearr_29842_29885[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (6))){
var inst_29808 = (state_29827[(11)]);
var inst_29806 = (state_29827[(7)]);
var inst_29758 = (state_29827[(8)]);
var inst_29806__$1 = topic_fn.call(null,inst_29758);
var inst_29807 = cljs.core.deref.call(null,mults);
var inst_29808__$1 = cljs.core.get.call(null,inst_29807,inst_29806__$1);
var state_29827__$1 = (function (){var statearr_29843 = state_29827;
(statearr_29843[(11)] = inst_29808__$1);

(statearr_29843[(7)] = inst_29806__$1);

return statearr_29843;
})();
if(cljs.core.truth_(inst_29808__$1)){
var statearr_29844_29886 = state_29827__$1;
(statearr_29844_29886[(1)] = (19));

} else {
var statearr_29845_29887 = state_29827__$1;
(statearr_29845_29887[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (25))){
var inst_29817 = (state_29827[(2)]);
var state_29827__$1 = state_29827;
var statearr_29846_29888 = state_29827__$1;
(statearr_29846_29888[(2)] = inst_29817);

(statearr_29846_29888[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (17))){
var inst_29782 = (state_29827[(10)]);
var inst_29791 = cljs.core.first.call(null,inst_29782);
var inst_29792 = cljs.core.async.muxch_STAR_.call(null,inst_29791);
var inst_29793 = cljs.core.async.close_BANG_.call(null,inst_29792);
var inst_29794 = cljs.core.next.call(null,inst_29782);
var inst_29768 = inst_29794;
var inst_29769 = null;
var inst_29770 = (0);
var inst_29771 = (0);
var state_29827__$1 = (function (){var statearr_29847 = state_29827;
(statearr_29847[(12)] = inst_29771);

(statearr_29847[(13)] = inst_29769);

(statearr_29847[(14)] = inst_29768);

(statearr_29847[(15)] = inst_29770);

(statearr_29847[(16)] = inst_29793);

return statearr_29847;
})();
var statearr_29848_29889 = state_29827__$1;
(statearr_29848_29889[(2)] = null);

(statearr_29848_29889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (3))){
var inst_29825 = (state_29827[(2)]);
var state_29827__$1 = state_29827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29827__$1,inst_29825);
} else {
if((state_val_29828 === (12))){
var inst_29802 = (state_29827[(2)]);
var state_29827__$1 = state_29827;
var statearr_29849_29890 = state_29827__$1;
(statearr_29849_29890[(2)] = inst_29802);

(statearr_29849_29890[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (2))){
var state_29827__$1 = state_29827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29827__$1,(4),ch);
} else {
if((state_val_29828 === (23))){
var state_29827__$1 = state_29827;
var statearr_29850_29891 = state_29827__$1;
(statearr_29850_29891[(2)] = null);

(statearr_29850_29891[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (19))){
var inst_29808 = (state_29827[(11)]);
var inst_29758 = (state_29827[(8)]);
var inst_29810 = cljs.core.async.muxch_STAR_.call(null,inst_29808);
var state_29827__$1 = state_29827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29827__$1,(22),inst_29810,inst_29758);
} else {
if((state_val_29828 === (11))){
var inst_29782 = (state_29827[(10)]);
var inst_29768 = (state_29827[(14)]);
var inst_29782__$1 = cljs.core.seq.call(null,inst_29768);
var state_29827__$1 = (function (){var statearr_29851 = state_29827;
(statearr_29851[(10)] = inst_29782__$1);

return statearr_29851;
})();
if(inst_29782__$1){
var statearr_29852_29892 = state_29827__$1;
(statearr_29852_29892[(1)] = (13));

} else {
var statearr_29853_29893 = state_29827__$1;
(statearr_29853_29893[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (9))){
var inst_29804 = (state_29827[(2)]);
var state_29827__$1 = state_29827;
var statearr_29854_29894 = state_29827__$1;
(statearr_29854_29894[(2)] = inst_29804);

(statearr_29854_29894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (5))){
var inst_29765 = cljs.core.deref.call(null,mults);
var inst_29766 = cljs.core.vals.call(null,inst_29765);
var inst_29767 = cljs.core.seq.call(null,inst_29766);
var inst_29768 = inst_29767;
var inst_29769 = null;
var inst_29770 = (0);
var inst_29771 = (0);
var state_29827__$1 = (function (){var statearr_29855 = state_29827;
(statearr_29855[(12)] = inst_29771);

(statearr_29855[(13)] = inst_29769);

(statearr_29855[(14)] = inst_29768);

(statearr_29855[(15)] = inst_29770);

return statearr_29855;
})();
var statearr_29856_29895 = state_29827__$1;
(statearr_29856_29895[(2)] = null);

(statearr_29856_29895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (14))){
var state_29827__$1 = state_29827;
var statearr_29860_29896 = state_29827__$1;
(statearr_29860_29896[(2)] = null);

(statearr_29860_29896[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (16))){
var inst_29782 = (state_29827[(10)]);
var inst_29786 = cljs.core.chunk_first.call(null,inst_29782);
var inst_29787 = cljs.core.chunk_rest.call(null,inst_29782);
var inst_29788 = cljs.core.count.call(null,inst_29786);
var inst_29768 = inst_29787;
var inst_29769 = inst_29786;
var inst_29770 = inst_29788;
var inst_29771 = (0);
var state_29827__$1 = (function (){var statearr_29861 = state_29827;
(statearr_29861[(12)] = inst_29771);

(statearr_29861[(13)] = inst_29769);

(statearr_29861[(14)] = inst_29768);

(statearr_29861[(15)] = inst_29770);

return statearr_29861;
})();
var statearr_29862_29897 = state_29827__$1;
(statearr_29862_29897[(2)] = null);

(statearr_29862_29897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (10))){
var inst_29771 = (state_29827[(12)]);
var inst_29769 = (state_29827[(13)]);
var inst_29768 = (state_29827[(14)]);
var inst_29770 = (state_29827[(15)]);
var inst_29776 = cljs.core._nth.call(null,inst_29769,inst_29771);
var inst_29777 = cljs.core.async.muxch_STAR_.call(null,inst_29776);
var inst_29778 = cljs.core.async.close_BANG_.call(null,inst_29777);
var inst_29779 = (inst_29771 + (1));
var tmp29857 = inst_29769;
var tmp29858 = inst_29768;
var tmp29859 = inst_29770;
var inst_29768__$1 = tmp29858;
var inst_29769__$1 = tmp29857;
var inst_29770__$1 = tmp29859;
var inst_29771__$1 = inst_29779;
var state_29827__$1 = (function (){var statearr_29863 = state_29827;
(statearr_29863[(12)] = inst_29771__$1);

(statearr_29863[(13)] = inst_29769__$1);

(statearr_29863[(17)] = inst_29778);

(statearr_29863[(14)] = inst_29768__$1);

(statearr_29863[(15)] = inst_29770__$1);

return statearr_29863;
})();
var statearr_29864_29898 = state_29827__$1;
(statearr_29864_29898[(2)] = null);

(statearr_29864_29898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (18))){
var inst_29797 = (state_29827[(2)]);
var state_29827__$1 = state_29827;
var statearr_29865_29899 = state_29827__$1;
(statearr_29865_29899[(2)] = inst_29797);

(statearr_29865_29899[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (8))){
var inst_29771 = (state_29827[(12)]);
var inst_29770 = (state_29827[(15)]);
var inst_29773 = (inst_29771 < inst_29770);
var inst_29774 = inst_29773;
var state_29827__$1 = state_29827;
if(cljs.core.truth_(inst_29774)){
var statearr_29866_29900 = state_29827__$1;
(statearr_29866_29900[(1)] = (10));

} else {
var statearr_29867_29901 = state_29827__$1;
(statearr_29867_29901[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__28598__auto__ = null;
var cljs$core$async$state_machine__28598__auto____0 = (function (){
var statearr_29868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29868[(0)] = cljs$core$async$state_machine__28598__auto__);

(statearr_29868[(1)] = (1));

return statearr_29868;
});
var cljs$core$async$state_machine__28598__auto____1 = (function (state_29827){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_29827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e29869){if((e29869 instanceof Object)){
var ex__28601__auto__ = e29869;
var statearr_29870_29902 = state_29827;
(statearr_29870_29902[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29903 = state_29827;
state_29827 = G__29903;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
cljs$core$async$state_machine__28598__auto__ = function(state_29827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28598__auto____1.call(this,state_29827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28598__auto____0;
cljs$core$async$state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28598__auto____1;
return cljs$core$async$state_machine__28598__auto__;
})()
})();
var state__28696__auto__ = (function (){var statearr_29871 = f__28695__auto__.call(null);
(statearr_29871[(6)] = c__28694__auto___29873);

return statearr_29871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__29905 = arguments.length;
switch (G__29905) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

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
var G__29908 = arguments.length;
switch (G__29908) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__29911 = arguments.length;
switch (G__29911) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__28694__auto___29978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = (function (state_29950){
var state_val_29951 = (state_29950[(1)]);
if((state_val_29951 === (7))){
var state_29950__$1 = state_29950;
var statearr_29952_29979 = state_29950__$1;
(statearr_29952_29979[(2)] = null);

(statearr_29952_29979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29951 === (1))){
var state_29950__$1 = state_29950;
var statearr_29953_29980 = state_29950__$1;
(statearr_29953_29980[(2)] = null);

(statearr_29953_29980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29951 === (4))){
var inst_29914 = (state_29950[(7)]);
var inst_29916 = (inst_29914 < cnt);
var state_29950__$1 = state_29950;
if(cljs.core.truth_(inst_29916)){
var statearr_29954_29981 = state_29950__$1;
(statearr_29954_29981[(1)] = (6));

} else {
var statearr_29955_29982 = state_29950__$1;
(statearr_29955_29982[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29951 === (15))){
var inst_29946 = (state_29950[(2)]);
var state_29950__$1 = state_29950;
var statearr_29956_29983 = state_29950__$1;
(statearr_29956_29983[(2)] = inst_29946);

(statearr_29956_29983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29951 === (13))){
var inst_29939 = cljs.core.async.close_BANG_.call(null,out);
var state_29950__$1 = state_29950;
var statearr_29957_29984 = state_29950__$1;
(statearr_29957_29984[(2)] = inst_29939);

(statearr_29957_29984[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29951 === (6))){
var state_29950__$1 = state_29950;
var statearr_29958_29985 = state_29950__$1;
(statearr_29958_29985[(2)] = null);

(statearr_29958_29985[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29951 === (3))){
var inst_29948 = (state_29950[(2)]);
var state_29950__$1 = state_29950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29950__$1,inst_29948);
} else {
if((state_val_29951 === (12))){
var inst_29936 = (state_29950[(8)]);
var inst_29936__$1 = (state_29950[(2)]);
var inst_29937 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29936__$1);
var state_29950__$1 = (function (){var statearr_29959 = state_29950;
(statearr_29959[(8)] = inst_29936__$1);

return statearr_29959;
})();
if(cljs.core.truth_(inst_29937)){
var statearr_29960_29986 = state_29950__$1;
(statearr_29960_29986[(1)] = (13));

} else {
var statearr_29961_29987 = state_29950__$1;
(statearr_29961_29987[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29951 === (2))){
var inst_29913 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29914 = (0);
var state_29950__$1 = (function (){var statearr_29962 = state_29950;
(statearr_29962[(9)] = inst_29913);

(statearr_29962[(7)] = inst_29914);

return statearr_29962;
})();
var statearr_29963_29988 = state_29950__$1;
(statearr_29963_29988[(2)] = null);

(statearr_29963_29988[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29951 === (11))){
var inst_29914 = (state_29950[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29950,(10),Object,null,(9));
var inst_29923 = chs__$1.call(null,inst_29914);
var inst_29924 = done.call(null,inst_29914);
var inst_29925 = cljs.core.async.take_BANG_.call(null,inst_29923,inst_29924);
var state_29950__$1 = state_29950;
var statearr_29964_29989 = state_29950__$1;
(statearr_29964_29989[(2)] = inst_29925);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29950__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29951 === (9))){
var inst_29914 = (state_29950[(7)]);
var inst_29927 = (state_29950[(2)]);
var inst_29928 = (inst_29914 + (1));
var inst_29914__$1 = inst_29928;
var state_29950__$1 = (function (){var statearr_29965 = state_29950;
(statearr_29965[(10)] = inst_29927);

(statearr_29965[(7)] = inst_29914__$1);

return statearr_29965;
})();
var statearr_29966_29990 = state_29950__$1;
(statearr_29966_29990[(2)] = null);

(statearr_29966_29990[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29951 === (5))){
var inst_29934 = (state_29950[(2)]);
var state_29950__$1 = (function (){var statearr_29967 = state_29950;
(statearr_29967[(11)] = inst_29934);

return statearr_29967;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29950__$1,(12),dchan);
} else {
if((state_val_29951 === (14))){
var inst_29936 = (state_29950[(8)]);
var inst_29941 = cljs.core.apply.call(null,f,inst_29936);
var state_29950__$1 = state_29950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29950__$1,(16),out,inst_29941);
} else {
if((state_val_29951 === (16))){
var inst_29943 = (state_29950[(2)]);
var state_29950__$1 = (function (){var statearr_29968 = state_29950;
(statearr_29968[(12)] = inst_29943);

return statearr_29968;
})();
var statearr_29969_29991 = state_29950__$1;
(statearr_29969_29991[(2)] = null);

(statearr_29969_29991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29951 === (10))){
var inst_29918 = (state_29950[(2)]);
var inst_29919 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29950__$1 = (function (){var statearr_29970 = state_29950;
(statearr_29970[(13)] = inst_29918);

return statearr_29970;
})();
var statearr_29971_29992 = state_29950__$1;
(statearr_29971_29992[(2)] = inst_29919);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29950__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29951 === (8))){
var inst_29932 = (state_29950[(2)]);
var state_29950__$1 = state_29950;
var statearr_29972_29993 = state_29950__$1;
(statearr_29972_29993[(2)] = inst_29932);

(statearr_29972_29993[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__28598__auto__ = null;
var cljs$core$async$state_machine__28598__auto____0 = (function (){
var statearr_29973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29973[(0)] = cljs$core$async$state_machine__28598__auto__);

(statearr_29973[(1)] = (1));

return statearr_29973;
});
var cljs$core$async$state_machine__28598__auto____1 = (function (state_29950){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_29950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e29974){if((e29974 instanceof Object)){
var ex__28601__auto__ = e29974;
var statearr_29975_29994 = state_29950;
(statearr_29975_29994[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29995 = state_29950;
state_29950 = G__29995;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
cljs$core$async$state_machine__28598__auto__ = function(state_29950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28598__auto____1.call(this,state_29950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28598__auto____0;
cljs$core$async$state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28598__auto____1;
return cljs$core$async$state_machine__28598__auto__;
})()
})();
var state__28696__auto__ = (function (){var statearr_29976 = f__28695__auto__.call(null);
(statearr_29976[(6)] = c__28694__auto___29978);

return statearr_29976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__29998 = arguments.length;
switch (G__29998) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28694__auto___30052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = (function (state_30030){
var state_val_30031 = (state_30030[(1)]);
if((state_val_30031 === (7))){
var inst_30010 = (state_30030[(7)]);
var inst_30009 = (state_30030[(8)]);
var inst_30009__$1 = (state_30030[(2)]);
var inst_30010__$1 = cljs.core.nth.call(null,inst_30009__$1,(0),null);
var inst_30011 = cljs.core.nth.call(null,inst_30009__$1,(1),null);
var inst_30012 = (inst_30010__$1 == null);
var state_30030__$1 = (function (){var statearr_30032 = state_30030;
(statearr_30032[(9)] = inst_30011);

(statearr_30032[(7)] = inst_30010__$1);

(statearr_30032[(8)] = inst_30009__$1);

return statearr_30032;
})();
if(cljs.core.truth_(inst_30012)){
var statearr_30033_30053 = state_30030__$1;
(statearr_30033_30053[(1)] = (8));

} else {
var statearr_30034_30054 = state_30030__$1;
(statearr_30034_30054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30031 === (1))){
var inst_29999 = cljs.core.vec.call(null,chs);
var inst_30000 = inst_29999;
var state_30030__$1 = (function (){var statearr_30035 = state_30030;
(statearr_30035[(10)] = inst_30000);

return statearr_30035;
})();
var statearr_30036_30055 = state_30030__$1;
(statearr_30036_30055[(2)] = null);

(statearr_30036_30055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30031 === (4))){
var inst_30000 = (state_30030[(10)]);
var state_30030__$1 = state_30030;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30030__$1,(7),inst_30000);
} else {
if((state_val_30031 === (6))){
var inst_30026 = (state_30030[(2)]);
var state_30030__$1 = state_30030;
var statearr_30037_30056 = state_30030__$1;
(statearr_30037_30056[(2)] = inst_30026);

(statearr_30037_30056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30031 === (3))){
var inst_30028 = (state_30030[(2)]);
var state_30030__$1 = state_30030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30030__$1,inst_30028);
} else {
if((state_val_30031 === (2))){
var inst_30000 = (state_30030[(10)]);
var inst_30002 = cljs.core.count.call(null,inst_30000);
var inst_30003 = (inst_30002 > (0));
var state_30030__$1 = state_30030;
if(cljs.core.truth_(inst_30003)){
var statearr_30039_30057 = state_30030__$1;
(statearr_30039_30057[(1)] = (4));

} else {
var statearr_30040_30058 = state_30030__$1;
(statearr_30040_30058[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30031 === (11))){
var inst_30000 = (state_30030[(10)]);
var inst_30019 = (state_30030[(2)]);
var tmp30038 = inst_30000;
var inst_30000__$1 = tmp30038;
var state_30030__$1 = (function (){var statearr_30041 = state_30030;
(statearr_30041[(10)] = inst_30000__$1);

(statearr_30041[(11)] = inst_30019);

return statearr_30041;
})();
var statearr_30042_30059 = state_30030__$1;
(statearr_30042_30059[(2)] = null);

(statearr_30042_30059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30031 === (9))){
var inst_30010 = (state_30030[(7)]);
var state_30030__$1 = state_30030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30030__$1,(11),out,inst_30010);
} else {
if((state_val_30031 === (5))){
var inst_30024 = cljs.core.async.close_BANG_.call(null,out);
var state_30030__$1 = state_30030;
var statearr_30043_30060 = state_30030__$1;
(statearr_30043_30060[(2)] = inst_30024);

(statearr_30043_30060[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30031 === (10))){
var inst_30022 = (state_30030[(2)]);
var state_30030__$1 = state_30030;
var statearr_30044_30061 = state_30030__$1;
(statearr_30044_30061[(2)] = inst_30022);

(statearr_30044_30061[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30031 === (8))){
var inst_30011 = (state_30030[(9)]);
var inst_30010 = (state_30030[(7)]);
var inst_30009 = (state_30030[(8)]);
var inst_30000 = (state_30030[(10)]);
var inst_30014 = (function (){var cs = inst_30000;
var vec__30005 = inst_30009;
var v = inst_30010;
var c = inst_30011;
return (function (p1__29996_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29996_SHARP_);
});
})();
var inst_30015 = cljs.core.filterv.call(null,inst_30014,inst_30000);
var inst_30000__$1 = inst_30015;
var state_30030__$1 = (function (){var statearr_30045 = state_30030;
(statearr_30045[(10)] = inst_30000__$1);

return statearr_30045;
})();
var statearr_30046_30062 = state_30030__$1;
(statearr_30046_30062[(2)] = null);

(statearr_30046_30062[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28598__auto__ = null;
var cljs$core$async$state_machine__28598__auto____0 = (function (){
var statearr_30047 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30047[(0)] = cljs$core$async$state_machine__28598__auto__);

(statearr_30047[(1)] = (1));

return statearr_30047;
});
var cljs$core$async$state_machine__28598__auto____1 = (function (state_30030){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_30030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e30048){if((e30048 instanceof Object)){
var ex__28601__auto__ = e30048;
var statearr_30049_30063 = state_30030;
(statearr_30049_30063[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30064 = state_30030;
state_30030 = G__30064;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
cljs$core$async$state_machine__28598__auto__ = function(state_30030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28598__auto____1.call(this,state_30030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28598__auto____0;
cljs$core$async$state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28598__auto____1;
return cljs$core$async$state_machine__28598__auto__;
})()
})();
var state__28696__auto__ = (function (){var statearr_30050 = f__28695__auto__.call(null);
(statearr_30050[(6)] = c__28694__auto___30052);

return statearr_30050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

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
var G__30066 = arguments.length;
switch (G__30066) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28694__auto___30111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = (function (state_30090){
var state_val_30091 = (state_30090[(1)]);
if((state_val_30091 === (7))){
var inst_30072 = (state_30090[(7)]);
var inst_30072__$1 = (state_30090[(2)]);
var inst_30073 = (inst_30072__$1 == null);
var inst_30074 = cljs.core.not.call(null,inst_30073);
var state_30090__$1 = (function (){var statearr_30092 = state_30090;
(statearr_30092[(7)] = inst_30072__$1);

return statearr_30092;
})();
if(inst_30074){
var statearr_30093_30112 = state_30090__$1;
(statearr_30093_30112[(1)] = (8));

} else {
var statearr_30094_30113 = state_30090__$1;
(statearr_30094_30113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (1))){
var inst_30067 = (0);
var state_30090__$1 = (function (){var statearr_30095 = state_30090;
(statearr_30095[(8)] = inst_30067);

return statearr_30095;
})();
var statearr_30096_30114 = state_30090__$1;
(statearr_30096_30114[(2)] = null);

(statearr_30096_30114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (4))){
var state_30090__$1 = state_30090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30090__$1,(7),ch);
} else {
if((state_val_30091 === (6))){
var inst_30085 = (state_30090[(2)]);
var state_30090__$1 = state_30090;
var statearr_30097_30115 = state_30090__$1;
(statearr_30097_30115[(2)] = inst_30085);

(statearr_30097_30115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (3))){
var inst_30087 = (state_30090[(2)]);
var inst_30088 = cljs.core.async.close_BANG_.call(null,out);
var state_30090__$1 = (function (){var statearr_30098 = state_30090;
(statearr_30098[(9)] = inst_30087);

return statearr_30098;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30090__$1,inst_30088);
} else {
if((state_val_30091 === (2))){
var inst_30067 = (state_30090[(8)]);
var inst_30069 = (inst_30067 < n);
var state_30090__$1 = state_30090;
if(cljs.core.truth_(inst_30069)){
var statearr_30099_30116 = state_30090__$1;
(statearr_30099_30116[(1)] = (4));

} else {
var statearr_30100_30117 = state_30090__$1;
(statearr_30100_30117[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (11))){
var inst_30067 = (state_30090[(8)]);
var inst_30077 = (state_30090[(2)]);
var inst_30078 = (inst_30067 + (1));
var inst_30067__$1 = inst_30078;
var state_30090__$1 = (function (){var statearr_30101 = state_30090;
(statearr_30101[(8)] = inst_30067__$1);

(statearr_30101[(10)] = inst_30077);

return statearr_30101;
})();
var statearr_30102_30118 = state_30090__$1;
(statearr_30102_30118[(2)] = null);

(statearr_30102_30118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (9))){
var state_30090__$1 = state_30090;
var statearr_30103_30119 = state_30090__$1;
(statearr_30103_30119[(2)] = null);

(statearr_30103_30119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (5))){
var state_30090__$1 = state_30090;
var statearr_30104_30120 = state_30090__$1;
(statearr_30104_30120[(2)] = null);

(statearr_30104_30120[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (10))){
var inst_30082 = (state_30090[(2)]);
var state_30090__$1 = state_30090;
var statearr_30105_30121 = state_30090__$1;
(statearr_30105_30121[(2)] = inst_30082);

(statearr_30105_30121[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (8))){
var inst_30072 = (state_30090[(7)]);
var state_30090__$1 = state_30090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30090__$1,(11),out,inst_30072);
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
});
return (function() {
var cljs$core$async$state_machine__28598__auto__ = null;
var cljs$core$async$state_machine__28598__auto____0 = (function (){
var statearr_30106 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30106[(0)] = cljs$core$async$state_machine__28598__auto__);

(statearr_30106[(1)] = (1));

return statearr_30106;
});
var cljs$core$async$state_machine__28598__auto____1 = (function (state_30090){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_30090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e30107){if((e30107 instanceof Object)){
var ex__28601__auto__ = e30107;
var statearr_30108_30122 = state_30090;
(statearr_30108_30122[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30123 = state_30090;
state_30090 = G__30123;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
cljs$core$async$state_machine__28598__auto__ = function(state_30090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28598__auto____1.call(this,state_30090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28598__auto____0;
cljs$core$async$state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28598__auto____1;
return cljs$core$async$state_machine__28598__auto__;
})()
})();
var state__28696__auto__ = (function (){var statearr_30109 = f__28695__auto__.call(null);
(statearr_30109[(6)] = c__28694__auto___30111);

return statearr_30109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30125 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30125 = (function (f,ch,meta30126){
this.f = f;
this.ch = ch;
this.meta30126 = meta30126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30127,meta30126__$1){
var self__ = this;
var _30127__$1 = this;
return (new cljs.core.async.t_cljs$core$async30125(self__.f,self__.ch,meta30126__$1));
}));

(cljs.core.async.t_cljs$core$async30125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30127){
var self__ = this;
var _30127__$1 = this;
return self__.meta30126;
}));

(cljs.core.async.t_cljs$core$async30125.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30125.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async30125.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async30125.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30125.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30128 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30128 = (function (f,ch,meta30126,_,fn1,meta30129){
this.f = f;
this.ch = ch;
this.meta30126 = meta30126;
this._ = _;
this.fn1 = fn1;
this.meta30129 = meta30129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30130,meta30129__$1){
var self__ = this;
var _30130__$1 = this;
return (new cljs.core.async.t_cljs$core$async30128(self__.f,self__.ch,self__.meta30126,self__._,self__.fn1,meta30129__$1));
}));

(cljs.core.async.t_cljs$core$async30128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30130){
var self__ = this;
var _30130__$1 = this;
return self__.meta30129;
}));

(cljs.core.async.t_cljs$core$async30128.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30128.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async30128.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30128.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__30124_SHARP_){
return f1.call(null,(((p1__30124_SHARP_ == null))?null:self__.f.call(null,p1__30124_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async30128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30126","meta30126",1176219529,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30125","cljs.core.async/t_cljs$core$async30125",-1291384902,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30129","meta30129",2087680096,null)], null);
}));

(cljs.core.async.t_cljs$core$async30128.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30128");

(cljs.core.async.t_cljs$core$async30128.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async30128");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30128.
 */
cljs.core.async.__GT_t_cljs$core$async30128 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30128(f__$1,ch__$1,meta30126__$1,___$2,fn1__$1,meta30129){
return (new cljs.core.async.t_cljs$core$async30128(f__$1,ch__$1,meta30126__$1,___$2,fn1__$1,meta30129));
});

}

return (new cljs.core.async.t_cljs$core$async30128(self__.f,self__.ch,self__.meta30126,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async30125.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30125.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async30125.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30126","meta30126",1176219529,null)], null);
}));

(cljs.core.async.t_cljs$core$async30125.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30125.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30125");

(cljs.core.async.t_cljs$core$async30125.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async30125");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30125.
 */
cljs.core.async.__GT_t_cljs$core$async30125 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30125(f__$1,ch__$1,meta30126){
return (new cljs.core.async.t_cljs$core$async30125(f__$1,ch__$1,meta30126));
});

}

return (new cljs.core.async.t_cljs$core$async30125(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30131 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30131 = (function (f,ch,meta30132){
this.f = f;
this.ch = ch;
this.meta30132 = meta30132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30133,meta30132__$1){
var self__ = this;
var _30133__$1 = this;
return (new cljs.core.async.t_cljs$core$async30131(self__.f,self__.ch,meta30132__$1));
}));

(cljs.core.async.t_cljs$core$async30131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30133){
var self__ = this;
var _30133__$1 = this;
return self__.meta30132;
}));

(cljs.core.async.t_cljs$core$async30131.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30131.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async30131.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30131.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30131.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30131.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async30131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30132","meta30132",787898465,null)], null);
}));

(cljs.core.async.t_cljs$core$async30131.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30131");

(cljs.core.async.t_cljs$core$async30131.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async30131");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30131.
 */
cljs.core.async.__GT_t_cljs$core$async30131 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30131(f__$1,ch__$1,meta30132){
return (new cljs.core.async.t_cljs$core$async30131(f__$1,ch__$1,meta30132));
});

}

return (new cljs.core.async.t_cljs$core$async30131(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30134 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30134 = (function (p,ch,meta30135){
this.p = p;
this.ch = ch;
this.meta30135 = meta30135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30136,meta30135__$1){
var self__ = this;
var _30136__$1 = this;
return (new cljs.core.async.t_cljs$core$async30134(self__.p,self__.ch,meta30135__$1));
}));

(cljs.core.async.t_cljs$core$async30134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30136){
var self__ = this;
var _30136__$1 = this;
return self__.meta30135;
}));

(cljs.core.async.t_cljs$core$async30134.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30134.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async30134.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async30134.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30134.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30134.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30134.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async30134.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30135","meta30135",-108898427,null)], null);
}));

(cljs.core.async.t_cljs$core$async30134.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30134.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30134");

(cljs.core.async.t_cljs$core$async30134.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async30134");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30134.
 */
cljs.core.async.__GT_t_cljs$core$async30134 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30134(p__$1,ch__$1,meta30135){
return (new cljs.core.async.t_cljs$core$async30134(p__$1,ch__$1,meta30135));
});

}

return (new cljs.core.async.t_cljs$core$async30134(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30138 = arguments.length;
switch (G__30138) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28694__auto___30178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = (function (state_30159){
var state_val_30160 = (state_30159[(1)]);
if((state_val_30160 === (7))){
var inst_30155 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
var statearr_30161_30179 = state_30159__$1;
(statearr_30161_30179[(2)] = inst_30155);

(statearr_30161_30179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (1))){
var state_30159__$1 = state_30159;
var statearr_30162_30180 = state_30159__$1;
(statearr_30162_30180[(2)] = null);

(statearr_30162_30180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (4))){
var inst_30141 = (state_30159[(7)]);
var inst_30141__$1 = (state_30159[(2)]);
var inst_30142 = (inst_30141__$1 == null);
var state_30159__$1 = (function (){var statearr_30163 = state_30159;
(statearr_30163[(7)] = inst_30141__$1);

return statearr_30163;
})();
if(cljs.core.truth_(inst_30142)){
var statearr_30164_30181 = state_30159__$1;
(statearr_30164_30181[(1)] = (5));

} else {
var statearr_30165_30182 = state_30159__$1;
(statearr_30165_30182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (6))){
var inst_30141 = (state_30159[(7)]);
var inst_30146 = p.call(null,inst_30141);
var state_30159__$1 = state_30159;
if(cljs.core.truth_(inst_30146)){
var statearr_30166_30183 = state_30159__$1;
(statearr_30166_30183[(1)] = (8));

} else {
var statearr_30167_30184 = state_30159__$1;
(statearr_30167_30184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (3))){
var inst_30157 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30159__$1,inst_30157);
} else {
if((state_val_30160 === (2))){
var state_30159__$1 = state_30159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30159__$1,(4),ch);
} else {
if((state_val_30160 === (11))){
var inst_30149 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
var statearr_30168_30185 = state_30159__$1;
(statearr_30168_30185[(2)] = inst_30149);

(statearr_30168_30185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (9))){
var state_30159__$1 = state_30159;
var statearr_30169_30186 = state_30159__$1;
(statearr_30169_30186[(2)] = null);

(statearr_30169_30186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (5))){
var inst_30144 = cljs.core.async.close_BANG_.call(null,out);
var state_30159__$1 = state_30159;
var statearr_30170_30187 = state_30159__$1;
(statearr_30170_30187[(2)] = inst_30144);

(statearr_30170_30187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (10))){
var inst_30152 = (state_30159[(2)]);
var state_30159__$1 = (function (){var statearr_30171 = state_30159;
(statearr_30171[(8)] = inst_30152);

return statearr_30171;
})();
var statearr_30172_30188 = state_30159__$1;
(statearr_30172_30188[(2)] = null);

(statearr_30172_30188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (8))){
var inst_30141 = (state_30159[(7)]);
var state_30159__$1 = state_30159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30159__$1,(11),out,inst_30141);
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
});
return (function() {
var cljs$core$async$state_machine__28598__auto__ = null;
var cljs$core$async$state_machine__28598__auto____0 = (function (){
var statearr_30173 = [null,null,null,null,null,null,null,null,null];
(statearr_30173[(0)] = cljs$core$async$state_machine__28598__auto__);

(statearr_30173[(1)] = (1));

return statearr_30173;
});
var cljs$core$async$state_machine__28598__auto____1 = (function (state_30159){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_30159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e30174){if((e30174 instanceof Object)){
var ex__28601__auto__ = e30174;
var statearr_30175_30189 = state_30159;
(statearr_30175_30189[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30190 = state_30159;
state_30159 = G__30190;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
cljs$core$async$state_machine__28598__auto__ = function(state_30159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28598__auto____1.call(this,state_30159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28598__auto____0;
cljs$core$async$state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28598__auto____1;
return cljs$core$async$state_machine__28598__auto__;
})()
})();
var state__28696__auto__ = (function (){var statearr_30176 = f__28695__auto__.call(null);
(statearr_30176[(6)] = c__28694__auto___30178);

return statearr_30176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__30192 = arguments.length;
switch (G__30192) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = (function (state_30255){
var state_val_30256 = (state_30255[(1)]);
if((state_val_30256 === (7))){
var inst_30251 = (state_30255[(2)]);
var state_30255__$1 = state_30255;
var statearr_30257_30295 = state_30255__$1;
(statearr_30257_30295[(2)] = inst_30251);

(statearr_30257_30295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (20))){
var inst_30221 = (state_30255[(7)]);
var inst_30232 = (state_30255[(2)]);
var inst_30233 = cljs.core.next.call(null,inst_30221);
var inst_30207 = inst_30233;
var inst_30208 = null;
var inst_30209 = (0);
var inst_30210 = (0);
var state_30255__$1 = (function (){var statearr_30258 = state_30255;
(statearr_30258[(8)] = inst_30209);

(statearr_30258[(9)] = inst_30208);

(statearr_30258[(10)] = inst_30232);

(statearr_30258[(11)] = inst_30210);

(statearr_30258[(12)] = inst_30207);

return statearr_30258;
})();
var statearr_30259_30296 = state_30255__$1;
(statearr_30259_30296[(2)] = null);

(statearr_30259_30296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (1))){
var state_30255__$1 = state_30255;
var statearr_30260_30297 = state_30255__$1;
(statearr_30260_30297[(2)] = null);

(statearr_30260_30297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (4))){
var inst_30196 = (state_30255[(13)]);
var inst_30196__$1 = (state_30255[(2)]);
var inst_30197 = (inst_30196__$1 == null);
var state_30255__$1 = (function (){var statearr_30261 = state_30255;
(statearr_30261[(13)] = inst_30196__$1);

return statearr_30261;
})();
if(cljs.core.truth_(inst_30197)){
var statearr_30262_30298 = state_30255__$1;
(statearr_30262_30298[(1)] = (5));

} else {
var statearr_30263_30299 = state_30255__$1;
(statearr_30263_30299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (15))){
var state_30255__$1 = state_30255;
var statearr_30267_30300 = state_30255__$1;
(statearr_30267_30300[(2)] = null);

(statearr_30267_30300[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (21))){
var state_30255__$1 = state_30255;
var statearr_30268_30301 = state_30255__$1;
(statearr_30268_30301[(2)] = null);

(statearr_30268_30301[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (13))){
var inst_30209 = (state_30255[(8)]);
var inst_30208 = (state_30255[(9)]);
var inst_30210 = (state_30255[(11)]);
var inst_30207 = (state_30255[(12)]);
var inst_30217 = (state_30255[(2)]);
var inst_30218 = (inst_30210 + (1));
var tmp30264 = inst_30209;
var tmp30265 = inst_30208;
var tmp30266 = inst_30207;
var inst_30207__$1 = tmp30266;
var inst_30208__$1 = tmp30265;
var inst_30209__$1 = tmp30264;
var inst_30210__$1 = inst_30218;
var state_30255__$1 = (function (){var statearr_30269 = state_30255;
(statearr_30269[(8)] = inst_30209__$1);

(statearr_30269[(9)] = inst_30208__$1);

(statearr_30269[(14)] = inst_30217);

(statearr_30269[(11)] = inst_30210__$1);

(statearr_30269[(12)] = inst_30207__$1);

return statearr_30269;
})();
var statearr_30270_30302 = state_30255__$1;
(statearr_30270_30302[(2)] = null);

(statearr_30270_30302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (22))){
var state_30255__$1 = state_30255;
var statearr_30271_30303 = state_30255__$1;
(statearr_30271_30303[(2)] = null);

(statearr_30271_30303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (6))){
var inst_30196 = (state_30255[(13)]);
var inst_30205 = f.call(null,inst_30196);
var inst_30206 = cljs.core.seq.call(null,inst_30205);
var inst_30207 = inst_30206;
var inst_30208 = null;
var inst_30209 = (0);
var inst_30210 = (0);
var state_30255__$1 = (function (){var statearr_30272 = state_30255;
(statearr_30272[(8)] = inst_30209);

(statearr_30272[(9)] = inst_30208);

(statearr_30272[(11)] = inst_30210);

(statearr_30272[(12)] = inst_30207);

return statearr_30272;
})();
var statearr_30273_30304 = state_30255__$1;
(statearr_30273_30304[(2)] = null);

(statearr_30273_30304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (17))){
var inst_30221 = (state_30255[(7)]);
var inst_30225 = cljs.core.chunk_first.call(null,inst_30221);
var inst_30226 = cljs.core.chunk_rest.call(null,inst_30221);
var inst_30227 = cljs.core.count.call(null,inst_30225);
var inst_30207 = inst_30226;
var inst_30208 = inst_30225;
var inst_30209 = inst_30227;
var inst_30210 = (0);
var state_30255__$1 = (function (){var statearr_30274 = state_30255;
(statearr_30274[(8)] = inst_30209);

(statearr_30274[(9)] = inst_30208);

(statearr_30274[(11)] = inst_30210);

(statearr_30274[(12)] = inst_30207);

return statearr_30274;
})();
var statearr_30275_30305 = state_30255__$1;
(statearr_30275_30305[(2)] = null);

(statearr_30275_30305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (3))){
var inst_30253 = (state_30255[(2)]);
var state_30255__$1 = state_30255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30255__$1,inst_30253);
} else {
if((state_val_30256 === (12))){
var inst_30241 = (state_30255[(2)]);
var state_30255__$1 = state_30255;
var statearr_30276_30306 = state_30255__$1;
(statearr_30276_30306[(2)] = inst_30241);

(statearr_30276_30306[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (2))){
var state_30255__$1 = state_30255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30255__$1,(4),in$);
} else {
if((state_val_30256 === (23))){
var inst_30249 = (state_30255[(2)]);
var state_30255__$1 = state_30255;
var statearr_30277_30307 = state_30255__$1;
(statearr_30277_30307[(2)] = inst_30249);

(statearr_30277_30307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (19))){
var inst_30236 = (state_30255[(2)]);
var state_30255__$1 = state_30255;
var statearr_30278_30308 = state_30255__$1;
(statearr_30278_30308[(2)] = inst_30236);

(statearr_30278_30308[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (11))){
var inst_30221 = (state_30255[(7)]);
var inst_30207 = (state_30255[(12)]);
var inst_30221__$1 = cljs.core.seq.call(null,inst_30207);
var state_30255__$1 = (function (){var statearr_30279 = state_30255;
(statearr_30279[(7)] = inst_30221__$1);

return statearr_30279;
})();
if(inst_30221__$1){
var statearr_30280_30309 = state_30255__$1;
(statearr_30280_30309[(1)] = (14));

} else {
var statearr_30281_30310 = state_30255__$1;
(statearr_30281_30310[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (9))){
var inst_30243 = (state_30255[(2)]);
var inst_30244 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30255__$1 = (function (){var statearr_30282 = state_30255;
(statearr_30282[(15)] = inst_30243);

return statearr_30282;
})();
if(cljs.core.truth_(inst_30244)){
var statearr_30283_30311 = state_30255__$1;
(statearr_30283_30311[(1)] = (21));

} else {
var statearr_30284_30312 = state_30255__$1;
(statearr_30284_30312[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (5))){
var inst_30199 = cljs.core.async.close_BANG_.call(null,out);
var state_30255__$1 = state_30255;
var statearr_30285_30313 = state_30255__$1;
(statearr_30285_30313[(2)] = inst_30199);

(statearr_30285_30313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (14))){
var inst_30221 = (state_30255[(7)]);
var inst_30223 = cljs.core.chunked_seq_QMARK_.call(null,inst_30221);
var state_30255__$1 = state_30255;
if(inst_30223){
var statearr_30286_30314 = state_30255__$1;
(statearr_30286_30314[(1)] = (17));

} else {
var statearr_30287_30315 = state_30255__$1;
(statearr_30287_30315[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (16))){
var inst_30239 = (state_30255[(2)]);
var state_30255__$1 = state_30255;
var statearr_30288_30316 = state_30255__$1;
(statearr_30288_30316[(2)] = inst_30239);

(statearr_30288_30316[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (10))){
var inst_30208 = (state_30255[(9)]);
var inst_30210 = (state_30255[(11)]);
var inst_30215 = cljs.core._nth.call(null,inst_30208,inst_30210);
var state_30255__$1 = state_30255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30255__$1,(13),out,inst_30215);
} else {
if((state_val_30256 === (18))){
var inst_30221 = (state_30255[(7)]);
var inst_30230 = cljs.core.first.call(null,inst_30221);
var state_30255__$1 = state_30255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30255__$1,(20),out,inst_30230);
} else {
if((state_val_30256 === (8))){
var inst_30209 = (state_30255[(8)]);
var inst_30210 = (state_30255[(11)]);
var inst_30212 = (inst_30210 < inst_30209);
var inst_30213 = inst_30212;
var state_30255__$1 = state_30255;
if(cljs.core.truth_(inst_30213)){
var statearr_30289_30317 = state_30255__$1;
(statearr_30289_30317[(1)] = (10));

} else {
var statearr_30290_30318 = state_30255__$1;
(statearr_30290_30318[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28598__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28598__auto____0 = (function (){
var statearr_30291 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30291[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28598__auto__);

(statearr_30291[(1)] = (1));

return statearr_30291;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28598__auto____1 = (function (state_30255){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_30255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e30292){if((e30292 instanceof Object)){
var ex__28601__auto__ = e30292;
var statearr_30293_30319 = state_30255;
(statearr_30293_30319[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30320 = state_30255;
state_30255 = G__30320;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28598__auto__ = function(state_30255){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28598__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28598__auto____1.call(this,state_30255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28598__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28598__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28598__auto__;
})()
})();
var state__28696__auto__ = (function (){var statearr_30294 = f__28695__auto__.call(null);
(statearr_30294[(6)] = c__28694__auto__);

return statearr_30294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
}));

return c__28694__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__30322 = arguments.length;
switch (G__30322) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__30325 = arguments.length;
switch (G__30325) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__30328 = arguments.length;
switch (G__30328) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28694__auto___30375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = (function (state_30352){
var state_val_30353 = (state_30352[(1)]);
if((state_val_30353 === (7))){
var inst_30347 = (state_30352[(2)]);
var state_30352__$1 = state_30352;
var statearr_30354_30376 = state_30352__$1;
(statearr_30354_30376[(2)] = inst_30347);

(statearr_30354_30376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (1))){
var inst_30329 = null;
var state_30352__$1 = (function (){var statearr_30355 = state_30352;
(statearr_30355[(7)] = inst_30329);

return statearr_30355;
})();
var statearr_30356_30377 = state_30352__$1;
(statearr_30356_30377[(2)] = null);

(statearr_30356_30377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (4))){
var inst_30332 = (state_30352[(8)]);
var inst_30332__$1 = (state_30352[(2)]);
var inst_30333 = (inst_30332__$1 == null);
var inst_30334 = cljs.core.not.call(null,inst_30333);
var state_30352__$1 = (function (){var statearr_30357 = state_30352;
(statearr_30357[(8)] = inst_30332__$1);

return statearr_30357;
})();
if(inst_30334){
var statearr_30358_30378 = state_30352__$1;
(statearr_30358_30378[(1)] = (5));

} else {
var statearr_30359_30379 = state_30352__$1;
(statearr_30359_30379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (6))){
var state_30352__$1 = state_30352;
var statearr_30360_30380 = state_30352__$1;
(statearr_30360_30380[(2)] = null);

(statearr_30360_30380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (3))){
var inst_30349 = (state_30352[(2)]);
var inst_30350 = cljs.core.async.close_BANG_.call(null,out);
var state_30352__$1 = (function (){var statearr_30361 = state_30352;
(statearr_30361[(9)] = inst_30349);

return statearr_30361;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30352__$1,inst_30350);
} else {
if((state_val_30353 === (2))){
var state_30352__$1 = state_30352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30352__$1,(4),ch);
} else {
if((state_val_30353 === (11))){
var inst_30332 = (state_30352[(8)]);
var inst_30341 = (state_30352[(2)]);
var inst_30329 = inst_30332;
var state_30352__$1 = (function (){var statearr_30362 = state_30352;
(statearr_30362[(10)] = inst_30341);

(statearr_30362[(7)] = inst_30329);

return statearr_30362;
})();
var statearr_30363_30381 = state_30352__$1;
(statearr_30363_30381[(2)] = null);

(statearr_30363_30381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (9))){
var inst_30332 = (state_30352[(8)]);
var state_30352__$1 = state_30352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30352__$1,(11),out,inst_30332);
} else {
if((state_val_30353 === (5))){
var inst_30329 = (state_30352[(7)]);
var inst_30332 = (state_30352[(8)]);
var inst_30336 = cljs.core._EQ_.call(null,inst_30332,inst_30329);
var state_30352__$1 = state_30352;
if(inst_30336){
var statearr_30365_30382 = state_30352__$1;
(statearr_30365_30382[(1)] = (8));

} else {
var statearr_30366_30383 = state_30352__$1;
(statearr_30366_30383[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (10))){
var inst_30344 = (state_30352[(2)]);
var state_30352__$1 = state_30352;
var statearr_30367_30384 = state_30352__$1;
(statearr_30367_30384[(2)] = inst_30344);

(statearr_30367_30384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (8))){
var inst_30329 = (state_30352[(7)]);
var tmp30364 = inst_30329;
var inst_30329__$1 = tmp30364;
var state_30352__$1 = (function (){var statearr_30368 = state_30352;
(statearr_30368[(7)] = inst_30329__$1);

return statearr_30368;
})();
var statearr_30369_30385 = state_30352__$1;
(statearr_30369_30385[(2)] = null);

(statearr_30369_30385[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28598__auto__ = null;
var cljs$core$async$state_machine__28598__auto____0 = (function (){
var statearr_30370 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30370[(0)] = cljs$core$async$state_machine__28598__auto__);

(statearr_30370[(1)] = (1));

return statearr_30370;
});
var cljs$core$async$state_machine__28598__auto____1 = (function (state_30352){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_30352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e30371){if((e30371 instanceof Object)){
var ex__28601__auto__ = e30371;
var statearr_30372_30386 = state_30352;
(statearr_30372_30386[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30387 = state_30352;
state_30352 = G__30387;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
cljs$core$async$state_machine__28598__auto__ = function(state_30352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28598__auto____1.call(this,state_30352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28598__auto____0;
cljs$core$async$state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28598__auto____1;
return cljs$core$async$state_machine__28598__auto__;
})()
})();
var state__28696__auto__ = (function (){var statearr_30373 = f__28695__auto__.call(null);
(statearr_30373[(6)] = c__28694__auto___30375);

return statearr_30373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__30389 = arguments.length;
switch (G__30389) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28694__auto___30455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = (function (state_30427){
var state_val_30428 = (state_30427[(1)]);
if((state_val_30428 === (7))){
var inst_30423 = (state_30427[(2)]);
var state_30427__$1 = state_30427;
var statearr_30429_30456 = state_30427__$1;
(statearr_30429_30456[(2)] = inst_30423);

(statearr_30429_30456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (1))){
var inst_30390 = (new Array(n));
var inst_30391 = inst_30390;
var inst_30392 = (0);
var state_30427__$1 = (function (){var statearr_30430 = state_30427;
(statearr_30430[(7)] = inst_30392);

(statearr_30430[(8)] = inst_30391);

return statearr_30430;
})();
var statearr_30431_30457 = state_30427__$1;
(statearr_30431_30457[(2)] = null);

(statearr_30431_30457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (4))){
var inst_30395 = (state_30427[(9)]);
var inst_30395__$1 = (state_30427[(2)]);
var inst_30396 = (inst_30395__$1 == null);
var inst_30397 = cljs.core.not.call(null,inst_30396);
var state_30427__$1 = (function (){var statearr_30432 = state_30427;
(statearr_30432[(9)] = inst_30395__$1);

return statearr_30432;
})();
if(inst_30397){
var statearr_30433_30458 = state_30427__$1;
(statearr_30433_30458[(1)] = (5));

} else {
var statearr_30434_30459 = state_30427__$1;
(statearr_30434_30459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (15))){
var inst_30417 = (state_30427[(2)]);
var state_30427__$1 = state_30427;
var statearr_30435_30460 = state_30427__$1;
(statearr_30435_30460[(2)] = inst_30417);

(statearr_30435_30460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (13))){
var state_30427__$1 = state_30427;
var statearr_30436_30461 = state_30427__$1;
(statearr_30436_30461[(2)] = null);

(statearr_30436_30461[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (6))){
var inst_30392 = (state_30427[(7)]);
var inst_30413 = (inst_30392 > (0));
var state_30427__$1 = state_30427;
if(cljs.core.truth_(inst_30413)){
var statearr_30437_30462 = state_30427__$1;
(statearr_30437_30462[(1)] = (12));

} else {
var statearr_30438_30463 = state_30427__$1;
(statearr_30438_30463[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (3))){
var inst_30425 = (state_30427[(2)]);
var state_30427__$1 = state_30427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30427__$1,inst_30425);
} else {
if((state_val_30428 === (12))){
var inst_30391 = (state_30427[(8)]);
var inst_30415 = cljs.core.vec.call(null,inst_30391);
var state_30427__$1 = state_30427;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30427__$1,(15),out,inst_30415);
} else {
if((state_val_30428 === (2))){
var state_30427__$1 = state_30427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30427__$1,(4),ch);
} else {
if((state_val_30428 === (11))){
var inst_30407 = (state_30427[(2)]);
var inst_30408 = (new Array(n));
var inst_30391 = inst_30408;
var inst_30392 = (0);
var state_30427__$1 = (function (){var statearr_30439 = state_30427;
(statearr_30439[(7)] = inst_30392);

(statearr_30439[(10)] = inst_30407);

(statearr_30439[(8)] = inst_30391);

return statearr_30439;
})();
var statearr_30440_30464 = state_30427__$1;
(statearr_30440_30464[(2)] = null);

(statearr_30440_30464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (9))){
var inst_30391 = (state_30427[(8)]);
var inst_30405 = cljs.core.vec.call(null,inst_30391);
var state_30427__$1 = state_30427;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30427__$1,(11),out,inst_30405);
} else {
if((state_val_30428 === (5))){
var inst_30392 = (state_30427[(7)]);
var inst_30400 = (state_30427[(11)]);
var inst_30391 = (state_30427[(8)]);
var inst_30395 = (state_30427[(9)]);
var inst_30399 = (inst_30391[inst_30392] = inst_30395);
var inst_30400__$1 = (inst_30392 + (1));
var inst_30401 = (inst_30400__$1 < n);
var state_30427__$1 = (function (){var statearr_30441 = state_30427;
(statearr_30441[(12)] = inst_30399);

(statearr_30441[(11)] = inst_30400__$1);

return statearr_30441;
})();
if(cljs.core.truth_(inst_30401)){
var statearr_30442_30465 = state_30427__$1;
(statearr_30442_30465[(1)] = (8));

} else {
var statearr_30443_30466 = state_30427__$1;
(statearr_30443_30466[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (14))){
var inst_30420 = (state_30427[(2)]);
var inst_30421 = cljs.core.async.close_BANG_.call(null,out);
var state_30427__$1 = (function (){var statearr_30445 = state_30427;
(statearr_30445[(13)] = inst_30420);

return statearr_30445;
})();
var statearr_30446_30467 = state_30427__$1;
(statearr_30446_30467[(2)] = inst_30421);

(statearr_30446_30467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (10))){
var inst_30411 = (state_30427[(2)]);
var state_30427__$1 = state_30427;
var statearr_30447_30468 = state_30427__$1;
(statearr_30447_30468[(2)] = inst_30411);

(statearr_30447_30468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (8))){
var inst_30400 = (state_30427[(11)]);
var inst_30391 = (state_30427[(8)]);
var tmp30444 = inst_30391;
var inst_30391__$1 = tmp30444;
var inst_30392 = inst_30400;
var state_30427__$1 = (function (){var statearr_30448 = state_30427;
(statearr_30448[(7)] = inst_30392);

(statearr_30448[(8)] = inst_30391__$1);

return statearr_30448;
})();
var statearr_30449_30469 = state_30427__$1;
(statearr_30449_30469[(2)] = null);

(statearr_30449_30469[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28598__auto__ = null;
var cljs$core$async$state_machine__28598__auto____0 = (function (){
var statearr_30450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30450[(0)] = cljs$core$async$state_machine__28598__auto__);

(statearr_30450[(1)] = (1));

return statearr_30450;
});
var cljs$core$async$state_machine__28598__auto____1 = (function (state_30427){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_30427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e30451){if((e30451 instanceof Object)){
var ex__28601__auto__ = e30451;
var statearr_30452_30470 = state_30427;
(statearr_30452_30470[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30471 = state_30427;
state_30427 = G__30471;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
cljs$core$async$state_machine__28598__auto__ = function(state_30427){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28598__auto____1.call(this,state_30427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28598__auto____0;
cljs$core$async$state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28598__auto____1;
return cljs$core$async$state_machine__28598__auto__;
})()
})();
var state__28696__auto__ = (function (){var statearr_30453 = f__28695__auto__.call(null);
(statearr_30453[(6)] = c__28694__auto___30455);

return statearr_30453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__30473 = arguments.length;
switch (G__30473) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28694__auto___30550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = (function (state_30518){
var state_val_30519 = (state_30518[(1)]);
if((state_val_30519 === (7))){
var inst_30514 = (state_30518[(2)]);
var state_30518__$1 = state_30518;
var statearr_30520_30551 = state_30518__$1;
(statearr_30520_30551[(2)] = inst_30514);

(statearr_30520_30551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30519 === (1))){
var inst_30474 = [];
var inst_30475 = inst_30474;
var inst_30476 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30518__$1 = (function (){var statearr_30521 = state_30518;
(statearr_30521[(7)] = inst_30476);

(statearr_30521[(8)] = inst_30475);

return statearr_30521;
})();
var statearr_30522_30552 = state_30518__$1;
(statearr_30522_30552[(2)] = null);

(statearr_30522_30552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30519 === (4))){
var inst_30479 = (state_30518[(9)]);
var inst_30479__$1 = (state_30518[(2)]);
var inst_30480 = (inst_30479__$1 == null);
var inst_30481 = cljs.core.not.call(null,inst_30480);
var state_30518__$1 = (function (){var statearr_30523 = state_30518;
(statearr_30523[(9)] = inst_30479__$1);

return statearr_30523;
})();
if(inst_30481){
var statearr_30524_30553 = state_30518__$1;
(statearr_30524_30553[(1)] = (5));

} else {
var statearr_30525_30554 = state_30518__$1;
(statearr_30525_30554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30519 === (15))){
var inst_30475 = (state_30518[(8)]);
var inst_30506 = cljs.core.vec.call(null,inst_30475);
var state_30518__$1 = state_30518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30518__$1,(18),out,inst_30506);
} else {
if((state_val_30519 === (13))){
var inst_30501 = (state_30518[(2)]);
var state_30518__$1 = state_30518;
var statearr_30526_30555 = state_30518__$1;
(statearr_30526_30555[(2)] = inst_30501);

(statearr_30526_30555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30519 === (6))){
var inst_30475 = (state_30518[(8)]);
var inst_30503 = inst_30475.length;
var inst_30504 = (inst_30503 > (0));
var state_30518__$1 = state_30518;
if(cljs.core.truth_(inst_30504)){
var statearr_30527_30556 = state_30518__$1;
(statearr_30527_30556[(1)] = (15));

} else {
var statearr_30528_30557 = state_30518__$1;
(statearr_30528_30557[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30519 === (17))){
var inst_30511 = (state_30518[(2)]);
var inst_30512 = cljs.core.async.close_BANG_.call(null,out);
var state_30518__$1 = (function (){var statearr_30529 = state_30518;
(statearr_30529[(10)] = inst_30511);

return statearr_30529;
})();
var statearr_30530_30558 = state_30518__$1;
(statearr_30530_30558[(2)] = inst_30512);

(statearr_30530_30558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30519 === (3))){
var inst_30516 = (state_30518[(2)]);
var state_30518__$1 = state_30518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30518__$1,inst_30516);
} else {
if((state_val_30519 === (12))){
var inst_30475 = (state_30518[(8)]);
var inst_30494 = cljs.core.vec.call(null,inst_30475);
var state_30518__$1 = state_30518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30518__$1,(14),out,inst_30494);
} else {
if((state_val_30519 === (2))){
var state_30518__$1 = state_30518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30518__$1,(4),ch);
} else {
if((state_val_30519 === (11))){
var inst_30479 = (state_30518[(9)]);
var inst_30475 = (state_30518[(8)]);
var inst_30483 = (state_30518[(11)]);
var inst_30491 = inst_30475.push(inst_30479);
var tmp30531 = inst_30475;
var inst_30475__$1 = tmp30531;
var inst_30476 = inst_30483;
var state_30518__$1 = (function (){var statearr_30532 = state_30518;
(statearr_30532[(7)] = inst_30476);

(statearr_30532[(8)] = inst_30475__$1);

(statearr_30532[(12)] = inst_30491);

return statearr_30532;
})();
var statearr_30533_30559 = state_30518__$1;
(statearr_30533_30559[(2)] = null);

(statearr_30533_30559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30519 === (9))){
var inst_30476 = (state_30518[(7)]);
var inst_30487 = cljs.core.keyword_identical_QMARK_.call(null,inst_30476,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_30518__$1 = state_30518;
var statearr_30534_30560 = state_30518__$1;
(statearr_30534_30560[(2)] = inst_30487);

(statearr_30534_30560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30519 === (5))){
var inst_30479 = (state_30518[(9)]);
var inst_30476 = (state_30518[(7)]);
var inst_30483 = (state_30518[(11)]);
var inst_30484 = (state_30518[(13)]);
var inst_30483__$1 = f.call(null,inst_30479);
var inst_30484__$1 = cljs.core._EQ_.call(null,inst_30483__$1,inst_30476);
var state_30518__$1 = (function (){var statearr_30535 = state_30518;
(statearr_30535[(11)] = inst_30483__$1);

(statearr_30535[(13)] = inst_30484__$1);

return statearr_30535;
})();
if(inst_30484__$1){
var statearr_30536_30561 = state_30518__$1;
(statearr_30536_30561[(1)] = (8));

} else {
var statearr_30537_30562 = state_30518__$1;
(statearr_30537_30562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30519 === (14))){
var inst_30479 = (state_30518[(9)]);
var inst_30483 = (state_30518[(11)]);
var inst_30496 = (state_30518[(2)]);
var inst_30497 = [];
var inst_30498 = inst_30497.push(inst_30479);
var inst_30475 = inst_30497;
var inst_30476 = inst_30483;
var state_30518__$1 = (function (){var statearr_30538 = state_30518;
(statearr_30538[(7)] = inst_30476);

(statearr_30538[(8)] = inst_30475);

(statearr_30538[(14)] = inst_30498);

(statearr_30538[(15)] = inst_30496);

return statearr_30538;
})();
var statearr_30539_30563 = state_30518__$1;
(statearr_30539_30563[(2)] = null);

(statearr_30539_30563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30519 === (16))){
var state_30518__$1 = state_30518;
var statearr_30540_30564 = state_30518__$1;
(statearr_30540_30564[(2)] = null);

(statearr_30540_30564[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30519 === (10))){
var inst_30489 = (state_30518[(2)]);
var state_30518__$1 = state_30518;
if(cljs.core.truth_(inst_30489)){
var statearr_30541_30565 = state_30518__$1;
(statearr_30541_30565[(1)] = (11));

} else {
var statearr_30542_30566 = state_30518__$1;
(statearr_30542_30566[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30519 === (18))){
var inst_30508 = (state_30518[(2)]);
var state_30518__$1 = state_30518;
var statearr_30543_30567 = state_30518__$1;
(statearr_30543_30567[(2)] = inst_30508);

(statearr_30543_30567[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30519 === (8))){
var inst_30484 = (state_30518[(13)]);
var state_30518__$1 = state_30518;
var statearr_30544_30568 = state_30518__$1;
(statearr_30544_30568[(2)] = inst_30484);

(statearr_30544_30568[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__28598__auto__ = null;
var cljs$core$async$state_machine__28598__auto____0 = (function (){
var statearr_30545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30545[(0)] = cljs$core$async$state_machine__28598__auto__);

(statearr_30545[(1)] = (1));

return statearr_30545;
});
var cljs$core$async$state_machine__28598__auto____1 = (function (state_30518){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_30518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e30546){if((e30546 instanceof Object)){
var ex__28601__auto__ = e30546;
var statearr_30547_30569 = state_30518;
(statearr_30547_30569[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30570 = state_30518;
state_30518 = G__30570;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
cljs$core$async$state_machine__28598__auto__ = function(state_30518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28598__auto____1.call(this,state_30518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28598__auto____0;
cljs$core$async$state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28598__auto____1;
return cljs$core$async$state_machine__28598__auto__;
})()
})();
var state__28696__auto__ = (function (){var statearr_30548 = f__28695__auto__.call(null);
(statearr_30548[(6)] = c__28694__auto___30550);

return statearr_30548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1643275180896
