import { animal } from "./animal";
export class Ave implements animal {
    ehOvipero(): boolean {
        return true;
    }
    ehLactante(): boolean {
        throw new Error("Method not implemented.");
    }

}