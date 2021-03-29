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

interface Range {
  min: number;
  max: number;
  selected: number
}

interface CarCalculator {
  price: Range,
  contribution: Range,
  leasing: Range,
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
