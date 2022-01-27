// Compiled by ClojureScript 1.10.896 {:optimizations :none}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
goog.require('goog.object');
goog.scope(function(){
figwheel.client.file_reloading.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4253__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (((typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))))))));
if(or__4253__auto__){
return or__4253__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (((cljs.core._EQ_.call(null,"cljs.core",ns)) || (((cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (((goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")))))))));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__30761 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.debugLoader_.dependencies_,path);
if((G__30761 == null)){
return null;
} else {
return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,G__30761,"requires");
}
}):(function (path){
var G__30762 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.requires,path);
if((G__30762 == null)){
return null;
} else {
return figwheel.client.file_reloading.goog$module$goog$object.getKeys.call(null,G__30762);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30763_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30763_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = figwheel.client.file_reloading.goog$module$goog$object.filter.call(null,goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__30764 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.debugLoader_.dependencies_,path);
var G__30764__$1 = (((G__30764 == null))?null:figwheel.client.file_reloading.goog$module$goog$object.get.call(null,G__30764,"provides"));
if((G__30764__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__30764__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,figwheel.client.file_reloading.goog$module$goog$object.filter.call(null,goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,figwheel.client.file_reloading.goog$module$goog$object.get.call(null,dep,"provides")));
})),(function (dep,path,_){
var provides = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,dep,"provides");
var requires = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,dep,"requires");
var seq__30765 = cljs.core.seq.call(null,provides);
var chunk__30766 = null;
var count__30767 = (0);
var i__30768 = (0);
while(true){
if((i__30768 < count__30767)){
var prov = cljs.core._nth.call(null,chunk__30766,i__30768);
var seq__30777_30789 = cljs.core.seq.call(null,requires);
var chunk__30778_30790 = null;
var count__30779_30791 = (0);
var i__30780_30792 = (0);
while(true){
if((i__30780_30792 < count__30779_30791)){
var req_30793 = cljs.core._nth.call(null,chunk__30778_30790,i__30780_30792);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30793,prov);


var G__30794 = seq__30777_30789;
var G__30795 = chunk__30778_30790;
var G__30796 = count__30779_30791;
var G__30797 = (i__30780_30792 + (1));
seq__30777_30789 = G__30794;
chunk__30778_30790 = G__30795;
count__30779_30791 = G__30796;
i__30780_30792 = G__30797;
continue;
} else {
var temp__5753__auto___30798 = cljs.core.seq.call(null,seq__30777_30789);
if(temp__5753__auto___30798){
var seq__30777_30799__$1 = temp__5753__auto___30798;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30777_30799__$1)){
var c__4679__auto___30800 = cljs.core.chunk_first.call(null,seq__30777_30799__$1);
var G__30801 = cljs.core.chunk_rest.call(null,seq__30777_30799__$1);
var G__30802 = c__4679__auto___30800;
var G__30803 = cljs.core.count.call(null,c__4679__auto___30800);
var G__30804 = (0);
seq__30777_30789 = G__30801;
chunk__30778_30790 = G__30802;
count__30779_30791 = G__30803;
i__30780_30792 = G__30804;
continue;
} else {
var req_30805 = cljs.core.first.call(null,seq__30777_30799__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30805,prov);


var G__30806 = cljs.core.next.call(null,seq__30777_30799__$1);
var G__30807 = null;
var G__30808 = (0);
var G__30809 = (0);
seq__30777_30789 = G__30806;
chunk__30778_30790 = G__30807;
count__30779_30791 = G__30808;
i__30780_30792 = G__30809;
continue;
}
} else {
}
}
break;
}


var G__30810 = seq__30765;
var G__30811 = chunk__30766;
var G__30812 = count__30767;
var G__30813 = (i__30768 + (1));
seq__30765 = G__30810;
chunk__30766 = G__30811;
count__30767 = G__30812;
i__30768 = G__30813;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__30765);
if(temp__5753__auto__){
var seq__30765__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30765__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__30765__$1);
var G__30814 = cljs.core.chunk_rest.call(null,seq__30765__$1);
var G__30815 = c__4679__auto__;
var G__30816 = cljs.core.count.call(null,c__4679__auto__);
var G__30817 = (0);
seq__30765 = G__30814;
chunk__30766 = G__30815;
count__30767 = G__30816;
i__30768 = G__30817;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30765__$1);
var seq__30781_30818 = cljs.core.seq.call(null,requires);
var chunk__30782_30819 = null;
var count__30783_30820 = (0);
var i__30784_30821 = (0);
while(true){
if((i__30784_30821 < count__30783_30820)){
var req_30822 = cljs.core._nth.call(null,chunk__30782_30819,i__30784_30821);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30822,prov);


var G__30823 = seq__30781_30818;
var G__30824 = chunk__30782_30819;
var G__30825 = count__30783_30820;
var G__30826 = (i__30784_30821 + (1));
seq__30781_30818 = G__30823;
chunk__30782_30819 = G__30824;
count__30783_30820 = G__30825;
i__30784_30821 = G__30826;
continue;
} else {
var temp__5753__auto___30827__$1 = cljs.core.seq.call(null,seq__30781_30818);
if(temp__5753__auto___30827__$1){
var seq__30781_30828__$1 = temp__5753__auto___30827__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30781_30828__$1)){
var c__4679__auto___30829 = cljs.core.chunk_first.call(null,seq__30781_30828__$1);
var G__30830 = cljs.core.chunk_rest.call(null,seq__30781_30828__$1);
var G__30831 = c__4679__auto___30829;
var G__30832 = cljs.core.count.call(null,c__4679__auto___30829);
var G__30833 = (0);
seq__30781_30818 = G__30830;
chunk__30782_30819 = G__30831;
count__30783_30820 = G__30832;
i__30784_30821 = G__30833;
continue;
} else {
var req_30834 = cljs.core.first.call(null,seq__30781_30828__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30834,prov);


var G__30835 = cljs.core.next.call(null,seq__30781_30828__$1);
var G__30836 = null;
var G__30837 = (0);
var G__30838 = (0);
seq__30781_30818 = G__30835;
chunk__30782_30819 = G__30836;
count__30783_30820 = G__30837;
i__30784_30821 = G__30838;
continue;
}
} else {
}
}
break;
}


