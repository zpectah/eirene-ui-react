import { JssStyle, MinimalObservable } from 'jss';
import { Theme } from './theme';

type Func<P, T, R> =
  T extends Partial<Theme> ? (data: P) => R : (data: P & { theme: T }) => R;

export type JssPropertyValue<
  Name extends string | number | symbol = string,
  Props = unknown,
  Theme = undefined,
> = Record<
  Name,
  | JssStyle<Props, Theme>
  | Array<JssStyle<Props, Theme>>
  | string
  | number
  | Func<
      Props,
      Theme,
      JssStyle<undefined, undefined> | string | null | undefined
    >
  | MinimalObservable<JssStyle | string | null | undefined>
>;
