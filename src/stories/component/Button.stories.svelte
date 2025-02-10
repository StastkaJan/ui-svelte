<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Button from '../../comps/button/Button.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Component/Button',
		component: Button,
		tags: ['autodocs'],
		argTypes: {
			size: {
				control: { type: 'select' },
				options: ['small', 'medium', 'large']
			},
			buttonClass: {
				control: { type: 'select' },
				options: ['primary', 'secondary', 'tertiary']
			},
			buttonStyle: {
				control: { type: 'select' },
				options: ['no-style', 'gray', 'icon']
			},
		}
	});
</script>

<Story
  name="Primary"
  args={{ buttonClass: 'primary' }}>
	{#snippet children(args)}
		<Button {...args}>Button</Button>
	{/snippet}
</Story>
<Story
  name="Secondary"
  args={{ buttonClass: 'secondary' }}>
	{#snippet children(args)}
		<Button {...args}>Button</Button>
	{/snippet}
</Story>
<Story
  name="Tertiary"
  args={{ buttonClass: 'tertiary' }}>
	{#snippet children(args)}
		<Button {...args}>Button</Button>
	{/snippet}
</Story>

<Story
  name="Disabled"
  args={{
    buttonClass: 'primary',
    disabled: true,
  }}>
	{#snippet children(args)}
		<Button {...args}>Button</Button>
	{/snippet}
</Story>

<Story
  name="No style"
  args={{
    buttonClass: 'primary',
    buttonStyle: 'no-style',
  }}>
	{#snippet children(args)}
		<Button {...args}>Button</Button>
	{/snippet}
</Story>
<Story
  name="Gray"
  args={{
    buttonClass: 'primary',
    buttonStyle: 'gray',
  }}>
	{#snippet children(args)}
		<Button {...args}>Button</Button>
	{/snippet}
</Story>
<Story
  name="Icon"
  args={{
    buttonClass: 'primary',
    buttonStyle: 'icon',
  }}>
	{#snippet children(args)}
		<Button {...args}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        style:display="block"
        style:width="1rem"
        style:height="1rem"
      >
        <polygon
          points={`
            14.707,2.707 13.293,1.293 8,6.586
            2.707,1.293 1.293,2.707 6.586,8
            1.293,13.293 2.707,14.707
            8,9.414 13.293,14.707
            14.707,13.293 9.414,8
          `}
        />
      </svg>
    </Button>
	{/snippet}
</Story>

<Story
  name="Small"
  args={{
    buttonClass: 'primary',
    size: 'small',
  }}>
	{#snippet children(args)}
		<Button {...args}>Button</Button>
	{/snippet}
</Story>
<Story
  name="Medium"
  args={{
    buttonClass: 'primary',
    size: 'medium',
  }}>
	{#snippet children(args)}
		<Button {...args}>Button</Button>
	{/snippet}
</Story>
<Story
  name="Large"
  args={{
    buttonClass: 'primary',
    size: 'large',
  }}>
	{#snippet children(args)}
		<Button {...args}>Button</Button>
	{/snippet}
</Story>
