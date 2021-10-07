<!DOCTYPE html>
<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
echo "Se ha Registrado.<br>";

            $numeroAleatorio=rand(1,1000);  
            echo $numeroAleatorio;
?>
<html>

<head>

    <title></title>

  
   <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    
</head>

<body>

</body>

</html>  
<script type="text/javascript">
var xhr = new XMLHttpRequest;
        $(document).ready(function () {

                var webserUrl = "https://www.dataaccess.com/webservicesserver/NumberConversion.wso";
                var numero = '<?=$numeroAleatorio?>';
                var soapRequest =
'<?xml version="1.0" encoding="utf-8"?> \
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
  <soap:Body>\
    <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">\
      <ubiNum>'+numero+'</ubiNum>\
    </NumberToWords>\
  </soap:Body>\
</soap:Envelope>';

                $.ajax({
                    type: "POST",
                    url: webserUrl,
                    contentType: "text/xml",
                    dataType: "xml",
                    data: soapRequest,
                    headers: {
                    'Access-Control-Allow-Origin': '*'
                    },
                  success: function (xml){ var letra = $(xml).find("m:").first('NumberToWordsResult').text(); alert(letra); } });





            });

    




    </script>
