import type { Meta, StoryObj } from "@storybook/react";

import { nazotteSearch } from "@components/map/nazotte-search/main";

import 'leaflet/dist/leaflet.css'

const meta = {
  title: "map/nazotte-search",
  component: nazotteSearch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof nazotteSearch>;

export default meta;
type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: {
    style: {
      width: "100vw",
      minHeight: "480px",
    },
    center: {
      latitude: 35.6894,
      longitude: 139.6917
    },
    zoom: 13,
    markerPositions: [{
      latitude: 35.6894,
      longitude: 139.6917
    }]
  }
}