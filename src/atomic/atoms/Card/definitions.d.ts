export interface ICard {
  headerText: string;
  centralText: string;
  headerIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  clickHandler?: MouseEventHandler;
  url?: string;
}
