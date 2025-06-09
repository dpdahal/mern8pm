 import User from "../models/User.js";

 class UserTableSeeder{

    static async seed() {
        let userData=[
                {
                    name:"Admin",
                    email:"admin@gmail.com",
                    password:"admin123",
                    gender:'male',
                    role:'admin'
                },
                  {
                    name:"user",
                    email:"user@gmail.com",
                    password:"user123",
                    gender:'male'
                }
        ];

        try{
            userData.forEach(async (user) => {
                let findUser =await User.findOne({email: user.email});
                if(!findUser){
                     await User.create(user);
                     console.log(`User ${user.name} created successfully.`);
                }
            });

        }catch(err){
            console.error("Error in seeding user table", err);
        }

    }

 }

 export default UserTableSeeder;