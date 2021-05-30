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
    return(
        <ul>
            <li className="list"><button className="link-drop"><span name="EUR" style={eur} className="coin-icon"></span><span className="coin-text">Euro (EUR)</span></button></li>
            <li className="list"><button className="link-drop"><span name="GBP" style={gbp} className="coin-icon"></span><span className="coin-text">Pound Sterling (GBP)</span></button></li>
            <li className="list"><button className="link-drop"><span name="USD" style={usd} className="coin-icon"></span><span className="coin-text">United States Dollar (USD)</span></button></li>
            <li className="list"><button className="link-drop"><span name="JPY" style={jpy} className="coin-icon"></span><span className="coin-text">Japanese YEN (JPY)</span></button></li>
            <li className="list"><button className="link-drop"><span name="CNY" style={cny} className="coin-icon"></span><span className="coin-text">Chinese Yuan (CNY)</span></button></li>
            <li className="list"><button className="link-drop"><span name="RUB" style={rub} className="coin-icon"></span><span className="coin-text">Russian Ruble (RUB)</span></button></li>
        </ul>
    )
}

export default FiatList;