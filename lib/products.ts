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
    name: "Words in the Wind",
    category: "books",
    price: 220,
    description: "A collection of poetry that touches the soul. 128 pages of pure verse.",
    image: "/images/placeholder-book-1.jpg",
    slug: "words-in-the-wind",
  },
  {
    id: "b2",
    name: "Silence Between Storms",
    category: "books",
    price: 195,
    description: "Stories of loss, love and the beauty of everyday moments.",
    image: "/images/placeholder-book-2.jpg",
    slug: "silence-between-storms",
  },
  {
    id: "b3",
    name: "Ground and Grass",
    category: "books",
    price: 250,
    description: "An illustrated book that weaves word and image into something special.",
    image: "/images/placeholder-book-3.jpg",
    slug: "ground-and-grass",
  },
  // Art
  {
    id: "a1",
    name: "Zamalekker",
    category: "art",
    price: 1500,
    description: "Black-and-white photography. Limited edition print. Signed and numbered.",
    image: "/images/zamalekker.jpg",
    slug: "zamalekker",
    sizes: defaultArtSizes(1500),
  },
  {
    id: "a2",
    name: "Blanket in the Sky",
    category: "art",
    price: 1800,
    description: "Black-and-white landscape. Limited edition print. Signed and numbered.",
    image: "/images/blanket-in-the-sky.jpg",
    slug: "blanket-in-the-sky",
    sizes: defaultArtSizes(1800),
  },
  {
    id: "a3",
    name: "No Motor Boats",
    category: "art",
    price: 1500,
    description: "Black-and-white photography. Limited edition print. Signed and numbered.",
    image: "/images/no-motor-boats.jpg",
    slug: "no-motor-boats",
    sizes: defaultArtSizes(1500),
  },
  {
    id: "a4",
    name: "House on the Hill",
    category: "art",
    price: 2000,
    description: "Colour photography. Limited edition print. Signed and numbered.",
    image: "/images/house-on-the-hill.jpg",
    slug: "house-on-the-hill",
    sizes: defaultArtSizes(2000),
  },
  {
    id: "a5",
    name: "Outside Stanford",
    category: "art",
    price: 2000,
    description: "Colour photography. Limited edition print. Signed and numbered.",
    image: "/images/outside-stanford.jpg",
    slug: "outside-stanford",
    sizes: defaultArtSizes(2000),
  },
];

export const getByCategory = (cat: Product["category"]) =>
  products.filter((p) => p.category === cat);
