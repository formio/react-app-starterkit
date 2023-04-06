import { Form, FormBuilder } from "@formio/react"
import { useState } from "react"
import { Card } from "react-bootstrap"
import ReactJson from "react-json-view"
import '../styles/Builder.css'
const Builder = () => {
  const [jsonSchema, setSchema] = useState({components: []});
  const onFormChange = (schema) => {
    console.log({ schema, jsonSchema });
    setSchema({...schema, components: [...schema.components]});
  };
  return (
    <>
      <FormBuilder form={jsonSchema} onChange={onFormChange} />
      <Card title="Form JSON Schema" className="my-4">
      <Card.Body>
        <Card.Title className="text-center">Form JSON Schema</Card.Title>
          <ReactJson src={jsonSchema} collapsed={true}></ReactJson>
      </Card.Body>
      </Card>
      <Card className="my-4">
      <Card.Body>
        <Card.Title className="text-center">Form Render</Card.Title>
        <Form form={jsonSchema}/>
      </Card.Body>
      </Card>
    </>
  )
}
export default Builder
