let contacts = [
  {
    name: "Tyler Van Wyk",
    phone: "(021) 777 7777",
    email: "tylervanwyk.WorkShop.10@yahoo.co.za",
  },
  {
    name: "Raja Nilla",
    phone: "021 563 2899",
    email: "rajanilla.05@yahoo.co.uk",
  },
  {
    name: "Helen Richards",
    phone: "080 288 9280",
    email: "hellenrich.06@yahoo.co.us",
  },
];
contacts.push({
  name: prompt("Enter user name"),
  phone: prompt("Enter user phone"),
  email: prompt("Enter user email"),
});
let last = contacts.length - 1;

console.log(
  `${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`
);
console.log(
  `${contacts[last].name} / ${contacts[last].phone} / ${conacts[last].email.email}`
);


