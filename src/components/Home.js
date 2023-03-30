import { Form } from "@formio/react"
import { useState } from "react";
import { atomOneDark, CopyBlock} from "react-code-blocks";

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
    <div className="container form-io">
          <Form src={'https://utmcclwqkibeivu.form.io/assessmentformtest'} onSubmit={onSubmitHandler} />
    </div>
  </>
  )
}

export default Home