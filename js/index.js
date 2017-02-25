$(document).ready(
    function () {
        var items = [];

        for (var i = 1; i < 174; i++) {
            items.push({src: i+'.png', srct: i+'.png'});
        }

        $("#nanoGallery").nanoGallery(
            {
                items: items,
                thumbnailWidth: 'auto',
                thumbnailHeight: 500,
                theme: 'clean',
                itemsBaseURL: 'http://textos.victoralbertos.com/wp-content/uploads/2017/02/',
                thumbnailLabel: {display: false},
                viewerToolbar: {display: false}
            }
        );
    }
);