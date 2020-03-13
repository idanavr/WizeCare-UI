import React from 'react';
import './features.scss';
import PhysicalRemoteIcon from '../../../../assets/images/Web Login Physical Remote@2x.png';
import HomeIcon from '../../../../assets/images/Web login home@2x.png';
import ProviderIcon from '../../../../assets/images/Web Login Provider@2x.png';
import SecureIcon from '../../../../assets/images/Web login Secure@2x.png';

export default function Features() {
    return (
        <div id="features">
            <div>
                <img src={HomeIcon} />
                <div>
                    Home <br />
                    personalized <br />
                    care plans
               </div>
            </div>
            <div>
                <img src={PhysicalRemoteIcon} />
                <div>
                    Physical remote <br />
                    monitoring based <br />
                    mobile camera {'&'} AI
                 </div>
            </div>
            <div>
                <img src={SecureIcon} />
                <div>
                    Secure Video <br />
                    Sessions
               </div>
            </div>
            <div>
                <img src={ProviderIcon} />
                <div>
                    Provider patient <br />
                    engagement
                </div>
            </div>
        </div>
    );
}