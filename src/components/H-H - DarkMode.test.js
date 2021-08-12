import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import DarkModeButton from "./H-H - DarkModeButton";

describe("button", () => {
  it("should be defined", () => {
    expect(DarkModeButton).toBeDefined();
  });
  it("should call function", () => {
    const mockHandler = jest.fn();
    const component = render(<DarkModeButton handleDarkMode={mockHandler} />);
    const button = component.getByTitle("darkModeButton");
    fireEvent.click(button);
    expect(mockHandler.mock.calls).toHaveBeenCalled;
  });
});
