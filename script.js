//Q1.
function output1(){
const Parent = {
  display: function () {
    console.log(`${this.name} and age is ${this.age}`);
  },
};

const child1 = Object.create(Parent);
child1.name = "Sahil";
child1.age = 10;
child1.display();

const child2 = Object.create(Parent);
child2.name = "Mahesh";
child2.age = 20;
child2.display();
}
//Q2.
function output2(){
const GFather = {
  SayHello: function () {
    console.log("Hello Grand Father!!!");
  },
};

const Father = Object.create(GFather);
Father.hello = function () {
  console.log("Hello Father!!!");
};

const You = Object.create(Father);
You.hi = function () {
  console.log("Hello Yourself!!!");
};

const YourChild = Object.create(You);
YourChild.hey = function () {
  console.log("Hello Child!!!");
};
YourChild.SayHello();
YourChild.hello();
YourChild.hi();
YourChild.hey();
}
//Q3.
function output3(){
const Add = {
    sum : function(arr){
        let result = 0;
        for(let i = 0; i < arr.length ; i++){
            result +=arr[i];
        }
        console.log(result);
    }
}
Add.sum([1,2,3,4,5])
Add.sum([2,4,6,8,10])
}
//Q4.
function output4(){
  let AA=[100,200,300,400,500]
    let res = AA.reduce((acc,curr)=>{
        acc+=curr
        return acc
    },0)
    console.log(res);
}