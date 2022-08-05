import React from "react";

export function ErrorListTemplate(props: { errors: any[] }) {
  const { errors } = props;
  return (
    <div>
      <h2>Custom error list</h2>
      <ul>
        {errors.map((error: Array<object>) => (
          <li key={error?.stack}>{error?.stack}</li>
        ))}
      </ul>
    </div>
  );
}
