(this["webpackJsonpchallenge-frontend"]=this["webpackJsonpchallenge-frontend"]||[]).push([[0],{35:function(e,t,a){e.exports=a(68)},40:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(16),r=a.n(o),l=a(19),i=(a(40),a(4)),s=a(5),m=a(13),u=a(12),v=a(2),d=(a(41),a(9)),h=a(31),g=a.n(h),p="http://localhost";"undefined"!==typeof window&&(p=window.location.protocol+"//"+window.location.hostname);var b=p+":8080/api",f=g.a.create({baseURL:b,headers:{"Content-type":"application/json"}}),E=new(function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,[{key:"getAll",value:function(e){return f.get("/movies",{params:e})}},{key:"get",value:function(e){return f.get("/movies/".concat(e))}},{key:"create",value:function(e){return f.post("/movies",e)}},{key:"update",value:function(e,t){return f.put("/movies/".concat(e),t)}},{key:"delete",value:function(e){return f.delete("/movies/".concat(e))}},{key:"deleteAll",value:function(){return f.delete("/movies")}}]),e}()),C=new(function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,[{key:"getAll",value:function(e){return f.get("/comments/".concat(e))}},{key:"create",value:function(e,t){return f.post("/comments/".concat(e),t)}},{key:"delete",value:function(e){return f.delete("/comments/".concat(e))}}]),e}()),y=a(84),N=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).setActiveMovie=function(t,a){e.props.setActiveMovie&&e.props.setActiveMovie(t,a)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.movies,n=t.currentIndex;return c.a.createElement("ul",{className:"list-group"},a&&a.map((function(t,a){return c.a.createElement("li",{className:"list-group-item "+(a===n?"active":""),onClick:function(){return e.setActiveMovie(t,a)},key:a},t.title)})))}}]),a}(n.Component),w=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.selectedMovie;return c.a.createElement("div",{className:"col-md-12"},c.a.createElement("h4",null,e.title),c.a.createElement("hr",{className:"wd100p"}),c.a.createElement("div",{className:"wd100p"},c.a.createElement("label",null,c.a.createElement("strong",null,"Genre: ")),"\xa0",e.genre),c.a.createElement("div",{className:"wd100p"},c.a.createElement("label",null,c.a.createElement("strong",null,"Studio:")),"\xa0",e.lead_studio),c.a.createElement("div",{className:"wd100p"},c.a.createElement("label",null,c.a.createElement("strong",null,"User Rating:")),"\xa0",e.audience_score,"%"),c.a.createElement("div",{className:"wd100p"},c.a.createElement("label",null,c.a.createElement("strong",null,"Profitability:")),"\xa0",Math.round(100*e.profitability)/100,"%"),c.a.createElement("div",{className:"wd100p"},c.a.createElement("label",null,c.a.createElement("strong",null,"Rotten Tomatoes Rating:")),"\xa0",e.rotten_tomatoes,"%"),c.a.createElement("div",{className:"wd100p"},c.a.createElement("label",null,c.a.createElement("strong",null,"Worldwide Gross:")),"\xa0",e.worldwide_gross),c.a.createElement("div",{className:"wd100p"},c.a.createElement("label",null,c.a.createElement("strong",null,"Year Release:")),"\xa0",e.year))}}]),a}(n.Component),k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.comments;return c.a.createElement("div",{className:"col-md-12"},c.a.createElement("h5",null,"Comments"),c.a.createElement("div",{className:"wd100p ml-2"},e&&e.map((function(e,t){return c.a.createElement("div",{className:"wd100p",key:t},c.a.createElement("label",null,c.a.createElement("strong",null,e.name,": ")),"\xa0",e.comment)}))))}}]),a}(n.Component),j=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onChangeCommentName=n.onChangeCommentName.bind(Object(d.a)(n)),n.onChangeCommentText=n.onChangeCommentText.bind(Object(d.a)(n)),n.submitComment=n.submitComment.bind(Object(d.a)(n)),n.state={message:"",commentName:"",commentText:""},n}return Object(s.a)(a,[{key:"clearForm",value:function(){this.setState({commentName:"",commentText:"",message:""})}},{key:"onChangeCommentName",value:function(e){this.setState({commentName:e.target.value})}},{key:"onChangeCommentText",value:function(e){this.setState({commentText:e.target.value})}},{key:"submitComment",value:function(){var e=this,t=this.props.selectedMovieID,a={name:this.state.commentName,comment:this.state.commentText};C.create(t,a).then((function(t){var n=t.data,c=n.result,o=n.message,r=n.comment;c?(a.cid=r.cid,a.movie_id=r.movie_id,e.props.addNewComment&&e.props.addNewComment(a),e.clearForm()):e.setState({message:o})})).catch((function(t){e.setState({message:"some error occurred while adding the comment."})}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"col-md-12"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Your Name",value:this.state.commentName,onChange:this.onChangeCommentName,required:!0}),c.a.createElement("textarea",{className:"form-control mt-2",placeholder:"Your comment",value:this.state.commentText,onChange:this.onChangeCommentText,required:!0}),c.a.createElement("span",{className:"badge badge-danger"},this.state.message),c.a.createElement("button",{type:"button",className:"btn btn-primary float-right mt-3",onClick:this.submitComment},"Submit"))}}]),a}(n.Component),O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onChangeSearchTitle=n.onChangeSearchTitle.bind(Object(d.a)(n)),n.retrieveMovies=n.retrieveMovies.bind(Object(d.a)(n)),n.setActiveMovie=n.setActiveMovie.bind(Object(d.a)(n)),n.handlePageChange=n.handlePageChange.bind(Object(d.a)(n)),n.handlePageSizeChange=n.handlePageSizeChange.bind(Object(d.a)(n)),n.addNewComment=n.addNewComment.bind(Object(d.a)(n)),n.state={movies:[],selectedMovie:null,currentIndex:-1,searchTitle:"",page:1,count:0,pageSize:10,comments:[],message:""},n.pageSizes=[10,25,50],n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.retrieveMovies()}},{key:"onChangeSearchTitle",value:function(e){var t=this,a=e.target.value;this.setState({searchTitle:a},(function(){t.retrieveMovies()}))}},{key:"handlePageChange",value:function(e,t){var a=this;this.setState({page:t,currentIndex:-1},(function(){a.retrieveMovies()}))}},{key:"handlePageSizeChange",value:function(e){var t=this;this.setState({pageSize:e.target.value,page:1},(function(){t.retrieveMovies()}))}},{key:"getRequestParams",value:function(e,t,a){var n={};return n.title=e||"",t&&(n.page=t-1),a&&(n.size=a),n}},{key:"retrieveMovies",value:function(){var e=this,t=this.state,a=t.searchTitle,n=t.page,c=t.pageSize,o=this.getRequestParams(a,n,c);E.getAll(o).then((function(t){var a=t.data,n=a.movies,c=a.totalPages;e.setState({movies:n,count:c})})).catch((function(e){console.log(e)}))}},{key:"setActiveMovie",value:function(e,t){var a=this;this.setState({selectedMovie:e,currentIndex:t,comments:null,message:""}),this.commentForm&&this.commentForm.clearForm(),C.getAll(e.id).then((function(e){a.setState({comments:e.data})})).catch((function(e){console.log(e)}))}},{key:"addNewComment",value:function(e){var t=this.state.comments;t.push(e),this.setState({comments:t})}},{key:"render",value:function(){var e=this,t=this.state,a=t.searchTitle,n=t.movies,o=t.selectedMovie,r=t.currentIndex,l=t.page,i=t.count,s=t.pageSize,m=t.comments;return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("h3",null,"Movies"),c.a.createElement("hr",null),c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search by title",value:a,onChange:this.onChangeSearchTitle}),c.a.createElement("div",{className:"mt-3 mb-2"},"Movies per Page: ",c.a.createElement("select",{onChange:this.handlePageSizeChange,value:s},this.pageSizes.map((function(e){return c.a.createElement("option",{key:e,value:e},e)})))),c.a.createElement(N,{movies:n,currentIndex:r,setActiveMovie:this.setActiveMovie}),c.a.createElement(y.a,{className:"my-3",count:i,page:l,siblingCount:1,boundaryCount:1,variant:"outlined",shape:"rounded",onChange:this.handlePageChange})),c.a.createElement("div",{className:"col-md-5 ml-3"},o?c.a.createElement("div",{className:"row"},c.a.createElement(w,{selectedMovie:o}),c.a.createElement("hr",{className:"wd100p"}),c.a.createElement(k,{comments:m}),c.a.createElement("hr",{className:"wd100p"}),c.a.createElement(j,{ref:function(t){e.commentForm=t},selectedMovieID:o.id,addNewComment:this.addNewComment})):c.a.createElement("div",{className:"row"},c.a.createElement("br",null),c.a.createElement("p",null,"Please click on a movie to view the detail"))))}}]),a}(n.Component),S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(l.a,null,c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},c.a.createElement("a",{href:"/movies",className:"navbar-brand"},"Challenge Exercise")),c.a.createElement("div",{className:"container mt-3"},c.a.createElement(v.c,null,c.a.createElement(v.a,{exact:!0,path:["/","/movies"],component:O})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(l.b,null,c.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.39c7c8b0.chunk.js.map