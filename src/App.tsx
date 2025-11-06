import { useState, useEffect } from "react";
import { Menu, X, Download, Palette, Layers } from "lucide-react";
import FloralOne from "./components/floral-design-system/FloralOne";
import FloralTwo from "./components/floral-design-system/FloralTwo";
import FloralThree from "./components/floral-design-system/FloralThree";
import FloralFour from "./components/floral-design-system/FloralFour";
import FloralFive from "./components/floral-design-system/FloralFive";
import FloralSix from "./components/floral-design-system/FloralSix";
import FloralSeven from "./components/floral-design-system/FloralSeven";
import FloralEight from "./components/floral-design-system/FloralEight";
import FloralNine from "./components/floral-design-system/FloralNine";
import FloralTen from "./components/floral-design-system/FloralTen";
import FloralEleven from "./components/floral-design-system/FloralEleven";
import FloralTwelve from "./components/floral-design-system/FloralTwelve";
import FloralThirteen from "./components/floral-design-system/FloralThirteen";
import FloralFourteen from "./components/floral-design-system/FloralFourteen";
import FloralFifteen from "./components/floral-design-system/FloralFifteen";
import FloralSixteen from "./components/floral-design-system/FloralSixteen";
import FloralSeventeen from "./components/floral-design-system/FloralSeventeen";
import FloralEighteen from "./components/floral-design-system/FloralEighteen";
import FloralNineteen from "./components/floral-design-system/FloralNineteen";
import FloralTwenty from "./components/floral-design-system/FloralTwenty";
import FloralTwentyOne from "./components/floral-design-system/FloralTwentyOne";
import FloralTwentyTwo from "./components/floral-design-system/FloralTwentyTwo";
import FloralTwentyThree from "./components/floral-design-system/FloralTwentyThree";
import FloralTwentyFour from "./components/floral-design-system/FloralTwentyFour";
import FloralTwentyFive from "./components/floral-design-system/FloralTwentyFive";
import FloralTwentySix from "./components/floral-design-system/FloralTwentySix";
import FloralTwentySeven from "./components/floral-design-system/FloralTwentySeven";
import FloralTwentyEight from "./components/floral-design-system/FloralTwentyEight";
import FloralTwentyNine from "./components/floral-design-system/FloralTwentyNine";
import FloralThirty from "./components/floral-design-system/FloralThirty";
import FloralThirtyOne from "./components/floral-design-system/FloralThirtyOne";
import FloralThirtyTwo from "./components/floral-design-system/FloralThirtyTwo";
import FloralThirtyThree from "./components/floral-design-system/FloralThirtyThree";
import FloralThirtyFour from "./components/floral-design-system/FloralThirtyFour";
import FloralThirtyFive from "./components/floral-design-system/FloralThirtyFive";
import FloralThirtySix from "./components/floral-design-system/FloralThirtySix";
import FloralThirtySeven from "./components/floral-design-system/FloralThirtySeven";
import FloralThirtyEight from "./components/floral-design-system/FloralThirtyEight";
import FloralThirtyNine from "./components/floral-design-system/FloralThirtyNine";
import FloralForty from "./components/floral-design-system/FloralForty";
import FloralFortyOne from "./components/floral-design-system/FloralFortyOne";
import FloralFortyTwo from "./components/floral-design-system/FloralFortyTwo";
import FloralFortyThree from "./components/floral-design-system/FloralFortyThree";
import FloralFortyFour from "./components/floral-design-system/FloralFortyFour";
import FloralFortyFive from "./components/floral-design-system/FloralFortyFive";
import FloralFortySix from "./components/floral-design-system/FloralFortySix";
import FloralFortySeven from "./components/floral-design-system/FloralFortySeven";
import FloralFortyEight from "./components/floral-design-system/FloralFortyEight";
import FloralFortyNine from "./components/floral-design-system/FloralFortyNine";
import FloralFifty from "./components/floral-design-system/FloralFifty";
import FloralFiftyOne from "./components/floral-design-system/FloralFiftyOne";
import FloralFiftyTwo from "./components/floral-design-system/FloralFiftyTwo";
import FloralFiftyThree from "./components/floral-design-system/FloralFiftyThree";
import FloralFiftyFour from "./components/floral-design-system/FloralFiftyFour";
import FloralFiftyFive from "./components/floral-design-system/FloralFiftyFive";
import FloralFiftySix from "./components/floral-design-system/FloralFiftySix";
import FloralFiftySeven from "./components/floral-design-system/FloralFiftySeven";
import FloralFiftyEight from "./components/floral-design-system/FloralFiftyEight";
import FloralFiftyNine from "./components/floral-design-system/FloralFiftyNine";
import FloralSixty from "./components/floral-design-system/FloralSixty";
import StemOne from "./components/floral-design-system/StemOne";
import StemTwo from "./components/floral-design-system/StemTwo";
import StemThree from "./components/floral-design-system/StemThree";
import StemFour from "./components/floral-design-system/StemFour";
import StemFive from "./components/floral-design-system/StemFive";
import StemSix from "./components/floral-design-system/StemSix";
import StemSeven from "./components/floral-design-system/StemSeven";
import StemEight from "./components/floral-design-system/StemEight";
import StemNine from "./components/floral-design-system/StemNine";
import StemTen from "./components/floral-design-system/StemTen";
import StemEleven from "./components/floral-design-system/StemEleven";
import StemTwelve from "./components/floral-design-system/StemTwelve";
import StemThirteen from "./components/floral-design-system/StemThirteen";
import StemFourteen from "./components/floral-design-system/StemFourteen";
import StemFifteen from "./components/floral-design-system/StemFifteen";
import StemSixteen from "./components/floral-design-system/StemSixteen";
import StemSeventeen from "./components/floral-design-system/StemSeventeen";
import StemEighteen from "./components/floral-design-system/StemEighteen";
import StemNineteen from "./components/floral-design-system/StemNineteen";
import StemTwenty from "./components/floral-design-system/StemTwenty";
import StemTwentyOne from "./components/floral-design-system/StemTwentyOne";
import StemTwentyTwo from "./components/floral-design-system/StemTwentyTwo";
import StemTwentyThree from "./components/floral-design-system/StemTwentyThree";
import StemTwentyFour from "./components/floral-design-system/StemTwentyFour";
import StemTwentyFive from "./components/floral-design-system/StemTwentyFive";
import StemTwentySix from "./components/floral-design-system/StemTwentySix";
import StemTwentySeven from "./components/floral-design-system/StemTwentySeven";
import StemTwentyEight from "./components/floral-design-system/StemTwentyEight";
import StemTwentyNine from "./components/floral-design-system/StemTwentyNine";
import StemThirty from "./components/floral-design-system/StemThirty";
import StemThirtyOne from "./components/floral-design-system/StemThirtyOne";
import StemThirtyTwo from "./components/floral-design-system/StemThirtyTwo";
import StemThirtyThree from "./components/floral-design-system/StemThirtyThree";
import StemThirtyFour from "./components/floral-design-system/StemThirtyFour";
import StemThirtyFive from "./components/floral-design-system/StemThirtyFive";
import StemThirtySix from "./components/floral-design-system/StemThirtySix";
import StemThirtySeven from "./components/floral-design-system/StemThirtySeven";
import StemThirtyEight from "./components/floral-design-system/StemThirtyEight";
import StemThirtyNine from "./components/floral-design-system/StemThirtyNine";
import StemForty from "./components/floral-design-system/StemForty";
import ElectricFloralOne from "./components/floral-design-system/ElectricFloralOne";
import ElectricFloralTwo from "./components/floral-design-system/ElectricFloralTwo";
import ElectricFloralThree from "./components/floral-design-system/ElectricFloralThree";
import ElectricFloralFour from "./components/floral-design-system/ElectricFloralFour";
import ElectricFloralFive from "./components/floral-design-system/ElectricFloralFive";
import ElectricFloralSix from "./components/floral-design-system/ElectricFloralSix";
import ElectricFloralSeven from "./components/floral-design-system/ElectricFloralSeven";
import ElectricFloralEight from "./components/floral-design-system/ElectricFloralEight";
import ElectricFloralNine from "./components/floral-design-system/ElectricFloralNine";
import ElectricFloralTen from "./components/floral-design-system/ElectricFloralTen";
import ElectricStemOne from "./components/floral-design-system/ElectricStemOne";
import ElectricStemTwo from "./components/floral-design-system/ElectricStemTwo";
import ElectricStemThree from "./components/floral-design-system/ElectricStemThree";
import ElectricStemFour from "./components/floral-design-system/ElectricStemFour";
import ElectricStemFive from "./components/floral-design-system/ElectricStemFive";
import ElectricFloralEleven from "./components/floral-design-system/ElectricFloralEleven";
import ElectricFloralTwelve from "./components/floral-design-system/ElectricFloralTwelve";
import ElectricFloralThirteen from "./components/floral-design-system/ElectricFloralThirteen";
import ElectricFloralFourteen from "./components/floral-design-system/ElectricFloralFourteen";
import ElectricFloralFifteen from "./components/floral-design-system/ElectricFloralFifteen";
import ElectricFloralSixteen from "./components/floral-design-system/ElectricFloralSixteen";
import ElectricFloralSeventeen from "./components/floral-design-system/ElectricFloralSeventeen";
import ElectricFloralEighteen from "./components/floral-design-system/ElectricFloralEighteen";
import ElectricFloralNineteen from "./components/floral-design-system/ElectricFloralNineteen";
import ElectricFloralTwenty from "./components/floral-design-system/ElectricFloralTwenty";
import ElectricFloralTwentyOne from "./components/floral-design-system/ElectricFloralTwentyOne";
import ElectricFloralTwentyTwo from "./components/floral-design-system/ElectricFloralTwentyTwo";
import ElectricFloralTwentyThree from "./components/floral-design-system/ElectricFloralTwentyThree";
import ElectricFloralTwentyFour from "./components/floral-design-system/ElectricFloralTwentyFour";
import ElectricFloralTwentyFive from "./components/floral-design-system/ElectricFloralTwentyFive";
import ElectricStemSix from "./components/floral-design-system/ElectricStemSix";
import ElectricStemSeven from "./components/floral-design-system/ElectricStemSeven";
import ElectricStemEight from "./components/floral-design-system/ElectricStemEight";
import ElectricStemNine from "./components/floral-design-system/ElectricStemNine";
import ElectricStemTen from "./components/floral-design-system/ElectricStemTen";
import ElectricStemEleven from "./components/floral-design-system/ElectricStemEleven";
import ElectricStemTwelve from "./components/floral-design-system/ElectricStemTwelve";
import ElectricStemThirteen from "./components/floral-design-system/ElectricStemThirteen";
import ElectricStemFourteen from "./components/floral-design-system/ElectricStemFourteen";
import ElectricStemFifteen from "./components/floral-design-system/ElectricStemFifteen";
import ElectricFloralTwentySix from "./components/floral-design-system/ElectricFloralTwentySix";
import ElectricFloralTwentySeven from "./components/floral-design-system/ElectricFloralTwentySeven";
import ElectricFloralTwentyEight from "./components/floral-design-system/ElectricFloralTwentyEight";
import ElectricFloralTwentyNine from "./components/floral-design-system/ElectricFloralTwentyNine";
import ElectricFloralThirty from "./components/floral-design-system/ElectricFloralThirty";
import ElectricFloralThirtyOne from "./components/floral-design-system/ElectricFloralThirtyOne";
import ElectricFloralThirtyTwo from "./components/floral-design-system/ElectricFloralThirtyTwo";
import ElectricFloralThirtyThree from "./components/floral-design-system/ElectricFloralThirtyThree";
import ElectricFloralThirtyFour from "./components/floral-design-system/ElectricFloralThirtyFour";
import ElectricFloralThirtyFive from "./components/floral-design-system/ElectricFloralThirtyFive";
import ElectricFloralThirtySix from "./components/floral-design-system/ElectricFloralThirtySix";
import ElectricFloralThirtySeven from "./components/floral-design-system/ElectricFloralThirtySeven";
import ElectricFloralThirtyEight from "./components/floral-design-system/ElectricFloralThirtyEight";
import ElectricFloralThirtyNine from "./components/floral-design-system/ElectricFloralThirtyNine";
import ElectricFloralForty from "./components/floral-design-system/ElectricFloralForty";
import TileImageCard from "./components/floral-design-system/TileImageCard";
import VectorCard from "./components/floral-design-system/VectorCard";
import { floralColors } from "./components/floral-design-system/colors";

