fetch(
  `https://api.openweathermap.org/data/2.5/forecast?q=delhi&appid=9fd544ce77b58f31ccce1010b923cc09&units=metric`
)
  .then((apidata) => {
    return apidata.json()
  })
  .then((data) => {
    document.getElementById('temp').innerText = data.list[0].main.temp
    document.getElementById('humid').innerText = data.list[0].main.humidity
    document.getElementById('weather').innerText = data.list[0].weather[0].main
    document.getElementById('wind').innerText = data.list[0].wind.speed
    document.getElementById('state').innerText = data.city.name
    document.getElementById('country').innerText = data.city.country
    document.getElementById('wind_tomorrow').innerText = data.list[5].main.temp
    document.getElementById('humid_tomorrow').innerText =
      data.list[5].main.humidity
    document.getElementById('weath_tomorrow').innerText =
      data.list[5].wind.speed

    document.getElementById('wind_aft_tom').innerText = data.list[13].main.temp
    document.getElementById('humid_aft_tom').innerText =
      data.list[13].main.humidity
    document.getElementById('weath_aft_tom').innerText =
      data.list[13].wind.speed

    document.getElementById('wind_day_aft_tom').innerText =
      data.list[21].main.temp
    document.getElementById('humid_day_aft_tom').innerText =
      data.list[21].main.humidity
    document.getElementById('weath_day_aft_tom').innerText =
      data.list[21].wind.speed

    document.getElementById('wind_day_aft_aft_tom').innerText =
      data.list[29].main.temp
    document.getElementById('humid_day_aft_aft_tom').innerText =
      data.list[29].main.humidity
    document.getElementById('weath_day_aft_aft_tom').innerText =
      data.list[29].wind.speed
  })

navigator.geolocation.getCurrentPosition((getCurrentPosition) => {
  const longitude = getCurrentPosition.coords.longitude
  const latitude = getCurrentPosition.coords.latitude

  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
  )
    .then((apiread) => {
      return apiread.json()
    })
    .then((dataread) => {
      const city = dataread.locality
      console.log(city)
      document.getElementById('state').innerText = city

      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=9fd544ce77b58f31ccce1010b923cc09&units=metric`
      )
        .then((apidata) => {
          return apidata.json()
        })
        .then((data) => {
          document.getElementById('temp').innerText = data.list[0].main.temp
          document.getElementById('humid').innerText =
            data.list[0].main.humidity
          document.getElementById('weather').innerText =
            data.list[0].weather[0].main
          document.getElementById('wind').innerText = data.list[0].wind.speed
          document.getElementById('state').innerText = data.city.name
          document.getElementById('country').innerText = data.city.country
          document.getElementById('wind_tomorrow').innerText =
            data.list[5].main.temp
          document.getElementById('humid_tomorrow').innerText =
            data.list[5].main.humidity
          document.getElementById('weath_tomorrow').innerText =
            data.list[5].wind.speed

          document.getElementById('wind_aft_tom').innerText =
            data.list[13].main.temp
          document.getElementById('humid_aft_tom').innerText =
            data.list[13].main.humidity
          document.getElementById('weath_aft_tom').innerText =
            data.list[13].wind.speed

          document.getElementById('wind_day_aft_tom').innerText =
            data.list[21].main.temp
          document.getElementById('humid_day_aft_tom').innerText =
            data.list[21].main.humidity
          document.getElementById('weath_day_aft_tom').innerText =
            data.list[21].wind.speed

          document.getElementById('wind_day_aft_aft_tom').innerText =
            data.list[29].main.temp
          document.getElementById('humid_day_aft_aft_tom').innerText =
            data.list[29].main.humidity
          document.getElementById('weath_day_aft_aft_tom').innerText =
            data.list[29].wind.speed
        })
    })
})
