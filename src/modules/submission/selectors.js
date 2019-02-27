import { selectRoot } from "../selectors";

export const selectSubmission = (name, state) => selectRoot(name, state).submission;
