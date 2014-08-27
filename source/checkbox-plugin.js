/**
 * 级联多选框
 * @param jquery 选择器
 */
$.fn.cascadeAll = function (sel) {
    var that = this;
    this.click(function () {
        var checked = $(this).attr('checked');
        if (checked) {
            $(sel).attr('checked', 'checked').change();
        } else {
            $(sel).removeAttr('checked').change();
        }
    });
    $(sel).click(function () {
        var checkbox_size = $(sel).length;
        var checked_size = $(sel).filter(':checked').length;
        if (checkbox_size != checked_size) {
            that.removeAttr('checked').change();
        } else {
            that.attr('checked', 'checked').change();
        }
    });
    return that;
}