export interface User {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  address: Address;
  companyName: string;
}

export interface Address {
  city: string;
  street: string;
  zipcode: string;
}

interface sortbyProperties {
  username: string;
  email: string;
  id: string;
  city: string;
}

export const findSelectedUser = (
  id: string | null,
  users: User[] | undefined
) => {
  if (!id || !users) return undefined;

  return users.find((user: User) => user.id === parseInt(id));
};

export const sortUsers = (
  property: string,
  users: User[] | undefined
): User[] | undefined => {
  if (!users) return undefined;

  if (property === "city") {
    return sortUsersByCity(users);
  } else {
    return sortUsersByProperty(property as keyof sortbyProperties, users);
  }
};

export const sortUsersByProperty = (
  property: keyof sortbyProperties,
  users: User[]
): User[] => {
  let sortedUsers: User[] = [...users];
  if (property !== "city")
    sortedUsers = sortedUsers.sort((a, b) => {
      if (a[property] < b[property]) {
        return -1;
      }
      if (a[property] > b[property]) {
        return 1;
      }
      return 0;
    });

  return sortedUsers;
};

export const sortUsersByCity = (users: User[]): User[] => {
  let sortedUsers: User[] = [...users];
  sortedUsers = sortedUsers.sort((a, b) => {
    if (a.address.city < b.address.city) {
      return -1;
    }
    if (a.address.city > b.address.city) {
      return 1;
    }
    return 0;
  });

  return sortedUsers;
};

export const filterUsers = (
  searchInput: string,
  users: User[] | undefined
): User[] => {
  let filteredUsers: User[] = [];

  if (users) {
    filteredUsers = [...users];
    const keyword = searchInput.trim().toLocaleLowerCase();

    if (keyword) {
      filteredUsers = filteredUsers.filter((user) => {
        return (
          user.username.toLowerCase().includes(keyword) ||
          user.email.toLowerCase().includes(keyword) ||
          user.address.city.toLowerCase().includes(keyword)
        );
      });
    }
  }

  return filteredUsers;
};
