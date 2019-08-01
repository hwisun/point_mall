$(document).ready(() => {
    indexItems();
    getUser();
});

function getUser() {
    $.ajax({
        url: 'http://localhost:8005/me/',
        type: 'get',
        dataType: 'json',
        beforeSend: (xhr) => {
            xhr.setRequestHeader('Authorization', localStorage.getItem('authorization'))
        }
    })
    .done((user) => {
        $('#containal > h2').text('잔고 : ' + user.point);
    });
}

function indexItems() {
    $.ajax({
        url: 'http://localhost:8005/me/items/',
        type: 'get',
        dataType: 'json',
        beforeSend: (xhr) => {
            xhr.setRequestHeader('Authorization', localStorage.getItem('authorization'))
        }
    })
    .done((userItems) => {
        for (userItem of userItems) {
            const item = userItem.item;
            const $itemContainal = $(`
                <div class= "item-containal" onClick = "location.href = '/item_detail.html?id=${item.id}'">
                    <div class="item-image"><img src="http://localhost:8005${item.image}" alt=""></img></div>
                    <div class="item-title">${item.title}</div>
                    <div class="item-price">갯수 : ${userItem.count}</div>
                </div>
            `);
            const $itemListContainal = $('#item-list-containal');
            $itemContainal.appendTo($itemListContainal);
        }
    })
}