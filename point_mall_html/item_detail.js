let itemId = 0;

$(document).ready(() => {
    console.log('ready');
    const url = new URL(location.href);
    itemId = url.searchParams.get('id');
    console.log(itemId);
    itemDetail();
});

function itemDetail() {
    console.log('itemList')
    console.log(itemId)
    $.get('http://127.0.0.1:8005/items/'+itemId+'/')
    .done((item) => {
        console.log('성공(ajax)');
        console.log(item);
        $('.item-detail-image > img').attr('src',item.image);
        $('.item-title').text('상품명 : ' + item.title);
        $('.item-desc').text('설명 : ' + item.description);
    })
    .fail((items) => {
        console.log('실패(ajax)');
    });
}

function purchase() {
    console.log('purchase(on)');
    $.ajax({
        url: 'http://127.0.0.1:8005/items/' + itemId + '/purchase/',
        type: 'post',
        dataTyp: 'json',
        beforeSend: function (xhr) {
            const username = 'user';
            const password = '1234';
            xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
        },
    })
    .done((result) => {
        console.log('성공(ajax)');
        console.log(result);
        location.href = '/my_item.html';
    })
    .fail((items) => {
        console.log('실패(ajax)');
    });
}