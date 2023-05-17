const settings = {
	async: true,
	crossDomain: true,
	url: 'https://house-plants2.p.rapidapi.com/search?query=Fern',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

[
	{
	  "Categories": "Dracaena",
	  "Disease": "N/A",
	  "Use": [
		"Potted plant",
		"Secondary"
	  ],
	  "Latin name": "Dracaena deremensis 'Janet Craig'",
	  "Insects": [
		"Mealy bug",
		"Scale"
	  ],
	  "Avaibility": "Regular",
	  "url": "http://www.tropicopia.com/house-plant/detail.np/detail-121.html",
	  "Style": "Bush",
	  "Bearing": "Erect",
	  "Light tolered": "Diffuse light ( Less than 5,300 lux / 500 fc)",
	  "Height at purchase": {
		"m": 0.91,
		"cm": 91
	  },
	  "Light ideal": "Strong light ( 21,500 to 3,200 lux/2000 to 300 fc)",
	  "Width at purchase": {
		"m": 0.91,
		"cm": 91
	  },
	  "id": "53417c12-4824-5995-bce0-b81984ebbd1d",
	  "Appeal": "Robustness",
	  "img": "http://www.tropicopia.com/house-plant/thumbnails/5556.jpg",
	  "Perfume": null,
	  "Growth": "Regular",
	  "Width potential": {
		"m": 1.22,
		"cm": 122
	  },
	  "Common name (fr.)": "Janet Craig",
	  "Pruning": "If needed",
	  "Family": "Liliaceae",
	  "Height potential": {
		"m": 3.66,
		"cm": 366
	  },
	  "Origin": [
		"Cultivar"
	  ],
	  "Description": null,
	  "Blooming season": "Winter / Spring",
	  "Color of leaf": [
		"Dark green"
	  ],
	  "Watering": "Keep moist between watering & Can dry between watering",
	  "Color of blooms": "Light green",
	  "Zone": [
		"11-10"
	  ],
	  "Common name": [
		"Janet Craig"
	  ],
	  "Available sizes (Pot)": "4in to 14in / 10cm to 36cm",
	  "Other names": null,
	  "Temperature": {
		"F": 50,
		"C": 10
	  },
	  "Pot diameter (cm)": {
		"m": 0.25,
		"cm": 25
	  },
	  "Climat": "Tropical"
	},
	{
	  "Categories": "Palm",
	  "Disease": "N/A",
	  "Use": [
		"Potted plant",
		"Secondary"
	  ],
	  "Latin name": "Rhapis excelsa",
	  "Insects": [
		"N/A"
	  ],
	  "Avaibility": "Regular",
	  "url": "http://www.tropicopia.com/house-plant/detail.np/detail-290.html",
	  "Style": null,
	  "Bearing": "Clump",
	  "Light tolered": "Diffuse light ( Less than 5,300 lux / 500 fc)",
	  "Height at purchase": {
		"m": 0.91,
		"cm": 91
	  },
	  "Light ideal": "Strong light ( 21,500 to 3,200 lux/2000 to 300 fc)",
	  "Width at purchase": {
		"m": 0.71,
		"cm": 71
	  },
	  "id": "9b97aef1-20a4-5620-af90-7d64dadb414e",
	  "Appeal": "Foliage",
	  "img": "http://www.tropicopia.com/house-plant/thumbnails/5725.jpg",
	  "Perfume": null,
	  "Growth": "Slow",
	  "Width potential": {
		"m": 3.05,
		"cm": 305
	  },
	  "Common name (fr.)": null,
	  "Pruning": "Never",
	  "Family": "Arecaceae",
	  "Height potential": {
		"m": 3.66,
		"cm": 366
	  },
	  "Origin": [
		"China"
	  ],
	  "Description": null,
	  "Blooming season": null,
	  "Color of leaf": [
		"Dark green"
	  ],
	  "Watering": "Keep moist between watering & Must not dry between watering",
	  "Color of blooms": null,
	  "Zone": [
		"11",
		"9"
	  ],
	  "Common name": [
		"Lady palm"
	  ],
	  "Available sizes (Pot)": "6in to 32in / 15cm to 81cm",
	  "Other names": "Rhapis flabelliformis",
	  "Temperature": {
		"F": 46.4,
		"C": 8
	  },
	  "Pot diameter (cm)": {
		"m": 0.25,
		"cm": 25
	  },
	  "Climat": "Subtropical"
	}
  ]