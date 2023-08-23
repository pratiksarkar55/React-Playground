import { AxiosResponse } from "axios";
import React from "react";
import { Response } from "../types/Reponse";
import { dataAPI } from "../Api";

export const useToDo = (
  setData: React.Dispatch<React.SetStateAction<string[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  let arrNameList: Array<string> = [];
  dataAPI
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((response: AxiosResponse<Array<Response>, any>) => {
      response.data.forEach((obj) => {
        arrNameList.push(obj.title);
      });
      setData(arrNameList);
      setLoading(false);
    });
};
