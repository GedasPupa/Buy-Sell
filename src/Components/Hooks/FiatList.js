import React from 'react';
import './icon.css';

// USD, GBP, EUR, JPY, CNY, RUB

const iconUrls = [
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/color/usd.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/gbp.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/eur.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/jpy.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/cny.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/rub.png?raw=true)`,
]

const usd = {
    backgroundImage: iconUrls[0],
}
const gbp = {
    backgroundImage: iconUrls[1],
}
const eur = {
    backgroundImage: iconUrls[2],
}
const jpy = {
    backgroundImage: iconUrls[3],
}
const cny = {
    backgroundImage: iconUrls[4],
}
const rub = {
    backgroundImage: iconUrls[5],
}

function FiatList(props) {
    const {handlePay} = props;
    return(
        <ul>
            <li className="list"><button style={eur} onClick={handlePay} name="EUR" className="link-drop">Euro (EUR)</button></li>
            <li className="list"><button style={gbp} onClick={handlePay} name="GBP" className="link-drop">Pound Sterling (GBP)</button></li>
            <li className="list"><button style={usd} onClick={handlePay} name="USD" className="link-drop">United States Dollar (USD)</button></li>
            <li className="list"><button style={jpy} onClick={handlePay} name="JPY" className="link-drop">Japanese YEN (JPY)</button></li>
            <li className="list"><button style={cny} onClick={handlePay} name="CNY" className="link-drop">Chinese Yuan (CNY)</button></li>
            <li className="list"><button style={rub} onClick={handlePay} name="RUB" className="link-drop">Russian Ruble (RUB)</button></li>
        </ul>
    )
}

export default FiatList;
