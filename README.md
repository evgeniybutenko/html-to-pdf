# html-to-pdf
Alternative solution for PDF document generation.

Node library [Puppeteer](https://github.com/puppeteer/puppeteer) provides a high-level API to control Chrome or Chromium over the DevTools Protocol which allows to do programatically most things that you can do manually in the browser. In this case - printing to PDF.

Thanks to deep processing and rendering external libraries like Bootstrap or fonts from Google Fonts can be imported and used. Puppeteer will print to PDF only final version, after all rendering and code running.

## HTML template
Every HTML file can be printed, but specific styles should be applied to save A4 scaling while printing. Check **.page** style in **print.html** template file.

## PDF generation
To generate PDF document run command:
````
node index.js
````
