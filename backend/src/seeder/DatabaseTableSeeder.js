import UserTableSeeder from "./UserTableSeeder.js";
class DatabaseTableSeeder{

    static run(){
       UserTableSeeder.seed();
    }

}

export default DatabaseTableSeeder;