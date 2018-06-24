import { observable, action, computed } from "mobx";
import axios from "axios";

class Series {
    @observable isLoading = false;
    @observable seriesRegistry = observable.map();

    @computed
    get series() {
        return Array.from(this.seriesRegistry.values());
    }

    @action
    async loadSeries() {
        this.isLoading = true;
        const response = await axios.get("https://www.episodate.com/api/most-popular?page=1");
        response.data.tv_shows.forEach(
            action(series => this.seriesRegistry.set(series.id, series)),
        );
        this.isLoading = false;
        return Promise.resolve();
    }
}

export const series = new Series();
