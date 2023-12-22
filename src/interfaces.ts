interface IWeatherItem {
    desc: string;
    icon: string;
    temp: number;
    wind:number;
}
export interface IOpenWeatherResponse {
    weather: IWeatherItem[];
    lon: number;
}
export interface ITaskObj{
    pendingArray: string[];
    completedArray: string [];
}
