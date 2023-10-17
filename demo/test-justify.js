var PDFDocument = require('../');
var tiger = require('./tiger');
var fs = require('fs');

// Create a new PDFDocument
var doc = new PDFDocument();

doc.pipe(fs.createWriteStream('out-justify.pdf'));

// Set some meta data
doc.info['Title'] = 'Test Document';

doc.info['Author'] = 'Devon Govett';

// Register a font name for use later
doc.registerFont('Palatino', 'fonts/PalatinoBold.ttf');

// Set the font, draw some text, and embed an image
/* doc
  .font('Palatino')
  .fontSize(25)
  .text('Some text with an embedded font!', 100, 100)
  .fontSize(18); */

var loremIpsum = '                    This legal document, herein referred to as the "Agreement," outlines the terms and conditions governing the relationship and obligations between the parties involved. This Agreement is entered into on [Date] by and between [Party A], hereinafter referred to as the "Party A," and [Party B], hereinafter referred to as the "Party B." The parties hereby agree to adhere to the terms and conditions set forth in this Agreement to ensure a mutually beneficial and lawful association.';

// Draw some text wrapped to 412 points wide
doc
  .font('Helvetica', 14)
  .text('justified', {
    width: 400,
    align: 'left',
    underline: true,
    bold: true
  })
  .font('Helvetica', 10)
  .text(loremIpsum, {
    width: 400,
    align: 'justify',
  })
  .moveDown();

doc
    .font('Helvetica', 14)
    .text('left', {
    width: 400,
    align: 'left',
    underline: true,
    bold: true
    })
    .font('Helvetica', 10)
  .text(loremIpsum, {
    width: 400,
    align: 'left',
  })
  .moveDown();

doc
    .font('Helvetica', 14)
    .text('center', {
    width: 400,
    align: 'left',
    underline: true,
    bold: true
    })
    .font('Helvetica', 10)
  .text(loremIpsum, {
    width: 400,
    align: 'center',
  })
  .moveDown();

doc
    .font('Helvetica', 14)
    .text('right', {
    width: 400,
    align: 'left',
    underline: true,
    bold: true
    })
    .font('Helvetica', 10)
  .text(loremIpsum, {
    width: 400,
    align: 'right',
  })
  .moveDown();

doc.end();
