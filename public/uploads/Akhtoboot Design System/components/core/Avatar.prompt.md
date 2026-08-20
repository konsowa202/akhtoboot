Circular avatar. Shows the image if `src` is set, else initials from `name`, else the octopus mark.

```jsx
<Avatar src="/photo.jpg" name="سارة" />
<Avatar name="Omar Ali" tone="accent" />
<Avatar size="lg" /> {/* octopus fallback */}
```

- `size`: `sm | md | lg` or a pixel number.
- `tone`: `brand | accent | neutral` tints the fallback.
