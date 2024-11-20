let center = [59.868085, 30.485003];

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 14
	});

  let placemark = new ymaps.Placemark(center, {}, {
		iconLayout: 'default#image',
		iconImageSize: [40, 40],
		iconImageOffset: [-19, -44]
	});

	map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark);
}

ymaps.ready(init);