let dataJuraganMobil = [
  {
    noPolice: "D 1001 UM",
    vehicleType: "SUV",
    year: "2010",
    price: 350000000,
    tax: 3500000,
    seat: 4,
    transactionDate: "10/01/2023",
    rent: 500000,
    driver: 150000,
    order: 0,
    orderPerKM: 0,
  },
  {
    noPolice: "D 1002 UM",
    vehicleType: "SUV",
    year: "2010",
    price: 350000000,
    tax: 3500000,
    seat: 4,
    transactionDate: "10/01/2023",
    rent: 500000,
    driver: 150000,
    order: 0,
    orderPerKM: 0,
  },
  {
    noPolice: "D 1003 UM",
    vehicleType: "SUV",
    year: "2015",
    price: 350000000,
    tax: 3500000,
    seat: 5,
    transactionDate: "12/01/2023",
    rent: 500000,
    driver: 150000,
    order: 0,
    orderPerKM: 0,
  },
  {
    noPolice: "D 1004 UM",
    vehicleType: "SUV",
    year: "2015",
    price: 350000000,
    tax: 3500000,
    seat: 5,
    transactionDate: "13/01/2023",
    rent: 500000,
    driver: 150000,
    order: 0,
    orderPerKM: 0,
  },
  {
    noPolice: "D 11 UK",
    vehicleType: "Taxi",
    year: "2002",
    price: 175000000,
    tax: 1750000,
    seat: 4,
    transactionDate: "12/01/2023",
    rent: 0,
    driver: 0,
    order: 45,
    orderPerKM: 4500,
  },
  {
    noPolice: "D 12 UK",
    vehicleType: "Taxi",
    year: "2015",
    price: 225000000,
    tax: 2250000,
    seat: 4,
    transactionDate: "13/01/2023",
    rent: 0,
    driver: 0,
    order: 75,
    orderPerKM: 4500,
  },
  {
    noPolice: "D 13 UK",
    vehicleType: "Taxi",
    year: "2020",
    price: 275000000,
    tax: 2750000,
    seat: 4,
    transactionDate: "13/01/2023",
    rent: 0,
    driver: 0,
    order: 90,
    orderPerKM: 4500,
  },
  {
    noPolice: "ID8089",
    vehicleType: "PrivateJet",
    year: "2015",
    price: 150000000000,
    tax: 1500000000,
    seat: 12,
    transactionDate: "23/12/2022",
    rent: 35000000,
    driver: 15000000,
    order: 0,
    orderPerKM: 0,
  },
  {
    noPolice: "ID8089",
    vehicleType: "PrivateJet",
    year: "2018",
    price: 175000000000,
    tax: 1750000000,
    seat: 15,
    transactionDate: "25/12/2022",
    rent: 55000000,
    driver: 25000000,
    order: 0,
    orderPerKM: 0,
  },
];

interface infoSummary {
  GetTotalVehicle(type?: string): number; // ? ini dimasud dengan optional parameter
  GetTotalIncomeVehicle(type?: string): string;
}

class rentalService implements infoSummary {
  // bikin Property
  protected dataArray: any[];

  constructor(dataArray: any) {
    this.dataArray = dataArray;
  }

  GetTotalIncomeVehicle(type?: string): any {
    let total = 0;
    for (let getData of this.dataArray) {
      if (type == undefined) {
        total += getData.rent + getData.driver;
      } else if (getData.vehicleType == type) {
        total += getData.order * getData.orderPerKM;
      }
      // if (getData.rent == 0 && getData.driver == 0) {
      //   total += getData.order * getData.orderPerKM;
      // } else {
      //   total += getData.rent + getData.driver;
      // }
    }

    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(total);
  }

  GetTotalVehicle(type?: string): any {
    let total = 0;
    // console.log(type);

    for (let getData of this.dataArray) {
      if (type == undefined) {
        total++;
      } else {
        if (getData.vehicleType == type) {
          total++;
        }
      }
    }
    return total;
  }

  protected GetData() {
    return this.dataArray;
  }
  // if (type == undefined) {
  //   for (let getData of this.dataArray) {
  //     type == undefined
  //   }
  // } else {
  //   for (let getData of this.dataArray) {
  //     if (getData.vehicleType == type) {
  //       total++;
  //     }
  //   }
  // }

  //   for (let getData of this.dataArray) {
  //     if (getData.vehicleType == type) {
  //       total++;
  //     }
  //   }
  //   return total;
  // }
}

class juraganMobil extends rentalService implements infoSummary {
  constructor(dataArray: any[]) {
    super(dataArray);
  }

  GetDataChild(): any {
    return super.GetData();
  }

  // GetTotalIncomeVehicle(): string {
  //   let total = 0;
  //   for (let getData of this.dataArray) {
  //     if (getData.rent == 0 && getData.driver == 0) {
  //       total += getData.order * getData.orderPerKM;
  //     } else {
  //       total += getData.rent + getData.driver;
  //     }
  //   }

  //   return new Intl.NumberFormat("id-ID", {
  //     style: "currency",
  //     currency: "IDR",
  //   }).format(total);
  // }

  // GetTotalVehicle(): number {
  //   let total = 0;
  //   for (let getData in this.dataArray) {
  //     total++;
  //   }

  //   return total;
  // }

  // GetTotalIncomeVehicleType(type: string): string {
  //   return super.GetTotalIncomeVehicle(type);
  // }

  // GetTotalVehicleType(type: string): number {
  //   return super.GetTotalVehicle(type);
  // }
}

let juragan = new juraganMobil(dataJuraganMobil);

console.log(juragan.GetDataChild());

console.log(juragan.GetTotalVehicle());
// console.log(juragan.GetTotalVehicle("SUV"));
console.log(juragan.GetTotalVehicle("SUV"));
console.log(juragan.GetTotalIncomeVehicle("SUV"));
// console.log(juragan.GetTotalIncomeVehicle("SUV"));
console.log(juragan.GetTotalIncomeVehicle("Taxi"));
console.log(juragan.GetTotalIncomeVehicle("PrivateJet"));
console.log(juragan.GetTotalIncomeVehicle());

class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

// class Snake extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   move(distanceInMeters = 5) {
//     console.log("Slithering...");
//     super.move(distanceInMeters);
//   }
// }

// class Horse extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   move(distanceInMeters = 45) {
//     console.log("Galloping...");
//     super.move(distanceInMeters);
//   }
// }

// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");

// sam.move();
// tom.move(34);
