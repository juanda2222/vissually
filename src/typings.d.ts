
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
  textColor1: string, //darkish
  textColor2: string, //lightish
  color1: string, //vivid1
  color2: string, //vivid2
  backgroundColor1: string, //lightish
  backgroundColor2: string, //darkish
}
interface ThemeProps {
  primary?:boolean,
  secundary?:boolean,
  dark?:boolean,
  theme?: Theme,
  children?: React.ReactNode,
  [propName: string]: any;
}


interface ListProps {
  theme?: Theme,
  className?: string,
  style?: any,
  primary?: boolean, secundary?: boolean, dark?: boolean,

  list: string[],
  onClick?: (index:number, text:string) => void,
  [propName: string]: any;
}

interface SelectProps {
  theme?: Theme,
  className?: string,
  style?: any,
  primary?: boolean, secundary?: boolean, dark?: boolean,

  list: string[],
  label: string,
  onChange?: (index:number, text:string) => void,
  [propName: string]: any;
}


interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  theme?: Theme,
  primary?:boolean, secundary?:boolean, dark?:boolean,
  [propName: string]: any;
}

interface ButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  theme?: Theme,
  primary?: boolean, secundary?: boolean, dark?: boolean,
  children: React.ReactNode

  isPressed?:boolean
  [propName: string]: any;
}

interface ChipProps{
    
  className?:string,
  style?:any,
  theme?: Theme,
  primary?: boolean, secundary?: boolean, dark?: boolean,
  label:string,
  onDelete?:any,
  onClick?:any,
  [propName?: string]: any;
}

interface AutoCompleteProps{
  theme?: Theme,
  primary?: boolean, secundary?: boolean, dark?: boolean,
  [propName: string]: any;
}