const CarsData = `{
  "header": {
    "region": "Москва и МО",
    "phone": "8 800 301 92 62"
  },
  "cars": {
    "solaris": {
      "name": "Hyundai Solaris",
      "banner": {
        "brand": "Hyundai",
        "model": "Solaris",
        "type": "Gran Coupe",
        "image": "./img/solaris.png"
      },
      "calculator": {
        "price": {
          "min": 500000,
          "max": 1500000,
          "selected": 1000000
        },
        "contribution": {
          "min": 10,
          "max": 49,
          "selected": 10
        },
        "leasing": {
          "min": 1,
          "max": 48,
          "selected": 36
        },
        "economy": 224126,
        "payment": {
          "month": 34150,
          "day": 999
        }
      }
    }
  }
}`;

export default CarsData;
