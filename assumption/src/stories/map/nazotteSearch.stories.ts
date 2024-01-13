import type { Meta, StoryObj } from "@storybook/react";
import "leaflet/dist/leaflet.css";
import { nazotteSearch } from "@components/map/nazotte-search/main";

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

export const Main: Story = {
  args: {
    width: "640px",
    height: "480px",
    center: {
      latitude: 35.6894,
      longitude: 139.6917,
    },
    zoom: 13,
    markerPositions: [
      {
        latitude: 35.6894,
        longitude: 139.6917,
      },
    ],
  },
};
