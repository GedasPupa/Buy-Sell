import React from 'react';
import './icon.css';

// BTC, LTC, ETH, XRP, BCH, BNB, XLM, TRX, ATOM, NANO, PAX, DASH, DAI, EOS, USDT ir QTUM

const iconUrls = [
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/btc.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/ltc.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/eth.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/xrp.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/bch.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/bnb.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/xlm.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/trx.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/atom.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/nano.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/pax.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/dash.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/dai.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/eos.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/usdt.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/qtum.png?raw=true)`
]

const iconStyle = {
    backgroundImage: iconUrls[0],
}
const btc = {
    backgroundImage: iconUrls[0],
}
const ltc = {
    backgroundImage: iconUrls[1],
}
const eth = {
    backgroundImage: iconUrls[2],
}
const xrp = {
    backgroundImage: iconUrls[3],
}
const bch = {
    backgroundImage: iconUrls[4],
}
const bnb = {
    backgroundImage: iconUrls[5],
}
const xlm = {
    backgroundImage: iconUrls[6],
}
const trx = {
    backgroundImage: iconUrls[7],
}
const atom = {
    backgroundImage: iconUrls[8],
}
const nano = {
    backgroundImage: iconUrls[9],
}
const pax = {
    backgroundImage: iconUrls[10],
}
const dash = {
    backgroundImage: iconUrls[11],
}
const dai = {
    backgroundImage: iconUrls[12],
}
const eos = {
    backgroundImage: iconUrls[13],
}
const usdt = {
    backgroundImage: iconUrls[14],
}
const qtum = {
    backgroundImage: iconUrls[15],
}

function CoinsList(props) {
    const {handleBuy} = props;
    return(
        <ul>
            <li className="list"><button name="BTC" style={btc} onClick={handleBuy} className="link-drop">Bitcoin (BTC)</button></li>
            <li className="list"><button name="LTC" style={ltc} onClick={handleBuy} className="link-drop">Litecoin (LTC)</button></li>
            <li className="list"><button name="ETH" style={eth} onClick={handleBuy} className="link-drop">Ethereum (ETH)</button></li>
            <li className="list"><button name="XRP" style={xrp} onClick={handleBuy} className="link-drop">Ripple (XRP)</button></li>
            <li className="list"><button name="BCH" style={bch} onClick={handleBuy} className="link-drop">Bitcoin Cash (BCH)</button></li>
            {/* <li className="list"><button name="BNB" style={bnb} onClick={handleBuy} className="link-drop">Binance Coin (BNB)</button></li> */}
            {/* <li className="list"><button name="XLM" style={xlm} onClick={handleBuy} className="link-drop">Stellar (XLM)</button></li> */}
            <li className="list"><button name="TRX" style={trx} onClick={handleBuy} className="link-drop">TRON (TRX)</button></li>
            {/* <li className="list"><button name="ATOM" style={atom} onClick={handleBuy} className="link-drop">"ACosmos (ATOM)</button></li> */}
            <li className="list"><button name="NANO" style={nano} onClick={handleBuy} className="link-drop">"NANO (NANO)</button></li>
            {/* <li className="list"><button name="PAX" style={pax} onClick={handleBuy} className="link-drop">PAX (PAX)</button></li> */}
            <li className="list"><button name="DASH" style={dash} onClick={handleBuy} className="link-drop">"Dash (DASH)</button></li>
            <li className="list"><button name="DAI" style={dai} onClick={handleBuy} className="link-drop">Dai Stablecoin (DAI)</button></li>
            {/* <li className="list"><button name="EOS" style={eos} onClick={handleBuy} className="link-drop">EOS (EOS)</button></li> */}
            <li className="list"><button name="USDT" style={usdt} onClick={handleBuy} className="link-drop">"Tether (USDT)</button></li>
            {/* <li className="list"><button name="QTUM" style={qtum} onClick={handleBuy} className="link-drop">"Qtum (QTUM)</button></li> */}
        </ul>
    )
}

export default CoinsList;