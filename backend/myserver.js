const nodemailer  =  require('nodemailer');
const express = require('express');
const multer = require('multer');
const mysql = require('mysql');
const cors = require('cors');
const jwt = require('jsonwebtoken')
const path = require('path');
const fs = require('fs');
const session = require('express-session');
const bodyParser = require('body-parser');
const { connected } = require('process');
const { ifError } = require('assert');
const { time } = require('console');

const port = 5000;
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000', // React app URL
    credentials: true 
}));
app.use(express.json())
app.use(session({
    secret: 'key that will sign cookies', 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
const dbase = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "linkedintern"
}) 
dbase.connect((err)=>{
    if(err){
        console.log(err)
    }
    console.log("Connected!");
    //checking
}) 
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'muhirepatrick736@gmail.com',
        pass: 'pjlh sajs yknw upea'
    },
});
app.post('/add_user', (req,res) =>{
    sql = "INSERT INTO clients(`reg_index`,`first_name`,`last_name`,`gender`,`email`,`collage`,`department`,`phone`,`province`,`district`,`sector`,`cell`,`village`,`password`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?) ";
    select = "SELECT * FROM clients WHERE email = ?"
    const ClientData = [
        req.body.index.index,
        req.body.first_name.fname,
        req.body.last_name.lname,
        req.body.gender.gender,
        req.body.email.email,
        req.body.collage,
        req.body.department,
        req.body.phone.phone,
        req.body.province,
        req.body.district,
        req.body.sector,
        req.body.cell,
        req.body.village,
        req.body.password.passwd, 
    ];
    const index = [req.body.index.index]
    const email = [req.body.email.email]
    const phone = [req.body.phone.phone] 
    console.log(index.length)
    console.log(ClientData);
    dbase.connect((err)=>{
        if(err){
            console.log(err)
        }
        console.log("Connected!");
        //checking
    })
        dbase.query("SELECT * FROM clients WHERE reg_index= ? ",index,(inderror,results)=>{
            console.log(results.length)
            if(inderror){
                console.log(inderror)
            }
            else if(results.length >0){
                console.log("index found")
                res.json({message: "your index number is taken!"})
            }
             else /*if(results.lenght<1)*/{
            console.log("accessing")

                dbase.query("SELECT * FROM clients WHERE email= ?",email,(emerror,emresults)=>{
                    if(emerror){
                        console.log(emerror)
                    }
                    else if(emresults.length > 0){
                        console.log("email found")
                        res.json({message: "your email is taken use another!"})
                    }
                    else /*if(emresults.lenght < 1)*/{
                        console.log("here iam")
                        dbase.query("SELECT * FROM clients WHERE phone = ?",phone,(phoerror,phoresults)=>{
                            if(phoerror){
                                console.log(phoerror)
                            }
                            else if(phoresults.length > 0){
                                console.log("phone found")
                                res.json({message: "your phone number is taken!"})
                            }
                            else if(phoresults.length <1){
                                dbase.query(sql,ClientData,(err, result) =>{
                                if(err) {
                                        console.log("not inserted",err, ClientData);
                                        return res.json({message: "your credentials are invalid. please try again!"})
                                }
                                else{  
                                    console.log("data inserted")
                                    transporter.sendMail({
                                        // to: 'studyqaa@gmail.com',
                                        to: req.body.email.email,
                                        subject: 'WELCOME TO LINKEDINTERN',
                                        html: `<h1>HELLO ${req.body.first_name.fname} WELCOME TO <B> LINNKED INTERN </B> </h1>
                                        </h1> <br> We are happy to have you as our pattern. <br>
                                         <p> you are welcome thanks!</p>
                                          `
                                    }).then(() => {
                                         console.log('Sent mail')
                                        }).catch(err => {
                                             console.log(err)
                                            }); 
                                    res.json({message: "data inserted"})
                                }
                                })
                            }
                        })
                    }
                })
            }
})
}) 

