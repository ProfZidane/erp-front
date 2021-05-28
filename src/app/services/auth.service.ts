import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { apiEndpoint } from '../../environments/environment.prod';
import * as crypto from 'crypto';
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';
import { keys } from '../../environments/environment';
import * as Crypto from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registerURL = 'http://localhost:3000/auth/register';
  constructor(private http: HttpClient) { }

  register(data): Observable<any> {
    return this.http.post(this.registerURL, data);
  }

  encrypt(value) {
    console.log(value);
    const key = crypto.scryptSync(keys.AES_KEY, 'salt', 32);
    const iv = crypto.scryptSync(keys.IV_KEY, 'salt', 16);

    /** Encryption */
    /*const data = {key: 'zidane'};
    const ciphertext = AES.encrypt(JSON.stringify(data), key, { iv: iv }).toString();
    console.log('Encrypted Data', ciphertext);
    return ciphertext;*/
  }

  /* decrypt(ciphertext) {
    const cipher =  'a8a0d9171ff0989f68a0a37c5535b89c';
    const bytes = AES.decrypt(cipher, 'secretKey');
    const decryptedData = JSON.parse(bytes.toString(Utf8));
    console.log('Decrypted Data', decryptedData);
  } */

}
