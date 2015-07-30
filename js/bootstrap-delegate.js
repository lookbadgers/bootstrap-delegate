/* 
 * Bootstrap: bootstrap-delegate.js v0.0.2
 */
+function ($) {
    $(document).on('click.bs.delegate.data-api', '[data-delegate]', function (e) {
        var $this = $(this)
        var press = $this.data('press');
        var href = $this.attr('href')
        var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
        switch (press) {
            case 'button':
                return $target.trigger('click');
            case 'form':
                return $target.submit();
            default:
                $target.trigger(press);
        }
    });
}(jQuery);