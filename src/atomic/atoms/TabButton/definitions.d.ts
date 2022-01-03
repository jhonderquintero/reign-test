
export interface ITabButton
extends React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
selected: boolean;
}
