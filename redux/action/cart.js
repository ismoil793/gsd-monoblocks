import { createAction } from 'redux-actions';
import { message } from 'antd';
import api from '../../apiRoutes';
import axios from 'axios';

export const addToCart = createAction('GET_MONOBLOCK_REQUEST');

