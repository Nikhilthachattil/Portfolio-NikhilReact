import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

function WeatherApp() {
  const API_KEY = "9bcffa3091b841339f574027232509";
  const [district, setDistrict] = useState("");
  const fetchWeather = () => {
    return axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${district}&aqi=no`
    );
  };
  const { data, refetch } = useQuery("weather", fetchWeather, {
    enabled: false,
  });
  console.log(data);
  return (
    <div className="container text-center my-11 mx-auto text-dcream h-full w-full font-Dancing">
      <h1 class="font-thin xs:mx-auto lg:mx-0 rounded-t-xl mb-2 py-2 text-lg bg-mgreen shadow-xl">
        Weather App
      </h1>

      <div class="relative my-1 mx-auto text-mgreen">
        <input
          onChange={(e) => setDistrict(e.target.value)}
          class="border-[1px] border-mgreen bg-dcream h-10 px-16 rounded-md text-sm focus:outline-none shadow-lg my-2"
          type="search"
          name="search"
          placeholder="Search"
        />
        <button className="absolute right-0 top-0 m-4" onClick={refetch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <div class=" flex items-center text-center justify-center ">
        <div class="flex flex-col py-2 bg-dred rounded-md shadow-xl px-5 w-full max-w-xs">
          <div class="font-thin text-xl">{data?.data?.location.name}</div>
          <div class="text-xl px-10 text-dcream">
            {data?.data?.location.localtime}
          </div>
          <div class="text-xl self-center inline-flex items-center justify-center text-dcream h-12 w-12">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              ></path>
            </svg>
          </div>
          <div class="flex flex-row items-center justify-center mt-6">
            <div class="font-medium text-xl">
              {data?.data?.current.temp_c}&#8451;
            </div>
            <div class="flex flex-col items-center ml-6">
              <div>Cloudy</div>
              <div class="mt-1">
                <span class="text-sm">
                  <i class="far fa-long-arrow-up"></i>
                </span>
                <span class="text-sm font-light text-gray-500">
                  {data?.data?.current.cloud}&#8451;
                </span>
              </div>
              <div>
                <span class="text-sm">
                  <i class="far fa-long-arrow-down"></i>
                </span>
                <span class="text-sm font-light text-gray-500">
                  {data?.data?.current.cloud}&#8451;
                </span>
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-between mt-6">
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Wind</div>
              <div class="text-sm text-gray-500">
                {data?.data?.current.wind_mph}k/h
              </div>
            </div>
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Humidity</div>
              <div class="text-sm text-gray-500">
                {data?.data?.current.humidity}&#8451;
              </div>
            </div>
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Visibility</div>
              <div class="text-sm text-gray-500">
                {data?.data?.current.vis_km}k/h
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