var G__30839 = cljs.core.next.call(null,seq__30765__$1);
var G__30840 = null;
var G__30841 = (0);
var G__30842 = (0);
seq__30765 = G__30839;
chunk__30766 = G__30840;
count__30767 = G__30841;
i__30768 = G__30842;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = figwheel.client.file_reloading.goog$module$goog$object.filter.call(null,goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,requires,(function (deps,path,_){
var seq__30785 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__30786 = null;
var count__30787 = (0);
var i__30788 = (0);
while(true){
if((i__30788 < count__30787)){
var prov = cljs.core._nth.call(null,chunk__30786,i__30788);
figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,deps,((function (seq__30785,chunk__30786,count__30787,i__30788,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__30785,chunk__30786,count__30787,i__30788,prov,requires))
);


var G__30843 = seq__30785;
var G__30844 = chunk__30786;
var G__30845 = count__30787;
var G__30846 = (i__30788 + (1));
seq__30785 = G__30843;
chunk__30786 = G__30844;
count__30787 = G__30845;
i__30788 = G__30846;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__30785);
if(temp__5753__auto__){
var seq__30785__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30785__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__30785__$1);
var G__30847 = cljs.core.chunk_rest.call(null,seq__30785__$1);
var G__30848 = c__4679__auto__;
var G__30849 = cljs.core.count.call(null,c__4679__auto__);
var G__30850 = (0);
seq__30785 = G__30847;
chunk__30786 = G__30848;
count__30787 = G__30849;
i__30788 = G__30850;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30785__$1);
figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,deps,((function (seq__30785,chunk__30786,count__30787,i__30788,prov,seq__30785__$1,temp__5753__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__30785,chunk__30786,count__30787,i__30788,prov,seq__30785__$1,temp__5753__auto__,requires))
);


var G__30851 = cljs.core.next.call(null,seq__30785__$1);
var G__30852 = null;
var G__30853 = (0);
var G__30854 = (0);
seq__30785 = G__30851;
chunk__30786 = G__30852;
count__30787 = G__30853;
i__30788 = G__30854;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__30855){
var vec__30856 = p__30855;
var _ = cljs.core.nth.call(null,vec__30856,(0),null);
var v = cljs.core.nth.call(null,vec__30856,(1),null);
var and__4251__auto__ = v;
if(cljs.core.truth_(and__4251__auto__)){
return v.call(null,dep);
} else {
return and__4251__auto__;
}
}),cljs.core.filter.call(null,(function (p__30859){
var vec__30860 = p__30859;
var k = cljs.core.nth.call(null,vec__30860,(0),null);
var v = cljs.core.nth.call(null,vec__30860,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30872_30880 = cljs.core.seq.call(null,deps);
var chunk__30873_30881 = null;
var count__30874_30882 = (0);
var i__30875_30883 = (0);
while(true){
if((i__30875_30883 < count__30874_30882)){
var dep_30884 = cljs.core._nth.call(null,chunk__30873_30881,i__30875_30883);
if(cljs.core.truth_((function (){var and__4251__auto__ = dep_30884;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30884));
} else {
return and__4251__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30884,(depth + (1)),state);
} else {
}


var G__30885 = seq__30872_30880;
var G__30886 = chunk__30873_30881;
var G__30887 = count__30874_30882;
var G__30888 = (i__30875_30883 + (1));
seq__30872_30880 = G__30885;
chunk__30873_30881 = G__30886;
count__30874_30882 = G__30887;
i__30875_30883 = G__30888;
continue;
} else {
var temp__5753__auto___30889 = cljs.core.seq.call(null,seq__30872_30880);
if(temp__5753__auto___30889){
var seq__30872_30890__$1 = temp__5753__auto___30889;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30872_30890__$1)){
var c__4679__auto___30891 = cljs.core.chunk_first.call(null,seq__30872_30890__$1);
var G__30892 = cljs.core.chunk_rest.call(null,seq__30872_30890__$1);
var G__30893 = c__4679__auto___30891;
var G__30894 = cljs.core.count.call(null,c__4679__auto___30891);
var G__30895 = (0);
seq__30872_30880 = G__30892;
chunk__30873_30881 = G__30893;
count__30874_30882 = G__30894;
i__30875_30883 = G__30895;
continue;
} else {
var dep_30896 = cljs.core.first.call(null,seq__30872_30890__$1);
if(cljs.core.truth_((function (){var and__4251__auto__ = dep_30896;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30896));
} else {
return and__4251__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30896,(depth + (1)),state);
} else {
}


var G__30897 = cljs.core.next.call(null,seq__30872_30890__$1);
var G__30898 = null;
var G__30899 = (0);
var G__30900 = (0);
seq__30872_30880 = G__30897;
chunk__30873_30881 = G__30898;
count__30874_30882 = G__30899;
i__30875_30883 = G__30900;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30876){
var vec__30877 = p__30876;
var seq__30878 = cljs.core.seq.call(null,vec__30877);
var first__30879 = cljs.core.first.call(null,seq__30878);
var seq__30878__$1 = cljs.core.next.call(null,seq__30878);
var x = first__30879;
var xs = seq__30878__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__30863_SHARP_){
return clojure.set.difference.call(null,p1__30863_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.debugLoader_.written_,path);

return figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.dependencies_.visited,path);

figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.dependencies_.written,path);

return figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__30901_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__30901_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30902 = cljs.core.seq.call(null,provides);
var chunk__30903 = null;
var count__30904 = (0);
var i__30905 = (0);
while(true){
if((i__30905 < count__30904)){
var prov = cljs.core._nth.call(null,chunk__30903,i__30905);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30914_30922 = cljs.core.seq.call(null,requires);
var chunk__30915_30923 = null;
var count__30916_30924 = (0);
var i__30917_30925 = (0);
while(true){
if((i__30917_30925 < count__30916_30924)){
var req_30926 = cljs.core._nth.call(null,chunk__30915_30923,i__30917_30925);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30926,prov);


var G__30927 = seq__30914_30922;
var G__30928 = chunk__30915_30923;
var G__30929 = count__30916_30924;
var G__30930 = (i__30917_30925 + (1));
seq__30914_30922 = G__30927;
chunk__30915_30923 = G__30928;
count__30916_30924 = G__30929;
i__30917_30925 = G__30930;
continue;
} else {
var temp__5753__auto___30931 = cljs.core.seq.call(null,seq__30914_30922);
if(temp__5753__auto___30931){
var seq__30914_30932__$1 = temp__5753__auto___30931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30914_30932__$1)){
var c__4679__auto___30933 = cljs.core.chunk_first.call(null,seq__30914_30932__$1);
var G__30934 = cljs.core.chunk_rest.call(null,seq__30914_30932__$1);
var G__30935 = c__4679__auto___30933;
var G__30936 = cljs.core.count.call(null,c__4679__auto___30933);
var G__30937 = (0);
seq__30914_30922 = G__30934;
chunk__30915_30923 = G__30935;
count__30916_30924 = G__30936;
i__30917_30925 = G__30937;
continue;
} else {
var req_30938 = cljs.core.first.call(null,seq__30914_30932__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30938,prov);


var G__30939 = cljs.core.next.call(null,seq__30914_30932__$1);
var G__30940 = null;
var G__30941 = (0);
var G__30942 = (0);
seq__30914_30922 = G__30939;
chunk__30915_30923 = G__30940;
count__30916_30924 = G__30941;
i__30917_30925 = G__30942;
continue;
}
} else {
}
}
break;
}


var G__30943 = seq__30902;
var G__30944 = chunk__30903;
var G__30945 = count__30904;
var G__30946 = (i__30905 + (1));
seq__30902 = G__30943;
chunk__30903 = G__30944;
count__30904 = G__30945;
i__30905 = G__30946;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__30902);
if(temp__5753__auto__){
var seq__30902__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30902__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__30902__$1);
var G__30947 = cljs.core.chunk_rest.call(null,seq__30902__$1);
var G__30948 = c__4679__auto__;
var G__30949 = cljs.core.count.call(null,c__4679__auto__);
var G__30950 = (0);
seq__30902 = G__30947;
chunk__30903 = G__30948;
count__30904 = G__30949;
i__30905 = G__30950;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30902__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30918_30951 = cljs.core.seq.call(null,requires);
var chunk__30919_30952 = null;
var count__30920_30953 = (0);
var i__30921_30954 = (0);
while(true){
if((i__30921_30954 < count__30920_30953)){
var req_30955 = cljs.core._nth.call(null,chunk__30919_30952,i__30921_30954);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30955,prov);


var G__30956 = seq__30918_30951;
var G__30957 = chunk__30919_30952;
var G__30958 = count__30920_30953;
var G__30959 = (i__30921_30954 + (1));
seq__30918_30951 = G__30956;
chunk__30919_30952 = G__30957;
count__30920_30953 = G__30958;
i__30921_30954 = G__30959;
continue;
} else {
var temp__5753__auto___30960__$1 = cljs.core.seq.call(null,seq__30918_30951);
if(temp__5753__auto___30960__$1){
var seq__30918_30961__$1 = temp__5753__auto___30960__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30918_30961__$1)){
var c__4679__auto___30962 = cljs.core.chunk_first.call(null,seq__30918_30961__$1);
var G__30963 = cljs.core.chunk_rest.call(null,seq__30918_30961__$1);
var G__30964 = c__4679__auto___30962;
var G__30965 = cljs.core.count.call(null,c__4679__auto___30962);
var G__30966 = (0);
seq__30918_30951 = G__30963;
chunk__30919_30952 = G__30964;
count__30920_30953 = G__30965;
i__30921_30954 = G__30966;
continue;
} else {
var req_30967 = cljs.core.first.call(null,seq__30918_30961__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30967,prov);


var G__30968 = cljs.core.next.call(null,seq__30918_30961__$1);
var G__30969 = null;
var G__30970 = (0);
var G__30971 = (0);
seq__30918_30951 = G__30968;
chunk__30919_30952 = G__30969;
count__30920_30953 = G__30970;
i__30921_30954 = G__30971;
continue;
}
} else {
}
}
break;
}


