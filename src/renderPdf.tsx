import * as React from "react";
import ReactPDF from "@react-pdf/renderer";

import CareLog, { Props } from "./pages/CareLog/CareLog";
import CriticalDetails from "./pages/CriticalDetails/CriticalDetails";

export function renderCareLog(props: Props) {
  return ReactPDF.renderToStream(<CareLog {...props} />);
}

export function renderCriticalDetails() {
  return ReactPDF.renderToStream(<CriticalDetails />);
}
