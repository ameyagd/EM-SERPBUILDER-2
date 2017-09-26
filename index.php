<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="style.css">
<link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
<link rel="icon" href="SBFav.png" type="image/x-icon"/>
<title>SERP Builder</title>
<link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto|Raleway|Titillium+Web" rel="stylesheet">
<script src="scripts/modernizr.custom.js"></script>
</head>

<body class="bodyApp">
	
	<div class="header1 clearfix">
		<div class="headerLeft">
			<h2 class="innerpad"><a href="http://mcdlameyag/serpbuilder2/">SERP Builder</a></h2>
			<div class="FWIDWrapper">
				<div class="fwIDWrap">
					<label>Framework ID </label>
					<input type="text" name="fwID" id="fwID" />
				</div>
			</div>
			<div class="iframeRight">
				<ul class="clearfix">
					<li>
						<a href="javascript:;" id="tabLink"><i class="fa fa-tablet" aria-hidden="true"></i> Tablet</a>
					</li>
					<li>
						<a href="javascript:;" id="mobLink"><i class="fa fa-mobile-phone" aria-hidden="true"></i> Mobile</a>
					</li>
					<li>
						<a href="javascript:;" id="deskLink"><i class="fa fa-desktop" aria-hidden="true"></i> Desktop</a>
					</li>
				</ul>
			</div>
			
		</div>
		<div class="headerRight">
			<div class="clearfix" style="position:relative">
				<button id="getCodeBtn">Get Code</button>
			</div>
			<a class="settingsTab" href="javascript:;"  class=""><i class="fa fa-cog" aria-hidden="true"></i></a>
		</div>
		
	</div><!--end header-->



	<div class="main clearfix">		
		
		<div class="iframeOuter">
			<div class="rotateBtnWrap clearfix">
				<a class="rotateBtn" href="javascript:;" id="landscapeMob"><i class="fa fa-mobile mobile-rotate" aria-hidden="true"></i></a>
				<a class="rotateBtn" href="javascript:;" id="portraitMob"> <i class="fa fa-mobile" aria-hidden="true"></i></a>
				<a class="rotateBtn tabRotate" href="javascript:;" id="landscapeTab"><i class="fa fa-tablet mobile-rotate" aria-hidden="true"></i></a>
				<a class="rotateBtn tabRotate" href="javascript:;" id="portraitTab"><i class="fa fa-tablet" aria-hidden="true"></i></a>
			</div>

			<?php
	            $title=$_REQUEST['title'];
				if($title==""){
					header("location:selectLayout.php");
				}
	           
				else {
	                echo "<div class='iframeWrap'>
	            			<iframe src='layouts/$title/index.html' width='650' height='900' id='serpFrame' class=''></iframe>
	            		</div>";
            		echo "<input type='hidden' value='$title' id='serptype'/>";
	            }
			?>


		</div>
		<div class="midPanel">
			<div class="innerMid">

				<!--FW Details
				<div class="accordion active">
				    <div class="accordion-section">
				        <a class="accordion-section-title active" href="#accordion-10">Framework ID</a>
				         
				        <div id="accordion-10" class="accordion-section-content clearfix" style="display:block">
				           	<label>Framework ID </label>
				           	<input type="text" name="fwID" id="fwID" />
				        </div>
				    </div>
				</div>-->

			
				<!--Body-->
				<div class="accordion">
				    <div class="accordion-section">
				        <a class="accordion-section-title" id="bodyAccordion" href="#accordion-1">Body</a>
				         
				        <div id="accordion-1" class="accordion-section-content clearfix">
				           	<label>Background Color </label><input type="text" class="color" id="bodyBgColor" value="#ffffff"/>
							<div class="checkboxWrap">
								<label>Background Image </label><input type="checkbox" id="bodyBgImageChk"/>
							</div>
							<div id="bodybgimgwrap" class="clearfix">
								<label style="padding-top:8px">Select Image </label><input type="file" id="bodyBgImage"/><br/>
								<label>Background repeat </label>
									<select id="bodyBgRepeat"/>
										<option value="">select</option>
										<option value="no-repeat">no-repeat</option>
										<option value="repeat">repeat</option>
										<option value="repeat-x">repeat-x</option>
										<option value="repeat-y">repeat-y</option>
									</select>
									<br/>
								<label>Background size </label><input type="text" id="bodyBgSize" /><br/>
								<label>Background attachment </label>
									<select id="bodyBgRepeat"/>
										<option value="">select</option>
										<option value="fixed">fixed</option>
										<option value="scroll">scroll</option>
									</select>
									<br/>
							</div>
				        </div><!--end BODY .accordion-section-content-->
				    </div><!--end BODY .accordion-section-->
				</div><!--end BODY .accordion-->
				
				<!--Main Wrapper-->
				<div class="accordion">
				    <div class="accordion-section">
				        <a class="accordion-section-title" href="#accordion-2" id="wrapperAccordion">Main Wrapper</a>
				         
				        <div id="accordion-2" class="accordion-section-content clearfix">
				           <label>Width </label><input type="range" id="mainWrapperWidth" class="numberText" min="750" max="1200"/>
				           <label id="displaymainWrapperWidth" class="sliderLabel"/>
				           
				        </div><!--end Main Wrapper .accordion-section-content-->
				    </div><!--end Main Wrapper .accordion-section-->
				</div><!--end Main Wrapper .accordion-->

				<!--Header-->
				<div class="accordion">
				<a class="smallBtn" id="hideHeaderWrap" title="Hide Header"><i class="fa fa-ban hideHeader" aria-hidden="true" id="hideHeader"></i> Hide</a>
				    <div class="accordion-section">
				        <a class="accordion-section-title" id="headerAccordion" href="#accordion-9">Header</a>
				         
				        <div id="accordion-9" class="accordion-section-content clearfix">
			        		<label>Text </label>
			        		<input type="text" id="headerText" />

        		           	<label>Background Color </label><input type="text" class="color" id="headerBgColor" value="#ffffff"/>
        		           	<br/>

        		           	<label>Font Color </label><input type="text" class="color" id="headerColor" value="#ffffff"/>
        		           	<br/>

        		           	<label>Font Size </label>
        					<select id="headerFontSize"/>
        						<option value="">select</option>
        						<option value="15">15</option>
        						<option value="18">18</option>
        						<option value="20">20</option>
        						<option value="25">25</option>
        						<option value="28">28</option>
        						<option value="30">30</option>
        						<option value="35">35</option>
        						<option value="38">38</option>
        						<option value="40">40</option>
        					</select>

	        	        	<label>Header height</label>
	        	        	<input type="range" id="headerPadding" class="headerHeight" min="10" max="50"/>
				           	<label id="displayHeaderPadding" class="sliderLabel"></label>

				           	<!--<label>Padding top </label>
				        	<select id="headerPaddingTop"/>
								<option value="">select</option>
								<option value="0">0</option>
								<option value="5">5</option>
								<option value="10">10</option>
								<option value="15">15</option>
								<option value="20">20</option>
								<option value="25">25</option>
								<option value="30">30</option>
								<option value="35">35</option>
								<option value="40">40</option>
								<option value="45">45</option>
								<option value="50">50</option>
								<option value="50">55</option>
								<option value="60">60</option>
								<option value="60">65</option>
								<option value="70">70</option>
								<option value="80">80</option>
							</select>
							<br/>
							 <label>Padding right </label>
							<select id="headerPaddingRight"/>
								<option value="">select</option>
								<option value="0">0</option>
								<option value="5">5</option>
								<option value="10">10</option>
								<option value="15">15</option>
								<option value="20">20</option>
								<option value="25">25</option>
								<option value="30">30</option>
								<option value="35">35</option>
								<option value="40">40</option>
								<option value="45">45</option>
								<option value="50">50</option>
								<option value="50">55</option>
								<option value="60">60</option>
								<option value="60">65</option>
								<option value="70">70</option>
								<option value="80">80</option>
							</select>
							<br/> 
							<label>Padding Bottom</label>
							<select id="headerPaddingBottom"/>
								<option value="">select</option>
								<option value="0">0</option>
								<option value="5">5</option>
								<option value="10">10</option>
								<option value="15">15</option>
								<option value="20">20</option>
								<option value="25">25</option>
								<option value="30">30</option>
								<option value="35">35</option>
								<option value="40">40</option>
								<option value="45">45</option>
								<option value="50">50</option>
								<option value="50">55</option>
								<option value="60">60</option>
								<option value="60">65</option>
								<option value="70">70</option>
								<option value="80">80</option>
							</select>
							<br/>
							<label>Padding Left</label>
							<select id="headerPaddingLeft"/>
								<option value="">select</option>
								<option value="0">0</option>
								<option value="5">5</option>
								<option value="10">10</option>
								<option value="15">15</option>
								<option value="20">20</option>
								<option value="25">25</option>
								<option value="30">30</option>
								<option value="35">35</option>
								<option value="40">40</option>
								<option value="45">45</option>
								<option value="50">50</option>
								<option value="50">55</option>
								<option value="60">60</option>
								<option value="60">65</option>
								<option value="70">70</option>
								<option value="80">80</option>
							</select>
							<br/> -->
				           	
				           	



				           	<!-- <div class="checkboxWrap">
								<label>Border Top</label><input type="checkbox" id="headerBorderTop"/>
							</div>

							<div id="borderProps1">
								<label>Border Type </label>
								<select id="headerBorderTopType"/>
									<option value="">select</option>
									<option value="solid">solid</option>
									<option value="dashed">dashed</option>
									<option value="dotted">dotted</option>
								</select>
								<br/>
								<label>Border Color </label><input type="text" class="color" id="headerBorderTopColor"/><br/>
								<br/>
								<label>Border Size </label>
								<select id="headerBorderTopSize"/>
									<option value="">select</option>
									<option value="0">0</option>
									<option value="5">5</option>
									<option value="10">10</option>
									<option value="15">15</option>
									<option value="20">20</option>
								</select>
								<br/>
							</div>

							<div class="checkboxWrap">
								<label>Border Right</label><input type="checkbox" id="headerBorderRight"/>
							</div>

							<div id="borderProps2">
								<label>Border Type </label>
								<select id="headerBorderRightType"/>
									<option value="">select</option>
									<option value="solid">solid</option>
									<option value="dashed">dashed</option>
									<option value="dotted">dotted</option>
								</select>
								<br/>
								<label>Border Color </label><input type="text" class="color" id="headerBorderRightColor"/><br/>
								<br/>
								<label>Border Size </label>
								<select id="headerBorderRightSize"/>
									<option value="">select</option>
									<option value="0">0</option>
									<option value="5">5</option>
									<option value="10">10</option>
									<option value="15">15</option>
									<option value="20">20</option>
								</select>
								<br/>
							</div>

							<div class="checkboxWrap">
								<label>Border Bottom</label><input type="checkbox" id="headerBorderBottom"/>
							</div>

							<div id="borderProps3">
								<label>Border Type </label>
								<select id="headerBorderBottomType"/>
									<option value="">select</option>
									<option value="solid">solid</option>
									<option value="dashed">dashed</option>
									<option value="dotted">dotted</option>
								</select>
								<br/>
								<label>Border Color </label><input type="text" class="color" id="headerBorderBottomColor"/><br/>
								<br/>
								<label>Border Size </label>
								<select id="headerBorderBottomSize"/>
									<option value="">select</option>
									<option value="0">0</option>
									<option value="5">5</option>
									<option value="10">10</option>
									<option value="15">15</option>
									<option value="20">20</option>
								</select>
								<br/>
							</div>

							<div class="checkboxWrap">
								<label>Border Left</label><input type="checkbox" id="headerBorderLeft"/>
							</div>

							<div id="borderProps4">
								<label>Border Type </label>
								<select id="headerBorderLeftType"/>
									<option value="">select</option>
									<option value="solid">solid</option>
									<option value="dashed">dashed</option>
									<option value="dotted">dotted</option>
								</select>
								<br/>
								<label>Border Color </label><input type="text" class="color" id="headerBorderLeftColor"/><br/>
								<br/>
								<label>Border Size </label>
								<select id="headerBorderLeftSize"/>
									<option value="">select</option>
									<option value="0">0</option>
									<option value="5">5</option>
									<option value="10">10</option>
									<option value="15">15</option>
									<option value="20">20</option>
								</select>
								<br/>
							</div> -->
				        </div><!--end Header .accordion-section-content-->
				    </div><!--end Header .accordion-section-->
				</div><!--end Header .accordion-->

				<!--sponsored links-->
				<div class="accordion">
				    <div class="accordion-section">
				        <a class="accordion-section-title" href="#accordion-3" id="inner-spons-linksAccordion">Sponsored Links</a>
				         
				        <div id="accordion-3" class="accordion-section-content clearfix">
				        	<!--<label>Padding top </label>
				        	<select id="sponsPaddingTop"/>
								<option value="">select</option>
								<option value="0">0</option>
								<option value="5">5</option>
								<option value="10">10</option>
								<option value="15">15</option>
								<option value="20">20</option>
								<option value="25">25</option>
								<option value="30">30</option>
								<option value="35">35</option>
								<option value="40">40</option>
								<option value="45">45</option>
								<option value="50">50</option>
								<option value="50">55</option>
								<option value="60">60</option>
								<option value="60">65</option>
								<option value="70">70</option>
								<option value="80">80</option>
							</select>
							<br/>
							 <label>Padding right </label>
							<select id="sponsPaddingRight"/>
								<option value="">select</option>
								<option value="0">0</option>
								<option value="5">5</option>
								<option value="10">10</option>
								<option value="15">15</option>
								<option value="20">20</option>
								<option value="25">25</option>
								<option value="30">30</option>
								<option value="35">35</option>
								<option value="40">40</option>
								<option value="45">45</option>
								<option value="50">50</option>
								<option value="50">55</option>
								<option value="60">60</option>
								<option value="60">65</option>
								<option value="70">70</option>
								<option value="80">80</option>
							</select>
							<br/> 
							<label>Padding Bottom</label>
							<select id="sponsPaddingBottom"/>
								<option value="">select</option>
								<option value="0">0</option>
								<option value="5">5</option>
								<option value="10">10</option>
								<option value="15">15</option>
								<option value="20">20</option>
								<option value="25">25</option>
								<option value="30">30</option>
								<option value="35">35</option>
								<option value="40">40</option>
								<option value="45">45</option>
								<option value="50">50</option>
								<option value="50">55</option>
								<option value="60">60</option>
								<option value="60">65</option>
								<option value="70">70</option>
								<option value="80">80</option>
							</select>
							<br/>
							<label>Padding Left</label>
							<select id="sponsPaddingLeft"/>
								<option value="">select</option>
								<option value="0">0</option>
								<option value="5">5</option>
								<option value="10">10</option>
								<option value="15">15</option>
								<option value="20">20</option>
								<option value="25">25</option>
								<option value="30">30</option>
								<option value="35">35</option>
								<option value="40">40</option>
								<option value="45">45</option>
								<option value="50">50</option>
								<option value="50">55</option>
								<option value="60">60</option>
								<option value="60">65</option>
								<option value="70">70</option>
								<option value="80">80</option>
							</select>
							<br/> -->
				            <label>Text </label>
							<select id="sponsText"/>
								<option value="">select</option>
								<option value="ads">ads</option>
								<option value="Sponsored Results">Sponsored Results</option>
								<option value="Sponsored Listings">Sponsored Listings</option>
							</select>
							<br/>
							<label>Align </label>
							<select id="sponsAlign"/>
								<option value="">select</option>
								<option value="left">left</option>								
								<option value="right">right</option>
							</select>
							<br/>
							<label>Font Size </label>
							<select id="sponsFontSize"/>
								<option value="">select</option>
								<option value="11">11</option>
								<option value="12">12</option>
								<option value="13">13</option>
								<option value="14">14</option>
								<option value="15">15</option>
								<option value="16">16</option>
								<option value="17">17</option>
								<option value="18">18</option>
								<option value="19">19</option>
								<option value="20">20</option>
							</select>
							<br/>

							<label>Font Color </label><input type="text" class="color" id="sponsFontColor" value="#ffffff"/><br/>
							<label>Text Shadow </label>
							<ul class="btnGroup">
								<li><a href="#" id="blackBoxShadow">black</a></li>
								<li><a href="#" id="whiteBoxShadow">white</a></li>
								<li><a href="#" id="noBoxShadow">none</a></li>
							</ul>
							<br/>

							
							
							
							<label>Text Style </label>
							<select id="sponsUpperCase"/>
								<option value="">select</option>
								<option value="uppercase">uppercase</option>
								<option value="capitalize">capitalize</option>
								<option value="lowercase">lowercase</option>						
							</select>
							<div class="checkboxWrap">
								<label>Bold </label><input type="checkbox" id="sponsBold"/>
							</div>
				        </div><!--end sponsored links .accordion-section-content-->
				    </div><!--end sponsored links .accordion-section-->
				</div><!--end sponsored links .accordion-->

				<!--Ad Wrapper Card-->
				<div class="accordion">
				    <div class="accordion-section">
				        <a class="accordion-section-title" href="#accordion-4" id="listAccordion">Ad Wrapper</a>
				         
				        <div id="accordion-4" class="accordion-section-content clearfix">
				        	<?php if($title!='default/Simple_4'){ ?>
				            <label>Background color </label><input type="text" class="color" id="liBackground"/><br/>
				            <?php } ?>


				            <?php if($title=='default/Simple_4'){ ?>
								<label>Background color </label><input type="text" class="color" id="liBackgroundOther"/><br/>
				            <?php } ?>

				            <!--<label>Padding top </label>
							<select id="liPaddingTop"/>
								<option value="">select</option>
								<option value="0">0</option>
								<option value="5">5</option>
								<option value="10">10</option>
								<option value="15">15</option>
								<option value="20">20</option>
								<option value="25">25</option>
								<option value="30">30</option>
								<option value="35">35</option>
								<option value="40">40</option>
								<option value="45">45</option>
								<option value="50">50</option>
								<option value="50">55</option>
								<option value="60">60</option>
								<option value="60">65</option>
								<option value="70">70</option>
								<option value="80">80</option>
							</select>
							<br/>
							<label>Padding right </label>
							<select id="liPaddingRight"/>
								<option value="">select</option>
								<option value="0">0</option>
								<option value="5">5</option>
								<option value="10">10</option>
								<option value="15">15</option>
								<option value="20">20</option>
								<option value="25">25</option>
								<option value="30">30</option>
								<option value="35">35</option>
								<option value="40">40</option>
								<option value="45">45</option>
								<option value="50">50</option>
								<option value="50">55</option>
								<option value="60">60</option>
								<option value="60">65</option>
								<option value="70">70</option>
								<option value="80">80</option>
							</select>
							<br/>
							<label>Padding Bottom</label>
							<select id="liPaddingBottom"/>
								<option value="">select</option>
								<option value="0">0</option>
								<option value="5">5</option>
								<option value="10">10</option>
								<option value="15">15</option>
								<option value="20">20</option>
								<option value="25">25</option>
								<option value="30">30</option>
								<option value="35">35</option>
								<option value="40">40</option>
								<option value="45">45</option>
								<option value="50">50</option>
								<option value="50">55</option>
								<option value="60">60</option>
								<option value="60">65</option>
								<option value="70">70</option>
								<option value="80">80</option>
							</select>
							<br/>
							<label>Padding Left</label>
							<select id="liPaddingLeft"/>
								<option value="">select</option>
								<option value="0">0</option>
								<option value="5">5</option>
								<option value="10">10</option>
								<option value="15">15</option>
								<option value="20">20</option>
								<option value="25">25</option>
								<option value="30">30</option>
								<option value="35">35</option>
								<option value="40">40</option>
								<option value="45">45</option>
								<option value="50">50</option>
								<option value="50">55</option>
								<option value="60">60</option>
								<option value="60">65</option>
								<option value="70">70</option>
								<option value="80">80</option>
							</select>-->
						
							<label>Space between ads </label>
							<select id="liMarginBottom"/>
								<option value="">select</option>
								<option value="0">0</option>
								<option value="5">5</option>
								<option value="10">10</option>
								<option value="15">15</option>
								<option value="20">20</option>
							</select>
							<br/>
							
							<div class="checkboxWrap">
								<label>Border</label><input type="checkbox" id="liBorder"/>
							</div>

							<div id="liborderProps">
								<label>Border Type </label>
								<select id="liBorderType"/>
									<option value="">select</option>
									<option value="solid">solid</option>
									<option value="dashed">dashed</option>
									<option value="dotted">dotted</option>
								</select>
								<br/>
								<label>Border Color </label><input type="text" class="color" id="liBorderColor"/><br/>
								<br/>
								<label>Border Size </label>
								<select id="liBorderSize"/>
									<option value="">select</option>
									<option value="0">0</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
								<br/>
							</div>

							<label>Border Radius </label>
							<select id="liBorderRadius"/>
								<option value="">select</option>
								<option value="0">0</option>
								<option value="5">5</option>
								<option value="10">10</option>
								<option value="15">15</option>
								<option value="20">20</option>
							</select>
							<br/>

							<label>Arrow Image</label><input type="file" id="arrowImage"/><br/>

					
							<h4 class="hoverHeader">Hover Properties</h4>

							<?php if($title!='default/Simple_4'){ ?>
							<label>Background Color</label><input type="text" class="color" id="liHoverBGColor"/><br/>
							<?php } ?>


							<?php if($title=='default/Simple_4'){ ?>
								<label>Background color </label><input type="text" class="color" id="liHoverBGColorOther"/><br/>
				            <?php } ?>


							<label>Border Color</label><input type="text" class="color" id="liHoverBorderColor"/><br/>

							<label>Arrow Image</label><input type="file" id="arrowImageHover"/><br/>
							<!--
							<div class="checkboxWrap">
								<label>Border Top</label><input type="checkbox" id="liBorderTop"/>
							</div>

							
							<div id="liborderProps1">
								<label>Border Type </label>
								<select id="liBorderTopType"/>
									<option value="">select</option>
									<option value="solid">solid</option>
									<option value="dashed">dashed</option>
									<option value="dotted">dotted</option>
								</select>
								<br/>
								<label>Border Color </label><input type="text" class="color" id="liBorderTopColor"/><br/>
								<br/>
								<label>Border Size </label>
								<select id="liBorderTopSize"/>
									<option value="">select</option>
									<option value="0">0</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
								<br/>
							</div>

							 <div class="checkboxWrap">
								<label>Border Right</label><input type="checkbox" id="liBorderRight"/>
							</div>

							<div id="liborderProps2">
								<label>Border Type </label>
								<select id="liBorderRightType"/>
									<option value="">select</option>
									<option value="solid">solid</option>
									<option value="dashed">dashed</option>
									<option value="dotted">dotted</option>
								</select>
								<br/>
								<label>Border Color </label><input type="text" class="color" id="liBorderRightColor"/><br/>
								<br/>
								<label>Border Size </label>
								<select id="liBorderRightSize"/>
									<option value="">select</option>
									<option value="0">0</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
								<br/>
							</div>

							<div class="checkboxWrap">
								<label>Border Bottom</label><input type="checkbox" id="liBorderBottom"/>
							</div>

							<div id="liborderProps3">
								<label>Border Type </label>
								<select id="liBorderBottomType"/>
									<option value="">select</option>
									<option value="solid">solid</option>
									<option value="dashed">dashed</option>
									<option value="dotted">dotted</option>
								</select>
								<br/>
								<label>Border Color </label><input type="text" class="color" id="liBorderBottomColor"/><br/>
								<br/>
								<label>Border Size </label>
								<select id="liBorderBottomSize"/>
									<option value="">select</option>
									<option value="0">0</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
								<br/>
							</div>

							<div class="checkboxWrap">
								<label>Border Left</label><input type="checkbox" id="liBorderLeft"/>
							</div>

							<div id="liborderProps4">
								<label>Border Type </label>
								<select id="liBorderLeftType"/>
									<option value="">select</option>
									<option value="solid">solid</option>
									<option value="dashed">dashed</option>
									<option value="dotted">dotted</option>
								</select>
								<br/>
								<label>Border Color </label><input type="text" class="color" id="liBorderLeftColor"/><br/>
								<br/>
								<label>Border Size </label>
								<select id="liBorderLeftSize"/>
									<option value="">select</option>
									<option value="0">0</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
								<br/>
							</div> -->
							

				        </div><!--end Ad Wrapper .accordion-section-content-->
				    </div><!--end Ad Wrapper .accordion-section-->
				</div><!--end Ad Wrapper .accordion-->

				<!--Ad Title Card-->	
				<div class="accordion">
				    <div class="accordion-section">
				        <a class="accordion-section-title" href="#accordion-5" id="titleAccordion">Ad Title</a>
				         
				        <div id="accordion-5" class="accordion-section-content clearfix">
				        	<label>Font Size </label>
				        	<select id="titleFontSize"/>
								<option value="">select</option>
								<option value="15">15</option>
								<option value="16">16</option>
								<option value="17">17</option>
								<option value="18">18</option>
								<option value="19">19</option>
								<option value="20">20</option>
								<option value="21">21</option>
								<option value="22">22</option>
								<option value="23">23</option>
								<option value="24">24</option>
								<option value="25">25</option>
								<option value="26">26</option>
								<option value="27">27</option>
								<option value="28">28</option>
								<option value="29">29</option>
								<option value="30">30</option>
								<option value="31">31</option>
								<option value="32">32</option>
								<option value="33">33</option>
								<option value="34">34</option>
								<option value="35">35</option>
							</select>
				        	<br/>
				        	
							<label>Font Color </label><input type="text" id="titleFontColor" class="color" value="#ffffff"/>
							
							<label>Text Style </label>
							<select id="titleUpperCase"/>
								<option value="">select</option>
								<option value="uppercase">uppercase</option>
								<option value="lowercase">lowercase</option>
							</select>

							<div class="checkboxWrap">
								<label>Bold </label><input type="checkbox" id="titleBold"/>
							</div><br>

							<label>Space below title</label>
							<select id="titleMarginBottom"/>
								<option value="">select</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
								<option value="15">15</option>
								<option value="20">20</option>					
							</select>

							<h4 class="hoverHeader">Hover Properties</h4>
							<label>Color</label><input type="text" class="color" id="titleHoverFontColor"/><br/>


				        </div><!--end Ad Title .accordion-section-content-->
				    </div><!--end Ad Title .accordion-section-->
				</div><!--end Ad Title .accordion-->

				<!--Ad Description Card-->	
				<div class="accordion">
				    <div class="accordion-section">
				        <a class="accordion-section-title" href="#accordion-7" id="descAccordion">Ad Description</a>
				         
				        <div id="accordion-7" class="accordion-section-content clearfix">
				        	<label>Font Size </label>
				        	<select id="descFontSize"/>
								<option value="">select</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
								<option value="13">13</option>
								<option value="14">14</option>
								<option value="15">15</option>
								<option value="16">16</option>
								<option value="17">17</option>
								<option value="18">18</option>
								<option value="19">19</option>
								<option value="20">20</option>
							</select>
				        	<br/>
				        	
							<label>Font Color </label><input type="text" id="descFontColor" class="color" value="#ffffff"/>
							
							<label>Text Style </label>
							<select id="descUpperCase"/>
								<option value="">select</option>
								<option value="uppercase">uppercase</option>
								<option value="capitalize">capitalize</option>
								<option value="lowercase">lowercase</option>						
							</select>

							<div class="checkboxWrap">
								<label>Hide Separator </label><input type="checkbox" id="hideSeparator"/>
							</div>

							<div class="checkboxWrap">
								<label>Full width </label><input type="checkbox" id="descBlock"/>
							</div>

							<br/>
							<h4 class="hoverHeader">Hover Properties</h4>
							<label>Color</label><input type="text" class="color" id="descHoverFontColor"/>
				        </div><!--end Ad Description .accordion-section-content-->
				    </div><!--end Ad Description .accordion-section-->
				</div><!--end Ad Description .accordion-->


				<!--Ad URL Card-->	
				<div class="accordion">
				    <div class="accordion-section">
				        <a class="accordion-section-title" href="#accordion-6" id="urlAccordion">Ad URL</a>
				         
				        <div id="accordion-6" class="accordion-section-content clearfix">
				        	<label>Font Size </label>
				        	<select id="urlFontSize"/>
								<option value="">select</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
								<option value="13">13</option>
								<option value="14">14</option>
								<option value="15">15</option>
								<option value="16">16</option>
								<option value="17">17</option>
								<option value="18">18</option>
								<option value="19">19</option>
								<option value="20">20</option>
							</select>
				        	<br/>
				        	
							<label>Font Color </label><input type="text" id="urlFontColor" class="color" value="#ffffff"/>
							
							<label>Text Style </label>
							<select id="urlUpperCase"/>
								<option value="">select</option>
								<option value="uppercase">uppercase</option>
								<option value="capitalize">capitalize</option>
								<option value="lowercase">lowercase</option>						
							</select>

							<div class="checkboxWrap">
								<label>Full width </label><input type="checkbox" id="urlBlock"/>
							</div>

							<br/>
							<h4 class="hoverHeader">Hover Properties</h4>
							<label>Color</label><input type="text" class="color" id="urlHoverFontColor"/>
				        </div><!--end Ad URL .accordion-section-content-->
				    </div><!--end Ad URL .accordion-section-->
				</div><!--end Ad URL .accordion-->

				


				<!--Ad Number Card-->	
				<div class="accordion">
					<a class="smallBtn" id="hideNumberWrap" title="Hide Number"><i class="fa fa-ban hideNumber" aria-hidden="true" id="hideNumber"></i> Hide</a>
				    <div class="accordion-section">
				        <a class="accordion-section-title" href="#accordion-8" id="numAccordion">Numbers </a>
			         	
				        <div id="accordion-8" class="accordion-section-content clearfix">
				        	<!-- <label>Width</label><input type="text" id="numWidth"/>
				        	<br/>
				        	<label>Height</label><input type="text" id="numHeight"/>
				        	<br/> 
			        		

			        		<label>Border Radius </label>
							<select id="numBorderRadius"/>
								<option value="">select</option>
								<option value="0">0</option>
								<option value="5">5</option>
								<option value="10">10</option>
								<option value="15">15</option>
								<option value="20">20</option>
								<option value="25">25</option>
								<option value="30">30</option>
								<option value="35">35</option>
								<option value="40">40</option>
								<option value="45">45</option>
								<option value="50">50</option>
								<option value="60">60</option>
							</select>-->
							
							<?php if($title!='default/Simple_1' && $title!='default/Simple_4'){ ?>
								<label>Background Color </label>
								<input type="text" class="color" id="numBgColor" value="#ffffff"/>
							<?php } ?>

							<?php if($title=='default/Simple_4'){ ?>
								<label>Background Color </label>
								<input type="text" class="color" id="numBgColorFull" value="#ffffff"/>
							<?php } ?>

				        	<label>Font Size </label>
				        	<select id="numFontSize"/>
								<option value="">select</option>
								<option value="15">15</option>
								<option value="20">20</option>
								<option value="25">25</option>
								<option value="30">30</option>
								<?php if($title!='default/Simple_2'){ ?>
								<option value="35">35</option>
								<option value="40">40</option>
								<option value="45">45</option>
								<?php } ?>
							</select>
				        	<br/>

			        		<!-- <label>Line-Height</label><input type="text" id="numLineHeight"/>
				        	<br> -->
							
							<?php if($title!='columns/Columns_1'){ ?>
	        	        	<label>Align </label>
	        	        	<input type="range" id="numMarginTop" class="numberText" min="0" max="50"/>
				           	<label id="displayNumberMargin" class="sliderLabel"></label>
				           	<?php } ?>

	        	        	<!--<label>Margin Top</label>
	        	        	 <select id="numMarginTop"/>
	        					<option value="">select</option>
	        					<option value="10">10</option>
	        					<option value="15">15</option>
	        					<option value="20">20</option>
	        					<option value="25">25</option>
	        					<option value="30">30</option>
	        					<option value="35">35</option>
	        					<option value="40">40</option>
	        					<option value="45">45</option>
	        					<option value="50">50</option>
	        					<option value="55">55</option>
	        					<option value="60">60</option>
	        				</select>
	        				<br/>

				        	<label>Margin Right</label>
				        	<select id="numMarginRight"/>
								<option value="">select</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">20</option>
								<option value="13">25</option>
								<option value="14">30</option>
								<option value="15">35</option>
								<option value="16">40</option>
								<option value="17">45</option>
								<option value="18">50</option>
								<option value="55">55</option>
								<option value="60">60</option>
							</select>
							<br/> -->

				        	<!-- <label>Margin Bottom</label>
				        	<select id="numMarginBottom"/>
								<option value="">select</option>
								<option value="10">10</option>
								<option value="15">15</option>
								<option value="20">20</option>
								<option value="25">25</option>
								<option value="30">30</option>
								<option value="35">35</option>
								<option value="40">40</option>
								<option value="45">45</option>
								<option value="50">50</option>
								<option value="55">55</option>
								<option value="60">60</option>
							</select>
							<br/> -->

				        	<!-- <label>Margin Left</label>
				        	<select id="numMarginLeft"/>
								<option value="">select</option>
								<option value="10">10</option>
								<option value="15">15</option>
								<option value="20">20</option>
								<option value="25">25</option>
								<option value="30">30</option>
								<option value="35">35</option>
								<option value="40">40</option>
								<option value="45">45</option>
								<option value="50">50</option>
								<option value="55">55</option>
								<option value="60">60</option>
							</select>
							<br/> -->

							<?php if($title=='default/Simple_5'){ ?>

								<div class="checkboxWrap">
									<label>Border</label><input type="checkbox" id="numBorder"/>
								</div>

								<div id="numBorderProps">
									<label>Border Type </label>
									<select id="numBorderType">
										<option value="">select</option>
										<option value="solid">solid</option>
										<option value="dashed">dashed</option>
										<option value="dotted">dotted</option>
									</select>
									<br/>
									<label>Border Color </label><input type="text" class="color" id="numBorderColor"/><br/>
									<br/>
									<label>Border Size </label>
									<select id="numBorderSize">
										<option value="">select</option>
										<option value="0">0</option>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
									</select>
									<br/>
								</div>



							<?php } ?>

			        		
				        	<br/>
							<label>Font Color </label><input type="text" id="numFontColor" class="color" value="#ffffff"/>

							<!-- <div class="checkboxWrap">
								<label>Hide Number </label><input type="checkbox" id="hideNumber"/>
							</div> -->
							<br/>

							<h4 class="hoverHeader">Hover Properties</h4>
							<label>Font Color</label><input type="text" class="color" id="numHoverFontColor"/>

							<label>Border Color</label><input type="text" class="color" id="numHoverBorderColor"/><br/>


							<?php if($title!='default/Simple_1' && $title!='default/Simple_4'){ ?>
								<label>Background Color </label><input type="text" class="color" id="numHoverBgColor" value="#ffffff"/>
							<?php } ?>

							<?php
								if($title=='default/Simple_4'){
							?>
								<label>Background Color </label>
								<input type="text" class="color" id="numHoverBgColorFull" value="#ffffff"/>
							<?php
								}	
							?>
				        </div><!--end Ad Number .accordion-section-content-->
				    </div><!--end Ad Number .accordion-section-->
				</div><!--end Ad Number .accordion-->

				<!--Opt Out Links-->
				<div class="accordion">
				    <div class="accordion-section">
				        <a class="accordion-section-title" href="#accordion-11">Opt Out</a>
				         
				        <div id="accordion-11" class="accordion-section-content clearfix">
				        	<label>Font Size </label>
				        	<select id="optOutFontSize"/>
								<option value="">select</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
								<option value="13">13</option>
								<option value="14">14</option>
								<option value="15">15</option>
							</select>
				        	<br/>

				           <label>Font Color</label><input type="text" class="color" id="OptOutFontColor"/>
				           <br/>

				           <label>Text Shadow </label>
				           <ul class="btnGroupOpt">
				           	<li><a href="#" id="blackBoxShadow">black</a></li>
				           	<li><a href="#" id="whiteBoxShadow">white</a></li>
				           	<li><a href="#" id="noBoxShadow">none</a></li>
				           </ul>
				           <br/>
				        </div><!--end Opt Out .accordion-section-content-->
				    </div><!--end Opt Out .accordion-section-->
				</div><!--end Opt Out .accordion-->

				<div class="overlay overlay-door">
					<button type="button" class="overlay-close">Close</button>
					<div class="finalCodeWrapper">
						<h3>Well Done! Your code was copied to clipboard!</h3>
						<h5>Try pasting your code below</h5>
						<textarea id="finalCode"></textarea>
					</div>
				</div>
				
				
				<textarea id="cssCode" styke="display:block"></textarea>

				
				<textarea id="imageTag" name="imageTag"><tag:image_path /></textarea>
				<textarea id="hiddenBody">
				  	<div class="wrapper">
					    <div class="inner-spons-links">Sponsored Listings</div>
					    <ul class="results">
					      <if:ad_present1>
					        <li>
					          <a href="<ad_href_url:1 />" target="_blank" class="list clearfix">
					            <div class="num"><span>1</span></div>   
					            <div class="adTextWrap">
					              <p class="title"><ad_title_text:1 /></p>
					              <p class="desc"><ad_desc:1 /> </p>
					              <span class="sepr"> | </span>
					              <span class="url"><ad_url_text:1 /></span>
					            </div>
					          </a>
					        </li>
					      </if:ad_present1>
					      <if:ad_present2> 
					        <li>
					          <a href="<ad_href_url:2 />" target="_blank" class="list clearfix" >
					            <div class="num"><span>2</span></div>
					            <div class="adTextWrap">
					              <p class="title"><ad_title_text:2 /></p>
	  				              <p class="desc"><ad_desc:2 /> </p>
	  				              <span class="sepr"> | </span>
	  				              <span class="url"><ad_url_text:2 /></span>
					            </div>
					          </a>
					        </li>
					      </if:ad_present2>
					      <if:ad_present3>
					        <li>
					          <a href="<ad_href_url:3 />" target="_blank" class="list clearfix">
					            <div class="num"><span>3</span></div>
					            <div class="adTextWrap">
					              <p class="title"><ad_title_text:3 /></p>
	  				              <p class="desc"><ad_desc:3 /> </p>
	  				              <span class="sepr"> | </span>
	  				              <span class="url"><ad_url_text:3 /></span>
					            </div>
					          </a>
					        </li>
					      </if:ad_present3>
					    </ul>
				  	</div>
					</stl_body>
				</textarea>
			</div>
		</div>
		





	</div><!--end main clearfix-->
