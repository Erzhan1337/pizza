import { Pizza, PizzaIngredient } from "@/types";

export const pizzas: Pizza[] = [
  {
    id: "1",
    name: "Терияки",
    image:
      "https://media.dodostatic.net/image/r:584x584/019854dd4a2e75de88b7c96b59da9775.avif",
    description:
      "Нежный цыпленок, красный лук, зеленый перец, соус терияки, сыр моцарелла и фирменный соус альфредо",
    category: 6, // С курицей
    rating: 5,
    ingredients: ["1", "4", "11", "12", "16"],
    sizes: [
      {
        text: "Маленькая",
        size: "25",
        dough: "Традиционное",
        image: "/ter_25_tra.png",
        price: 2890,
        weight: 380,
      },
      {
        text: "Средняя",
        size: "30",
        dough: "Традиционное",
        image: "/ter_30_tra.png",
        price: 3890,
        weight: 450,
      },
      {
        text: "Большая",
        size: "35",
        dough: "Традиционное",
        image: "/ter_35_tra.png",
        price: 4890,
        weight: 600,
      },
      {
        text: "Средняя",
        size: "30",
        dough: "Тонкое",
        image: "/ter_30_ton.png",
        price: 3890,
        weight: 420,
      },
      {
        text: "Большая",
        size: "35",
        dough: "Тонкое",
        image: "/ter_35_tonk.png",
        price: 4890,
        weight: 550,
      },
    ],
  },
  {
    id: "2",
    name: "Пепперони",
    image:
      "https://media.dodostatic.net/image/r:584x584/01995c2bbccc719094cc6fd0ead33551.avif",
    description:
      "Пикантная пепперони, увеличенная порция моцареллы, томатный соус",
    category: 2, // Мясные
    rating: 4.8,
    ingredients: ["2", "11"],
    sizes: [
      {
        text: "Маленькая",
        size: "25",
        dough: "Традиционное",
        image: "/pep_25_tra.png",
        price: 2590,
        weight: 350,
      },
      {
        text: "Маленькая",
        size: "25",
        dough: "Тонкое",
        image: "/pep_25_ton.png",
        price: 2590,
        weight: 320,
      },
      {
        text: "Средняя",
        size: "30",
        dough: "Традиционное",
        image: "/pep_30_tra.png",
        price: 3590,
        weight: 480,
      },
      {
        text: "Средняя",
        size: "30",
        dough: "Тонкое",
        image: "/pep_30_ton.png",
        price: 3590,
        weight: 450,
      },
      {
        text: "Большая",
        size: "35",
        dough: "Традиционное",
        image: "/pep_35_tra.png",
        price: 4590,
        weight: 620,
      },
      {
        text: "Большая",
        size: "35",
        dough: "Тонкое",
        image: "/pep_35_ton.png",
        price: 4590,
        weight: 580,
      },
    ],
    canMake: true,
  },
  {
    id: "3",
    name: "Маргарита",
    image:
      "https://media.dodostatic.net/image/r:584x584/11EE7D610D2925109AB2E1C92CC5383C.avif",
    description:
      "Увеличенная порция моцареллы, томаты, итальянские травы, томатный соус",
    category: 5, // Вегетарианские
    rating: 4.6,
    ingredients: ["11", "8", "15"],
    sizes: [
      {
        text: "Маленькая",
        size: "25",
        dough: "Традиционное",
        image: "/mar_25_tra.png",
        price: 2290,
        weight: 340,
      },
      {
        text: "Средняя",
        size: "30",
        dough: "Традиционное",
        image: "/mar_30_tra.png",
        price: 3290,
        weight: 460,
      },
      {
        text: "Средняя",
        size: "30",
        dough: "Тонкое",
        image: "/mar_30_ton.png",
        price: 3290,
        weight: 430,
      },
      {
        text: "Большая",
        size: "35",
        dough: "Традиционное",
        image: "/mar_35_tra.png",
        price: 4290,
        weight: 590,
      },
      {
        text: "Большая",
        size: "35",
        dough: "Тонкое",
        image: "/mar_35_ton.png",
        price: 4290,
        weight: 550,
      },
    ],
  },
  {
    id: "4",
    name: "Четыре сыра",
    image:
      "https://media.dodostatic.net/image/r:584x584/11EE7D610E8BBB248F31270BE742B4BD.avif",
    description:
      "Моцарелла, сыры чеддер и пармезан, сырный соус, сливочный соус альфредо",
    category: 5, // Вегетарианские
    rating: 4.7,
    ingredients: ["11", "13", "14", "16"],
    sizes: [
      {
        text: "Маленькая",
        size: "25",
        dough: "Традиционное",
        image: "/cheese_25_tra.png",
        price: 2990,
        weight: 370,
      },
      {
        text: "Маленькая",
        size: "25",
        dough: "Тонкое",
        image: "/cheese_25_ton.png",
        price: 2990,
        weight: 340,
      },
      {
        text: "Средняя",
        size: "30",
        dough: "Традиционное",
        image: "/cheese_30_tra.png",
        price: 3990,
        weight: 500,
      },
      {
        text: "Средняя",
        size: "30",
        dough: "Тонкое",
        image: "/cheese_30_ton.png",
        price: 3990,
        weight: 470,
      },
      {
        text: "Большая",
        size: "35",
        dough: "Традиционное",
        image: "/cheese_35_tra.png",
        price: 4990,
        weight: 640,
      },
      {
        text: "Большая",
        size: "35",
        dough: "Тонкое",
        image: "/cheese_35_ton.png",
        price: 4990,
        weight: 600,
      },
    ],
  },
  {
    id: "5",
    name: "Мексиканская",
    image:
      "https://media.dodostatic.net/image/r:584x584/01995c5ac24e7838a952f194b30f76ff.avif",
    description:
      "Острая чоризо, халапеньо, красный лук, томаты, моцарелла, соус сальса",
    category: 3, // Острые
    rating: 4.4,
    ingredients: ["3", "5", "4", "8", "11"],
    sizes: [
      {
        text: "Средняя",
        size: "30",
        dough: "Традиционное",
        image: "/mex_30_tra.png",
        price: 3790,
        weight: 490,
      },
      {
        text: "Средняя",
        size: "30",
        dough: "Тонкое",
        image: "/mex_30_ton.png",
        price: 3790,
        weight: 460,
      },
      {
        text: "Большая",
        size: "35",
        dough: "Традиционное",
        image: "/mex_35_tra.png",
        price: 4790,
        weight: 630,
      },
      {
        text: "Большая",
        size: "35",
        dough: "Тонкое",
        image: "/mex_35_ton.png",
        price: 4790,
        weight: 590,
      },
    ],
  },
  {
    id: "6",
    name: "Гавайская",
    image:
      "https://media.dodostatic.net/image/r:584x584/11EE7D610BBEB562BD4D48786AD87270.avif",
    description: "Ветчина, ананасы, моцарелла, соус альфредо",
    category: 4, // Сладкие
    rating: 4.3,
    ingredients: ["6", "9", "11", "16"],
    sizes: [
      {
        text: "Маленькая",
        size: "25",
        dough: "Традиционное",
        image: "/haw_25_tra.png",
        price: 2690,
        weight: 360,
      },
      {
        text: "Средняя",
        size: "30",
        dough: "Традиционное",
        image: "/haw_30_tra.png",
        price: 3690,
        weight: 490,
      },
      {
        text: "Средняя",
        size: "30",
        dough: "Тонкое",
        image: "/haw_30_ton.png",
        price: 3690,
        weight: 460,
      },
      {
        text: "Большая",
        size: "35",
        dough: "Традиционное",
        image: "/haw_35_tra.png",
        price: 4690,
        weight: 620,
      },
    ],
  },
  {
    id: "7",
    name: "Карбонара",
    image:
      "https://media.dodostatic.net/image/r:584x584/01995c5bb469799693feb51b7efe218e.avif",
    description:
      "Бекон, сыры чеддер и пармезан, моцарелла, томаты, красный лук, соус альфредо",
    category: 2, // Мясные
    rating: 4.9,
    ingredients: ["7", "13", "14", "11", "8", "4", "16"],
    sizes: [
      {
        text: "Маленькая",
        size: "25",
        dough: "Традиционное",
        image: "/carb_25_tra.png",
        price: 3090,
        weight: 390,
      },
      {
        text: "Маленькая",
        size: "25",
        dough: "Тонкое",
        image: "/carb_25_ton.png",
        price: 3090,
        weight: 360,
      },
      {
        text: "Средняя",
        size: "30",
        dough: "Традиционное",
        image: "/carb_30_tra.png",
        price: 4090,
        weight: 520,
      },
      {
        text: "Средняя",
        size: "30",
        dough: "Тонкое",
        image: "/carb_30_ton.png",
        price: 4090,
        weight: 490,
      },
      {
        text: "Большая",
        size: "35",
        dough: "Традиционное",
        image: "/carb_35_tra.png",
        price: 5090,
        weight: 670,
      },
      {
        text: "Большая",
        size: "35",
        dough: "Тонкое",
        image: "/carb_35_ton.png",
        price: 5090,
        weight: 630,
      },
    ],
  },
  {
    id: "8",
    name: "Барбекю",
    image:
      "https://media.dodostatic.net/image/r:584x584/01995c314da277fd8acdfcf15e3c8298.avif",
    description: "Цыпленок, бекон, красный лук, моцарелла, соус барбекю",
    category: 6, // С курицей
    rating: 4.5,
    ingredients: ["1", "7", "4", "11"],
    sizes: [
      {
        text: "Средняя",
        size: "30",
        dough: "Традиционное",
        image: "/bbq_30_tra.png",
        price: 3890,
        weight: 500,
      },
      {
        text: "Средняя",
        size: "30",
        dough: "Тонкое",
        image: "/bbq_30_ton.png",
        price: 3890,
        weight: 470,
      },
      {
        text: "Большая",
        size: "35",
        dough: "Традиционное",
        image: "/bbq_35_tra.png",
        price: 4890,
        weight: 640,
      },
      {
        text: "Большая",
        size: "35",
        dough: "Тонкое",
        image: "/bbq_35_ton.png",
        price: 4890,
        weight: 600,
      },
    ],
  },
  {
    id: "9",
    name: "Вегетарианская",
    image:
      "https://media.dodostatic.net/image/r:584x584/01995c54d41178da8539c768e3232d2b.avif",
    description:
      "Шампиньоны, томаты, сладкий перец, красный лук, маслины, моцарелла, итальянские травы",
    category: 5, // Вегетарианские
    rating: 4.2,
    ingredients: ["10", "8", "12", "4", "11", "15"],
    sizes: [
      {
        text: "Маленькая",
        size: "25",
        dough: "Традиционное",
        image: "/veg_25_tra.png",
        price: 2490,
        weight: 350,
      },
      {
        text: "Маленькая",
        size: "25",
        dough: "Тонкое",
        image: "/veg_25_ton.png",
        price: 2490,
        weight: 320,
      },
      {
        text: "Средняя",
        size: "30",
        dough: "Традиционное",
        image: "/veg_30_tra.png",
        price: 3490,
        weight: 480,
      },
      {
        text: "Средняя",
        size: "30",
        dough: "Тонкое",
        image: "/veg_30_ton.png",
        price: 3490,
        weight: 450,
      },
      {
        text: "Большая",
        size: "35",
        dough: "Традиционное",
        image: "/veg_35_tra.png",
        price: 4490,
        weight: 610,
      },
      {
        text: "Большая",
        size: "35",
        dough: "Тонкое",
        image: "/veg_35_ton.png",
        price: 4490,
        weight: 570,
      },
    ],
  },
  {
    id: "10",
    name: "Мясная",
    image:
      "https://media.dodostatic.net/image/r:584x584/01995c6c934b756d9ffa69f3504fc150.avif",
    description:
      "Цыпленок, ветчина, пепперони, острая чоризо, бекон, моцарелла, томатный соус",
    category: 2, // Мясные
    rating: 4.8,
    ingredients: ["1", "6", "2", "3", "7", "11"],
    sizes: [
      {
        text: "Средняя",
        size: "30",
        dough: "Традиционное",
        image: "/meat_30_tra.png",
        price: 4190,
        weight: 530,
      },
      {
        text: "Средняя",
        size: "30",
        dough: "Тонкое",
        image: "/meat_30_ton.png",
        price: 4190,
        weight: 500,
      },
      {
        text: "Большая",
        size: "35",
        dough: "Традиционное",
        image: "/meat_35_tra.png",
        price: 5190,
        weight: 680,
      },
      {
        text: "Большая",
        size: "35",
        dough: "Тонкое",
        image: "/meat_35_ton.png",
        price: 5190,
        weight: 640,
      },
    ],
  },
];

