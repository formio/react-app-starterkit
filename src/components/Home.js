import { Form } from "@formio/react"
import { useState } from "react";
import { atomOneDark, CopyBlock} from "react-code-blocks";
import logo from '../Light-Background.png';

const Home = () => {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState(null);

  
  const onSubmitHandler = (submission) => {
    setSubmitted(true);
    setData(submission.data);
    console.log(submission);
  }
  return(
  <>
    <div className="container p-5">
      <div className="bg-light rounded-3 p-5 mb-4">
      <h2>JavaScript Powered Forms for
        <a href="https://reactjs.org" style={{ marginBottom: '10px', padding: '3rem 2rem' }}>
          <img src="https://raw.githubusercontent.com/reactjs/reactjs.org/main/src/icons/logo.svg" style={{height: '4rem'}}/></a> by <a href="https://form.io" target="_blank"><img alt="Form.io" src={logo} style={{height: '3rem', display: 'inline'}}/>
        </a>
      </h2>
      <p>This library provides JavaScript powered forms for <a target="_blank" href="https://reactjs.org">React</a>. This allows you to render the JSON schema forms produced by Form.io and render those within your application using React, as well as provides an interface SDK to communicate to the Form.io API's. The benefits of this library include.</p>
      <ul>
        <li>Renders a JSON schema as a webform and hooks up that form to the Form.io API's</li>
        <li>Nested components, layouts, Date/Time, Select, Input Masks, and many more included features</li>
        <li>Full JavaScript API SDK library on top of Form.io</li>
      </ul>
      </div>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Example</h5>
          <p className="card-text language-markup text-center"><CopyBlock text={`<Form src={'https://examples.form.io/example'} onSubmit={onSubmitHandler} />`} theme={atomOneDark} language={'jsx'} codeBlock={true}/></p>
        </div>
      </div>
      <div className='card p-3'>
        <h5 className='card-title'>Result</h5>
        <div className='card-body bg-light rounded-3'><Form src={'https://examples.form.io/example'} onSubmit={onSubmitHandler} /></div>
      </div>
    </div>
  </>
  )
}

export default Home