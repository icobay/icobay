webpackJsonp([6],{"27oX":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("GhR6"),r=e("KY0C"),n=!1;var s=function(t){n||e("LE9f")},o=e("VU/8")(i.a,r.a,!1,s,"data-v-3b197276",null);o.options.__file="pages/press/_id.vue",a.default=o.exports},CpiQ:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,".color-head[data-v-3b197276]{background-color:rgba(8,107,160,.91765);background-image:radial-gradient(at 0 bottom,rgba(74,128,209,.7) 0,rgba(69,120,196,.329) 50%),radial-gradient(at 90% bottom,#006389 0,rgba(123,208,241,.185) 30%),radial-gradient(at 50% top,rgba(112,218,250,.6) 0,rgba(12,204,247,0) 55%),radial-gradient(at right top,#004d89 0,rgba(118,191,247,.274) 47%);background-repeat:no-repeat;background-size:auto,auto,100% 1000px,100% 1000px;color:#d4effd}.sigle-content[data-v-3b197276]{padding-left:30px}.sigle-description-header[data-v-3b197276]{font-size:24px;color:#fff;margin:20px 0 20px -20px}.sigle-description-title[data-v-3b197276]{padding-bottom:30px;font-size:30px}.sigle-description-text[data-v-3b197276]{font-size:14px;color:#f9f9f9;font-weight:300;width:80%}.single-descryption-box[data-v-3b197276]{margin:70px 0}.single-descryption-box p[data-v-3b197276]{font-size:16px}.back-container[data-v-3b197276]{margin:40px 0 -35px}.single-descryption-box img[data-v-3b197276]{border-radius:8px;width:100%;margin:10px 0!important}.tags[data-v-3b197276]{padding:30px 0}.tag-items[data-v-3b197276]{padding-right:10px}.sidebar-box h2[data-v-3b197276]{margin:20px 0;font-weight:500}.banners[data-v-3b197276]{margin:10px 0}.banners p a img[data-v-3b197276]{width:100%!important;-ms-flex-negative:0!important;flex-shrink:0!important;height:100%!important}.content-html h1[data-v-3b197276],h2[data-v-3b197276],h3[data-v-3b197276],h4[data-v-3b197276],h5[data-v-3b197276],h6[data-v-3b197276],img[data-v-3b197276],p[data-v-3b197276]{padding:5px 0}.description-html[data-v-3b197276]{overflow:auto}.content-html[data-v-3b197276]{padding:0;margin:0;width:100%;margin-bottom:45px}",""])},GhR6:function(t,a,e){"use strict";var i=e("Dd8w"),r=e.n(i),n=e("Xxa5"),s=e.n(n),o=e("Gu7T"),d=e.n(o),c=e("exGp"),l=e.n(c),p=e("NYxO"),b=e("ZJ2w");a.a={scrollToTop:!0,fetch:function(){var t=l()(s.a.mark(function t(a){var e,i=a.store,r=a.params;a.query;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==i.state.blog.length){t.next=4;break}return t.next=3,i.dispatch(b.GET_BLOG);case 3:t.sent;case 4:if(e=i.state.blog.filter(function(t){return t.title===r.id}),i.commit.apply(i,[b.GET_SINGLE_ARTICLE].concat(d()(e))),0!==i.state.banners.length){t.next=10;break}return t.next=9,i.dispatch(b.GET_BANNERS);case 9:t.sent;case 10:case"end":return t.stop()}},t,this)}));return function(a){return t.apply(this,arguments)}}(),computed:r()({},Object(p.mapState)({single_article:function(t){return t.single_article},banners:function(t){return t.banner}})),head:function(){return{title:""+this.$route.params.id,meta:[{hid:""+this.$route.params.id,name:""+this.$route.params.id,content:""+this.$route.params.id,keywords:""+this.single_article.tags}]}}}},KY0C:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"color-head"},[e("div",{staticClass:"single-header container flex-between"},[e("div",{staticClass:"card-body row at-row no-gutter flex-start flex-middle"},[e("div",{staticClass:"sigle-content content-block col-md-16 flex-start flex-middle"},[e("h2",{staticClass:"sigle-description-header"},[t._v(t._s(t.single_article.title))])])])])]),e("div",{staticClass:"container"},[e("div",{staticClass:"back-container"},[e("at-breadcrumb",[e("at-breadcrumb-item",[e("nuxt-link",{attrs:{to:"/"}},[t._v(" Home ")])],1),e("at-breadcrumb-item",[e("nuxt-link",{attrs:{to:"/press/list"}},[t._v(" Press ")])],1),e("at-breadcrumb-item",[t._v(" "+t._s(t.single_article.title))])],1)],1),e("div",{staticClass:"single-descryption-box row at-row no-gutter flex-between"},[e("div",{staticClass:"content-html  col-md-14"},[e("h1",{staticClass:"sigle-description-title"},[t._v(t._s(t.single_article.title))]),e("img",{staticClass:"press-image",attrs:{src:""+t.single_article.image.path}}),e("div",{staticClass:"description-html",domProps:{innerHTML:t._s(t.single_article.description)}}),e("div",{staticClass:"tags row at-row no-gutter flex-start"},t._l(t.single_article.tags,function(a,i){return a.length>0?e("div",{key:i,staticClass:"tag-items"},[a.length<7?e("at-tag",{attrs:{color:""}},[t._v(" "+t._s(a))]):t._e()],1):t._e()}))]),e("div",{staticClass:"sidebar-box col-md-8"},[e("h2",[t._v("Advertisement")]),t._l(t.banners,function(a,i){return e("div",{key:i,staticClass:"banners-box flex flex-center",attrs:{"track-by":"id"}},[e("div",{staticClass:"banners",domProps:{innerHTML:t._s(a.html)}})])})],2)])])])};i._withStripped=!0;var r={render:i,staticRenderFns:[]};a.a=r},LE9f:function(t,a,e){var i=e("CpiQ");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("16b93529",i,!1,{sourceMap:!1})}});