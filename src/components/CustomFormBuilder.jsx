import React from 'react';
import FormBuilder from '@formio/react/lib/components/FormBuilder';

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