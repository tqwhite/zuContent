
$('.menuActivateButton').click(function(item){
	$('.menuButtonResponder').toggle();
});


//	$('#tabList').addClass('navFrontPanel').show();
	
// var panelList=$('.switchablePanel'),
// 	count=panelList.length,
// 	currentPanel=0,
// 	
// 	scrollFunction=function(event){
// 
// 		$.scrollTo(panelList[currentPanel], 2000, {
// 			onAfter: function() {
// 			
// 				console.log('in after');
// 				
// 				}
// 			
// 			});
// 		
// 			currentPanel++;
// 			if (currentPanel==count){
// 				currentPanel=0;
// 			}
// 	
// 	};

//$('.switchablePanel').bind('click', scrollFunction)

var browserSpecs=Widgets.Models.Browser.windowSize(),
	tabList=$('#tabList');
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
	if (inx===0){
	
		var frontTabList=tabList.clone(),
			panelId=$(item).attr('id');
		frontTabList.addClass('tabList').addClass('navFrontPanel');
		$(item).append(frontTabList);

		frontTabList.attr('id', 'frontPageTablist').show();
	}
	else{
		var newTabList=tabList.clone();
		newTabList.addClass('tabList').addClass('menuButtonResponder').addClass('navSubsequentPanels');
		$(item).prepend(newTabList);
	a=1;
	}


		
	}

);




$('.panelTab a').click(function(event){
event.preventDefault();
	$('.tabList').hide();
	var currPanelId=$(this).parent().parent().parent().attr('id');
	var targetSelector=this.href.match(/.*(#.*)$/)[1],
		target=$(targetSelector);			
		var titleString=this.text
		origTitle=document.title;
		
		if (currPanelId!=targetSelector){
		

		
		$.scrollTo(target, 2000, {
			onAfter: function() {		
				if(titleString){document.title=origTitle+': '+titleString;}
				location.hash=targetSelector;
			}
			
			});

			

		}
});