type Category = "all" | "florals" | "stems";
type Edition = "all" | "october2025" | "electric";

interface DesignItem {
  Component: React.ComponentType<{ size?: number; className?: string }>;
  name: string;
  desc: string;
  colors: string[];
  category: "floral" | "stem";
  edition: "october2025" | "electric";
}

const allDesignsBase: Omit<DesignItem, "edition">[] = [
  // Florals - October 2025 Edition
  { Component: FloralOne, name: "FloralOne", desc: "Coral red 6-petal daisy", colors: ["#E64A2E", "#1A1A1A"], category: "floral" },
  { Component: FloralTwo, name: "FloralTwo", desc: "Teal blue 8-petal sunburst", colors: ["#4A7C8C", "#F5EFE0"], category: "floral" },
  { Component: FloralThree, name: "FloralThree", desc: "Black & coral layered", colors: ["#1A1A1A", "#E64A2E", "#F5EFE0"], category: "floral" },
  { Component: FloralFour, name: "FloralFour", desc: "Cream clover with diamond", colors: ["#F5EFE0", "#4A7C8C"], category: "floral" },
  { Component: FloralFive, name: "FloralFive", desc: "Coral & black alternating", colors: ["#E64A2E", "#1A1A1A", "#F5EFE0"], category: "floral" },
  { Component: FloralSix, name: "FloralSix", desc: "Black with coral accent", colors: ["#1A1A1A", "#E64A2E", "#F5EFE0"], category: "floral" },
  { Component: FloralSeven, name: "FloralSeven", desc: "Teal & cream double", colors: ["#4A7C8C", "#F5EFE0", "#1A1A1A"], category: "floral" },
  { Component: FloralEight, name: "FloralEight", desc: "Coral tulip", colors: ["#E64A2E", "#E8663F", "#1A1A1A"], category: "floral" },
  { Component: FloralNine, name: "FloralNine", desc: "Geometric striped", colors: ["#1A1A1A", "#F5EFE0"], category: "floral" },
  { Component: FloralTen, name: "FloralTen", desc: "Teal & coral pair", colors: ["#4A7C8C", "#E64A2E", "#F5EFE0", "#1A1A1A"], category: "floral" },
  { Component: FloralEleven, name: "FloralEleven", desc: "Cream starburst", colors: ["#F5EFE0", "#1A1A1A"], category: "floral" },
  { Component: FloralTwelve, name: "FloralTwelve", desc: "Multi-color abstract", colors: ["#E64A2E", "#4A7C8C", "#F5EFE0", "#1A1A1A", "#E8663F"], category: "floral" },
  { Component: FloralThirteen, name: "FloralThirteen", desc: "Terracotta & sage layered", colors: ["#C9604A", "#9CAF88", "#F5EFE0"], category: "floral" },
  { Component: FloralFourteen, name: "FloralFourteen", desc: "Mustard sunburst", colors: ["#D4A62A", "#7A8450"], category: "floral" },
  { Component: FloralFifteen, name: "FloralFifteen", desc: "Lavender & rose daisy", colors: ["#B8A9C9", "#C9858D"], category: "floral" },
  { Component: FloralSixteen, name: "FloralSixteen", desc: "Mint green clover", colors: ["#A8C9B8", "#2F5B6B"], category: "floral" },
  { Component: FloralSeventeen, name: "FloralSeventeen", desc: "Coral & orange abstract", colors: ["#F08080", "#D47647", "#FAF7F2"], category: "floral" },
  { Component: FloralEighteen, name: "FloralEighteen", desc: "Olive & gold geometric", colors: ["#F2A818", "#7A8450", "#1A1A1A"], category: "floral" },
  { Component: FloralNineteen, name: "FloralNineteen", desc: "Rose striped modern", colors: ["#C9858D", "#F5EFE0", "#2D2D2D"], category: "floral" },
  { Component: FloralTwenty, name: "FloralTwenty", desc: "Teal & terracotta tulip", colors: ["#2F5B6B", "#C9604A"], category: "floral" },
  { Component: FloralTwentyOne, name: "FloralTwentyOne", desc: "Sage & mustard alternating", colors: ["#9CAF88", "#D4A62A", "#1A1A1A"], category: "floral" },
  { Component: FloralTwentyTwo, name: "FloralTwentyTwo", desc: "Lavender double ring", colors: ["#B8A9C9", "#E8DCC8"], category: "floral" },
  { Component: FloralTwentyThree, name: "FloralTwentyThree", desc: "Orange & mint bloom", colors: ["#D47647", "#A8C9B8", "#FAF7F2"], category: "floral" },
  { Component: FloralTwentyFour, name: "FloralTwentyFour", desc: "Soft coral star", colors: ["#F08080", "#E8DCC8", "#2D2D2D"], category: "floral" },
  { Component: FloralTwentyFive, name: "FloralTwentyFive", desc: "Triple bloom cluster", colors: ["#C9604A", "#7A8450", "#F5EFE0"], category: "floral" },
  { Component: FloralTwentySix, name: "FloralTwentySix", desc: "Mustard & teal pinwheel", colors: ["#D4A62A", "#2F5B6B", "#F5EFE0"], category: "floral" },
  { Component: FloralTwentySeven, name: "FloralTwentySeven", desc: "Rose & lavender dahlia", colors: ["#C9858D", "#B8A9C9", "#F5EFE0"], category: "floral" },
  { Component: FloralTwentyEight, name: "FloralTwentyEight", desc: "Mint & coral simple", colors: ["#A8C9B8", "#F08080", "#FAF7F2"], category: "floral" },
  { Component: FloralTwentyNine, name: "FloralTwentyNine", desc: "Sage geometric square", colors: ["#9CAF88", "#D47647", "#E8DCC8", "#1A1A1A"], category: "floral" },
  { Component: FloralThirty, name: "FloralThirty", desc: "Terracotta layered circles", colors: ["#C9604A", "#B8A9C9", "#F5EFE0"], category: "floral" },
  { Component: FloralThirtyOne, name: "FloralThirtyOne", desc: "Teal & gold bold daisy", colors: ["#2F5B6B", "#F2A818", "#1A1A1A"], category: "floral" },
  { Component: FloralThirtyTwo, name: "FloralThirtyTwo", desc: "Rainbow celebration", colors: ["#E64A2E", "#4A7C8C", "#F2A818", "#9CAF88", "#B8A9C9", "#C9858D", "#D4A62A", "#F08080", "#7A8450", "#D47647"], category: "floral" },
  { Component: FloralThirtyThree, name: "FloralThirtyThree", desc: "Geometric starburst", colors: ["#E64A2E", "#4A7C8C", "#F5EFE0", "#1A1A1A"], category: "floral" },
  { Component: FloralThirtyFour, name: "FloralThirtyFour", desc: "Abstract leaf pattern", colors: ["#E64A2E", "#4A7C8C", "#F5EFE0", "#1A1A1A"], category: "floral" },
  { Component: FloralThirtyFive, name: "FloralThirtyFive", desc: "Layered floral design", colors: ["#E64A2E", "#4A7C8C", "#F5EFE0", "#1A1A1A"], category: "floral" },
  { Component: FloralThirtySix, name: "FloralThirtySix", desc: "Geometric sunburst", colors: ["#E64A2E", "#4A7C8C", "#F5EFE0", "#1A1A1A"], category: "floral" },
  { Component: FloralThirtySeven, name: "FloralThirtySeven", desc: "Abstract floral pattern", colors: ["#E64A2E", "#4A7C8C", "#F5EFE0", "#1A1A1A"], category: "floral" },
  { Component: FloralThirtyEight, name: "FloralThirtyEight", desc: "Geometric leaf pattern", colors: ["#E64A2E", "#4A7C8C", "#F5EFE0", "#1A1A1A"], category: "floral" },
  { Component: FloralThirtyNine, name: "FloralThirtyNine", desc: "Abstract sunburst", colors: ["#E64A2E", "#4A7C8C", "#F5EFE0", "#1A1A1A"], category: "floral" },
  { Component: FloralForty, name: "FloralForty", desc: "Geometric floral design", colors: ["#E64A2E", "#4A7C8C", "#F5EFE0", "#1A1A1A"], category: "floral" },
  { Component: FloralFortyOne, name: "FloralFortyOne", desc: "Abstract leaf design", colors: ["#E64A2E", "#4A7C8C", "#F5EFE0", "#1A1A1A"], category: "floral" },
  { Component: FloralFortyTwo, name: "FloralFortyTwo", desc: "Geometric leaf design", colors: ["#E64A2E", "#4A7C8C", "#F5EFE0", "#1A1A1A"], category: "floral" },
  { Component: FloralFortyThree, name: "FloralFortyThree", desc: "Abstract floral design", colors: ["#E64A2E", "#4A7C8C", "#F5EFE0", "#1A1A1A"], category: "floral" },
  { Component: FloralFortyFour, name: "FloralFortyFour", desc: "Geometric sunburst design", colors: ["#E64A2E", "#4A7C8C", "#F5EFE0", "#1A1A1A"], category: "floral" },
  { Component: FloralFortyFive, name: "FloralFortyFive", desc: "Abstract sunburst design", colors: ["#E64A2E", "#4A7C8C", "#F5EFE0", "#1A1A1A"], category: "floral" },
  { Component: FloralFortySix, name: "FloralFortySix", desc: "Geometric leaf design", colors: ["#E64A2E", "#4A7C8C", "#F5EFE0", "#1A1A1A"], category: "floral" },
  { Component: FloralFortySeven, name: "FloralFortySeven", desc: "Abstract leaf design", colors: ["#E64A2E", "#4A7C8C", "#F5EFE0", "#1A1A1A"], category: "floral" },
  { Component: FloralFortyEight, name: "FloralFortyEight", desc: "Geometric sunburst design", colors: ["#E64A2E", "#4A7C8C", "#F5EFE0", "#1A1A1A"], category: "floral" },
  { Component: FloralFortyNine, name: "FloralFortyNine", desc: "Abstract sunburst design", colors: ["#E64A2E", "#4A7C8C", "#F5EFE0", "#1A1A1A"], category: "floral" },
  { Component: FloralFifty, name: "FloralFifty", desc: "Geometric leaf design", colors: ["#E64A2E", "#4A7C8C", "#F5EFE0", "#1A1A1A"], category: "floral" },
  { Component: FloralFiftyOne, name: "FloralFiftyOne", desc: "Abstract leaf design", colors: ["#E64A2E", "#4A7C8C", "#F5EFE0", "#1A1A1A"], category: "floral" },
  { Component: FloralFiftyTwo, name: "FloralFiftyTwo", desc: "Geometric sunburst design", colors: ["#E64A2E", "#4A7C8C", "#F5EFE0", "#1A1A1A"], category: "floral" },
  { Component: FloralFiftyThree, name: "FloralFiftyThree", desc: "Mustard & teal triangular starburst", colors: ["#D4A62A", "#2F5B6B", "#F5EFE0", "#C9604A"], category: "floral" },
  { Component: FloralFiftyFour, name: "FloralFiftyFour", desc: "Lavender rotated squares", colors: ["#B8A9C9", "#F5EFE0", "#9CAF88", "#E64A2E"], category: "floral" },
  { Component: FloralFiftyFive, name: "FloralFiftyFive", desc: "Warm gradient 12-petal bloom", colors: ["#F08080", "#D47647", "#F2A818"], category: "floral" },
  { Component: FloralFiftySix, name: "FloralFiftySix", desc: "Cool tones mandala circles", colors: ["#4A7C8C", "#A8C9B8", "#F5EFE0", "#2F5B6B"], category: "floral" },
  { Component: FloralFiftySeven, name: "FloralFiftySeven", desc: "Layered hexagon bloom", colors: ["#C9604A", "#F5EFE0", "#7A8450", "#D4A62A"], category: "floral" },
  { Component: FloralFiftyEight, name: "FloralFiftyEight", desc: "Art deco fan pattern", colors: ["#C9858D", "#B8A9C9", "#FAF7F2", "#E64A2E"], category: "floral" },
  { Component: FloralFiftyNine, name: "FloralFiftyNine", desc: "Flower-of-life sacred geometry", colors: ["#9CAF88", "#A8C9B8", "#7A8450", "#F2A818"], category: "floral" },
  { Component: FloralSixty, name: "FloralSixty", desc: "Minimalist four-petal cross", colors: ["#D47647", "#2F5B6B", "#F5EFE0", "#E64A2E"], category: "floral" },
  
  // Stems
  { Component: StemOne, name: "StemOne", desc: "Simple two-leaf stem", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemTwo, name: "StemTwo", desc: "Four-leaf classic stem", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemThree, name: "StemThree", desc: "Curved alternating leaves", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemFour, name: "StemFour", desc: "Branching with buds", colors: ["#7A8450", "#9CAF88", "#E64A2E"], category: "stem" },
  { Component: StemFive, name: "StemFive", desc: "Tall six-leaf stem", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemSix, name: "StemSix", desc: "Single large leaf", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemSeven, name: "StemSeven", desc: "Heart-shaped leaves", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemEight, name: "StemEight", desc: "Double curved stems", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemNine, name: "StemNine", desc: "Fern-like multi-leaf", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemTen, name: "StemTen", desc: "Bamboo segmented", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemEleven, name: "StemEleven", desc: "Willow drooping style", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemTwelve, name: "StemTwelve", desc: "Vine spiral stem", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemThirteen, name: "StemThirteen", desc: "Triple branch with berries", colors: ["#7A8450", "#9CAF88", "#C9604A"], category: "stem" },
  { Component: StemFourteen, name: "StemFourteen", desc: "Eucalyptus rounded pairs", colors: ["#7A8450", "#A8C9B8"], category: "stem" },
  { Component: StemFifteen, name: "StemFifteen", desc: "Palm frond radiating leaves", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemSixteen, name: "StemSixteen", desc: "Monstera split leaf", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemSeventeen, name: "StemSeventeen", desc: "Cascading ivy heart leaves", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemEighteen, name: "StemEighteen", desc: "Wheat stalk with grains", colors: ["#7A8450", "#D4A62A"], category: "stem" },
  { Component: StemNineteen, name: "StemNineteen", desc: "Double helix intertwined", colors: ["#7A8450", "#9CAF88", "#A8C9B8"], category: "stem" },
  { Component: StemTwenty, name: "StemTwenty", desc: "Tropical bird of paradise", colors: ["#7A8450", "#9CAF88", "#A8C9B8"], category: "stem" },
  { Component: StemTwentyOne, name: "StemTwentyOne", desc: "Willow drooping style", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemTwentyTwo, name: "StemTwentyTwo", desc: "Vine spiral stem", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemTwentyThree, name: "StemTwentyThree", desc: "Curved leaf stem", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemTwentyFour, name: "StemTwentyFour", desc: "Branching stem with leaves", colors: ["#7A8450", "#9CAF88", "#E64A2E"], category: "stem" },
  { Component: StemTwentyFive, name: "StemTwentyFive", desc: "Tall leaf stem", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemTwentySix, name: "StemTwentySix", desc: "Single large leaf", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemTwentySeven, name: "StemTwentySeven", desc: "Heart-shaped leaves", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemTwentyEight, name: "StemTwentyEight", desc: "Double curved stems", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemTwentyNine, name: "StemTwentyNine", desc: "Fern-like multi-leaf", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemThirty, name: "StemThirty", desc: "Bamboo segmented", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemThirtyOne, name: "StemThirtyOne", desc: "Willow drooping style", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemThirtyTwo, name: "StemThirtyTwo", desc: "Vine spiral stem", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemThirtyThree, name: "StemThirtyThree", desc: "Triple branch with berries", colors: ["#7A8450", "#9CAF88", "#C9604A"], category: "stem" },
  { Component: StemThirtyFour, name: "StemThirtyFour", desc: "Eucalyptus rounded pairs", colors: ["#7A8450", "#A8C9B8"], category: "stem" },
  { Component: StemThirtyFive, name: "StemThirtyFive", desc: "Palm frond radiating leaves", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemThirtySix, name: "StemThirtySix", desc: "Monstera split leaf", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemThirtySeven, name: "StemThirtySeven", desc: "Cascading ivy heart leaves", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemThirtyEight, name: "StemThirtyEight", desc: "Wheat stalk with grains", colors: ["#7A8450", "#D4A62A"], category: "stem" },
  { Component: StemThirtyNine, name: "StemThirtyNine", desc: "Double helix intertwined", colors: ["#7A8450", "#9CAF88", "#A8C9B8"], category: "stem" },
  { Component: StemForty, name: "StemForty", desc: "Tropical bird of paradise", colors: ["#7A8450", "#9CAF88", "#A8C9B8"], category: "stem" },
];

