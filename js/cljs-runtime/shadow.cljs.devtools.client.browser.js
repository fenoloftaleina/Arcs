goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36770 = arguments.length;
var i__4865__auto___36771 = (0);
while(true){
if((i__4865__auto___36771 < len__4864__auto___36770)){
args__4870__auto__.push((arguments[i__4865__auto___36771]));

var G__36772 = (i__4865__auto___36771 + (1));
i__4865__auto___36771 = G__36772;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36641){
var G__36642 = cljs.core.first(seq36641);
var seq36641__$1 = cljs.core.next(seq36641);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36642,seq36641__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36643 = cljs.core.seq(sources);
var chunk__36644 = null;
var count__36645 = (0);
var i__36646 = (0);
while(true){
if((i__36646 < count__36645)){
var map__36656 = chunk__36644.cljs$core$IIndexed$_nth$arity$2(null,i__36646);
var map__36656__$1 = cljs.core.__destructure_map(map__36656);
var src = map__36656__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36656__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36656__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36656__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36656__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36657){var e_36773 = e36657;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36773);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36773.message)].join('')));
}

var G__36774 = seq__36643;
var G__36775 = chunk__36644;
var G__36776 = count__36645;
var G__36777 = (i__36646 + (1));
seq__36643 = G__36774;
chunk__36644 = G__36775;
count__36645 = G__36776;
i__36646 = G__36777;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36643);
if(temp__5753__auto__){
var seq__36643__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36643__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36643__$1);
var G__36778 = cljs.core.chunk_rest(seq__36643__$1);
var G__36779 = c__4679__auto__;
var G__36780 = cljs.core.count(c__4679__auto__);
var G__36781 = (0);
seq__36643 = G__36778;
chunk__36644 = G__36779;
count__36645 = G__36780;
i__36646 = G__36781;
continue;
} else {
var map__36658 = cljs.core.first(seq__36643__$1);
var map__36658__$1 = cljs.core.__destructure_map(map__36658);
var src = map__36658__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36658__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36658__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36658__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36658__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36659){var e_36782 = e36659;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36782);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36782.message)].join('')));
}

var G__36783 = cljs.core.next(seq__36643__$1);
var G__36784 = null;
var G__36785 = (0);
var G__36786 = (0);
seq__36643 = G__36783;
chunk__36644 = G__36784;
count__36645 = G__36785;
i__36646 = G__36786;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36660 = cljs.core.seq(js_requires);
var chunk__36661 = null;
var count__36662 = (0);
var i__36663 = (0);
while(true){
if((i__36663 < count__36662)){
var js_ns = chunk__36661.cljs$core$IIndexed$_nth$arity$2(null,i__36663);
var require_str_36787 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36787);


var G__36788 = seq__36660;
var G__36789 = chunk__36661;
var G__36790 = count__36662;
var G__36791 = (i__36663 + (1));
seq__36660 = G__36788;
chunk__36661 = G__36789;
count__36662 = G__36790;
i__36663 = G__36791;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36660);
if(temp__5753__auto__){
var seq__36660__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36660__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36660__$1);
var G__36792 = cljs.core.chunk_rest(seq__36660__$1);
var G__36793 = c__4679__auto__;
var G__36794 = cljs.core.count(c__4679__auto__);
var G__36795 = (0);
seq__36660 = G__36792;
chunk__36661 = G__36793;
count__36662 = G__36794;
i__36663 = G__36795;
continue;
} else {
var js_ns = cljs.core.first(seq__36660__$1);
var require_str_36796 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36796);


