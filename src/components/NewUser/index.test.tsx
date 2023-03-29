import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Dialog } from "@headlessui/react";
import NewUser from "./index";

describe("NewUser component tests", () => {
  const mockedHandleUserAddition = vi.fn();
  const mockedOnDialogClose = vi.fn();

  beforeEach(() => {
    render(
      <Dialog open={true} onClose={mockedOnDialogClose}>
        <NewUser onUserAddition={mockedHandleUserAddition} />
      </Dialog>
    );
  });

  it("Renders correct titles, subtitles and inputs", () => {
    const title = screen.getByText("New user");
    const contacts = screen.getByText("Contacts");
    const address = screen.getByText("Address");

    expect(title).toBeTruthy();
    expect(contacts).toBeTruthy();
    expect(address).toBeTruthy();

    const textInputs = screen.getAllByRole("textbox", { name: "" });
    expect(textInputs.length).toBe(9);

    //It only covers a few inputs
    const nameInput = textInputs[0];
    const emailInput = textInputs[4];
    const cityInput = textInputs[7];

    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
    expect(cityInput).toHaveValue("");
  });
});
