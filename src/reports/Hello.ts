import ReportProviderPretty = Reports.ReportProviderPretty;
import ReportProvider = Reports.ReportProvider;

jQuery(function ($) {
    let provider:ReportProvider = new ReportProviderPretty();
    console.log("Reporting: "+provider.get("MaMi A").title);
    $("div.comment").text("This is content inserted by jQuery: "+provider.get("MaMi A").title.toString());
})
