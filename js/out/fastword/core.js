// Compiled by ClojureScript 1.10.896 {:optimizations :none}
goog.provide('fastword.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
fastword.core.word = reagent.core.atom.call(null,"test");
fastword.core.change_word = (function fastword$core$change_word(){
return cljs.core.reset_BANG_.call(null,fastword.core.word,"pass");
});
fastword.core.buttons = (function fastword$core$buttons(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.action_btn","div.action_btn",-828722172),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"100px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-3","button.button-3",-1542216556),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"100px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),fastword.core.change_word], null),"Yes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-4","button.button-4",-1211058093),"No"], null)], null);
});
fastword.core.the_word = (function fastword$core$the_word(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"45px"], null)], null),cljs.core.deref.call(null,fastword.core.word)], null);
});
fastword.core.home_page = (function fastword$core$home_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to fast word"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fastword.core.the_word], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fastword.core.buttons], null)], null);
});
fastword.core.mount_root = (function fastword$core$mount_root(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fastword.core.home_page], null),document.getElementById("app"));
});
fastword.core.init_BANG_ = (function fastword$core$init_BANG_(){
return fastword.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1643278242966
