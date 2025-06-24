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

//React Element - JS Object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//JSx
const jsxHeading = <h1 id = "heading">Namaste React using JSX</h1>;
console.log(jsxHeading);
root.render(jsxHeading);

//React Component
const HeadingComponent = () => (
<h1 className = "heading">Namaste React Functional Component</h1>
);
root.render(<HeadingComponent/>);

//Component Composition
const Title = () => (
    <><HeadingComponent /><h2>This is a component Composition</h2></>
);
root.render(<Title/>);