export type Product = {
  id: string;
  name: string;
  category: "books" | "art";
  price: number;
  description: string;
  image: string;
  slug: string;
};

export const products: Product[] = [
  // Books
  {
    id: "b1",
    name: "Woorde in die Wind",
    category: "books",
    price: 220,
    description: "ʼn Digbundel wat die siel raak. 128 bladsye van suiwer Afrikaanse poësie.",
    image: "/images/placeholder-book-1.jpg",
    slug: "woorde-in-die-wind",
  },
  {
    id: "b2",
    name: "Stilte Tussen Storms",
    category: "books",
    price: 195,
    description: "Verhale oor verlies, liefde en die skoonheid van alledaagse oomblikke.",
    image: "/images/placeholder-book-2.jpg",
    slug: "stilte-tussen-storms",
  },
  {
    id: "b3",
    name: "Grond en Gras",
    category: "books",
    price: 250,
    description: "ʼn Geillustreerde boek wat woord en beeld saamweef tot iets besonders.",
    image: "/images/placeholder-book-3.jpg",
    slug: "grond-en-gras",
  },
  // Art
  {
    id: "a1",
    name: "Zamalekker",
    category: "art",
    price: 1500,
    description: "Swart-en-wit fotografie. Beperkte oplaag druk. Gesigneer en genommer.",
    image: "/images/zamalekker.jpg",
    slug: "zamalekker",
  },
  {
    id: "a2",
    name: "Blanket in the Sky",
    category: "art",
    price: 1800,
    description: "Swart-en-wit landskap. Beperkte oplaag druk. Gesigneer en genommer.",
    image: "/images/blanket-in-the-sky.jpg",
    slug: "blanket-in-the-sky",
  },
  {
    id: "a3",
    name: "No Motor Boats",
    category: "art",
    price: 1500,
    description: "Swart-en-wit fotografie. Beperkte oplaag druk. Gesigneer en genommer.",
    image: "/images/no-motor-boats.jpg",
    slug: "no-motor-boats",
  },
  {
    id: "a4",
    name: "House on the Hill",
    category: "art",
    price: 2000,
    description: "Kleur fotografie. Beperkte oplaag druk. Gesigneer en genommer.",
    image: "/images/house-on-the-hill.jpg",
    slug: "house-on-the-hill",
  },
  {
    id: "a5",
    name: "Outside Stanford",
    category: "art",
    price: 2000,
    description: "Kleur fotografie. Beperkte oplaag druk. Gesigneer en genommer.",
    image: "/images/outside-stanford.jpg",
    slug: "outside-stanford",
  },
];

export const getByCategory = (cat: Product["category"]) =>
  products.filter((p) => p.category === cat);
