/**
 * @author    Olivier Parent
 * @copyright Copyright © 2015-2016 Artevelde University College Ghent
 * @license   Apache License, Version 2.0
 */
(function ($) {
    'use strict';

    $(document).ready(whenReady);

    function whenReady($) {

        // External Links
        // --------------
        var localUriRegExp = new RegExp('/' + window.location.host + '/');
        function externalUriFilter() {
            console.log(this.href, window.location.host);
            return !localUriRegExp.test(this.href);
        }
        $('.c-page a[href]')
            .filter(externalUriFilter)
            .attr('target', '_blank');

        // Highlighter Language Tag
        // ------------------------
        var $highlights = $('.highlight > pre > code');
        $highlights.each(function () {
            $(this).parents('.highlight').addClass('language-' + $(this).data('lang'));
        });

        // Sidebar
        // -------
        var $sideBar = $('aside.list-group'),
            $sideBarItems = $sideBar.children('.list-group-item');
        if ($sideBarItems.length <= 1) {
            $sideBar.hide();
        }

        // Table of Contents
        // -----------------
        var $toc = $('#table-of-contents'),
            $headings = $('.content').children('h2, h3, hr'),
            $dropdownMenu = $toc.children('.dropdown-menu');
        if ($headings.length) {
            $headings.each(function () {
                var $heading = $(this),
                    tagName = $heading.prop('tagName').toLowerCase()
                if (tagName === 'hr') {
                    var $dropdownItem = $('<div>')
                        .addClass('dropdown-divider');
                } else {
                    $heading.prepend
                    var $dropdownItem = $('<a>')
                        .attr('href', '#' + $heading.attr('id'));
                    var $headingLink = $dropdownItem.clone().addClass('heading-link fa fa-bookmark-o');
                    $dropdownItem
                        .addClass('dropdown-item')
                        .attr('data-counter', tagName + '-counter')
                        .text($heading.text());
                    if (tagName === 'h2') {
                        $dropdownItem.css('font-weight', 'bold');
                    }
                    $heading.prepend($headingLink);
                }
                $dropdownMenu.append($dropdownItem);
            });
            $('body').scrollspy({ target: '#table-of-contents' });
        } else {
            $toc.hide();
        }

        // Timeline
        // --------
        var $timeline = $('.timeline__content[data-date], .timeline__content[data-week]');
        $timeline.each(function () {
            moment.locale($('html').attr('lang'));
            var dataDate = $(this).data('date'),
                dataWeek = $(this).data('week'),
                element = '';
            if (typeof dataDate === 'undefined') {
                element = $('<div>').addClass('timeline__date').text('Week ' + dataWeek);
            } else {
                element = $('<time>').addClass('timeline__date').text(dataDate).attr('datetime', $(this).data('date'));
            }
            $(this).after(element);
        });
    }

})(jQuery);