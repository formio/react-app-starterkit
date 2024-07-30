import { Form } from "@formio/react";
import { Col, Row } from "react-bootstrap";
import { atomOneLight, CopyBlock } from "react-code-blocks";

const PDFForm = () => {
  return (
    <>
      <Row>
        <Col>
          <h2>PDF Forms</h2>
          <CopyBlock
            text={`<Form src={'https://examples.form.io/w4'} />`}
            theme={atomOneLight}
            language="jsx"
            codeBlock={true}
            showLineNumbers={false}
          />
          <div className="py-3">
            <Form src="https://examples.form.io/w4" />
          </div>
        </Col>
      </Row>
    </>
  );
};
export default PDFForm;
