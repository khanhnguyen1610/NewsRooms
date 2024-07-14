import React from "react";
import classNames from "classnames/bind";
import styles from './SingleNews.module.scss'
import HeaderContent from "./HeaderContent/HeaderContent";
import MiddleContent from "./MiddleContent/MiddleConent";
import FooterContent from "./FooterContent/FooterContent";
import { useParams } from "react-router-dom";
import useProductDetail from "../../services/useProductDetail";

const cx = classNames.bind(styles);

function Content(){
    const {id} = useParams()
    
    const { productDetail, loading, error } = useProductDetail(id);

    const item = [
        {
            id: 1,
            title: "Est stet emet ipsum stet clita rebum duo",
            category: "Technology",
            des: "lorem technnogy lorem demo lorem technnogy lorem demo lorem technnogy lorem demo lorem technnogy",
            date: "January 01, 2015",
            image: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            text: `Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et.`
        }
    ]; 

    if (loading) {
        return <div>Loading...</div>;
      }
    
    if (error) {
    return <div>Error: {error}</div>;
    }
    console.log(productDetail);
    const product = productDetail;

    return (
        <div className={cx('wrapper-content')}>
            <div className={cx('header-content')}>
                <HeaderContent 
                    key={productDetail?.id}
                    title={productDetail?.title}
                    category={productDetail?.category}
                    des={productDetail?.des}
                    date={productDetail?.date}
                    img={productDetail?.image}
                />
            </div>
            <div className={cx('middle-content')}>
                <MiddleContent
                    title={productDetail.title}
                    key={productDetail.id}
                    img={productDetail.image}
                    text={productDetail.text}
                />
            </div>
            <div className={cx('footer-content')}>
                <FooterContent
                    title={productDetail.title}
                    key={productDetail.id}
                    img={productDetail.image}
                    text={productDetail.text}
                />
            </div>
        </div>
    );
}

export default Content;