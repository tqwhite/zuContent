$(document).ready(function(){
		$('.contactFormButton').click(function(event){	
			$('body').widgets_features_contact_form({
				event:event,
				parameterFileName:'contactForms.ini'
			});
		});
	});