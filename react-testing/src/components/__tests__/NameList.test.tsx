import { useState } from "react";
import {
  //act,
  render,
  renderHook,
  screen,
  waitFor,
} from "@testing-library/react";
import NameList from "../NameList";
// msw or mock service worker
import MockAdapter from "axios-mock-adapter";

import { dataAPI } from "../../Api";
import "@testing-library/jest-dom";

const axiosMock = new MockAdapter(dataAPI);
// Mocking useState
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

import { useToDo } from "../useToDo";
describe("testing NameList component", () => {
  test.skip("Loading text exists", () => {
    const setLoading = jest.fn();
    const setData = jest.fn();
    (useState as jest.Mock).mockImplementationOnce(() => [[], setData]);
    (useState as jest.Mock).mockImplementationOnce(() => [[], setLoading]);
    render(<NameList />);
    let loadingElement = screen.getByRole("heading", { level: 2 });
    expect(loadingElement.innerHTML).toBe("Loading...");
  });

  // NEED TO CHECK THIS
  test.skip("Loading text does not exists", async () => {
    // Mock axios response
    const response = [
      { id: 1, title: "Task 1" },
      { id: 2, title: "Task 2" },
    ];
    axiosMock
      .onGet("https://jsonplaceholder.typicode.com/todos")
      .reply(200, response);
    const setData = jest.fn();
    let setLoading = jest.fn();
    (useState as jest.Mock).mockImplementationOnce(() => [response, setData]);
    (useState as jest.Mock).mockImplementationOnce(() => [true, setLoading]);
    render(<NameList />);
    await waitFor(() => screen.queryByRole("ui-list"));
    expect(setLoading).toHaveBeenCalledWith(false);
    expect(screen.queryByText("Loading...")).toBeNull();
  });
  test("testing the useToDo hook", async () => {
    // Mock axios response
    const response = [
      { id: 1, title: "Task 1" },
      { id: 2, title: "Task 2" },
    ];
    axiosMock
      .onGet("https://jsonplaceholder.typicode.com/todos")
      .reply(200, response);

    // Mock setData and setLoading
    const setDataMock = jest.fn();
    const setLoadingMock = jest.fn();

    // Render the hook
    const { rerender } = renderHook(() => useToDo(setDataMock, setLoadingMock));

    await rerender();
    expect(setDataMock).toHaveBeenCalledWith(["Task 1", "Task 2"]);
    expect(setLoadingMock).toHaveBeenCalledWith(false);
    // // Simulate the asynchronous behavior using act
    // await act(async () => {
    //   // Wait for the promise to resolve
    //   await new Promise((resolve) => setTimeout(resolve, 0));

    //   // Ensure setDataMock and setLoadingMock are called after the promise
    //   expect(setDataMock).toHaveBeenCalledWith(["Task 1", "Task 2"]);
    //   expect(setLoadingMock).toHaveBeenCalledWith(false);
    // });
  });

  test.skip("renders list when loading is false", () => {
    const setDataMock = jest.fn();
    const setLoadingMock = jest.fn();
    (useState as jest.Mock).mockImplementationOnce(() => [
      ["Task 1", "Task 2"],
      setDataMock,
    ]);
    (useState as jest.Mock).mockImplementationOnce(() => [
      false,
      setLoadingMock,
    ]);
    const { queryByText } = render(<NameList />);
    //queryBy returns null
    expect(queryByText("Loading...")).toBeNull();
    expect(queryByText("Task 1")).toBeInTheDocument();
    expect(queryByText("Task 2")).toBeInTheDocument();
  });
});
