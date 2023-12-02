window.JSInteropExt = {};

window.JSInteropExt.saveAsFile = (filename, type, bytesBase64) => {

    if (navigator.msSaveBlob) {

        var data = window.atob(bytesBase64);

        var bytes = new Uint8Array(data.length);

        for (var i = 0; i < data.length; i++) {

            bytes[i] = data.charCodeAt(i);

        }

        var blob = new Blob([bytes.buffer], { type: type });

        navigator.msSaveBlob(blob, filename);

    }

    else {

        var link = document.createElement('a');

        link.download = filename;

        link.href = "data:" + type + ";base64," + bytesBase64;

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

    }

}

document.addEventListener('DOMContentLoaded', function () {
    const productsDropdown = document.querySelector('.Ul_li--hover');
    const productsMenu = productsDropdown.querySelector('ul');
  
    productsDropdown.addEventListener('click', () => {
      // Toggle the display property to show/hide the submenu
      productsMenu.style.display = productsMenu.style.display === 'none' ? 'block' : 'none';
    });
  });
  




