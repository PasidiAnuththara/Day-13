// console.log("Hii");

// localStorage.clear();

// localStorage.setItem("name","Abhishu Krishel");
// let Cname = localStorage.getItem("name");
// console.log(Cname);

const customerList = [
    {
        name : "Pasidi",
        age : 20,
        address : "negombo"
    },
    {
        name : "Nethra",
        age : 20,
        address : "ambilipitiya"
    },
    {
        name : "Abhishu",
        age : 3,
        address : "Japan"
    },
    {
        name : "Esh",
        age : 5,
        address : "Dalupatha"
    },
];

let arCustomer =JSON.stringify(customerList);
localStorage.setItem("customerList",arCustomer);
let listCustomer = localStorage.getItem("customerList");
console.log(JSON.parse(listCustomer));

