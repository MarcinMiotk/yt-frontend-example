import {Report} from "./Report";

export interface ReportProvider {
    get(company: String, callback: (n: Report) => void): void;
}