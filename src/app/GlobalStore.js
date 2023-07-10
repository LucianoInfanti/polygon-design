import { create } from "zustand";

const colorCombinations = [
  ["#FFA500", "#800080", "#008000", "#0000FF"],
  ["#FF6347", "#32CD32", "#4169E1", "#8B008B"],
  ["#FF4500", "#20B2AA", "#4682B4", "#DA70D6"],
  ["#EE82EE", "#ADD8E6", "#7CFC00", "#FFB6C1"],
  ["#FF1493", "#D8BFD8", "#FA8072", "#87CEEB"],
  ["#8A2BE2", "#D2B48C", "#FFDEAD", "#F0E68C"],
  ["#3CB371", "#CD853F", "#FFA07A", "#D2691E"],
  ["#2E8B57", "#BC8F8F", "#8FBC8F", "#9400D3"],
  ["#483D8B", "#FFC0CB", "#F5F5DC", "#6A5ACD"],
  ["#00BFFF", "#DB7093", "#E9967A", "#9370DB"],
  ["#8FBC8F", "#DDA0DD", "#FF69B4", "#4B0082"],
  ["#C71585", "#7B68EE", "#191970", "#A52A2A"],
  ["#ADFF2F", "#DC143C", "#CD5C5C", "#FF4500"],
  ["#BDB76B", "#7FFF00", "#FF7F50", "#B22222"],
  ["#BA55D3", "#228B22", "#8B4513", "#6B8E23"],
  ["#2F4F4F", "#F08080", "#A9A9A9", "#0000CD"],
  ["#FFD700", "#FF00FF", "#90EE90", "#FF1493"],
  ["#006400", "#FFFAF0", "#D3D3D3", "#B0E0E6"],
];

export const GlobalStore = create((set, get) => ({
  colorGradient: "",
  clipPath: "",
  startPercentage: 0,
  endPercentage: 100,
  rotationDegree: 0,
  sideNum: 3,

  getRandomInt: (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  generatePolygonPoints: (sides, radius = 50) => {
    const points = [];
    for (let i = 0; i < sides; i++) {
      const x = 50 + radius * Math.cos((2 * Math.PI * i) / sides);
      const y = 50 + radius * Math.sin((2 * Math.PI * i) / sides);
      points.push(`${x}% ${y}%`);
    }
    return points.join(", ");
  },

  updateProperties: () => {
    const state = get();
    const colorIndex = state.getRandomInt(0, colorCombinations.length - 1);
    const colors = colorCombinations[colorIndex];

    const color1 = colors[state.getRandomInt(0, colors.length - 1)];
    let color2 = color1;
    while (color2 === color1) {
      color2 = colors[state.getRandomInt(0, colors.length - 1)];
    }

    const startPercentage = state.getRandomInt(0, 100);
    const endPercentage = state.getRandomInt(startPercentage, 100);
    const rotationDegree = state.getRandomInt(0, 360);

    const gradient = `conic-gradient(from ${rotationDegree}deg, ${color1} ${startPercentage}%, ${color2} ${endPercentage}%)`;

    const sideNum = state.getRandomInt(3, 18);
    const polygonPoints = state.generatePolygonPoints(sideNum);
    const clipPath = `polygon(${polygonPoints})`;

    set({
      colorGradient: gradient,
      clipPath: clipPath,
      startPercentage: startPercentage,
      endPercentage: endPercentage,
      rotationDegree: rotationDegree,
      sideNum: sideNum,
    });
  },
}));