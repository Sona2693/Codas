
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  private url = 'https://api.github.com/search/users?q=';
  private url1 = 'https://api.github.com/users/';
  users: any;
  
  constructor(private http : Http) {
   }
 

   getUserData()
   {
     return this.http.get(this.url)
     
   }
 
   createUserData(user)
   {
    
    return this.http.get(this.url + user)
    
   }
   createDetails(username){
     return this.http.get(this.url1+username+"/repos")
   }

}

