export type PrintSize = {
  label: string;
  cm: string;
  price: number;
};

export type Product = {
  id: string;
  name: string;
  category: "books" | "art";
  price: number;
  description: string;
  image: string;
  slug: string;
  sizes?: PrintSize[];
};

export const defaultArtSizes = (basePrice: number): PrintSize[] => [
  { label: "A4", cm: "21 × 30 cm", price: basePrice },
  { label: "A3", cm: "30 × 42 cm", price: Math.round(basePrice * 1.4) },
  { label: "A2", cm: "42 × 59 cm", price: Math.round(basePrice * 2.1) },
];

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
    sizes: defaultArtSizes(1500),
  },
  {
    id: "a2",
    name: "Blanket in the Sky",
    category: "art",
    price: 1800,
    description: "Swart-en-wit landskap. Beperkte oplaag druk. Gesigneer en genommer.",
    image: "/images/blanket-in-the-sky.jpg",
    slug: "blanket-in-the-sky",
    sizes: defaultArtSizes(1800),
  },
  {
    id: "a3",
    name: "No Motor Boats",
    category: "art",
    price: 1500,
    description: "Swart-en-wit fotografie. Beperkte oplaag druk. Gesigneer en genommer.",
    image: "/images/no-motor-boats.jpg",
    slug: "no-motor-boats",
    sizes: defaultArtSizes(1500),
  },
  {
    id: "a4",
    name: "House on the Hill",
    category: "art",
    price: 2000,
    description: "Kleur fotografie. Beperkte oplaag druk. Gesigneer en genommer.",
    image: "/images/house-on-the-hill.jpg",
    slug: "house-on-the-hill",
    sizes: defaultArtSizes(2000),
  },
  {
    id: "a5",
    name: "Outside Stanford",
    category: "art",
    price: 2000,
    description: "Kleur fotografie. Beperkte oplaag druk. Gesigneer en genommer.",
    image: "/images/outside-stanford.jpg",
    slug: "outside-stanford",
    sizes: defaultArtSizes(2000),
  },
];

export const getByCategory = (cat: Product["category"]) =>
  products.filter((p) => p.category === cat);