export const pizzaIngredients: PizzaIngredient[] = [
  {
    id: "1",
    name: "Моцарелла",
    category: "cheese",
    price: 395,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/01991534e2c1742483f4b861cd9c687b.png",
  },
  {
    id: "2",
    name: "Чеддер",
    category: "cheese",
    price: 395,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/01991534fc1175cc8fbceffda60604c6.png",
  },
  {
    id: "3",
    name: "Пармезан",
    category: "cheese",
    price: 395,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/01991534fc1175cc8fbceffda60604c6.png",
  },
  {
    id: "4",
    name: "Пепперони",
    category: "meat",
    price: 495,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/01991532094578d684f9a6554920377e.png",
  },
  {
    id: "5",
    name: "Ветчина",
    category: "meat",
    price: 445,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/01991533855772df87ba3c143e2c54e2.png",
  },
  {
    id: "6",
    name: "Бекон",
    category: "meat",
    price: 495,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/01991533855772df87ba3c143e2c54e2.png",
  },
  {
    id: "7",
    name: "Курица",
    category: "meat",
    price: 445,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/019915344152716bb2ea308e6e9f60d0.png",
  },
  {
    id: "8",
    name: "Салями",
    category: "meat",
    price: 495,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/01991534324373009719a948305f1326.png",
  },
  {
    id: "9",
    name: "Шампиньоны",
    category: "vegetables",
    price: 295,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/01991532a3247905a400876549e4e701.png",
  },
  {
    id: "10",
    name: "Помидоры",
    category: "vegetables",
    price: 245,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/019915315c6170e6b2d6b89d908cff7e.png",
  },
  {
    id: "11",
    name: "Сладкий перец",
    category: "vegetables",
    price: 245,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/019915339505783291265a6222b52677.png",
  },
  {
    id: "12",
    name: "Красный лук",
    category: "vegetables",
    price: 195,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/0199153219327638b3c54e121f5cfe3d.png",
  },
  {
    id: "13",
    name: "Брынза",
    category: "vegetables",
    price: 295,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/019915314bfe791e8d140f5486950491.png",
  },
  {
    id: "14",
    name: "Халапеньо",
    category: "vegetables",
    price: 295,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/01991532c820763a8c4c825a5a40c227.png",
  },
  {
    id: "15",
    name: "Ананас",
    category: "vegetables",
    price: 345,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/01991531f6c87608ac218692c725d06d.png",
  },
  {
    id: "16",
    name: "Италянские травы",
    category: "vegetables",
    price: 245,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/01991533754f799cbe7c4f89a02bbe56.png",
  },
];