var G__30972 = cljs.core.next.call(null,seq__30902__$1);
var G__30973 = null;
var G__30974 = (0);
var G__30975 = (0);
seq__30902 = G__30972;
chunk__30903 = G__30973;
count__30904 = G__30974;
i__30905 = G__30975;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30976_30980 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30977_30981 = null;
var count__30978_30982 = (0);
var i__30979_30983 = (0);
while(true){
if((i__30979_30983 < count__30978_30982)){
var ns_30984 = cljs.core._nth.call(null,chunk__30977_30981,i__30979_30983);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30984);


var G__30985 = seq__30976_30980;
var G__30986 = chunk__30977_30981;
var G__30987 = count__30978_30982;
var G__30988 = (i__30979_30983 + (1));
seq__30976_30980 = G__30985;
chunk__30977_30981 = G__30986;
count__30978_30982 = G__30987;
i__30979_30983 = G__30988;
continue;
} else {
var temp__5753__auto___30989 = cljs.core.seq.call(null,seq__30976_30980);
if(temp__5753__auto___30989){
var seq__30976_30990__$1 = temp__5753__auto___30989;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30976_30990__$1)){
var c__4679__auto___30991 = cljs.core.chunk_first.call(null,seq__30976_30990__$1);
var G__30992 = cljs.core.chunk_rest.call(null,seq__30976_30990__$1);
var G__30993 = c__4679__auto___30991;
var G__30994 = cljs.core.count.call(null,c__4679__auto___30991);
var G__30995 = (0);
seq__30976_30980 = G__30992;
chunk__30977_30981 = G__30993;
count__30978_30982 = G__30994;
i__30979_30983 = G__30995;
continue;
} else {
var ns_30996 = cljs.core.first.call(null,seq__30976_30990__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30996);


var G__30997 = cljs.core.next.call(null,seq__30976_30990__$1);
var G__30998 = null;
var G__30999 = (0);
var G__31000 = (0);
seq__30976_30980 = G__30997;
chunk__30977_30981 = G__30998;
count__30978_30982 = G__30999;
i__30979_30983 = G__31000;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4253__auto__ = goog.require__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__31001__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31001 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31002__i = 0, G__31002__a = new Array(arguments.length -  0);
while (G__31002__i < G__31002__a.length) {G__31002__a[G__31002__i] = arguments[G__31002__i + 0]; ++G__31002__i;}
  args = new cljs.core.IndexedSeq(G__31002__a,0,null);
} 
return G__31001__delegate.call(this,args);};
G__31001.cljs$lang$maxFixedArity = 0;
G__31001.cljs$lang$applyTo = (function (arglist__31003){
var args = cljs.core.seq(arglist__31003);
return G__31001__delegate(args);
});
G__31001.cljs$core$IFn$_invoke$arity$variadic = G__31001__delegate;
return G__31001;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__31004_SHARP_,p2__31005_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31004_SHARP_)),p2__31005_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__31006_SHARP_,p2__31007_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31006_SHARP_),p2__31007_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__31008 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__31008.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__31008.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__31008;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e31009){if((e31009 instanceof Error)){
var e = e31009;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31009;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = figwheel.client.file_reloading.goog$module$goog$object.findKey.call(null,require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e31010){if((e31010 instanceof Error)){
var e = e31010;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31010;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31011 = cljs.core._EQ_;
var expr__31012 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31011.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31012))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__31011.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31012))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__31011.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__31012))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31014,callback){
var map__31015 = p__31014;
var map__31015__$1 = cljs.core.__destructure_map.call(null,map__31015);
var file_msg = map__31015__$1;
var request_url = cljs.core.get.call(null,map__31015__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4253__auto__ = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = (function (state_31052){
var state_val_31053 = (state_31052[(1)]);
if((state_val_31053 === (7))){
var inst_31048 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31054_31080 = state_31052__$1;
(statearr_31054_31080[(2)] = inst_31048);

(statearr_31054_31080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (1))){
var state_31052__$1 = state_31052;
var statearr_31055_31081 = state_31052__$1;
(statearr_31055_31081[(2)] = null);

(statearr_31055_31081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (4))){
var inst_31018 = (state_31052[(7)]);
var inst_31018__$1 = (state_31052[(2)]);
var state_31052__$1 = (function (){var statearr_31056 = state_31052;
(statearr_31056[(7)] = inst_31018__$1);

return statearr_31056;
})();
if(cljs.core.truth_(inst_31018__$1)){
var statearr_31057_31082 = state_31052__$1;
(statearr_31057_31082[(1)] = (5));

} else {
var statearr_31058_31083 = state_31052__$1;
(statearr_31058_31083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (15))){
var inst_31033 = (state_31052[(8)]);
var inst_31031 = (state_31052[(9)]);
var inst_31035 = inst_31033.call(null,inst_31031);
var state_31052__$1 = state_31052;
var statearr_31059_31084 = state_31052__$1;
(statearr_31059_31084[(2)] = inst_31035);

(statearr_31059_31084[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (13))){
var inst_31042 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31060_31085 = state_31052__$1;
(statearr_31060_31085[(2)] = inst_31042);

(statearr_31060_31085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (6))){
var state_31052__$1 = state_31052;
var statearr_31061_31086 = state_31052__$1;
(statearr_31061_31086[(2)] = null);

(statearr_31061_31086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (17))){
var inst_31039 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31062_31087 = state_31052__$1;
(statearr_31062_31087[(2)] = inst_31039);

(statearr_31062_31087[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (3))){
var inst_31050 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31052__$1,inst_31050);
} else {
if((state_val_31053 === (12))){
var state_31052__$1 = state_31052;
var statearr_31063_31088 = state_31052__$1;
(statearr_31063_31088[(2)] = null);

(statearr_31063_31088[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (2))){
var state_31052__$1 = state_31052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31052__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31053 === (11))){
var inst_31023 = (state_31052[(10)]);
var inst_31029 = figwheel.client.file_reloading.blocking_load.call(null,inst_31023);
var state_31052__$1 = state_31052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31052__$1,(14),inst_31029);
} else {
if((state_val_31053 === (9))){
var inst_31023 = (state_31052[(10)]);
var state_31052__$1 = state_31052;
if(cljs.core.truth_(inst_31023)){
var statearr_31064_31089 = state_31052__$1;
(statearr_31064_31089[(1)] = (11));

} else {
var statearr_31065_31090 = state_31052__$1;
(statearr_31065_31090[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (5))){
var inst_31018 = (state_31052[(7)]);
var inst_31024 = (state_31052[(11)]);
var inst_31023 = cljs.core.nth.call(null,inst_31018,(0),null);
var inst_31024__$1 = cljs.core.nth.call(null,inst_31018,(1),null);
var state_31052__$1 = (function (){var statearr_31066 = state_31052;
(statearr_31066[(10)] = inst_31023);

(statearr_31066[(11)] = inst_31024__$1);

return statearr_31066;
})();
if(cljs.core.truth_(inst_31024__$1)){
var statearr_31067_31091 = state_31052__$1;
(statearr_31067_31091[(1)] = (8));

} else {
var statearr_31068_31092 = state_31052__$1;
(statearr_31068_31092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (14))){
var inst_31033 = (state_31052[(8)]);
var inst_31023 = (state_31052[(10)]);
var inst_31031 = (state_31052[(2)]);
var inst_31032 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31033__$1 = cljs.core.get.call(null,inst_31032,inst_31023);
var state_31052__$1 = (function (){var statearr_31069 = state_31052;
(statearr_31069[(8)] = inst_31033__$1);

(statearr_31069[(9)] = inst_31031);

return statearr_31069;
})();
if(cljs.core.truth_(inst_31033__$1)){
var statearr_31070_31093 = state_31052__$1;
(statearr_31070_31093[(1)] = (15));

} else {
var statearr_31071_31094 = state_31052__$1;
(statearr_31071_31094[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (16))){
var inst_31031 = (state_31052[(9)]);
var inst_31037 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31031);
var state_31052__$1 = state_31052;
var statearr_31072_31095 = state_31052__$1;
(statearr_31072_31095[(2)] = inst_31037);

(statearr_31072_31095[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (10))){
var inst_31044 = (state_31052[(2)]);
var state_31052__$1 = (function (){var statearr_31073 = state_31052;
(statearr_31073[(12)] = inst_31044);

return statearr_31073;
})();
var statearr_31074_31096 = state_31052__$1;
(statearr_31074_31096[(2)] = null);

(statearr_31074_31096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (8))){
var inst_31024 = (state_31052[(11)]);
var inst_31026 = eval(inst_31024);
var state_31052__$1 = state_31052;
var statearr_31075_31097 = state_31052__$1;
(statearr_31075_31097[(2)] = inst_31026);

(statearr_31075_31097[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__28598__auto__ = null;
var figwheel$client$file_reloading$state_machine__28598__auto____0 = (function (){
var statearr_31076 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31076[(0)] = figwheel$client$file_reloading$state_machine__28598__auto__);

(statearr_31076[(1)] = (1));

return statearr_31076;
});
var figwheel$client$file_reloading$state_machine__28598__auto____1 = (function (state_31052){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_31052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e31077){if((e31077 instanceof Object)){
var ex__28601__auto__ = e31077;
var statearr_31078_31098 = state_31052;
(statearr_31078_31098[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31099 = state_31052;
state_31052 = G__31099;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28598__auto__ = function(state_31052){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28598__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28598__auto____1.call(this,state_31052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28598__auto____0;
figwheel$client$file_reloading$state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28598__auto____1;
return figwheel$client$file_reloading$state_machine__28598__auto__;
})()
})();
var state__28696__auto__ = (function (){var statearr_31079 = f__28695__auto__.call(null);
(statearr_31079[(6)] = c__28694__auto__);

return statearr_31079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
}));

return c__28694__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__31101 = arguments.length;
switch (G__31101) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31103,callback){
var map__31104 = p__31103;
var map__31104__$1 = cljs.core.__destructure_map.call(null,map__31104);
var file_msg = map__31104__$1;
var namespace = cljs.core.get.call(null,map__31104__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__31105){
var map__31106 = p__31105;
var map__31106__$1 = cljs.core.__destructure_map.call(null,map__31106);
var file_msg = map__31106__$1;
var namespace = cljs.core.get.call(null,map__31106__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,figwheel.client.file_reloading.goog$module$goog$object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31107){
var map__31108 = p__31107;
var map__31108__$1 = cljs.core.__destructure_map.call(null,map__31108);
var file_msg = map__31108__$1;
var namespace = cljs.core.get.call(null,map__31108__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4251__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4251__auto__){
var or__4253__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4251__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31109,callback){
var map__31110 = p__31109;
var map__31110__$1 = cljs.core.__destructure_map.call(null,map__31110);
var file_msg = map__31110__$1;
var request_url = cljs.core.get.call(null,map__31110__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31110__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28694__auto___31159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = (function (state_31144){
var state_val_31145 = (state_31144[(1)]);
if((state_val_31145 === (1))){
var inst_31118 = cljs.core.seq.call(null,files);
var inst_31119 = cljs.core.first.call(null,inst_31118);
var inst_31120 = cljs.core.next.call(null,inst_31118);
var inst_31121 = files;
var state_31144__$1 = (function (){var statearr_31146 = state_31144;
(statearr_31146[(7)] = inst_31119);

(statearr_31146[(8)] = inst_31121);

(statearr_31146[(9)] = inst_31120);

return statearr_31146;
})();
var statearr_31147_31160 = state_31144__$1;
(statearr_31147_31160[(2)] = null);

(statearr_31147_31160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (2))){
var inst_31127 = (state_31144[(10)]);
var inst_31121 = (state_31144[(8)]);
var inst_31126 = cljs.core.seq.call(null,inst_31121);
var inst_31127__$1 = cljs.core.first.call(null,inst_31126);
var inst_31128 = cljs.core.next.call(null,inst_31126);
var inst_31129 = (inst_31127__$1 == null);
var inst_31130 = cljs.core.not.call(null,inst_31129);
var state_31144__$1 = (function (){var statearr_31148 = state_31144;
(statearr_31148[(10)] = inst_31127__$1);

(statearr_31148[(11)] = inst_31128);

return statearr_31148;
})();
if(inst_31130){
var statearr_31149_31161 = state_31144__$1;
(statearr_31149_31161[(1)] = (4));

} else {
var statearr_31150_31162 = state_31144__$1;
(statearr_31150_31162[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (3))){
var inst_31142 = (state_31144[(2)]);
var state_31144__$1 = state_31144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31144__$1,inst_31142);
} else {
if((state_val_31145 === (4))){
var inst_31127 = (state_31144[(10)]);
var inst_31132 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31127);
var state_31144__$1 = state_31144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31144__$1,(7),inst_31132);
} else {
if((state_val_31145 === (5))){
var inst_31138 = cljs.core.async.close_BANG_.call(null,out);
var state_31144__$1 = state_31144;
var statearr_31151_31163 = state_31144__$1;
(statearr_31151_31163[(2)] = inst_31138);

(statearr_31151_31163[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (6))){
var inst_31140 = (state_31144[(2)]);
var state_31144__$1 = state_31144;
var statearr_31152_31164 = state_31144__$1;
(statearr_31152_31164[(2)] = inst_31140);

(statearr_31152_31164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (7))){
var inst_31128 = (state_31144[(11)]);
var inst_31134 = (state_31144[(2)]);
var inst_31135 = cljs.core.async.put_BANG_.call(null,out,inst_31134);
var inst_31121 = inst_31128;
var state_31144__$1 = (function (){var statearr_31153 = state_31144;
(statearr_31153[(12)] = inst_31135);

(statearr_31153[(8)] = inst_31121);

return statearr_31153;
})();
var statearr_31154_31165 = state_31144__$1;
(statearr_31154_31165[(2)] = null);

(statearr_31154_31165[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28598__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28598__auto____0 = (function (){
var statearr_31155 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31155[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28598__auto__);

(statearr_31155[(1)] = (1));

return statearr_31155;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28598__auto____1 = (function (state_31144){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_31144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e31156){if((e31156 instanceof Object)){
var ex__28601__auto__ = e31156;
var statearr_31157_31166 = state_31144;
(statearr_31157_31166[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31167 = state_31144;
state_31144 = G__31167;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28598__auto__ = function(state_31144){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28598__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28598__auto____1.call(this,state_31144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28598__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28598__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28598__auto__;
})()
})();
var state__28696__auto__ = (function (){var statearr_31158 = f__28695__auto__.call(null);
(statearr_31158[(6)] = c__28694__auto___31159);

return statearr_31158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31168,opts){
var map__31169 = p__31168;
var map__31169__$1 = cljs.core.__destructure_map.call(null,map__31169);
var eval_body = cljs.core.get.call(null,map__31169__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31169__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4251__auto__ = eval_body;
if(cljs.core.truth_(and__4251__auto__)){
return typeof eval_body === 'string';
} else {
return and__4251__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e31170){var e = e31170;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5751__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__31171_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31171_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5751__auto__)){
var file_msg = temp__5751__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__31172){
var vec__31173 = p__31172;
var k = cljs.core.nth.call(null,vec__31173,(0),null);
var v = cljs.core.nth.call(null,vec__31173,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31176){
var vec__31177 = p__31176;
var k = cljs.core.nth.call(null,vec__31177,(0),null);
var v = cljs.core.nth.call(null,vec__31177,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31183,p__31184){
var map__31185 = p__31183;
var map__31185__$1 = cljs.core.__destructure_map.call(null,map__31185);
var opts = map__31185__$1;
var before_jsload = cljs.core.get.call(null,map__31185__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31185__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31185__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31186 = p__31184;
var map__31186__$1 = cljs.core.__destructure_map.call(null,map__31186);
var msg = map__31186__$1;
var files = cljs.core.get.call(null,map__31186__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31186__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31186__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28695__auto__ = (function (){var switch__28597__auto__ = (function (state_31318){
var state_val_31319 = (state_31318[(1)]);
if((state_val_31319 === (7))){
var inst_31200 = (state_31318[(7)]);
var inst_31198 = (state_31318[(8)]);
var inst_31199 = (state_31318[(9)]);
var inst_31201 = (state_31318[(10)]);
var inst_31206 = cljs.core._nth.call(null,inst_31199,inst_31201);
var inst_31207 = figwheel.client.file_reloading.eval_body.call(null,inst_31206,opts);
var inst_31208 = (inst_31201 + (1));
var tmp31320 = inst_31200;
var tmp31321 = inst_31198;
var tmp31322 = inst_31199;
var inst_31198__$1 = tmp31321;
var inst_31199__$1 = tmp31322;
var inst_31200__$1 = tmp31320;
var inst_31201__$1 = inst_31208;
var state_31318__$1 = (function (){var statearr_31323 = state_31318;
(statearr_31323[(7)] = inst_31200__$1);

(statearr_31323[(11)] = inst_31207);

(statearr_31323[(8)] = inst_31198__$1);

(statearr_31323[(9)] = inst_31199__$1);

(statearr_31323[(10)] = inst_31201__$1);

return statearr_31323;
})();
var statearr_31324_31391 = state_31318__$1;
(statearr_31324_31391[(2)] = null);

(statearr_31324_31391[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (20))){
var inst_31241 = (state_31318[(12)]);
var inst_31249 = figwheel.client.file_reloading.sort_files.call(null,inst_31241);
var state_31318__$1 = state_31318;
var statearr_31325_31392 = state_31318__$1;
(statearr_31325_31392[(2)] = inst_31249);

(statearr_31325_31392[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (27))){
var state_31318__$1 = state_31318;
var statearr_31326_31393 = state_31318__$1;
(statearr_31326_31393[(2)] = null);

(statearr_31326_31393[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (1))){
var inst_31190 = (state_31318[(13)]);
var inst_31187 = before_jsload.call(null,files);
var inst_31188 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31189 = (function (){return (function (p1__31180_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31180_SHARP_);
});
})();
var inst_31190__$1 = cljs.core.filter.call(null,inst_31189,files);
var inst_31191 = cljs.core.not_empty.call(null,inst_31190__$1);
var state_31318__$1 = (function (){var statearr_31327 = state_31318;
(statearr_31327[(14)] = inst_31187);

(statearr_31327[(15)] = inst_31188);

(statearr_31327[(13)] = inst_31190__$1);

return statearr_31327;
})();
if(cljs.core.truth_(inst_31191)){
var statearr_31328_31394 = state_31318__$1;
(statearr_31328_31394[(1)] = (2));

} else {
var statearr_31329_31395 = state_31318__$1;
(statearr_31329_31395[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (24))){
var state_31318__$1 = state_31318;
var statearr_31330_31396 = state_31318__$1;
(statearr_31330_31396[(2)] = null);

(statearr_31330_31396[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (4))){
var inst_31235 = (state_31318[(2)]);
var inst_31236 = cljs.core.List.EMPTY;
var inst_31237 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31236);
var inst_31238 = (function (){return (function (p1__31181_SHARP_){
var and__4251__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31181_SHARP_);
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31181_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__31181_SHARP_))));
} else {
return and__4251__auto__;
}
});
})();
var inst_31239 = cljs.core.filter.call(null,inst_31238,files);
var inst_31240 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31241 = cljs.core.concat.call(null,inst_31239,inst_31240);
var state_31318__$1 = (function (){var statearr_31331 = state_31318;
(statearr_31331[(12)] = inst_31241);

(statearr_31331[(16)] = inst_31235);

(statearr_31331[(17)] = inst_31237);

return statearr_31331;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31332_31397 = state_31318__$1;
(statearr_31332_31397[(1)] = (16));

} else {
var statearr_31333_31398 = state_31318__$1;
(statearr_31333_31398[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (15))){
var inst_31225 = (state_31318[(2)]);
var state_31318__$1 = state_31318;
var statearr_31334_31399 = state_31318__$1;
(statearr_31334_31399[(2)] = inst_31225);

(statearr_31334_31399[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (21))){
var inst_31251 = (state_31318[(18)]);
var inst_31251__$1 = (state_31318[(2)]);
var inst_31252 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31251__$1);
var state_31318__$1 = (function (){var statearr_31335 = state_31318;
(statearr_31335[(18)] = inst_31251__$1);

return statearr_31335;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31318__$1,(22),inst_31252);
} else {
if((state_val_31319 === (31))){
var inst_31316 = (state_31318[(2)]);
var state_31318__$1 = state_31318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31318__$1,inst_31316);
} else {
if((state_val_31319 === (32))){
var inst_31293 = (state_31318[(19)]);
var inst_31297 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31298 = cljs.core.map.call(null,inst_31297,inst_31293);
var inst_31299 = cljs.core.pr_str.call(null,inst_31298);
var inst_31300 = ["figwheel-no-load meta-data: ",inst_31299].join('');
var inst_31301 = figwheel.client.utils.log.call(null,inst_31300);
var state_31318__$1 = state_31318;
var statearr_31336_31400 = state_31318__$1;
(statearr_31336_31400[(2)] = inst_31301);

(statearr_31336_31400[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (33))){
var state_31318__$1 = state_31318;
var statearr_31337_31401 = state_31318__$1;
(statearr_31337_31401[(2)] = null);

(statearr_31337_31401[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (13))){
var inst_31211 = (state_31318[(20)]);
var inst_31215 = cljs.core.chunk_first.call(null,inst_31211);
var inst_31216 = cljs.core.chunk_rest.call(null,inst_31211);
var inst_31217 = cljs.core.count.call(null,inst_31215);
var inst_31198 = inst_31216;
var inst_31199 = inst_31215;
var inst_31200 = inst_31217;
var inst_31201 = (0);
var state_31318__$1 = (function (){var statearr_31338 = state_31318;
(statearr_31338[(7)] = inst_31200);

(statearr_31338[(8)] = inst_31198);

(statearr_31338[(9)] = inst_31199);

(statearr_31338[(10)] = inst_31201);

return statearr_31338;
})();
var statearr_31339_31402 = state_31318__$1;
(statearr_31339_31402[(2)] = null);

(statearr_31339_31402[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (22))){
var inst_31255 = (state_31318[(21)]);
var inst_31251 = (state_31318[(18)]);
var inst_31259 = (state_31318[(22)]);
var inst_31254 = (state_31318[(23)]);
var inst_31254__$1 = (state_31318[(2)]);
var inst_31255__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31254__$1);
var inst_31256 = (function (){var all_files = inst_31251;
var res_SINGLEQUOTE_ = inst_31254__$1;
var res = inst_31255__$1;
return (function (p1__31182_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31182_SHARP_));
});
})();
var inst_31257 = cljs.core.filter.call(null,inst_31256,inst_31254__$1);
var inst_31258 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31259__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31258);
var inst_31260 = cljs.core.not_empty.call(null,inst_31259__$1);
var state_31318__$1 = (function (){var statearr_31340 = state_31318;
(statearr_31340[(21)] = inst_31255__$1);

(statearr_31340[(22)] = inst_31259__$1);

(statearr_31340[(23)] = inst_31254__$1);

(statearr_31340[(24)] = inst_31257);

return statearr_31340;
})();
if(cljs.core.truth_(inst_31260)){
var statearr_31341_31403 = state_31318__$1;
(statearr_31341_31403[(1)] = (23));

} else {
var statearr_31342_31404 = state_31318__$1;
(statearr_31342_31404[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (36))){
var state_31318__$1 = state_31318;
var statearr_31343_31405 = state_31318__$1;
(statearr_31343_31405[(2)] = null);

(statearr_31343_31405[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (29))){
var inst_31255 = (state_31318[(21)]);
var inst_31251 = (state_31318[(18)]);
var inst_31259 = (state_31318[(22)]);
var inst_31254 = (state_31318[(23)]);
var inst_31293 = (state_31318[(19)]);
var inst_31257 = (state_31318[(24)]);
var inst_31287 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31290 = (function (){var all_files = inst_31251;
var res_SINGLEQUOTE_ = inst_31254;
var res = inst_31255;
var files_not_loaded = inst_31257;
var dependencies_that_loaded = inst_31259;
return (function (p__31289){
var map__31344 = p__31289;
var map__31344__$1 = cljs.core.__destructure_map.call(null,map__31344);
var namespace = cljs.core.get.call(null,map__31344__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_31291 = cljs.core.group_by.call(null,inst_31290,inst_31257);
var inst_31292 = cljs.core.__destructure_map.call(null,inst_31291);
var inst_31293__$1 = cljs.core.get.call(null,inst_31292,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31294 = cljs.core.get.call(null,inst_31292,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31295 = cljs.core.not_empty.call(null,inst_31293__$1);
var state_31318__$1 = (function (){var statearr_31345 = state_31318;
(statearr_31345[(25)] = inst_31294);

(statearr_31345[(26)] = inst_31287);

(statearr_31345[(19)] = inst_31293__$1);

return statearr_31345;
})();
if(cljs.core.truth_(inst_31295)){
var statearr_31346_31406 = state_31318__$1;
(statearr_31346_31406[(1)] = (32));

} else {
var statearr_31347_31407 = state_31318__$1;
(statearr_31347_31407[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (6))){
var inst_31232 = (state_31318[(2)]);
var state_31318__$1 = state_31318;
var statearr_31348_31408 = state_31318__$1;
(statearr_31348_31408[(2)] = inst_31232);

(statearr_31348_31408[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (28))){
var inst_31257 = (state_31318[(24)]);
var inst_31284 = (state_31318[(2)]);
var inst_31285 = cljs.core.not_empty.call(null,inst_31257);
var state_31318__$1 = (function (){var statearr_31349 = state_31318;
(statearr_31349[(27)] = inst_31284);

return statearr_31349;
})();
if(cljs.core.truth_(inst_31285)){
var statearr_31350_31409 = state_31318__$1;
(statearr_31350_31409[(1)] = (29));

} else {
var statearr_31351_31410 = state_31318__$1;
(statearr_31351_31410[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (25))){
var inst_31255 = (state_31318[(21)]);
var inst_31271 = (state_31318[(2)]);
var inst_31272 = cljs.core.not_empty.call(null,inst_31255);
var state_31318__$1 = (function (){var statearr_31352 = state_31318;
(statearr_31352[(28)] = inst_31271);

return statearr_31352;
})();
if(cljs.core.truth_(inst_31272)){
var statearr_31353_31411 = state_31318__$1;
(statearr_31353_31411[(1)] = (26));

} else {
var statearr_31354_31412 = state_31318__$1;
(statearr_31354_31412[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (34))){
var inst_31294 = (state_31318[(25)]);
var inst_31304 = (state_31318[(2)]);
var inst_31305 = cljs.core.not_empty.call(null,inst_31294);
var state_31318__$1 = (function (){var statearr_31355 = state_31318;
(statearr_31355[(29)] = inst_31304);

return statearr_31355;
})();
if(cljs.core.truth_(inst_31305)){
var statearr_31356_31413 = state_31318__$1;
(statearr_31356_31413[(1)] = (35));

} else {
var statearr_31357_31414 = state_31318__$1;
(statearr_31357_31414[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (17))){
var state_31318__$1 = state_31318;
var statearr_31358_31415 = state_31318__$1;
(statearr_31358_31415[(2)] = recompile_dependents);

(statearr_31358_31415[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (3))){
var state_31318__$1 = state_31318;
var statearr_31359_31416 = state_31318__$1;
(statearr_31359_31416[(2)] = null);

(statearr_31359_31416[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (12))){
var inst_31228 = (state_31318[(2)]);
var state_31318__$1 = state_31318;
var statearr_31360_31417 = state_31318__$1;
(statearr_31360_31417[(2)] = inst_31228);

(statearr_31360_31417[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (2))){
var inst_31190 = (state_31318[(13)]);
var inst_31197 = cljs.core.seq.call(null,inst_31190);
var inst_31198 = inst_31197;
var inst_31199 = null;
var inst_31200 = (0);
var inst_31201 = (0);
var state_31318__$1 = (function (){var statearr_31361 = state_31318;
(statearr_31361[(7)] = inst_31200);

(statearr_31361[(8)] = inst_31198);

(statearr_31361[(9)] = inst_31199);

(statearr_31361[(10)] = inst_31201);

return statearr_31361;
})();
var statearr_31362_31418 = state_31318__$1;
(statearr_31362_31418[(2)] = null);

(statearr_31362_31418[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (23))){
var inst_31255 = (state_31318[(21)]);
var inst_31251 = (state_31318[(18)]);
var inst_31259 = (state_31318[(22)]);
var inst_31254 = (state_31318[(23)]);
var inst_31257 = (state_31318[(24)]);
var inst_31262 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31264 = (function (){var all_files = inst_31251;
var res_SINGLEQUOTE_ = inst_31254;
var res = inst_31255;
var files_not_loaded = inst_31257;
var dependencies_that_loaded = inst_31259;
return (function (p__31263){
var map__31363 = p__31263;
var map__31363__$1 = cljs.core.__destructure_map.call(null,map__31363);
var request_url = cljs.core.get.call(null,map__31363__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_31265 = cljs.core.reverse.call(null,inst_31259);
var inst_31266 = cljs.core.map.call(null,inst_31264,inst_31265);
var inst_31267 = cljs.core.pr_str.call(null,inst_31266);
var inst_31268 = figwheel.client.utils.log.call(null,inst_31267);
var state_31318__$1 = (function (){var statearr_31364 = state_31318;
(statearr_31364[(30)] = inst_31262);

return statearr_31364;
})();
var statearr_31365_31419 = state_31318__$1;
(statearr_31365_31419[(2)] = inst_31268);

(statearr_31365_31419[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (35))){
var inst_31294 = (state_31318[(25)]);
var inst_31307 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31294);
var inst_31308 = cljs.core.pr_str.call(null,inst_31307);
var inst_31309 = ["not required: ",inst_31308].join('');
var inst_31310 = figwheel.client.utils.log.call(null,inst_31309);
var state_31318__$1 = state_31318;
var statearr_31366_31420 = state_31318__$1;
(statearr_31366_31420[(2)] = inst_31310);

(statearr_31366_31420[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (19))){
var inst_31241 = (state_31318[(12)]);
var inst_31247 = figwheel.client.file_reloading.expand_files.call(null,inst_31241);
var state_31318__$1 = state_31318;
var statearr_31367_31421 = state_31318__$1;
(statearr_31367_31421[(2)] = inst_31247);

(statearr_31367_31421[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (11))){
var state_31318__$1 = state_31318;
var statearr_31368_31422 = state_31318__$1;
(statearr_31368_31422[(2)] = null);

(statearr_31368_31422[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (9))){
var inst_31230 = (state_31318[(2)]);
var state_31318__$1 = state_31318;
var statearr_31369_31423 = state_31318__$1;
(statearr_31369_31423[(2)] = inst_31230);

(statearr_31369_31423[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (5))){
var inst_31200 = (state_31318[(7)]);
var inst_31201 = (state_31318[(10)]);
var inst_31203 = (inst_31201 < inst_31200);
var inst_31204 = inst_31203;
var state_31318__$1 = state_31318;
if(cljs.core.truth_(inst_31204)){
var statearr_31370_31424 = state_31318__$1;
(statearr_31370_31424[(1)] = (7));

} else {
var statearr_31371_31425 = state_31318__$1;
(statearr_31371_31425[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (14))){
var inst_31211 = (state_31318[(20)]);
var inst_31220 = cljs.core.first.call(null,inst_31211);
var inst_31221 = figwheel.client.file_reloading.eval_body.call(null,inst_31220,opts);
var inst_31222 = cljs.core.next.call(null,inst_31211);
var inst_31198 = inst_31222;
var inst_31199 = null;
var inst_31200 = (0);
var inst_31201 = (0);
var state_31318__$1 = (function (){var statearr_31372 = state_31318;
(statearr_31372[(7)] = inst_31200);

(statearr_31372[(8)] = inst_31198);

(statearr_31372[(31)] = inst_31221);

(statearr_31372[(9)] = inst_31199);

(statearr_31372[(10)] = inst_31201);

return statearr_31372;
})();
var statearr_31373_31426 = state_31318__$1;
(statearr_31373_31426[(2)] = null);

(statearr_31373_31426[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (26))){
var inst_31255 = (state_31318[(21)]);
var inst_31251 = (state_31318[(18)]);
var inst_31259 = (state_31318[(22)]);
var inst_31254 = (state_31318[(23)]);
var inst_31257 = (state_31318[(24)]);
var inst_31274 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31276 = (function (){var all_files = inst_31251;
var res_SINGLEQUOTE_ = inst_31254;
var res = inst_31255;
var files_not_loaded = inst_31257;
var dependencies_that_loaded = inst_31259;
return (function (p__31275){
var map__31374 = p__31275;
var map__31374__$1 = cljs.core.__destructure_map.call(null,map__31374);
var namespace = cljs.core.get.call(null,map__31374__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31374__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_31277 = cljs.core.map.call(null,inst_31276,inst_31255);
var inst_31278 = cljs.core.pr_str.call(null,inst_31277);
var inst_31279 = figwheel.client.utils.log.call(null,inst_31278);
var inst_31280 = (function (){var all_files = inst_31251;
var res_SINGLEQUOTE_ = inst_31254;
var res = inst_31255;
var files_not_loaded = inst_31257;
var dependencies_that_loaded = inst_31259;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_31281 = setTimeout(inst_31280,(10));
var state_31318__$1 = (function (){var statearr_31375 = state_31318;
(statearr_31375[(32)] = inst_31279);

(statearr_31375[(33)] = inst_31274);

return statearr_31375;
})();
var statearr_31376_31427 = state_31318__$1;
(statearr_31376_31427[(2)] = inst_31281);

(statearr_31376_31427[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (16))){
var state_31318__$1 = state_31318;
var statearr_31377_31428 = state_31318__$1;
(statearr_31377_31428[(2)] = reload_dependents);

(statearr_31377_31428[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (30))){
var state_31318__$1 = state_31318;
var statearr_31378_31429 = state_31318__$1;
(statearr_31378_31429[(2)] = null);

(statearr_31378_31429[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (10))){
var inst_31211 = (state_31318[(20)]);
var inst_31213 = cljs.core.chunked_seq_QMARK_.call(null,inst_31211);
var state_31318__$1 = state_31318;
if(inst_31213){
var statearr_31379_31430 = state_31318__$1;
(statearr_31379_31430[(1)] = (13));

} else {
var statearr_31380_31431 = state_31318__$1;
(statearr_31380_31431[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (18))){
var inst_31245 = (state_31318[(2)]);
var state_31318__$1 = state_31318;
if(cljs.core.truth_(inst_31245)){
var statearr_31381_31432 = state_31318__$1;
(statearr_31381_31432[(1)] = (19));

} else {
var statearr_31382_31433 = state_31318__$1;
(statearr_31382_31433[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (37))){
var inst_31313 = (state_31318[(2)]);
var state_31318__$1 = state_31318;
var statearr_31383_31434 = state_31318__$1;
(statearr_31383_31434[(2)] = inst_31313);

(statearr_31383_31434[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (8))){
var inst_31198 = (state_31318[(8)]);
var inst_31211 = (state_31318[(20)]);
var inst_31211__$1 = cljs.core.seq.call(null,inst_31198);
var state_31318__$1 = (function (){var statearr_31384 = state_31318;
(statearr_31384[(20)] = inst_31211__$1);

return statearr_31384;
})();
if(inst_31211__$1){
var statearr_31385_31435 = state_31318__$1;
(statearr_31385_31435[(1)] = (10));

} else {
var statearr_31386_31436 = state_31318__$1;
(statearr_31386_31436[(1)] = (11));

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
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28598__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28598__auto____0 = (function (){
var statearr_31387 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31387[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28598__auto__);

(statearr_31387[(1)] = (1));

return statearr_31387;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28598__auto____1 = (function (state_31318){
while(true){
var ret_value__28599__auto__ = (function (){try{while(true){
var result__28600__auto__ = switch__28597__auto__.call(null,state_31318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28600__auto__;
}
break;
}
}catch (e31388){if((e31388 instanceof Object)){
var ex__28601__auto__ = e31388;
var statearr_31389_31437 = state_31318;
(statearr_31389_31437[(5)] = ex__28601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31438 = state_31318;
state_31318 = G__31438;
continue;
} else {
return ret_value__28599__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28598__auto__ = function(state_31318){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28598__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28598__auto____1.call(this,state_31318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28598__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28598__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28598__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28598__auto__;
})()
})();
var state__28696__auto__ = (function (){var statearr_31390 = f__28695__auto__.call(null);
(statearr_31390[(6)] = c__28694__auto__);

return statearr_31390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28696__auto__);
}));

return c__28694__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31441,link){
var map__31442 = p__31441;
var map__31442__$1 = cljs.core.__destructure_map.call(null,map__31442);
var file = cljs.core.get.call(null,map__31442__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5753__auto__ = link.href;
if(cljs.core.truth_(temp__5753__auto__)){
var link_href = temp__5753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__31439_SHARP_,p2__31440_SHARP_){
if(cljs.core._EQ_.call(null,p1__31439_SHARP_,p2__31440_SHARP_)){
return p1__31439_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31444){
var map__31445 = p__31444;
var map__31445__$1 = cljs.core.__destructure_map.call(null,map__31445);
var match_length = cljs.core.get.call(null,map__31445__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31445__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31443_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31443_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5753__auto__)){
var res = temp__5753__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31446_SHARP_,p2__31447_SHARP_){
return cljs.core.assoc.call(null,p1__31446_SHARP_,cljs.core.get.call(null,p2__31447_SHARP_,key),p2__31447_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5751__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5751__auto__)){
var link = temp__5751__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_31448 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_31448);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_31448);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31449,p__31450){
var map__31451 = p__31449;
var map__31451__$1 = cljs.core.__destructure_map.call(null,map__31451);
var on_cssload = cljs.core.get.call(null,map__31451__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31452 = p__31450;
var map__31452__$1 = cljs.core.__destructure_map.call(null,map__31452);
var files_msg = map__31452__$1;
var files = cljs.core.get.call(null,map__31452__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5753__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5753__auto__)){
var f_datas = temp__5753__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1643275181353
