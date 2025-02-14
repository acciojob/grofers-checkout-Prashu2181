const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(https://www.svgrepo.com/show/345221/three-dots.svggetSumBtn);

const getSum = () => {
//Add your code here
  let prices = document.querySelectorAll(".prices");

	let total = 0;
	price.forEach(price =>{
		total += parseFloat(price.innerText);
	})
	let table =document.querySelector("table");

	let existingTotalRow = document.getElementById("totalRow");
		if(existingTotalRow){
			existingTotalRow.remove();
		}
	let totalRow = document.createElement("tr");
	totalRow.id = "totalRow";

	let totalCell = document.createElement("td");
	totalCell.colSpan = 2;
	totalCell.innerText = `Total Price: ${total.toFixed(2)}`;

	totalRow.appendChild(totalCell);

	table.appendChild(totalRow)
};

getSumBtn.addEventListener("click", getSum);

