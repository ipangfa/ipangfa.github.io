	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
;bookConfig.barColor="0x242424";bookConfig.barBgUrl="../files/extfiles/barBgUrl.jpg";bookConfig.toobarClear="No";bookConfig.showToolBarBevel="Hide";bookConfig.appLogoIcon="../files/extfiles/appLogoIcon.jpg";bookConfig.homeButtonVisible="Hide";bookConfig.btnHomeURLTarget="Self";bookConfig.aboutButtonVisible="Hide";bookConfig.fullButtonVisible="Show";bookConfig.tryFullScreenInteractive="No";bookConfig.helpButtonVisible="Show";bookConfig.helpContentFileURL="../files/extfiles/helpContentFileURL.png";bookConfig.enablePrint="Yes";bookConfig.printCurrentPageAsDefault="No";bookConfig.enableFlipSound="Enable";bookConfig.bacgroundSoundLoop="-1";bookConfig.bgSoundVol="-1";bookConfig.flipSoundVol="-1";bookConfig.enableZoomIn="Yes";bookConfig.showSinglePageFirst="No";bookConfig.minZoomWidth="700";bookConfig.maxZoomWidth="1400";bookConfig.zoomPageDoublePageMode="Yes";bookConfig.searchButtonVisible="Show";bookConfig.searchHightlightColor="0xffff00";bookConfig.searchMinialLen="3";bookConfig.isLogicAnd="No";bookConfig.shareWithEmailButtonVisible="Show";bookConfig.btnShareWithEmailBody="{link}";bookConfig.socialShareButtonVisible="Show";bookConfig.languageSetting="English";bookConfig.langaugeChangeable="Yes";bookConfig.enableAutoPlay="Yes";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.autoPlayAutoStart="No";bookConfig.drawAnnotationsButtonVisible="Disable";bookConfig.bookmarkButtonVisible="Hide";bookConfig.enablePageBack="Show";bookConfig.enablePageForward="Show";bookConfig.selectionTextVisible="Enable";bookConfig.UIBtnIconColor="0xA0A0A0";bookConfig.bigNavButtonColor="0xC0C0C0";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="0xffffff";bookConfig.hotSpotWidthType="Normal";bookConfig.backgroundAlpha="1";bookConfig.moveFlipBookToCenter="Yes";bookConfig.flipBookHelpFlipEnable="True";bookConfig.enableMouseDownToFlip="True";bookConfig.showMouseTraceAtFirstPage="True";bookConfig.openThumbInit="False";bookConfig.tmplPreloader="Default";bookConfig.restorePageVisible="No";bookConfig.flashMenuSetting="Default";bookConfig.UIBtnFontColor="0xC6C6C6";bookConfig.UIBtnFont="Tahoma";bookConfig.UIBtnPageIndexFontColor="0x000000";bookConfig.normalTextColor="0xffffff";bookConfig.hightLightColor="0xA4B3F3";bookConfig.bgBeginColor="0xE2E2E2";bookConfig.bgEndColor="0xE2E2E2";bookConfig.bgMRotation="90";bookConfig.mainbgImgPosition="Scale to fit";bookConfig.mainColor="0x494949";bookConfig.thumbSelectedColor="0xFF8000";bookConfig.pageBackgroundColor="0xE8E8E8";bookConfig.pageWidth="595.5";bookConfig.pageHeight="842.2499787";bookConfig.leftPageShadowWidth="90";bookConfig.rightPageShadowWidth="55";bookConfig.pageShadowAlpha="0.6";bookConfig.coverPageShowShadow="Show";bookConfig.isRightToLeft="No";bookConfig.isTheBookOpen="No";bookConfig.isHardCover="No";bookConfig.coverBorderWidth="8";bookConfig.coverBorderColor="0x572F0D";bookConfig.showOutterCoverBoarder="Yes";bookConfig.hardCoverBorderRounded="8";bookConfig.hardCoverSpinShow="Show";bookConfig.enableFastFlip="Enable";bookConfig.enableShowingFastFlipPageIndexIcon="Show";bookConfig.pageFlippingTime="0.6";bookConfig.mouseWheelTurnPage="Yes";bookConfig.userSmallMode="Yes";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.flipBookMarginWidth="20";bookConfig.flipBookMarginHeight="10";bookConfig.linkOverColor="0x800080";bookConfig.linkOverColorAlpha="0.2";bookConfig.linkOpenedWindow="Blank";bookConfig.linkEnableWhenZoom="Enable";bookConfig.totalPageCount=4;bookConfig.largePageWidth=900;bookConfig.largePageHeight=1273;bookConfig.mainColor="#004080";bookConfig.FlipStyle="flip";bookConfig.showDoublePage="Yes";bookConfig.BookMarkButtonVisible="false";bookConfig.bookTitle="pasca observasi pdf flip";bookConfig.LinkDownColor="0x800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.normalPath="../files/mobile/";bookConfig.largePath="../files/mobile/";bookConfig.productName="Flip PDF Corporate Edition";bookConfig.homePage="http://www.flipbuilder.com";var language = [{ language : "English",btnFirstPage:"First",btnNextPage:"Next Page",btnLastPage:"Last",btnPrePage:"Previous Page",btnDownload:"Download",btnPrint:"Print",btnSearch:"Search",btnClearSearch:"Clear",btnBookMark:"Table of content",btnHelp:"Help",btnFullScreen:"Enable FullScreen",btnDisableFullScreen:"Disable FullScreen",btnSoundOn:"Sound On",btnSoundOff:"Sound Off",btnShareEmail:"Share",btnSocialShare:"Social Share",btnZoomIn:"Zoom In",btnZoomOut:"Zoom Out",btnDragToMove:"Drag move mode",btnAutoFlip:"Auto Flip",btnStopAutoFlip:"Stop Auto Flip",btnGoToHome:"Return Home",frmHelpCaption:"Help",frmHelpTip1:"Double click to zoom in or out",frmHelpTip2:"Drag the page corner to view",frmPrintCaption:"Print",frmPrintBtnCaption:"Print",frmPrintPrintAll:"Print All Pages",frmPrintPrintCurrentPage:"Print Current Page",frmPrintPrintRange:"Print Range",frmPrintExampleCaption:"Example: 2,5,8-26",frmPrintPreparePage:"Preparing Page:",frmPrintPrintFailed:"Print Failed:",pnlSearchInputInvalid:"(Minimal request length is 3 symbols)",loginCaption:"Login",loginInvalidPassword:"Not a valid password!",loginPasswordLabel:"Password:",loginBtnLogin:"Login",loginBtnCancel:"Cancel",btnThumb:"Thumbnails",lblPages:"Pages:",lblPagesFound:"Pages:",lblPageIndex:"Page",btnAbout:"About",frnAboutCaption:"About & Contact",btnSinglePage:"Single Page",btnDoublePage:"Double Page",btnSwicthLanguage:"Switch Language",tipChangeLanguage:"Please select a language below...",btnMoreOptionsLeft:"More Options",btnMoreOptionsRight:"More Options",btnFit:"Fit Window",smallModeCaption:"Click to view in fullscreen",btnAddAnnotation:"Add Annotations",btnAnnotation:"Annotations",FlipPageEditor_SaveAndExit:"Save and Exit",FlipPageEditor_Exit:"Exit",DrawToolWindow_Redo:"Redo",DrawToolWindow_Undo:"Undo",DrawToolWindow_Clear:"Clear",DrawToolWindow_Brush:"Brush",DrawToolWindow_Width:"Width",DrawToolWindow_Alpha:"Alpha",DrawToolWindow_Color:"Color",DrawToolWindow_Eraser:"Eraser",DrawToolWindow_Rectangular:"Rectangular",DrawToolWindow_Ellipse:"Ellipse",TStuff_BorderWidth:"Border Width",TStuff_BorderAlph:"Border Alpha",TStuff_BorderColor:"Border Color",DrawToolWindow_TextNote:"Text Note",AnnotMark:"Book Mark",lastpagebtnHelp:"Last page",firstpagebtnHelp:"First page",homebtnHelp:"Return to home page",aboubtnHelp:"About",screenbtnHelp:"Open this application in full-screen mode",helpbtnHelp:"Show help",searchbtnHelp:"Search from pages",pagesbtnHelp:"Take a look at the thumbnail of this brochure",bookmarkbtnHelp:"Open Bookmark",AnnotmarkbtnHelp:"Open Table of content",printbtnHelp:"Print the brochure",soundbtnHelp:"Turn on or off the sound",sharebtnHelp:"Send Email to",socialSharebtnHelp:"Social Share",zoominbtnHelp:"Zoom in",downloadbtnHelp:"Downdlaod this brochure",pagemodlebtnHelp:"Switch Single and double page mode",languagebtnHelp:"Switch Lauguage",annotationbtnHelp:"Add Annotation",addbookmarkbtnHelp:"Add Bookmark",removebookmarkbtnHelp:"Remove BookMark",updatebookmarkbtnHelp:"Update Bookmark",btnShoppingCart:"Shopping Cart",Help_ShoppingCartbtn:"Shopping Cart",Help_btnNextPage:"Next page",Help_btnPrePage:"Previous page",Help_btnAutoFlip:"Auto filp",Help_StopAutoFlip:"Stop atuo filp",btnaddbookmark:"Add",btndeletebookmark:"Delete",btnupdatebookmark:"Update",frmyourbookmarks:"Your bookmarks",frmitems:"items",DownloadFullPublication:"Full Publication",DownloadCurrentPage:"Current Page",DownloadAttachedFiles:"Attached Files",lblLink:"Link",btnCopy:"Copy Button",restorePage:"Would you like to restore previous session",tmpl_Backgoundsoundon:"Background Sound On",tmpl_Backgoundsoundoff:"Background Sound Off",tmpl_Flipsoundon:"Flip Sound On",tmpl_Flipsoundoff:"Flip Sound Off",Help_PageIndex:"The current page number",tmpl_PrintPageRanges:"PAGE RANGES",tmpl_PrintPreview:"PREVIEW",btnSelection:"Select Text",loginNameLabel:"Name:",btnGotoPage:"Go",btnSettings:"Setting",soundSettingTitle:"Sound Setting",closeFlipSound:"Close Flip Sound",closeBackgroundSound:"Close Backgorund Sound",frmShareCaption:"Share",frmShareLinkLabel:"Link:",frmShareBtnCopy:"Copy",frmShareItemsGroupCaption:"Social Share",TAnnoActionPropertyStuff_GotoPage:"Go to page",btnPageBack:"Back",btnPageForward:"Forward",SelectTextCopy:"Copy Text",selectCopyButton:"Copy"}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};bookConfig.thumbPath="../files/thumb/";; var pageEditor = [[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoMovie",alpha:"1",moviePlayTriggerEvt:"none",movieStopTriggerEvt:"EVT_PageOffView",replayWhenPlayEventTrigger:"0",location:{tannoName:"movie1",x:"-0.005037783375314861",y:"0.30394776666558315",width:"1.0080604534005038",height:"0.436806184985422",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"8388736",hintShapeAlpha:"0.2",text:{}},shadow:{hasDropShadow:"false",shadowDistance:"4",shadowAngle:"270",shadowColor:"0",shadowAlpha:"0.6",shadowBlurX:"4",shadowBlurY:"4"},cpName:"fbp",className:"com.mobiano.flipbook.movie.TAnnoMovie",url:"files/pageConfig/2024-11-21_12-47-53.mp4",skinColor:"10066329",skin:"Skin 1",sizeBool:"false",previewUrl:{},isShowTimer:"false"}],[],[],[],[]];
	
	if(bookConfig.languageSetting&&bookConfig.languageSetting!=""){
		bookConfig.language=bookConfig.languageSetting.split(";")[0];
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}
