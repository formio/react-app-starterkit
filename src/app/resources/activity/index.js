import FormioResource from 'react-formio/lib/modules/resource';

export default class extends FormioResource {
  constructor(config) {
    super({
      ...config,
      name: 'activity',
      form: 'activity',
      parents: ['event']
    });
  }
}
