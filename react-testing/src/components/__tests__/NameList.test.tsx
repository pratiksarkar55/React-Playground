import { act, render, renderHook, screen } from "@testing-library/react";
import NameList from "../NameList";
// import MockAdapter from "axios-mock-adapter";

// import { dataAPI } from "../../Api";
import "@testing-library/jest-dom";

// const axiosMock = new MockAdapter(dataAPI);
// Mocking useState
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));
// import { useState } from "react";
const { useState } = require("react");
// import React from "react";
import { useToDo } from "../useToDo";
describe("testing NameList component", () => {
  test.skip("Loading text exists", () => {
    render(<NameList />);
    let loadingElement = screen.getByRole("heading", { level: 2 });
    expect(loadingElement.innerHTML).toBe("Loading...");
  });
  //this won't work.Need to call with axios-mock-adapter
  test.skip("Loading text does not exists", async () => {
    //mocking useState
    jest.mock("react", () => ({
      ...jest.requireActual("react"),
      useState: jest.fn(),
    }));
    const { useState } = require("react");
    let setLoading = jest.fn();
    useState.mockImplementation(() => [true, setLoading]);
    render(<NameList />);
    renderHook(() => useToDo(jest.fn(), setLoading));
    await act(async () => {
      // Wait for the promise to resolve
      await new Promise((resolve) => setTimeout(resolve, 0));
      expect(setLoading).toHaveBeenCalledWith(false);
      let loadingElement = screen.getByRole("heading", { level: 2 });
      expect(loadingElement.innerHTML).toBe("Loading...");
    });
  });
  test.skip("testing the useToDo hook", async () => {
    // Mock axios response
    // const response = [
    //   { id: 1, title: "Task 1" },
    //   { id: 2, title: "Task 2" },
    // ];
    // axiosMock
    //   .onGet("https://jsonplaceholder.typicode.com/todos")
    //   .reply(200, response);

    // Mock setData and setLoading
    const setDataMock = jest.fn();
    const setLoadingMock = jest.fn();

    // Render the hook
    renderHook(() => useToDo(setDataMock, setLoadingMock));

    // Simulate the asynchronous behavior using act
    await act(async () => {
      // Wait for the promise to resolve
      await new Promise((resolve) => setTimeout(resolve, 0));

      // Ensure setDataMock and setLoadingMock are called after the promise
      expect(setDataMock).toHaveBeenCalledWith(["Task 1", "Task 2"]);
      expect(setLoadingMock).toHaveBeenCalledWith(false);
    });
  });

  test("renders list when loading is false", () => {
    const setDataMock = jest.fn();
    const setLoadingMock = jest.fn();
    // // @ts-ignore
    useState.mockImplementationOnce(() => [["Task 1", "Task 2"], setDataMock]);
    // // @ts-ignore
    useState.mockImplementationOnce(() => [false, setLoadingMock]);
    const { queryByText } = render(<NameList />);
    //queryBy returns null
    expect(queryByText("Loading...")).toBeNull();
    expect(queryByText("Task 1")).toBeInTheDocument();
    expect(queryByText("Task 2")).toBeInTheDocument();
  });
});
