import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ListFilters from "./index";

describe("ListFilters component tests", () => {
  const mockedHandleSearchInputChange = vi.fn();
  const mockedHandleSortbyChange = vi.fn();

  beforeEach(() => {
    render(
      <ListFilters
        sortedBy=""
        searchInput=""
        onSearchInputChange={mockedHandleSearchInputChange}
        onSortbyChange={mockedHandleSortbyChange}
      />
    );
  });

  it("Renders input and selector correctly", () => {
    const searchInput = screen.getByPlaceholderText("Search");
    const sortedByLabel = screen.getByText("Sort by");
    const SortByComboBox = screen.getByTestId("select");

    expect(searchInput).toHaveValue("");
    expect(sortedByLabel).toBeTruthy();
    expect(SortByComboBox).toHaveValue("id");
  });

  it("Input search fires handle method ", () => {
    const searchInput = screen.getByPlaceholderText("Search");
    fireEvent.change(searchInput, { target: { value: "this is a test" } });

    expect(mockedHandleSearchInputChange).toBeCalledTimes(1);
  });
});
