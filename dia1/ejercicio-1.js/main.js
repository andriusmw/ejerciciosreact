/**
 * Crear dentro del div root una section con clase
 * container , que tenga dentro dos span.
 * uno que ponga "hello y otro que ponga "world"
 * 
 * 
 * 
 * 
 */

/*-----------Solución 1
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

*/


const root = document.querySelector("#root");

const section = React.createElement("section",
{
    className: "container",
    children: 
        [React.createElement("span",
         {children: "Hello"}),
        React.createElement("span", 
        {children: "world"})
]
})