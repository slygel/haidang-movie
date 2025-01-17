import axios from "axios";
import { BASE_URL, API_KEY_PARAM } from "../config";
import {FAKE_POPULARS, FAKE_RECOMMENDATIONS} from "./fake-data";

export class TVShowAPI {
    static async fetchPopulars() {
        try{
            const response = await axios.get(`${BASE_URL}/tv/popular${API_KEY_PARAM}`);
            console.log(response.data.results);
            return response.data.results;
        }catch (error){
            alert("Something went wrong when fetching the popular tv shows");
        }
    }

    static async fetchRecommendations(tvShowId) {
        const response = await axios.get(
          `${BASE_URL}/tv/${tvShowId}/recommendations${API_KEY_PARAM}`
        );
        return response.data.results;

        // return FAKE_RECOMMENDATIONS;
    }

    static async fetchByTitle(title) {
        const response = await axios.get(
            `${BASE_URL}/search/tv${API_KEY_PARAM}&query=${title}`
        );
        return response.data.results;
    }
}