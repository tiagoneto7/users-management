import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import UsersList from "./index";

describe("UsersList component tests", () => {
  beforeEach(() => {
    render(
      <Router>
        <UsersList />
      </Router>
    );
  });

  it("Renders warning correctly", () => {
    const noUsersText = screen.getByText("No users found");
    expect(noUsersText).toBeTruthy();
  });
});
