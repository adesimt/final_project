const db = require('../database/dbConfig');
const { getId } = require('../controllers/authCheck');





exports.createClass = (req, res, next) => {
    
    const trainerId = req.params.id;


    const { levels, formats, types, description, days, startTime, endTime, equipments } = req.body

    const allEquipment = JSON.parse(equipments);
    const allDay = JSON.parse(days);


    const query1 = "INSERT INTO class (class_type, class_level, class_format, class_description, class_start_time, class_end_time, trainer_trainer_id) VALUES (?)";
    const query2 = "INSERT INTO equipment (equipment_name, class_class_id1, class_trainer_trainer_id1) VALUES ?";
    const query3 = "INSERT INTO day (day_of_week, class_class_id, class_trainer_trainer_id) VALUES ?";


    try {

        const classValues = [types, levels, formats, description, startTime, endTime, trainerId];

        // class query
        db.query(query1, [classValues], function (err, result1) {
            
            if(err){
                console.log(err);
            }
        
            if(result1){
                const classId = result1.insertId;

                db.query(query2, [allEquipment.map(equipment => [equipment.item, classId, trainerId])], (err, result2) => {

                    if(err){
                        console.log(err);
                    }

                    if(result2){

                        db.query(query3, [allDay.map(day => [day, classId, trainerId])], (err, result3) => {

                            if(err){
                                console.log(err);
                            }
                            if(result3){
                                res.send({result: result1, message: "class successfully added"});
                            }
                            
                        } )
                    }


                })

            }
        });

        
        
    } catch (error) {

        res.status(500).json({
            success: false,
            error: error.message
        });
        
    }
  
    
  
  
};

exports.getClass = (req, res, next) => {

    const trainerId = getId;
    console.log(trainerId);


}