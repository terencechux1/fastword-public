// Compiled by ClojureScript 1.10.896 {:optimizations :none}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.dom');
goog.require('cljs.pprint');
goog.require('goog.object');
goog.scope(function(){
figwheel.client.heads_up.goog$module$goog$object = goog.module.get('goog.object');
});

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__4870__auto__ = [];
var len__4864__auto___31615 = arguments.length;
var i__4865__auto___31616 = (0);
while(true){
if((i__4865__auto___31616 < len__4864__auto___31615)){
args__4870__auto__.push((arguments[i__4865__auto___31616]));

var G__31617 = (i__4865__auto___31616 + (1));
i__4865__auto___31616 = G__31617;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__31607_31618 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__31608_31619 = null;
var count__31609_31620 = (0);
var i__31610_31621 = (0);
while(true){
if((i__31610_31621 < count__31609_31620)){
var k_31622 = cljs.core._nth.call(null,chunk__31608_31619,i__31610_31621);
e.setAttribute(cljs.core.name.call(null,k_31622),cljs.core.get.call(null,attrs,k_31622));


var G__31623 = seq__31607_31618;
var G__31624 = chunk__31608_31619;
var G__31625 = count__31609_31620;
var G__31626 = (i__31610_31621 + (1));
seq__31607_31618 = G__31623;
chunk__31608_31619 = G__31624;
count__31609_31620 = G__31625;
i__31610_31621 = G__31626;
continue;
} else {
var temp__5753__auto___31627 = cljs.core.seq.call(null,seq__31607_31618);
if(temp__5753__auto___31627){
var seq__31607_31628__$1 = temp__5753__auto___31627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31607_31628__$1)){
var c__4679__auto___31629 = cljs.core.chunk_first.call(null,seq__31607_31628__$1);
var G__31630 = cljs.core.chunk_rest.call(null,seq__31607_31628__$1);
var G__31631 = c__4679__auto___31629;
var G__31632 = cljs.core.count.call(null,c__4679__auto___31629);
var G__31633 = (0);
seq__31607_31618 = G__31630;
chunk__31608_31619 = G__31631;
count__31609_31620 = G__31632;
i__31610_31621 = G__31633;
continue;
} else {
var k_31634 = cljs.core.first.call(null,seq__31607_31628__$1);
e.setAttribute(cljs.core.name.call(null,k_31634),cljs.core.get.call(null,attrs,k_31634));


var G__31635 = cljs.core.next.call(null,seq__31607_31628__$1);
var G__31636 = null;
var G__31637 = (0);
var G__31638 = (0);
seq__31607_31618 = G__31635;
chunk__31608_31619 = G__31636;
count__31609_31620 = G__31637;
i__31610_31621 = G__31638;
continue;
}
} else {
}
}
break;
}

var seq__31611_31639 = cljs.core.seq.call(null,children);
var chunk__31612_31640 = null;
var count__31613_31641 = (0);
var i__31614_31642 = (0);
while(true){
if((i__31614_31642 < count__31613_31641)){
var ch_31643 = cljs.core._nth.call(null,chunk__31612_31640,i__31614_31642);
e.appendChild(ch_31643);


var G__31644 = seq__31611_31639;
var G__31645 = chunk__31612_31640;
var G__31646 = count__31613_31641;
var G__31647 = (i__31614_31642 + (1));
seq__31611_31639 = G__31644;
chunk__31612_31640 = G__31645;
count__31613_31641 = G__31646;
i__31614_31642 = G__31647;
continue;
} else {
var temp__5753__auto___31648 = cljs.core.seq.call(null,seq__31611_31639);
if(temp__5753__auto___31648){
var seq__31611_31649__$1 = temp__5753__auto___31648;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31611_31649__$1)){
var c__4679__auto___31650 = cljs.core.chunk_first.call(null,seq__31611_31649__$1);
var G__31651 = cljs.core.chunk_rest.call(null,seq__31611_31649__$1);
var G__31652 = c__4679__auto___31650;
var G__31653 = cljs.core.count.call(null,c__4679__auto___31650);
var G__31654 = (0);
seq__31611_31639 = G__31651;
chunk__31612_31640 = G__31652;
count__31613_31641 = G__31653;
i__31614_31642 = G__31654;
continue;
} else {
var ch_31655 = cljs.core.first.call(null,seq__31611_31649__$1);
e.appendChild(ch_31655);


var G__31656 = cljs.core.next.call(null,seq__31611_31649__$1);
var G__31657 = null;
var G__31658 = (0);
var G__31659 = (0);
seq__31611_31639 = G__31656;
chunk__31612_31640 = G__31657;
count__31613_31641 = G__31658;
i__31614_31642 = G__31659;
continue;
}
} else {
}
}
break;
}

