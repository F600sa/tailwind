import { MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import Button from "src/components/user/Button";
import { Iimages } from "src/core/statics/home_statics";

function Home() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center  items-center pt-[86px] ">
      <h1 className="text-[40px] font-title "> {t("home.page.your")}</h1>
      <div className=" flex flex-row gap-[16px]">
        <Button
          text={t("home.page.advertisement")}
          color={"bg-white border border-darkBlue"}
          onClick={() => {}}
        />
        <Button
          text={t("home.page.content")}
          color={
            "bg-gradient-to-r from-lightBlue to-darkBlue text-white border border-darkBlue"
          }
          onClick={() => {}}
        />
      </div>
      <div className="grid grid-cols-3 gap-[32px] pt-[96px] text-whiteColor text-[32px] font-title sm:grid-cols-1">
        {Iimages.map((item, index) => {
          return (
            <div
              className={`${item.image} bg-no-repeat flex bg-cover justify-center items-center rounded-lg w-[350px] h-[180px]`}
              key={index}
            >
              {t(item.title)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
