// Compiled by ClojureScript 1.10.896 {:optimizations :none}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
goog.require('goog.object');
goog.scope(function(){
figwheel.client.goog$module$goog$object = goog.module.get('goog.object');
});
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e31778){if((e31778 instanceof Error)){
var e = e31778;
return "Error: Unable to stringify";
} else {
throw e31778;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31781 = arguments.length;
switch (G__31781) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31779_SHARP_){
if(typeof p1__31779_SHARP_ === 'string'){
return p1__31779_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31779_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4870__auto__ = [];
var len__4864__auto___31784 = arguments.length;
var i__4865__auto___31785 = (0);
while(true){
if((i__4865__auto___31785 < len__4864__auto___31784)){
args__4870__auto__.push((arguments[i__4865__auto___31785]));

var G__31786 = (i__4865__auto___31785 + (1));
i__4865__auto___31785 = G__31786;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31783){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31783));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4870__auto__ = [];
var len__4864__auto___31788 = arguments.length;
var i__4865__auto___31789 = (0);
while(true){
if((i__4865__auto___31789 < len__4864__auto___31788)){
args__4870__auto__.push((arguments[i__4865__auto___31789]));

var G__31790 = (i__4865__auto___31789 + (1));
i__4865__auto___31789 = G__31790;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31787){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31787));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31791){
var map__31792 = p__31791;
var map__31792__$1 = cljs.core.__destructure_map.call(null,map__31792);
var message = cljs.core.get.call(null,map__31792__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31792__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4253__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4251__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4251__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4251__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28694__auto___31870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = (function (state_31842){
var state_val_31843 = (state_31842[(1)]);
if((state_val_31843 === (7))){
var inst_31838 = (state_31842[(2)]);
var state_31842__$1 = state_31842;
var statearr_31844_31871 = state_31842__$1;
(statearr_31844_31871[(2)] = inst_31838);

(statearr_31844_31871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (1))){
var state_31842__$1 = state_31842;
var statearr_31845_31872 = state_31842__$1;
(statearr_31845_31872[(2)] = null);

(statearr_31845_31872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (4))){
var inst_31795 = (state_31842[(7)]);
var inst_31795__$1 = (state_31842[(2)]);
var state_31842__$1 = (function (){var statearr_31846 = state_31842;
(statearr_31846[(7)] = inst_31795__$1);

return statearr_31846;
})();
if(cljs.core.truth_(inst_31795__$1)){
var statearr_31847_31873 = state_31842__$1;
(statearr_31847_31873[(1)] = (5));

} else {
var statearr_31848_31874 = state_31842__$1;
(statearr_31848_31874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (15))){
var inst_31802 = (state_31842[(8)]);
var inst_31817 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31802);
var inst_31818 = cljs.core.first.call(null,inst_31817);
var inst_31819 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31818);
var inst_31820 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31819)].join('');
var inst_31821 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31820);
var state_31842__$1 = state_31842;
var statearr_31849_31875 = state_31842__$1;
(statearr_31849_31875[(2)] = inst_31821);

(statearr_31849_31875[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (13))){
var inst_31826 = (state_31842[(2)]);
var state_31842__$1 = state_31842;
var statearr_31850_31876 = state_31842__$1;
(statearr_31850_31876[(2)] = inst_31826);

(statearr_31850_31876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (6))){
var state_31842__$1 = state_31842;
var statearr_31851_31877 = state_31842__$1;
(statearr_31851_31877[(2)] = null);

(statearr_31851_31877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (17))){
var inst_31824 = (state_31842[(2)]);
var state_31842__$1 = state_31842;
var statearr_31852_31878 = state_31842__$1;
(statearr_31852_31878[(2)] = inst_31824);

(statearr_31852_31878[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (3))){
var inst_31840 = (state_31842[(2)]);
var state_31842__$1 = state_31842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31842__$1,inst_31840);
} else {
if((state_val_31843 === (12))){
var inst_31801 = (state_31842[(9)]);
var inst_31815 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31801,opts);
var state_31842__$1 = state_31842;
if(inst_31815){
var statearr_31853_31879 = state_31842__$1;
(statearr_31853_31879[(1)] = (15));

} else {
var statearr_31854_31880 = state_31842__$1;
(statearr_31854_31880[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (2))){
var state_31842__$1 = state_31842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31842__$1,(4),ch);
} else {
if((state_val_31843 === (11))){
var inst_31802 = (state_31842[(8)]);
var inst_31807 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31808 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31802);
var inst_31809 = cljs.core.async.timeout.call(null,(1000));
var inst_31810 = [inst_31808,inst_31809];
var inst_31811 = (new cljs.core.PersistentVector(null,2,(5),inst_31807,inst_31810,null));
var state_31842__$1 = state_31842;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31842__$1,(14),inst_31811);
} else {
if((state_val_31843 === (9))){
var inst_31802 = (state_31842[(8)]);
var inst_31828 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31829 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31802);
var inst_31830 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31829);
var inst_31831 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31830)].join('');
var inst_31832 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31831);
var state_31842__$1 = (function (){var statearr_31855 = state_31842;
(statearr_31855[(10)] = inst_31828);

return statearr_31855;
})();
var statearr_31856_31881 = state_31842__$1;
(statearr_31856_31881[(2)] = inst_31832);

