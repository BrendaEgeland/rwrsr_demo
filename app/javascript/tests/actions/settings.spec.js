import expect from 'expect'
import * as SettingsActions from '../../actions/settings.js'

describe('settings actions', () => {

  it('update_settings should create UPDATE_SETTINGS action', () => {
    expect(SettingsActions.update_settings({
      name: 'Matilda'
    })).toEqual({
      type: SettingsActions.UPDATE_SETTINGS,
      settings: {
        name: 'Matilda'
      }
    })
  })

})
