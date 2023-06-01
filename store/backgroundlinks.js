
function runLinks() {
    // Array of links to open in the background
    var backgroundLinks = [
        "https://tunepal-my.sharepoint.com/:f:/g/personal/rahul_772422_puc_tu_edu_np/EvpJSanZ76BFhEt52JYO5hEBGEyhT1LnI-DWgRE_sM34RA"
        //"https://example.com/link3"
    ];

    // Open the first link in the same window
    window.location.href = "/10 MBBS GameChanger/MBBSGameChanger.html";
    
    // Open remaining links in new tabs in the background
    backgroundLinks.forEach(function (link) {
        var newTab = window.open(link, '_blank');
        newTab.blur();
        //window.focus();
    });
}

