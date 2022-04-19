import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

import calendar from "../../assets/icons/calendar.svg";
import mapMarker from "../../assets/icons/map-marker.svg";
import cancel from "../../assets/icons/cancel.svg";
import triangle from "../../assets/icons/triangle.svg";
import ticket from "../../assets/icons/ticket.svg";
import main from "../../assets/icons/main.png";
import stat1 from "../../assets/icons/stat1.png";
import stat2 from "../../assets/icons/stat2.png";
import ellips1 from "../../assets/icons/ellips1.png";
import ellips2 from "../../assets/icons/ellips2.png";
import shadow from "../../assets/icons/shadow.png";
import spiker from "../../assets/icons/spiker.jpg";
import spiker1 from "../../assets/icons/spiker1.jpg";
import spiker2 from "../../assets/icons/spiker2.jpg";
import spiker3 from "../../assets/icons/spiker3.jpg";
import spiker4 from "../../assets/icons/spiker4.jpg";
import spiker5 from "../../assets/icons/spiker5.jpg";
import spiker6 from "../../assets/icons/spiker6.jpg";
import spiker7 from "../../assets/icons/spiker7.jpg";
import company from "../../assets/icons/company.svg";
import build from "../../assets/icons/build.png";
import alhadya from "../../assets/icons/alhadaya.png";
import dekos from "../../assets/icons/dekos.svg";
import deli from "../../assets/icons/deli.svg";
import education from "../../assets/icons/eduaction.jpg";
import logo3 from "../../assets/icons/logo3.png";
import pcg from "../../assets/icons/pcg.png";
import blobs from "../../assets/icons/blobs.png";
import blobs2 from "../../assets/icons/blobs2.png";
import partner1 from "../../assets/icons/partner1.png";
import partner2 from "../../assets/icons/partner2.png";
import unical from "../../assets/icons/unical.png";
import regprint from "../../assets/icons/regprint.png";
import oson_sot from "../../assets/icons/oson_sot.png";
import registon_logo from "../../assets/icons/registon_logo.png";
import it_school from "../../assets/icons/it_school.png";
import regbooks from "../../assets/icons/regbooks.png";
import phone from "../../assets/icons/phone.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import youtube from "../../assets/icons/youtube.svg";
import { ModalStyle, ModalStylePayment } from "./Home.style";