app.post('/company', (req,res) =>{
    sql = "INSERT INTO institutions(`company_name`,`company_type`,`department`,`abbreviation`,`company_email`,`company_phone`,`province`,`district`,`sector`,`cell`,`person_first_name`,`person_last_name`,`role`,`title`,`password`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ";
    select = "SELECT * FROM institutions WHERE company_email = ?"
    
    const CompanyData = [
        req.body.mydata.companyName, 
        req.body.mydata.companyType,
        req.body.mydata.companyDepartment,
        req.body.mydata.companyAbbreviation,
        req.body.mydata.compEmail,
        req.body.mydata.compPhone,
        req.body.mydata.province,
        req.body.mydata.district,
        req.body.mydata.sector,
        req.body.mydata.cell,
        req.body.mydata.compPerFname,
        req.body.mydata.compPerLname,
        req.body.mydata.compRole,
        req.body.mydata.compTitle,
        req.body.mydata.compPassword,   
    ];
    const company_email = [req.body.mydata.compEmail]
    console.log(company_email)
    const phone = [req.body.mydata.compPhone] 
    console.log(phone)
    console.log(CompanyData);
        dbase.query("SELECT * FROM institutions WHERE company_email = ? ",company_email,(inderror,results)=>{
            if(inderror){
                console.log("error found")
            }
            else if(results.length >0){
                // console.log("email found")
                res.json({message: "your email is taken!"})
            }
             else /*if(results.lenght<1)*/{
            console.log("accessing")
            dbase.query("SELECT * FROM institutions WHERE company_phone = ?",phone,(phoerror,phoresults)=>{
                if(phoerror){
                    console.log(phoerror)
                }
                else if(phoresults.length > 0){
                    console.log("phone found")
                    res.json({message: "your phone number is taken!"})
                }
                else if(phoresults.length <1){
                    dbase.query(sql,CompanyData,(err, result) =>{
                        if(err) {
                            console.log("not inserted",err, CompanyData);
                            return res.json({message: "something went worse"})
                    }
                    else{  
                        console.log("data inserted")
                        transporter.sendMail({
                            // to: 'studyqaa@gmail.com',
                            to: req.body.mydata.compEmail,
                            subject: 'WELCOME TO LINKEDINTERN',
                            html: `<h1>HELLO ${req.body.mydata.companyName} WELCOME TO <B>LINNKED INTERN</B></h1>
                             <br>We are happy to have you as our pattern.<br>
                             <p>you are welcome thanks.</p>
                              `
                        }).then(() => {
                             console.log('Sent mail')
                            }).catch(err => {
                                 console.log(err)
                                }); 
                        res.json({message: "data inserted"})
                        // res.redirect('/login')
                    }
                    })
                }
            })
            }
})
})

app.post('/login', (req, res)=>{
    selectperson1= "select * from clients where email = ?"
    selectperson2= "select password from clients where email = ?"
    const data = [
        req.body.eemail,
        req.body.passwd,
    ]
    dbase.query(selectperson1,req.body.eemail,(err, results)=>{
        console.log(results)
        console.log(err)
        if(results.length > 0){ 
        dbase.query(selectperson2,req.body.eemail,(eer,resu) => {
            if(resu.length > 0){
                if(resu[0].password == req.body.passwd){
                    user = results[0].email
                    req.session.user = user
                    console.log(results[0].email)
                    req.session.save()
                    res.json({message: "loggedin"})
                } else{
                res.json({message: "Incorrect password!"})
            }
            }else{
                res.json({message: "it is searched and not found "})
            }
        })
        }
        else{
            selectcompany = "select * from institutions where company_email = ?"
            selectcompany1 = "select password from institutions where  company_email = ?"
            dbase.query(selectcompany,req.body.eemail,(erro, result)=>{
                if (result.length > 0){
                    dbase.query(selectcompany1,req.body.eemail,(eero,resul) => {
                        if(resul.length > 0){
                            console.log()
                            if (resul[0].password == req.body.passwd){
                                user = result[0].company_email
                                req.session.user = {user}
                                req.session.save()
                                 res.json({message: "company"})
                            }else{
                                res.json({message: "Incorrect password!"})
                            } 
                        }else{
                            res.json({message: "Incorrect email!"})
                        } 
                    })
                }else{
                res.json({message: "Enter valid data!"})
            }
            })
        }
     })
})
const verify = (req,res,next)=>{
    if (req.session.user){
        next()
    }
    else{ 
        return res.json({status:"bad"})
    }
}
app.get('/companydashboard',verify,(req,res)=>{
const email = req.session.user.user
dbase.query("select * from institutions where company_email = ?",email,(error,result)=>{
    res.json(result)
}) 
}) 
app.get("/personalprofile",verify,(req,res)=>{
    email = req.session.user
    console.log(email)
    dbase.query("select * from clients where email = ?",email,(error,results)=>{
        if(error){console.log("error in profile pers",error)} 
        if(results){
            res.json(results)
        } 
     })
})  

app.get("/companyprofile",verify,async(req,res)=>{
    email = req.session.user.user
    console.log(email," in comp profile")
    await dbase.query("select * from institutions where company_email = ? ",email,(error,results)=>{
        if (error){console.log("error in profile pers",error)}  
        if (results){
            console.log("company profile",results)
            res.json(results)
        }
    })
       
})

app.get('/studentdashboard',verify,(req,res)=>{
    const email = req.session.user
    dbase.query("select * from clients where email = ?",email,(error,result)=>{
        res.json(result)
    }) 
    }) 

app.post("/posting",verify,(req,res)=>{
    const data  = [ 
        req.body.compemail,
        req.body.compname,
        req.body.province,
        req.body.district,
        req.body.sector,
        req.body.department,
        req.body.position,
        req.body.date,
        req.body.time,
        req.body.requirements,
        req.body.telephone,
    ]
    console.log(data)
    sql = "insert into internships(company_email,company_name,province,district,sector,department,position,DOP,Top,requirements,telephone) values(?,?,?,?,?,?,?,?,?,?,?)"
    dbase.query(sql,data,(erro,ress)=>{
        if(erro){
            console.log("error found")
        }
        if(ress){
            res.json({data: "success"})
        }
    })
})
app.get("/companies",verify,(req, res)=>{
    sql =  "select * from internships"
    dbase.query(sql,(erro,ress)=>{
        res.send(ress)
    })
})
app.post("/logbook",verify,(req, res)=>{
    const gettingdata = [
        req.body.indexnum,
        req.body.email,
        req.body.collage,
        req.body.department,
        req.body.options,
        req.body.year,
        req.body.activity,
        req.body.tools,
        req.body.datedone,
        req.body.hours,
    ]
    console.log(gettingdata)
    const insert = "insert into logbooks values('',?,?,?,?,?,?,?,?,?,?)"
    dbase.query(insert,gettingdata,(erro,results)=>{
        res.json(results)
        if(erro){
            console.log(erro)
        }
    })
})

