
$('.menuActivateButton').click(function(){
	$('#navHeader').toggle();
});

$('.navButton').click(function(event){
event.preventDefault();
	$('#navHeader').hide();
	var targetName=$(this).attr('target'),
		target=$('#'+targetName).parent();

		$.scrollTo(target, 2000, {
			onAfter: function() {
			}
			
			});
});

var panelList=$('.switchablePanel'),
	count=panelList.length,
	currentPanel=0,
	
	scrollFunction=function(event){

		$.scrollTo(panelList[currentPanel], 2000, {
			onAfter: function() {
			
				console.log('in after');
				
				}
			
			});
		
			currentPanel++;
			if (currentPanel==count){
				currentPanel=0;
			}
	
	};

//$('.switchablePanel').bind('click', scrollFunction)

var browserSpecs=Widgets.Models.Browser.windowSize();
$('.switchablePanel').each(

	function(inx, item){

		$(item).css({
			height:browserSpecs.height+'px',
			width:browserSpecs.width+'px'
		});

		$('img', item).css({
			height:browserSpecs.height+'px',
			width:browserSpecs.width+'px'
		});
		
	}

);