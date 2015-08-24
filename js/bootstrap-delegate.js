/* 
 * Bootstrap: bootstrap-delegate.js v0.0.6
 */
+function ($) {
    $(document).on('click.bs.delegate.data-api', '[data-delegate]', function (e) {
        var $this = $(this)
        var press = $this.data('delegate');
        var href = $this.attr('href')
        var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
        switch (press) {
            case 'button':
                return $target[0].click();
            case 'form':
                return $target.submit();
            case 'collapse-hide':
                return $target.hasClass('in')?$target.collapse('hide'):$target.trigger('hide.bs.collapse');
            case 'collapse-show':
                return !$target.hasClass('in')?$target.collapse('show'):$target.trigger('show.bs.collapse');;
            case 'tab-next':
                return tab($target,true);
            case 'tab-previous':
                return tab($target,false);
            default:
                $target.trigger(press);
        }
        
        function tab($target,next) {
            var $tabs = $('a[role=tab]',$target);
            var $active = $('li.active a[role=tab]',$target);
            var index = $tabs.index($active);
            index += (next?1:-1);
            if (index >= $tabs.length) {
                index = 0;
            }
            var $tab = $tabs.eq(index);
            if ($tab.length) {
                $tab.tab('show');
                window.location = '#'+$target.attr('id');
            }
        }
    });
}(jQuery);