export type Product = {
  id: string;
  name: string;
  category: "books" | "videos" | "art";
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
  // Videos
  {
    id: "v1",
    name: "Die Eerste Woord",
    category: "videos",
    price: 120,
    description: "ʼn Kort dokumentêr oor die skryfproses agter die eerste digbundel.",
    image: "/images/placeholder-video-1.jpg",
    slug: "die-eerste-woord",
  },
  {
    id: "v2",
    name: "Lank Na Middernag",
    category: "videos",
    price: 95,
    description: "ʼn Musiekvideo-reeks — poësie, klank en lig in beweging.",
    image: "/images/placeholder-video-2.jpg",
    slug: "lank-na-middernag",
  },
  {
    id: "v3",
    name: "Stof en Ster",
    category: "videos",
    price: 150,
    description: "ʼn Visuele essay oor landskap, taal en identiteit.",
    image: "/images/placeholder-video-3.jpg",
    slug: "stof-en-ster",
  },
  // Art
  {
    id: "a1",
    name: "Vlam No. 1",
    category: "art",
    price: 1800,
    description: "Olieverf op doek. 60×80cm. Gesigneer en gesertifiseer.",
    image: "/images/placeholder-art-1.jpg",
    slug: "vlam-no-1",
  },
  {
    id: "a2",
    name: "Blou Stilte",
    category: "art",
    price: 2400,
    description: "Gemengde media. 90×120cm. Ingesluit met egtheid-sertifikaat.",
    image: "/images/placeholder-art-2.jpg",
    slug: "blou-stilte",
  },
  {
    id: "a3",
    name: "Wortelstruktuur",
    category: "art",
    price: 1200,
    description: "Ink op papier, beperkte oplaag van 10. Genommer en gesigneer.",
    image: "/images/placeholder-art-3.jpg",
    slug: "wortelstruktuur",
  },
];

export const getByCategory = (cat: Product["category"]) =>
  products.filter((p) => p.category === cat);
