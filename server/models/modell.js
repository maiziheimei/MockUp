const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//the blueprint of the object in mongodb "mockup" collection "modell"
const modellSchema = new Schema({
  _id: String,
  Kriterium: String,
  Beschreibung: String,
  Kompetenzen: String,
  Auspraegung_0: String,
  Auspraegung_1: String,
  Auspraegung_2: String,
  Auspraegung_3: String,
  Auspraegung_4: String,
  Auspraegung_5: String,
  Auspraegung_6: String,
  Auspraegung_7: String,
  ggf_weitere_Auspraegungn: String,
  TOP_Zuordnung: String,
  Zustaendige_Partner: String,
  Hinweise_Anmerkungen: String,
  Produktionsplanung_langfristig: String,
  Produktionssteuerung_kurzfristig: String,
  Produktion_Fertigung_Montage: String,
  Personal:String,
  IT: String,
  Logistik: String
},{ versionKey: false // You should be aware of the outcome after set to false
});

// module system of node.js
// mongoose.model creates a model
// the first argument is model name, going to represent the modellSchema
// the third argument is the collection name in your mongodb
module.exports = mongoose.model('modell', modellSchema, 'criteria')
