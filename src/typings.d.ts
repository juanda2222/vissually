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
  textColor1: string,
  textColor2: string,
  color1: string,
  color2: string,
  backgroundColor1: string,
  backgroundColor2: string,
}
interface ThemeProps {
  primary?:boolean,
  secundary?:boolean,
  dark?:boolean,
  theme?: Theme,
  children?: React.ReactNode,
  [propName: string]: any;
}

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  theme?: Theme,
  [propName: string]: any;
}

interface ButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode
  theme: Theme
  [propName: string]: any;
}

function withProperties<A, B>(component: A, properties: B): A & B {
  Object.keys(properties).forEach(key => {
    component[key] = properties[key]
  });
  return component as A & B;
}