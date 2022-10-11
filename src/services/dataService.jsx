import axios from "axios"

// const apiURL = 'http://127.0.0.1:5000'
const apiURL = "https://aoc-guild-site-backend.onrender.com"

class DataService{

    async postResponse(response){
        console.log("Attempting to post response")

        await axios.post(apiURL + "/api/user-response", response).then(res =>{
            console.log(res.data)
        })
    }

    async getResponses(){
        console.log("Attempting to get responses")

        let data
        await axios.get(apiURL + "/api/user-response").then(res =>{
            console.log(res.data)
            data = res.data
        })

        return data
    }

    async getGuildData(){
        console.log("Attempting to get guild data..")

        let data
        await axios.get(apiURL + "/api/guild-data").then(res =>{
            console.log(res.data)
            data = res.data
        })

        return data
    }

    async updateGuildData(response){
        console.log("Attempting to update Guild Data")

        await axios.post(apiURL + "/api/guild-data", response).then(res =>{
            console.log(res.data)
        })
    }


}

export default DataService