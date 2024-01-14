import type { Meta, StoryObj } from "@storybook/react";
import { nazotteSearch } from "@components/map/nazotte-search/main";
import "leaflet/dist/leaflet.css";
import { Vertex } from "@components/map/nazotte-search/types";

const meta = {
  title: "map/nazotte-search",
  component: nazotteSearch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof nazotteSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultHandler = (): Vertex[] => {
  return [
    [35.6833, 139.6945],
    [35.6894, 139.6917],
    [35.6892, 139.6913],
    [35.6892, 139.691],
    [35.689, 139.69],
  ];
};

export const Main: Story = {
  args: {
    width: "640px",
    height: "480px",
    center: {
      latitude: 35.6894,
      longitude: 139.6917,
    },
    zoom: 13,
    handler: defaultHandler,
  },
};