var G__36797 = cljs.core.next(seq__36660__$1);
var G__36798 = null;
var G__36799 = (0);
var G__36800 = (0);
seq__36660 = G__36797;
chunk__36661 = G__36798;
count__36662 = G__36799;
i__36663 = G__36800;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36667){
var map__36668 = p__36667;
var map__36668__$1 = cljs.core.__destructure_map(map__36668);
var msg = map__36668__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36668__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36668__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36669(s__36670){
return (new cljs.core.LazySeq(null,(function (){
var s__36670__$1 = s__36670;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__36670__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__36675 = cljs.core.first(xs__6308__auto__);
var map__36675__$1 = cljs.core.__destructure_map(map__36675);
var src = map__36675__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36675__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36675__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__36670__$1,map__36675,map__36675__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36668,map__36668__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36669_$_iter__36671(s__36672){
return (new cljs.core.LazySeq(null,((function (s__36670__$1,map__36675,map__36675__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36668,map__36668__$1,msg,info,reload_info){
return (function (){
var s__36672__$1 = s__36672;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__36672__$1);
if(temp__5753__auto____$1){
var s__36672__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36672__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__36672__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__36674 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__36673 = (0);
while(true){
if((i__36673 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__36673);
cljs.core.chunk_append(b__36674,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36801 = (i__36673 + (1));
i__36673 = G__36801;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36674),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36669_$_iter__36671(cljs.core.chunk_rest(s__36672__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36674),null);
}
} else {
var warning = cljs.core.first(s__36672__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36669_$_iter__36671(cljs.core.rest(s__36672__$2)));
}
} else {
return null;
}
break;
}
});})(s__36670__$1,map__36675,map__36675__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36668,map__36668__$1,msg,info,reload_info))
,null,null));
});})(s__36670__$1,map__36675,map__36675__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36668,map__36668__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36669(cljs.core.rest(s__36670__$1)));
} else {
var G__36802 = cljs.core.rest(s__36670__$1);
s__36670__$1 = G__36802;
continue;
}
} else {
var G__36803 = cljs.core.rest(s__36670__$1);
s__36670__$1 = G__36803;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__36676_36804 = cljs.core.seq(warnings);
var chunk__36677_36805 = null;
var count__36678_36806 = (0);
var i__36679_36807 = (0);
while(true){
if((i__36679_36807 < count__36678_36806)){
var map__36682_36808 = chunk__36677_36805.cljs$core$IIndexed$_nth$arity$2(null,i__36679_36807);
var map__36682_36809__$1 = cljs.core.__destructure_map(map__36682_36808);
var w_36810 = map__36682_36809__$1;
var msg_36811__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36682_36809__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36682_36809__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36682_36809__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36682_36809__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36814)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36812),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36813),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36811__$1)].join(''));


var G__36815 = seq__36676_36804;
var G__36816 = chunk__36677_36805;
var G__36817 = count__36678_36806;
var G__36818 = (i__36679_36807 + (1));
seq__36676_36804 = G__36815;
chunk__36677_36805 = G__36816;
count__36678_36806 = G__36817;
i__36679_36807 = G__36818;
continue;
} else {
var temp__5753__auto___36819 = cljs.core.seq(seq__36676_36804);
if(temp__5753__auto___36819){
var seq__36676_36820__$1 = temp__5753__auto___36819;
if(cljs.core.chunked_seq_QMARK_(seq__36676_36820__$1)){
var c__4679__auto___36821 = cljs.core.chunk_first(seq__36676_36820__$1);
var G__36822 = cljs.core.chunk_rest(seq__36676_36820__$1);
var G__36823 = c__4679__auto___36821;
var G__36824 = cljs.core.count(c__4679__auto___36821);
var G__36825 = (0);
seq__36676_36804 = G__36822;
chunk__36677_36805 = G__36823;
count__36678_36806 = G__36824;
i__36679_36807 = G__36825;
continue;
} else {
var map__36683_36826 = cljs.core.first(seq__36676_36820__$1);
var map__36683_36827__$1 = cljs.core.__destructure_map(map__36683_36826);
var w_36828 = map__36683_36827__$1;
var msg_36829__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36683_36827__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36683_36827__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36683_36827__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36683_36827__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36832)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36830),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36831),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36829__$1)].join(''));


