const images = document.querySelector("#images")
images.style.height = innerHeight+"px"
const inp = document.querySelector("input")
const btn = document.querySelector("button")
let div = document.querySelector("#text")
function clickButton(){
	if(inp.value === ""){
		alert("The text field cannot be empty. Write text.")
	}
	else{
		let newDiv = document.createElement("div")
			newDiv.classList.add("newDiv")
			
			let h2 = document.createElement("h2")
			h2.innerHTML = inp.value
			h2.classList.add("h2")
			newDiv.appendChild(h2)
		
			let icon = document.createElement("i")
			icon.classList.add("material-icons")
			icon.innerText = "delete"
			icon.style.color = "red"
			icon.style.fontSize = "48px";
			icon.style.cursor = "pointer"
			newDiv.appendChild(icon)
		div.appendChild(newDiv)

		h2.onclick = function(){
			if(h2.style.textDecorationLine === "none"){
				h2.style.textDecorationLine = "line-through"
				h2.style.color = "red"
			}
			else{
				h2.style.color = "black"
				h2.style.textDecorationLine = "none"
			}
		}

		icon.onclick = function(){
			newDiv.remove(newDiv)
		}
	}
	inp.value = ""
}
btn.addEventListener("click", clickButton)
inp.addEventListener("keypress",function(event){
	if(event.keyCode === 13)
		clickButton()
})