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
    return(
        <ul>
            <li className="list"><button className="link-drop"><span name="BTC" style={btc} className="coin-icon"></span><span className="coin-text">Bitcoin (BTC)</span></button></li>
            <li className="list"><button className="link-drop"><span name="LTC" style={ltc} className="coin-icon"></span><span className="coin-text">Litecoin (LTC)</span></button></li>
            <li className="list"><button className="link-drop"><span name="ETH" style={eth} className="coin-icon"></span><span className="coin-text">Ethereum (ETH)</span></button></li>
            <li className="list"><button className="link-drop"><span name="XRP" style={xrp} className="coin-icon"></span><span className="coin-text">Ripple (XRP)</span></button></li>
            <li className="list"><button className="link-drop"><span name="BCH" style={bch} className="coin-icon"></span><span className="coin-text">Bitcoin Cash (BCH)</span></button></li>
            <li className="list"><button className="link-drop"><span name="BNB" style={bnb} className="coin-icon"></span><span className="coin-text">Binance Coin (BNB)</span></button></li>
            <li className="list"><button className="link-drop"><span name="XLM" style={xlm} className="coin-icon"></span><span className="coin-text">Stellar (XLM)</span></button></li>
            <li className="list"><button className="link-drop"><span name="TRX" style={trx} className="coin-icon"></span><span className="coin-text">TRON (TRX)</span></button></li>
            <li className="list"><button className="link-drop"><span name="ATOM" style={atom} className="coin-icon"></span><span className="coin-text">Cosmos (ATOM)</span></button></li>
            <li className="list"><button className="link-drop"><span name="NANO" style={nano} className="coin-icon"></span><span className="coin-text">NANO (NANO)</span></button></li>
            <li className="list"><button className="link-drop"><span name="PAX" style={pax} className="coin-icon"></span><span className="coin-text">PAX (PAX)</span></button></li>
            <li className="list"><button className="link-drop"><span name="DASH" style={dash} className="coin-icon"></span><span className="coin-text">Dash (DASH)</span></button></li>
            <li className="list"><button className="link-drop"><span name="DAI" style={dai} className="coin-icon"></span><span className="coin-text">Dai Stablecoin (DAI)</span></button></li>
            <li className="list"><button className="link-drop"><span name="EOS" style={eos} className="coin-icon"></span><span className="coin-text">EOS (EOS)</span></button></li>
            <li className="list"><button className="link-drop"><span name="USDT" style={usdt} className="coin-icon"></span><span className="coin-text">Tether (USDT)</span></button></li>
            <li className="list"><button className="link-drop"><span name="QTUM" style={qtum} className="coin-icon"></span><span className="coin-text">Qtum (QTUM)</span></button></li>
        </ul>
    )
}

export default CoinsList;