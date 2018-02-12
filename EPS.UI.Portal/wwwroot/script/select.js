daishu.ajax.load = function (url, $parentEle, userOption) {
    var option = $.extend({}, daishu.ajax.defaultOption, {
        type: 'GET',
        url: url,
        dataType: 'HTML',
        success: function (result) {
            $parentEle.html(result);
        }
    }, userOption);
    $.ajax(option);
}

function selectChange($this, $child, notdefault, replace) {
    var selectValue = onSelectChanging($this, $child);
    if (!selectValue) {
        return;
    }

    var url = $this.attr('data-url').replace('selectValue', selectValue);
    daishu.ajax.load(url, $child, {
        success: function (result) {
            setOptions($child, result, notdefault, replace);
        }
    });
}

function setOptions($parent, result, notdefault, replace) {
    $parent.empty().html('');
    if (!notdefault) {
        $parent.html('<option value="">请选择</option>');
    }
    if (replace) {
        $parent.replaceWith($(result));
    }
    else {
        $parent.append($(result));
    }
    $parent.change();
}

function onSelectChanging($this, $child) {
    var selectValue = $this.val();
    if (!selectValue || selectValue.length <= 0) {
        $child.html('<option value="">请选择</option>');
        $child.change();
        return false;
    }
    return selectValue;
}

$(function() {
    $('body').on('change', '#companyId', function () {
        $('#groupId').html('<option value="">请选择</option>');
    });
    $('body').on('change', '.layui-layer #companyId', function () {
        $('.layui-layer #groupId').html('<option value="">请选择</option>');
    });
});

$(function () {
    $('body').on('change', '#proDicId', function () {
        $('#cityDicId').html('<option value="">请选择</option>');
    });
    $('body').on('change', '.layui-layer #proDicId', function () {
        $('.layui-layer #cityDicId').html('<option value="">请选择</option>');
    });
});