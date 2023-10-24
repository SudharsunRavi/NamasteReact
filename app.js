import React from "react";
import ReactDOM from "react-dom/client";

//----------------------------------HELLO WORLD----------------------------------

// const heading=React.createElement("h1", {}, "Hello World"); // {} takes the attribute of h1 --- {id: "heading", className: "heading"}
// console.log(heading); // returns a react object with type, props, key, ref, and _owner in console
// const root=ReactDOM.createRoot(document.getElementById("container"));
// root.render(heading);

//----------------------------------NESTED ELEMEMTS----------------------------------

//IF ANYTHING IS INSIDE THE CONTAINER DIV(HTML), IT WILL BE REPLACED BY THE REACT ELEMENTS

{/* 

    <div id="parent">
        <div id="child">
            <h1>Hello, Nested it is!</h1>
        </div>
    </div> 

*/}

// const nested=React.createElement("div", {id:"parent"}, 
//                 React.createElement("div", {id:"child"},
//                 React.createElement("h1", {}, "Hello, Nested it is!")));
// const root=ReactDOM.createRoot(document.getElementById("container"));
// root.render(nested); 

//----------------------------------NESTED ELEMEMTS WITH SIBILING TAGS----------------------------------

{/* 

    <div id="parent">
        <div id="child">
            <h1>Hello, Nested it is!</h1>
            <h2>Sibiling tag</h2>
        </div>
    </div> 

*/}

// const sibiling=React.createElement("div", {id:"parent"}, 
//                 React.createElement("div", {id:"child"},
//                 [
//                     React.createElement("h1", {}, "Hello, Nested it is!"),
//                     React.createElement("h2", {}, "Sibiling tag")
//                 ]
//             ));
// const root=ReactDOM.createRoot(document.getElementById("container"));
// root.render(sibiling);

//----------------------------------NESTED ELEMEMTS WITH NESTED SIBILING TAGS----------------------------------

{/* 

    <div id="parent">

        <div id="child1">
            <h1>Hello, Nested it is!</h1>
            <h2>Sibiling tag</h2>
        </div>

        <div id="child2">
            <h1>Hello, Nested it is!</h1>
            <h2>Sibiling tag</h2>
        </div>

    </div> 

*/}

const nestedSibiling=React.createElement("div", {id: "parent"},
                        [
                            React.createElement("div", {id:"child1"},
                                [React.createElement("h1", {}, "Hello, Nested it is!"),
                                 React.createElement("h2", {}, "Sibiling tag")
                                ]),
                             
                            React.createElement("div", {id:"child2"},
                                [React.createElement("h1", {}, "Hello, Nested it is!"),
                                 React.createElement("h2", {}, "Sibiling tag")
                                ])
                        ]);
const root=ReactDOM.createRoot(document.getElementById("container"));
root.render(nestedSibiling);


