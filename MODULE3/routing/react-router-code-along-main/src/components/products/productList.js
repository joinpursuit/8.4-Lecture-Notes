import { Link } from "react-router-dom";

export default function ProductList({ products, type }) {
    return (
        <section><h2>All {type}</h2>
            <article className="products">
                <ul>
                    {
                        products.map(product => {
                            return (
                                <li key={product.id}>
                                    <Link to={`/${type.toLowerCase()}/${product.id}`}>
                                        <h4>{product.name}</h4>
                                        <img src={product.image} alt={product.name} />
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>


            </article>
        </section>
    );
};