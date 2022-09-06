import { Form } from "@formio/react"
import { Card, Col, Row } from "react-bootstrap"
import { atomOneDark, CopyBlock, dracula } from "react-code-blocks"

const Renderer = () => {
  
  return(
    <Row>
      <Col sm={6}>
      <Row>
        <Col>
          <p>
          The React JSON form renderer is a wrapper around the Form.io Core Renderer. This provides the ability to render any Form within the Form.io platform, using the following syntax.
          </p>
        </Col>
      </Row>
      <Card className="p-4 text-center">
      <CopyBlock text={`<Form src={'https://examples.form.io/example'} />`} theme={atomOneDark} language={'jsx'} codeBlock={true}/>
      </Card>
      <Card className="my-2 p-4 text-center">
        <p>You can also provide a variable as the source as follows.</p>
      <CopyBlock text={`<Form src={formSrc} />`}theme={atomOneDark} language={'jsx'} codeBlock={true} />
      </Card>
      <Card className="my-2 p-4 text-center">
        <p>And even listen for Change and Submit events as follows.</p>
      <CopyBlock text={`<Form src={formSrc} onChange={onChangeHandler} onSubmit={onSubmitHandler} />`}theme={atomOneDark} language={'jsx'} codeBlock={true} />
      </Card>
      <Card className="my-2 p-4">
        <p>Or pass JSON directly</p>
        <CopyBlock text={`<Form form={
  { 
  components: [
  { 
    type: 'textfield',
    label: 'FirstName',
    key: 'firstName',
    input: true 
  },
  {
    type: 'textfield',
    label: 'LastName',
    key: 'lastName',
    input: true 
  },
  {
    type: 'email',
    label: 'Email',
    key: 'email',
    input: true
  },
  {
    type: 'button',
    action: 'Submit',
    label: 'Submit',
    theme: 'primary'
  }
]}} />`} theme={atomOneDark} language={'jsx'} codeBlock={true} />
      </Card>
      <Card className="my-2 p-4">
        <p>and populate with data</p>
      <CopyBlock text={`<Form form={
{components: [
{
type: 'textfield',
label: 'FirstName',
key: 'firstName',
input: true
  },
  {
    type: 'textfield',
    label: 'LastName',
    key: 'lastName',
    input: true
  },
  {
    type: 'email',
    label: 'Email',
    key: 'email',
    input: true
  },
  {
    type: 'button',
    action: 'Submit',
    label: 'Submit',
    theme: 'primary'
  }
]}} 
submission={{
  data: {
    firstName: 'Joe',
    lastName: 'Smith',
    email: 'joe@example.com'
  }
}}
/>`} theme={atomOneDark} language={'jsx'} codeBlock={true}/>
      </Card>
    </Col>
    <Col sm={4}>
      <Card title="Result" className="p-4">
        <Form form={{components: [
          {
            type: 'textfield',
            label: 'FirstName',
            key: 'firstName',
            input: true
          },
          {
            type: 'textfield',
            label: 'LastName',
            key: 'lastName',
            input: true
          },
          {
            type: 'email',
            label: 'Email',
            key: 'email',
            input: true
          },
          {
            type: 'button',
            action: 'Submit',
            label: 'Submit',
            theme: 'primary'
          }
        ]}}
        submission={{
          data: {
            firstName: 'Joe',
            lastName: 'Smith',
            email: 'joe@example.com'
          }
        }}
        />
      </Card>
    </Col>
    </Row>
  )
}
export default Renderer