var G__36833 = cljs.core.next(seq__36676_36820__$1);
var G__36834 = null;
var G__36835 = (0);
var G__36836 = (0);
seq__36676_36804 = G__36833;
chunk__36677_36805 = G__36834;
count__36678_36806 = G__36835;
i__36679_36807 = G__36836;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36666_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36666_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36684){
var map__36685 = p__36684;
var map__36685__$1 = cljs.core.__destructure_map(map__36685);
var msg = map__36685__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36685__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36686 = cljs.core.seq(updates);
var chunk__36688 = null;
var count__36689 = (0);
var i__36690 = (0);
while(true){
if((i__36690 < count__36689)){
var path = chunk__36688.cljs$core$IIndexed$_nth$arity$2(null,i__36690);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36720_36837 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36724_36838 = null;
var count__36725_36839 = (0);
var i__36726_36840 = (0);
while(true){
if((i__36726_36840 < count__36725_36839)){
var node_36841 = chunk__36724_36838.cljs$core$IIndexed$_nth$arity$2(null,i__36726_36840);
if(cljs.core.not(node_36841.shadow$old)){
var path_match_36842 = shadow.cljs.devtools.client.browser.match_paths(node_36841.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36842)){
var new_link_36843 = (function (){var G__36732 = node_36841.cloneNode(true);
G__36732.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36842),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36732;
})();
(node_36841.shadow$old = true);

(new_link_36843.onload = ((function (seq__36720_36837,chunk__36724_36838,count__36725_36839,i__36726_36840,seq__36686,chunk__36688,count__36689,i__36690,new_link_36843,path_match_36842,node_36841,path,map__36685,map__36685__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36841);
});})(seq__36720_36837,chunk__36724_36838,count__36725_36839,i__36726_36840,seq__36686,chunk__36688,count__36689,i__36690,new_link_36843,path_match_36842,node_36841,path,map__36685,map__36685__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36842], 0));

goog.dom.insertSiblingAfter(new_link_36843,node_36841);


var G__36844 = seq__36720_36837;
var G__36845 = chunk__36724_36838;
var G__36846 = count__36725_36839;
var G__36847 = (i__36726_36840 + (1));
seq__36720_36837 = G__36844;
chunk__36724_36838 = G__36845;
count__36725_36839 = G__36846;
i__36726_36840 = G__36847;
continue;
} else {
var G__36848 = seq__36720_36837;
var G__36849 = chunk__36724_36838;
var G__36850 = count__36725_36839;
var G__36851 = (i__36726_36840 + (1));
seq__36720_36837 = G__36848;
chunk__36724_36838 = G__36849;
count__36725_36839 = G__36850;
i__36726_36840 = G__36851;
continue;
}
} else {
var G__36852 = seq__36720_36837;
var G__36853 = chunk__36724_36838;
var G__36854 = count__36725_36839;
var G__36855 = (i__36726_36840 + (1));
seq__36720_36837 = G__36852;
chunk__36724_36838 = G__36853;
count__36725_36839 = G__36854;
i__36726_36840 = G__36855;
continue;
}
} else {
var temp__5753__auto___36856 = cljs.core.seq(seq__36720_36837);
if(temp__5753__auto___36856){
var seq__36720_36857__$1 = temp__5753__auto___36856;
if(cljs.core.chunked_seq_QMARK_(seq__36720_36857__$1)){
var c__4679__auto___36858 = cljs.core.chunk_first(seq__36720_36857__$1);
var G__36859 = cljs.core.chunk_rest(seq__36720_36857__$1);
var G__36860 = c__4679__auto___36858;
var G__36861 = cljs.core.count(c__4679__auto___36858);
var G__36862 = (0);
seq__36720_36837 = G__36859;
chunk__36724_36838 = G__36860;
count__36725_36839 = G__36861;
i__36726_36840 = G__36862;
continue;
} else {
var node_36863 = cljs.core.first(seq__36720_36857__$1);
if(cljs.core.not(node_36863.shadow$old)){
var path_match_36864 = shadow.cljs.devtools.client.browser.match_paths(node_36863.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36864)){
var new_link_36865 = (function (){var G__36733 = node_36863.cloneNode(true);
G__36733.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36864),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36733;
})();
(node_36863.shadow$old = true);

(new_link_36865.onload = ((function (seq__36720_36837,chunk__36724_36838,count__36725_36839,i__36726_36840,seq__36686,chunk__36688,count__36689,i__36690,new_link_36865,path_match_36864,node_36863,seq__36720_36857__$1,temp__5753__auto___36856,path,map__36685,map__36685__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36863);
});})(seq__36720_36837,chunk__36724_36838,count__36725_36839,i__36726_36840,seq__36686,chunk__36688,count__36689,i__36690,new_link_36865,path_match_36864,node_36863,seq__36720_36857__$1,temp__5753__auto___36856,path,map__36685,map__36685__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36864], 0));

goog.dom.insertSiblingAfter(new_link_36865,node_36863);


var G__36866 = cljs.core.next(seq__36720_36857__$1);
var G__36867 = null;
var G__36868 = (0);
var G__36869 = (0);
seq__36720_36837 = G__36866;
chunk__36724_36838 = G__36867;
count__36725_36839 = G__36868;
i__36726_36840 = G__36869;
continue;
} else {
var G__36870 = cljs.core.next(seq__36720_36857__$1);
var G__36871 = null;
var G__36872 = (0);
var G__36873 = (0);
seq__36720_36837 = G__36870;
chunk__36724_36838 = G__36871;
count__36725_36839 = G__36872;
i__36726_36840 = G__36873;
continue;
}
} else {
var G__36874 = cljs.core.next(seq__36720_36857__$1);
var G__36875 = null;
var G__36876 = (0);
var G__36877 = (0);
seq__36720_36837 = G__36874;
chunk__36724_36838 = G__36875;
count__36725_36839 = G__36876;
i__36726_36840 = G__36877;
continue;
}
}
} else {
}
}
break;
}


