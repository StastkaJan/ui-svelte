<script lang="ts">
  import './button.sass';

  type Props = {
    /** Button class */
    buttonClass: 'primary' | 'secondary' | 'tertiary';
    /** Button contents */
    label: string;
    /** The onclick event handler */
    onClick: () => void;
    /** Button style */
    buttonStyle?: 'no-style' | 'gray';
    /** Size of the button */
    size?: 'small' | 'medium' | 'large';
    /** Disabled state */
    disabled?: boolean;
  }
  
  const {
    buttonClass,
    buttonStyle,
    size = 'medium',
    label,
    disabled = false,
    onClick,
  }: Props = $props();
</script>

<button
  type="button"
  class={[
    'button',
    `button--${size}`,
    `button--${buttonClass}`,
    `button--${buttonStyle}`,
  ].join(' ')}
  onclick={onClick}
  disabled={disabled}
>
  {label}
</button>
