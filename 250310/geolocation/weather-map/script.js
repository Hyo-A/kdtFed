const url =
  "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=HGcamping&serviceKey=LAEoVvvnumcMIs06eJ%2Bx6Hstnu3%2FlY7bjoXysTu4%2B0fdjt9%2BYvl6qk5fEP61n0I%2BDOSV%2BQS1yuMVeCL0JIaz7Q%3D%3D&_type=json";

fetch(url)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    const data = result.response.body.items.item;
    const showPosition = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      // console.log(latitude, longitude);

      var container = document.getElementById("map");

      var options = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 3,
      };

      var map = new kakao.maps.Map(container, options);

      var clusterer = new kakao.maps.MarkerClusterer({
        map: map,
        averageCenter: true,
        minLevel: 10,
      });

      // var positions = [
      //   {
      //     title: `<div style="padding:5px; font-size:0.9rem">EZEN DX Center</div>`,
      //     latlng: new kakao.maps.LatLng(latitude, longitude),
      //   },
      //   {
      //     title: `<div style="padding:5px; font-size:0.9rem">라그릴리아 SPC스퀘어점</div>`,
      //     latlng: new kakao.maps.LatLng(37.4943415, 127.0299322),
      //   },
      //   {
      //     title: `<div style="padding:5px; font-size:0.9rem">타코치바스코 강남점</div>`,
      //     latlng: new kakao.maps.LatLng(37.4969857, 127.0298695),
      //   },
      //   {
      //     title: `<div style="padding:5px; font-size:0.9rem">구스아일랜드 브루하우스</div>`,
      //     latlng: new kakao.maps.LatLng(37.4933047, 127.0322332),
      //   },
      //   {
      //     title: `<div style="padding:5px; font-size:0.9rem">로티바 Raw tea bar</div>`,
      //     latlng: new kakao.maps.LatLng(37.494391, 127.0323818),
      //   },
      // ];

      let markers = [];

      for (var i = 0; i < data.length; i++) {
        var marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(data[i].mapY, data[i].mapX),
          // title: positions[i].title,
        });

        markers.push(marker);

        var infowindow = new kakao.maps.InfoWindow({
          content: data[i].facltNm,
        });

        function makeOverListener(map, marker, infowindow) {
          return function () {
            infowindow.open(map, marker);
          };
        }

        function makeOutListener(infowindow) {
          return function () {
            infowindow.close();
          };
        }

        kakao.maps.event.addListener(
          marker,
          "mouseover",
          makeOverListener(map, marker, infowindow)
        );

        kakao.maps.event.addListener(
          marker,
          "mouseout",
          makeOutListener(infowindow)
        );
      }

      clusterer.addMarkers(markers);
    };

    const errPosition = (err) => {
      alert(err.message);
    };

    window.navigator.geolocation.getCurrentPosition(showPosition, errPosition);
  });
