/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

$(document).ready(
    function () {
        var items = [];

        for (var i = 1; i < 174; i++) {
            items.push({src: i+'.png', srct: i+'.png'});
        }

        var shuffledItems = shuffleArray(items);

        $("#nanoGallery").nanoGallery(
            {
                items: shuffledItems,
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