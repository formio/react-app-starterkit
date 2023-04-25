import { Form } from "@formio/react";
import { Col, Row } from "react-bootstrap";
import { atomOneLight, CopyBlock } from "react-code-blocks";

const SimpleForm = () => {
  return (
    <>
      <Row>
        <Col>
          <h2>JSON Powered Forms</h2>
          <p>
            Form.io is a platform for JSON powered forms within React. Forms can
            be embedded as easy as the following code.
          </p>
          <CopyBlock
            text={`<Form src={'https://examples.form.io/example'} />`}
            theme={atomOneLight}
            language="jsx"
            codeBlock={true}
            showLineNumbers={false}
          />
          <div className="py-3">
            <Form src="https://examples.form.io/example" />
          </div>
        </Col>
      </Row>
    </>
  );
};
export default SimpleForm;
