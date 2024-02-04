import { baseColorKeys, emotionColorKeys, textColorKeys } from '../enums';

export type BaseColor = keyof typeof baseColorKeys;

export type EmotionColor = keyof typeof emotionColorKeys;

export type TextColor = keyof typeof textColorKeys;

export type Color = BaseColor | EmotionColor;

export type TypographyColor = BaseColor | EmotionColor | TextColor;
