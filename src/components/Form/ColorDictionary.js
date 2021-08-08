const colors = [
  { beekeeper: "#f6e58d" },
  { spicednectarine: "#ffbe76" },
  { pinkglamour: "#ff7979" },
  { junebud: "#badc58" },
  { coastalbreeze: "#dff9fb" },
  { turbo: "#f9ca24" },
  { quincyjelly: "#f0932b" },
  { carminepink: "#eb4d4b" },
  { pureapple: "#6ab04c" },
  { hintoficepick: "#c7ecee" },
  { middleblue: "#7ed6df" },
  { heliotrope: "#e056fd" },
  { exodusfruit: "#686de0" },
  { deepkoamaru: "#30336b" },
  { soaringeagle: "#95afc0" },
  { greenlandgreen: "#22a6b3" },
  { steelpink: "#be2edd" },
  { blurple: "#4834d4" },
  { deepcove: "#130f40" },
  { wizardgrey: "#535c68" },
  { white: "#fff" },
];

function matchColor(color) {
  for (const iter of colors) {
    const key = Object.keys(iter);
    const val = Object.values(iter);
    if (key[0] === color) {
      return val[0];
    }
  }
}

export default matchColor;
