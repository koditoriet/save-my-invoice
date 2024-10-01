// ==UserScript==
// @name             Save my invoice!
// @description      Disables non-billable fields in Fieldglass to avoid reporting accidents.
// @updateURL        https://raw.githubusercontent.com/koditoriet/save-my-invoice/main/save-my-invoice.user.js
// @downloadURL      https://raw.githubusercontent.com/koditoriet/save-my-invoice/main/save-my-invoice.user.js
// @match            https://www.fieldglass.net/time_sheet_form.do*
// @version          0.1
// ==/UserScript==

let es = document.querySelectorAll(".nonBillableRow + tr td input");
for (let e of es) {
  e.disabled = true;
  e.placeholder = "N/A";
}
