import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { UpLoadeImage } from '../../ReduxStore/Slice/admin/AdminSlice';
import axios from 'axios';

const UploadProduct = () => {
    const dispatch = useDispatch();
    const [productName, setProductName] = useState('');
    const [image, setImage] = useState(null);
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');


    const Id = JSON.parse(localStorage.getItem('user_Details'))._id;

    const uploadImg = async () => {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'e_commers');
        try {
            const url = `https://api.cloudinary.com/v1_1/dlpeqbowx/image/upload`;
            const dataResponse = await axios.post(url, formData);
            const { secure_url } = dataResponse.data;
            console.log("Image uploaded:", secure_url);
            return secure_url;
        } catch (error) {
            console.error("Error in uploading the image", error);
            throw new Error("Image upload failed");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const imgURL = await uploadImg();
            const data = { productName, image: imgURL, price, description, category , shellerId:Id };
            const response = await dispatch(UpLoadeImage(data)).unwrap();
            if (response.status) {
                Swal.fire({
                    icon: 'success',
                    title: 'Product Uploaded',
                    text: 'Product Uploaded Successfully',
                    timer: 1500,
                    timerProgressBar: true,
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    timer: 1500,
                    timerProgressBar: true,
                });
            }
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Upload Failed',
                text: 'Could not upload the product',
                timer: 1500,
                timerProgressBar: true,
            });
        }
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Upload Product
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                            Product Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                placeholder="Enter your product name"
                                required
                                onChange={(e) => setProductName(e.target.value)}
                                value={productName}
                                className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">
                            Image
                        </label>
                        <div className="mt-2">
                            <input
                                id="image"
                                name="image"
                                type="file"
                                autoComplete="image"
                                required
                                onChange={(e) => setImage(e.target.files[0])}
                                className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                            Price
                        </label>
                        <div className="mt-2">
                            <input
                                id="price"
                                name="price"
                                type="text"
                                autoComplete="price"
                                placeholder="Enter the price"
                                required
                                onChange={(e) => setPrice(e.target.value)}
                                value={price}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                            Description
                        </label>
                        <div className="mt-2">
                            <input
                                id="description"
                                name="description"
                                type="text"
                                autoComplete="description"
                                placeholder="Enter the product description"
                                required
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                                className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                            Category
                        </label>
                        <div className="mt-2">
                            <input
                                id="category"
                                name="category"
                                type="text"
                                autoComplete="category"
                                placeholder="Enter the category"
                                required
                                onChange={(e) => setCategory(e.target.value)}
                                value={category}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Upload
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadProduct;
