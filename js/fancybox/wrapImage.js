//$(document).ready(function() {
    wrapImageWithFancyBox();
//});

/**
 * Wrap images with fancybox support.
 */
function wrapImageWithFancyBox() {
    $('img').not('.site-author-avatar img').not('#comment img').not(".album-list-item img").not(".atemoji").not("#qr img").each(function() {
        var $image = $(this);
        var imageCaption = $image.attr('alt');
        var $imageWrapLink = $image.parent('a');

        // $imageWrapLink.size()
        if ($imageWrapLink.length < 1) {
            var src = this.getAttribute('src');
            if (src != null) {
                var idx = src.lastIndexOf('?');
                if (idx != -1) {
                    src = src.substring(0, idx);
                }
                $imageWrapLink = $image.wrap('<a href="' + src + '"></a>');
                // 添加图片标题，以后图片格式为：![图片标题](图片url)
                if (imageCaption) {
                    $imageWrapLink = $image.after('<em>' + imageCaption +'</em>').parent('a');
                }
            }
        }

        //$imageWrapLink.attr('data-fancybox', 'images'); gallery
        $imageWrapLink.attr('data-fancybox', 'images');
        if (imageCaption) {
            $imageWrapLink.attr('data-caption', imageCaption);
        }

    });
    $('[data-fancybox="images"]').fancybox({
        buttons : [ 
          'slideShow',
          'thumbs',
          'zoom',
          'fullScreen',
          'close'
        ],
        thumbs : {
          autoStart : false
        },
      });
}
