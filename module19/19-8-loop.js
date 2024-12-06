const mobile = {
    brand: 'samsung',
    price: 39000,
    color: 'black',
    isNew: true
}
//for of : Array;
//for in : object;
for (const prop in mobile) {
    //    console.log(prop);
    console.log(prop, mobile[prop])
}