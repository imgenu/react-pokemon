//   let arr1 = [
//     { id: 1, age: "14" },
//     { id: 2, age: "23" },
//     { id: 3, age: "33" },
//   ];
//   let arr2 = [
//     { id: 3, name: "zhangsan" },
//     { id: 1, name: "lisi" },
//     { id: 2, name: "wangwu" },
//   ];
//   Object.values(
//     [...arr1, ...arr2].reduce(
//       (c, n) => ({ ...c, [n.id]: { ...(c[n.id] || {}), ...n } }),
//       {}
//     )
//   );

export const dataList = {
  normal: {
    name: "一般",
    color: "#8b8c8b",
    subColor: "#8b8c8b7f",
  },
  fighting: {
    name: "格鬥",
    color: "#d64c62",
    subColor: "#d64c636e",
  },
  flying: {
    name: "飛行",
    color: "#718bda",
    subColor: "#718bda7f",
  },
  poison: {
    name: "毒",
    color: "#dc52ca",
    subColor: "#dc52ca6f",
  },
  ground: {
    name: "地面",
    color: "#ce7432",
    subColor: "#ce733276",
  },
  rock: {
    name: "岩石",
    color: "#cebe67",
    subColor: "#cebf6778",
  },
  bug: {
    name: "蟲",
    color: "#8fcd00",
    subColor: "#90cd0078",
  },
  ghost: {
    name: "幽靈",
    color: "#887cce",
    subColor: "#887cce75",
  },
  steel: {
    name: "鋼",
    color: "#3c8c9b",
    subColor: "#3c8d9b76",
  },
  fire: {
    name: "火",
    color: "#ffa415",
    subColor: "#ffa51575",
  },
  water: {
    name: "水",
    color: "#5cb2de",
    subColor: "#5cb3de7a",
  },
  grass: {
    name: "草",
    color: "#5dbe89",
    subColor: "#5dbe8976",
  },
  electric: {
    name: "電",
    color: "#ffd445",
    subColor: "#ffd44578",
  },
  psychic: {
    name: "超能力",
    color: "#ff5a55",
    subColor: "#ff5b556f",
  },
  ice: {
    name: "冰",
    color: "#7aded7",
    subColor: "#7aded778",
  },
  dragon: {
    name: "龍",
    color: "#1770b9",
    subColor: "#1770b97b",
  },
  dark: {
    name: "惡",
    color: "#525164",
    subColor: "#52516478",
  },
  fairy: {
    name: "妖精",
    color: "#f29cd8",
    subColor: "#f29cd87d",
  },
  shadow: {
    name: "暗影",
    color: "#cb9deb",
    subColor: "#cb9deb7d",
  },
};
