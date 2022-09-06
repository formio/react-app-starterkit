import { Form } from "@formio/react"
import { Col, Row } from "react-bootstrap"
import { atomOneDark, CopyBlock } from "react-code-blocks"

const PDFForm = () => {
  return(
    <>
      <Row>
        <Col>
          <h2>PDF Forms</h2>
          <CopyBlock text={`<Form src={'https://examples.form.io/example'} />`} theme={atomOneDark} language="jsx" codeBlock={true}/>
          <div className="py-3">
            <Form src="https://examples.form.io/w4"/>
          </div>
        </Col>
      </Row>
    </>
  )
}
export default PDFForm