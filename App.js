 import React from "react";
 import ReactDOM from "react-dom/client";

 const heading = React.createElement("div", 
    {
        id : "parent"
    }, 
    [React.createElement("div" ,{id: "child1", key: "child1"},
        [
            React.createElement("h1", {key: "c1h1"}, "Iam an h1 tag"),
            React.createElement("h2", {key: "c1h2"}, "Iam an h2 tag")
        ]
    ),
    React.createElement("div" ,{id: "child2", key: "child2"},
        [
            React.createElement("h1", {key: "c2h1"}, "Iam an h1 tag"),
            React.createElement("h2", {key: "c2h2"}, "Iam an h2 tag")
        ]
    )
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);