import {
  Globe,
  LayoutDashboard,
  PenTool,
  BarChart3,
  Megaphone,
  Palette,
} from "lucide-react";

export const iconMap = {
  globe: Globe,
  layout: LayoutDashboard,
  pen: PenTool,
  chart: BarChart3,
  megaphone: Megaphone,
  palette: Palette,
};

export type IconKey = keyof typeof iconMap;