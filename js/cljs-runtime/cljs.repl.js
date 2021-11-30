goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33994){
var map__33999 = p__33994;
var map__33999__$1 = cljs.core.__destructure_map(map__33999);
var m = map__33999__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33999__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33999__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34021_34503 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34022_34504 = null;
var count__34023_34505 = (0);
var i__34024_34506 = (0);
while(true){
if((i__34024_34506 < count__34023_34505)){
var f_34509 = chunk__34022_34504.cljs$core$IIndexed$_nth$arity$2(null,i__34024_34506);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34509], 0));


var G__34510 = seq__34021_34503;
var G__34511 = chunk__34022_34504;
var G__34512 = count__34023_34505;
var G__34513 = (i__34024_34506 + (1));
seq__34021_34503 = G__34510;
chunk__34022_34504 = G__34511;
count__34023_34505 = G__34512;
i__34024_34506 = G__34513;
continue;
} else {
var temp__5753__auto___34515 = cljs.core.seq(seq__34021_34503);
if(temp__5753__auto___34515){
var seq__34021_34516__$1 = temp__5753__auto___34515;
if(cljs.core.chunked_seq_QMARK_(seq__34021_34516__$1)){
var c__4679__auto___34518 = cljs.core.chunk_first(seq__34021_34516__$1);
var G__34520 = cljs.core.chunk_rest(seq__34021_34516__$1);
var G__34521 = c__4679__auto___34518;
var G__34522 = cljs.core.count(c__4679__auto___34518);
var G__34523 = (0);
seq__34021_34503 = G__34520;
chunk__34022_34504 = G__34521;
count__34023_34505 = G__34522;
i__34024_34506 = G__34523;
continue;
} else {
var f_34524 = cljs.core.first(seq__34021_34516__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34524], 0));


var G__34526 = cljs.core.next(seq__34021_34516__$1);
var G__34527 = null;
var G__34528 = (0);
var G__34529 = (0);
seq__34021_34503 = G__34526;
chunk__34022_34504 = G__34527;
count__34023_34505 = G__34528;
i__34024_34506 = G__34529;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34531 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_34531], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_34531)))?cljs.core.second(arglists_34531):arglists_34531)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34055_34536 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34056_34537 = null;
var count__34057_34538 = (0);
var i__34058_34539 = (0);
while(true){
if((i__34058_34539 < count__34057_34538)){
var vec__34079_34540 = chunk__34056_34537.cljs$core$IIndexed$_nth$arity$2(null,i__34058_34539);
var name_34541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34079_34540,(0),null);
var map__34082_34542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34079_34540,(1),null);
var map__34082_34543__$1 = cljs.core.__destructure_map(map__34082_34542);
var doc_34544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34082_34543__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34082_34543__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34541], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34545], 0));

if(cljs.core.truth_(doc_34544)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34544], 0));
} else {
}


var G__34552 = seq__34055_34536;
var G__34553 = chunk__34056_34537;
var G__34554 = count__34057_34538;
var G__34555 = (i__34058_34539 + (1));
seq__34055_34536 = G__34552;
chunk__34056_34537 = G__34553;
count__34057_34538 = G__34554;
i__34058_34539 = G__34555;
continue;
} else {
var temp__5753__auto___34557 = cljs.core.seq(seq__34055_34536);
if(temp__5753__auto___34557){
var seq__34055_34559__$1 = temp__5753__auto___34557;
if(cljs.core.chunked_seq_QMARK_(seq__34055_34559__$1)){
var c__4679__auto___34560 = cljs.core.chunk_first(seq__34055_34559__$1);
var G__34562 = cljs.core.chunk_rest(seq__34055_34559__$1);
var G__34563 = c__4679__auto___34560;
var G__34564 = cljs.core.count(c__4679__auto___34560);
var G__34565 = (0);
seq__34055_34536 = G__34562;
chunk__34056_34537 = G__34563;
count__34057_34538 = G__34564;
i__34058_34539 = G__34565;
continue;
} else {
var vec__34091_34568 = cljs.core.first(seq__34055_34559__$1);
var name_34569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34091_34568,(0),null);
var map__34094_34570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34091_34568,(1),null);
var map__34094_34571__$1 = cljs.core.__destructure_map(map__34094_34570);
var doc_34572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34094_34571__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34094_34571__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34569], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34573], 0));

if(cljs.core.truth_(doc_34572)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34572], 0));
} else {
}


var G__34579 = cljs.core.next(seq__34055_34559__$1);
var G__34580 = null;
var G__34581 = (0);
var G__34582 = (0);
seq__34055_34536 = G__34579;
chunk__34056_34537 = G__34580;
count__34057_34538 = G__34581;
i__34058_34539 = G__34582;
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
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34102 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34103 = null;
var count__34104 = (0);
var i__34105 = (0);
while(true){
if((i__34105 < count__34104)){
var role = chunk__34103.cljs$core$IIndexed$_nth$arity$2(null,i__34105);
var temp__5753__auto___34596__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___34596__$1)){
var spec_34597 = temp__5753__auto___34596__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34597)], 0));
} else {
}


