
function checkConnection() {
    var networkState = navigator.connection.type;
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
}

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    checkConnection();
    // Information telephone //
    console.log(device.model);
    console.log(device.platform);
    console.log(device.version);
    console.log(device.uuid);

    // Langue //
    navigator.globalization.getPreferredLanguage(
    function language(language) {
        alert(' Modele : '+ device.model + '\n Syst Exploit : '+ device.platform + '\n Version : ' + device.version + '\n UUID : ' + device.uuid + '\n Language : ' + language.value);
    },
    function language() {
        console.log('Error getting language\n');
    }
    );
    // Niveau de batterie //
    window.addEventListener("batterystatus", onBatteryStatus, false);
    function onBatteryStatus(status) {
        console.log("Batterie :" + status.level);
    }

    // niveau batterie faible // 
    window.addEventListener("batterycritical", onBatteryCritical, false);
    function onBatteryCritical(status) {
        alert("Niveau de batterie faible ! " + status.level + "%\nRechargez le !");
    }

}
