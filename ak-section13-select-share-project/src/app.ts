import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const API_KEY = "AIzaSyAKcOKBA7oqB6PfB4bRFaZJtSTZ7rvxoiY";

declare var google: any;

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

async function searchAddressHandler(ev: Event) {
  ev.preventDefault();

  const enteredAddress = addressInput.value;

  const response = await axios.get<GoogleGeocodingResponse>(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
      enteredAddress
    )}&key=${API_KEY}`
  );

  if (response.data.status !== "OK") {
    throw new Error("Could not fetch location!");
  }

  const coordinates = response.data.results[0].geometry.location;

  const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: coordinates,
    zoom: 16,
  });

  new google.maps.Marker({position: coordinates, map: map})

  console.log(coordinates);
}

form.addEventListener("submit", searchAddressHandler);
