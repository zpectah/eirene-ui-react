import { baseColorKeys, emotionColorKeys } from '../enums';

export type BaseColor = keyof typeof baseColorKeys;

export type EmotionColor = keyof typeof emotionColorKeys;

export type Color = BaseColor | EmotionColor;
