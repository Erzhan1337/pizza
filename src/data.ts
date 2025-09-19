import { Pizza } from "@/types";

export const pizzas: Pizza[] = [
  {
    id: 1,
    name: "Маргарита",
    description: "Томатный соус, моцарелла, томаты, итальянские травы",
    image:
      "https://media.dodostatic.net/image/r:584x584/01995c54d41178da8539c768e3232d2b.avif",
    category: 5, // Вегетарианские
    rating: 4.5,
    ingredients: ["1", "10"],
    sizes: [
      { size: 25, price: 1995 },
      { size: 30, price: 2745 },
      { size: 35, price: 3495 },
    ],
    canMake: true,
  },
  {
    id: 2,
    name: "Пепперони",
    description: "Томатный соус, моцарелла, пепперони",
    image:
      "https://media.dodostatic.net/image/r:584x584/01995c2bbccc719094cc6fd0ead33551.avif",
    category: 2, // Мясные
    rating: 4.8,
    ingredients: ["1", "4"],
    sizes: [
      { size: 25, price: 2295 },
      { size: 30, price: 3145 },
      { size: 35, price: 3995 },
    ],
  },
  {
    id: 3,
    name: "Четыре сыра",
    description: "Сливочный соус, моцарелла, пармезан, чеддер, дор-блю",
    image:
      "https://media.dodostatic.net/image/r:584x584/01995c479e6e7430b77b3b72a73d0416.avif",
    category: 5, // Вегетарианские
    rating: 4.7,
    ingredients: ["1", "2", "3"],
    sizes: [
      { size: 25, price: 2445 },
      { size: 30, price: 3345 },
      { size: 35, price: 4245 },
    ],
  },
  {
    id: 4,
    name: "Гавайская",
    description: "Томатный соус, моцарелла, ветчина, ананас",
    image:
      "https://media.dodostatic.net/image/r:584x584/01995c5ac24e7838a952f194b30f76ff.avif",
    category: 2, // Мясные
    rating: 4.2,
    ingredients: ["1", "5", "15"],
    sizes: [
      { size: 25, price: 2245 },
      { size: 30, price: 2995 },
      { size: 35, price: 3795 },
    ],
  },
  {
    id: 5,
    name: "Мясная",
    description:
      "Томатный соус, моцарелла, ветчина, пепперони, бекон, говядина",
    image:
      "https://media.dodostatic.net/image/r:584x584/01995c6c934b756d9ffa69f3504fc150.avif",
    category: 2, // Мясные
    rating: 4.9,
    ingredients: ["1", "4", "5", "6", "8"],
    sizes: [
      { size: 25, price: 2645 },
      { size: 30, price: 3595 },
      { size: 35, price: 4495 },
    ],
  },
  {
    id: 6,
    name: "Барбекю",
    description: "Соус барбекю, моцарелла, курица, бекон, красный лук, томаты",
    image:
      "https://media.dodostatic.net/image/r:584x584/01995c314da277fd8acdfcf15e3c8298.avif",
    category: 6, // С курицей
    rating: 4.6,
    ingredients: ["1", "6", "7", "10", "12"],
    sizes: [
      { size: 25, price: 2495 },
      { size: 30, price: 3395 },
      { size: 35, price: 4295 },
    ],
  },
  {
    id: 7,
    name: "Овощная",
    description: "Томатный соус, моцарелла, томаты, перец, грибы, маслины, лук",
    image:
      "https://media.dodostatic.net/image/r:584x584/01995c44a523772c9f60f7fe864fdccc.avif",
    category: 5, // Вегетарианские
    rating: 4.3,
    ingredients: ["1", "9", "10", "11", "12", "13"],
    sizes: [
      { size: 25, price: 1995 },
      { size: 30, price: 2695 },
      { size: 35, price: 3395 },
    ],
  },
  {
    id: 8,
    name: "Морская",
    description: "Сливочный соус, моцарелла, креветки, кальмары, мидии, чеснок",
    image:
      "https://media.dodostatic.net/image/r:584x584/01995c3abfda7669b8fdf577f86b07a9.avif",
    category: 2, // Мясные (морепродукты можно отнести к мясным)
    rating: 4.7,
    ingredients: ["1", "18", "19", "20"],
    sizes: [
      { size: 25, price: 3245 },
      { size: 30, price: 4445 },
      { size: 35, price: 5495 },
    ],
  },
  {
    id: 9,
    name: "Цезарь",
    description:
      "Соус цезарь, моцарелла, курица, томаты черри, салат, пармезан",
    image:
      "https://media.dodostatic.net/image/r:584x584/01995c33ec9b7190911c2a7b133ee389.avif",
    category: 6, // С курицей
    rating: 4.5,
    ingredients: ["1", "3", "7", "10"],
    sizes: [
      { size: 25, price: 2395 },
      { size: 30, price: 3245 },
      { size: 35, price: 4095 },
    ],
  },
  {
    id: 10,
    name: "Деревенская",
    description:
      "Томатный соус, моцарелла, картофель, лук, бекон, маринованные огурцы",
    image:
      "https://media.dodostatic.net/image/r:584x584/01995c42f704740cae3253e3af6994dc.avif",
    category: 2, // Мясные
    rating: 4.4,
    ingredients: ["1", "6", "12"],
    sizes: [
      { size: 25, price: 2345 },
      { size: 30, price: 3195 },
      { size: 35, price: 3995 },
    ],
  },
  {
    id: 11,
    name: "Диабло",
    description:
      "Острый томатный соус, моцарелла, пепперони, халапеньо, табаско",
    image:
      "https://media.dodostatic.net/image/r:584x584/01995c3e232d72f99537c7c7dc9cc78c.avif",
    category: 3, // Острые
    rating: 4.6,
    ingredients: ["1", "4", "14"],
    sizes: [
      { size: 25, price: 2445 },
      { size: 30, price: 3295 },
      { size: 35, price: 4145 },
    ],
  },
  {
    id: 12,
    name: "Карбонара",
    description: "Сливочный соус, моцарелла, бекон, ветчина, пармезан, яйцо",
    image:
      "https://media.dodostatic.net/image/r:584x584/01995c487c4b757b90db16eaed736e8e.avif",
    category: 2, // Мясные (изменил с "Сладкие", так как это мясная пицца)
    rating: 4.8,
    ingredients: ["1", "3", "5", "6"],
    sizes: [
      { size: 25, price: 2595 },
      { size: 30, price: 3495 },
      { size: 35, price: 4395 },
    ],
  },
  {
    id: 13,
    name: "Пицца с курицей и грибами",
    description: "Сливочный соус, моцарелла, курица, шампиньоны, лук",
    image:
      "https://media.dodostatic.net/image/r:584x584/01995c4a828c76c2bf34c92c03c0deac.avif",
    category: 6, // С курицей
    rating: 4.5,
    ingredients: ["1", "7", "9", "12"],
    sizes: [
      { size: 25, price: 2345 },
      { size: 30, price: 3195 },
      { size: 35, price: 3995 },
    ],
  },
  {
    id: 14,
    name: "Острая с халапеньо",
    description: "Томатный соус, моцарелла, салями, халапеньо, перец чили",
    image:
      "https://media.dodostatic.net/image/r:584x584/01995c2dfc3f720dbc150e0210dbf02f.avif",
    category: 3, // Острые
    rating: 4.7,
    ingredients: ["1", "8", "14"],
    sizes: [
      { size: 25, price: 2495 },
      { size: 30, price: 3395 },
      { size: 35, price: 4245 },
    ],
  },
  {
    id: 15,
    name: "Сладкая с ананасом",
    description: "Сливочный соус, моцарелла, ананас, кукуруза, сладкий перец",
    image:
      "https://media.dodostatic.net/image/r:584x584/01995c4fb83e704284f5dcbbf3890686.avif",
    category: 4, // Сладкие
    rating: 4.1,
    ingredients: ["1", "11", "15", "16"],
    sizes: [
      { size: 25, price: 2195 },
      { size: 30, price: 2995 },
      { size: 35, price: 3795 },
    ],
  },
];
