import React from 'react';
import './RegisterForm.scss';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';

export default function RegisterForm() {
    return (
        <div id="register-form">
            <div className="company-name">WizeCare</div>
            <form>
                <div className="field-section">
                    <input type="text" placeholder="*Full Name" />
                    <input type="text" placeholder="*Email" />
                    <input type="text" placeholder="*Password" />
                </div>
                <div className="submit-msg">
                    Your password must be at least 8 characters
                </div>
                <div className="terms">
                    <input id="checkbox-terms" className="checkbox" name="checkbox-terms" type="checkbox" />
                    <label htmlFor="checkbox-terms" className="checkbox-label"></label>
                    I agree to Wizecares Terms {'&'} Conditions
                </div>
                <div>
                    <button className="btn-next">Next <ArrowForwardIos /></button>
                </div>
            </form>
        </div>
    );
}