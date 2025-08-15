# @builtroot/ui

Tiny shared UI library. Exposes simple React components.

## Usage
```tsx
import { Button } from "@builtroot/ui";

export default function Page() {
  return <Button onClick={() => alert("Hi")}>Click me</Button>;
}
**Commit message:**

---

## 2.4 — `packages/ui/src/index.ts`
**Name:**
**Content:**
```ts
export * from "./primitives/Button";
