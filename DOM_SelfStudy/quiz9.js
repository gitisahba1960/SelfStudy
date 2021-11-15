const newDiv = document.createElement("div")
newDiv.className = "hello"
newDiv.setAttribute("title", "Hello Div")
newDiv.style.fontSize = "30px"
const newDivText = document.createTextNode("Hello world")

//fill the blank with the following code:
newDiv.appendChild(newDivText)

const container = document.querySelector("header .container")
console.log(container)
const h1 = document.querySelector("header h1")
container.insertBefore(newDiv, h1)

/* The insertBefore() method of the Node interface inserts a node before a reference node as a child of a specified parent node.

insertBefore(newNode, referenceNode);

newNode
The node to be inserted.

referenceNode
The node before which newNode is inserted. If this is null, then newNode is inserted at the end of node's child nodes.
*/
