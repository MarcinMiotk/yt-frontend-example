import { Report } from "./Report"
import { ReportProvider } from "./ReportProvider"
import { ReportProviderLocalFile } from "./ReportProviderLocalFile"

jQuery(function () {
    var provider:ReportProvider = new ReportProviderLocalFile();
    console.log("ABC");

    provider.get("MaMi", (r:Report) => {
        $("div.comment").text(r.title+" AND "+r.link);
    });
})