import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import UserDetails from "./index";
import { Dialog } from "@headlessui/react";

describe("UserDetails component tests", () => {
  const mockedHandleUserEdition = vi.fn();
  const mockedOnDialogClose = vi.fn();

  const mockedUser = {
    id: 756,
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
  };

  beforeEach(() => {
    render(
      <Dialog open={true} onClose={mockedOnDialogClose}>
        <UserDetails
          user={mockedUser}
          onUserEdition={mockedHandleUserEdition}
        />
      </Dialog>
    );
  });

  it("Renders correct titles, subtitles and inputs", () => {
    const title = screen.getByText("User details");
    const contacts = screen.getByText("Contacts");
    const address = screen.getByText("Address");
    const id = screen.getByText("ID 756");

    expect(title).toBeTruthy();
    expect(contacts).toBeTruthy();
    expect(address).toBeTruthy();
    expect(id).toBeTruthy();

    const textInputs = screen.getAllByRole("textbox", { name: "" });
    expect(textInputs.length).toBe(9);

    //It only covers a few inputs
    const nameInput = textInputs[0];
    const emailInput = textInputs[4];
    const cityInput = textInputs[7];

    expect(nameInput).toHaveValue("Leanne Graham");
    expect(emailInput).toHaveValue("Sincere@april.biz");
    expect(cityInput).toHaveValue("Gwenborough");
  });
});
