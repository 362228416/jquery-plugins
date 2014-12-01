$.Menu = function(container, items, handler) {
    var html = [];
    html.push('<div class="m-menu" style="font-size:13px, width: 100px;border: 1px solid cadetblue;position: absolute;display: none;background-color: #FFF;"><ul style="margin: 0;padding: 0;">');
    $.each(items, function(i, menu){
        if (i > 0) {
            html.push('<li class="line" style="margin: 0;padding: 0;height: 1px;font-size: 14px;list-style: none;line-height: 20px;"><hr style="margin: 0;padding: 0;"/></li>');
        }
        html.push('<li class="m-item" style="margin: 0;padding: 3px;height: 20px;font-size: 14px;list-style: none;line-height: 20px;"><a style="color: #19aff5;text-decoration: none;" data-id="' + menu.id + '" href="javascript:void(0)" onmouseover="this.style.color=\'#f30\'" onmouseout="this.style.color=\'#19aff5\'">' + menu.text + '</a></li>');
    })
    html.push('</ul></div>');
    $('body').append(html.join(''));

    var target;

    $(document).on('click', container, function(e){
        var left = e.clientX;
        var top = e.clientY;
        $('div.m-menu').css({'left': left + 'px', 'top': top + 'px'}).show();
        target = e.target;
    }).on('click', function(e){
        if ($(container).index(e.target) == -1) {
            $('div.m-menu').hide();
        }
    }).on('click', 'div.m-menu li.m-item', function(e){
        var item = {
            id: $(e.target).attr('data-id'),
            text: $(e.target).text(),
            target: target
        };
        handler && handler(item);
    })
}
