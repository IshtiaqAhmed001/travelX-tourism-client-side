(this["webpackJsonptravelx-tour-solution"]=this["webpackJsonptravelx-tour-solution"]||[]).push([[0],{80:function(e,t,c){},81:function(e,t,c){},83:function(e,t,c){},90:function(e,t,c){},94:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(34),i=c.n(a),r=(c(80),c.p,c(81),c(82),c(23)),l=c(17),o=c(100),d=c(105),j=c(9),b=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){fetch("https://shrouded-meadow-59563.herokuapp.com/packages").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]),{deals:c,setDeals:n}},h=(c(83),c(0)),u=function(e){var t=e.deal,c=Object(l.g)(),s=t._id,n=t.name,a=t.price,i=t.destination,r=t.img;return Object(h.jsxs)("div",{className:"col-lg-4 col-md-6 col-sm-12",children:[Object(h.jsx)("div",{className:"img-container",children:Object(h.jsx)("img",{className:"w-100",src:r,alt:""})}),Object(h.jsx)("h3",{children:n}),Object(h.jsx)("h5",{children:i}),Object(h.jsxs)("h6",{children:["Price: ",a]}),Object(h.jsx)("button",{onClick:function(){return function(e){var t="/deals/placeorder/".concat(e);c.push(t)}(s)},className:"btn btn-warning",children:Object(h.jsx)("strong",{children:"Book Now"})})]})},m=c(5),O=c(39),x=c(72),p={apiKey:"AIzaSyD9BJ08pWm_Rcs4r4uyl0VlvNskV0OY19I",authDomain:"travelx-49c24.firebaseapp.com",projectId:"travelx-49c24",storageBucket:"travelx-49c24.appspot.com",messagingSenderId:"657460180875",appId:"1:657460180875:web:a3b6b9b2d3bdfbcab2e18e"};(function(){Object(x.a)(p)})();var f=function(){var e=Object(s.useState)({}),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!0),i=Object(j.a)(a,2),r=i[0],l=i[1],o=Object(O.c)(),d=new O.a;Object(s.useEffect)((function(){var e=Object(O.d)(o,(function(e){n(e||{}),l(!1)}));return function(){return e()}}),[]);return{user:c,setUser:n,signInWithGoogle:function(){return Object(O.f)(o,d)},createAccountWithEmail:function(e,t){return Object(O.b)(o,e,t)},loginWithEmailAndPassword:function(e,t){return Object(O.e)(o,e,t)},isLoading:r,setIsLoading:l,updateName:function(e){Object(O.h)(o.currentUser,{displayName:e}).then((function(){var t=Object(m.a)(Object(m.a)({},c),{},{displayName:e});n(t)})).catch((function(e){}))},logOut:function(){Object(O.g)(o).then((function(){n({})})).catch((function(e){console.log(e)}))}}},g=Object(s.createContext)(),v=function(e){var t=e.children,c=f();return Object(h.jsx)(g.Provider,{value:c,children:t})},N=function(){return Object(s.useContext)(g)},y=(c(90),c(52)),w=c(74),k=c(57),S=function(){var e=b().deals;return N().isLoading?Object(h.jsx)("div",{class:"text-center",children:Object(h.jsx)(o.a,{animation:"border",role:"status",children:Object(h.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"slider",children:Object(h.jsxs)(d.a,{fade:!0,children:[Object(h.jsxs)(d.a.Item,{children:[Object(h.jsx)("img",{className:"d-block w-100",src:"https://i.ibb.co/vjV8Sqb/friends.jpg",alt:"First slide"}),Object(h.jsxs)(d.a.Caption,{children:[Object(h.jsx)("h3",{className:"slider-title title1",children:"Making the most out of your holiday"}),Object(h.jsx)("p",{className:"text-dark fs-5",children:"TravelX, providing the best packages for friends and family"})]})]}),Object(h.jsxs)(d.a.Item,{children:[Object(h.jsx)("img",{className:"d-block w-100",src:"https://i.ibb.co/Wy8ttgf/maldives.jpg",alt:"Second slide"}),Object(h.jsxs)(d.a.Caption,{children:[Object(h.jsx)("h3",{className:"slider-title title2",children:"Picture perfect destinations"}),Object(h.jsx)("p",{className:"fs-5",children:"Enjoy the best sunsets with us"})]})]}),Object(h.jsxs)(d.a.Item,{children:[Object(h.jsx)("img",{className:"d-block w-100",src:"https://i.ibb.co/dBsZ3mr/surf.jpg",alt:"Third slide"}),Object(h.jsxs)(d.a.Caption,{children:[Object(h.jsx)("h3",{className:"slider-title title3",children:"Beauty of Discovery"}),Object(h.jsx)("p",{className:"text-dark fs-5",children:"Explore and get the best out of yourself"})]})]}),Object(h.jsxs)(d.a.Item,{children:[Object(h.jsx)("img",{className:"d-block w-100",src:"https://i.ibb.co/zb1Khr9/concert.jpg",alt:"Fourth slide"}),Object(h.jsxs)(d.a.Caption,{children:[Object(h.jsx)("h3",{className:"slider-title title4",children:"Experience different cultures "}),Object(h.jsx)("p",{className:"fs-5",children:"Enjoy the best of the cultures"})]})]})]})}),Object(h.jsxs)("div",{className:"container my-5",children:[Object(h.jsx)("h6",{className:"slogan",children:"Travel Save Repeat"}),Object(h.jsx)("h1",{className:"display-5 mb-5 section-title",children:" Explore the World with Us"}),Object(h.jsx)("p",{className:"text-success fs-3",children:"Trending Packages"}),Object(h.jsx)("div",{className:"row g-4 mb-5",children:e.map((function(e){return Object(h.jsx)(u,{deal:e},e._id)}))})]}),Object(h.jsxs)("div",{className:"offer-section row g-4 p-5",children:[Object(h.jsx)("div",{className:"col-lg-6 col-md-12",children:Object(h.jsx)("h1",{className:"display-1 discount-price my-5 p-3",children:"45%"})}),Object(h.jsxs)("div",{className:"offer-brief col-lg-6 col-md-12",children:[Object(h.jsx)("h1",{className:"display-2 fw-bold mt-5",children:"Last Minute Offer"}),Object(h.jsx)("h6",{className:"fs-4 mb-5",children:"Bungee Jumping In Nepal"}),Object(h.jsx)("p",{className:"fs-5",children:"Nepal is adorned with beautiful views that make it a great place to indulge in bungee jumping. There are only 2 places that offer the opportunity to experience it. Also, bungee jumping rate in Nepal is not a concern when you want to treat yourself."}),Object(h.jsx)("button",{type:"button",className:"btn btn-lg btn-outline-light",children:"View More"})]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h6",{className:"slogan mt-5",children:"Life time experiences"}),Object(h.jsx)("h1",{className:"section-title mb-5 display-5",children:"Our Latest Vlogs"}),Object(h.jsx)("iframe",{className:"video-player ",src:"https://www.youtube.com/embed/zHcr32gRRCs",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})]}),Object(h.jsxs)("div",{className:"additional-services p-3 ",children:[Object(h.jsx)("h1",{className:"display-5 p-3  section-title",children:" Additional Services"}),Object(h.jsx)("h6",{className:"slogan",children:"Your comfort is our happiness"}),Object(h.jsxs)("div",{className:"row mx-1 my-3",children:[Object(h.jsxs)("div",{className:"col-lg-3 col-md-4 col-sm-6 col-12",children:[Object(h.jsx)("div",{className:"icon-container w-50 mx-auto my-5",children:Object(h.jsx)(y.a,{className:"services-icons",icon:k.a})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Special Activities"}),Object(h.jsx)("p",{className:"text-start",children:"Our packages includes special activites like camping,horsebake riding,mountain biking,whitewater rafting and many more.. "})]})]}),Object(h.jsxs)("div",{className:"col-lg-3 col-md-4 col-sm-6 col-12",children:[Object(h.jsx)("div",{className:"icon-container w-50 mx-auto my-5",children:Object(h.jsx)(y.a,{className:"services-icons",icon:k.d})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Your Private Guide"}),Object(h.jsx)("p",{className:"text-start",children:"Our private guides are there to answer any questions you might have about their city, region to give you an insider's view."})]})]}),Object(h.jsxs)("div",{className:"col-lg-3 col-md-4 col-sm-6 col-12",children:[Object(h.jsx)("div",{className:"icon-container w-50 mx-auto my-5",children:Object(h.jsx)(y.a,{className:"services-icons",icon:k.c})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Travel Management"}),Object(h.jsx)("p",{className:"text-start",children:"Our travel management service includes transportaion,accomationds and other required services according to your needs"})]})]}),Object(h.jsxs)("div",{className:"col-lg-3 col-md-4 col-sm-6 col-12",children:[Object(h.jsx)("div",{className:"icon-container w-50 mx-auto my-5",children:Object(h.jsx)(y.a,{className:"services-icons",icon:k.b})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Location Manager"}),Object(h.jsx)("p",{className:"text-start",children:"Our location managers work with our tour guides to make your experience smooth and memorable. "})]})]})]})]}),Object(h.jsxs)("div",{className:"row g-4 my-5",children:[Object(h.jsx)("h3",{className:"display-2 mb-4",children:"Most Recommended Hotels"}),Object(h.jsxs)("div",{className:"col-lg-5 col-md-12",children:[Object(h.jsx)("h3",{className:"my-3",children:"Want to get our hottest travel deals top tips and advice? Subscribe us now!"}),Object(h.jsxs)("div",{class:"input-group my-5",children:[Object(h.jsx)("input",{type:"text",class:"form-control",placeholder:"Enter your email address","aria-label":"Enter your email address","aria-describedby":"basic-addon2"}),Object(h.jsx)("div",{class:"input-group-append",children:Object(h.jsxs)("button",{class:"btn btn-outline-secondary",type:"button",children:[" ",Object(h.jsx)(y.a,{className:"text-dark",icon:w.a})]})})]})]}),Object(h.jsx)("div",{className:"col-lg-7 col-md-12",children:Object(h.jsxs)("div",{className:"row g-1",children:[Object(h.jsx)("div",{className:"col-lg-4 col-md-12",children:Object(h.jsx)("img",{className:"w-100",src:"https://i.ibb.co/MD6zGYF/1.jpg",alt:""})}),Object(h.jsx)("div",{className:"col-lg-4 col-md-12",children:Object(h.jsx)("img",{className:"w-100",src:"https://i.ibb.co/0s4YS21/2.jpg",alt:""})}),Object(h.jsx)("div",{className:"col-lg-4 col-md-12",children:Object(h.jsx)("img",{className:"w-100",src:"https://i.ibb.co/dDFDSpv/3.jpg",alt:""})})]})})]})]})},L=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"404"}),Object(h.jsx)("h4",{children:"Not found"})]})},D=c(103),B=c(101),E=c(104),C=(c(94),function(){var e=N(),t=e.user,c=e.logOut;return Object(h.jsx)("div",{className:"",children:Object(h.jsx)(D.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(h.jsxs)(B.a,{children:[Object(h.jsx)(D.a.Brand,{className:"fw-bold",children:Object(h.jsx)(r.c,{className:"navLink",to:"/home",children:"TravelX"})}),Object(h.jsx)(D.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(h.jsx)(D.a.Collapse,{id:"responsive-navbar-nav",children:Object(h.jsxs)(E.a,{className:"ms-auto",children:[Object(h.jsx)(r.c,{className:"navLink",to:"/home",children:"Home"}),Object(h.jsx)(r.c,{className:"navLink",to:"/destinations",children:"Destinations"}),Object(h.jsx)(r.c,{className:"navLink",to:"/deals",children:"Deals"}),t.displayName&&Object(h.jsxs)(E.a,{children:[Object(h.jsx)(r.c,{className:"navLink",to:"/addnewdeal",children:"Add a New Deal"}),Object(h.jsx)(r.c,{className:"navLink",to:"/mybookings",children:"My Bookings"}),Object(h.jsx)(r.c,{className:"navLink",to:"/manageallbookings",children:"Manage All Bookings"}),Object(h.jsx)("button",{className:"user-name text-warning",children:t.displayName})]}),t.email?Object(h.jsx)("button",{className:"nav-button",onClick:c,children:"Log Out"}):Object(h.jsx)(r.c,{className:"navLink",to:"/login",children:"Login"})]})})]})})})}),I=(c(97),function(){return Object(h.jsx)("div",{className:"footer-container",children:Object(h.jsx)("h6",{className:"display-1 py-5 text-light",children:"This is footer"})})}),P=function(){var e=N().isLoading,t=b().deals;return e?Object(h.jsx)("div",{class:"text-center",children:Object(h.jsx)(o.a,{animation:"border",role:"status",children:Object(h.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):Object(h.jsxs)("div",{className:"container my-4",children:[Object(h.jsx)("h1",{className:"display-5 mb-5 section-title",children:" Deals we are currently offering"}),Object(h.jsx)("div",{className:"row g-4 mb-5",children:t.map((function(e){return Object(h.jsx)(u,{deal:e},e._id)}))})]})},T=function(){var e,t=N(),c=t.signInWithGoogle,n=t.setUser,a=t.setIsLoading,i=t.loginWithEmailAndPassword,o=Object(l.g)(),d=(null===(e=Object(l.h)().state)||void 0===e?void 0:e.from)||"/home",b=Object(s.useState)(""),u=Object(j.a)(b,2),m=u[0],O=u[1],x=Object(s.useState)(""),p=Object(j.a)(x,2),f=p[0],g=p[1];return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"THis is login"}),Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(m,f).then((function(e){a(!0);var t=e.user;n(t),o.push(d)})).catch((function(e){e.code,e.message})).finally((function(){a(!1)}))},children:[Object(h.jsx)("input",{type:"email",onBlur:function(e){O(e.target.value)},placeholder:"Email"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"password",onBlur:function(e){g(e.target.value)},placeholder:"Password"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"submit",value:"Login"})]})}),Object(h.jsx)("div",{className:"my-5",children:Object(h.jsx)("button",{onClick:function(){c().then((function(e){a(!0),n(e.user),o.push(d)})).catch((function(e){return console.log(e)})).finally((function(){a(!1)}))},className:"btn btn-success",children:"Google Sign In"})})]}),Object(h.jsxs)("div",{className:"my-5",children:[Object(h.jsx)("h4",{children:"New User?"}),Object(h.jsx)(r.b,{to:"/register",children:"Please Register"})]})]})},A=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],a=N().isLoading;return Object(s.useEffect)((function(){fetch("https://shrouded-meadow-59563.herokuapp.com/destinations").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]),a?Object(h.jsx)("div",{className:"text-center",children:Object(h.jsx)(o.a,{animation:"border",role:"status",children:Object(h.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):Object(h.jsxs)("div",{className:"container my-5",children:[Object(h.jsx)("h1",{className:"display-5 section-title",children:" Top Destinations You Must Visit"}),Object(h.jsx)("hr",{className:"mb-5 w-75 mx-auto"}),Object(h.jsx)("div",{className:"row g-4",children:c.map((function(e){return Object(h.jsx)("div",{className:"col-lg-2 col-md-3 col-sm-6",children:Object(h.jsxs)("div",{className:"card h-100",children:[Object(h.jsx)("img",{className:"card-img-top w-100",src:e.img,alt:"..."}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h5",{className:"card-title",children:e.name}),Object(h.jsx)("p",{className:"card-text text-start",children:Object(h.jsx)("small",{children:e.description})})]})]})})}))})]})},M=function(){var e,t=N(),c=(t.signInWithGoogle,t.createAccountWithEmail),n=t.updateName,a=t.setUser,i=t.setIsLoading,o=Object(l.g)(),d=(null===(e=Object(l.h)().state)||void 0===e?void 0:e.from)||"/home",b=Object(s.useState)(""),u=Object(j.a)(b,2),m=u[0],O=u[1],x=Object(s.useState)(""),p=Object(j.a)(x,2),f=p[0],g=p[1],v=Object(s.useState)(""),y=Object(j.a)(v,2),w=y[0],k=y[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:"my-5",children:"Please Register"}),Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:function(e){c(f,w).then((function(e){i(!0),n(m),a(e.user),o.push(d)})).catch((function(e){e.code,e.message})).finally((function(){i(!1)})),e.preventDefault()},children:[Object(h.jsx)("input",{type:"text",onBlur:function(e){console.log(e.target.value),O(e.target.value)},placeholder:"Name"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"email",onBlur:function(e){console.log(e.target.value),g(e.target.value)},placeholder:"Email"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"password",onBlur:function(e){console.log(e.target.value),k(e.target.value)},placeholder:"Password"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"submit",value:"Register"})]})}),Object(h.jsxs)("div",{className:"mb-5",children:[Object(h.jsx)("h3",{className:"mt-5",children:"Already Registered ?"}),Object(h.jsx)(r.b,{to:"/login",children:"Please Login"})]})]})},q=c(64),R=function(){var e=Object(l.i)().id,t=b().deals,c=e,s=t.filter((function(t){return t._id===e})),n=N().user,a=Object(q.a)(),i=a.register,r=a.handleSubmit,o=a.reset,d=a.formState.errors;return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"services container ",children:Object(h.jsx)("div",{className:"",children:s.map((function(e){return Object(h.jsxs)("div",{className:"",children:[Object(h.jsx)("img",{className:"w-25",src:e.img,alt:""}),Object(h.jsx)("h3",{className:"w-25 mx-auto bg-primary p-2 rounded-3 text-white",children:e.name})]},e._id)}))})}),Object(h.jsxs)("div",{className:"my-1",children:[Object(h.jsx)("h1",{children:"Please procees to confirm"}),Object(h.jsxs)("form",{className:"shipping-form",onSubmit:r((function(e){var t=e.name,n=e.email,a=e.address,i=e.city,r=e.phone,l={orderId:c,status:"pending",name:t,email:n,address:a,city:i,phone:r};l.itemDetails=s[0],fetch("https://shrouded-meadow-59563.herokuapp.com/bookings",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(l)}).then((function(e){return e.json()})).then((function(e){e.insertedId&&(alert("Booking completed!"),o())}))})),children:[Object(h.jsx)("input",Object(m.a)({defaultValue:n.displayName},i("name"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(m.a)({defaultValue:n.email},i("email",{required:!0}))),Object(h.jsx)("br",{}),d.email&&Object(h.jsx)("span",{className:"error",children:"This field is required"}),Object(h.jsx)("input",Object(m.a)({placeholder:"Address",defaultValue:""},i("address"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(m.a)({placeholder:"City",defaultValue:""},i("city"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(m.a)({placeholder:"Phone",defaultValue:""},i("phone"))),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{value:"book",type:"submit"})]})]})]})},U=c(10),V=["children"],W=function(e){var t=e.children,c=Object(U.a)(e,V),s=N(),n=s.user;return s.isLoading?Object(h.jsx)("div",{class:"text-center",children:Object(h.jsx)(o.a,{animation:"border",role:"status",children:Object(h.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):Object(h.jsx)(l.b,Object(m.a)(Object(m.a)({},c),{},{render:function(e){var c=e.location;return n.email?t:Object(h.jsx)(l.a,{to:{pathname:"/login",state:{from:c}}})}}))},_=function(){var e=Object(q.a)(),t=e.register,c=e.handleSubmit,s=(e.watch,e.formState.errors),n=e.reset;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:"display-6 fw-bold mt-5",children:"Add a New Deal"}),Object(h.jsx)("div",{className:"w-75 mx-auto my-5",children:Object(h.jsxs)("form",{onSubmit:c((function(e){var t={name:e.name,price:e.price,destination:e.destination,img:e.img};fetch("https://shrouded-meadow-59563.herokuapp.com/packages",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.insertedId&&(alert("New Deal added successfully!"),n())}))})),children:[Object(h.jsx)("input",Object(m.a)({className:"form-control",placeholder:"Deal Name "},t("name",{required:!0}))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(m.a)({className:"form-control",placeholder:"Destination "},t("destination",{required:!0}))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(m.a)({className:"form-control",placeholder:"Price "},t("price",{required:!0}))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(m.a)({className:"form-control",placeholder:"Image URL "},t("img",{required:!0}))),Object(h.jsx)("br",{}),s.exampleRequired&&Object(h.jsx)("span",{children:"This field is required"}),Object(h.jsx)("input",{className:"btn btn-lg btn-warning p-2 w-25",value:"Add Deal",type:"submit"})]})})]})},F=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){fetch("https://shrouded-meadow-59563.herokuapp.com/bookings").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]),{orders:c,setOrders:n}},J=function(){var e=N().user,t=F(),c=t.orders,s=(t.setOrders,c.filter((function(t){return t.email===e.email})));return Object(h.jsxs)("div",{children:[Object(h.jsxs)("h2",{className:"mt-5 display-6 fw-bold",children:["My Bookings: ",s.length]}),Object(h.jsx)("hr",{className:"w-50 mx-auto mb-5"}),Object(h.jsx)("div",{className:"row w-50 mx-auto my-5 g-3 border border-2 border-warning p-5",children:s.map((function(e){return Object(h.jsxs)("div",{className:"col-lg-4 col-md-6 col-sm-12",children:[Object(h.jsx)("div",{className:"img-container",children:Object(h.jsx)("img",{className:"w-50",src:e.itemDetails.img,alt:""})}),Object(h.jsx)("h3",{children:e.itemDetails.name}),Object(h.jsx)("h5",{children:e.itemDetails.destination}),Object(h.jsxs)("p",{children:["Price: ",e.itemDetails.price]}),Object(h.jsx)("button",{onClick:function(){return function(e){if(window.confirm("Are you sure you want to delete ?")){var t="https://shrouded-meadow-59563.herokuapp.com/bookings/".concat(e);fetch(t,{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){e.deletedCount>0&&(alert("Booking canceled!"),window.location.reload())}))}}(e._id)},className:"btn btn-warning fw-bold",children:"Cancel Booking"})]},e._id)}))})]})},Y=c(102),G=function(){N().user;var e=F(),t=e.orders;e.setOrders;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("h1",{className:"display-5 mt-5",children:["Total Bookings on website: ",t.length]}),Object(h.jsx)("hr",{className:"w-50 mx-auto mb-5"}),Object(h.jsx)("div",{children:Object(h.jsxs)(Y.a,{responsive:"sm",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Package Name"}),Object(h.jsx)("th",{children:"Destination"}),Object(h.jsx)("th",{children:"Price"}),Object(h.jsx)("th",{children:"Booked By"}),Object(h.jsx)("th",{children:"Order Status"}),Object(h.jsx)("th",{children:"Update Status"}),Object(h.jsx)("th",{children:"Delete"})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.itemDetails.name}),Object(h.jsx)("td",{children:e.itemDetails.destination}),Object(h.jsx)("td",{children:e.itemDetails.price}),Object(h.jsx)("td",{children:e.email}),Object(h.jsx)("td",{children:Object(h.jsx)("strong",{children:e.status})}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{onClick:function(){return function(e){if(window.confirm("Are you sure you want to delete ?")){var t="https://shrouded-meadow-59563.herokuapp.com/bookings/".concat(e);fetch(t,{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){e.deletedCount>0&&(alert("Booking canceled!"),window.location.reload())}))}}(e._id)},className:"btn btn-warning  fw-bold",children:"Cancel Booking"})}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{onClick:function(){return function(e){var c=t.filter((function(t){return t._id===e}));c[0].status="Approved";var s=c[0];console.log(s);var n="https://shrouded-meadow-59563.herokuapp.com/manageallorders/".concat(e);fetch(n,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(s)}).then((function(e){return e.json()})).then((function(e){e.modifiedCount&&(alert("Order status Updated successfully!"),window.location.reload())}))}(e._id)},className:"btn btn-success",children:"Update Order Status"})})]})}))})]})})]})};var z=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(v,{children:Object(h.jsxs)(r.a,{children:[Object(h.jsx)(C,{}),Object(h.jsxs)(l.d,{children:[Object(h.jsx)(l.b,{exact:!0,path:"/",children:Object(h.jsx)(S,{})}),Object(h.jsx)(l.b,{path:"/home",children:Object(h.jsx)(S,{})}),Object(h.jsx)(l.b,{path:"/destinations",children:Object(h.jsx)(A,{})}),Object(h.jsx)(W,{path:"/deals/placeorder/:id",children:Object(h.jsx)(R,{})}),Object(h.jsx)(l.b,{path:"/deals",children:Object(h.jsx)(P,{})}),Object(h.jsx)(W,{path:"/addnewdeal",children:Object(h.jsx)(_,{})}),Object(h.jsx)(W,{path:"/mybookings",children:Object(h.jsx)(J,{})}),Object(h.jsx)(W,{path:"/manageallbookings",children:Object(h.jsx)(G,{})}),Object(h.jsx)(l.b,{path:"/login",children:Object(h.jsx)(T,{})}),Object(h.jsx)(l.b,{path:"/register",children:Object(h.jsx)(M,{})}),Object(h.jsx)(l.b,{path:"*",children:Object(h.jsx)(L,{})})]}),Object(h.jsx)(I,{})]})})})},H=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,106)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(z,{})}),document.getElementById("root")),H()}},[[98,1,2]]]);
//# sourceMappingURL=main.0506148c.chunk.js.map