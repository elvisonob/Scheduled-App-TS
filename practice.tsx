type Elvis = {
  age: number;
  profession: string;
};

type Ese = {
  gender: string;
  height: number;
};

type Eric = {
  maritalStatus: string;
  location: string;
};

type AccessElvisEse = Elvis & Ese;

type AcessElvisEricEse = Elvis & Ese & Eric;
