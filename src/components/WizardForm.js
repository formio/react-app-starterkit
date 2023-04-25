import { Form } from "@formio/react";
import { Col, Row } from "react-bootstrap";
import { atomOneLight, CopyBlock } from "react-code-blocks";

const WizardForm = () => {
  return (
    <>
      <Row>
        <Col>
          <h2>Wizard Forms</h2>
          <p>
            Form.io provides a way to build multi-page forms and easily embed
            them within your application using the following code.
          </p>
          <CopyBlock
            text={`<Form src={'https://examples.form.io/wizard'} />`}
            theme={atomOneLight}
            language="jsx"
            codeBlock={true}
            showLineNumbers={false}
          />
          <div className="py-3">
            <Form src="https://examples.form.io/wizard" />
          </div>
        </Col>
      </Row>
    </>
  );
};
export default WizardForm;
