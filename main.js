const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var items = $$('.tab-item');
var panes = $$('.tab-pane');

var tabActive = $('.tab-item.active');
var line = $('.tabs .line');

line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';

items.forEach((tab, index) => {
    const pane = panes[index];
    tab.onclick = function() {
        //xóa active cũ trước khi click active mới
        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');
        //thêm active khi click vào button
        this.classList.add('active');
        pane.classList.add('active');

        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';

    }
})