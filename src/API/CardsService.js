import axios from "axios";

export default class CardsService{
    static async getAll(page = 1){
        const response =  await axios
        .get("https://rickandmortyapi.com/api/character/?page=" + page)
        return response.data.results;
    }

    static async getTotalPages(page = 1){
        const response =  await axios
        .get("https://rickandmortyapi.com/api/character/?page=" + page)
        return response.data.info.pages;
    }

    static async searchName(name){
        const response =  await axios
        .get("https://rickandmortyapi.com/api/character/?name=" + name)
        .catch(error=>console.log(error))
        return response.data.results;
    }

    static async getCharacter(id){
        const response =  await axios
        .get("https://rickandmortyapi.com/api/character/" + id)
        return response.data;
    }
}