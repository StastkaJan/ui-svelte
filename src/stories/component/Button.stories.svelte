<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from '../../comps/button/Button.svelte';
  import { fn } from '@storybook/test';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Component/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
      size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
      },
      buttonClass: {
        control: { type: 'select' },
        options: ['primary', 'secondary', 'tertiary'],
      },
      buttonStyle: {
        control: { type: 'select' },
        options: ['no-style', 'gray'],
      },
    },
    args: {
      onClick: fn(),
    }
  });
</script>


<Story name="Primary" args={{ buttonClass: 'primary', label: 'Button' }} />
<Story name="Secondary" args={{ buttonClass: 'secondary', label: 'Button' }} />
<Story name="Tertiary" args={{ buttonClass: 'tertiary', label: 'Button' }} />

<Story name="Disabled" args={{ buttonClass: 'primary', label: 'Button', disabled: true }} />

<Story name="No style" args={{ buttonClass: 'primary', buttonStyle: 'no-style', label: 'Button' }} />
<Story name="Gray" args={{ buttonClass: 'primary', buttonStyle: 'gray', label: 'Button' }} />

<Story name="Small" args={{ buttonClass: 'primary', size: 'small', label: 'Button' }} />
<Story name="Medium" args={{ buttonClass: 'primary', size: 'medium', label: 'Button' }} />
<Story name="Large" args={{ buttonClass: 'primary', size: 'large', label: 'Button' }} />
