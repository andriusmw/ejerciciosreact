
/*
const p = document.createElement("p");
p.textContent = "hello world";
p.className = "text";
const body = document.querySelector("body")
body.append(p);

*/
const root = document.querySelector("#root");
const p = React.createElement("p",{
className: "text",
children: "Hello world2",
});

ReactDOM.render(p, root)
//primer parámetro es lo que quieres pintar
//segundo parámetro es donde lo quieres pintar