import React from 'react';
import './productInfo.scss';
import Features from './features/features';

export default function ProductInfo() {
    return (
        <div id="product-info">
            <div className="shade info-shade"></div>
            <div className="context">
                <div className="info-title">
                    Try WizeCare to <br />
                    deliver better health <br />
                    for your patients
                </div>
                <Features />
            </div>
        </div>
    );
}