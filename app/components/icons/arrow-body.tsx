import Image from "next/image";
import ArrowBodyInc from "public/assets/icons/arrow-bodyinc.svg";

type Props = {
  textColor?: string;
};

export const ArrowBody = ({ textColor }: Props) => {
  return (
    <div className="flex w-full">
      <Image
        src={ArrowBodyInc}
        width={58}
        height={58}
        alt="arrow"
        className="w-full flex-1 h-[58px]"
        style={{
          backgroundImage: `url("https://previews.dropbox.com/p/thumb/ACHYAYvYJ4zHkuTBJSqofVFLpw0mxty20dv6HC1K92022G8mH-EVJ0sAmDXwk3tM_zEMxbDHtjg4VnTNrP-Z4sF76abgMLhJ-Kn_dEnvkEQZvrzoKrY9PdPfuvDGYrBe6WVsDfcbcHqG3heOfi1hDu3IZsOY2fDIDzqF_d8uM_9r0bvKqlfgyy5qR8SnMybpX9KYk1Xio9AenoWGS7ihVCHy58QXv6JMCDZNLkiG7EP3crNSIGof-lGZIoweihMi4Xiwi0H7MEkk56OQ9J0V1aCWY8wRsEru1KNQHNin-PTXHEi9oX5oVXmI1GQJis4rQlKLTVWGzWHD9qhFYt6IB4nF/p.png")`,
          backgroundPosition: "0%",
          backgroundSize: "auto 100%",
        }}
      />
      <div className="w-[58px] h-[58px] min-h-[58px] min-w-[58px]">
        <svg
          className="w-full"
          viewBox="0 0 58 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50.1279 28.9762H0V33.2002H50.1279L39.952 43.3282L42.64 46.0162L57.568 31.0882L42.64 16.1602L39.952 18.8002L50.1279 28.9762Z"
            fill="black"
          ></path>
        </svg>
      </div>
    </div>
  );
};
