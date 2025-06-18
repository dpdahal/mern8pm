 import Category from "../models/Category.js";

 class CategoryTableSeeder{

    static async seed() {
        let categoryData=[
                {
                    name:"education",
                    slug:"education",
                
                },
                  {
                    name:"sports",
                    slug:"sports",
                },
                {
                    name:"entertainment",
                    slug:"entertainment",
                },
                {
                    name:"health",
                    slug:"health",
                },
                {
                    name:"technology",
                    slug:"technology",
                }
        ];

        try{
            categoryData.forEach(async (cat) => {
                let findCat =await Category.findOne({slug: cat.slug});
                if(!findCat){
                     await Category.create(cat);
                     console.log(`Category ${cat.name} created successfully.`);
                }
            });

        }catch(err){
            console.error("Error in seeding user table", err);
        }

    }

 }

 export default CategoryTableSeeder;