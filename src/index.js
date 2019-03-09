const Koa = require("koa");
const React = require('react');
const ReactPDF = require('@react-pdf/renderer');
const { Page, Text, View, Document, StyleSheet } = require('@react-pdf/renderer');

const app = new Koa();

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

var MyDocument = function MyDocument() {
  return React.createElement(Document, null, React.createElement(Page, {
    size: "A4",
    style: styles.page
  }, React.createElement(View, {
    style: styles.section
  }, React.createElement(Text, null, "Section #1")), React.createElement(View, {
    style: styles.section
  }, React.createElement(Text, null, "Section #2"))));
};

app.use(async ctx => {
  // ctx.body = "Hello World";
  const buffer = ReactPDF.renderToStream(
    React.createElement(MyDocument, null)
  );

  ctx.type = 'application/pdf';
  ctx.attachment('carelog.pdf');
  ctx.body = buffer;
});

app.listen(3000);