// Retro Florals designs (1930s Art Deco)
const electricDesigns: Omit<DesignItem, "edition">[] = [
  // Retro Florals - Art Deco Elegance
  { Component: ElectricFloralOne, name: "ElectricFloralOne", desc: "Art Deco sunburst with dusty gold rays", colors: ["#D4A574", "#7A9299", "#8FA396", "#1A1614"], category: "floral" },
  { Component: ElectricFloralTwo, name: "ElectricFloralTwo", desc: "Hexagonal geometric bloom", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582"], category: "floral" },
  { Component: ElectricFloralThree, name: "ElectricFloralThree", desc: "Triangular Art Deco petals", colors: ["#D4A574", "#7A9299", "#8FA396", "#E8DCC8"], category: "floral" },
  { Component: ElectricFloralFour, name: "ElectricFloralFour", desc: "Geometric grid mandala", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582"], category: "floral" },
  { Component: ElectricFloralFive, name: "ElectricFloralFive", desc: "Concentric ring bloom", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582", "#A89080"], category: "floral" },
  { Component: ElectricFloralSix, name: "ElectricFloralSix", desc: "Art Deco circuit flower", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582", "#A89080"], category: "floral" },
  { Component: ElectricFloralSeven, name: "ElectricFloralSeven", desc: "Triangular layered bloom", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582", "#A89080"], category: "floral" },
  { Component: ElectricFloralEight, name: "ElectricFloralEight", desc: "Stepped pyramid rings", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582", "#A89080"], category: "floral" },
  { Component: ElectricFloralNine, name: "ElectricFloralNine", desc: "Pixelated geometric flower", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582", "#A89080", "#B39C87"], category: "floral" },
  { Component: ElectricFloralTen, name: "ElectricFloralTen", desc: "Radiating star burst", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582", "#A89080"], category: "floral" },
  { Component: ElectricFloralEleven, name: "ElectricFloralEleven", desc: "Pentagonal star bloom", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582", "#A89080"], category: "floral" },
  { Component: ElectricFloralTwelve, name: "ElectricFloralTwelve", desc: "Octagonal layered mandala", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582", "#A89080", "#B39C87"], category: "floral" },
  { Component: ElectricFloralThirteen, name: "ElectricFloralThirteen", desc: "Spiral Art Deco bloom", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582", "#A89080", "#B39C87"], category: "floral" },
  { Component: ElectricFloralFourteen, name: "ElectricFloralFourteen", desc: "Geometric mandala layers", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582", "#A89080", "#B39C87"], category: "floral" },
  { Component: ElectricFloralFifteen, name: "ElectricFloralFifteen", desc: "Cascading vertical pattern", colors: ["#D4A574", "#7A9299", "#8FA396"], category: "floral" },
  { Component: ElectricFloralSixteen, name: "ElectricFloralSixteen", desc: "Interlocking circular motif", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582"], category: "floral" },
  { Component: ElectricFloralSeventeen, name: "ElectricFloralSeventeen", desc: "Chevron wave pattern", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582", "#A89080", "#B39C87"], category: "floral" },
  { Component: ElectricFloralEighteen, name: "ElectricFloralEighteen", desc: "Flower of life sacred geometry", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582", "#A89080", "#B39C87"], category: "floral" },
  { Component: ElectricFloralNineteen, name: "ElectricFloralNineteen", desc: "Fractal crystalline triangles", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582", "#A89080", "#B39C87"], category: "floral" },
  { Component: ElectricFloralTwenty, name: "ElectricFloralTwenty", desc: "Radial beam projector", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582", "#A89080"], category: "floral" },
  { Component: ElectricFloralTwentyOne, name: "ElectricFloralTwentyOne", desc: "Interconnected node pattern", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582", "#A89080", "#B39C87"], category: "floral" },
  { Component: ElectricFloralTwentyTwo, name: "ElectricFloralTwentyTwo", desc: "Radar sweep pattern", colors: ["#D4A574", "#7A9299", "#8FA396"], category: "floral" },
  { Component: ElectricFloralTwentyThree, name: "ElectricFloralTwentyThree", desc: "Vortex energy bloom", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582", "#A89080", "#B39C87"], category: "floral" },
  { Component: ElectricFloralTwentyFour, name: "ElectricFloralTwentyFour", desc: "Cubic projection", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582", "#A89080"], category: "floral" },
  { Component: ElectricFloralTwentyFive, name: "ElectricFloralTwentyFive", desc: "Orbital bloom rings", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582", "#A89080"], category: "floral" },
  { Component: ElectricFloralTwentySix, name: "ElectricFloralTwentySix", desc: "Monochrome dusty gold starburst", colors: ["#D4A574"], category: "floral" },
  { Component: ElectricFloralTwentySeven, name: "ElectricFloralTwentySeven", desc: "Monochrome dusty teal geometric web", colors: ["#7A9299"], category: "floral" },
  { Component: ElectricFloralTwentyEight, name: "ElectricFloralTwentyEight", desc: "Monochrome sage green square grid", colors: ["#8FA396"], category: "floral" },
  { Component: ElectricFloralTwentyNine, name: "ElectricFloralTwentyNine", desc: "Monochrome light gold concentric bloom", colors: ["#C4A582"], category: "floral" },
  { Component: ElectricFloralThirty, name: "ElectricFloralThirty", desc: "Monochrome dusty mauve radiating star", colors: ["#A89080"], category: "floral" },
  { Component: ElectricFloralThirtyOne, name: "ElectricFloralThirtyOne", desc: "Monochrome wheat circular mandala", colors: ["#B39C87"], category: "floral" },
  { Component: ElectricFloralThirtyTwo, name: "ElectricFloralThirtyTwo", desc: "Monochrome warm grey diamond lattice", colors: ["#9B8B7E"], category: "floral" },
  { Component: ElectricFloralThirtyThree, name: "ElectricFloralThirtyThree", desc: "Monochrome warm brown sunburst", colors: ["#8B7355"], category: "floral" },
  { Component: ElectricFloralThirtyFour, name: "ElectricFloralThirtyFour", desc: "Monochrome warm beige layered flower", colors: ["#C9A690"], category: "floral" },
  { Component: ElectricFloralThirtyFive, name: "ElectricFloralThirtyFive", desc: "Monochrome dusty gold pentagon star", colors: ["#D4A574"], category: "floral" },
  { Component: ElectricFloralThirtySix, name: "ElectricFloralThirtySix", desc: "Monochrome dusty teal layered hexagons", colors: ["#7A9299"], category: "floral" },
  { Component: ElectricFloralThirtySeven, name: "ElectricFloralThirtySeven", desc: "Monochrome sage green spiral galaxy", colors: ["#8FA396"], category: "floral" },
  { Component: ElectricFloralThirtyEight, name: "ElectricFloralThirtyEight", desc: "Monochrome light gold Art Deco fan", colors: ["#C4A582"], category: "floral" },
  { Component: ElectricFloralThirtyNine, name: "ElectricFloralThirtyNine", desc: "Monochrome dusty mauve concentric squares", colors: ["#A89080"], category: "floral" },
  { Component: ElectricFloralForty, name: "ElectricFloralForty", desc: "Monochrome wheat kaleidoscope", colors: ["#B39C87"], category: "floral" },
  
  { Component: ElectricStemOne, name: "ElectricStemOne", desc: "Botanical wire stem with Art Deco nodes", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582"], category: "stem" },
  { Component: ElectricStemTwo, name: "ElectricStemTwo", desc: "Zigzag geometric stem", colors: ["#C4A582", "#D4A574", "#7A9299", "#8FA396"], category: "stem" },
  { Component: ElectricStemThree, name: "ElectricStemThree", desc: "Branching stem with elegant leaves", colors: ["#D4A574", "#7A9299", "#8FA396"], category: "stem" },
  { Component: ElectricStemFour, name: "ElectricStemFour", desc: "Triple stem with graduated blooms", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582", "#A89080", "#B39C87"], category: "stem" },
  { Component: ElectricStemFive, name: "ElectricStemFive", desc: "Curved S-stem with ornamental nodes", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582", "#A89080", "#B39C87"], category: "stem" },
  { Component: ElectricStemSix, name: "ElectricStemSix", desc: "Zigzag stem with alternating blooms", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582", "#A89080"], category: "stem" },
  { Component: ElectricStemSeven, name: "ElectricStemSeven", desc: "Willow branch with cascading leaves", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582"], category: "stem" },
  { Component: ElectricStemEight, name: "ElectricStemEight", desc: "Botanical specimen with symmetrical leaves", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582", "#A89080", "#B39C87"], category: "stem" },
  { Component: ElectricStemNine, name: "ElectricStemNine", desc: "Wheat stalk with geometric grains", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582", "#A89080"], category: "stem" },
  { Component: ElectricStemTen, name: "ElectricStemTen", desc: "Bamboo-inspired segmented stem", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582", "#A89080"], category: "stem" },
  { Component: ElectricStemEleven, name: "ElectricStemEleven", desc: "Fern frond with geometric pinnae", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582"], category: "stem" },
  { Component: ElectricStemTwelve, name: "ElectricStemTwelve", desc: "Ivy vine with climbing tendrils", colors: ["#D4A574", "#7A9299", "#8FA396"], category: "stem" },
  { Component: ElectricStemThirteen, name: "ElectricStemThirteen", desc: "Cattail bulrush stems", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582", "#A89080", "#B39C87"], category: "stem" },
  { Component: ElectricStemFourteen, name: "ElectricStemFourteen", desc: "Thistle with spiky Art Deco crown", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582", "#A89080"], category: "stem" },
  { Component: ElectricStemFifteen, name: "ElectricStemFifteen", desc: "Lotus stem rising from water", colors: ["#D4A574", "#7A9299", "#8FA396", "#C4A582", "#A89080", "#B39C87"], category: "stem" },
];

// Combine all designs with their editions
const allDesigns: DesignItem[] = [
  ...allDesignsBase.map(design => ({ ...design, edition: "october2025" as const })),
  ...electricDesigns.map(design => ({ ...design, edition: "electric" as const })),
];

export default function App() {
  const [categoryFilter, setCategoryFilter] = useState<Category>("all");
  const [editionFilter, setEditionFilter] = useState<Edition>("all");
  const [activeSection, setActiveSection] = useState<string>("gallery");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const filteredDesigns = allDesigns.filter(design => {
    const matchesCategory = 
      categoryFilter === "all" ||
      (categoryFilter === "florals" && design.category === "floral") ||
      (categoryFilter === "stems" && design.category === "stem");
    
    const matchesEdition = 
      editionFilter === "all" ||
      design.edition === editionFilter;

    return matchesCategory && matchesEdition;
  });

  const floralCount = allDesigns.filter(d => d.category === "floral").length;
  const stemCount = allDesigns.filter(d => d.category === "stem").length;
  const october2025Count = allDesigns.filter(d => d.edition === "october2025").length;
  const electricCount = allDesigns.filter(d => d.edition === "electric").length;

  // Close mobile menu when section changes
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  // Detect scroll for sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Luxury Header with Scroll Detection */}
      <header className={`luxury-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="luxury-title">
                Floral Design System
              </h1>
              <p className="meta-label mt-1">{floralCount + stemCount} geometric designs</p>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              <button
                onClick={() => setActiveSection("gallery")}
                className={`capsule-btn capsule-btn-peach ${
                  activeSection === "gallery" ? "capsule-btn-active" : ""
                }`}
              >
                Gallery
              </button>
              <button
                onClick={() => setActiveSection("vectors")}
                className={`capsule-btn capsule-btn-mint ${
                  activeSection === "vectors" ? "capsule-btn-active" : ""
                }`}
              >
                <Download className="inline-block w-4 h-4 mr-2" />
                Vectors
              </button>
              <button
                onClick={() => setActiveSection("palette")}
                className={`capsule-btn capsule-btn-cream ${
                  activeSection === "palette" ? "capsule-btn-active" : ""
                }`}
              >
                Colors
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-2 border-t border-[#E6E3DE]/40 pt-4">
              <button
                onClick={() => handleSectionChange("gallery")}
                className={`capsule-btn-mobile ${
                  activeSection === "gallery" ? "capsule-btn-mobile-active" : ""
                }`}
              >
                <Layers className="inline-block w-5 h-5 mr-3" />
                Gallery
              </button>
              <button
                onClick={() => handleSectionChange("vectors")}
                className={`capsule-btn-mobile ${
                  activeSection === "vectors" ? "capsule-btn-mobile-active" : ""
                }`}
              >
                <Download className="inline-block w-5 h-5 mr-3" />
                Vectors
              </button>
              <button
                onClick={() => handleSectionChange("palette")}
                className={`capsule-btn-mobile ${
                  activeSection === "palette" ? "capsule-btn-mobile-active" : ""
                }`}
              >
                <Layers className="inline-block w-5 h-5 mr-3" />
                Colors
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main style={{ paddingTop: 'var(--space-hero-y)', paddingBottom: 'var(--space-section)' }} className="px-4 sm:px-8">
        <div className="max-w-[1600px] mx-auto">
          
          {/* Gallery Section */}
          {activeSection === "gallery" && (
            <div className="space-y-12">
              {/* Section Header */}
              <div className="text-center max-w-2xl mx-auto">
                <h2 
                  className="text-balance mb-6"
                  style={{
                    fontSize: 'var(--text-3xl)',
                    lineHeight: 'var(--leading-snug)',
                    letterSpacing: 'var(--tracking-tight)',
                    fontWeight: '700'
                  }}
                >
                  PNG Downloads
                </h2>
                <p 
                  className="text-pretty measure mx-auto" 
                  style={{ 
                    color: 'var(--text-secondary)',
                    fontSize: 'var(--text-lg)',
                    lineHeight: 'var(--leading-relaxed)',
                    fontWeight: '500',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.04)'
                  }}
                >
                  High-resolution PNG files ready for download. Click the download button on any design to save it to your device.
                </p>
              </div>

              {/* Edition Filter */}
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <button
                  onClick={() => setEditionFilter("all")}
                  className={`px-8 py-3 rounded-full text-sm transition-all ${
                    editionFilter === "all"
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  All Editions <span className="ml-2 text-xs opacity-70">{allDesigns.length}</span>
                </button>
                <button
                  onClick={() => setEditionFilter("october2025")}
                  className={`px-8 py-3 rounded-full text-sm transition-all ${
                    editionFilter === "october2025"
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  October 2025 Edition <span className="ml-2 text-xs opacity-70">{october2025Count}</span>
                </button>
                <button
                  onClick={() => setEditionFilter("electric")}
                  className={`px-8 py-3 rounded-full text-sm transition-all ${
                    editionFilter === "electric"
                      ? "bg-gradient-to-r from-amber-600 to-teal-600 text-white shadow-lg shadow-amber-500/30"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Retro Florals <span className="ml-2 text-xs opacity-70">{electricCount}</span>
                </button>
              </div>

              {/* Category Filter */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setCategoryFilter("all")}
                  className={`px-8 py-3 rounded-full text-sm transition-all ${
                    categoryFilter === "all"
                      ? "bg-black text-white shadow-lg shadow-black/20"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  All <span className="ml-2 text-xs opacity-70">{filteredDesigns.length}</span>
                </button>
                <button
                  onClick={() => setCategoryFilter("florals")}
                  className={`px-8 py-3 rounded-full text-sm transition-all ${
                    categoryFilter === "florals"
                      ? "bg-black text-white shadow-lg shadow-black/20"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Florals <span className="ml-2 text-xs opacity-70">{floralCount}</span>
                </button>
                <button
                  onClick={() => setCategoryFilter("stems")}
                  className={`px-8 py-3 rounded-full text-sm transition-all ${
                    categoryFilter === "stems"
                      ? "bg-black text-white shadow-lg shadow-black/20"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Stems <span className="ml-2 text-xs opacity-70">{stemCount}</span>
                </button>
              </div>

              {/* Design Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
                {filteredDesigns.map(({ Component, name, desc, colors }) => (
                  <TileImageCard
                    key={name}
                    id={`floral-${name.toLowerCase()}`}
                    Component={Component}
                    name={name}
                    desc={desc}
                    colors={colors}
                    size={140}
                    onDownload={(name) => console.log(`Downloaded ${name}`)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Vectors Section */}
          {activeSection === "vectors" && (
            <div className="space-y-12">
              {/* Section Header */}
              <div className="text-center max-w-2xl mx-auto">
                <h2 
                  className="text-balance mb-6"
                  style={{
                    fontSize: 'var(--text-3xl)',
                    lineHeight: 'var(--leading-snug)',
                    letterSpacing: 'var(--tracking-tight)',
                    fontWeight: '700'
                  }}
                >
                  Vector Downloads
                </h2>
                <p 
                  className="text-pretty measure mx-auto" 
                  style={{ 
                    color: 'var(--text-secondary)',
                    fontSize: 'var(--text-lg)',
                    lineHeight: 'var(--leading-relaxed)',
                    fontWeight: '500',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.04)'
                  }}
                >
                  Download SVG files or copy code directly. All vectors include embedded metadata for easy organization.
                </p>
              </div>

              {/* Edition Filter */}
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <button
                  onClick={() => setEditionFilter("all")}
                  className={`px-8 py-3 rounded-full text-sm transition-all ${
                    editionFilter === "all"
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  All Editions <span className="ml-2 text-xs opacity-70">{allDesigns.length}</span>
                </button>
                <button
                  onClick={() => setEditionFilter("october2025")}
                  className={`px-8 py-3 rounded-full text-sm transition-all ${
                    editionFilter === "october2025"
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  October 2025 Edition <span className="ml-2 text-xs opacity-70">{october2025Count}</span>
                </button>
                <button
                  onClick={() => setEditionFilter("electric")}
                  className={`px-8 py-3 rounded-full text-sm transition-all ${
                    editionFilter === "electric"
                      ? "bg-gradient-to-r from-amber-600 to-teal-600 text-white shadow-lg shadow-amber-500/30"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Retro Florals <span className="ml-2 text-xs opacity-70">{electricCount}</span>
                </button>
              </div>

              {/* Category Filter */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setCategoryFilter("all")}
                  className={`px-8 py-3 rounded-full text-sm transition-all ${
                    categoryFilter === "all"
                      ? "bg-black text-white shadow-lg shadow-black/20"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  All <span className="ml-2 text-xs opacity-70">{filteredDesigns.length}</span>
                </button>
                <button
                  onClick={() => setCategoryFilter("florals")}
                  className={`px-8 py-3 rounded-full text-sm transition-all ${
                    categoryFilter === "florals"
                      ? "bg-black text-white shadow-lg shadow-black/20"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Florals <span className="ml-2 text-xs opacity-70">{floralCount}</span>
                </button>
                <button
                  onClick={() => setCategoryFilter("stems")}
                  className={`px-8 py-3 rounded-full text-sm transition-all ${
                    categoryFilter === "stems"
                      ? "bg-black text-white shadow-lg shadow-black/20"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Stems <span className="ml-2 text-xs opacity-70">{stemCount}</span>
                </button>
              </div>

              {/* Design Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
                {filteredDesigns.map(({ Component, name, desc }) => (
                  <div
                    key={name}
                    className="group relative aspect-square bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-black/5 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <Component size={140} />
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white space-y-1">
                        <p className="text-xs opacity-90">{desc}</p>
                        <p className="text-[10px] opacity-70">Click to download SVG or copy code</p>
                      </div>
                    </div>

                    {/* Vector Download/Copy Buttons */}
                    <VectorCard 
                      Component={Component} 
                      name={name} 
                      desc={desc}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Palette Section */}
          {activeSection === "palette" && (
            <div className="space-y-16">
              <div className="text-center max-w-2xl mx-auto">
                <h2 
                  className="text-balance mb-6"
                  style={{
                    fontSize: 'var(--text-3xl)',
                    lineHeight: 'var(--leading-snug)',
                    letterSpacing: 'var(--tracking-tight)',
                    fontWeight: '700'
                  }}
                >
                  Color Palette
                </h2>
                <p 
                  className="text-pretty measure mx-auto"
                  style={{
                    fontSize: 'var(--text-lg)',
                    lineHeight: 'var(--leading-relaxed)',
                    color: 'var(--text-secondary)',
                    fontWeight: '500',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.04)'
                  }}
                >
                  23 carefully curated mid-century modern colors
                </p>
              </div>

              <div className="space-y-12">
                {/* Primary Colors */}
                <div className="space-y-6">
                  <h3 className="text-sm uppercase tracking-wider text-gray-400">Primary</h3>
                  <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                    {[
                      { color: floralColors.coralRed, name: "Coral Red" },
                      { color: floralColors.warmOrange, name: "Warm Orange" },
                      { color: floralColors.tealBlue, name: "Teal Blue" }
                    ].map(({ color, name }) => (
                      <div key={name} className="group space-y-3">
                        <div 
                          className="aspect-square rounded-2xl shadow-lg transition-transform hover:scale-105"
                          style={{ backgroundColor: color }}
                        />
                        <div className="space-y-1">
                          <p className="text-sm">{name}</p>
                          <p className="text-xs text-gray-400 font-mono">{color}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Extended Palette */}
                <div className="space-y-6">
                  <h3 className="text-sm uppercase tracking-wider text-gray-400">Extended</h3>
                  <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10 gap-4">
                    {[
                      { color: floralColors.terracotta, name: "Terracotta" },
                      { color: floralColors.burntOrange, name: "Burnt Orange" },
                      { color: floralColors.mustardGold, name: "Mustard" },
                      { color: floralColors.goldenYellow, name: "Golden" },
                      { color: floralColors.oliveGreen, name: "Olive" },
                      { color: floralColors.sageGreen, name: "Sage" },
                      { color: floralColors.mintGreen, name: "Mint" },
                      { color: floralColors.deepTeal, name: "Deep Teal" },
                      { color: floralColors.lavenderGray, name: "Lavender" },
                      { color: floralColors.dustyRose, name: "Dusty Rose" }
                    ].map(({ color, name }) => (
                      <div key={name} className="group space-y-3">
                        <div 
                          className="aspect-square rounded-xl shadow-md transition-transform hover:scale-105"
                          style={{ backgroundColor: color }}
                        />
                        <div className="space-y-1">
                          <p className="text-xs">{name}</p>
                          <p className="text-[10px] text-gray-400 font-mono">{color}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Neutrals */}
                <div className="space-y-6">
                  <h3 className="text-sm uppercase tracking-wider text-gray-400">Neutrals</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {[
                      { color: floralColors.richBlack, name: "Rich Black" },
                      { color: floralColors.charcoal, name: "Charcoal" },
                      { color: floralColors.cream, name: "Cream" },
                      { color: floralColors.lightBeige, name: "Light Beige" },
                      { color: floralColors.warmWhite, name: "Warm White" }
                    ].map(({ color, name }) => (
                      <div key={name} className="group space-y-3">
                        <div 
                          className="aspect-square rounded-2xl shadow-md border border-gray-100 transition-transform hover:scale-105"
                          style={{ backgroundColor: color }}
                        />
                        <div className="space-y-1">
                          <p className="text-sm">{name}</p>
                          <p className="text-xs text-gray-400 font-mono">{color}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 sm:py-12">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p style={{ 
              fontWeight: 600,
              letterSpacing: '0.02em',
              textTransform: 'capitalize'
            }}>
              created by austin carson
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <span className="flex items-center gap-2">
                <Layers className="w-4 h-4" />
                100 Components
              </span>
              <span className="flex items-center gap-2">
                <Palette className="w-4 h-4" />
                23 Colors
              </span>
              <span className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Downloadable PNGs
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}