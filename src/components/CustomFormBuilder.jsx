import React from 'react';
import FormBuilder from 'react-formio/lib/components/FormBuilder';

class CustomFormBuilderCompnent extends FormBuilder {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      {super.render()}
    </div>)
  }
}

export default CustomFormBuilderCompnent;