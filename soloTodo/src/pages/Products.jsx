import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import products from '../data/products';
import ProductCard from '../components/organisms/ProductCard';
import '../styles/global.css';

function Products() {
  const location = useLocation();
  const [categoriaActiva, setCategoriaActiva] = useState('TODAS');

  const categorias = [
    { nombre: 'ACCION', img: '/img/accion.png' },
    { nombre: 'DEPORTE', img: '/img/deporte1.png' },
    { nombre: 'HISTORIA', img: '/img/historia..png' },
    { nombre: 'SHOOTERS', img: '/img/shoter.png' },
    { nombre: 'MULTIJUGADOR', img: '/img/multijugador1.png' }
  ];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('categoria');
    if (cat) {
      setCategoriaActiva(cat.toUpperCase());
    } else {
      setCategoriaActiva('TODAS');
    }
  }, [location.search]);

  // Si haces clic en una categoría la filtra; si le das clic de nuevo, muestra TODAS
  const seleccionarCategoria = (nombreCat) => {
    if (categoriaActiva === nombreCat) {
      setCategoriaActiva('TODAS');
    } else {
      setCategoriaActiva(nombreCat);
    }
  };

  const productosFiltrados = categoriaActiva === 'TODAS'
    ? products
    : products.filter((p) => {
        const catProducto = (p.category || p.categoria || '')
          .toUpperCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        return catProducto.includes(categoriaActiva);
      });

  return (
    <Container className="my-4">
      <div className="titulo-seccion">CATALOGO</div>
      
      {/* Ahora usa la clase catalogo-box para que se agrande automáticamente al achicar la ventana */}
      <div className="catalogo-box">
        {categorias.map((cat, index) => (
          <div
            key={index}
            onClick={() => seleccionarCategoria(cat.nombre)}
            className={`categoria-card-interactiva ${categoriaActiva === cat.nombre ? 'activa' : ''}`}
          >
            <img
              src={cat.img}
              alt={cat.nombre}
            />
          </div>
        ))}
      </div>

      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-4">
        <h2 style={{ color: '#3afff8', margin: 0, fontSize: 'clamp(1.3rem, 3vw, 2rem)' }}>
          {categoriaActiva === 'TODAS' ? 'TODOS LOSnpm run de JUEGOS' : `CATEGORÍA: ${categoriaActiva}`}
        </h2>
        {categoriaActiva !== 'TODAS' && (
          <button 
            onClick={() => setCategoriaActiva('TODAS')} 
            className="btn-sesion-neon"
          >
            VER TODOS
          </button>
        )}
      </div>

      <Row>
        {productosFiltrados.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
}

export default Products;