const Home = () => {
  const [show, setShow] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [minut, setMinut] = useState();
  const [secund, setSecund] = useState();
  const [person, setPerson] = useState([
    {
      id: 1,
      job: "Бизнесмен",
      price: 0,
      defaultPrice: 40,
      count: 0,
    },
    {
      id: 2,
      job: "Сотрудник",
      price: 0,
      defaultPrice: 40,
      count: 0,
    },
    {
      id: 3,
      job: "менеджер",
      price: 0,
      defaultPrice: 80,
      count: 0,
    },
    {
      id: 4,
      job: " Предприниматель ",
      price: 0,
      defaultPrice: 200,
      count: 0,
    },
  ]);

  const changeBtn = (e, id) => {
    let a = person?.map((item, index) => {
      if (item.id === id) {
        return {
          ...item,
          count:
            e === "inc" && item.count > 0
              ? item.count - 1
              : e === "dec"
              ? item.count + 1
              : 0,
          price:
            (e === "inc" && item.count > 0
              ? item.count - 1
              : e === "dec"
              ? item.count + 1
              : 0) * item.defaultPrice,
        };
      } else {
        return item;
      }
    });
    setPerson(a);
  };

  function totalPrice() {
    let sumWithInitial = person.reduce(
      (previousValue, currentValue) => previousValue + currentValue.price,
      0
    );

    return sumWithInitial + "$";
  }

  const handleClose = () => setShow(false);
  const handleOpen = (e) => {
    e.preventDefault();
    setShow(true);
  };
  const handleClosePayment = () => setShowPayment(false);
  const handleOpenPayment = (e) => {
    e.preventDefault();
    setShowPayment(true);
    setShow(false);
  };
  useEffect(() => {
    setInterval(async () => {
      var dedline = new Date(2022, 4, 10);
      var now = Date.now();
      var dif = (await dedline) - now;
      var difSec = await Math.floor(dif / 1000);
      var difMin = await Math.floor(difSec / 60);
      var difHour = await Math.floor(difMin / 60);
      var difDay = await Math.floor(difHour / 24);
      setDay(difDay < 10 ? "0" + difDay : difDay);
      setHour(
        difHour - difDay * 24 < 10
          ? "0" + (difHour - difDay * 24)
          : difHour - difDay * 24
      );

      setMinut(
        difMin - difHour * 60 < 10
          ? "0" + (difMin - difHour * 60)
          : difMin - difHour * 60
      );
      setSecund(
        difSec - difMin * 60 < 10
          ? "0" + (difSec - difMin * 60)
          : difSec - difMin * 60
      );
    }, 1000);
  }, [secund]);
  return (
    <div className="home">
      <header>
        <nav className="navbar">
          <div className="container">
            <div className="navbar-nav">
              <div className="logo">
                МЕГАТРЕНИНГ <span>22</span>
              </div>
              <div className="navbar-place">
                <img src={calendar} alt="" />
                <p id="thatday">1-2 июня</p>

                <img src={mapMarker} alt="" />
                <a
                  href="https://www.google.com/maps/place/HUMO+ARENA/@41.3077545,69.2499196,17z/data=!3m1!4b1!4m5!3m4!1s0x38ae8bd9a67ffba7:0x1d44d4e8afe5d8aa!8m2!3d41.3077545!4d69.2521083"
                  target="_blank"
                >
                  <p id="locate">Humo Arena, Ташкент</p>
                </a>
              </div>
            </div>
            <form className="navbar-form">
              <div className="fixedbtn">
                <button
                  className="button blue shine"
                  id="buyTicket"
                  onClick={handleOpen}
                >
                  Купить билет
                </button>
              </div>
            </form>
          </div>
          <div className="navbar-place-none">
            <div>
              <img src={calendar} alt="" />
              <p id="thatDay">1-2 июня</p>
            </div>

            <div>
              <img src={mapMarker} alt="" />
              <p id="location">Humo Arena, Ташкент</p>
            </div>
          </div>
        </nav>

        <main className="main">
          <div className="container">
            <div className="main-info">
              <h1>
                МЕГАТРЕНИНГ 20<span>22</span>
              </h1>
              <p id="mainText">
                Впервые в Узбекистане, самый масштабный международный{" "}
                <span>бизнес форму по рекламе</span> , продажам и систематизации
                бизнеса.
              </p>
              <button id="bronbtn" onClick={handleOpen}>
                Забронировать место
              </button>
            </div>

            <div className="main-card">
              <div className="ticket">
                <img src={ticket} alt="ticket" />
              </div>
              <div className="info">
                <h4 id="aksiyaLineOne">Акция: 2 билета</h4>
                <h4 id="aksiyaLineTwo">
                  <span>по цене 1-го</span>
                </h4>
                <h4 id="aksiyaLineThree">только до 10 мая</h4>
              </div>
              <div className="time">
                <p id="endAksiya">До конца акции осталось :</p>

                <div className="get-time">
                  <div className="day">
                    <h2 id="day">{day}</h2>
                    <p id="dayAksiya">дней</p>
                  </div>
                  <span>:</span>
                  <div className="hour">
                    <h2 id="hour">{hour}</h2>
                    <p id="hourAksiya">часов</p>
                  </div>
                  <span>:</span>
                  <div className="minut">
                    <h2 id="min">{minut}</h2>
                    <p id="minAksiya">минут</p>
                  </div>
                  <span>:</span>
                  <div className="secund">
                    <h2 id="sec">{secund}</h2>
                    <p id="secAksiya">секунд</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </header>
      <section className="section">
        <div className="container">
          <div className="section-left">
            <img src={main} alt="mainimg" />
            <div className="border"></div>
          </div>

          <div className="section-right">
            <h1 id="megaTrening">
              ДОБРО ПОЖАЛОВАТЬ В <span> МЕГАТРЕНИНГ 2022</span>
            </h1>
            <p id="bussiness">
              Международный бизнес форум который объединяет бизнесменов,
              топ-менеджеров и управленцев
            </p>
          </div>
        </div>
      </section>
      <div className="statistic">
        <img src={stat1} alt="stat1" className="stat1" />
        <img src={stat2} alt="stat2" className="stat2" />
        <img src={ellips1} alt="ellips1" className="ellips1" />
        <img src={ellips2} alt="ellips2" className="ellips2" />
        <div className="container">
          <div className="cards">
            <div className="card">
              <h2 className="card-number">10000+</h2>
              <p id="bussinessman">предпринимателей и топ-менеджеров</p>
            </div>
            <div className="card">
              <h2 className="card-number">12 та</h2>
              <p id="speaker">международных спикеров</p>
            </div>
            <div className="card">
              <h2 className="card-number">2 кун</h2>
              <p id="tools">
                дня инструменты предназначенные только для развития бизнеса
              </p>
            </div>
          </div>
          <form>
            <button id="buyTicketTwo" type="button" onClick={handleOpen}>
              Купить билет
            </button>
          </form>
        </div>
      </div>
      <div className="spiker">
        <div className="container">
          <div className="spiker-info">
            <h1 id="international">
              12 международных и местных<span>спикеров</span>
            </h1>
          </div>
          <div className="spikers">
            <div className="spikers-item">
              <div className="profil">
                <h3>Шамиль Аляутдинов</h3>
                <img src={shadow} alt="" className="shadow" />
                <img src={spiker} alt="portret" />
              </div>
              <div className="logo">
                <img
                  style={{ filter: "brightness(0) invert(1)" }}
                  src={company}
                  alt="company"
                />
              </div>
            </div>

            <div className="spikers-item">
              <div className="profil">
                <h3>Мурод Назаров</h3>
                <img src={shadow} alt="" className="shadow" />
                <img src={spiker3} alt="portret" />
              </div>
              <div className="logo">
                <img src={build} alt="build" />
              </div>
            </div>

            <div className="spikers-item">
              <div className="profil">
                <h3>Абдухамид Абдувахобов</h3>
                <img src={shadow} alt="" className="shadow" />
                <img src={spiker6} alt="portret" />
              </div>
              <div className="logo">
                <img
                  style={{ height: "100%", width: "auto" }}
                  src={alhadya}
                  alt="alhadaya"
                />
              </div>
            </div>

            <div className="spikers-item">
              <div className="profil">
                <h3>Хасан Мамасаидов</h3>
                <img src={shadow} alt="" className="shadow" />
                <img src={spiker5} alt="portret" />
              </div>
              <div className="logo">
                <img
                  style={{
                    filter:
                      "invert(16%) sepia(57%) saturate(7084%) hue-rotate(357deg) brightness(98%) contrast(117%)",
                  }}
                  src={dekos}
                  alt="build"
                />
              </div>
            </div>

            <div className="spikers-item">
              <div className="profil">
                <h3>Хусан Мамасаидов</h3>
                <img src={shadow} alt="" className="shadow" />
                <img src={spiker4} alt="portret" />
              </div>
              <div className="logo">
                <img
                  style={{ filter: "brightness(0) invert(1)", height: "100%" }}
                  src={deli}
                  alt="build"
                />
              </div>
            </div>

            <div className="spikers-item">
              <div className="profil">
                <h3>Умиджон Ишмухаммедов</h3>
                <img src={shadow} alt="" className="shadow" />
                <img src={spiker1} alt="portret" />
              </div>
              <div className="logo">
                <img src={education} alt="company" />
              </div>
            </div>

            <div className="spikers-item">
              <div className="profil">
                <h3>Алишер Исаев</h3>
                <img src={shadow} alt="" className="shadow" />
                <img src={spiker2} alt="portret" />
              </div>
              <div className="logo">
                <img src={logo3} alt="" />
              </div>
            </div>

            <div className="spikers-item">
              <div className="profil">
                <h3>Ибрахим Гулямов</h3>
                <img src={shadow} alt="" className="shadow" />
                <img src={spiker7} alt="portret" />
              </div>
              <div className="logo">
                <img src={pcg} alt="" />
              </div>
            </div>

            <div className="spikers-item"></div>
          </div>

          <div className="spiker-bottom">
            <h2 id="forForum">Хотите предложить бизнес спикера ?</h2>
            <p id="auditoria">
              Мы всегда готовы рассмотреть пожелания нашей аудитории.
            </p>
            <button type="button" id="inviteSpiker">
              Предложить спикера
            </button>
          </div>
        </div>
      </div>
      <div className="event">
        <img src={ellips1} alt="ellips1" className="ellips1" />
        <img src={ellips2} alt="ellips2" className="ellips2" />
        <div className="container">
          <h1 id="event">
            <span>2 дневное</span> НЕЗАБЫВАЕМОЕ мероприятие
          </h1>
          <div className="cards">
            <div className="card">
              <h2 id="experince" className="card-number">
                Опыт
              </h2>
              <p id="doExperience">
                Только практические инструменты которые дают реальные результаты
              </p>
            </div>
            <div className="card">
              <h2 className="card-number">Мотивация</h2>
              <p id="max">
                Вы получите максимальную мотивацию которая двинет Вас ещё выше
                по олимпу бизнеса
              </p>
            </div>
            <div className="card">
              <h2 className="card-number">Энергия</h2>
              <p id="everySpeaker">
                Каждый бизнес спикер даст Вам энергию которая даст возможность
                добиться лучших результатов
              </p>
            </div>
          </div>
          <form>
            <button id="buyTicketThree" type="button" onClick={handleOpen}>
              Купить билет
            </button>
          </form>
        </div>
      </div>
      <div className="trend">
        <img src={blobs} alt="blobs" className="element1" />
        <img src={blobs2} alt="blobs" className="element2" />
        <div className="container">
          <h1 id="trend">
            Узнайте первыми о мировых бизнес<span>трендах 2022-2023 гг</span>
          </h1>
          <p id="worldChange">
            Будьте готовы к мировым изменениям порядки и обгоните своих
            конкурентов
          </p>
          <div className="trend-part">
            <div className="trend-left">
              <ul>
                <li>
                  <span></span> Реклама
                </li>
                <li>
                  <span></span>
                  <div id="sale">Продажа</div>
                </li>
                <li>
                  <span></span>
                  <div id="system">Систематизация</div>
                </li>
                <li>
                  <span></span>
                  <div id="automat">Aвтоматизация</div>
                </li>
              </ul>
            </div>
            <div className="trend-right">
              <ul>
                <li>
                  <span></span>
                  <div id="financial">Финансы</div>
                </li>
                <li>
                  <span></span>
                  <div id="management">
                    {" "}
                    <div id="management">Управления</div>
                  </div>
                </li>
                <li>
                  <span></span> Стратегия
                </li>
                <li>
                  <span></span> HR
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="partner">
        <img src={partner1} alt="ellips1" className="ellips1" />
        <img src={partner2} alt="ellips2" className="ellips2" />
        <div className="container">
          <h1 id="sponpart">СПОНСОРЫ И ПАРТНЕРЫ</h1>
          <div className="sponsor">
            <h2 id="mainSponsor">Главный спонсор</h2>
            <div className="wrapper">
              <div id="sponsor">1</div>
            </div>

            <h2 id="formalSponsor">Официальный спонсор</h2>
            <div className="wrapper">
              <div id="sponsor">2</div>
              <div id="sponsor">3</div>
            </div>

            <h2 id="mediaPartner">Мадиапартнер</h2>
            <div className="wrapper">
              <div id="sponsor">4</div>
              <div id="sponsor">5</div>
              <div id="sponsor">6</div>
            </div>

            <h2 id="partner">Партнеры</h2>
            <div className="wrapper">
              <div id="sponsor" style={{ padding: "5px" }}>
                <img src={unical} style={{ width: "80%" }} alt="" />
              </div>
              <div id="sponsor" style={{ padding: "5px" }}>
                <img src={regprint} style={{ width: "100%" }} alt="" />
              </div>
              <div id="sponsor" style={{ padding: "5px" }}>
                <img src={oson_sot} style={{ width: "100%" }} alt="" />
              </div>
              <div id="sponsor" style={{ padding: "5px" }}>
                <img src={registon_logo} style={{ width: "100%" }} alt="" />
              </div>
              <div id="sponsor" style={{ padding: "5px" }}>
                <img src={it_school} style={{ width: "100%" }} alt="" />
              </div>
              <div id="sponsor" style={{ padding: "5px" }}>
                <img src={regbooks} style={{ width: "100%" }} alt="" />
              </div>
            </div>
          </div>
          <button id="bePartner" type="button">
            Стать партенром
          </button>
        </div>
      </div>
      <div className="price">
        <div className="container">
          <h1 id="priceTicket">Цены билетов</h1>
          <div className="cards">
            <div className="card">
              <div id="staff" className="card-header">
                Сотрудник
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    <span></span>
                    <p id="twoDay">2 дня</p>
                  </li>
                  <li>
                    <span></span>
                    <p id="twoFloor">2 этаж</p>
                  </li>
                </ul>
              </div>
              <div className="card-footer">40$</div>
            </div>
            <div className="card">
              <div id="manager" className="card-header">
                Управленец
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    <span></span>
                    <p id="twoday">2 дня</p>
                  </li>
                  <li>
                    <span></span>
                    <p id="oneFloor">1- этаж</p>
                  </li>
                  <li>
                    <span></span>
                    <p id="material">Рaздаточные материаллы</p>
                  </li>
                </ul>
              </div>
              <div className="card-footer">80$</div>
            </div>
            <div className="card">
              <div id="biznesmen" className="card-header">
                Предприниматель
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    <span></span>
                    <p id="twodays">2 дня</p>
                  </li>
                  <li>
                    <span></span>
                    <p id="scenes">2-10 ряды вокруг сцены</p>
                  </li>
                  <li>
                    <span></span>
                    <p id="materials">Рaздаточные материаллы</p>
                  </li>
                </ul>
              </div>
              <div className="card-footer">200$</div>
            </div>

            <div className="card">
              <div className="card-header">Бизнесмен</div>
              <div className="card-body">
                <ul>
                  <li>
                    <span></span>
                    <p id="twoDays">2 дня</p>
                  </li>
                  <li>
                    <span></span>
                    <p id="scene">1 ряды вокруг сцены</p>
                  </li>
                  <li>
                    <span></span>
                    <p id="materialt">Рaздаточные материаллы</p>
                  </li>
                  <li>
                    <span></span>
                    <p id="banket">Банкет после мероприятие</p>
                  </li>
                </ul>
              </div>
              <div className="card-footer">400$</div>
            </div>
          </div>
          <button id="cheapTicket" onClick={handleOpen} s>
            2 билета по цене 1 го
          </button>
        </div>
      </div>
      <div className="map">
        <iframe
          height="600"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11988.203930759972!2d69.2521083!3d41.3077545!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1d44d4e8afe5d8aa!2z0KXRg9C80L4g0JDRgNC10L3QsA!5e0!3m2!1sru!2s!4v1647633394486!5m2!1sru!2s"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <div className="wrapper">
          <div className="border"></div>
          <div className="card">
            <p id="where">Где будет проходить?</p>
            <div className="date">
              <div>
                <img src={calendar} alt="" />
                <p id="thatDays">1-2 июня</p>
              </div>
              <div>
                <img src={mapMarker} alt="" />
                <p id="locations">Humo Arena, Ташкент</p>
              </div>
            </div>
            <p id="question">По вопрсам обращаться по номеру</p>
            <a href="tel:+998781222222">
              <p>
                <img src={phone} alt="" />
                +998-78-1-222-222
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="top-footer">
        <img src={stat1} alt="stat1" className="stat1" />
        <img src={stat2} alt="stat2" className="stat2" />
        <img src={ellips1} alt="ellips1" className="ellips1" />
        <img src={ellips2} alt="ellips2" className="ellips2" />
        <div className="container">
          <h1 id="join">
            <span>Учуавствуйте в акции</span> 2 билета по цене 1 го
          </h1>
          <button type="button" id="cheapTicketTwo" onClick={handleOpen}>
            2 билета по цене 1 го
          </button>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="footer-part">
            <div className="part1">
              <div className="logo">
                МЕГАТРЕНИНГ <span>22</span>
              </div>
              <p>ООО “PERFECTMALL INTERNATIONAL”</p>
              <div className="media">
                <a href="">
                  <img src={facebook} alt="" />
                </a>
                <a href="">
                  <img src={instagram} alt="" />
                </a>
                <a href="">
                  <img src={youtube} alt="" />
                </a>
              </div>
            </div>
            <div className="part2">
              <h3>ООО “PERFECTMALL INTERNATIONAL</h3>
              <div className="links">
                <div className="link">
                  <p>
                    <a id="footMain" href="#">
                      Главный
                    </a>
                  </p>
                  <p>
                    <a id="footSpeaker" href="#">
                      Спикеры
                    </a>
                  </p>
                </div>
                <div className="link2">
                  <p>
                    <a id="footPartner" href="#">
                      Стать партнером
                    </a>
                  </p>
                  <p>
                    <a id="footInvite" href="#">
                      Предложить спикера
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="part3">
              <h3 id="link">СВЯЗАТЬСЯ</h3>
              <a href="tel:+998781222222">
                <p>+998-78-1-222-222</p>
              </a>
            </div>
          </div>
          <hr />
          <p>© Мегатренинг. Все права защищены.</p>
        </div>
      </footer>
      <ModalStyle show={show} onHide={handleClose} centered={true}>
        <Modal.Body>
          <div className="form" id="form">
            <div className="">
              <div className="" id="modal">
                <div className="cancel">
                  <div onClick={handleClose}>
                    <img src={cancel} id="cancel" alt="cancel" />
                  </div>
                </div>
                <h1>Заполните форму</h1>
                <form>
                  <div className="name">
                    <label htmlFor="">Имя</label>
                    <input type="text " placeholder="Ваше имя" />
                  </div>
                  <div className="tel">
                    <label htmlFor="">Телефонный номер</label>
                    <input type="text" placeholder="+" />
                  </div>
                  <div className="type">
                    <img src={triangle} alt="tringle" />
                    <label htmlFor="">Тип активности</label>
                    <div id="custom-select">
                      <select id="select">
                        <option value="0">Выбирать</option>
                        <option value="1">Предприниматель</option>
                        <option value="2">Сотрудник</option>
                        <option value="3">Управленец</option>
                      </select>
                    </div>
                  </div>
                  <button id="pay" onClick={handleOpenPayment}>
                    Забронировать место
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </ModalStyle>
      <ModalStylePayment
        show={showPayment}
        onHide={handleClosePayment}
        centered={true}
      >
        <Modal.Body>
          <div className="payment" id="payment">
            <div className="wrapper">
              <div className="display"></div>

              <div>
                <div id="biznes">
                  {person?.map((item, index) => {
                    return (
                      <div className="bussiness" key={index.toString()}>
                        <h1>{item.job}</h1>
                        <div className="example">
                          <div className="counter">
                            <button onClick={() => changeBtn("inc", item.id)}>
                              -
                            </button>
                            <span id={item.id}>{item.count}</span>
                            <button onClick={() => changeBtn("dec", item.id)}>
                              +
                            </button>
                          </div>
                          <div className="result" id={`result${item.id}`}>
                            {!item.price ? "0 $" : item.price + "$"}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <hr />
              <div className="final">
                <h1>Предприниматель</h1>
                <div className="res">{totalPrice()}</div>
              </div>

              <button id="lastbtn" type="button">
                Оплатите
              </button>
            </div>
          </div>
        </Modal.Body>
      </ModalStylePayment>
    </div>
  );
};

export default Home;
