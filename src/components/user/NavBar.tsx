import { t } from "i18next";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { appRoutesObj } from "src/app.paths";
import i18n from "src/core/configs/i18n";
import { AiOutlineCloseCircle } from "@react-icons/all-files/ai/AiOutlineCloseCircle";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";

function NavBar() {
  interface IRoutes {
    routeTitle: string;
    pageRoute: string;
  }
  const routes: IRoutes[] = [
    {
      routeTitle: "nav.bar.home.page",
      pageRoute: appRoutesObj.getBasePath(),
    },
    {
      routeTitle: "nav.bar.contact.us",
      pageRoute: appRoutesObj.getContactUsPagePath(),
    },
    {
      routeTitle: "nav.bar.about.us",
      pageRoute: appRoutesObj.getAboutUsPagePath(),
    },
  ];
  const changeLanguage = () => {
    if (i18n.language === "ar") {
      i18n.changeLanguage("en");
      localStorage.setItem("language", "en");
    } else {
      i18n.changeLanguage("ar");
      localStorage.setItem("language", "ar");
    }
  };
  const [open, setOpen] = useState<Boolean>(false);

  return (
    <div className=" container mx-auto flex justify-center sm:justify-start sm:pt-0 pt-[85px]">
      <div
        className={` flex  h-[72px] w-[1120px] container bg-gradient-to-r from-lightBlue to-darkBlue rounded-[8px] sm:rounded-none  items-center justify-between sm:justify-start sm:items-start sm:gap-[50px] px-[16px] sm:pt-[57px] sm:fixed z-20 sm:flex-col  sm:h-screen sm:w-1/2 ${
          open ? "" : "sm:hidden"
        }`}
      >
        <div className="flex justify-end items-end w-full 2xl:hidden xl:hidden lg:hidden md:hidden ">
          <AiOutlineCloseCircle
            onClick={() => setOpen(false)}
            className="text-[30px] text-whiteColor"
          />
        </div>
        <div className="flex justify-center items-center gap-[57px] sm:flex-col">
          <div className="">
            <img src="/assets/images/Group 48095593.png" alt="" />
          </div>
          <div className="flex gap-[29px] font-subTitle sm:flex-col">
            {routes.map((item, index) => {
              return (
                <NavLink
                  to={item.pageRoute}
                  key={index}
                  className={({ isActive }) =>
                    isActive ? "text-orange" : "text-white"
                  }
                >
                  <h3>{t(item.routeTitle)}</h3>
                </NavLink>
              );
            })}
          </div>
        </div>
        <div
          onClick={() => {
            changeLanguage();
          }}
          className="flex items-center  justify-center  h-[32px] w-[108px] text-orange bg-whiteColor rounded-[8px] "
        >
          {t("home.page.English")}
        </div>
      </div>
      {open ? (
        <div></div>
      ) : (
        <GiHamburgerMenu
          onClick={() => setOpen(true)}
          className="text-[30px] text-black 2xl:hidden xl:hidden lg:hidden md:hidden"
        />
      )}
    </div>
  );
}

export default NavBar;
