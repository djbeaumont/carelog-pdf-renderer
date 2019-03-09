import * as Koa from 'koa';
import * as React from 'react';
import ReactPDF from '@react-pdf/renderer';

import MyDocument from './MyDocument';

const app = new Koa();

app.use(async (ctx: any) => {
  const buffer = ReactPDF.renderToStream(React.createElement(MyDocument, null));
  ctx.type = 'application/pdf';
  ctx.attachment('carelog.pdf');
  ctx.body = buffer;
});

app.listen(3000);
