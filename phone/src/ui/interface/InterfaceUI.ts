import { CSSProperties, MouseEventHandler } from 'react';

export interface AppContentTypes {
  children?: JSX.Element | JSX.Element[];
  paperStyle?: CSSProperties;
  disableSuspenseHandler?: boolean;
  backdrop?: boolean;
  onClickBackdrop?: (...args: any[]) => void;
}

export interface AppWrapperTypes {
  id?: string;
  style?: CSSProperties;
  handleClickAway?: (...args: any[]) => void;
}

export interface ImagePopout {
  show: boolean;
  url: string;
  element: HTMLInputElement;
}
