Primary action control. Purple `primary` for the main action, teal `secondary`, `outline`/`ghost` for lower emphasis.

```jsx
<Button variant="primary" size="md">احفظ</Button>
<Button variant="outline" startIcon={<span>＋</span>}>إضافة</Button>
<Button variant="ghost" size="sm">إلغاء</Button>
```

- Sizes `sm | md | lg` (heights 36 / 44 / 54).
- `primary` carries the brand shadow that lifts on rest and presses down on click.
- Pass `startIcon` / `endIcon` for icon+label; `fullWidth` to stretch.
