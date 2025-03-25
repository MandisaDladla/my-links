function copyToClipboard() {
    var copyText = document.getElementById("shareLink");
    copyText.select();
    document.execCommand("copy");
    alert("Link copied to clipboard!");
}