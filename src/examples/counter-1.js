var root = document.getElementById('root');

// var template1 =  <div>
//                     <h1 id="header">My first React app!</h1>
//                     <div>Lorem, ipsum dolor.</div>
//                     <ul>
//                         <li>Lorem, ipsum.</li>
//                         <li>Lorem, ipsum.</li>
//                         <li>Lorem, ipsum.</li>
//                     </ul>
//                 </div>;

var number = 0;
var btnPlusClassName = "btnRed";
var btnMinusClassName = "btnBlue";


function addOne(){
    number++;
    renderApp();
    console.log("+");
}

var minusOne = () => {
    number--;
    renderApp();
    console.log("-");
}


var renderApp = () => {
    var template2 = (
        <div>
            <h1>Number: {number}</h1>
            <button id="btnPlusOne" className={btnPlusClassName} onClick={addOne}>+1</button>
            <button id="btnMinusOne" className={btnMinusClassName} onClick={minusOne}>-1</button>
        </div>
    );

    ReactDOM.render(template2, root);
}

// renderApp();

function tick() {
    var element = (
        <div>
            <h2>Time is: {new Date().toLocaleTimeString()}</h2>
        </div>
    );

    ReactDOM.render(element, root);
}

setInterval(tick, 1000);