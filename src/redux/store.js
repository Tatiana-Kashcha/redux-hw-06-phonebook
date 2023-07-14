import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactsReducer } from './contactsSlise';
import { filterReducer } from './filterSlise';

const rootReducer = combineReducers({
  contactsUser: contactsReducer,
  filterUser: filterReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
