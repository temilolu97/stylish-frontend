import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import AdminTopnav from '../AdminTopnav/AdminTopnav';

const AllCategories = () => {
    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState({})
    const [modalShow, setModalShow] = useState(false);
    const [categoryValue, setCategoryValue] = useState('')

    useEffect(async()=>{
        const response = await axios.get("https://localhost:44381/api/Categories");
        setCategories(response.data)
    },[categories])

    const handleDelete=async(id)=>{
        await axios.delete(`https://localhost:44381/api/Categories/${id}`,{
          headers:{
            'Authorization':JSON.parse(localStorage.getItem('user')).token,
            'content-type':'application/json'
          }
        })
        toast.success('Category successfully deleted');
  
      }
    
      const AddNewCategory =async(e)=>{
        e.preventDefault()
        const response = await axios.post("https://localhost:44381/api/Categories",{name:categoryValue},{
            headers:{
                'Authorization':JSON.parse(localStorage.getItem('user')).token,
                'content-type':'application/json'
            }
        });
        setCategoryValue('')
    }

    const handleModal=(category)=>{
        setModalShow(true); 
        setCurrentCategory(category)
    }
  return (
    <div>
        <AdminTopnav/>
        <div className='container'>
        <h3 className='text-center mt-3'>All Categories</h3>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
              
            {categories.length > 0 &&
              categories.map((category, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{category.name}</td>
                  <td>
                    <div className="d-flex g-2">
                      <button
                        className="btn btn-info mr-1"
                        onClick={()=>{handleModal(category)}}
                      >
                        Edit
                      </button>
                      <button className="btn btn-danger" onClick={()=>{handleDelete(category.id)}}>Delete</button>
                      <Toaster/>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div>
          <form className="form px-1 px-sm-5">
            <div className="form-group">
              <label htmlFor="add_category" className="form-label">
                Add Category
              </label>
              <input
                type="text"
                name="add_category"
                id="add_category"
                className="form-control"
                value={categoryValue}
                onChange={(e) => setCategoryValue(e.target.value)}
                required
              />
            </div>
            <button onClick={AddNewCategory} className="btn btn-success ms-auto me-auto mt-2">
              Submit
            </button>
          </form>
        </div>
        </div>
        
    </div>
  )
}

export default AllCategories