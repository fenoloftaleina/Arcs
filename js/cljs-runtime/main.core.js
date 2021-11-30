goog.provide('main.core');
if((typeof main !== 'undefined') && (typeof main.core !== 'undefined') && (typeof main.core.state !== 'undefined')){
} else {
main.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arc","arc",252411045),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(65),new cljs.core.Keyword(null,"y","y",-1757859776),130.5625,new cljs.core.Keyword(null,"highlighted?","highlighted?",-651870065),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(226),new cljs.core.Keyword(null,"y","y",-1757859776),321.5625,new cljs.core.Keyword(null,"highlighted?","highlighted?",-651870065),false,new cljs.core.Keyword(null,"control?","control?",1420034601),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(682),new cljs.core.Keyword(null,"y","y",-1757859776),63.5625,new cljs.core.Keyword(null,"highlighted?","highlighted?",-651870065),false,new cljs.core.Keyword(null,"control?","control?",1420034601),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(844),new cljs.core.Keyword(null,"y","y",-1757859776),245.5625,new cljs.core.Keyword(null,"highlighted?","highlighted?",-651870065),false], null)], null),new cljs.core.Keyword(null,"ctx","ctx",-493610118),null], null));
}
main.core.point_r = (5);
main.core.draw_point = (function main$core$draw_point(ctx,p__26774){
var map__26775 = p__26774;
var map__26775__$1 = cljs.core.__destructure_map(map__26775);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26775__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26775__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var highlighted_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26775__$1,new cljs.core.Keyword(null,"highlighted?","highlighted?",-651870065));
var control_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26775__$1,new cljs.core.Keyword(null,"control?","control?",1420034601));
var G__26776 = ctx;
G__26776.beginPath();

(G__26776.strokeStyle = (cljs.core.truth_(highlighted_QMARK_)?"rgb(241 102 102)":(cljs.core.truth_(control_QMARK_)?"#ccc":"#222"
)));

(G__26776.lineWidth = (2));

G__26776.arc(x,y,main.core.point_r,(0),((2) * Math.PI),false);

(G__26776.fillStyle = "#eee");

G__26776.fill();

G__26776.stroke();

return G__26776;
});
main.core.draw_canvas = (function main$core$draw_canvas(){
var map__26777 = cljs.core.deref(main.core.state);
var map__26777__$1 = cljs.core.__destructure_map(map__26777);
var arc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26777__$1,new cljs.core.Keyword(null,"arc","arc",252411045));
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26777__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
var vec__26778 = arc;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26778,(0),null);
var control1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26778,(1),null);
var control2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26778,(2),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26778,(3),null);
if(cljs.core.truth_(ctx)){
var G__26781_26792 = ctx;
G__26781_26792.clearRect((0),(0),ctx.canvas.width,ctx.canvas.height);

(G__26781_26792.strokeStyle = "#ccc");

(G__26781_26792.lineWidth = (1));

G__26781_26792.beginPath();

G__26781_26792.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start));

G__26781_26792.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(control1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(control1));

G__26781_26792.stroke();

G__26781_26792.beginPath();

G__26781_26792.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end));

G__26781_26792.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(control2),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(control2));

G__26781_26792.stroke();

(G__26781_26792.strokeStyle = "#222");

(G__26781_26792.lineWidth = (3));

G__26781_26792.beginPath();

G__26781_26792.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start));

G__26781_26792.bezierCurveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(control1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(control1),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(control2),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(control2),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end));

G__26781_26792.stroke();

main.core.draw_point(G__26781_26792,control1);

main.core.draw_point(G__26781_26792,control2);

main.core.draw_point(G__26781_26792,start);

main.core.draw_point(G__26781_26792,end);

} else {
}

