/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const svgUrl: string;
  const svgComponent: SvgrComponent;
  export default svgUrl;
  export { svgComponent as ReactComponent }
}

interface Theme {
  primary: {
    textColor1: string,
    textColor2: string,
    color1: string,
    color2: string,
    backgroundColor1: string,
    backgroundColor2: string,
  }
}
interface ThemeProps {
  theme?: Theme
  children: React.Component
}
interface ButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  theme?: Theme
}