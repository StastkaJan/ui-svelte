<script lang="ts">
	import type { ButtonProps } from './types.js';
  import './button.sass';
  
  const {
    buttonClass,
    children,
    buttonStyle,
    size = 'medium',
    ...props
  }: ButtonProps = $props();
</script>

<button
  class={[
    'button',
    `button--${size}`,
    `button--${buttonClass}`,
    `button--${buttonStyle}`,
  ].join(' ')}
  {...props}
>
  {#if typeof children == 'string'}
    {children}
  {:else}
    {@render children?.()}
  {/if}
</button>
