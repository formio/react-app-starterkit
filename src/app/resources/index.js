import Activity from './activity';
import Event from './event';
import {AppConfig} from '../../config';

export default {
  activity: new Activity(AppConfig),
  event: new Event(AppConfig)
};
