// Compiled by ClojureScript 0.0-2268
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit');
cljs.core.enable_console_print_BANG_.call(null);
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;
goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_has$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_has$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__5562_5566 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__5563_5567 = null;var count__5564_5568 = (0);var i__5565_5569 = (0);while(true){
if((i__5565_5569 < count__5564_5568))
{var k_5570 = cljs.core._nth.call(null,chunk__5563_5567,i__5565_5569);var v_5571 = (b[k_5570]);(a[k_5570] = v_5571);
{
var G__5572 = seq__5562_5566;
var G__5573 = chunk__5563_5567;
var G__5574 = count__5564_5568;
var G__5575 = (i__5565_5569 + (1));
seq__5562_5566 = G__5572;
chunk__5563_5567 = G__5573;
count__5564_5568 = G__5574;
i__5565_5569 = G__5575;
continue;
}
} else
{var temp__4126__auto___5576 = cljs.core.seq.call(null,seq__5562_5566);if(temp__4126__auto___5576)
{var seq__5562_5577__$1 = temp__4126__auto___5576;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5562_5577__$1))
{var c__4299__auto___5578 = cljs.core.chunk_first.call(null,seq__5562_5577__$1);{
var G__5579 = cljs.core.chunk_rest.call(null,seq__5562_5577__$1);
var G__5580 = c__4299__auto___5578;
var G__5581 = cljs.core.count.call(null,c__4299__auto___5578);
var G__5582 = (0);
seq__5562_5566 = G__5579;
chunk__5563_5567 = G__5580;
count__5564_5568 = G__5581;
i__5565_5569 = G__5582;
continue;
}
} else
{var k_5583 = cljs.core.first.call(null,seq__5562_5577__$1);var v_5584 = (b[k_5583]);(a[k_5583] = v_5584);
{
var G__5585 = cljs.core.next.call(null,seq__5562_5577__$1);
var G__5586 = null;
var G__5587 = (0);
var G__5588 = (0);
seq__5562_5566 = G__5585;
chunk__5563_5567 = G__5586;
count__5564_5568 = G__5587;
i__5565_5569 = G__5588;
continue;
}
}
} else
{}
}
break;
}
return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.cljs$lang$type = true;
cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cognitect.transit/MapBuilder");
});
cognitect.transit.MapBuilder.prototype.init = (function (){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
cognitect.transit.MapBuilder.prototype.add = (function (m,k,v){var self__ = this;
var _ = this;return cljs.core.assoc_BANG_.call(null,m,k,v);
});
cognitect.transit.MapBuilder.prototype.finalize = (function (m){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,m);
});
cognitect.transit.MapBuilder.prototype.fromArray = (function (arr){var self__ = this;
var _ = this;return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});
cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){return (new cognitect.transit.MapBuilder());
});

/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.cljs$lang$type = true;
cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cognitect.transit/VectorBuilder");
});
cognitect.transit.VectorBuilder.prototype.init = (function (){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});
cognitect.transit.VectorBuilder.prototype.add = (function (v,x){var self__ = this;
var _ = this;return cljs.core.conj_BANG_.call(null,v,x);
});
cognitect.transit.VectorBuilder.prototype.finalize = (function (v){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,v);
});
cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr){var self__ = this;
var _ = this;return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});
cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){return (new cognitect.transit.VectorBuilder());
});
/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": {"list": (function (v){return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}), "set": (function (v){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}), ":": (function (v){return cljs.core.keyword.call(null,v);
}), "$": (function (v){return cljs.core.symbol.call(null,v);
})}},cljs.core.clj__GT_js.call(null,opts)));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.cljs$lang$type = true;
cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cognitect.transit/KeywordHandler");
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return ":";
});
cognitect.transit.KeywordHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){return (new cognitect.transit.KeywordHandler());
});

/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.cljs$lang$type = true;
cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cognitect.transit/SymbolHandler");
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "$";
});
cognitect.transit.SymbolHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){return (new cognitect.transit.SymbolHandler());
});

