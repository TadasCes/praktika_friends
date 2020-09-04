const fs = require('fs');
const User = require('./user.js');


const callbackFn = () => {
    console.log("success");
}

let userList = new Array();

const petras = new User('Petras');
petras.createPassword("automobilis", "automobilis");
petras.addEmail("petras@gmail.com");
petras.addInfo(48, "stalius", "Birzai");
userList.push(petras);

const jonas = new User('Jonas');
jonas.createPassword("kengura123", "kengura123");
jonas.addEmail("jonas@gmail.com");
jonas.addInfo(39, "mechanikas", "Vilnius");
userList.push(jonas);


const paulius = new User('Paulius');
paulius.createPassword("dviratis123", "dviratis123");
paulius.addEmail("paulius@gmail.com");
paulius.addInfo(25, "teisininkas", "Palanga");
userList.push(paulius);


paulius.addFriend(jonas);
petras.addFriend(paulius);
petras.addFriend(paulius);
petras.addFriend(paulius);

for (i = 0; i < userList.length; i++) {
    console.log(userList[i]);
}



fs.writeFile('users.txt', JSON.stringify(petras), {}, callbackFn);