var G__36878 = seq__36686;
var G__36879 = chunk__36688;
var G__36880 = count__36689;
var G__36881 = (i__36690 + (1));
seq__36686 = G__36878;
chunk__36688 = G__36879;
count__36689 = G__36880;
i__36690 = G__36881;
continue;
} else {
var G__36882 = seq__36686;
var G__36883 = chunk__36688;
var G__36884 = count__36689;
var G__36885 = (i__36690 + (1));
seq__36686 = G__36882;
chunk__36688 = G__36883;
count__36689 = G__36884;
i__36690 = G__36885;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36686);
if(temp__5753__auto__){
var seq__36686__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36686__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36686__$1);
var G__36886 = cljs.core.chunk_rest(seq__36686__$1);
var G__36887 = c__4679__auto__;
var G__36888 = cljs.core.count(c__4679__auto__);
var G__36889 = (0);
seq__36686 = G__36886;
chunk__36688 = G__36887;
count__36689 = G__36888;
i__36690 = G__36889;
continue;
} else {
var path = cljs.core.first(seq__36686__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36734_36890 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36738_36891 = null;
var count__36739_36892 = (0);
var i__36740_36893 = (0);
while(true){
if((i__36740_36893 < count__36739_36892)){
var node_36894 = chunk__36738_36891.cljs$core$IIndexed$_nth$arity$2(null,i__36740_36893);
if(cljs.core.not(node_36894.shadow$old)){
var path_match_36895 = shadow.cljs.devtools.client.browser.match_paths(node_36894.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36895)){
var new_link_36896 = (function (){var G__36746 = node_36894.cloneNode(true);
G__36746.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36895),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36746;
})();
(node_36894.shadow$old = true);

(new_link_36896.onload = ((function (seq__36734_36890,chunk__36738_36891,count__36739_36892,i__36740_36893,seq__36686,chunk__36688,count__36689,i__36690,new_link_36896,path_match_36895,node_36894,path,seq__36686__$1,temp__5753__auto__,map__36685,map__36685__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36894);
});})(seq__36734_36890,chunk__36738_36891,count__36739_36892,i__36740_36893,seq__36686,chunk__36688,count__36689,i__36690,new_link_36896,path_match_36895,node_36894,path,seq__36686__$1,temp__5753__auto__,map__36685,map__36685__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36895], 0));

goog.dom.insertSiblingAfter(new_link_36896,node_36894);


var G__36897 = seq__36734_36890;
var G__36898 = chunk__36738_36891;
var G__36899 = count__36739_36892;
var G__36900 = (i__36740_36893 + (1));
seq__36734_36890 = G__36897;
chunk__36738_36891 = G__36898;
count__36739_36892 = G__36899;
i__36740_36893 = G__36900;
continue;
} else {
var G__36901 = seq__36734_36890;
var G__36902 = chunk__36738_36891;
var G__36903 = count__36739_36892;
var G__36904 = (i__36740_36893 + (1));
seq__36734_36890 = G__36901;
chunk__36738_36891 = G__36902;
count__36739_36892 = G__36903;
i__36740_36893 = G__36904;
continue;
}
} else {
var G__36905 = seq__36734_36890;
var G__36906 = chunk__36738_36891;
var G__36907 = count__36739_36892;
var G__36908 = (i__36740_36893 + (1));
seq__36734_36890 = G__36905;
chunk__36738_36891 = G__36906;
count__36739_36892 = G__36907;
i__36740_36893 = G__36908;
continue;
}
} else {
var temp__5753__auto___36909__$1 = cljs.core.seq(seq__36734_36890);
if(temp__5753__auto___36909__$1){
var seq__36734_36910__$1 = temp__5753__auto___36909__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36734_36910__$1)){
var c__4679__auto___36911 = cljs.core.chunk_first(seq__36734_36910__$1);
var G__36912 = cljs.core.chunk_rest(seq__36734_36910__$1);
var G__36913 = c__4679__auto___36911;
var G__36914 = cljs.core.count(c__4679__auto___36911);
var G__36915 = (0);
seq__36734_36890 = G__36912;
chunk__36738_36891 = G__36913;
count__36739_36892 = G__36914;
i__36740_36893 = G__36915;
continue;
} else {
var node_36916 = cljs.core.first(seq__36734_36910__$1);
if(cljs.core.not(node_36916.shadow$old)){
var path_match_36917 = shadow.cljs.devtools.client.browser.match_paths(node_36916.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36917)){
var new_link_36918 = (function (){var G__36747 = node_36916.cloneNode(true);
G__36747.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36917),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36747;
})();
(node_36916.shadow$old = true);

(new_link_36918.onload = ((function (seq__36734_36890,chunk__36738_36891,count__36739_36892,i__36740_36893,seq__36686,chunk__36688,count__36689,i__36690,new_link_36918,path_match_36917,node_36916,seq__36734_36910__$1,temp__5753__auto___36909__$1,path,seq__36686__$1,temp__5753__auto__,map__36685,map__36685__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36916);
});})(seq__36734_36890,chunk__36738_36891,count__36739_36892,i__36740_36893,seq__36686,chunk__36688,count__36689,i__36690,new_link_36918,path_match_36917,node_36916,seq__36734_36910__$1,temp__5753__auto___36909__$1,path,seq__36686__$1,temp__5753__auto__,map__36685,map__36685__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36917], 0));

