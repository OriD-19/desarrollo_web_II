import React from 'react'

const CarritoItem = ({ guitar, setCart, cart }) => {
    // need a way to store the quantity
    // use Local Storage!

    const handleDecreaseQuant = () => {
        if (guitar.quantity === 1) {
            handleDeleteItem();
            return;
        }

        setCart((prevCart) => [...prevCart.map(gQ => gQ.id === guitar.id ? {...gQ, quantity: gQ.quantity-1} : gQ)])
    }

    const handleIncreaseQuant = () => {
        setCart(prevCart => [...prevCart.map(gQ => gQ.id === guitar.id ? {...gQ, quantity: gQ.quantity+1} : gQ)])
    }

    const handleDeleteItem = () => {
        setCart((prevCart) => [...prevCart.filter(gQ => gQ.id !== guitar.id)]);
    }

    const { image, price, quantity, name } = guitar;

    return (
        <tr>
            <td>
                <img className="img-fluid" src={`./img/${image}.jpg`} alt="imagen guitarra" />
            </td>
            <td>{name}</td>
            <td className="fw-bold">
                ${price}
            </td>
            <td className="flex align-items-start gap-4">
                <button
                    type="button"
                    onClick={handleDecreaseQuant}
                    className="btn btn-dark"
                >
                    -
                </button>
                {quantity}
                <button
                    type="button"
                    onClick={handleIncreaseQuant}
                    className="btn btn-dark"
                >
                    +
                </button>
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={handleDeleteItem}
                    type="button"
                >
                    X
                </button>
            </td>
        </tr>
    )
}

export default CarritoItem