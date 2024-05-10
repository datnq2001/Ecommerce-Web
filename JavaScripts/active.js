
var temp = window.location.href.split('/');
var liTemp = window.location.href.split('#');
console.log(temp);
console.log(liTemp);

var str = "";
var strLi = "";

for (var i = 0; i < temp.length; i++){
    if (i == temp.length - 1)
        str = temp[i];
}

for (var i = 0; i < liTemp.length; i++){
    if (i == liTemp.length - 1)
        strLi = liTemp[i];
}

console.log(strLi);


activeNavigation('index.html', 'trangChu');
activeNavigationBar('index.html', 'trangChuNav');

activeNavigation('CoffeeBean.html', 'hatCoffee');
activeNavigation('StrongFlavorCoffee.html', 'hatCoffee');
activeNavigation('BrewCoffee.html', 'hatCoffee');
activeNavigationBar('CoffeeBean.html', 'hatCoffeeNav');

activeNavigation('TraditionalTea.html', 'traDamVi');
activeNavigationBar('TraditionalTea.html', 'traDamViNav');


activeNavigation('Promotion.html', 'khuyenMai');
activeNavigationBar('Promotion.html', 'khuyenMaiNav');

activeNavigation('Drink.html', 'thucUong');
activeNavigationBar('Drink.html', 'thucUongNav');
activeNavigation('Dessert.html', 'thucUong');

function activeNavigation(addressHref, id){
    if (str == addressHref){
        document.getElementById(id).setAttribute('style', 'color: #0C713D;');
    }
}

function activeNavigationBar(addressHref, id){
    if (str == addressHref){
        document.getElementById(id).setAttribute('style', 'color: #fff; background-color: #0C713D;');
    }
}

function activeLiCoffeeFirst(addressHref, id){
    if (str == addressHref){
        document.getElementById(id).setAttribute('style', 'border-bottom: 1px solid #0C713D; border-top: 1px solid #0C713D;');
    }
}
