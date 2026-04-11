import {
  Globe,
  LayoutGrid,     // ✅ GANTI INI
  PenTool,
  BarChart3,
  Megaphone,
  Palette,
} from "lucide-react";

export const iconMap = {
  globe: Globe,
  layout: LayoutGrid,   // ✅ FIX
  pen: PenTool,
  chart: BarChart3,
  megaphone: Megaphone,
  palette: Palette,
};

export type IconKey = keyof typeof iconMap;