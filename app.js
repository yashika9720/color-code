for (let i = 0; i < 100; i++) {
	const box = document.createElement('div');
	box.setAttribute('class', 'box');
	document.querySelector('.container').appendChild(box);
}

const colorGenerate = ()=>{
	const characters = "0123456789abcdef";
	let length = 6;
	let color = "";

	for (let i = 0; i < length; i++) {
		let randomColor = Math.floor(Math.random() * characters.length);
		color += characters.substring(randomColor, randomColor+1);
	}

	return "#"+color;
}

const copy = (e)=>{
	const getColor = e.getAttribute('colorCode');  

	let tarea = document.createElement('textarea');
    tarea.innerHTML = getColor;
    document.body.append(tarea);
    tarea.focus();
    tarea.select();
    document.execCommand('copy');
    document.body.removeChild(tarea);

	const div = document.createElement('div');
	div.setAttribute('class', 'copyScreen');
	div.style.backgroundColor = getColor;
	div.innerHTML = "Copied! <br>"+ getColor;
	document.querySelector('.container').appendChild(div);

	setTimeout(()=>{
		document.querySelector('.container').removeChild(div);
	}, 2000)
}

const generate = ()=>{
	const boxes = document.querySelectorAll('.box');
	boxes.forEach((element)=>{
		let newColor = colorGenerate();
		element.style.backgroundColor = newColor;
		element.setAttribute('colorCode', newColor);
		element.setAttribute('onclick', 'copy(this);');
		element.innerText = newColor;
	});
}
generate();