import { selectRoot } from "../selectors";

export const selectSubmission = (name, state) => selectRoot(name, state).submission;
export const selectSubmissions = (name, state) => selectRoot(name, state).submissions;
