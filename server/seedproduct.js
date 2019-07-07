const Product = require('../server/models/Product')
let pro = [
    {
        "_id": "5d179d89eccce3121702c840",
        "name": "ALBA-AS9G09X1",
        "price": 5000000,
        "category": "casual",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561828744098ALBA-AS9G09X1.png",
        "qty": 10,
        "createdAt": "2019-06-29T17:19:05.854Z",
        "updatedAt": "2019-06-29T17:19:05.854Z",
        "__v": 0
    },
    {
        "_id": "5d179ddbeccce3121702c841",
        "name": "ALBA-AS9G48X1",
        "price": 3500000,
        "category": "casual",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561828825995Alba-AS9G48X1.png",
        "qty": 10,
        "createdAt": "2019-06-29T17:20:27.560Z",
        "updatedAt": "2019-06-29T17:20:27.560Z",
        "__v": 0
    },
    {
        "_id": "5d179e29eccce3121702c842",
        "name": "ALBA-AS9G48XS1",
        "price": 6700000,
        "category": "casual",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561828903938Alba-AS9G48Xss1.png",
        "qty": 10,
        "createdAt": "2019-06-29T17:21:45.387Z",
        "updatedAt": "2019-06-29T17:21:45.387Z",
        "__v": 0
    },
    {
        "_id": "5d179e72eccce3121702c843",
        "name": "IWatch 4 Black",
        "price": 5700000,
        "category": "smartwatch",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561828977242Apple-IWatch-Series-4-GPS-40mm-black-Loop-IWS440SL.png",
        "qty": 10,
        "createdAt": "2019-06-29T17:22:58.710Z",
        "updatedAt": "2019-06-29T17:22:58.710Z",
        "__v": 0
    },
    {
        "_id": "5d179f33eccce3121702c844",
        "name": "IWatch 4 Gold",
        "price": 8700000,
        "category": "smartwatch",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561829170215Apple-IWatch-Series-4-GPS-40mm-Gold-Loop-IWS440GL.png",
        "qty": 10,
        "createdAt": "2019-06-29T17:26:11.956Z",
        "updatedAt": "2019-06-29T17:26:11.956Z",
        "__v": 0
    },
    {
        "_id": "5d179f87eccce3121702c845",
        "name": "IWatch 4 Silver",
        "price": 8700000,
        "category": "smartwatch",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561829254046Apple-IWatch-Series-4-GPS-40mm-Silver-Loop-IWS440SL.png",
        "qty": 10,
        "createdAt": "2019-06-29T17:27:35.724Z",
        "updatedAt": "2019-06-29T17:27:35.724Z",
        "__v": 0
    },
    {
        "_id": "5d179fe6eccce3121702c846",
        "name": "G-Shock-110B",
        "price": 8700000,
        "category": "sport",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561829349402Casio-G-Shock-Analog-Digital-Standard-GA-110BT-1ADR.png",
        "qty": 10,
        "createdAt": "2019-06-29T17:29:10.759Z",
        "updatedAt": "2019-06-29T17:29:10.759Z",
        "__v": 0
    },
    {
        "_id": "5d17a020eccce3121702c847",
        "name": "G-Shock-A71AD",
        "price": 8700000,
        "category": "sport",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561829407126Casio-G-Shock-Analog-Digital-Standard-GA-710GB-1ADR.png",
        "qty": 10,
        "createdAt": "2019-06-29T17:30:08.721Z",
        "updatedAt": "2019-06-29T17:30:08.721Z",
        "__v": 0
    },
    {
        "_id": "5d17a05feccce3121702c848",
        "name": "G-Shock-87DR",
        "price": 8700000,
        "category": "sport",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561829470148Casio-G-Shock-Analog-Digital-Standard-GA-810B-1A9DR.png",
        "qty": 10,
        "createdAt": "2019-06-29T17:31:11.805Z",
        "updatedAt": "2019-06-29T17:31:11.805Z",
        "__v": 0
    },
    {
        "_id": "5d17a0caeccce3121702c849",
        "name": "G-Shock-G2DR",
        "price": 8700000,
        "category": "sport",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561829577027Casio-G-Shock-Special-Color-Models-GA-710B-1A2DR.png",
        "qty": 10,
        "createdAt": "2019-06-29T17:32:58.617Z",
        "updatedAt": "2019-06-29T17:32:58.617Z",
        "__v": 0
    },
    {
        "_id": "5d17a124eccce3121702c84a",
        "name": "Fossil-FS5398",
        "price": 4300000,
        "category": "casual",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561829667088Fossil-FS5398.png",
        "qty": 10,
        "createdAt": "2019-06-29T17:34:28.298Z",
        "updatedAt": "2019-06-29T17:34:28.298Z",
        "__v": 0
    },
    {
        "_id": "5d17a138eccce3121702c84b",
        "name": "Fossil-FS4812IE",
        "price": 4300000,
        "category": "casual",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561829686806Fossil-Grant-Sport-FS4812IE.png",
        "qty": 10,
        "createdAt": "2019-06-29T17:34:48.092Z",
        "updatedAt": "2019-06-29T17:34:48.092Z",
        "__v": 0
    },
    {
        "_id": "5d17a18feccce3121702c84c",
        "name": "Fossil-FS5436",
        "price": 3220000,
        "category": "smartwatch",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561829774306Fossil-Townsman-FS5436.png",
        "qty": 10,
        "createdAt": "2019-06-29T17:36:15.754Z",
        "updatedAt": "2019-06-29T17:36:15.754Z",
        "__v": 0
    },
    {
        "_id": "5d17a298eccce3121702c84d",
        "name": "Garmin-AS40BSB",
        "price": 8220000,
        "category": "smartwatch",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561830038929Garmin-Approach-S40-Black-Stainless-Steel-with-Black-Band-AS40BSB.png",
        "qty": 10,
        "createdAt": "2019-06-29T17:40:40.379Z",
        "updatedAt": "2019-06-29T17:40:40.379Z",
        "__v": 0
    },
    {
        "_id": "5d17a2d5eccce3121702c84e",
        "name": "Garmin-D2LC",
        "price": 9120000,
        "category": "smartwatch",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561830100125Garmin-D2-Delta-PX-Aviator-Watch-with-DLC-Titanium-Band-D2DPXADLC.png",
        "qty": 10,
        "createdAt": "2019-06-29T17:41:41.824Z",
        "updatedAt": "2019-06-29T17:41:41.824Z",
        "__v": 0
    },
    {
        "_id": "5d17a33deccce3121702c84f",
        "name": "Garmin-R2XT",
        "price": 11020000,
        "category": "smartwatch",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561830204330Garmin-Instinct-Lakeside-Blue-ILB.png",
        "qty": 10,
        "createdAt": "2019-06-29T17:43:25.963Z",
        "updatedAt": "2019-06-29T17:43:25.963Z",
        "__v": 0
    },
    {
        "_id": "5d17a3baeccce3121702c850",
        "name": "Lee-Cooper",
        "price": 11020000,
        "category": "casual",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561830329401Lee-Cooper-LC-45G-C.png",
        "qty": 10,
        "createdAt": "2019-06-29T17:45:30.732Z",
        "updatedAt": "2019-06-29T17:45:30.732Z",
        "__v": 0
    },
    {
        "_id": "5d17a419eccce3121702c851",
        "name": "MIDO-M024",
        "price": 3020000,
        "category": "formal",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561830424358MIDO-M024.png",
        "qty": 10,
        "createdAt": "2019-06-29T17:47:05.721Z",
        "updatedAt": "2019-06-29T17:47:05.721Z",
        "__v": 0
    },
    {
        "_id": "5d17a453eccce3121702c852",
        "name": "Seiko-11P1",
        "price": 1020000,
        "category": "formal",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561830481934Seiko-Prospex-Sky-Solar-SSC611P1.png",
        "qty": 10,
        "createdAt": "2019-06-29T17:48:03.465Z",
        "updatedAt": "2019-06-29T17:48:03.465Z",
        "__v": 0
    },
    {
        "_id": "5d17a49aeccce3121702c853",
        "name": "SPW-P2QL",
        "price": 2220000,
        "category": "casual",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561830552919South-Point-William-P2QL.png",
        "qty": 10,
        "createdAt": "2019-06-29T17:49:14.301Z",
        "updatedAt": "2019-06-29T17:49:14.301Z",
        "__v": 0
    },
    {
        "_id": "5d17a4fceccce3121702c854",
        "name": "SPW-34GX",
        "price": 12320000,
        "category": "casual",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561830651031South-Point-William-RL45GX.png",
        "qty": 10,
        "createdAt": "2019-06-29T17:50:52.317Z",
        "updatedAt": "2019-06-29T17:50:52.317Z",
        "__v": 0
    },
    {
        "_id": "5d17a530eccce3121702c855",
        "name": "Suunto-SGB",
        "price": 3620000,
        "category": "casual",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561830702778Suunto-Spartan-Trainer-Wrist-HR-Black-SS022996000.png",
        "qty": 10,
        "createdAt": "2019-06-29T17:51:44.056Z",
        "updatedAt": "2019-06-29T17:51:44.056Z",
        "__v": 0
    },
    {
        "_id": "5d17a559eccce3121702c856",
        "name": "Suunto-SG12",
        "price": 3620000,
        "category": "smartwatch",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561830744412Suunto-Spartan-Ultra-Gold-Special-Edition-HR-SS023303000.png",
        "qty": 10,
        "createdAt": "2019-06-29T17:52:25.730Z",
        "updatedAt": "2019-06-29T17:52:25.730Z",
        "__v": 0
    },
    {
        "_id": "5d17a592eccce3121702c857",
        "name": "Timberland-R6JS",
        "price": 3620000,
        "category": "casual",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561830800682Timberland-Rollins-TBL14477JSB-02.png",
        "qty": 10,
        "createdAt": "2019-06-29T17:53:22.150Z",
        "updatedAt": "2019-06-29T17:53:22.150Z",
        "__v": 0
    },
    {
        "_id": "5d17a5d3eccce3121702c858",
        "name": "Timberland-7JSB",
        "price": 34220000,
        "category": "casual",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561830866330Timberland-Rollins-TBL14477JSB-02.png",
        "qty": 10,
        "createdAt": "2019-06-29T17:54:27.798Z",
        "updatedAt": "2019-06-29T17:54:27.798Z",
        "__v": 0
    },
    {
        "_id": "5d17a60deccce3121702c859",
        "name": "Tissot-T035",
        "price": 7620000,
        "category": "casual",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561830924257Tissot-T-Classic-Couturier-Quartz-T035-410-16-051-00.png",
        "qty": 10,
        "createdAt": "2019-06-29T17:55:25.665Z",
        "updatedAt": "2019-06-29T17:55:25.665Z",
        "__v": 0
    },
    {
        "_id": "5d17a682eccce3121702c85a",
        "name": "Tissot-CL34",
        "price": 9620000,
        "category": "casual",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561831040594Tissot-T-Classic-Couturier-Quartz-T035-617-16-051-00.png",
        "qty": 10,
        "createdAt": "2019-06-29T17:57:22.065Z",
        "updatedAt": "2019-06-29T17:57:22.065Z",
        "__v": 0
    },
    {
        "_id": "5d17a6c1eccce3121702c85b",
        "name": "Tissot-T057",
        "price": 9620000,
        "category": "casual",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561831103771Tissot-T-Classic-Tradition-T063-617-16-057-00.png",
        "qty": 10,
        "createdAt": "2019-06-29T17:58:25.035Z",
        "updatedAt": "2019-06-29T17:58:25.035Z",
        "__v": 0
    },
    {
        "_id": "5d17a709eccce3121702c85c",
        "name": "TW-Steel",
        "price": 1620000,
        "category": "casual",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561831176496TW-Steel-T-TW22N.png",
        "qty": 10,
        "createdAt": "2019-06-29T17:59:37.739Z",
        "updatedAt": "2019-06-29T17:59:37.739Z",
        "__v": 0
    },
    {
        "_id": "5d1dcb0c5992e10ddeaaaabc",
        "name": "Jam suntoo",
        "price": 1200000,
        "description": "nsflkslfkslkfklslkfskldflksmkd",
        "photo": "https://storage.googleapis.com/simamora-bucket/1562233611837Screenshot from 2019-04-13 21-53-03.png",
        "qty": 78,
        "createdAt": "2019-07-04T09:46:52.783Z",
        "updatedAt": "2019-07-04T09:46:52.783Z",
        "__v": 0
    }
]


for (let i = 0; i < pro.length; i++) {

    
    
        
    let newProduct = {
        name: pro[i].name,
        price: pro[i].price,
        category: pro[i].category,
        description: pro[i].description,
        photo:pro[i].photo,
        qty : pro[i].qty
    }
    console.log(newProduct);
    
    Product.create(newProduct)
        .then((gotData)=>{
            console.log(`seed arr ke ${i} berhasil`);
            
        })
        .catch((err)=>{
            console.log(`seed arr ke ${i} gagal`);
            
        })
    
}