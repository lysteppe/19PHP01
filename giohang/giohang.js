function getdata(sanpham){
    document.getElementById('sanpham_full').style.display = 'block';
    switch (sanpham) {
        case "samsung_s10":
            document.images['default'].src = "samsung-s10.jpg";
            document.getElementById('name').innerHTML = "Samsung S10+ White 512GB";
            document.getElementById('pin').innerHTML = "3174 mAh, có sạc nhanh";
            document.getElementById('ram').innerHTML = "4 Gb";
            document.getElementById('rom').innerHTML = "64 Gb ";
            localStorage.Name = "samsung_s10";
            break;
        case "samsung_note9":
            document.images['default'].src = "samsung-note9.jpg";
            document.getElementById('name').innerHTML = "Samsung Note9 512GB";
            document.getElementById('pin').innerHTML = "4230 mAh";
            document.getElementById('ram').innerHTML = "3 Gb";
            document.getElementById('rom').innerHTML = "32 Gb ";
            localStorage.Name = "samsung_note9";
            break;
        case "samsung_s9":
            document.images['default'].src = "samsung-s9.jpg";
            document.getElementById('name').innerHTML = "Samsung Galaxy S9 (2018)";
            document.getElementById('pin').innerHTML = "3800 mAh, có sạc nhanh";
            document.getElementById('ram').innerHTML = "6 Gb";
            document.getElementById('rom').innerHTML = "128 Gb ";
            localStorage.Name = "samsung_s9";
            break;
        case "samsung_a9":
            document.images['default'].src = "samsung-a9.jpg";
            document.getElementById('name').innerHTML = "Samsung Galaxy A9 128GB";
            document.getElementById('pin').innerHTML = "4000 mAh";
            document.getElementById('ram').innerHTML = "6 Gb";
            document.getElementById('rom').innerHTML = "128 Gb ";
            localStorage.Name = "samsung_a9";
            break;
        case "samsung_a50":
            document.images['default'].src = "samsung-a50.jpg";
            document.getElementById('name').innerHTML = "Samsung Galaxy A50 128GB";
            document.getElementById('pin').innerHTML = "4000 mAh";
            document.getElementById('ram').innerHTML = "6 Gb";
            document.getElementById('rom').innerHTML = "128 Gb ";
            localStorage.Name = "samsung_a50";
            break;
        case "samsung_a6":
            document.images['default'].src = "samsung-a6.jpg";
            document.getElementById('name').innerHTML = "Samsung Galaxy A6 128GB";
            document.getElementById('pin').innerHTML = "4000 mAh";
            document.getElementById('ram').innerHTML = "6 Gb";
            document.getElementById('rom').innerHTML = "128 Gb ";
            localStorage.Name = "samsung_a6";
            break;
    }
    localStorage['samsung_s10'] = '0';
    localStorage['samsung_note9'] = '0';
    localStorage['samsung_s9'] = '0';
    localStorage['samsung_a9'] = '0';
    localStorage['samsung_a50'] = '0';
    localStorage['samsung_a6'] = '0';
}

function them_vao_gio(){
    localStorage[localStorage.Name] = parseInt(localStorage[localStorage.Name]) + parseInt(1);
}
function xoa_san_pham(){
    localStorage[localStorage.Name] = removeItem(localStorage[localStorage.Name]) - removeItem(1);
}
function show(){
    localStorage.kq = '';
    if (localStorage.getItem('samsung_s10') > 0) 
        {
            localStorage.kq += "Samsung S10+ White 512GB <br> " + "Số lượng:" + localStorage['samsung_s10'] + " cái <br>";
        }
    if (localStorage.getItem('samsung_note9') > 0) 
    {
        localStorage.kq += "Samsung Note9 512GB <br> " + "Số lượng:" + localStorage['samsung_note9'] + " cái <br>";
    }
    if (localStorage.getItem('samsung_s9') > 0) 
    {
        localStorage.kq += "Samsung Galaxy S9 (2018) <br> " + "Số lượng:" + localStorage['samsung_s9'] + " cái <br>";
    }
    if (localStorage.getItem('samsung_a9') > 0) 
    {
        localStorage.kq += "Samsung Galaxy A9 128GB <br> " + "Số lượng:" + localStorage['samsung_a9'] + " cái <br>";
    }
    if (localStorage.getItem('samsung_a50') > 0) 
    {
        localStorage.kq += "Samsung Galaxy A50 128GB <br> " + "Số lượng:" + localStorage['samsung_a50'] + " cái <br>";
    }
    if (localStorage.getItem('samsung_a6') > 0) 
    {
        localStorage.kq += "Samsung Galaxy A6 128GB <br> " + "Số lượng:" + localStorage['samsung_a6'] + " cái <br>";
    }
}
document.getElementById('output').innerHTML = localStorage.kq;

