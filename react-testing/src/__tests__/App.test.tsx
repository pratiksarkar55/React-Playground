import { render, screen } from "@testing-library/react";
// import { act, fireEvent } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import * as AppModule from "../Add";
import { ans } from "../MockImpl";

describe("App component", () => {
  test.skip("App is rendered", () => {
    render(<App />);
    let textElement = screen.getByText("Vite + React");
    expect(textElement).toBeInTheDocument();
  });
  test.skip("testing count", async () => {
    user.setup();
    render(<App />);
    let buttonElement = screen.getByRole("button");
    expect(buttonElement.innerHTML).toBe("count is 0");
    // act(() => fireEvent.click(buttonElement));
    // act(() => fireEvent.click(buttonElement));

    await user.click(buttonElement);
    await user.click(buttonElement);

    //"count is 2"
    //as paramters of textMatcher we can use string,regex and function((content,element)=>boolean)
    let textElement = screen.getByText((content) => content.includes("2"));
    expect(textElement).toBeInTheDocument();
  });
});

// beforeEach(() => {
//   addSpy.mockReset();
// });
// beforeAll(() => {
//   addSpy.mockClear();
// });
describe("Mock testing", () => {
  describe.skip("testing spyon,jest.mock and jest.fn", () => {
    test("testing out jest.spyOn", () => {
      const addSpy = jest.spyOn(AppModule, "add");
      //implementationOnce implements it for only one call.For subsquent calls gets default implementation of original function or mock implementation.
      addSpy.mockImplementation((a: number, b: number) => a + 2 * b);
      addSpy.mockImplementationOnce((a: number, b: number) => a * b);
      console.log("one", ans(1, 2)); //2
      console.log("two", ans(1, 2)); //5
      ans(1, 2);
      expect(addSpy).toHaveBeenCalledWith(1, 2);
    });
    test("testing out jest.mock", () => {
      jest.mock("../App");
      const mockAdd = jest.fn();
      mockAdd.mockImplementation((a: number, b: number) => a + b);
      (AppModule.add as (a: number, b: number) => number) = mockAdd;
      ans(1, 2);
      expect(mockAdd).toHaveBeenCalled();
    });

    test("testing out jest.fn", () => {
      jest.mock("../App");
      const mockAdd = jest.fn((a: number, b: number) => a + b);
      (AppModule.add as (a: number, b: number) => number) = mockAdd;
      ans(1, 2);
      ans(3, 4);
      expect(mockAdd).toHaveBeenCalled();
      const results = mockAdd.mock.results;
      const calls = mockAdd.mock.calls;
      // const instances = mockAdd.mock.instances;
      const lastCall = mockAdd.mock.lastCall;
      console.log("addResults = ", results);
      console.log("calls = ", calls);
      console.log("-----------INSATNCES NEED TO UNDRSTAND ----------------- ");
      console.log("lastCall ", lastCall);
    });
  });

  describe.skip("testing mock.clear", () => {
    let addSpy: jest.SpyInstance<number, [a: number, b: number], any>;
    let returnValue: number;
    beforeAll(() => {
      addSpy = jest.spyOn(AppModule, "add");
    });
    test.skip("testing ans function", () => {
      ans(1, 2);
      expect(addSpy).toHaveBeenCalledWith(1, 2);
    });
    test.skip("testing ans function again without mockClear", () => {
      //if we use mockClear() in beforeEach  above this test fails.Passes if we comment it out or use mockClear() in beforeAll().
      expect(addSpy).toHaveBeenCalledWith(1, 2);
    });
    test.skip("testing ans function again with mockClear", () => {
      //if we use mockClear() in beforeEach  above this test fails.Passes if we comment it out or use mockClear() in beforeAll().
      addSpy.mockClear();
      expect(addSpy).toHaveBeenCalledWith(1, 2); // test fails
    });
    test("testing ans function with returnValue", () => {
      addSpy.mockClear();
      addSpy.mockImplementation((a, b) => 2 * a + 2 * b);
      //addSpy.mockReturnValue(5);
      returnValue = ans(1, 2); // returnValue is always (5 for mockReturnValue & 6 for mockImplementation) after this assingment.Event if cleared or reset.
      expect(returnValue).toBe(6); //5 for mockReturnValue & 6 for mockImplementation
    });
    test("testing ans function with returnValue without mockClear()", () => {
      ans(1, 2);
      const results = addSpy.mock.results;
      expect(results).toHaveLength(2);
    });
    test("testing ans function with returnValue and mockClear()", () => {
      addSpy.mockClear();
      ans(1, 2);
      const results = addSpy.mock.results; //5 for mockReturnValue & 6 for mockImplementation
      console.log("results", results);
      expect(results[0].value).toBe(6); //5 for mockReturnValue & 6 for mockImplementation
    });
    test("testing ans function with returnValue and mockReset()", () => {
      addSpy.mockReset();
      ans(1, 2);
      const results = addSpy.mock.results; //3 as mockReturnValue/mockImplementaton is reset by mockReset()
      console.log("results", results);
      expect(results[0].value).toBe(3); // due to mockReset
    });
    test("testing ans function with returnValue and mockRestore()", () => {
      addSpy.mockRestore();
      ans(1, 2);
      const results = addSpy.mock.results; //results are undefined as original function is used.
      console.log("results", results);
      expect(results).toHaveLength(0); // due to mockRestore()
    });
  });
});
