import {ReportProvider} from "./ReportProvider";
import {Report} from "./Report";

export class ReportProviderLocalFile implements ReportProvider {

    get(company: String, callback: (n: Report) => void): void {
        callback(JSON.parse($("div.report").text()));
    }
}