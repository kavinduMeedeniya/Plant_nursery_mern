import fs from "fs";
import PDFDocument from "pdfkit";
import Item from "../model/itemModel.js";
import moment from "moment";

// Function to generate PDF report
export const generateReport = async (req, res) => {
  try {
    const items = await Item.find().select("-image"); // Exclude image field

    if (!items || items.length === 0) {
      return res.status(404).json({ message: "No items found." });
    }

    const doc = new PDFDocument();
    const filePath = `reports/items-report-${Date.now()}.pdf`;
    const stream = fs.createWriteStream(filePath);

    doc.pipe(stream);
    doc.fontSize(16).text("Item Sales Report", { align: "center" });
    doc.moveDown();

    items.forEach((item, index) => {
      doc
        .fontSize(12)
        .text(`Item ${index + 1}: ${item.name}`, { underline: true })
        .moveDown(0.3);

      doc.text(`Description: ${item.description}`);
      doc.text(`Price: $${item.price}`);
      doc.text(`Stock: ${item.stock}`);
      doc.text(`Sales: ${item.sales}`);
      doc.text(`Created At: ${moment(item.createdAt).format("YYYY-MM-DD HH:mm")}`);
      doc.text(`Updated At: ${moment(item.updatedAt).format("YYYY-MM-DD HH:mm")}`);
      doc.moveDown(1);
    });

    doc.end();

    stream.on("finish", () => {
      res.download(filePath, "items-report.pdf", (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ errorMessage: "Failed to download report" });
        }
      });
    });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
