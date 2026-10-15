const initialProducts = [
  {
    id: 1,
    name: "The Witcher 3: Wild Hunt",
    title: "The Witcher 3: Wild Hunt",
    nombre: "The Witcher 3: Wild Hunt",
    category: "Rol",
    categoria: "Rol",
    price: 3999,
    precio: 3999,
    stock: 15,
    oferta: true,
    description: "Juego de rol de mundo abierto en un universo de fantasía oscura.",
    descripcion: "Juego de rol de mundo abierto en un universo de fantasía oscura.",
    image: "https://via.placeholder.com/400x300",
    imagen: "https://via.placeholder.com/400x300"
  },
  {
    id: 2,
    name: "Red Dead Redemption 2",
    title: "Red Dead Redemption 2",
    nombre: "Red Dead Redemption 2",
    category: "Acción",
    categoria: "Acción",
    price: 5999,
    precio: 5999,
    stock: 8,
    oferta: false,
    description: "Épica historia de forajidos en el corazón de América.",
    descripcion: "Épica historia de forajidos en el corazón de América.",
    image: "https://via.placeholder.com/400x300",
    imagen: "https://via.placeholder.com/400x300"
  },
  {
    id: 3,
    name: "Minecraft",
    title: "Minecraft",
    nombre: "Minecraft",
    category: "Aventura",
    categoria: "Aventura",
    price: 2695,
    precio: 2695,
    stock: 20,
    oferta: true,
    description: "Construye, explora y sobrevive en un mundo de bloques.",
    descripcion: "Construye, explora y sobrevive en un mundo de bloques.",
    image: "https://via.placeholder.com/400x300",
    imagen: "https://via.placeholder.com/400x300"
  },
  {
    id: 4,
    name: "Hollow Knight",
    title: "Hollow Knight",
    nombre: "Hollow Knight",
    category: "Indie",
    categoria: "Indie",
    price: 1499,
    precio: 1499,
    stock: 5,
    oferta: false,
    description: "Aventura de acción clásica en 2D a través de un vasto mundo interconectado.",
    descripcion: "Aventura de acción clásica en 2D a través de un vasto mundo interconectado.",
    image: "https://via.placeholder.com/400x300",
    imagen: "https://via.placeholder.com/400x300"
  }
];

// LEER (Read)
export const getProducts = () => {
  const saved = localStorage.getItem('products_db');
  if (!saved) {
    localStorage.setItem('products_db', JSON.stringify(initialProducts));
    return initialProducts;
  }
  return JSON.parse(saved);
};

// CREAR (Create)
export const createProduct = (newProduct) => {
  const current = getProducts();
  const created = { ...newProduct, id: Date.now() };
  current.push(created);
  localStorage.setItem('products_db', JSON.stringify(current));
  return created;
};

// ACTUALIZAR (Update)
export const updateProduct = (id, updatedData) => {
  const updated = getProducts().map((p) => (p.id === Number(id) ? { ...p, ...updatedData } : p));
  localStorage.setItem('products_db', JSON.stringify(updated));
  return updated;
};

// ELIMINAR (Delete)
export const deleteProduct = (id) => {
  const filtered = getProducts().filter((p) => p.id !== Number(id));
  localStorage.setItem('products_db', JSON.stringify(filtered));
  return filtered;
};

const products = getProducts();

// Esto es lo que necesita Products.jsx en la línea 2 para no ponerse en blanco:
export default products;