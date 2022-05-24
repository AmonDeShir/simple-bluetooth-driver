import { navigationReducer, openAppPage, openAuthPage } from "./navigation.slice";

describe('navigationReducer', () => {
  it(`should open the auth page by default`, () => {
    const state = navigationReducer(undefined, { type: 'unknown' });
    expect(state.page).toBe('auth');
  })

  describe(`openAppPage`, () => {
    it(`should open the app page`, () => {
      const state = navigationReducer({ page: 'auth' }, openAppPage())
      expect(state.page).toEqual('app')
    });
  })

  describe(`openAuthPage`, () => {
    it(`should open the auth page`, () => {
      const state = navigationReducer({ page: 'app' }, openAuthPage())
      expect(state.page).toEqual('auth')
    });
  })
});
