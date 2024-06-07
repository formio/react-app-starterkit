import { Form, FormBuilder, FormType } from "@formio/react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import ReactJson from "@microlink/react-json-view";
import "../styles/Builder.css";
const Builder = () => {
    const [schema, setSchema] = useState<FormType>({
        display: "form",
        components: [
            {
                type: "button",
                action: "submit",
                label: "Submit",
                input: true,
                key: "submit",
            },
        ],
    });
    const onFormChange = (schema: FormType) => {
        setSchema(schema);
    };
    return (
        <>
            <FormBuilder onChange={onFormChange} />
            <Card title="Form JSON Schema" className="my-4">
                <Card.Body>
                    <Card.Title className="text-center">
                        As JSON Schema
                    </Card.Title>
                    <ReactJson
                        src={schema}
                        name={null}
                        collapsed={true}
                    ></ReactJson>
                </Card.Body>
            </Card>
            <Card className="my-4">
                <Card.Body>
                    <Card.Title className="text-center">
                        As Rendered Form
                    </Card.Title>
                    <Form src={schema} />
                </Card.Body>
            </Card>
        </>
    );
};
export default Builder;
