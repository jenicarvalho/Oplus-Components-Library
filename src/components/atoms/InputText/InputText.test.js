import React from "react";
import TestRenderer from "react-test-renderer";
import InputText from "./InputText";

describe("Is the InputText component working?", () => {
  it("Is it rendering with placeholder?", () => {
    TestRenderer.create(<InputText placeholder="Seu nome"/>);
  });
});
