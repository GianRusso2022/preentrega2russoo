import {useNavigate} from "react-router-dom";

const Item = (props) =>{
    const navigate = useNavigate();
    return  <div className="m-2">
    <div className="card" onClick={() => navigate(`/product/${props.id}`)}>
        <img src={props.imagen} alt="imagen" className="card-img-top"/>
        <div className="card-body d-flex justify-content-between">
            <span>{props.titulo}</span>
            <span>${props.precio}</span>
            <button className="btn btn-dark ">Agregar al carrito</button>
        </div>
    </div>
</div>
}

export default Item;