// export const apiUrl = `http://localhost:8000/api`

module.exports ={
    apiUrl:
        process.env.NODE_ENV === "development" 
          ? "https://athlete101.herokuapp.com/api"
        : "http://localhost:8000/api"
      
}