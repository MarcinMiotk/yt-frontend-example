module Reports {

    export class ReportProviderFlat implements ReportProvider {

        get(company:String):Report {
            return new Report("Flat report for "+company);
        }
    }
}