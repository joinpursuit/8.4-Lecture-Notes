

export default function ProductList({products, type}) {
    return (
        <section><h2>All {type}</h2>
        <article className="products">
            <ul>
                {
                    products.map(product => {
                        return (
                            <li key={product.id}>
                                <h4>{product.name}</h4>
                                <img src={product.image} alt={product.name} />
                            </li>
                        )
                    })
                }
            </ul>


        </article>
        </section>
    );
  };