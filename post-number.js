//<![CDATA[
(function ($) { var newerLink = $('a.blog-pager-newer-link'); var olderLink = $('a.blog-pager-older-link');
    $.get(newerLink.attr('href'), function (data) { var thumb = $(data)
            .find('.post-body')
            .length == 1 ? "<img alt='" + $(data)
            .find('.post-title')
            .text() + "' src='" + $(data)
            .find('.post-body img:first').attr('src', function(i, src) {return src.replace(/.*?:\/\//g , "//").replace( 's1600', 's386' );})
            .attr('src') + "' class='pager-thumb' width='386' height='170'/>" : "";
        newerLink.html(thumb + '<div><h6>التالي</h6><h5>' + $(data)
            .find('.post-title')
            .text() + '</h5></div>') }, "html");
    $.get(olderLink.attr('href'), function (data2) { var thumb2 = $(data2)
            .find('.post-body')
            .length == 1 ? "<img alt='" + $(data2)
            .find('.post-title')
            .text() + "' src='" + $(data2)
            .find('.post-body img:first').attr('src', function(i, src) {return src.replace(/.*?:\/\//g , "//").replace( 's1600', 's386' );})
            .attr('src') + "' class='pager-thumb' width='386' height='170'/>" : "";
        olderLink.html(thumb2 + '<div><h6>السابق</h6><h5>' + $(data2)
            .find('.post-title')
            .text() + '</h5></div>') }, "html") })(jQuery);
//]]>
