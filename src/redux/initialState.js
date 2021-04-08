import { storage } from "@core/utils";
import { defaultStyle, defaultTitle } from "../constants";

const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: "",
  currentStyle: defaultStyle,
};

const normalize = (state) => ({
  ...state,
  currentStyle: defaultStyle,
  currentText: "",
});

export const initialState = storage("excel-state")
  ? normalize(storage("excel-state"))
  : defaultState;
