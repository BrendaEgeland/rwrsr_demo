import expect from 'expect'
import * as SettingsActions from '../../actions/settings.js'
import settings from '../../reducers/settings.js'


describe('settings', () => {

  describe('update settings', () => {

    it('should update settings', () => {

      let action = {
        type: SettingsActions.UPDATE_SETTINGS,
        settings: {
          name: 'Matilda'
        }
      }

      let result = settings({name: 'Wanda'}, action)

      expect(result.name).toEqual('Matilda')
    })

  })


})
