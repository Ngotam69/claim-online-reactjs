import { combineReducers } from 'redux';
import ClaimState from './ClaimDeclarationReducer';

const appReducer = combineReducers({
    ClaimState
    //console.log(JSON.stringify(data))
});

export default appReducer;