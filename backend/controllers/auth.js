const db = require('../database/dbConfig');
const bcrypt = require('bcrypt');
const fileUpload = require('express-fileupload');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

const saltRounds = 10;


exports.trainerSignUp = (req, res, next) => {

    const uploadFolder = `C:\\Users\\simeo\\OneDrive\\Desktop\\DUNWOODY\\final_project\\frontend\\public\\uploads`;
    const file = req.files.file;
    const fileName = file.name;

    
    const { firstName, lastName, email, password, city, state, aboutMe, gender, yearOfExp, areaOfSpec } = req.body;
    let trainerId = 0;
    let currentUser = 0;
    const items = JSON.parse(areaOfSpec);


    try {


        if(req.files === null){
            return res.status(400).json({msg: "No file uploaded"})
        }
        else{


            const findUser = 'SELECT * FROM trainer WHERE trainer_email = ?';


            //querying
        
            db.query(findUser, [email], function (err, user) {

                if (user.length > 0) {
                    res.send('This user already exist');
                }else{

                    bcrypt.hash(password, saltRounds, (err, hash) => {
                        if(err){
                        console.log(err);
                        }
                    
                        const trainer_query = 'INSERT INTO trainer (trainer_first_name, trainer_last_name, trainer_email, trainer_password, trainer_gender, trainer_city, trainer_state, trainer_image, trainer_about_me, years_of_exp) VALUES(?)';
    
                    
                        let values = [firstName, lastName, email, hash, gender, city, state, fileName, aboutMe, yearOfExp ];
    
                        //const latestId = '';
                        db.query(trainer_query,[values], (err, result) => {
                        
                        if(err){
                            console.log(err);
                        }
                    
                        if(result){
                           
                            //res.send({user: result, status: 2});
                            currentUser = result;
                            trainerId = result.insertId

                             //handle file upload
                            file.mv(`${uploadFolder}/${fileName}`, err => {
                                if(err){
                                    console.error(err);
                                    return res.status(500).send(err);
                                }
                
                            });

                            // items.forEach(item => {
                            //     let newValues = [];
                            //     newValues.push(item.item, trainerId);
                            //     specValues.push(newValues);
                            // });

                            const query2 = "INSERT INTO specialization (specialization_name, trainer_trainer_id) VALUES ?";

                            
                            db.query(query2, [items.map(item => [item.item, trainerId])], (err, result2) => {
                                if(err){
                                    console.log(err);
                                }
                                console.log(result2);
                                res.send({user: currentUser});
                            }); 
                            



                            
                        }
                        else{
                            res.send({message: "no user added"})
                        }
                    
                        
                    
                        })  
                
                    })

                   


                    
                }

            });

            

        }
        
        
    } catch (error) {

        res.status(500).json({
            success: false,
            error: error.message
        });
        
    }


    
   

};






exports.clientSignUp = (req, res, next) => {
    
    const { firstName, lastName, email, password, city, state} = req.body;

    try {

        const findUser = 'SELECT * FROM `client` WHERE `email` = ?';
    
        db.query(findUser, [firstName], function (err, user) {
            console.log(user);

            if (user) {
                res.send('This user already exist');
            }else{
                bcrypt.hash(password, saltRounds, (err, hash) => {
                    if(err){
                      console.log(err);
                    }
                
                    const client_query = 'INSERT INTO client (client_first_name, client_last_name, client_email, client_password, client_city, client_state) VALUES (?)';
                
                    let values = [firstName, lastName, email, hash, city, state];
                    db.query(client_query,[values], (err, result) => {
                      
                      if (err) throw error;
                  
                      res.json({
                        status: 200,
                        message: "new client added successfully"
                      })
                      console.log(err);
                    })
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