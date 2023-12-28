import { fireEvent, render } from "@testing-library/react";
import Counter from "../Counter";
describe("testing counter component", () => {
  test.skip("checking counter text", () => {
    const { getByRole, getByText } = render(<Counter />);
    const button = getByRole("button");
    const content = getByText("Count is 0");
    fireEvent.click(button);
    expect(content.innerHTML).toBe("Count is 1");
  });
});
