import { getRoot } from "../selectors";

export const getForms = (name, state) => getRoot(name, state).forms;
