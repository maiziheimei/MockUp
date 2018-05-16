const express = require('express');
// get a hold of Express router, then for any incoming requests we are going to send back a string "api works"
const router = express.Router();

const mongoose = require('mongoose');
const mdl = require('../models/modell');


// const db = "mongodb://root:xia@ds247347.mlab.com:47347/mockup";
// const db= "mongodb://db:27017/mockup";
const db= "mongodb://localhost/mockup";


mongoose.Promise = global.Promise;

// mongoose.connect(db, function(err){
//   if(err){
//     console.error("can not receive data from mongodb ... " );
//     console.error("Error! " + err);
//   } else { console.log("... connected to "+db.toString());}
// });

mongoose.connection.openUri(db)
  .once('open', function(){
    console.log("... connected to "+db.toString());
    console.log('Good to go !');})
  .on('error', function(error) {
  console.log('Warning', error);
  });


router.get('/models', function(req, res){
  console.log('Get request for all models');
  mdl.find({})
    .exec(function(err, mdls){
      if (err){
        console.log("Error retrieving models");
      }else {
        res.json(mdls);
      }
      console.log('mdls length: ' + mdls.length);
    });
});


router.get('/models/:id', function(req, res){
  console.log('Get request for a single video');
  mdl.findById(req.params.id)
    .exec(function(err, mdl){
      if (err){
        console.log("Error retrieving video");
      }else {
        res.json(mdl);
      }
    });
});

router.post('/model', function (req, res) {
  console.log('post a new model');
  var newModel = new mdl();
  newModel._id = req.body._id;
  newModel.Kriterium = req.body.Kriterium;
  newModel.Beschreibung = req.body.Beschreibung;
  newModel.Auspraegung_0 = req.body.Auspraegung_0;
  newModel.Auspraegung_1 = req.body.Auspraegung_1;
  newModel.Auspraegung_2 = req.body.Auspraegung_2;
  newModel.Auspraegung_3 = req.body.Auspraegung_3;
  newModel.Auspraegung_4 = req.body.Auspraegung_4;
  newModel.Auspraegung_5 = req.body.Auspraegung_5;
  newModel.Auspraegung_6 = req.body.Auspraegung_6;
  newModel.Auspraegung_7 = req.body.Auspraegung_7;
  newModel.ggf_weitere_Auspraegungn = req.body.ggf_weitere_Auspraegungn;
  newModel.TOP_Zuordnung = req.body.TOP_Zuordnung;
  newModel.Zustaendige_Partner = req.body.Zustaendige_Partner;
  newModel.Hinweise_Anmerkungen = req.body.Hinweise_Anmerkungen;
  newModel.Produktionsplanung_langfristig = req.body.Produktionsplanung_langfristig;
  newModel.Produktionssteuerung_kurzfristig = req.body.Produktionssteuerung_kurzfristig;
  newModel.Produktion_Fertigung_Montage = req.body.Produktion_Fertigung_Montage;
  newModel.Personal = req.body.Personal;
  newModel.IT = req.body.IT;
  newModel.Logistik = req.body.Logistik;

  newModel.save(function(err, insertModel){
    if(err){
      console.log('Error saving new model');

    }else{
      res.json(insertModel);
    }
  });
});


//update video by its id
router.put('/model/:id', function(req, res){
  console.log('Update a model');
  mdl.findByIdAndUpdate(req.params.id,
    {
      $set: { _id: req.body._id,
              Kriterium: req.body.Kriterium,
              Beschreibung: req.body.Beschreibung,
              Auspraegung_0: req.body.Auspraegung_0,
              Auspraegung_1: req.body.Auspraegung_1,
              Auspraegung_2: req.body.Auspraegung_2,
              Auspraegung_3: req.body.Auspraegung_3,
              Auspraegung_4: req.body.Auspraegung_4,
              Auspraegung_5: req.body.Auspraegung_5,
              Auspraegung_6: req.body.Auspraegung_6,
              Auspraegung_7: req.body.Auspraegung_7,
              ggf_weitere_Auspraegungn: req.body.ggf_weitere_Auspraegungn,
              TOP_Zuordnung: req.body.TOP_Zuordnung,
              Zustaendige_Partner: req.body.Zustaendige_Partner,
              Hinweise_Anmerkungen: req.body.Hinweise_Anmerkungen,
              Produktionsplanung_langfristig: req.body.Produktionsplanung_langfristig,
              Produktionssteuerung_kurzfristig: req.body.Produktionssteuerung_kurzfristig,
              Produktion_Fertigung_Montage: req.body.Produktion_Fertigung_Montage,
              Personal: req.body.Personal,
              IT: req.body.IT,
              Logistik: req.body.Logistik
      }
    },
    {
      new: true
    },
    function(err, updatedModel){
      if(err)
      {
        res.send("Error updating model");
      }else
        {
        res.json(updatedModel);
        }
    });
});

router.delete('/model/:id',function(req,res){
  console.log('Delete a model');
  mdl.findByIdAndRemove(req.params.id, function(err, deletedModel){
    if(err) {
      res.send("Error deleting model");
    }else{
      res.json(deletedModel);
    }
  });
});

// export the router
module.exports = router;
