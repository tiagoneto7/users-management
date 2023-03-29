import { useEffect, useState } from "react";
import axios from "axios";
import UsersListItem from "../UsersListItem";
import styles from "./styles.module.css";
import ListFilters from "../ListFilters";
import {
  filterUsers,
  findSelectedUser,
  sortUsers,
  User,
} from "../../utils/users/users";
import { Dialog } from "@headlessui/react";
import UserDetails from "../UserDetails";
import NewUser from "../NewUser";
import { useSearchParams } from "react-router-dom";
import AddIcon from "../../assets/icons/AddIcon";

function UsersList() {
  const [users, setUsers] = useState<User[]>();
  const [searchInput, setSearchInput] = useState("");
  const [newUserFormOpen, setNewUserFormOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedUser, setSelectedUser] = useState<User | undefined>();
  const [sortedBy, setSortedBy] = useState(
    searchParams.get("sortedby") ?? "id"
  );

  const fetchUsers = async () => {
    const { data } = await axios.get("http://localhost:3001/users");
    if (data) setUsers(data);

    const user = findSelectedUser(searchParams.get("selected"), data);
    setSelectedUser(user);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUserDeletion = (userToDelete: User) => {
    if (users) {
      const newUsers = users.filter(
        (user: User) => user.id !== userToDelete.id
      );
      setUsers(newUsers);
    }
  };

  const handleUserEdition = (newUser: User) => {
    if (users && newUser) {
      const index = users.findIndex((user: User) => user.id == newUser.id);
      users[index] = newUser;
      setUsers(users);
      setSelectedUser(undefined);
    }
  };

  const handleUserAddition = (newUser: User) => {
    if (users && newUser) {
      setUsers([...users, newUser]);
      setNewUserFormOpen(false);
    }
  };

  const handleUserSelection = (selectedUser: User) => {
    setSelectedUser(selectedUser);
    searchParams.set("selected", selectedUser.id.toString());
    setSearchParams(searchParams);
  };

  const handleSortbyChange = (sortedby: string) => {
    setSortedBy(sortedby);
    searchParams.set("sortedby", sortedby);
    setSearchParams(searchParams);
  };

  const handleSearchInputChange = (keyword: string) => {
    setSearchInput(keyword);
  };

  const filteredUsers = filterUsers(searchInput, sortUsers(sortedBy, users));

  return (
    <div className={styles.pageWrapper}>
      {users && users.length > 0 ? (
        <div>
          <div className={styles.headerWrapper}>
            <ListFilters
              sortedBy={sortedBy}
              searchInput={searchInput}
              onSearchInputChange={handleSearchInputChange}
              onSortbyChange={handleSortbyChange}
            />
            <button
              className={styles.addButton}
              onClick={() => setNewUserFormOpen(true)}
            >
              <AddIcon />
            </button>
          </div>
          <hr className={styles.separator} />
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Avatar</th>
                <th>Username</th>
                <th>E-mail</th>
                <th>City</th>
                <th>Is employed</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user: User) => (
                <UsersListItem
                  onUserDelete={handleUserDeletion}
                  onUserSelection={handleUserSelection}
                  selected={selectedUser?.id === user.id}
                  key={user.id}
                  user={user}
                />
              ))}
            </tbody>
          </table>
          {filteredUsers.length <= 0 && (
            <p className={styles.noUsersLabel}>No search results</p>
          )}
        </div>
      ) : (
        <p className={styles.noUsersLabel}>No users found</p>
      )}

      <Dialog
        className={styles.modalWrapper}
        open={!!selectedUser}
        onClose={() => {
          setSelectedUser(undefined);
          searchParams.delete("selected");
          setSearchParams(searchParams);
        }}
      >
        {selectedUser && (
          <UserDetails
            onUserEdition={(user: User) => {
              handleUserEdition(user);
            }}
            user={selectedUser}
          />
        )}
      </Dialog>

      <Dialog
        className={styles.modalWrapper}
        open={!selectedUser && newUserFormOpen}
        onClose={() => {
          setNewUserFormOpen(false);
        }}
      >
        <NewUser
          onUserAddition={(user: User) => {
            handleUserAddition(user);
          }}
        />
      </Dialog>
    </div>
  );
}

export default UsersList;
