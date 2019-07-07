let Product = require('../models/Product')

const mongoose = require('mongoose')
mongoose.connect(`mongodb+srv://dedysimamora:asdasd123@cluster0-q1n7y.gcp.mongodb.net/hackwatch?retryWrites=true&w=majority`, {useNewUrlParser: true})
      .then(() =>{
            console.log('MongoDB connected')
      })
      .catch(err =>{
   
            console.log(err)
      })

let products = [
    new Product({
        "name": "ALBA-AS9G09X1",
        "price": 5000000,
        "category": "casual",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561828744098ALBA-AS9G09X1.png",
        "qty": 10,
    }),
    new Product({
        "name": "ALBA-AS9G48X1",
        "price": 3500000,
        "category": "casual",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561828825995Alba-AS9G48X1.png",
        "qty": 10,
    }),
    new Product({
        "name": "ALBA-AS9G48XS1",
        "price": 6700000,
        "category": "casual",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561828903938Alba-AS9G48Xss1.png",
        "qty": 10,
    }),
    new Product({
        "name": "IWatch 4 Black",
        "price": 5700000,
        "category": "smartwatch",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561828977242Apple-IWatch-Series-4-GPS-40mm-black-Loop-IWS440SL.png",
        "qty": 10,
    }),
    new Product({
        "name": "IWatch 4 Gold",
        "price": 8700000,
        "category": "smartwatch",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561829170215Apple-IWatch-Series-4-GPS-40mm-Gold-Loop-IWS440GL.png",
        "qty": 10,
    }),
    new Product({
        "name": "IWatch 4 Silver",
        "price": 8700000,
        "category": "smartwatch",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561829254046Apple-IWatch-Series-4-GPS-40mm-Silver-Loop-IWS440SL.png",
        "qty": 10,
    }),
    new Product({
        "name": "G-Shock-110B",
        "price": 8700000,
        "category": "sport",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561829349402Casio-G-Shock-Analog-Digital-Standard-GA-110BT-1ADR.png",
        "qty": 10,
    }),
    new Product({
        "name": "G-Shock-A71AD",
        "price": 8700000,
        "category": "sport",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561829407126Casio-G-Shock-Analog-Digital-Standard-GA-710GB-1ADR.png",
        "qty": 10,
    }),
    new Product({
        "name": "G-Shock-87DR",
        "price": 8700000,
        "category": "sport",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561829470148Casio-G-Shock-Analog-Digital-Standard-GA-810B-1A9DR.png",
        "qty": 10,
    }),
    new Product({
        "name": "G-Shock-G2DR",
        "price": 8700000,
        "category": "sport",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561829577027Casio-G-Shock-Special-Color-Models-GA-710B-1A2DR.png",
        "qty": 10,
    }),
    new Product({
        "name": "Fossil-FS5398",
        "price": 4300000,
        "category": "casual",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561829667088Fossil-FS5398.png",
        "qty": 10,
    }),
    new Product({
        "name": "Fossil-FS4812IE",
        "price": 4300000,
        "category": "casual",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561829686806Fossil-Grant-Sport-FS4812IE.png",
        "qty": 10,
    }),
    new Product({
        "name": "Fossil-FS5436",
        "price": 3220000,
        "category": "smartwatch",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561829774306Fossil-Townsman-FS5436.png",
        "qty": 10,
    }),
    new Product({
        "name": "Garmin-AS40BSB",
        "price": 8220000,
        "category": "smartwatch",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561830038929Garmin-Approach-S40-Black-Stainless-Steel-with-Black-Band-AS40BSB.png",
        "qty": 10,
    }),
    new Product({
        "name": "Garmin-D2LC",
        "price": 9120000,
        "category": "smartwatch",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561830100125Garmin-D2-Delta-PX-Aviator-Watch-with-DLC-Titanium-Band-D2DPXADLC.png",
        "qty": 10,
    }),
    new Product({
        "name": "Garmin-R2XT",
        "price": 11020000,
        "category": "smartwatch",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561830204330Garmin-Instinct-Lakeside-Blue-ILB.png",
        "qty": 10,
    }),
    new Product({
        "name": "Lee-Cooper",
        "price": 11020000,
        "category": "casual",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561830329401Lee-Cooper-LC-45G-C.png",
        "qty": 10,
    }),
    new Product({
        "name": "MIDO-M024",
        "price": 3020000,
        "category": "formal",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561830424358MIDO-M024.png",
        "qty": 10,
    }),
    new Product({
        "name": "Seiko-11P1",
        "price": 1020000,
        "category": "formal",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561830481934Seiko-Prospex-Sky-Solar-SSC611P1.png",
        "qty": 10,
    }),
    new Product({
        "name": "SPW-P2QL",
        "price": 2220000,
        "category": "casual",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561830552919South-Point-William-P2QL.png",
        "qty": 10,
    }),
    new Product({
        "name": "SPW-34GX",
        "price": 12320000,
        "category": "casual",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561830651031South-Point-William-RL45GX.png",
        "qty": 10,
    }),
    new Product({
        "name": "Suunto-SGB",
        "price": 3620000,
        "category": "casual",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561830702778Suunto-Spartan-Trainer-Wrist-HR-Black-SS022996000.png",
        "qty": 10,
    }),
    new Product({
        "name": "Suunto-SG12",
        "price": 3620000,
        "category": "smartwatch",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561830744412Suunto-Spartan-Ultra-Gold-Special-Edition-HR-SS023303000.png",
        "qty": 10,
    }),
    new Product({
        "name": "Timberland-R6JS",
        "price": 3620000,
        "category": "casual",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561830800682Timberland-Rollins-TBL14477JSB-02.png",
        "qty": 10,
    }),
    new Product({
        "name": "Timberland-7JSB",
        "price": 34220000,
        "category": "casual",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561830866330Timberland-Rollins-TBL14477JSB-02.png",
        "qty": 10,
    }),
    new Product({
        "name": "Tissot-T035",
        "price": 7620000,
        "category": "casual",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561830924257Tissot-T-Classic-Couturier-Quartz-T035-410-16-051-00.png",
        "qty": 10,
    }),
    new Product({
        "name": "Tissot-CL34",
        "price": 9620000,
        "category": "casual",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561831040594Tissot-T-Classic-Couturier-Quartz-T035-617-16-051-00.png",
        "qty": 10,
    }),
    new Product({
        "name": "Tissot-T057",
        "price": 9620000,
        "category": "casual",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561831103771Tissot-T-Classic-Tradition-T063-617-16-057-00.png",
        "qty": 10,
    }),
    new Product({
        "name": "TW-Steel",
        "price": 1620000,
        "category": "casual",
        "description": "The automatic movement features a built-in rotor that’s powered by the motion of your wrist—no battery required. If your watch stops ticking, simply turn the crown clockwise until you feel some resistance",
        "photo": "https://storage.googleapis.com/simamora-bucket/1561831176496TW-Steel-T-TW22N.png",
        "qty": 10,
    }),
    new Product({
        "name": "Jam suntoo",
        "price": 1200000,
        "description": "nsflkslfkslkfklslkfskldflksmkd",
        "photo": "https://storage.googleapis.com/simamora-bucket/1562233611837Screenshot from 2019-04-13 21-53-03.png",
        "qty": 78,
    })
]


let done = 0

for (let i = 0; i < products.length; i++) {
    products[i].save(function(err, result){
        done ++
        if(done == products.length){
            exit()
        }
    })
    
}

function exit(){
    mongoose.disconnect()

}
