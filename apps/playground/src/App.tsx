import React from "react";
import { Button } from "@builtroot/ui";
import { capitalize } from "@builtroot/utils";

export default function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Playground</h1>
      <p>Testing shared packages:</p>
      <ul>
        <li>
          Utils.capitalize("hello") → <b>{capitalize("hello")}</b>
        </li>
      </ul>
      <Button onClick={() => alert("Button from @builtroot/ui clicked!")}>
        Click Me
      </Button>
    </div>
  );
}
