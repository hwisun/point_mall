$(document).ready(() => {
    console.log('ready');
    itemList();

    const domContainer = document.querySelector('#like_button_container');
    ReactDOM.render((
        <button onClick={() => this.setState({ liked: true })}>
            Like
        </button>
    ), domContainer);
});

function itemList() {
    console.log('itemList')
    $.get('http://127.0.0.1:8005/items/')
    .done((items) => {
        console.log('성공(ajax)');
        for(const   item of items) {
            const $itemContainal = $(`
                <div class="item-containal" onclick="location='item_detail.html?id=${item.id}'">
                    <div class="item-image"><img src="${item.image}" alt="이미지"></div>
                    <div class="item-title">${item.title}</div>
                    <div class="item-price">${item.price}</div>
                </div>
            `);
            const $itemListContainal = $('#item-list-containal');
            $itemContainal.appendTo($itemListContainal);
        }
    })
    .fail((items) => {
        console.log('실패(ajax)');
    });
}

'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.'
        }

        return (
            <button onClick={() => this.setState({ liked: true })}>
                Like
            </button>
        );
    }
}

