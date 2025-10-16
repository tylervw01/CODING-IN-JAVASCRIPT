let contacts = [{
    name: "Tyler Van Wyk",
    phone: "(021) 719 6429",
    email: "TylerVanWyk.WorkShop.10@Yahoo.co.za"
}, {
    name: "Raja Nilla",
    Phone: "021 563 2899",
    email: "RajaNilla.05@yahoo.co.uk",
}, {
    name: "Helen Richards",
    phone: "0800 288 928",
    email: "HellenRich.06@yahoo.co.us",
}];
contacts.push({
    name: prompt ("Enter user name"),
    phone: prompt ("Enter user phone"),
    email: prompt ("Enter user email"),
});
let last = contacts.length - 1;

console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log(`${contacts[last].name} / ${contacts[last].phone} / ${conacts[last].email.email}`);