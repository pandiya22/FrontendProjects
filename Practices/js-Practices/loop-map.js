//loop
numbers=[1,2,3,4];
const double=(list)=>{
    output=[];

for(num of numbers){
    output.push(num*2);
}
return output;
};
console.log("output is:",double(numbers));
//map function
let phone={
    name:"moto",
    ram:"5G",
    network:"5G",
}
console.log("phone:",phone.ram);
let phonedetails=[
    {
        name:"vivo",
        ram:"8Gb",
        network:"5G",

    },
     {
        name:"oppo",
        ram:"8Gb",
        network:"4G",
        
    },
     {
        name:"samsung",
        ram:"8Gb",
        network:"3G",
        
    },
];
phonedetails.map((phone)=>
    {
        let intro= `The name of the phone is ${phone.name}. The ram of the phone is ${phone.ram}`;

        console.log("phone intro:",intro);

});
//filter function
list=[1,2,3,4,5];
let filteredelements=list.filter((num)=>num>2 && num<5);
console.log(filteredelements);
//reduce function
numbers=[1,2,3]
let reduceelements=numbers.reduce((num)=>num*2);
console.log(reduceelements);

