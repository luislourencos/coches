"use strict";
var arrCar = [];
var arrCarBrand = ['Abarth', 'Alfa Romeo', 'Aston Martin', 'Audi', 'Bentley', 'BMW', 'Cadillac', 'Caterham', 'Chevrolet', 'Citroen', 'Dacia', 'Ferrari', 'Fiat', 'Ford', 'Honda', 'Infiniti', 'Isuzu', 'Iveco', 'Jaguar', 'Jeep', 'Kia', 'KTM', 'Lada', 'Lamborghini', 'Lancia', 'Land Rover', 'Lexus', 'Lotus', 'Maserati', 'Mazda', 'Mercedes-Benz', 'Mini', 'Mitsubishi', 'Morgan', 'Nissan', 'Opel', 'Peugeot', 'Piaggio', 'Porsche', 'Renault', 'Rolls-Royce', 'Seat', 'Skoda', 'Smart', 'SsangYong', 'Subaru', 'Suzuki', 'Tata', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo'];
var plate = document.getElementById('plate-input');
var color = document.getElementById('color-input');
var brand = document.getElementById('brand-input');
var plateResp = document.getElementById('plate-result');
var colorResp = document.getElementById('color-result');
var brandResp = document.getElementById('brand-result');
var create = document.getElementById('create');
var creatResp = document.getElementById('create-result');
var plateSelect = document.getElementById('plate-select');
plate.addEventListener('change', validatePlate);
color.addEventListener('change', validateColor);
brand.addEventListener('change', validateBrand);
create.addEventListener('click', validate);
function validatePlate() {
    var value;
    var plateV = /^(\d{4})([A-Z]){3}$/;
    if (!plateV.test(plate.value)) {
        plate.style.border = '2px solid red';
        plateResp.innerHTML = 'Matricula incorrecta!';
        plateResp.style.color = 'red';
        value = false;
    }
    else {
        plate.style.border = '2px solid green';
        plateResp.innerHTML = 'Matricula correcta!';
        plateResp.style.color = 'green';
        value = true;
    }
    return value;
}
function validateColor() {
    var value = false;
    if (color.value === "") {
        color.style.border = '2px solid red';
        colorResp.innerHTML = 'Selecione un color!';
        colorResp.style.color = 'red';
        value = false;
    }
    else {
        color.style.border = '2px solid green';
        colorResp.innerHTML = 'Color correcto!';
        colorResp.style.color = 'green';
        value = true;
    }
    return value;
}
function validateBrand() {
    var value = false;
    arrCarBrand.forEach(function (element) {
        if (element.toLowerCase() === brand.value.toLowerCase()) {
            brand.style.border = '2px solid green';
            brandResp.innerHTML = 'Marca correcta!';
            brandResp.style.color = 'green';
            value = true;
        }
    });
    if (!value) {
        brand.style.border = '2px solid red';
        brandResp.innerHTML = 'Esta marca no está contemplada!';
        brandResp.style.color = 'red';
    }
    return value;
}
function createCar(plate, brand, color) {
    var car = new Car(plate, color, brand);
    mySelect(car.plate);
    arrCar.push(car);
}
function mySelect(car) {
    var x = document.getElementById("plate-select");
    var option = document.createElement("option");
    option.text = car;
    x.appendChild(option);
}
function validate() {
    if (validatePlate() && validateColor() && validateBrand()) {
        createCar(plate.value, brand.value, color.value);
        creatResp.innerHTML = 'Coche Creado!';
        creatResp.style.color = 'green';
    }
    else {
        creatResp.innerHTML = 'ERROR!';
        creatResp.style.color = 'red';
    }
    setTimeout(function () {
        plate.value = '';
        color.value = '';
        brand.value = '';
        plateResp.innerHTML = '';
        colorResp.innerHTML = '';
        brandResp.innerHTML = '';
        creatResp.innerHTML = '';
    }, 5000);
    console.log(arrCar);
}
//****************** WHEELS ********************
var wheel1 = document.getElementById('wheel1');
var wheel2 = document.getElementById('wheel2');
var wheel3 = document.getElementById('wheel3');
var wheel4 = document.getElementById('wheel4');
var wheel1Resp = document.getElementById('wheel1-result');
var wheel2Resp = document.getElementById('wheel2-result');
var wheel3Resp = document.getElementById('wheel3-result');
var wheel4Resp = document.getElementById('wheel4-result');
var putWheel = document.getElementById('putWheel');
var putWheelResp = document.getElementById('putWheel-result');
var brandWheel1 = document.getElementById('brandWheel1');
var brandWheel2 = document.getElementById('brandWheel2');
var brandWheel3 = document.getElementById('brandWheel3');
var brandWheel4 = document.getElementById('brandWheel4');
plateSelect.addEventListener('change', function () {
    if (plateSelect.value === '') {
        plateSelect.style.border = '2px solid red';
    }
    else {
        plateSelect.style.border = '2px solid green';
    }
});
wheel1.addEventListener('change', function () {
    validateWheel(wheel1, wheel1Resp);
});
wheel2.addEventListener('change', function () {
    validateWheel(wheel2, wheel2Resp);
});
wheel3.addEventListener('change', function () {
    validateWheel(wheel3, wheel3Resp);
});
wheel4.addEventListener('change', function () {
    validateWheel(wheel4, wheel4Resp);
});
putWheel.addEventListener('click', validateAllWheel);
function validateWheel(wheel, wheelResp) {
    var value;
    if (parseFloat(wheel.value) >= 0.4 && parseFloat(wheel.value) <= 2) {
        wheel.style.border = '2px solid green';
        wheelResp.innerHTML = 'Valor correcto!!';
        value = true;
    }
    else {
        wheel.style.border = '2px solid red';
        wheelResp.innerHTML = 'El valor tiene que estar entre 0.4 y 2!';
        value = false;
    }
    return value;
}
function validateAllWheel() {
    if (validateWheel(wheel1, wheel1Resp) &&
        validateWheel(wheel2, wheel2Resp) &&
        validateWheel(wheel3, wheel3Resp) &&
        validateWheel(wheel4, wheel4Resp) &&
        plateSelect.value != '') {
        arrCar.forEach(function (element) {
            if (element.plate === plateSelect.value) { // utilizando el metodo??
                // element.addWheel(new Wheel(parseFloat(wheel1.value),brandWheel1.value)) ???
                element.wheels.push(new Wheel(parseFloat(wheel1.value), brandWheel1.value));
                element.wheels.push(new Wheel(parseFloat(wheel2.value), brandWheel2.value));
                element.wheels.push(new Wheel(parseFloat(wheel2.value), brandWheel3.value));
                element.wheels.push(new Wheel(parseFloat(wheel2.value), brandWheel4.value));
            }
        });
        putWheelResp.innerHTML = 'Ruedas creadas!';
        putWheelResp.style.color = 'green';
    }
    else {
        putWheelResp.innerHTML = 'ERROR! deven todos los campos estar de color verde';
        putWheelResp.style.color = 'red';
    }
    setTimeout(function () {
        wheel1.value = '';
        wheel2.value = '';
        wheel3.value = '';
        wheel4.value = '';
        wheel1.innerHTML = '';
        wheel2.innerHTML = '';
        wheel3.innerHTML = '';
        wheel4.innerHTML = '';
    }, 5000);
    console.log(arrCar);
}
//************** WRITE RESULTS *******************
var searchInput = document.getElementById('search-input');
var search = document.getElementById('search');
var searchResult = document.getElementById('search-result');
search.addEventListener('click', writeCar);
function writeCar() {
    var txt = '';
    var value = false;
    var num = 1;
    arrCar.forEach(function (element) {
        if (element.plate === searchInput.value) { // utilizando el metodo??
            txt += 'COCHE:<br>';
            txt += element.plate + ' ' + element.brand + ' ' + element.color + '<br>';
            txt += 'RUEDAS : <br>';
            element.wheels.forEach(function (element) {
                txt += 'Rueda numero ' + num + ' : <br>Marca : ' + element.brand + '- diametro : ' + element.diameter + '<br>';
                num++;
            });
            value = true;
        }
    });
    if (!value) {
        txt += 'No se ha encontrado ningun coche con esta matricula!!';
    }
    searchResult.innerHTML = txt;
}