app.post('/logdata',verify,(req,res)=>{
    userdata = [
        req.body.indexnum,
        req.body.email,
        req.body.collage,
        req.body.department,
        req.body.options,
    ]
    const sql = "SELECT `index_num`, `email`, `collage`, `department`, `options`, `year`, `activity`, `tools`, DAYNAME(`datedone`) as `day`, `hours` FROM logbooks WHERE WEEK(datedone) = WEEK(NOW()) and index_num = ? and email = ? AND collage = ? AND department = ? AND options = ? ORDER BY datedone ASC "
    dbase.query(sql,userdata,(erro,result)=>{
        res.json(result)
    })
})

app.post("/apply", (req, res)=>{
    const id = req.body.id
    console.log(id)
    dbase.query("SELECT * from internships where id = ?",[id],(erro,result)=>{
        if(result){
            res.json(result)
        }
    })
})
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './files')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null, uniqueSuffix + file.originalname)
    }
  })
const upload = multer({ storage: storage })

app.post("/uploadfiles",upload.single('file'),async (req, res) => {
    const cname = req.body.cname
    const cemail = req.body.cemail
    const whom = req.body.whom
    const cv = req.body.cv
    const filename = req.file.filename

    sql = "insert into request values('',?,?,?,?,?,?,?,?,?,?)"
    search = "select * from clients where  reg_index = ?"
     dbase.query(search,[whom],(err, results)=>{
        if(results.length>0){
            const names = results[0].first_name+" "+results[0].last_name
            const collage = results[0].collage
            const department = results[0].department
            const options = results[0].options
            const currentDate = new Date();
            try{  dbase.query(sql,[whom,names,collage,department,options,cname,cemail,cv,filename,currentDate],(erroor,result)=>{
                if(erroor){
                    console.log("error in insert",erroor)
                }
                else{
                    res.json({dataa: "inserted"})
                }
             })
            }catch(e){
                console.log(e)
            }
        } 
        else if(err){console.log(err)}
    }) 
})

app.post("/appdecisions",verify,(req, res)=>{
    id = req.body.userid;
    decision = req.body.decision;
    dbase.query("select * from request where id = ?",[id],(erro, result)=>{
        if(erro){console.log("erro")}
        if(result.length>0){
            ids = result[0].id
            requester = result[0].requester
            names = result[0].names
            collage = result[0].collage
            department = result[0].department
            options = result[0].options
            yearofstudy = result[0].year
            company_name= result[0].company_name
            company_email= result[0].company_email
            personalcv= result[0].personalcv
            filenames = result[0].filename
            date_of_application= result[0].dates
            date_of_accept= Date.now()
            hour_of_accept= Date.now()

           if(decision=="rejected"){
            sqly = "insert into applicationdecisions values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
            dbase.query(sql,[ids,requester,names,collage,department,options,yearofstudy,company_name,company_email,personalcv,filenames,date_of_application,"rejected",date_of_accept,hour_of_accept],(erroo,answer)=>{
                if(erroo){
                    console.log("erross")
                }
                if(answer){
                    dbase.query("DELETE FROM request WHERE id = ?",[ids],(question,solution)=>{
                        if(question){
                            console.log("question")
                        }
                        if(solution){
                            console.log("solution")
                            res.json({back: "rejected"})
                        }
                    })
                }
            })
           }
           if(decision == "accepted"){
            sqly = "insert into applicationdecisions values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
            dbase.query(sql,[ids,requester,names,collage,department,options,yearofstudy,company_name,company_email,personalcv,filenames,date_of_application,"Accepted",date_of_accept,hour_of_accept],(erroo,answer)=>{
                if(erroo){
                    console.log("erross")
                }
                if(answer){
                    dbase.query("DELETE FROM request WHERE id = ?",[ids],(question,solution)=>{
                        if(question){
                            console.log("question")
                        }
                        if(solution){
                            console.log("solution")
                            res.json({back: "accepted"})
                        }
                    })
                }
            })
           }
        }
    })
})

app.get('/gettingApplicant',verify,async (req, res)=>{
    companyemail = req.session.user.user
    console.log(companyemail) 
    sql = "select * from request where company_email = ?";
    dbase.query(sql,[companyemail],(erro,response)=>{
        if(response){
            console.log(response) 
            res.json(response) 
        }
    })
})

app.get("/logout",(req,res)=>{
    console.log("logout")
    req.session.destroy()
    res.json({message:"destroyed"})
})

app.listen(port,()=> {
    console.log(`running on port ${port}`)
})
