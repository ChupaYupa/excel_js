import { CHANGE_TEXT, TABLE_RESIZE, CHANGE_STYLES, APPLY_STYLE } from "./types";

// Action Creator
export function tableResize(data) {
  return {
    type: TABLE_RESIZE,
    data,
  };
}

export function changeText(data) {
  return {
    type: CHANGE_TEXT,
    data,
  };
}

export function changeStyle(data) {
  return {
    type: CHANGE_STYLES,
    data,
  };
  // value, ids
}
export function applyStyle(data) {
  return {
    type: APPLY_STYLE,
    data,
  };
}
export function changeTitle(data) {
  return {
    type: CHANGE_TITLE,
    data,
  };
}
