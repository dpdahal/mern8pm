import React,{useState} from 'react';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGetCategoryQuery } from '../store/reducers/categorySlice';
import { useAddNewsMutation } from '../store/reducers/newsSlice';

let newsSchema = yup.object().shape({
    categoryId: yup.string().required(),
    title: yup.string().required(),
    slug: yup.string().required(),
    description: yup.string().required(),

});

function AddNewsComponent() {
    const { setError, register, handleSubmit, formState: { errors } } =
        useForm({
            resolver: yupResolver(newsSchema)
        });
    let pStyle = {
        color: "#f60000",
    }
    const { data: categories, isLoading, isError } = useGetCategoryQuery();
    const [addNews, { isLoading: isAdding }] = useAddNewsMutation();
    const [image, setImage] = useState(null);

    const insertNews=(data)=>{
        let formData = new FormData();
        formData.append("categoryId", data.categoryId);
        formData.append("title", data.title);
        formData.append("slug", data.slug);
        formData.append("description", data.description);
        formData.append("image", image);
        addNews(formData).unwrap()
            .then((res) => {
                alert("News added successfully");
                setImage(null);
            })
            .catch((err) => {
                if (err.data) {
                    for (let key in err.data) {
                        setError(key, { type: "manual", message: err.data[key] });
                    }
                } else {
                    alert("Something went wrong");
                }
            });


    }


    return (
        <React.Fragment>
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Add News</h5>
                        <hr />
                        <form action="" onSubmit={handleSubmit(insertNews)}>
                            <div className="form-group mb-2">
                                <label htmlFor="categoryId">Category:
                                    {errors.categoryId && <span style={pStyle}>{errors.categoryId.message}</span>}
                                </label>
                                <select name="categoryId" className="form-control"
                                    {...register("categoryId")}>
                                    <option value="">Select Category</option>
                                    {
                                        isLoading ? <option value="">Loading...</option> :
                                            isError ? <option value="">Something went wrong</option> :
                                                categories.map((category,index) => (
                                                    <option key={index} value={category._id}>{category.name}</option>
                                                ))
                                    }
                                   
                                </select>
                            </div>
                            <div className="from-group mb-2">
                                <label htmlFor="title">Title:
                                    {errors.title && <span style={pStyle}>{errors.title.message}</span>}
                                </label>
                                <input type="text" name='title'
                                    {...register("title")}
                                    className='form-control' />
                            </div>
                            <div className="from-group mb-2">
                                <label htmlFor="slug">Slug:
                                    {errors.slug && <span style={pStyle}>{errors.slug.message}</span>}
                                </label>
                                <input type="text" name='slug'
                                    {...register("slug")}
                                    className='form-control' />
                            </div>
                            <div className="from-group mb-2">
                                <label htmlFor="description">Description:
                                    {errors.description && <span style={pStyle}>{errors.description.message}</span>}
                                </label>
                                <textarea name='description'
                                    {...register("description")}
                                    className='form-control' rows="5"></textarea>
                            </div>
                            <div className="from-group mb-2">
                                <label htmlFor="image">Image:</label>
                                <input type="file" name='image'
                                    onChange={(e) => setImage(e.target.files[0])}
                                    className='form-control' />
                            </div>
                            <div className="from-group mb-2">
                                <button type="submit" className='btn btn-primary'>Add News</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AddNewsComponent