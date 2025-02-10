import type { Snippet } from "svelte";
import type { HTMLButtonAttributes } from "svelte/elements";

export type ButtonProps = {
  /** Button class */
  buttonClass: 'primary' | 'secondary' | 'tertiary';
  /** Button children */
  children: Snippet;
  /** Button style */
  buttonStyle?: 'no-style' | 'gray' | 'icon';
  /** Size of the button */
  size?: 'small' | 'medium' | 'large';
} & HTMLButtonAttributes