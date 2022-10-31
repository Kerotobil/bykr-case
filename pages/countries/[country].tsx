import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getCountry } from '../../helpers/axios/axios-api-client';
import { country } from '../../types';

export default function Country() {
  const router = useRouter();
  const [country, setCountry] = useState<country>();

  async function getCountryService(countyName: string) {
    const countryData = await getCountry(countyName);
    setCountry(countryData[0]);
  }

  useEffect(() => {
    if (router.isReady) {
      getCountryService(`${router.query.country}`);
    }
  }, [router.isReady]);

  return (
    <div>
      <div>
        {country?.name && (
          <div className="m-6 text-black ">
            <h2 className="text-center"> {country.name.common}</h2>
            <div className="max-w-3xl mx-auto mt-6">
              <p className="text-black">Region: {country.region} </p>
              <p className="text-black">Capital: {country.capital} </p>
              <p className="text-black">Flag: {country.flag} </p>
              <p className="text-black">
                Language:
                <span className="ml-2">
                  {Object.keys(country.languages)
                    .map((item, index) => country.languages[item])
                    .map((item2, index2) => {
                      return `${item2} ${index2 == Object.keys(country.languages).length - 1 ? '' : ','}`;
                    })}
                </span>
              </p>
              <p className="text-black">Population: {country.population.toLocaleString('en-US')} </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
