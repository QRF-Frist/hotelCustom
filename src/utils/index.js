import ajax from './ajax.js';
import { message } from 'element-ui';

export const reqAllRoomInfo = (data) => ajax("/",data,"get");