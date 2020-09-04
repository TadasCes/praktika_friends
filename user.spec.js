const User = require("./user.js");
const e = require("express");

describe("#User", () => {
  let u = null;

  beforeEach(() => {
    u = new User("Vardenis");
  });

  test("Password correct", () => {
    u.createPassword("automobilis", "automobilis");
    expect(u.password).toEqual("automobilis");
    expect(u.password.length).toBeGreaterThanOrEqual(8);
  });

  test("Password does not match", () => {
    expect(() => {
      u.createPassword("automobilis", "automobilis_zalias");
    }).toThrow(Error);
  });

  test("Password too short", () => {
    expect(() => {
      u.createPassword("a", "a");
    }).toThrow(Error);
  });

  test("Email added successfully", () => {
    u.addEmail("user@gmail.com");
    expect(u.email).toBe("user@gmail.com");
  });

  test("Email is invalid", () => {
    expect(() => {
      u.addEmail("");
    }).toThrow(Error);
  });

  test("Email already exists", () => {
    u.email = "user@gmail.com";
    expect(() => {
      u.addEmail("email@gmail.com");
    }).toThrow(Error);
  });

  test("New email can't be same as old email", () => {
    u.email = "user@gmail.com";
    expect(() => {
      u.changeEmail("user@gmail.com");
    }).toThrow(Error);
  });

  test("New email is invalid", () => {
    u.email = "user@gmail.com";
    expect(() => {
      u.changeEmail("");
    }).toThrow(Error);
  });

  test("Email changed", () => {
    u.email = "user@gmail.com";
    u.changeEmail("new@gmail.com")
    expect(u.email).toBe("new@gmail.com");
  });

  test("Age added successfully", () => {
    u.addInfo(25, "a", "a");
    expect(u.age).toBe(25);
  });

  test("Age is not valid", () => {
    expect(() => {
        u.addInfo(-25, "a", "a");
    }).toThrow(Error);
  });

  test("Job input is not valid", () => {
    expect(() => {
        u.addInfo("25", "", "a");
    }).toThrow(Error);
  });

  test("City input is not valid", () => {
    expect(() => {
        u.addInfo("25", "a", "");
    }).toThrow(Error);
  });

  test("Friend added successfully", () => {
    const other = new User('other');
    u.addFriend(other);
    expect(u.friendList).toContainEqual(other);
  })
});
