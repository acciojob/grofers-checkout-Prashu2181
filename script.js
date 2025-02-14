const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(https://www.svgrepo.com/show/345221/three-dots.svggetSumBtn);

const getSum = () => {
//Add your code here
  let prices = document.querySelectorAll(".price");

	let total = 0;
	price.forEach(price =>{
		total = total + parseInt(price.textContent);
	});

	let newRowExist = document.getElementById("ans");

	if(!newRowExist){
		let newRow = document.createElement("tr");
	newRow.id = ans;
	let newCell = document.createElement("td");

	newCell.textContent = `Total Price =${total}`
	
	newRow.appendChild(newCell);

	document.querySelector("table").append(newRow);
};
	}

	let newRow = document.createElement("tr");
	newRow.id = ans;
	let newCell = document.createElement("td");

	newCell.textContent = `Total Price =${total}`
	
	newRow.appendChild(newCell);

	document.querySelector("table").append(newRow);
};

getSumBtn.addEventListener("click", getSum);

