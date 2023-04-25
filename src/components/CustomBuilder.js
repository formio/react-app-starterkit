import { FormBuilder } from "@formio/react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { atomOneLight, CopyBlock } from "react-code-blocks";

const CustomBuilder = () => {
  const [options] = useState({
    language: "en",
    i18n: {
      jp: {
        Label: "ラベル",
        "Label Position": "ラベルの位置",
        Placeholder: "プレースホルダー",
        Description: "説明文",
      },
    },
  });
  const handler = (lang) => {
    options.language = lang;
  };
  return (
    <>
      <Row>
        <Col>
          <h2>JSON Powered Forms</h2>
          <p>
            The Form.io form builder interface allows you to embed a form
            builder within your application, which generates a JSON schema of
            the form created.
          </p>
          <CopyBlock
            text={`<FormBuilder form={jsonSchema} onChange={(schema) => setSchema(schema)} options={options} />
`}
            theme={atomOneLight}
            language="jsx"
            codeBlock={true}
            showLineNumbers={false}
          />
          <p>
            One of the features of builder that user can change different
            options. For example language. Options can be provided via{" "}
            <code>[options]</code> property.
          </p>
          <CopyBlock
            text={`
const [options,setOptions] = useState({
  language: 'en',
  i18n: {
    jp: {
      'Label': 'ラベル',
      'Label Position': 'ラベルの位置',
      'Placeholder': 'プレースホルダー',
      'Description': '説明文'
    }
  }
})
`}
            theme={atomOneLight}
            language="jsx"
            codeBlock={true}
          />
          <div className="py-3">
            <button onClick={handler("en")}>English</button>
            <button onClick={handler("jp")}>Japanese</button>
            <FormBuilder form={{ components: [] }} options={options} />
          </div>
        </Col>
      </Row>
    </>
  );
};
export default CustomBuilder;
