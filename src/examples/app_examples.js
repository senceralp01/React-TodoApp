var root = document.getElementById('root');

/* *****************************************************************************************
var template1 =  <div>
                    <h1 id="header">My first React app!</h1>
                    <div>Lorem, ipsum dolor.</div>
                    <ul>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                    </ul>
                </div>;

ReactDOM.render(template1, root);
***************************************************************************************** */



/* *****************************************************************************************
var template2 = (
    <div id="product-details">
        <h2 id="product-name">Name: Samsung S9</h2>
        <p id="product-price">Price: 3000 TL</p>
        <p id="product-desc">Description: A good mobile phone.</p>
    </div>
);

ReactDOM.render(template2, root);
***************************************************************************************** */



/* *****************************************************************************************
var name = "Samsung S10";
var price = "5000";
var description = "Lorem ipsum dolor sit amet.";

var template3 = (
    <div id="product-details">
        <h2 id="product-name">Name: {name}</h2>
        <p id="product-price">Price: {price} TL</p>
        <p id="product-desc">Description: {description}</p>
    </div>
);

ReactDOM.render(template3, root);
***************************************************************************************** */



/* *****************************************************************************************
var product = {
    name: "Samsung S11",
    price: 7000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, similique."
}

function formatPrice(p){
    return p.price + ' TL';
}

var template4 = (
    <div id="product-details">
        <h2 id="product-name">Name: {product.name}</h2>
        <p id="product-price">Price: {formatPrice(product)}</p>
        <p id="product-desc"><b>Description:</b> {product.description}</p>
    </div>
);

ReactDOM.render(template4, root);
***************************************************************************************** */



/* *****************************************************************************************
var product = {
    name: "Samsung S11",
    price: 7000,
    // description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, similique."
}

function getDescription(description) {
    if(description){
        return description;
    }else{
        return 'No description';
    }
}

var template5 = (
    <div id="product-details">
        <h2 id="product-name">Name: {product.name}</h2>
        <p id="product-price">Price: {product.price}</p>
        <p id="product-desc">Description: {getDescription(product.description)}</p>
    </div>
);

ReactDOM.render(template5, root);
***************************************************************************************** */



/* *****************************************************************************************
var product = {
    name: "Samsung S11",
    price: 7000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, similique."
}

function getDescription(description) {
    if(description){
        return <p id="product-desc">Description: {description}</p>
    }
}

var template6 = (
    <div id="product-details">
        <h2 id="product-name">Name: {product.name ? product.name : 'No name'}</h2>
        <p id="product-price">Price: {product.price == 0 ? 'Free' : product.price}</p>
        {getDescription(product.description)}
    </div>
);

ReactDOM.render(template6, root);
***************************************************************************************** */



/* *****************************************************************************************
var product = {
    name: "Samsung S11",
    price: 0,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, similique."
}

function getDescription(description) {
    if(description){
        return <p id="product-desc">Description: {description}</p>
    }
}

var template7 = (
    <div id="product-details">
        <h2 id="product-name">Name: {product.name ? product.name : 'No name'}</h2>
        {product.price>0 && <p id="product-price">Price: {product.price} TL</p>}
        {getDescription(product.description)}
    </div>
);

// Bu örnekte soldaki koşul "product.price>0" sonucu True ise sağındaki ifade çalıştırılır.

ReactDOM.render(template7, root);
***************************************************************************************** */




/* *****************************************************************************************
var product = {

}

function getDescription(description) {
    if(description){
        return <p id="product-desc">Description: {description}</p>
    }
}

var template8 = (
    <div id="product-details">
        <h2 id="product-name">Name: {product.name ? product.name : 'No name'}</h2>
        {(product.price && product.price>0) && <p id="product-price">Price: {product.price} TL</p>}
        {getDescription(product.description)}
    </div>
);

// Bu örnekte soldaki koşul "(product.price && product.price>0)" sonucu True ise sağındaki ifade çalıştırılır.

ReactDOM.render(template8, root);
***************************************************************************************** */




var product = {
    name: "Samsung S11",
    price: 7000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, similique.",
    types: []
}

function getDescription(description) {
    if(description){
        return <p id="product-desc">Description: {description}</p>
    }
}

var template9 = (
    <div id="product-details">
        <h2 id="product-name">Name: {product.name ? product.name : 'No name'}</h2>
        {(product.price && product.price>0) && <p id="product-price">Price: {product.price} TL</p>}
        {getDescription(product.description)}
        <p>{product.types.length>0 ? 'There are options.' : 'No options.'}</p>
    </div>
);

ReactDOM.render(template9, root);