return null;
});
main.core.main_view = (function main$core$main_view(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"900px","900px",386400345)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"5px solid #222",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),new cljs.core.Keyword(null,"10px","10px",-859606082)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"#222","#222",40828496),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),new cljs.core.Keyword(null,"5px","5px",-1871779569)], null)], null),"Arcs"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.draw_canvas], null)], null);
});
main.core.__GT_xy = (function main$core$__GT_xy(canvas_rect,event){
var x = (event.clientX - canvas_rect.left);
var y = (event.clientY - canvas_rect.top);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
main.core.in_vicinity_QMARK_ = (function main$core$in_vicinity_QMARK_(v){
return (Math.abs(v) <= main.core.point_r);
});
main.core.move_point = (function main$core$move_point(path,x,y){
var point = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(main.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arc","arc",252411045),path], null));
var diff_x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point) - x);
var diff_y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point) - y);
var complementary_path = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),path))?(1):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),path))?(2):null));
var complementary_point = (cljs.core.truth_(complementary_path)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(main.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arc","arc",252411045),complementary_path], null)):null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arc","arc",252411045),path], null),(function (p1__26782_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__26782_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"highlighted?","highlighted?",-651870065),true], null)], 0));
}));

if(cljs.core.truth_(complementary_path)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arc","arc",252411045),complementary_path], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(complementary_point) - diff_x),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(complementary_point) - diff_y)], null));
} else {
return null;
}
});
main.core.on_mousedown = (function main$core$on_mousedown(canvas_rect,event){
var vec__26783 = main.core.__GT_xy(canvas_rect,event);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26783,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26783,(1),null);
var map__26786 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__26787,point){
var map__26788 = p__26787;
var map__26788__$1 = cljs.core.__destructure_map(map__26788);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26788__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(((main.core.in_vicinity_QMARK_((x - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point)))) && (main.core.in_vicinity_QMARK_((y - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point)))))){
return cljs.core.reduced(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"hit","hit",1909257382),true], null));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),(path + (1))], null);
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),(0)], null),new cljs.core.Keyword(null,"arc","arc",252411045).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(main.core.state)));
var map__26786__$1 = cljs.core.__destructure_map(map__26786);
var point_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26786__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var hit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26786__$1,new cljs.core.Keyword(null,"hit","hit",1909257382));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], 0));

if(cljs.core.truth_(hit)){
main.core.move_point(point_path,x,y);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"dragging-path","dragging-path",503299662),point_path);
} else {
return null;
}
});
main.core.on_mousemove = (function main$core$on_mousemove(canvas_rect,event){
var temp__5753__auto__ = new cljs.core.Keyword(null,"dragging-path","dragging-path",503299662).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(main.core.state));
if(cljs.core.truth_(temp__5753__auto__)){
var path = temp__5753__auto__;
var vec__26789 = main.core.__GT_xy(canvas_rect,event);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26789,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26789,(1),null);
return main.core.move_point(path,x,y);
} else {
return null;
}
});
main.core.on_mouseup = (function main$core$on_mouseup(canvas_rect,event){
var temp__5753__auto__ = new cljs.core.Keyword(null,"dragging-path","dragging-path",503299662).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(main.core.state));
if(cljs.core.truth_(temp__5753__auto__)){
var path = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arc","arc",252411045),path,new cljs.core.Keyword(null,"highlighted?","highlighted?",-651870065)], null),false);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(main.core.state,cljs.core.dissoc,new cljs.core.Keyword(null,"dragging-path","dragging-path",503299662));
} else {
return null;
}
});
main.core.setup_canvas = (function main$core$setup_canvas(){
var canvas_element = document.getElementById("canvas");
var dpr = (function (){var or__4253__auto__ = window.devicePixelRatio;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})();
var canvas_rect = canvas_element.getBoundingClientRect();
(canvas_element.width = (dpr * canvas_rect.width));

(canvas_element.height = (dpr * canvas_rect.height));

canvas_element.addEventListener("mousedown",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(main.core.on_mousedown,canvas_rect));

canvas_element.addEventListener("mousemove",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(main.core.on_mousemove,canvas_rect));

canvas_element.addEventListener("mouseup",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(main.core.on_mouseup,canvas_rect));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"ctx","ctx",-493610118),canvas_element.getContext("2d"));
});
main.core.start = (function main$core$start(){
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.main_view], null),document.getElementById("root"));

if(cljs.core.truth_(new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(main.core.state)))){
return null;
} else {
return main.core.setup_canvas();
}
});
main.core.run = (function main$core$run(){
return main.core.start();
});
goog.exportSymbol('main.core.run', main.core.run);
main.core.run();

//# sourceMappingURL=main.core.js.map
