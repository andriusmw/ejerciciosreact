/**
 * Crear dentro del div root una section con clase
 * container , que tenga dentro dos span.
 * uno que ponga "hello y otro que ponga "world"
 * 
 * 
 * 
 * 
 */

 const div = document.createElement("div");
 const section = document.createElement("section")
 section.className += "container"

const span1 = document.createElement("span")
 span1.textContent = "hello ";

 const span2 = document.createElement("span")
 span2.textContent = "world";


 const body = document.querySelector("body")
 body.appendChild(div);
 div.appendChild(section);
 section.appendChild(span1);
 section.appendChild(span2);






/*
 const root = document.querySelector("#root");
 const div = React.createElement("p",{
 className: "text",
 children: "Hello world2",
 });
 
 ReactDOM.render(p, root)
 //primer parámetro es lo que quieres pintar
 //segundo parámetro es donde lo quieres pintar*/