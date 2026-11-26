// console.log("Hello, World!");
//variable declaration and initialization of var let const
// var a;
// a=20;
// a="kamal";
// console.log(a);
//reinitialization of b
// let b=10;
// b=25
// console.log(b);

//cannot reinitialization of c
// const c=30;
// console.log(c);

// var a=10;
// var b=20;
// var c=a+b;
// console.log(c);
// var a=10;
// var b="10";
// console.log(a==b);
// console.log(a===b);
//datatype primitive()
// var mark=10;
// var name="kamal";
// var present=true;
// var bigInt=BigInt(123456789n);
// var sym=Symbol("h1");
// var a=10;
// var b= null;
// console.log(typeof mark);
// console.log(typeof name);
// console.log(typeof present);
// console.log(typeof bigInt);
// console.log(typeof sym);    
// console.log(typeof a);
// console.log(typeof b);
//datatype non primitive()

// var arr=[10,20,30,40,50];
// console.log(typeof arr);
// varobj={
//     name:"kamal",
//     dep :"ECE",
// }
// console.log(typeof obj);

// var flag=false;
// if(flag){
//     var a=10;
//     console.log("if condition");
// }
// console.log(a);
//if else statement

// var num=10;
// if(num%2 ==0){
//     console.log(num + " is an even number");

// } else{
//     console.log(num + " is an odd number");
// }
// var marks=10;
// if(marks>=90){
//     console.log("O grade");
// }else if(marks>=80){
//     console.log("A grade");
// }else if(marks>=70){
//     console.log("B grade");
// }else if(marks>=60){
//     console.log("C grade");
// } else if(marks>=50){
//     console.log("F grade");
// } else{
//     console.log("Fail");
// }

// function add(a,b){
//     console.log(a+b);
// }
// add(a,b);
//  var sub=()=>{
//     console.log(a-b);

//  }
//  sub();

//switch case statement
// var day=3;
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break; 
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }
// var arr=[1,2,3,4,5];
// var mulTwo=arr.map((n)=> n*2);
// console.log(mulTwo);
// var evenNum=arr.filter((n)=> n%2==0);
// console.log(evenNum);
// var sum=arr.reduce((acc,n)=> acc+n,0);
// console.log(sum);
// var evensum=arr.filter((n)=> n%2==0).reduce((acc,n)=> acc+n,0);
// console.log(evensum);
// var eventotal=arr.map((ele)=> ele*2)
// .filter((ele)=> ele%2==0)
// .reduce((acc,n)=> acc+n,0);
// console.log(eventotal);
// var arr=[1,2];
// var new_arr=[...arr,3,4,5];
// console.log(new_arr);
// var stud=[{
//     name:"kamal",
//     dep:"ECE",
//     marks:90
// },
// { 
//     name:"kumar",
//     dep:"CSE",
//     marks:80
// }];
//spread operator
//  var new_stud=[...stud,{
//     name:"karthik",
//     dep:"EEE",
//     marks:70 
// }
// ];
// console.log(new_stud);
var [m1,m2,m3,m4,m5]=[91,92,93,94,95];
console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);
console.log(m5);
// var student = {
//     name: "Arvind",
//     email: "Arvind@example.com",
//     mobile: 9876543210,
//     mark: 90,
//     present: true
// };

// var { name, email, mobile, mark, present } = student;

// console.log(name);
// console.log(email);
// console.log(mobile);
// console.log(mark);
// console.log(present);

// var arr = [1,2,3,4,5];

// for(let ind in arr){
//     console.log(ind);
// }
// console.log("**********");
// for(let val of arr){
//     console.log(val);
// }

// var obj = {
//      name: "Arvind",
//      email: "Arvind@example.com",
//      mobile: 9876543210,
//      mark: 90,
//      present: true
// };

// for(let key in obj){
//     console.log(key + " : " + obj[key]);
// }

//callback function

const result = (message) => {
    console.log(message);
}

const add = (a,b,result) => {
    result(a+b);
}

add(10,20,result);
const promise = new Promise((resolve, reject) => { 
 var success = true;
 if(success){
     return resolve("Api Works");
} else {
    return reject("fetch  Failed");
}
})
promise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});
setTimeout(() => {
    console.log("Hello everyone!!!");
})
const getData = async () => {
    setTimeout(async () => {
        try {       
       const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
        }

        catch (error) {
            console.log(error);
        }           
    }, 1000);
}
getData();