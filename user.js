const { json } = require("express");

class User {
  constructor(name) {
    this.name = name;
    this.friendList = [];
  }

  addFriend(friend) {
      let friendName = "";
      if (friend.name == undefined) {
          friendName = friend;
      } else {
          friendName = friend.name;
      }

    if (!this.friendList.find(fr => fr === friendName)) {
        this.friendList.push(friendName);
        if (friend.addFriend) {
            friend.addFriend(this.name)
        }
    } 
  }

  createPassword(pwd1, pwd2) {
    if (pwd1.length <= 8) {
      throw new Error("Password must be at least 8 characters long");
    } else {
      if (pwd1 !== pwd2) {
        throw new Error("Passwords must match, try again");
      } else {
        this.password = pwd1;
      }
    }
  }

  addEmail(email) {
    if (this.email == undefined) {
      if (email != "") {
        this.email = email;
      } else {
        throw new Error("Email is invalid");
      }
    } else {
      throw new Error("Email already defined");
    }
  }

  changeEmail(newEmail) {
    if (this.email != undefined) {
      if (this.email == newEmail) {
        throw new Error("New email can't be old email");
      } else {
        if (newEmail == "") {
          throw new Error("Email is invalid");
        } else {
          this.email = newEmail;
        }
      }
    }
  }

  addInfo(age, job, city) {
    if (age <= 0) {
      throw new Error("Age is not valid");
    } else {
      if (Number.isInteger(age)) {
        this.age = age;
      } else {
        throw new Error("Invalid input");
      }
    }

    if (job == "") {
      throw new Error("Job input is invalid");
    } else {
      this.job = job;
    }

    if (city == "") {
      throw new Error("Job input is invalid");
    } else {
      this.city = city;
    }
  }

  changeInfo(newAge, newJob, newCity) {
    if (age <= 0) {
        throw new Error("Age is not valid");
      } else {
        if (Number.isInteger(age)) {
          this.age = newAge;
        } else {
          throw new Error("Invalid input");
        }
      }
  
      if (job == "") {
        throw new Error("Job input is invalid");
      } else {
        this.job = newJob;
      }
  
      if (city == "") {
        throw new Error("Job input is invalid");
      } else {
        this.city = newCity;
      }
  }
}

module.exports = User;
