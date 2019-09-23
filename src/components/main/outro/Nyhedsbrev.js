import React from 'react';

const Nyhedsbrev = () => {
    return (
        <div className="col-md-2 offset-md-1">
            <form className="form-group">
                <p>Tilmeld nyhedsbrev</p>
                <p className="text-right"><span>*</span> skal udfyldes</p>
                <label htmlFor="">Email adresse</label>
                <input type="text" className="form-control"/>
                <label htmlFor="">Fornavn</label>
                <input type="text" className="form-control"/>
                <label htmlFor="">Efternavn</label>
                <input type="text" className="form-control"/>
                <label htmlFor="" className="form-check-label">Vælg nyhedsbrev
                    <input type="checkbox" className="form-check-input"/>Møllerup-alle
                    <input type="checkbox" className="form-check-input"/>Verdensballetten
                    <input type="checkbox" className="form-check-input"/>Møllerup Hamp
                </label>
                <button type="submit" className="btn">Tilmeld</button>
            </form>
        </div>
    )
}

export default Nyhedsbrev;
