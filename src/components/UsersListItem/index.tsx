import axios from "axios";
import CheckedIcon from "../../assets/icons/CheckedIcon";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import UncheckedIcon from "../../assets/icons/UncheckedIcon";
import { User } from "../../utils/users/users";
import styles from "./styles.module.css";

interface UsersListItemProps {
  user: User;
  onUserDelete: (userToDelete: User) => void;
  onUserSelection: (selectedUser: User) => void;
  selected: boolean;
}

function UsersListItem({
  user,
  onUserDelete,
  onUserSelection,
  selected,
}: UsersListItemProps) {
  const selectUser = () => {
    onUserSelection(user);
  };

  const handleDelete = async () => {
    const { data } = await axios.delete(
      `http://localhost:3001/users/${user.id}`
    );
    if (data) onUserDelete(user);
  };

  return (
    <tr
      onClick={() => selectUser()}
      className={selected ? styles.selectedTableRow : styles.tableRow}
    >
      <td>
        <p>{user.id}</p>
      </td>
      <td>
        <img
          src={`https://api.multiavatar.com/${user.id}.svg`}
          className={styles.avatar}
        />
      </td>
      <td>
        <p>{user.username}</p>
      </td>
      <td>
        <p>{user.email}</p>
      </td>
      <td>
        <p>{user.address.city}</p>
      </td>
      <td className={styles.hasCompany}>
        <p>
          {user?.companyName ? (
            <CheckedIcon userIsSelected={selected} />
          ) : (
            <UncheckedIcon userIsSelected={selected} />
          )}
        </p>
      </td>

      <td>
        <button
          title="delete"
          data-testid="delete-button"
          className={styles.deleteButton}
          onClick={(e) => {
            handleDelete();
            e.stopPropagation();
          }}
        >
          <DeleteIcon />
        </button>
      </td>
    </tr>
  );
}

export default UsersListItem;
