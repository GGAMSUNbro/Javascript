// _id: "62e913e9f9efad001d8f473e",
// gymName: "을지로 펄스핏 피트니스",
// gymPhotoBig: null,
// gymPhotoSmall:
//   "https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/gyms/1825e75c7082a576a4/4K8gHYEb5rWJtJKJpHwCnL8V5xTn6yNPKGD5LcYzAx9E.jpg",
// address: "서울 중구 을지로1가",
// location: [126.97951563415681, 37.5657386554874],
// isWomenOnly: false,
// isReservationRequired: false,
// hasDailyItem: true,
// isLiked: null,
// isLowestPrice: false,
// exhibitionRemainingCount: null,
// tags: ["헬스", "P.T"],
// program: {
//   free: "",
// },
// service: {
//   free: "유료주차 가능",
// },
// price: {
//   name: "헬스 회원권",
//   count: null,
//   isLowestPrice: false,
//   lowestPrice: 396000,
//   originalPrice: 396000,
//   period: 12,
//   priceType: "period",
//   itemTags: ["헬스"],
//   lowestPriceRemainingCount: null,
// },
// review: {
//   rate: 4.93,
//   count: 29,
// },
// videoUrl: null,
// videoThumbnailUrl: null,
// },

import { data } from "./data.js";

const container = document.createElement("div");

data.forEach(
  ({ gymPhotoSmall, tags, gymName, review, hasDailyItem, address, price }) => {
    const box = `
    <div class="container">
      <div class="imagebox">
        <div class="gymPhotoSmall">
          <img
            src="${gymPhotoSmall}"
            alt=""
          />
        </div>
      </div>
      <div class="inform">
        <div class="tags">${tags}</div>
        <div class="gymName">${gymName}</div>
        <div class="review"> <img src="i class="fa-solid fa-star></i>" alt="">${review} ${address}</div>
        <div class="hasDailyItem">${hasDailyItem}</div>
       </div>
      <div class="price">${price}</div>
    </div>
    `;
    container.insertAdjacentHTML("beforeend", box);
  }
);
document.body.appendChild(container);