/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.cljs$lang$type = true;
cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__5589_5593 = cljs.core.seq.call(null,v);var chunk__5590_5594 = null;var count__5591_5595 = (0);var i__5592_5596 = (0);while(true){
if((i__5592_5596 < count__5591_5595))
{var x_5597 = cljs.core._nth.call(null,chunk__5590_5594,i__5592_5596);ret.push(x_5597);
{
var G__5598 = seq__5589_5593;
var G__5599 = chunk__5590_5594;
var G__5600 = count__5591_5595;
var G__5601 = (i__5592_5596 + (1));
seq__5589_5593 = G__5598;
chunk__5590_5594 = G__5599;
count__5591_5595 = G__5600;
i__5592_5596 = G__5601;
continue;
}
} else
{var temp__4126__auto___5602 = cljs.core.seq.call(null,seq__5589_5593);if(temp__4126__auto___5602)
{var seq__5589_5603__$1 = temp__4126__auto___5602;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5589_5603__$1))
{var c__4299__auto___5604 = cljs.core.chunk_first.call(null,seq__5589_5603__$1);{
var G__5605 = cljs.core.chunk_rest.call(null,seq__5589_5603__$1);
var G__5606 = c__4299__auto___5604;
var G__5607 = cljs.core.count.call(null,c__4299__auto___5604);
var G__5608 = (0);
seq__5589_5593 = G__5605;
chunk__5590_5594 = G__5606;
count__5591_5595 = G__5607;
i__5592_5596 = G__5608;
continue;
}
} else
{var x_5609 = cljs.core.first.call(null,seq__5589_5603__$1);ret.push(x_5609);
{
var G__5610 = cljs.core.next.call(null,seq__5589_5603__$1);
var G__5611 = null;
var G__5612 = (0);
var G__5613 = (0);
seq__5589_5593 = G__5610;
chunk__5590_5594 = G__5611;
count__5591_5595 = G__5612;
i__5592_5596 = G__5613;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.ListHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){return (new cognitect.transit.ListHandler());
});

/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.cljs$lang$type = true;
cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cognitect.transit/MapHandler");
});
cognitect.transit.MapHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "map";
});
cognitect.transit.MapHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v;
});
cognitect.transit.MapHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){return (new cognitect.transit.MapHandler());
});

