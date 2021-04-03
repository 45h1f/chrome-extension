(function () {
    console.log('starting');
    let p = document.getElementsByTagName('p');
    for (let i = 0; p.length; i++) {
        p[i].innerHTML = "changed paragraph";
    }
    i = 0;
})();

(function () {
    // let script = document.createElement('script');
    // var url = 'script.js';
    // script.src = url + '?' + new Date().getTime();
    // document.body.appendChild(script);
})();