import { createCanvas, loadImage } from 'canvas';
import { jsPDF } from "jspdf";

var doc = new jsPDF();
var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();

// Load the image using canvas library
loadImage('./public/images/email-banner.png').then((image) => {
    // Create a canvas to draw the image
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0);

    // Convert canvas to data URL
    const imgData = canvas.toDataURL('image/png');

    // Add image to PDF
    doc.addImage(imgData, "PNG", 10, 10, pageWidth - 18, 60);

    // Continue with the rest of the PDF content
    doc.setFontSize(35);
    doc.text("Lapangan berhasil dipesan!", 15, 100, { align: 'left' });

    doc.setFontSize(16);
    doc.text("Nomor Lapangan", 15, 121, { align: 'left' });
    doc.text(": 5", 70, 121, { align: 'left' });

    doc.text("Durasi", 15, 133, { align: 'left' });
    doc.text(": 2 jam", 70, 133, { align: 'left' });

    doc.text("Waktu", 15, 146, { align: 'left' });
    doc.text(": 17.00 - 19.00 WIB", 70, 146, { align: 'left' });

    doc.text("Tempat", 15, 159, { align: 'left' });
    doc.text(": GOR Tunas Sporty", 70, 159, { align: 'left' });

    doc.setLineWidth(0.6);
    doc.setDrawColor(238, 238, 238);
    doc.line(15, 175, 190, 175);

    doc.text("Aturan lapangan:", 15, 190);

    doc.setFontSize(16);
    doc.setFillColor(215, 215, 215);
    doc.circle(19, 205, 4, 'F');
    doc.text("1", 17.5, 207);
    doc.setFontSize(12);
    doc.text("Dilarang merokok di dalam area lapangan", 26, 204, { maxWidth: 50 });

    doc.setFontSize(16);
    doc.setFillColor(215, 215, 215);
    doc.circle(90, 205, 4, 'F');
    doc.text("2", 88.5, 207);
    doc.setFontSize(12);
    doc.text("Dilarang meludah", 97, 206, { maxWidth: 50 });

    doc.setFontSize(16);
    doc.setFillColor(215, 215, 215);
    doc.circle(143, 205, 4, 'F');
    doc.text("3", 141.5, 207);
    doc.setFontSize(12);
    doc.text("Buang sampah pada tempatnya", 150, 204, { maxWidth: 50 });

    doc.setLineWidth(0.6);
    doc.setDrawColor(238, 238, 238);
    doc.line(15, 220, 190, 220);

    doc.setFontSize(11);
    doc.setTextColor(118, 118, 118);
    doc.text("Pemesanan lapangan dapat dilakukan secara online melalui website tunas-sporty.id", 15, 229, { align: 'left' });
    doc.text("Lapangan yang sudah dipesan tidak dapat di-refund dalam bentuk apapun.", 15, 236, { align: 'left' });
    doc.text("Disarankan untuk datang tepat waktu.", 15, 243, { align: 'left' });

    doc.text("GOR Tunas Sporty  |  Jl. Aster Indah 4, RT.015/RW.017  |  +62 857-7200-5763", pageWidth / 2, 270, { align: 'center' });

    doc.setFillColor(73, 222, 28);
    doc.rect(0, 280, pageWidth, 280, 'F');

    // Save the PDF to a file
    doc.save('Receipt.pdf');
}).catch((err) => {
    console.error('Failed to load image', err);
});
