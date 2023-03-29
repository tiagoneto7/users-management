import { describe, it, expect } from "vitest";
import { filterUsers, sortUsers, User } from "./users";

const mockedUsers: User[] = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      city: "Gwenborough",
      zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    companyName: "Google",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      city: "McKenziehaven",
      zipcode: "59590-4157",
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    companyName: "Siemens",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    companyName: "Bmw",
  },
];

describe("users array tests", () => {
  it("sort list by id", () => {
    const sortedList = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          city: "Gwenborough",
          zipcode: "92998-3874",
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        companyName: "Google",
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
          street: "Victor Plains",
          city: "Wisokyburgh",
          zipcode: "90566-7771",
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        companyName: "Bmw",
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address: {
          street: "Douglas Extension",
          city: "McKenziehaven",
          zipcode: "59590-4157",
        },
        phone: "1-463-123-4447",
        website: "ramiro.info",
        companyName: "Siemens",
      },
    ];

    expect(sortUsers("id", mockedUsers)).toEqual(sortedList);
  });

  it("sort list by username", () => {
    const sortedList = [
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
          street: "Victor Plains",
          city: "Wisokyburgh",
          zipcode: "90566-7771",
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        companyName: "Bmw",
      },
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          city: "Gwenborough",
          zipcode: "92998-3874",
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        companyName: "Google",
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address: {
          street: "Douglas Extension",
          city: "McKenziehaven",
          zipcode: "59590-4157",
        },
        phone: "1-463-123-4447",
        website: "ramiro.info",
        companyName: "Siemens",
      },
    ];

    expect(sortUsers("username", mockedUsers)).toEqual(sortedList);
  });

  it("sort list by email", () => {
    const sortedList = [
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address: {
          street: "Douglas Extension",
          city: "McKenziehaven",
          zipcode: "59590-4157",
        },
        phone: "1-463-123-4447",
        website: "ramiro.info",
        companyName: "Siemens",
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
          street: "Victor Plains",
          city: "Wisokyburgh",
          zipcode: "90566-7771",
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        companyName: "Bmw",
      },
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          city: "Gwenborough",
          zipcode: "92998-3874",
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        companyName: "Google",
      },
    ];

    expect(sortUsers("email", mockedUsers)).toEqual(sortedList);
  });

  it("sort list by city", () => {
    const sortedList = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          city: "Gwenborough",
          zipcode: "92998-3874",
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        companyName: "Google",
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address: {
          street: "Douglas Extension",
          city: "McKenziehaven",
          zipcode: "59590-4157",
        },
        phone: "1-463-123-4447",
        website: "ramiro.info",
        companyName: "Siemens",
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
          street: "Victor Plains",
          city: "Wisokyburgh",
          zipcode: "90566-7771",
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        companyName: "Bmw",
      },
    ];

    expect(sortUsers("city", mockedUsers)).toEqual(sortedList);
  });

  it("filters list by searched keyword", () => {
    const expectedUsers = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          city: "Gwenborough",
          zipcode: "92998-3874",
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        companyName: "Google",
      },
    ];

    expect(filterUsers("bret", mockedUsers)).toEqual(expectedUsers);
  });

  it("returns an empty array when none ot the users matches the searched keyword", () => {
    const expectedUsers: User[] = [];

    expect(filterUsers("thisisarandomkeyword", mockedUsers)).toEqual(
      expectedUsers
    );
  });
});
