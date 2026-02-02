var h1 = React.createElement("h1", null, "This is h1")
var h2 = React.createElement("h2", null, "This is h2")
var div = React.createElement("div", null, h1,h2)
var root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(h1);