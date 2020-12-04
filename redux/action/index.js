import { createAction } from 'redux-actions';
import axios from 'axios'; 

export const isInitialDataLoaded = createAction('IS_INITIAL_DATA_LOADED'); 
export const initialData = createAction('INITIAL_DATA');
