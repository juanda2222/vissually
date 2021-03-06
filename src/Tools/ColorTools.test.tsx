import { Color2Vec } from './ColorTools'

describe('Color2Vec functions test', () => {
  test('Test rgb(r,g,b) format as input', () => {

    let rgb_list = Color2Vec("rgb(1, 43, 55)")
    console.log(rgb_list)
    expect(rgb_list.length).toBe(3)
    expect(rgb_list).toStrictEqual([1, 43, 55])
    
  })
  
  test('Test rgb(r,g,b) as input with noise format', () => {

    let rgb_list = Color2Vec(" rgb ( 3 , 33, 35 ) ")
    console.log(rgb_list)
    expect(rgb_list.length).toBe(3)
    expect(rgb_list).toStrictEqual([3, 33, 35])
    
  })

  test('Test wrong format', () => {
    
    expect(() => {
      Color2Vec("wrong input")
    }).toThrow(new Error(`Rgb string in wrong format`))
    
    expect(() => {
      Color2Vec("bad in")
    }).toThrow(new Error("Hex string in wrong format"))
    
  })

  test('Test #ffffff format as input', () => {

    let rgb_list = Color2Vec("#fffaaa")
    console.log(rgb_list)
    expect(rgb_list.length).toBe(3)
    expect(rgb_list).toStrictEqual([255,250,170])
  })
})