/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.cljs$lang$type = true;
cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__5614_5618 = cljs.core.seq.call(null,v);var chunk__5615_5619 = null;var count__5616_5620 = (0);var i__5617_5621 = (0);while(true){
if((i__5617_5621 < count__5616_5620))
{var x_5622 = cljs.core._nth.call(null,chunk__5615_5619,i__5617_5621);ret.push(x_5622);
{
var G__5623 = seq__5614_5618;
var G__5624 = chunk__5615_5619;
var G__5625 = count__5616_5620;
var G__5626 = (i__5617_5621 + (1));
seq__5614_5618 = G__5623;
chunk__5615_5619 = G__5624;
count__5616_5620 = G__5625;
i__5617_5621 = G__5626;
continue;
}
} else
{var temp__4126__auto___5627 = cljs.core.seq.call(null,seq__5614_5618);if(temp__4126__auto___5627)
{var seq__5614_5628__$1 = temp__4126__auto___5627;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5614_5628__$1))
{var c__4299__auto___5629 = cljs.core.chunk_first.call(null,seq__5614_5628__$1);{
var G__5630 = cljs.core.chunk_rest.call(null,seq__5614_5628__$1);
var G__5631 = c__4299__auto___5629;
var G__5632 = cljs.core.count.call(null,c__4299__auto___5629);
var G__5633 = (0);
seq__5614_5618 = G__5630;
chunk__5615_5619 = G__5631;
count__5616_5620 = G__5632;
i__5617_5621 = G__5633;
continue;
}
} else
{var x_5634 = cljs.core.first.call(null,seq__5614_5628__$1);ret.push(x_5634);
{
var G__5635 = cljs.core.next.call(null,seq__5614_5628__$1);
var G__5636 = null;
var G__5637 = (0);
var G__5638 = (0);
seq__5614_5618 = G__5635;
chunk__5615_5619 = G__5636;
count__5616_5620 = G__5637;
i__5617_5621 = G__5638;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.SetHandler.prototype.stringRep = (function (){var self__ = this;
var v = this;return null;
});
cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){return (new cognitect.transit.SetHandler());
});

/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.cljs$lang$type = true;
cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__5639_5643 = cljs.core.seq.call(null,v);var chunk__5640_5644 = null;var count__5641_5645 = (0);var i__5642_5646 = (0);while(true){
if((i__5642_5646 < count__5641_5645))
{var x_5647 = cljs.core._nth.call(null,chunk__5640_5644,i__5642_5646);ret.push(x_5647);
{
var G__5648 = seq__5639_5643;
var G__5649 = chunk__5640_5644;
var G__5650 = count__5641_5645;
var G__5651 = (i__5642_5646 + (1));
seq__5639_5643 = G__5648;
chunk__5640_5644 = G__5649;
count__5641_5645 = G__5650;
i__5642_5646 = G__5651;
continue;
}
} else
{var temp__4126__auto___5652 = cljs.core.seq.call(null,seq__5639_5643);if(temp__4126__auto___5652)
{var seq__5639_5653__$1 = temp__4126__auto___5652;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5639_5653__$1))
{var c__4299__auto___5654 = cljs.core.chunk_first.call(null,seq__5639_5653__$1);{
var G__5655 = cljs.core.chunk_rest.call(null,seq__5639_5653__$1);
var G__5656 = c__4299__auto___5654;
var G__5657 = cljs.core.count.call(null,c__4299__auto___5654);
var G__5658 = (0);
seq__5639_5643 = G__5655;
chunk__5640_5644 = G__5656;
count__5641_5645 = G__5657;
i__5642_5646 = G__5658;
continue;
}
} else
{var x_5659 = cljs.core.first.call(null,seq__5639_5653__$1);ret.push(x_5659);
{
var G__5660 = cljs.core.next.call(null,seq__5639_5653__$1);
var G__5661 = null;
var G__5662 = (0);
var G__5663 = (0);
seq__5639_5643 = G__5660;
chunk__5640_5644 = G__5661;
count__5641_5645 = G__5662;
i__5642_5646 = G__5663;
continue;
}
}
} else
{}
}
break;
}
return ret;
});
cognitect.transit.VectorHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){return (new cognitect.transit.VectorHandler());
});
/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a JavaScript
* array of interleaved type constructors and handler instances for those
* type constructors.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x5673 = cljs.core.clone.call(null,handlers);x5673.forEach = ((function (x5673,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__5674 = cljs.core.seq.call(null,coll);var chunk__5675 = null;var count__5676 = (0);var i__5677 = (0);while(true){
if((i__5677 < count__5676))
{var vec__5678 = cljs.core._nth.call(null,chunk__5675,i__5677);var k = cljs.core.nth.call(null,vec__5678,(0),null);var v = cljs.core.nth.call(null,vec__5678,(1),null);f.call(null,v,k);
{
var G__5680 = seq__5674;
var G__5681 = chunk__5675;
var G__5682 = count__5676;
var G__5683 = (i__5677 + (1));
seq__5674 = G__5680;
chunk__5675 = G__5681;
count__5676 = G__5682;
i__5677 = G__5683;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__5674);if(temp__4126__auto__)
{var seq__5674__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5674__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__5674__$1);{
var G__5684 = cljs.core.chunk_rest.call(null,seq__5674__$1);
var G__5685 = c__4299__auto__;
var G__5686 = cljs.core.count.call(null,c__4299__auto__);
var G__5687 = (0);
seq__5674 = G__5684;
chunk__5675 = G__5685;
count__5676 = G__5686;
i__5677 = G__5687;
continue;
}
} else
{var vec__5679 = cljs.core.first.call(null,seq__5674__$1);var k = cljs.core.nth.call(null,vec__5679,(0),null);var v = cljs.core.nth.call(null,vec__5679,(1),null);f.call(null,v,k);
{
var G__5688 = cljs.core.next.call(null,seq__5674__$1);
var G__5689 = null;
var G__5690 = (0);
var G__5691 = (0);
seq__5674 = G__5688;
chunk__5675 = G__5689;
count__5676 = G__5690;
i__5677 = G__5691;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x5673,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x5673;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__5672 = obj;G__5672.push(kfn.call(null,k),vfn.call(null,v));
return G__5672;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){return w.write(o);
});
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged = (function tagged(tag,rep){return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_QMARK_ = (function tagged_QMARK_(x){return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map