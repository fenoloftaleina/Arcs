goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29326 = arguments.length;
switch (G__29326) {
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
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29337 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29337 = (function (f,blockable,meta29338){
this.f = f;
this.blockable = blockable;
this.meta29338 = meta29338;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29339,meta29338__$1){
var self__ = this;
var _29339__$1 = this;
return (new cljs.core.async.t_cljs$core$async29337(self__.f,self__.blockable,meta29338__$1));
}));

(cljs.core.async.t_cljs$core$async29337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29339){
var self__ = this;
var _29339__$1 = this;
return self__.meta29338;
}));

(cljs.core.async.t_cljs$core$async29337.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29337.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29337.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29337.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29337.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29338","meta29338",-949526460,null)], null);
}));

(cljs.core.async.t_cljs$core$async29337.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29337.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29337");

(cljs.core.async.t_cljs$core$async29337.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29337");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29337.
 */
cljs.core.async.__GT_t_cljs$core$async29337 = (function cljs$core$async$__GT_t_cljs$core$async29337(f__$1,blockable__$1,meta29338){
return (new cljs.core.async.t_cljs$core$async29337(f__$1,blockable__$1,meta29338));
});

}

return (new cljs.core.async.t_cljs$core$async29337(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__29374 = arguments.length;
switch (G__29374) {
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
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__29406 = arguments.length;
switch (G__29406) {
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
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__29420 = arguments.length;
switch (G__29420) {
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
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33167 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33167) : fn1.call(null,val_33167));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33167) : fn1.call(null,val_33167));
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29460 = arguments.length;
switch (G__29460) {
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
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___33174 = n;
var x_33175 = (0);
while(true){
if((x_33175 < n__4741__auto___33174)){
(a[x_33175] = x_33175);

var G__33176 = (x_33175 + (1));
x_33175 = G__33176;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29519 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29519 = (function (flag,meta29520){
this.flag = flag;
this.meta29520 = meta29520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29521,meta29520__$1){
var self__ = this;
var _29521__$1 = this;
return (new cljs.core.async.t_cljs$core$async29519(self__.flag,meta29520__$1));
}));

(cljs.core.async.t_cljs$core$async29519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29521){
var self__ = this;
var _29521__$1 = this;
return self__.meta29520;
}));

(cljs.core.async.t_cljs$core$async29519.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29519.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29519.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29519.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29519.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29520","meta29520",1628191647,null)], null);
}));

(cljs.core.async.t_cljs$core$async29519.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29519.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29519");

(cljs.core.async.t_cljs$core$async29519.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29519");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29519.
 */
cljs.core.async.__GT_t_cljs$core$async29519 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29519(flag__$1,meta29520){
return (new cljs.core.async.t_cljs$core$async29519(flag__$1,meta29520));
});

}

return (new cljs.core.async.t_cljs$core$async29519(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29559 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29559 = (function (flag,cb,meta29560){
this.flag = flag;
this.cb = cb;
this.meta29560 = meta29560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29561,meta29560__$1){
var self__ = this;
var _29561__$1 = this;
return (new cljs.core.async.t_cljs$core$async29559(self__.flag,self__.cb,meta29560__$1));
}));

(cljs.core.async.t_cljs$core$async29559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29561){
var self__ = this;
var _29561__$1 = this;
return self__.meta29560;
}));

(cljs.core.async.t_cljs$core$async29559.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29559.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29559.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29559.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29559.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29560","meta29560",1996789784,null)], null);
}));

(cljs.core.async.t_cljs$core$async29559.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29559.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29559");

(cljs.core.async.t_cljs$core$async29559.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29559");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29559.
 */
cljs.core.async.__GT_t_cljs$core$async29559 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29559(flag__$1,cb__$1,meta29560){
return (new cljs.core.async.t_cljs$core$async29559(flag__$1,cb__$1,meta29560));
});

}

