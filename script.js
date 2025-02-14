const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(https://www.svgrepo.com/show/345221/three-dots.svggetSumBtn);

const getSum = () => {
//Add your code here
  let prices = document.querySelectorAll(".price");

	let total = 0;
	price.forEach(price =>{
		total += parseFloat(price.innerText) || 0;
	});
	const table =document.querySelector("table");

	const newRow = document.createElement("tr");
	const totalCell = document.createElement("td");

	totalCell.setAttribute("colspan", "2");
	totalCell.setAttribute("id", "ans");
	totalCell.innerText = `Total Price: ${total}`;
	
	newRow.appendChild(totalCell);

	table.appendChild(totalRow)
};

getSumBtn.addEventListener("click", getSum);

