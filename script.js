document.addEventListener('DOMContentLoaded', main)


async function olvaso_fetch(url){
    let promise = await fetch(url);
    let promise_json = await promise.json();
    return promise_json;
}


async function main(){
    let usd = document.querySelector('#usd');
    let gbp = document.querySelector('#gbp');
    let eur = document.querySelector('#eur');

    let url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    let szotar = await olvaso_fetch(url);
    usd.innerHTML = Math.round(szotar.bpi.USD.rate_float);
    gbp.innerHTML = Math.round(szotar.bpi.GBP.rate_float);
    eur.innerHTML = Math.round(szotar.bpi.EUR.rate_float);
}