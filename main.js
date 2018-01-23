// var res = document.getElementById('result');
// var num1, num2, result;

// var nums1 = document.getElementById('num1');
// var nums2 = document.getElementById('num2');

// num1 = parseInt(num1);
// num2 = parseInt(num2);

// function plus() {

// 	num1 = nums1.value;
// 	num2 = nums2.value;

// 	result = num1 * num2;
// 	res.innerHTML = result;
// }

// function minus() {

// 	num1 = nums1.value;
// 	num2 = nums2.value;

// 	if (num1 == '0' || num2 == '0') {
// 		document.getElementById('result').innerHTML = "деление на 0 дает ноль";
// 		return false;
// 	} else {
// 		result = num1 / num2;
// 		res.innerHTML = result;
// 	}
// }
// calculator


var goods = {
	"2341": {
		"name": "Помідор",
		"price": 30,
		"img": "https://cdn0.iconfinder.com/data/icons/fruits/128/Tomato.png",
		"sklad": "yes"
	},
	"3445": {
		"name": "Банан",
		"price": 50,
		"img": "https://cdn3.iconfinder.com/data/icons/veggies/128/bananas.png",
		"sklad": "yes"
	},
	"3665": {
		"name": "Полуниця",
		"price": 70,
		"img": "https://cdn2.iconfinder.com/data/icons/fruit-i/83/05-128.png",
		"sklad": "yes"
	}
};

console.log(goods);

var out = '';
for (var key in goods) {
	out += "Імя: " + goods[key].name + "<br>";
	out += "Ціна: " + goods[key].price + "<br>";
	out += "Наявність на складі: " + goods[key].sklad + "<br>";
	out += "<img src='" + goods[key].img + "'/>" + "<br>";
	out += "<hr>";
}

document.getElementById('out').innerHTML = out;