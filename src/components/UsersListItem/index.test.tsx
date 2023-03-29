import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import UsersListItem from "./index";

describe("UserListItem component tests", () => {
  const mockedHandleDelete = vi.fn();
  const mockedHandleUserSelection = vi.fn();

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
      <UsersListItem
        user={mockedUser}
        onUserDelete={mockedHandleDelete}
        selected={false}
        onUserSelection={mockedHandleUserSelection}
      />
    );
  });

  it("User card renders correct user information", () => {
    const id = screen.getByText("756");
    const username = screen.getByText("Bret");
    const email = screen.getByText("Sincere@april.biz");
    const city = screen.getByText("Gwenborough");

    expect(id).toBeTruthy();
    expect(username).toBeTruthy();
    expect(email).toBeTruthy();
    expect(city).toBeTruthy();
  });
});
