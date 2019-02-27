import { selectRoot } from "../selectors";

export const selectForms = (name, state) => selectRoot(name, state).forms;
