/* 
 * Bootstrap: bootstrap-delegate.js v0.0.3
 */
+function ($) {
    $(document).on('click.bs.delegate.data-api', '[data-delegate]', function (e) {
        var $this = $(this)
        var press = $this.data('delegate');
        var href = $this.attr('href')
        var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
        switch (press) {
            case 'button':
                return $target.trigger('click');
            case 'form':
                return $target.submit();
            case 'collapse-hide':
                return $target.hasClass('in')?$target.collapse('hide'):false;
            case 'collapse-show':
                return !$target.hasClass('in')?$target.collapse('show'):false;
            default:
                $target.trigger(press);
        }
    });
}(jQuery);