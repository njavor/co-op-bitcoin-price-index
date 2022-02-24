document.addEventListener('DOMContentLoaded', main)

async function main(){

    let usd = document.querySelector('usd');
    let gbp = document.querySelector('gbp');
    let eur = document.querySelector('eur');

    let url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    let szotar = await olvaso_fetch(url);
    usd = szotar.bpi.USD;
    gbp = szotar.bpi.GBP;
    eur = szotar.bpi.EUR;

    

}


async function olvaso_fetch(url){
    let promise = await fetch(url);
    let promise_json = await promise.json();
    console.log(promise_json);
    return promise_json;
}