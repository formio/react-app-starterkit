import FormioResource from 'react-formio/lib/modules/resource';

export default class extends FormioResource {
  constructor(config) {
    super({
      ...config,
      name: 'event',
      form: 'event'
    });
  }
}
