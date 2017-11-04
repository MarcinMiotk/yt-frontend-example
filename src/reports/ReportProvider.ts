module Reports {
    export interface ReportProvider {
        get(company:String):Report;
    }
}