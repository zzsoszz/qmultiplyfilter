(function($)
{
		var  defaultoptions = {
			  selector      : this.selector
		};
		
		var plugname="qmultiplyfilter";
		
		$.fn[plugname]=function()
		{
			var isMethodCall=arguments.length>0 && typeof arguments[0] === "string";
			if(isMethodCall)
			{
				
				var methodname=arguments[0];
				var args = Array.prototype.slice.call(arguments,1);
				this.each(function() {
					var instance = $.data( this,plugname);
					if(instance && $.isFunction( instance[methodname] ))
					{
						var method=instance[methodname];
						method.apply(instance,args);
					}
				});
			}else{
				var inputoptions = arguments;
				$(this).each(
						function ()
						{
							var optionsnew = $.extend( {}, defaultoptions);
							if(inputoptions.length>0)
							{
									optionsnew=$.extend(optionsnew,inputoptions[0]);
							}
							var instance=$(this).data(plugname);
							if(instance)
							{
								instance.init(optionsnew);
							}else
							{
								var target=$(this);
								instance=new PluginObject(target);
								instance.init(optionsnew);
								$(this).data(plugname,instance);
							}
						}
					);
					return this;
			};
		}
		
		function FilterItem()
		{
			this.name;//String
			this.values;//Array
		}
		
		/*
		*0.根据已经有的值初始化选项
		*1.点击一个过滤选项，就修改当前选项的状态,并更新FilterItem
		*2.添加或者删除选项值
		*
		*/
		function PluginObject(target)
		{
				this.filteritemlist=[];
				this.options;
				
				this.refresh=function()
				{
					
				}
				;
				this.addValue=function(itemname,value)
				{
						val filteritem=this.filteritemlist.filter(function(){
								return this.name=itemname
						});
						if(filteritem==null)
						{
							this.filteritemlist.put(itemname);
						}else{
							this.filteritemlist.remove();
						}
				};
				this.removeValue=function(itemname,value)
				{
						this.filteritemlist.
				};
				this.init=function(initoptions)
				{
					this.options=initoptions;
					target.on("click",".itemval",function(event){
							if($(event.target).hasClass("active"))
							{
								$(event.target).addClass("active");
							}else{
								$(event.target).removeClass("active");
							}
					});
				};
				this.init();
		}
}
)(jQuery)