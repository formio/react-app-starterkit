import { Container } from "react-bootstrap";
import { Form } from "@formio/react";
import { atomOneLight, CopyBlock } from "react-code-blocks";
import logo from "../Light-Background.png";

const Home = () => {
  const onSubmitHandler = (submission) => {
    console.log(submission);
  };

  return (
    <>
      <Container className="pt-5">
        <div className="bg-light rounded-3 p-5 mb-4">
          <h2>
            JavaScript Powered Forms for
            <a
              href="https://reactjs.org"
              style={{
                marginBottom: "10px",
                padding: "0 0.5rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              React{" "}
              <svg
                height="2.5rem"
                viewBox="-10.5 -9.45 21 18.9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="react-logo"
              >
                <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
                <g stroke="currentColor" strokeWidth="1" fill="none">
                  <ellipse rx="10" ry="4.5"></ellipse>
                  <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                  <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                </g>
              </svg>
            </a>
            by
            <a
              href="https://form.io"
              target="_blank"
              rel="noreferrer"
              style={{ padding: "0 0.4rem" }}
            >
              <img
                alt="Form.io logo"
                src={logo}
                style={{ height: "3rem", display: "inline" }}
              />
            </a>
          </h2>
          <p>
            This library provides JavaScript powered forms for{" "}
            <a target="_blank" href="https://reactjs.org" rel="noreferrer">
              React
            </a>
            . This allows you to render the JSON schema forms produced by
            Form.io and render those within your application using React, as
            well as provides an interface SDK to communicate to the Form.io
            API's. The benefits of this library include.
          </p>
          <ul>
            <li>
              Renders a JSON schema as a webform and hooks up that form to the
              Form.io APIs
            </li>
            <li>
              Nested components, layouts, Date/Time, Select, Input Masks, and
              many more included features
            </li>
            <li>Full JavaScript API SDK library on top of Form.io</li>
          </ul>
        </div>
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Code</h5>
            <CopyBlock
              text={`<Form src={'https://examples.form.io/example'} onSubmit={onSubmitHandler} />`}
              theme={atomOneLight}
              language={"jsx"}
              codeBlock={true}
              showLineNumbers={false}
            />
          </div>
        </div>
        <div className="card p-3">
          <h5 className="card-title">Result</h5>
          <div className="card-body bg-light rounded-3">
            <Form
              src={"https://examples.form.io/example"}
              onSubmit={onSubmitHandler}
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
