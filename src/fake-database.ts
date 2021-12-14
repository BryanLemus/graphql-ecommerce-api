export const categories = [
  { id: "0", name: "CPUs" },
  { id: "1", name: "RAMs" },
  { id: "2", name: "Hard Drives" },
  { id: "3", name: "Keyboards" },
  { id: "4", name: "Mouses" },
  { id: "5", name: "Monitors" },
  { id: "6", name: "Cases" },
  { id: "7", name: "Graphic Cards" },
];
export const products = [
  {
    id: "0",
    image: "https://m.media-amazon.com/images/I/61bnGNXUBLL._AC_SL1500_.jpg",
    name: "Intel Core i7-12700K Desktop Processor 12 (8P+4E) Cores up to 5.0 GHz Unlocked  LGA1700 600 Series Chipset 125W",
    description:
      "Intel® Processors for All That You Do\nIntel sets the industry standard for processor innovation and performance, powering laptops, desktops, workstations and servers-for business and personal use, immersive gaming, content creation, IoT, Artificial Intelligence, and more. Explore the range of options here.",
    rating: 0,
    brand: "Intel",
    price: 496.25,
    stock: 47,
    onSale: true,
    categoryId: "0",
    features: [
      { name: "Frequency", value: "5.0GHz" },
      { name: "Cores", value: "8 cores" },
    ],
  },
  {
    id: "1",
    image: "https://m.media-amazon.com/images/I/61s3KPj7i-L._AC_SL1000_.jpg",
    name: "Intel Core i9-12900K Desktop Processor 16 (8P+8E) Cores up to 5.2 GHz Unlocked LGA1700 600 Series Chipset 125W",
    description:
      "Intel® Processors for All That You Do\nIntel sets the industry standard for processor innovation and performance, powering laptops, desktops, workstations and servers-for business and personal use, immersive gaming, content creation, IoT, Artificial Intelligence, and more. Explore the range of options here.",
    rating: 0,
    brand: "Intel",
    price: 860,
    stock: 6,
    onSale: false,
    categoryId: "0",
    features: [
      { name: "Frequency", value: "5.2GHz" },
      { name: "Cores", value: "16 cores" },
    ],
  },
  {
    id: "2",
    image: "https://m.media-amazon.com/images/I/61DYLoyNRWL._AC_SL1384_.jpg",
    name: "AMD Ryzen 7 5800X - Procesador de escritorio desbloqueado de 8 núcleos, 16 hilos",
    description:
      "Sé imparable con la velocidad sin precedentes de los mejores procesadores de escritorio del mundo. Los procesadores AMD Ryzen serie 5000 ofrecen lo último en alto rendimiento, ya sea que estés jugando los últimos juegos, diseñando el siguiente rascacielos o estocando datos científicos. Con AMD Ryzen, siempre estás en el líder.",
    rating: 0,
    brand: "AMD",
    price: 449,
    stock: 37,
    onSale: true,
    categoryId: "0",
    features: [
      { name: "Frequency", value: "4.7GHz" },
      { name: "Cores", value: "16 cores" },
    ],
  },
  {
    id: "3",
    image: "https://m.media-amazon.com/images/I/61bnGNXUBLL._AC_SL1500_.jpg",
    name: "Logitech MX Keys",
    description: "Wireless Keyboard with backtilt ilumination.",
    rating: 0,
    brand: "Logitech",
    price: 199.99,
    stock: 96,
    onSale: true,
    categoryId: "3",
    features: [
      { name: "Connection type", value: "Bluetooth" },
      { name: "Language", value: "English US" },
      { name: "Type:", value: "QWERTY" },
    ],
  },
  {
    id: "4",
    image: "https://m.media-amazon.com/images/I/61s3KPj7i-L._AC_SL1000_.jpg",
    name: "Logitech MX Keys Mini",
    description: "Wireless Keyboard with backtilt ilumination.",
    rating: 0,
    brand: "Logitech",
    price: 99.99,
    stock: 96,
    onSale: true,
    categoryId: "3",
    features: [
      { name: "Connection type", value: "Bluetooth" },
      { name: "Language", value: "English US" },
      { name: "Type:", value: "QWERTY" },
    ],
  },
  {
    id: "5",
    image: "https://m.media-amazon.com/images/I/61DYLoyNRWL._AC_SL1384_.jpg",
    name: 'LG UltraWide 32"',
    description: 'Ultrawide 32" Monitor for gaming and productivity.',
    rating: 0,
    brand: "LG",
    price: 689.41,
    stock: 10,
    onSale: true,
    categoryId: "5",
    features: [
      { name: "Frequency", value: "75Hz" },
      { name: "Resolution", value: "1920x1028" },
      { name: "Size", value: '32"' },
    ],
  },
  {
    id: "6",
    image: "https://m.media-amazon.com/images/I/61DYLoyNRWL._AC_SL1384_.jpg",
    name: "Logitech Master 3",
    description:
      "Sé imparable con la velocidad sin precedentes de los mejores procesadores de escritorio del mundo. Los procesadores AMD Ryzen serie 5000 ofrecen lo último en alto rendimiento, ya sea que estés jugando los últimos juegos, diseñando el siguiente rascacielos o estocando datos científicos. Con AMD Ryzen, siempre estás en el líder.",
    rating: 0,
    brand: "Logitech",
    price: 79.99,
    stock: 43,
    onSale: true,
    categoryId: "4",
    features: [{ name: "Connection type", value: "Bluetooth" }],
  },
];