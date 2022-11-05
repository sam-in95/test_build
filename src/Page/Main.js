import React, { useState } from "react";

import BannerStar from "../Components/BannerStar";
import DoorSVG from "../Components/DoorSVG";
import SectionTitle from "../UI/SectionTitle";
import Categori from "../Components/Categori";
import Pofol from "../Components/Pofol";
import ResumeSubTitle from "../UI/ResumeSubTitle";

import "../fonts/fonts.css";
import classes from "./Main.module.css";

const Main = (props) => {
  const [pofol, setPofol] = useState([
    { text: "1번 UI/UX", id: "1", type: "UIUX" },
    { text: "2번 UI/UX", id: "2", type: "UIUX" },
    { text: "3번 WEB", id: "3", type: "WEB" },
    { text: "4번 ETC", id: "4", type: "ETC" },
  ]);

  const [selectCate, setSelectCate] = useState(" ");

  let categoriSelect = (value) => {
    setSelectCate(value);
  };

  const filterPofol = pofol.filter((type) => {
    if (selectCate === " ") {
      return pofol;
    } else {
      return type.type === selectCate;
    }
  });

  return (
    <div className={classes.wrap}>
      <section className={classes.banner}>
        <p className={classes.title} data-cursor="name" data-name="name">
          SAM - IN
        </p>

        <DoorSVG />

        <BannerStar />

        <div className={classes.scroll_mouse}>
          <div className={classes.mouse}></div>
          <div className={classes.scroll}></div>
        </div>
      </section>

      <div className={classes.dummy}></div>

      <section className={classes.hello}>
        <p className={classes.hello_1}>HELLO</p>
        <p className={classes.hello_2}>안녕하세요</p>
        <p className={classes.hello_3}>포트폴리오에 방문해주신 여러분</p>
        <p className={classes.hello_4}>환영합니다.</p>
      </section>

      <div className={classes.dummy}></div>

      <section className={classes.wrap}>
        <SectionTitle title="WORK" />

        <Categori filter={categoriSelect} />

        <Pofol
          items={filterPofol}
          nowCate={selectCate}
          cursorData={(e) => {
            props.cursorData(e);
          }}
        />
      </section>

      <section className={classes.resume_section}>
        <SectionTitle title="RESUME" />
        <div className={classes.resume_wrap}>
          <div className={classes.pic_intro}>
            <div className={classes.pic}></div>
            <div className={classes.intro}>
              <p className={classes.intro_hello}>
                안녕하세요, 0000 박세민입니다.
              </p>
              <p className={classes.intro_text}>
                안녕하세요. 박세민입니다. 안녕하세요. 박세민입니다. 안녕하세요.
                <br />
                박세민입니다. 안녕하세요. 박세민입니다. 안녕하세요.
                박세민입니다.
                <br />
                안녕하세요. 박세민입니다. 안녕하세요. 박세민입니다.
              </p>
            </div>
          </div>

          <div className={classes.resume_info}>
            <div className={classes.resume_box}>
              <ResumeSubTitle subTitle="CONTACT" />
              <p className={classes.resume_text}>010 1234 5678</p>
              <p className={classes.resume_text}>parksemin@gamil.com</p>
            </div>
            <div className={classes.resume_box}>
              <ResumeSubTitle subTitle="EDUCATION" />
              <p className={classes.resume_text}>
                2023.02 한국폴리텍대학교 시각디자인과 졸업
              </p>
            </div>
            <div className={classes.resume_box}>
              <ResumeSubTitle subTitle="CERTIFICATION" />
              <p className={classes.resume_text}>
                2022.06. 시각디자인 산업기사
              </p>
              <p className={classes.resume_text}>2019.07. 웹디자인 기능사</p>
              <p className={classes.resume_text}>
                2019.02. 컴퓨터그래픽스 운용기능사
              </p>
            </div>
            <div className={classes.resume_box}>
              <ResumeSubTitle subTitle="TOOL" />
            </div>
            <div className={classes.resume_box}>
              <ResumeSubTitle subTitle="SKILL" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
