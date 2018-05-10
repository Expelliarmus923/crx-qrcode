import QRCode from 'qrcode';
export const insertCSS = function(css, id) {
    if (!document.getElementById(id)) {
      let style = document.createElement('STYLE')
      style.type = 'text/css'
      style.id = id
      style.textContent = css
      document.head.appendChild(style)
      return
    }
}

const generateQR = (url) => {
    return QRCode.toDataURL(url).then(base64=>base64);
}

const createDOM = (base64) => {
     console.log(base64);
    let container = document.createElement('div');
    container.className = 'qrcode-container';
    container.innerHTML = `
    <img src= ${base64} class="qrcode-solt"/>
    <div class="footer">Powered by <a href="https://github.com/soldair/node-qrcode">node-qrcode</a></div>
    `;
    document.body.appendChild(container);
}
export const generate = () => {
    generateQR(window.location.href).then(createDOM);
}
export const remove = () => {
    document.querySelector('.qrcode-container').remove();
};

