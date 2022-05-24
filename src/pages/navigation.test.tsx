import React from "react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { render, act } from "@testing-library/react-native"
import { Navigation } from "./navigation";
import { openAppPage, openAuthPage } from "../store/slices/navigation/navigation.slice";

const wrapper = ({ children }: PropsWithChildren<{}>) => (
  <Provider store={store}>{children}</Provider>
)

describe(`Navigation`, () => {
  it(`should render the auth page if the store's page is set to 'auth'`, () => {
    const { getByText } = render(<Navigation />, { wrapper })
    act(() => { store.dispatch(openAuthPage()) });

    expect(getByText(/auth/i)).toBeDefined()
  });

  it(`should render the app page if the store's page is set to 'app'`, () => {
    const { getByText } = render(<Navigation />, { wrapper })
    act(() => { store.dispatch(openAppPage()) });

    expect(getByText(/app/i)).toBeDefined()
  });
});