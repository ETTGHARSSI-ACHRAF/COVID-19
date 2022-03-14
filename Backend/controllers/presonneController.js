const Personne = require("../models/personneModel");
const MailToUser = require('../Mail/sendMail');

const createPressone = async (req, res) => {
    try {

        const {
            age,
            CIN,
            adress,
            tel,
            dose,
            maladie,
            traitement,
            effetsecFirstdose,
            effetsecSeconddose,
            centre,
            email,
            id_region


        } = req.body;
      

        //validation 
        if (!age || !CIN || !adress || !tel || !dose )
            return res.status(200).json({
                Message: "please enter amll require fields"
            })
  
           

        if(age >= 12 ){
        const existingUser = await Personne.findOne({CIN})
        if(existingUser){
        if (existingUser.dose[0] === dose || existingUser.dose[1] === dose ||existingUser.dose[2] === dose)
        {
             return res.status(200).json({
            Message: "You have already took this dose "
        })

        }else{
            await Personne.findOneAndUpdate({
                _id: existingUser._id
            }, {
                $push: {
                    dose: dose
                }
                ,
                effetsecFirstdose:effetsecFirstdose,
                effetsecSeconddose:effetsecSeconddose,

            });
            return res.status(200).json({
                Message: "Thank you :)"
            })
        }
    }
        else{        
              // add new Data-covid
              const newData = new Personne({
                age :age,
                CIN :CIN,
                adress :adress,
                tel :tel,
                dose :dose,
                maladie :maladie,
                traitement :traitement,
                effetsecFirstdose:effetsecFirstdose,
                effetsecSeconddose:effetsecSeconddose,
                id_centre:centre,
                id_region:id_region

            })

                    if(dose == 'firstDose'){
                    let date = new Date(), y = date.getFullYear(), m = date.getMonth();
                    let DATE = new Date(y, m + 1, 0);
                    console.log('treee',email, CIN,DATE,centre)
                    await MailToUser(email, CIN,DATE,centre);
    }
            const savedData = await newData.save();
            res.status(200).send();
            res.json(savedData)
        }
    
                 
  
    
}else {
        return res.status(200).json({
            Message:"your age most be more than 12 years old"

        })
       
    }
   
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
}



const getCountDoseByRegion = async (req, res) => {
    try {
        const count ={
            dose1:0,
            dose2:0,
            dose3:0
        }
        const personnes = await Personne.find({id_region:req.region});
        personnes.forEach(element => {
            if((element.dose).length===3){
                count.dose3=count.dose3+1
                count.dose2=count.dose2+1
                count.dose1=count.dose1+1
            }else if((element.dose).length===2){
                count.dose2=count.dose2+1
                count.dose1=count.dose1+1
            }else if((element.dose).length===1){
                count.dose1=count.dose1+1
            }
        })
        res.status(200).json({
            success: 1,
            count
        });
    } catch (error) {
        res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
}


module.exports = {
    createPressone,
    getCountDoseByRegion
};
