// // // Old javascript

// // // var names=['Ed','John','Mike'];

// // // var counter=10;

// // // var counter=5;
// // // console.log(counter);

// // // function sayName(){
// // //     var name="Ed";
// // //     console.log(name);

// // // }

// // // sayName();

// // // var name="Ed";

// // // console.log("Hello my name is "+ name);


// // // function getBook(title,author){
// // //     return {
// // //         title:title,
// // //         author:author
// // //     }
// // // }

// // // var user={
// // //     name:'Ed',
// // //     age:25
// // // }
// // // var myName=user.name;
// // // console.log(myName);


// // // function sayName(){
// // //     console.log('Hello I am Rahul');
// // // }

// // // var sayAge=function(){
// // //     console.log('My age is, well i dont wanna tell you');
// // // }

// // // sayName();
// // // sayAge();

// // // var user={
// // //     name:'Rahul',
// // //     age:24,
// // //     sayName:function(){
// // //         console.log('My name is '+this.name);

// // //         var fullName=function(){
// // //             console.log("My name is" +this.name +    "and my age is"+this.age);
// // //         };

// // //         fullName();
// // //     }
    
// // // }
// // // user.sayName();




// // // var book=getBook('Harry Potter','JK');

// // // console.log(book);


// // //ES6

// // // const sayLocation=(location,name)=>{
// // //  return   console.log(`my location is ${location}`);
// // // }

// // // sayLocation('paris');










// // // const list={
// // //     name:'Shopping List',
// // //     items:['Milk','Cow']
// // // }

// // // const {name,items}=list;
// // // console.log(name,items);





// // // const todoList=['Milk','Cow'];

// // // todoList=["Milk"];


// // // let counter=10;

// // // counter=5;



// // // const list=[1,2,3,4,5];
// // // for(let i=0;i<list.length;i++){
// // //     console.log(i);
// // // }
// // // // console.log(i);


// // // const name='Ed';

// // // const age=25;

// // // console.log(`Hello my its "hello" is ${name} amd my age is${age}`);


// // // function getBook(title,author){
// // //     return {
// // //         title,
// // //         author
// // //     }
// // // }

// // // var book=getBook('Harry Potter','JK');

// // // console.log(book);

// // // const user={
// // //     name:'Rahul',
// // //     age:24,
// // //     sayName:function(){
// // //         console.log(`My name is${this.name}`);
// // //         const fullName=()=>{
// // //             console.log(`My name is ${this.name} and my age is ${this.age}`);
// // //         };
// // //         fullName();
// // //     }
// // // };



// // // user.sayName();

// // // button.addEventListener('click',function(){
// // //     var that=this;
// // //     var addFade=function(){
// // //          this.style.display="none";
// // //    };
// // // });

// // // old js

// // // function multiply(x,y){
// // //     var a=x||1;
// // //     var b=y||1;
// // //    console.log(a*b);
// // // }

// // // multiply(10,20);

// // // ES6

// // // const add=(c=1,d=1) =>{
// // //     console.log(c+d);
// // // }

// // // add();



// // const shoppingList=['Milk','cow','Eggs','Banans','Choco'];

// // // // forEch
// // // shoppingList.forEach((product,index)=>{
// // //   console.log(`The index is ${index} and the product is ${product}`);
// // // });

 
// // // Map
// // const newList=shoppingList.map(item=>  item + "new");


// // console.log(newList)

// // // filter
// // const filterList=shoppingList.filter(item=>item!=='Eggs');

// // console.log(filterList);

// function Person(name,age,hairColor){
//     this.name=name;
//     this.age=age;
//     this.hairColor=hairColor;

// }

// Person.prototype.sayName=function(){
//     console.log("My name is"+this.name);
// };

// function Ed(occupation,hobbys,name,age,hairColor){
//     Person.call(this,name,age,hairColor);
//     this.occupation=occupation;
//     this.hobbys=hobbys;

// }

// const person=new Ed('Dev','Dancing','Edwin',25,'notNice');
// console.log(person);



// class ShoopingList{
//     constructor(items,nr){
//         this.items=items;
//         this.nr=nr;
//     }

//     sayList(){
//         console.log(this.items);
//     }
// }


// const myList=new ShoopingList(["Milk, Chocho, Redbull"],3);

// myList.sayList();


// console.log(myList);


// class Product extends ShoopingList{
//     constructor(items,nr,amount,cost){
//         super(items,nr);
//         this.amount=amount;
//         this.cost=cost;
//     }
// }

// const product=new Product(['Redbull, Choclolate, Candy'],3,2,20);

// console.log(product);

// product.sayList();


// function getData(data,callBack){
//      setTimeout(()=>{
//          console.log('reading from the database');
//          callBack({data:data});
//      },2000);
// }

// getData(5,function(data){
//     console.log(data);
// })

// console.log('finish');



const prom=new Promise((resolve,reject){
    setTimeout(()=>{
        reject(new Error('Something went wrong'));
    },2000);
});

prom.then(data=>{
    console.log(data);
}).catch(err=>console.log(err));






















