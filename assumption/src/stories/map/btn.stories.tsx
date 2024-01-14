import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Btn } from "@components/map/nazotte-search/Btn";

const meta: Meta<typeof Btn> = {
  title: "map/btn",
  component: Btn,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: { onClick: { action: "clicked" } },
};

export default meta;
type Story = StoryObj<typeof meta>;

const PrimaryHook = () => {
  const [isNazotte, setIsNazotte] = useState(false);
  const clickHandler = () => {
    setIsNazotte(!isNazotte);
  };
  return <Btn isNazotte={isNazotte} onClick={clickHandler} />;
};
export const Primary: Story = {
  render: () => <PrimaryHook />,
};
/**
 * なぞって機能をスタートする際のボタン。これをクリックするとなぞって機能が有効化される。
 */
export const Start: Story = {
  args: {
    isNazotte: false,
  },
};
/**
 * なぞって機能を中止する際のボタン。これをクリックするとなぞって機能が解除される
 */
export const Stop: Story = {
  args: {
    isNazotte: true,
  },
};
