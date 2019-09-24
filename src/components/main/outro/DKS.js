import React from 'react';
import DKSLogo from '../../../assets/images/logo.dansk.konferencecentre.png';

const DKS = () => {
    return (
        <div className="row">
            <div className="col-md-6">
                <img src={DKSLogo} alt="DKS logo"/>
                <p>Møllerup Gods er autoriseret partner hos Danske Konferencecentre</p>
            </div>
        </div>
    )
}

export default DKS;
