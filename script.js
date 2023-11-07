$(document).ready(function() {
    function getItems() {
        $.ajax({
            url: 'https://www.boredapi.com/api/activity/', 
            type: 'GET',
            success: function (data) {
                $('#item-list').empty();
                data.forEach(function (item) {
                    $('#item-list').append('<li>' + item.name + ' <button class="delete-item" data-id="' + item.id + '">Delete</button></li>');
                });
            }
        });
    }

    $('#add-item').click(function () {
        var newItem = $('#new-item').val();
        $.ajax({
            url: 'https://www.boredapi.com/api/activity/', 
            type: 'POST',
            data: JSON.stringify({ name: newItem }),
            contentType: 'application/json',
            success: function () {
                getItems();
            }
        });
    });

    $('#item-list').on('click', '.delete-item', function () {
        var itemId = $(this).data('id');
        $.ajax({
            url: 'https://www.boredapi.com/api/activity/' + itemId, 
            type: 'DELETE',
            success: function () {
                getItems();
            }
        });
    });

    getItems();
});
