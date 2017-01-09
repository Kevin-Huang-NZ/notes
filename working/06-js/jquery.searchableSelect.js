//  
//  
// 修改版本，添加了反馈函数。
// itemSelectedFn

(function($){

  // a case insensitive jQuery :contains selector
  $.expr[":"].searchableSelectContains = $.expr.createPseudo(function(arg) {
    return function( elem ) {
	  	if (arg == undefined) {
	  	  return true;
	  	}
      return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
  });

  $.searchableSelect = function(element, options) {
    this.element = element;
    this.options = options || {};
    this.init();

    var _this = this;

    this.searchableElement.click(function(event){
      // event.stopPropagation();
      _this.show();
    }).on('keydown', function(event){
      if (event.which === 13 || event.which === 40 || event.which == 38){
        event.preventDefault();
        _this.show();
      }
    });

    $(document).on('click', null, function(event){
      if(_this.searchableElement.has($(event.target)).length === 0)
        _this.hide();
    });

    this.input.on('keydown', function(event){
      event.stopPropagation();
      if(event.which === 13){         //enter
        event.preventDefault();
        _this.selectCurrentHoverItem();
        _this.hide();
      } else if (event.which == 27) { //ese
        _this.hide();
      } else if (event.which == 40) { //down
        _this.hoverNextItem();
      } else if (event.which == 38) { //up
        _this.hoverPreviousItem();
      }
    }).on('keyup', function(event){
      if(event.which != 13 && event.which != 27 && event.which != 38 && event.which != 40)
        _this.filter();
    })
  }

  var $sS = $.searchableSelect;

  $sS.fn = $sS.prototype = {
    version: '0.0.1'
  };

  $sS.fn.extend = $sS.extend = $.extend;

  $sS.fn.extend({
    init: function(){
      var _this = this;
	  this._selCallBack = null;
	  try{
	    if(this.options.itemSelectedFn != null){
		  this._selCallBack = this.options.itemSelectedFn;
		} 
	  }catch(eee){
	    
	  }
      this.element.hide();

      this.searchableElement = $('<div tabindex="0" class="bs_select_searchable"></div>');
      this.holder = $('<div class="bs_select_searchable_holder"></div>');
      this.dropdown = $('<div class="bs_select_searchable_dropdown bs_select_searchable_hide"></div>');
      this.input = $('<input type="text" class="bs_select_searchable_input" />');
      this.items = $('<div class="bs_select_searchable_items"></div>');
      this.caret = $('<span class="bs_select_searchable_caret"></span>');

      this.scrollPart = $('<div class="bs_searchable_scroll"></div>');
      this.hasPrivious = $('<div class="bs_searchable_has_privious"><i class="fa fa-angle-double-up"></i></div>');
      this.hasNext = $('<div class="bs_searchable_has_next"><i class="fa fa-angle-double-down"></i></div>');

      this.hasNext.on('mouseenter', function(){
        _this.hasNextTimer = null;

        var f = function(){
          var scrollTop = _this.items.scrollTop();
          _this.items.scrollTop(scrollTop + 20);
          _this.hasNextTimer = setTimeout(f, 50);
        }

        f();
      }).on('mouseleave', function(event) {
        clearTimeout(_this.hasNextTimer);
      });

      this.hasPrivious.on('mouseenter', function(){
        _this.hasPriviousTimer = null;

        var f = function(){
          var scrollTop = _this.items.scrollTop();
          _this.items.scrollTop(scrollTop - 20);
          _this.hasPriviousTimer = setTimeout(f, 50);
        }

        f();
      }).on('mouseleave', function(event) {
        clearTimeout(_this.hasPriviousTimer);
      });

      this.dropdown.append(this.input);
      this.dropdown.append(this.scrollPart);

      this.scrollPart.append(this.hasPrivious);
      this.scrollPart.append(this.items);
      this.scrollPart.append(this.hasNext);

      this.searchableElement.append(this.caret);
      this.searchableElement.append(this.holder);
      this.searchableElement.append(this.dropdown);
      this.element.after(this.searchableElement);

      this.buildItems();
      this.setPriviousAndNextVisibility();
    },

    filter: function(){
      var text = this.input.val();
      this.items.find('.bs_select_searchable_item').addClass('bs_select_searchable_hide');
      this.items.find('.bs_select_searchable_item:searchableSelectContains('+text+')').removeClass('bs_select_searchable_hide');
      if(this.currentSelectedItem.hasClass('bs_select_searchable_hide') && this.items.find('.bs_select_searchable_item:not(.bs_select_searchable_hide)').length > 0){
        this.hoverFirstNotHideItem();
      }

      this.setPriviousAndNextVisibility();
    },

    hoverFirstNotHideItem: function(){
      this.hoverItem(this.items.find('.bs_select_searchable_item:not(.bs_select_searchable_hide)').first());
    },

    selectCurrentHoverItem: function(){
      if(!this.currentHoverItem.hasClass('bs_select_searchable_hide'))
        this.selectItem(this.currentHoverItem);
    },

    hoverPreviousItem: function(){
      if(!this.hasCurrentHoverItem())
        this.hoverFirstNotHideItem();
      else{
        var prevItem = this.currentHoverItem.prevAll('.bs_select_searchable_item:not(.bs_select_searchable_hide):first')
        if(prevItem.length > 0)
          this.hoverItem(prevItem);
      }
    },

    hoverNextItem: function(){
      if(!this.hasCurrentHoverItem())
        this.hoverFirstNotHideItem();
      else{
        var nextItem = this.currentHoverItem.nextAll('.bs_select_searchable_item:not(.bs_select_searchable_hide):first')
        if(nextItem.length > 0)
          this.hoverItem(nextItem);
      }
    },

    buildItems: function(){
      var _this = this;
      this.element.find('option').each(function(){
        var item = $('<div class="bs_select_searchable_item" data-value="'+$(this).attr('value')+'">'+$(this).text()+'</div>');

        if(this.selected){
          _this.selectItem(item);
          _this.hoverItem(item);
        }

        item.on('mouseenter', function(){
          $(this).addClass('hover');
        }).on('mouseleave', function(){
          $(this).removeClass('hover');
        }).click(function(event){
          event.stopPropagation();
          
			  	var selectvalue = $(this).data('value');
			  	if (_this._selCallBack != null) {
		      	_this._selCallBack(selectvalue);
		      }
          _this.selectItem($(this));
          _this.hide();
        });

        _this.items.append(item);
      });

      this.items.on('scroll', function(){
        _this.setPriviousAndNextVisibility();
      })
    },
    show: function(){
      this.dropdown.removeClass('bs_select_searchable_hide');
      this.input.focus();
      this.status = 'show';
      this.setPriviousAndNextVisibility();
    },

    hide: function(){
      if(!(this.status === 'show'))
        return;

      if(this.items.find(':not(.bs_select_searchable_hide)').length === 0)
          this.input.val('');
      this.dropdown.addClass('bs_select_searchable_hide');
      this.searchableElement.trigger('focus');
      this.status = 'hide';
    },

    hasCurrentSelectedItem: function(){
      return this.currentSelectedItem && this.currentSelectedItem.length > 0;
    },

    selectItem: function(item){
      if(this.hasCurrentSelectedItem())
        this.currentSelectedItem.removeClass('bs_selected');

      this.currentSelectedItem = item;
      item.addClass('bs_selected');

      this.hoverItem(item);

      this.holder.text(item.text());
      var value = item.data('value');
      this.holder.data('value', value);
      this.element.val(value);
      if(this.options.afterSelectItem){
        this.options.afterSelectItem.apply(this);
      }
    },

    hasCurrentHoverItem: function(){
      return this.currentHoverItem && this.currentHoverItem.length > 0;
    },

    hoverItem: function(item){
      if(this.hasCurrentHoverItem())
        this.currentHoverItem.removeClass('hover');

      if(item.outerHeight() + item.position().top > this.items.height())
        this.items.scrollTop(this.items.scrollTop() + item.outerHeight() + item.position().top - this.items.height());
      else if(item.position().top < 0)
        this.items.scrollTop(this.items.scrollTop() + item.position().top);

      this.currentHoverItem = item;
      item.addClass('hover');
    },

    setPriviousAndNextVisibility: function(){
      if(this.items.scrollTop() === 0){
        this.hasPrivious.addClass('bs_select_searchable_hide');
        this.scrollPart.removeClass('bs_has_privious');
      } else {
        this.hasPrivious.removeClass('bs_select_searchable_hide');
        this.scrollPart.addClass('bs_has_privious');
      }

      if(this.items.scrollTop() + this.items.innerHeight() >= this.items[0].scrollHeight){
        this.hasNext.addClass('bs_select_searchable_hide');
        this.scrollPart.removeClass('bs_has_next');
      } else {
        this.hasNext.removeClass('bs_select_searchable_hide');
        this.scrollPart.addClass('bs_has_next');
      }
    }
  });

  $.fn.searchableSelect = function(options){
    this.each(function(){
      var sS = new $sS($(this), options);
    });

    return this;
  };

})(jQuery);
