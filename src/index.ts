import Koa from 'koa';
import Router from 'koa-router';
import fetch from 'node-fetch';
import qs from 'qs';

import { Visit } from './types/Visit';
import { renderCareLog, renderCriticalDetails } from './renderPdf';

const router = new Router();

router.get('/care-log/download/pdf', async (ctx) => {
  const query = ctx.request.query;
  const modifiedQuery = {
    ...query,
  };

  const response = await fetch(`http://localhost:8000/care-log?${qs.stringify(modifiedQuery)}`);
  if (response.status !== 200) {
    throw new Error(`Unexpected status code ${response.status}`)
  }

  const visits: Visit[] = await response.json();

  const buffer = renderCareLog({ visits });
  ctx.type = "application/pdf";
  if (process.env.NODE_ENV === 'production') {
    ctx.attachment("carelog.pdf");
  }
  ctx.body = buffer;
});

router.get('/resident/1234/critical-details', async (ctx) => {
  const buffer = renderCriticalDetails();
  ctx.type = 'application/pdf';
  if (process.env.NODE_ENV === 'production') {
    ctx.attachment("carelog.pdf");
  }
  ctx.body = buffer;
});

router.get('/status', ctx => {
  ctx.body = { alive: true };
})

const app = new Koa();
app.use(router.routes());
app.listen(3000);
