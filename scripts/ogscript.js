

$(document).ready(function () {

	var serpFrame=$("#serpFrame").contents();
    //GET IFRAME STYLES
    var iframestyle=serpFrame.find("style").html();
    
    
    //BODY SECTION//

	//change body background
    $('#bodyBgColor').change(function(event)
    {   

        var bodyBgColor=$('#bodyBgColor').val();
         
        serpFrame.find("body").css({'background-color':'#'+bodyBgColor});
    });

    //Upload body bg image check
    $('#bodyBgImageChk').change(function(event){

        event.preventDefault();
        var checkbox = $('#bodyBgImageChk'),
            isChecked = checkbox.is(':checked');
            //status = $('#status');
        if(isChecked) {
            checkbox.prop('checked',true);
           $('#bodybgimgwrap').css("display","block");
        } else {
            checkbox.prop('checked', false); 
            serpFrame.find('body').css("background-image","none");
            $('#bodybgimgwrap').css("display","none");
        }
    });

    //Change body bg image
    function changeBG(input) 
    {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {                
                serpFrame.find("body").css({'background-image':'url(' +  e.target.result + ')'});                
            }

            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#bodyBgImage").change(function(){
        changeBG(this);
    });

    //change body background repeat
    $('#bodyBgRepeat').change(function(event)
    {
        var bodyBgRepeat=$('#bodyBgRepeat').val();
        serpFrame.find("body").css({'background-repeat':bodyBgRepeat});
    });

    //change body background position-x
    $('#bodyBgPositionx').keyup(function(event)
    {
        var bodyBgPositionx=$('#bodyBgPositionx').val();
        serpFrame.find("body").css({'background-position-x':bodyBgPositionx+'px'});
    });

    //change body background position-y
    $('#bodyBgPositiony').keyup(function(event)
    {
        var bodyBgPositiony=$('#bodyBgPositiony').val();
        serpFrame.find("body").css({'background-position-y':bodyBgPositiony+'px'});
    });

    //change body background size
    $('#bodyBgSize').keyup(function(event)
    {
        var bodyBgSize=$('#bodyBgSize').val();
        serpFrame.find("body").css({'background-size':bodyBgSize});
    });

    //change body background attachment
    $('#bodyBgattachment').keyup(function(event)
    {
        var bodyBgattachment=$('#bodyBgattachment').val();
        serpFrame.find("body").css({'background-attachment':bodyBgattachment});
    });

    //MAIN WRAPPER SECTION//

	//change main wrapper width
	$('#mainWrapperWidth').change(function(event)
    {
        
        var mainWrapperWidth=$('#mainWrapperWidth').val();
        
        serpFrame.find("#wrapper").css({'width':mainWrapperWidth+'px'});

        $('#displaymainWrapperWidth').html(mainWrapperWidth+'px');
        
    });

    //HEADER SECTION//

    //change header padding top
    $('#headerPaddingTop').change(function(event)
    {
        var headerPaddingTop=$('#headerPaddingTop').val();
        serpFrame.find(".header").css({'padding-top':headerPaddingTop+'px'});
    });

    //change header padding right
    $('#headerPaddingRight').change(function(event)
    {
        var headerPaddingRight=$('#headerPaddingRight').val();
        serpFrame.find(".header").css({'padding-right':headerPaddingRight+'px'});
    });

    //change header padding bottom
    $('#headerPaddingBottom').change(function(event)
    {
        var headerPaddingBottom=$('#headerPaddingBottom').val();
        serpFrame.find(".header").css({'padding-bottom':headerPaddingBottom+'px'});
    });

    //change header padding left
    $('#headerPaddingLeft').change(function(event)
    {
        var headerPaddingLeft=$('#headerPaddingLeft').val();
        serpFrame.find(".header").css({'padding-left':headerPaddingLeft+'px'});
    });

    //change header background
    $('#headerBgColor').change(function(event)
    {   

        var headerBgColor=$('#headerBgColor').val();
         
        serpFrame.find(".header").css({'background-color':'#'+headerBgColor});
    });

    //change header text color
    $('#headerColor').change(function(event)
    {   

        var headerColor=$('#headerColor').val();
         
        serpFrame.find(".header h1").css({'color':'#'+headerColor});
    });

    //header border top checkbox
    $('#headerBorderTop').change(function(event){                
        event.preventDefault();
        var checkbox = $('#headerBorderTop'),
            isChecked = checkbox.is(':checked');
            //status = $('#status');
        if(isChecked) {
            checkbox.prop('checked',true);
           $('#borderProps1').css("display","block");
        } else {
            checkbox.prop('checked', false);             
            $('#borderProps1').css("display","none");
            serpFrame.find(".header").css({'border-top':'none'});
        }
    });

    //change header border top size
    $('#headerBorderTopSize').change(function(event)
    {
        var headerBorderTopSize=$('#headerBorderTopSize').val();        
        serpFrame.find(".header").css({'border-top-width':headerBorderTopSize+'px'});
        
    });

    //change header border top color
    $('#headerBorderTopColor').change(function(event)
    {
        var headerBorderTopColor=$('#headerBorderTopColor').val();
        serpFrame.find(".header").css({'border-top-color':'#'+headerBorderTopColor});
    });

    //change header border top Type
    $('#headerBorderTopType').change(function(event)
    {
        var headerBorderTopType=$('#headerBorderTopType').val();
        serpFrame.find(".header").css({'border-top-style':headerBorderTopType});
    });

    //header border right checkbox
    $('#headerBorderRight').change(function(event){                
        event.preventDefault();
        var checkbox = $('#headerBorderRight'),
            isChecked = checkbox.is(':checked');
            //status = $('#status');
        if(isChecked) {
            checkbox.prop('checked',true);
           $('#borderProps2').css("display","block");
        } else {
            checkbox.prop('checked', false);             
            $('#borderProps2').css("display","none");
            serpFrame.find(".header").css({'border-right':'none'});
        }
    });

    //change header border right size
    $('#headerBorderRightSize').change(function(event)
    {
        var headerBorderRightSize=$('#headerBorderRightSize').val();        
        serpFrame.find(".header").css({'border-right-width':headerBorderRightSize+'px'});
        
    });

    //change header border right color
    $('#headerBorderRightColor').change(function(event)
    {
        var headerBorderRightColor=$('#headerBorderRightColor').val();
        serpFrame.find(".header").css({'border-right-color':'#'+headerBorderRightColor});
    });

    //change header border right Type
    $('#headerBorderRightType').change(function(event)
    {
        var headerBorderRightType=$('#headerBorderRightType').val();
        serpFrame.find(".header").css({'border-right-style':headerBorderRightType});
    });

    
    //SPONSORED LINKS SECTION//

    //change sponsored links padding top
    $('#sponsPaddingTop').change(function(event)
    {
        var sponsPaddingTop=$('#sponsPaddingTop').val();
        serpFrame.find(".inner-spons-links").css({'padding-top':sponsPaddingTop+'px'});
    });

    //change sponsored links padding right
    $('#sponsPaddingRight').change(function(event)
    {
        var sponsPaddingRight=$('#sponsPaddingRight').val();
        serpFrame.find(".inner-spons-links").css({'padding-right':sponsPaddingRight+'px'});
    });

    //change sponsored links padding bottom
    $('#sponsPaddingBottom').change(function(event)
    {
        var sponsPaddingBottom=$('#sponsPaddingBottom').val();
        serpFrame.find(".inner-spons-links").css({'padding-bottom':sponsPaddingBottom+'px'});
    });

    //change sponsored links padding left
    $('#sponsPaddingLeft').change(function(event)
    {
        var sponsPaddingLeft=$('#sponsPaddingLeft').val();
        serpFrame.find(".inner-spons-links").css({'padding-left':sponsPaddingLeft+'px'});
    });

    //change sponsored links text
    $('#sponsText').change(function(event)
    {
        var sponsText=$('#sponsText').val();
        serpFrame.find(".inner-spons-links").html(sponsText);
    });

    //change sponsored links alignment
    $('#sponsAlign').change(function(event)
    {
        var sponsAlign=$('#sponsAlign').val();
        serpFrame.find(".inner-spons-links").css({'text-align':sponsAlign});        
    });

    //change sponsored links Font Size
    $('#sponsFontSize').change(function(event)
    {
        var sponsFontSize=$('#sponsFontSize').val();
        serpFrame.find(".inner-spons-links").css({'font-size':sponsFontSize+'px'});        
    });

    //change sponsored links Font Color
    $('#sponsFontColor').change(function(event)
    {
        var sponsFontColor=$('#sponsFontColor').val();
        serpFrame.find(".inner-spons-links").css({'color':'#'+sponsFontColor});        
    });

    //change sponsored links Font Size
    $('#sponsTextShadow').keyup(function(event)
    {
        var sponsTextShadow=$('#sponsTextShadow').val();
        serpFrame.find(".inner-spons-links").css({'text-shadow':sponsTextShadow});
    });

    //change sponsored links bold
    $('#sponsBold').change(function(event){        		
		event.preventDefault();
	    var checkbox = $('#sponsBold'),
	        isChecked = checkbox.is(':checked');
	        //status = $('#status');
	    if(isChecked) {
	        checkbox.prop('checked',true);
	        serpFrame.find('.inner-spons-links').css("font-weight","bold");
	    } else {
	        checkbox.prop('checked', false); 
	        serpFrame.find('.inner-spons-links').css("font-weight","normal");
	    }
	});

	//change sponsored links uppercase
    $('#sponsUpperCase').change(function(event){        		
		 var sponsUpperCase=$('#sponsUpperCase').val();
        serpFrame.find('.inner-spons-links').css("text-transform",sponsUpperCase);
	    
	});

    //AD WRAPPER SECTION//

    //change ad background
    $('#liBackground').change(function(event)
    {
        var liBackground=$('#liBackground').val();
        serpFrame.find("a.list").css({'background-color':'#'+liBackground});
    });

    

    //Ad border checkbox
    $('#liBorder').change(function(event){                
        event.preventDefault();
        var checkbox = $('#liBorder'),
            isChecked = checkbox.is(':checked');
            //status = $('#status');
        if(isChecked) {
            checkbox.prop('checked',true);
           $('#borderProps').css("display","block");
        } else {
            checkbox.prop('checked', false);             
            $('#borderProps').css("display","none");
            serpFrame.find("a.list").css({'border':'none'});
        }
    });

    //change ad border size
	$('#liBorderSize').change(function(event)
    {
        var liBorderSize=$('#liBorderSize').val();        
        serpFrame.find("a.list").css({'border-width':liBorderSize+'px'});
        
    });

    //change ad border color
    $('#liBorderColor').change(function(event)
    {
        var liBorderColor=$('#liBorderColor').val();
        serpFrame.find("a.list").css({'border-color':'#'+liBorderColor});
    });

    //change ad border Type
    $('#liBorderType').change(function(event)
    {
        var liBorderType=$('#liBorderType').val();
        serpFrame.find("a.list").css({'border-style':liBorderType});
    });

    //change ad border radius
    $('#liBorderRadius').change(function(event)
    {
        var liBorderRadius=$('#liBorderRadius').val();
        serpFrame.find("a.list").css({'border-radius':liBorderRadius+'px'});
    });

    //change ad padding top
    $('#liPaddingTop').change(function(event)
    {
        var liPaddingTop=$('#liPaddingTop').val();
        serpFrame.find("a.list").css({'padding-top':liPaddingTop+'px'});
    });

    //change ad padding right
    $('#liPaddingRight').change(function(event)
    {
        var liPaddingRight=$('#liPaddingRight').val();
        serpFrame.find("a.list").css({'padding-right':liPaddingRight+'px'});
    });

    //change ad padding bottom
    $('#liPaddingBottom').change(function(event)
    {
        var liPaddingBottom=$('#liPaddingBottom').val();
        serpFrame.find("a.list").css({'padding-bottom':liPaddingBottom+'px'});
    });

    //change ad padding left
    $('#liPaddingLeft').change(function(event)
    {
        var liPaddingLeft=$('#liPaddingLeft').val();
        serpFrame.find("a.list").css({'padding-left':liPaddingLeft+'px'});
    });

    //AD TITLE SECTION//

    //change ad title Font Size
    $('#titleFontSize').change(function(event)
    {
        var titleFontSize=$('#titleFontSize').val();       
        serpFrame.find("a.list .title").css({'font-size':titleFontSize+'px'});
           
    });

    //change ad title Font Color
    $('#titleFontColor').change(function(event)
    {
        var titleFontColor=$('#titleFontColor').val();
        serpFrame.find("a.list .title").css({'color':'#'+titleFontColor});        
    });

    //change ad title uppercase
    $('#titleUpperCase').change(function(event){                
        var titleUpperCase=$('#titleUpperCase').val();
        serpFrame.find('a.list .title').css("text-transform",titleUpperCase);
    });

    //change ad title margin bottom
    $('#titleMarginBottom').change(function(event){ 
        var titleMarginBottom=$('#titleMarginBottom').val();
        serpFrame.find('a.list .title').css("margin-bottom",titleMarginBottom+'px');
    });


    //AD URL SECTION//

    //change ad url Font Size
    $('#urlFontSize').change(function(event)
    {
        var urlFontSize=$('#urlFontSize').val();       
        serpFrame.find("a.list .url").css({'font-size':urlFontSize+'px'});
           
    });

    //change ad url Font Color
    $('#urlFontColor').change(function(event)
    {
        var urlFontColor=$('#urlFontColor').val();
        serpFrame.find("a.list .url").css({'color':'#'+urlFontColor});        
    });

    //change ad url uppercase
    $('#urlUpperCase').change(function(event){                
        var urlUpperCase=$('#urlUpperCase').val();
        serpFrame.find('a.list .url').css("text-transform",urlUpperCase);
        
    });

    //url display block
    $('#urlBlock').change(function(event){                
        event.preventDefault();
        var checkbox = $('#urlBlock'),
            isChecked = checkbox.is(':checked');
            //status = $('#status');
        if(isChecked) {
            checkbox.prop('checked',true);
            serpFrame.find("a.list .url").css({'display':'block'});
        } else {
            checkbox.prop('checked', false);             
            serpFrame.find("a.list .url").css({'display':'inline'});
        }
    });


    //AD DESCRIPTION SECTION//

    //change ad descripition Font Size
    $('#descFontSize').change(function(event)
    {
        var descFontSize=$('#descFontSize').val();       
        serpFrame.find("a.list .desc").css({'font-size':descFontSize+'px'});
           
    });

    //change ad descripition Font Color
    $('#descFontColor').change(function(event)
    {
        var descFontColor=$('#descFontColor').val();
        serpFrame.find("a.list .desc").css({'color':'#'+descFontColor});        
    });

    //change ad descripition uppercase
    $('#descUpperCase').change(function(event){                
        var descUpperCase=$('#descUpperCase').val();
        serpFrame.find('a.list .desc').css("text-transform",descUpperCase);
        
    });

    //desc display block
    $('#descBlock').change(function(event){                
        event.preventDefault();
        var checkbox = $('#descBlock'),
            isChecked = checkbox.is(':checked');
            //status = $('#status');
        if(isChecked) {
            checkbox.prop('checked',true);
            serpFrame.find("a.list .desc").css({'display':'block'});
        } else {
            checkbox.prop('checked', false);             
            serpFrame.find("a.list .desc").css({'display':'inline'});
        }
    });

    //Hide ad separator
    $('#hideSeparator').change(function(event){                
        event.preventDefault();
        var checkbox = $('#hideSeparator'),
            isChecked = checkbox.is(':checked');
            //status = $('#status');
        if(isChecked) {
            checkbox.prop('checked',true);
            serpFrame.find("a.list .sepr").css({'display':'none'});
        } else {
            checkbox.prop('checked', false);             
            serpFrame.find("a.list .sepr").css({'display':'inline'});
        }
    });


    //AD NUMBER SECTION//

    //hide numbers checkbox
    $('#hideNumber').change(function(event){                
        event.preventDefault();
        var checkbox = $('#hideNumber'),
            isChecked = checkbox.is(':checked');
            //status = $('#status');
        if(isChecked) {
            checkbox.prop('checked',true);
            serpFrame.find("a.list .num").css({'display':'none'});
            serpFrame.find(".adTextWrap").css({'padding-left':'0'});
        } else {
            checkbox.prop('checked', false);             
            serpFrame.find("a.list .num").css({'display':'block'});
            serpFrame.find(".adTextWrap").css({'padding-left':'25px'});
        }
    });

    //change number Font Size
    $('#numFontSize').change(function(event)
    {
        var descFontSize=$('#numFontSize').val();       
        serpFrame.find("a.list .num").css({'font-size':descFontSize+'px'});
           
    });

    //change number Font Color
    $('#numFontColor').change(function(event)
    {
        var descFontColor=$('#numFontColor').val();
        serpFrame.find("a.list .num").css({'color':'#'+descFontColor});        
    });

    //change number background
    $('#numBgColor').change(function(event)
    {
         var numBgColor=$('#numBgColor').val();
         
         serpFrame.find("a.list .num").css({'background-color':'#'+numBgColor});
    });
   
    //change number border radius
    $('#numBorderRadius').change(function(event)
    {
        var numBorderRadius=$('#numBorderRadius').val();
        serpFrame.find("a.list .num").css({'border-radius':numBorderRadius+'px'});
    });




    //GET CODE BUTTON
    //zclip copy code
    function zclipHack(){
        $("#getCodeBtn").zclip({
            path:"zcb/ZeroClipboard.swf",
            copy:function(){return (serpFrame.find("head").html()+serpFrame.find("body").html());}
        });
    }

    $('#getCodeBtn').click(function(){
        zclipHack();
    }); 

    zclipHack();

});
