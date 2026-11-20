// console.log("Hii");

// localStorage.clear();

// localStorage.setItem("name","Abhishu Krishel");
// let Cname = localStorage.getItem("name");
// console.log(Cname);

/*const customerList = [
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
console.log(JSON.parse(listCustomer));*/


const customerArray = [];

function btnaddCustomer() {
    let Cid = document.getElementById("customerId").value;
    let CName = document.getElementById("customerName").value;
    let CAge = document.getElementById("customerAge").value;
    let CAddress = document.getElementById("customerAddress").value;

    const customer= {
        cusId : Cid,
        cusName : CName,
        cusAge : CAge,
        cusAddress : CAddress
    }
    saveCustomerLocalDb(customer);
}

function saveCustomerLocalDb(customer) {
    if (localStorage.getItem('customerList')) {
        console.log(true);
        let arOfCustomers = JSON.parse(localStorage.getItem("customerList"));
        arOfCustomers.push(customer);

        localStorage.setItem("customrList",JSON.stringify(arOfCustomers));        
    } else {
        console.log(false);
        const customerList = []
        customerList.push(customer);
        let arCustomer = JSON.stringify(customerList);
    }
}