return (new cljs.core.async.t_cljs$core$async29559(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29587_SHARP_){
var G__29608 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29587_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29608) : fret.call(null,G__29608));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29589_SHARP_){
var G__29612 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29589_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29612) : fret.call(null,G__29612));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33184 = (i + (1));
i = G__33184;
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
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var len__4864__auto___33187 = arguments.length;
var i__4865__auto___33188 = (0);
while(true){
if((i__4865__auto___33188 < len__4864__auto___33187)){
args__4870__auto__.push((arguments[i__4865__auto___33188]));

var G__33189 = (i__4865__auto___33188 + (1));
i__4865__auto___33188 = G__33189;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29635){
var map__29636 = p__29635;
var map__29636__$1 = cljs.core.__destructure_map(map__29636);
var opts = map__29636__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29624){
var G__29625 = cljs.core.first(seq29624);
var seq29624__$1 = cljs.core.next(seq29624);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29625,seq29624__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__29650 = arguments.length;
switch (G__29650) {
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29215__auto___33198 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29216__auto__ = (function (){var switch__28598__auto__ = (function (state_29719){
var state_val_29722 = (state_29719[(1)]);
if((state_val_29722 === (7))){
var inst_29701 = (state_29719[(2)]);
var state_29719__$1 = state_29719;
var statearr_29736_33200 = state_29719__$1;
(statearr_29736_33200[(2)] = inst_29701);

(statearr_29736_33200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29722 === (1))){
var state_29719__$1 = state_29719;
var statearr_29738_33201 = state_29719__$1;
(statearr_29738_33201[(2)] = null);

(statearr_29738_33201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29722 === (4))){
var inst_29680 = (state_29719[(7)]);
var inst_29680__$1 = (state_29719[(2)]);
var inst_29682 = (inst_29680__$1 == null);
var state_29719__$1 = (function (){var statearr_29739 = state_29719;
(statearr_29739[(7)] = inst_29680__$1);

return statearr_29739;
})();
if(cljs.core.truth_(inst_29682)){
var statearr_29740_33202 = state_29719__$1;
(statearr_29740_33202[(1)] = (5));

} else {
var statearr_29743_33203 = state_29719__$1;
(statearr_29743_33203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29722 === (13))){
var state_29719__$1 = state_29719;
var statearr_29748_33210 = state_29719__$1;
(statearr_29748_33210[(2)] = null);

(statearr_29748_33210[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29722 === (6))){
var inst_29680 = (state_29719[(7)]);
var state_29719__$1 = state_29719;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29719__$1,(11),to,inst_29680);
} else {
if((state_val_29722 === (3))){
var inst_29707 = (state_29719[(2)]);
var state_29719__$1 = state_29719;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29719__$1,inst_29707);
} else {
if((state_val_29722 === (12))){
var state_29719__$1 = state_29719;
var statearr_29760_33216 = state_29719__$1;
(statearr_29760_33216[(2)] = null);

(statearr_29760_33216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29722 === (2))){
var state_29719__$1 = state_29719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29719__$1,(4),from);
} else {
if((state_val_29722 === (11))){
var inst_29692 = (state_29719[(2)]);
var state_29719__$1 = state_29719;
if(cljs.core.truth_(inst_29692)){
var statearr_29761_33219 = state_29719__$1;
(statearr_29761_33219[(1)] = (12));

} else {
var statearr_29763_33220 = state_29719__$1;
(statearr_29763_33220[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29722 === (9))){
var state_29719__$1 = state_29719;
var statearr_29767_33221 = state_29719__$1;
(statearr_29767_33221[(2)] = null);

(statearr_29767_33221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29722 === (5))){
var state_29719__$1 = state_29719;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29772_33222 = state_29719__$1;
(statearr_29772_33222[(1)] = (8));

} else {
var statearr_29773_33223 = state_29719__$1;
(statearr_29773_33223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29722 === (14))){
var inst_29699 = (state_29719[(2)]);
var state_29719__$1 = state_29719;
var statearr_29780_33228 = state_29719__$1;
(statearr_29780_33228[(2)] = inst_29699);

(statearr_29780_33228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29722 === (10))){
var inst_29689 = (state_29719[(2)]);
var state_29719__$1 = state_29719;
var statearr_29781_33230 = state_29719__$1;
(statearr_29781_33230[(2)] = inst_29689);

(statearr_29781_33230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29722 === (8))){
var inst_29685 = cljs.core.async.close_BANG_(to);
var state_29719__$1 = state_29719;
var statearr_29785_33232 = state_29719__$1;
(statearr_29785_33232[(2)] = inst_29685);

(statearr_29785_33232[(1)] = (10));


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
var cljs$core$async$state_machine__28599__auto__ = null;
var cljs$core$async$state_machine__28599__auto____0 = (function (){
var statearr_29790 = [null,null,null,null,null,null,null,null];
(statearr_29790[(0)] = cljs$core$async$state_machine__28599__auto__);

(statearr_29790[(1)] = (1));

return statearr_29790;
});
var cljs$core$async$state_machine__28599__auto____1 = (function (state_29719){
while(true){
var ret_value__28600__auto__ = (function (){try{while(true){
var result__28601__auto__ = switch__28598__auto__(state_29719);
if(cljs.core.keyword_identical_QMARK_(result__28601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28601__auto__;
}
break;
}
}catch (e29796){var ex__28602__auto__ = e29796;
var statearr_29797_33233 = state_29719;
(statearr_29797_33233[(2)] = ex__28602__auto__);


if(cljs.core.seq((state_29719[(4)]))){
var statearr_29802_33234 = state_29719;
(statearr_29802_33234[(1)] = cljs.core.first((state_29719[(4)])));

} else {
throw ex__28602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33236 = state_29719;
state_29719 = G__33236;
continue;
} else {
return ret_value__28600__auto__;
}
break;
}
});
cljs$core$async$state_machine__28599__auto__ = function(state_29719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28599__auto____1.call(this,state_29719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28599__auto____0;
cljs$core$async$state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28599__auto____1;
return cljs$core$async$state_machine__28599__auto__;
})()
})();
var state__29217__auto__ = (function (){var statearr_29815 = f__29216__auto__();
(statearr_29815[(6)] = c__29215__auto___33198);

return statearr_29815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29217__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__29822){
var vec__29823 = p__29822;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29823,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29823,(1),null);
var job = vec__29823;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29215__auto___33251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29216__auto__ = (function (){var switch__28598__auto__ = (function (state_29831){
var state_val_29832 = (state_29831[(1)]);
if((state_val_29832 === (1))){
var state_29831__$1 = state_29831;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29831__$1,(2),res,v);
} else {
if((state_val_29832 === (2))){
var inst_29828 = (state_29831[(2)]);
var inst_29829 = cljs.core.async.close_BANG_(res);
var state_29831__$1 = (function (){var statearr_29838 = state_29831;
(statearr_29838[(7)] = inst_29828);

return statearr_29838;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29831__$1,inst_29829);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28599__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28599__auto____0 = (function (){
var statearr_29840 = [null,null,null,null,null,null,null,null];
(statearr_29840[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28599__auto__);

(statearr_29840[(1)] = (1));

return statearr_29840;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28599__auto____1 = (function (state_29831){
while(true){
var ret_value__28600__auto__ = (function (){try{while(true){
var result__28601__auto__ = switch__28598__auto__(state_29831);
if(cljs.core.keyword_identical_QMARK_(result__28601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28601__auto__;
}
break;
}
}catch (e29847){var ex__28602__auto__ = e29847;
var statearr_29848_33262 = state_29831;
(statearr_29848_33262[(2)] = ex__28602__auto__);


if(cljs.core.seq((state_29831[(4)]))){
var statearr_29849_33264 = state_29831;
(statearr_29849_33264[(1)] = cljs.core.first((state_29831[(4)])));

} else {
throw ex__28602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33265 = state_29831;
state_29831 = G__33265;
continue;
} else {
return ret_value__28600__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28599__auto__ = function(state_29831){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28599__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28599__auto____1.call(this,state_29831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28599__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28599__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28599__auto__;
})()
})();
var state__29217__auto__ = (function (){var statearr_29851 = f__29216__auto__();
(statearr_29851[(6)] = c__29215__auto___33251);

return statearr_29851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29217__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29858){
var vec__29859 = p__29858;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29859,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29859,(1),null);
var job = vec__29859;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___33272 = n;
var __33273 = (0);
while(true){
if((__33273 < n__4741__auto___33272)){
var G__29863_33274 = type;
var G__29863_33275__$1 = (((G__29863_33274 instanceof cljs.core.Keyword))?G__29863_33274.fqn:null);
switch (G__29863_33275__$1) {
case "compute":
var c__29215__auto___33277 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33273,c__29215__auto___33277,G__29863_33274,G__29863_33275__$1,n__4741__auto___33272,jobs,results,process,async){
return (function (){
var f__29216__auto__ = (function (){var switch__28598__auto__ = ((function (__33273,c__29215__auto___33277,G__29863_33274,G__29863_33275__$1,n__4741__auto___33272,jobs,results,process,async){
return (function (state_29879){
var state_val_29880 = (state_29879[(1)]);
if((state_val_29880 === (1))){
var state_29879__$1 = state_29879;
var statearr_29882_33280 = state_29879__$1;
(statearr_29882_33280[(2)] = null);

(statearr_29882_33280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (2))){
var state_29879__$1 = state_29879;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29879__$1,(4),jobs);
} else {
if((state_val_29880 === (3))){
var inst_29877 = (state_29879[(2)]);
var state_29879__$1 = state_29879;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29879__$1,inst_29877);
} else {
if((state_val_29880 === (4))){
var inst_29869 = (state_29879[(2)]);
var inst_29870 = process(inst_29869);
var state_29879__$1 = state_29879;
if(cljs.core.truth_(inst_29870)){
var statearr_29890_33286 = state_29879__$1;
(statearr_29890_33286[(1)] = (5));

} else {
var statearr_29891_33287 = state_29879__$1;
(statearr_29891_33287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (5))){
var state_29879__$1 = state_29879;
var statearr_29893_33288 = state_29879__$1;
(statearr_29893_33288[(2)] = null);

(statearr_29893_33288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (6))){
var state_29879__$1 = state_29879;
var statearr_29895_33289 = state_29879__$1;
(statearr_29895_33289[(2)] = null);

(statearr_29895_33289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (7))){
var inst_29875 = (state_29879[(2)]);
var state_29879__$1 = state_29879;
var statearr_29896_33292 = state_29879__$1;
(statearr_29896_33292[(2)] = inst_29875);

(statearr_29896_33292[(1)] = (3));


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
});})(__33273,c__29215__auto___33277,G__29863_33274,G__29863_33275__$1,n__4741__auto___33272,jobs,results,process,async))
;
return ((function (__33273,switch__28598__auto__,c__29215__auto___33277,G__29863_33274,G__29863_33275__$1,n__4741__auto___33272,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28599__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28599__auto____0 = (function (){
var statearr_29900 = [null,null,null,null,null,null,null];
(statearr_29900[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28599__auto__);

(statearr_29900[(1)] = (1));

return statearr_29900;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28599__auto____1 = (function (state_29879){
while(true){
var ret_value__28600__auto__ = (function (){try{while(true){
var result__28601__auto__ = switch__28598__auto__(state_29879);
if(cljs.core.keyword_identical_QMARK_(result__28601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28601__auto__;
}
break;
}
}catch (e29902){var ex__28602__auto__ = e29902;
var statearr_29904_33303 = state_29879;
(statearr_29904_33303[(2)] = ex__28602__auto__);


if(cljs.core.seq((state_29879[(4)]))){
var statearr_29905_33304 = state_29879;
(statearr_29905_33304[(1)] = cljs.core.first((state_29879[(4)])));

} else {
throw ex__28602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33305 = state_29879;
state_29879 = G__33305;
continue;
} else {
return ret_value__28600__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28599__auto__ = function(state_29879){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28599__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28599__auto____1.call(this,state_29879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28599__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28599__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28599__auto__;
})()
;})(__33273,switch__28598__auto__,c__29215__auto___33277,G__29863_33274,G__29863_33275__$1,n__4741__auto___33272,jobs,results,process,async))
})();
var state__29217__auto__ = (function (){var statearr_29907 = f__29216__auto__();
(statearr_29907[(6)] = c__29215__auto___33277);

return statearr_29907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29217__auto__);
});})(__33273,c__29215__auto___33277,G__29863_33274,G__29863_33275__$1,n__4741__auto___33272,jobs,results,process,async))
);


break;
case "async":
var c__29215__auto___33312 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33273,c__29215__auto___33312,G__29863_33274,G__29863_33275__$1,n__4741__auto___33272,jobs,results,process,async){
return (function (){
var f__29216__auto__ = (function (){var switch__28598__auto__ = ((function (__33273,c__29215__auto___33312,G__29863_33274,G__29863_33275__$1,n__4741__auto___33272,jobs,results,process,async){
return (function (state_29927){
var state_val_29928 = (state_29927[(1)]);
if((state_val_29928 === (1))){
var state_29927__$1 = state_29927;
var statearr_29930_33313 = state_29927__$1;
(statearr_29930_33313[(2)] = null);

(statearr_29930_33313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29928 === (2))){
var state_29927__$1 = state_29927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29927__$1,(4),jobs);
} else {
if((state_val_29928 === (3))){
var inst_29925 = (state_29927[(2)]);
var state_29927__$1 = state_29927;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29927__$1,inst_29925);
} else {
if((state_val_29928 === (4))){
var inst_29914 = (state_29927[(2)]);
var inst_29915 = async(inst_29914);
var state_29927__$1 = state_29927;
if(cljs.core.truth_(inst_29915)){
var statearr_29938_33316 = state_29927__$1;
(statearr_29938_33316[(1)] = (5));

} else {
var statearr_29939_33317 = state_29927__$1;
(statearr_29939_33317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29928 === (5))){
var state_29927__$1 = state_29927;
var statearr_29941_33321 = state_29927__$1;
(statearr_29941_33321[(2)] = null);

(statearr_29941_33321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29928 === (6))){
var state_29927__$1 = state_29927;
var statearr_29942_33322 = state_29927__$1;
(statearr_29942_33322[(2)] = null);

(statearr_29942_33322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29928 === (7))){
var inst_29920 = (state_29927[(2)]);
var state_29927__$1 = state_29927;
var statearr_29947_33325 = state_29927__$1;
(statearr_29947_33325[(2)] = inst_29920);

(statearr_29947_33325[(1)] = (3));


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
});})(__33273,c__29215__auto___33312,G__29863_33274,G__29863_33275__$1,n__4741__auto___33272,jobs,results,process,async))
;
return ((function (__33273,switch__28598__auto__,c__29215__auto___33312,G__29863_33274,G__29863_33275__$1,n__4741__auto___33272,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28599__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28599__auto____0 = (function (){
var statearr_29950 = [null,null,null,null,null,null,null];
(statearr_29950[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28599__auto__);

(statearr_29950[(1)] = (1));

return statearr_29950;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28599__auto____1 = (function (state_29927){
while(true){
var ret_value__28600__auto__ = (function (){try{while(true){
var result__28601__auto__ = switch__28598__auto__(state_29927);
if(cljs.core.keyword_identical_QMARK_(result__28601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28601__auto__;
}
break;
}
}catch (e29953){var ex__28602__auto__ = e29953;
var statearr_29957_33336 = state_29927;
(statearr_29957_33336[(2)] = ex__28602__auto__);


if(cljs.core.seq((state_29927[(4)]))){
var statearr_29958_33338 = state_29927;
(statearr_29958_33338[(1)] = cljs.core.first((state_29927[(4)])));

} else {
throw ex__28602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33340 = state_29927;
state_29927 = G__33340;
continue;
} else {
return ret_value__28600__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28599__auto__ = function(state_29927){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28599__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28599__auto____1.call(this,state_29927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28599__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28599__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28599__auto__;
})()
;})(__33273,switch__28598__auto__,c__29215__auto___33312,G__29863_33274,G__29863_33275__$1,n__4741__auto___33272,jobs,results,process,async))
})();
var state__29217__auto__ = (function (){var statearr_29961 = f__29216__auto__();
(statearr_29961[(6)] = c__29215__auto___33312);

return statearr_29961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29217__auto__);
});})(__33273,c__29215__auto___33312,G__29863_33274,G__29863_33275__$1,n__4741__auto___33272,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29863_33275__$1)].join('')));

}

var G__33342 = (__33273 + (1));
__33273 = G__33342;
continue;
} else {
}
break;
}

var c__29215__auto___33343 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29216__auto__ = (function (){var switch__28598__auto__ = (function (state_29993){
var state_val_29994 = (state_29993[(1)]);
if((state_val_29994 === (7))){
var inst_29989 = (state_29993[(2)]);
var state_29993__$1 = state_29993;
var statearr_30007_33351 = state_29993__$1;
(statearr_30007_33351[(2)] = inst_29989);

(statearr_30007_33351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (1))){
var state_29993__$1 = state_29993;
var statearr_30009_33356 = state_29993__$1;
(statearr_30009_33356[(2)] = null);

(statearr_30009_33356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (4))){
var inst_29968 = (state_29993[(7)]);
var inst_29968__$1 = (state_29993[(2)]);
var inst_29969 = (inst_29968__$1 == null);
var state_29993__$1 = (function (){var statearr_30012 = state_29993;
(statearr_30012[(7)] = inst_29968__$1);

return statearr_30012;
})();
if(cljs.core.truth_(inst_29969)){
var statearr_30015_33364 = state_29993__$1;
(statearr_30015_33364[(1)] = (5));

} else {
var statearr_30016_33365 = state_29993__$1;
(statearr_30016_33365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (6))){
var inst_29968 = (state_29993[(7)]);
var inst_29975 = (state_29993[(8)]);
var inst_29975__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29976 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29981 = [inst_29968,inst_29975__$1];
var inst_29982 = (new cljs.core.PersistentVector(null,2,(5),inst_29976,inst_29981,null));
var state_29993__$1 = (function (){var statearr_30024 = state_29993;
(statearr_30024[(8)] = inst_29975__$1);

return statearr_30024;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29993__$1,(8),jobs,inst_29982);
} else {
if((state_val_29994 === (3))){
var inst_29991 = (state_29993[(2)]);
var state_29993__$1 = state_29993;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29993__$1,inst_29991);
} else {
if((state_val_29994 === (2))){
var state_29993__$1 = state_29993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29993__$1,(4),from);
} else {
if((state_val_29994 === (9))){
var inst_29986 = (state_29993[(2)]);
var state_29993__$1 = (function (){var statearr_30041 = state_29993;
(statearr_30041[(9)] = inst_29986);

return statearr_30041;
})();
var statearr_30042_33368 = state_29993__$1;
(statearr_30042_33368[(2)] = null);

(statearr_30042_33368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (5))){
var inst_29971 = cljs.core.async.close_BANG_(jobs);
var state_29993__$1 = state_29993;
var statearr_30044_33371 = state_29993__$1;
(statearr_30044_33371[(2)] = inst_29971);

(statearr_30044_33371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (8))){
var inst_29975 = (state_29993[(8)]);
var inst_29984 = (state_29993[(2)]);
var state_29993__$1 = (function (){var statearr_30047 = state_29993;
(statearr_30047[(10)] = inst_29984);

return statearr_30047;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29993__$1,(9),results,inst_29975);
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
var cljs$core$async$pipeline_STAR__$_state_machine__28599__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28599__auto____0 = (function (){
var statearr_30051 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30051[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28599__auto__);

(statearr_30051[(1)] = (1));

return statearr_30051;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28599__auto____1 = (function (state_29993){
while(true){
var ret_value__28600__auto__ = (function (){try{while(true){
var result__28601__auto__ = switch__28598__auto__(state_29993);
if(cljs.core.keyword_identical_QMARK_(result__28601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28601__auto__;
}
break;
}
}catch (e30053){var ex__28602__auto__ = e30053;
var statearr_30054_33377 = state_29993;
(statearr_30054_33377[(2)] = ex__28602__auto__);


if(cljs.core.seq((state_29993[(4)]))){
var statearr_30056_33379 = state_29993;
(statearr_30056_33379[(1)] = cljs.core.first((state_29993[(4)])));

} else {
throw ex__28602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33383 = state_29993;
state_29993 = G__33383;
continue;
} else {
return ret_value__28600__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28599__auto__ = function(state_29993){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28599__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28599__auto____1.call(this,state_29993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28599__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28599__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28599__auto__;
})()
})();
var state__29217__auto__ = (function (){var statearr_30058 = f__29216__auto__();
(statearr_30058[(6)] = c__29215__auto___33343);

return statearr_30058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29217__auto__);
}));


var c__29215__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29216__auto__ = (function (){var switch__28598__auto__ = (function (state_30101){
var state_val_30102 = (state_30101[(1)]);
if((state_val_30102 === (7))){
var inst_30097 = (state_30101[(2)]);
var state_30101__$1 = state_30101;
var statearr_30103_33389 = state_30101__$1;
(statearr_30103_33389[(2)] = inst_30097);

(statearr_30103_33389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30102 === (20))){
var state_30101__$1 = state_30101;
var statearr_30105_33390 = state_30101__$1;
(statearr_30105_33390[(2)] = null);

(statearr_30105_33390[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30102 === (1))){
var state_30101__$1 = state_30101;
var statearr_30106_33391 = state_30101__$1;
(statearr_30106_33391[(2)] = null);

(statearr_30106_33391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30102 === (4))){
var inst_30065 = (state_30101[(7)]);
var inst_30065__$1 = (state_30101[(2)]);
var inst_30066 = (inst_30065__$1 == null);
var state_30101__$1 = (function (){var statearr_30111 = state_30101;
(statearr_30111[(7)] = inst_30065__$1);

return statearr_30111;
})();
if(cljs.core.truth_(inst_30066)){
var statearr_30112_33396 = state_30101__$1;
(statearr_30112_33396[(1)] = (5));

} else {
var statearr_30114_33397 = state_30101__$1;
(statearr_30114_33397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30102 === (15))){
var inst_30078 = (state_30101[(8)]);
var state_30101__$1 = state_30101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30101__$1,(18),to,inst_30078);
} else {
if((state_val_30102 === (21))){
var inst_30092 = (state_30101[(2)]);
var state_30101__$1 = state_30101;
var statearr_30115_33399 = state_30101__$1;
(statearr_30115_33399[(2)] = inst_30092);

(statearr_30115_33399[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30102 === (13))){
var inst_30094 = (state_30101[(2)]);
var state_30101__$1 = (function (){var statearr_30117 = state_30101;
(statearr_30117[(9)] = inst_30094);

return statearr_30117;
})();
var statearr_30119_33407 = state_30101__$1;
(statearr_30119_33407[(2)] = null);

(statearr_30119_33407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30102 === (6))){
var inst_30065 = (state_30101[(7)]);
var state_30101__$1 = state_30101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30101__$1,(11),inst_30065);
} else {
if((state_val_30102 === (17))){
var inst_30086 = (state_30101[(2)]);
var state_30101__$1 = state_30101;
if(cljs.core.truth_(inst_30086)){
var statearr_30134_33412 = state_30101__$1;
(statearr_30134_33412[(1)] = (19));

} else {
var statearr_30135_33413 = state_30101__$1;
(statearr_30135_33413[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30102 === (3))){
var inst_30099 = (state_30101[(2)]);
var state_30101__$1 = state_30101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30101__$1,inst_30099);
} else {
if((state_val_30102 === (12))){
var inst_30075 = (state_30101[(10)]);
var state_30101__$1 = state_30101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30101__$1,(14),inst_30075);
} else {
if((state_val_30102 === (2))){
var state_30101__$1 = state_30101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30101__$1,(4),results);
} else {
if((state_val_30102 === (19))){
var state_30101__$1 = state_30101;
var statearr_30141_33418 = state_30101__$1;
(statearr_30141_33418[(2)] = null);

(statearr_30141_33418[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30102 === (11))){
var inst_30075 = (state_30101[(2)]);
var state_30101__$1 = (function (){var statearr_30146 = state_30101;
(statearr_30146[(10)] = inst_30075);

return statearr_30146;
})();
var statearr_30153_33419 = state_30101__$1;
(statearr_30153_33419[(2)] = null);

(statearr_30153_33419[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30102 === (9))){
var state_30101__$1 = state_30101;
var statearr_30157_33420 = state_30101__$1;
(statearr_30157_33420[(2)] = null);

(statearr_30157_33420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30102 === (5))){
var state_30101__$1 = state_30101;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30167_33423 = state_30101__$1;
(statearr_30167_33423[(1)] = (8));

} else {
var statearr_30168_33424 = state_30101__$1;
(statearr_30168_33424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30102 === (14))){
var inst_30078 = (state_30101[(8)]);
var inst_30080 = (state_30101[(11)]);
var inst_30078__$1 = (state_30101[(2)]);
var inst_30079 = (inst_30078__$1 == null);
var inst_30080__$1 = cljs.core.not(inst_30079);
var state_30101__$1 = (function (){var statearr_30172 = state_30101;
(statearr_30172[(8)] = inst_30078__$1);

(statearr_30172[(11)] = inst_30080__$1);

return statearr_30172;
})();
if(inst_30080__$1){
var statearr_30173_33426 = state_30101__$1;
(statearr_30173_33426[(1)] = (15));

} else {
var statearr_30174_33429 = state_30101__$1;
(statearr_30174_33429[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30102 === (16))){
var inst_30080 = (state_30101[(11)]);
var state_30101__$1 = state_30101;
var statearr_30176_33431 = state_30101__$1;
(statearr_30176_33431[(2)] = inst_30080);

(statearr_30176_33431[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30102 === (10))){
var inst_30072 = (state_30101[(2)]);
var state_30101__$1 = state_30101;
var statearr_30180_33434 = state_30101__$1;
(statearr_30180_33434[(2)] = inst_30072);

(statearr_30180_33434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30102 === (18))){
var inst_30083 = (state_30101[(2)]);
var state_30101__$1 = state_30101;
var statearr_30181_33435 = state_30101__$1;
(statearr_30181_33435[(2)] = inst_30083);

(statearr_30181_33435[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30102 === (8))){
var inst_30069 = cljs.core.async.close_BANG_(to);
var state_30101__$1 = state_30101;
var statearr_30182_33439 = state_30101__$1;
(statearr_30182_33439[(2)] = inst_30069);

(statearr_30182_33439[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__28599__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28599__auto____0 = (function (){
var statearr_30184 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30184[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28599__auto__);

(statearr_30184[(1)] = (1));

return statearr_30184;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28599__auto____1 = (function (state_30101){
while(true){
var ret_value__28600__auto__ = (function (){try{while(true){
var result__28601__auto__ = switch__28598__auto__(state_30101);
if(cljs.core.keyword_identical_QMARK_(result__28601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28601__auto__;
}
break;
}
}catch (e30190){var ex__28602__auto__ = e30190;
var statearr_30191_33440 = state_30101;
(statearr_30191_33440[(2)] = ex__28602__auto__);


if(cljs.core.seq((state_30101[(4)]))){
var statearr_30192_33441 = state_30101;
(statearr_30192_33441[(1)] = cljs.core.first((state_30101[(4)])));

} else {
throw ex__28602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33442 = state_30101;
state_30101 = G__33442;
continue;
} else {
return ret_value__28600__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28599__auto__ = function(state_30101){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28599__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28599__auto____1.call(this,state_30101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28599__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28599__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28599__auto__;
})()
})();
var state__29217__auto__ = (function (){var statearr_30194 = f__29216__auto__();
(statearr_30194[(6)] = c__29215__auto__);

return statearr_30194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29217__auto__);
}));

return c__29215__auto__;
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
var G__30199 = arguments.length;
switch (G__30199) {
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
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__30211 = arguments.length;
switch (G__30211) {
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
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__30234 = arguments.length;
switch (G__30234) {
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
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29215__auto___33471 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29216__auto__ = (function (){var switch__28598__auto__ = (function (state_30265){
var state_val_30266 = (state_30265[(1)]);
if((state_val_30266 === (7))){
var inst_30260 = (state_30265[(2)]);
var state_30265__$1 = state_30265;
var statearr_30268_33475 = state_30265__$1;
(statearr_30268_33475[(2)] = inst_30260);

(statearr_30268_33475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (1))){
var state_30265__$1 = state_30265;
var statearr_30270_33479 = state_30265__$1;
(statearr_30270_33479[(2)] = null);

(statearr_30270_33479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (4))){
var inst_30241 = (state_30265[(7)]);
var inst_30241__$1 = (state_30265[(2)]);
var inst_30242 = (inst_30241__$1 == null);
var state_30265__$1 = (function (){var statearr_30274 = state_30265;
(statearr_30274[(7)] = inst_30241__$1);

return statearr_30274;
})();
if(cljs.core.truth_(inst_30242)){
var statearr_30275_33484 = state_30265__$1;
(statearr_30275_33484[(1)] = (5));

} else {
var statearr_30276_33485 = state_30265__$1;
(statearr_30276_33485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (13))){
var state_30265__$1 = state_30265;
var statearr_30277_33490 = state_30265__$1;
(statearr_30277_33490[(2)] = null);

(statearr_30277_33490[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (6))){
var inst_30241 = (state_30265[(7)]);
var inst_30247 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30241) : p.call(null,inst_30241));
var state_30265__$1 = state_30265;
if(cljs.core.truth_(inst_30247)){
var statearr_30279_33506 = state_30265__$1;
(statearr_30279_33506[(1)] = (9));

} else {
var statearr_30281_33516 = state_30265__$1;
(statearr_30281_33516[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (3))){
var inst_30262 = (state_30265[(2)]);
var state_30265__$1 = state_30265;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30265__$1,inst_30262);
} else {
if((state_val_30266 === (12))){
var state_30265__$1 = state_30265;
var statearr_30288_33528 = state_30265__$1;
(statearr_30288_33528[(2)] = null);

(statearr_30288_33528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (2))){
var state_30265__$1 = state_30265;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30265__$1,(4),ch);
} else {
if((state_val_30266 === (11))){
var inst_30241 = (state_30265[(7)]);
var inst_30251 = (state_30265[(2)]);
var state_30265__$1 = state_30265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30265__$1,(8),inst_30251,inst_30241);
} else {
if((state_val_30266 === (9))){
var state_30265__$1 = state_30265;
var statearr_30292_33529 = state_30265__$1;
(statearr_30292_33529[(2)] = tc);

(statearr_30292_33529[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (5))){
var inst_30244 = cljs.core.async.close_BANG_(tc);
var inst_30245 = cljs.core.async.close_BANG_(fc);
var state_30265__$1 = (function (){var statearr_30293 = state_30265;
(statearr_30293[(8)] = inst_30244);

return statearr_30293;
})();
var statearr_30294_33534 = state_30265__$1;
(statearr_30294_33534[(2)] = inst_30245);

(statearr_30294_33534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (14))){
var inst_30258 = (state_30265[(2)]);
var state_30265__$1 = state_30265;
var statearr_30296_33538 = state_30265__$1;
(statearr_30296_33538[(2)] = inst_30258);

(statearr_30296_33538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (10))){
var state_30265__$1 = state_30265;
var statearr_30298_33539 = state_30265__$1;
(statearr_30298_33539[(2)] = fc);

(statearr_30298_33539[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (8))){
var inst_30253 = (state_30265[(2)]);
var state_30265__$1 = state_30265;
if(cljs.core.truth_(inst_30253)){
var statearr_30299_33543 = state_30265__$1;
(statearr_30299_33543[(1)] = (12));

} else {
var statearr_30300_33544 = state_30265__$1;
(statearr_30300_33544[(1)] = (13));

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
var cljs$core$async$state_machine__28599__auto__ = null;
var cljs$core$async$state_machine__28599__auto____0 = (function (){
var statearr_30302 = [null,null,null,null,null,null,null,null,null];
(statearr_30302[(0)] = cljs$core$async$state_machine__28599__auto__);

(statearr_30302[(1)] = (1));

return statearr_30302;
});
var cljs$core$async$state_machine__28599__auto____1 = (function (state_30265){
while(true){
var ret_value__28600__auto__ = (function (){try{while(true){
var result__28601__auto__ = switch__28598__auto__(state_30265);
if(cljs.core.keyword_identical_QMARK_(result__28601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28601__auto__;
}
break;
}
}catch (e30303){var ex__28602__auto__ = e30303;
var statearr_30304_33553 = state_30265;
(statearr_30304_33553[(2)] = ex__28602__auto__);


if(cljs.core.seq((state_30265[(4)]))){
var statearr_30305_33554 = state_30265;
(statearr_30305_33554[(1)] = cljs.core.first((state_30265[(4)])));

} else {
throw ex__28602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33555 = state_30265;
state_30265 = G__33555;
continue;
} else {
return ret_value__28600__auto__;
}
break;
}
});
cljs$core$async$state_machine__28599__auto__ = function(state_30265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28599__auto____1.call(this,state_30265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28599__auto____0;
cljs$core$async$state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28599__auto____1;
return cljs$core$async$state_machine__28599__auto__;
})()
})();
var state__29217__auto__ = (function (){var statearr_30309 = f__29216__auto__();
(statearr_30309[(6)] = c__29215__auto___33471);

return statearr_30309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29217__auto__);
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
var c__29215__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29216__auto__ = (function (){var switch__28598__auto__ = (function (state_30337){
var state_val_30338 = (state_30337[(1)]);
if((state_val_30338 === (7))){
var inst_30332 = (state_30337[(2)]);
var state_30337__$1 = state_30337;
var statearr_30344_33560 = state_30337__$1;
(statearr_30344_33560[(2)] = inst_30332);

(statearr_30344_33560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30338 === (1))){
var inst_30314 = init;
var inst_30316 = inst_30314;
var state_30337__$1 = (function (){var statearr_30345 = state_30337;
(statearr_30345[(7)] = inst_30316);

return statearr_30345;
})();
var statearr_30347_33562 = state_30337__$1;
(statearr_30347_33562[(2)] = null);

(statearr_30347_33562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30338 === (4))){
var inst_30319 = (state_30337[(8)]);
var inst_30319__$1 = (state_30337[(2)]);
var inst_30320 = (inst_30319__$1 == null);
var state_30337__$1 = (function (){var statearr_30348 = state_30337;
(statearr_30348[(8)] = inst_30319__$1);

return statearr_30348;
})();
if(cljs.core.truth_(inst_30320)){
var statearr_30349_33564 = state_30337__$1;
(statearr_30349_33564[(1)] = (5));

} else {
var statearr_30350_33565 = state_30337__$1;
(statearr_30350_33565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30338 === (6))){
var inst_30323 = (state_30337[(9)]);
var inst_30316 = (state_30337[(7)]);
var inst_30319 = (state_30337[(8)]);
var inst_30323__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30316,inst_30319) : f.call(null,inst_30316,inst_30319));
var inst_30324 = cljs.core.reduced_QMARK_(inst_30323__$1);
var state_30337__$1 = (function (){var statearr_30353 = state_30337;
(statearr_30353[(9)] = inst_30323__$1);

return statearr_30353;
})();
if(inst_30324){
var statearr_30354_33569 = state_30337__$1;
(statearr_30354_33569[(1)] = (8));

} else {
var statearr_30356_33570 = state_30337__$1;
(statearr_30356_33570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30338 === (3))){
var inst_30335 = (state_30337[(2)]);
var state_30337__$1 = state_30337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30337__$1,inst_30335);
} else {
if((state_val_30338 === (2))){
var state_30337__$1 = state_30337;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30337__$1,(4),ch);
} else {
if((state_val_30338 === (9))){
var inst_30323 = (state_30337[(9)]);
var inst_30316 = inst_30323;
var state_30337__$1 = (function (){var statearr_30357 = state_30337;
(statearr_30357[(7)] = inst_30316);

return statearr_30357;
})();
var statearr_30358_33574 = state_30337__$1;
(statearr_30358_33574[(2)] = null);

(statearr_30358_33574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30338 === (5))){
var inst_30316 = (state_30337[(7)]);
var state_30337__$1 = state_30337;
var statearr_30362_33575 = state_30337__$1;
(statearr_30362_33575[(2)] = inst_30316);

(statearr_30362_33575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30338 === (10))){
var inst_30330 = (state_30337[(2)]);
var state_30337__$1 = state_30337;
var statearr_30366_33576 = state_30337__$1;
(statearr_30366_33576[(2)] = inst_30330);

(statearr_30366_33576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30338 === (8))){
var inst_30323 = (state_30337[(9)]);
var inst_30326 = cljs.core.deref(inst_30323);
var state_30337__$1 = state_30337;
var statearr_30369_33577 = state_30337__$1;
(statearr_30369_33577[(2)] = inst_30326);

(statearr_30369_33577[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__28599__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28599__auto____0 = (function (){
var statearr_30374 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30374[(0)] = cljs$core$async$reduce_$_state_machine__28599__auto__);

(statearr_30374[(1)] = (1));

return statearr_30374;
});
var cljs$core$async$reduce_$_state_machine__28599__auto____1 = (function (state_30337){
while(true){
var ret_value__28600__auto__ = (function (){try{while(true){
var result__28601__auto__ = switch__28598__auto__(state_30337);
if(cljs.core.keyword_identical_QMARK_(result__28601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28601__auto__;
}
break;
}
}catch (e30377){var ex__28602__auto__ = e30377;
var statearr_30378_33579 = state_30337;
(statearr_30378_33579[(2)] = ex__28602__auto__);


if(cljs.core.seq((state_30337[(4)]))){
var statearr_30379_33580 = state_30337;
(statearr_30379_33580[(1)] = cljs.core.first((state_30337[(4)])));

} else {
throw ex__28602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33588 = state_30337;
state_30337 = G__33588;
continue;
} else {
return ret_value__28600__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28599__auto__ = function(state_30337){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28599__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28599__auto____1.call(this,state_30337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28599__auto____0;
cljs$core$async$reduce_$_state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28599__auto____1;
return cljs$core$async$reduce_$_state_machine__28599__auto__;
})()
})();
var state__29217__auto__ = (function (){var statearr_30382 = f__29216__auto__();
(statearr_30382[(6)] = c__29215__auto__);

return statearr_30382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29217__auto__);
}));

return c__29215__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29215__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29216__auto__ = (function (){var switch__28598__auto__ = (function (state_30392){
var state_val_30393 = (state_30392[(1)]);
if((state_val_30393 === (1))){
var inst_30387 = cljs.core.async.reduce(f__$1,init,ch);
var state_30392__$1 = state_30392;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30392__$1,(2),inst_30387);
} else {
if((state_val_30393 === (2))){
var inst_30389 = (state_30392[(2)]);
var inst_30390 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30389) : f__$1.call(null,inst_30389));
var state_30392__$1 = state_30392;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30392__$1,inst_30390);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28599__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28599__auto____0 = (function (){
var statearr_30429 = [null,null,null,null,null,null,null];
(statearr_30429[(0)] = cljs$core$async$transduce_$_state_machine__28599__auto__);

(statearr_30429[(1)] = (1));

return statearr_30429;
});
var cljs$core$async$transduce_$_state_machine__28599__auto____1 = (function (state_30392){
while(true){
var ret_value__28600__auto__ = (function (){try{while(true){
var result__28601__auto__ = switch__28598__auto__(state_30392);
if(cljs.core.keyword_identical_QMARK_(result__28601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28601__auto__;
}
break;
}
}catch (e30430){var ex__28602__auto__ = e30430;
var statearr_30431_33598 = state_30392;
(statearr_30431_33598[(2)] = ex__28602__auto__);


if(cljs.core.seq((state_30392[(4)]))){
var statearr_30432_33599 = state_30392;
(statearr_30432_33599[(1)] = cljs.core.first((state_30392[(4)])));

} else {
throw ex__28602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33600 = state_30392;
state_30392 = G__33600;
continue;
} else {
return ret_value__28600__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28599__auto__ = function(state_30392){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28599__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28599__auto____1.call(this,state_30392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28599__auto____0;
cljs$core$async$transduce_$_state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28599__auto____1;
return cljs$core$async$transduce_$_state_machine__28599__auto__;
})()
})();
var state__29217__auto__ = (function (){var statearr_30442 = f__29216__auto__();
(statearr_30442[(6)] = c__29215__auto__);

return statearr_30442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29217__auto__);
}));

return c__29215__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30451 = arguments.length;
switch (G__30451) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29215__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29216__auto__ = (function (){var switch__28598__auto__ = (function (state_30481){
var state_val_30482 = (state_30481[(1)]);
if((state_val_30482 === (7))){
var inst_30463 = (state_30481[(2)]);
var state_30481__$1 = state_30481;
var statearr_30488_33606 = state_30481__$1;
(statearr_30488_33606[(2)] = inst_30463);

(statearr_30488_33606[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30482 === (1))){
var inst_30456 = cljs.core.seq(coll);
var inst_30457 = inst_30456;
var state_30481__$1 = (function (){var statearr_30490 = state_30481;
(statearr_30490[(7)] = inst_30457);

return statearr_30490;
})();
var statearr_30491_33609 = state_30481__$1;
(statearr_30491_33609[(2)] = null);

(statearr_30491_33609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30482 === (4))){
var inst_30457 = (state_30481[(7)]);
var inst_30461 = cljs.core.first(inst_30457);
var state_30481__$1 = state_30481;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30481__$1,(7),ch,inst_30461);
} else {
if((state_val_30482 === (13))){
var inst_30475 = (state_30481[(2)]);
var state_30481__$1 = state_30481;
var statearr_30495_33613 = state_30481__$1;
(statearr_30495_33613[(2)] = inst_30475);

(statearr_30495_33613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30482 === (6))){
var inst_30466 = (state_30481[(2)]);
var state_30481__$1 = state_30481;
if(cljs.core.truth_(inst_30466)){
var statearr_30497_33617 = state_30481__$1;
(statearr_30497_33617[(1)] = (8));

} else {
var statearr_30498_33619 = state_30481__$1;
(statearr_30498_33619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30482 === (3))){
var inst_30479 = (state_30481[(2)]);
var state_30481__$1 = state_30481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30481__$1,inst_30479);
} else {
if((state_val_30482 === (12))){
var state_30481__$1 = state_30481;
var statearr_30501_33625 = state_30481__$1;
(statearr_30501_33625[(2)] = null);

(statearr_30501_33625[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30482 === (2))){
var inst_30457 = (state_30481[(7)]);
var state_30481__$1 = state_30481;
if(cljs.core.truth_(inst_30457)){
var statearr_30505_33626 = state_30481__$1;
(statearr_30505_33626[(1)] = (4));

} else {
var statearr_30506_33627 = state_30481__$1;
(statearr_30506_33627[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30482 === (11))){
var inst_30472 = cljs.core.async.close_BANG_(ch);
var state_30481__$1 = state_30481;
var statearr_30507_33630 = state_30481__$1;
(statearr_30507_33630[(2)] = inst_30472);

(statearr_30507_33630[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30482 === (9))){
var state_30481__$1 = state_30481;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30509_33635 = state_30481__$1;
(statearr_30509_33635[(1)] = (11));

} else {
var statearr_30510_33637 = state_30481__$1;
(statearr_30510_33637[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30482 === (5))){
var inst_30457 = (state_30481[(7)]);
var state_30481__$1 = state_30481;
var statearr_30512_33638 = state_30481__$1;
(statearr_30512_33638[(2)] = inst_30457);

(statearr_30512_33638[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30482 === (10))){
var inst_30477 = (state_30481[(2)]);
var state_30481__$1 = state_30481;
var statearr_30513_33639 = state_30481__$1;
(statearr_30513_33639[(2)] = inst_30477);

(statearr_30513_33639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30482 === (8))){
var inst_30457 = (state_30481[(7)]);
var inst_30468 = cljs.core.next(inst_30457);
var inst_30457__$1 = inst_30468;
var state_30481__$1 = (function (){var statearr_30514 = state_30481;
(statearr_30514[(7)] = inst_30457__$1);

return statearr_30514;
})();
var statearr_30518_33642 = state_30481__$1;
(statearr_30518_33642[(2)] = null);

(statearr_30518_33642[(1)] = (2));


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
var cljs$core$async$state_machine__28599__auto__ = null;
var cljs$core$async$state_machine__28599__auto____0 = (function (){
var statearr_30520 = [null,null,null,null,null,null,null,null];
(statearr_30520[(0)] = cljs$core$async$state_machine__28599__auto__);

(statearr_30520[(1)] = (1));

return statearr_30520;
});
var cljs$core$async$state_machine__28599__auto____1 = (function (state_30481){
while(true){
var ret_value__28600__auto__ = (function (){try{while(true){
var result__28601__auto__ = switch__28598__auto__(state_30481);
if(cljs.core.keyword_identical_QMARK_(result__28601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28601__auto__;
}
break;
}
}catch (e30521){var ex__28602__auto__ = e30521;
var statearr_30524_33651 = state_30481;
(statearr_30524_33651[(2)] = ex__28602__auto__);


if(cljs.core.seq((state_30481[(4)]))){
var statearr_30525_33653 = state_30481;
(statearr_30525_33653[(1)] = cljs.core.first((state_30481[(4)])));

} else {
throw ex__28602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33657 = state_30481;
state_30481 = G__33657;
continue;
} else {
return ret_value__28600__auto__;
}
break;
}
});
cljs$core$async$state_machine__28599__auto__ = function(state_30481){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28599__auto____1.call(this,state_30481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28599__auto____0;
cljs$core$async$state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28599__auto____1;
return cljs$core$async$state_machine__28599__auto__;
})()
})();
var state__29217__auto__ = (function (){var statearr_30527 = f__29216__auto__();
(statearr_30527[(6)] = c__29215__auto__);

return statearr_30527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29217__auto__);
}));

return c__29215__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30533 = arguments.length;
switch (G__30533) {
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
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33673 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33673(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33679 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33679(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33680 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33680(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33687 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33687(m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30566 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30566 = (function (ch,cs,meta30567){
this.ch = ch;
this.cs = cs;
this.meta30567 = meta30567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30568,meta30567__$1){
var self__ = this;
var _30568__$1 = this;
return (new cljs.core.async.t_cljs$core$async30566(self__.ch,self__.cs,meta30567__$1));
}));

(cljs.core.async.t_cljs$core$async30566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30568){
var self__ = this;
var _30568__$1 = this;
return self__.meta30567;
}));

(cljs.core.async.t_cljs$core$async30566.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30566.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30566.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30566.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30566.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30566.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30566.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30567","meta30567",-1120704321,null)], null);
}));

(cljs.core.async.t_cljs$core$async30566.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30566.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30566");

(cljs.core.async.t_cljs$core$async30566.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30566");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30566.
 */
cljs.core.async.__GT_t_cljs$core$async30566 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30566(ch__$1,cs__$1,meta30567){
return (new cljs.core.async.t_cljs$core$async30566(ch__$1,cs__$1,meta30567));
});

}

return (new cljs.core.async.t_cljs$core$async30566(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29215__auto___33721 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29216__auto__ = (function (){var switch__28598__auto__ = (function (state_30739){
var state_val_30740 = (state_30739[(1)]);
if((state_val_30740 === (7))){
var inst_30727 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
var statearr_30743_33722 = state_30739__$1;
(statearr_30743_33722[(2)] = inst_30727);

(statearr_30743_33722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (20))){
var inst_30620 = (state_30739[(7)]);
var inst_30632 = cljs.core.first(inst_30620);
var inst_30633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30632,(0),null);
var inst_30634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30632,(1),null);
var state_30739__$1 = (function (){var statearr_30748 = state_30739;
(statearr_30748[(8)] = inst_30633);

return statearr_30748;
})();
if(cljs.core.truth_(inst_30634)){
var statearr_30750_33729 = state_30739__$1;
(statearr_30750_33729[(1)] = (22));

} else {
var statearr_30751_33730 = state_30739__$1;
(statearr_30751_33730[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (27))){
var inst_30662 = (state_30739[(9)]);
var inst_30583 = (state_30739[(10)]);
var inst_30671 = (state_30739[(11)]);
var inst_30664 = (state_30739[(12)]);
var inst_30671__$1 = cljs.core._nth(inst_30662,inst_30664);
var inst_30674 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30671__$1,inst_30583,done);
var state_30739__$1 = (function (){var statearr_30756 = state_30739;
(statearr_30756[(11)] = inst_30671__$1);

return statearr_30756;
})();
if(cljs.core.truth_(inst_30674)){
var statearr_30760_33731 = state_30739__$1;
(statearr_30760_33731[(1)] = (30));

} else {
var statearr_30761_33732 = state_30739__$1;
(statearr_30761_33732[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (1))){
var state_30739__$1 = state_30739;
var statearr_30762_33733 = state_30739__$1;
(statearr_30762_33733[(2)] = null);

(statearr_30762_33733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (24))){
var inst_30620 = (state_30739[(7)]);
var inst_30639 = (state_30739[(2)]);
var inst_30640 = cljs.core.next(inst_30620);
var inst_30595 = inst_30640;
var inst_30596 = null;
var inst_30597 = (0);
var inst_30598 = (0);
var state_30739__$1 = (function (){var statearr_30768 = state_30739;
(statearr_30768[(13)] = inst_30598);

(statearr_30768[(14)] = inst_30596);

(statearr_30768[(15)] = inst_30597);

(statearr_30768[(16)] = inst_30639);

(statearr_30768[(17)] = inst_30595);

return statearr_30768;
})();
var statearr_30778_33734 = state_30739__$1;
(statearr_30778_33734[(2)] = null);

(statearr_30778_33734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (39))){
var state_30739__$1 = state_30739;
var statearr_30789_33735 = state_30739__$1;
(statearr_30789_33735[(2)] = null);

(statearr_30789_33735[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (4))){
var inst_30583 = (state_30739[(10)]);
var inst_30583__$1 = (state_30739[(2)]);
var inst_30587 = (inst_30583__$1 == null);
var state_30739__$1 = (function (){var statearr_30796 = state_30739;
(statearr_30796[(10)] = inst_30583__$1);

return statearr_30796;
})();
if(cljs.core.truth_(inst_30587)){
var statearr_30797_33736 = state_30739__$1;
(statearr_30797_33736[(1)] = (5));

} else {
var statearr_30798_33737 = state_30739__$1;
(statearr_30798_33737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (15))){
var inst_30598 = (state_30739[(13)]);
var inst_30596 = (state_30739[(14)]);
var inst_30597 = (state_30739[(15)]);
var inst_30595 = (state_30739[(17)]);
var inst_30616 = (state_30739[(2)]);
var inst_30617 = (inst_30598 + (1));
var tmp30781 = inst_30596;
var tmp30782 = inst_30597;
var tmp30783 = inst_30595;
var inst_30595__$1 = tmp30783;
var inst_30596__$1 = tmp30781;
var inst_30597__$1 = tmp30782;
var inst_30598__$1 = inst_30617;
var state_30739__$1 = (function (){var statearr_30803 = state_30739;
(statearr_30803[(13)] = inst_30598__$1);

(statearr_30803[(14)] = inst_30596__$1);

(statearr_30803[(15)] = inst_30597__$1);

(statearr_30803[(17)] = inst_30595__$1);

(statearr_30803[(18)] = inst_30616);

return statearr_30803;
})();
var statearr_30804_33740 = state_30739__$1;
(statearr_30804_33740[(2)] = null);

(statearr_30804_33740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (21))){
var inst_30643 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
var statearr_30809_33741 = state_30739__$1;
(statearr_30809_33741[(2)] = inst_30643);

(statearr_30809_33741[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (31))){
var inst_30671 = (state_30739[(11)]);
var inst_30677 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30671);
var state_30739__$1 = state_30739;
var statearr_30814_33742 = state_30739__$1;
(statearr_30814_33742[(2)] = inst_30677);

(statearr_30814_33742[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (32))){
var inst_30663 = (state_30739[(19)]);
var inst_30661 = (state_30739[(20)]);
var inst_30662 = (state_30739[(9)]);
var inst_30664 = (state_30739[(12)]);
var inst_30679 = (state_30739[(2)]);
var inst_30681 = (inst_30664 + (1));
var tmp30806 = inst_30663;
var tmp30807 = inst_30661;
var tmp30808 = inst_30662;
var inst_30661__$1 = tmp30807;
var inst_30662__$1 = tmp30808;
var inst_30663__$1 = tmp30806;
var inst_30664__$1 = inst_30681;
var state_30739__$1 = (function (){var statearr_30820 = state_30739;
(statearr_30820[(19)] = inst_30663__$1);

(statearr_30820[(20)] = inst_30661__$1);

(statearr_30820[(9)] = inst_30662__$1);

(statearr_30820[(12)] = inst_30664__$1);

(statearr_30820[(21)] = inst_30679);

return statearr_30820;
})();
var statearr_30823_33753 = state_30739__$1;
(statearr_30823_33753[(2)] = null);

(statearr_30823_33753[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (40))){
var inst_30699 = (state_30739[(22)]);
var inst_30703 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30699);
var state_30739__$1 = state_30739;
var statearr_30825_33754 = state_30739__$1;
(statearr_30825_33754[(2)] = inst_30703);

(statearr_30825_33754[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (33))){
var inst_30689 = (state_30739[(23)]);
var inst_30692 = cljs.core.chunked_seq_QMARK_(inst_30689);
var state_30739__$1 = state_30739;
if(inst_30692){
var statearr_30829_33755 = state_30739__$1;
(statearr_30829_33755[(1)] = (36));

} else {
var statearr_30831_33759 = state_30739__$1;
(statearr_30831_33759[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (13))){
var inst_30610 = (state_30739[(24)]);
var inst_30613 = cljs.core.async.close_BANG_(inst_30610);
var state_30739__$1 = state_30739;
var statearr_30833_33760 = state_30739__$1;
(statearr_30833_33760[(2)] = inst_30613);

(statearr_30833_33760[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (22))){
var inst_30633 = (state_30739[(8)]);
var inst_30636 = cljs.core.async.close_BANG_(inst_30633);
var state_30739__$1 = state_30739;
var statearr_30841_33761 = state_30739__$1;
(statearr_30841_33761[(2)] = inst_30636);

(statearr_30841_33761[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (36))){
var inst_30689 = (state_30739[(23)]);
var inst_30694 = cljs.core.chunk_first(inst_30689);
var inst_30695 = cljs.core.chunk_rest(inst_30689);
var inst_30696 = cljs.core.count(inst_30694);
var inst_30661 = inst_30695;
var inst_30662 = inst_30694;
var inst_30663 = inst_30696;
var inst_30664 = (0);
var state_30739__$1 = (function (){var statearr_30846 = state_30739;
(statearr_30846[(19)] = inst_30663);

(statearr_30846[(20)] = inst_30661);

(statearr_30846[(9)] = inst_30662);

(statearr_30846[(12)] = inst_30664);

return statearr_30846;
})();
var statearr_30853_33763 = state_30739__$1;
(statearr_30853_33763[(2)] = null);

(statearr_30853_33763[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (41))){
var inst_30689 = (state_30739[(23)]);
var inst_30705 = (state_30739[(2)]);
var inst_30706 = cljs.core.next(inst_30689);
var inst_30661 = inst_30706;
var inst_30662 = null;
var inst_30663 = (0);
var inst_30664 = (0);
var state_30739__$1 = (function (){var statearr_30858 = state_30739;
(statearr_30858[(19)] = inst_30663);

(statearr_30858[(20)] = inst_30661);

(statearr_30858[(9)] = inst_30662);

(statearr_30858[(12)] = inst_30664);

(statearr_30858[(25)] = inst_30705);

return statearr_30858;
})();
var statearr_30868_33764 = state_30739__$1;
(statearr_30868_33764[(2)] = null);

(statearr_30868_33764[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (43))){
var state_30739__$1 = state_30739;
var statearr_30872_33765 = state_30739__$1;
(statearr_30872_33765[(2)] = null);

(statearr_30872_33765[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (29))){
var inst_30714 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
var statearr_30873_33766 = state_30739__$1;
(statearr_30873_33766[(2)] = inst_30714);

(statearr_30873_33766[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (44))){
var inst_30723 = (state_30739[(2)]);
var state_30739__$1 = (function (){var statearr_30875 = state_30739;
(statearr_30875[(26)] = inst_30723);

return statearr_30875;
})();
var statearr_30877_33773 = state_30739__$1;
(statearr_30877_33773[(2)] = null);

(statearr_30877_33773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (6))){
var inst_30653 = (state_30739[(27)]);
var inst_30652 = cljs.core.deref(cs);
var inst_30653__$1 = cljs.core.keys(inst_30652);
var inst_30654 = cljs.core.count(inst_30653__$1);
var inst_30655 = cljs.core.reset_BANG_(dctr,inst_30654);
var inst_30660 = cljs.core.seq(inst_30653__$1);
var inst_30661 = inst_30660;
var inst_30662 = null;
var inst_30663 = (0);
var inst_30664 = (0);
var state_30739__$1 = (function (){var statearr_30887 = state_30739;
(statearr_30887[(27)] = inst_30653__$1);

(statearr_30887[(19)] = inst_30663);

(statearr_30887[(20)] = inst_30661);

(statearr_30887[(9)] = inst_30662);

(statearr_30887[(12)] = inst_30664);

(statearr_30887[(28)] = inst_30655);

return statearr_30887;
})();
var statearr_30903_33775 = state_30739__$1;
(statearr_30903_33775[(2)] = null);

(statearr_30903_33775[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (28))){
var inst_30661 = (state_30739[(20)]);
var inst_30689 = (state_30739[(23)]);
var inst_30689__$1 = cljs.core.seq(inst_30661);
var state_30739__$1 = (function (){var statearr_30905 = state_30739;
(statearr_30905[(23)] = inst_30689__$1);

return statearr_30905;
})();
if(inst_30689__$1){
var statearr_30906_33777 = state_30739__$1;
(statearr_30906_33777[(1)] = (33));

} else {
var statearr_30908_33778 = state_30739__$1;
(statearr_30908_33778[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (25))){
var inst_30663 = (state_30739[(19)]);
var inst_30664 = (state_30739[(12)]);
var inst_30668 = (inst_30664 < inst_30663);
var inst_30669 = inst_30668;
var state_30739__$1 = state_30739;
if(cljs.core.truth_(inst_30669)){
var statearr_30917_33779 = state_30739__$1;
(statearr_30917_33779[(1)] = (27));

} else {
var statearr_30919_33780 = state_30739__$1;
(statearr_30919_33780[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (34))){
var state_30739__$1 = state_30739;
var statearr_30920_33782 = state_30739__$1;
(statearr_30920_33782[(2)] = null);

(statearr_30920_33782[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (17))){
var state_30739__$1 = state_30739;
var statearr_30922_33783 = state_30739__$1;
(statearr_30922_33783[(2)] = null);

(statearr_30922_33783[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (3))){
var inst_30731 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30739__$1,inst_30731);
} else {
if((state_val_30740 === (12))){
var inst_30648 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
var statearr_30928_33789 = state_30739__$1;
(statearr_30928_33789[(2)] = inst_30648);

(statearr_30928_33789[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (2))){
var state_30739__$1 = state_30739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30739__$1,(4),ch);
} else {
if((state_val_30740 === (23))){
var state_30739__$1 = state_30739;
var statearr_30930_33790 = state_30739__$1;
(statearr_30930_33790[(2)] = null);

(statearr_30930_33790[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (35))){
var inst_30712 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
var statearr_30934_33796 = state_30739__$1;
(statearr_30934_33796[(2)] = inst_30712);

(statearr_30934_33796[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (19))){
var inst_30620 = (state_30739[(7)]);
var inst_30624 = cljs.core.chunk_first(inst_30620);
var inst_30625 = cljs.core.chunk_rest(inst_30620);
var inst_30626 = cljs.core.count(inst_30624);
var inst_30595 = inst_30625;
var inst_30596 = inst_30624;
var inst_30597 = inst_30626;
var inst_30598 = (0);
var state_30739__$1 = (function (){var statearr_30939 = state_30739;
(statearr_30939[(13)] = inst_30598);

(statearr_30939[(14)] = inst_30596);

(statearr_30939[(15)] = inst_30597);

(statearr_30939[(17)] = inst_30595);

return statearr_30939;
})();
var statearr_30940_33798 = state_30739__$1;
(statearr_30940_33798[(2)] = null);

(statearr_30940_33798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (11))){
var inst_30595 = (state_30739[(17)]);
var inst_30620 = (state_30739[(7)]);
var inst_30620__$1 = cljs.core.seq(inst_30595);
var state_30739__$1 = (function (){var statearr_30944 = state_30739;
(statearr_30944[(7)] = inst_30620__$1);

return statearr_30944;
})();
if(inst_30620__$1){
var statearr_30945_33805 = state_30739__$1;
(statearr_30945_33805[(1)] = (16));

} else {
var statearr_30947_33806 = state_30739__$1;
(statearr_30947_33806[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (9))){
var inst_30650 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
var statearr_30952_33810 = state_30739__$1;
(statearr_30952_33810[(2)] = inst_30650);

(statearr_30952_33810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (5))){
var inst_30593 = cljs.core.deref(cs);
var inst_30594 = cljs.core.seq(inst_30593);
var inst_30595 = inst_30594;
var inst_30596 = null;
var inst_30597 = (0);
var inst_30598 = (0);
var state_30739__$1 = (function (){var statearr_30956 = state_30739;
(statearr_30956[(13)] = inst_30598);

(statearr_30956[(14)] = inst_30596);

(statearr_30956[(15)] = inst_30597);

(statearr_30956[(17)] = inst_30595);

return statearr_30956;
})();
var statearr_30958_33815 = state_30739__$1;
(statearr_30958_33815[(2)] = null);

(statearr_30958_33815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (14))){
var state_30739__$1 = state_30739;
var statearr_30961_33816 = state_30739__$1;
(statearr_30961_33816[(2)] = null);

(statearr_30961_33816[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (45))){
var inst_30720 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
var statearr_30970_33817 = state_30739__$1;
(statearr_30970_33817[(2)] = inst_30720);

(statearr_30970_33817[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (26))){
var inst_30653 = (state_30739[(27)]);
var inst_30716 = (state_30739[(2)]);
var inst_30717 = cljs.core.seq(inst_30653);
var state_30739__$1 = (function (){var statearr_30972 = state_30739;
(statearr_30972[(29)] = inst_30716);

return statearr_30972;
})();
if(inst_30717){
var statearr_30973_33821 = state_30739__$1;
(statearr_30973_33821[(1)] = (42));

} else {
var statearr_30975_33822 = state_30739__$1;
(statearr_30975_33822[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (16))){
var inst_30620 = (state_30739[(7)]);
var inst_30622 = cljs.core.chunked_seq_QMARK_(inst_30620);
var state_30739__$1 = state_30739;
if(inst_30622){
var statearr_30979_33823 = state_30739__$1;
(statearr_30979_33823[(1)] = (19));

} else {
var statearr_30980_33824 = state_30739__$1;
(statearr_30980_33824[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (38))){
var inst_30709 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
var statearr_30982_33825 = state_30739__$1;
(statearr_30982_33825[(2)] = inst_30709);

(statearr_30982_33825[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (30))){
var state_30739__$1 = state_30739;
var statearr_30984_33826 = state_30739__$1;
(statearr_30984_33826[(2)] = null);

(statearr_30984_33826[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (10))){
var inst_30598 = (state_30739[(13)]);
var inst_30596 = (state_30739[(14)]);
var inst_30609 = cljs.core._nth(inst_30596,inst_30598);
var inst_30610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30609,(0),null);
var inst_30611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30609,(1),null);
var state_30739__$1 = (function (){var statearr_30991 = state_30739;
(statearr_30991[(24)] = inst_30610);

return statearr_30991;
})();
if(cljs.core.truth_(inst_30611)){
var statearr_30999_33827 = state_30739__$1;
(statearr_30999_33827[(1)] = (13));

} else {
var statearr_31000_33828 = state_30739__$1;
(statearr_31000_33828[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (18))){
var inst_30646 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
var statearr_31004_33829 = state_30739__$1;
(statearr_31004_33829[(2)] = inst_30646);

(statearr_31004_33829[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (42))){
var state_30739__$1 = state_30739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30739__$1,(45),dchan);
} else {
if((state_val_30740 === (37))){
var inst_30583 = (state_30739[(10)]);
var inst_30699 = (state_30739[(22)]);
var inst_30689 = (state_30739[(23)]);
var inst_30699__$1 = cljs.core.first(inst_30689);
var inst_30700 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30699__$1,inst_30583,done);
var state_30739__$1 = (function (){var statearr_31006 = state_30739;
(statearr_31006[(22)] = inst_30699__$1);

return statearr_31006;
})();
if(cljs.core.truth_(inst_30700)){
var statearr_31009_33833 = state_30739__$1;
(statearr_31009_33833[(1)] = (39));

} else {
var statearr_31013_33834 = state_30739__$1;
(statearr_31013_33834[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (8))){
var inst_30598 = (state_30739[(13)]);
var inst_30597 = (state_30739[(15)]);
var inst_30600 = (inst_30598 < inst_30597);
var inst_30601 = inst_30600;
var state_30739__$1 = state_30739;
if(cljs.core.truth_(inst_30601)){
var statearr_31014_33835 = state_30739__$1;
(statearr_31014_33835[(1)] = (10));

} else {
var statearr_31016_33836 = state_30739__$1;
(statearr_31016_33836[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__28599__auto__ = null;
var cljs$core$async$mult_$_state_machine__28599__auto____0 = (function (){
var statearr_31020 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31020[(0)] = cljs$core$async$mult_$_state_machine__28599__auto__);

(statearr_31020[(1)] = (1));

return statearr_31020;
});
var cljs$core$async$mult_$_state_machine__28599__auto____1 = (function (state_30739){
while(true){
var ret_value__28600__auto__ = (function (){try{while(true){
var result__28601__auto__ = switch__28598__auto__(state_30739);
if(cljs.core.keyword_identical_QMARK_(result__28601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28601__auto__;
}
break;
}
}catch (e31022){var ex__28602__auto__ = e31022;
var statearr_31023_33837 = state_30739;
(statearr_31023_33837[(2)] = ex__28602__auto__);


if(cljs.core.seq((state_30739[(4)]))){
var statearr_31024_33839 = state_30739;
(statearr_31024_33839[(1)] = cljs.core.first((state_30739[(4)])));

} else {
throw ex__28602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33840 = state_30739;
state_30739 = G__33840;
continue;
} else {
return ret_value__28600__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28599__auto__ = function(state_30739){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28599__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28599__auto____1.call(this,state_30739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28599__auto____0;
cljs$core$async$mult_$_state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28599__auto____1;
return cljs$core$async$mult_$_state_machine__28599__auto__;
})()
})();
var state__29217__auto__ = (function (){var statearr_31030 = f__29216__auto__();
(statearr_31030[(6)] = c__29215__auto___33721);

return statearr_31030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29217__auto__);
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
var G__31046 = arguments.length;
switch (G__31046) {
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
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33842 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33842(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33848 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33848(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33850 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33850(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33854 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33854(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33858 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33858(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___33859 = arguments.length;
var i__4865__auto___33860 = (0);
while(true){
if((i__4865__auto___33860 < len__4864__auto___33859)){
args__4870__auto__.push((arguments[i__4865__auto___33860]));

var G__33862 = (i__4865__auto___33860 + (1));
i__4865__auto___33860 = G__33862;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31133){
var map__31134 = p__31133;
var map__31134__$1 = cljs.core.__destructure_map(map__31134);
var opts = map__31134__$1;
var statearr_31135_33869 = state;
(statearr_31135_33869[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31141_33870 = state;
(statearr_31141_33870[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_31149_33872 = state;
(statearr_31149_33872[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31122){
var G__31125 = cljs.core.first(seq31122);
var seq31122__$1 = cljs.core.next(seq31122);
var G__31126 = cljs.core.first(seq31122__$1);
var seq31122__$2 = cljs.core.next(seq31122__$1);
var G__31127 = cljs.core.first(seq31122__$2);
var seq31122__$3 = cljs.core.next(seq31122__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31125,G__31126,G__31127,seq31122__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31190 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31190 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31191){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31191 = meta31191;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31192,meta31191__$1){
var self__ = this;
var _31192__$1 = this;
return (new cljs.core.async.t_cljs$core$async31190(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31191__$1));
}));

(cljs.core.async.t_cljs$core$async31190.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31192){
var self__ = this;
var _31192__$1 = this;
return self__.meta31191;
}));

(cljs.core.async.t_cljs$core$async31190.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31190.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31190.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31190.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31190.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31190.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31190.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31190.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31190.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31191","meta31191",-317361458,null)], null);
}));

(cljs.core.async.t_cljs$core$async31190.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31190.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31190");

(cljs.core.async.t_cljs$core$async31190.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31190");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31190.
 */
cljs.core.async.__GT_t_cljs$core$async31190 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31190(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31191){
return (new cljs.core.async.t_cljs$core$async31190(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31191));
});

}

return (new cljs.core.async.t_cljs$core$async31190(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29215__auto___33895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29216__auto__ = (function (){var switch__28598__auto__ = (function (state_31305){
var state_val_31306 = (state_31305[(1)]);
if((state_val_31306 === (7))){
var inst_31260 = (state_31305[(2)]);
var state_31305__$1 = state_31305;
if(cljs.core.truth_(inst_31260)){
var statearr_31317_33896 = state_31305__$1;
(statearr_31317_33896[(1)] = (8));

} else {
var statearr_31318_33897 = state_31305__$1;
(statearr_31318_33897[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (20))){
var inst_31253 = (state_31305[(7)]);
var state_31305__$1 = state_31305;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31305__$1,(23),out,inst_31253);
} else {
if((state_val_31306 === (1))){
var inst_31233 = calc_state();
var inst_31234 = cljs.core.__destructure_map(inst_31233);
var inst_31235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31234,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31234,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31234,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31238 = inst_31233;
var state_31305__$1 = (function (){var statearr_31323 = state_31305;
(statearr_31323[(8)] = inst_31236);

(statearr_31323[(9)] = inst_31235);

(statearr_31323[(10)] = inst_31238);

(statearr_31323[(11)] = inst_31237);

return statearr_31323;
})();
var statearr_31324_33903 = state_31305__$1;
(statearr_31324_33903[(2)] = null);

(statearr_31324_33903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (24))){
var inst_31241 = (state_31305[(12)]);
var inst_31238 = inst_31241;
var state_31305__$1 = (function (){var statearr_31326 = state_31305;
(statearr_31326[(10)] = inst_31238);

return statearr_31326;
})();
var statearr_31330_33904 = state_31305__$1;
(statearr_31330_33904[(2)] = null);

(statearr_31330_33904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (4))){
var inst_31255 = (state_31305[(13)]);
var inst_31253 = (state_31305[(7)]);
var inst_31252 = (state_31305[(2)]);
var inst_31253__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31252,(0),null);
var inst_31254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31252,(1),null);
var inst_31255__$1 = (inst_31253__$1 == null);
var state_31305__$1 = (function (){var statearr_31332 = state_31305;
(statearr_31332[(13)] = inst_31255__$1);

(statearr_31332[(14)] = inst_31254);

(statearr_31332[(7)] = inst_31253__$1);

return statearr_31332;
})();
if(cljs.core.truth_(inst_31255__$1)){
var statearr_31334_33908 = state_31305__$1;
(statearr_31334_33908[(1)] = (5));

} else {
var statearr_31335_33909 = state_31305__$1;
(statearr_31335_33909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (15))){
var inst_31274 = (state_31305[(15)]);
var inst_31242 = (state_31305[(16)]);
var inst_31274__$1 = cljs.core.empty_QMARK_(inst_31242);
var state_31305__$1 = (function (){var statearr_31342 = state_31305;
(statearr_31342[(15)] = inst_31274__$1);

return statearr_31342;
})();
if(inst_31274__$1){
var statearr_31344_33910 = state_31305__$1;
(statearr_31344_33910[(1)] = (17));

} else {
var statearr_31345_33911 = state_31305__$1;
(statearr_31345_33911[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (21))){
var inst_31241 = (state_31305[(12)]);
var inst_31238 = inst_31241;
var state_31305__$1 = (function (){var statearr_31347 = state_31305;
(statearr_31347[(10)] = inst_31238);

return statearr_31347;
})();
var statearr_31349_33912 = state_31305__$1;
(statearr_31349_33912[(2)] = null);

(statearr_31349_33912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (13))){
var inst_31267 = (state_31305[(2)]);
var inst_31268 = calc_state();
var inst_31238 = inst_31268;
var state_31305__$1 = (function (){var statearr_31351 = state_31305;
(statearr_31351[(17)] = inst_31267);

(statearr_31351[(10)] = inst_31238);

return statearr_31351;
})();
var statearr_31352_33917 = state_31305__$1;
(statearr_31352_33917[(2)] = null);

(statearr_31352_33917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (22))){
var inst_31299 = (state_31305[(2)]);
var state_31305__$1 = state_31305;
var statearr_31355_33921 = state_31305__$1;
(statearr_31355_33921[(2)] = inst_31299);

(statearr_31355_33921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (6))){
var inst_31254 = (state_31305[(14)]);
var inst_31258 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31254,change);
var state_31305__$1 = state_31305;
var statearr_31356_33928 = state_31305__$1;
(statearr_31356_33928[(2)] = inst_31258);

(statearr_31356_33928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (25))){
var state_31305__$1 = state_31305;
var statearr_31359_33934 = state_31305__$1;
(statearr_31359_33934[(2)] = null);

(statearr_31359_33934[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (17))){
var inst_31243 = (state_31305[(18)]);
var inst_31254 = (state_31305[(14)]);
var inst_31276 = (inst_31243.cljs$core$IFn$_invoke$arity$1 ? inst_31243.cljs$core$IFn$_invoke$arity$1(inst_31254) : inst_31243.call(null,inst_31254));
var inst_31277 = cljs.core.not(inst_31276);
var state_31305__$1 = state_31305;
var statearr_31368_33943 = state_31305__$1;
(statearr_31368_33943[(2)] = inst_31277);

(statearr_31368_33943[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (3))){
var inst_31303 = (state_31305[(2)]);
var state_31305__$1 = state_31305;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31305__$1,inst_31303);
} else {
if((state_val_31306 === (12))){
var state_31305__$1 = state_31305;
var statearr_31376_33949 = state_31305__$1;
(statearr_31376_33949[(2)] = null);

(statearr_31376_33949[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (2))){
var inst_31241 = (state_31305[(12)]);
var inst_31238 = (state_31305[(10)]);
var inst_31241__$1 = cljs.core.__destructure_map(inst_31238);
var inst_31242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31241__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31241__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31241__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31305__$1 = (function (){var statearr_31384 = state_31305;
(statearr_31384[(12)] = inst_31241__$1);

(statearr_31384[(18)] = inst_31243);

(statearr_31384[(16)] = inst_31242);

return statearr_31384;
})();
return cljs.core.async.ioc_alts_BANG_(state_31305__$1,(4),inst_31244);
} else {
if((state_val_31306 === (23))){
var inst_31290 = (state_31305[(2)]);
var state_31305__$1 = state_31305;
if(cljs.core.truth_(inst_31290)){
var statearr_31386_33970 = state_31305__$1;
(statearr_31386_33970[(1)] = (24));

} else {
var statearr_31387_33971 = state_31305__$1;
(statearr_31387_33971[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (19))){
var inst_31280 = (state_31305[(2)]);
var state_31305__$1 = state_31305;
var statearr_31391_33972 = state_31305__$1;
(statearr_31391_33972[(2)] = inst_31280);

(statearr_31391_33972[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (11))){
var inst_31254 = (state_31305[(14)]);
var inst_31264 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31254);
var state_31305__$1 = state_31305;
var statearr_31393_33974 = state_31305__$1;
(statearr_31393_33974[(2)] = inst_31264);

(statearr_31393_33974[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (9))){
var inst_31271 = (state_31305[(19)]);
var inst_31254 = (state_31305[(14)]);
var inst_31242 = (state_31305[(16)]);
var inst_31271__$1 = (inst_31242.cljs$core$IFn$_invoke$arity$1 ? inst_31242.cljs$core$IFn$_invoke$arity$1(inst_31254) : inst_31242.call(null,inst_31254));
var state_31305__$1 = (function (){var statearr_31397 = state_31305;
(statearr_31397[(19)] = inst_31271__$1);

return statearr_31397;
})();
if(cljs.core.truth_(inst_31271__$1)){
var statearr_31405_33976 = state_31305__$1;
(statearr_31405_33976[(1)] = (14));

} else {
var statearr_31406_33979 = state_31305__$1;
(statearr_31406_33979[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (5))){
var inst_31255 = (state_31305[(13)]);
var state_31305__$1 = state_31305;
var statearr_31409_33982 = state_31305__$1;
(statearr_31409_33982[(2)] = inst_31255);

(statearr_31409_33982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (14))){
var inst_31271 = (state_31305[(19)]);
var state_31305__$1 = state_31305;
var statearr_31410_33985 = state_31305__$1;
(statearr_31410_33985[(2)] = inst_31271);

(statearr_31410_33985[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (26))){
var inst_31295 = (state_31305[(2)]);
var state_31305__$1 = state_31305;
var statearr_31414_33987 = state_31305__$1;
(statearr_31414_33987[(2)] = inst_31295);

(statearr_31414_33987[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (16))){
var inst_31282 = (state_31305[(2)]);
var state_31305__$1 = state_31305;
if(cljs.core.truth_(inst_31282)){
var statearr_31415_33988 = state_31305__$1;
(statearr_31415_33988[(1)] = (20));

} else {
var statearr_31416_33989 = state_31305__$1;
(statearr_31416_33989[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (10))){
var inst_31301 = (state_31305[(2)]);
var state_31305__$1 = state_31305;
var statearr_31418_33990 = state_31305__$1;
(statearr_31418_33990[(2)] = inst_31301);

(statearr_31418_33990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (18))){
var inst_31274 = (state_31305[(15)]);
var state_31305__$1 = state_31305;
var statearr_31420_33991 = state_31305__$1;
(statearr_31420_33991[(2)] = inst_31274);

(statearr_31420_33991[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (8))){
var inst_31253 = (state_31305[(7)]);
var inst_31262 = (inst_31253 == null);
var state_31305__$1 = state_31305;
if(cljs.core.truth_(inst_31262)){
var statearr_31425_33992 = state_31305__$1;
(statearr_31425_33992[(1)] = (11));

} else {
var statearr_31426_33993 = state_31305__$1;
(statearr_31426_33993[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__28599__auto__ = null;
var cljs$core$async$mix_$_state_machine__28599__auto____0 = (function (){
var statearr_31427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31427[(0)] = cljs$core$async$mix_$_state_machine__28599__auto__);

(statearr_31427[(1)] = (1));

return statearr_31427;
});
var cljs$core$async$mix_$_state_machine__28599__auto____1 = (function (state_31305){
while(true){
var ret_value__28600__auto__ = (function (){try{while(true){
var result__28601__auto__ = switch__28598__auto__(state_31305);
if(cljs.core.keyword_identical_QMARK_(result__28601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28601__auto__;
}
break;
}
}catch (e31429){var ex__28602__auto__ = e31429;
var statearr_31430_34003 = state_31305;
(statearr_31430_34003[(2)] = ex__28602__auto__);


if(cljs.core.seq((state_31305[(4)]))){
var statearr_31431_34005 = state_31305;
(statearr_31431_34005[(1)] = cljs.core.first((state_31305[(4)])));

} else {
throw ex__28602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34006 = state_31305;
state_31305 = G__34006;
continue;
} else {
return ret_value__28600__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28599__auto__ = function(state_31305){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28599__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28599__auto____1.call(this,state_31305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28599__auto____0;
cljs$core$async$mix_$_state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28599__auto____1;
return cljs$core$async$mix_$_state_machine__28599__auto__;
})()
})();
var state__29217__auto__ = (function (){var statearr_31432 = f__29216__auto__();
(statearr_31432[(6)] = c__29215__auto___33895);

return statearr_31432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29217__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34025 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34025(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34032 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34032(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34038 = (function() {
var G__34042 = null;
var G__34042__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34042__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34042 = function(p,v){
switch(arguments.length){
case 1:
return G__34042__1.call(this,p);
case 2:
return G__34042__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34042.cljs$core$IFn$_invoke$arity$1 = G__34042__1;
G__34042.cljs$core$IFn$_invoke$arity$2 = G__34042__2;
return G__34042;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31468 = arguments.length;
switch (G__31468) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34038(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34038(p,v);
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
var G__31489 = arguments.length;
switch (G__31489) {
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
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31472_SHARP_){
if(cljs.core.truth_((p1__31472_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31472_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31472_SHARP_.call(null,topic)))){
return p1__31472_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31472_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31507 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31507 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31508){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31508 = meta31508;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31509,meta31508__$1){
var self__ = this;
var _31509__$1 = this;
return (new cljs.core.async.t_cljs$core$async31507(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31508__$1));
}));

(cljs.core.async.t_cljs$core$async31507.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31509){
var self__ = this;
var _31509__$1 = this;
return self__.meta31508;
}));

(cljs.core.async.t_cljs$core$async31507.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31507.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31507.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31507.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31507.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31507.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31507.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31507.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31508","meta31508",2037933959,null)], null);
}));

(cljs.core.async.t_cljs$core$async31507.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31507.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31507");

(cljs.core.async.t_cljs$core$async31507.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31507");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31507.
 */
cljs.core.async.__GT_t_cljs$core$async31507 = (function cljs$core$async$__GT_t_cljs$core$async31507(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31508){
return (new cljs.core.async.t_cljs$core$async31507(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31508));
});

}

return (new cljs.core.async.t_cljs$core$async31507(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29215__auto___34083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29216__auto__ = (function (){var switch__28598__auto__ = (function (state_31605){
var state_val_31606 = (state_31605[(1)]);
if((state_val_31606 === (7))){
var inst_31601 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
var statearr_31608_34084 = state_31605__$1;
(statearr_31608_34084[(2)] = inst_31601);

(statearr_31608_34084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (20))){
var state_31605__$1 = state_31605;
var statearr_31609_34085 = state_31605__$1;
(statearr_31609_34085[(2)] = null);

(statearr_31609_34085[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (1))){
var state_31605__$1 = state_31605;
var statearr_31611_34087 = state_31605__$1;
(statearr_31611_34087[(2)] = null);

(statearr_31611_34087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (24))){
var inst_31584 = (state_31605[(7)]);
var inst_31593 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31584);
var state_31605__$1 = state_31605;
var statearr_31619_34090 = state_31605__$1;
(statearr_31619_34090[(2)] = inst_31593);

(statearr_31619_34090[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (4))){
var inst_31531 = (state_31605[(8)]);
var inst_31531__$1 = (state_31605[(2)]);
var inst_31532 = (inst_31531__$1 == null);
var state_31605__$1 = (function (){var statearr_31620 = state_31605;
(statearr_31620[(8)] = inst_31531__$1);

return statearr_31620;
})();
if(cljs.core.truth_(inst_31532)){
var statearr_31621_34095 = state_31605__$1;
(statearr_31621_34095[(1)] = (5));

} else {
var statearr_31622_34096 = state_31605__$1;
(statearr_31622_34096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (15))){
var inst_31578 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
var statearr_31628_34097 = state_31605__$1;
(statearr_31628_34097[(2)] = inst_31578);

(statearr_31628_34097[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (21))){
var inst_31598 = (state_31605[(2)]);
var state_31605__$1 = (function (){var statearr_31629 = state_31605;
(statearr_31629[(9)] = inst_31598);

return statearr_31629;
})();
var statearr_31630_34099 = state_31605__$1;
(statearr_31630_34099[(2)] = null);

(statearr_31630_34099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (13))){
var inst_31559 = (state_31605[(10)]);
var inst_31562 = cljs.core.chunked_seq_QMARK_(inst_31559);
var state_31605__$1 = state_31605;
if(inst_31562){
var statearr_31635_34100 = state_31605__$1;
(statearr_31635_34100[(1)] = (16));

} else {
var statearr_31636_34101 = state_31605__$1;
(statearr_31636_34101[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (22))){
var inst_31590 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
if(cljs.core.truth_(inst_31590)){
var statearr_31637_34110 = state_31605__$1;
(statearr_31637_34110[(1)] = (23));

} else {
var statearr_31638_34111 = state_31605__$1;
(statearr_31638_34111[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (6))){
var inst_31586 = (state_31605[(11)]);
var inst_31584 = (state_31605[(7)]);
var inst_31531 = (state_31605[(8)]);
var inst_31584__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31531) : topic_fn.call(null,inst_31531));
var inst_31585 = cljs.core.deref(mults);
var inst_31586__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31585,inst_31584__$1);
var state_31605__$1 = (function (){var statearr_31640 = state_31605;
(statearr_31640[(11)] = inst_31586__$1);

(statearr_31640[(7)] = inst_31584__$1);

return statearr_31640;
})();
if(cljs.core.truth_(inst_31586__$1)){
var statearr_31641_34112 = state_31605__$1;
(statearr_31641_34112[(1)] = (19));

} else {
var statearr_31642_34113 = state_31605__$1;
(statearr_31642_34113[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (25))){
var inst_31595 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
var statearr_31647_34114 = state_31605__$1;
(statearr_31647_34114[(2)] = inst_31595);

(statearr_31647_34114[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (17))){
var inst_31559 = (state_31605[(10)]);
var inst_31569 = cljs.core.first(inst_31559);
var inst_31570 = cljs.core.async.muxch_STAR_(inst_31569);
var inst_31571 = cljs.core.async.close_BANG_(inst_31570);
var inst_31572 = cljs.core.next(inst_31559);
var inst_31545 = inst_31572;
var inst_31546 = null;
var inst_31547 = (0);
var inst_31548 = (0);
var state_31605__$1 = (function (){var statearr_31649 = state_31605;
(statearr_31649[(12)] = inst_31545);

(statearr_31649[(13)] = inst_31546);

(statearr_31649[(14)] = inst_31547);

(statearr_31649[(15)] = inst_31548);

(statearr_31649[(16)] = inst_31571);

return statearr_31649;
})();
var statearr_31651_34117 = state_31605__$1;
(statearr_31651_34117[(2)] = null);

(statearr_31651_34117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (3))){
var inst_31603 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31605__$1,inst_31603);
} else {
if((state_val_31606 === (12))){
var inst_31580 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
var statearr_31659_34118 = state_31605__$1;
(statearr_31659_34118[(2)] = inst_31580);

(statearr_31659_34118[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (2))){
var state_31605__$1 = state_31605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31605__$1,(4),ch);
} else {
if((state_val_31606 === (23))){
var state_31605__$1 = state_31605;
var statearr_31660_34120 = state_31605__$1;
(statearr_31660_34120[(2)] = null);

(statearr_31660_34120[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (19))){
var inst_31586 = (state_31605[(11)]);
var inst_31531 = (state_31605[(8)]);
var inst_31588 = cljs.core.async.muxch_STAR_(inst_31586);
var state_31605__$1 = state_31605;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31605__$1,(22),inst_31588,inst_31531);
} else {
if((state_val_31606 === (11))){
var inst_31545 = (state_31605[(12)]);
var inst_31559 = (state_31605[(10)]);
var inst_31559__$1 = cljs.core.seq(inst_31545);
var state_31605__$1 = (function (){var statearr_31667 = state_31605;
(statearr_31667[(10)] = inst_31559__$1);

return statearr_31667;
})();
if(inst_31559__$1){
var statearr_31669_34126 = state_31605__$1;
(statearr_31669_34126[(1)] = (13));

} else {
var statearr_31670_34127 = state_31605__$1;
(statearr_31670_34127[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (9))){
var inst_31582 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
var statearr_31673_34128 = state_31605__$1;
(statearr_31673_34128[(2)] = inst_31582);

(statearr_31673_34128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (5))){
var inst_31542 = cljs.core.deref(mults);
var inst_31543 = cljs.core.vals(inst_31542);
var inst_31544 = cljs.core.seq(inst_31543);
var inst_31545 = inst_31544;
var inst_31546 = null;
var inst_31547 = (0);
var inst_31548 = (0);
var state_31605__$1 = (function (){var statearr_31676 = state_31605;
(statearr_31676[(12)] = inst_31545);

(statearr_31676[(13)] = inst_31546);

(statearr_31676[(14)] = inst_31547);

(statearr_31676[(15)] = inst_31548);

return statearr_31676;
})();
var statearr_31679_34130 = state_31605__$1;
(statearr_31679_34130[(2)] = null);

(statearr_31679_34130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (14))){
var state_31605__$1 = state_31605;
var statearr_31683_34133 = state_31605__$1;
(statearr_31683_34133[(2)] = null);

(statearr_31683_34133[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (16))){
var inst_31559 = (state_31605[(10)]);
var inst_31564 = cljs.core.chunk_first(inst_31559);
var inst_31565 = cljs.core.chunk_rest(inst_31559);
var inst_31566 = cljs.core.count(inst_31564);
var inst_31545 = inst_31565;
var inst_31546 = inst_31564;
var inst_31547 = inst_31566;
var inst_31548 = (0);
var state_31605__$1 = (function (){var statearr_31691 = state_31605;
(statearr_31691[(12)] = inst_31545);

(statearr_31691[(13)] = inst_31546);

(statearr_31691[(14)] = inst_31547);

(statearr_31691[(15)] = inst_31548);

return statearr_31691;
})();
var statearr_31698_34136 = state_31605__$1;
(statearr_31698_34136[(2)] = null);

(statearr_31698_34136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (10))){
var inst_31545 = (state_31605[(12)]);
var inst_31546 = (state_31605[(13)]);
var inst_31547 = (state_31605[(14)]);
var inst_31548 = (state_31605[(15)]);
var inst_31553 = cljs.core._nth(inst_31546,inst_31548);
var inst_31554 = cljs.core.async.muxch_STAR_(inst_31553);
var inst_31555 = cljs.core.async.close_BANG_(inst_31554);
var inst_31556 = (inst_31548 + (1));
var tmp31680 = inst_31545;
var tmp31681 = inst_31546;
var tmp31682 = inst_31547;
var inst_31545__$1 = tmp31680;
var inst_31546__$1 = tmp31681;
var inst_31547__$1 = tmp31682;
var inst_31548__$1 = inst_31556;
var state_31605__$1 = (function (){var statearr_31709 = state_31605;
(statearr_31709[(17)] = inst_31555);

(statearr_31709[(12)] = inst_31545__$1);

(statearr_31709[(13)] = inst_31546__$1);

(statearr_31709[(14)] = inst_31547__$1);

(statearr_31709[(15)] = inst_31548__$1);

return statearr_31709;
})();
var statearr_31716_34141 = state_31605__$1;
(statearr_31716_34141[(2)] = null);

(statearr_31716_34141[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (18))){
var inst_31575 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
var statearr_31717_34142 = state_31605__$1;
(statearr_31717_34142[(2)] = inst_31575);

(statearr_31717_34142[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (8))){
var inst_31547 = (state_31605[(14)]);
var inst_31548 = (state_31605[(15)]);
var inst_31550 = (inst_31548 < inst_31547);
var inst_31551 = inst_31550;
var state_31605__$1 = state_31605;
if(cljs.core.truth_(inst_31551)){
var statearr_31719_34147 = state_31605__$1;
(statearr_31719_34147[(1)] = (10));

} else {
var statearr_31720_34152 = state_31605__$1;
(statearr_31720_34152[(1)] = (11));

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
var cljs$core$async$state_machine__28599__auto__ = null;
var cljs$core$async$state_machine__28599__auto____0 = (function (){
var statearr_31728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31728[(0)] = cljs$core$async$state_machine__28599__auto__);

(statearr_31728[(1)] = (1));

return statearr_31728;
});
var cljs$core$async$state_machine__28599__auto____1 = (function (state_31605){
while(true){
var ret_value__28600__auto__ = (function (){try{while(true){
var result__28601__auto__ = switch__28598__auto__(state_31605);
if(cljs.core.keyword_identical_QMARK_(result__28601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28601__auto__;
}
break;
}
}catch (e31732){var ex__28602__auto__ = e31732;
var statearr_31733_34163 = state_31605;
(statearr_31733_34163[(2)] = ex__28602__auto__);


if(cljs.core.seq((state_31605[(4)]))){
var statearr_31738_34164 = state_31605;
(statearr_31738_34164[(1)] = cljs.core.first((state_31605[(4)])));

} else {
throw ex__28602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34169 = state_31605;
state_31605 = G__34169;
continue;
} else {
return ret_value__28600__auto__;
}
break;
}
});
cljs$core$async$state_machine__28599__auto__ = function(state_31605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28599__auto____1.call(this,state_31605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28599__auto____0;
cljs$core$async$state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28599__auto____1;
return cljs$core$async$state_machine__28599__auto__;
})()
})();
var state__29217__auto__ = (function (){var statearr_31742 = f__29216__auto__();
(statearr_31742[(6)] = c__29215__auto___34083);

return statearr_31742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29217__auto__);
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
var G__31744 = arguments.length;
switch (G__31744) {
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
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31760 = arguments.length;
switch (G__31760) {
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
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
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
var G__31766 = arguments.length;
switch (G__31766) {
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29215__auto___34243 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29216__auto__ = (function (){var switch__28598__auto__ = (function (state_31821){
var state_val_31823 = (state_31821[(1)]);
if((state_val_31823 === (7))){
var state_31821__$1 = state_31821;
var statearr_31826_34244 = state_31821__$1;
(statearr_31826_34244[(2)] = null);

(statearr_31826_34244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31823 === (1))){
var state_31821__$1 = state_31821;
var statearr_31827_34249 = state_31821__$1;
(statearr_31827_34249[(2)] = null);

(statearr_31827_34249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31823 === (4))){
var inst_31778 = (state_31821[(7)]);
var inst_31777 = (state_31821[(8)]);
var inst_31781 = (inst_31778 < inst_31777);
var state_31821__$1 = state_31821;
if(cljs.core.truth_(inst_31781)){
var statearr_31829_34261 = state_31821__$1;
(statearr_31829_34261[(1)] = (6));

} else {
var statearr_31830_34262 = state_31821__$1;
(statearr_31830_34262[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31823 === (15))){
var inst_31805 = (state_31821[(9)]);
var inst_31810 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31805);
var state_31821__$1 = state_31821;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31821__$1,(17),out,inst_31810);
} else {
if((state_val_31823 === (13))){
var inst_31805 = (state_31821[(9)]);
var inst_31805__$1 = (state_31821[(2)]);
var inst_31806 = cljs.core.some(cljs.core.nil_QMARK_,inst_31805__$1);
var state_31821__$1 = (function (){var statearr_31832 = state_31821;
(statearr_31832[(9)] = inst_31805__$1);

return statearr_31832;
})();
if(cljs.core.truth_(inst_31806)){
var statearr_31833_34275 = state_31821__$1;
(statearr_31833_34275[(1)] = (14));

} else {
var statearr_31838_34277 = state_31821__$1;
(statearr_31838_34277[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31823 === (6))){
var state_31821__$1 = state_31821;
var statearr_31839_34286 = state_31821__$1;
(statearr_31839_34286[(2)] = null);

(statearr_31839_34286[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31823 === (17))){
var inst_31812 = (state_31821[(2)]);
var state_31821__$1 = (function (){var statearr_31849 = state_31821;
(statearr_31849[(10)] = inst_31812);

return statearr_31849;
})();
var statearr_31853_34295 = state_31821__$1;
(statearr_31853_34295[(2)] = null);

(statearr_31853_34295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31823 === (3))){
var inst_31817 = (state_31821[(2)]);
var state_31821__$1 = state_31821;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31821__$1,inst_31817);
} else {
if((state_val_31823 === (12))){
var _ = (function (){var statearr_31855 = state_31821;
(statearr_31855[(4)] = cljs.core.rest((state_31821[(4)])));

return statearr_31855;
})();
var state_31821__$1 = state_31821;
var ex31848 = (state_31821__$1[(2)]);
var statearr_31860_34309 = state_31821__$1;
(statearr_31860_34309[(5)] = ex31848);


if((ex31848 instanceof Object)){
var statearr_31861_34310 = state_31821__$1;
(statearr_31861_34310[(1)] = (11));

(statearr_31861_34310[(5)] = null);

} else {
throw ex31848;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31823 === (2))){
var inst_31776 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31777 = cnt;
var inst_31778 = (0);
var state_31821__$1 = (function (){var statearr_31866 = state_31821;
(statearr_31866[(7)] = inst_31778);

(statearr_31866[(8)] = inst_31777);

(statearr_31866[(11)] = inst_31776);

return statearr_31866;
})();
var statearr_31870_34315 = state_31821__$1;
(statearr_31870_34315[(2)] = null);

(statearr_31870_34315[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31823 === (11))){
var inst_31784 = (state_31821[(2)]);
var inst_31785 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31821__$1 = (function (){var statearr_31872 = state_31821;
(statearr_31872[(12)] = inst_31784);

return statearr_31872;
})();
var statearr_31873_34325 = state_31821__$1;
(statearr_31873_34325[(2)] = inst_31785);

(statearr_31873_34325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31823 === (9))){
var inst_31778 = (state_31821[(7)]);
var _ = (function (){var statearr_31878 = state_31821;
(statearr_31878[(4)] = cljs.core.cons((12),(state_31821[(4)])));

return statearr_31878;
})();
var inst_31791 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31778) : chs__$1.call(null,inst_31778));
var inst_31792 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31778) : done.call(null,inst_31778));
var inst_31793 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31791,inst_31792);
var ___$1 = (function (){var statearr_31879 = state_31821;
(statearr_31879[(4)] = cljs.core.rest((state_31821[(4)])));

return statearr_31879;
})();
var state_31821__$1 = state_31821;
var statearr_31880_34327 = state_31821__$1;
(statearr_31880_34327[(2)] = inst_31793);

(statearr_31880_34327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31823 === (5))){
var inst_31803 = (state_31821[(2)]);
var state_31821__$1 = (function (){var statearr_31881 = state_31821;
(statearr_31881[(13)] = inst_31803);

return statearr_31881;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31821__$1,(13),dchan);
} else {
if((state_val_31823 === (14))){
var inst_31808 = cljs.core.async.close_BANG_(out);
var state_31821__$1 = state_31821;
var statearr_31882_34335 = state_31821__$1;
(statearr_31882_34335[(2)] = inst_31808);

(statearr_31882_34335[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31823 === (16))){
var inst_31815 = (state_31821[(2)]);
var state_31821__$1 = state_31821;
var statearr_31887_34336 = state_31821__$1;
(statearr_31887_34336[(2)] = inst_31815);

(statearr_31887_34336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31823 === (10))){
var inst_31778 = (state_31821[(7)]);
var inst_31796 = (state_31821[(2)]);
var inst_31797 = (inst_31778 + (1));
var inst_31778__$1 = inst_31797;
var state_31821__$1 = (function (){var statearr_31889 = state_31821;
(statearr_31889[(7)] = inst_31778__$1);

(statearr_31889[(14)] = inst_31796);

return statearr_31889;
})();
var statearr_31890_34339 = state_31821__$1;
(statearr_31890_34339[(2)] = null);

(statearr_31890_34339[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31823 === (8))){
var inst_31801 = (state_31821[(2)]);
var state_31821__$1 = state_31821;
var statearr_31892_34341 = state_31821__$1;
(statearr_31892_34341[(2)] = inst_31801);

(statearr_31892_34341[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__28599__auto__ = null;
var cljs$core$async$state_machine__28599__auto____0 = (function (){
var statearr_31895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31895[(0)] = cljs$core$async$state_machine__28599__auto__);

(statearr_31895[(1)] = (1));

return statearr_31895;
});
var cljs$core$async$state_machine__28599__auto____1 = (function (state_31821){
while(true){
var ret_value__28600__auto__ = (function (){try{while(true){
var result__28601__auto__ = switch__28598__auto__(state_31821);
if(cljs.core.keyword_identical_QMARK_(result__28601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28601__auto__;
}
break;
}
}catch (e31896){var ex__28602__auto__ = e31896;
var statearr_31897_34343 = state_31821;
(statearr_31897_34343[(2)] = ex__28602__auto__);


if(cljs.core.seq((state_31821[(4)]))){
var statearr_31900_34344 = state_31821;
(statearr_31900_34344[(1)] = cljs.core.first((state_31821[(4)])));

} else {
throw ex__28602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34345 = state_31821;
state_31821 = G__34345;
continue;
} else {
return ret_value__28600__auto__;
}
break;
}
});
cljs$core$async$state_machine__28599__auto__ = function(state_31821){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28599__auto____1.call(this,state_31821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28599__auto____0;
cljs$core$async$state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28599__auto____1;
return cljs$core$async$state_machine__28599__auto__;
})()
})();
var state__29217__auto__ = (function (){var statearr_31903 = f__29216__auto__();
(statearr_31903[(6)] = c__29215__auto___34243);

return statearr_31903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29217__auto__);
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
var G__31911 = arguments.length;
switch (G__31911) {
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
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29215__auto___34351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29216__auto__ = (function (){var switch__28598__auto__ = (function (state_31943){
var state_val_31944 = (state_31943[(1)]);
if((state_val_31944 === (7))){
var inst_31923 = (state_31943[(7)]);
var inst_31922 = (state_31943[(8)]);
var inst_31922__$1 = (state_31943[(2)]);
var inst_31923__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31922__$1,(0),null);
var inst_31924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31922__$1,(1),null);
var inst_31925 = (inst_31923__$1 == null);
var state_31943__$1 = (function (){var statearr_31948 = state_31943;
(statearr_31948[(7)] = inst_31923__$1);

(statearr_31948[(8)] = inst_31922__$1);

(statearr_31948[(9)] = inst_31924);

return statearr_31948;
})();
if(cljs.core.truth_(inst_31925)){
var statearr_31949_34364 = state_31943__$1;
(statearr_31949_34364[(1)] = (8));

} else {
var statearr_31952_34365 = state_31943__$1;
(statearr_31952_34365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (1))){
var inst_31912 = cljs.core.vec(chs);
var inst_31913 = inst_31912;
var state_31943__$1 = (function (){var statearr_31957 = state_31943;
(statearr_31957[(10)] = inst_31913);

return statearr_31957;
})();
var statearr_31959_34372 = state_31943__$1;
(statearr_31959_34372[(2)] = null);

(statearr_31959_34372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (4))){
var inst_31913 = (state_31943[(10)]);
var state_31943__$1 = state_31943;
return cljs.core.async.ioc_alts_BANG_(state_31943__$1,(7),inst_31913);
} else {
if((state_val_31944 === (6))){
var inst_31939 = (state_31943[(2)]);
var state_31943__$1 = state_31943;
var statearr_31960_34381 = state_31943__$1;
(statearr_31960_34381[(2)] = inst_31939);

(statearr_31960_34381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (3))){
var inst_31941 = (state_31943[(2)]);
var state_31943__$1 = state_31943;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31943__$1,inst_31941);
} else {
if((state_val_31944 === (2))){
var inst_31913 = (state_31943[(10)]);
var inst_31915 = cljs.core.count(inst_31913);
var inst_31916 = (inst_31915 > (0));
var state_31943__$1 = state_31943;
if(cljs.core.truth_(inst_31916)){
var statearr_31968_34387 = state_31943__$1;
(statearr_31968_34387[(1)] = (4));

} else {
var statearr_31969_34388 = state_31943__$1;
(statearr_31969_34388[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (11))){
var inst_31913 = (state_31943[(10)]);
var inst_31932 = (state_31943[(2)]);
var tmp31961 = inst_31913;
var inst_31913__$1 = tmp31961;
var state_31943__$1 = (function (){var statearr_31970 = state_31943;
(statearr_31970[(11)] = inst_31932);

(statearr_31970[(10)] = inst_31913__$1);

return statearr_31970;
})();
var statearr_31975_34391 = state_31943__$1;
(statearr_31975_34391[(2)] = null);

(statearr_31975_34391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (9))){
var inst_31923 = (state_31943[(7)]);
var state_31943__$1 = state_31943;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31943__$1,(11),out,inst_31923);
} else {
if((state_val_31944 === (5))){
var inst_31937 = cljs.core.async.close_BANG_(out);
var state_31943__$1 = state_31943;
var statearr_31986_34396 = state_31943__$1;
(statearr_31986_34396[(2)] = inst_31937);

(statearr_31986_34396[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (10))){
var inst_31935 = (state_31943[(2)]);
var state_31943__$1 = state_31943;
var statearr_31990_34404 = state_31943__$1;
(statearr_31990_34404[(2)] = inst_31935);

(statearr_31990_34404[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (8))){
var inst_31923 = (state_31943[(7)]);
var inst_31922 = (state_31943[(8)]);
var inst_31924 = (state_31943[(9)]);
var inst_31913 = (state_31943[(10)]);
var inst_31927 = (function (){var cs = inst_31913;
var vec__31918 = inst_31922;
var v = inst_31923;
var c = inst_31924;
return (function (p1__31906_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31906_SHARP_);
});
})();
var inst_31928 = cljs.core.filterv(inst_31927,inst_31913);
var inst_31913__$1 = inst_31928;
var state_31943__$1 = (function (){var statearr_31991 = state_31943;
(statearr_31991[(10)] = inst_31913__$1);

return statearr_31991;
})();
var statearr_31992_34412 = state_31943__$1;
(statearr_31992_34412[(2)] = null);

(statearr_31992_34412[(1)] = (2));


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
var cljs$core$async$state_machine__28599__auto__ = null;
var cljs$core$async$state_machine__28599__auto____0 = (function (){
var statearr_31995 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31995[(0)] = cljs$core$async$state_machine__28599__auto__);

(statearr_31995[(1)] = (1));

return statearr_31995;
});
var cljs$core$async$state_machine__28599__auto____1 = (function (state_31943){
while(true){
var ret_value__28600__auto__ = (function (){try{while(true){
var result__28601__auto__ = switch__28598__auto__(state_31943);
if(cljs.core.keyword_identical_QMARK_(result__28601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28601__auto__;
}
break;
}
}catch (e32004){var ex__28602__auto__ = e32004;
var statearr_32006_34417 = state_31943;
(statearr_32006_34417[(2)] = ex__28602__auto__);


if(cljs.core.seq((state_31943[(4)]))){
var statearr_32007_34418 = state_31943;
(statearr_32007_34418[(1)] = cljs.core.first((state_31943[(4)])));

} else {
throw ex__28602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34426 = state_31943;
state_31943 = G__34426;
continue;
} else {
return ret_value__28600__auto__;
}
break;
}
});
cljs$core$async$state_machine__28599__auto__ = function(state_31943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28599__auto____1.call(this,state_31943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28599__auto____0;
cljs$core$async$state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28599__auto____1;
return cljs$core$async$state_machine__28599__auto__;
})()
})();
var state__29217__auto__ = (function (){var statearr_32009 = f__29216__auto__();
(statearr_32009[(6)] = c__29215__auto___34351);

return statearr_32009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29217__auto__);
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32023 = arguments.length;
switch (G__32023) {
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
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29215__auto___34447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29216__auto__ = (function (){var switch__28598__auto__ = (function (state_32052){
var state_val_32055 = (state_32052[(1)]);
if((state_val_32055 === (7))){
var inst_32029 = (state_32052[(7)]);
var inst_32029__$1 = (state_32052[(2)]);
var inst_32034 = (inst_32029__$1 == null);
var inst_32035 = cljs.core.not(inst_32034);
var state_32052__$1 = (function (){var statearr_32066 = state_32052;
(statearr_32066[(7)] = inst_32029__$1);

return statearr_32066;
})();
if(inst_32035){
var statearr_32067_34452 = state_32052__$1;
(statearr_32067_34452[(1)] = (8));

} else {
var statearr_32068_34453 = state_32052__$1;
(statearr_32068_34453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (1))){
var inst_32024 = (0);
var state_32052__$1 = (function (){var statearr_32069 = state_32052;
(statearr_32069[(8)] = inst_32024);

return statearr_32069;
})();
var statearr_32070_34454 = state_32052__$1;
(statearr_32070_34454[(2)] = null);

(statearr_32070_34454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (4))){
var state_32052__$1 = state_32052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32052__$1,(7),ch);
} else {
if((state_val_32055 === (6))){
var inst_32047 = (state_32052[(2)]);
var state_32052__$1 = state_32052;
var statearr_32081_34464 = state_32052__$1;
(statearr_32081_34464[(2)] = inst_32047);

(statearr_32081_34464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (3))){
var inst_32049 = (state_32052[(2)]);
var inst_32050 = cljs.core.async.close_BANG_(out);
var state_32052__$1 = (function (){var statearr_32091 = state_32052;
(statearr_32091[(9)] = inst_32049);

return statearr_32091;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32052__$1,inst_32050);
} else {
if((state_val_32055 === (2))){
var inst_32024 = (state_32052[(8)]);
var inst_32026 = (inst_32024 < n);
var state_32052__$1 = state_32052;
if(cljs.core.truth_(inst_32026)){
var statearr_32094_34468 = state_32052__$1;
(statearr_32094_34468[(1)] = (4));

} else {
var statearr_32095_34469 = state_32052__$1;
(statearr_32095_34469[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (11))){
var inst_32024 = (state_32052[(8)]);
var inst_32038 = (state_32052[(2)]);
var inst_32040 = (inst_32024 + (1));
var inst_32024__$1 = inst_32040;
var state_32052__$1 = (function (){var statearr_32098 = state_32052;
(statearr_32098[(8)] = inst_32024__$1);

(statearr_32098[(10)] = inst_32038);

return statearr_32098;
})();
var statearr_32099_34473 = state_32052__$1;
(statearr_32099_34473[(2)] = null);

(statearr_32099_34473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (9))){
var state_32052__$1 = state_32052;
var statearr_32100_34476 = state_32052__$1;
(statearr_32100_34476[(2)] = null);

(statearr_32100_34476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (5))){
var state_32052__$1 = state_32052;
var statearr_32101_34480 = state_32052__$1;
(statearr_32101_34480[(2)] = null);

(statearr_32101_34480[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (10))){
var inst_32044 = (state_32052[(2)]);
var state_32052__$1 = state_32052;
var statearr_32102_34483 = state_32052__$1;
(statearr_32102_34483[(2)] = inst_32044);

(statearr_32102_34483[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (8))){
var inst_32029 = (state_32052[(7)]);
var state_32052__$1 = state_32052;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32052__$1,(11),out,inst_32029);
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
var cljs$core$async$state_machine__28599__auto__ = null;
var cljs$core$async$state_machine__28599__auto____0 = (function (){
var statearr_32109 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32109[(0)] = cljs$core$async$state_machine__28599__auto__);

(statearr_32109[(1)] = (1));

return statearr_32109;
});
var cljs$core$async$state_machine__28599__auto____1 = (function (state_32052){
while(true){
var ret_value__28600__auto__ = (function (){try{while(true){
var result__28601__auto__ = switch__28598__auto__(state_32052);
if(cljs.core.keyword_identical_QMARK_(result__28601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28601__auto__;
}
break;
}
}catch (e32110){var ex__28602__auto__ = e32110;
var statearr_32111_34492 = state_32052;
(statearr_32111_34492[(2)] = ex__28602__auto__);


if(cljs.core.seq((state_32052[(4)]))){
var statearr_32112_34496 = state_32052;
(statearr_32112_34496[(1)] = cljs.core.first((state_32052[(4)])));

} else {
throw ex__28602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34501 = state_32052;
state_32052 = G__34501;
continue;
} else {
return ret_value__28600__auto__;
}
break;
}
});
cljs$core$async$state_machine__28599__auto__ = function(state_32052){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28599__auto____1.call(this,state_32052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28599__auto____0;
cljs$core$async$state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28599__auto____1;
return cljs$core$async$state_machine__28599__auto__;
})()
})();
var state__29217__auto__ = (function (){var statearr_32118 = f__29216__auto__();
(statearr_32118[(6)] = c__29215__auto___34447);

return statearr_32118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29217__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32130 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32130 = (function (f,ch,meta32131){
this.f = f;
this.ch = ch;
this.meta32131 = meta32131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32132,meta32131__$1){
var self__ = this;
var _32132__$1 = this;
return (new cljs.core.async.t_cljs$core$async32130(self__.f,self__.ch,meta32131__$1));
}));

(cljs.core.async.t_cljs$core$async32130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32132){
var self__ = this;
var _32132__$1 = this;
return self__.meta32131;
}));

(cljs.core.async.t_cljs$core$async32130.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32130.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32130.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32130.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32130.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32143 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32143 = (function (f,ch,meta32131,_,fn1,meta32144){
this.f = f;
this.ch = ch;
this.meta32131 = meta32131;
this._ = _;
this.fn1 = fn1;
this.meta32144 = meta32144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32145,meta32144__$1){
var self__ = this;
var _32145__$1 = this;
return (new cljs.core.async.t_cljs$core$async32143(self__.f,self__.ch,self__.meta32131,self__._,self__.fn1,meta32144__$1));
}));

(cljs.core.async.t_cljs$core$async32143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32145){
var self__ = this;
var _32145__$1 = this;
return self__.meta32144;
}));

(cljs.core.async.t_cljs$core$async32143.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32143.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32143.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32143.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32127_SHARP_){
var G__32164 = (((p1__32127_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32127_SHARP_) : self__.f.call(null,p1__32127_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32164) : f1.call(null,G__32164));
});
}));

(cljs.core.async.t_cljs$core$async32143.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32131","meta32131",-386711778,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32130","cljs.core.async/t_cljs$core$async32130",-367580613,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32144","meta32144",2058555493,null)], null);
}));

(cljs.core.async.t_cljs$core$async32143.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32143");

(cljs.core.async.t_cljs$core$async32143.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32143");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32143.
 */
cljs.core.async.__GT_t_cljs$core$async32143 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32143(f__$1,ch__$1,meta32131__$1,___$2,fn1__$1,meta32144){
return (new cljs.core.async.t_cljs$core$async32143(f__$1,ch__$1,meta32131__$1,___$2,fn1__$1,meta32144));
});

}

return (new cljs.core.async.t_cljs$core$async32143(self__.f,self__.ch,self__.meta32131,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32176 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32176) : self__.f.call(null,G__32176));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32130.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32130.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32131","meta32131",-386711778,null)], null);
}));

(cljs.core.async.t_cljs$core$async32130.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32130");

(cljs.core.async.t_cljs$core$async32130.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32130");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32130.
 */
cljs.core.async.__GT_t_cljs$core$async32130 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32130(f__$1,ch__$1,meta32131){
return (new cljs.core.async.t_cljs$core$async32130(f__$1,ch__$1,meta32131));
});

}

return (new cljs.core.async.t_cljs$core$async32130(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32193 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32193 = (function (f,ch,meta32194){
this.f = f;
this.ch = ch;
this.meta32194 = meta32194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32195,meta32194__$1){
var self__ = this;
var _32195__$1 = this;
return (new cljs.core.async.t_cljs$core$async32193(self__.f,self__.ch,meta32194__$1));
}));

(cljs.core.async.t_cljs$core$async32193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32195){
var self__ = this;
var _32195__$1 = this;
return self__.meta32194;
}));

(cljs.core.async.t_cljs$core$async32193.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32193.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32193.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32193.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32193.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32193.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32194","meta32194",807601772,null)], null);
}));

(cljs.core.async.t_cljs$core$async32193.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32193");

(cljs.core.async.t_cljs$core$async32193.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32193");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32193.
 */
cljs.core.async.__GT_t_cljs$core$async32193 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32193(f__$1,ch__$1,meta32194){
return (new cljs.core.async.t_cljs$core$async32193(f__$1,ch__$1,meta32194));
});

}

return (new cljs.core.async.t_cljs$core$async32193(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32218 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32218 = (function (p,ch,meta32219){
this.p = p;
this.ch = ch;
this.meta32219 = meta32219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32220,meta32219__$1){
var self__ = this;
var _32220__$1 = this;
return (new cljs.core.async.t_cljs$core$async32218(self__.p,self__.ch,meta32219__$1));
}));

(cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32220){
var self__ = this;
var _32220__$1 = this;
return self__.meta32219;
}));

(cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32218.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32219","meta32219",1660488683,null)], null);
}));

(cljs.core.async.t_cljs$core$async32218.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32218");

(cljs.core.async.t_cljs$core$async32218.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32218");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32218.
 */
cljs.core.async.__GT_t_cljs$core$async32218 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32218(p__$1,ch__$1,meta32219){
return (new cljs.core.async.t_cljs$core$async32218(p__$1,ch__$1,meta32219));
});

}

return (new cljs.core.async.t_cljs$core$async32218(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32298 = arguments.length;
switch (G__32298) {
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
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29215__auto___34641 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29216__auto__ = (function (){var switch__28598__auto__ = (function (state_32326){
var state_val_32327 = (state_32326[(1)]);
if((state_val_32327 === (7))){
var inst_32322 = (state_32326[(2)]);
var state_32326__$1 = state_32326;
var statearr_32328_34650 = state_32326__$1;
(statearr_32328_34650[(2)] = inst_32322);

(statearr_32328_34650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (1))){
var state_32326__$1 = state_32326;
var statearr_32329_34651 = state_32326__$1;
(statearr_32329_34651[(2)] = null);

(statearr_32329_34651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (4))){
var inst_32307 = (state_32326[(7)]);
var inst_32307__$1 = (state_32326[(2)]);
var inst_32308 = (inst_32307__$1 == null);
var state_32326__$1 = (function (){var statearr_32330 = state_32326;
(statearr_32330[(7)] = inst_32307__$1);

return statearr_32330;
})();
if(cljs.core.truth_(inst_32308)){
var statearr_32331_34654 = state_32326__$1;
(statearr_32331_34654[(1)] = (5));

} else {
var statearr_32333_34659 = state_32326__$1;
(statearr_32333_34659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (6))){
var inst_32307 = (state_32326[(7)]);
var inst_32313 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32307) : p.call(null,inst_32307));
var state_32326__$1 = state_32326;
if(cljs.core.truth_(inst_32313)){
var statearr_32334_34662 = state_32326__$1;
(statearr_32334_34662[(1)] = (8));

} else {
var statearr_32335_34663 = state_32326__$1;
(statearr_32335_34663[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (3))){
var inst_32324 = (state_32326[(2)]);
var state_32326__$1 = state_32326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32326__$1,inst_32324);
} else {
if((state_val_32327 === (2))){
var state_32326__$1 = state_32326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32326__$1,(4),ch);
} else {
if((state_val_32327 === (11))){
var inst_32316 = (state_32326[(2)]);
var state_32326__$1 = state_32326;
var statearr_32349_34666 = state_32326__$1;
(statearr_32349_34666[(2)] = inst_32316);

(statearr_32349_34666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (9))){
var state_32326__$1 = state_32326;
var statearr_32358_34672 = state_32326__$1;
(statearr_32358_34672[(2)] = null);

(statearr_32358_34672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (5))){
var inst_32311 = cljs.core.async.close_BANG_(out);
var state_32326__$1 = state_32326;
var statearr_32359_34673 = state_32326__$1;
(statearr_32359_34673[(2)] = inst_32311);

(statearr_32359_34673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (10))){
var inst_32319 = (state_32326[(2)]);
var state_32326__$1 = (function (){var statearr_32360 = state_32326;
(statearr_32360[(8)] = inst_32319);

return statearr_32360;
})();
var statearr_32361_34676 = state_32326__$1;
(statearr_32361_34676[(2)] = null);

(statearr_32361_34676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (8))){
var inst_32307 = (state_32326[(7)]);
var state_32326__$1 = state_32326;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32326__$1,(11),out,inst_32307);
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
var cljs$core$async$state_machine__28599__auto__ = null;
var cljs$core$async$state_machine__28599__auto____0 = (function (){
var statearr_32362 = [null,null,null,null,null,null,null,null,null];
(statearr_32362[(0)] = cljs$core$async$state_machine__28599__auto__);

(statearr_32362[(1)] = (1));

return statearr_32362;
});
var cljs$core$async$state_machine__28599__auto____1 = (function (state_32326){
while(true){
var ret_value__28600__auto__ = (function (){try{while(true){
var result__28601__auto__ = switch__28598__auto__(state_32326);
if(cljs.core.keyword_identical_QMARK_(result__28601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28601__auto__;
}
break;
}
}catch (e32363){var ex__28602__auto__ = e32363;
var statearr_32364_34686 = state_32326;
(statearr_32364_34686[(2)] = ex__28602__auto__);


if(cljs.core.seq((state_32326[(4)]))){
var statearr_32365_34689 = state_32326;
(statearr_32365_34689[(1)] = cljs.core.first((state_32326[(4)])));

} else {
throw ex__28602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34690 = state_32326;
state_32326 = G__34690;
continue;
} else {
return ret_value__28600__auto__;
}
break;
}
});
cljs$core$async$state_machine__28599__auto__ = function(state_32326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28599__auto____1.call(this,state_32326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28599__auto____0;
cljs$core$async$state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28599__auto____1;
return cljs$core$async$state_machine__28599__auto__;
})()
})();
var state__29217__auto__ = (function (){var statearr_32367 = f__29216__auto__();
(statearr_32367[(6)] = c__29215__auto___34641);

return statearr_32367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29217__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32369 = arguments.length;
switch (G__32369) {
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
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29215__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29216__auto__ = (function (){var switch__28598__auto__ = (function (state_32443){
var state_val_32444 = (state_32443[(1)]);
if((state_val_32444 === (7))){
var inst_32439 = (state_32443[(2)]);
var state_32443__$1 = state_32443;
var statearr_32452_34707 = state_32443__$1;
(statearr_32452_34707[(2)] = inst_32439);

(statearr_32452_34707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32444 === (20))){
var inst_32398 = (state_32443[(7)]);
var inst_32416 = (state_32443[(2)]);
var inst_32419 = cljs.core.next(inst_32398);
var inst_32383 = inst_32419;
var inst_32384 = null;
var inst_32385 = (0);
var inst_32386 = (0);
var state_32443__$1 = (function (){var statearr_32457 = state_32443;
(statearr_32457[(8)] = inst_32386);

(statearr_32457[(9)] = inst_32416);

(statearr_32457[(10)] = inst_32383);

(statearr_32457[(11)] = inst_32385);

(statearr_32457[(12)] = inst_32384);

return statearr_32457;
})();
var statearr_32462_34708 = state_32443__$1;
(statearr_32462_34708[(2)] = null);

(statearr_32462_34708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32444 === (1))){
var state_32443__$1 = state_32443;
var statearr_32463_34710 = state_32443__$1;
(statearr_32463_34710[(2)] = null);

(statearr_32463_34710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32444 === (4))){
var inst_32372 = (state_32443[(13)]);
var inst_32372__$1 = (state_32443[(2)]);
var inst_32373 = (inst_32372__$1 == null);
var state_32443__$1 = (function (){var statearr_32464 = state_32443;
(statearr_32464[(13)] = inst_32372__$1);

return statearr_32464;
})();
if(cljs.core.truth_(inst_32373)){
var statearr_32465_34711 = state_32443__$1;
(statearr_32465_34711[(1)] = (5));

} else {
var statearr_32466_34712 = state_32443__$1;
(statearr_32466_34712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32444 === (15))){
var state_32443__$1 = state_32443;
var statearr_32471_34713 = state_32443__$1;
(statearr_32471_34713[(2)] = null);

(statearr_32471_34713[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32444 === (21))){
var state_32443__$1 = state_32443;
var statearr_32474_34715 = state_32443__$1;
(statearr_32474_34715[(2)] = null);

(statearr_32474_34715[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32444 === (13))){
var inst_32386 = (state_32443[(8)]);
var inst_32383 = (state_32443[(10)]);
var inst_32385 = (state_32443[(11)]);
var inst_32384 = (state_32443[(12)]);
var inst_32393 = (state_32443[(2)]);
var inst_32394 = (inst_32386 + (1));
var tmp32467 = inst_32383;
var tmp32468 = inst_32385;
var tmp32469 = inst_32384;
var inst_32383__$1 = tmp32467;
var inst_32384__$1 = tmp32469;
var inst_32385__$1 = tmp32468;
var inst_32386__$1 = inst_32394;
var state_32443__$1 = (function (){var statearr_32476 = state_32443;
(statearr_32476[(8)] = inst_32386__$1);

(statearr_32476[(10)] = inst_32383__$1);

(statearr_32476[(11)] = inst_32385__$1);

(statearr_32476[(14)] = inst_32393);

(statearr_32476[(12)] = inst_32384__$1);

return statearr_32476;
})();
var statearr_32477_34722 = state_32443__$1;
(statearr_32477_34722[(2)] = null);

(statearr_32477_34722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32444 === (22))){
var state_32443__$1 = state_32443;
var statearr_32478_34723 = state_32443__$1;
(statearr_32478_34723[(2)] = null);

(statearr_32478_34723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32444 === (6))){
var inst_32372 = (state_32443[(13)]);
var inst_32381 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32372) : f.call(null,inst_32372));
var inst_32382 = cljs.core.seq(inst_32381);
var inst_32383 = inst_32382;
var inst_32384 = null;
var inst_32385 = (0);
var inst_32386 = (0);
var state_32443__$1 = (function (){var statearr_32483 = state_32443;
(statearr_32483[(8)] = inst_32386);

(statearr_32483[(10)] = inst_32383);

(statearr_32483[(11)] = inst_32385);

(statearr_32483[(12)] = inst_32384);

return statearr_32483;
})();
var statearr_32484_34733 = state_32443__$1;
(statearr_32484_34733[(2)] = null);

(statearr_32484_34733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32444 === (17))){
var inst_32398 = (state_32443[(7)]);
var inst_32405 = cljs.core.chunk_first(inst_32398);
var inst_32406 = cljs.core.chunk_rest(inst_32398);
var inst_32408 = cljs.core.count(inst_32405);
var inst_32383 = inst_32406;
var inst_32384 = inst_32405;
var inst_32385 = inst_32408;
var inst_32386 = (0);
var state_32443__$1 = (function (){var statearr_32493 = state_32443;
(statearr_32493[(8)] = inst_32386);

(statearr_32493[(10)] = inst_32383);

(statearr_32493[(11)] = inst_32385);

(statearr_32493[(12)] = inst_32384);

return statearr_32493;
})();
var statearr_32494_34737 = state_32443__$1;
(statearr_32494_34737[(2)] = null);

(statearr_32494_34737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32444 === (3))){
var inst_32441 = (state_32443[(2)]);
var state_32443__$1 = state_32443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32443__$1,inst_32441);
} else {
if((state_val_32444 === (12))){
var inst_32427 = (state_32443[(2)]);
var state_32443__$1 = state_32443;
var statearr_32495_34740 = state_32443__$1;
(statearr_32495_34740[(2)] = inst_32427);

(statearr_32495_34740[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32444 === (2))){
var state_32443__$1 = state_32443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32443__$1,(4),in$);
} else {
if((state_val_32444 === (23))){
var inst_32437 = (state_32443[(2)]);
var state_32443__$1 = state_32443;
var statearr_32501_34742 = state_32443__$1;
(statearr_32501_34742[(2)] = inst_32437);

(statearr_32501_34742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32444 === (19))){
var inst_32422 = (state_32443[(2)]);
var state_32443__$1 = state_32443;
var statearr_32503_34744 = state_32443__$1;
(statearr_32503_34744[(2)] = inst_32422);

(statearr_32503_34744[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32444 === (11))){
var inst_32383 = (state_32443[(10)]);
var inst_32398 = (state_32443[(7)]);
var inst_32398__$1 = cljs.core.seq(inst_32383);
var state_32443__$1 = (function (){var statearr_32504 = state_32443;
(statearr_32504[(7)] = inst_32398__$1);

return statearr_32504;
})();
if(inst_32398__$1){
var statearr_32505_34750 = state_32443__$1;
(statearr_32505_34750[(1)] = (14));

} else {
var statearr_32507_34752 = state_32443__$1;
(statearr_32507_34752[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32444 === (9))){
var inst_32429 = (state_32443[(2)]);
var inst_32431 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32443__$1 = (function (){var statearr_32509 = state_32443;
(statearr_32509[(15)] = inst_32429);

return statearr_32509;
})();
if(cljs.core.truth_(inst_32431)){
var statearr_32510_34758 = state_32443__$1;
(statearr_32510_34758[(1)] = (21));

} else {
var statearr_32511_34760 = state_32443__$1;
(statearr_32511_34760[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32444 === (5))){
var inst_32375 = cljs.core.async.close_BANG_(out);
var state_32443__$1 = state_32443;
var statearr_32517_34763 = state_32443__$1;
(statearr_32517_34763[(2)] = inst_32375);

(statearr_32517_34763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32444 === (14))){
var inst_32398 = (state_32443[(7)]);
var inst_32401 = cljs.core.chunked_seq_QMARK_(inst_32398);
var state_32443__$1 = state_32443;
if(inst_32401){
var statearr_32529_34764 = state_32443__$1;
(statearr_32529_34764[(1)] = (17));

} else {
var statearr_32530_34765 = state_32443__$1;
(statearr_32530_34765[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32444 === (16))){
var inst_32425 = (state_32443[(2)]);
var state_32443__$1 = state_32443;
var statearr_32531_34766 = state_32443__$1;
(statearr_32531_34766[(2)] = inst_32425);

(statearr_32531_34766[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32444 === (10))){
var inst_32386 = (state_32443[(8)]);
var inst_32384 = (state_32443[(12)]);
var inst_32391 = cljs.core._nth(inst_32384,inst_32386);
var state_32443__$1 = state_32443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32443__$1,(13),out,inst_32391);
} else {
if((state_val_32444 === (18))){
var inst_32398 = (state_32443[(7)]);
var inst_32413 = cljs.core.first(inst_32398);
var state_32443__$1 = state_32443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32443__$1,(20),out,inst_32413);
} else {
if((state_val_32444 === (8))){
var inst_32386 = (state_32443[(8)]);
var inst_32385 = (state_32443[(11)]);
var inst_32388 = (inst_32386 < inst_32385);
var inst_32389 = inst_32388;
var state_32443__$1 = state_32443;
if(cljs.core.truth_(inst_32389)){
var statearr_32538_34777 = state_32443__$1;
(statearr_32538_34777[(1)] = (10));

} else {
var statearr_32539_34778 = state_32443__$1;
(statearr_32539_34778[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__28599__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28599__auto____0 = (function (){
var statearr_32542 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32542[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28599__auto__);

(statearr_32542[(1)] = (1));

return statearr_32542;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28599__auto____1 = (function (state_32443){
while(true){
var ret_value__28600__auto__ = (function (){try{while(true){
var result__28601__auto__ = switch__28598__auto__(state_32443);
if(cljs.core.keyword_identical_QMARK_(result__28601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28601__auto__;
}
break;
}
}catch (e32545){var ex__28602__auto__ = e32545;
var statearr_32547_34789 = state_32443;
(statearr_32547_34789[(2)] = ex__28602__auto__);


if(cljs.core.seq((state_32443[(4)]))){
var statearr_32548_34791 = state_32443;
(statearr_32548_34791[(1)] = cljs.core.first((state_32443[(4)])));

} else {
throw ex__28602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34792 = state_32443;
state_32443 = G__34792;
continue;
} else {
return ret_value__28600__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28599__auto__ = function(state_32443){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28599__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28599__auto____1.call(this,state_32443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28599__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28599__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28599__auto__;
})()
})();
var state__29217__auto__ = (function (){var statearr_32551 = f__29216__auto__();
(statearr_32551[(6)] = c__29215__auto__);

return statearr_32551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29217__auto__);
}));

return c__29215__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32555 = arguments.length;
switch (G__32555) {
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
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32568 = arguments.length;
switch (G__32568) {
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
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32575 = arguments.length;
switch (G__32575) {
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
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29215__auto___34803 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29216__auto__ = (function (){var switch__28598__auto__ = (function (state_32613){
var state_val_32614 = (state_32613[(1)]);
if((state_val_32614 === (7))){
var inst_32608 = (state_32613[(2)]);
var state_32613__$1 = state_32613;
var statearr_32622_34805 = state_32613__$1;
(statearr_32622_34805[(2)] = inst_32608);

(statearr_32622_34805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (1))){
var inst_32587 = null;
var state_32613__$1 = (function (){var statearr_32623 = state_32613;
(statearr_32623[(7)] = inst_32587);

return statearr_32623;
})();
var statearr_32627_34806 = state_32613__$1;
(statearr_32627_34806[(2)] = null);

(statearr_32627_34806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (4))){
var inst_32593 = (state_32613[(8)]);
var inst_32593__$1 = (state_32613[(2)]);
var inst_32594 = (inst_32593__$1 == null);
var inst_32595 = cljs.core.not(inst_32594);
var state_32613__$1 = (function (){var statearr_32629 = state_32613;
(statearr_32629[(8)] = inst_32593__$1);

return statearr_32629;
})();
if(inst_32595){
var statearr_32630_34807 = state_32613__$1;
(statearr_32630_34807[(1)] = (5));

} else {
var statearr_32631_34808 = state_32613__$1;
(statearr_32631_34808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (6))){
var state_32613__$1 = state_32613;
var statearr_32633_34809 = state_32613__$1;
(statearr_32633_34809[(2)] = null);

(statearr_32633_34809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (3))){
var inst_32610 = (state_32613[(2)]);
var inst_32611 = cljs.core.async.close_BANG_(out);
var state_32613__$1 = (function (){var statearr_32638 = state_32613;
(statearr_32638[(9)] = inst_32610);

return statearr_32638;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32613__$1,inst_32611);
} else {
if((state_val_32614 === (2))){
var state_32613__$1 = state_32613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32613__$1,(4),ch);
} else {
if((state_val_32614 === (11))){
var inst_32593 = (state_32613[(8)]);
var inst_32602 = (state_32613[(2)]);
var inst_32587 = inst_32593;
var state_32613__$1 = (function (){var statearr_32649 = state_32613;
(statearr_32649[(10)] = inst_32602);

(statearr_32649[(7)] = inst_32587);

return statearr_32649;
})();
var statearr_32654_34822 = state_32613__$1;
(statearr_32654_34822[(2)] = null);

(statearr_32654_34822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (9))){
var inst_32593 = (state_32613[(8)]);
var state_32613__$1 = state_32613;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32613__$1,(11),out,inst_32593);
} else {
if((state_val_32614 === (5))){
var inst_32593 = (state_32613[(8)]);
var inst_32587 = (state_32613[(7)]);
var inst_32597 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32593,inst_32587);
var state_32613__$1 = state_32613;
if(inst_32597){
var statearr_32656_34827 = state_32613__$1;
(statearr_32656_34827[(1)] = (8));

} else {
var statearr_32657_34828 = state_32613__$1;
(statearr_32657_34828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (10))){
var inst_32605 = (state_32613[(2)]);
var state_32613__$1 = state_32613;
var statearr_32660_34830 = state_32613__$1;
(statearr_32660_34830[(2)] = inst_32605);

(statearr_32660_34830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (8))){
var inst_32587 = (state_32613[(7)]);
var tmp32655 = inst_32587;
var inst_32587__$1 = tmp32655;
var state_32613__$1 = (function (){var statearr_32661 = state_32613;
(statearr_32661[(7)] = inst_32587__$1);

return statearr_32661;
})();
var statearr_32662_34837 = state_32613__$1;
(statearr_32662_34837[(2)] = null);

(statearr_32662_34837[(1)] = (2));


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
var cljs$core$async$state_machine__28599__auto__ = null;
var cljs$core$async$state_machine__28599__auto____0 = (function (){
var statearr_32663 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32663[(0)] = cljs$core$async$state_machine__28599__auto__);

(statearr_32663[(1)] = (1));

return statearr_32663;
});
var cljs$core$async$state_machine__28599__auto____1 = (function (state_32613){
while(true){
var ret_value__28600__auto__ = (function (){try{while(true){
var result__28601__auto__ = switch__28598__auto__(state_32613);
if(cljs.core.keyword_identical_QMARK_(result__28601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28601__auto__;
}
break;
}
}catch (e32666){var ex__28602__auto__ = e32666;
var statearr_32668_34840 = state_32613;
(statearr_32668_34840[(2)] = ex__28602__auto__);


if(cljs.core.seq((state_32613[(4)]))){
var statearr_32669_34841 = state_32613;
(statearr_32669_34841[(1)] = cljs.core.first((state_32613[(4)])));

} else {
throw ex__28602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34847 = state_32613;
state_32613 = G__34847;
continue;
} else {
return ret_value__28600__auto__;
}
break;
}
});
cljs$core$async$state_machine__28599__auto__ = function(state_32613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28599__auto____1.call(this,state_32613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28599__auto____0;
cljs$core$async$state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28599__auto____1;
return cljs$core$async$state_machine__28599__auto__;
})()
})();
var state__29217__auto__ = (function (){var statearr_32671 = f__29216__auto__();
(statearr_32671[(6)] = c__29215__auto___34803);

return statearr_32671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29217__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32681 = arguments.length;
switch (G__32681) {
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
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29215__auto___34870 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29216__auto__ = (function (){var switch__28598__auto__ = (function (state_32723){
var state_val_32724 = (state_32723[(1)]);
if((state_val_32724 === (7))){
var inst_32719 = (state_32723[(2)]);
var state_32723__$1 = state_32723;
var statearr_32736_34872 = state_32723__$1;
(statearr_32736_34872[(2)] = inst_32719);

(statearr_32736_34872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32724 === (1))){
var inst_32684 = (new Array(n));
var inst_32685 = inst_32684;
var inst_32686 = (0);
var state_32723__$1 = (function (){var statearr_32745 = state_32723;
(statearr_32745[(7)] = inst_32686);

(statearr_32745[(8)] = inst_32685);

return statearr_32745;
})();
var statearr_32752_34879 = state_32723__$1;
(statearr_32752_34879[(2)] = null);

(statearr_32752_34879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32724 === (4))){
var inst_32689 = (state_32723[(9)]);
var inst_32689__$1 = (state_32723[(2)]);
var inst_32690 = (inst_32689__$1 == null);
var inst_32692 = cljs.core.not(inst_32690);
var state_32723__$1 = (function (){var statearr_32754 = state_32723;
(statearr_32754[(9)] = inst_32689__$1);

return statearr_32754;
})();
if(inst_32692){
var statearr_32755_34884 = state_32723__$1;
(statearr_32755_34884[(1)] = (5));

} else {
var statearr_32760_34885 = state_32723__$1;
(statearr_32760_34885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32724 === (15))){
var inst_32713 = (state_32723[(2)]);
var state_32723__$1 = state_32723;
var statearr_32761_34886 = state_32723__$1;
(statearr_32761_34886[(2)] = inst_32713);

(statearr_32761_34886[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32724 === (13))){
var state_32723__$1 = state_32723;
var statearr_32763_34888 = state_32723__$1;
(statearr_32763_34888[(2)] = null);

(statearr_32763_34888[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32724 === (6))){
var inst_32686 = (state_32723[(7)]);
var inst_32709 = (inst_32686 > (0));
var state_32723__$1 = state_32723;
if(cljs.core.truth_(inst_32709)){
var statearr_32765_34892 = state_32723__$1;
(statearr_32765_34892[(1)] = (12));

} else {
var statearr_32766_34894 = state_32723__$1;
(statearr_32766_34894[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32724 === (3))){
var inst_32721 = (state_32723[(2)]);
var state_32723__$1 = state_32723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32723__$1,inst_32721);
} else {
if((state_val_32724 === (12))){
var inst_32685 = (state_32723[(8)]);
var inst_32711 = cljs.core.vec(inst_32685);
var state_32723__$1 = state_32723;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32723__$1,(15),out,inst_32711);
} else {
if((state_val_32724 === (2))){
var state_32723__$1 = state_32723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32723__$1,(4),ch);
} else {
if((state_val_32724 === (11))){
var inst_32703 = (state_32723[(2)]);
var inst_32704 = (new Array(n));
var inst_32685 = inst_32704;
var inst_32686 = (0);
var state_32723__$1 = (function (){var statearr_32768 = state_32723;
(statearr_32768[(7)] = inst_32686);

(statearr_32768[(10)] = inst_32703);

(statearr_32768[(8)] = inst_32685);

return statearr_32768;
})();
var statearr_32775_34899 = state_32723__$1;
(statearr_32775_34899[(2)] = null);

(statearr_32775_34899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32724 === (9))){
var inst_32685 = (state_32723[(8)]);
var inst_32701 = cljs.core.vec(inst_32685);
var state_32723__$1 = state_32723;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32723__$1,(11),out,inst_32701);
} else {
if((state_val_32724 === (5))){
var inst_32686 = (state_32723[(7)]);
var inst_32689 = (state_32723[(9)]);
var inst_32696 = (state_32723[(11)]);
var inst_32685 = (state_32723[(8)]);
var inst_32694 = (inst_32685[inst_32686] = inst_32689);
var inst_32696__$1 = (inst_32686 + (1));
var inst_32697 = (inst_32696__$1 < n);
var state_32723__$1 = (function (){var statearr_32781 = state_32723;
(statearr_32781[(12)] = inst_32694);

(statearr_32781[(11)] = inst_32696__$1);

return statearr_32781;
})();
if(cljs.core.truth_(inst_32697)){
var statearr_32782_34907 = state_32723__$1;
(statearr_32782_34907[(1)] = (8));

} else {
var statearr_32783_34909 = state_32723__$1;
(statearr_32783_34909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32724 === (14))){
var inst_32716 = (state_32723[(2)]);
var inst_32717 = cljs.core.async.close_BANG_(out);
var state_32723__$1 = (function (){var statearr_32789 = state_32723;
(statearr_32789[(13)] = inst_32716);

return statearr_32789;
})();
var statearr_32790_34911 = state_32723__$1;
(statearr_32790_34911[(2)] = inst_32717);

(statearr_32790_34911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32724 === (10))){
var inst_32707 = (state_32723[(2)]);
var state_32723__$1 = state_32723;
var statearr_32794_34914 = state_32723__$1;
(statearr_32794_34914[(2)] = inst_32707);

(statearr_32794_34914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32724 === (8))){
var inst_32696 = (state_32723[(11)]);
var inst_32685 = (state_32723[(8)]);
var tmp32785 = inst_32685;
var inst_32685__$1 = tmp32785;
var inst_32686 = inst_32696;
var state_32723__$1 = (function (){var statearr_32798 = state_32723;
(statearr_32798[(7)] = inst_32686);

(statearr_32798[(8)] = inst_32685__$1);

return statearr_32798;
})();
var statearr_32800_34916 = state_32723__$1;
(statearr_32800_34916[(2)] = null);

(statearr_32800_34916[(1)] = (2));


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
var cljs$core$async$state_machine__28599__auto__ = null;
var cljs$core$async$state_machine__28599__auto____0 = (function (){
var statearr_32804 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32804[(0)] = cljs$core$async$state_machine__28599__auto__);

(statearr_32804[(1)] = (1));

return statearr_32804;
});
var cljs$core$async$state_machine__28599__auto____1 = (function (state_32723){
while(true){
var ret_value__28600__auto__ = (function (){try{while(true){
var result__28601__auto__ = switch__28598__auto__(state_32723);
if(cljs.core.keyword_identical_QMARK_(result__28601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28601__auto__;
}
break;
}
}catch (e32805){var ex__28602__auto__ = e32805;
var statearr_32806_34918 = state_32723;
(statearr_32806_34918[(2)] = ex__28602__auto__);


if(cljs.core.seq((state_32723[(4)]))){
var statearr_32807_34919 = state_32723;
(statearr_32807_34919[(1)] = cljs.core.first((state_32723[(4)])));

} else {
throw ex__28602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34920 = state_32723;
state_32723 = G__34920;
continue;
} else {
return ret_value__28600__auto__;
}
break;
}
});
cljs$core$async$state_machine__28599__auto__ = function(state_32723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28599__auto____1.call(this,state_32723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28599__auto____0;
cljs$core$async$state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28599__auto____1;
return cljs$core$async$state_machine__28599__auto__;
})()
})();
var state__29217__auto__ = (function (){var statearr_32810 = f__29216__auto__();
(statearr_32810[(6)] = c__29215__auto___34870);

return statearr_32810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29217__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32812 = arguments.length;
switch (G__32812) {
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
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29215__auto___34922 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29216__auto__ = (function (){var switch__28598__auto__ = (function (state_32894){
var state_val_32896 = (state_32894[(1)]);
if((state_val_32896 === (7))){
var inst_32889 = (state_32894[(2)]);
var state_32894__$1 = state_32894;
var statearr_32902_34923 = state_32894__$1;
(statearr_32902_34923[(2)] = inst_32889);

(statearr_32902_34923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (1))){
var inst_32820 = [];
var inst_32825 = inst_32820;
var inst_32826 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32894__$1 = (function (){var statearr_32904 = state_32894;
(statearr_32904[(7)] = inst_32826);

(statearr_32904[(8)] = inst_32825);

return statearr_32904;
})();
var statearr_32905_34926 = state_32894__$1;
(statearr_32905_34926[(2)] = null);

(statearr_32905_34926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (4))){
var inst_32833 = (state_32894[(9)]);
var inst_32833__$1 = (state_32894[(2)]);
var inst_32835 = (inst_32833__$1 == null);
var inst_32836 = cljs.core.not(inst_32835);
var state_32894__$1 = (function (){var statearr_32907 = state_32894;
(statearr_32907[(9)] = inst_32833__$1);

return statearr_32907;
})();
if(inst_32836){
var statearr_32909_34927 = state_32894__$1;
(statearr_32909_34927[(1)] = (5));

} else {
var statearr_32911_34929 = state_32894__$1;
(statearr_32911_34929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (15))){
var inst_32825 = (state_32894[(8)]);
var inst_32880 = cljs.core.vec(inst_32825);
var state_32894__$1 = state_32894;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32894__$1,(18),out,inst_32880);
} else {
if((state_val_32896 === (13))){
var inst_32871 = (state_32894[(2)]);
var state_32894__$1 = state_32894;
var statearr_32914_34937 = state_32894__$1;
(statearr_32914_34937[(2)] = inst_32871);

(statearr_32914_34937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (6))){
var inst_32825 = (state_32894[(8)]);
var inst_32877 = inst_32825.length;
var inst_32878 = (inst_32877 > (0));
var state_32894__$1 = state_32894;
if(cljs.core.truth_(inst_32878)){
var statearr_32925_34939 = state_32894__$1;
(statearr_32925_34939[(1)] = (15));

} else {
var statearr_32928_34941 = state_32894__$1;
(statearr_32928_34941[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (17))){
var inst_32885 = (state_32894[(2)]);
var inst_32887 = cljs.core.async.close_BANG_(out);
var state_32894__$1 = (function (){var statearr_32931 = state_32894;
(statearr_32931[(10)] = inst_32885);

return statearr_32931;
})();
var statearr_32932_34942 = state_32894__$1;
(statearr_32932_34942[(2)] = inst_32887);

(statearr_32932_34942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (3))){
var inst_32891 = (state_32894[(2)]);
var state_32894__$1 = state_32894;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32894__$1,inst_32891);
} else {
if((state_val_32896 === (12))){
var inst_32825 = (state_32894[(8)]);
var inst_32860 = cljs.core.vec(inst_32825);
var state_32894__$1 = state_32894;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32894__$1,(14),out,inst_32860);
} else {
if((state_val_32896 === (2))){
var state_32894__$1 = state_32894;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32894__$1,(4),ch);
} else {
if((state_val_32896 === (11))){
var inst_32843 = (state_32894[(11)]);
var inst_32833 = (state_32894[(9)]);
var inst_32825 = (state_32894[(8)]);
var inst_32857 = inst_32825.push(inst_32833);
var tmp32934 = inst_32825;
var inst_32825__$1 = tmp32934;
var inst_32826 = inst_32843;
var state_32894__$1 = (function (){var statearr_32944 = state_32894;
(statearr_32944[(12)] = inst_32857);

(statearr_32944[(7)] = inst_32826);

(statearr_32944[(8)] = inst_32825__$1);

return statearr_32944;
})();
var statearr_32947_34948 = state_32894__$1;
(statearr_32947_34948[(2)] = null);

(statearr_32947_34948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (9))){
var inst_32826 = (state_32894[(7)]);
var inst_32853 = cljs.core.keyword_identical_QMARK_(inst_32826,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32894__$1 = state_32894;
var statearr_32955_34949 = state_32894__$1;
(statearr_32955_34949[(2)] = inst_32853);

(statearr_32955_34949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (5))){
var inst_32849 = (state_32894[(13)]);
var inst_32826 = (state_32894[(7)]);
var inst_32843 = (state_32894[(11)]);
var inst_32833 = (state_32894[(9)]);
var inst_32843__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32833) : f.call(null,inst_32833));
var inst_32849__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32843__$1,inst_32826);
var state_32894__$1 = (function (){var statearr_32960 = state_32894;
(statearr_32960[(13)] = inst_32849__$1);

(statearr_32960[(11)] = inst_32843__$1);

return statearr_32960;
})();
if(inst_32849__$1){
var statearr_32966_34950 = state_32894__$1;
(statearr_32966_34950[(1)] = (8));

} else {
var statearr_32968_34951 = state_32894__$1;
(statearr_32968_34951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (14))){
var inst_32843 = (state_32894[(11)]);
var inst_32833 = (state_32894[(9)]);
var inst_32862 = (state_32894[(2)]);
var inst_32867 = [];
var inst_32868 = inst_32867.push(inst_32833);
var inst_32825 = inst_32867;
var inst_32826 = inst_32843;
var state_32894__$1 = (function (){var statearr_32971 = state_32894;
(statearr_32971[(7)] = inst_32826);

(statearr_32971[(14)] = inst_32868);

(statearr_32971[(15)] = inst_32862);

(statearr_32971[(8)] = inst_32825);

return statearr_32971;
})();
var statearr_32977_34952 = state_32894__$1;
(statearr_32977_34952[(2)] = null);

(statearr_32977_34952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (16))){
var state_32894__$1 = state_32894;
var statearr_32978_34953 = state_32894__$1;
(statearr_32978_34953[(2)] = null);

(statearr_32978_34953[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (10))){
var inst_32855 = (state_32894[(2)]);
var state_32894__$1 = state_32894;
if(cljs.core.truth_(inst_32855)){
var statearr_32980_34954 = state_32894__$1;
(statearr_32980_34954[(1)] = (11));

} else {
var statearr_32982_34955 = state_32894__$1;
(statearr_32982_34955[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (18))){
var inst_32882 = (state_32894[(2)]);
var state_32894__$1 = state_32894;
var statearr_32985_34956 = state_32894__$1;
(statearr_32985_34956[(2)] = inst_32882);

(statearr_32985_34956[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (8))){
var inst_32849 = (state_32894[(13)]);
var state_32894__$1 = state_32894;
var statearr_32988_34957 = state_32894__$1;
(statearr_32988_34957[(2)] = inst_32849);

(statearr_32988_34957[(1)] = (10));


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
var cljs$core$async$state_machine__28599__auto__ = null;
var cljs$core$async$state_machine__28599__auto____0 = (function (){
var statearr_32992 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32992[(0)] = cljs$core$async$state_machine__28599__auto__);

(statearr_32992[(1)] = (1));

return statearr_32992;
});
var cljs$core$async$state_machine__28599__auto____1 = (function (state_32894){
while(true){
var ret_value__28600__auto__ = (function (){try{while(true){
var result__28601__auto__ = switch__28598__auto__(state_32894);
if(cljs.core.keyword_identical_QMARK_(result__28601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28601__auto__;
}
break;
}
}catch (e32998){var ex__28602__auto__ = e32998;
var statearr_32999_34958 = state_32894;
(statearr_32999_34958[(2)] = ex__28602__auto__);


if(cljs.core.seq((state_32894[(4)]))){
var statearr_33002_34959 = state_32894;
(statearr_33002_34959[(1)] = cljs.core.first((state_32894[(4)])));

} else {
throw ex__28602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34960 = state_32894;
state_32894 = G__34960;
continue;
} else {
return ret_value__28600__auto__;
}
break;
}
});
cljs$core$async$state_machine__28599__auto__ = function(state_32894){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28599__auto____1.call(this,state_32894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28599__auto____0;
cljs$core$async$state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28599__auto____1;
return cljs$core$async$state_machine__28599__auto__;
})()
})();
var state__29217__auto__ = (function (){var statearr_33005 = f__29216__auto__();
(statearr_33005[(6)] = c__29215__auto___34922);

return statearr_33005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29217__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
