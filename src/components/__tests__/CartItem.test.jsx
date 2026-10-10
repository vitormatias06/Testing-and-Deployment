
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import CartItem from "../CartItem";

const product = {
  id: 1,
  name: "Mechanical Keyboard",
  price: 79.99,
};

describe("CartItem", () => {
  it("displays the product information", () => {
    render(<CartItem product={product} onRemove={vi.fn()} />);

    expect(screen.getByText("Mechanical Keyboard")).toBeInTheDocument();
    expect(screen.getByText("$79.99")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Remove" })).toBeInTheDocument();
  });

  it("calls onRemove with the product ID when clicked", async () => {
    const user = userEvent.setup();
    const onRemove = vi.fn();

    render(<CartItem product={product} onRemove={onRemove} />);

    await user.click(screen.getByRole("button", { name: "Remove" }));

    expect(onRemove).toHaveBeenCalledWith(1);
  });
});