var G__34598 = seq__34102;
var G__34599 = chunk__34103;
var G__34600 = count__34104;
var G__34601 = (i__34105 + (1));
seq__34102 = G__34598;
chunk__34103 = G__34599;
count__34104 = G__34600;
i__34105 = G__34601;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__34102);
if(temp__5753__auto____$1){
var seq__34102__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34102__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34102__$1);
var G__34605 = cljs.core.chunk_rest(seq__34102__$1);
var G__34606 = c__4679__auto__;
var G__34607 = cljs.core.count(c__4679__auto__);
var G__34608 = (0);
seq__34102 = G__34605;
chunk__34103 = G__34606;
count__34104 = G__34607;
i__34105 = G__34608;
continue;
} else {
var role = cljs.core.first(seq__34102__$1);
var temp__5753__auto___34609__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___34609__$2)){
var spec_34611 = temp__5753__auto___34609__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34611)], 0));
} else {
}


var G__34617 = cljs.core.next(seq__34102__$1);
var G__34618 = null;
var G__34619 = (0);
var G__34620 = (0);
seq__34102 = G__34617;
chunk__34103 = G__34618;
count__34104 = G__34619;
i__34105 = G__34620;
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
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__34637 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__34638 = cljs.core.ex_cause(t);
via = G__34637;
t = G__34638;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34229 = datafied_throwable;
var map__34229__$1 = cljs.core.__destructure_map(map__34229);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34229__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34229__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34229__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34230 = cljs.core.last(via);
var map__34230__$1 = cljs.core.__destructure_map(map__34230);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34230__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34230__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34230__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34231 = data;
var map__34231__$1 = cljs.core.__destructure_map(map__34231);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34231__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34231__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34231__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34232 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34232__$1 = cljs.core.__destructure_map(map__34232);
var top_data = map__34232__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34232__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34257 = phase;
var G__34257__$1 = (((G__34257 instanceof cljs.core.Keyword))?G__34257.fqn:null);
switch (G__34257__$1) {
case "read-source":
var map__34268 = data;
var map__34268__$1 = cljs.core.__destructure_map(map__34268);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34268__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34268__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34270 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34270__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34270,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34270);
var G__34270__$2 = (cljs.core.truth_((function (){var fexpr__34284 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34284.cljs$core$IFn$_invoke$arity$1 ? fexpr__34284.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34284.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34270__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34270__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34270__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34270__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34296 = top_data;
var G__34296__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34296,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34296);
var G__34296__$2 = (cljs.core.truth_((function (){var fexpr__34299 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34299.cljs$core$IFn$_invoke$arity$1 ? fexpr__34299.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34299.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34296__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34296__$1);
var G__34296__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34296__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34296__$2);
var G__34296__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34296__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34296__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34296__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34296__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34312 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34312,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34312,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34312,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34312,(3),null);
var G__34324 = top_data;
var G__34324__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34324,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34324);
var G__34324__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34324__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34324__$1);
var G__34324__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34324__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34324__$2);
var G__34324__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34324__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34324__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34324__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34324__$4;
}

break;
case "execution":
var vec__34329 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34329,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34329,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34329,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34329,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34209_SHARP_){
var or__4253__auto__ = (p1__34209_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__34338 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34338.cljs$core$IFn$_invoke$arity$1 ? fexpr__34338.cljs$core$IFn$_invoke$arity$1(p1__34209_SHARP_) : fexpr__34338.call(null,p1__34209_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__34342 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34342__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34342,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34342);
var G__34342__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34342__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34342__$1);
var G__34342__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34342__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34342__$2);
var G__34342__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34342__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34342__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34342__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34342__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34257__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34366){
var map__34368 = p__34366;
var map__34368__$1 = cljs.core.__destructure_map(map__34368);
var triage_data = map__34368__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34368__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34368__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34368__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34368__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34368__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34368__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34368__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34368__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34394 = phase;
var G__34394__$1 = (((G__34394 instanceof cljs.core.Keyword))?G__34394.fqn:null);
switch (G__34394__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34400 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34401 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34402 = loc;
var G__34403 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34407_34718 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34408_34719 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34409_34720 = true;
var _STAR_print_fn_STAR__temp_val__34410_34721 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34409_34720);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34410_34721);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34352_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34352_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34408_34719);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34407_34718);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34400,G__34401,G__34402,G__34403) : format.call(null,G__34400,G__34401,G__34402,G__34403));

break;
case "macroexpansion":
var G__34420 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34421 = cause_type;
var G__34422 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34423 = loc;
var G__34424 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34420,G__34421,G__34422,G__34423,G__34424) : format.call(null,G__34420,G__34421,G__34422,G__34423,G__34424));

break;
case "compile-syntax-check":
var G__34428 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34429 = cause_type;
var G__34430 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34431 = loc;
var G__34432 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34428,G__34429,G__34430,G__34431,G__34432) : format.call(null,G__34428,G__34429,G__34430,G__34431,G__34432));

break;
case "compilation":
var G__34433 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34435 = cause_type;
var G__34436 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34437 = loc;
var G__34438 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34433,G__34435,G__34436,G__34437,G__34438) : format.call(null,G__34433,G__34435,G__34436,G__34437,G__34438));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34443 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34444 = symbol;
var G__34445 = loc;
var G__34446 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34448_34745 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34449_34746 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34450_34747 = true;
var _STAR_print_fn_STAR__temp_val__34451_34748 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34450_34747);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34451_34748);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34362_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34362_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34449_34746);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34448_34745);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34443,G__34444,G__34445,G__34446) : format.call(null,G__34443,G__34444,G__34445,G__34446));
} else {
var G__34459 = "Execution error%s at %s(%s).\n%s\n";
var G__34460 = cause_type;
var G__34461 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34462 = loc;
var G__34463 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34459,G__34460,G__34461,G__34462,G__34463) : format.call(null,G__34459,G__34460,G__34461,G__34462,G__34463));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34394__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
