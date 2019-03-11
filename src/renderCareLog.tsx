import * as React from "react";
import ReactPDF from "@react-pdf/renderer";

import CareLog, { Props } from "./CareLog";

function renderCareLog(props: Props) {
  return ReactPDF.renderToStream(<CareLog {...props} />);
}

export default renderCareLog;
