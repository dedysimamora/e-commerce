# HACKWatch
## This App Built With Express and Mongoose
## how to run this APP


1. Make sure you installed

    * git
    * nodeJs
    * npm
    * mongodb

2. Create .env file containing your database credentials , you can check env template 

3. setup commands
    * git clone https://github.com/dedysimamora/e-commerce.git
    * cd ne-commerce
    * npm install

4. running the app

    * Run `npm run start` to start the server.

    * Run `live-server --host=localhost` to start the client


### Routes List


| Route | HTTP | Headers(s) | Body | Description | Response Success | Response Error |
| ----- | ---- | ---------- | ---- | ----------- | ---------------- | -------------- |
| `/user/login` | **POST** | none | email: String (**required**),  password: String (**required**) | Log in as registered user | Show response  in `object` : { token: String, email:String} with status code 200 | Status code 500 |
| `/user/register` | **POST** | none | first_name:string(**required**), last_name:string(**required**),email: String (**required**),  password: String (**required**), addres: String (**required**), PhoneNumber: String (**required**) | Register as new user | Response an `object` {_id, first_name, last_name,email,password(hash), addres, phoneNumber} With StatusCode 201 | Status code 500 |
| `/user/googlelogin` | **POST** | none       | tokenId | Log in with google account | Show response  in `object` : { token: String, email:String} with status code 200 | Status code 500 |
| `/product` | **GET** | Token | none | Find All product | Response an`array of objects` {product} | Status code 500 |
| `/product/[id]` | **GET** | Token | none | Find one product | Response an `object` {product} | Status code 500 |
| `product/create` | **POST** | Token | name:string(**required**), price:string(**required**),photo:string(**required**),category:string(**required**), qty:number(**required**), | Add product  | Response an `object` {product} | Status code 500 |
| `product/[id]` | **DELETE** | Token | none | Delete product  | Response status 200 | Status code 500 |
| `product/[id]` | **PUT** | Token | name:string(**required**), price:string(**required**),photo:string(**required**),category:string(**required**), qty:number(**required**), | update product  | Response an `object` {product} | Status code 500 |
