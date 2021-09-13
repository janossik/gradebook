import { render } from "test-utils";
import FiledInput from "./FiledInput";

describe("FiledInput", () => {
  it("Renders", () => {
    render(
      <FiledInput
        name="firstName"
        placeholder="Write your first name"
        value={`The component is testing`}
        onChange={() => {}}
      >
        The component is testing
      </FiledInput>
    );
  });
});
