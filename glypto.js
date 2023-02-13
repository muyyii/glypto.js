const HIDALGO = "En un lugar de la mancha, de cuyo no nombre no quiero acordarme, no ha mucho tiempo, que vivía un hidalgo, de los de lanza en astillero, adarga antigua y galgo corredor, una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lentejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda.";

function tag (name, ...children){
	
	const result = document.createElement(name);
	
	for (const child of children) {
		result.appendChild(child);
	}
	
	result.att = function(name, value){
		this.setAttribute(name, value);
		return this
	};

	result.onclick$ = function(callback){
		this.onclick = callback;
		return this;
	};

	return result;
}

function div(...children){
	return tag("div", ...children);
}

function span(...children){
	return tag("span", ...children);
}


function img(src){
	return tag("img").att("src", src);
}


// Porque en HTML el texto es un nodo distinto.
function text(s){
	return document.createTextNode(s);
}

function h1(...children){
	return tag("h1", ...children);
}

function h2(...children){
	return tag("h3", ...children);
}

function h3(...children){
	return tag("h3", ...children);
}

function p(...children){
	return tag("p", ...children);
}

function a(...children){
	return tag("a", ...children);
}

// Esto está muy bueno
function tabSwitcher (names, choose){
	return div(
		...names.map( (name, index) => {
			return span(
				a(text(name))
				.att("href", "#")
				.onclick$(() => choose(index))
			).att("class", "tab");
		})
	);
}


function tabs(ts){
	const names = Object.keys(ts);
	const tags = names.map(name => ts[name]);
	
	let currentTab = 0;
	const tabSlot = div(tags[currentTab]);

	return div(
		tabSwitcher(Object.keys(ts), (index) => {
			tabSlot.removeChild(tags[currentTab]);
			tabSlot.appendChild(tags[index]);
			currentTab = index;
		}),
		tabSlot
	);
}

function blobpost(){
	return div(
		h1(text("1. El ingenioso hidalgo don Qvixote de la mancha")),
		p(text(HIDALGO)),
		h2(text("1.1. Subtítulo")),
		p(text(HIDALGO)),
		h3(text("1.1.1. SubSubTítulo")),
		p(text(HIDALGO))
	);

}

function fasti(){
	return div(
		h2(text("El texto de Fasti")),
		p(text('Estando sentados en la mesa, contemplabamos el momento para irnos al patio. sin embargo, algo ocurrió...'))
	);
}

function fotos(){
	return div(
		img("unknown.png"),
	 	img("unknown.png"),
		img("unknown.png")
	);
}

function canvas(){
	return tag("canvas");
}

window.onload = () => {
	
	//const entry = document.getElementById("entry");
	//console.log(entry);
	//console.log(div(div().att("id", "child")).att("id", "parent"));
	//entry.appendChild(blobpost());
		
	entry.appendChild(tabs({
		"Bait": div(h1(text("Hola Amigo, descuida Amigo."))),
		"blobpost": blobpost(),
		"fotos": fotos(),
		"Historia": fasti()
	}));

	console.log(canvas());	
}
