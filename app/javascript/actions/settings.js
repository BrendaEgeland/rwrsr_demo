export const UPDATE_SETTINGS = 'UPDATE_SETTINGS'


export function update_settings(settings) {
  return {
    type: UPDATE_SETTINGS,
    settings
  }
}
