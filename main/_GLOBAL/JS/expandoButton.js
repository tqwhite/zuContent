
/*	this will cause the parent of any button matched to expand/contract
	works for multiple button/container sets per invocation
	the classes are defined in superGlobal
	
	DEPENDS on a certain content structure:
	
	<div id='containerIdOptional' style='height:410px;'>
		<div class='expandoButtonIdClass expandButton'>&nbsp;</div>
		<div class='innerContainer' style='height:95%;overflow:hidden'>
			text that is larger than the space allotted 
			and needs a 'more' button
		</div>
	</div>
	
	NOTES:
		1) #containerIdOptional is not important or required. It can also have any class
			but must have a height.
			
		2a) The line containing expandoClass (or some other class name) must exist and *must*
			be inside the same div as the content text container.
		2b)	.expandoButtonIdClass can be a different string but buttonSelector below needs to find it
			(and others like it, if present)
		2c) The expandButton class is defined in superGlobal. A different class or button could be used.
		
		3a)	.innerContainer can be any class that works for the contentSelector.
		3b)	overflow:hidden is required.
		3c)	For the most common button type (pinned to the bottom of the container), the height must be
			such that the button is not covered by content text. It must be a percentage.
*/
$('body').widgets_features_expando_button({
	buttonSelector:'.expandoButtonIdClass',
	shrunkButtonClassName:'expanded',
	expandedButtonClassName:'shrinked',
	contentSelector:'.innerContainer'
}).widgets_features_expando_button('showButtonsWithContent');