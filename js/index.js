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
                itemsBaseURL: 'http://138.68.137.58/blanchot_quotes/res/',
                thumbnailLabel: {display: false},
                viewerToolbar: {display: false}
            }
        );
    }
);