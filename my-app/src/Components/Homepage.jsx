import React, { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import userManageImage from "../utils/images/userManage.png";
import gameManageImage from "../utils/images/gameManage.png";
import voucherManageImage from "../utils/images/voucherManage.png";
import statisticManageImage from "../utils/images/statisticManage.png";
import eventManageImage from "../utils/images/eventManage.png"

import downloadIcon from "../utils/icons/download.png";
import loveIcon from "../utils/icons/love.png";
import userIcon from "../utils/icons/user.png";
import gameIcon from "../utils/icons/game.png";
import starIcon from "../utils/icons/star.png";
import eventIcon from "../utils/icons/party.png"
import voucherIcon from "../utils/icons/voucher.png";
import newIcon from "../utils/icons/new.png";
import profitIcon from "../utils/icons/profit.png";

function Homepage({ setSelected }) {
    const subPageTransition = (selectedIndex) => {
        setSelected(selectedIndex);

        const menuItems = document.querySelectorAll(".menu-item");

        menuItems.forEach((item, index) => {
            if (index === selectedIndex || index === selectedIndex + 5) {
                item.classList.add("selected");
            } else {
                item.classList.remove("selected");
            }
        });
    };

    useEffect(() => {
        subPageTransition(0);
    }, []);

    return (
        <div class="bg-white font-Kanit" data-theme="retro">
            <div class="lg:block hidden h-[664px]">
                <div class="flex w-full p-5">
                    <div class="flex flex-col mr-2 items-center w-2/3">
                        <div class="font-bold sm:text-lg xl:text-xl 2xl:text-2xl text-info mb-5">
                            THÔNG BÁO NGÀY HÔM NAY
                        </div>
                        <div class="stats shadow mb-5 w-full">
                            <div class="stat">
                                <div class="stat-figure text-secondary">
                                    <img src={starIcon} alt="download"></img>
                                </div>
                                <div class="stat-title text-black">Lượt đánh giá</div>
                                <div class="stat-value text-red-400">2.8K</div>
                                <div class="stat-desc">↗︎ 1.2K so với hôm qua (22%)</div>
                            </div>

                            <div class="stat">
                                <div class="stat-figure text-secondary">
                                    <img src={loveIcon} alt="love"></img>
                                </div>
                                <div class="stat-title text-black">Lượt yêu thích</div>
                                <div class="stat-value text-red-400">4.2K</div>
                                <div class="stat-desc">↗︎ 800 so với hôm qua (6%)</div>
                            </div>
                        </div>

                        <div class="stats shadow mb-5 w-full overflow-hidden">
                            <div class="stat">
                                <div class="stat-figure text-secondary">
                                    <img src={eventIcon} alt="download"></img>
                                </div>
                                <div class="stat-title text-black">Tổng sự kiện</div>
                                <div class="stat-value text-red-400">12.6K</div>
                            </div>

                            <div class="stat">
                                <div class="stat-figure text-secondary">
                                    <img src={gameIcon} alt="download"></img>
                                </div>
                                <div class="stat-title text-black">Tổng trò chơi</div>
                                <div class="stat-value text-red-400">2</div>
                            </div>

                            <div class="stat">
                                <div class="stat-figure text-secondary">
                                    <img src={voucherIcon} alt="download"></img>
                                </div>
                                <div class="stat-title text-black">Tổng voucher</div>
                                <div class="stat-value text-red-400">30</div>
                            </div>
                        </div>

                        <div class="stats bg-base-100 text-primary-content w-full xl:h-[200px] 2xl:h-[250px]">
                            <div class="stat">
                                <div class="flex justify-between">
                                    <div>
                                        <div class="stat-title text-black">Người dùng mới</div>
                                        <div class="stat-value text-red-400">5.6K</div>
                                    </div>
                                    <div class="stat-figure text-secondary">
                                        <img src={newIcon} alt="download"></img>
                                    </div>
                                </div>
                                <div class="stat-actions">
                                    <button
                                        class="btn bg-info text-white w-full"
                                        onClick={() => {
                                            subPageTransition(1);
                                        }}
                                    >
                                        Duyệt ngay
                                    </button>
                                </div>
                            </div>

                            <div class="stat">
                                <div class="flex justify-between">
                                    <div>
                                        <div class="stat-title text-black">Tổng doanh thu</div>
                                        <div class="stat-value text-red-400">$15.400K</div>
                                    </div>
                                    <div class="stat-figure text-secondary">
                                        <img src={profitIcon} alt="download"></img>
                                    </div>
                                </div>
                                <div class="stat-actions">
                                    <button
                                        class="btn bg-info text-white w-full"
                                        onClick={() => {
                                            subPageTransition(4);
                                        }}
                                    >
                                        Xem thống kê
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col ml-2 grow items-center">
                        <div class="font-bold sm:text-lg xl:text-xl 2xl:text-2xl text-info mb-5">
                            CÁC TRANG QUẢN LÝ
                        </div>
                        <Carousel
                            pauseOnHover
                            class="w-full h-full"
                            leftControl=" "
                            rightControl=" "
                            indicators="false"
                        >
                            <button
                                onClick={() => {
                                    subPageTransition(1);
                                }}
                            >
                                <img
                                    src={voucherManageImage}
                                    alt="Voucher Management"
                                    className="bg-info-content"
                                />
                            </button>
                            <button
                                onClick={() => {
                                    subPageTransition(2);
                                }}
                            >
                                <img
                                    src={eventManageImage}
                                    alt="Event Management"
                                    className="bg-red-400"
                                />
                            </button>
                            <button
                                onClick={() => {
                                    subPageTransition(3);
                                }}
                            >
                                <img
                                    src={statisticManageImage}
                                    alt="Statistic Management"
                                    className="bg-info-content"
                                />
                            </button>
                        </Carousel>
                    </div>
                </div>
            </div>
            <div class="lg:hidden">
                <div class="flex flex-col p-5">
                    <div class="flex flex-col items-center w-full">
                        <div class="font-bold text-lg sm:text-xl text-info mb-5">
                            THÔNG BÁO NGÀY HÔM NAY
                        </div>
                        <div class="stats shadow mb-5 w-full text-sm">
                            <div class="stat">
                                <div class="stat-title text-black">Lượt đánh giá</div>
                                <div class="stat-value text-red-400">2.8K</div>
                                <div class="stat-desc">↗︎ 1.2K (22%)</div>
                            </div>

                            <div class="stat">
                                <div class="stat-title text-black">Lượt yêu thích</div>
                                <div class="stat-value text-red-400">4.2K</div>
                                <div class="stat-desc">↗︎ 800 (6%)</div>
                            </div>
                        </div>

                        <div class="stats shadow mb-5 w-full text-sm">
                            <div class="stat">
                                <div class="stat-title text-black">Tổng sự kiện</div>
                                <div class="stat-value text-red-400">12.6K</div>
                            </div>

                            <div class="stat">
                                <div class="stat-title text-black">Tổng trò chơi</div>
                                <div class="stat-value text-red-400">2</div>
                            </div>

                            <div class="stat">
                                <div class="stat-title text-black">Tổng voucher</div>
                                <div class="stat-value text-red-400">30</div>
                            </div>
                        </div>

                        <div class="stats bg-base-100 text-primary-content w-full text-sm mb-5">
                            <div class="stat">
                                <div>
                                    <div class="stat-title text-black">Người dùng mới</div>
                                    <div class="stat-value text-red-400">5.6K</div>
                                </div>
                                <div class="stat-actions">
                                    <button
                                        class="btn btn-sm bg-info text-white w-full"
                                        onClick={() => {
                                            subPageTransition(1);
                                        }}
                                    >
                                        Duyệt ngay
                                    </button>
                                </div>
                            </div>

                            <div class="stat">
                                <div>
                                    <div class="stat-title text-black">Tổng doanh thu</div>
                                    <div class="stat-value text-red-400">$15.400K</div>
                                </div>
                                <div class="stat-actions">
                                    <button
                                        class="btn btn-sm bg-info text-white w-full"
                                        onClick={() => {
                                            subPageTransition(4);
                                        }}
                                    >
                                        Xem thống kê
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <div class="font-bold text-xl sm:text-2xl text-info mb-5 sm:mb-0">
                            CÁC TRANG QUẢN LÝ
                        </div>
                        <Carousel
                            pauseOnHover
                            class="w-full h-[450px] sm:w-1/2"
                            leftControl=" "
                            rightControl=" "
                            indicators={false}
                        >
                            <button
                                onClick={() => {
                                    subPageTransition(1);
                                }}
                            >
                                <img
                                    src={voucherManageImage}
                                    alt="Voucher Management"
                                    className="bg-info-content"
                                />
                            </button>
                            <button
                                onClick={() => {
                                    subPageTransition(2);
                                }}
                            >
                                <img
                                    src={eventManageImage}
                                    alt="Event Management"
                                    className="bg-red-400"
                                />
                            </button>
                            <button
                                onClick={() => {
                                    subPageTransition(3);
                                }}
                            >
                                <img
                                    src={statisticManageImage}
                                    alt="Statistic Management"
                                    className="bg-info-content h-full"
                                />
                            </button>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
