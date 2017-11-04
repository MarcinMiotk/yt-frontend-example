module Reports {

    export class ReportProviderPretty implements ReportProvider {

        get(company:String):Report {
            return new Report("Pretty report for "+company);
        }
    }
}