return e;
}));

(figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq31604){
var G__31605 = cljs.core.first.call(null,seq31604);
var seq31604__$1 = cljs.core.next.call(null,seq31604);
var G__31606 = cljs.core.first.call(null,seq31604__$1);
var seq31604__$2 = cljs.core.next.call(null,seq31604__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31605,G__31606,seq31604__$2);
}));

if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.heads_up !== 'undefined') && (typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined')){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),(function (dataset){
return dataset.figwheelEvent;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector(["#",cont_id].join('')))){
var el_31660 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),["-webkit-transition: all 0.2s ease-in-out;","-moz-transition: all 0.2s ease-in-out;","-o-transition: all 0.2s ease-in-out;","transition: all 0.2s ease-in-out;","font-size: 13px;","border-top: 1px solid #f5f5f5;","box-shadow: 0px 0px 1px #aaaaaa;","line-height: 18px;","color: #333;","font-family: monospace;","padding: 0px 10px 0px 70px;","position: fixed;","bottom: 0px;","left: 0px;","height: 0px;","opacity: 0.0;","box-sizing: border-box;","z-index: 10000;","text-align: left;"].join('')], null));
(el_31660.onclick = figwheel.client.heads_up.heads_up_onclick_handler);

(el_31660.innerHTML = figwheel.client.heads_up.cljs_logo_svg);

