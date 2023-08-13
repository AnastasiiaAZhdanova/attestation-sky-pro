import { render, screen } from "@testing-library/react";
import { MainDivItem, SearchInput, SearchButton } from "./pages/Main/styled";

describe("presence Styled Components on the Main page", () => {
  it("present div component", () => {
    render(<MainDivItem data-testid="div" />);
    expect(screen.getByTestId("div")).toBeInTheDocument();
  });

  it("present input component", () => {
    render(<SearchInput data-testid="input" />);
    expect(screen.getByTestId("input")).toBeInTheDocument();
  });

  it("present button component", () => {
    render(<SearchButton data-testid="button" />);
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });
});
