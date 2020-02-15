import React from "react";
import TestRenderer from "react-test-renderer";
import Checkbox from "./Checkbox";

describe("Is the Checkbox component working?", () => {
  it("Is it rendering with label?", () => {
    TestRenderer.create(<Checkbox label="Aceito os termos" />);
  });
  it("Is it checked?", () => {
    TestRenderer.create(<Checkbox label="Aceito os termos" checked={true} />);
  });
});
