import { Container } from "react-bootstrap";
import { ExampleForm } from "./ExampleForm";

const Renderer = () => {
  const formDefinition = {
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
  };
  const submissionData = {
    data: {
      firstName: "Joe",
      lastName: "Smith",
      email: "joe@example.com",
    },
  };
  return (
    <Container>
      <p>
        The React JSON form renderer is a wrapper around the Form.io Core
        Renderer. This provides the ability to trivially render forms within
        your application.
      </p>
      <p>You can reference a form from a Form.io Enterprise Server...</p>
      <ExampleForm
        textContent={`<Form src={'https://examples.form.io/example'} />`}
        src="https://examples.form.io/example"
      />
      <p>...and listen for change and submit events...</p>
      <ExampleForm
        textContent={`<Form src={'https://examples.form.io/example'} onChange={() => console.log('The form changed!')} onSubmit={() => alert('The form was submitted!')} />`}
        src="https://examples.form.io/example"
        onChange={() => console.log("The form changed!")}
        onSubmit={() => alert("The form was submitted!")}
      />
      <p>...or pass a JSON form definition directly to the component...</p>
      <ExampleForm
        textContent={`<Form form={${JSON.stringify(
          formDefinition,
          null,
          2
        )}} />`}
        form={formDefinition}
      />
      <p>...and even populate the form at runtime with submission data.</p>

      <ExampleForm
        textContent={`<Form form={${JSON.stringify(
          formDefinition,
          null,
          2
        )}} submission={${JSON.stringify(submissionData, null, 2)}} />`}
        form={formDefinition}
        submission={submissionData}
      />
    </Container>
  );
};
export default Renderer;
