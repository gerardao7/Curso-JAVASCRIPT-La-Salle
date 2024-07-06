// usernamen es una variable que tiene dentro una string
username = "Gerardo";
userSurname = "Alvarez";


userTitle = "Diseñador";

console.log("userName");
console.log("userSurname");
console.log("userTitle");

console.log(userName + userTitle + userSurname)
console.log(userName + " " + userTitle + " " + userSurname)
console.log(userName + espacio + userSurname + espacio + userSurname)

console.log("¿Que tal estas, $(username)?");

userAge = 33; //Number
userHasHair = false; //Boolean



a = 1;
b = 2;

console.log(a,b); // 2, 1


c = a;
a = b;
b = c;

console.log(a,b)



// -------------------------------

// Transformacion de tipos de variables

const PI = "3,1415"
radi = 4

console.log("el area del circulo es: " + PI*radi**2");


cercle = {
    radi: "4 metros",
    area: PI*this.radi**2 + "metros cuadrados"
}

console.log(cercle);

data = {
    data0: PI,
    data1: pasrseFloat(PI),
    data2: parseInt(PictureInPictureEvent),
    data3: radi,
    data4: radi.toString(PI)
}
console.log(data.data0, typeof data0);
console.log(data.data1, typeof data1);
console.log(data.data2, typeof data2);
console.log(data.data3, typeof data3);
console.log(data.data4, typeof data4);
