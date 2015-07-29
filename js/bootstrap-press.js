/* 
 * Bootstrap: bootstrap-press.js v0.0.1
 */
+function ($) {
    $(document).on('click.bs.press.data-api', '[data-press]', function (e) {
        var $this   = $(this)
        var href    = $this.attr('href')
        var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
        if (!$target.length) {
            return;
        }
        switch($this.data('press')){
            case 'button':
                return $target.trigger('click');
            case 'form':
                return $target.submit();
        }
    });    
}(jQuery);
