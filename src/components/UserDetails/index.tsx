import { useState } from "react";
import { Address, User } from "../../utils/users/users";
import { Dialog } from "@headlessui/react";
import styles from "./styles.module.css";
import axios from "axios";

interface UserDetailsProps {
  user: User;
  onUserEdition(user: User): void;
}

interface UserDetailsData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  companyName: string;
}

function UserDetails({ user, onUserEdition }: UserDetailsProps) {
  const initialForm = {
    id: user?.id,
    name: user?.name,
    username: user?.username,
    email: user?.email,
    address: user?.address,
    phone: user?.phone,
    website: user?.website,
    companyName: user?.companyName,
  };

  const [userData, setUserData] = useState<UserDetailsData>(initialForm);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    property: string
  ) => {
    const { value } = e.target;
    setUserData({ ...userData, [property]: value });
  };

  const handleAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    property: string
  ) => {
    const { value } = e.target;

    let newAddress = { ...userData.address, [property]: value };

    setUserData({ ...userData, address: newAddress });
  };

  const formValid = () => {
    return (
      userData.name &&
      userData.email &&
      userData.phone &&
      userData.username &&
      userData.address.city &&
      userData.address.street &&
      userData.address.zipcode
    );
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const { data } = await axios.put(
      `http://localhost:3001/users/${userData.id}`,
      userData
    );
    if (data) onUserEdition(data);
  };

  return (
    <Dialog.Panel>
      {user && (
        <div>
          <div className={styles.headerWrapper}>
            <Dialog.Title>User details</Dialog.Title>
            <img
              src={`https://api.multiavatar.com/${user.id}.svg`}
              className={styles.avatar}
            />
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.sectionLabel}>ID {user.id}</label>

            <div className={styles.formRow}>
              <div className={styles.inputWrapper}>
                <label>Name</label>
                <input
                  className={styles.input}
                  type="text"
                  onChange={(e) => handleFormChange(e, "name")}
                  value={userData.name}
                />
              </div>

              <div className={styles.inputWrapper}>
                <label>Username</label>
                <input
                  className={styles.input}
                  type="text"
                  onChange={(e) => handleFormChange(e, "username")}
                  value={userData.username}
                />
              </div>

              <div className={styles.inputWrapper}>
                <label>Company name</label>
                <input
                  className={styles.input}
                  type="text"
                  onChange={(e) => handleFormChange(e, "companyName")}
                  value={userData.companyName}
                />
              </div>
            </div>

            <label className={styles.sectionLabel}>Contacts</label>
            <div className={styles.formRow}>
              <div className={styles.inputWrapper}>
                <label>Phone</label>
                <input
                  className={styles.input}
                  type="text"
                  onChange={(e) => handleFormChange(e, "phone")}
                  value={userData.phone}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label>Email</label>
                <input
                  className={styles.input}
                  type="text"
                  onChange={(e) => handleFormChange(e, "email")}
                  value={userData.email}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label>Website</label>
                <input
                  className={styles.input}
                  type="text"
                  onChange={(e) => handleFormChange(e, "website")}
                  value={userData.website}
                />
              </div>
            </div>

            <label className={styles.sectionLabel}>Address</label>
            <div className={styles.formRow}>
              <div className={styles.inputWrapper}>
                <label>Street</label>
                <input
                  className={styles.input}
                  type="text"
                  onChange={(e) => handleAddressChange(e, "street")}
                  value={userData.address.street}
                />
              </div>

              <div className={styles.inputWrapper}>
                <label>City</label>
                <input
                  className={styles.input}
                  type="text"
                  onChange={(e) => handleAddressChange(e, "city")}
                  value={userData.address.city}
                />
              </div>

              <div className={styles.inputWrapper}>
                <label>Zip-Code</label>
                <input
                  className={styles.input}
                  type="text"
                  onChange={(e) => handleAddressChange(e, "zipcode")}
                  value={userData.address.zipcode}
                />
              </div>
            </div>

            <button
              data-testid="save-button"
              className={styles.saveButton}
              disabled={!formValid()}
              type="submit"
            >
              Save
            </button>
          </form>
        </div>
      )}
    </Dialog.Panel>
  );
}

export default UserDetails;
