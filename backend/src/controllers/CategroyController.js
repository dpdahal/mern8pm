import Category from "../models/Category.js";

class CategoryController {

    async index(req, res) {
        let cat = await Category.find({});
        return res.json(cat);
    }
    async store(req, res) {
        try {
            let cat = await Category.create({ ...req.body });
            return res.json(cat);
        } catch (error) {
            return res.status(400).json({ message: "Error creating category", error: error.message });
        }
    }

    async show(req, res) {
        let id = req.params.id;
        let cat = await Category.findById(id);
        if (!cat) {
            return res.status(404).json({ message: "Category not found" });
        } else {
            return res.json(cat);
        }
    }

    async update(req, res) {
        let id = req.params.id;
        let cat = await Category.findById(id);
        if (!cat) {
            return res.status(404).json({ message: "Category not found" });
        } else {
            await Category.findByIdAndUpdate(id, { ...req.body });
            return res.json({ message: "Category updated successfully" });
        }
    }


    async delete(req, res) {
        let id = req.params.id;
        let cat = await Category.findByIdAndDelete(id);
        if (!cat) {
            return res.status(404).json({ message: "Category not found" });
        } else {
            return res.json({ message: "Category deleted successfully" });
        }
    }

}

export default CategoryController;