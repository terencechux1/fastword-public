// Compiled by ClojureScript 1.10.896 {:optimizations :none}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__25834 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__25835 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__25835);

try{return reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__25836 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__25837 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__25837);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__25836);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__25834);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
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
var G__25839 = arguments.length;
switch (G__25839) {
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
return reagent.dom.render.call(null,comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_.call(null);

var vec__25840 = ((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.call(null,vec__25840,(0),null);
var callback = cljs.core.nth.call(null,vec__25840,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element.call(null,compiler,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
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
reagent.ratom.flush_BANG_.call(null);

var seq__25844_25860 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__25845_25861 = null;
var count__25846_25862 = (0);
var i__25847_25863 = (0);
while(true){
if((i__25847_25863 < count__25846_25862)){
var vec__25854_25864 = cljs.core._nth.call(null,chunk__25845_25861,i__25847_25863);
var container_25865 = cljs.core.nth.call(null,vec__25854_25864,(0),null);
var comp_25866 = cljs.core.nth.call(null,vec__25854_25864,(1),null);
reagent.dom.re_render_component.call(null,comp_25866,container_25865);


var G__25867 = seq__25844_25860;
var G__25868 = chunk__25845_25861;
var G__25869 = count__25846_25862;
var G__25870 = (i__25847_25863 + (1));
seq__25844_25860 = G__25867;
chunk__25845_25861 = G__25868;
count__25846_25862 = G__25869;
i__25847_25863 = G__25870;
continue;
} else {
var temp__5753__auto___25871 = cljs.core.seq.call(null,seq__25844_25860);
if(temp__5753__auto___25871){
var seq__25844_25872__$1 = temp__5753__auto___25871;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25844_25872__$1)){
var c__4679__auto___25873 = cljs.core.chunk_first.call(null,seq__25844_25872__$1);
var G__25874 = cljs.core.chunk_rest.call(null,seq__25844_25872__$1);
var G__25875 = c__4679__auto___25873;
var G__25876 = cljs.core.count.call(null,c__4679__auto___25873);
var G__25877 = (0);
seq__25844_25860 = G__25874;
chunk__25845_25861 = G__25875;
count__25846_25862 = G__25876;
i__25847_25863 = G__25877;
continue;
} else {
var vec__25857_25878 = cljs.core.first.call(null,seq__25844_25872__$1);
var container_25879 = cljs.core.nth.call(null,vec__25857_25878,(0),null);
var comp_25880 = cljs.core.nth.call(null,vec__25857_25878,(1),null);
reagent.dom.re_render_component.call(null,comp_25880,container_25879);


var G__25881 = cljs.core.next.call(null,seq__25844_25872__$1);
var G__25882 = null;
var G__25883 = (0);
var G__25884 = (0);
seq__25844_25860 = G__25881;
chunk__25845_25861 = G__25882;
count__25846_25862 = G__25883;
i__25847_25863 = G__25884;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map?rel=1643275178412
