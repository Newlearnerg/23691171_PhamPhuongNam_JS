import './ProductList.css';

const products = [
  { id: 1, name: 'Tai nghe Bluetooth', price: '590.000đ' },
  { id: 2, name: 'Bàn phím cơ', price: '1.290.000đ' },
  { id: 3, name: 'Chuột gaming', price: '790.000đ' },
  { id: 4, name: 'Màn hình 24 inch', price: '2.990.000đ' },
  { id: 5, name: 'Webcam Full HD', price: '890.000đ' },
  { id: 6, name: 'Loa mini', price: '450.000đ' },
];

function ProductList() {
  return (
    <section className="product-page">
      <h1 className="product-title">Product List</h1>
      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductList;
