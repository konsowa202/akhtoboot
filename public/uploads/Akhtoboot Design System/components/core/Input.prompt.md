Labeled text field with focus ring, helper text, and error state.

```jsx
<Input label="البريد الإلكتروني" placeholder="you@akhtoboot.sa" />
<Input label="الاسم" error="هذا الحقل مطلوب" />
```

- `label` / `helper` / `error` are optional; `error` overrides `helper` and turns the border + text red.
- Focus shows the purple ring. `startIcon` for a leading glyph.
