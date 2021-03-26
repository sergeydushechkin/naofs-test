interface Header {
  region: string;
  phone: string;
}

interface Car {
  name: string;
  banner: {
    brand: string;
    model: string;
    type: string;
    image: string;
  },
  calculator: {
    price: {
      min: string;
      max: string;
    },
    contribution: {
      min: string;
      max: string;
    },
    leasing: {
      min: string;
      max: string;
    },
    economy: string;
    payment: {
      month: string;
      day: string;
    }
  }
}

interface CarsKeyData {
  [key: string]: Car
}

interface Data {
  header: Header;
  cars: CarsKeyData;
}

export {Data, Car, Header, CarsKeyData};
