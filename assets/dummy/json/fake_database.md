```ts
interface User {
  firstName: string;
  company: string;
  lastName: string;
  id: string;
  _id: string;
  middleName: string;
  email: string;
  userName: string;
}

interface FakeDatabase {
  [key: string]: User;
}

interface Database {
  fakedatabase: FakeDatabase;
}

const jsonData: Database = {
  fakedatabase: {
    "2b40c6d0-9315-4a57-a9a1-de05ec1f9e8b": {
      firstName: "Slyvia",
      company: "De Wit Bedrijf",
      lastName: "Vos",
      id: "Slyvia Vos",
      _id: "2b40c6d0-9315-4a57-a9a1-de05ec1f9e8b",
      middleName: "Lowell",
      email: "slyvia@vos.nl",
      userName: "slyvia_vos",
    },
    "2b40c6d0-d8b0-4c7b-849a-968e7a883a34": {
      firstName: "Latrice",
      company: "Van Leeuwen Bedrijf",
      lastName: "Smit",
      id: "Latrice Smit",
      _id: "2b40c6d0-d8b0-4c7b-849a-968e7a883a34",
      middleName: "Deonna",
      email: "latrice@smit.nl",
      userName: "latrice_smit",
    },
    // Add more users if needed
  },
};
```

// Example usage

```js
const user1: User = jsonData.fakedatabase["2b40c6d0-9315-4a57-a9a1-de05ec1f9e8b"];
console.log(user1.firstName); // Output: Slyvia
```
