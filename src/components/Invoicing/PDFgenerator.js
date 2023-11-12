import React from "react";
import jsPDF from 'jspdf';


function PDFgenerator() {

      /**
       * Note this function have found the correct dimensions by trial and error by tweaking width and windowwith
       * This will not be a dynamic function that if you want to change the layout of the invoice
       * Had problems finding a good solution
       * It is however vectorized
       */
      const exportToPDF = () => {
         
        const report = new jsPDF({
          orientation : "p",
          unit: 'mm',
          format: [210, 297]
        } );

        const elementHtml = document.querySelector('#report')

        report.html(elementHtml, {
          callback : (report) => {
            report.save('output.pdf')
          },
          margin: [0, 0, 0, 0],
          x : 0,
          y : 0, 
          width: 280,
          windowWidth: 1060
        })

      }
    
    return (
        <div className="m-4">
            <button onClick={exportToPDF} type="button" className="btn btn-outline-danger"><span className="bi bi-file-pdf text-danger"></span> Export PDF</button>
        </div>
      );
}


export default PDFgenerator