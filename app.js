const fs = require("fs");
const User = require("./user.js");

const callbackFn = () => {
  console.log("success");
};

let userList = new Array();

const petras = new User("Petras");
petras.createPassword("automobilis", "automobilis");
petras.addEmail("petras@gmail.com");
petras.addInfo(48, "stalius", "Birzai");
userList.push(petras);

const jonas = new User("Jonas");
jonas.createPassword("kengura123", "kengura123");
jonas.addEmail("jonas@gmail.com");
jonas.addInfo(39, "mechanikas", "Vilnius");
userList.push(jonas);

const paulius = new User("Paulius");
paulius.createPassword("dviratis123", "dviratis123");
paulius.addEmail("paulius@gmail.com");
paulius.addInfo(25, "teisininkas", "Palanga");
userList.push(paulius);

paulius.addFriend(jonas);
petras.addFriend(paulius);
petras.addFriend(paulius);
petras.addFriend(paulius);




for (i = 0; i < 1; i++) {
  if (!fs.existsSync("./" + userList[i].name + ".txt")) {
    fs.writeFile(
      userList[i].name + ".txt",
      JSON.stringify(userList[i]),
      {},
      callbackFn
    );
  }

  if (userList[i].friendList.length != 0) {
    for (j = 0; j < userList[i].friendList.length; j++) {
      if (!fs.existsSync("./" + userList[i].friendList[j].name + ".txt")) {
        let friend = userList[i].find(f => f == userList[i].friendList[j]);
        fs.writeFile(
          userList[i].friendList[j].name + ".txt",
          JSON.stringify(friend),
          {},
          callbackFn
        );
        console.log("file added");
      }
    }
  }

  console.log(userList[i]);
}
