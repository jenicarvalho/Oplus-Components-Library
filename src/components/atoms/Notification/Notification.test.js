import React from "react";
import TestRenderer from "react-test-renderer";
import Notification from "./Notification";
import { FiUsers } from "react-icons/fi";

describe("Is the Notification component working?", () => {
  it("Is it rendering?", () => {
    TestRenderer.create(<Notification />);
  });
  it("Is it working with Icon Component?", () => {
    TestRenderer.create(
      <Notification>
        <FiUsers />
      </Notification>
    );
  });
  it("Is it working with quantity number?", () => {
    TestRenderer.create(<Notification quantityNumber={3} />);
  });
  it("Is ir rendering with custom color and font?", () => {
    TestRenderer.create(<Notification iconColor="#f90" iconFont="20px" />);
  });
});
