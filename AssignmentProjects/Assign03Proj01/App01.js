import React from "react";
import ReactDOM from "react-dom/client";

//Nested Header Element

//Using React.create Element
const header = React.createElement(
    "div",
    {className: "title"}
    ,[
        React.createElement("h1",{key: "h1"},"This is h1, Using React.create Element"),
        React.createElement("h2",{key: "h2"},"This is h2, Using React.create Element"),
        React.createElement("h3",{key: "h3"},"This is h3, Using React.create Element")
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);
console.log(header);

//Using JSX
const jsxHeader =(
    <div>
        <h1 id="heading1">This is h1, Using JSX</h1>
        <h2 id="heading2">This is h2, Using JSX</h2>
        <h3 id="heading3">This is h3, Using JSX</h3>
    </div>
);
root.render(jsxHeader);
console.log(jsxHeader);

//Functional Component with JSX
const HeadingComponent = () =>{
    return (
    <div className="title">
      <h1 id="HeadCompo1">This is h1, Using Functional Component</h1>
      <h2 id="HeadCompo2">This is h2, Using Functional Component</h2>
      <h3 id="HeadCompo3">This is h3, Using Functional Component</h3>
    </div>
  );
}
root.render(<HeadingComponent/>);
console.log(<HeadingComponent/>);

//Component Composition
const Title = ( ) =>{
    return (
      <h1 id="HeadCompo1">This is h1, Using Functional Component</h1>
  );
}

const TitleComponent = () => {
    return(
        <div className="title">
            <Title/>
            <h2 id="HeadCompo2">This is h2, Using Functional Component</h2>
            <h3 id="HeadCompo3">This is h3, Using Functional Component</h3>
        </div>
    );
}
root.render(<TitleComponent/>);

// {<TitleComponent/>} v
const func = () => {
    return(
        <div>
            <TitleComponent/>
        </div>
    );
}
root.render(func());

// {TitleComponent}
const Func1 = () => {
    return(
        <div>
           {TitleComponent()}
        </div>
    );
}
root.render(<Func1/>);

//{<TitleComponent></TitleComponent>}
const Func2 = () => {
    return(
        <div>
           {<TitleComponent></TitleComponent>}
        </div>
    );
}
root.render(<Func2/>);