
$(window).load(function () {
    console.log('DOM is ready');

    var serpFrame=$("#serpFrame").contents();
    //GET IFRAME STYLES
    var iframestyle=serpFrame.find("style").html();
 
    
    // Pure js
    var jss = window.jss;

    var resetCSS="*{margin:0;padding:0}.clearfix:before,.clearfix:after {content: '\\0020';display: block;overflow: hidden;visibility: hidden;width: 0;height: 0}.clearfix:after {clear: both}.clearfix {zoom: 1}html,body{height: 100%}a{text-decoration: none; outline: none}a:hover{cursor: pointer}img{border: none}br{height:0;display: none}";
    
    var serptype=$('#serptype').val();

    if(serptype=='default/Simple_1'){
        //Stylesheet for simple_1
        // alert('serp1');
        var sheet = jss.createStyleSheet({
          'body': {'background-color':'#000'},
          '.header': {'padding-top': '14px','padding-right': '10px','padding-bottom': '14px', 'padding-left': '10px', 'background-color': '#0071d4'},          
          '.heading': {'color': '#fffefe','font-size': '30px', 'line-height': '33px', 'text-align': 'center'},
          '.wrapper': {'width': '800px', 'margin': '0px auto', 'padding-bottom': '30px'},
          '.inner-spons-links': {'padding-top': '60px', 'padding-right': '0px', 'padding-bottom': '8px', 'padding-left': '0px', 'font-size': '17px', 'line-height': '20px', 'font-weight': '400',
            'color': '#000000', 'text-shadow': 'none', 'text-align': 'left', 'text-transform': 'capitalize'},
          'ul': {'list-style': 'none'},
          '.results': {'display': 'block', 'overflow': 'hidden', 'margin': '0px auto'},
          '.results li': {'display': 'block', 'overflow': 'hidden', 'margin-bottom': '20px', 'position': 'relative'},
          '.list': {'word-wrap': 'break-word', 'display': 'block', 'overflow': 'hidden', 'padding-top': '20px', 'padding-right': '70px', 'padding-bottom': '20px', 'padding-left': '30px', 'border-width': '1px',
            'border-style': 'solid', 'border-color': '#d4d4d4', 'border-radius': '5px', 'background-color': '#ffffff', 'background-image':'url(<tag:image_path />/41256/arrow.png)', 'background-repeat':'no-repeat',
            'background-position':'96% center', 'transition':'all linear 0.1s'},
          '.results li:hover .list': {'background-color':'#087bd3', 'background-image':'url(<tag:image_path />/41256/arrowHover.png)', 'background-repeat':'no-repeat', 'background-position':'96% center',
            'border-width': '1px', 'border-style': 'solid', 'border-color': '#d4d4d4'},
          '.title': {'font-size': '30px', 'color': '#3c3c3c', 'line-height': '33px','margin-bottom': '8px', 'text-transform': 'capitalize', 'font-weight':'bold'},
          '.url': {'font-size': '15px', 'color': '#454545', 'line-height': '18px', 'display': 'inline', 'text-transform': 'none'},
          '.desc': {'font-size': '15px', 'color': '#454545', 'line-height': '18px', 'display': 'inline', 'margin-bottom':'3px'},
          '.sepr': {'font-size': '18px', 'color': '#454545', 'line-height': '18px', 'display': 'inline'},
          '.num': {'float': 'left', 'font-size': '26px', 'line-height': '26px', 'color': '#3c3c3c', 'margin-top': '18px', 'margin-bottom': '18px','font-weight': 'normal'},
          '.results li:hover .title': {'color': '#ffffff'},
          '.results li:hover .desc': {'color': '#ffffff'},
          '.results li:hover .url': {'color': '#ffffff'},
          '.results li:hover .num': {'color': '#ffffff'},
          '.results li:hover .sepr': {'color': '#ffffff'},
          '.adTextWrap': {'width': '88%', 'float': 'left', 'padding-top': '0', 'padding-right': '0', 'padding-bottom': '0', 'padding-left': '25px'},
          '#optOutLink': {'text-align': 'center', 'padding': '10px', 'color': '#ffffff', 'text-shadow': 'none'},
          '#optOutLink a': {'text-transform': 'capitalize', 'font-size': '14px', 'color': '#ffffff', 'text-shadow': 'none'},
          '#optOutLink a:hover': {'text-decoration': 'underline'},
          '@media not all and (min-width: 890px)': {
            '.wrapper': {'width': '95%'}
          },
          '@media not all and (min-width: 770px)': {
            'body': {'background-size': '100%', 'background-position': 'top center', 'background-attachment': 'fixed'},
            '.header': {'padding': '10px'},
            '.heading': {'font-size': '20px', 'line-height': '23px'},
            '.inner-spons-links': {'padding': '80px 0 5px', 'font-size': '15px'},
            '.results li': {'margin-bottom': '10px'},
            '.title': {'font-size': '22px', 'line-height': '25px', 'margin-bottom':'5px'},
            '.sepr': {'display': 'none'},
            '.url': {'display': 'block', 'font-size': '14px', 'line-height': '17px'},
            '.desc': {'display': 'block', 'font-size': '14px', 'line-height': '17px'},
            '.num': {'font-size': '22px', 'line-height': '22px', 'margin': '3px 0'},
            '.list': {'background-size': '12px auto !important', 'padding': '15px 40px 15px 15px'}
          },
          '@media not all and (min-width: 666px)': {
            'body': {'background-size': '100%', 'background-attachment': 'scroll'}
          },
          '@media not all and (min-width: 480px)': {
            '.adTextWrap': {'width': '80%'}
          },
          '@media not all and (min-width: 320px)': {
            '.num': {'display': 'none'},
            '.adTextWrap': {'width': 'auto', 'float': 'none', 'padding-left': '0px'}
          },
        }, {named: false}).attach();
    }
    if(serptype=='default/Simple_2')
    {
        //stylesheet for simple_2
        // alert('serp2');
        var sheet = jss.createStyleSheet({
            'body':{'-webkit-text-size-adjust': '100%','font-family': 'Arial, Helvetica, sans-serif', 'background-color': '#e9f5f5', 'background-image': 'url(<tag:image_path />/41256/bg.jpg)',
            'background-position': 'right center', 'background-size': 'cover', 'background-attachment':'fixed', 'background-repeat':'no-repeat'},
            '.header': {'padding-top': '24px','padding-right': '10px','padding-bottom': '24px', 'padding-left': '10px', 'background-color': '#2dd5df'},
            '.heading': {'color': '#fffefe','font-size': '30px', 'line-height': '33px', 'text-align': 'center'},
            '.wrapper': {'width': '800px', 'margin': '0px auto', 'padding-bottom': '30px'},
            '.inner-spons-links': {'padding-top': '60px', 'padding-right': '0px', 'padding-bottom': '8px', 'padding-left': '0px', 'font-size': '16px', 'line-height': '19px', 'font-weight': '400',
            'color': '#4c4c4c', 'text-shadow': 'none', 'text-align': 'left', 'text-transform': 'capitalize'},
            'ul': {'list-style': 'none'},
            '.results': {'display': 'block', 'overflow': 'hidden', 'margin': '0px auto'},
            '.results li': {'display': 'block', 'overflow': 'hidden', 'margin-bottom': '20px', 'position': 'relative'},            
            '.list': {'word-wrap': 'break-word', 'display': 'block', 'overflow': 'hidden', 'padding-top': '20px', 'padding-right': '60px', 'padding-bottom': '20px', 'padding-left': '0px', 'border-width': '1px',
            'border-style': 'solid', 'border-color': '#2dd5df', 'border-radius': '5px', 'background-color': '#ffffff', 'background-image':'url(<tag:image_path />/41256/arrow.png)', 'background-repeat':'no-repeat',
            'background-position':'96% center', 'transition':'all linear 0.1s'},
            '.results li:hover .list': {'background-color':'#2dd5df', 'background-image':'url(<tag:image_path />/41256/arrowHover.png)', 'background-repeat':'no-repeat', 'background-position':'96% center',
            'border-width': '1px', 'border-style': 'solid', 'border-color': '#2dd5df'},
            '.title': {'font-size': '24px', 'color': '#27c9d3', 'line-height': '27px','margin-bottom': '5px', 'text-transform': 'capitalize', 'font-weight':'bold'},
            '.url': {'font-size': '16px', 'color': '#333339', 'line-height': '19px', 'display': 'inline', 'text-transform': 'none'},
            '.desc': {'font-size': '16px', 'color': '#333339', 'line-height': '19px', 'display': 'inline', 'margin-bottom':'1px'},
            '.sepr': {'font-size': '18px', 'color': '#333339', 'line-height': '18px', 'display': 'inline'},
            '.num': {'background-color':'#2dd5df','float': 'left', 'font-size': '25px', 'line-height': '44px', 'height':'44px','width':'48px','color': '#ffffff', 'margin-top': '13px', 'margin-bottom': '13px','font-weight': 'normal'},
            '.results li:hover .title': {'color': '#ffffff'},
            '.results li:hover .desc': {'color': '#ffffff'},
            '.results li:hover .url': {'color': '#ffffff'},
            '.results li:hover .num': {'color': '#ffffff'},
            '.results li:hover .sepr': {'color': '#2dd5df', 'background-color': '#ffffff'},
            '.adTextWrap': {'width': '87%', 'float': 'left', 'padding-top': '0', 'padding-right': '0', 'padding-bottom': '0', 'padding-left': '20px'},
            '#optOutLink': {'text-align': 'center', 'padding': '10px', 'color': '#000000', 'text-shadow': 'none'},
            '#optOutLink a': {'text-transform': 'capitalize', 'font-size': '14px', 'color': '#000000', 'text-shadow': 'none'},
            '#optOutLink a:hover': {'text-decoration': 'underline'},
            '@media not all and (min-width: 900px)': {
                '.wrapper': {'width': '90%'}
            },
            '@media not all and (min-width: 770px)': {
                'body': {'background-size': '100%', 'background-position': 'top center', 'background-attachment': 'fixed'},
                '.header': {'padding': '10px'},
                '.heading': {'font-size': '20px', 'line-height': '23px'},
                '.inner-spons-links': {'padding': '80px 0 5px', 'font-size': '14px', 'color':'#000000'},
                '.adTextWrap':{'width':'83%', 'padding-left':'12px'},
                '.results li': {'margin-bottom': '10px'},
                '.title': {'font-size': '18px', 'line-height': '21px', 'margin-bottom':'5px'},
                '.sepr': {'display': 'none'},
                '.url': {'display': 'block', 'font-size': '14px', 'line-height': '17px'},
                '.desc': {'display': 'block', 'font-size': '14px', 'line-height': '17px'},
                '.num': {'font-size': '18px', 'line-height': '21px', 'margin': '1px 0','width':'35px','height':'30px'},
                '.list': {'background-size': '12px auto !important', 'padding': '12px 25px 12px 0px'}
            },
            '@media not all and (min-width: 666px)': {
                'body': {'background-size': '100%', 'background-attachment': 'scroll'}
            },
            '@media not all and (min-width: 480px)': {
                '.adTextWrap': {'width': '74%'}
            },
            '@media not all and (min-width: 320px)': {
                '.num': {'display': 'none'},
                '.adTextWrap': {'width': 'auto', 'float': 'none', 'padding-left': '0px'},
                '.list':{'padding-left':'0'}
            },
        }, {named: false}).attach();
    }
    if(serptype=='default/Simple_3')
    {
        //stylesheet for simple_3
        // alert('serp3');
        var sheet = jss.createStyleSheet({
            'body':{'-webkit-text-size-adjust': '100%','font-family': 'Arial, Helvetica, sans-serif', 'background-color': '#e9f5f5', 'background-image': 'url(<tag:image_path />/41256/bg.jpg)',
            'background-position': 'right center', 'background-size': 'cover', 'background-attachment':'fixed', 'background-repeat':'no-repeat'},
            '.header': {'padding-top': '24px','padding-right': '10px','padding-bottom': '24px', 'padding-left': '10px', 'background-color': '#2dd5df'},
            '.heading': {'color': '#fffefe','font-size': '30px', 'line-height': '33px', 'text-align': 'center'},
            '.wrapper': {'width': '800px', 'margin': '0px auto', 'padding-bottom': '30px'},
            '.inner-spons-links': {'padding-top': '60px', 'padding-right': '0px', 'padding-bottom': '8px', 'padding-left': '0px', 'font-size': '16px', 'line-height': '19px', 'font-weight': '400',
            'color': '#4c4c4c', 'text-shadow': 'none', 'text-align': 'left', 'text-transform': 'capitalize'},
            'ul': {'list-style': 'none'},
            '.results': {'display': 'block', 'overflow': 'hidden', 'margin': '0px auto'},
            '.results li': {'display': 'block', 'overflow': 'hidden', 'margin-bottom': '20px', 'position': 'relative'},            
            '.list': {'word-wrap': 'break-word', 'display': 'block', 'overflow': 'hidden', 'padding-top': '20px', 'padding-right': '60px', 'padding-bottom': '20px', 'padding-left': '15px', 'border-width': '1px',
            'border-style': 'solid', 'border-color': '#2dd5df', 'border-radius': '5px', 'background-color': '#ffffff', 'background-image':'url(<tag:image_path />/41256/arrow.png)', 'background-repeat':'no-repeat',
            'background-position':'96% center', 'transition':'all linear 0.1s'},
            '.results li:hover .list': {'background-color':'#2dd5df', 'background-image':'url(<tag:image_path />/41256/arrowHover.png)', 'background-repeat':'no-repeat', 'background-position':'96% center',
            'border-width': '1px', 'border-style': 'solid', 'border-color': '#2dd5df'},
            '.title': {'font-size': '24px', 'color': '#27c9d3', 'line-height': '27px','margin-bottom': '5px', 'text-transform': 'capitalize', 'font-weight':'bold'},
            '.url': {'font-size': '16px', 'color': '#333339', 'line-height': '19px', 'display': 'inline', 'text-transform': 'none'},
            '.desc': {'font-size': '16px', 'color': '#333339', 'line-height': '19px', 'display': 'inline', 'margin-bottom':'1px'},
            '.sepr': {'font-size': '18px', 'color': '#333339', 'line-height': '18px', 'display': 'inline'},
            '.num': {'background-color':'#2dd5df','float': 'left', 'font-size': '25px', 'line-height': '50px', 'height':'50px','width':'50px', 'border-radius': '100%','color': '#ffffff', 'margin-top': '13px', 'margin-bottom': '13px','font-weight': 'normal'},
            '.results li:hover .title': {'color': '#ffffff'},
            '.results li:hover .desc': {'color': '#ffffff'},
            '.results li:hover .url': {'color': '#ffffff'},
            '.results li:hover .num': {'color': '#ffffff'},
            '.results li:hover .sepr': {'color': '#2dd5df', 'background-color': '#ffffff'},
            '.adTextWrap': {'width': '87%', 'float': 'left', 'padding-top': '0', 'padding-right': '0', 'padding-bottom': '0', 'padding-left': '20px'},
            '#optOutLink': {'text-align': 'center', 'padding': '10px', 'color': '#000000', 'text-shadow': 'none'},
            '#optOutLink a': {'text-transform': 'capitalize', 'font-size': '14px', 'color': '#000000', 'text-shadow': 'none'},
            '#optOutLink a:hover': {'text-decoration': 'underline'},
            '@media not all and (min-width: 900px)': {
                '.wrapper': {'width': '90%'}
            },
            '@media not all and (min-width: 770px)': {
                'body': {'background-size': '100%', 'background-position': 'top center', 'background-attachment': 'fixed'},
                '.header': {'padding': '10px'},
                '.heading': {'font-size': '20px', 'line-height': '23px'},
                '.inner-spons-links': {'padding': '80px 0 5px', 'font-size': '14px', 'color':'#000000'},
                '.adTextWrap':{'width':'83%', 'padding-left':'12px'},
                '.results li': {'margin-bottom': '10px'},
                '.title': {'font-size': '18px', 'line-height': '21px', 'margin-bottom':'5px'},
                '.sepr': {'display': 'none'},
                '.url': {'display': 'block', 'font-size': '14px', 'line-height': '17px'},
                '.desc': {'display': 'block', 'font-size': '14px', 'line-height': '17px'},
                '.num': {'font-size': '18px', 'line-height': '30px', 'margin': '1px 0','width':'30px','height':'30px'},
                '.list': {'background-size': '12px auto !important', 'padding': '12px 25px 12px 0px'}
            },
            '@media not all and (min-width: 666px)': {
                'body': {'background-size': '100%', 'background-attachment': 'scroll'}
            },
            '@media not all and (min-width: 480px)': {
                '.adTextWrap': {'width': '74%'}
            },
            '@media not all and (min-width: 320px)': {
                '.num': {'display': 'none'},
                '.adTextWrap': {'width': 'auto', 'float': 'none', 'padding-left': '0px'},
                '.list':{'padding-left':'0'}
            },
        }, {named: false}).attach();
    }

    if(serptype=='default/Simple_4')
    {
        //stylesheet for simple_4
        // alert('serp4');
        var sheet = jss.createStyleSheet({
            'body':{'-webkit-text-size-adjust': '100%','font-family': 'Arial, Helvetica, sans-serif', 'background-color': '#e9f5f5', 'background-image': 'url(<tag:image_path />/41256/bg.jpg)',
            'background-position': 'right center', 'background-size': 'cover', 'background-attachment':'fixed', 'background-repeat':'no-repeat'},
            '.header': {'padding-top': '24px','padding-right': '10px','padding-bottom': '24px', 'padding-left': '10px', 'background-color': '#2dd5df'},
            '.heading': {'color': '#fffefe','font-size': '30px', 'line-height': '33px', 'text-align': 'center'},
            '.wrapper': {'width': '800px', 'margin': '0px auto', 'padding-bottom': '30px'},
            '.inner-spons-links': {'padding-top': '60px', 'padding-right': '0px', 'padding-bottom': '8px', 'padding-left': '0px', 'font-size': '16px', 'line-height': '19px', 'font-weight': '400',
            'color': '#4c4c4c', 'text-shadow': 'none', 'text-align': 'left', 'text-transform': 'capitalize'},
            'ul': {'list-style': 'none'},
            '.results': {'display': 'block', 'overflow': 'hidden', 'margin': '0px auto'},
            '.results li': {'display': 'block', 'overflow': 'hidden', 'margin-bottom': '20px', 'position': 'relative'},            
            '.wrapAll':{'background-color': '#ffffff', 'background-image':'url(<tag:image_path />/41256/arrow.png)', 'background-repeat':'no-repeat',
            'background-position':'97% center','padding-top': '20px', 'padding-right': '60px', 'padding-bottom': '20px', 'padding-left': '0px','border-radius':'5px','border-top-left-radius':'0px','border-bottom-left-radius':'0px'},
            '.list': {'word-wrap': 'break-word', 'display': 'block', 'overflow': 'hidden', 'padding-top': '0px', 'padding-right': '0px', 'padding-bottom': '0px', 'padding-left': '60px', 'border-width': '1px',
            'border-style': 'solid', 'border-color': '#2dd5df', 'border-radius': '5px', 'transition':'all linear 0.1s'},
            '.results li:hover .list': {'background-color':'#ffffff', 'border-width': '1px', 'border-style': 'solid', 'border-color': '#2dd5df'},
            '.results li:hover .wrapAll': {'background-color':'#2dd5df','background-image':'url(<tag:image_path />/41256/arrowHover.png)', 'background-repeat':'no-repeat', 'background-position':'96% center'},
            '.title': {'font-size': '24px', 'color': '#27c9d3', 'line-height': '27px','margin-bottom': '5px', 'text-transform': 'capitalize', 'font-weight':'bold'},
            '.url': {'font-size': '16px', 'color': '#333339', 'line-height': '19px', 'display': 'inline', 'text-transform': 'none'},
            '.desc': {'font-size': '16px', 'color': '#333339', 'line-height': '19px', 'display': 'inline', 'margin-bottom':'1px'},
            '.sepr': {'font-size': '18px', 'color': '#333339', 'line-height': '18px', 'display': 'inline'},
            '.num': {'float': 'left', 'font-size': '25px', 'line-height': '25px', 'color': '#ffffff', 'margin-top': '23px', 'margin-bottom': '23px','font-weight': 'normal','margin-left':'-38px'},
            '.results li:hover .title': {'color': '#ffffff'},
            '.results li:hover .desc': {'color': '#ffffff'},
            '.results li:hover .url': {'color': '#ffffff'},
            '.results li:hover .num': {'color': '#ffffff'},
            '.results li:hover .sepr': {'color': '#2dd5df', 'background-color': '#ffffff'},
            '.adTextWrap': {'width': '87%', 'float': 'left', 'padding-top': '0', 'padding-right': '0', 'padding-bottom': '0', 'padding-left': '20px'},
            '#optOutLink': {'text-align': 'center', 'padding': '10px', 'color': '#000000', 'text-shadow': 'none'},
            '#optOutLink a': {'text-transform': 'capitalize', 'font-size': '14px', 'color': '#000000', 'text-shadow': 'none'},
            '#optOutLink a:hover': {'text-decoration': 'underline'},
            '@media not all and (min-width: 900px)': {
                '.wrapper': {'width': '90%'}
            },
            '@media not all and (min-width: 770px)': {
                'body': {'background-size': '100%', 'background-position': 'top center', 'background-attachment': 'fixed'},
                '.header': {'padding': '10px'},
                '.heading': {'font-size': '20px', 'line-height': '23px'},
                '.inner-spons-links': {'padding': '80px 0 5px', 'font-size': '14px', 'color':'#000000'},
                '.adTextWrap':{'width':'83%', 'padding-left':'12px'},
                '.results li': {'margin-bottom': '10px'},
                '.title': {'font-size': '18px', 'line-height': '21px', 'margin-bottom':'5px'},
                '.sepr': {'display': 'none'},
                '.url': {'display': 'block', 'font-size': '14px', 'line-height': '17px'},
                '.desc': {'display': 'block', 'font-size': '14px', 'line-height': '17px'},
                '.num': {'font-size': '18px', 'line-height': '18px', 'margin': '2px 0 2px -26px',},
                '.list': {'padding-left': '40px'},
                '.wrapAll': {'background-size': '12px auto !important', 'padding': '12px 40px 12px 0px'}
            },
            '@media not all and (min-width: 666px)': {
                'body': {'background-size': '100%', 'background-attachment': 'scroll'}
            },
            '@media not all and (min-width: 480px)': {
                '.adTextWrap': {'width': '74%'}
            },
            '@media not all and (min-width: 320px)': {
                '.num': {'display': 'none'},
                '.adTextWrap': {'width': 'auto', 'float': 'none', 'padding-left': '0px'},
                '.list':{'padding-left':'0'},
                '.wrapAll':{'border-radius':'5px'}
            },
        }, {named: false}).attach();
    }

    if(serptype=='default/Simple_5'){
        //Stylesheet for simple_5
        // alert('serp5');
        var sheet = jss.createStyleSheet({
          'body': {'background-color':'#000'},
          '.header': {'padding-top': '14px','padding-right': '10px','padding-bottom': '14px', 'padding-left': '10px', 'background-color': '#0071d4'},          
          '.heading': {'color': '#fffefe','font-size': '30px', 'line-height': '33px', 'text-align': 'center'},
          '.wrapper': {'width': '800px', 'margin': '0px auto', 'padding-bottom': '30px'},
          '.inner-spons-links': {'padding-top': '60px', 'padding-right': '0px', 'padding-bottom': '8px', 'padding-left': '0px', 'font-size': '17px', 'line-height': '20px', 'font-weight': '400',
            'color': '#000000', 'text-shadow': 'none', 'text-align': 'left', 'text-transform': 'capitalize'},
          'ul': {'list-style': 'none'},
          '.results': {'display': 'block', 'overflow': 'hidden', 'margin': '0px auto'},
          '.results li': {'display': 'block', 'overflow': 'hidden', 'margin-bottom': '20px', 'position': 'relative'},
          '.list': {'word-wrap': 'break-word', 'display': 'block', 'overflow': 'hidden', 'padding-top': '20px', 'padding-right': '70px', 'padding-bottom': '20px', 'padding-left': '20px', 'border-width': '1px',
            'border-style': 'solid', 'border-color': '#d4d4d4', 'border-radius': '5px', 'background-color': '#ffffff', 'background-image':'url(<tag:image_path />/41256/arrow.png)', 'background-repeat':'no-repeat',
            'background-position':'96% center', 'transition':'all linear 0.1s'},
          '.results li:hover .list': {'background-color':'#087bd3', 'background-image':'url(<tag:image_path />/41256/arrowHover.png)', 'background-repeat':'no-repeat', 'background-position':'96% center',
            'border-width': '1px', 'border-style': 'solid', 'border-color': '#d4d4d4'},
          '.title': {'font-size': '30px', 'color': '#3c3c3c', 'line-height': '33px','margin-bottom': '8px', 'text-transform': 'capitalize', 'font-weight':'bold'},
          '.url': {'font-size': '15px', 'color': '#454545', 'line-height': '18px', 'display': 'inline', 'text-transform': 'none'},
          '.desc': {'font-size': '15px', 'color': '#454545', 'line-height': '18px', 'display': 'inline', 'margin-bottom':'3px'},
          '.sepr': {'font-size': '18px', 'color': '#454545', 'line-height': '18px', 'display': 'inline'},
          '.num': {'float': 'left', 'font-size': '26px', 'line-height': '26px', 'color': '#3c3c3c', 'margin-top': '18px', 'margin-bottom': '18px','font-weight': 'normal','padding-right':'20px'},
          '.results li:hover .title': {'color': '#ffffff'},
          '.results li:hover .desc': {'color': '#ffffff'},
          '.results li:hover .url': {'color': '#ffffff'},
          '.results li:hover .num': {'color': '#ffffff'},
          '.results li:hover .sepr': {'color': '#ffffff'},
          '.adTextWrap': {'width': '88%', 'float': 'left', 'padding-top': '0', 'padding-right': '0', 'padding-bottom': '0', 'padding-left': '20px','border-left-width':'1px','border-left-color':'#d4d4d4','border-left-style':'solid'},
          '.results li:hover .adTextWrap':{'border-left-width':'1px','border-left-color':'#ffffff','border-left-style':'solid'},
          '#optOutLink': {'text-align': 'center', 'padding': '10px', 'color': '#ffffff', 'text-shadow': 'none'},
          '#optOutLink a': {'text-transform': 'capitalize', 'font-size': '14px', 'color': '#ffffff', 'text-shadow': 'none'},
          '#optOutLink a:hover': {'text-decoration': 'underline'},
          '@media not all and (min-width: 890px)': {
            '.wrapper': {'width': '95%'}
          },
          '@media not all and (min-width: 770px)': {
            'body': {'background-size': '100%', 'background-position': 'top center', 'background-attachment': 'fixed'},
            '.header': {'padding': '10px'},
            '.heading': {'font-size': '20px', 'line-height': '23px'},
            '.inner-spons-links': {'padding': '80px 0 5px', 'font-size': '15px'},
            '.results li': {'margin-bottom': '10px'},
            '.title': {'font-size': '22px', 'line-height': '25px', 'margin-bottom':'5px'},
            '.sepr': {'display': 'none'},
            '.url': {'display': 'block', 'font-size': '14px', 'line-height': '17px'},
            '.desc': {'display': 'block', 'font-size': '14px', 'line-height': '17px'},
            '.num': {'font-size': '22px', 'line-height': '22px', 'margin': '3px 0','padding-right':'15px'},
            '.list': {'background-size': '12px auto !important', 'padding': '15px 40px 15px 15px'}
          },
          '@media not all and (min-width: 666px)': {
            'body': {'background-size': '100%', 'background-attachment': 'scroll'}
          },
          '@media not all and (min-width: 480px)': {
            '.adTextWrap': {'width': '80%'}
          },
          '@media not all and (min-width: 320px)': {
            '.num': {'display': 'none'},
            '.adTextWrap': {'width': 'auto', 'float': 'none', 'padding-left': '0px'}
          },
        }, {named: false}).attach();
    }


    jss.sheets.registry
    // let oldstyles = jss.sheets.toString()

    //change background color function
    function changeBgColor(element,color){
        serpFrame.find(element).css({'background-color':'#'+color});

        //add to stylesheet
        var newBackgroundColor = sheet.getRule(element).prop('background-color','#'+color)
    }

    //change font size function
    function changeFontSize(element,fontsize){
        serpFrame.find(element).css({'font-size':fontsize+'px'});
        lineHeight=parseInt(fontsize)+3;
        serpFrame.find(element).css({'line-height':lineHeight+'px'});

        //add to stylesheet
        var newFontSize = sheet.getRule(element).prop('font-size',fontsize+'px')
        var newlineHeight = sheet.getRule(element).prop('line-height',lineHeight+'px')
    }

    //change font color function
    function changeFontColor(element,fontcolor){
        serpFrame.find(element).css({'color':'#'+fontcolor});

        //add to stylesheet
        var newFontColor = sheet.getRule(element).prop('color','#'+fontcolor)
    }




    //BODY SECTION//

    //change body background
    $('#bodyBgColor').change(function(event)
    {   
        var bodyBgColor=$('#bodyBgColor').val();
        changeBgColor("body",bodyBgColor);
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
    function changeBG(input,cssname) 
    {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                //add to stylesheet
                if(cssname=="body"){
                    serpFrame.find(cssname).css({'background-image':'url(' +  e.target.result + ')'});  
                }
                else if(cssname==".list"){
                    serpFrame.find(cssname).css({'background-image':'url(' +  e.target.result + ')'});  
                }
                
            }

            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#bodyBgImage").change(function(){
        changeBG(this,"body");
    });

    //change body background repeat
    $('#bodyBgRepeat').change(function(event)
    {
        var bodyBgRepeat=$('#bodyBgRepeat').val();
        serpFrame.find("body").css({'background-repeat':bodyBgRepeat});

        //add to stylesheet
        var sheetBodyBgRepeat = sheet.getRule('body').prop('background-repeat',bodyBgRepeat);
    });

    /*change body background position-x
    $('#bodyBgPositionx').keyup(function(event)
    {
        var bodyBgPositionx=$('#bodyBgPositionx').val();
        serpFrame.find("body").css({'background-position-x':bodyBgPositionx+'px'});

        //add to stylesheet
        var sheetBodyBgPositionx = sheet.getRule('body').prop('background-position-x',bodyBgPositionx+'px');
    });*/

    /*change body background position-y
    $('#bodyBgPositiony').keyup(function(event)
    {
        var bodyBgPositiony=$('#bodyBgPositiony').val();
        serpFrame.find("body").css({'background-position-y':bodyBgPositiony+'px'});

        //add to stylesheet
        var sheetBodyBgPositiony = sheet.getRule('body').prop('background-position-y',bodyBgPositiony+'px');
    });
    */

    //change body background size
    $('#bodyBgSize').keyup(function(event)
    {
        var bodyBgSize=$('#bodyBgSize').val();
        serpFrame.find("body").css({'background-size':bodyBgSize});

        //add to stylesheet
        var sheetBodyBgSize = sheet.getRule('body').prop('background-size',bodyBgSize);
    });

    //change body background attachment
    $('#bodyBgattachment').change(function(event)
    {
        var bodyBgattachment=$('#bodyBgattachment').val();
        serpFrame.find("body").css({'background-attachment':bodyBgattachment});

        //add to stylesheet
        var sheetBodyBgattachment = sheet.getRule('body').prop('background-attachment',bodyBgattachment);
    });


    //MAIN WRAPPER SECTION//

    //change main wrapper width
    $('#mainWrapperWidth').change(function(event)
    {
        var mainWrapperWidth=$('#mainWrapperWidth').val();
        serpFrame.find(".wrapper").css({'width':mainWrapperWidth+'px'});
        $('#displaymainWrapperWidth').html(mainWrapperWidth+'px');

        //add to stylesheet
        var sheetWrapperWidth = sheet.getRule('.wrapper').prop('width',mainWrapperWidth+'px');
    });


    //HEADER SECTION//

    //change header text
    $('#headerText').keyup(function(event)
    {
        var headerText=$('#headerText').val();
        serpFrame.find(".heading").html(headerText);
    });

    //change Header Padding top and bottom
    $('#headerPadding').change(function(event)
    {
        var headerPadding=$('#headerPadding').val(); 
        serpFrame.find(".header").css({'padding-top':headerPadding+'px'});
        serpFrame.find(".header").css({'padding-bottom':headerPadding+'px'});
        $('#displayHeaderPadding').html(headerPadding+'px');

        //add to stylesheet
        var sheetNumFontSize = sheet.getRule('.num').prop('padding-top',headerPadding+'px');
        var sheetNumFontSize = sheet.getRule('.num').prop('padding-bottom',headerPadding+'px');
    });

    //change header padding top
    /*$('#headerPaddingTop').change(function(event)
    {
        var headerPaddingTop=$('#headerPaddingTop').val();
        serpFrame.find(".header").css({'padding-top':headerPaddingTop+'px'});

        //add to stylesheet
        var sheetHeaderPaddingTop = sheet.getRule('.header').prop('padding-top',headerPaddingTop+'px');
    });*/

    //change header padding right
    /*$('#headerPaddingRight').change(function(event)
    {
        var headerPaddingRight=$('#headerPaddingRight').val();
        serpFrame.find(".header").css({'padding-right':headerPaddingRight+'px'});

        //add to stylesheet
        var sheetHeaderPaddingRight = sheet.getRule('.header').prop('padding-right',headerPaddingRight+'px');
    });*/

    //change header padding bottom
    /*$('#headerPaddingBottom').change(function(event)
    {
        var headerPaddingBottom=$('#headerPaddingBottom').val();
        serpFrame.find(".header").css({'padding-bottom':headerPaddingBottom+'px'});

        //add to stylesheet
        var sheetHeaderPaddingBottom = sheet.getRule('.header').prop('padding-bottom',headerPaddingBottom+'px');
    });*/

    //change header padding left
    /*$('#headerPaddingLeft').change(function(event)
    {
        var headerPaddingLeft=$('#headerPaddingLeft').val();
        serpFrame.find(".header").css({'padding-left':headerPaddingLeft+'px'});

        //add to stylesheet
        var sheetHeaderPaddingLeft = sheet.getRule('.header').prop('padding-left',headerPaddingLeft+'px');
    });*/

    //change header background
    $('#headerBgColor').change(function(event)
    {   
        var headerBgColor=$('#headerBgColor').val();
        changeBgColor(".header",headerBgColor);
    });

    //change header text color
    $('#headerColor').change(function(event)
    {
        var headerColor=$('#headerColor').val();
        changeFontColor(".heading",headerColor);
    });

    //change header font size
    $('#headerFontSize').change(function(event)
    {
        var headerFontSize=$('#headerFontSize').val();
        changeFontSize(".heading",headerFontSize);
    });

    //header border top checkbox
    /*$('#headerBorderTop').change(function(event){                
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

            //add to stylesheet
            var sheetHeaderBorderTopSize = sheet.getRule('.header').prop('border-top-width','0');
            var sheetHeaderBorderTopColor = sheet.getRule('.header').prop('border-top-color','none');
            var sheetHeaderBorderTopType = sheet.getRule('.header').prop('border-top-style','none');
        }
    });

    //change header border top size
    $('#headerBorderTopSize').change(function(event)
    {
        var headerBorderTopSize=$('#headerBorderTopSize').val();        
        serpFrame.find(".header").css({'border-top-width':headerBorderTopSize+'px'});

        //add to stylesheet
        var sheetHeaderBorderTopSize = sheet.getRule('.header').prop('border-top-width',headerBorderTopSize+'px');
    });

    //change header border top color
    $('#headerBorderTopColor').change(function(event)
    {
        var headerBorderTopColor=$('#headerBorderTopColor').val();
        serpFrame.find(".header").css({'border-top-color':'#'+headerBorderTopColor});

        //add to stylesheet
        var sheetHeaderBorderTopColor = sheet.getRule('.header').prop('border-top-color','#'+headerBorderTopColor);
    });

    //change header border top Type
    $('#headerBorderTopType').change(function(event)
    {
        var headerBorderTopType=$('#headerBorderTopType').val();
        serpFrame.find(".header").css({'border-top-style':headerBorderTopType});

        //add to stylesheet
        var sheetHeaderBorderTopType = sheet.getRule('.header').prop('border-top-style',headerBorderTopType);
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

            //add to stylesheet
            var sheetHeaderBorderRightSize = sheet.getRule('.header').prop('border-right-width','0');
            var sheetHeaderBorderRightColor = sheet.getRule('.header').prop('border-right-color','none');
            var sheetHeaderBorderRightType = sheet.getRule('.header').prop('border-right-style','none');
        }
    });

    //change header border right size
    $('#headerBorderRightSize').change(function(event)
    {
        var headerBorderRightSize=$('#headerBorderRightSize').val();        
        serpFrame.find(".header").css({'border-right-width':headerBorderRightSize+'px'});

        //add to stylesheet
        var sheetHeaderBorderRightSize = sheet.getRule('.header').prop('border-right-width',headerBorderRightSize+'px');
    });

    //change header border right color
    $('#headerBorderRightColor').change(function(event)
    {
        var headerBorderRightColor=$('#headerBorderRightColor').val();
        serpFrame.find(".header").css({'border-right-color':'#'+headerBorderRightColor});

        //add to stylesheet
        var sheetHeaderBorderRightColor = sheet.getRule('.header').prop('border-right-color','#'+headerBorderRightColor);
    });

    //change header border right Type
    $('#headerBorderRightType').change(function(event)
    {
        var headerBorderRightType=$('#headerBorderRightType').val();
        serpFrame.find(".header").css({'border-right-style':headerBorderRightType});

        //add to stylesheet
        var sheetHeaderBorderRightType = sheet.getRule('.header').prop('border-right-style',headerBorderRightType);
    });


    //header border bottom checkbox
    $('#headerBorderBottom').change(function(event){                
        event.preventDefault();
        var checkbox = $('#headerBorderBottom'),
            isChecked = checkbox.is(':checked');
            //status = $('#status');
        if(isChecked) {
            checkbox.prop('checked',true);
           $('#borderProps3').css("display","block");
        } else {
            checkbox.prop('checked', false);             
            $('#borderProps3').css("display","none");
            serpFrame.find(".header").css({'border-bottom':'none'});

            //add to stylesheet
            var sheetHeaderBorderBottomSize = sheet.getRule('.header').prop('border-bottom-width','0');
            var sheetHeaderBorderBottomColor = sheet.getRule('.header').prop('border-bottom-color','none');
            var sheetHeaderBorderBottomType = sheet.getRule('.header').prop('border-bottom-style','none');
        }
    });

    //change header border bottom size
    $('#headerBorderBottomSize').change(function(event)
    {
        var headerBorderBottomSize=$('#headerBorderBottomSize').val();        
        serpFrame.find(".header").css({'border-bottom-width':headerBorderBottomSize+'px'});

        //add to stylesheet
        var sheetHeaderBorderBottomSize = sheet.getRule('.header').prop('border-bottom-width',headerBorderBottomSize+'px');
    });

    //change header border bottom color
    $('#headerBorderBottomColor').change(function(event)
    {
        var headerBorderBottomColor=$('#headerBorderBottomColor').val();
        serpFrame.find(".header").css({'border-bottom-color':'#'+headerBorderBottomColor});

        //add to stylesheet
        var sheetHeaderBorderBottomColor = sheet.getRule('.header').prop('border-bottom-color','#'+headerBorderBottomColor);
    });

    //change header border bottom Type
    $('#headerBorderBottomType').change(function(event)
    {
        var headerBorderBottomType=$('#headerBorderBottomType').val();
        serpFrame.find(".header").css({'border-bottom-style':headerBorderBottomType});

        //add to stylesheet
        var sheetHeaderBorderBottomType = sheet.getRule('.header').prop('border-bottom-style',headerBorderBottomType);
    });


    //header border left checkbox
    $('#headerBorderLeft').change(function(event){                
        event.preventDefault();
        var checkbox = $('#headerBorderLeft'),
            isChecked = checkbox.is(':checked');
            //status = $('#status');
        if(isChecked) {
            checkbox.prop('checked',true);
           $('#borderProps4').css("display","block");
        } else {
            checkbox.prop('checked', false);             
            $('#borderProps4').css("display","none");
            serpFrame.find(".header").css({'border-left':'none'});

            //add to stylesheet
            var sheetHeaderBorderLeftSize = sheet.getRule('.header').prop('border-left-width','0');
            var sheetHeaderBorderLeftColor = sheet.getRule('.header').prop('border-left-color','none');
            var sheetHeaderBorderLeftType = sheet.getRule('.header').prop('border-left-style','none');
        }
    });

    //change header border left size
    $('#headerBorderLeftSize').change(function(event)
    {
        var headerBorderLeftSize=$('#headerBorderLeftSize').val();        
        serpFrame.find(".header").css({'border-left-width':headerBorderLeftSize+'px'});
        
        //add to stylesheet
        var sheetHeaderBorderLeftSize = sheet.getRule('.header').prop('border-left-width',headerBorderLeftSize+'px');
    });

    //change header border left color
    $('#headerBorderLeftColor').change(function(event)
    {
        var headerBorderLeftColor=$('#headerBorderLeftColor').val();
        serpFrame.find(".header").css({'border-left-color':'#'+headerBorderLeftColor});

        //add to stylesheet
        var sheetHeaderBorderLeftColor = sheet.getRule('.header').prop('border-left-color','#'+headerBorderLeftColor);
    });

    //change header border left Type
    $('#headerBorderLeftType').change(function(event)
    {
        var headerBorderLeftType=$('#headerBorderLeftType').val();
        serpFrame.find(".header").css({'border-left-style':headerBorderLeftType});

        //add to stylesheet
        var sheetHeaderBorderLeftType = sheet.getRule('.header').prop('border-left-style',headerBorderLeftType);
    });
*/




    //SPONSORED LINKS SECTION//

    //change sponsored links padding top
    $('#sponsPaddingTop').change(function(event)
    {
        var sponsPaddingTop=$('#sponsPaddingTop').val();
        serpFrame.find(".inner-spons-links").css({'padding-top':sponsPaddingTop+'px'});

        //add to stylesheet
        var sheetSponsPaddingTop = sheet.getRule('.inner-spons-links').prop('padding-top',sponsPaddingTop+'px');
    });

    //change sponsored links padding right
    /*$('#sponsPaddingRight').change(function(event)
    {
        var sponsPaddingRight=$('#sponsPaddingRight').val();
        serpFrame.find(".inner-spons-links").css({'padding-right':sponsPaddingRight+'px'});

        //add to stylesheet
        var sheetSponsPaddingRight = sheet.getRule('.inner-spons-links').prop('padding-right',sponsPaddingRight+'px');
    });*/

    //change sponsored links padding bottom
    $('#sponsPaddingBottom').change(function(event)
    {
        var sponsPaddingBottom=$('#sponsPaddingBottom').val();
        serpFrame.find(".inner-spons-links").css({'padding-bottom':sponsPaddingBottom+'px'});

        //add to stylesheet
        var sheetSponsPaddingBottom = sheet.getRule('.inner-spons-links').prop('padding-bottom',sponsPaddingBottom+'px');
    });

    //change sponsored links padding left
    /*$('#sponsPaddingLeft').change(function(event)
    {
        var sponsPaddingLeft=$('#sponsPaddingLeft').val();
        serpFrame.find(".inner-spons-links").css({'padding-left':sponsPaddingLeft+'px'});

        //add to stylesheet
        var sheetSponsPaddingLeft = sheet.getRule('.inner-spons-links').prop('padding-left',sponsPaddingLeft+'px');
    });*/

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

        //add to stylesheet
        var sheetSponsAlign = sheet.getRule('.inner-spons-links').prop('text-align',sponsAlign);
    });

    //change sponsored links Font Size
    $('#sponsFontSize').change(function(event)
    {   
        var sponsFontSize=$('#sponsFontSize').val();
        changeFontSize(".inner-spons-links",sponsFontSize)
    });

    //change sponsored links Font Color
    $('#sponsFontColor').change(function(event)
    {
        var sponsFontColor=$('#sponsFontColor').val();
        changeFontColor(".inner-spons-links",sponsFontColor);
    });

    //change sponsored links text shadow
    $('.btnGroup li a').click(function(event){
        var bShadowID=$(this).attr('id');
        if(bShadowID=='blackBoxShadow'){
            $('.btnGroup li a').removeClass('active');
            $(this).addClass('active');
            serpFrame.find(".inner-spons-links").css({'text-shadow':'1px 1px 1px #000000'});

            //add to stylesheet
            var sheetSponsTextShadow = sheet.getRule('.inner-spons-links').prop('text-shadow','1px 1px 1px #000000');
        }
        else if(bShadowID=='whiteBoxShadow'){
            $('.btnGroup li a').removeClass('active');
            $(this).addClass('active');
            serpFrame.find(".inner-spons-links").css({'text-shadow':'1px 1px 1px #ffffff'});

            //add to stylesheet
            var sheetSponsTextShadow = sheet.getRule('.inner-spons-links').prop('text-shadow','1px 1px 1px #ffffff');
        }
        else{
            $('.btnGroup li a').removeClass('active');
            $(this).addClass('active');
            serpFrame.find(".inner-spons-links").css({'text-shadow':'none'});

            //add to stylesheet
            var sheetSponsTextShadow = sheet.getRule('.inner-spons-links').prop('text-shadow','none');
        }
    });
    /*$('#sponsTextShadow').keyup(function(event)
    {
        var sponsTextShadow=$('#sponsTextShadow').val();
        serpFrame.find(".inner-spons-links").css({'text-shadow':sponsTextShadow});

        //add to stylesheet
        var sheetSponsTextShadow = sheet.getRule('.inner-spons-links').prop('text-shadow',sponsTextShadow);
    });*/

    //change sponsored links bold
    $('#sponsBold').change(function(event){             
        event.preventDefault();
        var checkbox = $('#sponsBold'),
            isChecked = checkbox.is(':checked');
            //status = $('#status');
        if(isChecked) {
            checkbox.prop('checked',true);
            serpFrame.find('.inner-spons-links').css("font-weight","bold");

            //add to stylesheet
            var sheetSponsTextBold = sheet.getRule('.inner-spons-links').prop('font-weight','bold');
        } else {
            checkbox.prop('checked', false); 
            serpFrame.find('.inner-spons-links').css("font-weight","normal");

            //add to stylesheet
            var sheetSponsTextBold = sheet.getRule('.inner-spons-links').prop('font-weight','normal');
        }
    });

    //change sponsored links uppercase
    $('#sponsUpperCase').change(function(event){                
         var sponsUpperCase=$('#sponsUpperCase').val();
        serpFrame.find('.inner-spons-links').css("text-transform",sponsUpperCase);

        //add to stylesheet
        var sheetSponsUpperCase = sheet.getRule('.inner-spons-links').prop('text-transform',sponsUpperCase);
    });




    //AD WRAPPER SECTION//

    //change ad background
    $('#liBackground').change(function(event)
    {
        var liBackground=$('#liBackground').val();
        changeBgColor(".list",liBackground);
    });

    //change ad background Full number
    $('#liBackgroundOther').change(function(event)
    {
        var liBackgroundOther=$('#liBackgroundOther').val();
        changeBgColor(".wrapAll",liBackgroundOther);
    });

    //change ad background on hover 
    $('#liHoverBGColor').change(function(event)
    {
        var liHoverBGColor=$('#liHoverBGColor').val();
        changeBgColor(".results li:hover .list",liHoverBGColor);
    });

    //change ad background on hover Full number
    $('#liHoverBGColorOther').change(function(event)
    {
        var liHoverBGColorOther=$('#liHoverBGColorOther').val();
        changeBgColor(".results li:hover .wrapAll",liHoverBGColorOther);
    });

    //li border checkbox
    $('#liBorder').change(function(event){                
        event.preventDefault();
        var checkbox = $('#liBorder'),
            isChecked = checkbox.is(':checked');
            //status = $('#status');
        if(isChecked) {
            checkbox.prop('checked',true);
            $('#liborderProps').css("display","block");
            serpFrame.find(".list").css({'border-width':'1px'});
            serpFrame.find(".list").css({'border-color':'#d4d4d4'});
            serpFrame.find(".list").css({'border-style':'solid'});

            //add to stylesheet
            var sheetAdBorderSize = sheet.getRule('.list').prop('border-width','1px');
            var sheetAdBorderColor = sheet.getRule('.list').prop('border-color','#d4d4d4');
            var sheetAdBorderType = sheet.getRule('.list').prop('border-style','solid');
        } else {
            checkbox.prop('checked', false);             
            $('#liborderProps').css("display","none");
            serpFrame.find(".list").css({'border':'none'});

            //add to stylesheet
            var sheetAdBorderSize = sheet.getRule('.list').prop('border-width','0');
            var sheetAdBorderColor = sheet.getRule('.list').prop('border-color','none');
            var sheetAdBorderType = sheet.getRule('.list').prop('border-style','none');
        }
    });

    //change ad border size
    $('#liBorderSize').change(function(event)
    {
        var liBorderSize=$('#liBorderSize').val();        
        serpFrame.find(".list").css({'border-width':liBorderSize+'px'});

        //add to stylesheet
        var sheetAdliBorderSize = sheet.getRule('.list').prop('border-width',liBorderSize+'px');
    });

    //change li border color
    $('#liBorderColor').change(function(event)
    {
        var liBorderColor=$('#liBorderColor').val();
        serpFrame.find(".list").css({'border-color':'#'+liBorderColor});

        //add to stylesheet
        var sheetAdliBorderColor = sheet.getRule('.list').prop('border-color','#'+liBorderColor);
    });

    //change li border color on hover
    $('#liHoverBorderColor').change(function(event)
    {
        var liHoverBorderColor=$('#liHoverBorderColor').val();
        // serpFrame.find(".list").css({'border-color':'#'+liHoverBorderColor});

        //add to stylesheet
        var sheetAdliHoverBorderColor = sheet.getRule('.results li:hover .list').prop('border-color','#'+liHoverBorderColor);
    });

    //change li border Type
    $('#liBorderType').change(function(event)
    {
        var liBorderType=$('#liBorderType').val();
        serpFrame.find(".list").css({'border-style':liBorderType});

        //add to stylesheet
        var sheetAdliBorderType = sheet.getRule('.list').prop('border-style',liBorderType);
    });

    $("#arrowImage").change(function(){
        changeBG(this,".list");
    });

    /*
    //li border top checkbox
    $('#liBorderTop').change(function(event){                
        event.preventDefault();
        var checkbox = $('#liBorderTop'),
            isChecked = checkbox.is(':checked');
            //status = $('#status');
        if(isChecked) {
            checkbox.prop('checked',true);
           $('#liborderProps1').css("display","block");
        } else {
            checkbox.prop('checked', false);             
            $('#liborderProps1').css("display","none");
            serpFrame.find(".list").css({'border-top':'none'});

            //add to stylesheet
            var sheetAdBorderTopSize = sheet.getRule('.list').prop('border-top-width','0');
            var sheetAdBorderTopColor = sheet.getRule('.list').prop('border-top-color','none');
            var sheetAdBorderTopType = sheet.getRule('.list').prop('border-top-style','none');
        }
    });

    //change li border top size
    $('#liBorderTopSize').change(function(event)
    {
        var liBorderTopSize=$('#liBorderTopSize').val();        
        serpFrame.find(".list").css({'border-top-width':liBorderTopSize+'px'});

        //add to stylesheet
        var sheetAdBorderTopSize = sheet.getRule('.list').prop('border-top-width',liBorderTopSize+'px');
    });

    //change li border top color
    $('#liBorderTopColor').change(function(event)
    {
        var liBorderTopColor=$('#liBorderTopColor').val();
        serpFrame.find(".list").css({'border-top-color':'#'+liBorderTopColor});

        //add to stylesheet
        var sheetAdBorderTopColor = sheet.getRule('.list').prop('border-top-color','#'+liBorderTopColor);
    });

    //change li border top Type
    $('#liBorderTopType').change(function(event)
    {
        var liBorderTopType=$('#liBorderTopType').val();
        serpFrame.find(".list").css({'border-top-style':liBorderTopType});

        //add to stylesheet
        var sheetAdBorderTopType = sheet.getRule('.list').prop('border-top-style',liBorderTopType);
    });

    //li border right checkbox
    $('#liBorderRight').change(function(event){                
        event.preventDefault();
        var checkbox = $('#liBorderRight'),
            isChecked = checkbox.is(':checked');
            //status = $('#status');
        if(isChecked) {
            checkbox.prop('checked',true);
           $('#liborderProps2').css("display","block");
        } else {
            checkbox.prop('checked', false);             
            $('#liborderProps2').css("display","none");
            serpFrame.find(".list").css({'border-right':'none'});

            //add to stylesheet
            var sheetAdBorderRightSize = sheet.getRule('.list').prop('border-right-width','0');
            var sheetAdBorderRightColor = sheet.getRule('.list').prop('border-right-color','none');
            var sheetAdBorderRightType = sheet.getRule('.list').prop('border-right-style','none');
        }
    });

    //change li border right size
    $('#liBorderRightSize').change(function(event)
    {
        var liBorderRightSize=$('#liBorderRightSize').val();        
        serpFrame.find(".list").css({'border-right-width':liBorderRightSize+'px'});
        
        //add to stylesheet
        var sheetAdBorderRightSize = sheet.getRule('.list').prop('border-right-width',liBorderRightSize+'px');
    });

    //change li border right color
    $('#liBorderRightColor').change(function(event)
    {
        var liBorderRightColor=$('#liBorderRightColor').val();
        serpFrame.find(".list").css({'border-right-color':'#'+liBorderRightColor});

        //add to stylesheet
        var sheetAdBorderRightColor = sheet.getRule('.list').prop('border-right-color','#'+liBorderRightColor);
    });

    //change li border right Type
    $('#liBorderRightType').change(function(event)
    {
        var liBorderRightType=$('#liBorderRightType').val();
        serpFrame.find(".list").css({'border-right-style':liBorderRightType});

        //add to stylesheet
        var sheetAdBorderRightType = sheet.getRule('.list').prop('border-right-style',liBorderRightType);
    });


    //li border bottom checkbox
    $('#liBorderBottom').change(function(event){                
        event.preventDefault();
        var checkbox = $('#liBorderBottom'),
            isChecked = checkbox.is(':checked');
            //status = $('#status');
        if(isChecked) {
            checkbox.prop('checked',true);
           $('#liborderProps3').css("display","block");
        } else {
            checkbox.prop('checked', false);             
            $('#liborderProps3').css("display","none");
            serpFrame.find(".list").css({'border-bottom':'none'});

            //add to stylesheet
            var sheetAdBorderBottomSize = sheet.getRule('.list').prop('border-bottom-width','0');
            var sheetAdBorderBottomColor = sheet.getRule('.list').prop('border-bottom-color','none');
            var sheetAdBorderBottomType = sheet.getRule('.list').prop('border-bottom-style','none');
        }
    });

    //change li border bottom size
    $('#liBorderBottomSize').change(function(event)
    {
        var liBorderBottomSize=$('#liBorderBottomSize').val();        
        serpFrame.find(".list").css({'border-bottom-width':liBorderBottomSize+'px'});
        
        //add to stylesheet
        var sheetAdBorderBottomSize = sheet.getRule('.list').prop('border-bottom-width',liBorderBottomSize+'px');
    });

    //change li border bottom color
    $('#liBorderBottomColor').change(function(event)
    {
        var liBorderBottomColor=$('#liBorderBottomColor').val();
        serpFrame.find(".list").css({'border-bottom-color':'#'+liBorderBottomColor});

        //add to stylesheet
        var sheetAdBorderBottomColor = sheet.getRule('.list').prop('border-bottom-color','#'+liBorderBottomColor);
    });

    //change li border bottom Type
    $('#liBorderBottomType').change(function(event)
    {
        var liBorderBottomType=$('#liBorderBottomType').val();
        serpFrame.find(".list").css({'border-bottom-style':liBorderBottomType});

        //add to stylesheet
        var sheetAdBorderBottomType = sheet.getRule('.list').prop('border-bottom-style',liBorderBottomType);
    });


    //li border left checkbox
    $('#liBorderLeft').change(function(event){                
        event.preventDefault();
        var checkbox = $('#liBorderLeft'),
            isChecked = checkbox.is(':checked');
            //status = $('#status');
        if(isChecked) {
            checkbox.prop('checked',true);
           $('#liborderProps4').css("display","block");
        } else {
            checkbox.prop('checked', false);             
            $('#liborderProps4').css("display","none");
            serpFrame.find(".list").css({'border-left':'none'});

            //add to stylesheet
            var sheetAdBorderLeftSize = sheet.getRule('.list').prop('border-left-width','0');
            var sheetAdBorderLeftColor = sheet.getRule('.list').prop('border-left-color','none');
            var sheetAdBorderLeftType = sheet.getRule('.list').prop('border-left-style','none');
        }
    });

    //change li border left size
    $('#liBorderLeftSize').change(function(event)
    {
        var liBorderLeftSize=$('#liBorderLeftSize').val();        
        serpFrame.find(".list").css({'border-left-width':liBorderLeftSize+'px'});
        
        //add to stylesheet
        var sheetAdBorderLeftSize = sheet.getRule('.list').prop('border-left-width',liBorderLeftSize+'px');
    });

    //change li border left color
    $('#liBorderLeftColor').change(function(event)
    {
        var liBorderLeftColor=$('#liBorderLeftColor').val();
        serpFrame.find(".list").css({'border-left-color':'#'+liBorderLeftColor});

        //add to stylesheet
        var sheetAdBorderLeftColor = sheet.getRule('.list').prop('border-left-color','#'+liBorderLeftColor);
    });

    //change li border left Type
    $('#liBorderLeftType').change(function(event)
    {
        var liBorderLeftType=$('#liBorderLeftType').val();
        serpFrame.find(".list").css({'border-left-style':liBorderLeftType});

        //add to stylesheet
        var sheetAdBorderLeftType = sheet.getRule('.list').prop('border-left-style',liBorderLeftType);
    });
    */

    //change ad border radius
    $('#liBorderRadius').change(function(event)
    {
        var liBorderRadius=$('#liBorderRadius').val();
        serpFrame.find(".list").css({'border-radius':liBorderRadius+'px'});

        //add to stylesheet
        var sheetAdBorderRadius = sheet.getRule('.list').prop('border-radius',liBorderRadius+'px');
    });

    //change ad padding top
    $('#liPaddingTop').change(function(event)
    {
        var liPaddingTop=$('#liPaddingTop').val();
        serpFrame.find(".list").css({'padding-top':liPaddingTop+'px'});

        //add to stylesheet
        var sheetAdPaddingTop = sheet.getRule('.list').prop('padding-top',liPaddingTop+'px');
    });

    //change ad padding right
    $('#liPaddingRight').change(function(event)
    {
        var liPaddingRight=$('#liPaddingRight').val();
        serpFrame.find(".list").css({'padding-right':liPaddingRight+'px'});

        //add to stylesheet
        var sheetAdPaddingRight = sheet.getRule('.list').prop('padding-right',liPaddingRight+'px');
    });

    //change ad padding bottom
    $('#liPaddingBottom').change(function(event)
    {
        var liPaddingBottom=$('#liPaddingBottom').val();
        serpFrame.find(".list").css({'padding-bottom':liPaddingBottom+'px'});

        //add to stylesheet
        var sheetAdPaddingBottom = sheet.getRule('.list').prop('padding-bottom',liPaddingBottom+'px');
    });

    //change ad padding left
    $('#liPaddingLeft').change(function(event)
    {
        var liPaddingLeft=$('#liPaddingLeft').val();
        serpFrame.find(".list").css({'padding-left':liPaddingLeft+'px'});

        //add to stylesheet
        var sheetAdPaddingLeft = sheet.getRule('.list').prop('padding-left',liPaddingLeft+'px');
    });

    //change ad margin bottom 
    $('#liMarginBottom').change(function(event)
    {
        var liMarginBottom=$('#liMarginBottom').val();
        serpFrame.find(".results li").css({'margin-bottom':liMarginBottom+'px'});

        //add to stylesheet
        var sheetAdMarginBottom = sheet.getRule('.results li').prop('margin-bottom',liMarginBottom+'px');
    });




    //AD TITLE SECTION//

    //change ad title Font Size
    $('#titleFontSize').change(function(event)
    {
        var titleFontSize=$('#titleFontSize').val();
        changeFontSize(".title",titleFontSize);
    });

    //change ad title Font Color
    $('#titleFontColor').change(function(event)
    {
        var titleFontColor=$('#titleFontColor').val();
        changeFontColor(".title",titleFontColor);
    });

    //change ad title Font Color on hover
    $('#titleHoverFontColor').change(function(event)
    {
        var titleHoverFontColor=$('#titleHoverFontColor').val();
        changeFontColor(".results li:hover .title",titleHoverFontColor);
    });

    //change ad title bold
    $('#titleBold').change(function(event){             
        event.preventDefault();
        var checkbox = $('#titleBold'),
            isChecked = checkbox.is(':checked');
            //status = $('#status');
        if(isChecked) {
            checkbox.prop('checked',true);
            serpFrame.find('.title').css("font-weight","bold");

            //add to stylesheet
            var sheetSponsTextBold = sheet.getRule('.title').prop('font-weight','bold');
        } else {
            checkbox.prop('checked', false); 
            serpFrame.find('.title').css("font-weight","normal");

            //add to stylesheet
            var sheetSponsTextBold = sheet.getRule('.title').prop('font-weight','normal');
        }
    });

    //change ad title uppercase
    $('#titleUpperCase').change(function(event){                
        var titleUpperCase=$('#titleUpperCase').val();
        serpFrame.find('.title').css("text-transform",titleUpperCase);

        //add to stylesheet
        var sheetTitleUppercase = sheet.getRule('.title').prop('text-transform',titleUpperCase)
    });

    //change ad title margin bottom
    $('#titleMarginBottom').change(function(event){ 
        var titleMarginBottom=$('#titleMarginBottom').val();
        serpFrame.find('.title').css("margin-bottom",titleMarginBottom+'px');

        //add to stylesheet
        var sheetTitleMarginBottom = sheet.getRule('.title').prop('margin-bottom',titleMarginBottom+'px')
    });


    
    //AD URL SECTION//

    //change ad url Font Size
    $('#urlFontSize').change(function(event)
    {
        var urlFontSize=$('#urlFontSize').val();
        changeFontSize(".url",urlFontSize);
    });

    //change ad url Font Color
    $('#urlFontColor').change(function(event)
    {
        var urlFontColor=$('#urlFontColor').val();
        changeFontColor(".url",urlFontColor);
    });

    //change ad url Font Color on hover
    $('#urlHoverFontColor').change(function(event)
    {
        var urlHoverFontColor=$('#urlHoverFontColor').val();
        changeFontColor(".results li:hover .url",urlHoverFontColor);
    });

    //change ad url uppercase
    $('#urlUpperCase').change(function(event){                
        var urlUpperCase=$('#urlUpperCase').val();
        serpFrame.find('.url').css("text-transform",urlUpperCase);
        
        //add to stylesheet
        var sheetUrlUpperCase = sheet.getRule('.url').prop('text-transform',urlUpperCase);
    });

    //url display inline
    $('#urlBlock').change(function(event){                
        event.preventDefault();
        var checkbox = $('#urlBlock'),
            isChecked = checkbox.is(':checked');
            //status = $('#status');
        if(isChecked) {
            checkbox.prop('checked',true);
            serpFrame.find(".url").css({'display':'block'});

            //add to stylesheet
            var sheetUrlDisplay = sheet.getRule('.url').prop('display','block');
        } else {
            checkbox.prop('checked', false);             
            serpFrame.find(".url").css({'display':'inline'});

            //add to stylesheet
            var sheetUrlDisplay = sheet.getRule('.url').prop('display','inline');
        }
    });


    //AD DESCRIPTION SECTION//

    //change ad descripition Font Size
    $('#descFontSize').change(function(event)
    {
        var descFontSize=$('#descFontSize').val();
        changeFontSize(".desc",descFontSize);
    });

    //change ad descripition Font Color
    $('#descFontColor').change(function(event)
    {
        var descFontColor=$('#descFontColor').val();
        changeFontColor(".desc",descFontColor);

        //change separator font color
        serpFrame.find('.sepr').css({'color':'#'+descFontColor});
        //add to stylesheet
        var sheetSeprColor = sheet.getRule('.sepr').prop('color','#'+descFontColor);
    });

    //change ad descripition Font Color on hover
    $('#descHoverFontColor').change(function(event)
    {
        var descHoverFontColor=$('#descHoverFontColor').val();
        changeFontColor(".results li:hover .desc",descHoverFontColor);

        //change separator font color
        serpFrame.find('.sepr').css({'color':'#'+descHoverFontColor});
        //add to stylesheet
        var sheetSeprColor = sheet.getRule('.results li:hover .sepr').prop('color','#'+descHoverFontColor);
    });

    //change ad descripition uppercase
    $('#descUpperCase').change(function(event){                
        var descUpperCase=$('#descUpperCase').val();
        serpFrame.find('.desc').css("text-transform",descUpperCase);

        //add to stylesheet
        var sheetDescUpperCase = sheet.getRule('.desc').prop('text-transform',descUpperCase);
    });

    //desc display block
    $('#descBlock').change(function(event){                
        event.preventDefault();
        var checkbox = $('#descBlock'),
            isChecked = checkbox.is(':checked');
            //status = $('#status');
        if(isChecked) {
            checkbox.prop('checked',true);
            serpFrame.find(".desc").css({'display':'block'});

            //add to stylesheet
            var sheetDescDisplay = sheet.getRule('.desc').prop('display','block');
        } else {
            checkbox.prop('checked', false);             
            serpFrame.find(".desc").css({'display':'inline'});

            //add to stylesheet
            var sheetDescDisplay = sheet.getRule('.desc').prop('display','inline');
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
            serpFrame.find(".sepr").css({'display':'none'});

            //add to stylesheet
            var sheetSeprDisplay = sheet.getRule('.sepr').prop('display','none');
        } else {
            checkbox.prop('checked', false);             
            serpFrame.find(".sepr").css({'display':'inline'});

            //add to stylesheet
            var sheetSeprDisplay = sheet.getRule('.sepr').prop('display','inline');
        }
    });


    //AD NUMBER SECTION//

    //change number width
    /*$('#numWidth').change(function(event)
    {
        var numWidth=$('#numWidth').val(); 
        serpFrame.find(".num").css({'width':numWidth+'px'});

        //add to stylesheet
        var sheetNumWidth = sheet.getRule('.num').prop('width',numWidth+'px');
    });

    //change number height
    $('#numHeight').change(function(event)
    {
        var numHeight=$('#numHeight').val(); 
        serpFrame.find(".num").css({'height':numHeight+'px'});

        //add to stylesheet
        var sheetNumHeight = sheet.getRule('.num').prop('height',numHeight+'px');
    });*/
 

    $('#hideNumberWrap').click(function(event){
        var numclassname=$(this).children().attr('class');
        var numID='#'+$(this).children().attr('id');
        // console.log(numID);
        if(numclassname=='fa fa-ban hideNumber'){
            $(this).parent().addClass('hiddenAccordion');
            $('.hiddenAccordion').append('<div class="hiddenAccHeader">Numbers</div>');
            $('#accordion-8').parent().css({'display':'none'});
            $(this).html('<i class="fa fa-check showNumber" aria-hidden="true" id="hideNumber"></i> Show');
            // $("#numAccordion").attr('disabled','')
            $(this).attr('title','Show Number')
            // $(numID).addClass('fa-check');
            // $(numID).addClass('showNumber');
             
            // $(numID).removeClass('fa-ban');
            // $(numID).removeClass('hideNumber');
            serpFrame.find(".num").css({'display':'none'});
            serpFrame.find(".adTextWrap").css({'padding-left':'0'});

            //add to stylesheet
            var sheetNumDisplay = sheet.getRule('.num').prop('display','none');
            var sheetAdtwPadding = sheet.getRule('.adTextWrap').prop('padding-left','0');
        }
        else{
            $(this).parent().removeClass('hiddenAccordion');
            $('.hiddenAccHeader').remove();
            $('#accordion-8').parent().css({'display':'block'});
            $(this).html('<i class="fa fa-ban hideNumber" aria-hidden="true" id="hideNumber"></i> Hide');
            // $("#numAccordion").attr('disabled','disabled')
            $(this).attr('title','Hide Number')
            // $(numID).addClass('fa-ban');
            // $(numID).addClass('hideNumber');
             
            // $(numID).removeClass('fa-check');
            // $(numID).removeClass('showNumber');
             
            serpFrame.find(".num").css({'display':'block'});
            serpFrame.find(".adTextWrap").css({'padding-left':'25px'});

            //add to stylesheet
            var sheetNumDisplay = sheet.getRule('.num').prop('display','block');
            var sheetAdtwPadding = sheet.getRule('.adTextWrap').prop('padding-left','25px');
        }
     });





    $('#hideHeaderWrap').click(function(event){
        var numclassname=$(this).children().attr('class');
        var numID='#'+$(this).children().attr('id');
        // console.log(numID);
        if(numclassname=='fa fa-ban hideHeader'){
            $(this).parent().addClass('hiddenAccordion');
            $('.hiddenAccordion').append('<div class="hiddenAccHeader">Header</div>');
            $('#accordion-9').parent().css({'display':'none'});
            $(this).html('<i class="fa fa-check showHeader" aria-hidden="true" id="hideHeader"></i> Show');
            // $("#numAccordion").attr('disabled','')
            $(this).attr('title','Show Header')
            // $(numID).addClass('fa-check');
            // $(numID).addClass('showHeader');
             
            // $(numID).removeClass('fa-ban');
            // $(numID).removeClass('hideHeader');
            serpFrame.find(".header").css({'display':'none'});

            //add to stylesheet
            var sheetNumDisplay = sheet.getRule('.header').prop('display','none');
        }
        else{
            $(this).parent().removeClass('hiddenAccordion');
            $('.hiddenAccHeader').remove();
            $('#accordion-9').parent().css({'display':'block'});
            $(this).html('<i class="fa fa-ban hideHeader" aria-hidden="true" id="hideHeader"></i> Hide');
            // $("#numAccordion").attr('disabled','disabled')
            $(this).attr('title','Hide Header')
            // $(numID).addClass('fa-ban');
            // $(numID).addClass('hideHeader');
             
            // $(numID).removeClass('fa-check');
            // $(numID).removeClass('showHeader');
             
            serpFrame.find(".header").css({'display':'block'});

            //add to stylesheet
            var sheetNumDisplay = sheet.getRule('.header').prop('display','block');
        }
     });


    /*$('#hideNumber').click(function(event){
        var numclassname=$(this).attr('class');
        // console.log(numclassname);
        if(numclassname=='fa fa-ban hideNumber'){
            $("#numAccordion").attr('disabled','')
            $(this).attr('title','Show Number')
            $(this).addClass('fa-check');
            $(this).addClass('showNumber');
            
            $(this).removeClass('fa-ban');
            $(this).removeClass('hideNumber');
            serpFrame.find(".num").css({'display':'none'});
            serpFrame.find(".adTextWrap").css({'padding-left':'0'});

            //add to stylesheet
            var sheetNumDisplay = sheet.getRule('.num').prop('display','none');
            var sheetAdtwPadding = sheet.getRule('.adTextWrap').prop('padding-left','0');
        }
        else{
            $("#numAccordion").attr('disabled','disabled')
            $(this).attr('title','Hide Number')
            $(this).addClass('fa-ban');
            $(this).addClass('hideNumber');
            
            $(this).removeClass('fa-check');
            $(this).removeClass('showNumber');
            
            serpFrame.find(".num").css({'display':'block'});
            serpFrame.find(".adTextWrap").css({'padding-left':'25px'});

            //add to stylesheet
            var sheetNumDisplay = sheet.getRule('.num').prop('display','block');
            var sheetAdtwPadding = sheet.getRule('.adTextWrap').prop('padding-left','25px');
        }
    });*/

    //hide numbers checkbox
    /*$('#hideNumber').click(function(event){                
        event.preventDefault();
        var checkbox = $('#hideNumber'),
            isChecked = checkbox.is(':checked');
            //status = $('#status');
        if(isChecked) {
            checkbox.prop('checked',true);
            serpFrame.find(".num").css({'display':'none'});
            serpFrame.find(".adTextWrap").css({'padding-left':'0'});

            //add to stylesheet
            var sheetNumDisplay = sheet.getRule('.num').prop('display','none');
            var sheetAdtwPadding = sheet.getRule('.adTextWrap').prop('padding-left','0');
        } else {
            checkbox.prop('checked', false);             
            serpFrame.find(".num").css({'display':'block'});
            serpFrame.find(".adTextWrap").css({'padding-left':'25px'});

            //add to stylesheet
            var sheetNumDisplay = sheet.getRule('.num').prop('display','block');
            var sheetAdtwPadding = sheet.getRule('.adTextWrap').prop('padding-left','25px');
        }
    });*/

    //number border checkbox
    $('#numBorder').change(function(event){                
        event.preventDefault();
        var checkbox = $('#numBorder'),
            isChecked = checkbox.is(':checked');
            //status = $('#status');
        if(isChecked) {
            checkbox.prop('checked',true);
            $('#numBorderProps').css("display","block");
            serpFrame.find(".adTextWrap").css({'border-left-width':'1px'});
            serpFrame.find(".adTextWrap").css({'border-left-color':'#d4d4d4'});
            serpFrame.find(".adTextWrap").css({'border-left-style':'solid'});

            //add to stylesheet
            var sheetNumBorderSize = sheet.getRule('.adTextWrap').prop('border-left-width','1px');
            var sheetNumBorderColor = sheet.getRule('.adTextWrap').prop('border-left-color','#d4d4d4');
            var sheetNumBorderType = sheet.getRule('.adTextWrap').prop('border-left-style','solid');
        } else {
            checkbox.prop('checked', false);             
            $('#numBorderProps').css("display","none");
            serpFrame.find(".adTextWrap").css({'border':'none'});

            //add to stylesheet
            var sheetNumBorderSize = sheet.getRule('.adTextWrap').prop('border-left-width','0');
            var sheetNumBorderColor = sheet.getRule('.adTextWrap').prop('border-left-color','none');
            var sheetNumBorderType = sheet.getRule('.adTextWrap').prop('border-left-style','none');
        }
    });

    //change number border size
    $('#numBorderSize').change(function(event)
    {
        var numBorderSize=$('#numBorderSize').val();        
        serpFrame.find(".adTextWrap").css({'border-left-width':numBorderSize+'px'});

        //add to stylesheet
        var sheetAdNumBorderSize = sheet.getRule('.adTextWrap').prop('border-left-width',numBorderSize+'px');
    });

    //change number border color
    $('#numBorderColor').change(function(event)
    {
        var numBorderColor=$('#numBorderColor').val();
        serpFrame.find(".adTextWrap").css({'border-left-color':'#'+numBorderColor});

        //add to stylesheet
        var sheetAdNumBorderColor = sheet.getRule('.adTextWrap').prop('border-left-color','#'+numBorderColor);
    });

    //change number border color on hover
    $('#numHoverBorderColor').change(function(event)
    {
        var numHoverBorderColor=$('#numHoverBorderColor').val();

        //add to stylesheet
        var sheetAdNumHoverBorderColor = sheet.getRule('.results li:hover .adTextWrap').prop('border-left-color','#'+numHoverBorderColor);
    });

    //change number border Type
    $('#numBorderType').change(function(event)
    {
        var numBorderType=$('#numBorderType').val();
        serpFrame.find(".list").css({'border-left-style':numBorderType});

        //add to stylesheet
        var sheetAdNumBorderType = sheet.getRule('.adTextWrap').prop('border-left-style',numBorderType);
    });

    //change number Font Size
    $('#numFontSize').change(function(event)
    {
        var numFontSize=$('#numFontSize').val(); 
        serpFrame.find(".num").css({'font-size':numFontSize+'px'});

        if(serptype=="default/Simple_1"){
            serpFrame.find(".num").css({'line-height':numFontSize+'px'});
            var sheetNumLineHeight = sheet.getRule('.num').prop('line-height',numFontSize+'px');
        }

        //add to stylesheet
        var sheetNumFontSize = sheet.getRule('.num').prop('font-size',numFontSize+'px');
        
    });

    //change number Margin Top
    $('#numMarginTop').change(function(event)
    {
        var numMarginTop=$('#numMarginTop').val(); 
        serpFrame.find(".num").css({'margin-top':numMarginTop+'px'});
        serpFrame.find(".num").css({'margin-bottom':numMarginTop+'px'});
        $('#displayNumberMargin').html(numMarginTop+'px');

        //add to stylesheet
        var sheetNumMargTop = sheet.getRule('.num').prop('margin-top',numMarginTop+'px');
        var sheetNumMargBot = sheet.getRule('.num').prop('margin-bottom',numMarginTop+'px');
    });

    //change number Margin Right
    /*$('#numMarginRight').change(function(event)
    {
        var numMarginRight=$('#numMarginRight').val(); 
        serpFrame.find(".num").css({'margin-right':numMarginRight+'px'});

        //add to stylesheet
        var sheetNumFontSize = sheet.getRule('.num').prop('margin-right',numMarginRight+'px');
    });

    //change number Margin Bottom
    $('#numMarginBottom').change(function(event)
    {
        var numMarginBottom=$('#numMarginBottom').val(); 
        serpFrame.find(".num").css({'margin-bottom':numMarginBottom+'px'});

        //add to stylesheet
        var sheetNumFontSize = sheet.getRule('.num').prop('margin-bottom',numMarginBottom+'px');
    });

    //change number Margin Left
    $('#numMarginLeft').change(function(event)
    {
        var numMarginLeft=$('#numMarginLeft').val(); 
        serpFrame.find(".num").css({'margin-left':numMarginLeft+'px'});

        //add to stylesheet
        var sheetNumFontSize = sheet.getRule('.num').prop('margin-left',numMarginLeft+'px');
    });*/

    //change number Line Height
    /*$('#numLineHeight').change(function(event)
    {
        var numLineHeight=$('#numLineHeight').val(); 
        serpFrame.find(".num").css({'line-height':numLineHeight+'px'});

        //add to stylesheet
        var sheetNumLineHeight = sheet.getRule('.num').prop('line-height',numLineHeight+'px');
    });*/

    //change number Font Color
    $('#numFontColor').change(function(event)
    {
        var numFontColor=$('#numFontColor').val();
        changeFontColor(".num",numFontColor);
    });

    //change ad url Font Color on hover
    $('#numHoverFontColor').change(function(event)
    {
        var numHoverFontColor=$('#numHoverFontColor').val();
        changeFontColor(".results li:hover .num",numHoverFontColor);
    });

    //change number background
    $('#numBgColor').change(function(event)
    {
         var numBgColor=$('#numBgColor').val();
         changeBgColor(".num",numBgColor)
    });

    //change number background on hover
    $('#numHoverBgColor').change(function(event)
    {
         var numHoverBgColor=$('#numHoverBgColor').val();
         changeBgColor(".results li:hover .num",numHoverBgColor)
    });

    //change number background of full size number
    $('#numBgColorFull').change(function(event)
    {
         var numBgColorFull=$('#numBgColorFull').val();
         changeBgColor(".list",numBgColorFull)
    });

    //change number background on hover of full size number
    $('#numHoverBgColorFull').change(function(event)
    {
         var numHoverBgColorFull=$('#numHoverBgColorFull').val();
         changeBgColor(".results li:hover .list",numHoverBgColorFull)
    });
    
    //change number border radius
    /*$('#numBorderRadius').change(function(event)
    {
        var numBorderRadius=$('#numBorderRadius').val();
        serpFrame.find(".num").css({'border-radius':numBorderRadius+'px'});

        //add to stylesheet
        var sheetNumBorderRadius = sheet.getRule('.num').prop('border-radius',numBorderRadius+'px');
    });*/


    //OPT OUT SECTION//
    //change Opt Out Font Size
    $('#optOutFontSize').change(function(event)
    {
        var optOutFontSize=$('#optOutFontSize').val(); 
        serpFrame.find("#optOutLink a").css({'font-size':optOutFontSize+'px'});

        //add to stylesheet
        var sheetNumFontSize = sheet.getRule('#optOutLink a').prop('font-size',optOutFontSize+'px');
    });

    //change Opt Out Links Color
    $('#OptOutFontColor').change(function(event)
    {
        var OptOutFontColor=$('#OptOutFontColor').val();
        changeFontColor("#optOutLink",OptOutFontColor);
        changeFontColor("#optOutLink a",OptOutFontColor);
    });
    
    //change Opt Out Links text shadow
    $('.btnGroupOpt li a').click(function(event){
        var bShadowID=$(this).attr('id');
        if(bShadowID=='blackBoxShadow'){
            $('.btnGroupOpt li a').removeClass('active');
            $(this).addClass('active');
            serpFrame.find("#optOutLink a").css({'text-shadow':'1px 1px 1px #000000'});

            //add to stylesheet
            var sheetSponsTextShadow = sheet.getRule('#optOutLink a').prop('text-shadow','1px 1px 1px #000000');
        }
        else if(bShadowID=='whiteBoxShadow'){
            $('.btnGroupOpt li a').removeClass('active');
            $(this).addClass('active');
            serpFrame.find("#optOutLink a").css({'text-shadow':'1px 1px 1px #ffffff'});

            //add to stylesheet
            var sheetSponsTextShadow = sheet.getRule('#optOutLink a').prop('text-shadow','1px 1px 1px #ffffff');
        }
        else{
            $('.btnGroupOpt li a').removeClass('active');
            $(this).addClass('active');
            serpFrame.find("#optOutLink a").css({'text-shadow':'none'});

            //add to stylesheet
            var sheetSponsTextShadow = sheet.getRule('#optOutLink a').prop('text-shadow','none');
        }
    });

    var beforeHeader="<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\"><html xmlns=\"http://www.w3.org/1999/xhtml\" ><stl_head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=<tag:charset />\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\" /><title><tag:page_title /></title><style type=\"text/css\">";
    var afterStyle="</style><!--[if lte IE 8]><style>  body{background-position: top center}</style><![endif]--> <!--[if IE 7]><style>  .adTextWrap{padding:1px 0 1px 25px}</style><![endif]--> <script type=\"text/javascript\" src=\"<tag:jssource />\"></script></stl_head><stl_body><tag:post_form_html />";
    var afterBody = "</html>";


    // $('#getCodeBtn').click(function(){
    //     // serpFrame.find("style").html(resetCSS);
    //     serpFrame.find("[style]").removeAttr("style").html();
    //     serpFrame.find("#removeAfter").html('');
    //     serpFrame.find("#removeAfter").remove();

    //     var sheetBodyBgImage = sheet.getRule('body').prop('background-image','url(<tag:image_path />/'+$('#fwID').val()+'/bg.jpg)');
    //     var sheetArrowImage = sheet.getRule('.list').prop('background-image','url(<tag:image_path />/'+$('#fwID').val()+'/arrow.png)');
    //     var sheetArrowHoverImage = sheet.getRule('.results li:hover .list').prop('background-image','url(<tag:image_path />/'+$('#fwID').val()+'/arrowHover.png)');
    //     $('#cssCode').val(jss.sheets.toString());

    //     var newcss=$('#cssCode').val();

    //     // serpFrame.find("style").html(resetCSS+newcss);

    //     $('#finalCode').val(beforeHeader+serpFrame.find("head").html()+resetCSS+newcss+afterStyle+serpFrame.find("#headerWrapper").html()+$("#hiddenBody").val()+afterBody);
    // });



    


    //GET CODE BUTTON
    //zclip copy code
    function zclipHack(){
        $("#getCodeBtn").zclip({
            path:"zcb/ZeroClipboard.swf",
            copy:function(){
                // serpFrame.find("style").html(resetCSS);
                serpFrame.find("[style]").removeAttr("style").html();
                serpFrame.find("#removeAfter").html('');
                serpFrame.find("#removeAfter").remove();

                // var sheetBodyBgImage = sheet.getRule('body').prop('background-image','url(<tag:image_path />/'+$('#fwID').val()+'/bg.jpg)');
                // var sheetArrowImage = sheet.getRule('.list').prop('background-image','url(<tag:image_path />/'+$('#fwID').val()+'/arrow.png)');
                // var sheetArrowHoverImage = sheet.getRule('.results li:hover .list').prop('background-image','url(<tag:image_path />/'+$('#fwID').val()+'/arrowHover.png)');

                $('#cssCode').val(jss.sheets.toString());

                var newcss=$('#cssCode').val();

                // serpFrame.find("style").html(resetCSS+newcss);

                return(beforeHeader+serpFrame.find("head").html()+resetCSS+newcss+afterStyle+serpFrame.find("#headerWrapper").html()+$("#hiddenBody").val()+afterBody);
            },
            afterCopy: function() {}
        });
    }

    $('#getCodeBtn').click(function(){
        zclipHack();
    }); 

    zclipHack();
    
    

});
