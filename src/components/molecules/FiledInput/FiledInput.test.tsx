import { render } from "@testing-library/react";
import TestProvider from "providers/TestProvider";
import FiledInput from "./FiledInput";

describe("FiledInput", () => {
  it("Renders", () => {
    render(
      <TestProvider>
        <FiledInput
          name="firstName"
          placeholder="Write your first name"
          value={`The component is testing`}
          onChange={() => {}}
        >
          The component is testing
        </FiledInput>
      </TestProvider>
    );
  });
});
