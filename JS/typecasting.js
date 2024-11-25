// implicit tycasting (internally)
console.log(2+"3"+3+"priya");

console.log(2-"3"); //-1

let a=2/"3";
console.log(a);
console.log(typeof a);

console.log(2+"3"-1*2/1);

console.log(23+"33"*1-"44");

console.log("str"-11+10);
console.log(null-null);

// when there is undefined its NaN
console.log(undefined+10);


// minus always gives a number
// the value as string so minus can convert characters of string to number so NaN
console.log(33-"hi"); //NaN= not a number


// value as number so ans is 23
console.log(33-"10");//23

console.log(100-null);//100  null=0



// explicit typecastin (external)

console.log("explicit typecasting");

let num=String(100);
console.log(num,typeof num);


// in boolean except 0 all are true
let bool=Boolean(0);
console.log(bool,typeof bool);




// monday = implicit typecasting
console.log("monday class");
console.log(20+2);//22

let num1=22+"2";
console.log(num1,typeof num1);//222,string

console.log(null-11);//11

console.log(undefined-11); //Nan

// explicity typecasting
let myNumber=String(500);
console.log(myNumber,typeof myNumber);//500,String

let myNumber1=Boolean(100);
console.log(myNumber1,typeof myNumber1);//true Boolean

let myNumber2=BigInt(100);
console.log(myNumber2,typeof myNumber2);//100n Bigint

// cannot convert to BigInt
let str=BigInt("100");
console.log(str,typeof str);

// strictly equals to checks the dats type ant values
console.log("5"==="5");

// double equals checks only the values
console.log("5"=="5");

let n=BigInt(null+0);
console.log(n,typeof n);

let b=Boolean(BigInt(String(10)));
console.log(b,typeof b);

console.log(44+"10"-10*2-null);

console.log(null/100+null+10);

console.log("200"-100);

console.log(30+null+"20"/20+null-"1");

let x=Boolean("0");
console.log(x,typeof x);

// console.log(100n-null); //error

// console.log("hello"== hello);

console.log("hello"=="hello");

console.log(10+null+"10");
console.log("GE"+"100"-200/"200"+100);

















