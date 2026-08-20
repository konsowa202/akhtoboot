The Akhtoboot logo — octopus mark + Thmanyah wordmark; use for any brand presence (headers, footers, splash, favicons).

```jsx
<Logo variant="full" lang="ar" tone="brand" size={44} />
<Logo variant="mark" tone="inverse" size={32} />
<Logo variant="wordmark" lang="en" tone="ink" />
```

- `variant`: `full` (mark + word), `mark` (octopus only), `wordmark` (text only).
- `lang`: `ar` → أخطبوط (Thmanyah Serif), `en` → Akhtoboot (Thmanyah Sans, Black).
- `tone`: `brand` (purple mark, ink word), `ink` (all dark), `inverse` (all white — use on purple/teal/photo backgrounds).
- `OctopusMark` is also exported standalone for spot use.
