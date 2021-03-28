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

interface CarCalculator {
  price: {
    min: number;
    max: number;
  },
  contribution: {
    min: number;
    max: number;
  },
  leasing: {
    min: number;
    max: number;
    selected: number
  },
  economy: number;
  payment: {
    month: number;
    day: number;
  }
}

interface Car {
  name: string;
  banner: CarBanner,
  calculator: CarCalculator
}

interface CarsKeyData {
  [key: string]: Car
}

interface Data {
  header: Header;
  cars: CarsKeyData;
}

export {Data, Car, Header, CarsKeyData, CarBanner, CarCalculator};
