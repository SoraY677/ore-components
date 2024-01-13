import type { Meta, StoryObj } from "@storybook/react";
import { Btn } from "@components/map/nazotte-search/Btn";

const meta = {
  title: "map/btn",
  component: Btn,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Btn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const start: Story = {
  args: {
    isNazotte: false,
  },
};

export const stop: Story = {
  args: {
    isNazotte: true,
  },
};
