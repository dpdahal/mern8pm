import CategoryTableSeeder from "./CategoryTableSeeder.js";
import UserTableSeeder from "./UserTableSeeder.js";
class DatabaseTableSeeder{

    static run(){
       UserTableSeeder.seed();
       CategoryTableSeeder.seed();
    }

}

export default DatabaseTableSeeder;