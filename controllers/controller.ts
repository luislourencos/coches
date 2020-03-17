
let arrCar: { wheels:Wheel[], plate: string, brand: string, color: string } [] = [];
let arrCarBrand:string[] =['Abarth','Alfa Romeo','Aston Martin','Audi','Bentley','BMW','Cadillac','Caterham','Chevrolet','Citroen','Dacia','Ferrari','Fiat','Ford','Honda','Infiniti','Isuzu','Iveco','Jaguar','Jeep','Kia','KTM','Lada','Lamborghini','Lancia','Land Rover','Lexus','Lotus','Maserati','Mazda','Mercedes-Benz','Mini','Mitsubishi','Morgan','Nissan','Opel','Peugeot','Piaggio','Porsche','Renault','Rolls-Royce','Seat','Skoda','Smart','SsangYong','Subaru','Suzuki','Tata','Tesla','Toyota','Volkswagen','Volvo'];    
let plate = <HTMLInputElement>document.getElementById('plate-input');
let color  = <HTMLInputElement>document.getElementById('color-input');
let brand  = <HTMLInputElement>document.getElementById('brand-input');
let plateResp = <HTMLInputElement>document.getElementById('plate-result');
let colorResp = <HTMLInputElement>document.getElementById('color-result');
let brandResp = <HTMLInputElement> document.getElementById('brand-result');
let create = <HTMLInputElement> document.getElementById('create');
let creatResp =<HTMLInputElement> document.getElementById('create-result');
let plateSelect =<HTMLInputElement> document.getElementById('plate-select');

plate.addEventListener('change', validatePlate);
color.addEventListener('change', validateColor);
brand.addEventListener('change', validateBrand);
create.addEventListener('click',validate);

    
function validatePlate() {
    let value: boolean;
    let plateV = /^(\d{4})([A-Z]){3}$/;
    if (!plateV.test(plate.value)){
        plate.style.border = '2px solid red';
        plateResp.innerHTML ='Matricula incorrecta!';
        plateResp.style.color='red';
        value = false;
    } else {
        plate.style.border = '2px solid green';
        plateResp.innerHTML ='Matricula correcta!';
        plateResp.style.color='green';
        value = true;
    }
    return value;
}

function validateColor(){
    let value:boolean = false;
    if (color.value===""){
        color.style.border = '2px solid red';
        colorResp.innerHTML ='Selecione un color!';
        colorResp.style.color='red';
        value = false;
    } else {
        color.style.border = '2px solid green';
        colorResp.innerHTML ='Color correcto!';
        colorResp.style.color='green';
        value = true;
    }
    return value;
}

function validateBrand(){
    let value:boolean=false;
    arrCarBrand.forEach(element => {
        if(element.toLowerCase()===brand.value.toLowerCase()){
            brand.style.border = '2px solid green';
            brandResp.innerHTML ='Marca correcta!';
            brandResp.style.color='green';
            value = true;
        }
    });
    if (!value){
        brand.style.border = '2px solid red';
        brandResp.innerHTML ='Esta marca no está contemplada!';
        brandResp.style.color='red';
    }
    return value;
}

function createCar(plate:string,brand:string,color:string){
    let car=new Car(plate,color,brand);
    mySelect(car.plate);
    arrCar.push(car);
}
function mySelect(car:any) {
    var x = <HTMLInputElement>document.getElementById("plate-select");
    var option = document.createElement("option");
    option.text = car;
    x.appendChild(option);
  }
function validate(){
    if(validatePlate()&&validateColor()&&validateBrand()){
    createCar(plate.value,brand.value,color.value);
    
    creatResp.innerHTML ='Coche Creado!';
    creatResp.style.color='green';
    } else {
        creatResp.innerHTML ='ERROR!';
        creatResp.style.color='red';
    }
    setTimeout(function(){  
        plate.value = '' ;
        color.value  = '';
        brand.value = '';
        plateResp.innerHTML='';
        colorResp.innerHTML='';
        brandResp.innerHTML=''; 
        creatResp.innerHTML=''; 
     }, 1000);
     console.log(arrCar);
}

   
//****************** WHEELS ********************
let wheel1= <HTMLInputElement>document.getElementById('wheel1');
let wheel2  = <HTMLInputElement>document.getElementById('wheel2');
let wheel3  = <HTMLInputElement>document.getElementById('wheel3');
let wheel4 = <HTMLInputElement>document.getElementById('wheel4');
let wheel1Resp = <HTMLInputElement>document.getElementById('wheel1-result');
let wheel2Resp = <HTMLInputElement>document.getElementById('wheel2-result');
let wheel3Resp = <HTMLInputElement>document.getElementById('wheel3-result');
let wheel4Resp = <HTMLInputElement>document.getElementById('wheel4-result');
let putWheel =<HTMLInputElement>document.getElementById('putWheel');
let putWheelResp =<HTMLInputElement>document.getElementById('putWheel-result');
let brandWheel1 =<HTMLInputElement>document.getElementById('brandWheel1');
let brandWheel2 =<HTMLInputElement>document.getElementById('brandWheel2');
let brandWheel3 =<HTMLInputElement>document.getElementById('brandWheel3');
let brandWheel4 =<HTMLInputElement>document.getElementById('brandWheel4');

