import { Color2Vec } from './ColorTools'

describe('Color2Vec fuctions test', () => {
  it('Test rgb(r,g,b) format as input', () => {

    var rgb_list = Color2Vec("rgb(1, 43, 55)")
    console.log(rgb_list)
    expect(rgb_list.length).toBe(3)
  })
  it('Test #ffffff format as input', () => {

    var rgb_list = Color2Vec("#fffaaa")
    console.log(rgb_list)
    expect(rgb_list.length).toBe(3)
  })
})
