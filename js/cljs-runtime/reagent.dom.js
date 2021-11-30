goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__36384 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__36385 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__36385);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__36386 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__36387 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__36387);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__36386);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__36384);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__36393 = arguments.length;
switch (G__36393) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__36395 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36395,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36395,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__36403_36427 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__36404_36428 = null;
var count__36405_36429 = (0);
var i__36406_36430 = (0);
while(true){
if((i__36406_36430 < count__36405_36429)){
var vec__36415_36431 = chunk__36404_36428.cljs$core$IIndexed$_nth$arity$2(null,i__36406_36430);
var container_36432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36415_36431,(0),null);
var comp_36433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36415_36431,(1),null);
reagent.dom.re_render_component(comp_36433,container_36432);


var G__36434 = seq__36403_36427;
var G__36435 = chunk__36404_36428;
var G__36436 = count__36405_36429;
var G__36437 = (i__36406_36430 + (1));
seq__36403_36427 = G__36434;
chunk__36404_36428 = G__36435;
count__36405_36429 = G__36436;
i__36406_36430 = G__36437;
continue;
} else {
var temp__5753__auto___36438 = cljs.core.seq(seq__36403_36427);
if(temp__5753__auto___36438){
var seq__36403_36439__$1 = temp__5753__auto___36438;
if(cljs.core.chunked_seq_QMARK_(seq__36403_36439__$1)){
var c__4679__auto___36440 = cljs.core.chunk_first(seq__36403_36439__$1);
var G__36441 = cljs.core.chunk_rest(seq__36403_36439__$1);
var G__36442 = c__4679__auto___36440;
var G__36443 = cljs.core.count(c__4679__auto___36440);
var G__36444 = (0);
seq__36403_36427 = G__36441;
chunk__36404_36428 = G__36442;
count__36405_36429 = G__36443;
i__36406_36430 = G__36444;
continue;
} else {
var vec__36420_36445 = cljs.core.first(seq__36403_36439__$1);
var container_36446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36420_36445,(0),null);
var comp_36447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36420_36445,(1),null);
reagent.dom.re_render_component(comp_36447,container_36446);


var G__36448 = cljs.core.next(seq__36403_36439__$1);
var G__36449 = null;
var G__36450 = (0);
var G__36451 = (0);
seq__36403_36427 = G__36448;
chunk__36404_36428 = G__36449;
count__36405_36429 = G__36450;
i__36406_36430 = G__36451;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
