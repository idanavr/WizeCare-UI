import React from 'react';
import './register.scss';
import Header from './header/header';
import RegisterForm from './registerForm/registerForm';
import ProductInfo from './productInfo/productInfo';

export default function Register() {
    return (
        <div id="register">
            <div className="shade"></div>
            <div className="context">
                <Header />
                <RegisterForm />
                <ProductInfo />
            </div>
        </div>
    );
} 