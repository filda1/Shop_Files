const UserModel = require('../models/user');
const jwt = require('jsonwebtoken');
const key='secretkey';
var bcrypt = require('bcrypt');

const  UserController = {};



UserController.getUser = async (req, res, next) => {
    const users= await UserModel.find();
    res.json(users);
    };

UserController.createUser = async (req, res, next) => {
    //const  user= new UserModel(req.body);
    const user = new UserModel({
        email: req.body.email,
        username: req.body.username,
        password: UserModel.hashPassword(req.body.password),
        creation_dt: Date.now()
      });

    await user.save();
    const token = await jwt.sign({_id: user._id}, key);
    res.status(200).json({token});

    /*res.json({
        'status':'saved'});*/

    };


UserController.login = async (req, res, next) => {

    const { email, username, password } = req.body;

    const user = await UserModel.findOne({email});
    if (!user) return res.status(401).send('The email doen\' exists');

    const result = bcrypt.compareSync(password, user.password);
    if (result !== true) return res.status(401).send('Wrong Password');
    //if (user.password !== password) return res.status(401).send('Wrong Password');
   

      const token = jwt.sign({_id: user._id}, key);

     return res.status(200).json({token});

    /*res.json({
        'status':'OK'});*/
};


UserController.gethome = async (req, res, next) => {
    verifyToken(req, res, next)
    res.json({
        'status':'OK'});
    };


    async function verifyToken(req, res, next) {
        try {
            if (!req.headers.authorization) {
                return res.status(401).send('Unauhtorized Request');
            }
            let token = req.headers.authorization.split(' ')[1];
            if (token === 'null') {
                return res.status(401).send('Unauhtorized Request');
            }
    
            const payload = await jwt.verify(token, key);
            if (!payload) {
                return res.status(401).send('Unauhtorized Request');
            }
            req.userId = payload._id;
            next();
        } catch(e) {
            //console.log(e)
            return res.status(401).send('Unauhtorized Request');
        }

    //Test
    /*UserController.getTask = async (req, res, next) => {
        res.json([
            {
                _id: '1',
                name: "task one",
                description: 'asdadasd',
                date: "2019-11-06T15:50:18.921Z"
            },
            {
                _id: '2',
                name: "task two",
                description: 'asdadasd',
                date: "2019-11-06T15:50:18.921Z"
            },
            {
                _id: '3',
                name: "task three",
                description: 'asdadasd',
                date: "2019-11-06T15:50:18.921Z"
            },
        ])
        };*/
    

    }

module.exports = UserController;