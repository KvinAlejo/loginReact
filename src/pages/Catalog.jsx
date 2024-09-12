import 'bootstrap/dist/css/bootstrap.min.css';

// Ejemplo de datos de productos
const products = [
  {
    id: 1,
    name: 'Producto 1',
    description: 'Descripción breve del producto 1.',
    imageUrl: 'https://picsum.photos/200/200?random=1', // Imagen de muestra 1
  },
  {
    id: 2,
    name: 'Producto 2',
    description: 'Descripción breve del producto 2.',
    imageUrl: 'https://picsum.photos/200/200?random=2', // Imagen de muestra 2
  },
  {
    id: 3,
    name: 'Producto 3',
    description: 'Descripción breve del producto 3.',
    imageUrl: 'https://picsum.photos/200/200?random=3', // Imagen de muestra 3
  },
  // Añade más productos según sea necesario
];

function Catalog() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Catálogo de XXX</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={product.imageUrl} alt={product.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
