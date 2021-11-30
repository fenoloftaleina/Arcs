goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35033 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35033(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35035 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35035(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33180 = coll;
var G__33181 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33180,G__33181) : shadow.dom.lazy_native_coll_seq.call(null,G__33180,G__33181));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33212 = arguments.length;
switch (G__33212) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33231 = arguments.length;
switch (G__33231) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33250 = arguments.length;
switch (G__33250) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33267 = arguments.length;
switch (G__33267) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33297 = arguments.length;
switch (G__33297) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33331 = arguments.length;
switch (G__33331) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33366){if((e33366 instanceof Object)){
var e = e33366;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33366;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33384 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33385 = null;
var count__33386 = (0);
var i__33387 = (0);
while(true){
if((i__33387 < count__33386)){
var el = chunk__33385.cljs$core$IIndexed$_nth$arity$2(null,i__33387);
var handler_35092__$1 = ((function (seq__33384,chunk__33385,count__33386,i__33387,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33384,chunk__33385,count__33386,i__33387,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35092__$1);


var G__35094 = seq__33384;
var G__35095 = chunk__33385;
var G__35096 = count__33386;
var G__35097 = (i__33387 + (1));
seq__33384 = G__35094;
chunk__33385 = G__35095;
count__33386 = G__35096;
i__33387 = G__35097;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33384);
if(temp__5753__auto__){
var seq__33384__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33384__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33384__$1);
var G__35099 = cljs.core.chunk_rest(seq__33384__$1);
var G__35100 = c__4679__auto__;
var G__35101 = cljs.core.count(c__4679__auto__);
var G__35102 = (0);
seq__33384 = G__35099;
chunk__33385 = G__35100;
count__33386 = G__35101;
i__33387 = G__35102;
continue;
} else {
var el = cljs.core.first(seq__33384__$1);
var handler_35103__$1 = ((function (seq__33384,chunk__33385,count__33386,i__33387,el,seq__33384__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33384,chunk__33385,count__33386,i__33387,el,seq__33384__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35103__$1);


var G__35106 = cljs.core.next(seq__33384__$1);
var G__35107 = null;
var G__35108 = (0);
var G__35109 = (0);
seq__33384 = G__35106;
chunk__33385 = G__35107;
count__33386 = G__35108;
i__33387 = G__35109;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33433 = arguments.length;
switch (G__33433) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33445 = cljs.core.seq(events);
var chunk__33446 = null;
var count__33447 = (0);
var i__33448 = (0);
while(true){
if((i__33448 < count__33447)){
var vec__33476 = chunk__33446.cljs$core$IIndexed$_nth$arity$2(null,i__33448);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33476,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33476,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35117 = seq__33445;
var G__35118 = chunk__33446;
var G__35119 = count__33447;
var G__35120 = (i__33448 + (1));
seq__33445 = G__35117;
chunk__33446 = G__35118;
count__33447 = G__35119;
i__33448 = G__35120;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33445);
if(temp__5753__auto__){
var seq__33445__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33445__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33445__$1);
var G__35121 = cljs.core.chunk_rest(seq__33445__$1);
var G__35122 = c__4679__auto__;
var G__35123 = cljs.core.count(c__4679__auto__);
var G__35124 = (0);
seq__33445 = G__35121;
chunk__33446 = G__35122;
count__33447 = G__35123;
i__33448 = G__35124;
continue;
} else {
var vec__33496 = cljs.core.first(seq__33445__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33496,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33496,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35125 = cljs.core.next(seq__33445__$1);
var G__35126 = null;
var G__35127 = (0);
var G__35128 = (0);
seq__33445 = G__35125;
chunk__33446 = G__35126;
count__33447 = G__35127;
i__33448 = G__35128;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33530 = cljs.core.seq(styles);
var chunk__33531 = null;
var count__33532 = (0);
var i__33533 = (0);
while(true){
if((i__33533 < count__33532)){
var vec__33556 = chunk__33531.cljs$core$IIndexed$_nth$arity$2(null,i__33533);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33556,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33556,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35131 = seq__33530;
var G__35132 = chunk__33531;
var G__35133 = count__33532;
var G__35134 = (i__33533 + (1));
seq__33530 = G__35131;
chunk__33531 = G__35132;
count__33532 = G__35133;
i__33533 = G__35134;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33530);
if(temp__5753__auto__){
var seq__33530__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33530__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33530__$1);
var G__35135 = cljs.core.chunk_rest(seq__33530__$1);
var G__35136 = c__4679__auto__;
var G__35137 = cljs.core.count(c__4679__auto__);
var G__35138 = (0);
seq__33530 = G__35135;
chunk__33531 = G__35136;
count__33532 = G__35137;
i__33533 = G__35138;
continue;
} else {
var vec__33566 = cljs.core.first(seq__33530__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33566,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33566,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35139 = cljs.core.next(seq__33530__$1);
var G__35140 = null;
var G__35141 = (0);
var G__35142 = (0);
seq__33530 = G__35139;
chunk__33531 = G__35140;
count__33532 = G__35141;
i__33533 = G__35142;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33578_35143 = key;
var G__33578_35144__$1 = (((G__33578_35143 instanceof cljs.core.Keyword))?G__33578_35143.fqn:null);
switch (G__33578_35144__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35148 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_35148,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_35148,"aria-");
}
})())){
el.setAttribute(ks_35148,value);
} else {
(el[ks_35148] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33652){
var map__33654 = p__33652;
var map__33654__$1 = cljs.core.__destructure_map(map__33654);
var props = map__33654__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33654__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33659 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33659,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33659,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33659,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33667 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33667,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33667;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33675 = arguments.length;
switch (G__33675) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33693){
var vec__33694 = p__33693;
var seq__33695 = cljs.core.seq(vec__33694);
var first__33696 = cljs.core.first(seq__33695);
var seq__33695__$1 = cljs.core.next(seq__33695);
var nn = first__33696;
var first__33696__$1 = cljs.core.first(seq__33695__$1);
var seq__33695__$2 = cljs.core.next(seq__33695__$1);
var np = first__33696__$1;
var nc = seq__33695__$2;
var node = vec__33694;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33706 = nn;
var G__33707 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33706,G__33707) : create_fn.call(null,G__33706,G__33707));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33708 = nn;
var G__33709 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33708,G__33709) : create_fn.call(null,G__33708,G__33709));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33714 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33714,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33714,(1),null);
var seq__33717_35163 = cljs.core.seq(node_children);
var chunk__33718_35164 = null;
var count__33719_35165 = (0);
var i__33720_35166 = (0);
while(true){
if((i__33720_35166 < count__33719_35165)){
var child_struct_35169 = chunk__33718_35164.cljs$core$IIndexed$_nth$arity$2(null,i__33720_35166);
var children_35172 = shadow.dom.dom_node(child_struct_35169);
if(cljs.core.seq_QMARK_(children_35172)){
var seq__33767_35173 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35172));
var chunk__33769_35174 = null;
var count__33770_35175 = (0);
var i__33771_35176 = (0);
while(true){
if((i__33771_35176 < count__33770_35175)){
var child_35179 = chunk__33769_35174.cljs$core$IIndexed$_nth$arity$2(null,i__33771_35176);
if(cljs.core.truth_(child_35179)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35179);


var G__35180 = seq__33767_35173;
var G__35181 = chunk__33769_35174;
var G__35182 = count__33770_35175;
var G__35183 = (i__33771_35176 + (1));
seq__33767_35173 = G__35180;
chunk__33769_35174 = G__35181;
count__33770_35175 = G__35182;
i__33771_35176 = G__35183;
continue;
} else {
var G__35184 = seq__33767_35173;
var G__35185 = chunk__33769_35174;
var G__35186 = count__33770_35175;
var G__35187 = (i__33771_35176 + (1));
seq__33767_35173 = G__35184;
chunk__33769_35174 = G__35185;
count__33770_35175 = G__35186;
i__33771_35176 = G__35187;
continue;
}
} else {
var temp__5753__auto___35189 = cljs.core.seq(seq__33767_35173);
if(temp__5753__auto___35189){
var seq__33767_35190__$1 = temp__5753__auto___35189;
if(cljs.core.chunked_seq_QMARK_(seq__33767_35190__$1)){
var c__4679__auto___35193 = cljs.core.chunk_first(seq__33767_35190__$1);
var G__35196 = cljs.core.chunk_rest(seq__33767_35190__$1);
var G__35197 = c__4679__auto___35193;
var G__35198 = cljs.core.count(c__4679__auto___35193);
var G__35199 = (0);
seq__33767_35173 = G__35196;
chunk__33769_35174 = G__35197;
count__33770_35175 = G__35198;
i__33771_35176 = G__35199;
continue;
} else {
var child_35201 = cljs.core.first(seq__33767_35190__$1);
if(cljs.core.truth_(child_35201)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35201);


var G__35202 = cljs.core.next(seq__33767_35190__$1);
var G__35203 = null;
var G__35204 = (0);
var G__35205 = (0);
seq__33767_35173 = G__35202;
chunk__33769_35174 = G__35203;
count__33770_35175 = G__35204;
i__33771_35176 = G__35205;
continue;
} else {
var G__35206 = cljs.core.next(seq__33767_35190__$1);
var G__35207 = null;
var G__35208 = (0);
var G__35209 = (0);
seq__33767_35173 = G__35206;
chunk__33769_35174 = G__35207;
count__33770_35175 = G__35208;
i__33771_35176 = G__35209;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35172);
}


var G__35211 = seq__33717_35163;
var G__35212 = chunk__33718_35164;
var G__35213 = count__33719_35165;
var G__35214 = (i__33720_35166 + (1));
seq__33717_35163 = G__35211;
chunk__33718_35164 = G__35212;
count__33719_35165 = G__35213;
i__33720_35166 = G__35214;
continue;
} else {
var temp__5753__auto___35216 = cljs.core.seq(seq__33717_35163);
if(temp__5753__auto___35216){
var seq__33717_35217__$1 = temp__5753__auto___35216;
if(cljs.core.chunked_seq_QMARK_(seq__33717_35217__$1)){
var c__4679__auto___35218 = cljs.core.chunk_first(seq__33717_35217__$1);
var G__35220 = cljs.core.chunk_rest(seq__33717_35217__$1);
var G__35221 = c__4679__auto___35218;
var G__35222 = cljs.core.count(c__4679__auto___35218);
var G__35223 = (0);
seq__33717_35163 = G__35220;
chunk__33718_35164 = G__35221;
count__33719_35165 = G__35222;
i__33720_35166 = G__35223;
continue;
} else {
var child_struct_35229 = cljs.core.first(seq__33717_35217__$1);
var children_35230 = shadow.dom.dom_node(child_struct_35229);
if(cljs.core.seq_QMARK_(children_35230)){
var seq__33799_35231 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35230));
var chunk__33801_35232 = null;
var count__33802_35233 = (0);
var i__33803_35234 = (0);
while(true){
if((i__33803_35234 < count__33802_35233)){
var child_35236 = chunk__33801_35232.cljs$core$IIndexed$_nth$arity$2(null,i__33803_35234);
if(cljs.core.truth_(child_35236)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35236);


var G__35241 = seq__33799_35231;
var G__35242 = chunk__33801_35232;
var G__35243 = count__33802_35233;
var G__35244 = (i__33803_35234 + (1));
seq__33799_35231 = G__35241;
chunk__33801_35232 = G__35242;
count__33802_35233 = G__35243;
i__33803_35234 = G__35244;
continue;
} else {
var G__35246 = seq__33799_35231;
var G__35247 = chunk__33801_35232;
var G__35248 = count__33802_35233;
var G__35249 = (i__33803_35234 + (1));
seq__33799_35231 = G__35246;
chunk__33801_35232 = G__35247;
count__33802_35233 = G__35248;
i__33803_35234 = G__35249;
continue;
}
} else {
var temp__5753__auto___35250__$1 = cljs.core.seq(seq__33799_35231);
if(temp__5753__auto___35250__$1){
var seq__33799_35251__$1 = temp__5753__auto___35250__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33799_35251__$1)){
var c__4679__auto___35252 = cljs.core.chunk_first(seq__33799_35251__$1);
var G__35253 = cljs.core.chunk_rest(seq__33799_35251__$1);
var G__35254 = c__4679__auto___35252;
var G__35255 = cljs.core.count(c__4679__auto___35252);
var G__35256 = (0);
seq__33799_35231 = G__35253;
chunk__33801_35232 = G__35254;
count__33802_35233 = G__35255;
i__33803_35234 = G__35256;
continue;
} else {
var child_35258 = cljs.core.first(seq__33799_35251__$1);
if(cljs.core.truth_(child_35258)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35258);


var G__35264 = cljs.core.next(seq__33799_35251__$1);
var G__35265 = null;
var G__35266 = (0);
var G__35267 = (0);
seq__33799_35231 = G__35264;
chunk__33801_35232 = G__35265;
count__33802_35233 = G__35266;
i__33803_35234 = G__35267;
continue;
} else {
var G__35268 = cljs.core.next(seq__33799_35251__$1);
var G__35269 = null;
var G__35270 = (0);
var G__35271 = (0);
seq__33799_35231 = G__35268;
chunk__33801_35232 = G__35269;
count__33802_35233 = G__35270;
i__33803_35234 = G__35271;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35230);
}


var G__35275 = cljs.core.next(seq__33717_35217__$1);
var G__35276 = null;
var G__35277 = (0);
var G__35278 = (0);
seq__33717_35163 = G__35275;
chunk__33718_35164 = G__35276;
count__33719_35165 = G__35277;
i__33720_35166 = G__35278;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33844 = cljs.core.seq(node);
var chunk__33845 = null;
var count__33846 = (0);
var i__33847 = (0);
while(true){
if((i__33847 < count__33846)){
var n = chunk__33845.cljs$core$IIndexed$_nth$arity$2(null,i__33847);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35292 = seq__33844;
var G__35293 = chunk__33845;
var G__35294 = count__33846;
var G__35295 = (i__33847 + (1));
seq__33844 = G__35292;
chunk__33845 = G__35293;
count__33846 = G__35294;
i__33847 = G__35295;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33844);
if(temp__5753__auto__){
var seq__33844__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33844__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33844__$1);
var G__35301 = cljs.core.chunk_rest(seq__33844__$1);
var G__35302 = c__4679__auto__;
var G__35303 = cljs.core.count(c__4679__auto__);
var G__35304 = (0);
seq__33844 = G__35301;
chunk__33845 = G__35302;
count__33846 = G__35303;
i__33847 = G__35304;
continue;
} else {
var n = cljs.core.first(seq__33844__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35305 = cljs.core.next(seq__33844__$1);
var G__35306 = null;
var G__35307 = (0);
var G__35308 = (0);
seq__33844 = G__35305;
chunk__33845 = G__35306;
count__33846 = G__35307;
i__33847 = G__35308;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33868 = arguments.length;
switch (G__33868) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33882 = arguments.length;
switch (G__33882) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33889 = arguments.length;
switch (G__33889) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35320 = arguments.length;
var i__4865__auto___35321 = (0);
while(true){
if((i__4865__auto___35321 < len__4864__auto___35320)){
args__4870__auto__.push((arguments[i__4865__auto___35321]));

var G__35322 = (i__4865__auto___35321 + (1));
i__4865__auto___35321 = G__35322;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33962_35323 = cljs.core.seq(nodes);
var chunk__33963_35324 = null;
var count__33964_35325 = (0);
var i__33965_35326 = (0);
while(true){
if((i__33965_35326 < count__33964_35325)){
var node_35331 = chunk__33963_35324.cljs$core$IIndexed$_nth$arity$2(null,i__33965_35326);
fragment.appendChild(shadow.dom._to_dom(node_35331));


var G__35332 = seq__33962_35323;
var G__35333 = chunk__33963_35324;
var G__35334 = count__33964_35325;
var G__35335 = (i__33965_35326 + (1));
seq__33962_35323 = G__35332;
chunk__33963_35324 = G__35333;
count__33964_35325 = G__35334;
i__33965_35326 = G__35335;
continue;
} else {
var temp__5753__auto___35341 = cljs.core.seq(seq__33962_35323);
if(temp__5753__auto___35341){
var seq__33962_35342__$1 = temp__5753__auto___35341;
if(cljs.core.chunked_seq_QMARK_(seq__33962_35342__$1)){
var c__4679__auto___35343 = cljs.core.chunk_first(seq__33962_35342__$1);
var G__35344 = cljs.core.chunk_rest(seq__33962_35342__$1);
var G__35345 = c__4679__auto___35343;
var G__35346 = cljs.core.count(c__4679__auto___35343);
var G__35347 = (0);
seq__33962_35323 = G__35344;
chunk__33963_35324 = G__35345;
count__33964_35325 = G__35346;
i__33965_35326 = G__35347;
continue;
} else {
var node_35348 = cljs.core.first(seq__33962_35342__$1);
fragment.appendChild(shadow.dom._to_dom(node_35348));


var G__35353 = cljs.core.next(seq__33962_35342__$1);
var G__35354 = null;
var G__35355 = (0);
var G__35356 = (0);
seq__33962_35323 = G__35353;
chunk__33963_35324 = G__35354;
count__33964_35325 = G__35355;
i__33965_35326 = G__35356;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33938){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33938));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33995_35361 = cljs.core.seq(scripts);
var chunk__33996_35362 = null;
var count__33997_35363 = (0);
var i__33998_35364 = (0);
while(true){
if((i__33998_35364 < count__33997_35363)){
var vec__34026_35365 = chunk__33996_35362.cljs$core$IIndexed$_nth$arity$2(null,i__33998_35364);
var script_tag_35366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34026_35365,(0),null);
var script_body_35367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34026_35365,(1),null);
eval(script_body_35367);


var G__35368 = seq__33995_35361;
var G__35369 = chunk__33996_35362;
var G__35370 = count__33997_35363;
var G__35371 = (i__33998_35364 + (1));
seq__33995_35361 = G__35368;
chunk__33996_35362 = G__35369;
count__33997_35363 = G__35370;
i__33998_35364 = G__35371;
continue;
} else {
var temp__5753__auto___35372 = cljs.core.seq(seq__33995_35361);
if(temp__5753__auto___35372){
var seq__33995_35373__$1 = temp__5753__auto___35372;
if(cljs.core.chunked_seq_QMARK_(seq__33995_35373__$1)){
var c__4679__auto___35374 = cljs.core.chunk_first(seq__33995_35373__$1);
var G__35375 = cljs.core.chunk_rest(seq__33995_35373__$1);
var G__35376 = c__4679__auto___35374;
var G__35377 = cljs.core.count(c__4679__auto___35374);
var G__35378 = (0);
seq__33995_35361 = G__35375;
chunk__33996_35362 = G__35376;
count__33997_35363 = G__35377;
i__33998_35364 = G__35378;
continue;
} else {
var vec__34034_35379 = cljs.core.first(seq__33995_35373__$1);
var script_tag_35380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34034_35379,(0),null);
var script_body_35381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34034_35379,(1),null);
eval(script_body_35381);


var G__35386 = cljs.core.next(seq__33995_35373__$1);
var G__35387 = null;
var G__35388 = (0);
var G__35389 = (0);
seq__33995_35361 = G__35386;
chunk__33996_35362 = G__35387;
count__33997_35363 = G__35388;
i__33998_35364 = G__35389;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34037){
var vec__34039 = p__34037;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34039,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34039,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34069 = arguments.length;
switch (G__34069) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34106 = cljs.core.seq(style_keys);
var chunk__34107 = null;
var count__34108 = (0);
var i__34109 = (0);
while(true){
if((i__34109 < count__34108)){
var it = chunk__34107.cljs$core$IIndexed$_nth$arity$2(null,i__34109);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35400 = seq__34106;
var G__35401 = chunk__34107;
var G__35402 = count__34108;
var G__35403 = (i__34109 + (1));
seq__34106 = G__35400;
chunk__34107 = G__35401;
count__34108 = G__35402;
i__34109 = G__35403;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34106);
if(temp__5753__auto__){
var seq__34106__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34106__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34106__$1);
var G__35405 = cljs.core.chunk_rest(seq__34106__$1);
var G__35406 = c__4679__auto__;
var G__35407 = cljs.core.count(c__4679__auto__);
var G__35408 = (0);
seq__34106 = G__35405;
chunk__34107 = G__35406;
count__34108 = G__35407;
i__34109 = G__35408;
continue;
} else {
var it = cljs.core.first(seq__34106__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35410 = cljs.core.next(seq__34106__$1);
var G__35411 = null;
var G__35412 = (0);
var G__35413 = (0);
seq__34106 = G__35410;
chunk__34107 = G__35411;
count__34108 = G__35412;
i__34109 = G__35413;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k34122,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__34134 = k34122;
var G__34134__$1 = (((G__34134 instanceof cljs.core.Keyword))?G__34134.fqn:null);
switch (G__34134__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34122,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__34137){
var vec__34138 = p__34137;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34138,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34138,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34121){
var self__ = this;
var G__34121__$1 = this;
return (new cljs.core.RecordIter((0),G__34121__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34123,other34124){
var self__ = this;
var this34123__$1 = this;
return (((!((other34124 == null)))) && ((((this34123__$1.constructor === other34124.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34123__$1.x,other34124.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34123__$1.y,other34124.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34123__$1.__extmap,other34124.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k34122){
var self__ = this;
var this__4509__auto____$1 = this;
var G__34267 = k34122;
var G__34267__$1 = (((G__34267 instanceof cljs.core.Keyword))?G__34267.fqn:null);
switch (G__34267__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34122);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__34121){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__34279 = cljs.core.keyword_identical_QMARK_;
var expr__34280 = k__4511__auto__;
if(cljs.core.truth_((pred__34279.cljs$core$IFn$_invoke$arity$2 ? pred__34279.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34280) : pred__34279.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34280)))){
return (new shadow.dom.Coordinate(G__34121,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34279.cljs$core$IFn$_invoke$arity$2 ? pred__34279.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34280) : pred__34279.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34280)))){
return (new shadow.dom.Coordinate(self__.x,G__34121,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__34121),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__34121){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34121,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34125){
var extmap__4542__auto__ = (function (){var G__34337 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34125,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34125)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34337);
} else {
return G__34337;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34125),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34125),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k34356,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__34386 = k34356;
var G__34386__$1 = (((G__34386 instanceof cljs.core.Keyword))?G__34386.fqn:null);
switch (G__34386__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34356,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__34395){
var vec__34397 = p__34395;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34397,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34397,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34355){
var self__ = this;
var G__34355__$1 = this;
return (new cljs.core.RecordIter((0),G__34355__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34357,other34358){
var self__ = this;
var this34357__$1 = this;
return (((!((other34358 == null)))) && ((((this34357__$1.constructor === other34358.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34357__$1.w,other34358.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34357__$1.h,other34358.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34357__$1.__extmap,other34358.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k34356){
var self__ = this;
var this__4509__auto____$1 = this;
var G__34485 = k34356;
var G__34485__$1 = (((G__34485 instanceof cljs.core.Keyword))?G__34485.fqn:null);
switch (G__34485__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34356);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__34355){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__34489 = cljs.core.keyword_identical_QMARK_;
var expr__34490 = k__4511__auto__;
if(cljs.core.truth_((pred__34489.cljs$core$IFn$_invoke$arity$2 ? pred__34489.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34490) : pred__34489.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34490)))){
return (new shadow.dom.Size(G__34355,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34489.cljs$core$IFn$_invoke$arity$2 ? pred__34489.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34490) : pred__34489.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34490)))){
return (new shadow.dom.Size(self__.w,G__34355,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__34355),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__34355){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34355,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34363){
var extmap__4542__auto__ = (function (){var G__34550 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34363,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34363)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34550);
} else {
return G__34550;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34363),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34363),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__35464 = (i + (1));
var G__35465 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35464;
ret = G__35465;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34642){
var vec__34647 = p__34642;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34647,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34647,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34661 = arguments.length;
switch (G__34661) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35468 = ps;
var G__35469 = (i + (1));
el__$1 = G__35468;
i = G__35469;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34724 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34724,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34724,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34724,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34727_35476 = cljs.core.seq(props);
var chunk__34728_35477 = null;
var count__34729_35478 = (0);
var i__34730_35479 = (0);
while(true){
if((i__34730_35479 < count__34729_35478)){
var vec__34770_35483 = chunk__34728_35477.cljs$core$IIndexed$_nth$arity$2(null,i__34730_35479);
var k_35484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34770_35483,(0),null);
var v_35485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34770_35483,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_35484);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35484),v_35485);


var G__35488 = seq__34727_35476;
var G__35489 = chunk__34728_35477;
var G__35490 = count__34729_35478;
var G__35491 = (i__34730_35479 + (1));
seq__34727_35476 = G__35488;
chunk__34728_35477 = G__35489;
count__34729_35478 = G__35490;
i__34730_35479 = G__35491;
continue;
} else {
var temp__5753__auto___35493 = cljs.core.seq(seq__34727_35476);
if(temp__5753__auto___35493){
var seq__34727_35494__$1 = temp__5753__auto___35493;
if(cljs.core.chunked_seq_QMARK_(seq__34727_35494__$1)){
var c__4679__auto___35495 = cljs.core.chunk_first(seq__34727_35494__$1);
var G__35496 = cljs.core.chunk_rest(seq__34727_35494__$1);
var G__35497 = c__4679__auto___35495;
var G__35498 = cljs.core.count(c__4679__auto___35495);
var G__35499 = (0);
seq__34727_35476 = G__35496;
chunk__34728_35477 = G__35497;
count__34729_35478 = G__35498;
i__34730_35479 = G__35499;
continue;
} else {
var vec__34795_35501 = cljs.core.first(seq__34727_35494__$1);
var k_35502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34795_35501,(0),null);
var v_35503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34795_35501,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_35502);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35502),v_35503);


var G__35504 = cljs.core.next(seq__34727_35494__$1);
var G__35505 = null;
var G__35506 = (0);
var G__35507 = (0);
seq__34727_35476 = G__35504;
chunk__34728_35477 = G__35505;
count__34729_35478 = G__35506;
i__34730_35479 = G__35507;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34812 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34812,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34812,(1),null);
var seq__34816_35508 = cljs.core.seq(node_children);
var chunk__34818_35509 = null;
var count__34819_35510 = (0);
var i__34820_35511 = (0);
while(true){
if((i__34820_35511 < count__34819_35510)){
var child_struct_35512 = chunk__34818_35509.cljs$core$IIndexed$_nth$arity$2(null,i__34820_35511);
if((!((child_struct_35512 == null)))){
if(typeof child_struct_35512 === 'string'){
var text_35513 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35513),child_struct_35512].join(''));
} else {
var children_35514 = shadow.dom.svg_node(child_struct_35512);
if(cljs.core.seq_QMARK_(children_35514)){
var seq__34900_35515 = cljs.core.seq(children_35514);
var chunk__34902_35516 = null;
var count__34903_35517 = (0);
var i__34904_35518 = (0);
while(true){
if((i__34904_35518 < count__34903_35517)){
var child_35520 = chunk__34902_35516.cljs$core$IIndexed$_nth$arity$2(null,i__34904_35518);
if(cljs.core.truth_(child_35520)){
node.appendChild(child_35520);


var G__35521 = seq__34900_35515;
var G__35522 = chunk__34902_35516;
var G__35523 = count__34903_35517;
var G__35524 = (i__34904_35518 + (1));
seq__34900_35515 = G__35521;
chunk__34902_35516 = G__35522;
count__34903_35517 = G__35523;
i__34904_35518 = G__35524;
continue;
} else {
var G__35525 = seq__34900_35515;
var G__35526 = chunk__34902_35516;
var G__35527 = count__34903_35517;
var G__35528 = (i__34904_35518 + (1));
seq__34900_35515 = G__35525;
chunk__34902_35516 = G__35526;
count__34903_35517 = G__35527;
i__34904_35518 = G__35528;
continue;
}
} else {
var temp__5753__auto___35530 = cljs.core.seq(seq__34900_35515);
if(temp__5753__auto___35530){
var seq__34900_35531__$1 = temp__5753__auto___35530;
if(cljs.core.chunked_seq_QMARK_(seq__34900_35531__$1)){
var c__4679__auto___35532 = cljs.core.chunk_first(seq__34900_35531__$1);
var G__35533 = cljs.core.chunk_rest(seq__34900_35531__$1);
var G__35534 = c__4679__auto___35532;
var G__35535 = cljs.core.count(c__4679__auto___35532);
var G__35536 = (0);
seq__34900_35515 = G__35533;
chunk__34902_35516 = G__35534;
count__34903_35517 = G__35535;
i__34904_35518 = G__35536;
continue;
} else {
var child_35537 = cljs.core.first(seq__34900_35531__$1);
if(cljs.core.truth_(child_35537)){
node.appendChild(child_35537);


var G__35538 = cljs.core.next(seq__34900_35531__$1);
var G__35539 = null;
var G__35540 = (0);
var G__35541 = (0);
seq__34900_35515 = G__35538;
chunk__34902_35516 = G__35539;
count__34903_35517 = G__35540;
i__34904_35518 = G__35541;
continue;
} else {
var G__35542 = cljs.core.next(seq__34900_35531__$1);
var G__35543 = null;
var G__35544 = (0);
var G__35545 = (0);
seq__34900_35515 = G__35542;
chunk__34902_35516 = G__35543;
count__34903_35517 = G__35544;
i__34904_35518 = G__35545;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35514);
}
}


var G__35546 = seq__34816_35508;
var G__35547 = chunk__34818_35509;
var G__35548 = count__34819_35510;
var G__35549 = (i__34820_35511 + (1));
seq__34816_35508 = G__35546;
chunk__34818_35509 = G__35547;
count__34819_35510 = G__35548;
i__34820_35511 = G__35549;
continue;
} else {
var G__35550 = seq__34816_35508;
var G__35551 = chunk__34818_35509;
var G__35552 = count__34819_35510;
var G__35553 = (i__34820_35511 + (1));
seq__34816_35508 = G__35550;
chunk__34818_35509 = G__35551;
count__34819_35510 = G__35552;
i__34820_35511 = G__35553;
continue;
}
} else {
var temp__5753__auto___35554 = cljs.core.seq(seq__34816_35508);
if(temp__5753__auto___35554){
var seq__34816_35555__$1 = temp__5753__auto___35554;
if(cljs.core.chunked_seq_QMARK_(seq__34816_35555__$1)){
var c__4679__auto___35558 = cljs.core.chunk_first(seq__34816_35555__$1);
var G__35561 = cljs.core.chunk_rest(seq__34816_35555__$1);
var G__35562 = c__4679__auto___35558;
var G__35563 = cljs.core.count(c__4679__auto___35558);
var G__35564 = (0);
seq__34816_35508 = G__35561;
chunk__34818_35509 = G__35562;
count__34819_35510 = G__35563;
i__34820_35511 = G__35564;
continue;
} else {
var child_struct_35567 = cljs.core.first(seq__34816_35555__$1);
if((!((child_struct_35567 == null)))){
if(typeof child_struct_35567 === 'string'){
var text_35568 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35568),child_struct_35567].join(''));
} else {
var children_35573 = shadow.dom.svg_node(child_struct_35567);
if(cljs.core.seq_QMARK_(children_35573)){
var seq__34931_35575 = cljs.core.seq(children_35573);
var chunk__34933_35576 = null;
var count__34934_35577 = (0);
var i__34935_35578 = (0);
while(true){
if((i__34935_35578 < count__34934_35577)){
var child_35579 = chunk__34933_35576.cljs$core$IIndexed$_nth$arity$2(null,i__34935_35578);
if(cljs.core.truth_(child_35579)){
node.appendChild(child_35579);


var G__35581 = seq__34931_35575;
var G__35582 = chunk__34933_35576;
var G__35583 = count__34934_35577;
var G__35584 = (i__34935_35578 + (1));
seq__34931_35575 = G__35581;
chunk__34933_35576 = G__35582;
count__34934_35577 = G__35583;
i__34935_35578 = G__35584;
continue;
} else {
var G__35585 = seq__34931_35575;
var G__35586 = chunk__34933_35576;
var G__35587 = count__34934_35577;
var G__35588 = (i__34935_35578 + (1));
seq__34931_35575 = G__35585;
chunk__34933_35576 = G__35586;
count__34934_35577 = G__35587;
i__34935_35578 = G__35588;
continue;
}
} else {
var temp__5753__auto___35590__$1 = cljs.core.seq(seq__34931_35575);
if(temp__5753__auto___35590__$1){
var seq__34931_35591__$1 = temp__5753__auto___35590__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34931_35591__$1)){
var c__4679__auto___35592 = cljs.core.chunk_first(seq__34931_35591__$1);
var G__35593 = cljs.core.chunk_rest(seq__34931_35591__$1);
var G__35594 = c__4679__auto___35592;
var G__35595 = cljs.core.count(c__4679__auto___35592);
var G__35596 = (0);
seq__34931_35575 = G__35593;
chunk__34933_35576 = G__35594;
count__34934_35577 = G__35595;
i__34935_35578 = G__35596;
continue;
} else {
var child_35597 = cljs.core.first(seq__34931_35591__$1);
if(cljs.core.truth_(child_35597)){
node.appendChild(child_35597);


var G__35599 = cljs.core.next(seq__34931_35591__$1);
var G__35600 = null;
var G__35601 = (0);
var G__35602 = (0);
seq__34931_35575 = G__35599;
chunk__34933_35576 = G__35600;
count__34934_35577 = G__35601;
i__34935_35578 = G__35602;
continue;
} else {
var G__35603 = cljs.core.next(seq__34931_35591__$1);
var G__35604 = null;
var G__35605 = (0);
var G__35606 = (0);
seq__34931_35575 = G__35603;
chunk__34933_35576 = G__35604;
count__34934_35577 = G__35605;
i__34935_35578 = G__35606;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35573);
}
}


var G__35608 = cljs.core.next(seq__34816_35555__$1);
var G__35609 = null;
var G__35610 = (0);
var G__35611 = (0);
seq__34816_35508 = G__35608;
chunk__34818_35509 = G__35609;
count__34819_35510 = G__35610;
i__34820_35511 = G__35611;
continue;
} else {
var G__35612 = cljs.core.next(seq__34816_35555__$1);
var G__35613 = null;
var G__35614 = (0);
var G__35615 = (0);
seq__34816_35508 = G__35612;
chunk__34818_35509 = G__35613;
count__34819_35510 = G__35614;
i__34820_35511 = G__35615;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35619 = arguments.length;
var i__4865__auto___35620 = (0);
while(true){
if((i__4865__auto___35620 < len__4864__auto___35619)){
args__4870__auto__.push((arguments[i__4865__auto___35620]));

var G__35621 = (i__4865__auto___35620 + (1));
i__4865__auto___35620 = G__35621;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34961){
var G__34962 = cljs.core.first(seq34961);
var seq34961__$1 = cljs.core.next(seq34961);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34962,seq34961__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34971 = arguments.length;
switch (G__34971) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__29215__auto___35633 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29216__auto__ = (function (){var switch__28598__auto__ = (function (state_34981){
var state_val_34982 = (state_34981[(1)]);
if((state_val_34982 === (1))){
var state_34981__$1 = state_34981;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34981__$1,(2),once_or_cleanup);
} else {
if((state_val_34982 === (2))){
var inst_34978 = (state_34981[(2)]);
var inst_34979 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34981__$1 = (function (){var statearr_34983 = state_34981;
(statearr_34983[(7)] = inst_34978);

return statearr_34983;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34981__$1,inst_34979);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28599__auto__ = null;
var shadow$dom$state_machine__28599__auto____0 = (function (){
var statearr_34986 = [null,null,null,null,null,null,null,null];
(statearr_34986[(0)] = shadow$dom$state_machine__28599__auto__);

(statearr_34986[(1)] = (1));

return statearr_34986;
});
var shadow$dom$state_machine__28599__auto____1 = (function (state_34981){
while(true){
var ret_value__28600__auto__ = (function (){try{while(true){
var result__28601__auto__ = switch__28598__auto__(state_34981);
if(cljs.core.keyword_identical_QMARK_(result__28601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28601__auto__;
}
break;
}
}catch (e34990){var ex__28602__auto__ = e34990;
var statearr_34992_35637 = state_34981;
(statearr_34992_35637[(2)] = ex__28602__auto__);


if(cljs.core.seq((state_34981[(4)]))){
var statearr_34997_35641 = state_34981;
(statearr_34997_35641[(1)] = cljs.core.first((state_34981[(4)])));

} else {
throw ex__28602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35643 = state_34981;
state_34981 = G__35643;
continue;
} else {
return ret_value__28600__auto__;
}
break;
}
});
shadow$dom$state_machine__28599__auto__ = function(state_34981){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28599__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28599__auto____1.call(this,state_34981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28599__auto____0;
shadow$dom$state_machine__28599__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28599__auto____1;
return shadow$dom$state_machine__28599__auto__;
})()
})();
var state__29217__auto__ = (function (){var statearr_35003 = f__29216__auto__();
(statearr_35003[(6)] = c__29215__auto___35633);

return statearr_35003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29217__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
