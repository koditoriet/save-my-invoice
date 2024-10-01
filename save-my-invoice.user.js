// ==UserScript==
// @name             Save my invoice!
// @description      Disables non-billable fields in Fieldglass to avoid reporting accidents.
// @match            https://www.fieldglass.net/time_sheet_form.do*
// @version          0.1
// ==/UserScript==

let es = document.querySelectorAll(".nonBillableRow + tr td input");
for (let e of es) {
  e.disabled = true;
  e.placeholder = "N/A";
}
