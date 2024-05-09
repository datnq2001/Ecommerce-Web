
// var srcImg1 = "../img/Logo3.png";
// var srcImg2 = "../img/Logo2.jpg";
// var srcImg3 = "../img/Logo4.png";

// var srcImg = "../img/Logo3.png";

// setInterval(() => {
//     $(document).ready(function(){
//         if (srcImg === srcImg1){
//             $(".img-Logo").attr("src", srcImg);
//             srcImg = srcImg3;
//         }
//         else if (srcImg === srcImg3){
//             $(".img-Logo").attr("src", srcImg);
//             srcImg = srcImg2;
//         }
//         else{
//             $(".img-Logo").attr("src", srcImg);
//             srcImg = srcImg1;
//         }
//     });
// }, 2000);

// -----------------------Mua Giỏ Hàng----------------------//

var countCard = 0;

DomID('countStore').innerHTML = countCard;

var shops = [
        { name: '123 George Street, Sydney, NSW 2000', city: 'Sydney'},
        { name: '456 Collins Street, Melbourne, VIC 3000', city: 'Melbourne'},
        { name: '789 Queen Street, Brisbane, QLD 4000', city: 'Brisbane'},
        { name: '101 St Georges Terrace, Perth, WA 6000', city: 'Perth'},
        { name: '234 Rundle Mall, Adelaide, SA 5000', city: 'Adelaide'},
        { name: '567 Northbourne Avenue, Canberra, ACT 2600', city: 'Canberra'},
        { name: '890 Surfers Paradise Boulevard, Gold Coast, QLD 4217', city: 'Gold Coast'},
];

function DomID(id){
    return document.getElementById(id);
}

render('list-Shop', shops);

DomID('Filter-Shop').addEventListener('change', () => {
    var selectedShop = DomID('Filter-Shop').value;

    var renderShop = shops.filter((item) => {
        return item.city === selectedShop;
    });

    render('list-Shop', renderShop);
});

function render(container, items){
    var listItems = items.map((item) => {
        return '<div class="group-Items"><i class="fas fa-coffee" style="font-size:24px"></i><li class="list-group-items">' + item.name + 
        '</li>' + '<a class="directShop">Direction'+'</a></div>'
    })

    var renderHtml = listItems.join('');

    DomID(container).innerHTML = renderHtml;
}
