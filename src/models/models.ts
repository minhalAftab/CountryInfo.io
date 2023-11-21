export interface CountryInfoDTO {
  name: string;
  region: string;
  flag: string;
  capital: string;
  population: number;
  languages: string[];
  currencies: string;
  center: {
    lat: number;
    lng: number;
  };
}

export type CountryInfoProps = {
  parsedCountryInfo: GetCountryInfoOutput;
  loading: boolean;
};

export type SeachCountryProps = {
  setParsedCountryInfo: React.Dispatch<React.SetStateAction<null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export type InfoCardProps = {
  header: string;
  content: string | number;
};

export type InfoRowProps = {
  header: string;
  content: string;
};

export interface GetCountryInfoOutput {
  status: 200 | 404;
  data: CountryInfoDTO;
  msg?: string;
}
