
import React from "react"
import ThemeConfig from './ThemeProvider'
import VButton from '../Buttons/VButton'
import renderer from 'react-test-renderer';

describe('ThemeConfig', () => {
  it('is truthy', () => {
    expect(ThemeConfig).toBeTruthy()
  })

  test("Rendering with props. Snapshot test", () => { 


    const ButtonWithProps = renderer.create(
      <ThemeConfig>
        <VButton
        >
          Button test name
        </VButton>
      </ThemeConfig>
    ).toJSON();

    console.log(ButtonWithProps)
    expect(ButtonWithProps).toMatchSnapshot();
  })
})