<div class="textCred">Developed by <a href="mailto:dmuidevs@media.net">DM UI Devs</a></div>
	
	<script type="text/javascript" src="scripts/jquery.js"></script>
	<script type="text/javascript">
		$(document).ready(function(){
			//desktop click function
			$("#deskLink").click(function(){
				$("#landscapeMob").css("display","none");
				$("#portraitMob").css("display","none");
				$("#landscapeTab").css("display","none");
				$("#portraitTab").css("display","none");
				$("#serpFrame").css("width","100%");
				$("#serpFrame").css("height","1000px");
			});
			//mobile click function
			$("#mobLink").click(function(){
				$("#landscapeMob").css("display","inline");
				$("#portraitMob").css("display","inline");
				$("#landscapeTab").css("display","none");
				$("#portraitTab").css("display","none");
				$("#serpFrame").css("width","320px");
				$("#serpFrame").css("height","480px");
			});
			//tablet click function
			$("#tabLink").click(function(){
				$("#landscapeMob").css("display","none");
				$("#portraitMob").css("display","none");
				$("#landscapeTab").css("display","inline");
				$("#portraitTab").css("display","inline");
				$("#serpFrame").css("width","768px");
				$("#serpFrame").css("height","1024px");
			});
			//mobile orientation
			$("#landscapeMob").click(function(){
				$("#serpFrame").css("width","480px");
				$("#serpFrame").css("height","320px");
			});

			$("#portraitMob").click(function(){
				$("#serpFrame").css("width","320px");
				$("#serpFrame").css("height","480px");
			});

			//tablet orientation
			$("#landscapeTab").click(function(){
				$("#serpFrame").css("width","1024px");
				$("#serpFrame").css("height","768px");
			});

			$("#portraitTab").click(function(){
				$("#serpFrame").css("width","768px");
				$("#serpFrame").css("height","1024px");
			});

			$('.settingsTab').click(function(){
				
				// $('.settingsTab i').toggleClass("icon-circle-arrow-left");
				$(this).toggleClass("openSettings");
				$('.headerLeft').toggleClass("headerLeftOpen");
				$('.headerRight').toggleClass("headerRightOpen");
		    	$('.iframeOuter').toggleClass("iframeOuterOpen");
		    	$('.midPanel').toggleClass("midPanelOpen");
		    	$('.innerMid').toggleClass("innerMidOpen");
		    	$('.iframeRight ul').toggleClass("ulOpen");
		    	
		    });

		    /*jQuery*/

		    $(function(){
		    	var ink, d, x, y;
		    	$(".accordion-section-title").click(function(e){
		        if($(this).find(".ink").length === 0){
		            $(this).prepend("<span class='ink'></span>");
		        }
		             
		        ink = $(this).find(".ink");
		        ink.removeClass("animate");
		         
		        if(!ink.height() && !ink.width()){
		            d = Math.max($(this).outerWidth(), $(this).outerHeight());
		            ink.css({height: d, width: d});
		        }
		         
		        x = e.pageX - $(this).offset().left - ink.width()/2;
		        y = e.pageY - $(this).offset().top - ink.height()/2;
		         
		        ink.css({top: y+'px', left: x+'px'}).addClass("animate");
		    });
		    });
		});
	</script>
	
	<script type="text/javascript" src="scripts/script.js"></script>
	<script type="text/javascript" src="jscolor/jscolor.js"></script>
	<script type="text/javascript" src="scripts/accordion.js"></script>
	<script type="text/javascript" src="scripts/classie.js"></script>
	<script type="text/javascript" src="scripts/TweenMax.min.js"></script>
	<script type="text/javascript" src="scripts/jss.min.js"></script>
	<script type="text/javascript" src="scripts/helper.js"></script>
	<script type="text/javascript" src="scripts/overlay.js"></script>
	
	<!--zero clipboard script-->
    <script src="zcb/jquery.zclip.js"></script>
</body>
</html>