// Compiled by ClojureScript 0.0-2268
goog.provide('test_commute.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('cognitect.transit');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('reagent.core');
test_commute.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false], null));
test_commute.core.set_value_BANG_ = (function set_value_BANG_(id,value){cljs.core.swap_BANG_.call(null,test_commute.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false);
return cljs.core.swap_BANG_.call(null,test_commute.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),id], null),value);
});
test_commute.core.get_value = (function get_value(id){return cljs.core.get_in.call(null,cljs.core.deref.call(null,test_commute.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),id], null));
});
/**
* @param {...*} var_args
*/
test_commute.core.row = (function() { 
var row__delegate = function (label,body){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129),body], null)], null);
};
var row = function (label,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return row__delegate.call(this,label,body);};
row.cljs$lang$maxFixedArity = 1;
row.cljs$lang$applyTo = (function (arglist__6452){
var label = cljs.core.first(arglist__6452);
var body = cljs.core.rest(arglist__6452);
return row__delegate(label,body);
});
row.cljs$core$IFn$_invoke$arity$variadic = row__delegate;
return row;
})()
;
test_commute.core.text_input = (function text_input(id,label){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_commute.core.row,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"value","value",305978217),test_commute.core.get_value.call(null,id),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__6453_SHARP_){return test_commute.core.set_value_BANG_.call(null,id,p1__6453_SHARP_.target.value);
})], null)], null)], null);
});
test_commute.core.list_item = (function list_item(id,k,v,states){var handle_click_BANG_ = (function handle_click_BANG_(){cljs.core.swap_BANG_.call(null,cljs.core.get.call(null,states,k),cljs.core.not);
return test_commute.core.set_value_BANG_.call(null,id,cljs.core.keys.call(null,cljs.core.filter.call(null,(function (p__6468){var vec__6469 = p__6468;var _ = cljs.core.nth.call(null,vec__6469,(0),null);var v__$1 = cljs.core.nth.call(null,vec__6469,(1),null);return cljs.core.deref.call(null,v__$1);
}),states)));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),("list-group-item"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref.call(null,cljs.core.get.call(null,states,k)))?" active":null))),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),handle_click_BANG_], null),v], null);
});
/**
* @param {...*} var_args
*/
test_commute.core.selection_list = (function() { 
var selection_list__delegate = function (id,label,items){var states = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__6480){var vec__6481 = p__6480;var k = cljs.core.nth.call(null,vec__6481,(0),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reagent.core.atom.call(null,false)], null);
}),items));return ((function (states){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_commute.core.row,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",-1445267512),(function (){var iter__4268__auto__ = ((function (states){
return (function iter__6482(s__6483){return (new cljs.core.LazySeq(null,((function (states){
return (function (){var s__6483__$1 = s__6483;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6483__$1);if(temp__4126__auto__)
{var s__6483__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6483__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__6483__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__6485 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__6484 = (0);while(true){
if((i__6484 < size__4267__auto__))
{var vec__6488 = cljs.core._nth.call(null,c__4266__auto__,i__6484);var k = cljs.core.nth.call(null,vec__6488,(0),null);var v = cljs.core.nth.call(null,vec__6488,(1),null);cljs.core.chunk_append.call(null,b__6485,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_commute.core.list_item,id,k,v,states], null));
{
var G__6490 = (i__6484 + (1));
i__6484 = G__6490;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6485),iter__6482.call(null,cljs.core.chunk_rest.call(null,s__6483__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6485),null);
}
} else
{var vec__6489 = cljs.core.first.call(null,s__6483__$2);var k = cljs.core.nth.call(null,vec__6489,(0),null);var v = cljs.core.nth.call(null,vec__6489,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_commute.core.list_item,id,k,v,states], null),iter__6482.call(null,cljs.core.rest.call(null,s__6483__$2)));
}
} else
{return null;
}
break;
}
});})(states))
,null,null));
});})(states))
;return iter__4268__auto__.call(null,items);
})()], null)], null);
});
;})(states))
};
var selection_list = function (id,label,var_args){
var items = null;if (arguments.length > 2) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return selection_list__delegate.call(this,id,label,items);};
selection_list.cljs$lang$maxFixedArity = 2;
selection_list.cljs$lang$applyTo = (function (arglist__6491){
var id = cljs.core.first(arglist__6491);
arglist__6491 = cljs.core.next(arglist__6491);
var label = cljs.core.first(arglist__6491);
var items = cljs.core.rest(arglist__6491);
return selection_list__delegate(id,label,items);
});
selection_list.cljs$core$IFn$_invoke$arity$variadic = selection_list__delegate;
return selection_list;
})()
;
test_commute.core.save_doc = (function save_doc(){return ajax.core.POST.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(context)+"/save"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_commute.core.state)),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (_){return cljs.core.swap_BANG_.call(null,test_commute.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),true);
})], null));
});
test_commute.core.err = (function err(){var temp__4124__auto__ = new cljs.core.Keyword(null,"saved?","saved?",-2027163192).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_commute.core.state));if(cljs.core.truth_(temp__4124__auto__))
{var saved = temp__4124__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"HELLO"], null);
} else
{return null;
}
});
test_commute.core.home = (function home(){return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-header","div.page-header",-18181304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Reagent Form"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_commute.core.err], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_commute.core.text_input,new cljs.core.Keyword(null,"first-name","first-name",-1559982131),"First name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_commute.core.text_input,new cljs.core.Keyword(null,"last-name","last-name",-1695738974),"Last name"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_commute.core.selection_list,new cljs.core.Keyword(null,"favorite-drinks","favorite-drinks",-1752184854),"Favorite drinks",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coffee","coffee",23772871),"Coffee"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beer","beer",1742036006),"Beer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"crab-juice","crab-juice",-1168836952),"Crab juice"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"saved?","saved?",-2027163192).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_commute.core.state)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Saved"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),test_commute.core.save_doc], null),"Submit"], null))], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_commute.core.home], null),document.getElementById("app"));
test_commute.core.transit_parse_body_js = (function transit_parse_body_js(body){var reader = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));return cognitect.transit.read.call(null,reader,body);
});
test_commute.core.transit_generate_body_js = (function transit_generate_body_js(body){var writer = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570));return cognitect.transit.write.call(null,writer,body);
});
test_commute.core.transit_pong = (function transit_pong(tr){var body = test_commute.core.transit_parse_body_js.call(null,tr);return test_commute.core.transit_generate_body_js.call(null,cljs.core.conj.call(null,body,"pong"));
});
test_commute.core.pong = (function pong(body){return ajax.core.POST.call(null,"/ping",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"payload","payload",-383036092),test_commute.core.transit_pong.call(null,body)], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)));
return pong.call(null,response);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (response){return console.log("UH OH");
})], null));
});
test_commute.core.doc_ready_handler = (function doc_ready_handler(){var r = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));var handler = ((function (r){
return (function (tr){var vec__6493 = cognitect.transit.read.call(null,r,tr);var greeting = cljs.core.nth.call(null,vec__6493,(0),null);var magic_set = cljs.core.nth.call(null,vec__6493,(1),null);return console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(magic_set)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(greeting)));
});})(r))
;return test_commute.core.pong.call(null,test_commute.core.transit_generate_body_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ping"], null)));
});
goog.exportSymbol('test_commute.core.doc_ready_handler', test_commute.core.doc_ready_handler);

//# sourceMappingURL=core.js.map