
import React from "react"
import { VThemeProvider } from './ThemeProvider'
import VButton from '../Buttons/VButton'
import renderer from 'react-test-renderer';

describe('ThemeConfig', () => {
  it('is truthy', () => {
    expect(VThemeProvider).toBeTruthy()
  })

  test("Rendering with props. Snapshot test", () => { 


    const ButtonWithProps = renderer.create(
      <VThemeProvider>
        <VButton
        >
          Button test with theme
        </VButton>
      </VThemeProvider>
    ).toJSON();

    console.log(ButtonWithProps)
    expect(ButtonWithProps).toMatchSnapshot();
  })
})
