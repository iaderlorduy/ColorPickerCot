
$(document).ready(function () {	
    $('.Outer').live("mousedown", function () {
        setTimeout(function () {
            pintarCampo();
        }, 400);
    });
	setInterval('pintarCampo()',100);
    $('.DsColor .Value input').live("click", function (e) {
        //remueve el elemento <div> en caso de que exista     css('cursor','pointer');
        $(this).blur();
        crearColorPicker($(this));              
    });

    $('.DsColor .Value input').live("mouseover", function (e) {
        //remueve el elemento <div> en caso de que exista     
        //crearColorPicker($(this));
        $(this).css('cursor', 'pointer');
        $(this).blur();
    });	

    ///se ejcuta cuando se elije un color y este lo asigna al input correspondiente
    $('.DsColor .Value div div').live("click", function () {
        var str = "";
        var col = "";
        str = $(this).attr('colorInt');
        col = $(this).css('background-color');
        $('.DsColor .Value div').remove();
        $('.DsColor .Value input').val(str);
        $('.DsColor .Value input').css({ backgroundColor: col, color: 'transparent' });
    });	
	
	$('.DsColor .Value div #bar').live("click", function () {        
        $('.DsColor .Value div').remove();        
    });
	
	$('.DsColor .Value div #bar').live("mouseover", function () {        
        $(this).css('cursor', 'pointer');       
    });
	
	$('#colores').live('mouseout',function(){
	//alert("esto es una prueba");
	//$('#colores').fadeOut('slow');		
		$('.DsColor .Value div').live("click",function(){			
			$('#colores').remove();
			//return false;
		});
	});
	
		
    ///Crea la caja de colores 
    function crearColorPicker(selector) {
        $('.DsColor .Value div').remove();
        var nid = '#' + $(this).attr('id');
        var colorint = 0;
        var seleccionado = "";
        var colores = ["#FFDEAD"];
        var colorHex = "";

        var r = new Array("00", "33", "66", "99", "CC", "FF");
        var g = new Array("00", "33", "66", "99", "CC", "FF");
        var b = new Array("00", "33", "66", "99", "CC", "FF");
		
		//padding-left: 91%; padding-left:215px;  background-color:#fff;
        lista = '<div id="colores" style="border-bottom: none; width:28%; position:absolute; visibility:visible z-index:100;">';		
        lista += '<p style="border: thin solid #888; width:98%; height:1px; background-color:#ccc; text-align: right;margin: 0 0 8px 0px !important ;"><span id="bar">&#10006</span></p>'
		for (var i = 0; i < r.length; i++) {
            for (var j = 0; j < g.length; j++) {
                for (var k = 0; k < b.length; k++) {
                    colorHex = "#" + r[i] + g[j] + b[k];
                    //colorint = hex2rgb(colorHex);
                    lista += '<div colorInt = ' + colorHex + ' style="border: thin solid #888; display:inline-block; width:5%; height:10px; background-color:' + colorHex + '; color: transparent;"></div>';
                }
            }
        }
		/*for(var c = 0; c < 12; c++){
			lista += '<div colorInt = ' + colorint + ' style="border: thin solid #888; display:inline-block; width:8px; height:10px; background-color:' + colorHex + '; color:' + colorHex + ';"></div>';
		}*/
        lista += '</div>';
        $(lista).insertAfter($(selector));
    }
    
    ///Convierte un color de hexadecimal a su equivalente en rgb
    function hex2rgb(hexStr) {
        // note: hexStr debe ser #rrggbb
        var hex = parseInt(hexStr.substring(1), 16);
        var r = (hex & 0xff0000) >> 16;
        var g = (hex & 0x00ff00) >> 8;
        var b = hex & 0x0000ff;
        return (256 * 256 * r + 256 * g + b);
    }

    ///Convierte un color de entero a el correspondiente en hexadecimal
    function intToHex(i) {
        var hex = parseInt(i).toString(16);
        var res = hex;
        if (hex.length == 2) {
            res = "0000" + hex;
        }
        else if (hex.length == 4) {
            res = "00" + hex;
        }
        return res;
    }

    function validarHex(colhex) {
        colhex.length
    }

    function Mensaje_View() {
        $('#DataView_MessageBar').fadeIn("slow");
    }
});

///Se encarga de pintar el campo de texto con el color correspondiente.
function pintarCampo(){
  var nid = $(".DsColor .Value input");
  nid.attr('readonly', true);        
  //nid.attr('disabled', 'disabled'); 
  var col = $(nid).val();
  //var col = "#" + intToHex($(nid).val());
  $(nid).css({ backgroundColor: col, color: 'transparent' });
  
  $('table.DataView tr td.DsColor').each(function() {
	$(this).css({ backgroundColor: $(this).html(), color: 'transparent' });
  });
  
}
