interface Header {
  region: string;
  phone: string;
}

interface CarBanner {
  brand: string;
  model: string;
  type: string;
  image: string;
}

interface Calculator {
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

interface Car {
  name: string;
  banner: CarBanner,
  calculator: Calculator
}

interface CarsKeyData {
  [key: string]: Car
}

interface Data {
  header: Header;
  cars: CarsKeyData;
}

export {Data, Car, Header, CarsKeyData, CarBanner, Calculator};
