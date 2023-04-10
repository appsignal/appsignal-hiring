import { render, screen, fireEvent } from "@testing-library/react";
import Tooltip from "./Tooltip";

describe("Tooltip", () => {
  const build = (props) => {
    return render(
      <Tooltip content="I'm hovering" {...props}>
        <span>Hover me</span>
      </Tooltip>
    );
  };

  it("renders a tooltip", () => {
    build();

    expect(screen.getByText("Hover me")).toBeInTheDocument();
  });

  it("renders tooltip content only on hover", () => {
    build();

    expect(screen.queryByText("I'm hovering")).not.toBeInTheDocument();

    fireEvent.mouseEnter(screen.getByText("Hover me"));

    expect(screen.getByText("I'm hovering")).toBeInTheDocument();
  });
});
