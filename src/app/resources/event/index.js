import FormioResource from 'react-formio/lib/modules/resource';
import Resource from './Resource';

export default class extends FormioResource {
  constructor(config) {
    super({
      ...config,
      name: 'event',
      form: 'event',
      Resource
    });
  }
}
