import React from "react";
import { Card } from "react-bootstrap";
import { CopyBlock, atomOneLight } from "react-code-blocks";
import { Form } from "@formio/react";

export const ExampleForm = ({ textContent, ...formProps }) => {
  return (
    <Card className="p-4 mb-4">
      <h5>Code</h5>
      <CopyBlock
        showLineNumbers={false}
        text={textContent}
        theme={atomOneLight}
        language={"jsx"}
        codeBlock={true}
      />
      <div className="spacer" />
      <h5>Result</h5>
      <div className="bg-light rounded-3 p-5 mb-4">
        <Form {...formProps} />
      </div>
    </Card>
  );
};
