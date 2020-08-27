
/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */

declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const svgUrl: string
  const svgComponent: SvgrComponent
  export default svgUrl
  export { svgComponent as ReactComponent }
}

interface Theme {
  textColor1?: string, //darkish
  textColor2?: string, //lightish
  color1?: string, //vivid1
  color2?: string, //vivid2
  backgroundColor1?: string, //lightish
  backgroundColor2?: string, //darkish
}
interface DefaultTheme {
  textColor1: string, //darkish
  textColor2: string, //lightish
  color1: string, //vivid1
  color2: string, //vivid2
  backgroundColor1: string, //lightish
  backgroundColor2: string, //darkish
}

interface ThemeProviderProps {
  primary?:boolean,
  secondary?: boolean,
  primaryDark?: boolean,
  secondaryDark?: boolean,
  theme?: Theme,
  children?: React.ReactNode,
}


interface ListProps {

  theme?: Theme,
  className?: string,
  containerClassName?: string,
  style?: any,
  primary?: boolean, secondary?: boolean, 
  primaryDark?: boolean, secondaryDark?: boolean,

  list: any[],
  getLabel?: (listElement:any) => string,
  onClick?: (event:{ index: number, label: string}) => void,
}

interface SelectProps {
  theme?: Theme,
  className?: string,
  listClassName?: string,
  style?: any,
  primary?: boolean, secondary?: boolean, 
  primaryDark?: boolean, secondaryDark?: boolean,

  list: string[],
  label: string,
  onSelect?: ( index: number, label: string ) => void,
}


interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  theme?: Theme,
  className?: string,
  style?: any,
  parentStyle?: any,
  labelStyle?:any,
  primary?: boolean, secondary?: boolean,
  primaryDark?: boolean, secondaryDark?: boolean
}

interface ButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  theme?: Theme,
  primary?: boolean, secondary?: boolean, 
  primaryDark?: boolean, secondaryDark?: boolean
  children: React.ReactNode

  isPressed?:boolean
}

interface ChipProps{
    
  className?:string,
  style?:any,
  theme?: Theme,
  primary?: boolean, secondary?: boolean,
  primaryDark?: boolean, secondaryDark?: boolean,

  label:string,
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
  onDelete?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,  
}

interface ChipListProps {
  theme?: Theme,
  className?: string,
  style?: any,
  primary?: boolean, secondary?: boolean,
  primaryDark?: boolean, secondaryDark?: boolean,

  list: any[],
  getListLabel?: (listElement: any) => string,
  onClick?: (event: { index: number, label: string }) => void,
  onDelete?: (event:{ index: number, label: string}) => void,
}

interface AutoCompleteProps{
  className,
  style,
  theme?: Theme,
  primary?: boolean, secondary?: boolean,
  primaryDark?: boolean, secondaryDark?: boolean,

  multiple?: boolean,
  value?: string,
  getOptionLabel?: (optionElement: any) => string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => void,
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void,
  
  options: any[],
  renderInput: (props: any) => React.ReactNode,
}
