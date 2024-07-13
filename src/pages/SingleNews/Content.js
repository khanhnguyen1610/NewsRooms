import React from "react";
import classNames from "classnames/bind";
import styles from './SingleNews.module.scss'
import HeaderContent from "./HeaderContent/HeaderContent";
import MiddleContent from "./MiddleContent/MiddleConent";
import FooterContent from "./FooterContent/FooterContent";
import Comment from "./Comment/Comment";

const cx = classNames.bind(styles);

function Content({}){
    const item = [
        {
            id: 1,
            title: "Est stet emet ipsum stet clita rebum duo",
            category: "Technology",
            des: "lorem technnogy lorem demo lorem technnogy lorem demo lorem technnogy lorem demo lorem technnogy",
            date: "January 01, 2015",
            img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            text: `Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et.`
        }
    ] 



    return (
        <div className={cx('wrapper-content')}>
            <div className={cx('header-content')}>
                <HeaderContent 
                    key={item[0].id}
                    title={item[0].title}
                    category={item[0].category}
                    des={item[0].des}
                    date={item[0].date}
                    img={item[0].img}
                />
            </div>
            <div className={cx('middle-content')}>
                <MiddleContent
                    title={item[0].title}
                    key={item[0].id}
                    img={item[0].img}
                    text={item[0].text}
                />
            </div>
            <div className={cx('footer-content')}>
                <FooterContent
                    title={item[0].title}
                    key={item[0].id}
                    img={item[0].img}
                    text={item[0].text}
                />
            </div>
        </div>
    );
}

export default Content;