goog.dom.insertSiblingAfter(new_link_36918,node_36916);


var G__36919 = cljs.core.next(seq__36734_36910__$1);
var G__36920 = null;
var G__36921 = (0);
var G__36922 = (0);
seq__36734_36890 = G__36919;
chunk__36738_36891 = G__36920;
count__36739_36892 = G__36921;
i__36740_36893 = G__36922;
continue;
} else {
var G__36923 = cljs.core.next(seq__36734_36910__$1);
var G__36924 = null;
var G__36925 = (0);
var G__36926 = (0);
seq__36734_36890 = G__36923;
chunk__36738_36891 = G__36924;
count__36739_36892 = G__36925;
i__36740_36893 = G__36926;
continue;
}
} else {
var G__36927 = cljs.core.next(seq__36734_36910__$1);
var G__36928 = null;
var G__36929 = (0);
var G__36930 = (0);
seq__36734_36890 = G__36927;
chunk__36738_36891 = G__36928;
count__36739_36892 = G__36929;
i__36740_36893 = G__36930;
continue;
}
}
} else {
}
}
break;
}


var G__36931 = cljs.core.next(seq__36686__$1);
var G__36932 = null;
var G__36933 = (0);
var G__36934 = (0);
seq__36686 = G__36931;
chunk__36688 = G__36932;
count__36689 = G__36933;
i__36690 = G__36934;
continue;
} else {
var G__36935 = cljs.core.next(seq__36686__$1);
var G__36936 = null;
var G__36937 = (0);
var G__36938 = (0);
seq__36686 = G__36935;
chunk__36688 = G__36936;
count__36689 = G__36937;
i__36690 = G__36938;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36748){
var map__36749 = p__36748;
var map__36749__$1 = cljs.core.__destructure_map(map__36749);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36749__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36750){
var map__36751 = p__36750;
var map__36751__$1 = cljs.core.__destructure_map(map__36751);
var _ = map__36751__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36751__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36752,done,error){
var map__36753 = p__36752;
var map__36753__$1 = cljs.core.__destructure_map(map__36753);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36753__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36754,done,error){
var map__36755 = p__36754;
var map__36755__$1 = cljs.core.__destructure_map(map__36755);
var msg = map__36755__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36755__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36755__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36755__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36756){
var map__36757 = p__36756;
var map__36757__$1 = cljs.core.__destructure_map(map__36757);
var src = map__36757__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36757__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36758 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36758) : done.call(null,G__36758));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36759){
var map__36760 = p__36759;
var map__36760__$1 = cljs.core.__destructure_map(map__36760);
var msg__$1 = map__36760__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36760__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36761){var ex = e36761;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36762){
var map__36763 = p__36762;
var map__36763__$1 = cljs.core.__destructure_map(map__36763);
var env = map__36763__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36763__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__36764){
var map__36765 = p__36764;
var map__36765__$1 = cljs.core.__destructure_map(map__36765);
var msg = map__36765__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36765__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36766){
var map__36767 = p__36766;
var map__36767__$1 = cljs.core.__destructure_map(map__36767);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36767__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36767__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__36768){
var map__36769 = p__36768;
var map__36769__$1 = cljs.core.__destructure_map(map__36769);
var svc = map__36769__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36769__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
