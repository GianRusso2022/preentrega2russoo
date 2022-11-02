import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import Item from "./Item";
import { useParams } from "react-router-dom";


const AppContainer = () => {
    const {categoryId} = useParams();
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setProductos([])
        getProducts(categoryId)
            .then(items => setProductos(items))
            .catch(e => console.log(e))
    }, [categoryId])


    return (
        <div className="products container d-flex flex-wrap justify-content-center">
            {productos.map((producto) => {
                return (
                    <Item
                        key={producto.id}
                        color={producto.color}
                        detalle={producto.detalle}
                        id={producto.id}
                        precio={producto.precio}
                        imagen={producto.imagen}
                        categoria={producto.categoria}
                    />
                );
            })}
        </div>
    );
}

export default AppContainer;