el_31660.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_31660);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__31661,st_map){
var map__31662 = p__31661;
var map__31662__$1 = cljs.core.__destructure_map.call(null,map__31662);
var container_el = cljs.core.get.call(null,map__31662__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,(function (p__31663){
var vec__31664 = p__31663;
var k = cljs.core.nth.call(null,vec__31664,(0),null);
var v = cljs.core.nth.call(null,vec__31664,(1),null);
return figwheel.client.heads_up.goog$module$goog$object.set.call(null,container_el.style,cljs.core.name.call(null,k),v);
}),st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__31667,dom_str){
var map__31668 = p__31667;
var map__31668__$1 = cljs.core.__destructure_map.call(null,map__31668);
var c = map__31668__$1;
var content_area_el = cljs.core.get.call(null,map__31668__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return (content_area_el.innerHTML = dom_str);
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__31669){
var map__31670 = p__31669;
var map__31670__$1 = cljs.core.__destructure_map.call(null,map__31670);
var content_area_el = cljs.core.get.call(null,map__31670__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return ["<a style=\"","float: right;","font-size: 18px;","text-decoration: none;","text-align: right;","width: 30px;","height: 30px;","color: rgba(84,84,84, 0.5);","\" href=\"#\"  data-figwheel-event=\"close-heads-up\">","x","</a>"].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__28694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = (function (state_31686){
var state_val_31687 = (state_31686[(1)]);
if((state_val_31687 === (1))){
var inst_31671 = (state_31686[(7)]);
var inst_31671__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31672 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31673 = ["10px","10px","100%","68px","1.0"];
var inst_31674 = cljs.core.PersistentHashMap.fromArrays(inst_31672,inst_31673);
var inst_31675 = cljs.core.merge.call(null,inst_31674,style);
var inst_31676 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31671__$1,inst_31675);
var inst_31677 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31671__$1,msg);
var inst_31678 = cljs.core.async.timeout.call(null,(300));
var state_31686__$1 = (function (){var statearr_31688 = state_31686;
(statearr_31688[(7)] = inst_31671__$1);

(statearr_31688[(8)] = inst_31677);

(statearr_31688[(9)] = inst_31676);

return statearr_31688;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31686__$1,(2),inst_31678);
} else {
if((state_val_31687 === (2))){
var inst_31671 = (state_31686[(7)]);
var inst_31680 = (state_31686[(2)]);
var inst_31681 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_31682 = ["auto"];
var inst_31683 = cljs.core.PersistentHashMap.fromArrays(inst_31681,inst_31682);
var inst_31684 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31671,inst_31683);
var state_31686__$1 = (function (){var statearr_31689 = state_31686;
(statearr_31689[(10)] = inst_31680);

return statearr_31689;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31686__$1,inst_31684);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__28598__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__28598__auto____0 = (function (){
var statearr_31690 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31690[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__28598__auto__);

(statearr_31690[(1)] = (1));

return statearr_31690;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__28598__auto____1 = (function (state_31686){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_31686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e31691){if((e31691 instanceof Object)){
var ex__28601__auto__ = e31691;
var statearr_31692_31694 = state_31686;
(statearr_31692_31694[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31695 = state_31686;
state_31686 = G__31695;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__28598__auto__ = function(state_31686){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__28598__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__28598__auto____1.call(this,state_31686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__28598__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__28598__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__28598__auto__;
})()
})();
var state__28696__auto__ = (function (){var statearr_31693 = f__28695__auto__.call(null);
(statearr_31693[(6)] = c__28694__auto__);

return statearr_31693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
}));

return c__28694__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var G__31697 = arguments.length;
switch (G__31697) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
}));

(figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return ["<div style=\"","font-size: 26px;","line-height: 26px;","margin-bottom: 2px;","padding-top: 1px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," <span style=\"","display: inline-block;","font-size: 13px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),"</span></div>"].join('');
}));

(figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2);

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return ["<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"\" data-file-line=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"\" data-file-column=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__31699){
var map__31700 = p__31699;
var map__31700__$1 = cljs.core.__destructure_map.call(null,map__31700);
var file = cljs.core.get.call(null,map__31700__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31700__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31700__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__4253__auto__ = file;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return ["<div>",msg__$1,"</div>"].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return ["<span style='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),"'>","<span style='color: #757575;'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"  </span>",figwheel.client.heads_up.escape.call(null,line),"</span>"].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__31701){
var vec__31702 = p__31701;
var typ = cljs.core.nth.call(null,vec__31702,(0),null);
var line_number = cljs.core.nth.call(null,vec__31702,(1),null);
var line = cljs.core.nth.call(null,vec__31702,(2),null);
var pred__31705 = cljs.core._EQ_;
var expr__31706 = typ;
if(cljs.core.truth_(pred__31705.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__31706))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__31705.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__31706))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__31705.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__31706))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = ((cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))).length);
return cljs.core.map.call(null,(function (p1__31708_SHARP_){
return cljs.core.update_in.call(null,p1__31708_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
}),inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return ["<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"," line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>",clojure.string.join.call(null,"\n",lines),"</pre>"].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__31709_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__31709_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__31712){
var map__31713 = p__31712;
var map__31713__$1 = cljs.core.__destructure_map.call(null,map__31713);
var exception = map__31713__$1;
var message = cljs.core.get.call(null,map__31713__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__31713__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__31713__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__31713__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__31713__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__31713__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__31713__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__31713__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__31713__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__31713__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__31713__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__4251__auto__ = file;
if(cljs.core.truth_(and__4251__auto__)){
return line;
} else {
return and__4251__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__31710_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31710_SHARP_),"</div>"].join('');
}),(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[(cljs.core.truth_(class$)?[figwheel.client.heads_up.escape.call(null,class$),": "].join(''):""),"<span style=\"font-weight:bold;\">",figwheel.client.heads_up.escape.call(null,message),"</span>"].join(''),(cljs.core.truth_(display_ex_data)?["<pre style=\"white-space: pre-wrap\">",figwheel.client.utils.pprint_to_string.call(null,display_ex_data),"</pre>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,(function (p1__31711_SHARP_){
return [figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__31711_SHARP_)),": ",figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__31711_SHARP_))].join('');
}),figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px;\">",figwheel.client.heads_up.escape.call(null,last_message),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__31714){
var map__31715 = p__31714;
var map__31715__$1 = cljs.core.__destructure_map.call(null,map__31715);
var file = cljs.core.get.call(null,map__31715__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31715__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31715__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"file-column","file-column",1543934780),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__31717 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__31717__$1 = cljs.core.__destructure_map.call(null,map__31717);
var head = cljs.core.get.call(null,map__31717__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__31717__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__31717__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__31717__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__31717__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31717__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31717__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[figwheel.client.heads_up.close_link.call(null),figwheel.client.heads_up.heading.call(null,head,sub_head),figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg)].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__31719){
var map__31720 = p__31719;
var map__31720__$1 = cljs.core.__destructure_map.call(null,map__31720);
var warning_data = map__31720__$1;
var file = cljs.core.get.call(null,map__31720__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31720__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31720__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__31720__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__31720__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__4251__auto__ = file;
if(cljs.core.truth_(and__4251__auto__)){
return line;
} else {
return and__4251__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__31718_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31718_SHARP_),"</div>"].join('');
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?["<span style=\"font-weight:bold;\">",figwheel.client.heads_up.escape.call(null,message),"</span>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">",figwheel.client.heads_up.escape.call(null,last_message),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[figwheel.client.heads_up.close_link.call(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),"<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__31721 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__31721__$1 = cljs.core.__destructure_map.call(null,map__31721);
var head = cljs.core.get.call(null,map__31721__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__31721__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__31721__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__31721__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__31721__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31721__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31721__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[figwheel.client.heads_up.close_link.call(null),figwheel.client.heads_up.heading.call(null,head,sub_head),figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg)].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__31722){
var map__31723 = p__31722;
var map__31723__$1 = cljs.core.__destructure_map.call(null,map__31723);
var warning_data = map__31723__$1;
var message = cljs.core.get.call(null,map__31723__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__31723__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31723__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31723__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31724 = message;
var G__31724__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31724)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31724);
var G__31724__$2 = (cljs.core.truth_((function (){var and__4251__auto__ = line;
if(cljs.core.truth_(and__4251__auto__)){
return column;
} else {
return and__4251__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31724__$1),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__31724__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31724__$2)," in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__31724__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__31725){
var map__31726 = p__31725;
var map__31726__$1 = cljs.core.__destructure_map.call(null,map__31726);
var warning_data = map__31726__$1;
var message = cljs.core.get.call(null,map__31726__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__31726__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31726__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31726__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__31727 = figwheel.client.heads_up.ensure_container.call(null);
var map__31727__$1 = cljs.core.__destructure_map.call(null,map__31727);
var content_area_el = cljs.core.get.call(null,map__31727__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
(el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data));

return goog.dom.append(content_area_el,el);
} else {
var temp__5753__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__5753__auto__)){
var last_child = temp__5753__auto__;
var temp__5751__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__5751__auto__)){
var message_count = temp__5751__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return (last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1)," more warnings have not been displayed ..."].join(''));
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__28694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = (function (state_31745){
var state_val_31746 = (state_31745[(1)]);
if((state_val_31746 === (1))){
var inst_31728 = (state_31745[(7)]);
var inst_31728__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31729 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31730 = ["0.0"];
var inst_31731 = cljs.core.PersistentHashMap.fromArrays(inst_31729,inst_31730);
var inst_31732 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31728__$1,inst_31731);
var inst_31733 = cljs.core.async.timeout.call(null,(300));
var state_31745__$1 = (function (){var statearr_31747 = state_31745;
(statearr_31747[(8)] = inst_31732);

(statearr_31747[(7)] = inst_31728__$1);

return statearr_31747;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31745__$1,(2),inst_31733);
} else {
if((state_val_31746 === (2))){
var inst_31728 = (state_31745[(7)]);
var inst_31735 = (state_31745[(2)]);
var inst_31736 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_31737 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_31738 = cljs.core.PersistentHashMap.fromArrays(inst_31736,inst_31737);
var inst_31739 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31728,inst_31738);
var inst_31740 = cljs.core.async.timeout.call(null,(200));
var state_31745__$1 = (function (){var statearr_31748 = state_31745;
(statearr_31748[(9)] = inst_31735);

(statearr_31748[(10)] = inst_31739);

return statearr_31748;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31745__$1,(3),inst_31740);
} else {
if((state_val_31746 === (3))){
var inst_31728 = (state_31745[(7)]);
var inst_31742 = (state_31745[(2)]);
var inst_31743 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31728,"");
var state_31745__$1 = (function (){var statearr_31749 = state_31745;
(statearr_31749[(11)] = inst_31742);

return statearr_31749;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31745__$1,inst_31743);
} else {
return null;
}
}
}
});
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__28598__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__28598__auto____0 = (function (){
var statearr_31750 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31750[(0)] = figwheel$client$heads_up$clear_$_state_machine__28598__auto__);

(statearr_31750[(1)] = (1));

return statearr_31750;
});
var figwheel$client$heads_up$clear_$_state_machine__28598__auto____1 = (function (state_31745){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_31745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e31751){if((e31751 instanceof Object)){
var ex__28601__auto__ = e31751;
var statearr_31752_31754 = state_31745;
(statearr_31752_31754[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31755 = state_31745;
state_31745 = G__31755;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__28598__auto__ = function(state_31745){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__28598__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__28598__auto____1.call(this,state_31745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__28598__auto____0;
figwheel$client$heads_up$clear_$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__28598__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__28598__auto__;
})()
})();
var state__28696__auto__ = (function (){var statearr_31753 = f__28695__auto__.call(null);
(statearr_31753[(6)] = c__28694__auto__);

return statearr_31753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
}));

return c__28694__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__28694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = (function (state_31766){
var state_val_31767 = (state_31766[(1)]);
if((state_val_31767 === (1))){
var inst_31756 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_31766__$1 = state_31766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31766__$1,(2),inst_31756);
} else {
if((state_val_31767 === (2))){
var inst_31758 = (state_31766[(2)]);
var inst_31759 = cljs.core.async.timeout.call(null,(400));
var state_31766__$1 = (function (){var statearr_31768 = state_31766;
(statearr_31768[(7)] = inst_31758);

return statearr_31768;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31766__$1,(3),inst_31759);
} else {
if((state_val_31767 === (3))){
var inst_31761 = (state_31766[(2)]);
var inst_31762 = figwheel.client.heads_up.clear.call(null);
var state_31766__$1 = (function (){var statearr_31769 = state_31766;
(statearr_31769[(8)] = inst_31761);

return statearr_31769;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31766__$1,(4),inst_31762);
} else {
if((state_val_31767 === (4))){
var inst_31764 = (state_31766[(2)]);
var state_31766__$1 = state_31766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31766__$1,inst_31764);
} else {
return null;
}
}
}
}
});
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__28598__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__28598__auto____0 = (function (){
var statearr_31770 = [null,null,null,null,null,null,null,null,null];
(statearr_31770[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__28598__auto__);

(statearr_31770[(1)] = (1));

return statearr_31770;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__28598__auto____1 = (function (state_31766){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_31766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e31771){if((e31771 instanceof Object)){
var ex__28601__auto__ = e31771;
var statearr_31772_31774 = state_31766;
(statearr_31772_31774[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31775 = state_31766;
state_31766 = G__31775;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__28598__auto__ = function(state_31766){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__28598__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__28598__auto____1.call(this,state_31766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__28598__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__28598__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__28598__auto__;
})()
})();
var state__28696__auto__ = (function (){var statearr_31773 = f__28695__auto__.call(null);
(statearr_31773[(6)] = c__28694__auto__);

return statearr_31773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
}));

return c__28694__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__5753__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__5753__auto__)){
var el = temp__5753__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": ["background-color: rgba(24, 26, 38, 0.95);","position: absolute;","z-index: 9000;","width: 100vw;","height: 100vh;","top: 0px; left: 0px;","font-family: monospace"].join('')}),goog.dom.createDom("div",({"class": "message", "style": ["color: #FFF5DB;","width: 100vw;","margin: auto;","margin-top: 10px;","text-align: center; ","padding: 2px 0px;","font-size: 13px;","position: relative"].join('')}),goog.dom.createDom("a",({"onclick": (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
}), "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1643275181620