plateSelect.addEventListener('change',function(){
    if(plateSelect.value===''){
        plateSelect.style.border = '2px solid red';
    }else{
        plateSelect.style.border = '2px solid green';
    }
});

wheel1.addEventListener('change', function(){
    validateWheel (wheel1,wheel1Resp)
});
wheel2.addEventListener('change',  function(){
    validateWheel (wheel2,wheel2Resp)
});
wheel3.addEventListener('change',  function(){
    validateWheel (wheel3,wheel3Resp)
});
wheel4.addEventListener('change',  function(){
    validateWheel (wheel4,wheel4Resp)
});
putWheel.addEventListener('click',validateAllWheel);

function validateWheel (wheel:any,wheelResp:any){
    let value:boolean;
        if(parseFloat(wheel.value) > 0.4 && parseFloat(wheel.value) < 2){
            wheel.style.border ='2px solid green'
            wheelResp.innerHTML ='Valor correcto!!'
            value = true;
        }else{
            wheel.style.border ='2px solid red'
            wheelResp.innerHTML ='El valor tiene que estar entre 0.4 y 2!'
            value = false;
        }
        return value;
}


function validateAllWheel (){
    if(validateWheel(wheel1,wheel1Resp) && 
        validateWheel(wheel2,wheel2Resp) &&
        validateWheel(wheel3,wheel3Resp) &&
        validateWheel(wheel4,wheel4Resp)&& 
        plateSelect.value != '')
    {
        arrCar.forEach(element => {
            if(element.plate === plateSelect.value){ // utilizando el metodo??
                let x:any=element;// muy inportante para no dar error
                x.addWheel(new Wheel(parseFloat(wheel1.value),brandWheel1.value));
                x.addWheel(new Wheel(parseFloat(wheel2.value),brandWheel2.value));
                x.addWheel(new Wheel(parseFloat(wheel3.value),brandWheel3.value));
                x.addWheel(new Wheel(parseFloat(wheel4.value),brandWheel4.value));
                // element.wheels.push(new Wheel(parseFloat(wheel1.value),brandWheel1.value))
                // element.wheels.push(new Wheel(parseFloat(wheel2.value),brandWheel2.value)) 
                // element.wheels.push(new Wheel(parseFloat(wheel2.value),brandWheel3.value)) 
                // element.wheels.push(new Wheel(parseFloat(wheel2.value),brandWheel4.value))   
            }
        });
        putWheelResp.innerHTML='Ruedas creadas!';
        putWheelResp.style.color ='green'
    }else{
        putWheelResp.innerHTML='ERROR! deven todos los campos estar de color verde'
        putWheelResp.style.color ='red'
    }
    setTimeout(function(){  
        wheel1.value = '' ;
        wheel2.value  = '';
        wheel3.value = '';
        wheel4.value='';
        wheel1.innerHTML = '' ;
        wheel2.innerHTML = '';
        wheel3.innerHTML = '';
        wheel4.innerHTML='';
        putWheelResp.innerHTML=''
     }, 1000);
    console.log(arrCar)
}    

//************** WRITE RESULTS *******************

let searchInput =<HTMLInputElement>document.getElementById('search-input');
let search =<HTMLInputElement>document.getElementById('search');
let searchResult =<HTMLInputElement>document.getElementById('search-result');


search.addEventListener('click',writeCar);

function writeCar(){
    let txt:string ='';
    let value:boolean = false;
    let num:number =1;
    arrCar.forEach(element => {
            if(element.plate === searchInput.value){ // utilizando el metodo??
                txt += 'COCHE:<br>'
                txt +='Matricula: '+ element.plate +' - ' + element.brand + ' - ' + element.color + '<br>';
                txt += 'RUEDAS : <br>'
                element.wheels.forEach(element=>{
                    txt += 'Rueda numero '+num +' : <br>Marca : '+ element.brand + '- diametro : ' + element.diameter + '<br>'
                    num++;
                });
                value=true;
            }
        });
    if(!value){
        txt+='No se ha encontrado ningun coche con esta matricula!!'
    }    

    searchResult.innerHTML = txt;
}
            
