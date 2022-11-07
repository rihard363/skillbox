// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.75846806898367,37.60108849999989],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 15,
    controls: [],
  });
  var zoomControl = new ymaps.control.ZoomControl({
    options: {
        size: "small",
        position: {
          top: 273,
          right: 5,
        }
    }
  });

  myMap.controls.add('geolocationControl', {
    position: {
        right: 5,
        top: 360,
   }
});

  myMap.controls.add(zoomControl);
  var myPlacemark = new ymaps.Placemark(
    [55.75846806898367,37.60108849999989],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "./img/mapMetka.svg",
      iconImageSize: [20, 20],
      iconImageOffset: [-3, -42],
    }
  );
  myMap.geoObjects.add(myPlacemark);
}
