"use strict";
/******************************************************************************/
/******************************************************************************/

jQuery(document).ready(function($)
{
	/**************************************************************************/

	$('.template-component-accordion').templateAccordion(
	{
		active			:	0,
		header			:	'h6',
		disabled		:	false,
		collapsible		:	false,
		heightStyle		:	'content',
		animate			:
		{
			easing		:	'easeOutQuad',
			duration	:	300
		}
	});

	/**************************************************************************/

	$('.template-component-tab').templateTab(
	{
		active			:	0,
		disabled		:	false,
		collapsible		:	false,
		heightStyle		:	'content',
		show			:
		{
			delay		:	0,
			easing		:	'swing',
			duration	:	200
		},
		hide			:
		{
			delay		:	0,
			easing		:	'swing',
			duration	:	100
		}
	});

	/**************************************************************************/

	$('.template-component-counter-bar-list').templateCounter(
	{
		type			:	'percentage'
	});

	/**************************************************************************/

	$('.template-component-counter-box-list').templateCounter(
	{
		type			:	'other'
	});

	/**************************************************************************/

	$('.template-header .template-icon-meta-search').templateSearchForm({searchForm:'body>.template-component-search-form'});

	/**************************************************************************/

	$('.template-component-testimonial-list').templateTestimonial();

	/**************************************************************************/

	$('.template-component-gallery').templateGallery();

	/**************************************************************************/

	$('.template-fancybox').templateFancybox();

	/**************************************************************************/

	$('.template-component-more-link').templateMoreLess();

	/**************************************************************************/

	$('.template-component-image').templateImage();

	/**************************************************************************/

	$('.template-component-go-to-top').templateGoToTop();

	/**************************************************************************/

	$('.template-layout-50x50').responsiveElement({className:'template-responsive-column-a'});
	$('.template-layout-33x33x33').responsiveElement({className:'template-responsive-column-a'});
	$('.template-layout-25x25x25x25:not(.template-component-counter-box-list>.template-layout-25x25x25x25)').responsiveElement({width:750,className:'template-responsive-column-a'});
	$('.template-layout-66x33').responsiveElement({className:'template-responsive-column-a'});
	$('.template-layout-33x66').responsiveElement({className:'template-responsive-column-a'});

	$('.template-component-counter-box-list>.template-layout-25x25x25x25').responsiveElement({width:940,className:'template-responsive-column-a'});

	/**************************************************************************/
});

/******************************************************************************/
/******************************************************************************/

/* ---------------------------------------------- /*
         * Contact form ajax
        /* ---------------------------------------------- */

        contact_form.find('input,textarea').jqBootstrapValidation({
            preventSubmit: true,
            submitError: function($form, event, errors) {
                // additional error messages or events
            },
            submitSuccess: function($form, event) {
                event.preventDefault();

                var submit            = $('submit', contact_form);
                var ajaxResponse      = $('#contact-response');
                var name              = $('[name="name"]', contact_form).val();
                var email             = $('[name="email"]', contact_form).val();
                var subject           = $('[name="subject"]', contact_form).val();
                var message           = $('[name="message"]', contact_form).val();

                $.ajax({
                    type: 'POST',
                    url: 'assets/php/contact.php',
                    dataType: 'json',
                    data: {
                        name: name,
                        email: email,
                        subject: subject,
                        message: message,
                    },
                    cache: false,
                    beforeSend: function(result) {
                        submit.empty();
                        submit.append('<i class="fa fa-cog fa-spin"></i> Wait...');
                    },
                    success: function(result) {
                        if(result.sendstatus == 1) {
                            ajaxResponse.html(result.message);
                            $form.fadeOut(500);
                        } else {
                            ajaxResponse.html(result.message);
                        }
                    }
                });
            }
        });