(statearr_31856_31881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (5))){
var inst_31795 = (state_31842[(7)]);
var inst_31797 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31798 = (new cljs.core.PersistentArrayMap(null,2,inst_31797,null));
var inst_31799 = (new cljs.core.PersistentHashSet(null,inst_31798,null));
var inst_31800 = figwheel.client.focus_msgs.call(null,inst_31799,inst_31795);
var inst_31801 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31800);
var inst_31802 = cljs.core.first.call(null,inst_31800);
var inst_31803 = figwheel.client.autoload_QMARK_.call(null);
var state_31842__$1 = (function (){var statearr_31857 = state_31842;
(statearr_31857[(8)] = inst_31802);

(statearr_31857[(9)] = inst_31801);

return statearr_31857;
})();
if(cljs.core.truth_(inst_31803)){
var statearr_31858_31882 = state_31842__$1;
(statearr_31858_31882[(1)] = (8));

} else {
var statearr_31859_31883 = state_31842__$1;
(statearr_31859_31883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (14))){
var inst_31813 = (state_31842[(2)]);
var state_31842__$1 = state_31842;
var statearr_31860_31884 = state_31842__$1;
(statearr_31860_31884[(2)] = inst_31813);

(statearr_31860_31884[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (16))){
var state_31842__$1 = state_31842;
var statearr_31861_31885 = state_31842__$1;
(statearr_31861_31885[(2)] = null);

(statearr_31861_31885[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (10))){
var inst_31834 = (state_31842[(2)]);
var state_31842__$1 = (function (){var statearr_31862 = state_31842;
(statearr_31862[(11)] = inst_31834);

return statearr_31862;
})();
var statearr_31863_31886 = state_31842__$1;
(statearr_31863_31886[(2)] = null);

(statearr_31863_31886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (8))){
var inst_31801 = (state_31842[(9)]);
var inst_31805 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31801,opts);
var state_31842__$1 = state_31842;
if(cljs.core.truth_(inst_31805)){
var statearr_31864_31887 = state_31842__$1;
(statearr_31864_31887[(1)] = (11));

} else {
var statearr_31865_31888 = state_31842__$1;
(statearr_31865_31888[(1)] = (12));

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
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28598__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28598__auto____0 = (function (){
var statearr_31866 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31866[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28598__auto__);

(statearr_31866[(1)] = (1));

return statearr_31866;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28598__auto____1 = (function (state_31842){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_31842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e31867){if((e31867 instanceof Object)){
var ex__28601__auto__ = e31867;
var statearr_31868_31889 = state_31842;
(statearr_31868_31889[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31890 = state_31842;
state_31842 = G__31890;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28598__auto__ = function(state_31842){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28598__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28598__auto____1.call(this,state_31842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28598__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28598__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28598__auto__;
})()
})();
var state__28696__auto__ = (function (){var statearr_31869 = f__28695__auto__.call(null);
(statearr_31869[(6)] = c__28694__auto___31870);

return statearr_31869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31891_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31891_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31897 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31893 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31894 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31895 = true;
var _STAR_print_fn_STAR__temp_val__31896 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31895);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31896);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31894);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31893);
}}catch (e31892){if((e31892 instanceof Error)){
var e = e31892;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31897], null));
} else {
var e = e31892;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31898){
var map__31899 = p__31898;
var map__31899__$1 = cljs.core.__destructure_map.call(null,map__31899);
var opts = map__31899__$1;
var build_id = cljs.core.get.call(null,map__31899__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__31900){
var vec__31901 = p__31900;
var seq__31902 = cljs.core.seq.call(null,vec__31901);
var first__31903 = cljs.core.first.call(null,seq__31902);
var seq__31902__$1 = cljs.core.next.call(null,seq__31902);
var map__31904 = first__31903;
var map__31904__$1 = cljs.core.__destructure_map.call(null,map__31904);
var msg = map__31904__$1;
var msg_name = cljs.core.get.call(null,map__31904__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31902__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31905){
var vec__31906 = p__31905;
var seq__31907 = cljs.core.seq.call(null,vec__31906);
var first__31908 = cljs.core.first.call(null,seq__31907);
var seq__31907__$1 = cljs.core.next.call(null,seq__31907);
var map__31909 = first__31908;
var map__31909__$1 = cljs.core.__destructure_map.call(null,map__31909);
var msg = map__31909__$1;
var msg_name = cljs.core.get.call(null,map__31909__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31907__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31910){
var map__31911 = p__31910;
var map__31911__$1 = cljs.core.__destructure_map.call(null,map__31911);
var on_compile_warning = cljs.core.get.call(null,map__31911__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31911__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__31912){
var vec__31913 = p__31912;
var seq__31914 = cljs.core.seq.call(null,vec__31913);
var first__31915 = cljs.core.first.call(null,seq__31914);
var seq__31914__$1 = cljs.core.next.call(null,seq__31914);
var map__31916 = first__31915;
var map__31916__$1 = cljs.core.__destructure_map.call(null,map__31916);
var msg = map__31916__$1;
var msg_name = cljs.core.get.call(null,map__31916__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31914__$1;
var pred__31917 = cljs.core._EQ_;
var expr__31918 = msg_name;
if(cljs.core.truth_(pred__31917.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31918))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31917.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31918))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = (function (state_32007){
var state_val_32008 = (state_32007[(1)]);
if((state_val_32008 === (7))){
var inst_31927 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
if(cljs.core.truth_(inst_31927)){
var statearr_32009_32056 = state_32007__$1;
(statearr_32009_32056[(1)] = (8));

} else {
var statearr_32010_32057 = state_32007__$1;
(statearr_32010_32057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (20))){
var inst_32001 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
var statearr_32011_32058 = state_32007__$1;
(statearr_32011_32058[(2)] = inst_32001);

(statearr_32011_32058[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (27))){
var inst_31997 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
var statearr_32012_32059 = state_32007__$1;
(statearr_32012_32059[(2)] = inst_31997);

(statearr_32012_32059[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (1))){
var inst_31920 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32007__$1 = state_32007;
if(cljs.core.truth_(inst_31920)){
var statearr_32013_32060 = state_32007__$1;
(statearr_32013_32060[(1)] = (2));

} else {
var statearr_32014_32061 = state_32007__$1;
(statearr_32014_32061[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (24))){
var inst_31999 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
var statearr_32015_32062 = state_32007__$1;
(statearr_32015_32062[(2)] = inst_31999);

(statearr_32015_32062[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (4))){
var inst_32005 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32007__$1,inst_32005);
} else {
if((state_val_32008 === (15))){
var inst_32003 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
var statearr_32016_32063 = state_32007__$1;
(statearr_32016_32063[(2)] = inst_32003);

(statearr_32016_32063[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (21))){
var inst_31956 = (state_32007[(2)]);
var inst_31957 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31958 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31957);
var state_32007__$1 = (function (){var statearr_32017 = state_32007;
(statearr_32017[(7)] = inst_31956);

return statearr_32017;
})();
var statearr_32018_32064 = state_32007__$1;
(statearr_32018_32064[(2)] = inst_31958);

(statearr_32018_32064[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (31))){
var inst_31986 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32007__$1 = state_32007;
if(inst_31986){
var statearr_32019_32065 = state_32007__$1;
(statearr_32019_32065[(1)] = (34));

} else {
var statearr_32020_32066 = state_32007__$1;
(statearr_32020_32066[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (32))){
var inst_31995 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
var statearr_32021_32067 = state_32007__$1;
(statearr_32021_32067[(2)] = inst_31995);

(statearr_32021_32067[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (33))){
var inst_31982 = (state_32007[(2)]);
var inst_31983 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31984 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31983);
var state_32007__$1 = (function (){var statearr_32022 = state_32007;
(statearr_32022[(8)] = inst_31982);

return statearr_32022;
})();
var statearr_32023_32068 = state_32007__$1;
(statearr_32023_32068[(2)] = inst_31984);

(statearr_32023_32068[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (13))){
var inst_31941 = figwheel.client.heads_up.clear.call(null);
var state_32007__$1 = state_32007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32007__$1,(16),inst_31941);
} else {
if((state_val_32008 === (22))){
var inst_31962 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31963 = figwheel.client.heads_up.append_warning_message.call(null,inst_31962);
var state_32007__$1 = state_32007;
var statearr_32024_32069 = state_32007__$1;
(statearr_32024_32069[(2)] = inst_31963);

(statearr_32024_32069[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (36))){
var inst_31993 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
var statearr_32025_32070 = state_32007__$1;
(statearr_32025_32070[(2)] = inst_31993);

(statearr_32025_32070[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (29))){
var inst_31973 = (state_32007[(2)]);
var inst_31974 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31975 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31974);
var state_32007__$1 = (function (){var statearr_32026 = state_32007;
(statearr_32026[(9)] = inst_31973);

return statearr_32026;
})();
var statearr_32027_32071 = state_32007__$1;
(statearr_32027_32071[(2)] = inst_31975);

(statearr_32027_32071[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (6))){
var inst_31922 = (state_32007[(10)]);
var state_32007__$1 = state_32007;
var statearr_32028_32072 = state_32007__$1;
(statearr_32028_32072[(2)] = inst_31922);

(statearr_32028_32072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (28))){
var inst_31969 = (state_32007[(2)]);
var inst_31970 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31971 = figwheel.client.heads_up.display_warning.call(null,inst_31970);
var state_32007__$1 = (function (){var statearr_32029 = state_32007;
(statearr_32029[(11)] = inst_31969);

return statearr_32029;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32007__$1,(29),inst_31971);
} else {
if((state_val_32008 === (25))){
var inst_31967 = figwheel.client.heads_up.clear.call(null);
var state_32007__$1 = state_32007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32007__$1,(28),inst_31967);
} else {
if((state_val_32008 === (34))){
var inst_31988 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32007__$1 = state_32007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32007__$1,(37),inst_31988);
} else {
if((state_val_32008 === (17))){
var inst_31947 = (state_32007[(2)]);
var inst_31948 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31949 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31948);
var state_32007__$1 = (function (){var statearr_32030 = state_32007;
(statearr_32030[(12)] = inst_31947);

return statearr_32030;
})();
var statearr_32031_32073 = state_32007__$1;
(statearr_32031_32073[(2)] = inst_31949);

(statearr_32031_32073[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (3))){
var inst_31939 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32007__$1 = state_32007;
if(inst_31939){
var statearr_32032_32074 = state_32007__$1;
(statearr_32032_32074[(1)] = (13));

} else {
var statearr_32033_32075 = state_32007__$1;
(statearr_32033_32075[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (12))){
var inst_31935 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
var statearr_32034_32076 = state_32007__$1;
(statearr_32034_32076[(2)] = inst_31935);

(statearr_32034_32076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (2))){
var inst_31922 = (state_32007[(10)]);
var inst_31922__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_32007__$1 = (function (){var statearr_32035 = state_32007;
(statearr_32035[(10)] = inst_31922__$1);

return statearr_32035;
})();
if(cljs.core.truth_(inst_31922__$1)){
var statearr_32036_32077 = state_32007__$1;
(statearr_32036_32077[(1)] = (5));

} else {
var statearr_32037_32078 = state_32007__$1;
(statearr_32037_32078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (23))){
var inst_31965 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32007__$1 = state_32007;
if(inst_31965){
var statearr_32038_32079 = state_32007__$1;
(statearr_32038_32079[(1)] = (25));

} else {
var statearr_32039_32080 = state_32007__$1;
(statearr_32039_32080[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (35))){
var state_32007__$1 = state_32007;
var statearr_32040_32081 = state_32007__$1;
(statearr_32040_32081[(2)] = null);

(statearr_32040_32081[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (19))){
var inst_31960 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32007__$1 = state_32007;
if(inst_31960){
var statearr_32041_32082 = state_32007__$1;
(statearr_32041_32082[(1)] = (22));

} else {
var statearr_32042_32083 = state_32007__$1;
(statearr_32042_32083[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (11))){
var inst_31931 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
var statearr_32043_32084 = state_32007__$1;
(statearr_32043_32084[(2)] = inst_31931);

(statearr_32043_32084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (9))){
var inst_31933 = figwheel.client.heads_up.clear.call(null);
var state_32007__$1 = state_32007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32007__$1,(12),inst_31933);
} else {
if((state_val_32008 === (5))){
var inst_31924 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32007__$1 = state_32007;
var statearr_32044_32085 = state_32007__$1;
(statearr_32044_32085[(2)] = inst_31924);

(statearr_32044_32085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (14))){
var inst_31951 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32007__$1 = state_32007;
if(inst_31951){
var statearr_32045_32086 = state_32007__$1;
(statearr_32045_32086[(1)] = (18));

} else {
var statearr_32046_32087 = state_32007__$1;
(statearr_32046_32087[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (26))){
var inst_31977 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32007__$1 = state_32007;
if(inst_31977){
var statearr_32047_32088 = state_32007__$1;
(statearr_32047_32088[(1)] = (30));

} else {
var statearr_32048_32089 = state_32007__$1;
(statearr_32048_32089[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (16))){
var inst_31943 = (state_32007[(2)]);
var inst_31944 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31945 = figwheel.client.heads_up.display_exception.call(null,inst_31944);
var state_32007__$1 = (function (){var statearr_32049 = state_32007;
(statearr_32049[(13)] = inst_31943);

return statearr_32049;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32007__$1,(17),inst_31945);
} else {
if((state_val_32008 === (30))){
var inst_31979 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31980 = figwheel.client.heads_up.display_warning.call(null,inst_31979);
var state_32007__$1 = state_32007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32007__$1,(33),inst_31980);
} else {
if((state_val_32008 === (10))){
var inst_31937 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
var statearr_32050_32090 = state_32007__$1;
(statearr_32050_32090[(2)] = inst_31937);

(statearr_32050_32090[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (18))){
var inst_31953 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31954 = figwheel.client.heads_up.display_exception.call(null,inst_31953);
var state_32007__$1 = state_32007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32007__$1,(21),inst_31954);
} else {
if((state_val_32008 === (37))){
var inst_31990 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
var statearr_32051_32091 = state_32007__$1;
(statearr_32051_32091[(2)] = inst_31990);

(statearr_32051_32091[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (8))){
var inst_31929 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32007__$1 = state_32007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32007__$1,(11),inst_31929);
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
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28598__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28598__auto____0 = (function (){
var statearr_32052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32052[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28598__auto__);

(statearr_32052[(1)] = (1));

return statearr_32052;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28598__auto____1 = (function (state_32007){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_32007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e32053){if((e32053 instanceof Object)){
var ex__28601__auto__ = e32053;
var statearr_32054_32092 = state_32007;
(statearr_32054_32092[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32093 = state_32007;
state_32007 = G__32093;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28598__auto__ = function(state_32007){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28598__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28598__auto____1.call(this,state_32007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28598__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28598__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28598__auto__;
})()
})();
var state__28696__auto__ = (function (){var statearr_32055 = f__28695__auto__.call(null);
(statearr_32055[(6)] = c__28694__auto__);

return statearr_32055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
}));

return c__28694__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28694__auto___32122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = (function (state_32108){
var state_val_32109 = (state_32108[(1)]);
if((state_val_32109 === (1))){
var state_32108__$1 = state_32108;
var statearr_32110_32123 = state_32108__$1;
(statearr_32110_32123[(2)] = null);

(statearr_32110_32123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (2))){
var state_32108__$1 = state_32108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32108__$1,(4),ch);
} else {
if((state_val_32109 === (3))){
var inst_32106 = (state_32108[(2)]);
var state_32108__$1 = state_32108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32108__$1,inst_32106);
} else {
if((state_val_32109 === (4))){
var inst_32096 = (state_32108[(7)]);
var inst_32096__$1 = (state_32108[(2)]);
var state_32108__$1 = (function (){var statearr_32111 = state_32108;
(statearr_32111[(7)] = inst_32096__$1);

return statearr_32111;
})();
if(cljs.core.truth_(inst_32096__$1)){
var statearr_32112_32124 = state_32108__$1;
(statearr_32112_32124[(1)] = (5));

} else {
var statearr_32113_32125 = state_32108__$1;
(statearr_32113_32125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (5))){
var inst_32096 = (state_32108[(7)]);
var inst_32098 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32096);
var state_32108__$1 = state_32108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32108__$1,(8),inst_32098);
} else {
if((state_val_32109 === (6))){
var state_32108__$1 = state_32108;
var statearr_32114_32126 = state_32108__$1;
(statearr_32114_32126[(2)] = null);

(statearr_32114_32126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (7))){
var inst_32104 = (state_32108[(2)]);
var state_32108__$1 = state_32108;
var statearr_32115_32127 = state_32108__$1;
(statearr_32115_32127[(2)] = inst_32104);

(statearr_32115_32127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (8))){
var inst_32100 = (state_32108[(2)]);
var state_32108__$1 = (function (){var statearr_32116 = state_32108;
(statearr_32116[(8)] = inst_32100);

return statearr_32116;
})();
var statearr_32117_32128 = state_32108__$1;
(statearr_32117_32128[(2)] = null);

(statearr_32117_32128[(1)] = (2));


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
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28598__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28598__auto____0 = (function (){
var statearr_32118 = [null,null,null,null,null,null,null,null,null];
(statearr_32118[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28598__auto__);

(statearr_32118[(1)] = (1));

return statearr_32118;
});
var figwheel$client$heads_up_plugin_$_state_machine__28598__auto____1 = (function (state_32108){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_32108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e32119){if((e32119 instanceof Object)){
var ex__28601__auto__ = e32119;
var statearr_32120_32129 = state_32108;
(statearr_32120_32129[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32130 = state_32108;
state_32108 = G__32130;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28598__auto__ = function(state_32108){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28598__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28598__auto____1.call(this,state_32108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28598__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28598__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28598__auto__;
})()
})();
var state__28696__auto__ = (function (){var statearr_32121 = f__28695__auto__.call(null);
(statearr_32121[(6)] = c__28694__auto___32122);

return statearr_32121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = (function (state_32136){
var state_val_32137 = (state_32136[(1)]);
if((state_val_32137 === (1))){
var inst_32131 = cljs.core.async.timeout.call(null,(3000));
var state_32136__$1 = state_32136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32136__$1,(2),inst_32131);
} else {
if((state_val_32137 === (2))){
var inst_32133 = (state_32136[(2)]);
var inst_32134 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32136__$1 = (function (){var statearr_32138 = state_32136;
(statearr_32138[(7)] = inst_32133);

return statearr_32138;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32136__$1,inst_32134);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28598__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28598__auto____0 = (function (){
var statearr_32139 = [null,null,null,null,null,null,null,null];
(statearr_32139[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28598__auto__);

(statearr_32139[(1)] = (1));

return statearr_32139;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28598__auto____1 = (function (state_32136){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_32136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e32140){if((e32140 instanceof Object)){
var ex__28601__auto__ = e32140;
var statearr_32141_32143 = state_32136;
(statearr_32141_32143[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32144 = state_32136;
state_32136 = G__32144;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28598__auto__ = function(state_32136){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28598__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28598__auto____1.call(this,state_32136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28598__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28598__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28598__auto__;
})()
})();
var state__28696__auto__ = (function (){var statearr_32142 = f__28695__auto__.call(null);
(statearr_32142[(6)] = c__28694__auto__);

return statearr_32142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
}));

return c__28694__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5753__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5753__auto__)){
var figwheel_version = temp__5753__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = (function (state_32151){
var state_val_32152 = (state_32151[(1)]);
if((state_val_32152 === (1))){
var inst_32145 = cljs.core.async.timeout.call(null,(2000));
var state_32151__$1 = state_32151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32151__$1,(2),inst_32145);
} else {
if((state_val_32152 === (2))){
var inst_32147 = (state_32151[(2)]);
var inst_32148 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_32149 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_32148);
var state_32151__$1 = (function (){var statearr_32153 = state_32151;
(statearr_32153[(7)] = inst_32147);

return statearr_32153;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32151__$1,inst_32149);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28598__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28598__auto____0 = (function (){
var statearr_32154 = [null,null,null,null,null,null,null,null];
(statearr_32154[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28598__auto__);

(statearr_32154[(1)] = (1));

return statearr_32154;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28598__auto____1 = (function (state_32151){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_32151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e32155){if((e32155 instanceof Object)){
var ex__28601__auto__ = e32155;
var statearr_32156_32158 = state_32151;
(statearr_32156_32158[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32159 = state_32151;
state_32151 = G__32159;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28598__auto__ = function(state_32151){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28598__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28598__auto____1.call(this,state_32151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28598__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28598__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28598__auto__;
})()
})();
var state__28696__auto__ = (function (){var statearr_32157 = f__28695__auto__.call(null);
(statearr_32157[(6)] = c__28694__auto__);

return statearr_32157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
}));

return c__28694__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__32160){
var map__32161 = p__32160;
var map__32161__$1 = cljs.core.__destructure_map.call(null,map__32161);
var file = cljs.core.get.call(null,map__32161__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32161__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32161__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32162 = "";
var G__32162__$1 = (cljs.core.truth_(file)?[G__32162,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__32162);
var G__32162__$2 = (cljs.core.truth_(line)?[G__32162__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__32162__$1);
if(cljs.core.truth_((function (){var and__4251__auto__ = line;
if(cljs.core.truth_(and__4251__auto__)){
return column;
} else {
return and__4251__auto__;
}
})())){
return [G__32162__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__32162__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32163){
var map__32164 = p__32163;
var map__32164__$1 = cljs.core.__destructure_map.call(null,map__32164);
var ed = map__32164__$1;
var exception_data = cljs.core.get.call(null,map__32164__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32164__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_32166 = (function (){var G__32165 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32165)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__32165;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_32166);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32167){
var map__32168 = p__32167;
var map__32168__$1 = cljs.core.__destructure_map.call(null,map__32168);
var w = map__32168__$1;
var message = cljs.core.get.call(null,map__32168__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public\\js\\out\\figwheel\\client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public\\js\\out\\figwheel\\client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4251__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4251__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4251__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32169 = cljs.core.seq.call(null,plugins);
var chunk__32170 = null;
var count__32171 = (0);
var i__32172 = (0);
while(true){
if((i__32172 < count__32171)){
var vec__32179 = cljs.core._nth.call(null,chunk__32170,i__32172);
var k = cljs.core.nth.call(null,vec__32179,(0),null);
var plugin = cljs.core.nth.call(null,vec__32179,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32185 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32169,chunk__32170,count__32171,i__32172,pl_32185,vec__32179,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32185.call(null,msg_hist);
});})(seq__32169,chunk__32170,count__32171,i__32172,pl_32185,vec__32179,k,plugin))
);
} else {
}


var G__32186 = seq__32169;
var G__32187 = chunk__32170;
var G__32188 = count__32171;
var G__32189 = (i__32172 + (1));
seq__32169 = G__32186;
chunk__32170 = G__32187;
count__32171 = G__32188;
i__32172 = G__32189;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__32169);
if(temp__5753__auto__){
var seq__32169__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32169__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__32169__$1);
var G__32190 = cljs.core.chunk_rest.call(null,seq__32169__$1);
var G__32191 = c__4679__auto__;
var G__32192 = cljs.core.count.call(null,c__4679__auto__);
var G__32193 = (0);
seq__32169 = G__32190;
chunk__32170 = G__32191;
count__32171 = G__32192;
i__32172 = G__32193;
continue;
} else {
var vec__32182 = cljs.core.first.call(null,seq__32169__$1);
var k = cljs.core.nth.call(null,vec__32182,(0),null);
var plugin = cljs.core.nth.call(null,vec__32182,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32194 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32169,chunk__32170,count__32171,i__32172,pl_32194,vec__32182,k,plugin,seq__32169__$1,temp__5753__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32194.call(null,msg_hist);
});})(seq__32169,chunk__32170,count__32171,i__32172,pl_32194,vec__32182,k,plugin,seq__32169__$1,temp__5753__auto__))
);
} else {
}


var G__32195 = cljs.core.next.call(null,seq__32169__$1);
var G__32196 = null;
var G__32197 = (0);
var G__32198 = (0);
seq__32169 = G__32195;
chunk__32170 = G__32196;
count__32171 = G__32197;
i__32172 = G__32198;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__32200 = arguments.length;
switch (G__32200) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__32201_32206 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__32202_32207 = null;
var count__32203_32208 = (0);
var i__32204_32209 = (0);
while(true){
if((i__32204_32209 < count__32203_32208)){
var msg_32210 = cljs.core._nth.call(null,chunk__32202_32207,i__32204_32209);
figwheel.client.socket.handle_incoming_message.call(null,msg_32210);


var G__32211 = seq__32201_32206;
var G__32212 = chunk__32202_32207;
var G__32213 = count__32203_32208;
var G__32214 = (i__32204_32209 + (1));
seq__32201_32206 = G__32211;
chunk__32202_32207 = G__32212;
count__32203_32208 = G__32213;
i__32204_32209 = G__32214;
continue;
} else {
var temp__5753__auto___32215 = cljs.core.seq.call(null,seq__32201_32206);
if(temp__5753__auto___32215){
var seq__32201_32216__$1 = temp__5753__auto___32215;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32201_32216__$1)){
var c__4679__auto___32217 = cljs.core.chunk_first.call(null,seq__32201_32216__$1);
var G__32218 = cljs.core.chunk_rest.call(null,seq__32201_32216__$1);
var G__32219 = c__4679__auto___32217;
var G__32220 = cljs.core.count.call(null,c__4679__auto___32217);
var G__32221 = (0);
seq__32201_32206 = G__32218;
chunk__32202_32207 = G__32219;
count__32203_32208 = G__32220;
i__32204_32209 = G__32221;
continue;
} else {
var msg_32222 = cljs.core.first.call(null,seq__32201_32216__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_32222);


var G__32223 = cljs.core.next.call(null,seq__32201_32216__$1);
var G__32224 = null;
var G__32225 = (0);
var G__32226 = (0);
seq__32201_32206 = G__32223;
chunk__32202_32207 = G__32224;
count__32203_32208 = G__32225;
i__32204_32209 = G__32226;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4870__auto__ = [];
var len__4864__auto___32230 = arguments.length;
var i__4865__auto___32231 = (0);
while(true){
if((i__4865__auto___32231 < len__4864__auto___32230)){
args__4870__auto__.push((arguments[i__4865__auto___32231]));

var G__32232 = (i__4865__auto___32231 + (1));
i__4865__auto___32231 = G__32232;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32228){
var map__32229 = p__32228;
var map__32229__$1 = cljs.core.__destructure_map.call(null,map__32229);
var opts = map__32229__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32227){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32227));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,figwheel.client.goog$module$goog$object.get.call(null,window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e32233){if((e32233 instanceof Error)){
var e = e32233;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e32233;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__32234){
var map__32235 = p__32234;
var map__32235__$1 = cljs.core.__destructure_map.call(null,map__32235);
var msg_name = cljs.core.get.call(null,map__32235__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1643275181786
