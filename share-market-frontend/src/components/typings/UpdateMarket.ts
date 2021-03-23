import Dividend from "./Dividend";

export default interface UpdateMarket {
    GetUsers(): void;
    GetUser(id: string): void;
    SetCurrentPage(page: string):void;
    SendMail(email: string, list: Dividend[]):void;
    SetDividend(dividend: Dividend[]):void;
}