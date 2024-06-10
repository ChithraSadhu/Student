import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core"

@Injectable()
export class appService{
    data :any;
    private http;
    
    constructor(http:HttpClient) {
        this.http = http
        
    }
    public loadData(){
         return this.http.get("http://localhost:5107/Student");
    }
    public add(name:string){
        return this.http.post("http://localhost:5107/Student",{name})
    }
    public delete(id:number){
        return this.http.delete("http://localhost:5107/Student?id="+id);
    }
}