const { createElement } = require("react");
const { renderToString } = require("react-dom/server");
const { Happy } = require("react-happytext");
const express = require("express");

const app = express();
const port = 3000;

app.get("*", (req, res) => {
  const html = renderToString(createElement(Happy));

  res.send(`
    <!DOCTYPE html>
    <html lang="en" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title></title>
      </head>
      <body>
        ${html}

        <style>
          span {
            font-size: 40px;
            display: flex;
            justify-content: center;
          }
        </style>
      </body>
    </html>
    `);
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
