import React from 'react';
import './header.scss';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default function Header() {
    return (
        <div className="header">
            <a href="#" className="btn-back">
                <ArrowBackIosIcon className="arrow-back" />
                <span>Create your account</span>
            </a>
        </div>
    );
}