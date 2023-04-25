import { Form } from "@formio/react";
import { Card, Container } from "react-bootstrap";
import { atomOneDark, CopyBlock } from "react-code-blocks";

const Renderer = () => {
  return (
    <Container>
      <p>
        The React JSON form renderer is a wrapper around the Form.io Core
        Renderer. This provides the ability to trivially render forms within
        your application.
      </p>
      <Card className="p-4">
        <p>You can reference a form from a Form.io Enterprise Server...</p>
        <CopyBlock
          text={`<Form src={'https://examples.form.io/example'} />`}
          theme={atomOneDark}
          language={"jsx"}
          codeBlock={true}
        />
        <div className="bg-light rounded-3 p-5 mb-4">
          <Form src={"https://examples.form.io/example"} />
        </div>
      </Card>
      <Card className="my-2 p-4">
        <p>...and listen for change and submit events...</p>
        <CopyBlock
          text={`<Form src={formSrc} onChange={() => console.log('The form changed!')} onSubmit={() => alert('The form was submitted!')} />`}
          theme={atomOneDark}
          language={"jsx"}
          codeBlock={true}
        />
        <div className="bg-light rounded-3 p-5 mb-4">
          <Form
            src={"https://examples.form.io/example"}
            onChange={() => console.log("The form changed!")}
            onSubmit={() => alert("The form was submitted!")}
          />
        </div>
      </Card>
      <Card className="my-2 p-4">
        <p>...or pass a JSON form definition directly to the component...</p>
        <CopyBlock
          text={`<Form form={
  {
  components: [
  {
    type: 'textfield',
    label: 'First Name',
    key: 'firstName',
    input: true
  },
  {
    type: 'textfield',
    label: 'Last Name',
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
]}} />`}
          theme={atomOneDark}
          language={"jsx"}
          codeBlock={true}
        />
        <div className="bg-light rounded-3 p-5 mb-4">
          <Form
            form={{
              components: [
                {
                  type: "textfield",
                  label: "First Name",
                  key: "firstName",
                  input: true,
                },
                {
                  type: "textfield",
                  label: "Last Name",
                  key: "lastName",
                  input: true,
                },
                {
                  type: "email",
                  label: "Email",
                  key: "email",
                  input: true,
                },
                {
                  type: "button",
                  action: "Submit",
                  label: "Submit",
                  theme: "primary",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="my-2 p-4">
        <p>...and even populate the form at runtime with submission data.</p>
        <CopyBlock
          text={`<Form form={
{components: [
{
type: 'textfield',
label: 'First Name',
key: 'firstName',
input: true
  },
  {
    type: 'textfield',
    label: 'Last Name',
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
/>`}
          theme={atomOneDark}
          language={"jsx"}
          codeBlock={true}
        />
      </Card>
      <div className="bg-light rounded-3 p-5 mb-4">
        <Form
          form={{
            components: [
              {
                type: "textfield",
                label: "First Name",
                key: "firstName",
                input: true,
              },
              {
                type: "textfield",
                label: "Last Name",
                key: "lastName",
                input: true,
              },
              {
                type: "email",
                label: "Email",
                key: "email",
                input: true,
              },
              {
                type: "button",
                action: "Submit",
                label: "Submit",
                theme: "primary",
              },
            ],
          }}
          submission={{
            data: {
              firstName: "Joe",
              lastName: "Smith",
              email: "joe@example.com",
            },
          }}
        />
      </div>
    </Container>
  );
};
export default Renderer;
