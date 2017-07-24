function compareNumbers(a, b) {
	return a - b;
}

function generateData() {
	//generate data
	var walls = [0,100];
	for(var i=0; i<4; i++) {
		walls.push(Math.random()*100);
	}
	walls = walls.sort(compareNumbers);

	// console.log(walls);
	var values = [];
	var newvalues = values.sort(compareNumbers);
	for(var i=0; i<walls.length-1; i++) {
		values.push(walls[i+1]-walls[i]);
	}
	// verify data
	for(var i=0; i<values.length; i++) {
		if(values[i]<3 || values[i]>39) {
			return generateData();
		}
	}
	for(var i=0; i<values.length-1; i++) {
		if(newvalues[i+1]-newvalues[i] < 0.1) {
			return generateData();
		}
	}

	return values;
}

for(var i=0; i<10; i++) {
	console.log(generateData());
}