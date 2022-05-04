// As with JSON, use the Fetch API & ES6
fetch('https://raw.githubusercontent.com/TipsTricksMore/community-charger/main/test.txt')
  .then(response => response.text())
  .then(data => {
  	// Do something with your data
  	console.log(data);
  });
