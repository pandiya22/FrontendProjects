//objects inside a function
const details=(name,Dob)=>{
    const customer={
        name:name,
        dob:Dob,
    };
    let sentence=`Hi,I'm ${customer.name}.I'm born on ${Dob}`;
    return sentence;
};
const det=(customer)=>{
    console.log(customer.ph);
}
let customer={
    email:"pandiya22@gmail.com",
    ph:6369986834,
};
det(customer);
console.log(details("Pandiyaraj","22/09/2006"));