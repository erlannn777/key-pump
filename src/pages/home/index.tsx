import React, { useRef, useState } from "react";
import PopProd from "../../components/popProd";
import Articles from "../../components/Articles/Articles";
import WeCallYou from "../../components/WeCallYou/WeCallYou";
import img from "../../img/carouselImg.png";
import advantagesImg from "./assets/advantages.png";
import carouselImg from "./assets/carouselImg.png";
import category1Img from "./assets/category1.png";
import category2Img from "./assets/category2.png";
import category3Img from "./assets/category3.png";
import category4Img from "./assets/category4.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import articlImg from "../articles/assets/articleImg.png";
import Consultation from "../../components/Consultation";
import { Link } from "react-router-dom";
import Slider from "./slider";
import { GoPrimitiveDot } from "react-icons/go";
import { TbCircleDot } from "react-icons/tb";

const Home = () => {
  const ref = useRef();
  const products = [
    {
      title: "ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС NIBE F1345",
      price: "1000000",
      id: 1,
      img: img,
      desc: "Геотермальный тепловой насос SILA GM-10 S (H) предназначен для использования в системах отопления и горячего водоснабжения...",
    },
    {
      title: "ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС NIBE F1345",
      price: "1000000",
      id: 2,
      img: img,
      desc: "Геотермальный тепловой насос SILA GM-10 S (H) предназначен для использования в системах отопления и горячего водоснабжения...",
    },
    {
      title: "ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС NIBE F1345",
      price: "1000000",
      id: 3,
      img: img,
      desc: "Геотермальный тепловой насос SILA GM-10 S (H) предназначен для использования в системах отопления и горячего водоснабжения...",
    },
  ];

  const advantages = [
    {
      label: "Экономия на газе, электричестве и топливе.",
      vector: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M63.207 33.9342C62.5499 32.7231 62.5499 31.2769 63.2068 30.0655C64.7116 27.2902 64.024 23.8329 61.5717 21.8448C60.5013 20.977 59.9478 19.6408 60.0909 18.2704C60.4193 15.1305 58.4609 12.1996 55.4344 11.3012C54.1134 10.9092 53.0908 9.88644 52.6987 8.56557C51.8003 5.53921 48.8695 3.58009 45.7296 3.90896C44.3585 4.05221 43.0227 3.49871 42.155 2.42834C40.1669 -0.0242712 36.7095 -0.712018 33.9343 0.79285C32.7229 1.4496 31.2768 1.4496 30.0654 0.79285C27.2904 -0.711894 23.8331 -0.0243964 21.8446 2.42809C20.9771 3.49846 19.6397 4.05234 18.2702 3.90871C15.1302 3.58009 12.1994 5.53883 11.301 8.56532C10.909 9.88619 9.88636 10.9089 8.56537 11.3009C5.53888 12.1993 3.58039 15.1302 3.90864 18.27C4.05189 19.6404 3.49851 20.9766 2.42802 21.8444C-0.024224 23.8325 -0.711971 27.2899 0.792898 30.0651C1.44977 31.2764 1.44977 32.7227 0.792898 33.934C-0.711971 36.7092 -0.024349 40.1666 2.42802 42.1547C3.49839 43.0224 4.05189 44.3587 3.90876 45.729C3.58039 48.8689 5.53875 51.7999 8.56537 52.6983C9.88636 53.0903 10.909 54.113 11.3011 55.4339C12.1995 58.4604 15.1301 60.4194 18.2702 60.0905C19.6416 59.9472 20.9771 60.5007 21.8448 61.5711C23.8328 64.0235 27.2903 64.7111 30.0655 63.2062C31.2769 62.5495 32.723 62.5495 33.9344 63.2062C34.9211 63.7412 35.9938 63.9991 37.0563 63.9991C38.9821 63.9991 40.8737 63.1515 42.1552 61.5711C43.0227 60.5007 44.3604 59.9475 45.7296 60.0905C45.9596 60.1145 46.1881 60.1264 46.4151 60.1264C49.2875 60.1262 51.8662 58.2387 52.6988 55.4338C53.0909 54.1129 54.1134 53.0901 55.4346 52.698C58.461 51.7996 60.4195 48.8688 60.0912 45.7289C59.9479 44.3586 60.5013 43.0223 61.5718 42.1546C64.0242 40.1667 64.7119 36.7095 63.207 33.9342ZM61.009 35.1262C61.9403 36.8435 61.5148 38.9828 59.9972 40.2132C58.2675 41.6156 57.3731 43.7749 57.6045 45.9897C57.8077 47.9325 56.5958 49.7463 54.7229 50.3022C52.5883 50.9358 50.9356 52.5885 50.302 54.7233C49.7462 56.5959 47.9345 57.8088 45.9895 57.6048C43.7747 57.3734 41.6155 58.2677 40.2131 59.9975C38.9827 61.5151 36.8434 61.9405 35.126 61.0094C34.1471 60.4785 33.0738 60.2132 31.9999 60.2132C30.9263 60.2132 29.8524 60.4787 28.8738 61.0094C27.1565 61.9407 25.0171 61.5151 23.7868 59.9976C22.3846 58.2679 20.2254 57.3731 18.0102 57.6049C16.0678 57.8085 14.2537 56.5963 13.6977 54.7234C13.0641 52.5886 11.4114 50.9359 9.27674 50.3023C7.404 49.7464 6.192 47.9327 6.39513 45.9898C6.62675 43.7752 5.73213 41.6158 4.00251 40.2134C2.48489 38.9832 2.05939 36.8438 2.99064 35.1263C4.05201 33.1688 4.05201 30.8316 2.99064 28.8739C2.05939 27.1566 2.48489 25.0173 4.00251 23.7869C5.73213 22.3845 6.62662 20.2251 6.39513 18.0104C6.192 16.0675 7.40387 14.2538 9.27674 13.6979C11.4114 13.0643 13.0641 11.4116 13.6977 9.27669C14.2535 7.40407 16.0662 6.19158 18.0102 6.3952C20.2249 6.6267 22.3843 5.73221 23.7866 4.00246C25.0169 2.48484 27.1564 2.0596 28.8737 2.99059C30.8312 4.05209 33.1683 4.05209 35.126 2.99059C36.8433 2.05922 38.9827 2.48484 40.213 4.00234C41.6152 5.73208 43.7734 6.62658 45.9896 6.39508C47.9322 6.19233 49.7462 7.4037 50.302 9.27657C50.9356 11.4113 52.5883 13.0641 54.7229 13.6975C56.5957 14.2534 57.8077 16.0672 57.6045 18.01C57.3729 20.2246 58.2675 22.384 59.9972 23.7864C61.5148 25.0166 61.9403 27.156 61.009 28.8735C59.9477 30.8312 59.9477 33.1686 61.009 35.1262Z"
            fill="#F7AB3A"
            stroke="#F7AB3A"
            stroke-width="0.7"
          />
          <path
            d="M43.9511 9.75062C39.2708 7.23438 33.7797 6.25539 28.4899 6.99389C23.0206 7.75738 18.0601 10.2305 14.1447 14.1459C10.4223 17.8683 7.98914 22.5702 7.10877 27.7428C6.24778 32.801 6.92252 37.9278 9.06001 42.5687C9.27089 43.0264 9.72326 43.2961 10.1961 43.2961C10.3711 43.2961 10.5489 43.2592 10.7184 43.1812C11.3455 42.8924 11.6196 42.15 11.3308 41.5229C7.36465 32.9118 9.20589 22.6202 15.9125 15.9135C22.958 8.86838 34.0007 7.23938 42.7671 11.9526C43.3751 12.2795 44.1333 12.0516 44.46 11.4436C44.787 10.8355 44.5591 10.0775 43.9511 9.75062Z"
            fill="#F7AB3A"
            stroke="#F7AB3A"
          />
          <path
            d="M54.1599 19.8825C53.8282 19.2768 53.0682 19.0548 52.4632 19.3861C51.8576 19.7176 51.6354 20.4773 51.9667 21.0828C56.7827 29.8815 55.1871 40.9857 48.0866 48.0863C41.3998 54.7731 31.4869 56.6344 22.8327 52.8281C22.2006 52.5503 21.4632 52.8371 21.1852 53.4691C20.9072 54.101 21.1942 54.8386 21.8261 55.1166C25.0483 56.5339 28.4943 57.2535 31.9762 57.2535C33.4714 57.2535 34.9734 57.1207 36.4673 56.8536C41.5567 55.9432 46.1858 53.5229 49.8546 49.8542C53.7932 45.9155 56.2707 40.9236 57.019 35.4181C57.7428 30.0911 56.7275 24.5739 54.1599 19.8825Z"
            fill="#F7AB3A"
            stroke="#F7AB3A"
          />
          <path
            d="M49.8873 14.178L49.8547 14.1454C49.3664 13.6573 48.5752 13.6573 48.0868 14.1454C47.5987 14.6335 47.5987 15.425 48.0868 15.9133L48.1195 15.9459C48.3637 16.19 48.6835 16.312 49.0034 16.312C49.3233 16.312 49.6432 16.19 49.8873 15.9459C50.3754 15.4578 50.3754 14.6663 49.8873 14.178Z"
            fill="#F7AB3A"
          />
          <path
            d="M47.8753 33.2503C47.8753 31.8331 47.028 30.6107 45.8138 30.061C45.978 29.6558 46.0693 29.2136 46.0693 28.7503C46.0693 26.8205 44.4991 25.2503 42.5693 25.2503H37.1334L37.4903 24.1905C38.054 22.517 37.9193 20.7307 37.1112 19.1606C36.3029 17.5905 34.9274 16.443 33.2381 15.9294C32.6017 15.7358 31.9253 16.0746 31.6989 16.7L29.7856 21.9882C29.2888 23.3611 28.3091 24.5017 27.0268 25.2L25.5072 26.0275C25.0023 25.5466 24.32 25.2503 23.5693 25.2503H18.1875C16.6367 25.2503 15.375 26.512 15.375 28.0628V42.9378C15.375 44.4886 16.6367 45.7503 18.1875 45.7503H23.5693C24.4296 45.7504 25.2003 45.3619 25.7167 44.7515L26.2878 44.9755C27.599 45.4898 28.9779 45.7505 30.3866 45.7505H41.0003C42.9301 45.7505 44.5003 44.1804 44.5003 42.2505C44.5003 41.7789 44.406 41.3292 44.2361 40.9182C45.4245 40.358 46.2493 39.149 46.2493 37.7505C46.2493 37.2596 46.1473 36.7922 45.9639 36.3677C47.0971 35.7874 47.8753 34.6084 47.8753 33.2503ZM23.882 42.9378C23.882 43.11 23.7418 43.2503 23.5695 43.2503H18.1876C18.0152 43.2503 17.8751 43.1102 17.8751 42.9378V28.0628C17.8751 27.8906 18.0152 27.7503 18.1876 27.7503H23.5695C23.6965 27.7503 23.8055 27.8267 23.8543 27.9357C23.8611 27.9686 23.8696 28.0012 23.8791 28.0337C23.88 28.0435 23.882 28.0528 23.882 28.0628V42.9378ZM44.3753 34.2506H38.7502C38.0599 34.2506 37.5002 34.8102 37.5002 35.5006C37.5002 36.1909 38.0599 36.7506 38.7502 36.7506H42.7491C43.3005 36.7506 43.7491 37.1992 43.7491 37.7505C43.7491 38.3019 43.3005 38.7505 42.7491 38.7505H38.7502C38.0599 38.7505 37.5002 39.3102 37.5002 40.0005C37.5002 40.6909 38.0599 41.2505 38.7502 41.2505H41.0002C41.5515 41.2505 42.0001 41.6992 42.0001 42.2505C42.0001 42.8019 41.5515 43.2505 41.0002 43.2505H40.0752H30.3864C29.2916 43.2505 28.2197 43.0478 27.2006 42.6482L26.3818 42.327V28.3978L28.2225 27.3956C30.0417 26.405 31.4318 24.7867 32.1366 22.8389L33.5863 18.8321C34.1313 19.2004 34.5782 19.7019 34.8885 20.3049C35.3847 21.2686 35.4673 22.3651 35.1213 23.3925L34.2089 26.1013C34.0804 26.4828 34.1436 26.9027 34.3783 27.2296C34.6131 27.5565 34.9909 27.7503 35.3934 27.7503H42.5693C43.1206 27.7503 43.5693 28.199 43.5693 28.7503C43.5693 29.3017 43.1206 29.7503 42.5693 29.7503H38.7502C38.0599 29.7503 37.5002 30.31 37.5002 31.0003C37.5002 31.6907 38.0599 32.2503 38.7502 32.2503L44.3753 32.2504C44.9266 32.2504 45.3753 32.6991 45.3753 33.2504C45.3753 33.8018 44.9266 34.2506 44.3753 34.2506Z"
            fill="#F7AB3A"
          />
        </svg>
      ),
    },
    {
      label: "Источник тепла не закончится ближайшие 5 000 лет.",
      vector: (
        <svg
          width="55"
          height="55"
          viewBox="0 0 55 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M52.2812 23.6875H50.375V16.0625H46.5625V23.6875H42.75V16.0625H38.9375V23.6875H37.0312C36.5257 23.6875 36.0408 23.8883 35.6833 24.2458C35.3258 24.6033 35.125 25.0882 35.125 25.5938V33.2188C35.1279 35.4149 35.8878 37.5429 37.2768 39.2441C38.6658 40.9452 40.5988 42.1154 42.75 42.5575V48.4688C42.75 48.9743 42.5492 49.4592 42.1917 49.8167C41.8342 50.1742 41.3493 50.375 40.8438 50.375H6.53125C6.02568 50.375 5.54082 50.1742 5.18333 49.8167C4.82584 49.4592 4.625 48.9743 4.625 48.4688C4.625 47.9632 4.82584 47.4783 5.18333 47.1208C5.54082 46.7633 6.02568 46.5625 6.53125 46.5625H16.0625C17.5792 46.5625 19.0338 45.96 20.1063 44.8875C21.1787 43.815 21.7812 42.3605 21.7812 40.8438C21.7812 39.327 21.1787 37.8725 20.1063 36.8C19.0338 35.7275 17.5792 35.125 16.0625 35.125H6.53125C6.02568 35.125 5.54082 34.9242 5.18333 34.5667C4.82584 34.2092 4.625 33.7243 4.625 33.2188C4.625 32.7132 4.82584 32.2283 5.18333 31.8708C5.54082 31.5133 6.02568 31.3125 6.53125 31.3125H16.0625C17.5787 31.311 19.0324 30.708 20.1046 29.6358C21.1767 28.5637 21.7797 27.11 21.7812 25.5938V17.9688H23.6875C25.709 17.9662 27.647 17.1621 29.0764 15.7327C30.5058 14.3032 31.31 12.3653 31.3125 10.3438V4.625H25.5938C23.642 4.62788 21.7665 5.383 20.3573 6.73331C19.3698 4.94148 17.92 3.44713 16.1589 2.40581C14.3977 1.3645 12.3897 0.814303 10.3438 0.8125H4.625V6.53125C4.62853 9.56358 5.83468 12.4707 7.97887 14.6149C10.123 16.7591 13.0302 17.9652 16.0625 17.9688H17.9688V25.5938C17.9688 26.0993 17.7679 26.5842 17.4104 26.9417C17.0529 27.2992 16.5681 27.5 16.0625 27.5H6.53125C5.01454 27.5 3.55996 28.1025 2.48748 29.175C1.41501 30.2475 0.8125 31.702 0.8125 33.2188C0.8125 34.7355 1.41501 36.19 2.48748 37.2625C3.55996 38.335 5.01454 38.9375 6.53125 38.9375H16.0625C16.5681 38.9375 17.0529 39.1383 17.4104 39.4958C17.7679 39.8533 17.9688 40.3382 17.9688 40.8438C17.9688 41.3493 17.7679 41.8342 17.4104 42.1917C17.0529 42.5492 16.5681 42.75 16.0625 42.75H6.53125C5.01454 42.75 3.55996 43.3525 2.48748 44.425C1.41501 45.4975 0.8125 46.952 0.8125 48.4688C0.8125 49.9855 1.41501 51.44 2.48748 52.5125C3.55996 53.585 5.01454 54.1875 6.53125 54.1875H40.8438C42.36 54.186 43.8137 53.583 44.8858 52.5108C45.958 51.4387 46.561 49.985 46.5625 48.4688V42.5575C48.7137 42.1154 50.6467 40.9452 52.0357 39.2441C53.4247 37.5429 54.1846 35.4149 54.1875 33.2188V25.5938C54.1875 25.0882 53.9867 24.6033 53.6292 24.2458C53.2717 23.8883 52.7868 23.6875 52.2812 23.6875ZM21.7812 12.25C21.7823 11.2392 22.1843 10.27 22.899 9.55527C23.6138 8.84051 24.5829 8.43851 25.5938 8.4375H27.5V10.3438C27.499 11.3546 27.097 12.3237 26.3822 13.0385C25.6675 13.7532 24.6983 14.1552 23.6875 14.1562H21.7812V12.25ZM16.0625 14.1562C14.041 14.1537 12.103 13.3496 10.6736 11.9202C9.24418 10.4907 8.44002 8.55275 8.4375 6.53125V4.625H10.3438C12.3653 4.62752 14.3032 5.43168 15.7327 6.8611C17.1621 8.29051 17.9662 10.2285 17.9688 12.25V14.1562H16.0625ZM50.375 33.2188C50.375 34.7355 49.7725 36.19 48.7 37.2625C47.6275 38.335 46.173 38.9375 44.6562 38.9375C43.1395 38.9375 41.685 38.335 40.6125 37.2625C39.54 36.19 38.9375 34.7355 38.9375 33.2188V27.5H50.375V33.2188Z"
            fill="#F7AB3A"
          />
        </svg>
      ),
    },
    {
      label: "Тепловой насос не взрывается и не горит, он абсолютно безопасен.",
      vector: (
        <svg
          width="46"
          height="56"
          viewBox="0 0 46 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M44.4881 7.28691L23.9143 0.275586C23.666 0.19082 23.333 0.148438 23 0.148438C22.667 0.148438 22.334 0.19082 22.0857 0.275586L1.51191 7.28691C1.00938 7.45644 0.597656 8.0377 0.597656 8.57051V37.7783C0.597656 38.3111 0.942774 39.0135 1.36055 39.3465L22.2311 55.6094C22.443 55.7729 22.7154 55.8576 22.9939 55.8576C23.2725 55.8576 23.551 55.7729 23.7568 55.6094L44.6273 39.3465C45.0451 39.0195 45.3902 38.3172 45.3902 37.7783V8.57051C45.4023 8.0377 44.9906 7.4625 44.4881 7.28691ZM41.043 36.6158L23 50.6748L4.95703 36.6158V10.726L23 4.57441L41.043 10.726V36.6158ZM16.473 24.4459C16.2914 24.1977 16.0008 24.0463 15.6859 24.0463H12.3438C11.9502 24.0463 11.7201 24.4943 11.9502 24.8152L19.6033 35.3504C19.6938 35.4743 19.8123 35.575 19.949 35.6445C20.0858 35.7139 20.237 35.7501 20.3904 35.7501C20.5438 35.7501 20.6951 35.7139 20.8318 35.6445C20.9686 35.575 21.087 35.4743 21.1775 35.3504L34.0498 17.6283C34.2799 17.3074 34.0498 16.8594 33.6562 16.8594H30.3141C30.0053 16.8594 29.7086 17.0107 29.527 17.259L20.3904 29.8406L16.473 24.4459Z"
            fill="#F7AB3A"
          />
        </svg>
      ),
    },
  ];

  const popular = [
    {
      title: "ТЕПЛОВОЙ НАСОС ДЛЯ БАССЕЙНА SILA AM-07 IS (HC)",
      price: "33 000",
      img: carouselImg,
    },
    {
      title: "ТЕПЛОВОЙ НАСОС ДЛЯ БАССЕЙНА SILA AM-07 IS (HC)",
      price: "33 000",
      img: carouselImg,
    },
    {
      title: "ТЕПЛОВОЙ НАСОС ДЛЯ БАССЕЙНА SILA AM-07 IS (HC)",
      price: "33 000",
      img: carouselImg,
    },
    {
      title: "ТЕПЛОВОЙ НАСОС ДЛЯ БАССЕЙНА SILA AM-07 IS (HC)",
      price: "33 000",
      img: carouselImg,
    },
    {
      title: "ТЕПЛОВОЙ НАСОС ДЛЯ БАССЕЙНА SILA AM-07 IS (HC)",
      price: "33 000",
      img: carouselImg,
    },
    {
      title: "ТЕПЛОВОЙ НАСОС ДЛЯ БАССЕЙНА SILA AM-07 IS (HC)",
      price: "33 000",
      img: carouselImg,
    },
    {
      title: "ТЕПЛОВОЙ НАСОС ДЛЯ БАССЕЙНА SILA AM-07 IS (HC)",
      price: "33 000",
      img: carouselImg,
    },
    {
      title: "ТЕПЛОВОЙ НАСОС ДЛЯ БАССЕЙНА SILA AM-07 IS (HC)",
      price: "33 000",
      img: carouselImg,
    },
  ];

  const articles = [
    {
      title: "МАКСИМАЛЬНОЕ КПД И ЭФФЕКТИВНОСТЬ СОЛНЕЧНОГО КОЛЛЕКТОРА",
      img: articlImg,
      desc: "СОЛНЕЧНЫЕ КОЛЛЕКТОРЫ",
      date: "9 апреля 2022",
    },
    {
      title: "МАКСИМАЛЬНОЕ КПД И ЭФФЕКТИВНОСТЬ СОЛНЕЧНОГО КОЛЛЕКТОРА",
      img: articlImg,
      desc: "СОЛНЕЧНЫЕ КОЛЛЕКТОРЫ",
      date: "9 апреля 2022",
    },
    {
      title: "МАКСИМАЛЬНОЕ КПД И ЭФФЕКТИВНОСТЬ СОЛНЕЧНОГО КОЛЛЕКТОРА",
      img: articlImg,
      desc: "СОЛНЕЧНЫЕ КОЛЛЕКТОРЫ",
      date: "9 апреля 2022",
    },
    {
      title: "МАКСИМАЛЬНОЕ КПД И ЭФФЕКТИВНОСТЬ СОЛНЕЧНОГО КОЛЛЕКТОРА",
      img: articlImg,
      desc: "СОЛНЕЧНЫЕ КОЛЛЕКТОРЫ",
      date: "9 апреля 2022",
    },
    {
      title: "МАКСИМАЛЬНОЕ КПД И ЭФФЕКТИВНОСТЬ СОЛНЕЧНОГО КОЛЛЕКТОРА",
      img: articlImg,
      desc: "СОЛНЕЧНЫЕ КОЛЛЕКТОРЫ",
      date: "9 апреля 2022",
    },
  ];

  let [slides, setSlides] = useState([
    {
      about:
        "Геотермальный тепловой SGLA GM-10 S (H)  и горячего водоснабжения...",
      price: "2145 000",
      oldprice: "370 00",
      name: "ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС SILA GM-10 S (H)",
      img: "../../img/slide.png",
      id: 1,
      selected: true,
    },
    {
      about: " Подходит для установки на деревянную/межкомнатную дверь.",
      price: "2245 000",
      oldprice: "370 00",
      name: "ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС SILA GM-10 S (f)",
      img: "../../img/slide.png",
      id: 2,
      selected: false,
    },
    {
      about: "Геотермальный  деревянную/межкомнатную дверь.",
      price: "2345 000",
      oldprice: "370 00",
      name: "ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС SILA GM-10 S (B)",
      img: "../../img/slide.png",
      id: 3,
      selected: false,
    },
  ]);
  return (
    <div className="flex flex-col items-center">
      <div className="lg:mx-24 container">
        <Slider classess={""} slides={slides} setSlides={setSlides} />
        {/* <Splide
          //@ts-ignore
          ref={ref}
          options={{
            rewind: false,
            perPage: 1,
            perMove: 1,
            gap: 20,
            padding: "0rem",
            pagination: false,
            breakpoints: {
              623: {
                perPage: 1,
                perMove: 1,
              },
              935: {
                perPage: 1,
                perMove: 1,
              },
              1247: {
                perPage: 1,
                perMove: 1,
              },
            },
          }}
          onMounted={() => {
            console.log("mounted");
          }}
          onUpdated={() => {
            console.log("updated");
          }}
          onMoved={() => {
            console.log("moved");
          }}
          onVisible={(splide, slide) => {
            console.log("visible", slide.index);
          }}
          className="mt-2 relative"
        >
          {products.length > 0
            ? products.map((item, index) => (
                <SplideSlide
                  key={index}
                  className="w-full block flex justify-center md:flex-row flex-col items-center"
                >
                  <Link
                    to="/product"
                    className="w-96 flex justify-center xl:w-1/3"
                  >
                    <img
                      className="w-96 h-96 hover:opacity-60 xl:w-full xl:h-auto"
                      src={img}
                      alt=""
                    />
                  </Link>
                  <div className="p-2 w-96 ">
                    <Link to="/product">
                      <p className="break-words text-2xl hover:text-orange-400">
                        {item.title}
                      </p>
                    </Link>
                    <p className="my-4 opacity-60">{item.desc}</p>
                    <div className="text-sm opacity-60">Цена</div>
                    <div className="my-4 text-xl">245 000₽</div>
                    <button className="bg-yellow-400 px-4 py-2">
                      Добавить в корзину
                    </button>
                  </div>
                </SplideSlide>
              ))
            : null}
         
        </Splide> */}
        <div className="my-8">
          <div className="break-words text-center lg:text-start text-2xl lg:text-5xl font-light">
            Почему в качестве источника тепла или холода нужно выбрать тепловой
            насос?
          </div>
          <div className="w-full  flex lg:justify-around md:flex-row flex-col items-center">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="w-80 h-40 border-b-2 border-t-2 border-gray flex flex-col items-center m-8 p-4 text-center"
              >
                {item.vector}
                <p className="font-light">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:flex justify-between my-3">
          <div className="flex flex-col">
            <div className="text-3xl font-medium text-center lg:text-start">
              Преимущества
            </div>
            <div className="w-full flex justify-center  block lg:hidden my-3">
              <img className="w-96 h-96" src={advantagesImg} alt="" />
            </div>
            <p className="opacity-70 my-4 break-words lg:max-w-4xl text-lg font-medium">
              Электрический котел забирает столько же энергии, сколько выдает
              тепла. Тепловой насос, наоборот, тратит минимум электроэнергии, а
              тепла производит в три-семь раз больше. Оборудование может
              потратить 5 кВт/ч, однако тепла оно выделяет не менее 17 кВт/ч.
              Высокий КПД — самое привлекательное качество тепловых котлов.
            </p>
            <label className="m-2 lg:mt-12 custom-checkbox">
              <input className="m-1" type="checkbox" checked={true} />
              <span className="text-lg font-medium">
                {" "}
                Возможность установки в любой местности
              </span>
            </label>
            <label className="m-2 custom-checkbox">
              <input className="m-1" type="checkbox" checked={true} />
              <span className="text-lg font-medium">
                {" "}
                Универсальность. Зимой они обеспечивают тепло, летом прохладу
              </span>
            </label>
            <label className="m-2 custom-checkbox">
              <input className="m-1" type="checkbox" checked={true} />
              <span className="text-lg font-medium">
                {" "}
                Безопасность для окружающей среды
              </span>
            </label>
            <label className="m-2 custom-checkbox">
              <input className="m-1" type="checkbox" checked={true} />
              <span className="text-lg font-medium"> Долговечность</span>
            </label>
          </div>
          <div className="p-4 w-5/12   justify-center align-center pattern hidden lg:flex">
            <img className=" hidden lg:block" src={advantagesImg} alt="" />
          </div>
        </div>

        <div className="w-full my-4">
          <div className="w-full text-center text-4xl font-semibold mb-9">
            Категории
          </div>
          <div className="flex justify-between">
            <div className="w-[45rem] p-4 ">
              <img className="w-full" src={category1Img} alt="" />
              <div className="w-full p-2 bg-slate-50">
                <div className="text-base lg:text-xl font-normal">
                  ТЕПЛОВЫЕ НАСОСЫ
                </div>
                <button className="hidden sm:block px-12 py-2  border border-gray-500">
                  Перейти
                </button>
              </div>
            </div>
            <div className="w-[45rem] p-4 ">
              <img className="w-full" src={category2Img} alt="" />
              <div className="w-full p-2 bg-slate-50">
                <div className="text-base lg:text-xl font-normal">
                  СОЛНЕЧНЫЕ КОЛЛЕКТОРЫ
                </div>
                <button className="hidden sm:block px-12 py-2  border border-gray-500">
                  Перейти
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-[45rem] p-4 ">
              <img className="w-full" src={category3Img} alt="" />
              <div className="w-full p-2 bg-slate-50">
                <div className="text-base lg:text-xl font-normal">
                  ПОВЕРХНОСТНОЕ ОТОПЛЕНИЕ
                </div>
                <button className="hidden sm:block px-12 py-2  border border-gray-500">
                  Перейти
                </button>
              </div>
            </div>
            <div className="w-[45rem] p-4 ">
              <img className="w-full" src={category4Img} alt="" />
              <div className="w-full p-2 bg-slate-50">
                <div className="text-base lg:text-xl font-normal">
                  ПОВЕРХНОСТНОЕ ОХЛАЖДЕНИЕ
                </div>
                <button className="hidden sm:block px-12 py-2  border border-gray-500">
                  Перейти
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <button className="bg-orange-400 px-12 py-2 ">Все категории</button>
          </div>
        </div>
        <div className="my-2">
          <div className="text-2xl lg:text-4xl font-semibold  text-center my-9">
            Наши популярные продукты
          </div>
          <Splide
            //@ts-ignore
            ref={ref}
            options={{
              rewind: false,
              perPage: 4,
              perMove: 1,
              gap: 20,
              padding: "3rem",
              pagination: false,
              breakpoints: {
                623: {
                  perPage: 1,
                  perMove: 1,
                },
                935: {
                  perPage: 2,
                  perMove: 1,
                },
                1247: {
                  perPage: 3,
                  perMove: 1,
                },
              },
            }}
            onMounted={() => {
              console.log("mounted");
            }}
            onUpdated={() => {
              console.log("updated");
            }}
            onMoved={() => {
              console.log("moved");
            }}
            onVisible={(splide, slide) => {
              console.log("visible", slide.index);
            }}
            className="mt-2"
          >
            {popular.length > 0
              ? popular.map((item, index) => (
                  <SplideSlide
                    key={index}
                    className="w-72 border border-gray flex flex-col m-1"
                  >
                    <div className="w-full h-96  bg-slate-100">
                      <div className="relative flex justify-between p-2">
                        <div className="flex col-span-2 align-middle gap-2">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect width="20" height="20" fill="white" />
                            <path
                              d="M6 10L9 13L14 7"
                              stroke="#24C56E"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <p>В наличии</p>
                        </div>
                      </div>
                      <Link to="/product">
                        <img
                          className="w-80 h-72 object-contain hover:opacity-60"
                          src={item.img}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="p-2">
                      <Link to="/product">
                        {" "}
                        <span className="break-all hover:text-orange-400 text-slate-600">
                          {item.title}
                        </span>
                      </Link>
                      <div className="w-full flex justify-between items-center">
                        <span className="font-medium">{item.price}</span>
                      </div>
                    </div>
                  </SplideSlide>
                ))
              : null}
          </Splide>
        </div>
        <div className="my-2">
          <span className="text-2xl lg:text-4xl font-semibold m-12">
            Статьи
          </span>
          <Splide
            //@ts-ignore
            ref={ref}
            options={{
              rewind: false,
              perPage: 2,
              perMove: 1,
              gap: 20,
              padding: "3rem",
              pagination: false,
              breakpoints: {
                623: {
                  perPage: 1,
                  perMove: 1,
                },
                935: {
                  perPage: 2,
                  perMove: 1,
                },
                1247: {
                  perPage: 2,
                  perMove: 1,
                },
                1920: {
                  perPage: 3,
                  perMove: 1,
                },
                3000: {
                  perPage: 3,
                  perMove: 1,
                },
              },
            }}
            onMounted={() => {
              console.log("mounted");
            }}
            onUpdated={() => {
              console.log("updated");
            }}
            onMoved={() => {
              console.log("moved");
            }}
            onVisible={(splide, slide) => {
              console.log("visible", slide.index);
            }}
            className="mt-2"
          >
            {articles.length > 0
              ? articles.map((item, index) => (
                  <SplideSlide key={index} className="w-96 bg-slate-100 m-5  ">
                    <Link to="/product">
                      <img
                        className="w-full h-60 hover:opacity-60"
                        src={item.img}
                        alt=""
                      />
                    </Link>
                    <div className="w-full p-2">
                      <div className="w-full text-center">
                        <Link to="/articles/1">
                          <span className="font-bold hover:text-orange-400">
                            {item.title}
                          </span>
                        </Link>
                      </div>
                      <div className="w-full flex justify-between items-center">
                        <div className="flex flex-col">
                          <span className="text-sm text-slate-600">
                            {item.desc}
                          </span>
                          <span className="text-sm text-slate-600">
                            {item.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SplideSlide>
                ))
              : null}
          </Splide>
        </div>
        {/* <PopProd pops={pops} /> */}
        {/* <Articles /> */}
      </div>
      <Consultation />
    </div>
  );
};

export default Home;
