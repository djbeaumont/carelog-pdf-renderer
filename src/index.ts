import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as React from 'react';
import ReactPDF from '@react-pdf/renderer';

import CareLog from './CareLog';

const router = new Router();

router.get('/care-log/download/pdf', ctx => {
  const buffer = ReactPDF.renderToStream(React.createElement(CareLog, null));
  ctx.type = "application/pdf";
  ctx.attachment("carelog.pdf");
  ctx.body = buffer;
});

router.get('/status', ctx => {
  ctx.body = { alive: true };
})


const app = new Koa();
app.use(router.routes());
app.listen(3000);
