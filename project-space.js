function fun1() {
    document.getElementById('contentid1').style.display = "block";
    document.getElementById('contentid2').style.display = "none";
    document.getElementById('contentid3').style.display = "none";
}

function fun2() {
    document.getElementById('contentid1').style.display = "none";
    document.getElementById('contentid2').style.display = "block";
    document.getElementById('contentid3').style.display = "none";	
}

function fun3() {
    document.getElementById('contentid1').style.display = "none";
    document.getElementById('contentid2').style.display = "none";
    document.getElementById('contentid3').style.display = "block";	
}

function fun4() {
	document.getElementById('contentid').innerHTML = "Привет всем, и добро пожаловать на новый хаб, где я создаю и выкладываю проекты, которые мне кажутся наиболее креативными. Меня зовут Павел и я верю, что такие места могут принести нам больше опыта, так что мы сможем выполнять задачи, которые ранее казались сложными. Надеюсь, вам всё нравится!";
	document.getElementById('introid').innerHTML = "Здесь я представляю два новых проекта – в целом, один из них является калькулятором, который считает стоимость бетонных плит на дом. Хотя он может показаться простым, я верю, что от этого набора можно получить удовольствие, и он усилен вдохновением сотрудничества.";
	document.getElementById('o1').innerHTML = "Главная";
	document.getElementById('o2').innerHTML = "Проект";
	document.getElementById('o3').innerHTML = "Контакты";
}

function fun5() {
	document.getElementById('contentid').innerHTML = "Hello everyone, and welcome to the new web hub where I create and post projects that I've found creative. My name is Paul and I believe that such places can deliver us more experience, so we will be able to carry out tasks that seemed difficult before! Hope that you like the stuff.";
	document.getElementById('introid').innerHTML = "Here I present two new projects – one of them is basically a calculator that counts cost of concrete per house. Although it may sound simple, I believe that you can enjoy this set, as it shows the power of inspired collaboration.";
	document.getElementById('o1').innerHTML = "Main";
	document.getElementById('o2').innerHTML = "Project";
	document.getElementById('o3').innerHTML = "Contacts";
}

function task1() {
    var text = document.getElementById("task1").value ;
    document.getElementById("task1answer").innerHTML = text ;
}

function task2() {
    var length = parseFloat(document.getElementById("width1").value) ;
    var width = parseFloat(document.getElementById("length1").value) ;
    var material = parseFloat(document.getElementById("mat1").value) ;
    /*tz
    If the square is less than 10 m², the price must be equal to 10.000 * material
    If it's between 10² and 20², the price is counted by formula :

    Normal — (10.000 * material * (1 - (20² - square) / (20² - 10²)) + 5.000 * material * (20² - square) / (20² - 10²)) * square
    Simplified — (2 * (1 - (20 - square) + (20 - square)) * square * material * 500

    If the square is more than 20 m², the price must be equal to 5.000 * material * square

    */
    var square = length * width;
    var price;
    if(square <= 10) {
         price = 10000 * material;
    } else if(square <=20) {
         price = (2 * (1 - (20 - square) + (20 - square))) * square * material * 500 ;
    } else {
         price = 5000 * material * square;
    }
	if(isNaN(price)) {
	price = 0;}
    document.getElementById("task2answer").innerHTML = price ;
    document.getElementById("task2answer2").innerHTML = price / square ;
}