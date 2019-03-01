/**
 * Created by kc on 2019/1/22.
 */
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
import canvg from 'canvg'

export default {
  install(Vue, options) {
    Vue.prototype.getPdf = function (x) {
      var title = this.htmlTitle;
      html2Canvas(document.querySelector('#pdfDom'), {
        width: 589,
        // height:834,
        allowTaint: true,
        scale: 10
      }).then(function (canvas) {
          let contentWidth = canvas.width;
          let contentHeight = canvas.height;

          let pageHeight = contentWidth / 592 * 837;
          let leftHeight = contentHeight;

          let position = 0;
          let imgWidth = 592;
          let imgHeight = 592 / contentWidth * contentHeight;


          let pageData = canvas.toDataURL('image/jpeg', 1.0);

          let PDF = new JsPDF('', 'pt', 'a4');
          if (leftHeight < pageHeight) {
            PDF.addImage(pageData, 'JPEG', 0, 0, 592, 837)
          } else {
            while (leftHeight > 0) {
              console.log('imgheight' + imgHeight)
              PDF.addImage(pageData, 'JPEG', 0, position, 592, 837 * x);
              leftHeight -= pageHeight;
              position -= 837;
              if (leftHeight > 0) {
                PDF.addPage()
              }
            }
          }
          PDF.save(title + '.pdf');
          console.log(PDF.output("blob"))
        }
      );
      for (let i = 0; i < x; i++) {
        let page = '#page' + i;
        html2Canvas(document.querySelector(page), {
          width: 592,
          height: 837,
          allowTaint: true,
          scale: 10
        }).then(function (canvas) {
            let pageData = canvas.toDataURL('image/jpeg', 1.0);

            function dataURLtoBlob(dataurl) {
              var arr = dataurl.split(','),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]),
                n = bstr.length,
                u8arr = new Uint8Array(n);
              while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
              }
              return new Blob([u8arr], {type: mime});
            }
            var aLink = document.createElement('a');
            // var blob = base64Img2Blob(pageData); //new Blob([content]);
            var blob = dataURLtoBlob(pageData); //new Blob([content]);
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("click", false, false);//initEvent 不加后两个参数在FF下会报错
            aLink.download = 'cs.jpg';
            aLink.href = URL.createObjectURL(blob);
            aLink.dispatchEvent(evt);
          }
        );
      }
    }
  }
}

function svg2canvas() {
  // 图片

}




