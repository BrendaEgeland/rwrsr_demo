import {
  UPDATE_SETTINGS
} from '../actions/settings';



const settings = (state = { name: 'Jane' }, action) => {

  switch (action.type) {

  case UPDATE_SETTINGS:
    return (
      {...state, ...action.settings} )

  default:
    return state

  }


}

export default settings
