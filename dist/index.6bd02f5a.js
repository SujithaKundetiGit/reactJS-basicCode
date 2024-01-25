/**const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Hello world using react!"
    );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);*/ const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", "", "I am h2 tag")
    ])
], [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", "", "I am h2 tag")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
