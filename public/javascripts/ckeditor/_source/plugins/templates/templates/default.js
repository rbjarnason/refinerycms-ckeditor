﻿/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

// Register a templates definition set named "default".
CKEDITOR.addTemplates( 'default',
{
	// The name of sub folder which hold the shortcut preview images of the
	// templates.
	imagesPath : CKEDITOR.getUrl( CKEDITOR.plugins.getPath( 'templates' ) + 'templates/images/' ),

	// The templates definitions.
	templates :
		[
      {
        title: 'Náš tým - vlevo',
        image: 'template1.gif',
        description: 'Levá šablonka pro náš tým',
        html: '<div class="team">' +
              '<ul>' +
                '<li class="odd">' +
                  '<img src="/images/sandra.png" />' +
                  '<span class="name">Sandra Gligić</span><br />' +
                  '<span class=position>General Manager</span>' +
                  '<ul>' +
                    '<li>spolehlivost</li>' +
                    '<li>výkonnost</li>' +
                    '<li>coaching</li>' +
                  '</ul>' +
                  '<p>' +
                  'Sandra je naší spolehlivou a výkonnou manažerkou. Úspěšně koučuje celý Sunní tým už déle než dva roky. Za její manažerské schopnosti nejlépe hovoří perfektní fungování společnosti s pevným vnitřním řádem a pravidly, které však v ničem neubírají na pohodové a přátelské atmosféře, kterou Sany do celého týmu vnáší. Její optimismus, vycházející z přesvědčení o dobře odvedené práci, je všudypřítomný a dokáže motivovat a povzbudit každého zaměstnance k prvotřídnímu výkonu. I přes nával pracovních a manažerských povinností si umí najít dostatek času na své zaměstnance, kterým pomáhá udržet zdravého týmového ducha a udržovat tak vysoký sdandard jasně zářící společnosti.' +
                  '</p>' +
              '</li></ul></div>'

      },
      {
        title: 'Náš tým - vpravo',
        image: 'template1.gif',
        description: 'Pravá šablonka pro náš tým',
        html: '<div class="team">' +
              '<ul>' +
                '<li class="even">' +
                  '<img src="/images/sandra.png" />' +
                  '<span class="name">Sandra Gligić</span><br />' +
                  '<span class=position>General Manager</span>' +
                  '<ul>' +
                    '<li>spolehlivost</li>' +
                    '<li>výkonnost</li>' +
                    '<li>coaching</li>' +
                  '</ul>' +
                  '<p>' +
                  'Sandra je naší spolehlivou a výkonnou manažerkou. Úspěšně koučuje celý Sunní tým už déle než dva roky. Za její manažerské schopnosti nejlépe hovoří perfektní fungování společnosti s pevným vnitřním řádem a pravidly, které však v ničem neubírají na pohodové a přátelské atmosféře, kterou Sany do celého týmu vnáší. Její optimismus, vycházející z přesvědčení o dobře odvedené práci, je všudypřítomný a dokáže motivovat a povzbudit každého zaměstnance k prvotřídnímu výkonu. I přes nával pracovních a manažerských povinností si umí najít dostatek času na své zaměstnance, kterým pomáhá udržet zdravého týmového ducha a udržovat tak vysoký sdandard jasně zářící společnosti.' +
                  '</p>' +
                '</li></ul></div>'

      },
      {
        title: 'Služba',
        image: 'template1.gif',
        description: 'Jedna vzorová služba na rozcestník',
        html: '<div class="service">' +
              '<h2 class="title">Výkonová reklama</h2>' +
               '<br />' +
               '<div class="icon"></div>' +
               '<p class="text">Webové stránky jsou dnes již nezbytnou součástí marketingového mixu každé společnosti. Firemní web představuje elektronickou obdobu kamenné prodejny či obecně vysoce efektivní marketingově-komunikační kanál.Tvorba www stránek je nejčastěji realizovaným typem webu z našeho portfolia služeb webdesignu. Spočívá v navržení, implementaci a dodání webu designovaného na základě analýzy potřeb a cílů vaší společnosti.</p>' +
               '<p class="more"><a href="">více informací</a></p>' +
               '</div>'
      },
			{
				title: 'Image and Titles',
				image: 'template1.gif',
				description: 'One main image with a title and text that surround the image.',
				html:
					'<h3>' +
						'<img style="margin-right: 10px" height="100" width="100" align="left"/>' +
						'Type the title here'+
					'</h3>' +
					'<p>' +
						'Type the text here' +
					'</p>'
			},
			{
				title: 'Strange Template',
				image: 'template2.gif',
				description: 'A template that defines two colums, each one with a title, and some text.',
				html:
					'<table cellspacing="0" cellpadding="0" style="width:100%" border="0">' +
						'<tr>' +
							'<td style="width:50%">' +
								'<h3>Title 1</h3>' +
							'</td>' +
							'<td></td>' +
							'<td style="width:50%">' +
								'<h3>Title 2</h3>' +
							'</td>' +
						'</tr>' +
						'<tr>' +
							'<td>' +
								'Text 1' +
							'</td>' +
							'<td></td>' +
							'<td>' +
								'Text 2' +
							'</td>' +
						'</tr>' +
					'</table>' +
					'<p>' +
						'More text goes here.' +
					'</p>'
			},
			{
				title: 'Text and Table',
				image: 'template3.gif',
				description: 'A title with some text and a table.',
				html:
					'<div style="width: 80%">' +
						'<h3>' +
							'Title goes here' +
						'</h3>' +
						'<table style="width:150px;float: right" cellspacing="0" cellpadding="0" border="1">' +
							'<caption style="border:solid 1px black">' +
								'<strong>Table title</strong>' +
							'</caption>' +
							'</tr>' +
							'<tr>' +
								'<td>&nbsp;</td>' +
								'<td>&nbsp;</td>' +
								'<td>&nbsp;</td>' +
							'</tr>' +
							'<tr>' +
								'<td>&nbsp;</td>' +
								'<td>&nbsp;</td>' +
								'<td>&nbsp;</td>' +
							'</tr>' +
							'<tr>' +
								'<td>&nbsp;</td>' +
								'<td>&nbsp;</td>' +
								'<td>&nbsp;</td>' +
							'</tr>' +
						'</table>' +
						'<p>' +
							'Type the text here' +
						'</p>' +
					'</div>'
			}
		]
});
