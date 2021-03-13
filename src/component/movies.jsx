import React, { Component, useState } from 'react';
import {getMovies} from "../Services/fakeMovieService.js";
import Pagination from "./common/pagination.jsx"
import {paginate} from "../utils/paginate"

function Movies(){

     const [movies,setMovies] = useState(getMovies());
     const [pageSize,setPageSize] = useState(4);
     const [currPage,setCurrPage] = useState(1);

     const Movies = paginate(movies,currPage,pageSize);

    function handleDelete(movie){
         const Movies = movies.filter(m => m._id !== movie._id);
         setMovies(Movies);
         
     };

     function handlelen(){
         return movies.length
        } 

    function handlePageChange(page){
        setCurrPage(page);
     };
        
        if (handlelen() === 0){
            return <div>
                <h2>There are no Movies in the data Base</h2>
            </div>
        }

        return (
             <React.Fragment>
                 <h2 className="m-2" style={{fontStyle:"Bold"}}>There are {handlelen()} movies in the database</h2>
                 <br/>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {Movies.map( (movie => 
                   <tr key = {movie._id}>
                       <td>{movie.title}</td>
                       <td>{movie.genre.name}</td>
                       <td>{movie.numberInStock}</td>
                       <td>{movie.dailyRentalRate}</td>
                       <td><button onClick={() => {handleDelete(movie)}} className="btn btn-danger">Delete</button></td>
                   </tr> 
                    ))}
                </tbody>

            </table>

            <Pagination currPage={currPage} onPageChange = {handlePageChange} len={movies.length} pageSize={pageSize} />

            </React.Fragment>
         );
    }

 
export default Movies;