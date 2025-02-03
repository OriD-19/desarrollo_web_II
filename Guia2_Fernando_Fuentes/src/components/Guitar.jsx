import React from 'react'

const Guitar = ({ guitar, cart, setCart }) => {

    const addItemToCart = (newGuitar) => {
        // check if the guitar was already inside of the cart
        const hasGuitar = cart.findIndex((gQ) => gQ.id === newGuitar.id);

        if (hasGuitar !== -1) {
            // the guitar was already present inside of the array
            const newCart = cart.map(gQ => gQ.id === newGuitar.id ? {...gQ, quantity: gQ.quantity+1} : gQ);
            setCart(newCart);
        } else {
            setCart(prevCart => [...prevCart, {...guitar, quantity: 1}]);
        }

    }

    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center" >
            <div className="col-4">
                <img className="img-fluid" src={"./img/" + guitar.image + ".jpg"} alt="imagen guitarra" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{guitar.name}</h3>
                <p>{guitar.description}</p>
                <p className="fw-black text-primary fs-3">${guitar.price}</p>
                <button
                    type="button"
                    onClick={() => addItemToCart(guitar)}
                    className="btn btn-dark w-100"
                >Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default Guitar